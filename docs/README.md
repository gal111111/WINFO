# WINFO 项目 Code Wiki

本目录是 WINFO（盈丰商业有限公司）代码仓库的结构化技术文档。仓库包含两个独立的 Vite + React 前端应用，以及一份网站品牌设计规范。

> 对标网站：**Sleek.com** 与 **Osome.com**（企业服务/公司秘书类 SaaS 官网，设计规范中作为「专业感」结构参考）。

## 文档导航

| 文档 | 说明 |
| --- | --- |
| [01 项目概览](./01-项目概览.md) | 仓库构成、两个应用的关系、技术栈总览 |
| [02 整体架构](./02-整体架构.md) | 应用分层、数据流、路由机制 |
| [03 模块职责](./03-模块职责.md) | 各目录/页面/组件的职责划分 |
| [04 关键类与函数](./04-关键类与函数.md) | 核心组件与函数签名说明 |
| [05 依赖关系](./05-依赖关系.md) | npm 依赖、模块间引用关系 |
| [06 运行与部署](./06-运行与部署.md) | 环境要求、命令、CI/CD、环境变量 |
| [07 设计系统与品牌规范](./07-设计系统与品牌规范.md) | 色彩/字体/版式令牌与组件规范 |

## 仓库结构速览

```
WinFo/
├── src/                    # 应用一：WINFO 公司官网（单文件 React，当前主站）
│   ├── main.jsx
│   └── styles.css
├── bud-web-master/         # 应用二：WinFo-web（BUD/资助/上市等多页面营销站）
│   ├── src/{components,pages,util}
│   └── ...
├── _backups/               # 历史备份（Content Lab 内容研究工具）
├── public/                 # 静态资源（横幅、Logo）
├── .github/workflows/      # GitHub Pages 部署流水线
├── docs/                   # 本 Code Wiki
└── index.html / package.json / vite.config.js
```

## 一句话理解

- **`src/`（根级）**：WINFO 全新企业官网，所有代码集中在单个 `main.jsx`，用自定义 `useRoute` 实现 SPA 路由，无框架路由库、无 TypeScript，严格遵循品牌规范中的浅蓝/白/金设计语言。
- **`bud-web-master/`**：较早期的完整营销站点，React 19 + TypeScript + Tailwind CSS v4 + React Router v7 + i18next，覆盖 BUD 基金、HKSTP 科技园、审计、补贴、上市维护等业务页面。
- **`_backups/`**：上一版「Content Lab」同行内容研究工具的备份，非当前交付内容。
