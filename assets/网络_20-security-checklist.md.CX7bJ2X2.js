import{_ as s,o as n,c as e,a5 as p}from"./chunks/framework.Bt0SrEfo.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"网络/20-security-checklist.md","filePath":"网络/20-security-checklist.md","lastUpdated":1789788214000}'),t={name:"网络/20-security-checklist.md"};function l(c,a,i,o,r,d){return n(),e("div",null,[...a[0]||(a[0]=[p(`<h2 id="_20-网络安全清单" tabindex="-1">20. 网络安全清单 <a class="header-anchor" href="#_20-网络安全清单" aria-label="Permalink to &quot;20. 网络安全清单&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[ ] 全站 HTTPS（含子域名）</span></span>
<span class="line"><span>[ ] HSTS 强制 HTTPS</span></span>
<span class="line"><span>[ ] Cookie 设 HttpOnly + Secure + SameSite</span></span>
<span class="line"><span>[ ] 启用 CSP</span></span>
<span class="line"><span>[ ] 静态资源带 hash + Cache-Control: immutable</span></span>
<span class="line"><span>[ ] API 接口设 no-cache</span></span>
<span class="line"><span>[ ] 接口合并到 BFF 层（减少跨域请求）</span></span>
<span class="line"><span>[ ] 关键接口要求 CSRF Token</span></span>
<span class="line"><span>[ ] 登录异常检测</span></span>
<span class="line"><span>[ ] 限流保护（防止 DDoS）</span></span>
<span class="line"><span>[ ] 错误监控 + 告警</span></span></code></pre></div>`,2)])])}const u=s(t,[["render",l]]);export{h as __pageData,u as default};
