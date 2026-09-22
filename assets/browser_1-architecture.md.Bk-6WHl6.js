import{_ as a,o as n,c as i,a5 as p}from"./chunks/framework.Bt0SrEfo.js";const k=JSON.parse('{"title":"浏览器架构:从进程到线程","description":"","frontmatter":{},"headers":[],"relativePath":"browser/1-architecture.md","filePath":"browser/1-architecture.md","lastUpdated":1790086012000}'),e={name:"browser/1-architecture.md"};function l(t,s,h,r,o,c){return n(),i("div",null,[...s[0]||(s[0]=[p(`<h1 id="浏览器架构-从进程到线程" tabindex="-1">浏览器架构:从进程到线程 <a class="header-anchor" href="#浏览器架构-从进程到线程" aria-label="Permalink to &quot;浏览器架构:从进程到线程&quot;">​</a></h1><h2 id="一、为什么需要理解浏览器架构" tabindex="-1">一、为什么需要理解浏览器架构 <a class="header-anchor" href="#一、为什么需要理解浏览器架构" aria-label="Permalink to &quot;一、为什么需要理解浏览器架构&quot;">​</a></h2><p>理解浏览器架构,不仅是面试必问,<strong>更是性能优化、安全防御、调试难题的基础</strong>:</p><ul><li>性能优化:为什么 setTimeout 不准时?为什么动画卡?</li><li>安全防御:同源策略、Cookie 隔离、CSRF 都依赖进程/线程设计</li><li>排查难题:为什么 devtools 里看到的变量值&quot;不对&quot;?——可能是闭包跨线程</li></ul><h2 id="二、chrome-的多进程架构" tabindex="-1">二、Chrome 的多进程架构 <a class="header-anchor" href="#二、chrome-的多进程架构" aria-label="Permalink to &quot;二、Chrome 的多进程架构&quot;">​</a></h2><h3 id="_2-1-顶级进程" tabindex="-1">2.1 顶级进程 <a class="header-anchor" href="#_2-1-顶级进程" aria-label="Permalink to &quot;2.1 顶级进程&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Chrome 浏览器</span></span>
<span class="line"><span>├── 浏览器主进程 (Browser Process) — 唯一</span></span>
<span class="line"><span>│   ├── UI(地址栏、菜单、书签)</span></span>
<span class="line"><span>│   ├── 网络请求管理(下载、cookie 管理)</span></span>
<span class="line"><span>│   ├── 磁盘访问管理</span></span>
<span class="line"><span>│   └── 子进程协调</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── 渲染进程 (Renderer Process) — 每个 Tab 一个</span></span>
<span class="line"><span>│   ├── 渲染 HTML/CSS</span></span>
<span class="line"><span>│   └── 执行 JS</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── GPU 进程 (GPU Process) — 唯一</span></span>
<span class="line"><span>│   └── 处理 3D 绘制、CSS transform 加速</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── 插件进程 (Plugin Process)</span></span>
<span class="line"><span>│   └── PDF、Flash(已废弃)等</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── 网络进程 (Network Process) — Chrome 67+ 独立</span></span>
<span class="line"><span>│   └── 网络请求、SSL/TLS 加密</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── 存储进程 (Storage Process) — 新版</span></span>
<span class="line"><span>│   └── 本地存储管理</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>└── 工具进程 (Utility Process)</span></span>
<span class="line"><span>    └── 音频服务、文件访问等</span></span></code></pre></div><h3 id="_2-2-为什么是多进程" tabindex="-1">2.2 为什么是多进程 <a class="header-anchor" href="#_2-2-为什么是多进程" aria-label="Permalink to &quot;2.2 为什么是多进程&quot;">​</a></h3><table tabindex="0"><thead><tr><th>优势</th><th>说明</th></tr></thead><tbody><tr><td><strong>稳定性</strong></td><td>一个页面崩溃只影响那个 Tab,不会让整个浏览器崩溃</td></tr><tr><td><strong>安全性</strong></td><td>进程隔离 + 沙箱,恶意页无法访问其他进程资源</td></tr><tr><td><strong>性能</strong></td><td>多核 CPU 可同时处理多个进程;IPC 并行</td></tr><tr><td><strong>隔离</strong></td><td>不同域名的页面在不同进程(Chrome 67+ 默认 site-per-process)</td></tr></tbody></table><p><strong>实战经验</strong>:</p><ul><li>&quot;为什么我的 Tab 突然卡死但其他 Tab 还正常?&quot; → 渲染进程崩溃,浏览器主进程没受影响</li><li>&quot;为什么我打开 devtools,内存占用涨?&quot; → devtools 是个独立窗口,有自己的进程</li></ul><h3 id="_2-3-服务化-service" tabindex="-1">2.3 服务化(Service) <a class="header-anchor" href="#_2-3-服务化-service" aria-label="Permalink to &quot;2.3 服务化(Service)&quot;">​</a></h3><p>现代 Chrome 把功能拆得更细:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>浏览器主进程</span></span>
<span class="line"><span>├── 网络服务(Network Service)</span></span>
<span class="line"><span>├── 音频服务(Audio Service)</span></span>
<span class="line"><span>├── 存储服务(Storage Service)</span></span>
<span class="line"><span>├── 视频捕获服务</span></span>
<span class="line"><span>└── (越来越多的服务独立)</span></span></code></pre></div><p>好处:每个服务可独立重启,问题隔离更彻底。</p><h2 id="三、渲染进程的内部线程" tabindex="-1">三、渲染进程的内部线程 <a class="header-anchor" href="#三、渲染进程的内部线程" aria-label="Permalink to &quot;三、渲染进程的内部线程&quot;">​</a></h2><p>每个渲染进程(一个 Tab)<strong>内含多个线程</strong>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>渲染进程 (Renderer Process)</span></span>
<span class="line"><span>├── 主线程 (Main Thread)</span></span>
<span class="line"><span>│   ├── 解析 HTML → 构建 DOM</span></span>
<span class="line"><span>│   ├── 解析 CSS → 构建 CSSOM</span></span>
<span class="line"><span>│   ├── 合并 → Render Tree</span></span>
<span class="line"><span>│   ├── 布局 (Layout / Reflow)</span></span>
<span class="line"><span>│   ├── 绘制 (Paint)</span></span>
<span class="line"><span>│   └── 执行 JS(单线程)</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── 合成线程 (Compositor Thread)</span></span>
<span class="line"><span>│   ├── 分层(Layers)</span></span>
<span class="line"><span>│   ├── 滚动(滚动独立于主线程)</span></span>
<span class="line"><span>│   └── 合成最终帧给 GPU</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── 光栅线程 (Raster Thread)</span></span>
<span class="line"><span>│   └── 把图层栅格化为位图</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── 合成器线程 (Compositor Thread)</span></span>
<span class="line"><span>│   └── 4 个光栅化线程,负责图块绘制</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── IO 线程 (I/O Thread)</span></span>
<span class="line"><span>│   ├── 网络请求</span></span>
<span class="line"><span>│   └── 文件读取</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>└── 工作线程 (Worker Threads)</span></span>
<span class="line"><span>    └── Web Worker 跑这里(独立 JS 线程)</span></span></code></pre></div><h3 id="_3-1-关键线程交互" tabindex="-1">3.1 关键线程交互 <a class="header-anchor" href="#_3-1-关键线程交互" aria-label="Permalink to &quot;3.1 关键线程交互&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>                ┌──────────────────┐</span></span>
<span class="line"><span>                │   浏览器主进程    │</span></span>
<span class="line"><span>                └─────────┬────────┘</span></span>
<span class="line"><span>                          │</span></span>
<span class="line"><span>                  接收输入 + 协调</span></span>
<span class="line"><span>                          │</span></span>
<span class="line"><span>                ┌─────────▼────────┐</span></span>
<span class="line"><span>                │   渲染进程        │</span></span>
<span class="line"><span>                │                  │</span></span>
<span class="line"><span>                │ ┌──────────────┐ │</span></span>
<span class="line"><span>                │ │  主线程       │ │  ← JS / 布局 / 绘制都在这</span></span>
<span class="line"><span>                │ └──────┬───────┘ │</span></span>
<span class="line"><span>                │        │ IPC     │</span></span>
<span class="line"><span>                │ ┌──────▼───────┐ │</span></span>
<span class="line"><span>                │ │ 合成线程     │ │  ← 滚动 + 合成</span></span>
<span class="line"><span>                │ └──────────────┘ │</span></span>
<span class="line"><span>                └──────────────────┘</span></span></code></pre></div><p><strong>关键点</strong>:</p><ul><li>主线程最繁忙(JS、布局、绘制都要它)</li><li>合成线程独立,即使主线程卡住,滚动仍能平滑</li><li>这是为什么 <code>transform</code> 动画比 <code>left/top</code> 动画流畅</li></ul><h3 id="_3-2-主线程的工作循环" tabindex="-1">3.2 主线程的工作循环 <a class="header-anchor" href="#_3-2-主线程的工作循环" aria-label="Permalink to &quot;3.2 主线程的工作循环&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1. 处理输入事件(键盘、鼠标、滚动)</span></span>
<span class="line"><span>2. 执行 JS(用户脚本 + 事件回调)</span></span>
<span class="line"><span>3. requestAnimationFrame 回调</span></span>
<span class="line"><span>4. 布局(Layout)</span></span>
<span class="line"><span>5. 绘制(Paint)</span></span>
<span class="line"><span>6. 提交给合成线程(Compositor Commit)</span></span>
<span class="line"><span>7. 重复</span></span></code></pre></div><p>每帧大约 16.67ms(60 FPS):</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>0~8ms    JS 执行 + 布局</span></span>
<span class="line"><span>8~10ms   绘制</span></span>
<span class="line"><span>10~16ms  合成线程工作 + 渲染下一帧准备</span></span>
<span class="line"><span>&gt; 16.67ms → 掉帧(用户感觉卡)</span></span></code></pre></div><h2 id="四、js-引擎-为什么是单线程" tabindex="-1">四、JS 引擎:为什么是单线程 <a class="header-anchor" href="#四、js-引擎-为什么是单线程" aria-label="Permalink to &quot;四、JS 引擎:为什么是单线程&quot;">​</a></h2><h3 id="_4-1-单线程的原因" tabindex="-1">4.1 单线程的原因 <a class="header-anchor" href="#_4-1-单线程的原因" aria-label="Permalink to &quot;4.1 单线程的原因&quot;">​</a></h3><p><strong>避免竞态</strong>——如果 JS 多线程,两个线程同时改一个 DOM 会出现竞态条件。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 多线程会出错的例子</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> counter </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 线程 A: 读 counter(0) → +1 → 写 1</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 线程 B: 读 counter(0) → +1 → 写 1</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 期望 2,实际 1</span></span></code></pre></div><h3 id="_4-2-v8-引擎-chrome-的-js-引擎" tabindex="-1">4.2 V8 引擎(Chrome 的 JS 引擎) <a class="header-anchor" href="#_4-2-v8-引擎-chrome-的-js-引擎" aria-label="Permalink to &quot;4.2 V8 引擎(Chrome 的 JS 引擎)&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>V8 架构:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>源代码 (.js) → Parser → AST → Ignition(解释器) → Bytecode → 执行</span></span>
<span class="line"><span>                                    ↓</span></span>
<span class="line"><span>                            TurboFan(优化编译器) → 机器码</span></span>
<span class="line"><span>                                    ↓</span></span>
<span class="line"><span>                            优化失败 → Deoptimize 回 Bytecode</span></span></code></pre></div><p><strong>关键优化</strong>:</p><ul><li><strong>隐藏类(Hidden Class)</strong>:V8 给对象建一个隐藏的 shape,属性快速访问</li><li><strong>内联缓存(Inline Cache)</strong>:缓存方法查找结果</li><li><strong>JIT 编译</strong>:热点代码编译为机器码</li></ul><p><strong>实战经验</strong>:</p><ul><li>不要乱改对象结构(添加/删除属性):破坏隐藏类,降低性能</li><li>函数参数类型要稳定:同个函数不同类型参数,会被 deoptimize</li></ul><h2 id="五、事件循环-event-loop" tabindex="-1">五、事件循环(Event Loop) <a class="header-anchor" href="#五、事件循环-event-loop" aria-label="Permalink to &quot;五、事件循环(Event Loop)&quot;">​</a></h2><p>事件循环是<strong>异步编程的核心</strong>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>主线程:</span></span>
<span class="line"><span>┌─────────────────────────────┐</span></span>
<span class="line"><span>│      执行栈 (Call Stack)    │ ← 同步代码</span></span>
<span class="line"><span>└──────────┬──────────────────┘</span></span>
<span class="line"><span>           │</span></span>
<span class="line"><span>           │ (栈空时)</span></span>
<span class="line"><span>           ▼</span></span>
<span class="line"><span>┌─────────────────────────────┐</span></span>
<span class="line"><span>│ 微任务队列 (Microtask Queue)│ ← Promise.then / queueMicrotask</span></span>
<span class="line"><span>│  全部清空                   │</span></span>
<span class="line"><span>└──────────┬──────────────────┘</span></span>
<span class="line"><span>           │</span></span>
<span class="line"><span>           │ (微任务全清空)</span></span>
<span class="line"><span>           ▼</span></span>
<span class="line"><span>┌─────────────────────────────┐</span></span>
<span class="line"><span>│ 宏任务队列 (Task Queue)    │ ← setTimeout / setInterval / I/O</span></span>
<span class="line"><span>│  取出第一个                  │</span></span>
<span class="line"><span>└──────────┬──────────────────┘</span></span>
<span class="line"><span>           │</span></span>
<span class="line"><span>           │ (取出任务)</span></span>
<span class="line"><span>           ▼</span></span>
<span class="line"><span>     执行栈执行任务</span></span>
<span class="line"><span>     → 重复</span></span></code></pre></div><h3 id="_5-1-经典案例" tabindex="-1">5.1 经典案例 <a class="header-anchor" href="#_5-1-经典案例" aria-label="Permalink to &quot;5.1 经典案例&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;3&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">queueMicrotask</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;4&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;5&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 输出:1 5 3 4 2</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 解释:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 1 和 5:同步,直接执行</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 3 和 4:微任务,栈空后立即执行</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 2:setTimeout 是宏任务,等微任务全清空才执行</span></span></code></pre></div><h3 id="_5-2-async-await-的事件循环" tabindex="-1">5.2 async/await 的事件循环 <a class="header-anchor" href="#_5-2-async-await-的事件循环" aria-label="Permalink to &quot;5.2 async/await 的事件循环&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> async1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> async2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 微任务</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> async2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;3&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;4&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">async1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;5&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 输出:4 1 3 5 2</span></span></code></pre></div><p><code>await</code> 后面的代码相当于 <code>.then(() =&gt; {})</code>,被推入微任务。</p><h2 id="六、ipc-进程间通信" tabindex="-1">六、IPC(进程间通信) <a class="header-anchor" href="#六、ipc-进程间通信" aria-label="Permalink to &quot;六、IPC(进程间通信)&quot;">​</a></h2><p>不同进程不能直接访问彼此内存,必须通过 IPC。</p><h3 id="_6-1-浏览器中的-ipc" tabindex="-1">6.1 浏览器中的 IPC <a class="header-anchor" href="#_6-1-浏览器中的-ipc" aria-label="Permalink to &quot;6.1 浏览器中的 IPC&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>浏览器主进程 ←→ 渲染进程:导航消息、URL、title、icon</span></span>
<span class="line"><span>渲染进程    ←→ 浏览器主进程:事件、log</span></span>
<span class="line"><span>渲染进程    ←→ GPU 进程:渲染命令</span></span>
<span class="line"><span>渲染进程    ←→ 网络进程:HTTP 请求</span></span></code></pre></div><h3 id="_6-2-mojo-chrome-的-ipc-库" tabindex="-1">6.2 Mojo(Chrome 的 IPC 库) <a class="header-anchor" href="#_6-2-mojo-chrome-的-ipc-库" aria-label="Permalink to &quot;6.2 Mojo(Chrome 的 IPC 库)&quot;">​</a></h3><p>Chrome 用 Mojo 做 IPC,支持同步、异步、消息管道。</p><h2 id="七、内存与生命周期" tabindex="-1">七、内存与生命周期 <a class="header-anchor" href="#七、内存与生命周期" aria-label="Permalink to &quot;七、内存与生命周期&quot;">​</a></h2><h3 id="_7-1-渲染进程何时销毁" tabindex="-1">7.1 渲染进程何时销毁? <a class="header-anchor" href="#_7-1-渲染进程何时销毁" aria-label="Permalink to &quot;7.1 渲染进程何时销毁?&quot;">​</a></h3><table tabindex="0"><thead><tr><th>情况</th><th>行为</th></tr></thead><tbody><tr><td>用户关闭 Tab</td><td>渲染进程销毁</td></tr><tr><td>Tab 进入后台</td><td>不销毁(节省下次打开成本)</td></tr><tr><td>内存压力大</td><td>销毁最久未访问的 Tab 渲染进程</td></tr><tr><td>崩溃</td><td>销毁,新 Tab 重建</td></tr></tbody></table><h3 id="_7-2-bfcache-back-forward-cache" tabindex="-1">7.2 BFCache(Back-Forward Cache) <a class="header-anchor" href="#_7-2-bfcache-back-forward-cache" aria-label="Permalink to &quot;7.2 BFCache(Back-Forward Cache)&quot;">​</a></h3><p>Chrome 96+ 启用了 BFCache,前进/后退按钮<strong>瞬间恢复</strong>(不重新加载):</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>后退 → 渲染进程保留(只是隐藏)</span></span>
<span class="line"><span>前进 → 恢复显示(零等待)</span></span></code></pre></div><h3 id="_7-3-内存限制" tabindex="-1">7.3 内存限制 <a class="header-anchor" href="#_7-3-内存限制" aria-label="Permalink to &quot;7.3 内存限制&quot;">​</a></h3><p>Chrome 默认<strong>单进程最多 4GB</strong>(渲染进程),超出会被 kill。</p><p><strong>调试内存问题</strong>:</p><ul><li><code>chrome://memory-internals/</code> 看进程内存</li><li>DevTools Memory 面板看 heap snapshot</li><li>Performance Monitor 看实时数据</li></ul><h2 id="八、firefox-safari-的差异" tabindex="-1">八、FireFox / Safari 的差异 <a class="header-anchor" href="#八、firefox-safari-的差异" aria-label="Permalink to &quot;八、FireFox / Safari 的差异&quot;">​</a></h2><table tabindex="0"><thead><tr><th>浏览器</th><th>进程架构</th><th>备注</th></tr></thead><tbody><tr><td><strong>Chrome</strong></td><td>多进程(每 Tab)</td><td>site-per-process(同站不同 Tab 也可能同进程)</td></tr><tr><td><strong>Safari</strong></td><td>多进程(更激进)</td><td>iOS 上强制每 Tab 独立进程</td></tr><tr><td><strong>Firefox</strong></td><td>多进程(Electrolysis 项目后)</td><td>4 进程上限(防止进程过多)</td></tr><tr><td><strong>Edge</strong></td><td>多进程(继承 Chrome)</td><td>同 Chrome</td></tr></tbody></table><h2 id="九、调试工具" tabindex="-1">九、调试工具 <a class="header-anchor" href="#九、调试工具" aria-label="Permalink to &quot;九、调试工具&quot;">​</a></h2><ul><li><strong>chrome://process-internals</strong> — 进程详情</li><li><strong>chrome://tracing</strong> — 性能追踪</li><li><strong>chrome://memory-internals</strong> — 内存详情</li><li><strong>DevTools Performance</strong> — 录制主线程活动</li><li><strong>DevTools Memory</strong> — 堆快照、内存泄漏检测</li><li><strong>DevTools Network</strong> — 网络瀑布</li></ul><h2 id="十、参考文献" tabindex="-1">十、参考文献 <a class="header-anchor" href="#十、参考文献" aria-label="Permalink to &quot;十、参考文献&quot;">​</a></h2><ul><li><p><a href="https://developer.chrome.com/blog/inside-browser-part1" target="_blank" rel="noreferrer">Inside look at modern web browser</a>(Mariko Kosaka 4-part series)</p></li><li><p><a href="https://docs.google.com/document/d/1aitpCOCX-..." target="_blank" rel="noreferrer">How Blink Works</a>(content)</p></li><li><p>《WebKit 技术内幕》</p></li></ul>`,66)])])}const g=a(e,[["render",l]]);export{k as __pageData,g as default};
