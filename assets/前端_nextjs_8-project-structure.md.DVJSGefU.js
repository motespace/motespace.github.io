import{_ as a,o as n,c as p,a5 as e}from"./chunks/framework.Bt0SrEfo.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"前端/nextjs/8-project-structure.md","filePath":"前端/nextjs/8-project-structure.md","lastUpdated":1789788214000}'),t={name:"前端/nextjs/8-project-structure.md"};function l(c,s,i,r,o,d){return n(),p("div",null,[...s[0]||(s[0]=[e(`<h2 id="七、项目结构最佳实践" tabindex="-1">七、项目结构最佳实践 <a class="header-anchor" href="#七、项目结构最佳实践" aria-label="Permalink to &quot;七、项目结构最佳实践&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>my-app/</span></span>
<span class="line"><span>├── app/</span></span>
<span class="line"><span>│   ├── (marketing)/          # 营销页面路由组</span></span>
<span class="line"><span>│   │   ├── page.tsx</span></span>
<span class="line"><span>│   │   └── layout.tsx</span></span>
<span class="line"><span>│   ├── (dashboard)/          # 仪表盘路由组（需鉴权）</span></span>
<span class="line"><span>│   │   ├── layout.tsx</span></span>
<span class="line"><span>│   │   └── analytics/</span></span>
<span class="line"><span>│   ├── api/                  # API 路由</span></span>
<span class="line"><span>│   ├── blog/</span></span>
<span class="line"><span>│   │   ├── [slug]/</span></span>
<span class="line"><span>│   │   │   └── page.tsx</span></span>
<span class="line"><span>│   │   └── page.tsx</span></span>
<span class="line"><span>│   └── layout.tsx</span></span>
<span class="line"><span>├── components/               # 业务组件</span></span>
<span class="line"><span>│   ├── ui/                   # 通用 UI 组件</span></span>
<span class="line"><span>│   └── forms/                # 表单组件</span></span>
<span class="line"><span>├── lib/                      # 工具函数</span></span>
<span class="line"><span>│   ├── db.ts</span></span>
<span class="line"><span>│   └── auth.ts</span></span>
<span class="line"><span>└── public/                   # 静态资源</span></span></code></pre></div><hr>`,3)])])}const h=a(t,[["render",l]]);export{_ as __pageData,h as default};
