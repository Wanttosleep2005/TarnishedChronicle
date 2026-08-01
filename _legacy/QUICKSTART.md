# 快速开始指南

## 方法一：使用淘宝镜像安装（推荐）

```bash
# 使用国内镜像安装依赖
npm install --registry=https://registry.npmmirror.com

# 配置环境变量（可选）
# 复制 .env.example 为 .env，填入你的 Anthropic API Key
copy .env.example .env

# 启动应用
npm start
```

## 方法二：全局配置镜像

```bash
# 永久配置 npm 使用淘宝镜像
npm config set registry https://registry.npmmirror.com

# 然后正常安装
npm install

# 启动应用
npm start
```

## 方法三：不使用 AI 功能

如果你只想测试存档解析功能而不使用 AI 故事生成：

1. 直接启动应用（会使用默认的基础故事模板）
2. 不需要配置 ANTHROPIC_API_KEY

## 存档文件位置

### Windows (Steam)
```
C:\Users\你的用户名\AppData\Roaming\EldenRing\<Steam_ID>\ER0000.sl2
```

### Steam Deck / Linux
```
~/.local/share/Steam/steamapps/compatdata/1245620/pfx/drive_c/users/steamuser/AppData/Roaming/EldenRing/
```

## 开发模式

```bash
npm run dev
```

开发模式会打开 DevTools，方便调试。

## 常见问题

### Q: SSL 证书错误怎么办？
A: 使用国内镜像：`npm install --registry=https://registry.npmmirror.com`

### Q: 没有 API Key 能用吗？
A: 可以！应用会使用基础的故事模板，只是不会有 AI 生成的个性化叙事。

### Q: 解析失败怎么办？
A: 存档格式可能有更新，或者存档文件损坏。请确保选择正确的 .sl2 文件。
