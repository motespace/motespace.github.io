import{_ as s,o as n,c as p,a5 as e}from"./chunks/framework.Bt0SrEfo.js";const g=JSON.parse('{"title":"网络面试高频 Q&A","description":"","frontmatter":{},"headers":[],"relativePath":"网络/18-interview-qa.md","filePath":"网络/18-interview-qa.md","lastUpdated":1790091846000}'),l={name:"网络/18-interview-qa.md"};function t(i,a,o,r,c,h){return n(),p("div",null,[...a[0]||(a[0]=[e(`<h1 id="网络面试高频-q-a" tabindex="-1">网络面试高频 Q&amp;A <a class="header-anchor" href="#网络面试高频-q-a" aria-label="Permalink to &quot;网络面试高频 Q&amp;A&quot;">​</a></h1><h2 id="一、http-基础" tabindex="-1">一、HTTP 基础 <a class="header-anchor" href="#一、http-基础" aria-label="Permalink to &quot;一、HTTP 基础&quot;">​</a></h2><h3 id="q1-http-和-https-的区别" tabindex="-1">Q1:HTTP 和 HTTPS 的区别? <a class="header-anchor" href="#q1-http-和-https-的区别" aria-label="Permalink to &quot;Q1:HTTP 和 HTTPS 的区别?&quot;">​</a></h3><p><strong>答</strong>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>HTTP:明文传输,80 端口</span></span>
<span class="line"><span>HTTPS:HTTP + TLS 加密,443 端口</span></span></code></pre></div><p>HTTPS 在 HTTP 基础上加:</p><ul><li>TLS 握手(身份认证 + 密钥交换)</li><li>数据加密(防窃听)</li><li>数据完整性校验(防篡改)</li><li>数字证书(防中间人)</li></ul><h3 id="q2-https-握手过程" tabindex="-1">Q2:HTTPS 握手过程? <a class="header-anchor" href="#q2-https-握手过程" aria-label="Permalink to &quot;Q2:HTTPS 握手过程?&quot;">​</a></h3><p><strong>答</strong>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>TLS 1.2 (2-RTT):</span></span>
<span class="line"><span>1. ClientHello → 服务端</span></span>
<span class="line"><span>   (支持的协议版本、加密套件、随机数)</span></span>
<span class="line"><span>2. ServerHello + Certificate + ServerHelloDone</span></span>
<span class="line"><span>   (选定协议、套件、服务端证书)</span></span>
<span class="line"><span>3. ClientKeyExchange + ChangeCipherSpec + Finished</span></span>
<span class="line"><span>   (用证书公钥加密 pre-master secret)</span></span>
<span class="line"><span>4. 服务端 ChangeCipherSpec + Finished</span></span>
<span class="line"><span>   (解密 pre-master,生成 master key)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>TLS 1.3 (1-RTT):</span></span>
<span class="line"><span>1. ClientHello + key_share</span></span>
<span class="line"><span>2. ServerHello + Certificate + Finished + key_share</span></span>
<span class="line"><span>   (服务端可以提前算好证书)</span></span>
<span class="line"><span>3. Client Finished</span></span></code></pre></div><h3 id="q3-http-1-1-的队头阻塞" tabindex="-1">Q3:HTTP/1.1 的队头阻塞? <a class="header-anchor" href="#q3-http-1-1-的队头阻塞" aria-label="Permalink to &quot;Q3:HTTP/1.1 的队头阻塞?&quot;">​</a></h3><p><strong>答</strong>: HTTP/1.1 一个 TCP 连接上一个请求-响应完成后才能发下一个。即使浏览器开 6 个连接,也只是缓解。</p><p><strong>HTTP/2 多路复用</strong>:一个 TCP 连接上多流,流内仍可能有队头阻塞(TCP 层丢包)。 <strong>HTTP/3 / QUIC</strong>:独立的流,一个流丢包不影响其他流。</p><h3 id="q4-http-2-vs-http-1-1-改进" tabindex="-1">Q4:HTTP/2 vs HTTP/1.1 改进? <a class="header-anchor" href="#q4-http-2-vs-http-1-1-改进" aria-label="Permalink to &quot;Q4:HTTP/2 vs HTTP/1.1 改进?&quot;">​</a></h3><p><strong>答</strong>:</p><ol><li><strong>二进制分帧</strong>:代替文本协议</li><li><strong>多路复用</strong>:单连接并行多请求</li><li><strong>头部压缩</strong>:HPACK 算法</li><li><strong>服务器推送</strong>:已弃用(实际很少用)</li><li><strong>流量优先级</strong>:高优先级帧先发</li></ol><h3 id="q5-http-3-基于什么-为什么" tabindex="-1">Q5:HTTP/3 基于什么?为什么? <a class="header-anchor" href="#q5-http-3-基于什么-为什么" aria-label="Permalink to &quot;Q5:HTTP/3 基于什么?为什么?&quot;">​</a></h3><p><strong>答</strong>:QUIC(基于 UDP)。</p><ul><li>解决 TCP 队头阻塞</li><li>0-RTT 握手(更快)</li><li>内置 TLS 1.3</li><li>连接迁移(WiFi 切 4G 不重连)</li></ul><h2 id="二、缓存" tabindex="-1">二、缓存 <a class="header-anchor" href="#二、缓存" aria-label="Permalink to &quot;二、缓存&quot;">​</a></h2><h3 id="q6-强缓存-vs-协商缓存" tabindex="-1">Q6:强缓存 vs 协商缓存? <a class="header-anchor" href="#q6-强缓存-vs-协商缓存" aria-label="Permalink to &quot;Q6:强缓存 vs 协商缓存?&quot;">​</a></h3><p><strong>答</strong>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>强缓存:</span></span>
<span class="line"><span>  不发请求,直接用本地缓存</span></span>
<span class="line"><span>  Cache-Control: max-age=3600</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>协商缓存:</span></span>
<span class="line"><span>  发请求,服务端判断是否过期</span></span>
<span class="line"><span>  命中:返回 304 Not Modified,用本地缓存</span></span>
<span class="line"><span>  Cache-Control: no-cache</span></span></code></pre></div><h3 id="q7-cache-control-常用值" tabindex="-1">Q7:Cache-Control 常用值? <a class="header-anchor" href="#q7-cache-control-常用值" aria-label="Permalink to &quot;Q7:Cache-Control 常用值?&quot;">​</a></h3><p><strong>答</strong>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>max-age=N    缓存 N 秒</span></span>
<span class="line"><span>no-cache     缓存但需要重新验证</span></span>
<span class="line"><span>no-store     不缓存</span></span>
<span class="line"><span>public       任何地方都能缓存(CDN)</span></span>
<span class="line"><span>private      只能浏览器缓存</span></span>
<span class="line"><span>immutable    内容永不变(强缓存 + 不重新验证)</span></span>
<span class="line"><span>must-revalidate 过期必须重新验证</span></span></code></pre></div><h3 id="q8-etag-vs-last-modified" tabindex="-1">Q8:ETag vs Last-Modified? <a class="header-anchor" href="#q8-etag-vs-last-modified" aria-label="Permalink to &quot;Q8:ETag vs Last-Modified?&quot;">​</a></h3><p><strong>答</strong>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Last-Modified:</span></span>
<span class="line"><span>  - 服务端返回资源最后修改时间</span></span>
<span class="line"><span>  - 客户端下次带 If-Modified-Since</span></span>
<span class="line"><span>  - 缺点:秒级精度,文件改了时间可能不变</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ETag:</span></span>
<span class="line"><span>  - 服务端返回资源指纹(hash)</span></span>
<span class="line"><span>  - 客户端下次带 If-None-Match</span></span>
<span class="line"><span>  - 更精确(基于内容)</span></span>
<span class="line"><span>  - 计算有开销</span></span>
<span class="line"><span></span></span>
<span class="line"><span>实战:两者都用,服务端优先判断 ETag</span></span></code></pre></div><h2 id="三、跨域与安全" tabindex="-1">三、跨域与安全 <a class="header-anchor" href="#三、跨域与安全" aria-label="Permalink to &quot;三、跨域与安全&quot;">​</a></h2><h3 id="q9-cors-简单请求-vs-预检" tabindex="-1">Q9:CORS 简单请求 vs 预检? <a class="header-anchor" href="#q9-cors-简单请求-vs-预检" aria-label="Permalink to &quot;Q9:CORS 简单请求 vs 预检?&quot;">​</a></h3><p><strong>答</strong>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>简单请求(直接发):</span></span>
<span class="line"><span>  - GET / POST(无自定义头)</span></span>
<span class="line"><span>  - Content-Type: text/plain / multipart/form-data / application/x-www-form-urlencoded</span></span>
<span class="line"><span>  - 不触发预检</span></span>
<span class="line"><span></span></span>
<span class="line"><span>预检请求(先发 OPTIONS):</span></span>
<span class="line"><span>  - PUT / DELETE / PATCH</span></span>
<span class="line"><span>  - 自定义 Header(如 X-Token)</span></span>
<span class="line"><span>  - application/json</span></span>
<span class="line"><span>  - 检查服务器是否允许</span></span></code></pre></div><h3 id="q10-cors-关键-header" tabindex="-1">Q10:CORS 关键 Header? <a class="header-anchor" href="#q10-cors-关键-header" aria-label="Permalink to &quot;Q10:CORS 关键 Header?&quot;">​</a></h3><p><strong>答</strong>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>请求:</span></span>
<span class="line"><span>  Origin: https://yoursite.com</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>响应:</span></span>
<span class="line"><span>  Access-Control-Allow-Origin: https://yoursite.com  (不能用 *)</span></span>
<span class="line"><span>  Access-Control-Allow-Credentials: true             (允许 Cookie)</span></span>
<span class="line"><span>  Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS</span></span>
<span class="line"><span>  Access-Control-Allow-Headers: Content-Type, Authorization</span></span>
<span class="line"><span>  Access-Control-Max-Age: 86400                      (缓存预检结果)</span></span>
<span class="line"><span>  Vary: Origin                                         (重要!)</span></span></code></pre></div><h3 id="q11-samesite-三个值" tabindex="-1">Q11:SameSite 三个值? <a class="header-anchor" href="#q11-samesite-三个值" aria-label="Permalink to &quot;Q11:SameSite 三个值?&quot;">​</a></h3><p><strong>答</strong>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Strict:</span></span>
<span class="line"><span>  - 跨域任何请求都不带 cookie</span></span>
<span class="line"><span>  - 最严格,适用于支付、修改密码</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Lax(现代默认):</span></span>
<span class="line"><span>  - 跨域 GET 带 cookie,POST 不带</span></span>
<span class="line"><span>  - 平衡:防 CSRF 表单,允许普通链接</span></span>
<span class="line"><span></span></span>
<span class="line"><span>None:</span></span>
<span class="line"><span>  - 跨域都带</span></span>
<span class="line"><span>  - 必须配合 Secure</span></span>
<span class="line"><span>  - 用于嵌入场景(第三方 iframe)</span></span></code></pre></div><h3 id="q12-csrf-防御" tabindex="-1">Q12:CSRF 防御? <a class="header-anchor" href="#q12-csrf-防御" aria-label="Permalink to &quot;Q12:CSRF 防御?&quot;">​</a></h3><p><strong>答</strong>:</p><ol><li>SameSite Cookie(浏览器级)</li><li>CSRF Token(请求级,每次表单带)</li><li>Referer / Origin 验证(辅助)</li><li>关键操作二次验证(密码、短信)</li></ol><h2 id="四、tcp-udp" tabindex="-1">四、TCP / UDP <a class="header-anchor" href="#四、tcp-udp" aria-label="Permalink to &quot;四、TCP / UDP&quot;">​</a></h2><h3 id="q13-tcp-三次握手" tabindex="-1">Q13:TCP 三次握手? <a class="header-anchor" href="#q13-tcp-三次握手" aria-label="Permalink to &quot;Q13:TCP 三次握手?&quot;">​</a></h3><p><strong>答</strong>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1. 客户端 → SYN → 服务端</span></span>
<span class="line"><span>2. 服务端 → SYN + ACK → 客户端</span></span>
<span class="line"><span>3. 客户端 → ACK → 服务端</span></span>
<span class="line"><span></span></span>
<span class="line"><span>为什么三次?</span></span>
<span class="line"><span>  - 双方确认收发能力</span></span>
<span class="line"><span>  - 两次不够:服务端不知道客户端能收到响应</span></span></code></pre></div><h3 id="q14-tcp-四次挥手" tabindex="-1">Q14:TCP 四次挥手? <a class="header-anchor" href="#q14-tcp-四次挥手" aria-label="Permalink to &quot;Q14:TCP 四次挥手?&quot;">​</a></h3><p><strong>答</strong>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1. 客户端 → FIN → 服务端(我要关了)</span></span>
<span class="line"><span>2. 服务端 → ACK → 客户端(收到)</span></span>
<span class="line"><span>3. 服务端 → FIN → 客户端(我也关了)</span></span>
<span class="line"><span>4. 客户端 → ACK → 服务端(收到)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>为什么四次?</span></span>
<span class="line"><span>  - TCP 全双工,两边都要关</span></span>
<span class="line"><span>  - 服务端收到 FIN 后可能还有数据要发</span></span></code></pre></div><h3 id="q15-tcp-怎么保证可靠" tabindex="-1">Q15:TCP 怎么保证可靠? <a class="header-anchor" href="#q15-tcp-怎么保证可靠" aria-label="Permalink to &quot;Q15:TCP 怎么保证可靠?&quot;">​</a></h3><p><strong>答</strong>:</p><ul><li>序号(Sequence Number):包有编号,接收方按序组装</li><li>ACK + 重传:接收方确认,丢失重传</li><li>滑动窗口:流量控制</li><li>拥塞控制:慢启动、拥塞避免(Cubic、BBR)</li></ul><h3 id="q16-tcp-vs-udp" tabindex="-1">Q16:TCP vs UDP? <a class="header-anchor" href="#q16-tcp-vs-udp" aria-label="Permalink to &quot;Q16:TCP vs UDP?&quot;">​</a></h3><p><strong>答</strong>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>TCP:可靠、顺序、流量控制、拥塞控制,慢(握手、确认)</span></span>
<span class="line"><span>UDP:不可靠、无顺序、无控制,快(无握手)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>适用:</span></span>
<span class="line"><span>  TCP - HTTP/HTTPS/WebSocket/SSH/FTP</span></span>
<span class="line"><span>  UDP - DNS/直播/WebRTC/QUIC</span></span></code></pre></div><h2 id="五、dns" tabindex="-1">五、DNS <a class="header-anchor" href="#五、dns" aria-label="Permalink to &quot;五、DNS&quot;">​</a></h2><h3 id="q17-dns-解析过程" tabindex="-1">Q17:DNS 解析过程? <a class="header-anchor" href="#q17-dns-解析过程" aria-label="Permalink to &quot;Q17:DNS 解析过程?&quot;">​</a></h3><p><strong>答</strong>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1. 浏览器缓存</span></span>
<span class="line"><span>2. 系统缓存(操作系统)</span></span>
<span class="line"><span>3. hosts 文件</span></span>
<span class="line"><span>4. 本地 DNS(LDNS)</span></span>
<span class="line"><span>5. 根 DNS → TLD DNS → 权威 DNS</span></span>
<span class="line"><span>6. 返回 IP,缓存回客户端</span></span></code></pre></div><h3 id="q18-doh-dot-是什么" tabindex="-1">Q18:DoH / DoT 是什么? <a class="header-anchor" href="#q18-doh-dot-是什么" aria-label="Permalink to &quot;Q18:DoH / DoT 是什么?&quot;">​</a></h3><p><strong>答</strong>:</p><ul><li>DoH(DNS over HTTPS):DNS 查询用 HTTPS 加密(端口 443)</li><li>DoT(DNS over TLS):DNS 查询用 TLS 加密(端口 853)</li><li>防止运营商/防火墙劫持、监听 DNS 查询</li></ul><h2 id="六、websocket" tabindex="-1">六、WebSocket <a class="header-anchor" href="#六、websocket" aria-label="Permalink to &quot;六、WebSocket&quot;">​</a></h2><h3 id="q19-websocket-vs-http" tabindex="-1">Q19:WebSocket vs HTTP? <a class="header-anchor" href="#q19-websocket-vs-http" aria-label="Permalink to &quot;Q19:WebSocket vs HTTP?&quot;">​</a></h3><p><strong>答</strong>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>WebSocket:</span></span>
<span class="line"><span>  - 一次握手,长期连接</span></span>
<span class="line"><span>  - 全双工</span></span>
<span class="line"><span>  - 头部 2~14 字节</span></span>
<span class="line"><span>  - 适合实时通信</span></span>
<span class="line"><span></span></span>
<span class="line"><span>HTTP:</span></span>
<span class="line"><span>  - 每次请求-响应</span></span>
<span class="line"><span>  - 单向(除非轮询)</span></span>
<span class="line"><span>  - 头部几百~几 KB</span></span>
<span class="line"><span>  - 适合一次性请求</span></span></code></pre></div><h3 id="q20-websocket-心跳" tabindex="-1">Q20:WebSocket 心跳? <a class="header-anchor" href="#q20-websocket-心跳" aria-label="Permalink to &quot;Q20:WebSocket 心跳?&quot;">​</a></h3><p><strong>答</strong>:</p><ul><li>WebSocket 长连接会被 NAT / 防火墙静默断开</li><li>客户端定期发 Ping(或者业务消息)</li><li>服务端响应</li><li>30 秒一次是常见频率</li><li>断开后自动重连(指数退避)</li></ul><h2 id="七、性能优化" tabindex="-1">七、性能优化 <a class="header-anchor" href="#七、性能优化" aria-label="Permalink to &quot;七、性能优化&quot;">​</a></h2><h3 id="q21-首屏优化有哪些" tabindex="-1">Q21:首屏优化有哪些? <a class="header-anchor" href="#q21-首屏优化有哪些" aria-label="Permalink to &quot;Q21:首屏优化有哪些?&quot;">​</a></h3><p><strong>答</strong>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>网络层:</span></span>
<span class="line"><span>- HTTP/2 / HTTP/3</span></span>
<span class="line"><span>- Brotli 压缩</span></span>
<span class="line"><span>- CDN</span></span>
<span class="line"><span>- preconnect / dns-prefetch / preload</span></span>
<span class="line"><span></span></span>
<span class="line"><span>资源层:</span></span>
<span class="line"><span>- 关键 CSS 内联</span></span>
<span class="line"><span>- 图片懒加载 + 显式宽高</span></span>
<span class="line"><span>- 字体 font-display: swap</span></span>
<span class="line"><span>- 路由懒加载</span></span>
<span class="line"><span></span></span>
<span class="line"><span>渲染层:</span></span>
<span class="line"><span>- SSR / SSG / Streaming</span></span>
<span class="line"><span>- Suspense 边界</span></span>
<span class="line"><span>- 骨架屏</span></span>
<span class="line"><span></span></span>
<span class="line"><span>JS 层:</span></span>
<span class="line"><span>- 路由拆包</span></span>
<span class="line"><span>- 按需引入</span></span>
<span class="line"><span>- tree-shaking</span></span></code></pre></div><h3 id="q22-为什么-http-2-后不需要雪碧图" tabindex="-1">Q22:为什么 HTTP/2 后不需要雪碧图? <a class="header-anchor" href="#q22-为什么-http-2-后不需要雪碧图" aria-label="Permalink to &quot;Q22:为什么 HTTP/2 后不需要雪碧图?&quot;">​</a></h3><p><strong>答</strong>: HTTP/2 多路复用,一个连接能并行下载多个小文件。雪碧图反而:</p><ul><li>增加 HTTP 缓存复杂度</li><li>不能单独失效(改一个像素整个 sprite 失效)</li><li>维护成本高</li></ul><p>HTTP/2 时代:<strong>细颗粒度资源</strong>更优。</p><h3 id="q23-https-比-http-慢多少" tabindex="-1">Q23:HTTPS 比 HTTP 慢多少? <a class="header-anchor" href="#q23-https-比-http-慢多少" aria-label="Permalink to &quot;Q23:HTTPS 比 HTTP 慢多少?&quot;">​</a></h3><p><strong>答</strong>:</p><ul><li>现代 CPU 有 AES-NI 指令集,加密开销 &lt; 1%</li><li>TLS 1.3 1-RTT 握手(相比 TLS 1.2 2-RTT)</li><li>HTTP/2 强制 HTTPS,反而<strong>比 HTTP/1.1 快</strong>(多路复用)</li><li>实际:<strong>几乎无性能差距</strong></li></ul><h2 id="八、综合题" tabindex="-1">八、综合题 <a class="header-anchor" href="#八、综合题" aria-label="Permalink to &quot;八、综合题&quot;">​</a></h2><h3 id="q24-输入-url-到页面渲染经历了什么" tabindex="-1">Q24:输入 URL 到页面渲染经历了什么? <a class="header-anchor" href="#q24-输入-url-到页面渲染经历了什么" aria-label="Permalink to &quot;Q24:输入 URL 到页面渲染经历了什么?&quot;">​</a></h3><p><strong>答</strong>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1. URL 解析</span></span>
<span class="line"><span>2. DNS 解析 → IP</span></span>
<span class="line"><span>3. TCP 连接(三次握手)</span></span>
<span class="line"><span>4. TLS 握手(HTTPS)</span></span>
<span class="line"><span>5. HTTP 请求</span></span>
<span class="line"><span>6. 服务器响应</span></span>
<span class="line"><span>7. 浏览器解析 HTML → DOM 树</span></span>
<span class="line"><span>8. 解析 CSS → CSSOM</span></span>
<span class="line"><span>9. 合并 → Render Tree</span></span>
<span class="line"><span>10. 布局(Layout)</span></span>
<span class="line"><span>11. 绘制(Paint)</span></span>
<span class="line"><span>12. 合成(Composite)</span></span>
<span class="line"><span>13. 显示</span></span></code></pre></div><h3 id="q25-从-network-优化角度如何优化" tabindex="-1">Q25:从 network 优化角度如何优化? <a class="header-anchor" href="#q25-从-network-优化角度如何优化" aria-label="Permalink to &quot;Q25:从 network 优化角度如何优化?&quot;">​</a></h3><p><strong>答</strong>:</p><ol><li><strong>减少请求数</strong>:合并、雪碧图、删除冗余</li><li><strong>减小请求体积</strong>:压缩(gzip/Brotli)、图片优化、tree-shaking</li><li><strong>缓存</strong>:强缓存、协商缓存、Service Worker</li><li><strong>协议优化</strong>:HTTP/2、HTTP/3、TLS 1.3</li><li><strong>就近访问</strong>:CDN、Anycast</li><li><strong>预测加载</strong>:prefetch、preload</li></ol><h3 id="q26-跨域方案对比" tabindex="-1">Q26:跨域方案对比? <a class="header-anchor" href="#q26-跨域方案对比" aria-label="Permalink to &quot;Q26:跨域方案对比?&quot;">​</a></h3><p><strong>答</strong>:</p><table tabindex="0"><thead><tr><th>方案</th><th>适用</th><th>限制</th></tr></thead><tbody><tr><td><strong>CORS</strong></td><td>现代 API 跨域</td><td>复杂请求需预检</td></tr><tr><td><strong>JSONP</strong></td><td>老 API(GET)</td><td>仅 GET,难维护</td></tr><tr><td><strong>postMessage</strong></td><td>iframe 跨域</td><td>需校验 origin</td></tr><tr><td><strong>Nginx 反代</strong></td><td>老项目快速解决</td><td>单点</td></tr><tr><td><strong>CORS Anywhere</strong></td><td>开发临时用</td><td>生产不安全</td></tr></tbody></table><h3 id="q27-tcp-三次握手中可以携带数据吗" tabindex="-1">Q27:TCP 三次握手中可以携带数据吗? <a class="header-anchor" href="#q27-tcp-三次握手中可以携带数据吗" aria-label="Permalink to &quot;Q27:TCP 三次握手中可以携带数据吗?&quot;">​</a></h3><p><strong>答</strong>:</p><ul><li>第三次 ACK 可以携带数据(此时客户端已确认能收到)</li><li>前两次不能(防止攻击)</li></ul><h3 id="q28-https-一定安全吗" tabindex="-1">Q28:HTTPS 一定安全吗? <a class="header-anchor" href="#q28-https-一定安全吗" aria-label="Permalink to &quot;Q28:HTTPS 一定安全吗?&quot;">​</a></h3><p><strong>答</strong>:<strong>不一定</strong>。</p><ul><li>HTTPS 只防传输层窃听/篡改</li><li>应用层漏洞(XSS、CSRF、SQL 注入)HTTPS 防不了</li><li>用户主动忽略证书警告</li><li>自签名证书滥用</li></ul><p>安全是<strong>纵深防御</strong>:HTTPS + CSP + 输入验证 + 鉴权。</p><h2 id="九、面试常问总结" tabindex="-1">九、面试常问总结 <a class="header-anchor" href="#九、面试常问总结" aria-label="Permalink to &quot;九、面试常问总结&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>高频:</span></span>
<span class="line"><span>- HTTP vs HTTPS</span></span>
<span class="line"><span>- HTTP/1.1 队头阻塞</span></span>
<span class="line"><span>- HTTPS 握手</span></span>
<span class="line"><span>- HTTP/2 vs HTTP/3</span></span>
<span class="line"><span>- 强缓存 vs 协商缓存</span></span>
<span class="line"><span>- CORS / SameSite / CSRF</span></span>
<span class="line"><span>- TCP 三次握手 / 四次挥手</span></span>
<span class="line"><span>- WebSocket vs HTTP</span></span>
<span class="line"><span>- 输入 URL 到渲染的过程</span></span></code></pre></div><h2 id="十、参考文献" tabindex="-1">十、参考文献 <a class="header-anchor" href="#十、参考文献" aria-label="Permalink to &quot;十、参考文献&quot;">​</a></h2><ul><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP" target="_blank" rel="noreferrer">MDN HTTP</a></li><li>《HTTP 权威指南》</li><li>《计算机网络:自顶向下方法》</li></ul>`,101)])])}const T=s(l,[["render",t]]);export{g as __pageData,T as default};
