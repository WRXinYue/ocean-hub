import{_ as e,o as t,c as o,a as n,b as p,w as c,d as s,e as i,r as l}from"./app.aecf66dd.js";const r={},u=n("h1",{id:"\u30A2\u30D5\u309A\u30EA\u4F5C\u6210\u65B9\u5F0F\u3066\u3099\u306E\u30A2\u30AF\u30BB\u30B9\u30C8\u30FC\u30AF\u30F3\u53D6\u5F97\u65B9\u6CD5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u30A2\u30D5\u309A\u30EA\u4F5C\u6210\u65B9\u5F0F\u3066\u3099\u306E\u30A2\u30AF\u30BB\u30B9\u30C8\u30FC\u30AF\u30F3\u53D6\u5F97\u65B9\u6CD5","aria-hidden":"true"},"#"),s(" \u30A2\u30D7\u30EA\u4F5C\u6210\u65B9\u5F0F\u3067\u306E\u30A2\u30AF\u30BB\u30B9\u30C8\u30FC\u30AF\u30F3\u53D6\u5F97\u65B9\u6CD5")],-1),d=n("p",null,[s("MiAuth\u5C0E\u5165\uFF0812.27.0\uFF09\u3088\u308A\u524D\u306E\u3001\u65E7\u6765\u306E\u30A2\u30AF\u30BB\u30B9\u30C8\u30FC\u30AF\u30F3\u53D6\u5F97\u65B9\u6CD5\u306B\u3064\u3044\u3066\u8AAC\u660E\u3057\u307E\u3059\u3002"),n("br"),s(" 12.27.0\u672A\u6E80\u306E\u30D0\u30FC\u30B8\u30E7\u30F3\u306E\u30B5\u30FC\u30D0\u30FC\u3067\u306F\u3053\u306E\u65E7\u6765\u306E\u65B9\u5F0F\u3092\u4F7F\u7528\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002")],-1),k=n("h2",{id:"_1-\u30A2\u30D5\u309A\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u4F5C\u6210",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-\u30A2\u30D5\u309A\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u4F5C\u6210","aria-hidden":"true"},"#"),s(" 1. \u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306E\u4F5C\u6210")],-1),v=n("code",null,"app/create",-1),h=s("\u30A8\u30F3\u30C9\u30DD\u30A4\u30F3\u30C8"),m=s("\u306B\u60C5\u5831\u3092\u9001\u4FE1\u3057\u3001"),b=n("code",null,"appSecret",-1),g=s("\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002"),_=i(`<div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token comment">// \u30A2\u30D7\u30EA\u306E\u540D\u524D</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u30A2\u30D7\u30EA\u306E\u8AAC\u660E</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my test application&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u30A2\u30D7\u30EA\u306E\u30D1\u30FC\u30DF\u30C3\u30B7\u30E7\u30F3</span>
    <span class="token property">&quot;permission&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;write:notes&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u3053\u306E\u6642\u3001<code>callbackUrl</code>\u3067\u304A\u597D\u304D\u306AURL\u3092\u542B\u3081\u308B\u3068\u3001\u6B21\u306E\u30A2\u30AF\u30BB\u30B9\u8A31\u53EF\u64CD\u4F5C\u304C\u7D42\u4E86\u3057\u305F\u3068\u304D\u306B<code>token</code>\u3092\u30AF\u30A8\u30EA\u6587\u5B57\u5217\u306B\u542B\u3081\u306A\u304C\u3089\u305D\u3053\u306B\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u3059\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002</p><h2 id="_2-\u30E6\u30FC\u30B5\u3099\u30FC\u306B\u8A8D\u8A3C\u3055\u305B\u308B" tabindex="-1"><a class="header-anchor" href="#_2-\u30E6\u30FC\u30B5\u3099\u30FC\u306B\u8A8D\u8A3C\u3055\u305B\u308B" aria-hidden="true">#</a> 2. \u30E6\u30FC\u30B6\u30FC\u306B\u8A8D\u8A3C\u3055\u305B\u308B</h2><p><a href="endpoints/auth/session/generate"><code>auth/session/generate</code>\u30A8\u30F3\u30C9\u30DD\u30A4\u30F3\u30C8</a>\u306B<code>appSecret</code>\u3092POST\u3057\u307E\u3059\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;appSecret&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fAb12cD34Ef56gH78Ij16kL32Mn64oPf&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>token</code>\uFF08\u3053\u3053\u3067\u306F\u4EEE\u306B<code>798b9f6e-248d-43a7-a919-fabc664027f1</code>\uFF09\u3068<code>url</code>\u3092\u8FD4\u3057\u3066\u304F\u308B\u306E\u3067\u3001\u307E\u305A\u306F\u3053\u306Eurl\u306B\u30A6\u30A7\u30D6\u30D6\u30E9\u30A6\u30B6\u3067\u30A2\u30AF\u30BB\u30B9\u3057\u300C\u30A2\u30AF\u30BB\u30B9\u3092\u8A31\u53EF\u300D\u3092\u9078\u629E\u3002</p><h2 id="_3-accesstoken\u3092\u554F\u3044\u5408\u308F\u305B\u308B" tabindex="-1"><a class="header-anchor" href="#_3-accesstoken\u3092\u554F\u3044\u5408\u308F\u305B\u308B" aria-hidden="true">#</a> 3. accessToken\u3092\u554F\u3044\u5408\u308F\u305B\u308B</h2><p>2\u304C\u7D42\u308F\u3063\u305F\u3053\u3068\u304C\u78BA\u8A8D\u3067\u304D\u305F\u3089\u3001<a href="endpoints/auth/session/userkey"><code>auth/session/userkey</code>\u30A8\u30F3\u30C9\u30DD\u30A4\u30F3\u30C8</a>\u306B<code>appSecret</code>\u3068\u5148\u307B\u3069\u306E<code>token</code>\u3092POST\u3057\u307E\u3059\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;appSecret&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fAb12cD34Ef56gH78Ij16kL32Mn64oPf&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;798b9f6e-248d-43a7-a919-fabc664027f1&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u3053\u3053\u3067\u53D6\u5F97\u3067\u304D\u308B\u6587\u5B57\u5217\u306F<code>accessToken</code>\u3068\u547C\u3070\u308C\u307E\u3059\u3002<code>accessToken</code>\u306F\u4E00\u5EA6\u9650\u308A\u3057\u304B\u53D6\u5F97\u3067\u304D\u307E\u305B\u3093\u3002</p><h2 id="_4-i\u3092\u751F\u6210" tabindex="-1"><a class="header-anchor" href="#_4-i\u3092\u751F\u6210" aria-hidden="true">#</a> 4. i\u3092\u751F\u6210</h2><p><code>i</code>\u306F\u3001Node.js\u3067\u3042\u308C\u3070\u4EE5\u4E0B\u306E\u3088\u3046\u306A\u30B3\u30FC\u30C9\u3067\u751F\u6210\u3067\u304D\u3001\u8A2D\u5B9A\u753B\u9762\u3067\u53D6\u5F97\u3059\u308B\u3082\u306E\u3068\u306F\u9055\u3063\u306664\u6841\u306E16\u9032\u6570\u3068\u306A\u308A\u307E\u3059\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> crypto <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;crypto&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> i <span class="token operator">=</span> crypto<span class="token punctuation">.</span><span class="token function">createHash</span><span class="token punctuation">(</span><span class="token string">&quot;sha256&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>accessToken <span class="token operator">+</span> appSecret<span class="token punctuation">,</span> <span class="token string">&quot;utf8&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">digest</span><span class="token punctuation">(</span><span class="token string">&quot;hex&quot;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-\u5B9F\u969B\u306B\u30C6\u30B9\u30C8\u3059\u308B" tabindex="-1"><a class="header-anchor" href="#_5-\u5B9F\u969B\u306B\u30C6\u30B9\u30C8\u3059\u308B" aria-hidden="true">#</a> 5. \u5B9F\u969B\u306B\u30C6\u30B9\u30C8\u3059\u308B</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&quot;https://misskey.io/api/notes/create&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;POST&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">i</span><span class="token operator">:</span> <span class="token string">&quot;/* \u3053\u3053\u306Bi\u3092\u5165\u529B */&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;Hello Misskey API World with My Application!&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&#39;Content-Type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;application/json&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token literal-property property">credentials</span><span class="token operator">:</span> <span class="token string">&#39;omit&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15);function q(f,y){const a=l("RouterLink");return t(),o("div",null,[u,d,k,n("p",null,[p(a,{to:"/it/docs/api/endpoints/app/create.html"},{default:c(()=>[v,h]),_:1}),m,b,g]),_])}var x=e(r,[["render",q],["__file","app.html.vue"]]);export{x as default};
