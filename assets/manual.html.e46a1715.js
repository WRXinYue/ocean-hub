import{_ as e,o as n,c as a,e as s}from"./app.b145dd9f.js";const i={},t=s(`<h1 id="ocean-setup-and-installation-guide" tabindex="-1"><a class="header-anchor" href="#ocean-setup-and-installation-guide" aria-hidden="true">#</a> Ocean Setup and Installation Guide</h1><p>We thank you for your interest in setting up your Ocean server! This guide describes how to install and setup Ocean.</p><hr><div class="custom-container danger"><i class="fas fa-times"></i><p>Do not recreate the database with the domain/hostname of the server once you have started using it!</p></div><h2 id="_1-install-dependencies" tabindex="-1"><a class="header-anchor" href="#_1-install-dependencies" aria-hidden="true">#</a> <em>1.</em> Install dependencies</h2><p>Please install and setup these softwares:</p><h4 id="dependencies" tabindex="-1"><a class="header-anchor" href="#dependencies" aria-hidden="true">#</a> Dependencies \u{1F4E6}</h4><ul><li><strong><a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">Node.js</a></strong> (20.4.x)</li><li><strong><a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer">PostgreSQL</a></strong> (15.x)</li><li><strong><a href="https://redis.io/" target="_blank" rel="noopener noreferrer">Redis</a></strong></li><li><strong><a href="https://www.ffmpeg.org/" target="_blank" rel="noopener noreferrer">FFmpeg</a></strong></li></ul><p>If you are using Debian/Ubuntu, you should install the <code>build-essential</code> package.</p><p>corepack must be enabled.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> corepack <span class="token builtin class-name">enable</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-create-ocean-user" tabindex="-1"><a class="header-anchor" href="#_2-create-ocean-user" aria-hidden="true">#</a> <em>2.</em> Create Ocean user</h2><p>Running ocean as root is not a good idea so we create a user for that. In debian for exemple :</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>adduser --disabled-password --disabled-login ocean
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-install-ocean" tabindex="-1"><a class="header-anchor" href="#_3-install-ocean" aria-hidden="true">#</a> <em>3.</em> Install Ocean</h2><ol><li><p>Connect to the <code>ocean</code> user</p><p><code>sudo -iu ocean</code></p></li><li><p>Clone the Ocean repository</p><p><code>git clone --recursive https://github.com/ocean-dev/ocean.git</code></p></li><li><p>Navigate to the repository</p><p><code>cd ocean</code></p></li><li><p>Check out the <a href="https://github.com/ocean-dev/ocean/releases/latest" target="_blank" rel="noopener noreferrer">latest release</a></p><p><code>git checkout master</code></p></li><li><p>Download submodules</p><p><code>git submodule update --init</code></p></li><li><p>Install Ocean&#39;s dependencies</p><p><code>pnpm install --frozen-lockfile</code></p></li></ol><h2 id="_4-configure-ocean" tabindex="-1"><a class="header-anchor" href="#_4-configure-ocean" aria-hidden="true">#</a> <em>4.</em> Configure Ocean</h2><ol><li><p>Copy the <code>.config/example.yml</code> and rename it to <code>default.yml</code>.</p><p><code>cp .config/example.yml .config/default.yml</code></p></li><li><p>Edit <code>default.yml</code></p></li></ol><h2 id="_5-build-ocean" tabindex="-1"><a class="header-anchor" href="#_5-build-ocean" aria-hidden="true">#</a> <em>5.</em> Build Ocean</h2><p>Build ocean with the following:</p><p><code>NODE_ENV=production pnpm run build</code></p><p>If you&#39;re on Debian, you will need to install the <code>build-essential</code>, <code>python</code> package.</p><h2 id="_6-init-db" tabindex="-1"><a class="header-anchor" href="#_6-init-db" aria-hidden="true">#</a> <em>6.</em> Init DB</h2><ol><li><p>Create the appropriate PostgreSQL users with respective passwords, and empty database as named in the configuration file. Make sure the database connection also works correctly when run from the user that will later run Ocean, or it could cause problems later. The encoding of the database should be UTF-8.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo -u postgres psql
create database ocean with encoding = &#39;UTF8&#39;;
create user ocean with encrypted password &#39;{YOUR_PASSWORD}&#39;;
grant all privileges on database ocean to ocean;
alter database ocean owner to ocean;
\\q
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Run the database initialisation <code>pnpm run init</code></p></li></ol><h2 id="_7-that-is-it" tabindex="-1"><a class="header-anchor" href="#_7-that-is-it" aria-hidden="true">#</a> <em>7.</em> That is it.</h2><p>Well done! Now, you have an environment that run to Ocean.</p><h3 id="launch-normally" tabindex="-1"><a class="header-anchor" href="#launch-normally" aria-hidden="true">#</a> Launch normally</h3><p>Just <code>NODE_ENV=production pnpm run start</code>. GLHF!</p><h3 id="launch-with-systemd" tabindex="-1"><a class="header-anchor" href="#launch-with-systemd" aria-hidden="true">#</a> Launch with systemd</h3><ol><li><p>Create a systemd service here</p><p><code>/etc/systemd/system/ocean.service</code></p></li><li><p>Edit it, and paste this and save:</p><details class="custom-container details"><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[Unit]
Description=Ocean daemon

[Service]
Type=simple
User=ocean
ExecStart=/usr/bin/npm start
WorkingDirectory=/home/ocean/ocean
Environment=&quot;NODE_ENV=production&quot;
TimeoutSec=60
StandardOutput=journal
StandardError=journal
SyslogIdentifier=ocean
Restart=always

[Install]
WantedBy=multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></li><li><p>Reload systemd and enable the ocean service.</p><p><code>sudo systemctl daemon-reload; sudo systemctl enable ocean</code></p></li><li><p>Start the ocean service.</p><p><code>sudo systemctl start ocean</code></p></li></ol><p>You can check if the service is running with <code>systemctl status ocean</code>.</p><h3 id="launch-with-openrc" tabindex="-1"><a class="header-anchor" href="#launch-with-openrc" aria-hidden="true">#</a> Launch with OpenRC</h3><ol><li><p>Copy the following text to <code>/etc/init.d/ocean</code>:</p><details class="custom-container details"><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/sbin/openrc-run</span>

<span class="token assign-left variable">name</span><span class="token operator">=</span>ocean
<span class="token assign-left variable">description</span><span class="token operator">=</span><span class="token string">&quot;Ocean daemon&quot;</span>

<span class="token assign-left variable">command</span><span class="token operator">=</span><span class="token string">&quot;/usr/bin/npm&quot;</span>
<span class="token assign-left variable">command_args</span><span class="token operator">=</span><span class="token string">&quot;start&quot;</span>
<span class="token assign-left variable">command_user</span><span class="token operator">=</span><span class="token string">&quot;ocean&quot;</span>

<span class="token assign-left variable">supervisor</span><span class="token operator">=</span><span class="token string">&quot;supervise-daemon&quot;</span>
<span class="token assign-left variable">supervise_daemon_args</span><span class="token operator">=</span><span class="token string">&quot; -d /home/ocean/ocean -e NODE_ENV=<span class="token entity" title="\\&quot;">\\&quot;</span>production<span class="token entity" title="\\&quot;">\\&quot;</span>&quot;</span>

<span class="token assign-left variable">pidfile</span><span class="token operator">=</span><span class="token string">&quot;/run/<span class="token variable">\${RC_SVCNAME}</span>.pid&quot;</span>

<span class="token function-name function">depend</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	need net
	use logger

	<span class="token comment"># alternatively, uncomment if using nginx reverse proxy</span>
	<span class="token comment">#use logger nginx</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></li><li><p>Set the service to start on boot</p><p><code>rc-update add ocean</code></p></li><li><p>Start the Ocean service</p><p><code>rc-service ocean start</code></p></li></ol><p>You can check if the service is running with <code>rc-service ocean status</code>.</p><h3 id="how-to-update-your-ocean-server-to-the-latest-version" tabindex="-1"><a class="header-anchor" href="#how-to-update-your-ocean-server-to-the-latest-version" aria-hidden="true">#</a> How to update your Ocean server to the latest version</h3><ol><li><code>git checkout master</code></li><li><code>git pull</code></li><li><code>git submodule update --init</code></li><li><code>NODE_ENV=production pnpm install --frozen-lockfile</code></li><li><code>NODE_ENV=production pnpm run build</code></li><li><code>pnpm run migrate</code></li><li>Restart your Ocean process to apply changes</li><li>Enjoy</li></ol><p>If you encounter any problems with updating, please try the following:</p><ol><li><code>pnpm run clean</code> or <code>pnpm run clean-all</code></li><li>Retry update (Don&#39;t forget <code>pnpm install</code></li></ol>`,38),o=[t];function l(r,d){return n(),a("div",null,o)}var p=e(i,[["render",l],["__file","manual.html.vue"]]);export{p as default};
