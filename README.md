# CssLab 文档站

文档站在 `gh-pages` 分支维护，使用 Vite、Vue 3 Options API 和 Vue Router。

## 本地开发

```bash
npm install
npm run dev
```

开发服务默认运行在 `http://127.0.0.1:5173/`，自动打开浏览器。修改 Vue 组件和文档数据会自动更新页面。需要 Node.js 20.19+ 或 22.12+。

## 构建和发布

```bash
npm run build
npm run preview
```

`npm run build` 清理并重新生成 `docs/`，该目录只存放构建产物。`npm run preview` 用于本地检查构建结果。

在 GitHub Settings → Pages 中选择 `Deploy from a branch`、`gh-pages` 分支和 `/docs` 目录，然后保存。源码和 `docs/` 构建产物一起提交并推送，GitHub Pages 会发布该目录。自定义域名文件 `public/CNAME` 和 `.nojekyll` 会自动复制到构建目录。

首次切换发布目录时，需要配合推送和 Pages 设置操作完成切换。仓库根目录的 `index.html` 是 Vite 源码入口，发布目录应指向 `docs/`。

现有的 `index.html`、`shape.html`、`animation.html`、`twinkle.html`、`reset.html`、`gradient.html`、`usage.html` 及 `v5/` 地址均有静态入口，支持直接访问和刷新。页面内容由共享 Vue 应用渲染。

## 代码结构

- `src/components/` 包含公共导航、文档页面和代码高亮组件。
- `src/router.js` 管理页面路由、锚点和返回时的滚动位置。
- `src/analytics.js` 集中管理百度统计，首次打开加载一次脚本，站内页面切换记录浏览量。
- `content/` 保存参数说明、调用示例、Usage 内容和旧站演示片段。
- `scripts/documentation.cjs` 从发布标签读取 Less 签名和 Reset 源码，生成应用使用的文档数据。
- `public/` 保存原站 CSS、字体、图片和代码高亮资源，构建时原样复制。
- `src/styles/site.css` 保存版本下拉选择器等补充样式。

发新版本后，更新 `scripts/documentation.cjs` 中对应系列的标签，再核对 `content/` 的说明。使用实际发布标签，`v5` 分支末尾已是 `v6.0.0`。缺少标签时运行 `git fetch --tags origin`。

v6 默认显示 Base，Usage 集中介绍安装、引入和通用参数。Usage 切换到 v5 时进入 v5 的 Base 文档。

[GitHub Pages 发布目录说明](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
