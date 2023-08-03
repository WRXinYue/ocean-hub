import{_ as t,r as p,o as r,c,a as n,d as a,b as e,w as i,e as o}from"./app.0f017d40.js";const l={},d=n("h1",{id:"api-strumieniowe",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#api-strumieniowe","aria-hidden":"true"},"#"),a(" Api strumieniowe")],-1),u={class:"custom-container tip"},y=n("i",{class:"fas fa-info"},null,-1),k=o(`<p>Strumieniowe API podaje informacje w czasie rzeczywistym (np: nowe posty na o\u015Bi czasu, reakcje, obserwuj\u0105cy itp.) i wiele innych.</p><h2 id="\u0142aczenie" tabindex="-1"><a class="header-anchor" href="#\u0142aczenie" aria-hidden="true">#</a> \u0141\u0105czenie</h2><p>Aby u\u017Cywa\u0107 API strumieniowego, musisz po\u0142\u0105czy\u0107 si\u0119 z serwerem Misskey za pomoc\u0105 <strong>websocket</strong>.</p><p>O to przyk\u0142adowy URL Websocketu:</p><div class="language-text ext-text"><pre class="language-text"><code>wss://{host}/streaming?i={token}
</code></pre></div><p>gdzie:</p><ul><li><code>{host}</code> instancja z kt\xF3r\u0105 chcesz si\u0119 po\u0142\u0105czy\u0107.</li><li><code>{token}</code> token dost\u0119powy u\u017Cytkownika.</li></ul><div class="custom-container tip"><i class="fas fa-info"></i><p>Mo\u017Cesz te\u017C si\u0119 po\u0142\u0105czy\u0107 bez tokenu dost\u0119pu ale nie b\u0119dziesz mia\u0142 dost\u0119pu do wszystkich danych.</p></div><p>Kiedy po\u0142\u0105czy\u0142e\u015B si\u0119, mo\u017Cesz subskrybowa\u0107 do post\xF3w opisanych poni\u017Cej, ale nadal nie mo\u017Cesz odtrzymywa\u0107 nowych post\xF3w na o\u015Bi czasu</p><p>Aby odtrzymywa\u0107 takie zdarzenia musisz po\u0142\u0105czy\u0107 si\u0119 z <strong>kana\u0142em</strong> jak opisano poni\u017Cej.</p><p><strong>Wszystkie dane powinny by\u0107 w JSONie.</strong></p><h2 id="kana\u0142" tabindex="-1"><a class="header-anchor" href="#kana\u0142" aria-hidden="true">#</a> Kana\u0142</h2><p>API Strumieniowe Miskey u\u017Cywa kana\u0142\xF3w. Jest to mechanizm do oddzielania informacji do wys\u0142ania i odbioru. Do\u0142\u0105czaj\u0105c na kana\u0142 na strumieniu, b\u0119dziesz m\xF3g\u0142 otrzymywa\u0107 r\xF3\u017Cne rodzaje informacji i wysy\u0142a\u0107 informacje.</p><div class="custom-container tip"><i class="fas fa-info"></i><p>Mo\u017Cesz do\u0142\u0105czy\u0107 do wielu kana\u0142\xF3w na jednym strumieniu</p></div>`,14),z=o(`<h3 id="do\u0142aczanie-do-kana\u0142u" tabindex="-1"><a class="header-anchor" href="#do\u0142aczanie-do-kana\u0142u" aria-hidden="true">#</a> Do\u0142\u0105czanie do kana\u0142u</h3><p>Do\u0142\u0105czaj\u0105c do kana\u0142u, wysy\u0142asz strumieniem podane dane w JSONie:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
 <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;connect&#39;</span><span class="token punctuation">,</span>
 <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">channel</span><span class="token operator">:</span> <span class="token string">&#39;xxxxxxxx&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;foobar&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   <span class="token operator">...</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>gdzie</p><ul><li><code>channel</code> to nazwa kana\u0142u z kt\xF3rym chcesz si\u0119 po\u0142\u0105czy\u0107. Rodzaje kana\u0142\xF3w s\u0105 opisane ni\u017Cej w tym dokumencje.</li><li><code>id</code> jest to arbitralne ID do wykonywania interakcji z kana\u0142em. Jest ono wymagane do identyfikowania, z kt\xF3rego kana\u0142u jest wiadomo\u015B\u0107, poniewa\u017C strumie\u0144 zawiera wiele kana\u0142\xF3w. To ID mo\u017Ce by\u0107 czym\u015B w stylu UUID albo losow\u0105 liczb\u0105.</li><li><code>params</code> to parametry wymagane kiedy do\u0142\u0105cza si\u0119 na kana\u0142. R\xF3\u017Cne kana\u0142y wymagaj\u0105 innych parametr\xF3w przy po\u0142\u0105czeniu. Kiedy kana\u0142 nie wymaga parametr\xF3w, mo\u017Cna t\u0105 warto\u015B\u0107 zignorowa\u0107.</li></ul><div class="custom-container tip"><i class="fas fa-info"></i><p>ID nie jest co kana\u0142, a co po\u0142\u0105czenie z kana\u0142em, poniewa\u017C kana\u0142 mo\u017Ce by\u0107 potrzebny kilka razy ale z innym parametrem.</p></div><h3 id="zdobywanie-wiadomosci-z-kana\u0142ow" tabindex="-1"><a class="header-anchor" href="#zdobywanie-wiadomosci-z-kana\u0142ow" aria-hidden="true">#</a> Zdobywanie wiadomo\u015Bci z kana\u0142\xF3w</h3><p>Na przyk\u0142\u0105d, o\u015B czasu kana\u0142u wy\u015Ble wiadomo\u015B\u0107 kiedy jest nowy post. Zdobywaj\u0105c wiadomo\u015B\u0107, mo\u017Cesz wiedzie\u0107 w czasie rzeczywistym \u017Ce nowy post zosta\u0142 opublikowany na twojej o\u015Bi casu.</p><p>Kiedy kana\u0142 wysy\u0142a wiadomo\u015B\u0107, podany JSON jest wys\u0142any:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
 <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;channel&#39;</span><span class="token punctuation">,</span>
 <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;foobar&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;something&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">some</span><span class="token operator">:</span> <span class="token string">&#39;thing&#39;</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>gdzie</p><ul><li><code>id</code> to ID ustawionie kiedy \u0142\u0105czono z kana\u0142em jak podano wy\u017Cej. Pozwala wiedzie\u0107 z kt\xF3rego kana\u0142u jest wiadomo\u015B\u0107</li><li><code>type</code> to jest rodzaj wiadomo\u015Bci. Rodzaje wiadomo\u015Bci zale\u017C\u0105 od tgo co jest wysy\u0142ane na kana\u0142.</li><li><code>body</code> zawiera zawarto\u015B\u0107 wiadomo\u015Bci. Zawarto\u015B\u0107 zale\u017Cy od kana\u0142u.</li></ul><h3 id="wysy\u0142anie-wiadomosci-na-kana\u0142" tabindex="-1"><a class="header-anchor" href="#wysy\u0142anie-wiadomosci-na-kana\u0142" aria-hidden="true">#</a> Wysy\u0142anie wiadomo\u015Bci na kana\u0142</h3><p>Na niekt\xF3rych kana\u0142ach jest mo\u017Cliwo\u015B\u0107 wysy\u0142\u0105nia wiadomo\u015Bci i wykonywania innych operacji poza zdobywaniem wiadomo\u015Bci.</p><p>Aby wys\u0142a\u0107 wiadomo\u015B\u0107, wy\u015Blij podane dane w JSONie na strumie\u0144:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
 <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;channel&#39;</span><span class="token punctuation">,</span>
 <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;foobar&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;something&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">some</span><span class="token operator">:</span> <span class="token string">&#39;thing&#39;</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>gdzie:</p><ul><li><code>id</code> to ID ustawionie kiedy \u0142\u0105czono z kana\u0142em jak podano wy\u017Cej. Pozwala wiedzie\u0107 dla kt\xF3rego kana\u0142u jest to wiadomo\u015B\u0107.</li><li><code>type</code> to jest rodzaj wiadomo\u015Bci. Rodzaje wiadomo\u015Bci zale\u017C\u0105 od kana\u0142u.</li><li><code>body</code> zawiera zawarto\u015B\u0107 wiadomo\u015Bci. Zawarto\u015B\u0107 zale\u017Cy od kana\u0142u.</li></ul><h3 id="roz\u0142aczanie-sie-z-kana\u0142u" tabindex="-1"><a class="header-anchor" href="#roz\u0142aczanie-sie-z-kana\u0142u" aria-hidden="true">#</a> Roz\u0142\u0105czanie si\u0119 z kana\u0142u</h3><p>Aby si\u0119 roz\u0142\u0105czy\u0107 z kana\u0142u (instantiation), wy\u015Blij podane dane JSONem na strumie\u0144:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
 <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;disconnect&#39;</span><span class="token punctuation">,</span>
 <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;foobar&#39;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>where</p><ul><li><code>id</code> to ID kana\u0142u do kt\xF3rego si\u0119 \u0142\u0105czy\u0142e\u015B i z kt\xF3rego chcesz si\u0119 roz\u0142\u0105czy\u0107.</li></ul><h2 id="wy\u0142apywanie-postow" tabindex="-1"><a class="header-anchor" href="#wy\u0142apywanie-postow" aria-hidden="true">#</a> Wy\u0142apywanie post\xF3w</h2><p>Misskey udost\u0119pnia mechanizm zwany przechwytywaniem post\xF3w. Jest to zdolno\u015B\u0107 do otrzymania strumienia zdarze\u0144 dla danego wpisu.</p><p>Na przyk\u0142ad, powiedzmy, \u017Ce chwytasz o\u015B czasu i wy\u015Bwietlasz j\u0105 swoim u\u017Cytkownikom. Powiedzmy, \u017Ce kto\u015B reaguje na jeden z post\xF3w na osi czasu. Poniewa\u017C jednak klient nie ma sposobu, aby wiedzie\u0107, \u017Ce notka zosta\u0142a zareagowana, nie jest mo\u017Cliwe odzwierciedlenie reakcji na osi czasu w czasie rzeczywistym.</p><p>Aby rozwi\u0105za\u0107 ten problem, Misskey zapewnia mechanizm przechwytywania wpis\xF3w. Gdy przechwycisz notk\u0119, otrzymasz zdarzenia zwi\u0105zane z t\u0105 notk\u0105 i mo\u017Cesz wy\u015Bwietli\u0107 reakcje na ni\u0105 w czasie rzeczywistym.</p>`,27),m=o(`<h3 id="wy\u0142apanie-posta" tabindex="-1"><a class="header-anchor" href="#wy\u0142apanie-posta" aria-hidden="true">#</a> Wy\u0142apanie posta</h3><p>Aby wy\u0142apa\u0107 post wy\u015Blij JSON na strumie\u0144:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
 <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;subNote&#39;</span><span class="token punctuation">,</span>
 <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;xxxxxxxxxxxxxxxx&#39;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>gdzie</p><ul><li><code>id</code> to ID posta do wy\u0142apania.</li></ul><p>Kiedy wysy\u0142asz wiadomo\u015B\u0107, prosisz Misskey o przechwycenie notki, a nast\u0119pnie zdarzenia zwi\u0105zane z t\u0105 notk\u0105 b\u0119d\u0105 przesy\u0142ane do ciebie.</p><p>Na przyk\u0142ad jak odtrzymasz reakcje to odtrzymasz tak\u0105 odpowied\u017A JSONem</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>gdzie</p><ul><li><code>body.id</code> to ID posta kt\xF3re spowodowa\u0142o zdarzenie.</li><li><code>body.type</code> typ zdarzenia.</li><li><code>body.body</code> informacje o zdarzeniu.</li></ul><h3 id="usuwanie-przechwytywania-posta" tabindex="-1"><a class="header-anchor" href="#usuwanie-przechwytywania-posta" aria-hidden="true">#</a> Usuwanie przechwytywania posta</h3><p>Je\u015Bli nie chcesz ju\u017C otrzymywa\u0107 zdarze\u0144 zwi\u0105zanych z postem, np. gdy nie pojawia si\u0119 ona ju\u017C na ekranie, mo\u017Cesz usun\u0105\u0107 \u017C\u0105danie przechwycenia.</p><p>Wy\u015Blij nast\u0119puj\u0105ce dane JSON: \`\`js { type: &#39;unsubNote&#39;, body: { id: &#39;xxxxxxxxxxxxxx&#39; } }</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
gdzie
- \`id\` to ID notatki, kt\xF3r\u0105 chcesz odhaczy\u0107.

Po wys\u0142aniu tej wiadomo\u015Bci nie b\u0119d\u0105 ju\u017C wysy\u0142ane \u017Cadne zdarzenia zwi\u0105zane z t\u0105 notk\u0105.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function w(v,b){const s=p("RouterLink");return r(),c("div",null,[d,n("div",u,[y,n("p",null,[a("Na pocz\u0105tek powiniene\u015B przeczyta\u0107 "),e(s,{to:"/pl/docs/api/"},{default:i(()=>[a("dokumentacj\u0119 API Misskey")]),_:1}),a(".")])]),k,n("p",null,[a("Ta sekcja opisuje jak u\u017Cywa\u0107 kana\u0142\xF3w. Aby sobaczy\u0107 jakie kana\u0142y s\u0105 dost\u0119pne, zapoznaj si\u0119 z "),e(s,{to:"/pl/docs/api/streaming/channel/"},{default:i(()=>[a("list\u0105 kana\u0142\xF3w")]),_:1}),a(".")]),z,n("p",null,[a("W kolejnych rozdzia\u0142ach opisano, jak korzysta\u0107 z funkcji przechwytywania notek. Aby zobaczy\u0107, jakie zdarzenia przechwytywania s\u0105 dost\u0119pne, zobacz list\u0119 "),e(s,{to:"/pl/docs/api/streaming/note-capture-events.html"},{default:i(()=>[a("Capture Events List")]),_:1}),a(".")]),m])}var j=t(l,[["render",w],["__file","index.html.vue"]]);export{j as default};
