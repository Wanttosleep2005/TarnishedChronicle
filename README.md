# 褪色者编年史 · Tarnished Chronicle

艾尔登法环存档分析工具(Windows / Electron)。**只读**解析 `ER0000.sl2` / `ER0000.co2`,永不写入你的存档。

> 全成就是一种圆满,但最精彩的从来不是圆满,而是每个玩家游玩时的故事。

## 功能模块

| 页面 | 内容 |
| --- | --- |
| 角色总览 | 等级、职业、八维属性(含雷达图)、游玩时长、死亡数、累计卢恩、圣杯瓶、大卢恩收集、最后休息的赐福、灵马状态、待回收血迹 |
| 交界地图 | **真实游戏地图底图**(七级缩放瓦片金字塔,随缩放自动换清晰度)+ 分区坐标投影:赐福、Boss、当前 NPC 阶段、玩家位置、待回收血迹与历史死亡点;法姆·亚兹拉及地下/独立竞技场使用明确显示映射,不再跨区误投 |
| Boss 讨伐 | 207 个唯一击杀进度(含黄金树幽影 DLC),共享击杀旗标的参数记录合并展示,保留多地点定位,界面使用规范地区与剧情地点名称 |
| 赐福足迹 | 419 处赐福按地区分组的点亮进度 |
| 装备行囊 | 当前武器(含战灰、**实时面板攻击力**:单手/双手 AR、伤害构成、需求未达标警示)、防具、护符、调香瓶、记忆法术、快捷栏,以及随身+仓库全部物品(带游戏图标) |
| 配装器 | 独立配装界面:全库检索武器/防具/护符,按当前属性实时计算单手/双手 AR、需求、负重、韧性与减伤;方案按角色保存,可导出 PNG 分享卡 |
| 成就徽章 | 首屏展示存档推演;Steam 官方成就与 37 枚趣味徽章默认折叠。缺失物品使用矢量地图定位按钮;Steam 数据使用本地持久缓存,仅点击“联网刷新”时请求 |
| 收藏图鉴 | 按当前角色槽位统计武器、防具、护符、魔法、祷告、骨灰与战灰;武器基础型号合并,支持拥有/缺失/无法确认、类别/版本/搜索筛选,显示已核实获取方式,可靠地点才显示地图定位 |
| NPC 任务线 | 26 条本体/DLC 引导式任务线,按当前地区与进度分组且地区默认折叠;阶段包含地点、目标、完成/中断条件,支持单条任务追踪并随可靠存档状态迁移地图标点 |
| 游玩时间线 | 应用在每次游戏写存档时自动快照,生成成长曲线(等级/死亡)与战报流:某时某刻击败了谁、升了几级、死了几次、点亮了哪些赐福;**死亡考古**:历史死亡地点按地区统计 |
| 编年史 | 把存档事实 + 近期战报交给 LLM,流式生成专属中文游玩故事,可导出 Markdown。内置服务商预设:Claude / DeepSeek / Kimi / 智谱 GLM / 通义千问 / 豆包 / 硅基流动 / OpenAI / Gemini / 本地 Ollama(免 Key),以及任意 OpenAI 兼容中转 |
| 角色对比 | 同一存档全部角色并排对比(等级/时长/死亡/Boss/赐福/大卢恩/徽章),一键切换 |
| 杀戮尖塔 2 | 独立模块:自动检测 Steam 多账号/模组存档(明文 JSON),生涯统计、角色战绩(胜率/最高进阶/连胜/最快胜利)、全部对局历史点开复盘(牌组+升级、遗物、药水、局内徽章、种子),支持多人联机对局与 mod 角色 |
| 黑暗之魂 3 | 自动检测存档,提供不死人总览、升级规划、角色对比、传火军师与 Steam 官方成就 |

其他:战绩分享卡两套主题(金黑/羊皮纸,含雷达图);编年史每次生成自动归档,支持回看与删除;设置页一键存档备份(只备份、不自动还原)与 GitHub 检查更新;趣味徽章共 37 枚。

中文名以**游戏官方简中文本**为准(本体 + 黄金树幽影,经 `scripts/extract-official-zh.ts` 从游戏文件提取,318 NPC + 2077 地名),Boss/赐福/地区/护符覆盖率 100%;个别提取不到的条目回退社区对照或英文。

## 使用

