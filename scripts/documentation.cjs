const { execFileSync } = require('node:child_process');
const path = require('node:path');
const base = require('../content/base.cjs');
const details = require('../content/details.cjs');
const previews = require('../content/previews.json');
const usage = require('../content/usage.cjs');
const root = path.resolve(__dirname, '..');

const releases = [
    { label: 'v5', tag: 'v5.0.2', directory: 'v5/' },
    { label: 'v6', tag: 'v6.0.6', directory: '' },
];
const pages = {
    base: ['Base', 'index.html'],
    shape: ['Shape', 'shape.html'],
    animation: ['Animation', 'animation.html'],
    twinkle: ['Twinkle', 'twinkle.html'],
    reset: ['Reset', 'reset.html'],
    gradient: ['Gradient', 'gradient.html'],
    usage: ['Usage', 'usage.html'],
};

function readRelease(tag, file) {
    return execFileSync('git', ['show', tag + ':' + file], { cwd: root, encoding: 'utf8' });
}

function escape(value) {
    return value.replace(/&/g, '&amp;').replace(/</g, '&lt;')
        .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function signatureMap(source) {
    const result = new Map();
    // Match the declaration style of the release files, including v5's class mixins.
    const pattern = /^[\t ]*\.([\w-]+)(\([^\n{}]*?\))?[\t ]*(?:when[^\n{}]+)?\{/gm;
    for (const [, name, parameters] of source.matchAll(pattern)) {
        const signatures = result.get(name) || [];
        signatures.push(parameters || '');
        result.set(name, signatures);
    }
    return result;
}

function baseEntry(release, name, entry, group) {
    const [title, description, ...args] = entry;
    const gridNote = ' x 重载也会命中通用重载，生成的 grid-template-rows: repeat(x, 1fr) 会被浏览器忽略。';
    if (release.label === 'v6') {
        const notes = {
            fz: '设置字号。省略行高时只输出 font-size，可使用 .lh() 单独设置高度。',
            lh: '设置行高。只有传入第二个参数时才输出 height。',
            grid: description + ' .grid(x, 3) 使用 minmax(0, 1fr) 固定三列，.grid(x, 240px) 用 auto-fill 按最小列宽自动排布。' + gridNote,
        };
        return [title, notes[name] || description, ...args, ...(name === 'grid' ? ['x, 240px'] : [])];
    }
    const notes = {
        fz: '依次设置字号、行高和高度。省略后两项时仍输出 line-height: inherit 和 height: auto。',
        lh: '设置行高和高度。省略第二个参数时输出 height: auto。',
        grid: description + ' .grid(x, 3) 使用 repeat(3, 1fr) 固定三列。' + gridNote,
        pr: '设置 position: relative，并输出旧 IE 的 *zoom: 1。',
        dbi: '设置 display: inline-block，并输出旧 IE 的 *display: inline 和 *zoom: 1。',
        clip: '设置 overflow: hidden，并输出旧 IE 的 *zoom: 1。',
        fl: '设置 float: left，并输出旧 IE 的 *display: inline。',
        fr: '设置 float: right，并输出旧 IE 的 *display: inline。',
        clearfix: description + ' 同时输出旧 IE 的 *zoom: 1。',
    };
    const examples = name === 'fz' ? ['16px', ...args, '16px, 24px, 32px'] : args;
    return [title, group === '已弃用' ? description : notes[name] || description, ...examples];
}

function mixinDocument(page, release) {
    const signatures = signatureMap(readRelease(release.tag, page + '.less'));
    const definitions = page === 'base' ? base : details[page];
    const groups = [];
    const sections = [];
    const tips = [];
    if (release.label === 'v5') {
        tips.push('<code>npm install csslab@' + release.tag.slice(1) + '</code>');
        tips.push('<code>' + escape('@import "csslab/' + page + '.less";') + '</code>');
        tips.push('签名中的冒号后是参数默认值。代码块内每行是独立的调用示例。');
    }
    const moduleTips = {
        animation: '动画调用会用 Less 内联 JavaScript 生成关键帧名称。编译时需启用 javascriptEnabled，命令行对应 --js。@time、@ease 和 @fillmode 分别表示时长、缓动和填充模式。',
        shape: '在 Less 4 中，圆形和叶片等 mixin 的旧式除法需要 math: always，命令行对应 --math=always。',
    };
    if (moduleTips[page]) tips.push(moduleTips[page]);

    for (const [group, entries] of Object.entries(definitions)) {
        const items = [];
        for (const [name, entry] of Object.entries(entries)) {
            let overloads = signatures.get(name);
            if (!overloads) {
                const v6Only = ['number', 'fontface', 'underline', 'ratio', 'gap', 'noclick', 'scrollbar'];
                if (page === 'base' && release.label === 'v5' && v6Only.includes(name)) continue;
                throw new Error(release.tag + ' ' + page + '.less is missing .' + name);
            }
            const padding = name === 'pr' && group === '已弃用';
            if (name === 'pr') overloads = overloads.filter(signature => signature.includes('@padding') === padding);
            const id = padding ? '.pr-padding' : '.' + name;
            const [title, description, ...examples] = page === 'base' ? baseEntry(release, name, entry, group) : entry;
            const code = examples.map(args => '.example { '
                + (name === 'arrow' || name === 'arrows' ? 'position: relative; ' : '')
                + '.' + name + '(' + args + '); }').join('\n');
            items.push({ id, label: padding ? '.pr(@padding)' : '.' + name });
            sections.push({
                id, name: '.' + name, title, description, code,
                signatures: overloads.map(signature => signature || '（无参数）').join(' / '),
                preview: previews[name] || '',
            });
        }
        groups.push({ title: group, items });
    }
    return { kind: 'mixins', groups, sections, tips };
}

function resetDocument(release) {
    const less = readRelease(release.tag, 'reset.less');
    const css = readRelease(release.tag, 'reset.css');
    const parts = less.split(/\/\*-+\n├\s+([^\n]+?)\s+┆\n└-+\*\//);
    const intro = release.label === 'v6'
        ? '此版为 body 增加系统字体栈，应用全局 outline 重置，并在表单规则中为 Firefox 的按钮恢复焦点样式。'
        : '此版包含文档、区块、嵌入内容、文字和表单的全局重置，并保留旧浏览器的兼容声明。';
    const tips = [intro, '在 Less 中引入 <code>csslab/reset.less</code>，或直接加载包内的 <code>reset.css</code>。'];
    const sections = [{
        id: 'Charset', title: 'Charset', language: 'less',
        code: parts[0].replace(/^\s*\/\*[\s\S]*?\*\//, '').trim(),
    }];
    const anchors = { 'Embedded content': 'Embedded', Forms: 'Form' };
    for (let index = 1; index < parts.length; index += 2) {
        const title = parts[index];
        sections.push({ id: anchors[title] || title, title, language: 'less', code: parts[index + 1].trim() });
    }
    sections.push({ id: 'CSS', title: 'reset.css', code: css.trim(), language: 'css' });
    const groups = [{ items: sections.map(({ id, title }) => ({ id, label: title })) }];
    return { kind: 'reset', groups, sections, tips };
}

function usageDocument(release) {
    const sections = usage(release.tag.slice(1));
    const groups = [{ items: sections.map(({ id, title }) => ({ id, label: title })) }];
    return { kind: 'usage', groups, sections, tips: [] };
}

function createDocumentation() {
    const documents = [];
    for (const release of releases) {
        for (const [page, [title, file]] of Object.entries(pages)) {
            if (page === 'usage' && release.label !== 'v6') continue;
            let content;
            if (page === 'reset') content = resetDocument(release);
            else if (page === 'usage') content = usageDocument(release);
            else if (page === 'gradient') content = { kind: 'gradient', groups: [], sections: [], tips: [] };
            else content = mixinDocument(page, release);
            documents.push({ version: release.label, page, title, path: '/' + release.directory + file, ...content });
        }
    }
    return { releases, documents };
}

module.exports = { createDocumentation };
