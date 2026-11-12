import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';
import { initializeAnalytics, trackPageView } from './analytics.js';
import './styles/site.css';

router.afterEach((to, from, failure) => {
    if (!failure && from.matched.length && to.path !== from.path) trackPageView(to.fullPath.split('#')[0]);
});

const app = createApp(App);
app.use(router);
router.isReady().then(() => {
    app.mount('#app');
    initializeAnalytics();
});
