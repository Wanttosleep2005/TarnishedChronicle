import { net } from 'electron';
import type { LlmModelsResult, LlmRequest, LlmResult, LlmSettings } from '../shared/contracts';

// 走 Chromium 网络栈(net.fetch)以跟随系统代理——Anthropic/OpenAI/Gemini 在部分网络需代理;
// 本地地址(Ollama)绕过代理走 Node fetch,避免代理软件拦截 127.0.0.1。
function pickFetch(url: string): typeof fetch {
  if (/(^|\/\/)(localhost|127\.0\.0\.1|0\.0\.0\.0)/i.test(url)) return fetch;
  return net.fetch.bind(net) as typeof fetch;
}

const TIMEOUT_MS = 300_000;

type ChunkHandler = (text: string) => void;

export async function llmGenerate(
  settings: LlmSettings,
  request: LlmRequest,
  onChunk?: ChunkHandler,
): Promise<LlmResult> {
  const isLocal = /(^|\/\/)(localhost|127\.0\.0\.1|0\.0\.0\.0)/i.test(settings.baseUrl);
  if (!settings.apiKey && !(settings.protocol === 'openai' && isLocal)) {
    return { ok: false, message: '未配置 API Key。请在「设置」页选择服务商并填写 Key(本地 Ollama 无需 Key)。' };
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    switch (settings.protocol) {
      case 'anthropic':
        return await anthropicGenerate(settings, request, controller.signal, onChunk);
      case 'gemini':
        return await geminiGenerate(settings, request, controller.signal, onChunk);
      default:
        return await openaiGenerate(settings, request, controller.signal, onChunk);
    }
  } catch (error) {
    if (controller.signal.aborted) {
      return { ok: false, message: '请求超时(300 秒),请重试或更换网络/模型。' };
    }
    const message = error instanceof Error ? error.message : String(error);
    return { ok: false, message: `LLM 请求失败:${message}` };
  } finally {
    clearTimeout(timer);
  }
}

/** 拉取服务商的可用模型列表(填好 Key 后自动获取,免手输模型名)。 */
export async function llmListModels(settings: LlmSettings): Promise<LlmModelsResult> {
  const isLocal = /(^|\/\/)(localhost|127\.0\.0\.1)/i.test(settings.baseUrl);
  if (!settings.apiKey && !(settings.protocol === 'openai' && isLocal)) {
    return { ok: false, message: '请先填写 API Key(本地 Ollama 除外)。' };
  }
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 30_000);
  try {
    if (settings.protocol === 'gemini') {
      const base = (settings.baseUrl || 'https://generativelanguage.googleapis.com').replace(/\/+$/, '');
      const response = await pickFetch(base)(
        `${base}/v1beta/models?key=${encodeURIComponent(settings.apiKey)}&pageSize=100`,
        { signal: controller.signal },
      );
      if (!response.ok) return failFrom(response, 'Gemini API') as Promise<LlmModelsResult>;
      const payload = (await response.json()) as { models?: { name?: string }[] };
      const models = (payload.models ?? [])
        .map((m) => (m.name ?? '').replace(/^models\//, ''))
        .filter((n) => n.startsWith('gemini'));
      return { ok: true, models };
    }
    if (settings.protocol === 'anthropic') {
      const base = (settings.baseUrl || 'https://api.anthropic.com').replace(/\/+$/, '');
      const response = await pickFetch(base)(`${base}/v1/models?limit=100`, {
        signal: controller.signal,
        headers: { 'x-api-key': settings.apiKey, 'anthropic-version': '2023-06-01' },
      });
      if (!response.ok) return failFrom(response, 'Anthropic API') as Promise<LlmModelsResult>;
      const payload = (await response.json()) as { data?: { id?: string }[] };
      return { ok: true, models: (payload.data ?? []).map((m) => m.id ?? '').filter(Boolean) };
    }
    // OpenAI 兼容:GET {base}(/v1)/models
    const base = (settings.baseUrl || 'https://api.openai.com').replace(/\/+$/, '');
    const url = /\/v\d+$/.test(base) ? `${base}/models` : `${base}/v1/models`;
    const headers: Record<string, string> = {};
    if (settings.apiKey) headers.authorization = `Bearer ${settings.apiKey}`;
    const response = await pickFetch(url)(url, { signal: controller.signal, headers });
    if (!response.ok) return failFrom(response, '模型列表') as Promise<LlmModelsResult>;
    const payload = (await response.json()) as { data?: { id?: string }[] };
    const models = (payload.data ?? []).map((m) => m.id ?? '').filter(Boolean).sort();
    return models.length > 0
      ? { ok: true, models }
      : { ok: false, message: '该服务未返回模型列表,请手动填写模型名。' };
  } catch {
    return { ok: false, message: '获取模型列表失败(网络或服务不支持),请手动填写模型名。' };
  } finally {
    clearTimeout(timer);
  }
}

/** 逐行读取 SSE 流,把每个 data: 载荷交给回调('[DONE]' 除外)。 */
async function readSse(response: Response, onData: (payload: string) => void): Promise<void> {
  const reader = response.body?.getReader();
  if (!reader) throw new Error('响应流不可读');
  const decoder = new TextDecoder();
  let buffer = '';
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });
    let newline: number;
    while ((newline = buffer.indexOf('\n')) >= 0) {
      const line = buffer.slice(0, newline).trim();
      buffer = buffer.slice(newline + 1);
      if (!line.startsWith('data:')) continue;
      const payload = line.slice(5).trim();
      if (!payload || payload === '[DONE]') continue;
      onData(payload);
    }
  }
}

async function failFrom(response: Response, label: string): Promise<LlmResult> {
  const body = await response.text().catch(() => '');
  return { ok: false, message: `${label} ${response.status}:${body.slice(0, 300)}` };
}

