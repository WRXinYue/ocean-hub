import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.8f83280a.js";const E=JSON.parse('{"title":"Ocean 安装与配置教程","description":"","frontmatter":{},"headers":[],"relativePath":"zh/docs/install/manual.md","filePath":"zh/docs/install/manual.md","lastUpdated":1695022576000}'),l={name:"zh/docs/install/manual.md"},p=e(`<h1 id="ocean-安装与配置教程" tabindex="-1">Ocean 安装与配置教程 <a class="header-anchor" href="#ocean-安装与配置教程" aria-label="Permalink to &quot;Ocean 安装与配置教程&quot;">​</a></h1><p>感谢您对搭建 Ocean 服务器感兴趣！ 本篇教程叙述了如何安装和配置 Ocean。</p><hr><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>请注意，一旦 Ocean 开始运行，不要更改域名和服务器的主机名。</p></div><h2 id="_1-安装依赖" tabindex="-1"><em>1.</em> 安装依赖 <a class="header-anchor" href="#_1-安装依赖" aria-label="Permalink to &quot;*1.* 安装依赖&quot;">​</a></h2><p>请安装以下软件：</p><h4 id="dependencies" tabindex="-1">Dependencies 📦 <a class="header-anchor" href="#dependencies" aria-label="Permalink to &quot;Dependencies :package:&quot;">​</a></h4><ul><li><strong><a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">Node.js</a></strong> (20.4.x)</li><li><strong><a href="https://www.postgresql.org/" target="_blank" rel="noreferrer">PostgreSQL</a></strong> (15.x)</li><li><strong><a href="https://redis.io/" target="_blank" rel="noreferrer">Redis</a></strong></li><li><strong><a href="https://www.ffmpeg.org/" target="_blank" rel="noreferrer">FFmpeg</a></strong></li></ul><p>在 Debian 和 Ubuntu 系统中，您还需要安装 <code>build-essential</code> 与 <code>python</code> 。</p><p>执行以下命令启用 corepack：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">corepack</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">enable</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">corepack</span><span style="color:#24292E;"> </span><span style="color:#032F62;">enable</span></span></code></pre></div><h2 id="_2-创建一个运行-ocean-的用户" tabindex="-1"><em>2.</em> 创建一个运行 Ocean 的用户 <a class="header-anchor" href="#_2-创建一个运行-ocean-的用户" aria-label="Permalink to &quot;*2.* 创建一个运行 Ocean 的用户&quot;">​</a></h2><p>在 root 下运行 Ocean 不是一个好主意，所以我们创建一个新用户 ocean。 例如，在 Debian 中：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">adduser</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--disabled-password</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--disabled-login</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ocean</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">adduser</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--disabled-password</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--disabled-login</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ocean</span></span></code></pre></div><h2 id="_3-安装-ocean" tabindex="-1"><em>3.</em> 安装 Ocean <a class="header-anchor" href="#_3-安装-ocean" aria-label="Permalink to &quot;*3.* 安装 Ocean&quot;">​</a></h2><ol><li><p>切换至 <code>ocean</code> 用户：</p><p><code>sudo -iu ocean</code></p></li><li><p>将 Ocean 克隆至本地：</p><p><code>git clone --recursive https://github.com/ocean-dev/ocean.git</code></p></li><li><p>进入 ocean 仓库：</p><p><code>cd ocean</code></p></li><li><p>检查是否为 <a href="https://github.com/ocean-dev/ocean/releases/latest" target="_blank" rel="noreferrer">最新版本</a> （分支是否为 master）：</p><p><code>git checkout master</code></p></li><li><p>下载子模块：</p><p><code>git submodule update --init</code></p></li><li><p>安装 Ocean 的依赖项：</p><p><code>pnpm install --frozen-lockfile</code></p></li></ol><h2 id="_4-配置-ocean" tabindex="-1"><em>4.</em> 配置 Ocean <a class="header-anchor" href="#_4-配置-ocean" aria-label="Permalink to &quot;*4.* 配置 Ocean&quot;">​</a></h2><ol><li>复制 <code>.config/example.yml</code> 并重命名为 <code>default.yml</code>.</li></ol><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">cp</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.config/example.yml</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.config/default.yml</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">cp</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.config/example.yml</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.config/default.yml</span></span></code></pre></div><ol start="2"><li>编辑 <code>default.yml</code></li></ol><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">nano</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">default.yml</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">nano</span><span style="color:#24292E;"> </span><span style="color:#032F62;">default.yml</span></span></code></pre></div><h2 id="_5-编译-ocean" tabindex="-1"><em>5.</em> 编译 Ocean <a class="header-anchor" href="#_5-编译-ocean" aria-label="Permalink to &quot;*5.* 编译 Ocean&quot;">​</a></h2><p>执行以下命令编译 Ocean：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">NODE_ENV</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">production</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">build</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">NODE_ENV</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">production</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">build</span></span></code></pre></div><p>如果您使用 Debian，则需要安装 build-essential 和 python 软件包。</p><h2 id="_6-创建并初始化数据库" tabindex="-1"><em>6.</em> 创建并初始化数据库 <a class="header-anchor" href="#_6-创建并初始化数据库" aria-label="Permalink to &quot;*6.* 创建并初始化数据库&quot;">​</a></h2><ol><li><p>下面我们来新建数据库。输入以下命令切换至 postgres 用户并进入数据库：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">sudo -u postgres psql</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">sudo -u postgres psql</span></span></code></pre></div><p>输入以下命令来新建数据库及用户（请注意，数据库需要以 UTF8 编码：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">create database ocean with encoding = &#39;UTF8&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">create user ocean with encrypted password &#39;{YOUR_PASSWORD}&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">grant all privileges on database ocean to ocean;</span></span>
<span class="line"><span style="color:#e1e4e8;">\\q</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">create database ocean with encoding = &#39;UTF8&#39;;</span></span>
<span class="line"><span style="color:#24292e;">create user ocean with encrypted password &#39;{YOUR_PASSWORD}&#39;;</span></span>
<span class="line"><span style="color:#24292e;">grant all privileges on database ocean to ocean;</span></span>
<span class="line"><span style="color:#24292e;">\\q</span></span></code></pre></div></li><li><p>执行以下命令来初始化数据库： <code>pnpm run init</code></p></li></ol><h2 id="_7-环境配置完成" tabindex="-1"><em>7.</em> 环境配置完成！ <a class="header-anchor" href="#_7-环境配置完成" aria-label="Permalink to &quot;*7.* 环境配置完成！&quot;">​</a></h2><p>干得漂亮！现在，您有一个可以运行 Ocean 的环境了。</p><h3 id="正常启动-前台-不可退出终端或-ssh" tabindex="-1">正常启动（前台，不可退出终端或 ssh） <a class="header-anchor" href="#正常启动-前台-不可退出终端或-ssh" aria-label="Permalink to &quot;正常启动（前台，不可退出终端或 ssh）&quot;">​</a></h3><p>运行 <code>NODE_ENV=production pnpm run start</code>。</p><h3 id="以-systemd-方式启动" tabindex="-1">以 systemd 方式启动 <a class="header-anchor" href="#以-systemd-方式启动" aria-label="Permalink to &quot;以 systemd 方式启动&quot;">​</a></h3><ol><li><p>创建 systemd 服务：</p><p><code>nano /etc/systemd/system/ocean.service</code></p></li><li><p>将以下内容复制进去：</p><details class="details custom-block"><summary>Details</summary><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[Unit]</span></span>
<span class="line"><span style="color:#e1e4e8;">Description=Ocean daemon</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">[Service]</span></span>
<span class="line"><span style="color:#e1e4e8;">Type=simple</span></span>
<span class="line"><span style="color:#e1e4e8;">User=ocean</span></span>
<span class="line"><span style="color:#e1e4e8;">ExecStart=/usr/bin/npm start</span></span>
<span class="line"><span style="color:#e1e4e8;">WorkingDirectory=/home/ocean/ocean</span></span>
<span class="line"><span style="color:#e1e4e8;">Environment=&quot;NODE_ENV=production&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">TimeoutSec=60</span></span>
<span class="line"><span style="color:#e1e4e8;">StandardOutput=journal</span></span>
<span class="line"><span style="color:#e1e4e8;">StandardError=journal</span></span>
<span class="line"><span style="color:#e1e4e8;">SyslogIdentifier=ocean</span></span>
<span class="line"><span style="color:#e1e4e8;">Restart=always</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">[Install]</span></span>
<span class="line"><span style="color:#e1e4e8;">WantedBy=multi-user.target</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[Unit]</span></span>
<span class="line"><span style="color:#24292e;">Description=Ocean daemon</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">[Service]</span></span>
<span class="line"><span style="color:#24292e;">Type=simple</span></span>
<span class="line"><span style="color:#24292e;">User=ocean</span></span>
<span class="line"><span style="color:#24292e;">ExecStart=/usr/bin/npm start</span></span>
<span class="line"><span style="color:#24292e;">WorkingDirectory=/home/ocean/ocean</span></span>
<span class="line"><span style="color:#24292e;">Environment=&quot;NODE_ENV=production&quot;</span></span>
<span class="line"><span style="color:#24292e;">TimeoutSec=60</span></span>
<span class="line"><span style="color:#24292e;">StandardOutput=journal</span></span>
<span class="line"><span style="color:#24292e;">StandardError=journal</span></span>
<span class="line"><span style="color:#24292e;">SyslogIdentifier=ocean</span></span>
<span class="line"><span style="color:#24292e;">Restart=always</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">[Install]</span></span>
<span class="line"><span style="color:#24292e;">WantedBy=multi-user.target</span></span></code></pre></div></details></li><li><p>重载 systemd 并使 ocean service 开机自启：</p><p><code>sudo systemctl daemon-reload; sudo systemctl enable ocean</code></p></li><li><p>启动 ocean service：</p><p><code>sudo systemctl start ocean</code></p></li></ol><p>您可以执行 <code>systemctl status ocean</code>检查该服务项是否正在运行。</p><h3 id="使用-openrc-启动" tabindex="-1">使用 OpenRC 启动 <a class="header-anchor" href="#使用-openrc-启动" aria-label="Permalink to &quot;使用 OpenRC 启动&quot;">​</a></h3><ol><li><p>将以下文本复制到 <code>/etc/init.d/ocean</code>:</p><details class="details custom-block"><summary>Details</summary><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">#!/sbin/openrc-run</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">name</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">ocean</span></span>
<span class="line"><span style="color:#E1E4E8;">description</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;Ocean daemon&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">command</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;/usr/bin/npm&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">command_args</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;start&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">command_user</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;ocean&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">supervisor</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;supervise-daemon&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">supervise_daemon_args</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot; -d /home/ocean/ocean -e NODE_ENV=</span><span style="color:#79B8FF;">\\&quot;</span><span style="color:#9ECBFF;">production</span><span style="color:#79B8FF;">\\&quot;</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">pidfile</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;/run/\${</span><span style="color:#E1E4E8;">RC_SVCNAME</span><span style="color:#9ECBFF;">}.pid&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">depend</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">need</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">net</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">logger</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;"># alternatively, uncomment if using nginx reverse proxy</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">#use logger nginx</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">#!/sbin/openrc-run</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">name</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">ocean</span></span>
<span class="line"><span style="color:#24292E;">description</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;Ocean daemon&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">command</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;/usr/bin/npm&quot;</span></span>
<span class="line"><span style="color:#24292E;">command_args</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;start&quot;</span></span>
<span class="line"><span style="color:#24292E;">command_user</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;ocean&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">supervisor</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;supervise-daemon&quot;</span></span>
<span class="line"><span style="color:#24292E;">supervise_daemon_args</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot; -d /home/ocean/ocean -e NODE_ENV=</span><span style="color:#005CC5;">\\&quot;</span><span style="color:#032F62;">production</span><span style="color:#005CC5;">\\&quot;</span><span style="color:#032F62;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">pidfile</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;/run/\${</span><span style="color:#24292E;">RC_SVCNAME</span><span style="color:#032F62;">}.pid&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">depend</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">need</span><span style="color:#24292E;"> </span><span style="color:#032F62;">net</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;"> </span><span style="color:#032F62;">logger</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;"># alternatively, uncomment if using nginx reverse proxy</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">#use logger nginx</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></details></li><li><p>设置开机自启：</p><p><code>rc-update add ocean</code></p></li><li><p>启动 Ocean service：</p><p><code>rc-service ocean start</code></p></li></ol><p>您可以执行 <code>rc-service ocean status</code>来检查该服务项是否正在运行。</p><h3 id="如何更新-ocean" tabindex="-1">如何更新 Ocean？ <a class="header-anchor" href="#如何更新-ocean" aria-label="Permalink to &quot;如何更新 Ocean？&quot;">​</a></h3><p>执行以下命令：</p><ol><li><code>git checkout master</code></li><li><code>git pull</code></li><li><code>git submodule update --init</code></li><li><code>NODE_ENV=production pnpm install --frozen-lockfile</code></li><li><code>NODE_ENV=production pnpm run build</code></li><li><code>pnpm run migrate</code></li><li>重新启动 Ocean 进程以应用更改</li><li>开始使用吧～</li></ol><p>如果更新遇到任何问题，请尝试以下操作：</p><ol><li><code>pnpm run clean</code> 或 <code>pnpm run clean-all</code></li><li>重新更新 (别忘了执行 <code>pnpm install</code>)</li></ol>`,42),o=[p];function c(t,r,i,d,y,u){return a(),n("div",null,o)}const m=s(l,[["render",c]]);export{E as __pageData,m as default};
