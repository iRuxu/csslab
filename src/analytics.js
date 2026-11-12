export function initializeAnalytics() {
    if (document.querySelector('[data-csslab-analytics]')) return;
    window._hmt = window._hmt || [];
    const script = document.createElement('script');
    script.dataset.csslabAnalytics = 'true';
    script.src = 'https://hm.baidu.com/hm.js?e407a7627dea00b42ebe30955641936b';
    script.async = true;
    document.head.appendChild(script);
}

export function trackPageView(path) {
    window._hmt = window._hmt || [];
    window._hmt.push(['_trackPageview', path]);
}
