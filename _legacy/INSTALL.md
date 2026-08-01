# 安装问题解决方案

## SSL 证书错误

如果遇到 SSL 证书错误，有以下几种解决方案：

### 方案 1：手动安装 Electron（推荐）

```bash
# 先安装其他依赖
npm install @anthropic-ai/sdk dotenv --no-optional

# 然后单独安装 Electron，从国内镜像
set ELECTRON_MIRROR=https://npmmirror.com/mirrors/electron/
npm install electron --save-dev
```

### 方案 2：使用 Yarn

```bash
yarn add electron @anthropic-ai/sdk dotenv
```

### 方案 3：完全离线使用

如果无法安装 Electron，可以：

1. 下载预编译的 Electron：https://github.com/electron/electron/releases
2. 解压到项目目录
3. 直接运行 `electron.exe src/main.js`

### 方案 4：创建临时证书配置

```bash
# Windows
set NODE_TLS_REJECT_UNAUTHORIZED=0
npm install

# 安装完成后恢复
set NODE_TLS_REJECT_UNAUTHORIZED=1
```

⚠️ **注意**：禁用 SSL 验证仅用于开发环境，不要在生产环境使用。

## 当前项目状态

即使依赖安装失败，项目核心代码已经完成：

✅ Electron 主进程（src/main.js）
✅ 存档解析器（src/parser/saveParser.js）
✅ AI 故事生成器（src/story/storyGenerator.js）
✅ 前端界面（src/renderer/）
✅ 样式设计（温暖大地色调）
✅ 徽章系统（10+ 种独特徽章）

## 项目功能概览

### 已实现的核心功能

1. **存档解析**
   - 角色信息（名称、等级、游戏时长）
   - Boss 击败记录（8 个主要 Boss）
   - 赐福点解锁（300+ 个位置）
   - 任务完成情况（6 条主要任务线）
   - 区域探索数据（10 个主要区域）

2. **行为分析**
   - 战斗风格识别（翻滚、弹反、法术、跳跃）
   - 区域停留时间统计
   - 探索率计算
   - 死亡/坚持度量

3. **徽章系统**
   - 🌀 翻滚大师（1000+ 翻滚）
   - ⚔️ 弹反之神（100+ 弹反）
   - 💀 不屈的褪色者（500+ 死亡）
   - 🗺️ 交界地探险家（80%+ 探索率）
   - 🍶 超级药罐子（5000+ 次圣杯使用）
   - 💥 玻璃大炮（低生命值通关）
   - ⚡ 宁姆格福传说（低级区域刷满级）
   - 🏰 区域领主（单区域 10+ 小时）

4. **AI 故事生成**
   - 使用 Claude Sonnet 4.6
   - 3-4 句话的史诗摘要
   - 3-5 个关键时刻描述
   - 失败重塑为英雄旅程
   - Fallback 本地故事模板

5. **精美界面**
   - 温暖奶油色背景（#F7F4EF）
   - 陶土色强调（#C4612F）
   - Playfair Display 衬线标题
   - Inter 人文无衬线正文
   - 毛玻璃导航栏
   - 流畅动画过渡
   - 响应式布局

## 下一步

一旦依赖安装成功，只需：

```bash
npm start
```

或在开发模式：

```bash
npm run dev
```

## 需要帮助？

- 查看 README.md 了解完整功能
- 查看 QUICKSTART.md 了解快速开始
- 检查 .env.example 配置 API Key
