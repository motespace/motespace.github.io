import{_ as s,o as n,c as t,a5 as e}from"./chunks/framework.Bt0SrEfo.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"前端/browser/1-architecture.md","filePath":"前端/browser/1-architecture.md","lastUpdated":1789788214000}'),p={name:"前端/browser/1-architecture.md"};function r(l,a,i,d,c,o){return n(),t("div",null,[...a[0]||(a[0]=[e(`<h2 id="_1-浏览器架构" tabindex="-1">1. 浏览器架构 <a class="header-anchor" href="#_1-浏览器架构" aria-label="Permalink to &quot;1. 浏览器架构&quot;">​</a></h2><h3 id="_1-1-现代浏览器是多进程的" tabindex="-1">1.1 现代浏览器是多进程的 <a class="header-anchor" href="#_1-1-现代浏览器是多进程的" aria-label="Permalink to &quot;1.1 现代浏览器是多进程的&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>浏览器主进程 (Browser Process)</span></span>
<span class="line"><span>├── 用户界面（地址栏、菜单、书签）</span></span>
<span class="line"><span>├── 网络进程管理</span></span>
<span class="line"><span>└── 渲染进程管理</span></span>
<span class="line"><span></span></span>
<span class="line"><span>渲染进程 (Renderer Process) — 每个 Tab 一个</span></span>
<span class="line"><span>├── GUI 渲染线程（负责页面渲染）</span></span>
<span class="line"><span>├── JS 引擎线程（执行 JS）</span></span>
<span class="line"><span>├── 事件触发线程（事件循环）</span></span>
<span class="line"><span>├── 定时器线程（setTimeout / setInterval）</span></span>
<span class="line"><span>├── 异步 HTTP 请求线程</span></span>
<span class="line"><span>└── 合成线程（CSS 动画 / 滚动）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>GPU 进程（3D 绘制）</span></span>
<span class="line"><span>插件进程（PDF、Flash）</span></span></code></pre></div><p><strong>为什么是多进程？</strong></p><ul><li>稳定性：一个页面崩溃不影响其他页面</li><li>安全性：进程隔离，恶意页面无法访问其他进程</li><li>性能：不同进程可以并行执行</li></ul><h3 id="_1-2-浏览器内核对比" tabindex="-1">1.2 浏览器内核对比 <a class="header-anchor" href="#_1-2-浏览器内核对比" aria-label="Permalink to &quot;1.2 浏览器内核对比&quot;">​</a></h3><table tabindex="0"><thead><tr><th>浏览器</th><th>内核</th><th>JS 引擎</th></tr></thead><tbody><tr><td>Chrome</td><td>Blink</td><td>V8</td></tr><tr><td>Safari</td><td>WebKit</td><td>JavaScriptCore</td></tr><tr><td>Firefox</td><td>Gecko</td><td>SpiderMonkey</td></tr><tr><td>Edge (新)</td><td>Blink</td><td>V8</td></tr></tbody></table>`,7)])])}const u=s(p,[["render",r]]);export{_ as __pageData,u as default};
