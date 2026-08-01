import { parentPort } from 'node:worker_threads'
import { parseEldenRingSave } from '../features/elden-ring/parser/save-adapter.js'
import type { SaveSnapshot } from '../shared/contracts.js'

interface ParseMessage {
  buffer: ArrayBuffer
}

interface ParseSuccess {
  ok: true
  save: SaveSnapshot
}

interface ParseFailure {
  ok: false
  message: string
}

parentPort?.on('message', (message: ParseMessage) => {
  try {
    const result: ParseSuccess = { ok: true, save: parseEldenRingSave(message.buffer) }
    parentPort?.postMessage(result)
  } catch (error) {
    const message = error instanceof Error ? error.message : '未知存档解析错误。'
    const result: ParseFailure = { ok: false, message }
    parentPort?.postMessage(result)
  }
})
