import{_ as a,o as n,c as p,a2 as i}from"./chunks/framework.BXzK3EA4.js";const d=JSON.parse('{"title":"二十二、ERP / CRM 业务场景题","description":"面向 ERP / CRM / 运营后台的 React 岗位。这组题的核心是\\"业务感\\"：字段联动、审批流、数据权限、批量导入导出 —— 纯技术题问不出来的部分。","frontmatter":{},"headers":[],"relativePath":"面试/场景题/22-erp-crm场景.md","filePath":"面试/场景题/22-erp-crm场景.md","lastUpdated":1793203221000}'),l={name:"面试/场景题/22-erp-crm场景.md"};function e(t,s,c,h,o,r){return n(),p("div",null,[...s[0]||(s[0]=[i(`<h1 id="二十二、erp-crm-业务场景题" tabindex="-1">二十二、ERP / CRM 业务场景题 <a class="header-anchor" href="#二十二、erp-crm-业务场景题" aria-label="Permalink to &quot;二十二、ERP / CRM 业务场景题&quot;">​</a></h1><blockquote><p>面向 ERP / CRM / 运营后台的 React 岗位。这组题的核心是&quot;<strong>业务感</strong>&quot;：字段联动、审批流、数据权限、批量导入导出 —— 纯技术题问不出来的部分。</p></blockquote><hr><h3 id="_63-客户列表-5-万条-组合筛选很慢" tabindex="-1">63. 客户列表 5 万条 + 组合筛选很慢 <a class="header-anchor" href="#_63-客户列表-5-万条-组合筛选很慢" aria-label="Permalink to &quot;63. 客户列表 5 万条 + 组合筛选很慢&quot;">​</a></h3><p><strong>场景</strong>：客户管理页有 5 万条数据，支持&quot;名称模糊搜索 + 等级 + 状态 + 成交日期区间&quot;组合筛选。现在是前端拉全量再过滤，页面卡死。</p><p><strong>答案要点</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1. 筛选条件全部交给后端,前端只发参数</span></span>
<span class="line"><span>   GET /api/customers?name=张&amp;level=A&amp;status=1&amp;startDate=...&amp;page=1&amp;pageSize=20</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. 关键:防抖 + 竞态取消</span></span>
<span class="line"><span>   - 输入框 300ms 防抖</span></span>
<span class="line"><span>   - 新请求发出时 AbortController 取消上一个</span></span>
<span class="line"><span>     (旧响应晚到会覆盖新数据,这是&quot;搜索结果错乱&quot;的经典原因)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3. 筛选条件写进 URL query</span></span>
<span class="line"><span>   - 刷新不丢条件、可以分享链接、后退键可用</span></span>
<span class="line"><span>   - React Router 的 useSearchParams 即可</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4. 分页用后端分页,不要前端 slice</span></span>
<span class="line"><span>   - showTotal 显示真实总数</span></span>
<span class="line"><span>   - 快速跳页用 pageSize=50</span></span>
<span class="line"><span></span></span>
<span class="line"><span>5. 复杂组合筛选(区间+多选+关联)用&quot;查询条件对象&quot;管理</span></span>
<span class="line"><span>   - 区分&quot;已输入&quot;和&quot;已提交&quot;两个状态,避免每次输入都发请求</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">draft</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">setDraft</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useState</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Filters</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;(initialFilters)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">applied</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">setApplied</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useState</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Filters</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;(initialFilters)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> abortRef</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">AbortController</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> run</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useCallback</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">filters</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Filters</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  abortRef.current?.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">abort</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> controller</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> AbortController</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  abortRef.current </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> controller</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> res</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> api.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">listCustomers</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(filters, controller.signal)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  setRows</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(res.list)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}, [])</span></span></code></pre></div><p><strong>追问</strong>：</p><ul><li>用户输入&quot;张&quot;然后快速改成&quot;张三&quot;，只发一次请求 → 防抖 300ms</li><li>后端筛选很慢（3 秒）→ 前端加 loading 骨架屏 + 请求超时兜底；根治是后端加组合索引 / ES</li><li>导出要求&quot;全部筛选结果&quot;而不是当前页 → 导出接口独立，传筛选条件不传分页</li></ul><hr><h3 id="_64-excel-批量导入-5-万行客户" tabindex="-1">64. Excel 批量导入 5 万行客户 <a class="header-anchor" href="#_64-excel-批量导入-5-万行客户" aria-label="Permalink to &quot;64. Excel 批量导入 5 万行客户&quot;">​</a></h3><p><strong>场景</strong>：运营要一次性导入 5 万行客户数据（Excel），要求：格式校验、查重、失败行给出原因、成功行入库。</p><p><strong>答案要点</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1. 前端只做&quot;预校验 + 分片提交&quot;,不保证强一致</span></span>
<span class="line"><span>   - 解析:SheetJS(xlsx) 读第一行做表头映射</span></span>
<span class="line"><span>   - 预校验:行级校验(必填/格式/枚举),把错误标在表格里</span></span>
<span class="line"><span>   - 查重:批量把待查字段(手机号)一次传给后端查重接口,不要一行一请求</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. 分批提交</span></span>
<span class="line"><span>   - 每批 500~1000 行,串行或并发 2~3(别太多,后端压力大)</span></span>
<span class="line"><span>   - 每批上报进度(已处理/总数),前端进度条</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3. 失败行导出</span></span>
<span class="line"><span>   - 后端返回失败明细(行号 + 字段 + 原因)</span></span>
<span class="line"><span>   - 前端生成&quot;错误报告&quot;Excel 让用户下载修改后重传</span></span>
<span class="line"><span>   - 这是最能体现产品思维的点</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4. 大文件解析别卡主线程</span></span>
<span class="line"><span>   - xlsx 解析放 Web Worker,否则页面假死</span></span>
<span class="line"><span>   - 5 万行 xlsx 内存峰值可能 500MB+,考虑用 CSV 替代 xlsx</span></span>
<span class="line"><span></span></span>
<span class="line"><span>5. 幂等</span></span>
<span class="line"><span>   - 每次导入生成 batchId,后端按 batchId 去重,重复提交不产生脏数据</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Worker 里解析,主线程只收结果</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> worker</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Worker</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> URL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./parse.worker.ts&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">meta</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.url), { type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;module&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">worker.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">postMessage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ file })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">worker.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onmessage</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ({ </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setRows</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data.rows)   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// data: { rows, errors }</span></span></code></pre></div><p><strong>追问</strong>：</p><ul><li>解析时页面卡 → Web Worker</li><li>用户中途关闭页面 → batchId 存在 localStorage，重新进来可继续查导入状态</li><li>导入 5 万行要多久 → 前端 1~2 分钟很正常，关键是把&quot;等待&quot;做成有进度的体验，而不是一个转圈</li></ul><hr><h3 id="_65-导出-10-万行-excel-前端内存爆了" tabindex="-1">65. 导出 10 万行 Excel，前端内存爆了 <a class="header-anchor" href="#_65-导出-10-万行-excel-前端内存爆了" aria-label="Permalink to &quot;65. 导出 10 万行 Excel，前端内存爆了&quot;">​</a></h3><p><strong>场景</strong>：客户列表导出 10 万行，用 SheetJS 生成 Blob，页面直接崩了。</p><p><strong>答案要点</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1. 10 万行不要在前端生成 —— 走服务端导出</span></span>
<span class="line"><span>   POST /api/customers/export  (传筛选条件)</span></span>
<span class="line"><span>   → 返回 taskId</span></span>
<span class="line"><span>   → 前端轮询任务状态 / WebSocket 推送</span></span>
<span class="line"><span>   → 生成完成后给 OSS 签名下载地址,前端 a[download] 触发</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. 前端体验</span></span>
<span class="line"><span>   - &quot;导出任务已创建,完成后会通知你&quot; + 下载中心列表</span></span>
<span class="line"><span>   - 大数据量导出要有&quot;导出中心&quot;页面,而不是让用户干等弹窗</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3. 一定要在前端做的话</span></span>
<span class="line"><span>   - 用 CSV(流式拼接字符串)而不是 xlsx</span></span>
<span class="line"><span>   - 分片生成,每 1 万行 append 一块,最后 new Blob(parts)</span></span>
<span class="line"><span>   - 或者 File System Access API:直接流式写磁盘,不占内存</span></span>
<span class="line"><span>     (仅 Chromium 支持,需要降级方案)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4. 兜底</span></span>
<span class="line"><span>   - 超过阈值(比如 1 万行)前端直接禁用导出,提示走服务端</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 前端兜底:超过阈值就提示</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (total </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  message.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">info</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;数据量较大,已转为后台导出任务,完成后可在下载中心获取&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">taskId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> api.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createExportTask</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(filters)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  navigate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`/download-center?taskId=\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">taskId</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>追问</strong>：</p><ul><li>后端导出要 3 分钟 → 异步任务 + 通知，页面不能阻塞</li><li>导出的 Excel 里要不要脱敏手机号 → 按角色判断，导出接口服务端脱敏（别只在前端隐藏）</li></ul><hr><h3 id="_66-客户类型不同-表单字段完全不一样" tabindex="-1">66. 客户类型不同，表单字段完全不一样 <a class="header-anchor" href="#_66-客户类型不同-表单字段完全不一样" aria-label="Permalink to &quot;66. 客户类型不同，表单字段完全不一样&quot;">​</a></h3><p><strong>场景</strong>：CRM 里&quot;线索 / 商机 / 合同&quot;三类客户，字段差异很大（线索只有联系方式；合同要有金额、付款方式、交付日期）。做成一个表单还是三个？</p><p><strong>答案要点</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1. 三种做法</span></span>
<span class="line"><span>   a) 三个独立表单组件 —— 字段差异大时最清晰,但复用少</span></span>
<span class="line"><span>   b) 一个大表单 + shouldUpdate 动态显隐 —— 字段少时可用,字段多时表单巨大难维护</span></span>
<span class="line"><span>   c) Schema 驱动的动态表单 —— 配置化 ERP 最优解</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. Schema 驱动</span></span>
<span class="line"><span>   type FieldSchema = {</span></span>
<span class="line"><span>     name: string</span></span>
<span class="line"><span>     label: string</span></span>
<span class="line"><span>     type: &#39;input&#39; | &#39;select&#39; | &#39;date&#39; | &#39;number&#39; | &#39;custom&#39;</span></span>
<span class="line"><span>     required?: boolean</span></span>
<span class="line"><span>     options?: {label,value}[]</span></span>
<span class="line"><span>     rules?: Rule[]</span></span>
<span class="line"><span>     visible?: (values) =&gt; boolean</span></span>
<span class="line"><span>     component?: React.ComponentType</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3. 关键设计</span></span>
<span class="line"><span>   - schema 由后端配置接口下发,产品经理在后台配</span></span>
<span class="line"><span>   - custom 类型允许塞业务组件(地址选择器/客户选择器)</span></span>
<span class="line"><span>   - visible + useWatch 做联动</span></span>
<span class="line"><span>   - 表单值统一 schema 校验,提交时按 schema 转 payload</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4. 落地注意</span></span>
<span class="line"><span>   - Schema 渲染的性能:每个字段拆成独立组件,各自 useWatch</span></span>
<span class="line"><span>   - Schema 版本化:改了字段要兼容历史数据</span></span></code></pre></div><p><strong>追问</strong>：</p><ul><li>为什么不直接写死？→ 后端产品配字段是 ERP 的常态,写死等于每次改字段都要发版</li><li>Schema 里的校验规则怎么表达？→ 前端定义规则 DSL（required/pattern/max/min/custom fn），后端下发，前端用 Zod 动态编译</li></ul><hr><h3 id="_67-审批流-提交-→-审批-→-驳回-→-再提交" tabindex="-1">67. 审批流：提交 → 审批 → 驳回 → 再提交 <a class="header-anchor" href="#_67-审批流-提交-→-审批-→-驳回-→-再提交" aria-label="Permalink to &quot;67. 审批流：提交 → 审批 → 驳回 → 再提交&quot;">​</a></h3><p><strong>场景</strong>：ERP 单据审批。状态有：草稿、待审批、已通过、已驳回、已作废。用户能&quot;撤回&quot;，审批人能&quot;驳回并附意见&quot;。</p><p><strong>答案要点</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1. 前端用状态机,不是一堆 if</span></span>
<span class="line"><span>   状态: DRAFT → SUBMITTED → APPROVED | REJECTED → (RESUBMIT) → SUBMITTED</span></span>
<span class="line"><span>   动作: SUBMIT / WITHDRAW / APPROVE / REJECT / CANCEL</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   const TRANSITIONS = {</span></span>
<span class="line"><span>     DRAFT:     { SUBMIT: &#39;SUBMITTED&#39;, CANCEL: &#39;CANCELED&#39; },</span></span>
<span class="line"><span>     SUBMITTED: { APPROVE: &#39;APPROVED&#39;, REJECT: &#39;REJECTED&#39;, WITHDRAW: &#39;DRAFT&#39; },</span></span>
<span class="line"><span>     REJECTED:  { RESUBMIT: &#39;SUBMITTED&#39;, CANCEL: &#39;CANCELED&#39; },</span></span>
<span class="line"><span>     APPROVED:  { CANCEL: &#39;CANCELED&#39; },      // 已通过一般不能撤回,只能作废</span></span>
<span class="line"><span>     CANCELED:  {},</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>   function can(action: Action, status: Status) {</span></span>
<span class="line"><span>     return Boolean(TRANSITIONS[status]?.[action])</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. 按钮按状态渲染</span></span>
<span class="line"><span>   {can(&#39;SUBMIT&#39;, status) &amp;&amp; &lt;Button onClick={submit}&gt;提交&lt;/Button&gt;}</span></span>
<span class="line"><span>   {can(&#39;WITHDRAW&#39;, status) &amp;&amp; &lt;Button onClick={withdraw}&gt;撤回&lt;/Button&gt;}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3. 驳回必须带意见</span></span>
<span class="line"><span>   - Modal 里放 TextArea,必填</span></span>
<span class="line"><span>   - 意见进审批记录,详情页时间线展示</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4. 状态以服务端为准</span></span>
<span class="line"><span>   - 前端乐观更新 → 后端失败要回滚</span></span>
<span class="line"><span>   - 多人同时审批:后端做状态机校验(当前状态必须匹配才允许流转)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>5. 审批记录时间线</span></span>
<span class="line"><span>   - Timeline 组件展示:谁、什么时候、做了什么、意见</span></span></code></pre></div><p><strong>追问</strong>：</p><ul><li>提交后想改 → 已提交状态下要&quot;撤回&quot;才能改，草稿才能改</li><li>审批人离职了 → 管理员改派,前端不关心</li><li>状态在前端写死会不会和后端不一致 → 后端也维护一份，前端只是 UI 投影；关键流转以后端返回的状态为准</li></ul><hr><h3 id="_68-两个销售同时改同一条客户记录" tabindex="-1">68. 两个销售同时改同一条客户记录 <a class="header-anchor" href="#_68-两个销售同时改同一条客户记录" aria-label="Permalink to &quot;68. 两个销售同时改同一条客户记录&quot;">​</a></h3><p><strong>场景</strong>：销售 A 和 B 同时打开客户详情，A 改了联系方式，B 也改了备注，两人都点保存。后保存的人覆盖了先保存的人。</p><p><strong>答案要点</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1. 乐观锁(version 字段)</span></span>
<span class="line"><span>   GET  /api/customers/1  → { ..., version: 7 }</span></span>
<span class="line"><span>   PUT  /api/customers/1  body: { ..., version: 7 }</span></span>
<span class="line"><span>   后端: UPDATE ... SET version = version + 1 WHERE id = 1 AND version = 7</span></span>
<span class="line"><span>        影响行数 0 → 说明被别人改过,返回 409</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. 前端处理 409</span></span>
<span class="line"><span>   - 提示&quot;数据已被他人修改,请刷新后重试&quot;</span></span>
<span class="line"><span>   - 或做字段级合并:把本地改动和服务器最新值 diff,只冲突字段让用户选</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3. 编辑前就检测(更友好)</span></span>
<span class="line"><span>   - 进入编辑时记录 version</span></span>
<span class="line"><span>   - 提交前或定时(30s)轮询 version,发现变化就提示</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4. 悲观锁(强一致场景用)</span></span>
<span class="line"><span>   - 编辑时加锁 SELECT ... FOR UPDATE</span></span>
<span class="line"><span>   - 前端需要&quot;锁定人&quot;展示:XXX 正在编辑该客户</span></span>
<span class="line"><span></span></span>
<span class="line"><span>5. 字段级合并的坑</span></span>
<span class="line"><span>   - 只对&quot;不同字段&quot;合并,同字段冲突必须让人决策</span></span>
<span class="line"><span>   - 合并前要重新拉基线,不能拿 3 个不同版本的数据两两合并</span></span></code></pre></div><p><strong>追问</strong>：</p><ul><li>用户不改就离开 → 释放锁 / 悲观锁要有超时释放</li><li>移动端离线编辑 → 用 CRDT 或操作日志 + 重放，参考 <a href="/面试/场景题/01-saas-后台">后台系统（SaaS）场景题</a> 第 10 题</li></ul><hr><h3 id="_69-数据权限-不同角色看到不同行" tabindex="-1">69. 数据权限：不同角色看到不同行 <a class="header-anchor" href="#_69-数据权限-不同角色看到不同行" aria-label="Permalink to &quot;69. 数据权限：不同角色看到不同行&quot;">​</a></h3><p><strong>场景</strong>：华东区销售只能看华东区的客户，财务能看到全部但看不到联系方式。行级 + 列级权限怎么做？</p><p><strong>答案要点</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1. 行级权限必须后端做</span></span>
<span class="line"><span>   - 前端过滤是&quot;假过滤&quot;,接口返回的数据已经泄露了</span></span>
<span class="line"><span>   - 后端根据当前用户的角色/组织范围拼 SQL 条件</span></span>
<span class="line"><span>   GET /api/customers?scope=mine</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. 前端要做的</span></span>
<span class="line"><span>   - 切换&quot;我负责的 / 我部门 / 全部&quot; → 把 scope 作为筛选条件,而不是本地过滤</span></span>
<span class="line"><span>   - 默认选中&quot;我负责的&quot;,避免用户以为是全部</span></span>
<span class="line"><span>   - 数据范围提示:页面顶部显示&quot;当前数据范围:华东区&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3. 列级权限(脱敏)</span></span>
<span class="line"><span>   - 后端按角色脱敏:手机号返回 138****1234</span></span>
<span class="line"><span>   - 完整值走单独接口,需要二次鉴权 + 记录审计</span></span>
<span class="line"><span>   - 前端只是隐藏列是不够的</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4. 前端按钮级权限</span></span>
<span class="line"><span>   - &lt;AuthBtn permission=&quot;customer:export&quot;&gt; 按钮级</span></span>
<span class="line"><span>   - 也要注意&quot;无权限时按钮直接不渲染&quot;,避免用户点了报错</span></span>
<span class="line"><span></span></span>
<span class="line"><span>5. 权限变更的实时性</span></span>
<span class="line"><span>   - 管理员改了角色权限,用户当前页面要能感知</span></span>
<span class="line"><span>   - 方案:WebSocket 推送权限变更 → 刷新权限 store → 重新拉数据</span></span></code></pre></div><p><strong>追问</strong>：</p><ul><li>用户导出全部客户会不会绕过行级权限？→ 导出接口同样做范围过滤</li><li>前端拿到的权限点很多,全存 localStorage 安全吗？→ 权限点只是&quot;展示用&quot;,真正的判定在后端</li></ul><hr><h3 id="_70-字典-主数据驱动-不同租户的字段和选项不一样" tabindex="-1">70. 字典/主数据驱动：不同租户的字段和选项不一样 <a class="header-anchor" href="#_70-字典-主数据驱动-不同租户的字段和选项不一样" aria-label="Permalink to &quot;70. 字典/主数据驱动：不同租户的字段和选项不一样&quot;">​</a></h3><p><strong>场景</strong>：多租户 SaaS。租户 A 的客户表有&quot;渠道&quot;字段，租户 B 没有；租户 B 的状态下拉有 8 种，租户 A 只有 4 种。</p><p><strong>答案要点</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1. 字典接口统一收口</span></span>
<span class="line"><span>   GET /api/dict?type=customer_status&amp;tenantId=xxx</span></span>
<span class="line"><span>   → [{ label: &#39;待跟进&#39;, value: &#39;PENDING&#39;, ... }]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. 前端封装 DictSelect / DictTag 组件</span></span>
<span class="line"><span>   &lt;DictSelect type=&quot;customer_status&quot; /&gt;</span></span>
<span class="line"><span>   内部:useDict(type) → 缓存到全局 store,相同 type 只请求一次</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3. 字段配置(哪些列显示)也走配置</span></span>
<span class="line"><span>   GET /api/page-config?page=customer.list</span></span>
<span class="line"><span>   → { columns: [{ key:&#39;name&#39;, visible:true, order:1 }, ...] }</span></span>
<span class="line"><span>   前端据此动态渲染 Table columns</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4. 字典缓存与失效</span></span>
<span class="line"><span>   - store 里缓存,TTL 或手动刷新</span></span>
<span class="line"><span>   - 配置变更时通过 WebSocket 推送失效消息</span></span>
<span class="line"><span></span></span>
<span class="line"><span>5. 枚举兜底</span></span>
<span class="line"><span>   - 后端返回了前端不认识的字典值,不能显示 undefined</span></span>
<span class="line"><span>   - DictTag 兜底显示原始 code</span></span></code></pre></div><p><strong>追问</strong>：</p><ul><li>每个页面都请求一次字典很浪费 → 全局缓存 + 相同 type 复用</li><li>字典放前端还是后端 → 业务相关字典必须后端（权限/范围相关）；纯展示常量（如省份）可以前端内置</li></ul><hr><h3 id="_71-列表页和详情页数据对不上" tabindex="-1">71. 列表页和详情页数据对不上 <a class="header-anchor" href="#_71-列表页和详情页数据对不上" aria-label="Permalink to &quot;71. 列表页和详情页数据对不上&quot;">​</a></h3><p><strong>场景</strong>：列表页显示客户 A 的状态是&quot;待审批&quot;，点进详情刷新后变成&quot;已通过&quot;（同事刚审批了）。列表和详情数据不一致。</p><p><strong>答案要点</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1. 明确数据来源</span></span>
<span class="line"><span>   - 列表页数据 = TanStack Query 的 list 查询</span></span>
<span class="line"><span>   - 详情页数据 = detail 查询</span></span>
<span class="line"><span>   两个独立缓存,天然会不一致 —— 这是正常现象,要设计一致性策略</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. 策略 A:失效失效(invalidate)</span></span>
<span class="line"><span>   - 详情页操作成功后 invalidateQueries([&#39;customers&#39;])</span></span>
<span class="line"><span>   - 列表回到前台时 staleTime 到期自动重取</span></span>
<span class="line"><span>   - 简单,但列表会&quot;跳一下&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3. 策略 B:精准更新(setQueryData)</span></span>
<span class="line"><span>   - 操作成功后直接改对应缓存里的那条记录</span></span>
<span class="line"><span>   - 体验最顺,但要小心缓存同步逻辑</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4. 策略 C:推送(WebSocket)</span></span>
<span class="line"><span>   - 数据实时性要求高的模块(审批、库存、余额)用推送</span></span>
<span class="line"><span>   - 收到推送 → 更新 query cache → UI 立刻变</span></span>
<span class="line"><span>   - 这是 ERP 里&quot;库存/余额&quot;必备的</span></span>
<span class="line"><span></span></span>
<span class="line"><span>5. 列表重新可见时刷新</span></span>
<span class="line"><span>   - 浏览器标签切回前台时 refetch</span></span>
<span class="line"><span>   document.addEventListener(&#39;visibilitychange&#39;, () =&gt; {</span></span>
<span class="line"><span>     if (document.visibilityState === &#39;visible&#39;) queryClient.invalidateQueries()</span></span>
<span class="line"><span>   })</span></span></code></pre></div><p><strong>追问</strong>：</p><ul><li>用户在列表页停留很久 → 加轮询(30s)或订阅推送</li><li>乐观更新失败怎么办 → 回滚 + toast 提示</li></ul><hr><h3 id="_72-操作审计-谁改了什么" tabindex="-1">72. 操作审计：谁改了什么 <a class="header-anchor" href="#_72-操作审计-谁改了什么" aria-label="Permalink to &quot;72. 操作审计：谁改了什么&quot;">​</a></h3><p><strong>场景</strong>：客户信息被改了，要能查到&quot;谁、什么时候、把哪个字段从什么改成了什么&quot;。</p><p><strong>答案要点</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1. 前端提供&quot;变更摘要&quot;给后端</span></span>
<span class="line"><span>   - 提交时对比初始值和提交值,生成 diff</span></span>
<span class="line"><span>   const diff = diffFields(initialValues, values)</span></span>
<span class="line"><span>   → [{ field: &#39;phone&#39;, from: &#39;138...&#39;, after: &#39;139...&#39; }]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. 但审计不能只靠前端</span></span>
<span class="line"><span>   - 前端 diff 可能不全(批量操作、脚本改的)</span></span>
<span class="line"><span>   - 真正的审计在服务端:拦截器/ORM 变更钩子里记录</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3. 前端要做的是&quot;展示&quot;</span></span>
<span class="line"><span>   - 详情页&quot;操作日志&quot;Tab:Timeline + 表格</span></span>
<span class="line"><span>   - 显示:操作人、时间、字段、变更前后、IP/设备</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4. 敏感字段</span></span>
<span class="line"><span>   - 前端展示时密码/证件号脱敏</span></span>
<span class="line"><span>   - 导出日志也要脱敏 + 记录谁导出了日志</span></span>
<span class="line"><span></span></span>
<span class="line"><span>5. 合规角度</span></span>
<span class="line"><span>   - 审计日志只增不改,定期归档</span></span>
<span class="line"><span>   - 保留期限(等保通常要求 6 个月以上)</span></span></code></pre></div><p><strong>追问</strong>：</p><ul><li>批量修改 100 条怎么记？→ 一次操作一条审计记录 + 明细表关联 batchId</li><li>用户能不能删日志？→ 不能，前端不给入口，后端接口也不提供</li></ul><hr><h3 id="_73-附件与合同-pdf-在线预览、版本管理" tabindex="-1">73. 附件与合同：PDF 在线预览、版本管理 <a class="header-anchor" href="#_73-附件与合同-pdf-在线预览、版本管理" aria-label="Permalink to &quot;73. 附件与合同：PDF 在线预览、版本管理&quot;">​</a></h3><p><strong>场景</strong>：客户要上传合同扫描件，支持在线预览 PDF；合同要保留历史版本；用户想在系统里直接看。</p><p><strong>答案要点</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1. 上传走 OSS 直传</span></span>
<span class="line"><span>   - 前端向后端要上传凭证(STS 临时密钥 / 签名),前端直传 OSS</span></span>
<span class="line"><span>   - 不经过业务服务器,大文件不占带宽</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. 预览</span></span>
<span class="line"><span>   - PDF:iframe 嵌 OSS 预览地址,或 pdf.js 渲染(需处理 worker/crossOrigin)</span></span>
<span class="line"><span>   - Word/Excel:后端转 PDF 后预览(调用 LibreOffice / 第三方服务)</span></span>
<span class="line"><span>   - 图片:直接 &lt;img&gt; + 缩放</span></span>
<span class="line"><span>   - 安全:OSS 桶私有,用后端签名 URL,设置短有效期</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3. 版本管理</span></span>
<span class="line"><span>   - 附件表存: id, bizId, version, url, size, uploader, createdAt</span></span>
<span class="line"><span>   - 新上传 version + 1,旧版本保留</span></span>
<span class="line"><span>   - 前端展示版本下拉,默认最新</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4. 大文件</span></span>
<span class="line"><span>   - 分片上传 + 断点续传 + 秒传(hash 校验)</span></span>
<span class="line"><span>   - 前端算 hash 放 Web Worker,别卡主线程</span></span>
<span class="line"><span>   - 进度条、暂停/继续、失败重试(指数退避)</span></span></code></pre></div><p><strong>追问</strong>：</p><ul><li>预览 PDF 时怎么防止用户下载/截屏？→ 前端做不到完全防，只能加水印 + 短时效签名 URL；真正要防得靠权限和水印</li><li>文件名带中文/特殊字符 → 用 id 存库，前端用 content-disposition 的 filename 显示</li></ul><hr><h3 id="_74-多租户切换-要清什么" tabindex="-1">74. 多租户切换：要清什么 <a class="header-anchor" href="#_74-多租户切换-要清什么" aria-label="Permalink to &quot;74. 多租户切换：要清什么&quot;">​</a></h3><p><strong>场景</strong>：SaaS 后台，切换租户后，页面上的数据还是上一个租户的。</p><p><strong>答案要点</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1. 切换租户 = 一次&quot;软重置&quot;,要清理的东西列全</span></span>
<span class="line"><span>   - 查询缓存:queryClient.clear()   ← 最容易漏</span></span>
<span class="line"><span>   - 全局 store:Zustand/Redux 里跟租户相关的 slice</span></span>
<span class="line"><span>   - localStorage/sessionStorage:token、用户信息、偏好</span></span>
<span class="line"><span>   - 运行时配置:字典、菜单、权限点、主题</span></span>
<span class="line"><span>   - 长连接:WebSocket 断开重连(带新的 tenantId)</span></span>
<span class="line"><span>   - 正在进行的请求:AbortController 全部取消</span></span>
<span class="line"><span>   - 定时器:轮询、埋点队列</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. 顺序很重要</span></span>
<span class="line"><span>   取消请求 → 清缓存 → 清存储 → 重新登录/换 token → 重连 WS → 拉新租户配置 → 跳转首页</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3. 更稳的做法:租户切换直接整页跳转</span></span>
<span class="line"><span>   window.location.href = &#39;/switch-tenant&#39;</span></span>
<span class="line"><span>   服务端换 token 后 302 到新租户首页</span></span>
<span class="line"><span>   理由:彻底避免内存残留,实现成本极低,后台系统可接受</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4. token 里带 tenantId</span></span>
<span class="line"><span>   - 后端从 token 解析,前端不传 tenantId 参数(防止越权)</span></span>
<span class="line"><span>   - 越权风险:前端传 tenantId=别人的 → 后端必须以 token 为准</span></span></code></pre></div><p><strong>追问</strong>：</p><ul><li>切换租户要保留的东西（比如个人偏好）→ 单独存一份 global key,不跟租户 key 混</li><li>为什么不用 localStorage 隔离 key？→ 可以做但容易漏 key；clear() 更可靠</li></ul><hr><h3 id="_75-ai-提效-给-erp-加-ai-能力" tabindex="-1">75. AI 提效：给 ERP 加 AI 能力 <a class="header-anchor" href="#_75-ai-提效-给-erp-加-ai-能力" aria-label="Permalink to &quot;75. AI 提效：给 ERP 加 AI 能力&quot;">​</a></h3><p><strong>场景</strong>：ERP 里想让 AI 帮销售填写客户资料 —— 根据客户名称/公司自动补全工商信息、生成跟进话术；或者在客户详情里做一个&quot;问这家公司&quot;的对话框。</p><p><strong>答案要点</strong>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1. 前端视角的三个落点</span></span>
<span class="line"><span>   a) 表单智能填充</span></span>
<span class="line"><span>      - 失焦时触发,后端调 LLM + 工商信息 API,前端回填</span></span>
<span class="line"><span>      - 要有 loading 与&quot;AI 生成&quot;标识,让用户知道哪些是机器填的</span></span>
<span class="line"><span>   b) 内嵌智能问答</span></span>
<span class="line"><span>      - SSE 流式输出(参考 /前端/ai-integration/1-streaming)</span></span>
<span class="line"><span>      - 上下文拼装:当前客户 JSON + 历史跟进记录</span></span>
<span class="line"><span>   c) 数据洞察</span></span>
<span class="line"><span>      - 列表页&quot;这批客户有什么共性&quot; → 自然语言查询</span></span>
<span class="line"><span>      - 前端把筛选条件翻译成 API 参数(结构化输出)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. 关键工程点</span></span>
<span class="line"><span>   - 流式:fetch + ReadableStream 或 EventSource,别等全部返回</span></span>
<span class="line"><span>   - 中断:AbortController,用户切页面时取消</span></span>
<span class="line"><span>   - 兜底:超时/失败要降级成普通表单,不能卡住主流程</span></span>
<span class="line"><span>   - 成本:同一问题缓存(RAG),别每次都全量塞上下文</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3. 合规(ERP/CRM 尤其重要)</span></span>
<span class="line"><span>   - 客户数据是敏感数据,出境/外发要走审批</span></span>
<span class="line"><span>   - 提示词里带 PII 要脱敏</span></span>
<span class="line"><span>   - AI 输出要标注来源,不能直接当业务数据写库,需要人工确认</span></span></code></pre></div><p><strong>追问</strong>：</p><ul><li>AI 结果不准怎么办？→ 全部走&quot;建议 + 人工确认&quot;，不直接落库</li><li>怎么评估效果？→ 建一个标注集,离线跑准确率;线上看采纳率(用户是否保留 AI 填的值)</li></ul><hr><h2 id="面试答题提示" tabindex="-1">面试答题提示 <a class="header-anchor" href="#面试答题提示" aria-label="Permalink to &quot;面试答题提示&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>这组题的通用回答框架(4 步):</span></span>
<span class="line"><span>1. 先说清业务约束(数据量多少、谁在用、能不能容忍不一致)</span></span>
<span class="line"><span>2. 再说技术方案(前端做什么 / 后端做什么 / 边界在哪)</span></span>
<span class="line"><span>3. 主动说坑和取舍(为什么不用另一种方案)</span></span>
<span class="line"><span>4. 最后说监控与兜底(怎么发现出问题、怎么降级)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>面试官最想听的是第 3、4 步。</span></span></code></pre></div>`,99)])])}const g=a(l,[["render",e]]);export{d as __pageData,g as default};
