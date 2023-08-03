import{_ as s,o as t,c as o,a as n,b as i,w as p,d as e,e as c,r}from"./app.aecf66dd.js";const l={},u=n("p",null,"Uwaga - ten plik zosta\u0142 przet\u0142umaczony z Japo\u0144skiego t\u0142umaczem internetowym. Mo\u017Ce zawiera\u0107 b\u0142\u0119dy.",-1),d=n("h1",{id:"jak-uzyskac-token-dostepu-przy-uzyciu-metody-tworzenia-aplikacji",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#jak-uzyskac-token-dostepu-przy-uzyciu-metody-tworzenia-aplikacji","aria-hidden":"true"},"#"),e(" Jak uzyska\u0107 token dost\u0119pu przy u\u017Cyciu metody tworzenia aplikacji")],-1),k=n("p",null,[e("W tej sekcji opisano star\u0105 metod\u0119 uzyskiwania tokena dost\u0119pu przed wprowadzeniem MiAuth (12.27.0)."),n("br"),e(" Serwery z wersjami mniejszymi ni\u017C 12.27.0 musz\u0105 u\u017Cywa\u0107 tej starej metody.")],-1),m=n("h2",{id:"_1-tworzenie-aplikacji",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-tworzenie-aplikacji","aria-hidden":"true"},"#"),e(" 1. tworzenie aplikacji")],-1),v=e("Wy\u015Blij informacje do punktu ko\u0144cowego "),y=n("code",null,"app/create",-1),z=e(", aby uzyska\u0107 "),b=n("code",null,"appSecret",-1),h=e("."),w=c(`<p>\`json. { // App Name. &quot;name&quot;: &quot;test&quot;,. // App description. &quot;description&quot;: &quot;moja aplikacja testowa&quot;,. // Uprawnienia dla aplikacji. &quot;permission&quot;: [&quot;write:notes&quot;] }</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
W tym momencie mo\u017Cesz zawrze\u0107 w \`callbackUrl\` wybrany przez siebie adres URL, tak aby po zako\u0144czeniu kolejnej operacji zwi\u0105zanej z uprawnieniami nast\u0105pi\u0142o tam wywo\u0142anie zwrotne, zawieraj\u0105ce \`token\` w ci\u0105gu zapytania.

## 2. Uwierzytelnienie u\u017Cytkownika.
POST an \`appSecret\` do punktu ko\u0144cowego [\`auth/session/generate\`](endpoints/auth/session/generate).

\`json.
{
    &quot;appSecret&quot;: &quot;fAb12cD34Ef56gH78Ij16kL32Mn64oPf&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Zwraca on <code>token</code> (tutaj wst\u0119pnie <code>798b9f6e-248d-43a7-a919-fabc664027f1</code>) oraz <code>url</code>, wi\u0119c najpierw wejd\u017A na ten url za pomoc\u0105 przegl\u0105darki internetowej i wybierz &#39;allow access&#39;.</p><h2 id="_3-query-the-accesstoken" tabindex="-1"><a class="header-anchor" href="#_3-query-the-accesstoken" aria-hidden="true">#</a> 3. query the accessToken</h2><p>Gdy ju\u017C jeste\u015B pewien, \u017Ce ## 2 jest zrobiony, POSTuj <code>appSecret</code> i <code>token</code> z wcze\u015Bniejszego punktu ko\u0144cowego <a href="endpoints/auth/session/userkey"><code>auth/session/userkey</code></a>.</p><p>\`json. { &quot;appSecret&quot;: &quot;fAb12cD34Ef56gH78Ij16kL32Mn64oPf&quot;,. &quot;token&quot;: &quot;798b9f6e-248d-43a7-a919-fabc664027f1&quot; }</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
Ci\u0105g znak\xF3w, kt\xF3ry mo\u017Cna tu uzyska\u0107 nazywa si\u0119 \`accessToken\`. \`accessToken\` mo\u017Ce by\u0107 pobrany tylko raz.

## 4. generowanie \`i\`.
\`i\` mo\u017Cna wygenerowa\u0107 w Node.js za pomoc\u0105 poni\u017Cszego kodu, kt\xF3ry jest 64-cyfrow\u0105 liczb\u0105 szesnastkow\u0105, w przeciwie\u0144stwie do tej, kt\xF3r\u0105 otrzymujemy na ekranie konfiguracyjnym.

\`javascript
const crypto = require(&quot;crypto&quot;)
const i = crypto.createHash(&quot;sha256&quot;)
    .update(accessToken + appSecret, &quot;utf8&quot;)
    .digest(&quot;hex&quot;)
console.log(i).
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-faktycznie-przetestuj-to" tabindex="-1"><a class="header-anchor" href="#_5-faktycznie-przetestuj-to" aria-hidden="true">#</a> 5. faktycznie przetestuj to</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&quot;https://misskey.io/api/notes/create&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;POST&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">i</span><span class="token operator">:</span> <span class="token string">&quot;/* Enter i here */&quot;</span><span class="token punctuation">,</span><span class="token punctuation">.</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;Hello Misskey API World with My Application!&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&#39;Content-Type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;application/json&#39;</span><span class="token punctuation">,</span><span class="token punctuation">.</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token literal-property property">credentials</span><span class="token operator">:</span> <span class="token string">&#39;omit&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span>\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function j(g,q){const a=r("RouterLink");return t(),o("div",null,[u,d,k,m,n("p",null,[v,i(a,{to:"/pl/docs/api/endpoints/app/create.html"},{default:p(()=>[y]),_:1}),z,b,h]),w])}var f=s(l,[["render",j],["__file","app.html.vue"]]);export{f as default};
