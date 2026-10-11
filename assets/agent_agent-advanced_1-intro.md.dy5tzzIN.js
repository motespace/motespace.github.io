import{_ as a,o as n,c as p,a5 as i}from"./chunks/framework.Bt0SrEfo.js";const k=JSON.parse('{"title":"从 LangGraph 到高级 Agent","description":"","frontmatter":{},"headers":[],"relativePath":"agent/agent-advanced/1-intro.md","filePath":"agent/agent-advanced/1-intro.md","lastUpdated":1791722830000}'),e={name:"agent/agent-advanced/1-intro.md"};function l(t,s,h,c,r,o){return n(),p("div",null,[...s[0]||(s[0]=[i(`<h1 id="从-langgraph-到高级-agent" tabindex="-1">从 LangGraph 到高级 Agent <a class="header-anchor" href="#从-langgraph-到高级-agent" aria-label="Permalink to &quot;从 LangGraph 到高级 Agent&quot;">​</a></h1><blockquote><p>LangGraph 之后,<strong>生产级 Agent</strong> 还需要的能力: MCP 协议 / Multi-Agent / Memory / 反思 / Human-in-the-Loop。本章做整体导览。</p></blockquote><h2 id="一、langgraph-解决不了的问题" tabindex="-1">一、LangGraph 解决不了的问题? <a class="header-anchor" href="#一、langgraph-解决不了的问题" aria-label="Permalink to &quot;一、LangGraph 解决不了的问题?&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>LangGraph 已经能做:</span></span>
<span class="line"><span>✅ 状态机式的多步推理</span></span>
<span class="line"><span>✅ 工具调用 + 循环</span></span>
<span class="line"><span>✅ 检查点持久化</span></span>
<span class="line"><span>✅ 人机交互(interrupt)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>但生产环境还需要:</span></span>
<span class="line"><span>1. 工具生态标准化 → MCP</span></span>
<span class="line"><span>2. 复杂任务分工 → Multi-Agent</span></span>
<span class="line"><span>3. 个性化 / 长期记忆 → Memory</span></span>
<span class="line"><span>4. 自我纠错 → Reflection</span></span>
<span class="line"><span>5. 高风险决策 → Human-in-the-Loop</span></span></code></pre></div><h2 id="二、生产-agent-的-5-大挑战" tabindex="-1">二、生产 Agent 的 5 大挑战 <a class="header-anchor" href="#二、生产-agent-的-5-大挑战" aria-label="Permalink to &quot;二、生产 Agent 的 5 大挑战&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1. 工具接入复杂</span></span>
<span class="line"><span>   问题:每个工具都要单独接入(SDK / 协议 / 鉴权)</span></span>
<span class="line"><span>   解决:MCP 协议(标准化)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. 复杂任务难单独完成</span></span>
<span class="line"><span>   问题:一个 Agent 难处理多领域任务</span></span>
<span class="line"><span>   解决:Multi-Agent 分工</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3. 没有记忆</span></span>
<span class="line"><span>   问题:每次对话从零开始</span></span>
<span class="line"><span>   解决:Memory(短期 / 长期 / 语义)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4. 容易犯错</span></span>
<span class="line"><span>   问题:LLM 输出有幻觉 / 错误</span></span>
<span class="line"><span>   解决:Reflection(自我反思)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>5. 高风险场景</span></span>
<span class="line"><span>   问题:医疗 / 金融决策需人工确认</span></span>
<span class="line"><span>   解决:Human-in-the-Loop</span></span></code></pre></div><h2 id="三、本专题地图" tabindex="-1">三、本专题地图 <a class="header-anchor" href="#三、本专题地图" aria-label="Permalink to &quot;三、本专题地图&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>agent-advanced/</span></span>
<span class="line"><span>├── 1-intro        ← 本章</span></span>
<span class="line"><span>├── 2-mcp          ← 工具生态标准化</span></span>
<span class="line"><span>├── 3-multi-agent   ← 复杂任务分工</span></span>
<span class="line"><span>├── 4-memory       ← 短期 / 长期 / 语义记忆</span></span>
<span class="line"><span>└── 5-reflection   ← 反思 + Human-in-the-Loop</span></span></code></pre></div><h2 id="四、何时需要这些能力" tabindex="-1">四、何时需要这些能力? <a class="header-anchor" href="#四、何时需要这些能力" aria-label="Permalink to &quot;四、何时需要这些能力?&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>场景判断表:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>| 场景 | 必须能力 |</span></span>
<span class="line"><span>|------|---------|</span></span>
<span class="line"><span>| Agent 需要接入外部工具(数据库 / API) | MCP |</span></span>
<span class="line"><span>| 任务跨多个领域(研究 + 写作 + 审阅) | Multi-Agent |</span></span>
<span class="line"><span>| 用户期望个性化 / 长期对话 | Memory |</span></span>
<span class="line"><span>| Agent 输出易错 / 需高质量 | Reflection |</span></span>
<span class="line"><span>| 高风险场景(医疗 / 金融) | HITL |</span></span>
<span class="line"><span>| 简单一次性问答 | LangGraph 就够了 |</span></span></code></pre></div><h2 id="五、整体架构" tabindex="-1">五、整体架构 <a class="header-anchor" href="#五、整体架构" aria-label="Permalink to &quot;五、整体架构&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>┌────────────────────────────────────────────────┐</span></span>
<span class="line"><span>│  Application Layer                                │</span></span>
<span class="line"><span>│  (Web / Mobile / Chat UI)                         │</span></span>
<span class="line"><span>└────────────────────────────────────────────────┘</span></span>
<span class="line"><span>                       ↓</span></span>
<span class="line"><span>┌────────────────────────────────────────────────┐</span></span>
<span class="line"><span>│  Agent Layer                                      │</span></span>
<span class="line"><span>│  ┌──────────────┐  ┌──────────────┐              │</span></span>
<span class="line"><span>│  │ Main Agent   │←→│ Memory Store │              │</span></span>
<span class="line"><span>│  │ (LangGraph)  │  └──────────────┘              │</span></span>
<span class="line"><span>│  └──────┬───────┘                                 │</span></span>
<span class="line"><span>│         │                                          │</span></span>
<span class="line"><span>│  ┌──────▼─────────────────────────────────┐    │</span></span>
<span class="line"><span>│  │ Multi-Agent Orchestrator               │    │</span></span>
<span class="line"><span>│  │ ┌────┐ ┌────┐ ┌────┐ ┌────┐            │    │</span></span>
<span class="line"><span>│  │ │R   │ │W   │ │C   │ │Re  │            │    │</span></span>
<span class="line"><span>│  │ │Rese│ │Wri│ │Code│ │Rev │            │    │</span></span>
<span class="line"><span>│  │ │arch│ │te │ │    │ │iew │            │    │</span></span>
<span class="line"><span>│  │ └────┘ └────┘ └────┘ └────┘            │    │</span></span>
<span class="line"><span>│  └──────┬─────────────────────────────────┘    │</span></span>
<span class="line"><span>│         │                                          │</span></span>
<span class="line"><span>│  ┌──────▼─────────────────────────────────┐    │</span></span>
<span class="line"><span>│  │ MCP / Tools                             │    │</span></span>
<span class="line"><span>│  │ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐  │    │</span></span>
<span class="line"><span>│  │ │ DB   │ │ GitHub│ │Slack │ │Custom│ │    │</span></span>
<span class="line"><span>│  │ └──────┘ └──────┘ └──────┘ └──────┘  │    │</span></span>
<span class="line"><span>│  └─────────────────────────────────────────┘    │</span></span>
<span class="line"><span>└────────────────────────────────────────────────┘</span></span>
<span class="line"><span>                       ↓</span></span>
<span class="line"><span>┌────────────────────────────────────────────────┐</span></span>
<span class="line"><span>│  LLM Layer(OpenAI / Claude / 本地)              │</span></span>
<span class="line"><span>└────────────────────────────────────────────────┘</span></span></code></pre></div><h2 id="六、生产部署-checklist" tabindex="-1">六、生产部署 Checklist <a class="header-anchor" href="#六、生产部署-checklist" aria-label="Permalink to &quot;六、生产部署 Checklist&quot;">​</a></h2><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ✅ 必装</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">. LangGraph(基础 Agent)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">. Memory(至少短期对话)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">. LangSmith(监控 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 调试)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">. Rate Limiting(防 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">API</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 超额)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ⭐ 推荐</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">. MCP(工具生态)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">. RAG(私有知识)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">. Self</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">RAG</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> /</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CRAG(检索质量)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 🔥 高级</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">. Multi</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Agent(复杂任务)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">9</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">. Reflection(高准确性)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">. Human</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-in-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">the</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Loop(高风险)</span></span></code></pre></div><h2 id="七、什么时候从-langgraph-升级" tabindex="-1">七、什么时候从 LangGraph 升级? <a class="header-anchor" href="#七、什么时候从-langgraph-升级" aria-label="Permalink to &quot;七、什么时候从 LangGraph 升级?&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>升级信号:</span></span>
<span class="line"><span>- 单 Agent 解决不了的任务 → Multi-Agent</span></span>
<span class="line"><span>- 工具越来越多(&gt;10) → MCP</span></span>
<span class="line"><span>- 用户问&quot;你还记得我之前说的吗?&quot; → Memory</span></span>
<span class="line"><span>- 出现错误结果 → Reflection</span></span>
<span class="line"><span>- 涉及金钱/医疗 → HITL</span></span></code></pre></div><h2 id="🎯-本专题学习路径" tabindex="-1">🎯 本专题学习路径 <a class="header-anchor" href="#🎯-本专题学习路径" aria-label="Permalink to &quot;🎯 本专题学习路径&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>2-mcp → 3-multi-agent → 4-memory → 5-reflection</span></span>
<span class="line"><span>   ↓            ↓             ↓           ↓</span></span>
<span class="line"><span>  工具       复杂任务       个性化      准确性</span></span></code></pre></div><h2 id="🔗-下一步" tabindex="-1">🔗 下一步 <a class="header-anchor" href="#🔗-下一步" aria-label="Permalink to &quot;🔗 下一步&quot;">​</a></h2><ul><li>MCP 协议 → <a href="./2-mcp"><code>2-mcp</code></a></li></ul>`,20)])])}const g=a(e,[["render",l]]);export{k as __pageData,g as default};
