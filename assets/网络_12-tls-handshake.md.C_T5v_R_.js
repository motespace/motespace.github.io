import{_ as a,o as n,c as p,a5 as e}from"./chunks/framework.Bt0SrEfo.js";const _=JSON.parse('{"title":"HTTPS 握手完整流程","description":"","frontmatter":{},"headers":[],"relativePath":"网络/12-tls-handshake.md","filePath":"网络/12-tls-handshake.md","lastUpdated":1790007753000}'),l={name:"网络/12-tls-handshake.md"};function t(i,s,c,o,r,d){return n(),p("div",null,[...s[0]||(s[0]=[e(`<h1 id="https-握手完整流程" tabindex="-1">HTTPS 握手完整流程 <a class="header-anchor" href="#https-握手完整流程" aria-label="Permalink to &quot;HTTPS 握手完整流程&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>客户端                                         服务器</span></span>
<span class="line"><span>  │                                              │</span></span>
<span class="line"><span>  │ ─ Client Hello ─────────────────────────→   │</span></span>
<span class="line"><span>  │   (TLS 版本、加密套件、随机数)               │</span></span>
<span class="line"><span>  │                                              │</span></span>
<span class="line"><span>  │ ← Server Hello ───────────────────────────  │</span></span>
<span class="line"><span>  │   (选定的加密套件、随机数、证书)             │</span></span>
<span class="line"><span>  │                                              │</span></span>
<span class="line"><span>  │ 验证证书（用本地 CA 公钥验证签名）          │</span></span>
<span class="line"><span>  │                                              │</span></span>
<span class="line"><span>  │ ─ Key Exchange ──────────────────────────→  │</span></span>
<span class="line"><span>  │   (用服务器公钥加密的预主密钥)               │</span></span>
<span class="line"><span>  │                                              │</span></span>
<span class="line"><span>  │ ← Server Finished ────────────────────────  │</span></span>
<span class="line"><span>  │                                              │</span></span>
<span class="line"><span>  │ 双方用预主密钥生成对称密钥                   │</span></span>
<span class="line"><span>  │                                              │</span></span>
<span class="line"><span>  │ ─ Client Finished ────────────────────────  │</span></span>
<span class="line"><span>  │                                              │</span></span>
<span class="line"><span>  │ ─── 加密的 HTTP 通信 ──────────────────────  │</span></span></code></pre></div><h3 id="关键点" tabindex="-1">关键点： <a class="header-anchor" href="#关键点" aria-label="Permalink to &quot;关键点：&quot;">​</a></h3><ul><li><strong>非对称加密</strong>（RSA/ECDHE）用于交换密钥</li><li><strong>对称加密</strong>（AES）用于加密实际数据</li><li><strong>散列</strong>（SHA-256）用于完整性校验</li></ul>`,4)])])}const u=a(l,[["render",t]]);export{_ as __pageData,u as default};
