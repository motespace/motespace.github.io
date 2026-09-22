import{_ as a,o as n,c as i,a5 as p}from"./chunks/framework.Bt0SrEfo.js";const o=JSON.parse('{"title":"HTTP/2 革命性改进","description":"","frontmatter":{},"headers":[],"relativePath":"网络/4-http2.md","filePath":"网络/4-http2.md","lastUpdated":1790091846000}'),e={name:"网络/4-http2.md"};function l(t,s,h,k,r,c){return n(),i("div",null,[...s[0]||(s[0]=[p(`<h1 id="http-2-革命性改进" tabindex="-1">HTTP/2 革命性改进 <a class="header-anchor" href="#http-2-革命性改进" aria-label="Permalink to &quot;HTTP/2 革命性改进&quot;">​</a></h1><h3 id="_4-1-二进制分帧-binary-framing" tabindex="-1">4.1 二进制分帧（Binary Framing） <a class="header-anchor" href="#_4-1-二进制分帧-binary-framing" aria-label="Permalink to &quot;4.1 二进制分帧（Binary Framing）&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>HTTP/1.1:</span></span>
<span class="line"><span>  ┌────────────┐</span></span>
<span class="line"><span>  │ Request 1  │  ← 文本格式</span></span>
<span class="line"><span>  └────────────┘</span></span>
<span class="line"><span>  ┌────────────┐</span></span>
<span class="line"><span>  │ Request 2  │</span></span>
<span class="line"><span>  └────────────┘</span></span>
<span class="line"><span></span></span>
<span class="line"><span>HTTP/2:</span></span>
<span class="line"><span>  ┌─────┐ ┌─────┐ ┌─────┐</span></span>
<span class="line"><span>  │帧1-1│ │帧1-2│ │帧2-1│  ← 二进制帧，可交错</span></span>
<span class="line"><span>  └─────┘ └─────┘ └─────┘</span></span>
<span class="line"><span>  同一个 TCP 连接，并行传输</span></span></code></pre></div><h3 id="_4-2-多路复用-multiplexing" tabindex="-1">4.2 多路复用（Multiplexing） <a class="header-anchor" href="#_4-2-多路复用-multiplexing" aria-label="Permalink to &quot;4.2 多路复用（Multiplexing）&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>连接 A：</span></span>
<span class="line"><span>  请求 1 → 响应 1</span></span>
<span class="line"><span>  请求 2 → 响应 2</span></span>
<span class="line"><span>  请求 3 → 响应 3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>HTTP/2 中：</span></span>
<span class="line"><span>  单连接上并行传输，没有队头阻塞</span></span></code></pre></div><h3 id="_4-3-头部压缩-hpack" tabindex="-1">4.3 头部压缩（HPACK） <a class="header-anchor" href="#_4-3-头部压缩-hpack" aria-label="Permalink to &quot;4.3 头部压缩（HPACK）&quot;">​</a></h3><div class="language-http vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># HTTP/1.1：每个请求都带完整 header</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">GET</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /api/users </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">HTTP</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.1</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Host</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> api.example.com</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">User-Agent</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Mozilla/5.0 ...</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Accept</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> */*</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Cookie</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> session=abc123 ...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># HTTP/2：相同 header 复用 + Huffman 编码</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 头部大小减少 80-90%</span></span></code></pre></div><h3 id="_4-4-服务器推送-server-push" tabindex="-1">4.4 服务器推送（Server Push） <a class="header-anchor" href="#_4-4-服务器推送-server-push" aria-label="Permalink to &quot;4.4 服务器推送（Server Push）&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>HTTP/2：</span></span>
<span class="line"><span>  浏览器请求 /index.html</span></span>
<span class="line"><span>  服务器主动推送 /style.css 和 /app.js</span></span>
<span class="line"><span>  浏览器无需再请求</span></span></code></pre></div><p><strong>实际</strong>：Server Push 已经被 HTTP/3 弃用，因为浏览器会自己处理 preload。</p><h3 id="_4-5-真实项目-http-2-配置" tabindex="-1">4.5 真实项目：HTTP/2 配置 <a class="header-anchor" href="#_4-5-真实项目-http-2-配置" aria-label="Permalink to &quot;4.5 真实项目：HTTP/2 配置&quot;">​</a></h3><div class="language-nginx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Nginx 启用 HTTP/2</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  listen </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">443</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ssl http2;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ssl_certificate </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    /path/to/cert.pem;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ssl_certificate_key </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/path/to/key.pem;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # SSL 配置</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ssl_protocols </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">TLSv1.2 TLSv1.3;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ssl_ciphers </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ssl_prefer_server_ciphers </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 真实项目：Next.js 自动支持 HTTP/2</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 在 nginx 启用 HTTP/2 后无需额外配置</span></span></code></pre></div>`,13)])])}const g=a(e,[["render",l]]);export{o as __pageData,g as default};
