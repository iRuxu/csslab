let loading;

export async function renderPreviews() {
    if (!loading) {
        loading = new Promise(resolve => {
            const script = document.createElement('script');
            script.src = 'https://public.codepenassets.com/embed/index.js';
            script.async = true;
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.head.appendChild(script);
        });
    }
    if (await loading) window.__CPEmbed?.();
}
