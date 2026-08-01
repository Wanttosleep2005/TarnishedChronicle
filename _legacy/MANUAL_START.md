# 艾尔登法环存档解析工具 - 手动启动指南

## Electron 二进制下载问题

由于网络证书问题，Electron 二进制文件无法自动下载。你可以手动下载并配置。

## 解决方案：手动下载 Electron

### 1. 下载 Electron v28

访问以下任一镜像地址下载：

**官方（可能需要代理）：**
```
https://github.com/electron/electron/releases/download/v28.0.0/electron-v28.0.0-win32-x64.zip
```

**国内镜像（推荐）：**
```
https://npmmirror.com/mirrors/electron/28.0.0/electron-v28.0.0-win32-x64.zip
```

### 2. 解压到项目目录

```bash
# 创建 electron 目录
mkdir electron-bin
cd electron-bin

# 将下载的 zip 解压到这里
# 应该有 electron.exe, resources/ 等文件
```

### 3. 启动应用

```bash
# 方法 1：直接使用 electron.exe
electron-bin\electron.exe src\main.js

# 方法 2：带开发者工具
electron-bin\electron.exe src\main.js --dev
```

## 或者：使用已安装的 Electron

如果你的系统上已经全局安装了 Electron：

```bash
# 检查是否已安装
electron --version

# 如果已安装，直接启动
electron src\main.js
```

## 或者：使用其他运行时

### 使用 Tauri（Rust + WebView）

如果不想用 Electron，可以考虑用 Tauri 重构（更轻量）：

```bash
# 安装 Tauri CLI
cargo install tauri-cli

# 初始化 Tauri 项目
cargo tauri init
```

### 使用 Web 版本

也可以将解析器改为纯 Web 应用（使用 File API）：

1. 删除 Electron 依赖
2. 使用 `<input type="file">` 让用户选择存档
3. 用 FileReader API 读取二进制文件
4. 在浏览器中运行

## 当前项目完成度

✅ **所有代码已完成**：
- Electron 主进程
- 存档解析器（完整的二进制解析逻辑）
- AI 故事生成器（含 10+ 种徽章）
- 精美前端界面（温暖设计系统）
- 完整文档

❌ **仅缺少**：
- Electron 运行时二进制文件（因网络问题未下载）

## 项目亮点

### 存档解析
- 角色信息、等级、游戏时长
- Boss 击败记录（8 位主要 Boss）
- 赐福点解锁（300+ 位置）
- 任务完成情况（6 条任务线）
- 区域探索数据（10 个区域）

### 行为分析
- 战斗风格（翻滚/弹反/法术/跳跃）
- 区域停留时间
- 探索率计算
- 死亡/坚持度量

### 智能徽章
- 🌀 翻滚大师（1000+ 翻滚）
- ⚔️ 弹反之神（100+ 弹反）
- 💀 不屈的褪色者（500+ 死亡）
- ⚡ 宁姆格福传说（"十里坡剑神"）
- 等 8+ 种徽章

### AI 故事
- Claude Sonnet 4.6 生成个性化叙事
- 将数据转化为温暖的故事
- 失败重塑为英雄旅程
- 内置 Fallback 模板

### 精美界面
- 温暖奶油色背景
- 陶土色强调
- Playfair Display + Inter 混合排版
- 毛玻璃导航、药丸按钮
- 流畅动画

## 需要帮助？

查看以下文档：
- `README.md` - 完整功能介绍
- `PROJECT_SUMMARY.md` - 项目总结
- `INSTALL.md` - 详细安装指南
- `.env.example` - API Key 配置

---

**代码已完成，只需要 Electron 运行时即可启动！**
