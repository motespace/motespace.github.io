import{_ as s,o as n,c as e,a2 as p}from"./chunks/framework.BXzK3EA4.js";const u=JSON.parse('{"title":"后端","description":"","frontmatter":{},"headers":[],"relativePath":"后端/index.md","filePath":"后端/index.md","lastUpdated":1792941182000}'),l={name:"后端/index.md"};function i(t,a,o,c,r,d){return n(),e("div",null,[...a[0]||(a[0]=[p(`<h1 id="后端" tabindex="-1">后端 <a class="header-anchor" href="#后端" aria-label="Permalink to &quot;后端&quot;">​</a></h1><blockquote><p>后端学习路线总览。<strong>当前学习程度:入门偏浅</strong>,目标是把 Node.js / Python 作为主力语言,把 MySQL / Docker / Linux 作为日常基建,能独立写接口、搭服务、上生产。</p></blockquote><h2 id="📚-章节列表" tabindex="-1">📚 章节列表 <a class="header-anchor" href="#📚-章节列表" aria-label="Permalink to &quot;📚 章节列表&quot;">​</a></h2><ol><li><a href="./node/">Node.js 入门</a> — 异步/事件循环/Stream/常用库</li><li><a href="./python/">Python 入门</a> — 语法糖 → 异步 → Flask/FastAPI → 数据/AI</li><li><a href="./mysql/">MySQL 入门</a> — 安装 / 类型 / CRUD / 索引 / 事务 / 性能优化 / 备份恢复</li><li><a href="./docker/">Docker 入门</a> — 镜像/容器/Dockerfile/compose/网络卷/实战打包</li><li><a href="./linux/">Linux 后端运维</a> — SSH/systemd/进程资源/网络/日志监控/部署实战</li></ol><h2 id="🎯-学习顺序建议" tabindex="-1">🎯 学习顺序建议 <a class="header-anchor" href="#🎯-学习顺序建议" aria-label="Permalink to &quot;🎯 学习顺序建议&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>入门语言:</span></span>
<span class="line"><span>  Node.js ──┐</span></span>
<span class="line"><span>            ├─→ 写 API</span></span>
<span class="line"><span>  Python ───┘</span></span>
<span class="line"><span></span></span>
<span class="line"><span>数据库:</span></span>
<span class="line"><span>  MySQL(关系)──→ 在 Node / Python 项目里连库</span></span>
<span class="line"><span></span></span>
<span class="line"><span>部署 / 运维:</span></span>
<span class="line"><span>  Docker ──→ Linux 后端运维</span></span>
<span class="line"><span>              ↑</span></span>
<span class="line"><span>              └── 配套:SSH 远程 / systemd / 监控告警</span></span></code></pre></div><h2 id="🔗-跨章节联动" tabindex="-1">🔗 跨章节联动 <a class="header-anchor" href="#🔗-跨章节联动" aria-label="Permalink to &quot;🔗 跨章节联动&quot;">​</a></h2><ul><li><strong>MySQL + Docker</strong>:Docker 跑 MySQL 容器,数据走 volume</li><li><strong>Python + Docker</strong>:Dockerfile 打包 FastAPI 应用</li><li><strong>Linux + Docker</strong>:systemd 跑 Docker 守护,生产部署的容器编排</li><li><strong>Python + MySQL</strong>:Python FastAPI 项目里用 SQLAlchemy / pymysql 连 MySQL</li></ul><h2 id="🛠️-实战项目串联-从学到做" tabindex="-1">🛠️ 实战项目串联(从学到做) <a class="header-anchor" href="#🛠️-实战项目串联-从学到做" aria-label="Permalink to &quot;🛠️ 实战项目串联(从学到做)&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1. Node / Python 写一个 TODO API(本地跑通)</span></span>
<span class="line"><span>         ↓</span></span>
<span class="line"><span>2. 加 MySQL(数据持久化)</span></span>
<span class="line"><span>         ↓</span></span>
<span class="line"><span>3. 用 Dockerfile 打包(环境一致)</span></span>
<span class="line"><span>         ↓</span></span>
<span class="line"><span>4. docker-compose 起 web + db(一键起全栈)</span></span>
<span class="line"><span>         ↓</span></span>
<span class="line"><span>5. 部署到 Linux 服务器</span></span>
<span class="line"><span>         ↓</span></span>
<span class="line"><span>6. nginx 反代 + HTTPS</span></span>
<span class="line"><span>         ↓</span></span>
<span class="line"><span>7. systemd 守护进程 + Prometheus 监控 + 告警</span></span></code></pre></div><p>学完这 5 章,你应该能独立完成一个<strong>生产级 Web 服务</strong>的全链路。</p>`,11)])])}const m=s(l,[["render",i]]);export{u as __pageData,m as default};
