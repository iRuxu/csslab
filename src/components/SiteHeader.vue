<template>
    <div class="m-top">
        <div class="m-rainbow"></div>
        <div class="m-header">
            <h1 class="m-logo">
                <RouterLink class="u-name" :to="home">Csslab</RouterLink>
                <em class="u-domain"><span>.CC</span></em>
                <select class="u-version" aria-label="文档版本" title="切换文档版本" :value="version" @change="switchVersion">
                    <option v-for="release in releases" :key="release.label" :value="release.label">{{ release.tag }}</option>
                </select>
                <a class="u-type" href="http://www.mgtv.com" target="_blank"><i></i>MGTV</a>
            </h1>
            <div class="m-author">
                <a class="u-github" href="https://github.com/iRuxu/CssLab" target="_blank">Github</a>
            </div>
            <div class="m-menu">
                <ul>
                    <li :class="{ on: page !== 'usage' }">
                        <RouterLink class="m-menu-item" :to="home">Reference</RouterLink>
                        <ul class="m-submenu">
                            <li v-for="item in referencePages" :key="item.page" :class="{ on: page === item.page }">
                                <RouterLink class="m-submenu-item" :to="item.path">{{ item.title }}</RouterLink>
                            </li>
                        </ul>
                    </li>
                    <li v-if="version === 'v6'" :class="{ on: page === 'usage' }">
                        <RouterLink class="m-menu-item" to="/usage.html">Usage</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
        <div class="m-submenu-bg"></div>
    </div>
</template>

<script>
import documentation from 'virtual:documentation';

export default {
    data() {
        return { releases: documentation.releases };
    },
    computed: {
        version() { return this.$route.meta.version || 'v6'; },
        page() { return this.$route.meta.page || 'base'; },
        home() { return this.version === 'v5' ? '/v5/index.html' : '/index.html'; },
        referencePages() {
            return documentation.documents.filter(item => item.version === this.version && !['usage', 'gradient'].includes(item.page));
        },
    },
    methods: {
        switchVersion(event) {
            const version = event.target.value;
            const page = version === 'v5' && this.page === 'usage' ? 'base' : this.page;
            const target = documentation.documents.find(item => item.version === version && item.page === page);
            this.$router.push(target.path);
        },
    },
};
</script>
