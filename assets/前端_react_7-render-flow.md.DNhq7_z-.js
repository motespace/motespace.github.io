import{_ as n,o as s,c as e,a5 as p}from"./chunks/framework.Bt0SrEfo.js";const _=JSON.parse('{"title":"React 渲染流程总结","description":"","frontmatter":{},"headers":[],"relativePath":"前端/react/7-render-flow.md","filePath":"前端/react/7-render-flow.md","lastUpdated":1789979447000}'),t={name:"前端/react/7-render-flow.md"};function l(c,a,i,o,r,d){return s(),e("div",null,[...a[0]||(a[0]=[p(`<h1 id="react-渲染流程总结" tabindex="-1">React 渲染流程总结 <a class="header-anchor" href="#react-渲染流程总结" aria-label="Permalink to &quot;React 渲染流程总结&quot;">​</a></h1><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1. setState / dispatch</span></span>
<span class="line"><span>   ↓</span></span>
<span class="line"><span>2. scheduleUpdate：加入调度队列</span></span>
<span class="line"><span>   ↓</span></span>
<span class="line"><span>3. Scheduler：根据优先级排序，决定何时执行</span></span>
<span class="line"><span>   ↓</span></span>
<span class="line"><span>4. Render 阶段（可中断）：</span></span>
<span class="line"><span>   - beginWork：进入 Fiber 节点</span></span>
<span class="line"><span>   - reconcileChildren：调和子节点（diff）</span></span>
<span class="line"><span>   - updateFunctionComponent：执行函数组件</span></span>
<span class="line"><span>   - 执行 hooks</span></span>
<span class="line"><span>   ↓</span></span>
<span class="line"><span>5. Commit 阶段（不可中断）：</span></span>
<span class="line"><span>   - beforeMutation：DOM 更新前</span></span>
<span class="line"><span>   - mutation：执行 DOM 操作</span></span>
<span class="line"><span>   - layout：DOM 更新后</span></span>
<span class="line"><span>   - useLayoutEffect 同步执行</span></span>
<span class="line"><span>   ↓</span></span>
<span class="line"><span>6. 浏览器绘制</span></span>
<span class="line"><span>   ↓</span></span>
<span class="line"><span>7. useEffect 异步执行</span></span></code></pre></div>`,2)])])}const f=n(t,[["render",l]]);export{_ as __pageData,f as default};
