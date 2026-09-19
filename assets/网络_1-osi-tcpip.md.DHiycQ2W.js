import{_ as a,o as n,c as p,a5 as e}from"./chunks/framework.Bt0SrEfo.js";const P=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"网络/1-osi-tcpip.md","filePath":"网络/1-osi-tcpip.md","lastUpdated":1789788214000}'),t={name:"网络/1-osi-tcpip.md"};function i(l,s,c,o,r,d){return n(),p("div",null,[...s[0]||(s[0]=[e(`<h2 id="_1-osi-七层模型-vs-tcp-ip-四层" tabindex="-1">1. OSI 七层模型 vs TCP/IP 四层 <a class="header-anchor" href="#_1-osi-七层模型-vs-tcp-ip-四层" aria-label="Permalink to &quot;1. OSI 七层模型 vs TCP/IP 四层&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>OSI 七层             TCP/IP 四层           对应协议</span></span>
<span class="line"><span>─────                ─────                ──────</span></span>
<span class="line"><span>应用层              ─┐</span></span>
<span class="line"><span>表示层               ├─ 应用层             HTTP / HTTPS / DNS / FTP</span></span>
<span class="line"><span>会话层              ─┘</span></span>
<span class="line"><span>传输层                传输层              TCP / UDP</span></span>
<span class="line"><span>网络层                网络层              IP / ICMP / ARP</span></span>
<span class="line"><span>数据链路层          ─┐</span></span>
<span class="line"><span>物理层               ├─ 网络接口层         Ethernet / Wi-Fi</span></span>
<span class="line"><span>                   ─┘</span></span></code></pre></div><p><strong>前端关注</strong>：应用层（HTTP）、传输层（TCP）。</p>`,3)])])}const T=a(t,[["render",i]]);export{P as __pageData,T as default};
