import{_ as n,o as s,c as a,e}from"./app.1e729f30.js";const t={},l=e(`<h1 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h1><p>\u60A8\u53EF\u4EE5\u4F7F\u7528 <a href="https://github.com/anyproto/any-sync-tools" target="_blank" rel="noopener noreferrer"><code>any-sync-network</code></a> \u5DE5\u5177\u4E3A\u60A8\u7684\u8282\u70B9\u751F\u6210\u57FA\u672C\u914D\u7F6E\u3002</p><h2 id="\u901A\u7528\u8282\u70B9\u914D\u7F6E\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u901A\u7528\u8282\u70B9\u914D\u7F6E\u9009\u9879" aria-hidden="true">#</a> \u901A\u7528\u8282\u70B9\u914D\u7F6E\u9009\u9879</h2><p>\u8FD9\u4E9B\u9009\u9879\u5BF9\u4E8E\u6240\u6709\u7C7B\u578B\u7684 Any-Sync \u8282\u70B9\u90FD\u662F\u901A\u7528\u7684\u3002</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># \u5FC5\u9700; \u7528\u4E8E\u5728\u7F51\u7EDC\u5185\u4F20\u64AD\u7684\u8D26\u6237</span>
<span class="token key atrule">account</span><span class="token punctuation">:</span> 
  <span class="token key atrule">peerId</span><span class="token punctuation">:</span>          <span class="token comment"># \u5FC5\u9700; \u516C\u94A5</span>
  <span class="token key atrule">peerKey</span><span class="token punctuation">:</span>         <span class="token comment"># \u5FC5\u9700; \u79C1\u94A5</span>
  <span class="token key atrule">signingKey</span><span class="token punctuation">:</span>      <span class="token comment"># \u5FC5\u9700; \u79C1\u94A5,</span>
                   <span class="token comment"># \u534F\u8C03\u5668\u8282\u70B9\u4F7F\u7528\u7F51\u7EDC\u7684\u79C1\u94A5</span>
                   <span class="token comment"># \u540C\u6B65\u548C\u6587\u4EF6\u8282\u70B9\u4F7F\u7528\u5B83\u4EEC\u7684 peerKey</span>

<span class="token comment"># \u5FC5\u9700; tcp/yamux \u7F51\u7EDC\u914D\u7F6E</span>
<span class="token key atrule">yamux</span><span class="token punctuation">:</span>
  <span class="token key atrule">listenAddrs</span><span class="token punctuation">:</span>     <span class="token comment"># \u5FC5\u9700; \u8282\u70B9\u5E94\u76D1\u542C\u7684\u5730\u5740\u6570\u7EC4</span>
  <span class="token key atrule">writeTimeoutSec</span><span class="token punctuation">:</span> <span class="token comment"># \u5FC5\u9700</span>
  <span class="token key atrule">dialTimeoutSec</span><span class="token punctuation">:</span>  <span class="token comment"># \u5FC5\u9700</span>

<span class="token comment"># \u5FC5\u9700; \u63CF\u8FF0 any-sync \u7F51\u7EDC\u62D3\u6251</span>
<span class="token key atrule">network</span><span class="token punctuation">:</span>
  <span class="token key atrule">id</span><span class="token punctuation">:</span>              <span class="token comment"># \u5FC5\u9700; \u914D\u7F6E ID</span>
  <span class="token key atrule">networkId</span><span class="token punctuation">:</span>       <span class="token comment"># \u5FC5\u9700; \u7F51\u7EDC\u516C\u94A5</span>
  <span class="token key atrule">nodes</span><span class="token punctuation">:</span>           <span class="token comment"># \u5FC5\u9700; \u8282\u70B9\u6570\u7EC4</span>
    <span class="token punctuation">-</span> <span class="token key atrule">peerId</span><span class="token punctuation">:</span>        <span class="token comment"># \u5FC5\u9700; \u8282\u70B9\u7684\u8D26\u6237 peer ID</span>
      <span class="token key atrule">addresses</span><span class="token punctuation">:</span>     <span class="token comment"># \u5FC5\u9700; \u8282\u70B9\u5730\u5740\u6570\u7EC4</span>
      <span class="token key atrule">types</span><span class="token punctuation">:</span>         <span class="token comment"># \u5FC5\u9700; \u8282\u70B9\u7C7B\u578B\u6570\u7EC4,</span>
                     <span class="token comment"># \u5141\u8BB8\u7684\u503C: tree\uFF08\u5BF9\u4E8E\u540C\u6B65\u8282\u70B9\uFF09, file, coordinator</span>
  <span class="token key atrule">creationTime</span><span class="token punctuation">:</span>    <span class="token comment"># \u5FC5\u9700; \u914D\u7F6E\u7684\u521B\u5EFA\u65F6\u95F4</span>

<span class="token comment"># \u5FC5\u9700; \u5B58\u50A8\u5F53\u524D\u914D\u7F6E\u7684\u8DEF\u5F84</span>
<span class="token key atrule">networkStorePath</span><span class="token punctuation">:</span> 

<span class="token comment"># \u53EF\u9009; dRPC \u53C2\u6570</span>
<span class="token key atrule">drpc</span><span class="token punctuation">:</span>
  <span class="token key atrule">stream</span><span class="token punctuation">:</span>
    <span class="token key atrule">maxMsgSizeMb</span><span class="token punctuation">:</span>  <span class="token comment"># \u5FC5\u9700</span>

<span class="token comment"># \u53EF\u9009; Prometheus \u76D1\u63A7\u76D1\u542C\u5668\u914D\u7F6E</span>
<span class="token key atrule">metric</span><span class="token punctuation">:</span>
  <span class="token key atrule">addr</span><span class="token punctuation">:</span>            <span class="token comment"># \u53EF\u9009; Prometheus \u76D1\u63A7\u76D1\u542C\u5730\u5740</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u534F\u8C03\u5668\u8282\u70B9\u914D\u7F6E\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u534F\u8C03\u5668\u8282\u70B9\u914D\u7F6E\u9009\u9879" aria-hidden="true">#</a> \u534F\u8C03\u5668\u8282\u70B9\u914D\u7F6E\u9009\u9879</h2><p>\u8FD9\u4E9B\u9009\u9879\u5BF9 Any-Sync \u534F\u8C03\u5668\u8282\u70B9\u7279\u5B9A\u3002</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># \u5FC5\u9700; MongoDB \u914D\u7F6E</span>
<span class="token key atrule">mongo</span><span class="token punctuation">:</span>
  <span class="token key atrule">connect</span><span class="token punctuation">:</span>            <span class="token comment"># \u5FC5\u9700; MongoDB \u8FDE\u63A5 URL</span>
  <span class="token key atrule">database</span><span class="token punctuation">:</span>           <span class="token comment"># \u5FC5\u9700; MongoDB \u6570\u636E\u5E93\u540D\u79F0</span>

<span class="token comment"># \u5FC5\u9700; \u7A7A\u95F4\u72B6\u6001\u66F4\u65B0\u914D\u7F6E</span>
<span class="token key atrule">spaceStatus</span><span class="token punctuation">:</span>
  <span class="token key atrule">runSeconds</span><span class="token punctuation">:</span>         <span class="token comment"># \u5FC5\u9700; \u7A7A\u95F4\u72B6\u6001\u66F4\u65B0\u9891\u7387</span>
  <span class="token key atrule">deletionPeriodDays</span><span class="token punctuation">:</span> <span class="token comment"># \u5FC5\u9700; \u7A7A\u95F4\u6570\u636E\u5220\u9664\u5468\u671F</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u540C\u6B65\u8282\u70B9\u914D\u7F6E\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u540C\u6B65\u8282\u70B9\u914D\u7F6E\u9009\u9879" aria-hidden="true">#</a> \u540C\u6B65\u8282\u70B9\u914D\u7F6E\u9009\u9879</h2><p>\u8FD9\u4E9B\u9009\u9879\u5BF9 Any-Sync \u540C\u6B65\u8282\u70B9\u7279\u5B9A\u3002</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># \u5FC5\u9700; \u7F51\u7EDC\u914D\u7F6E\u66F4\u65B0\u95F4\u9694</span>
<span class="token comment"># \u63CF\u8FF0\u8282\u70B9\u4ECE\u534F\u8C03\u5668\u8282\u70B9\u8BF7\u6C42\u7F51\u7EDC\u914D\u7F6E\u7684\u9891\u7387</span>
<span class="token key atrule">networkUpdateIntervalSec</span><span class="token punctuation">:</span> 

<span class="token comment"># \u5FC5\u9700; \u7A7A\u95F4\u7F13\u5B58\u8BBE\u7F6E</span>
<span class="token key atrule">space</span><span class="token punctuation">:</span>
  <span class="token key atrule">gcTTL</span><span class="token punctuation">:</span>             <span class="token comment"># \u5FC5\u9700; \u7A7A\u95F4\u7F13\u5B58\u5728\u5185\u5B58\u4E2D\u7684\u751F\u5B58\u65F6\u95F4</span>
  <span class="token key atrule">syncPeriod</span><span class="token punctuation">:</span>        <span class="token comment"># \u5FC5\u9700</span>

<span class="token comment"># \u5FC5\u9700; \u7A7A\u95F4\u6570\u636E\u5B58\u50A8\u914D\u7F6E</span>
<span class="token key atrule">storage</span><span class="token punctuation">:</span>
  <span class="token key atrule">path</span><span class="token punctuation">:</span>              <span class="token comment"># \u5FC5\u9700; \u672C\u5730\u7A7A\u95F4\u6570\u636E\u5B58\u50A8\u8DEF\u5F84</span>

<span class="token comment"># \u5FC5\u9700; \u76F4\u63A5\u8282\u70B9\u95F4\uFF08\u65E0\u534F\u8C03\u5668\uFF09\u540C\u6B65\u914D\u7F6E</span>
<span class="token key atrule">nodeSync</span><span class="token punctuation">:</span>
  <span class="token key atrule">hotSync</span><span class="token punctuation">:</span>           <span class="token comment"># \u5FC5\u9700</span>
    <span class="token key atrule">simultaneousRequests</span><span class="token punctuation">:</span> <span class="token comment"># \u5FC5\u9700</span>
  <span class="token key atrule">syncOnStart</span><span class="token punctuation">:</span>       <span class="token comment"># \u5FC5\u9700; \u6807\u5FD7\uFF08\u5E03\u5C14\u503C\uFF09</span>
  <span class="token key atrule">periodicSyncHours</span><span class="token punctuation">:</span> <span class="token comment"># \u5FC5\u9700</span>

<span class="token comment"># \u5FC5\u9700; \u65E5\u5FD7\u914D\u7F6E</span>
<span class="token key atrule">log</span><span class="token punctuation">:</span>
  <span class="token key atrule">production</span><span class="token punctuation">:</span>        <span class="token comment"># \u5FC5\u9700; \u6807\u5FD7\uFF08\u5E03\u5C14\u503C\uFF09</span>
  <span class="token key atrule">defaultLevel</span><span class="token punctuation">:</span>      <span class="token comment"># \u5FC5\u9700</span>
  <span class="token key atrule">namedLevels</span><span class="token punctuation">:</span>       <span class="token comment"># \u5FC5\u9700</span>

<span class="token comment"># \u53EF\u9009; \u8C03\u8BD5 API \u76D1\u542C\u5668\u914D\u7F6E\uFF0C\u4E0D\u5F97\u516C\u5F00</span>
<span class="token key atrule">apiServer</span><span class="token punctuation">:</span>
  <span class="token key atrule">listenAddr</span><span class="token punctuation">:</span>        <span class="token comment"># \u53EF\u9009; \u8C03\u8BD5 API \u76D1\u542C\u5730\u5740</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6587\u4EF6\u8282\u70B9\u914D\u7F6E\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u8282\u70B9\u914D\u7F6E\u9009\u9879" aria-hidden="true">#</a> \u6587\u4EF6\u8282\u70B9\u914D\u7F6E\u9009\u9879</h2><p>\u8FD9\u4E9B\u9009\u9879\u5BF9 Any-Sync \u6587\u4EF6\u8282\u70B9\u7279\u5B9A\u3002</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># \u5FC5\u9700; S3 \u914D\u7F6E</span>
<span class="token key atrule">s3Store</span><span class="token punctuation">:</span>
  <span class="token key atrule">endpoints</span><span class="token punctuation">:</span>  <span class="token comment"># \u53EF\u9009; \u4E0E S3 \u517C\u5BB9\u7684\u5BF9\u8C61\u5B58\u50A8\u7AEF\u70B9</span>
  <span class="token key atrule">region</span><span class="token punctuation">:</span>     <span class="token comment"># \u5FC5\u9700; S3 \u533A\u57DF\u540D\u79F0</span>
  <span class="token key atrule">profile</span><span class="token punctuation">:</span>    <span class="token comment"># \u5FC5\u9700; S3 \u914D\u7F6E\u6587\u4EF6\u540D\u79F0</span>
  <span class="token key atrule">bucket</span><span class="token punctuation">:</span>     <span class="token comment"># \u5FC5\u9700; S3 \u5B58\u50A8\u6876\u540D\u79F0</span>
  <span class="token key atrule">maxThreads</span><span class="token punctuation">:</span> <span class="token comment"># \u5FC5\u9700; \u6700\u5927\u7EBF\u7A0B\u6570\u91CF</span>

<span class="token comment"># \u5FC5\u9700; Redis \u914D\u7F6E</span>
<span class="token key atrule">redis</span><span class="token punctuation">:</span>
  <span class="token key atrule">isCluster</span><span class="token punctuation">:</span>  <span class="token comment"># \u5FC5\u9700; Redis \u96C6\u7FA4\u6807\u5FD7\uFF08\u5E03\u5C14\u503C\uFF09</span>
  <span class="token key atrule">url</span><span class="token punctuation">:</span>        <span class="token comment"># \u5FC5\u9700; Redis \u8FDE\u63A5 URL</span>

<span class="token comment"># \u5FC5\u9700; \u7F51\u7EDC\u914D\u7F6E\u66F4\u65B0\u95F4\u9694</span>
<span class="token comment"># \u63CF\u8FF0\u8282\u70B9\u4ECE\u534F\u8C03\u5668\u8282\u70B9\u8BF7\u6C42\u7F51\u7EDC\u914D\u7F6E\u7684\u9891\u7387</span>
<span class="token key atrule">networkUpdateIntervalSec</span><span class="token punctuation">:</span>

<span class="token comment"># \u53EF\u9009; \u6587\u4EF6\u8282\u70B9\u5F00\u53D1\u6A21\u5F0F\u5B58\u50A8\u8DEF\u5F84</span>
<span class="token comment"># \u6587\u4EF6\u8282\u70B9\u53EF\u4EE5\u5728\u5F00\u53D1\u6A21\u5F0F\u4E0B\u6784\u5EFA\uFF08\`make build-dev\`\uFF09\uFF0C\u7ED5\u8FC7 S3\uFF0C\u4E0D\u53EF\u9760</span>
<span class="token key atrule">fileDevStore</span><span class="token punctuation">:</span>
  <span class="token key atrule">path</span><span class="token punctuation">:</span>       <span class="token comment"># \u53EF\u9009; \u672C\u5730\u6587\u4EF6\u5B58\u50A8\u8DEF\u5F84</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),c=[l];function p(i,o){return s(),a("div",null,c)}var d=n(t,[["render",p],["__file","configuration.html.vue"]]);export{d as default};
