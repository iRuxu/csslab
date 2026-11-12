<template>
    <div class="m-sidebar">
        <template v-if="document.kind !== 'gradient'">
            <h2 class="m-sidebar-title">{{ document.title }}<span></span></h2>
            <ul class="m-sidebar-list" id="m-sidebar-list">
                <template v-for="(group, index) in document.groups" :key="index">
                    <h4 v-if="group.title">{{ group.title }}</h4>
                    <li v-for="item in group.items" :key="item.id" :class="{ current: $route.hash === '#' + item.id }">
                        <RouterLink :to="{ path: document.path, hash: '#' + item.id }" :aria-current="$route.hash === '#' + item.id ? 'location' : undefined">{{ item.label }}</RouterLink>
                    </li>
                </template>
            </ul>
        </template>
    </div>
    <div class="m-content" :class="{ 'm-content-reset': document.kind === 'reset' }" id="m-content-list" ref="content">
        <p v-if="document.tips.length" class="m-tips" v-html="document.tips.join('<br>')"></p>
        <template v-if="document.kind === 'mixins'">
            <div v-for="section in document.sections" :key="section.id" class="m-content-list-item" :id="section.id">
                <h3><b>{{ section.name }}</b><span>{{ section.signatures }}</span><i>{{ section.title }}</i></h3>
                <p>{{ section.description }}</p>
                <CodeBlock :code="section.code" />
                <div v-if="section.preview" class="m-preview" v-html="section.preview"></div>
            </div>
        </template>
        <template v-else-if="document.kind === 'reset'">
            <template v-for="section in document.sections" :key="section.id">
                <h3 :id="section.id"><b>{{ section.title }}</b></h3>
                <CodeBlock :code="section.code" :language="section.language" />
            </template>
        </template>
        <template v-else-if="document.kind === 'usage'">
            <div v-for="section in document.sections" :key="section.id" class="m-content-list-item" :id="section.id">
                <h3><b>{{ section.title }}</b></h3>
                <template v-for="(block, index) in section.content" :key="index">
                    <p v-if="typeof block === 'string'">{{ block }}</p>
                    <CodeBlock v-else :code="block.code" :language="block.language" />
                </template>
            </div>
            <p><a href="https://vite.dev/config/shared-options#css-preprocessoroptions">Vite 官方文档 · CSS 预处理器配置</a></p>
        </template>
        <p v-else class="m-tips">文字渐变的用法见 <RouterLink :to="{ path: home, hash: '#.color' }">Base · .color</RouterLink>。</p>
    </div>
</template>

<script>
import CodeBlock from './CodeBlock.vue';
import { renderPreviews } from '../previews.js';

export default {
    components: { CodeBlock },
    props: { document: { type: Object, required: true } },
    computed: {
        home() { return this.document.version === 'v5' ? '/v5/index.html' : '/index.html'; },
    },
    mounted() {
        this.updatePreviews();
    },
    watch: {
        document() { this.updatePreviews(); },
    },
    methods: {
        async updatePreviews() {
            await this.$nextTick();
            if (this.$refs.content.querySelector('.codepen')) renderPreviews();
        },
    },
};
</script>
