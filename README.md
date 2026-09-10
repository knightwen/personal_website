# Personal Website

本项目承接「讨论个人网站架构」任务中的需求、架构讨论和后续工作。

- [项目上下文与待办](docs/project-context.md)
- [可读取的历史对话正文](docs/imported-conversation.md)

已迁入原网站源码、静态资源、锁定依赖和 Sites 构建配置。GitHub 仓库：https://github.com/knightwen/personal_website 。本次源码迁移不重新部署线上网站。

## 本地运行

需要 Node.js 22.13 或以上版本。

```sh
npm ci
npm run dev
```

生产构建：`npm run build`。构建并运行服务端页面检查：`npm test`。

## 实现与目录

当前为 React 19 + TypeScript + Vinext（Next.js 兼容路由）项目，使用 Vite 和 Cloudflare Worker 构建链。不是直接使用标准 Next.js CLI 的项目。

- `app/page.tsx`：单页个人作品站及中英文即时切换。
- `app/globals.css`：响应式样式。
- `app/layout.tsx`：布局、字体和页面分享信息。
- `public/`：图标和社交分享图片。
- `build/`、`worker/`、`.openai/hosting.json`：原 Sites 构建与部署关联配置。
- `docs/`：架构讨论、上下文及原 starter 说明。

当前联系方式、简历下载与部分案例仍为占位内容；完整语言路由与交互式 3D 查看器属于后续计划。

未纳入 Git：依赖目录、构建产物、缓存、环境变量文件及原仓库 Git 历史。原目录保留不变。
