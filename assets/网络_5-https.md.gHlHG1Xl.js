import{_ as a,o as n,c as p,a5 as i}from"./chunks/framework.Bt0SrEfo.js";const k=JSON.parse('{"title":"HTTPS 详解","description":"","frontmatter":{},"headers":[],"relativePath":"网络/5-https.md","filePath":"网络/5-https.md","lastUpdated":1790177750000}'),e={name:"网络/5-https.md"};function t(l,s,h,c,d,r){return n(),p("div",null,[...s[0]||(s[0]=[i(`<h1 id="https-详解" tabindex="-1">HTTPS 详解 <a class="header-anchor" href="#https-详解" aria-label="Permalink to &quot;HTTPS 详解&quot;">​</a></h1><h3 id="_5-1-为什么需要-https" tabindex="-1">5.1 为什么需要 HTTPS <a class="header-anchor" href="#_5-1-为什么需要-https" aria-label="Permalink to &quot;5.1 为什么需要 HTTPS&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>HTTP 问题：</span></span>
<span class="line"><span>1. 明文传输：抓包可看所有内容（密码、Cookie）</span></span>
<span class="line"><span>2. 不验证身份：可能连接到伪装的服务器</span></span>
<span class="line"><span>3. 不验证完整性：传输过程中可能被篡改</span></span></code></pre></div><h3 id="_5-2-https-http-tls-ssl" tabindex="-1">5.2 HTTPS = HTTP + TLS/SSL <a class="header-anchor" href="#_5-2-https-http-tls-ssl" aria-label="Permalink to &quot;5.2 HTTPS = HTTP + TLS/SSL&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>HTTP</span></span>
<span class="line"><span>  ↓</span></span>
<span class="line"><span>TLS 握手（加密通道建立）</span></span>
<span class="line"><span>  ↓</span></span>
<span class="line"><span>加密的 HTTP 通信</span></span></code></pre></div><h3 id="_5-3-tls-1-3-握手过程-1-rtt" tabindex="-1">5.3 TLS 1.3 握手过程（1-RTT） <a class="header-anchor" href="#_5-3-tls-1-3-握手过程-1-rtt" aria-label="Permalink to &quot;5.3 TLS 1.3 握手过程（1-RTT）&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>客户端                                  服务器</span></span>
<span class="line"><span>  │                                      │</span></span>
<span class="line"><span>  │ ─ Client Hello (支持的加密套件) ─→  │</span></span>
<span class="line"><span>  │                                      │</span></span>
<span class="line"><span>  │ ← Server Hello + Certificate ──────  │</span></span>
<span class="line"><span>  │   (服务器证书 + 公钥)              │</span></span>
<span class="line"><span>  │                                      │</span></span>
<span class="line"><span>  │ 验证证书合法性                       │</span></span>
<span class="line"><span>  │                                      │</span></span>
<span class="line"><span>  │ ─ Key Share + Finished ─→          │</span></span>
<span class="line"><span>  │   (用服务器公钥加密的预主密钥)      │</span></span>
<span class="line"><span>  │                                      │</span></span>
<span class="line"><span>  │ ← Finished ───────────────────────  │</span></span>
<span class="line"><span>  │                                      │</span></span>
<span class="line"><span>  │ ──── 加密的 HTTP 通信 ─────────→   │</span></span></code></pre></div><p><strong>对比 TLS 1.2（2-RTT）</strong>：TLS 1.3 把握手从 2-RTT 降到 1-RTT，速度提升 50%+。</p><h3 id="_5-4-证书验证" tabindex="-1">5.4 证书验证 <a class="header-anchor" href="#_5-4-证书验证" aria-label="Permalink to &quot;5.4 证书验证&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>浏览器收到证书后验证：</span></span>
<span class="line"><span>1. 证书是否过期</span></span>
<span class="line"><span>2. 证书是否被 CA 签名（证书链验证）</span></span>
<span class="line"><span>3. 域名是否匹配（example.com vs www.example.com）</span></span>
<span class="line"><span>4. 是否被吊销（CRL / OCSP）</span></span></code></pre></div><h3 id="_5-5-真实项目-hsts-强制-https" tabindex="-1">5.5 真实项目：HSTS 强制 HTTPS <a class="header-anchor" href="#_5-5-真实项目-hsts-强制-https" aria-label="Permalink to &quot;5.5 真实项目：HSTS 强制 HTTPS&quot;">​</a></h3><div class="language-http vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 真实配置：来自简历项目</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Strict-Transport-Security</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> max-age=31536000; includeSubDomains; preload</span></span></code></pre></div><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Nginx 配置</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  listen </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">80</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  server_name </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">example.com;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 301</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> https://$host$request_uri;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,13)])])}const g=a(e,[["render",t]]);export{k as __pageData,g as default};
