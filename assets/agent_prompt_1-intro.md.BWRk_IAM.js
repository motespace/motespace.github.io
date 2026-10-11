import{_ as a,o as i,c as n,a5 as p}from"./chunks/framework.Bt0SrEfo.js";const d=JSON.parse('{"title":"Prompt 基础结构","description":"","frontmatter":{},"headers":[],"relativePath":"agent/prompt/1-intro.md","filePath":"agent/prompt/1-intro.md","lastUpdated":1791722830000}'),l={name:"agent/prompt/1-intro.md"};function t(h,s,e,k,r,o){return i(),n("div",null,[...s[0]||(s[0]=[p(`<h1 id="prompt-基础结构" tabindex="-1">Prompt 基础结构 <a class="header-anchor" href="#prompt-基础结构" aria-label="Permalink to &quot;Prompt 基础结构&quot;">​</a></h1><blockquote><p><strong>Prompt = Agent 的&quot;指令系统&quot;</strong>。好的 Prompt 让模型表现翻倍, 坏的 Prompt 浪费 80% 效果。本章从基础结构开始,系统讲解 Prompt 设计。</p></blockquote><h2 id="一、prompt-的-4-要素" tabindex="-1">一、Prompt 的 4 要素 <a class="header-anchor" href="#一、prompt-的-4-要素" aria-label="Permalink to &quot;一、Prompt 的 4 要素&quot;">​</a></h2><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 一个完整的 Prompt = 角色 + 任务 + 约束 + 示例</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">prompt </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"># 角色(Role)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">你是一位资深的 Python 后端工程师,专注于 FastAPI 和数据库设计。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"># 任务(Task)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">请审查以下代码,找出潜在的性能问题和 Bug。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"># 约束(Constraints)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 输出用 Markdown 格式,分点列出</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 每条建议要给出具体代码示例</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 最多 5 条建议,按严重程度排序</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 不要泛泛而谈,要给出具体的行号和变量名</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"># 示例(Examples)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">示例 1:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">代码:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`python</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">def get_users():</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    return db.query(&quot;SELECT * FROM users&quot;)</span></span></code></pre></div><p>问题:数据库连接未关闭 建议:</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> get_users</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">():</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    with</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> db.connection() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> conn:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> conn.execute(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;SELECT * FROM users&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).fetchall()</span></span></code></pre></div><h1 id="实际输入" tabindex="-1">实际输入 <a class="header-anchor" href="#实际输入" aria-label="Permalink to &quot;实际输入&quot;">​</a></h1><p>代码:</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{your_code}</span></span></code></pre></div><p>&quot;&quot;&quot;</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>## 二、4 要素详解</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 1. Role(角色):定义&quot;AI 是什么样的人&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`python</span></span>
<span class="line"><span># ✅ 具体 + 专业</span></span>
<span class="line"><span>roles_good = [</span></span>
<span class="line"><span>    &quot;你是一位有 10 年经验的 Python 后端工程师,精通 FastAPI 和 PostgreSQL&quot;,</span></span>
<span class="line"><span>    &quot;你是一位资深的金融分析师,擅长股票估值和风险评估&quot;,</span></span>
<span class="line"><span>    &quot;你是一位耐心的 Python 老师,擅长用通俗例子解释复杂概念&quot;,</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># ❌ 模糊</span></span>
<span class="line"><span>roles_bad = [</span></span>
<span class="line"><span>    &quot;你是一个助手&quot;,</span></span>
<span class="line"><span>    &quot;你很聪明&quot;,</span></span>
<span class="line"><span>    &quot;请帮我&quot;,</span></span>
<span class="line"><span>]</span></span></code></pre></div><p><strong>为什么有效</strong>:LLM 在预训练时见过大量特定角色的语料,设定角色能让它&quot;调用&quot;对应的语言模式。</p><h3 id="_2-task-任务-明确-要做什么" tabindex="-1">2. Task(任务):明确&quot;要做什么&quot; <a class="header-anchor" href="#_2-task-任务-明确-要做什么" aria-label="Permalink to &quot;2. Task(任务):明确&quot;要做什么&quot;&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ✅ 清晰 + 单一任务</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">task_good </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">任务:对以下用户评论进行情感分类。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">输入:用户评论文本</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">输出:positive / neutral / negative,只输出标签。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ❌ 多任务模糊</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">task_bad </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">帮我看看这段评论,告诉我情感怎么样,顺便提取关键词,如果有错别字也帮我改一下。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;</span></span></code></pre></div><h3 id="_3-constraints-约束-限定-怎么做" tabindex="-1">3. Constraints(约束):限定&quot;怎么做&quot; <a class="header-anchor" href="#_3-constraints-约束-限定-怎么做" aria-label="Permalink to &quot;3. Constraints(约束):限定&quot;怎么做&quot;&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">constraints </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 输出长度:不超过 200 字</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 输出格式:Markdown 列表</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 语言:简体中文</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 不要重复问题本身</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 如果不知道答案,直接说&quot;不知道&quot;,不要瞎编</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 必须给出至少 2 个反例</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;</span></span></code></pre></div><p><strong>黄金法则</strong>:</p><ul><li>✅ <strong>明确说不能做什么</strong>(常被忽略)</li><li>✅ <strong>指定输出格式</strong>(JSON / 列表 / Markdown)</li><li>✅ <strong>指定长度限制</strong></li><li>✅ <strong>告诉它&quot;不知道&quot;时该怎么办</strong>(减少幻觉)</li></ul><h3 id="_4-examples-示例-示范-输出长什么样" tabindex="-1">4. Examples(示例):示范&quot;输出长什么样&quot; <a class="header-anchor" href="#_4-examples-示例-示范-输出长什么样" aria-label="Permalink to &quot;4. Examples(示例):示范&quot;输出长什么样&quot;&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Few-shot:给 1-3 个示例,效果翻倍</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">example </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">示例:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">输入:这家餐厅的服务很好,价格也实惠</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">输出:positive</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">输入:味道一般,没什么特别</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">输出:neutral</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">输入:难吃,等位时间还长,再也不会来了</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">输出:negative</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">实际输入:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{user_comment}</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;</span></span></code></pre></div><h2 id="三、prompt-模板实战" tabindex="-1">三、Prompt 模板实战 <a class="header-anchor" href="#三、prompt-模板实战" aria-label="Permalink to &quot;三、Prompt 模板实战&quot;">​</a></h2><h3 id="_1-翻译-prompt" tabindex="-1">1. 翻译 Prompt <a class="header-anchor" href="#_1-翻译-prompt" aria-label="Permalink to &quot;1. 翻译 Prompt&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">TRANSLATE_PROMPT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;&quot;你是一位专业的中英互译译员。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">任务:将以下文本翻译成 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{target_language}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">要求:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 保持原文的语气和风格</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 专业术语保持一致</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 如有文化特定表达,用目标语言习惯的方式翻译</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 输出仅翻译后的文本,不要解释</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">文本:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{text}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 使用</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> langchain.prompts </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PromptTemplate</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">prompt </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PromptTemplate.from_template(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">TRANSLATE_PROMPT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).format(</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    target_language</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;英文&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    text</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;今天天气真好,适合出门散步。&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h3 id="_2-摘要-prompt" tabindex="-1">2. 摘要 Prompt <a class="header-anchor" href="#_2-摘要-prompt" aria-label="Permalink to &quot;2. 摘要 Prompt&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">SUMMARY_PROMPT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;&quot;请对以下文章生成摘要。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">要求:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 长度:100-200 字</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 保留核心观点和关键数据</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 使用第三人称客观叙述</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 输出格式:## 标题 + ## 核心观点 + ## 关键数据</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">文章:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{article}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;</span></span></code></pre></div><h3 id="_3-分类-prompt" tabindex="-1">3. 分类 Prompt <a class="header-anchor" href="#_3-分类-prompt" aria-label="Permalink to &quot;3. 分类 Prompt&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">CLASSIFY_PROMPT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;&quot;判断以下文本的情感倾向。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">类别:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- positive(积极)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- neutral(中性)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- negative(消极)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">示例:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">文本:这个产品太棒了!</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">类别:positive</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">文本:今天天气一般</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">类别:neutral</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">文本:服务态度很差,再也不来了</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">类别:negative</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">实际文本:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{text}</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">类别:&quot;&quot;&quot;</span></span></code></pre></div><h3 id="_4-代码生成-prompt" tabindex="-1">4. 代码生成 Prompt <a class="header-anchor" href="#_4-代码生成-prompt" aria-label="Permalink to &quot;4. 代码生成 Prompt&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">CODE_GEN_PROMPT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;&quot;根据需求生成 Python 代码。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">需求:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{requirement}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">要求:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 函数签名清晰</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 包含类型注解</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 包含 docstring</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 包含 2-3 个使用示例</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 关键逻辑加注释</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 边界情况处理</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">输出仅代码,用 \`\`\`python\`\`\` 包裹。&quot;&quot;&quot;</span></span></code></pre></div><h2 id="四、prompt-调试原则" tabindex="-1">四、Prompt 调试原则 <a class="header-anchor" href="#四、prompt-调试原则" aria-label="Permalink to &quot;四、Prompt 调试原则&quot;">​</a></h2><h3 id="_1-由简到繁" tabindex="-1">1. 由简到繁 <a class="header-anchor" href="#_1-由简到繁" aria-label="Permalink to &quot;1. 由简到繁&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ❌ 一上来就堆 1000 字 prompt</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ✅ 先写最简版,看效果,再加约束</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 版本 1:最简单</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">prompt_v1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;把以下文本翻译成英文:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{text}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 版本 2:加角色</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">prompt_v2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;你是专业译员,把以下文本翻译成英文,保持原文风格:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{text}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 版本 3:加约束</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">prompt_v3 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">你是专业译员。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">任务:翻译成英文。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">要求:保持风格、专业术语一致。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">输入:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{text}</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 版本 4:加示例</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">prompt_v4 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">你是专业译员。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">任务:翻译成英文。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">要求:保持风格。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">示例:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">输入:你好世界</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">输出:Hello World</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">输入:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{text}</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;</span></span></code></pre></div><h3 id="_2-看-llm-哪里-误解-了" tabindex="-1">2. 看 LLM 哪里&quot;误解&quot;了 <a class="header-anchor" href="#_2-看-llm-哪里-误解-了" aria-label="Permalink to &quot;2. 看 LLM 哪里&quot;误解&quot;了&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果输出不对,问自己:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 1. 它是不是没明白任务?(改 Task 描述)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 2. 它是不是不知道约束?(改 Constraints)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 3. 它是不是没理解格式?(给 Examples)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 4. 它是不是知识不足?(用更大模型 / RAG)</span></span></code></pre></div><h3 id="_3-迭代优化" tabindex="-1">3. 迭代优化 <a class="header-anchor" href="#_3-迭代优化" aria-label="Permalink to &quot;3. 迭代优化&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 用 A/B 测试</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">prompt_a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;翻译: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{text}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">prompt_b </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;你是译员。翻译: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{text}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在测试集上对比</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">test_cases </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;测试文本 1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;测试文本 2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> case </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> test_cases:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    output_a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> llm.invoke(prompt_a.format(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">text</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">case))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    output_b </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> llm.invoke(prompt_b.format(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">text</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">case))</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Input: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">case</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">A: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">output_a</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">B: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">output_b</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h2 id="五、常见错误" tabindex="-1">五、常见错误 <a class="header-anchor" href="#五、常见错误" aria-label="Permalink to &quot;五、常见错误&quot;">​</a></h2><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ❌ 错误 1:Prompt 太长,信息冗余</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">prompt_bad </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">你是我的助手,请帮我做一件事,就是把这个文本翻译一下,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">哦对了翻译成英文,要专业的翻译,不能太口语化,也不能太死板,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">就像 Native Speaker 一样,记得保留原文的意思,不要漏掉信息,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">我希望翻译质量高一些,可以参考一些专业的翻译材料,如果你不确定怎么翻,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">就翻成最常见的表达,谢谢。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">文本:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{text}</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ✅ 改进:精简</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">prompt_good </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">你是专业译员。翻译成英文,保持原文风格。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">文本:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{text}</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ❌ 错误 2:指令矛盾</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">prompt_bad </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">用 50 字以内详细解释 Python 的 GIL 是什么,涵盖所有细节,简短回答。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 50 字 + 详细 + 所有细节 + 简短 = 矛盾</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ✅ 改进:明确一个目标</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">prompt_good </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">用 50 字以内解释 Python 的 GIL。</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>## 六、Prompt vs 微调</span></span>
<span class="line"><span></span></span>
<span class="line"><span>| 维度 | Prompt | 微调(Fine-tuning) |</span></span>
<span class="line"><span>|------|--------|-------------------|</span></span>
<span class="line"><span>| 成本 | 低 | 高 |</span></span>
<span class="line"><span>| 速度 | 快(秒级) | 慢(数小时) |</span></span>
<span class="line"><span>| 数据需求 | 0-10 个示例 | 数百-数万条 |</span></span>
<span class="line"><span>| 适用 | 通用任务、个性化 | 特定领域、风格化 |</span></span>
<span class="line"><span>| 可解释性 | ✅ | ❌ |</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**结论**:**90% 的场景用 Prompt 就够了**,只有当 Prompt 效果始终不达标时才考虑微调。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 🎯 实战清单</span></span></code></pre></div><p>✅ Prompt = 角色 + 任务 + 约束 + 示例(4 要素) ✅ 角色要具体专业,任务要单一清晰 ✅ 约束要明确说&quot;不能做什么&quot;和&quot;不知道怎么办&quot; ✅ 示例比描述更有效(Few-shot) ✅ 由简到繁,迭代优化 ✅ 90% 场景 Prompt 足够,不要一上来就微调</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>## 🔗 下一步</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- 高级技巧 → [\`2-techniques\`](./2-techniques)</span></span>
<span class="line"><span>- 系统提示词设计 → [\`3-system-prompt\`](./3-system-prompt)</span></span></code></pre></div>`,41)])])}const c=a(l,[["render",t]]);export{d as __pageData,c as default};
