import{_ as s,o as n,c as p,a5 as e}from"./chunks/framework.Bt0SrEfo.js";const _=JSON.parse('{"title":"TCP 三次握手与四次挥手","description":"","frontmatter":{},"headers":[],"relativePath":"网络/15-tcp-handshake.md","filePath":"网络/15-tcp-handshake.md","lastUpdated":1790091846000}'),t={name:"网络/15-tcp-handshake.md"};function l(i,a,c,o,d,r){return n(),p("div",null,[...a[0]||(a[0]=[e(`<h1 id="tcp-三次握手与四次挥手" tabindex="-1">TCP 三次握手与四次挥手 <a class="header-anchor" href="#tcp-三次握手与四次挥手" aria-label="Permalink to &quot;TCP 三次握手与四次挥手&quot;">​</a></h1><h3 id="_15-1-三次握手-建立连接" tabindex="-1">15.1 三次握手（建立连接） <a class="header-anchor" href="#_15-1-三次握手-建立连接" aria-label="Permalink to &quot;15.1 三次握手（建立连接）&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>客户端                                    服务器</span></span>
<span class="line"><span>  │                                       │</span></span>
<span class="line"><span>  │ ─ SYN seq=x ────────────────────────→ │  ← 第一次</span></span>
<span class="line"><span>  │                                       │</span></span>
<span class="line"><span>  │ ← SYN seq=y, ACK=x+1 ─────────────── │  ← 第二次</span></span>
<span class="line"><span>  │                                       │</span></span>
<span class="line"><span>  │ ─ ACK=y+1 ──────────────────────────→ │  ← 第三次</span></span>
<span class="line"><span>  │                                       │</span></span>
<span class="line"><span>  │ ──── 数据传输 ──────────────────────→ │</span></span></code></pre></div><p><strong>为什么是 3 次</strong>：确保双方都能收发。</p><h3 id="_15-2-四次挥手-关闭连接" tabindex="-1">15.2 四次挥手（关闭连接） <a class="header-anchor" href="#_15-2-四次挥手-关闭连接" aria-label="Permalink to &quot;15.2 四次挥手（关闭连接）&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>客户端                                    服务器</span></span>
<span class="line"><span>  │                                       │</span></span>
<span class="line"><span>  │ ─ FIN seq=x ────────────────────────→ │  ← 第一次</span></span>
<span class="line"><span>  │                                       │</span></span>
<span class="line"><span>  │ ← ACK=x+1 ────────────────────────── │  ← 第二次</span></span>
<span class="line"><span>  │                                       │</span></span>
<span class="line"><span>  │ ← FIN seq=y, ACK=x+1 ─────────────── │  ← 第三次</span></span>
<span class="line"><span>  │                                       │</span></span>
<span class="line"><span>  │ ─ ACK=y+1 ──────────────────────────→ │  ← 第四次</span></span>
<span class="line"><span>  │                                       │</span></span></code></pre></div><p><strong>为什么是 4 次</strong>：服务器可能还有数据要发，FIN 和 ACK 分开发。</p>`,7)])])}const u=s(t,[["render",l]]);export{_ as __pageData,u as default};
