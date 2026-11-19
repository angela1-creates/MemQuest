# MemQuest：WebXR 互动历史学习原型

MemQuest 是一个以手机为主的互动历史学习体验，把历史叙事、相机发现、3D 场景和 WebXR 结合起来。

项目探索的问题是：**怎样让历史不只是需要记住的文字，而成为可以主动探索、判断和连接的证据？**

第一个完整学习单元是美国革命。

## 在线原型

[打开 MemQuest](https://memquest.vercel.app/)

## 核心体验

### Scan：扫描与发现

使用手机相机扫描印刷的英文历史资料。浏览器内 OCR 会把识别到的内容连接到相关事件、人物、时间线和故事。目前支持：

- Stamp Act — 1765
- Boston Massacre — 1770
- Boston Tea Party — 1773
- First Continental Congress — 1774

匹配成功后，相机会继续显示，并叠加 Samuel Adams 或 John Adams 的 3D 历史人物诠释。Stamp Act、Boston Massacre 和 Boston Tea Party 还可选择 Page anchor 图片姿态；它不是平面检测、持久空间锚点或任意物体识别。

### Library：资料、人物与证据

American Revolution 单元提供 Explore、Timeline、People、Evidence 和 Memory Check。学习者可以比较事件、人物关系、史料能支持什么，以及哪些结论不能由现有证据证明。

### Boston Harbor, 1773

在程序化 Three.js 港口中寻找四个历史线索：暗灯、东印度公司茶箱、Dartmouth 茶船和船匠斧。支持设备可进入沉浸式 VR；普通手机可使用设备方向或拖动视角。

### History Time Travelers

当前采用“一个重点调查 + 四个短任务”的两层结构：

- **Featured Investigation：Why Did Colonial Cooperation Intensify in 1774?** 是约 10–12 分钟的主任务。它先说明 1772 年的 Committees of Correspondence 已经在发展合作网络，再让学习者调查 Boston Tea Party、Coercive Acts 和各殖民地回应。学习者不仅排列时间顺序，还必须选择相关证据并解释为何对 Massachusetts 的惩罚促使其他殖民地加强合作。
- **Quick Event Files** 保留四个事件各自的短任务，适合快速复习或分次完成。每项含两条来源关联线索、渐进提示、两道知识题和一件档案收藏物。
- **Challenge mode** 隐藏提示，但不改变学习得分。
- 原有四事件排序题保留在 **Practice Lab**，作为可独立练习的总结挑战，不再用四件收藏物强制解锁。
- 完成主任务后可选择一项 **AP-style evidence response**：阅读带出处的 1774 年一手资料节选，完成三段简短书面回答并使用自检表。它不是 College Board 官方题目，不自动评分，也不计入任务完成分数。

提示不会自动产生发现或扣分；提示次数、因果解释检查次数和修改次数作为独立的学习过程信号保存在本机。重复完成不会重复增加完成数。练习表现继续采用“最近 100 次会话中，每道不同题目的最新答案”规则。游戏完成分数不能作为学习效果证据；相关研究需要独立测量。

四张高分辨率 OCR 扫描海报位于 `src/assets/scan-posters/`。海报中的生成画面属于历史诠释；在真实手机完成 OCR、连续图片识别和 Page anchor 验证前，不应称为生产级识别目标。

## 信息架构

```text
MemQuest
├── Scan
│   └── Camera → OCR / image search → Event → Character / Timeline
├── Library
│   └── American Revolution
│       ├── Explore
│       ├── Timeline
│       ├── People
│       ├── Evidence
│       └── Memory Check
├── Challenges
│   ├── Featured Investigation
│   ├── Quick Event Files
│   └── Practice Lab
└── Progress
```

Library 只展示一个非功能性的未来方向：**Up Next: Silk Roads: Networks of Exchange (c. 1200-1450 CE)**。先验证美国革命任务并收集 AP World History 教师反馈，再决定是否制作这项调查；它目前不计入学习总数。

## 技术栈

- React 19 + Vite 6
- Three.js + WebXR
- Tesseract.js 7 浏览器内 OCR
- 本地预生成旁白
- React state + 带版本的 localStorage
- Vercel 部署

当前原型不需要生产后端或运行时 API key。

## 本地运行

推荐 Node.js 24.x。Windows 默认使用项目内 PowerShell 启动器，它不要求 Corepack 向 Program Files 写入文件。

```powershell
.\scripts\project.ps1 install
.\scripts\project.ps1 dev
```

本地地址：`http://127.0.0.1:4173/`

如果已经配置 pnpm，也可以运行：

```bash
pnpm install --frozen-lockfile
pnpm dev --host 0.0.0.0 --port 4173 --strictPort
```

## 测试与构建

```powershell
.\scripts\project.ps1 test
.\scripts\project.ps1 build
.\scripts\project.ps1 test:sites
```

建议检查 390×844 手机竖屏、844×390 手机横屏和 1254×960 桌面/平板布局。自动化测试不能替代真机测试；相机权限、OCR、音频、设备方向、触控和 XR 都应在目标手机上验证。

## 隐私与当前边界

- 没有账号、云端数据库、排行榜或云端进度同步。
- 学习记录只保存在当前浏览器；相机画面和 OCR 文本不会持久保存。
- OCR 只识别已配置的英文美国革命事件。
- 角色问答使用预设按钮和预生成音频，不是实时 AI 对话。
- 图片锚定依赖已配置参考图，不是任意物体识别或持久空间锚点。
- 3D 场景、角色和生成式历史画面是教育原型中的历史诠释，不是精确复原。
- WebXR 和设备方向能力会因浏览器和设备而异。

更详细的功能边界、协作流程、截图和作品集说明见 [docs/HANDOFF.zh-CN.md](docs/HANDOFF.zh-CN.md)。扩展事件、参考目标、角色、动画和音频时，请先读 [docs/EXTENDING.zh-CN.md](docs/EXTENDING.zh-CN.md)。
