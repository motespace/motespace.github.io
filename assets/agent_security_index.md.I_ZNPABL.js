import{_ as n,o as s,c as e,a5 as l}from"./chunks/framework.Bt0SrEfo.js";const u=JSON.parse('{"title":"AI 安全","description":"","frontmatter":{},"headers":[],"relativePath":"agent/security/index.md","filePath":"agent/security/index.md","lastUpdated":1791703818000}'),p={name:"agent/security/index.md"};function i(t,a,r,o,c,h){return s(),e("div",null,[...a[0]||(a[0]=[l(`<h1 id="ai-安全" tabindex="-1">AI 安全 <a class="header-anchor" href="#ai-安全" aria-label="Permalink to &quot;AI 安全&quot;">​</a></h1><blockquote><p>AI 应用面临的<strong>独特安全挑战</strong>:Prompt 注入 / 内容安全 / PII 脱敏 / Jailbreak。 与传统 Web 安全不同,需要专门防护。</p></blockquote><h2 id="📚-学习路径-由浅及深-4-章节" tabindex="-1">📚 学习路径(由浅及深,4 章节) <a class="header-anchor" href="#📚-学习路径-由浅及深-4-章节" aria-label="Permalink to &quot;📚 学习路径(由浅及深,4 章节)&quot;">​</a></h2><h3 id="🟢-l1-入门威胁" tabindex="-1">🟢 L1 入门威胁 <a class="header-anchor" href="#🟢-l1-入门威胁" aria-label="Permalink to &quot;🟢 L1 入门威胁&quot;">​</a></h3><ul><li><a href="./1-prompt-injection">Prompt 注入防御</a> — 用户输入操纵 LLM 的核心威胁</li></ul><h3 id="🟡-l2-输出风险" tabindex="-1">🟡 L2 输出风险 <a class="header-anchor" href="#🟡-l2-输出风险" aria-label="Permalink to &quot;🟡 L2 输出风险&quot;">​</a></h3><ul><li><a href="./2-content-safety">内容安全</a> — NSFW / 有害内容过滤</li><li><a href="./3-pii">PII 处理</a> — 用户个人信息脱敏</li></ul><h3 id="🔴-l3-高级威胁" tabindex="-1">🔴 L3 高级威胁 <a class="header-anchor" href="#🔴-l3-高级威胁" aria-label="Permalink to &quot;🔴 L3 高级威胁&quot;">​</a></h3><ul><li><a href="./4-jailbreak">Jailbreak 防护</a> — 绕过模型限制的高级攻击</li></ul><h2 id="🎯-必知威胁清单" tabindex="-1">🎯 必知威胁清单 <a class="header-anchor" href="#🎯-必知威胁清单" aria-label="Permalink to &quot;🎯 必知威胁清单&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>威胁等级排序:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>🔴 高危(必须防护):</span></span>
<span class="line"><span>  - Prompt 注入(用户操纵 LLM)</span></span>
<span class="line"><span>  - Jailbreak(绕过安全对齐)</span></span>
<span class="line"><span>  - PII 泄露(LLM 输出个人信息)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>🟡 中危(应该防护):</span></span>
<span class="line"><span>  - NSFW 内容生成</span></span>
<span class="line"><span>  - 有害内容(暴力/仇恨/违法)</span></span>
<span class="line"><span>  - 模型 DoS(高频请求)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>🟢 低危(基础防护):</span></span>
<span class="line"><span>  - 数据中毒(训练数据被污染)</span></span>
<span class="line"><span>  - 模型窃取(API 滥用)</span></span></code></pre></div><h2 id="🔧-通用最佳实践" tabindex="-1">🔧 通用最佳实践 <a class="header-anchor" href="#🔧-通用最佳实践" aria-label="Permalink to &quot;🔧 通用最佳实践&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>✅ 所有用户输入都视为不可信</span></span>
<span class="line"><span>✅ LLM 输出再处理一次(不直接展示)</span></span>
<span class="line"><span>✅ 关键操作需 Human-in-the-Loop</span></span>
<span class="line"><span>✅ 记录所有 LLM 交互(LangSmith)</span></span>
<span class="line"><span>✅ 定期红队测试(模拟攻击)</span></span></code></pre></div><h2 id="🔗-相关专题" tabindex="-1">🔗 相关专题 <a class="header-anchor" href="#🔗-相关专题" aria-label="Permalink to &quot;🔗 相关专题&quot;">​</a></h2><ul><li><a href="./../prompt/">Prompt 工程</a> —— 安全 Prompt 设计</li><li><a href="./../agent-advanced/5-reflection">Agent 进阶 - HITL</a> —— 高风险场景必加</li></ul>`,15)])])}const b=n(p,[["render",i]]);export{u as __pageData,b as default};
