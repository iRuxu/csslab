module.exports = version => [
    {
        id: 'install',
        title: '安装依赖',
        content: [
            '在已有的 Vue 3 + Vite 项目中安装 CssLab 和 Less 编译器。以下示例对应当前 v6 文档版本。',
            { language: 'bash', code: 'npm install csslab@' + version + '\nnpm install -D less@^4' },
        ],
    },
    {
        id: 'imports',
        title: '引入函数库',
        content: [
            '在 Less 文件中按需引入对应的函数库。基础方法使用 base.less，图形、动画和悬停效果分别使用其他模块。',
            {
                language: 'less',
                code: `@import "csslab/base.less";      // 基础方法
@import "csslab/shape.less";     // CSS 图形
@import "csslab/animation.less"; // 基础动画
@import "csslab/twinkle.less";   // 扩展动画`,
            },
            '在 Vite 项目中，可使用下方的 additionalData 配置统一注入需要的函数库。',
        ],
    },
    {
        id: 'vite',
        title: 'Vite 全局注入',
        content: [
            '在 vite.config.js 中配置 css.preprocessorOptions.less。additionalData 会在每个 Less 样式入口前注入这些内容，组件中即可直接调用 CssLab 的 mixin。将下面的 resolve 和 css 配置合并到项目已有配置中。',
            {
                language: 'javascript',
                code: `import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
                // 全局注入变量、mixin
                additionalData: \`
                    @import "@/assets/css/var.less";
                    @import "@/assets/css/mixin.less";
                    @import "csslab/base.less";
                \`,
            },
        },
    },
});`,
            },
            '@ 指向 src 目录。var.less 和 mixin.less 是项目自己的文件，可分别放公共变量和自定义 mixin。请按项目实际路径调整，未使用的文件可删除对应的 import 行。',
            'javascriptEnabled 启用 Less 内联 JavaScript。CssLab 的 animation.less 用它生成关键帧名称，单独使用 base.less 时可省略这个选项。',
        ],
    },
    {
        id: 'component',
        title: '在 Vue 组件中使用',
        content: [
            '样式块声明 lang="less" 后，可以直接调用 .flex()、.size()、.fz() 等方法。scoped 可按组件需要保留。',
            {
                language: 'html',
                code: `<template>
    <div class="demo-card">CssLab</div>
</template>

<style lang="less" scoped>
.demo-card {
    .flex(o);
    .size(240px, 120px);
    .fz(18px, 1.5);
    .r(8px);
    .color(#333);
    background: #f7f7f7;
}
</style>`,
            },
            '这些调用会在构建时编译成普通 CSS。',
        ],
    },
    {
        id: 'parameters',
        title: '阅读参数与示例',
        content: [
            'Reference 中的方法签名列出参数名，冒号后是参数默认值。有默认值的参数可以省略，调用 mixin 时以分号结尾。代码块内每行是独立的调用示例。',
            {
                language: 'less',
                code: `// 签名为 .fz(@font-size, @line-height: false)
.title { .fz(18px); }       // 仅设置字号
.title { .fz(18px, 1.5); }  // 同时设置字号和行高`,
            },
        ],
    },
    {
        id: 'reset',
        title: '引入全局重置样式',
        content: [
            '需要浏览器样式重置时，在 src/main.js 中一次性引入 reset.css。additionalData 中适合放变量和 mixin，reset.css 这类直接输出全局规则的文件放在应用入口，可避免在多个组件中重复生成。',
            { language: 'javascript', code: 'import "csslab/reset.css";' },
        ],
    },
];
