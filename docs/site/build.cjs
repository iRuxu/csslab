const { execFileSync } = require('node:child_process');
const { mkdirSync, readFileSync, writeFileSync } = require('node:fs');
const path = require('node:path');

const base = require('./base.cjs');
const details = require('./details.cjs');
const previews = require('./previews.json');
const usage = require('./usage.cjs');
const root = path.resolve(__dirname, '../..');
const template = readFileSync(path.join(__dirname, 'page.html'), 'utf8');

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

function code(value, language = 'less') {
    return '<pre><code class="' + language + '">' + escape(value) + '</code></pre>';
}

function sidebar(title, links) {
    return '<h2 class="m-sidebar-title">' + title + '<span></span></h2>\n'
        + '<ul class="m-sidebar-list" id="m-sidebar-list">\n' + links.join('\n') + '\n</ul>';
}

function sidebarLink(id, title) {
    return '<li><a href="#' + id + '">' + title + '</a></li>';
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

function renderMixins(page, release) {
    const signatures = signatureMap(readRelease(release.tag, page + '.less'));
    const groups = page === 'base' ? base : details[page];
    const links = [];
    const intro = 'npm install csslab@' + release.tag.slice(1);
    const importPath = 'csslab/' + page + '.less';
    const usage = {
        animation: '动画调用会用 Less 内联 JavaScript 生成关键帧名称。编译时需启用 javascriptEnabled，命令行对应 --js。@time、@ease 和 @fillmode 分别表示时长、缓动和填充模式。',
        shape: '在 Less 4 中，圆形和叶片等 mixin 的旧式除法需要 math: always，命令行对应 --math=always。',
    };
    const defaults = '签名中的冒号后是参数默认值。代码块内每行是独立的调用示例。';
    const tips = [];
    if (release.label === 'v5') {
        tips.push('<code>' + intro + '</code>', '<code>' + escape('@import "' + importPath + '";') + '</code>', defaults);
    }
    if (usage[page]) tips.push(usage[page]);
    const sections = tips.length ? ['<p class="m-tips">' + tips.join('<br>') + '</p>'] : [];

    for (const [group, entries] of Object.entries(groups)) {
        links.push('<h4>' + group + '</h4>');
        for (const [name, entry] of Object.entries(entries)) {
            let overloads = signatures.get(name);
            if (!overloads) {
                const v6Only = ['number', 'fontface', 'underline', 'ratio', 'gap', 'noclick', 'scrollbar'];
                if (page === 'base' && release.label === 'v5' && v6Only.includes(name)) continue;
                throw new Error(release.tag + ' ' + page + '.less is missing .' + name);
            }
            const deprecatedPosition = name === 'pr' && group === '已弃用';
            if (name === 'pr') {
                overloads = overloads.filter(signature => signature.includes('@padding') === deprecatedPosition);
            }
            const id = deprecatedPosition ? '.pr-padding' : '.' + name;
            const [title, description, ...examples] = page === 'base' ? baseEntry(release, name, entry, group) : entry;
            const calls = examples.map(args => '.example { '
                + (name === 'arrow' || name === 'arrows' ? 'position: relative; ' : '')
                + '.' + name + '(' + args + '); }');
            links.push(sidebarLink(id, deprecatedPosition ? '.pr(@padding)' : '.' + name));
            sections.push(
                '<div class="m-content-list-item" id="' + id + '">\n'
                + '<h3><b>.' + name + '</b><span>' + overloads.map(signature => escape(signature || '（无参数）')).join(' / ')
                + '</span><i>' + escape(title) + '</i></h3>\n'
                + '<p>' + escape(description) + '</p>\n'
                + code(calls.join('\n')) + '\n'
                + (previews[name] || '') + '\n</div>',
            );
        }
    }
    return { sidebar: sidebar(pages[page][0], links), content: sections.join('\n\n') };
}

function renderReset(release) {
    const less = readRelease(release.tag, 'reset.less');
    const css = readRelease(release.tag, 'reset.css');
    const sections = less.split(/\/\*-+\n├\s+([^\n]+?)\s+┆\n└-+\*\//);
    const intro = release.label === 'v6'
        ? '此版为 body 增加系统字体栈，应用全局 outline 重置，并在表单规则中为 Firefox 的按钮恢复焦点样式。'
        : '此版包含文档、区块、嵌入内容、文字和表单的全局重置，并保留旧浏览器的兼容声明。';
    const content = ['<p class="m-tips">' + intro + '<br>在 Less 中引入 <code>csslab/reset.less</code>，或直接加载包内的 <code>reset.css</code>。</p>'];
    const links = [];
    const add = (id, title, source, language) => {
        links.push(sidebarLink(id, title));
        content.push('<h3 id="' + id + '"><b>' + title + '</b></h3>\n' + code(source.trim(), language));
    };
    add('Charset', 'Charset', sections[0].replace(/^\s*\/\*[\s\S]*?\*\//, ''), 'less');
    const anchors = { 'Embedded content': 'Embedded', Forms: 'Form' };
    for (let index = 1; index < sections.length; index += 2) {
        const title = sections[index];
        add(anchors[title] || title, title, sections[index + 1], 'less');
    }
    add('CSS', 'reset.css', css, 'css');
    return { sidebar: sidebar('Reset', links), content: content.join('\n\n'), contentClass: ' m-content-reset' };
}

function renderUsage(release) {
    const sections = usage(release.tag.slice(1));
    return {
        sidebar: sidebar(pages.usage[0], sections.map(section => sidebarLink(section.id, section.title))),
        content: sections.map(section =>
            '<div class="m-content-list-item" id="' + section.id + '">\n'
            + '<h3><b>' + section.title + '</b></h3>\n'
            + section.content.map(block => typeof block === 'string'
                ? '<p>' + escape(block) + '</p>'
                : code(block.code, block.language)).join('\n')
            + '\n</div>').join('\n\n')
            + '<p><a href="https://vite.dev/config/shared-options#css-preprocessoroptions">Vite 官方文档 · CSS 预处理器配置</a></p>',
    };
}

function renderPage(page, release) {
    if (page === 'usage') return renderUsage(release);
    if (page === 'reset') return renderReset(release);
    if (page === 'gradient') {
        return { sidebar: '', content: '<p class="m-tips">文字渐变的用法见 <a href="index.html#.color">Base · .color</a>。</p>' };
    }
    return renderMixins(page, release);
}

function buildPage(release, page) {
    const [, file] = pages[page];
    const assets = release.directory ? '../' : './';
    const { sidebar: menu, content, contentClass = '' } = renderPage(page, release);
    const data = {
        assets,
        home: 'index.html',
        previewScript: page === 'twinkle' || page === 'animation'
            ? '<script async src="https://public.codepenassets.com/embed/index.js"></script>' : '',
        sidebar: menu,
        content,
        contentClass,
        referenceAttributes: page === 'usage' ? '' : ' class="on"',
        usageNavigation: release.label === 'v6'
            ? '\t\t\t\t<li' + (page === 'usage' ? ' class="on"' : '')
                + '><a class="m-menu-item" href="usage.html">' + pages.usage[0] + '</a></li>' : '',
        navigation: Object.entries(pages).filter(([key]) => key !== 'gradient' && key !== 'usage').map(([key, [name, href]]) =>
            '\t\t\t\t\t\t<li' + (key === page ? ' class="on"' : '') + '><a class="m-submenu-item" href="'
            + href + '">' + name + '</a></li>').join('\n'),
        versions: releases.map(option => {
            const selected = option === release;
            const targetPage = page === 'usage' && option.label === 'v5' ? 'base' : page;
            const [, targetFile] = pages[targetPage];
            const href = selected ? file : assets + option.directory + targetFile;
            return '\t\t\t\t<option value="' + href + '"' + (selected ? ' selected' : '')
                + '>' + option.tag + '</option>';
        }).join('\n'),
    };
    writeFileSync(path.join(root, release.directory, file), template.replace(/{{(\w+)}}/g, (_, key) => data[key]));
}

for (const release of releases) {
    mkdirSync(path.join(root, release.directory), { recursive: true });
    for (const page of Object.keys(pages)) {
        if (page === 'usage' && release.label !== 'v6') continue;
        buildPage(release, page);
    }
}
