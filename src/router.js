import { nextTick } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import documentation from 'virtual:documentation';
import DocumentPage from './components/DocumentPage.vue';

export default createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        ...documentation.documents.map(document => ({
            path: document.path,
            alias: document.page === 'base' ? (document.version === 'v5' ? '/v5/' : '/') : [],
            component: DocumentPage,
            props: { document },
            meta: { version: document.version, page: document.page },
        })),
        { path: '/:pathMatch(.*)*', redirect: '/' },
    ],
    async scrollBehavior(to, from, savedPosition) {
        await nextTick();
        if (savedPosition) return savedPosition;
        if (to.hash) {
            const element = window.document.getElementById(decodeURIComponent(to.hash.slice(1)));
            if (element) return { el: element, top: 99 };
        }
        return { top: 0 };
    },
});
