import{_ as a,o as n,c as i,a5 as p}from"./chunks/framework.Bt0SrEfo.js";const c=JSON.parse('{"title":"Next.js 项目结构最佳实践","description":"","frontmatter":{},"headers":[],"relativePath":"前端/nextjs/8-project-structure.md","filePath":"前端/nextjs/8-project-structure.md","lastUpdated":1790091846000}'),l={name:"前端/nextjs/8-project-structure.md"};function t(e,s,h,r,k,o){return n(),i("div",null,[...s[0]||(s[0]=[p(`<h1 id="next-js-项目结构最佳实践" tabindex="-1">Next.js 项目结构最佳实践 <a class="header-anchor" href="#next-js-项目结构最佳实践" aria-label="Permalink to &quot;Next.js 项目结构最佳实践&quot;">​</a></h1><h2 id="一、app-router-推荐结构" tabindex="-1">一、App Router 推荐结构 <a class="header-anchor" href="#一、app-router-推荐结构" aria-label="Permalink to &quot;一、App Router 推荐结构&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>my-app/</span></span>
<span class="line"><span>├── app/                          # 路由</span></span>
<span class="line"><span>│   ├── (marketing)/             # 路由组(无 URL 段)</span></span>
<span class="line"><span>│   │   ├── page.tsx             # /</span></span>
<span class="line"><span>│   │   ├── about/page.tsx       # /about</span></span>
<span class="line"><span>│   │   └── layout.tsx           # 营销布局</span></span>
<span class="line"><span>│   ├── (dashboard)/             # 鉴权路由组</span></span>
<span class="line"><span>│   │   ├── layout.tsx           # 鉴权 + 侧边栏</span></span>
<span class="line"><span>│   │   ├── analytics/page.tsx</span></span>
<span class="line"><span>│   │   └── settings/page.tsx</span></span>
<span class="line"><span>│   ├── api/                      # Route Handlers</span></span>
<span class="line"><span>│   │   ├── users/route.ts</span></span>
<span class="line"><span>│   │   └── auth/[...nextauth]/route.ts</span></span>
<span class="line"><span>│   ├── blog/</span></span>
<span class="line"><span>│   │   ├── [slug]/page.tsx       # 动态路由</span></span>
<span class="line"><span>│   │   └── page.tsx              # /blog</span></span>
<span class="line"><span>│   ├── error.tsx                 # 全局错误</span></span>
<span class="line"><span>│   ├── not-found.tsx             # 404</span></span>
<span class="line"><span>│   ├── loading.tsx               # 全局 loading</span></span>
<span class="line"><span>│   ├── layout.tsx                # 根布局</span></span>
<span class="line"><span>│   └── globals.css</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── components/                   # 业务组件</span></span>
<span class="line"><span>│   ├── ui/                      # 通用 UI(Button、Input)</span></span>
<span class="line"><span>│   ├── forms/                   # 表单组件</span></span>
<span class="line"><span>│   ├── dashboard/               # 仪表盘专用</span></span>
<span class="line"><span>│   └── shared/                  # 跨场景共享</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── lib/                          # 工具函数</span></span>
<span class="line"><span>│   ├── db.ts                    # 数据库连接</span></span>
<span class="line"><span>│   ├── auth.ts                  # 鉴权工具</span></span>
<span class="line"><span>│   ├── api.ts                   # API 客户端</span></span>
<span class="line"><span>│   └── utils.ts                 # 通用工具</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── hooks/                        # 自定义 hooks</span></span>
<span class="line"><span>│   ├── use-user.ts</span></span>
<span class="line"><span>│   └── use-debounce.ts</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── types/                        # TypeScript 类型</span></span>
<span class="line"><span>│   └── index.ts</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── public/                       # 静态资源</span></span>
<span class="line"><span>│   ├── images/</span></span>
<span class="line"><span>│   └── icons/</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── styles/                       # 全局样式</span></span>
<span class="line"><span>│   └── globals.css</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── config/                       # 配置</span></span>
<span class="line"><span>│   ├── site.ts                   # 站点元信息</span></span>
<span class="line"><span>│   └── nav.ts                    # 导航配置</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── components.json               # shadcn 配置</span></span>
<span class="line"><span>├── next.config.js                # Next.js 配置</span></span>
<span class="line"><span>├── tailwind.config.ts            # Tailwind 配置</span></span>
<span class="line"><span>├── tsconfig.json                 # TS 配置</span></span>
<span class="line"><span>├── package.json</span></span>
<span class="line"><span>└── README.md</span></span></code></pre></div><h2 id="二、app-router-核心约定" tabindex="-1">二、App Router 核心约定 <a class="header-anchor" href="#二、app-router-核心约定" aria-label="Permalink to &quot;二、App Router 核心约定&quot;">​</a></h2><h3 id="_2-1-特殊文件" tabindex="-1">2.1 特殊文件 <a class="header-anchor" href="#_2-1-特殊文件" aria-label="Permalink to &quot;2.1 特殊文件&quot;">​</a></h3><table tabindex="0"><thead><tr><th>文件</th><th>作用</th></tr></thead><tbody><tr><td><code>layout.tsx</code></td><td>共享布局(嵌套)</td></tr><tr><td><code>page.tsx</code></td><td>路由 UI</td></tr><tr><td><code>loading.tsx</code></td><td>Suspense fallback</td></tr><tr><td><code>error.tsx</code></td><td>Error Boundary</td></tr><tr><td><code>not-found.tsx</code></td><td>404 UI</td></tr><tr><td><code>route.ts</code></td><td>API endpoint</td></tr><tr><td><code>template.tsx</code></td><td>重新渲染布局</td></tr><tr><td><code>default.tsx</code></td><td>Parallel Routes fallback</td></tr><tr><td><code>global-error.tsx</code></td><td>全局错误(根)</td></tr></tbody></table><h3 id="_2-2-路由组-group" tabindex="-1">2.2 路由组(Group) <a class="header-anchor" href="#_2-2-路由组-group" aria-label="Permalink to &quot;2.2 路由组(Group)&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>app/</span></span>
<span class="line"><span>├── (marketing)/         # 路由组,URL 不包含 (marketing)</span></span>
<span class="line"><span>│   ├── page.tsx         # /</span></span>
<span class="line"><span>│   └── pricing/page.tsx # /pricing</span></span>
<span class="line"><span>├── (app)/</span></span>
<span class="line"><span>│   └── dashboard/page.tsx # /dashboard</span></span></code></pre></div><p><strong>用途</strong>:</p><ul><li>不同场景用不同 layout</li><li><code>(marketing)</code> 用简洁 layout</li><li><code>(app)</code> 用带侧边栏 layout</li></ul><h3 id="_2-3-嵌套-layout" tabindex="-1">2.3 嵌套 Layout <a class="header-anchor" href="#_2-3-嵌套-layout" aria-label="Permalink to &quot;2.3 嵌套 Layout&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>app/</span></span>
<span class="line"><span>├── layout.tsx           # 根 layout</span></span>
<span class="line"><span>├── (marketing)/</span></span>
<span class="line"><span>│   ├── layout.tsx       # 营销 layout</span></span>
<span class="line"><span>│   └── page.tsx</span></span>
<span class="line"><span>└── dashboard/</span></span>
<span class="line"><span>    ├── layout.tsx       # 仪表盘 layout</span></span>
<span class="line"><span>    └── page.tsx</span></span></code></pre></div><p>渲染时:layout.tsx → (marketing)/layout.tsx → page.tsx,层层嵌套。</p><h2 id="三、组件组织" tabindex="-1">三、组件组织 <a class="header-anchor" href="#三、组件组织" aria-label="Permalink to &quot;三、组件组织&quot;">​</a></h2><h3 id="_3-1-按层次分" tabindex="-1">3.1 按层次分 <a class="header-anchor" href="#_3-1-按层次分" aria-label="Permalink to &quot;3.1 按层次分&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>components/</span></span>
<span class="line"><span>├── ui/                  # 通用 UI 原子(Button、Card)</span></span>
<span class="line"><span>│   ├── Button.tsx</span></span>
<span class="line"><span>│   ├── Card.tsx</span></span>
<span class="line"><span>│   └── index.ts         # 统一 export</span></span>
<span class="line"><span>├── forms/               # 表单复合组件</span></span>
<span class="line"><span>│   └── LoginForm.tsx</span></span>
<span class="line"><span>├── dashboard/           # 业务专用</span></span>
<span class="line"><span>│   ├── Sidebar.tsx</span></span>
<span class="line"><span>│   └── MetricCard.tsx</span></span>
<span class="line"><span>└── shared/              # 跨场景</span></span>
<span class="line"><span>    └── Header.tsx</span></span></code></pre></div><h3 id="_3-2-按职责分" tabindex="-1">3.2 按职责分 <a class="header-anchor" href="#_3-2-按职责分" aria-label="Permalink to &quot;3.2 按职责分&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>components/</span></span>
<span class="line"><span>├── auth/                # 鉴权相关</span></span>
<span class="line"><span>├── blog/                # 博客相关</span></span>
<span class="line"><span>├── checkout/            # 下单相关</span></span>
<span class="line"><span>└── admin/               # 管理后台</span></span></code></pre></div><h3 id="_3-3-实战建议" tabindex="-1">3.3 实战建议 <a class="header-anchor" href="#_3-3-实战建议" aria-label="Permalink to &quot;3.3 实战建议&quot;">​</a></h3><ul><li><strong>基础组件</strong>(<code>ui/</code>):Button、Input、Card,<strong>与业务无关</strong></li><li><strong>业务组件</strong>:按业务领域分</li><li><strong>页面组件</strong>:<code>app/xxx/page.tsx</code>,只做组合</li></ul><h2 id="四、lib-utils-组织" tabindex="-1">四、lib / utils 组织 <a class="header-anchor" href="#四、lib-utils-组织" aria-label="Permalink to &quot;四、lib / utils 组织&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>lib/</span></span>
<span class="line"><span>├── db/</span></span>
<span class="line"><span>│   ├── client.ts        # 数据库客户端</span></span>
<span class="line"><span>│   ├── schema.ts        # Drizzle / Prisma schema</span></span>
<span class="line"><span>│   └── migrations/</span></span>
<span class="line"><span>├── auth/</span></span>
<span class="line"><span>│   ├── session.ts       # session 管理</span></span>
<span class="line"><span>│   ├── jwt.ts           # token 处理</span></span>
<span class="line"><span>│   └── permissions.ts   # 权限检查</span></span>
<span class="line"><span>├── api/</span></span>
<span class="line"><span>│   ├── client.ts        # fetch 封装</span></span>
<span class="line"><span>│   └── types.ts</span></span>
<span class="line"><span>├── analytics/</span></span>
<span class="line"><span>│   └── client.ts</span></span>
<span class="line"><span>└── utils/</span></span>
<span class="line"><span>    ├── date.ts</span></span>
<span class="line"><span>    ├── string.ts</span></span>
<span class="line"><span>    └── format.ts</span></span></code></pre></div><p><strong>原则</strong>:按功能分目录,不是按类型(<code>utils/</code>、<code>helpers/</code>)。</p><h2 id="五、typescript-类型组织" tabindex="-1">五、TypeScript 类型组织 <a class="header-anchor" href="#五、typescript-类型组织" aria-label="Permalink to &quot;五、TypeScript 类型组织&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>types/</span></span>
<span class="line"><span>├── index.ts             # 全局共享类型</span></span>
<span class="line"><span>├── api.ts                # API 返回类型</span></span>
<span class="line"><span>├── user.ts               # 用户相关</span></span>
<span class="line"><span>└── database.ts           # 数据库 schema 类型</span></span></code></pre></div><p><strong>或</strong>放在功能模块内:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>lib/db/types.ts</span></span>
<span class="line"><span>lib/auth/types.ts</span></span></code></pre></div><h2 id="六、环境变量" tabindex="-1">六、环境变量 <a class="header-anchor" href="#六、环境变量" aria-label="Permalink to &quot;六、环境变量&quot;">​</a></h2><h3 id="_6-1-env-文件" tabindex="-1">6.1 .env 文件 <a class="header-anchor" href="#_6-1-env-文件" aria-label="Permalink to &quot;6.1 .env 文件&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># .env.local(本地,不进 git)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">DATABASE_URL</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">postgresql://localhost/mydb</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">NEXT_PUBLIC_API_URL</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">http://localhost:3000</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># .env.production(生产)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">DATABASE_URL</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">postgresql://prod-db/mydb</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">NEXT_PUBLIC_API_URL</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">https://api.example.com</span></span></code></pre></div><h3 id="_6-2-命名规范" tabindex="-1">6.2 命名规范 <a class="header-anchor" href="#_6-2-命名规范" aria-label="Permalink to &quot;6.2 命名规范&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>NEXT_PUBLIC_*   - 暴露给客户端</span></span>
<span class="line"><span>其他              - 仅服务端</span></span></code></pre></div><h3 id="_6-3-访问" tabindex="-1">6.3 访问 <a class="header-anchor" href="#_6-3-访问" aria-label="Permalink to &quot;6.3 访问&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 客户端可访问</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> apiUrl</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> process.env.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">NEXT_PUBLIC_API_URL</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 仅服务端(Server Component、API route)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> dbUrl</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> process.env.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DATABASE_URL</span></span></code></pre></div><h2 id="七、配置分离" tabindex="-1">七、配置分离 <a class="header-anchor" href="#七、配置分离" aria-label="Permalink to &quot;七、配置分离&quot;">​</a></h2><h3 id="_7-1-next-config-js" tabindex="-1">7.1 next.config.js <a class="header-anchor" href="#_7-1-next-config-js" aria-label="Permalink to &quot;7.1 next.config.js&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// next.config.js</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  reactStrictMode: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 图片域名白名单</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  images: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    domains: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;cdn.example.com&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 实验性功能</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  experimental: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    serverActions: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 重定向</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  async</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> redirects</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      { source: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/old/:path*&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, destination: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/new/:path*&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // Header(全局)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  async</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> headers</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        source: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/(.*)&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        headers: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          { key: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;X-Content-Type-Options&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;nosniff&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          { key: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;X-Frame-Options&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;DENY&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="_7-2-tsconfig-路径别名" tabindex="-1">7.2 tsconfig 路径别名 <a class="header-anchor" href="#_7-2-tsconfig-路径别名" aria-label="Permalink to &quot;7.2 tsconfig 路径别名&quot;">​</a></h3><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;compilerOptions&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;baseUrl&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;paths&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;@/*&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./*&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;@/components/*&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;components/*&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;@/lib/*&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;lib/*&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="八、monorepo-还是单仓" tabindex="-1">八、Monorepo 还是单仓? <a class="header-anchor" href="#八、monorepo-还是单仓" aria-label="Permalink to &quot;八、Monorepo 还是单仓?&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>小型项目 / 单团队:  单仓(推荐)</span></span>
<span class="line"><span>中型项目 / 多团队:  Monorepo(pnpm workspace / Turborepo)</span></span>
<span class="line"><span>大型项目 / 跨团队:  Monorepo + 独立 npm 包</span></span></code></pre></div><p>Monorepo 优势:</p><ul><li>共享组件、工具</li><li>统一 lint / test / build</li><li>原子重构</li></ul><h2 id="九、避坑清单" tabindex="-1">九、避坑清单 <a class="header-anchor" href="#九、避坑清单" aria-label="Permalink to &quot;九、避坑清单&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>❌ 把所有组件塞 components/ 下(应该分层)</span></span>
<span class="line"><span>❌ 把业务逻辑写在 page.tsx 里(应该 lib/ + components/)</span></span>
<span class="line"><span>❌ 用 pageProps 全局传递(应该 Context 或 URL state)</span></span>
<span class="line"><span>❌ 数据获取放 client component(应该 server component)</span></span>
<span class="line"><span>❌ 工具函数重复造轮子(应该查 lib/utils/ 现有)</span></span>
<span class="line"><span>❌ 路径写死(用别名 @/components/Button)</span></span></code></pre></div><h2 id="十、ci-cd" tabindex="-1">十、CI / CD <a class="header-anchor" href="#十、ci-cd" aria-label="Permalink to &quot;十、CI / CD&quot;">​</a></h2><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># .github/workflows/ci.yml</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">CI</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">pull_request</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">jobs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  test</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    runs-on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ubuntu-latest</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    steps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">actions/checkout@v3</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">actions/setup-node@v3</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">npm ci</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">npm run lint</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">npm run typecheck</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">npm run test</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">npm run build</span></span></code></pre></div><p><strong>部署</strong>:</p><ul><li><strong>Vercel</strong>(官方,零配置)</li><li><strong>Netlify</strong>(易用,免费层够用)</li><li><strong>自建</strong>(Docker + Kubernetes / PM2)</li><li><strong>Cloudflare Pages</strong>(边缘部署)</li></ul><h2 id="十一、监控与日志" tabindex="-1">十一、监控与日志 <a class="header-anchor" href="#十一、监控与日志" aria-label="Permalink to &quot;十一、监控与日志&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>- Vercel Analytics(开箱即用)</span></span>
<span class="line"><span>- Sentry(错误监控)</span></span>
<span class="line"><span>- LogRocket(Dashboard + Session Replay)</span></span>
<span class="line"><span>- OpenTelemetry(分布式追踪)</span></span></code></pre></div><h2 id="十二、参考文献" tabindex="-1">十二、参考文献 <a class="header-anchor" href="#十二、参考文献" aria-label="Permalink to &quot;十二、参考文献&quot;">​</a></h2><ul><li><a href="https://nextjs.org/docs/app/building-your-application/routing" target="_blank" rel="noreferrer">Next.js 项目结构指南</a></li><li><a href="https://github.com/alan2207/bulletproof-react" target="_blank" rel="noreferrer">Bullet-proof React</a></li><li><a href="https://create-next-app.js.org/" target="_blank" rel="noreferrer">Create Next App</a></li></ul>`,53)])])}const E=a(l,[["render",t]]);export{c as __pageData,E as default};
