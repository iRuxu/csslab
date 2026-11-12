# CssLab 文档站维护

在 `gh-pages` 分支首次运行 `npm install`，之后通过 `npm run dev` 启动本地预览。启动时会生成文档并自动打开浏览器，默认地址为 `http://127.0.0.1:5173/`，端口占用时以终端显示的地址为准。修改 `docs/site/` 下的源文件会自动重新生成页面并刷新浏览器。按 `Ctrl+C` 停止服务。

运行 `npm run build` 可单独生成静态页面，底层命令为 `node docs/site/build.cjs`。生成脚本依赖本地 Git 标签和 Node.js。缺少标签时先运行 `git fetch --tags origin`。本地预览使用 Vite 7，需要 Node.js 20.19+ 或 22.12+。

根目录是默认的 v6 文档，`v5/` 是 v5 文档。保留生成的 HTML 并随源码一起提交，GitHub Pages 可以直接托管。原有 URL 仍在根目录。

- 发新版本后，在 `docs/site/build.cjs` 更新对应系列的标签。使用实际发布标签，`v5` 分支末尾已是 `v6.0.0`。
- 在 `docs/site/base.cjs` 和 `docs/site/details.cjs` 更新说明、调用示例和目录分组。脚本从各标签的 Less 源文件提取参数签名，并读取该版本的 Reset 源码。`baseEntry` 保存 Base 各系列行为的差异。
- v6 的 Usage 位于 `usage.html`，内容维护在 `docs/site/usage.cjs`。安装、引入和通用参数说明集中于此页。此页切换到 v5 时进入 v5 的 Base 文档。
- `docs/site/page.html` 是共享模板，包含导航、版本切换和百度统计。`docs/site/previews.json` 保存原站的演示片段。原站样式继续由 `css/common.css` 等文件提供。
- 生成后检查各页面、版本切换和锚点。用 Less 4 验证示例时，Animation 需要 `--js`，Shape 中使用旧式除法的 mixin 需要 `--math=always`。
