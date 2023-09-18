import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.8f83280a.js";const d=JSON.parse('{"title":"配置","description":"","frontmatter":{},"headers":[],"relativePath":"zh/docs/tech/configuration.md","filePath":"zh/docs/tech/configuration.md","lastUpdated":1695022576000}'),p={name:"zh/docs/tech/configuration.md"},o=l(`<h1 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h1><p>您可以使用 <a href="https://github.com/anyproto/any-sync-tools" target="_blank" rel="noreferrer"><code>any-sync-network</code></a> 工具为您的节点生成基本配置。</p><h2 id="通用节点配置选项" tabindex="-1">通用节点配置选项 <a class="header-anchor" href="#通用节点配置选项" aria-label="Permalink to &quot;通用节点配置选项&quot;">​</a></h2><p>这些选项对于所有类型的 Any-Sync 节点都是通用的。</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 必需; 用于在网络内传播的账户</span></span>
<span class="line"><span style="color:#85E89D;">account</span><span style="color:#E1E4E8;">: </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">peerId</span><span style="color:#E1E4E8;">:          </span><span style="color:#6A737D;"># 必需; 公钥</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">peerKey</span><span style="color:#E1E4E8;">:         </span><span style="color:#6A737D;"># 必需; 私钥</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">signingKey</span><span style="color:#E1E4E8;">:      </span><span style="color:#6A737D;"># 必需; 私钥,</span></span>
<span class="line"><span style="color:#E1E4E8;">                   </span><span style="color:#6A737D;"># 协调器节点使用网络的私钥</span></span>
<span class="line"><span style="color:#E1E4E8;">                   </span><span style="color:#6A737D;"># 同步和文件节点使用它们的 peerKey</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 必需; tcp/yamux 网络配置</span></span>
<span class="line"><span style="color:#85E89D;">yamux</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">listenAddrs</span><span style="color:#E1E4E8;">:     </span><span style="color:#6A737D;"># 必需; 节点应监听的地址数组</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">writeTimeoutSec</span><span style="color:#E1E4E8;">: </span><span style="color:#6A737D;"># 必需</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">dialTimeoutSec</span><span style="color:#E1E4E8;">:  </span><span style="color:#6A737D;"># 必需</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 必需; 描述 any-sync 网络拓扑</span></span>
<span class="line"><span style="color:#85E89D;">network</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">id</span><span style="color:#E1E4E8;">:              </span><span style="color:#6A737D;"># 必需; 配置 ID</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">networkId</span><span style="color:#E1E4E8;">:       </span><span style="color:#6A737D;"># 必需; 网络公钥</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">nodes</span><span style="color:#E1E4E8;">:           </span><span style="color:#6A737D;"># 必需; 节点数组</span></span>
<span class="line"><span style="color:#E1E4E8;">    - </span><span style="color:#85E89D;">peerId</span><span style="color:#E1E4E8;">:        </span><span style="color:#6A737D;"># 必需; 节点的账户 peer ID</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">addresses</span><span style="color:#E1E4E8;">:     </span><span style="color:#6A737D;"># 必需; 节点地址数组</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">types</span><span style="color:#E1E4E8;">:         </span><span style="color:#6A737D;"># 必需; 节点类型数组,</span></span>
<span class="line"><span style="color:#E1E4E8;">                     </span><span style="color:#6A737D;"># 允许的值: tree（对于同步节点）, file, coordinator</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">creationTime</span><span style="color:#E1E4E8;">:    </span><span style="color:#6A737D;"># 必需; 配置的创建时间</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 必需; 存储当前配置的路径</span></span>
<span class="line"><span style="color:#85E89D;">networkStorePath</span><span style="color:#E1E4E8;">: </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 可选; dRPC 参数</span></span>
<span class="line"><span style="color:#85E89D;">drpc</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">stream</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">maxMsgSizeMb</span><span style="color:#E1E4E8;">:  </span><span style="color:#6A737D;"># 必需</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 可选; Prometheus 监控监听器配置</span></span>
<span class="line"><span style="color:#85E89D;">metric</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">addr</span><span style="color:#E1E4E8;">:            </span><span style="color:#6A737D;"># 可选; Prometheus 监控监听地址</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 必需; 用于在网络内传播的账户</span></span>
<span class="line"><span style="color:#22863A;">account</span><span style="color:#24292E;">: </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">peerId</span><span style="color:#24292E;">:          </span><span style="color:#6A737D;"># 必需; 公钥</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">peerKey</span><span style="color:#24292E;">:         </span><span style="color:#6A737D;"># 必需; 私钥</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">signingKey</span><span style="color:#24292E;">:      </span><span style="color:#6A737D;"># 必需; 私钥,</span></span>
<span class="line"><span style="color:#24292E;">                   </span><span style="color:#6A737D;"># 协调器节点使用网络的私钥</span></span>
<span class="line"><span style="color:#24292E;">                   </span><span style="color:#6A737D;"># 同步和文件节点使用它们的 peerKey</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 必需; tcp/yamux 网络配置</span></span>
<span class="line"><span style="color:#22863A;">yamux</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">listenAddrs</span><span style="color:#24292E;">:     </span><span style="color:#6A737D;"># 必需; 节点应监听的地址数组</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">writeTimeoutSec</span><span style="color:#24292E;">: </span><span style="color:#6A737D;"># 必需</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">dialTimeoutSec</span><span style="color:#24292E;">:  </span><span style="color:#6A737D;"># 必需</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 必需; 描述 any-sync 网络拓扑</span></span>
<span class="line"><span style="color:#22863A;">network</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">id</span><span style="color:#24292E;">:              </span><span style="color:#6A737D;"># 必需; 配置 ID</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">networkId</span><span style="color:#24292E;">:       </span><span style="color:#6A737D;"># 必需; 网络公钥</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">nodes</span><span style="color:#24292E;">:           </span><span style="color:#6A737D;"># 必需; 节点数组</span></span>
<span class="line"><span style="color:#24292E;">    - </span><span style="color:#22863A;">peerId</span><span style="color:#24292E;">:        </span><span style="color:#6A737D;"># 必需; 节点的账户 peer ID</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">addresses</span><span style="color:#24292E;">:     </span><span style="color:#6A737D;"># 必需; 节点地址数组</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">types</span><span style="color:#24292E;">:         </span><span style="color:#6A737D;"># 必需; 节点类型数组,</span></span>
<span class="line"><span style="color:#24292E;">                     </span><span style="color:#6A737D;"># 允许的值: tree（对于同步节点）, file, coordinator</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">creationTime</span><span style="color:#24292E;">:    </span><span style="color:#6A737D;"># 必需; 配置的创建时间</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 必需; 存储当前配置的路径</span></span>
<span class="line"><span style="color:#22863A;">networkStorePath</span><span style="color:#24292E;">: </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 可选; dRPC 参数</span></span>
<span class="line"><span style="color:#22863A;">drpc</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">stream</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">maxMsgSizeMb</span><span style="color:#24292E;">:  </span><span style="color:#6A737D;"># 必需</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 可选; Prometheus 监控监听器配置</span></span>
<span class="line"><span style="color:#22863A;">metric</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">addr</span><span style="color:#24292E;">:            </span><span style="color:#6A737D;"># 可选; Prometheus 监控监听地址</span></span></code></pre></div><h2 id="协调器节点配置选项" tabindex="-1">协调器节点配置选项 <a class="header-anchor" href="#协调器节点配置选项" aria-label="Permalink to &quot;协调器节点配置选项&quot;">​</a></h2><p>这些选项对 Any-Sync 协调器节点特定。</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 必需; MongoDB 配置</span></span>
<span class="line"><span style="color:#85E89D;">mongo</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">connect</span><span style="color:#E1E4E8;">:            </span><span style="color:#6A737D;"># 必需; MongoDB 连接 URL</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">database</span><span style="color:#E1E4E8;">:           </span><span style="color:#6A737D;"># 必需; MongoDB 数据库名称</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 必需; 空间状态更新配置</span></span>
<span class="line"><span style="color:#85E89D;">spaceStatus</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">runSeconds</span><span style="color:#E1E4E8;">:         </span><span style="color:#6A737D;"># 必需; 空间状态更新频率</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">deletionPeriodDays</span><span style="color:#E1E4E8;">: </span><span style="color:#6A737D;"># 必需; 空间数据删除周期</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 必需; MongoDB 配置</span></span>
<span class="line"><span style="color:#22863A;">mongo</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">connect</span><span style="color:#24292E;">:            </span><span style="color:#6A737D;"># 必需; MongoDB 连接 URL</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">database</span><span style="color:#24292E;">:           </span><span style="color:#6A737D;"># 必需; MongoDB 数据库名称</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 必需; 空间状态更新配置</span></span>
<span class="line"><span style="color:#22863A;">spaceStatus</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">runSeconds</span><span style="color:#24292E;">:         </span><span style="color:#6A737D;"># 必需; 空间状态更新频率</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">deletionPeriodDays</span><span style="color:#24292E;">: </span><span style="color:#6A737D;"># 必需; 空间数据删除周期</span></span></code></pre></div><h2 id="同步节点配置选项" tabindex="-1">同步节点配置选项 <a class="header-anchor" href="#同步节点配置选项" aria-label="Permalink to &quot;同步节点配置选项&quot;">​</a></h2><p>这些选项对 Any-Sync 同步节点特定。</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 必需; 网络配置更新间隔</span></span>
<span class="line"><span style="color:#6A737D;"># 描述节点从协调器节点请求网络配置的频率</span></span>
<span class="line"><span style="color:#85E89D;">networkUpdateIntervalSec</span><span style="color:#E1E4E8;">: </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 必需; 空间缓存设置</span></span>
<span class="line"><span style="color:#85E89D;">space</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">gcTTL</span><span style="color:#E1E4E8;">:             </span><span style="color:#6A737D;"># 必需; 空间缓存在内存中的生存时间</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">syncPeriod</span><span style="color:#E1E4E8;">:        </span><span style="color:#6A737D;"># 必需</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 必需; 空间数据存储配置</span></span>
<span class="line"><span style="color:#85E89D;">storage</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">path</span><span style="color:#E1E4E8;">:              </span><span style="color:#6A737D;"># 必需; 本地空间数据存储路径</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 必需; 直接节点间（无协调器）同步配置</span></span>
<span class="line"><span style="color:#85E89D;">nodeSync</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">hotSync</span><span style="color:#E1E4E8;">:           </span><span style="color:#6A737D;"># 必需</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">simultaneousRequests</span><span style="color:#E1E4E8;">: </span><span style="color:#6A737D;"># 必需</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">syncOnStart</span><span style="color:#E1E4E8;">:       </span><span style="color:#6A737D;"># 必需; 标志（布尔值）</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">periodicSyncHours</span><span style="color:#E1E4E8;">: </span><span style="color:#6A737D;"># 必需</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 必需; 日志配置</span></span>
<span class="line"><span style="color:#85E89D;">log</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">production</span><span style="color:#E1E4E8;">:        </span><span style="color:#6A737D;"># 必需; 标志（布尔值）</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">defaultLevel</span><span style="color:#E1E4E8;">:      </span><span style="color:#6A737D;"># 必需</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">namedLevels</span><span style="color:#E1E4E8;">:       </span><span style="color:#6A737D;"># 必需</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 可选; 调试 API 监听器配置，不得公开</span></span>
<span class="line"><span style="color:#85E89D;">apiServer</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">listenAddr</span><span style="color:#E1E4E8;">:        </span><span style="color:#6A737D;"># 可选; 调试 API 监听地址</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 必需; 网络配置更新间隔</span></span>
<span class="line"><span style="color:#6A737D;"># 描述节点从协调器节点请求网络配置的频率</span></span>
<span class="line"><span style="color:#22863A;">networkUpdateIntervalSec</span><span style="color:#24292E;">: </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 必需; 空间缓存设置</span></span>
<span class="line"><span style="color:#22863A;">space</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">gcTTL</span><span style="color:#24292E;">:             </span><span style="color:#6A737D;"># 必需; 空间缓存在内存中的生存时间</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">syncPeriod</span><span style="color:#24292E;">:        </span><span style="color:#6A737D;"># 必需</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 必需; 空间数据存储配置</span></span>
<span class="line"><span style="color:#22863A;">storage</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">path</span><span style="color:#24292E;">:              </span><span style="color:#6A737D;"># 必需; 本地空间数据存储路径</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 必需; 直接节点间（无协调器）同步配置</span></span>
<span class="line"><span style="color:#22863A;">nodeSync</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">hotSync</span><span style="color:#24292E;">:           </span><span style="color:#6A737D;"># 必需</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">simultaneousRequests</span><span style="color:#24292E;">: </span><span style="color:#6A737D;"># 必需</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">syncOnStart</span><span style="color:#24292E;">:       </span><span style="color:#6A737D;"># 必需; 标志（布尔值）</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">periodicSyncHours</span><span style="color:#24292E;">: </span><span style="color:#6A737D;"># 必需</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 必需; 日志配置</span></span>
<span class="line"><span style="color:#22863A;">log</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">production</span><span style="color:#24292E;">:        </span><span style="color:#6A737D;"># 必需; 标志（布尔值）</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">defaultLevel</span><span style="color:#24292E;">:      </span><span style="color:#6A737D;"># 必需</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">namedLevels</span><span style="color:#24292E;">:       </span><span style="color:#6A737D;"># 必需</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 可选; 调试 API 监听器配置，不得公开</span></span>
<span class="line"><span style="color:#22863A;">apiServer</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">listenAddr</span><span style="color:#24292E;">:        </span><span style="color:#6A737D;"># 可选; 调试 API 监听地址</span></span></code></pre></div><h2 id="文件节点配置选项" tabindex="-1">文件节点配置选项 <a class="header-anchor" href="#文件节点配置选项" aria-label="Permalink to &quot;文件节点配置选项&quot;">​</a></h2><p>这些选项对 Any-Sync 文件节点特定。</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 必需; S3 配置</span></span>
<span class="line"><span style="color:#85E89D;">s3Store</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">endpoints</span><span style="color:#E1E4E8;">:  </span><span style="color:#6A737D;"># 可选; 与 S3 兼容的对象存储端点</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">region</span><span style="color:#E1E4E8;">:     </span><span style="color:#6A737D;"># 必需; S3 区域名称</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">profile</span><span style="color:#E1E4E8;">:    </span><span style="color:#6A737D;"># 必需; S3 配置文件名称</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">bucket</span><span style="color:#E1E4E8;">:     </span><span style="color:#6A737D;"># 必需; S3 存储桶名称</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">maxThreads</span><span style="color:#E1E4E8;">: </span><span style="color:#6A737D;"># 必需; 最大线程数量</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 必需; Redis 配置</span></span>
<span class="line"><span style="color:#85E89D;">redis</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">isCluster</span><span style="color:#E1E4E8;">:  </span><span style="color:#6A737D;"># 必需; Redis 集群标志（布尔值）</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">url</span><span style="color:#E1E4E8;">:        </span><span style="color:#6A737D;"># 必需; Redis 连接 URL</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 必需; 网络配置更新间隔</span></span>
<span class="line"><span style="color:#6A737D;"># 描述节点从协调器节点请求网络配置的频率</span></span>
<span class="line"><span style="color:#85E89D;">networkUpdateIntervalSec</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 可选; 文件节点开发模式存储路径</span></span>
<span class="line"><span style="color:#6A737D;"># 文件节点可以在开发模式下构建（\`make build-dev\`），绕过 S3，不可靠</span></span>
<span class="line"><span style="color:#85E89D;">fileDevStore</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">path</span><span style="color:#E1E4E8;">:       </span><span style="color:#6A737D;"># 可选; 本地文件存储路径</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 必需; S3 配置</span></span>
<span class="line"><span style="color:#22863A;">s3Store</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">endpoints</span><span style="color:#24292E;">:  </span><span style="color:#6A737D;"># 可选; 与 S3 兼容的对象存储端点</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">region</span><span style="color:#24292E;">:     </span><span style="color:#6A737D;"># 必需; S3 区域名称</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">profile</span><span style="color:#24292E;">:    </span><span style="color:#6A737D;"># 必需; S3 配置文件名称</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">bucket</span><span style="color:#24292E;">:     </span><span style="color:#6A737D;"># 必需; S3 存储桶名称</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">maxThreads</span><span style="color:#24292E;">: </span><span style="color:#6A737D;"># 必需; 最大线程数量</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 必需; Redis 配置</span></span>
<span class="line"><span style="color:#22863A;">redis</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">isCluster</span><span style="color:#24292E;">:  </span><span style="color:#6A737D;"># 必需; Redis 集群标志（布尔值）</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">url</span><span style="color:#24292E;">:        </span><span style="color:#6A737D;"># 必需; Redis 连接 URL</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 必需; 网络配置更新间隔</span></span>
<span class="line"><span style="color:#6A737D;"># 描述节点从协调器节点请求网络配置的频率</span></span>
<span class="line"><span style="color:#22863A;">networkUpdateIntervalSec</span><span style="color:#24292E;">:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 可选; 文件节点开发模式存储路径</span></span>
<span class="line"><span style="color:#6A737D;"># 文件节点可以在开发模式下构建（\`make build-dev\`），绕过 S3，不可靠</span></span>
<span class="line"><span style="color:#22863A;">fileDevStore</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">path</span><span style="color:#24292E;">:       </span><span style="color:#6A737D;"># 可选; 本地文件存储路径</span></span></code></pre></div>`,14),e=[o];function c(t,r,y,E,i,D){return n(),a("div",null,e)}const h=s(p,[["render",c]]);export{d as __pageData,h as default};