async function anthropicGenerate(
  settings: LlmSettings,
  request: LlmRequest,
  signal: AbortSignal,
  onChunk?: ChunkHandler,
): Promise<LlmResult> {
  const base = (settings.baseUrl || 'https://api.anthropic.com').replace(/\/+$/, '');
  const stream = Boolean(onChunk);
  const url = `${base}/v1/messages`;
  const response = await pickFetch(url)(url, {
    method: 'POST',
    signal,
    headers: {
      'content-type': 'application/json',
      'x-api-key': settings.apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: settings.model || 'claude-sonnet-4-6',
      max_tokens: request.maxTokens ?? 3000,
      system: request.system,
      messages: request.messages ?? [{ role: 'user', content: request.user }],
      ...(stream ? { stream: true } : {}),
    }),
  });
  if (!response.ok) return failFrom(response, 'Anthropic API');

  if (stream) {
    let full = '';
    await readSse(response, (payload) => {
      try {
        const event = JSON.parse(payload) as { type?: string; delta?: { type?: string; text?: string } };
        if (event.type === 'content_block_delta' && event.delta?.type === 'text_delta' && event.delta.text) {
          full += event.delta.text;
          onChunk!(event.delta.text);
        }
      } catch {
        // 非 JSON 行(心跳等)忽略
      }
    });
    return full ? { ok: true, text: full } : { ok: false, message: 'Anthropic 流式响应为空。' };
  }

  const payload = (await response.json()) as { content?: { type: string; text?: string }[] };
  const text = (payload.content ?? [])
    .filter((block) => block.type === 'text' && typeof block.text === 'string')
    .map((block) => block.text)
    .join('');
  return text ? { ok: true, text } : { ok: false, message: 'Anthropic API 返回了空内容。' };
}

function openaiChatUrl(baseUrl: string): string {
  const base = (baseUrl || 'https://api.openai.com').replace(/\/+$/, '');
  // 形如 …/v1、…/v3、…/v4 的 base 已含版本段,直接拼 /chat/completions
  return /\/v\d+$/.test(base) ? `${base}/chat/completions` : `${base}/v1/chat/completions`;
}

async function openaiGenerate(
  settings: LlmSettings,
  request: LlmRequest,
  signal: AbortSignal,
  onChunk?: ChunkHandler,
): Promise<LlmResult> {
  const stream = Boolean(onChunk);
  const headers: Record<string, string> = { 'content-type': 'application/json' };
  if (settings.apiKey) headers.authorization = `Bearer ${settings.apiKey}`;

  const url = openaiChatUrl(settings.baseUrl);
  const response = await pickFetch(url)(url, {
    method: 'POST',
    signal,
    headers,
    body: JSON.stringify({
      model: settings.model || 'gpt-4o',
      max_tokens: request.maxTokens ?? 3000,
      messages: [
        { role: 'system', content: request.system },
        ...(request.messages ?? [{ role: 'user' as const, content: request.user }]),
      ],
      ...(stream ? { stream: true } : {}),
    }),
  });
  if (!response.ok) return failFrom(response, 'OpenAI 兼容 API');

  if (stream) {
    let full = '';
    await readSse(response, (payload) => {
      try {
        const event = JSON.parse(payload) as { choices?: { delta?: { content?: string } }[] };
        const chunk = event.choices?.[0]?.delta?.content;
        if (chunk) {
          full += chunk;
          onChunk!(chunk);
        }
      } catch {
        // 忽略
      }
    });
    return full ? { ok: true, text: full } : { ok: false, message: '流式响应为空(该服务可能不支持 stream,请重试)。' };
  }

  const payload = (await response.json()) as { choices?: { message?: { content?: string } }[] };
  const text = payload.choices?.[0]?.message?.content ?? '';
  return text ? { ok: true, text } : { ok: false, message: 'API 返回了空内容。' };
}

interface GeminiPayload {
  candidates?: { content?: { parts?: { text?: string }[] } }[];
}

function geminiText(payload: GeminiPayload): string {
  return (payload.candidates?.[0]?.content?.parts ?? [])
    .map((part) => part.text ?? '')
    .join('');
}

async function geminiGenerate(
  settings: LlmSettings,
  request: LlmRequest,
  signal: AbortSignal,
  onChunk?: ChunkHandler,
): Promise<LlmResult> {
  const base = (settings.baseUrl || 'https://generativelanguage.googleapis.com').replace(/\/+$/, '');
  const model = encodeURIComponent(settings.model || 'gemini-2.5-flash');
  const key = encodeURIComponent(settings.apiKey);
  const stream = Boolean(onChunk);
  const method = stream ? `streamGenerateContent?alt=sse&key=${key}` : `generateContent?key=${key}`;

  const url = `${base}/v1beta/models/${model}:${method}`;
  const response = await pickFetch(url)(url, {
    method: 'POST',
    signal,
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: request.system }] },
      contents: (request.messages ?? [{ role: 'user' as const, content: request.user }]).map((m) => ({
        role: m.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: m.content }],
      })),
      generationConfig: { maxOutputTokens: request.maxTokens ?? 3000 },
    }),
  });
  if (!response.ok) return failFrom(response, 'Gemini API');

  if (stream) {
    let full = '';
    await readSse(response, (payload) => {
      try {
        const chunk = geminiText(JSON.parse(payload) as GeminiPayload);
        if (chunk) {
          full += chunk;
          onChunk!(chunk);
        }
      } catch {
        // 忽略
      }
    });
    return full ? { ok: true, text: full } : { ok: false, message: 'Gemini 流式响应为空。' };
  }

  const text = geminiText((await response.json()) as GeminiPayload);
  return text ? { ok: true, text } : { ok: false, message: 'Gemini API 返回了空内容。' };
}
