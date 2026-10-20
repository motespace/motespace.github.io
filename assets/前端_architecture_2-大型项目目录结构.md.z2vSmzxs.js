import{_ as a,o as n,c as p,a5 as e}from"./chunks/framework.Bt0SrEfo.js";const k=JSON.parse('{"title":"大型项目目录结构","description":"","frontmatter":{},"headers":[],"relativePath":"前端/architecture/2-大型项目目录结构.md","filePath":"前端/architecture/2-大型项目目录结构.md","lastUpdated":1792500960000}'),i={name:"前端/architecture/2-大型项目目录结构.md"};function l(t,s,r,h,c,o){return n(),p("div",null,[...s[0]||(s[0]=[e(`<h1 id="大型项目目录结构" tabindex="-1">大型项目目录结构 <a class="header-anchor" href="#大型项目目录结构" aria-label="Permalink to &quot;大型项目目录结构&quot;">​</a></h1><blockquote><p>100+ 页面、多团队、长期维护的项目，目录结构决定生死。</p></blockquote><hr><h2 id="一、3-种常见组织方式" tabindex="-1">一、3 种常见组织方式 <a class="header-anchor" href="#一、3-种常见组织方式" aria-label="Permalink to &quot;一、3 种常见组织方式&quot;">​</a></h2><table tabindex="0"><thead><tr><th>方式</th><th>结构</th><th>适用</th></tr></thead><tbody><tr><td><strong>按技术类型</strong>（type-first）</td><td><code>components/</code>, <code>pages/</code>, <code>utils/</code></td><td>小型项目</td></tr><tr><td><strong>按业务模块</strong>（feature-first）</td><td><code>features/user/</code>, <code>features/order/</code></td><td>中大型项目（推荐）</td></tr><tr><td><strong>按 DDD 限界上下文</strong>（bounded context）</td><td><code>domains/billing/</code>, <code>domains/payment/</code></td><td>微前端 / 大型企业级</td></tr></tbody></table><hr><h2 id="二、按业务模块-feature-based" tabindex="-1">二、按业务模块（feature-based） <a class="header-anchor" href="#二、按业务模块-feature-based" aria-label="Permalink to &quot;二、按业务模块（feature-based）&quot;">​</a></h2><h3 id="_2-1-结构" tabindex="-1">2.1 结构 <a class="header-anchor" href="#_2-1-结构" aria-label="Permalink to &quot;2.1 结构&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>src/</span></span>
<span class="line"><span>  ├── app/                    # 应用初始化</span></span>
<span class="line"><span>  │   ├── App.tsx</span></span>
<span class="line"><span>  │   └── router.tsx</span></span>
<span class="line"><span>  │</span></span>
<span class="line"><span>  ├── features/               # 业务模块</span></span>
<span class="line"><span>  │   ├── user/</span></span>
<span class="line"><span>  │   │   ├── components/</span></span>
<span class="line"><span>  │   │   │   ├── UserCard.tsx</span></span>
<span class="line"><span>  │   │   │   └── UserList.tsx</span></span>
<span class="line"><span>  │   │   ├── pages/</span></span>
<span class="line"><span>  │   │   │   ├── UserListPage.tsx</span></span>
<span class="line"><span>  │   │   │   └── UserDetailPage.tsx</span></span>
<span class="line"><span>  │   │   ├── api.ts          # 该 feature 的 API</span></span>
<span class="line"><span>  │   │   ├── types.ts</span></span>
<span class="line"><span>  │   │   ├── hooks.ts        # useUser 等</span></span>
<span class="line"><span>  │   │   ├── store.ts        # 状态管理</span></span>
<span class="line"><span>  │   │   ├── routes.tsx      # 子路由</span></span>
<span class="line"><span>  │   │   └── index.ts        # 公开 API</span></span>
<span class="line"><span>  │   │</span></span>
<span class="line"><span>  │   ├── order/</span></span>
<span class="line"><span>  │   │   └── (类似结构)</span></span>
<span class="line"><span>  │   │</span></span>
<span class="line"><span>  │   └── ...</span></span>
<span class="line"><span>  │</span></span>
<span class="line"><span>  ├── shared/                 # 跨 feature 共享</span></span>
<span class="line"><span>  │   ├── ui/                # 通用组件</span></span>
<span class="line"><span>  │   ├── api/               # API 封装</span></span>
<span class="line"><span>  │   ├── hooks/              # 通用 Hook</span></span>
<span class="line"><span>  │   ├── utils/              # 工具函数</span></span>
<span class="line"><span>  │   ├── types/              # 通用类型</span></span>
<span class="line"><span>  │   └── config/             # 配置</span></span>
<span class="line"><span>  │</span></span>
<span class="line"><span>  └── core/                   # 基础设施</span></span>
<span class="line"><span>      ├── http.ts</span></span>
<span class="line"><span>      ├── auth.ts</span></span>
<span class="line"><span>      └── storage.ts</span></span></code></pre></div><h3 id="_2-2-优点" tabindex="-1">2.2 优点 <a class="header-anchor" href="#_2-2-优点" aria-label="Permalink to &quot;2.2 优点&quot;">​</a></h3><ul><li>✅ 一个 feature 一个目录，团队协作无冲突</li><li>✅ 删除业务时整个目录删除</li><li>✅ 跨 feature 复用放 shared/</li></ul><h3 id="_2-3-关键-feature-之间不直接依赖" tabindex="-1">2.3 关键：feature 之间<strong>不直接依赖</strong> <a class="header-anchor" href="#_2-3-关键-feature-之间不直接依赖" aria-label="Permalink to &quot;2.3 关键：feature 之间**不直接依赖**&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ❌ features/order 直接依赖 features/user</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { UserCard } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@/features/user/components/UserCard&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ✅ 通过公开 API</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { UserAvatar } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@/features/user&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 从 index.ts 导出</span></span></code></pre></div><p><code>features/user/index.ts</code>：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 公开 API（白名单）</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { UserAvatar } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./components/UserAvatar&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { useUser } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./hooks&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { User } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./types&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 不导出 UserCard 等内部组件</span></span></code></pre></div><h3 id="_2-4-eslint-强制边界" tabindex="-1">2.4 ESLint 强制边界 <a class="header-anchor" href="#_2-4-eslint-强制边界" aria-label="Permalink to &quot;2.4 ESLint 强制边界&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// eslint.config.js</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rules</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &#39;import/no-restricted-paths&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;error&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    zones: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        from: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./src/features/user/**&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        target: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./src/features/order/**&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        message: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;features/order 不能直接依赖 features/user，用共享 API&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><hr><h2 id="三、按-ddd-限界上下文" tabindex="-1">三、按 DDD 限界上下文 <a class="header-anchor" href="#三、按-ddd-限界上下文" aria-label="Permalink to &quot;三、按 DDD 限界上下文&quot;">​</a></h2><h3 id="_3-1-结构-适合微前端" tabindex="-1">3.1 结构（适合微前端） <a class="header-anchor" href="#_3-1-结构-适合微前端" aria-label="Permalink to &quot;3.1 结构（适合微前端）&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>src/</span></span>
<span class="line"><span>  ├── domains/</span></span>
<span class="line"><span>  │   ├── identity/           # 身份上下文</span></span>
<span class="line"><span>  │   │   ├── User.ts</span></span>
<span class="line"><span>  │   │   ├── Role.ts</span></span>
<span class="line"><span>  │   │   ├── Permission.ts</span></span>
<span class="line"><span>  │   │   ├── api.ts</span></span>
<span class="line"><span>  │   │   └── ui/             # 该域的 UI</span></span>
<span class="line"><span>  │   │</span></span>
<span class="line"><span>  │   ├── billing/            # 计费上下文</span></span>
<span class="line"><span>  │   │   ├── Order.ts</span></span>
<span class="line"><span>  │   │   ├── Invoice.ts</span></span>
<span class="line"><span>  │   │   ├── Payment.ts</span></span>
<span class="line"><span>  │   │   ├── api.ts</span></span>
<span class="line"><span>  │   │   └── ui/</span></span>
<span class="line"><span>  │   │</span></span>
<span class="line"><span>  │   ├── inventory/          # 库存上下文</span></span>
<span class="line"><span>  │   │</span></span>
<span class="line"><span>  │   └── shared-kernel/      # 共享内核</span></span>
<span class="line"><span>  │       ├── Money.ts</span></span>
<span class="line"><span>  │       └── Address.ts</span></span>
<span class="line"><span>  │</span></span>
<span class="line"><span>  ├── app/                    # 应用层（编排）</span></span>
<span class="line"><span>  │   └── application-services/</span></span>
<span class="line"><span>  │</span></span>
<span class="line"><span>  └── infrastructure/         # 基础设施</span></span>
<span class="line"><span>      └── http.ts</span></span></code></pre></div><h3 id="_3-2-适用场景" tabindex="-1">3.2 适用场景 <a class="header-anchor" href="#_3-2-适用场景" aria-label="Permalink to &quot;3.2 适用场景&quot;">​</a></h3><ul><li>微服务后端 + 微前端</li><li>多个独立团队</li><li>业务复杂、需要清晰边界</li></ul><hr><h2 id="四、具体决策" tabindex="-1">四、具体决策 <a class="header-anchor" href="#四、具体决策" aria-label="Permalink to &quot;四、具体决策&quot;">​</a></h2><h3 id="_4-1-业务模块之间如何通信" tabindex="-1">4.1 业务模块之间如何通信？ <a class="header-anchor" href="#_4-1-业务模块之间如何通信" aria-label="Permalink to &quot;4.1 业务模块之间如何通信？&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1. 共享内核（shared-kernel）</span></span>
<span class="line"><span>   - Money、Address 等通用类型</span></span>
<span class="line"><span>   - 放 src/shared/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. 事件总线（Event Bus）</span></span>
<span class="line"><span>   - 跨模块触发解耦</span></span>
<span class="line"><span>   - 用 mitt / 自定义事件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3. 状态管理</span></span>
<span class="line"><span>   - 全局状态（Zustand / Redux）</span></span>
<span class="line"><span>   - 模块读写全局 state</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4. URL / 路由</span></span>
<span class="line"><span>   - /user/123 -&gt; 跳转到 order 上下文</span></span>
<span class="line"><span>   - 通过 URL 传 ID</span></span></code></pre></div><h3 id="_4-2-通用组件-vs-业务组件" tabindex="-1">4.2 通用组件 vs 业务组件 <a class="header-anchor" href="#_4-2-通用组件-vs-业务组件" aria-label="Permalink to &quot;4.2 通用组件 vs 业务组件&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>src/shared/ui/        # 通用组件（无业务）</span></span>
<span class="line"><span>  Button.tsx</span></span>
<span class="line"><span>  Input.tsx</span></span>
<span class="line"><span>  Modal.tsx</span></span>
<span class="line"><span></span></span>
<span class="line"><span>src/features/user/ui/ # 业务组件（带 user 业务）</span></span>
<span class="line"><span>  UserCard.tsx          # 用了 user 业务逻辑</span></span></code></pre></div><h3 id="_4-3-页面归属" tabindex="-1">4.3 页面归属 <a class="header-anchor" href="#_4-3-页面归属" aria-label="Permalink to &quot;4.3 页面归属&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>src/app/pages/        # 应用入口页（登录、首页）</span></span>
<span class="line"><span>src/features/{feature}/pages/  # 各业务模块的页面</span></span></code></pre></div><hr><h2 id="五、真实案例-某中后台-saas" tabindex="-1">五、真实案例：某中后台 SaaS <a class="header-anchor" href="#五、真实案例-某中后台-saas" aria-label="Permalink to &quot;五、真实案例：某中后台 SaaS&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>src/</span></span>
<span class="line"><span>  ├── app/</span></span>
<span class="line"><span>  │   ├── App.tsx</span></span>
<span class="line"><span>  │   ├── router.tsx</span></span>
<span class="line"><span>  │   ├── layouts/</span></span>
<span class="line"><span>  │   │   ├── MainLayout.tsx</span></span>
<span class="line"><span>  │   │   └── AuthLayout.tsx</span></span>
<span class="line"><span>  │   └── pages/</span></span>
<span class="line"><span>  │       ├── LoginPage.tsx</span></span>
<span class="line"><span>  │       └── HomePage.tsx</span></span>
<span class="line"><span>  │</span></span>
<span class="line"><span>  ├── features/</span></span>
<span class="line"><span>  │   ├── customer/          # 客户管理</span></span>
<span class="line"><span>  │   │   ├── pages/</span></span>
<span class="line"><span>  │   │   │   ├── CustomerListPage.tsx</span></span>
<span class="line"><span>  │   │   │   └── CustomerDetailPage.tsx</span></span>
<span class="line"><span>  │   │   ├── components/</span></span>
<span class="line"><span>  │   │   │   ├── CustomerTable.tsx</span></span>
<span class="line"><span>  │   │   │   └── CustomerForm.tsx</span></span>
<span class="line"><span>  │   │   ├── api.ts</span></span>
<span class="line"><span>  │   │   ├── types.ts</span></span>
<span class="line"><span>  │   │   ├── hooks.ts</span></span>
<span class="line"><span>  │   │   └── index.ts</span></span>
<span class="line"><span>  │   │</span></span>
<span class="line"><span>  │   ├── order/             # 订单管理</span></span>
<span class="line"><span>  │   ├── product/           # 商品管理</span></span>
<span class="line"><span>  │   ├── marketing/         # 营销活动</span></span>
<span class="line"><span>  │   ├── finance/           # 财务管理</span></span>
<span class="line"><span>  │   ├── analytics/         # 数据分析</span></span>
<span class="line"><span>  │   └── ...</span></span>
<span class="line"><span>  │</span></span>
<span class="line"><span>  ├── shared/</span></span>
<span class="line"><span>  │   ├── ui/                # 通用组件库</span></span>
<span class="line"><span>  │   │   ├── Button/</span></span>
<span class="line"><span>  │   │   ├── Form/</span></span>
<span class="line"><span>  │   │   ├── Table/</span></span>
<span class="line"><span>  │   │   └── ...</span></span>
<span class="line"><span>  │   ├── api/               # 统一请求层</span></span>
<span class="line"><span>  │   ├── hooks/             # 通用 Hook</span></span>
<span class="line"><span>  │   ├── utils/             # 工具</span></span>
<span class="line"><span>  │   ├── types/             # 类型</span></span>
<span class="line"><span>  │   └── config/            # 配置</span></span>
<span class="line"><span>  │</span></span>
<span class="line"><span>  └── core/</span></span>
<span class="line"><span>      ├── http.ts            # axios 封装</span></span>
<span class="line"><span>      ├── auth.ts            # 鉴权</span></span>
<span class="line"><span>      ├── storage.ts         # 存储</span></span>
<span class="line"><span>      └── ...</span></span></code></pre></div><hr><h2 id="六、monorepo-下的目录结构" tabindex="-1">六、Monorepo 下的目录结构 <a class="header-anchor" href="#六、monorepo-下的目录结构" aria-label="Permalink to &quot;六、Monorepo 下的目录结构&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>monorepo/</span></span>
<span class="line"><span>  ├── apps/</span></span>
<span class="line"><span>  │   ├── web/               # 主应用</span></span>
<span class="line"><span>  │   │   └── src/</span></span>
<span class="line"><span>  │   │       ├── app/</span></span>
<span class="line"><span>  │   │       ├── features/</span></span>
<span class="line"><span>  │   │       └── shared/</span></span>
<span class="line"><span>  │   │</span></span>
<span class="line"><span>  │   └── admin/             # 后台应用</span></span>
<span class="line"><span>  │</span></span>
<span class="line"><span>  └── packages/</span></span>
<span class="line"><span>      ├── ui/                # 共享组件库</span></span>
<span class="line"><span>      ├── utils/             # 共享工具</span></span>
<span class="line"><span>      ├── api-client/        # API 客户端</span></span>
<span class="line"><span>      ├── types/             # 共享类型</span></span>
<span class="line"><span>      └── config/            # 共享配置</span></span></code></pre></div><hr><h2 id="七、迁移到-feature-based" tabindex="-1">七、迁移到 feature-based <a class="header-anchor" href="#七、迁移到-feature-based" aria-label="Permalink to &quot;七、迁移到 feature-based&quot;">​</a></h2><h3 id="_7-1-步骤" tabindex="-1">7.1 步骤 <a class="header-anchor" href="#_7-1-步骤" aria-label="Permalink to &quot;7.1 步骤&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 1. 提取 shared</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src/shared</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src/components/Button</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src/shared/ui/Button</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src/utils/formatMoney</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src/shared/utils/formatMoney</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src/types/index.ts</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src/shared/types/index.ts</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 2. 提取 feature</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src/features/user</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src/pages/UserList</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src/features/user/pages/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src/components/UserCard</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src/features/user/components/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src/api/user.ts</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src/features/user/api.ts</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 3. 更新 import 路径</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 用 jscodeshift 自动改 import</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 4. 设置 ESLint 边界</span></span></code></pre></div><h3 id="_7-2-渐进式" tabindex="-1">7.2 渐进式 <a class="header-anchor" href="#_7-2-渐进式" aria-label="Permalink to &quot;7.2 渐进式&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>阶段 1：提取 shared/ 目录</span></span>
<span class="line"><span>阶段 2：按业务划分 features/</span></span>
<span class="line"><span>阶段 3：每个 feature 建立 index.ts 公开 API</span></span>
<span class="line"><span>阶段 4：ESLint 强制边界</span></span></code></pre></div><hr><h2 id="八、面试高频追问" tabindex="-1">八、面试高频追问 <a class="header-anchor" href="#八、面试高频追问" aria-label="Permalink to &quot;八、面试高频追问&quot;">​</a></h2><h3 id="q1-你们项目怎么组织目录" tabindex="-1">Q1: 你们项目怎么组织目录？ <a class="header-anchor" href="#q1-你们项目怎么组织目录" aria-label="Permalink to &quot;Q1: 你们项目怎么组织目录？&quot;">​</a></h3><p><strong>答</strong>：feature-based。一个业务模块一个目录（features/user/），里面有 pages/components/api/types/hooks。跨 feature 通过 shared/ 复用，feature 之间通过公开 API（index.ts）通信。</p><h3 id="q2-为什么用-feature-based-而不是-type-based" tabindex="-1">Q2: 为什么用 feature-based 而不是 type-based？ <a class="header-anchor" href="#q2-为什么用-feature-based-而不是-type-based" aria-label="Permalink to &quot;Q2: 为什么用 feature-based 而不是 type-based？&quot;">​</a></h3><p><strong>答</strong>：</p><ul><li><strong>type-based</strong>（components/、pages/）一个特性散落在多个目录，改一个 feature 要改 4-5 个目录</li><li><strong>feature-based</strong> 一个 feature 自包含，删除 feature = 删除目录</li></ul><h3 id="q3-feature-之间怎么通信" tabindex="-1">Q3: feature 之间怎么通信？ <a class="header-anchor" href="#q3-feature-之间怎么通信" aria-label="Permalink to &quot;Q3: feature 之间怎么通信？&quot;">​</a></h3><p><strong>答</strong>：</p><ul><li>通过 shared/</li><li>通过 index.ts 公开 API</li><li>通过全局状态（Zustand）</li><li>通过 URL/路由</li><li>通过事件总线</li></ul><h3 id="q4-大型项目入口在哪里" tabindex="-1">Q4: 大型项目入口在哪里？ <a class="header-anchor" href="#q4-大型项目入口在哪里" aria-label="Permalink to &quot;Q4: 大型项目入口在哪里？&quot;">​</a></h3><p><strong>答</strong>：<code>src/app/App.tsx</code> 是应用入口，<code>src/app/router.tsx</code> 是路由（懒加载各 feature 的 pages）。</p><h3 id="q5-微前端怎么分" tabindex="-1">Q5: 微前端怎么分？ <a class="header-anchor" href="#q5-微前端怎么分" aria-label="Permalink to &quot;Q5: 微前端怎么分？&quot;">​</a></h3><p><strong>答</strong>：每个微应用是一个独立的 <code>apps/{name}/</code>，独立部署、独立仓库（也可以同 monorepo）。</p><hr><h3 id="面试追问-深化原-q1-q5" tabindex="-1">面试追问(深化原 Q1-Q5) <a class="header-anchor" href="#面试追问-深化原-q1-q5" aria-label="Permalink to &quot;面试追问(深化原 Q1-Q5)&quot;">​</a></h3><ul><li><strong>大目录分业务域怎么分?</strong> <code>src/modules/order/</code> / <code>src/modules/user/</code>;每个域内自闭环(components + hooks + store + api)</li><li><strong>单仓 vs 多仓?</strong> 单仓(monorepo) 适合共享代码;多仓适合权限隔离 / 独立发布</li><li><strong>circular dependency 怎么避免?</strong> ESLint <code>import/no-cycle</code>;service 层单向依赖</li><li><strong>公共组件库放哪?</strong> 独立仓库 / <code>packages/ui</code>(monorepo);业务侧通过版本管理</li></ul><h2 id="九、参考文献" tabindex="-1">九、参考文献 <a class="header-anchor" href="#九、参考文献" aria-label="Permalink to &quot;九、参考文献&quot;">​</a></h2><ul><li><a href="https://github.com/alan2207/bulletproof-react" target="_blank" rel="noreferrer">Bulletproof React</a></li><li><a href="https://github.com/datorama/akita" target="_blank" rel="noreferrer">Fractal</a></li><li><a href="https://nextjs.org/docs/app/building-your-application/routing" target="_blank" rel="noreferrer">Next.js Project Structure</a></li></ul>`,62)])])}const u=a(i,[["render",l]]);export{k as __pageData,u as default};
