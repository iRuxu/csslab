import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const root = fileURLToPath(new URL('.', import.meta.url));
const require = createRequire(import.meta.url);
const contentDirectory = path.join(root, 'content') + path.sep;
const documentationScript = path.join(root, 'scripts/documentation.cjs');
const virtualId = 'virtual:documentation';
const resolvedId = '\0' + virtualId;

function readDocumentation() {
    for (const file of Object.keys(require.cache)) {
        if (file === documentationScript || file.startsWith(contentDirectory)) delete require.cache[file];
    }
    return require(documentationScript).createDocumentation();
}

export default defineConfig({
    base: '/',
    server: { host: '127.0.0.1', port: 5173, open: true },
    build: { outDir: 'docs', emptyOutDir: true },
    plugins: [
        vue(),
        {
            name: 'csslab-documentation',
            resolveId(id) {
                if (id === virtualId) return resolvedId;
            },
            load(id) {
                if (id === resolvedId) return 'export default ' + JSON.stringify(readDocumentation());
            },
            handleHotUpdate(context) {
                if (context.file === documentationScript || context.file.startsWith(contentDirectory)) {
                    const module = context.server.moduleGraph.getModuleById(resolvedId);
                    if (module) context.server.moduleGraph.invalidateModule(module);
                    context.server.ws.send({ type: 'full-reload' });
                    return [];
                }
            },
            generateBundle: {
                order: 'post',
                handler(_, bundle) {
                    // GitHub Pages serves each existing .html URL directly, without server rewrites.
                    const entry = bundle['index.html'];
                    if (!entry) throw new Error('Missing built index.html');
                    for (const document of readDocumentation().documents) {
                        const fileName = document.path.slice(1);
                        if (fileName === 'index.html') continue;
                        this.emitFile({ type: 'asset', fileName, source: entry.source });
                    }
                },
            },
        },
    ],
});
