import{_ as n,o as i,c as p,a5 as a,j as l}from"./chunks/framework.Bt0SrEfo.js";const r=JSON.parse('{"title":"实战模板库(常见场景)","description":"","frontmatter":{},"headers":[],"relativePath":"agent/prompt/5-patterns.md","filePath":"agent/prompt/5-patterns.md","lastUpdated":1791722830000}'),t={name:"agent/prompt/5-patterns.md"};function e(h,s,k,o,d,F){return i(),p("div",null,[...s[0]||(s[0]=[a(`<h1 id="实战模板库-常见场景" tabindex="-1">实战模板库(常见场景) <a class="header-anchor" href="#实战模板库-常见场景" aria-label="Permalink to &quot;实战模板库(常见场景)&quot;">​</a></h1><blockquote><p>收藏可直接使用的 Prompt 模板。<strong>实战项目里复制改改就能用</strong>。</p></blockquote><h2 id="一、对话类" tabindex="-1">一、对话类 <a class="header-anchor" href="#一、对话类" aria-label="Permalink to &quot;一、对话类&quot;">​</a></h2><h3 id="_1-1-通用聊天助手" tabindex="-1">1.1 通用聊天助手 <a class="header-anchor" href="#_1-1-通用聊天助手" aria-label="Permalink to &quot;1.1 通用聊天助手&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">CHAT_PROMPT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;&quot;你是友好的 AI 助手。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">特点:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 简洁直接,避免冗长</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 用通俗语言,不用专业术语(除非用户用)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 必要时给例子</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">回答风格:像跟朋友聊天,自然流畅。&quot;&quot;&quot;</span></span></code></pre></div><h3 id="_1-2-多轮对话-带上下文" tabindex="-1">1.2 多轮对话(带上下文) <a class="header-anchor" href="#_1-2-多轮对话-带上下文" aria-label="Permalink to &quot;1.2 多轮对话(带上下文)&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在 LangChain 中</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> langchain.memory </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ConversationBufferMemory</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">memory </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ConversationBufferMemory()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">prompt </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ChatPromptTemplate.from_messages([</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    (</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;system&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;你是友好的助手。&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 之前的对话历史(自动从 memory 加载)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    (</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;placeholder&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{chat_history}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    (</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;human&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{input}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span></code></pre></div><h3 id="_1-3-角色扮演" tabindex="-1">1.3 角色扮演 <a class="header-anchor" href="#_1-3-角色扮演" aria-label="Permalink to &quot;1.3 角色扮演&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ROLE_PROMPT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;&quot;你是 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{character_name}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">角色设定:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{character_description}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">说话风格:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{speaking_style}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">对话要求:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 保持角色一致性</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 可以引用角色的背景故事</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 用第一人称(我)说话</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">用户: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{user_input}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{character_name}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:&quot;&quot;&quot;</span></span></code></pre></div><h2 id="二、抽取类" tabindex="-1">二、抽取类 <a class="header-anchor" href="#二、抽取类" aria-label="Permalink to &quot;二、抽取类&quot;">​</a></h2><h3 id="_2-1-实体抽取-ner" tabindex="-1">2.1 实体抽取(NER) <a class="header-anchor" href="#_2-1-实体抽取-ner" aria-label="Permalink to &quot;2.1 实体抽取(NER)&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">NER_PROMPT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;&quot;从文本中抽取实体。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">实体类型:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 人名(PERSON)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 地名(LOCATION)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 机构(ORG)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 时间(DATE)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 金额(MONEY)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 产品(PRODUCT)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">输出 JSON 数组:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`json</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">[</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  {&quot;type&quot;: &quot;PERSON&quot;, &quot;text&quot;: &quot;...&quot;, &quot;start&quot;: 0, &quot;end&quot;: 5}</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">]</span></span></code></pre></div><p>示例: 输入:张三在 2024 年 1 月 1 日加入阿里巴巴,年薪 50 万 输出:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;PERSON&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;text&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;张三&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;start&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;end&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;DATE&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;text&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2024 年 1 月 1 日&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;start&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;end&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">14</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ORG&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;text&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;阿里巴巴&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;start&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">17</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;end&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">21</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;MONEY&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;text&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;50 万&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;start&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">24</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;end&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">28</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><p>实际输入:{text}&quot;&quot;&quot;</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>### 2.2 关系抽取</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`python</span></span>
<span class="line"><span>RELATION_PROMPT = &quot;&quot;&quot;抽取文本中的人际关系。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>关系类型:</span></span>
<span class="line"><span>- 朋友(friend)</span></span>
<span class="line"><span>- 同事(colleague)</span></span>
<span class="line"><span>- 家人(family)</span></span>
<span class="line"><span>- 恋人(lover)</span></span>
<span class="line"><span>- 上下级(superior/subordinate)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>输出 JSON:</span></span>
<span class="line"><span>\`\`\`json</span></span>
<span class="line"><span>[</span></span>
<span class="line"><span>  {&quot;person1&quot;: &quot;A&quot;, &quot;person2&quot;: &quot;B&quot;, &quot;relation&quot;: &quot;friend&quot;}</span></span>
<span class="line"><span>]</span></span></code></pre></div><p>输入:{text}&quot;&quot;&quot;</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>### 2.3 关键词提取</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`python</span></span>
<span class="line"><span>KEYWORD_PROMPT = &quot;&quot;&quot;从文本中提取 3-5 个最重要的关键词。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>要求:</span></span>
<span class="line"><span>- 关键词应该是名词或名词短语</span></span>
<span class="line"><span>- 按重要性排序</span></span>
<span class="line"><span>- 避免常见词(如&quot;是&quot;、&quot;的&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>输入:{text}</span></span>
<span class="line"><span>关键词(逗号分隔):&quot;&quot;&quot;</span></span></code></pre></div><h2 id="三、分类类" tabindex="-1">三、分类类 <a class="header-anchor" href="#三、分类类" aria-label="Permalink to &quot;三、分类类&quot;">​</a></h2><h3 id="_3-1-情感分析" tabindex="-1">3.1 情感分析 <a class="header-anchor" href="#_3-1-情感分析" aria-label="Permalink to &quot;3.1 情感分析&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">SENTIMENT_PROMPT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;&quot;分析文本情感。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">类别:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- positive(积极)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- neutral(中性)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- negative(消极)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- mixed(混合)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">示例:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">输入:产品好用,服务差劲</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">输出:mixed</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">输入:非常好</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">输出:positive</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">输入:一般般</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">输出:neutral</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">实际输入:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{text}</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">输出:&quot;&quot;&quot;</span></span></code></pre></div><h3 id="_3-2-意图分类" tabindex="-1">3.2 意图分类 <a class="header-anchor" href="#_3-2-意图分类" aria-label="Permalink to &quot;3.2 意图分类&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">INTENT_PROMPT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;&quot;判断用户意图。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">意图类别:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 询问信息(info)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 下单购买(order)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 投诉(complaint)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 闲聊(chitchat)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 退款(refund)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 其他(other)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">输出 JSON:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`json</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">{&quot;intent&quot;: &quot;info&quot;, &quot;confidence&quot;: 0.95}</span></span></code></pre></div><p>输入:{user_input}&quot;&quot;&quot;</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>### 3.3 内容审核</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`python</span></span>
<span class="line"><span>MODERATION_PROMPT = &quot;&quot;&quot;审核内容是否合规。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>违规类型:</span></span>
<span class="line"><span>- 暴力(violence)</span></span>
<span class="line"><span>- 色情(sexual)</span></span>
<span class="line"><span>- 仇恨言论(hate)</span></span>
<span class="line"><span>- 违法(illegal)</span></span>
<span class="line"><span>- 政治敏感(political)</span></span>
<span class="line"><span>- 安全(其他)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>输出 JSON:</span></span>
<span class="line"><span>\`\`\`json</span></span>
<span class="line"><span>{&quot;violation&quot;: false, &quot;type&quot;: null, &quot;reason&quot;: null}</span></span></code></pre></div><p>输入:{content}&quot;&quot;&quot;</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>## 四、生成类</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 4.1 文本摘要</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`python</span></span>
<span class="line"><span>SUMMARY_PROMPT = &quot;&quot;&quot;生成文本摘要。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>要求:</span></span>
<span class="line"><span>- 长度:原文的 20%</span></span>
<span class="line"><span>- 保留核心观点和关键数据</span></span>
<span class="line"><span>- 客观,不加评论</span></span>
<span class="line"><span>- 用第三人称</span></span>
<span class="line"><span></span></span>
<span class="line"><span>格式:</span></span>
<span class="line"><span>## 核心内容</span></span>
<span class="line"><span>[摘要]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 关键信息</span></span>
<span class="line"><span>- [要点 1]</span></span>
<span class="line"><span>- [要点 2]</span></span>
<span class="line"><span>- [要点 3]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>原文:{article}&quot;&quot;&quot;</span></span></code></pre></div><h3 id="_4-2-内容改写" tabindex="-1">4.2 内容改写 <a class="header-anchor" href="#_4-2-内容改写" aria-label="Permalink to &quot;4.2 内容改写&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">REWRITE_PROMPT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;&quot;按以下要求改写文本。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">要求:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 风格:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{style}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  # 正式 / 口语 / 学术 / 营销</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 长度:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{length}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  # 简短 / 中等 / 详细</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 受众:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{audience}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  # 专家 / 大众 / 儿童</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 保留原意</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">原文:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{text}</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">改写:&quot;&quot;&quot;</span></span></code></pre></div><h3 id="_4-3-邮件撰写" tabindex="-1">4.3 邮件撰写 <a class="header-anchor" href="#_4-3-邮件撰写" aria-label="Permalink to &quot;4.3 邮件撰写&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">EMAIL_PROMPT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;&quot;撰写一封 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{email_type}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 邮件。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">主题:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{subject}</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">关键信息:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{key_points}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">要求:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 语气:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{tone}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  # 正式 / 友好 / 紧急</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 长度:200 字以内</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 结构:称呼 + 正文 + 落款</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">直接输出邮件内容(不含&quot;以下是...&quot;):&quot;&quot;&quot;</span></span></code></pre></div><h2 id="五、推理类" tabindex="-1">五、推理类 <a class="header-anchor" href="#五、推理类" aria-label="Permalink to &quot;五、推理类&quot;">​</a></h2><h3 id="_5-1-数学问题" tabindex="-1">5.1 数学问题 <a class="header-anchor" href="#_5-1-数学问题" aria-label="Permalink to &quot;5.1 数学问题&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">MATH_PROMPT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;&quot;解决数学问题。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">要求:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 用 CoT 推理(一步步想)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 最后给出明确答案</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 如果有公式,用 LaTeX</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">问题:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{question}</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">解答:&quot;&quot;&quot;</span></span></code></pre></div><h3 id="_5-2-逻辑推理" tabindex="-1">5.2 逻辑推理 <a class="header-anchor" href="#_5-2-逻辑推理" aria-label="Permalink to &quot;5.2 逻辑推理&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">LOGIC_PROMPT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;&quot;分析逻辑问题。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">要求:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">1. 列出已知条件</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">2. 列出推理步骤</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">3. 得出结论</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">问题:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{question}</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">分析:&quot;&quot;&quot;</span></span></code></pre></div><h3 id="_5-3-因果分析" tabindex="-1">5.3 因果分析 <a class="header-anchor" href="#_5-3-因果分析" aria-label="Permalink to &quot;5.3 因果分析&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">CAUSAL_PROMPT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;&quot;分析事件的因果关系。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">要求:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 区分直接原因和根本原因</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 列出多个可能原因</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 给出证据支持</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">事件:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{event}</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">分析:&quot;&quot;&quot;</span></span></code></pre></div><h2 id="六、代码类" tabindex="-1">六、代码类 <a class="header-anchor" href="#六、代码类" aria-label="Permalink to &quot;六、代码类&quot;">​</a></h2><h3 id="_6-1-代码生成" tabindex="-1">6.1 代码生成 <a class="header-anchor" href="#_6-1-代码生成" aria-label="Permalink to &quot;6.1 代码生成&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">CODE_GEN_PROMPT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;&quot;根据需求生成代码。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">需求:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{requirement}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">要求:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 语言:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{language}</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 包含类型注解</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 包含 docstring</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 处理边界情况</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 关键逻辑加注释</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 给 1-2 个使用示例</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">输出仅代码,用 \`\`\`python 包裹。&quot;&quot;&quot;</span></span></code></pre></div><h3 id="_6-2-代码审查" tabindex="-1">6.2 代码审查 <a class="header-anchor" href="#_6-2-代码审查" aria-label="Permalink to &quot;6.2 代码审查&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">CODE_REVIEW_PROMPT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;&quot;审查以下代码。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">代码:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`python</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{code}</span></span></code></pre></div><p>审查维度:</p><ol><li>正确性(bug、边界)</li><li>性能(复杂度、瓶颈)</li><li>安全(注入、泄露)</li><li>可读性(命名、注释)</li><li>最佳实践</li></ol><p>输出格式:</p><ul><li>🔴 严重(必须修)</li><li>🟡 中等(建议修)</li><li>🟢 轻微(可选)</li></ul><p>每条问题包含:行号 + 问题 + 修复建议。&quot;&quot;&quot;</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>### 6.3 Bug 定位</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`python</span></span>
<span class="line"><span>DEBUG_PROMPT = &quot;&quot;&quot;代码有 bug,请定位并修复。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>代码:</span></span>
<span class="line"><span>\`\`\`python</span></span>
<span class="line"><span>{code}</span></span></code></pre></div>`,49),l("p",{actual:""},"预期行为:{expected} 实际行为:",-1),a(`<p>要求:</p><ol><li>分析可能原因</li><li>定位到具体行</li><li>给出修复代码</li><li>解释为什么这样修&quot;&quot;&quot;</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>### 6.4 单元测试生成</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`python</span></span>
<span class="line"><span>TEST_GEN_PROMPT = &quot;&quot;&quot;为以下代码生成单元测试。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>代码:</span></span>
<span class="line"><span>\`\`\`python</span></span>
<span class="line"><span>{code}</span></span></code></pre></div><p>测试框架:pytest</p><p>要求:</p><ul><li>覆盖正常情况</li><li>覆盖边界情况(空、None、大数值)</li><li>覆盖异常情况</li><li>使用 parametrize(多参数)</li><li>包含 fixture(如需要)&quot;&quot;&quot;</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>## 七、Agent 类</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 7.1 ReAct Agent(ReAct 模板)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`python</span></span>
<span class="line"><span>REACT_PROMPT = &quot;&quot;&quot;回答以下问题,可以使用工具。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>工具列表:</span></span>
<span class="line"><span>{tools}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>格式:</span></span>
<span class="line"><span>Thought: 我需要做什么</span></span>
<span class="line"><span>Action: 工具名</span></span>
<span class="line"><span>Action Input: &amp;#123;&amp;#123;&quot;param&quot;: &quot;value&quot;&amp;#125;&amp;#125;</span></span>
<span class="line"><span>Observation: 工具返回结果</span></span>
<span class="line"><span>... (重复 Thought/Action/Observation 直到有足够信息)</span></span>
<span class="line"><span>Thought: 我现在知道答案了</span></span>
<span class="line"><span>Final Answer: 答案</span></span>
<span class="line"><span></span></span>
<span class="line"><span>问题:{input}</span></span>
<span class="line"><span>{agent_scratchpad}&quot;&quot;&quot;</span></span></code></pre></div><h3 id="_7-2-plan-and-execute-agent" tabindex="-1">7.2 Plan-and-Execute Agent <a class="header-anchor" href="#_7-2-plan-and-execute-agent" aria-label="Permalink to &quot;7.2 Plan-and-Execute Agent&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">PLAN_PROMPT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;&quot;为复杂任务制定计划。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">任务:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{task}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">输出:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">1. [步骤 1]:(说明)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">2. [步骤 2]:(说明)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">每个步骤包含:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 输入</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 输出</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 所需工具</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">计划:&quot;&quot;&quot;</span></span></code></pre></div><h3 id="_7-3-reflexion-自我反思" tabindex="-1">7.3 Reflexion(自我反思) <a class="header-anchor" href="#_7-3-reflexion-自我反思" aria-label="Permalink to &quot;7.3 Reflexion(自我反思)&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">REFLEXION_PROMPT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;&quot;回答问题,如果不满意,反思并重试。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">第 1 次尝试:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{first_attempt}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">反思(如果错了):</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 哪里错了?</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 为什么错?</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- 如何修正?</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">第 2 次尝试(基于反思):</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">最终答案:&quot;&quot;&quot;</span></span></code></pre></div><h2 id="八、rag-类" tabindex="-1">八、RAG 类 <a class="header-anchor" href="#八、rag-类" aria-label="Permalink to &quot;八、RAG 类&quot;">​</a></h2><h3 id="_8-1-文档问答" tabindex="-1">8.1 文档问答 <a class="header-anchor" href="#_8-1-文档问答" aria-label="Permalink to &quot;8.1 文档问答&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">RAG_PROMPT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;&quot;基于以下文档回答问题。如果文档没有答案,说&quot;我不知道&quot;。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">文档:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{context}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">问题:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{question}</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">答案:&quot;&quot;&quot;</span></span></code></pre></div><h3 id="_8-2-摘要-引用" tabindex="-1">8.2 摘要 + 引用 <a class="header-anchor" href="#_8-2-摘要-引用" aria-label="Permalink to &quot;8.2 摘要 + 引用&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">RAG_WITH_CITATION_PROMPT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;&quot;基于文档回答,每个事实都标注来源。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">文档(每个有编号):</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">[1] </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{doc_1}</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">[2] </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{doc_2}</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">问题:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{question}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">输出格式:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">[答案]</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">[来源:1, 3]&quot;&quot;&quot;</span></span></code></pre></div><h2 id="九、工具调用" tabindex="-1">九、工具调用 <a class="header-anchor" href="#九、工具调用" aria-label="Permalink to &quot;九、工具调用&quot;">​</a></h2><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">TOOL_CALL_PROMPT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;&quot;根据用户请求决定调用哪个工具。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">工具:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- get_weather(location): 查天气</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- search_docs(query): 查文档</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- calculate(expression): 计算</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">- finish(answer): 完成任务</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">用户请求:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{input}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">输出 JSON:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`json</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">{&quot;tool&quot;: &quot;工具名&quot;, &quot;args&quot;: {...&amp;#125;&amp;#125;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`&quot;&quot;&quot;</span></span></code></pre></div><h2 id="十、调试-prompt" tabindex="-1">十、调试 Prompt <a class="header-anchor" href="#十、调试-prompt" aria-label="Permalink to &quot;十、调试 Prompt&quot;">​</a></h2><h3 id="_10-1-让-llm-解释自己的输出" tabindex="-1">10.1 让 LLM 解释自己的输出 <a class="header-anchor" href="#_10-1-让-llm-解释自己的输出" aria-label="Permalink to &quot;10.1 让 LLM 解释自己的输出&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">EXPLAIN_PROMPT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;&quot;你的上一个输出是:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{previous_output}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">请解释:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">1. 你做了什么决定?</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">2. 为什么这样决定?</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">3. 有没有其他可能?&quot;&quot;&quot;</span></span></code></pre></div><h3 id="_10-2-让-llm-自我批评" tabindex="-1">10.2 让 LLM 自我批评 <a class="header-anchor" href="#_10-2-让-llm-自我批评" aria-label="Permalink to &quot;10.2 让 LLM 自我批评&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">CRITIQUE_PROMPT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;&quot;审查以下输出,找出问题。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">输出:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{output}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">问题:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">1. 准确性(事实错误?)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">3. 完整性(漏了什么?)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">4. 一致性(逻辑矛盾?)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">5. 改进建议&quot;&quot;&quot;</span></span></code></pre></div><h2 id="📚-prompt-库管理建议" tabindex="-1">📚 Prompt 库管理建议 <a class="header-anchor" href="#📚-prompt-库管理建议" aria-label="Permalink to &quot;📚 Prompt 库管理建议&quot;">​</a></h2><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 用 YAML/JSON 集中管理所有 prompt</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">prompts </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;sentiment&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">SENTIMENT_PROMPT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;ner&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">NER_PROMPT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;summary&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">SUMMARY_PROMPT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 配合 LangChain Hub 集中管理</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># https://smith.langchain.com/hub</span></span></code></pre></div><h2 id="🎯-实战清单" tabindex="-1">🎯 实战清单 <a class="header-anchor" href="#🎯-实战清单" aria-label="Permalink to &quot;🎯 实战清单&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>✅ 对话类:通用聊天、角色扮演</span></span>
<span class="line"><span>✅ 抽取类:实体 / 关系 / 关键词</span></span>
<span class="line"><span>✅ 分类类:情感 / 意图 / 审核</span></span>
<span class="line"><span>✅ 生成类:摘要 / 改写 / 邮件</span></span>
<span class="line"><span>✅ 推理类:数学 / 逻辑 / 因果</span></span>
<span class="line"><span>✅ 代码类:生成 / 审查 / 调试 / 测试</span></span>
<span class="line"><span>✅ Agent 类:ReAct / Plan-and-Execute / Reflexion</span></span>
<span class="line"><span>✅ RAG 类:文档问答 + 引用</span></span></code></pre></div><h2 id="🔗-后续" tabindex="-1">🔗 后续 <a class="header-anchor" href="#🔗-后续" aria-label="Permalink to &quot;🔗 后续&quot;">​</a></h2><p>Prompt 专题完结。<strong>接下来去实战</strong>:</p><ul><li><a href="./../langchain/">LangChain 实战</a></li><li><a href="./../rag/">RAG 实战</a></li><li><a href="./../langgraph/">LangGraph Agent 实战</a></li></ul>`,30)])])}const g=n(t,[["render",e]]);export{r as __pageData,g as default};
