<template>
    <SiteHeader />
    <RouterView :key="$route.path" />
</template>

<script>
import SiteHeader from './components/SiteHeader.vue';

export default {
    components: { SiteHeader },
};
</script>
