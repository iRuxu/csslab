import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const root = fileURLToPath(new URL('.', import.meta.url));
const sourceDirectory = path.join(root, 'docs/site');

function buildDocs() {
    execFileSync(process.execPath, [path.join(sourceDirectory, 'build.cjs')], {
        cwd: root,
        stdio: 'inherit',
    });
}

export default defineConfig({
    root,
    appType: 'mpa',
    publicDir: false,
    server: {
        host: '127.0.0.1',
        port: 5173,
        open: true,
    },
    plugins: [{
        name: 'csslab-docs',
        configureServer(server) {
            buildDocs();
            let rebuildTimer;
            server.watcher.on('all', (event, file) => {
                if (!['add', 'change', 'unlink'].includes(event)
                    || !file.startsWith(sourceDirectory + path.sep)) return;

                clearTimeout(rebuildTimer);
                rebuildTimer = setTimeout(() => {
                    try {
                        buildDocs();
                        server.ws.send({ type: 'full-reload' });
                    } catch (error) {
                        server.config.logger.error('文档生成失败，请修正后保存。\n' + error.message);
                    }
                }, 100);
            });
            server.httpServer?.once('close', () => clearTimeout(rebuildTimer));
        },
    }],
});
