import{_ as s,o as n,c as t,a5 as p}from"./chunks/framework.Bt0SrEfo.js";const g=JSON.parse('{"title":"OSI 七层模型 vs TCP/IP 四层","description":"","frontmatter":{},"headers":[],"relativePath":"网络/1-osi-tcpip.md","filePath":"网络/1-osi-tcpip.md","lastUpdated":1790086012000}'),e={name:"网络/1-osi-tcpip.md"};function l(i,a,r,o,d,c){return n(),t("div",null,[...a[0]||(a[0]=[p(`<h1 id="osi-七层模型-vs-tcp-ip-四层" tabindex="-1">OSI 七层模型 vs TCP/IP 四层 <a class="header-anchor" href="#osi-七层模型-vs-tcp-ip-四层" aria-label="Permalink to &quot;OSI 七层模型 vs TCP/IP 四层&quot;">​</a></h1><h2 id="一、为什么需要分层" tabindex="-1">一、为什么需要分层 <a class="header-anchor" href="#一、为什么需要分层" aria-label="Permalink to &quot;一、为什么需要分层&quot;">​</a></h2><p><strong>网络通信是复杂的</strong>:从浏览器输入 <code>https://example.com</code> 到看到页面,数据经历了应用、传输、网络、链路多个处理步骤。</p><p><strong>分层的好处</strong>:</p><ul><li><strong>关注点分离</strong>:每层只关心自己的职责</li><li><strong>替换性</strong>:某一层升级不影响其他层(如 HTTP/1.1 → HTTP/2)</li><li><strong>标准化</strong>:各层有统一协议,不同厂商可以互操作</li><li><strong>调试方便</strong>:出问题能定位到具体哪一层</li></ul><h2 id="二、osi-七层模型-理论" tabindex="-1">二、OSI 七层模型(理论) <a class="header-anchor" href="#二、osi-七层模型-理论" aria-label="Permalink to &quot;二、OSI 七层模型(理论)&quot;">​</a></h2><p>OSI 是 1984 年 ISO 提出的<strong>理论模型</strong>,实际互联网用的少,但概念常被引用:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>OSI 七层                    职责                       协议/技术</span></span>
<span class="line"><span>─────────────────────────────────────────────────────────────────</span></span>
<span class="line"><span>7. 应用层 (Application)     用户接口 / 网络服务        HTTP / HTTPS / DNS / FTP / SMTP</span></span>
<span class="line"><span>6. 表示层 (Presentation)    数据格式 / 加密 / 压缩     SSL/TLS / JPEG / ASCII</span></span>
<span class="line"><span>5. 会话层 (Session)          会话管理 / 同步            RPC / NetBIOS</span></span>
<span class="line"><span>4. 传输层 (Transport)        端到端传输 / 可靠性         TCP / UDP</span></span>
<span class="line"><span>3. 网络层 (Network)          路由 / 寻址                IP / ARP / ICMP / OSPF</span></span>
<span class="line"><span>2. 数据链路层 (Data Link)    帧传输 / 差错控制           Ethernet / Wi-Fi / PPP</span></span>
<span class="line"><span>1. 物理层 (Physical)         比特流 / 物理介质          光纤 / 双绞线 / 无线电</span></span></code></pre></div><p><strong>前端开发关注</strong>:主要是 7(应用层)和 4(传输层)。</p><h2 id="三、tcp-ip-四层模型-实际" tabindex="-1">三、TCP/IP 四层模型(实际) <a class="header-anchor" href="#三、tcp-ip-四层模型-实际" aria-label="Permalink to &quot;三、TCP/IP 四层模型(实际)&quot;">​</a></h2><p>实际互联网用的是 <strong>TCP/IP 四层(或五层)</strong> 模型:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>TCP/IP 四层/五层            职责                       对应 OSI</span></span>
<span class="line"><span>───────────────────────────────────────────────────────────────</span></span>
<span class="line"><span>应用层 (Application)        HTTP/HTTPS/DNS/FTP         OSI 7 + 6 + 5</span></span>
<span class="line"><span>传输层 (Transport)           TCP / UDP                  OSI 4</span></span>
<span class="line"><span>网络层 (Network)             IP / ICMP                  OSI 3</span></span>
<span class="line"><span>网络接口层 (Network Access)  Ethernet / Wi-Fi           OSI 2 + 1</span></span></code></pre></div><p><strong>前端工程师关注</strong>:</p><ul><li><strong>应用层</strong>:HTTP/HTTPS 是日常打交道最多的</li><li><strong>传输层</strong>:TCP vs UDP 选择会影响性能(如 WebSocket 用 TCP,HTTP/3 用 UDP+QUIC)</li></ul><h2 id="四、各层数据包格式" tabindex="-1">四、各层数据包格式 <a class="header-anchor" href="#四、各层数据包格式" aria-label="Permalink to &quot;四、各层数据包格式&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>应用层:HTTP 报文</span></span>
<span class="line"><span>  ↓ 加 TCP 头</span></span>
<span class="line"><span>传输层:TCP 段(Segment)</span></span>
<span class="line"><span>  ↓ 加 IP 头</span></span>
<span class="line"><span>网络层:IP 包(Datagram)</span></span>
<span class="line"><span>  ↓ 加 MAC 头</span></span>
<span class="line"><span>链路层: 帧(Frame)</span></span>
<span class="line"><span>  ↓</span></span>
<span class="line"><span>物理层:比特流</span></span></code></pre></div><p><strong>封装/解封装</strong>:</p><ul><li>发送方:数据 → 应用 → 传输 → 网络 → 链路 → 物理</li><li>接收方:物理 → 链路 → 网络 → 传输 → 应用 → 数据</li></ul><p>每层只处理自己的头部,不关心上层数据。</p><h2 id="五、实际例子-打开-https-example-com-的过程" tabindex="-1">五、实际例子:打开 <a href="https://example.com" target="_blank" rel="noreferrer">https://example.com</a> 的过程 <a class="header-anchor" href="#五、实际例子-打开-https-example-com-的过程" aria-label="Permalink to &quot;五、实际例子:打开 https://example.com 的过程&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>浏览器输入 URL → 解析域名</span></span>
<span class="line"><span>  ↓ DNS 解析(应用层,DNS 协议)</span></span>
<span class="line"><span>得到 IP 地址 1.2.3.4</span></span>
<span class="line"><span>  ↓ TCP 三次握手(传输层)</span></span>
<span class="line"><span>建立到 1.2.3.4:443 的连接</span></span>
<span class="line"><span>  ↓ TLS 握手(表示层,SSL/TLS)</span></span>
<span class="line"><span>加密通道建立</span></span>
<span class="line"><span>  ↓ HTTP 请求(应用层)</span></span>
<span class="line"><span>GET / HTTP/1.1</span></span>
<span class="line"><span>  ↓ 数据包经过链路层(以太网)、物理层(网线)</span></span>
<span class="line"><span>到达服务器</span></span>
<span class="line"><span>  ↓ 服务器响应,反向链路</span></span>
<span class="line"><span>浏览器接收 HTML → 解析渲染</span></span></code></pre></div><p><strong>前端优化点在应用层和传输层</strong>:</p><ul><li>应用层:缓存、压缩、HTTPS、HTTP/2</li><li>传输层:TCP 连接复用、长连接、QUIC</li></ul><h2 id="六、tcp-vs-udp" tabindex="-1">六、TCP vs UDP <a class="header-anchor" href="#六、tcp-vs-udp" aria-label="Permalink to &quot;六、TCP vs UDP&quot;">​</a></h2><h3 id="_6-1-对比" tabindex="-1">6.1 对比 <a class="header-anchor" href="#_6-1-对比" aria-label="Permalink to &quot;6.1 对比&quot;">​</a></h3><table tabindex="0"><thead><tr><th>特性</th><th>TCP</th><th>UDP</th></tr></thead><tbody><tr><td><strong>可靠性</strong></td><td>可靠(重传、确认)</td><td>不可靠</td></tr><tr><td><strong>顺序</strong></td><td>保证顺序</td><td>不保证</td></tr><tr><td><strong>流量控制</strong></td><td>✅</td><td>❌</td></tr><tr><td><strong>拥塞控制</strong></td><td>✅</td><td>❌</td></tr><tr><td><strong>连接</strong></td><td>面向连接</td><td>无连接</td></tr><tr><td><strong>头部</strong></td><td>20 字节</td><td>8 字节</td></tr><tr><td><strong>速度</strong></td><td>慢</td><td>快</td></tr><tr><td><strong>适用</strong></td><td>HTTP、文件传输、邮件</td><td>实时音视频、DNS、游戏</td></tr></tbody></table><h3 id="_6-2-选型" tabindex="-1">6.2 选型 <a class="header-anchor" href="#_6-2-选型" aria-label="Permalink to &quot;6.2 选型&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>要可靠 → TCP(HTTP/HTTPS/WebSocket/SSH/FTP)</span></span>
<span class="line"><span>要实时 → UDP(直播、语音、视频会议、DNS、QUIC)</span></span>
<span class="line"><span>折中  → QUIC(HTTP/3)— UDP 上实现了可靠传输</span></span></code></pre></div><h2 id="七、前端常用协议分布" tabindex="-1">七、前端常用协议分布 <a class="header-anchor" href="#七、前端常用协议分布" aria-label="Permalink to &quot;七、前端常用协议分布&quot;">​</a></h2><h3 id="_7-1-应用层" tabindex="-1">7.1 应用层 <a class="header-anchor" href="#_7-1-应用层" aria-label="Permalink to &quot;7.1 应用层&quot;">​</a></h3><table tabindex="0"><thead><tr><th>协议</th><th>用途</th><th>端口</th></tr></thead><tbody><tr><td><strong>HTTP / HTTPS</strong></td><td>Web</td><td>80 / 443</td></tr><tr><td><strong>DNS</strong></td><td>域名解析</td><td>53</td></tr><tr><td><strong>WebSocket</strong></td><td>双向通信</td><td>80 / 443</td></tr><tr><td><strong>SSE</strong></td><td>服务端推送</td><td>80 / 443</td></tr><tr><td><strong>gRPC</strong></td><td>高性能 RPC</td><td>80 / 443</td></tr><tr><td><strong>FTP</strong></td><td>文件传输</td><td>21</td></tr><tr><td><strong>SMTP</strong></td><td>邮件发送</td><td>25</td></tr></tbody></table><h3 id="_7-2-传输层" tabindex="-1">7.2 传输层 <a class="header-anchor" href="#_7-2-传输层" aria-label="Permalink to &quot;7.2 传输层&quot;">​</a></h3><table tabindex="0"><thead><tr><th>协议</th><th>用途</th></tr></thead><tbody><tr><td><strong>TCP</strong></td><td>主流 HTTP/HTTPS</td></tr><tr><td><strong>UDP</strong></td><td>DNS、WebRTC、QUIC</td></tr><tr><td><strong>QUIC</strong></td><td>HTTP/3</td></tr></tbody></table><h2 id="八、性能优化与分层" tabindex="-1">八、性能优化与分层 <a class="header-anchor" href="#八、性能优化与分层" aria-label="Permalink to &quot;八、性能优化与分层&quot;">​</a></h2><p>不同层有不同的优化策略:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>应用层:</span></span>
<span class="line"><span>├── HTTP/2 多路复用</span></span>
<span class="line"><span>├── HTTP/3 QUIC</span></span>
<span class="line"><span>├── 缓存(强缓存 / 协商缓存)</span></span>
<span class="line"><span>├── 压缩(Brotli / gzip)</span></span>
<span class="line"><span>└── 减少请求数(雪碧图、合并、懒加载)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>传输层:</span></span>
<span class="line"><span>├── TCP 连接复用(Keep-Alive)</span></span>
<span class="line"><span>├── TCP Fast Open</span></span>
<span class="line"><span>└── QUIC(0-RTT 握手)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>网络层:</span></span>
<span class="line"><span>├── CDN(就近访问)</span></span>
<span class="line"><span>└── Anycast IP</span></span>
<span class="line"><span></span></span>
<span class="line"><span>链路层:</span></span>
<span class="line"><span>└── 网络硬件优化(无能为力,运营商决定)</span></span></code></pre></div><h2 id="九、面试常见问题" tabindex="-1">九、面试常见问题 <a class="header-anchor" href="#九、面试常见问题" aria-label="Permalink to &quot;九、面试常见问题&quot;">​</a></h2><h3 id="_9-1-输入-url-到页面渲染经历了什么" tabindex="-1">9.1 输入 URL 到页面渲染经历了什么? <a class="header-anchor" href="#_9-1-输入-url-到页面渲染经历了什么" aria-label="Permalink to &quot;9.1 输入 URL 到页面渲染经历了什么?&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1. URL 解析</span></span>
<span class="line"><span>2. DNS 解析(应用层)</span></span>
<span class="line"><span>3. TCP 连接(传输层)</span></span>
<span class="line"><span>4. TLS 握手(表示层)</span></span>
<span class="line"><span>5. HTTP 请求(应用层)</span></span>
<span class="line"><span>6. 服务器响应</span></span>
<span class="line"><span>7. 浏览器解析 HTML → DOM 树</span></span>
<span class="line"><span>8. 解析 CSS → CSSOM</span></span>
<span class="line"><span>9. 合并 → Render Tree</span></span>
<span class="line"><span>10. 布局 + 绘制 + 合成</span></span>
<span class="line"><span>11. 显示</span></span></code></pre></div><h3 id="_9-2-osi-七层-vs-tcp-ip-四层的对应" tabindex="-1">9.2 OSI 七层 vs TCP/IP 四层的对应? <a class="header-anchor" href="#_9-2-osi-七层-vs-tcp-ip-四层的对应" aria-label="Permalink to &quot;9.2 OSI 七层 vs TCP/IP 四层的对应?&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>OSI 7 应用层        ┐</span></span>
<span class="line"><span>OSI 6 表示层         ├→ TCP/IP 应用层</span></span>
<span class="line"><span>OSI 5 会话层         ┘</span></span>
<span class="line"><span>OSI 4 传输层        →  TCP/IP 传输层</span></span>
<span class="line"><span>OSI 3 网络层        →  TCP/IP 网络层</span></span>
<span class="line"><span>OSI 2 数据链路层    ┐</span></span>
<span class="line"><span>OSI 1 物理层         ├→ TCP/IP 网络接口层</span></span>
<span class="line"><span>                   ┘</span></span></code></pre></div><h3 id="_9-3-tcp-三次握手为什么不是两次" tabindex="-1">9.3 TCP 三次握手为什么不是两次? <a class="header-anchor" href="#_9-3-tcp-三次握手为什么不是两次" aria-label="Permalink to &quot;9.3 TCP 三次握手为什么不是两次?&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>两次握手的问题:服务端无法确认客户端能收到自己的响应</span></span>
<span class="line"><span>- 第一次:客户端 → 服务端(SYN)</span></span>
<span class="line"><span>- 第二次:服务端 → 客户端(SYN+ACK)</span></span>
<span class="line"><span>但客户端没确认收到 SYN,服务端不知道客户端准备好了</span></span>
<span class="line"><span></span></span>
<span class="line"><span>三次握手后双方都确认对方能收发:</span></span>
<span class="line"><span>- SYN, SYN+ACK, ACK</span></span></code></pre></div><h3 id="_9-4-https-的-tls-握手过程" tabindex="-1">9.4 HTTPS 的 TLS 握手过程? <a class="header-anchor" href="#_9-4-https-的-tls-握手过程" aria-label="Permalink to &quot;9.4 HTTPS 的 TLS 握手过程?&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>TLS 1.2:2-RTT</span></span>
<span class="line"><span>- Client Hello</span></span>
<span class="line"><span>- Server Hello + Certificate + Server Hello Done</span></span>
<span class="line"><span>- Client Key Exchange + Change Cipher Spec</span></span>
<span class="line"><span>- Finished</span></span>
<span class="line"><span></span></span>
<span class="line"><span>TLS 1.3:1-RTT</span></span>
<span class="line"><span>- Client Hello(带 key share)</span></span>
<span class="line"><span>- Server Hello + Certificate + Finished</span></span>
<span class="line"><span>- Client Finished</span></span></code></pre></div><h2 id="十、参考文献" tabindex="-1">十、参考文献 <a class="header-anchor" href="#十、参考文献" aria-label="Permalink to &quot;十、参考文献&quot;">​</a></h2><ul><li>《计算机网络:自顶向下方法》(Kurose &amp; Ross)</li><li>《HTTP 权威指南》</li><li><a href="https://www.cloudflare.com/learning/network-layer/what-is-a-protocol/" target="_blank" rel="noreferrer">Cloudflare: What is a protocol?</a></li></ul>`,47)])])}const P=s(e,[["render",l]]);export{g as __pageData,P as default};
