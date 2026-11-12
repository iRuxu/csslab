<template>
    <pre><code ref="code"></code></pre>
</template>

<script>
export default {
    props: {
        code: { type: String, required: true },
        language: { type: String, default: 'less' },
    },
    mounted() {
        this.highlight();
    },
    watch: {
        code() { this.highlight(); },
        language() { this.highlight(); },
    },
    methods: {
        highlight() {
            const element = this.$refs.code;
            element.textContent = this.code;
            element.className = this.language;
            window.hljs?.highlightBlock(element);
        },
    },
};
</script>