1. 开发者双击根目录 `start.bat`(或兼容入口 `启动.bat`)。脚本仅在工作树干净时执行 `fetch + fast-forward` 同步 `main`；本地改动、Git 缺失或网络异常都会跳过同步并启动当前源码，绝不覆盖本地文件。普通用户在可写运行目录中双击 `TarnishedChronicleLauncher.bat`，启动器会从官方 GitHub Release 下载预构建运行包，关闭旧进程后替换并重启；无需 Node.js 或 Git。
2. 启动后自动检测 `%APPDATA%\EldenRing\<SteamID>\` 下的存档(优先最新修改的),也可以手动选择或直接把 `.sl2` / `.co2` 拖进窗口。
3. 开着游戏时保持"自动刷新"开启,游戏每次存档后界面自动更新。
4. 生成故事:设置页填入 LLM API(Anthropic 原生,或任意 OpenAI 兼容中转 / Ollama 本地服务)。
5. Steam 官方成就(可选):设置页填 Steam64 ID + [Web API Key](https://steamcommunity.com/dev/apikey),个人资料需公开。

## 开发

```bash
npm install          # 国内网络已在 .npmrc 配置 npmmirror 镜像
npm run dev          # 开发模式(HMR)
npm run smoke        # 用 test-fixtures 存档跑解析冒烟测试
npm run audit:data   # 审计 Boss、地图地区、法姆投影与 NPC 定义
npm run typecheck    # 类型检查
npm run build        # 构建到 out/
npm run package      # 打包 Windows NSIS 安装版到 release/
```

`start.bat` 是可重复的一键源码启动入口；正式版本通过 GitHub Release 发布 Windows NSIS 安装包和 `TarnishedChronicle-runtime-版本.zip` 可写运行包。

## v0.3.0 更新

### 新增

- 地图数据审计:检查 Boss 唯一击杀进度、特殊地图投影、法姆·亚兹拉赐福范围与地区图例。
- NPC 任务线:重构为 26 条有序阶段状态机,地图位置会随当前可靠进度迁移。
- Steam 成就:增加持久缓存读取、显式联网刷新语义与并发请求合并。

### 修改

- 侧栏:将“返回启动页”固定到顶部,中间导航独立滚动,压缩底部存档信息。
- 启动缓存:浏览器会话缓存与应用数据分离,保留设置与历史记录的同时避免旧 Cache 访问拒绝。
- 世界地图:法姆·亚兹拉统一投影到东侧独立图形,补齐地下与独立竞技场显示映射。
- Boss 讨伐:212 行官方参数合并为 207 个唯一击杀进度,多地点记录保留独立定位并清除内部地图 ID。
- 成就页:存档推演置顶,Steam 官方成就和趣味徽章墙默认折叠;传说护符修复为可定位的矢量地图按钮。
- NPC 任务线:地区默认折叠,拉开路线间距,支持保存单条追踪并在地图中高亮当前阶段。
- 启动:新增 `start.bat`,两个中文启动入口均转到当前源码,不再打开旧 `release` 产物。

## v0.3.1 更新

### 新增

- 物品清理：无缝联机内部占位记录 `166` 与已识别内部物品只在展示层过滤；官方“徒手”统一按空槽处理，不写入或修改存档。
- 区域目录：NPC 任务与赐福足迹共用世界分区和地理顺序，地表从“啜泣半岛 → 宁姆格福 → 盖利德”开始；地区和任务均默认折叠。
- 更新通道：公开源码仓库为 [Wanttosleep2005/TarnishedChronicle](https://github.com/Wanttosleep2005/TarnishedChronicle)，提供安全源码同步和正式安装版自动更新。

### 修改

- `start.bat`：仅在 Git 工作树干净时安全快进 `origin/main`；本地改动、网络失败或非 `main` 分支均不会覆盖源码。
- Windows 发布：从 portable 改为 NSIS 安装包。安装版固定从官方 GitHub Release 检查、下载更新，并由用户确认“重启并安装”。
- 设置页：移除可任意填写的更新仓库输入框，改为当前版本、检查/下载状态、更新说明与安装操作面板。
- 发布自动化：推送 `main` 只运行验证；推送 `v*` 标签才构建安装包并创建 GitHub Release，附带 `.exe`、`latest.yml` 和 blockmap。

## v0.4.0 更新

### 新增

- 配装器：作为交界地工具库的独立侧边栏页面,保留原有“洗点模拟”。
- 配装检索：离线检索本体与 DLC 的武器、防具、护符,支持中文/英文/类别搜索与“只看已拥有”。
- 实时推演：以当前八维为默认属性,可临时调整并查看武器单手/双手 AR、需求警示、装备重量、韧性和减伤汇总。
- 方案分享：方案按存档路径与角色槽位隔离保存,可加载/复制/删除,并导出 16:9 PNG 分享卡,不上传存档或装备数据。
- Alas 式启动器：可写目录中的 `TarnishedChronicleLauncher.bat` 自动检查固定 GitHub Release,校验运行包哈希,更新失败自动保留旧版本并启动。

- Collection Codex: a separate current-slot collection dashboard for weapons, armor, talismans, sorceries, incantations, spirit ashes, and Ashes of War. It tracks owned/missing/unresolved items, supports category/status/version/search filters, and only offers map focus when a reliable placement exists.
- Collection Codex: cards now explain verified acquisition sources (map/treasure, enemy drop, event/quest reward). "无法确认" means the source data is not covered yet, not that the item is unobtainable; no fake map pin is shown.

## v0.5.0 更新

### 新增

- 本地战斗数据：从项目内两份倍率工作簿生成 449 组武器动作、518 条魔法/祷告攻击数据和 2430 条敌人数据。
- 武器动作：Build 页面显示轻击、重击、满蓄力重击的 PvE 削韧，并提供动作倍率与敌人 SA 的破韧预估。
- 魔法/祷告：显示属性攻击倍率、PvE 削韧和 PvE 削精；攻击倍率明确不是最终伤害。
- 敌人参数：接入 HP、SA 耐久、基础防御和属性承伤倍率。

### 修改

- 起始职业与起始礼物改用官方简中映射，修复“君王遗骨护符”、观星者、密使和一贫如洗等错误显示。
- 侧栏、存档选择和战斗数据筛选增加最小宽度与横向溢出约束，避免窄窗口内容挤压。
- 本地数据可通过 `scripts/extract-local-combat-data.ps1` 重新生成，并由 `npm run test:combat-data` 做代表性数据校验。

## v0.5.1 更新

### 修改

- 杀戮尖塔 2：进阶展示统一遵循当前官方上限 A10，筛选器不再出现 A15/A20；旧存档或 mod 数据中的更高值按 A10 展示。
- 启动页与窄窗口布局：游戏入口改为响应式网格，主内容、卡片和统计区域允许收缩，避免窗口变窄时内容挤在一起。

## v0.6.0 更新

### 新增

- 卢恩 Farming 仪表盘：按时间线快照的卢恩增量、时间间隔和最后休息赐福识别刷卢恩路线，提供效率排行、异常段和效率曲线。
- Build 模拟器 2.0：结合本地武器动作、NpcParam 防御/属性承伤/HP/SA 数据，估算实际单次伤害、击杀命中数和破韧命中数；梅琳娜与内部 Dummy 不列为敌人。
- 多周目对比：以结局 Boss 击杀作为周目边界，对比各周目时长、死亡数和 Boss 顺序。
- 流派标签：根据当前属性、武器、护符和战灰组合推断流派标签。
- StS2 胜局抄作业：从牌组选择记录生成优先拿牌、跳过牌、遗物和升级记录；进阶显示统一按官方 A10 上限。
- 魂系生涯：启动页汇总可读取的 ER、StS2 和 DS3 数据，DS3 死亡数不做猜测性统计。

### 修复

- StS2 扫描、进度和单局读取失败时显示错误，不再永久停留在加载状态；单个损坏对局不会阻塞其他对局。
- 兼容存档运行时赐福实体 ID 与地图目录 ID 的偏移，完成赐福后首页和时间线能显示正确名称。
- Build 敌人数据详情改为稳定的响应式布局，避免参数文字挤成一块。

## 更新与发布

开发者直接运行 `start.bat`。它只会进行 `fetch + fast-forward`，不会使用 `reset --hard`，因此不会覆盖本地改动。提交到 `main` 后 GitHub Actions 运行检查与构建验证；创建并推送 `vX.Y.Z` 标签后，Release 工作流发布 Windows NSIS 安装包和可写运行目录 ZIP。普通用户应把 ZIP 解压到有写权限的目录(例如 `G:\Tarnished\TarnishedChronicle`)，以后通过其中的 `TarnishedChronicleLauncher.bat` 启动。

普通用户应从 GitHub Release 安装正式版本。已安装版本启动时会检查固定的官方更新源；下载完成后，在“关于与更新”中选择“重启并安装”。没有代码签名证书时，Windows 可能显示 SmartScreen 提示，请通过 Release 页面提供的版本和哈希核验来源。

## 技术与致谢

- 存档解析器与游戏数据(2.6.2 版,含 DLC)取自开源项目 [elden-ring-compass](https://github.com/EthanShoeDev/elden-ring-compass)(纯 TypeScript 解析器,移植自 [ER-Save-Lib](https://github.com/ClayAmore/ER-Save-Lib)),在此致谢。
- 物品/Boss/地名中文对照来自社区整理数据。
- 技术栈:Electron + electron-vite + React 19 + TypeScript + Effect。

## 已知边界

- 存档不记录翻滚 / 弹反 / 圣杯瓶使用次数等操作行为,所以这类徽章无法从存档还原——徽章系统改用等级与进度反差、死亡与探索分布等可验证数据画像。
- NPC 阶段主要依据唯一物品、Boss 状态和可核验事件旗标;存档无法可靠区分的对话分支只提供自然的下一步说明,不伪造精确阶段。
- 结局类成就只能判定"已击败最终 Boss",三种结局的具体分支无法从旗标可靠区分,请以 Steam 官方成就为准。
- 仅支持 PC 版存档(BND4 明文格式),不支持主机存档。
