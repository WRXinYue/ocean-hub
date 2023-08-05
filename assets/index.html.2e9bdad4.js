import{_ as e,r as p,o as t,c as i,a as o,d as n,b as r,w as l,e as s}from"./app.1e729f30.js";const c={},d=s(`<h1 id="\u6D41\u5A92\u4F53\u5E94\u7528\u7A0B\u5E8F\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u6D41\u5A92\u4F53\u5E94\u7528\u7A0B\u5E8F\u63A5\u53E3" aria-hidden="true">#</a> \u6D41\u5A92\u4F53\u5E94\u7528\u7A0B\u5E8F\u63A5\u53E3</h1><div class="custom-container tip"><i class="fas fa-info"></i><p>\u60A8\u5E94\u8BE5\u5148\u9605\u8BFB[Ocean API \u6587\u6863]\uFF08.../index.md\uFF09\u3002</p></div><p>\u6D41\u5E94\u7528\u7A0B\u5E8F\u63A5\u53E3\u63D0\u4F9B\u5B9E\u65F6\u4FE1\u606F\uFF08\u5982\u65F6\u95F4\u8F74\u4E0A\u7684\u65B0\u5E16\u5B50\u3001\u53CD\u5E94\u3001\u5173\u6CE8\u8005\u7B49\uFF09\u548C\u5176\u4ED6\u5404\u79CD\u64CD\u4F5C\u3002</p><h2 id="\u8FDE\u63A5\u5230\u6D41\u5A92\u4F53\u3002" tabindex="-1"><a class="header-anchor" href="#\u8FDE\u63A5\u5230\u6D41\u5A92\u4F53\u3002" aria-hidden="true">#</a> \u8FDE\u63A5\u5230\u6D41\u5A92\u4F53\u3002</h2><p>\u8981\u4F7F\u7528\u6D41\u5A92\u4F53\u5E94\u7528\u7A0B\u5E8F\u63A5\u53E3\uFF0C\u5FC5\u987B\u4F7F\u7528<strong>websocket</strong>\u8FDE\u63A5\u5230 Ocean \u670D\u52A1\u5668\u3002</p><p>websocket URL \u5982\u4E0B</p><div class="language-text ext-text"><pre class="language-text"><code>wss://{host}/streaming?i={token}
</code></pre></div><p>\u5176\u4E2D</p><ul><li><code>{host}</code>\u662F\u8981\u8FDE\u63A5\u7684\u5B9E\u4F8B\u7684\u4E3B\u673A\u3002</li><li><code>{token}</code>\u662F\u7528\u6237\u7684\u8BBF\u95EE\u4EE4\u724C\u3002</li></ul><div class="custom-container tip"><i class="fas fa-info"></i><p>\u60A8\u4E5F\u53EF\u4EE5\u5728\u6CA1\u6709\u8BBF\u95EE\u4EE4\u724C\u7684\u60C5\u51B5\u4E0B\u8FDB\u884C\u8FDE\u63A5\uFF0C\u4F46\u8FD9\u5C06\u9650\u5236\u60A8\u63A5\u6536\u7684\u4FE1\u606F\u548C\u6267\u884C\u7684\u64CD\u4F5C\u3002</p></div><p>\u8FDE\u63A5\u5230\u4FE1\u606F\u6D41\u540E\uFF0C\u60A8\u5C31\u53EF\u4EE5\u6309\u4E0B\u6587\u6240\u8FF0\u8BA2\u9605\u5E16\u5B50\uFF0C\u4F46\u5728\u6B64\u9636\u6BB5\u60A8\u8FD8\u4E0D\u80FD\u63A5\u6536\u65F6\u95F4\u8F74\u4E0A\u7684\u65B0\u5E16\u5B50\u3002</p><p>\u8981\u63A5\u6536\u6B64\u7C7B\u4E8B\u4EF6\uFF0C\u60A8\u9700\u8981\u52A0\u5165\u6D41\u4E0A\u7684<strong>\u9891\u9053</strong>\uFF0C\u5982\u4E0B\u6240\u8FF0\u3002</p><p>**\u6240\u6709\u6570\u636E\u90FD\u5E94\u7F16\u7801\u4E3A JSON\u3002</p><h2 id="\u9891\u9053" tabindex="-1"><a class="header-anchor" href="#\u9891\u9053" aria-hidden="true">#</a> \u9891\u9053</h2><p>Ocean \u7684\u6D41 API \u6709\u901A\u9053\u7684\u6982\u5FF5\u3002\u8FD9\u662F\u4E00\u79CD\u5206\u79BB\u53D1\u9001\u548C\u63A5\u6536\u4FE1\u606F\u7684\u673A\u5236\u3002 \u901A\u8FC7\u52A0\u5165\u6D41\u4E0A\u7684\u901A\u9053\uFF0C\u60A8\u5C06\u80FD\u591F\u63A5\u6536\u5404\u79CD\u4FE1\u606F\u5E76\u53D1\u9001\u4FE1\u606F\u3002</p><div class="custom-container tip"><i class="fas fa-info"></i><p>\u60A8\u53EF\u4EE5\u5728\u5355\u4E2A\u6570\u636E\u6D41\u8FDE\u63A5\u4E0A\u540C\u65F6\u52A0\u5165\u591A\u4E2A\u9891\u9053\u3002</p></div><p>\u4E0B\u6587\u5C06\u4ECB\u7ECD\u5982\u4F55\u4F7F\u7528\u8FD9\u4E9B\u9891\u9053\u3002\u8981\u67E5\u770B\u53EF\u7528\u7684\u9891\u9053\uFF0C\u8BF7\u53C2\u9605[\u9891\u9053\u5217\u8868]\uFF08./channel/index.md\uFF09\u3002</p><h3 id="\u52A0\u5165\u9891\u9053" tabindex="-1"><a class="header-anchor" href="#\u52A0\u5165\u9891\u9053" aria-hidden="true">#</a> \u52A0\u5165\u9891\u9053</h3><p>\u8981\u52A0\u5165\u4E00\u4E2A\u9891\u9053\uFF0C\u8BF7\u5728\u6570\u636E\u6D41\u4E2D\u53D1\u9001\u4EE5\u4E0B JSON \u6570\u636E\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;connect&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">channel</span><span class="token operator">:</span> <span class="token string">&#39;xxxxxxxx&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;foobar&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token operator">...</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>where</p><ul><li><code>channel</code> \u901A\u9053 &quot;\u662F\u60A8\u8981\u8FDE\u63A5\u7684\u901A\u9053\u540D\u79F0\u3002\u672C\u8282\u7A0D\u540E\u5C06\u4ECB\u7ECD\u901A\u9053\u7684\u7C7B\u578B\u3002</li><li><code>id</code> \u662F\u4E0E\u8BE5\u9891\u9053\u4EA4\u4E92\u7684\u4EFB\u610F ID\u3002\u8FD9\u662F\u8BC6\u522B\u4FE1\u606F\u6765\u81EA\u54EA\u4E2A\u901A\u9053\u7684\u5FC5\u8981\u6761\u4EF6\uFF0C\u56E0\u4E3A\u4E00\u4E2A\u6570\u636E\u6D41\u5305\u542B\u591A\u4E2A\u901A\u9053\u3002ID \u53EF\u4EE5\u662F UUID \u6216\u968F\u673A\u6570\u3002</li><li><code>params</code> \u662F\u52A0\u5165\u901A\u9053\u65F6\u6240\u9700\u7684\u53C2\u6570\u3002\u4E0D\u540C\u7684\u9891\u9053\u5728\u8FDE\u63A5\u65F6\u9700\u8981\u4E0D\u540C\u7684\u53C2\u6570\u3002\u8FDE\u63A5\u5230\u4E0D\u9700\u8981\u53C2\u6570\u7684\u9891\u9053\u65F6\uFF0C\u53EF\u4EE5\u7701\u7565\u6B64\u5C5E\u6027\u3002</li></ul><div class="custom-container tip"><i class="fas fa-info"></i><p>ID \u4E0D\u662F\u6BCF\u4E2A\u901A\u9053\u7684 ID\uFF0C\u800C\u662F\u6BCF\u4E2A\u901A\u9053\u8FDE\u63A5\u7684 ID\uFF0C\u56E0\u4E3A\u4E00\u4E2A\u901A\u9053\u53EF\u80FD\u9700\u8981\u591A\u6B21\u4F7F\u7528\uFF0C\u4F46\u53C2\u6570\u4E0D\u540C\u3002</p></div><h3 id="\u63A5\u6536\u6765\u81EA\u9891\u9053\u7684\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u63A5\u6536\u6765\u81EA\u9891\u9053\u7684\u4FE1\u606F" aria-hidden="true">#</a> \u63A5\u6536\u6765\u81EA\u9891\u9053\u7684\u4FE1\u606F</h3><p>\u4F8B\u5982\uFF0C\u65F6\u95F4\u8F74\u9891\u9053\u4F1A\u5728\u6709\u65B0\u6587\u7AE0\u53D1\u5E03\u65F6\u53D1\u9001\u6D88\u606F\u3002\u6536\u5230\u6D88\u606F\u540E\uFF0C\u4F60\u5C31\u80FD\u5B9E\u65F6\u77E5\u9053\u65F6\u95F4\u8F74\u4E0A\u53D1\u5E03\u4E86\u65B0\u6587\u7AE0\u3002</p><p>\u5F53\u9891\u9053\u53D1\u5E03\u6D88\u606F\u65F6\uFF0C\u4F1A\u53D1\u9001\u4EE5\u4E0B JSON \u6570\u636E\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;channel&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;foobar&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;something&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token literal-property property">some</span><span class="token operator">:</span> <span class="token string">&#39;thing&#39;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u4E2D</p><ul><li><code>id</code> \u662F\u60A8\u5728\u8FDE\u63A5\u5230\u4E0A\u8FF0\u901A\u9053\u65F6\u8BBE\u7F6E\u7684 ID\u3002\u8FD9\u53EF\u4EE5\u8BA9\u60A8\u77E5\u9053\u8FD9\u6761\u4FE1\u606F\u6765\u81EA\u54EA\u4E2A\u901A\u9053\uFF08\u5B9E\u4F8B\uFF09\u3002</li><li><code>type</code> \u662F\u4FE1\u606F\u7684\u7C7B\u578B\u3002\u53D1\u9001\u7684\u4FE1\u606F\u7C7B\u578B\u53D6\u51B3\u4E8E\u901A\u9053\u3002</li><li><code>body</code> \u662F\u4FE1\u606F\u7684\u5185\u5BB9\u3002\u4FE1\u606F\u5185\u5BB9\u53D6\u51B3\u4E8E\u4FE1\u9053\u3002</li></ul><h3 id="\u5411\u901A\u9053\u53D1\u9001\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u5411\u901A\u9053\u53D1\u9001\u4FE1\u606F" aria-hidden="true">#</a> \u5411\u901A\u9053\u53D1\u9001\u4FE1\u606F</h3><p>\u5728\u67D0\u4E9B\u9891\u9053\u4E0A\uFF0C\u9664\u4E86\u63A5\u6536\u4FE1\u606F\u5916\uFF0C\u8FD8\u53EF\u4EE5\u53D1\u9001\u4FE1\u606F\u548C\u6267\u884C\u5176\u4ED6\u64CD\u4F5C\u3002</p><p>\u8981\u5411\u901A\u9053\u53D1\u9001\u4FE1\u606F\uFF0C\u8BF7\u5411\u6570\u636E\u6D41\u53D1\u9001\u4EE5\u4E0B JSON \u6570\u636E\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;channel&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;foobar&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;something&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token literal-property property">some</span><span class="token operator">:</span> <span class="token string">&#39;thing&#39;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u4E2D</p><ul><li><code>id</code> \u662F\u60A8\u5728\u8FDE\u63A5\u4E0A\u8FF0\u901A\u9053\u65F6\u8BBE\u7F6E\u7684 ID\u3002\u8FD9\u53EF\u4EE5\u8BA9\u60A8\u786E\u5B9A\u6D88\u606F\u662F\u54EA\u4E2A\u901A\u9053\uFF08\u5B9E\u4F8B\uFF09\u7684\u3002</li><li><code>type</code> \u662F\u4FE1\u606F\u7C7B\u578B\u3002\u4E0D\u540C\u7684\u9891\u9053\u63A5\u53D7\u4E0D\u540C\u7C7B\u578B\u7684\u4FE1\u606F\u3002</li><li><code>body</code> \u5305\u542B\u4FE1\u606F\u5185\u5BB9\u3002\u4E0D\u540C\u7684\u9891\u9053\u63A5\u53D7\u4E0D\u540C\u7684\u4FE1\u606F\u5185\u5BB9\u3002</li></ul><h3 id="\u65AD\u5F00\u4E0E\u9891\u9053\u7684\u8FDE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u65AD\u5F00\u4E0E\u9891\u9053\u7684\u8FDE\u63A5" aria-hidden="true">#</a> \u65AD\u5F00\u4E0E\u9891\u9053\u7684\u8FDE\u63A5</h3><p>\u8981\u65AD\u5F00\u4E0E\u9891\u9053\u7684\u8FDE\u63A5\uFF08\u5B9E\u4F8B\u5316\uFF09\uFF0C\u8BF7\u5411\u6570\u636E\u6D41\u53D1\u9001\u4EE5\u4E0B JSON \u6570\u636E\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;disconnect&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;foobar&#39;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u4E2D</p><ul><li><code>id</code> \u662F\u60A8\u5728\u8FDE\u63A5\u5230\u4E0A\u8FF0\u901A\u9053\u65F6\u8BBE\u7F6E\u7684 ID\u3002\u8FD9\u6837\u5C31\u53EF\u4EE5\u786E\u5B9A\u8981\u65AD\u5F00\u8FDE\u63A5\u7684\u901A\u9053\uFF08\u5B9E\u4F8B\uFF09\u3002</li></ul><h2 id="\u6355\u6349\u7B14\u8BB0" tabindex="-1"><a class="header-anchor" href="#\u6355\u6349\u7B14\u8BB0" aria-hidden="true">#</a> \u6355\u6349\u7B14\u8BB0</h2><p>Ocean \u63D0\u4F9B\u4E86\u4E00\u79CD\u540D\u4E3A &quot;\u7B14\u8BB0\u6355\u6349 &quot;\u7684\u673A\u5236\u3002\u8FD9\u662F\u4E00\u79CD\u63A5\u6536\u7ED9\u5B9A\u97F3\u7B26\u4E8B\u4EF6\u6D41\u7684\u80FD\u529B\u3002</p><p>\u4F8B\u5982\uFF0C\u5047\u8BBE\u60A8\u6293\u53D6\u4E86\u4E00\u6761\u65F6\u95F4\u7EBF\uFF0C\u5E76\u5C06\u5176\u663E\u793A\u7ED9\u7528\u6237\u3002\u5047\u8BBE\u6709\u4EBA\u5BF9\u65F6\u95F4\u8F74\u4E0A\u7684\u67D0\u4E2A\u5E16\u5B50\u505A\u51FA\u4E86\u53CD\u5E94\u3002 \u7136\u800C\uFF0C\u7531\u4E8E\u5BA2\u6237\u7AEF\u65E0\u6CD5\u77E5\u9053\u67D0\u6761\u8BB0\u5F55\u662F\u5426\u5DF2\u88AB\u56DE\u5E94\uFF0C\u56E0\u6B64\u65E0\u6CD5\u5728\u65F6\u95F4\u8F74\u4E2D\u5B9E\u65F6\u53CD\u6620\u56DE\u5E94\u60C5\u51B5\u3002</p><p>\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0COcean \u63D0\u4F9B\u4E86\u4E00\u4E2A\u6355\u83B7\u5907\u6CE8\u7684\u673A\u5236\u3002\u6355\u83B7\u7B14\u8BB0\u540E\uFF0C\u60A8\u5C06\u6536\u5230\u4E0E\u8BE5\u7B14\u8BB0\u76F8\u5173\u7684\u4E8B\u4EF6\uFF0C\u5E76\u53EF\u5B9E\u65F6\u663E\u793A\u5BF9\u8BE5\u7B14\u8BB0\u7684\u53CD\u5E94\u3002</p>`,44),u=s(`<h3 id="\u6355\u83B7\u7B14\u8BB0" tabindex="-1"><a class="header-anchor" href="#\u6355\u83B7\u7B14\u8BB0" aria-hidden="true">#</a> \u6355\u83B7\u7B14\u8BB0</h3><p>\u8981\u6355\u83B7\u7B14\u8BB0\uFF0C\u8BF7\u5411\u6D41\u53D1\u9001\u4EE5\u4E0B JSON \u6570\u636E\uFF1A</p><h3 id="\u6355\u83B7\u7B14\u8BB0-1" tabindex="-1"><a class="header-anchor" href="#\u6355\u83B7\u7B14\u8BB0-1" aria-hidden="true">#</a> \u6355\u83B7\u7B14\u8BB0</h3><p>\u8981\u6355\u83B7\u7B14\u8BB0\uFF0C\u8BF7\u5411\u6D41\u53D1\u9001\u4EE5\u4E0B JSON \u6570\u636E\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;subNote&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;xxxxxxxxxxxxxxxx&#39;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u4E2D</p><ul><li><code>id</code> \u662F\u60A8\u8981\u6355\u83B7\u7684\u6CE8\u91CA\u7684 ID\u3002</li></ul><p>\u5F53\u60A8\u53D1\u9001\u6B64\u6D88\u606F\u65F6\uFF0C\u60A8\u5C31\u662F\u5728\u8BF7\u6C42 Ocean \u6355\u6349\u8BE5\u7B14\u8BB0\uFF0C\u7136\u540E\u4E0E\u8BE5\u7B14\u8BB0\u76F8\u5173\u7684\u4E8B\u4EF6\u5C31\u4F1A\u6D41\u5F0F\u4F20\u8F93\u7ED9\u60A8\u3002</p><p>\u4F8B\u5982\uFF0C\u5F53\u67D0\u4E2A\u5907\u5FD8\u5F97\u5230\u56DE\u5E94\u65F6\uFF0C\u60A8\u4F1A\u770B\u5230\u5982\u4E0B\u4FE1\u606F\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;noteUpdated&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;xxxxxxxxxxxxxxxx&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;reacted&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token literal-property property">reaction</span><span class="token operator">:</span> <span class="token string">&#39;like&#39;</span><span class="token punctuation">,</span>
			<span class="token literal-property property">userId</span><span class="token operator">:</span> <span class="token string">&#39;yyyyyyyyyyyyyyyy&#39;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u4E2D</p><ul><li><code>body.id</code> \u5C06\u8BBE\u7F6E\u4E3A\u89E6\u53D1\u4E8B\u4EF6\u7684\u5E16\u5B50\u7684 ID\u3002</li><li><code>body.type</code> \u5C06\u662F\u4E8B\u4EF6\u7684\u7C7B\u578B\u3002</li><li><code>body.body</code> \u5C06\u5305\u542B\u4E8B\u4EF6\u7684\u8BE6\u7EC6\u4FE1\u606F\u3002</li></ul><h3 id="\u53D6\u6D88\u6355\u83B7\u6CE8\u91CA" tabindex="-1"><a class="header-anchor" href="#\u53D6\u6D88\u6355\u83B7\u6CE8\u91CA" aria-hidden="true">#</a> \u53D6\u6D88\u6355\u83B7\u6CE8\u91CA</h3><p>\u5982\u679C\u60A8\u4E0D\u60F3\u518D\u63A5\u6536\u4E0E\u5907\u6CE8\u76F8\u5173\u7684\u4E8B\u4EF6\uFF0C\u4F8B\u5982\u5F53\u5907\u6CE8\u4E0D\u518D\u51FA\u73B0\u5728\u5C4F\u5E55\u4E0A\u65F6\uFF0C\u60A8\u53EF\u4EE5\u5220\u9664\u6355\u83B7\u8BF7\u6C42\u3002</p><p>\u53D1\u9001\u4EE5\u4E0B JSON \u6570\u636E\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;unsubNote&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;xxxxxxxxxxxxxxxx&#39;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u4E2D</p><ul><li><code>id</code> \u662F\u60A8\u8981\u53D6\u6D88\u6355\u83B7\u7684\u7B14\u8BB0\u7684 ID\u3002</li></ul><p>\u53D1\u9001\u6B64\u4FE1\u606F\u540E\uFF0C\u5C06\u4E0D\u4F1A\u518D\u5411\u60A8\u53D1\u9001\u4E0E\u8BE5\u7B14\u8BB0\u76F8\u5173\u7684\u4E8B\u4EF6\u3002</p>`,19);function v(k,y){const a=p("RouterLink");return t(),i("div",null,[d,o("p",null,[n("\u4E0B\u6587\u5C06\u4ECB\u7ECD\u5982\u4F55\u4F7F\u7528\u7B14\u8BB0\u6355\u6349\u529F\u80FD\u3002\u8981\u4E86\u89E3\u53EF\u7528\u7684\u6355\u83B7\u4E8B\u4EF6\u7C7B\u578B\uFF0C\u8BF7\u53C2\u9605"),r(a,{to:"/zh/docs/api/streaming/note-capture-events.html"},{default:l(()=>[n("\u6355\u83B7\u4E8B\u4EF6\u5217\u8868")]),_:1}),n("\u3002")]),u])}var m=e(c,[["render",v],["__file","index.html.vue"]]);export{m as default};