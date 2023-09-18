import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.8f83280a.js";const _=JSON.parse('{"title":"配置","description":"","frontmatter":{},"headers":[],"relativePath":"zh/docs/tech/anytype-heart.md","filePath":"zh/docs/tech/anytype-heart.md","lastUpdated":1695022576000}'),p={name:"zh/docs/tech/anytype-heart.md"},l=e(`<h1 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h1><p>您可以使用 <a href="https://github.com/anyproto/any-sync-tools" target="_blank" rel="noreferrer"><code>any-sync-network</code></a> 工具为节点和网络生成基本配置。</p><h2 id="网络配置选项" tabindex="-1">网络配置选项 <a class="header-anchor" href="#网络配置选项" aria-label="Permalink to &quot;网络配置选项&quot;">​</a></h2><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 必需; 描述 any-sync 网络拓扑</span></span>
<span class="line"><span style="color:#85E89D;">networkId</span><span style="color:#E1E4E8;">: </span><span style="color:#6A737D;"># 必需; 网络公钥</span></span>
<span class="line"><span style="color:#85E89D;">nodes</span><span style="color:#E1E4E8;">:     </span><span style="color:#6A737D;"># 必需; 节点数组</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#85E89D;">peerId</span><span style="color:#E1E4E8;">:    </span><span style="color:#6A737D;"># 必需; 节点的帐户 peer ID</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">addresses</span><span style="color:#E1E4E8;">: </span><span style="color:#6A737D;"># 必需; 节点地址的数组</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">types</span><span style="color:#E1E4E8;">:     </span><span style="color:#6A737D;"># 必需; 节点类型的数组，</span></span>
<span class="line"><span style="color:#E1E4E8;">               </span><span style="color:#6A737D;"># 允许的值: tree（用于同步节点）, file, coordinator</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 必需; 描述 any-sync 网络拓扑</span></span>
<span class="line"><span style="color:#22863A;">networkId</span><span style="color:#24292E;">: </span><span style="color:#6A737D;"># 必需; 网络公钥</span></span>
<span class="line"><span style="color:#22863A;">nodes</span><span style="color:#24292E;">:     </span><span style="color:#6A737D;"># 必需; 节点数组</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#22863A;">peerId</span><span style="color:#24292E;">:    </span><span style="color:#6A737D;"># 必需; 节点的帐户 peer ID</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">addresses</span><span style="color:#24292E;">: </span><span style="color:#6A737D;"># 必需; 节点地址的数组</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">types</span><span style="color:#24292E;">:     </span><span style="color:#6A737D;"># 必需; 节点类型的数组，</span></span>
<span class="line"><span style="color:#24292E;">               </span><span style="color:#6A737D;"># 允许的值: tree（用于同步节点）, file, coordinator</span></span></code></pre></div>`,4),o=[l];function t(c,r,y,i,d,E){return a(),n("div",null,o)}const D=s(p,[["render",t]]);export{_ as __pageData,D as default};
