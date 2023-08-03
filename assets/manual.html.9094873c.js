import{_ as e,o as s,c as a,e as i}from"./app.0f017d40.js";const n={},o=i(`<h1 id="poradnik-instalacji-i-konfiguracji-misskey" tabindex="-1"><a class="header-anchor" href="#poradnik-instalacji-i-konfiguracji-misskey" aria-hidden="true">#</a> Poradnik instalacji i konfiguracji Misskey</h1><p>Dzi\u0119kujemy za zainteresowanie stworzeniem w\u0142asnej instancji Misskey! Ten poradnik opisuje jak zainstalowa\u0107 i skonfigurowa\u0107 MIsskey.</p><hr><div class="custom-container danger"><i class="fas fa-times"></i><p>Nigdy nie zmieniaj nazwy domeny(hostname) kiedy b\u0119dziesz korzysta\u0107 z instacji!</p></div><h2 id="_1-zainstaluj-dependencje" tabindex="-1"><a class="header-anchor" href="#_1-zainstaluj-dependencje" aria-hidden="true">#</a> <em>1.</em> Zainstaluj dependencje</h2><p>Prosz\u0119 zainstalowa\u0107 wymagane zale\u017Cno\u015Bci i je skonfigurowa\u0107:</p><h4 id="dependencje-package" tabindex="-1"><a class="header-anchor" href="#dependencje-package" aria-hidden="true">#</a> Dependencje :package</h4><ul><li><strong><a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">Node.js</a></strong> (20.4.x)</li><li><strong><a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer">PostgreSQL</a></strong> (15.x)</li><li><strong><a href="https://redis.io/" target="_blank" rel="noopener noreferrer">Redis</a></strong></li><li><strong><a href="https://www.ffmpeg.org/" target="_blank" rel="noopener noreferrer">FFmpeg</a></strong></li></ul><p>Je\u017Celi u\u017Cywasz Debian/Ubuntu, powiniene\u015B zainstalowa\u0107 pakiet <code>build-essential</code>.</p><p>corepack musi by\u0107 w\u0142\u0105czony.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> corepack <span class="token builtin class-name">enable</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-stworz-uzytkownika-dla-misskey" tabindex="-1"><a class="header-anchor" href="#_2-stworz-uzytkownika-dla-misskey" aria-hidden="true">#</a> <em>2.</em> Stw\xF3rz u\u017Cytkownika dla Misskey</h2><p>U\u017Cywanie Misskey z prawami root&#39;a nie jest dobrym pomys\u0142em, wi\u0119c stw\xF3rz u\u017Cytkownika dla tego. W debiano-podobnych systemach na przyk\u0142ad za pomoc\u0105 tej komendy:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>adduser --disabled-password --disabled-login misskey
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-zainstaluj-misskey" tabindex="-1"><a class="header-anchor" href="#_3-zainstaluj-misskey" aria-hidden="true">#</a> <em>3.</em> Zainstaluj Misskey</h2><ol><li>Po\u0142\u0105cz si\u0119 z u\u017Cytkownikiem <code>misskey</code></li></ol><p><code>sudo -iu misskey</code></p><ol start="2"><li>Sklonuj repozytorium Misskey</li></ol><p><code>git clone --recursive https://github.com/misskey-dev/misskey.git</code></p><ol start="3"><li>Przejd\u017A do folderu z pobranym repozytorium</li></ol><p><code>cd misskey</code></p><ol start="4"><li>Sprawd\u017A <a href="https://github.com/misskey-dev/misskey/releases/latest" target="_blank" rel="noopener noreferrer">najnowsze wydanie</a></li></ol><p><code>git checkout master</code></p><ol start="5"><li><p>Pobierz submodu\u0142y</p><p><code>git submodule update --init</code></p></li><li><p>Zainstaluj Misskey&#39;s dependencje</p></li></ol><p><code>pnpm install --frozen-lockfile</code></p><h2 id="_4-skonfiguruj-misskey" tabindex="-1"><a class="header-anchor" href="#_4-skonfiguruj-misskey" aria-hidden="true">#</a> <em>4.</em> Skonfiguruj Misskey</h2><ol><li>Skopiuj <code>.config/example.yml</code> i zmie\u0144 nazw\u0119 na <code>default.yml</code>.</li></ol><p><code>cp .config/example.yml .config/default.yml</code></p><ol start="2"><li>Edytuj <code>default.yml</code></li></ol><h2 id="_5-zbuduj-misskey" tabindex="-1"><a class="header-anchor" href="#_5-zbuduj-misskey" aria-hidden="true">#</a> <em>5.</em> Zbuduj Misskey</h2><p>Zbuduj Misskey z podanymi parametrami:</p><p><code>NODE_ENV=production pnpm run build</code></p><p>Je\u015Bli u\u017Cywasz Debiana to musisz mie\u0107 zainstalowane paczki <code>build-essential</code>, <code>python</code>.</p><h2 id="_6-zainicjuj-baze-danych" tabindex="-1"><a class="header-anchor" href="#_6-zainicjuj-baze-danych" aria-hidden="true">#</a> <em>6.</em> Zainicjuj baz\u0119 danych</h2><ol><li>Utw\xF3rz baz\u0119 danych PostgreSQL z prawid\u0142owymi danymi u\u017Cytkownika oraz pust\u0105 baz\u0105 danych o nazwie podanej w pliku konfiguracyjnym. Upewnij si\u0119 \u017Ce baza danych \u0142\u0105czy si\u0119 bez problem\xF3w z u\u017Cytkownikiem kt\xF3ry b\u0119dzie p\xF3\u017Aniej uruchamia\u0142 Misskey czy nic nie powodoje problem\xF3w. Enkodowanie bazy danych powinno by\u0107 ustawione na <code>UTF8</code>.</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo -u postgres psql
create database misskey with encoding = &#39;UTF8&#39;;
create user misskey with encrypted password &#39;{YOUR_PASSWORD}&#39;;
grant all privileges on database misskey to misskey;
\\q
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>Uruchom inicjalizacje bazy danych</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>pnpm run init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_7-koniec" tabindex="-1"><a class="header-anchor" href="#_7-koniec" aria-hidden="true">#</a> <em>7.</em> Koniec</h2><p>Dobra robota! Teraz masz \u015Brodowisko kt\xF3re uruchamia Misskey.</p><h3 id="uruchamianie-normalnie" tabindex="-1"><a class="header-anchor" href="#uruchamianie-normalnie" aria-hidden="true">#</a> Uruchamianie normalnie</h3><p>Wystarczy <code>NODE_ENV=production pnpm run start</code> i GLHF!</p><h3 id="uruchom-z-systemd" tabindex="-1"><a class="header-anchor" href="#uruchom-z-systemd" aria-hidden="true">#</a> Uruchom z SystemD</h3><ol><li>Utw\xF3rz us\u0142ug\u0119 SystemD</li></ol><p><code>/etc/systemd/system/misskey.service</code></p><ol start="2"><li>Edytuj plik i wklej nast\u0119puj\u0105cy kod:</li></ol><details class="custom-container details"><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[Unit]
Description=Misskey daemon

[Service]
Type=simple
User=misskey
ExecStart=/usr/bin/npm start
WorkingDirectory=/home/misskey/misskey
Environment=&quot;NODE_ENV=production&quot;
TimeoutSec=60
StandardOutput=journal
StandardError=journal
SyslogIdentifier=misskey
Restart=always

[Install]
WantedBy=multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><ol start="3"><li>Od\u015Bwierz systemD i aktywuj us\u0142ug\u0119 Misskey.</li></ol><p><code>sudo systemctl daemon-reload; sudo systemctl enable misskey</code></p><ol start="4"><li>Uruchom us\u0142ug\u0119 Misskey.</li></ol><p><code>sudo systemctl start misskey</code></p><p>Mo\u017Cesz sprawdzi\u0107 dzia\u0142anie us\u0142ugi wpisuj\u0105c</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl status misskey
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="uruchom-z-openrc" tabindex="-1"><a class="header-anchor" href="#uruchom-z-openrc" aria-hidden="true">#</a> Uruchom z OpenRC</h3><ol><li>Skopiuj poni\u017Cszy tekst do <code>/etc/init.d/misskey</code>:</li></ol><details class="custom-container details"><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/sbin/openrc-run</span>

<span class="token assign-left variable">name</span><span class="token operator">=</span>misskey
<span class="token assign-left variable">description</span><span class="token operator">=</span><span class="token string">&quot;Misskey daemon&quot;</span>

<span class="token assign-left variable">command</span><span class="token operator">=</span><span class="token string">&quot;/usr/bin/npm&quot;</span>
<span class="token assign-left variable">command_args</span><span class="token operator">=</span><span class="token string">&quot;start&quot;</span>
<span class="token assign-left variable">command_user</span><span class="token operator">=</span><span class="token string">&quot;misskey&quot;</span>

<span class="token assign-left variable">supervisor</span><span class="token operator">=</span><span class="token string">&quot;supervise-daemon&quot;</span>
<span class="token assign-left variable">supervise_daemon_args</span><span class="token operator">=</span><span class="token string">&quot; -d /home/misskey/misskey -e NODE_ENV=<span class="token entity" title="\\&quot;">\\&quot;</span>production<span class="token entity" title="\\&quot;">\\&quot;</span>&quot;</span>

<span class="token assign-left variable">pidfile</span><span class="token operator">=</span><span class="token string">&quot;/run/<span class="token variable">\${RC_SVCNAME}</span>.pid&quot;</span>

<span class="token function-name function">depend</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 need net
 use logger

 <span class="token comment"># alterbnatynie usu\u0144 komenta\u017C je\u017Celi u\u017Cywasz nginx</span>
 <span class="token comment">#use logger nginx</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><ol start="2"><li>Usutaw uruchomienie us\u0142ugi przy starcie systemu</li></ol><p><code>rc-update add misskey</code></p><ol start="3"><li>Uruchom us\u0142ug\u0119 Misskey</li></ol><p><code>rc-service misskey start</code></p><p>Mo\u017Cesz sprawdzi\u0107 dzia\u0142anie us\u0142ugi z komend\u0105</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>rc-service misskey status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="aktualizowanie-misskey-do-najnowszej-wersji" tabindex="-1"><a class="header-anchor" href="#aktualizowanie-misskey-do-najnowszej-wersji" aria-hidden="true">#</a> Aktualizowanie Misskey do najnowszej wersji</h3><ol><li><code>git checkout master</code></li><li><code>git pull</code></li><li><code>git submodule update --init</code></li><li><code>NODE_ENV=production pnpm install --frozen-lockfile</code></li><li><code>NODE_ENV=production pnpm run build</code></li><li><code>pnpm run migrate</code></li><li>Zrestartuj proces Misskey</li><li>GLHF!</li></ol><p>Je\u017Celi napotkasz problemy to spr\xF3buj:</p><ol><li><code>pnpm run clean</code> lub <code>pnpm run clean-all</code></li><li>Pon\xF3w aktualizacj\u0119 (Nie zapomnij o <code>pnpm install</code>)</li></ol>`,66),l=[o];function d(r,t){return s(),a("div",null,l)}var u=e(n,[["render",d],["__file","manual.html.vue"]]);export{u as default};
