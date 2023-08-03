import{_ as t,r as n,o,c as r,a,d as e,b as l,w as d,e as s}from"./app.0f017d40.js";const c={},p=s('<h1 id="mfm" tabindex="-1"><a class="header-anchor" href="#mfm" aria-hidden="true">#</a> MFM</h1><p>MFM, abr\xE9viation de Misskey Flavoured Markdown, est un langage de balise sp\xE9cifique \xE0 Misskey.</p><div class="custom-container tip"><i class="fas fa-info"></i><p>Une partie de la syntaxe est compatible avec Markdown.</p></div><h2 id="exemples-de-champs-prenant-en-charge-le-mfm" tabindex="-1"><a class="header-anchor" href="#exemples-de-champs-prenant-en-charge-le-mfm" aria-hidden="true">#</a> Exemples de champs prenant en charge le MFM</h2><ul><li>corps de note\xA0;</li><li>avertissement de contenu\xA0;</li><li>pseudonyme\xA0;</li><li>profil.</li></ul><h2 id="syntaxe" tabindex="-1"><a class="header-anchor" href="#syntaxe" aria-hidden="true">#</a> Syntaxe</h2><h3 id="mentions" tabindex="-1"><a class="header-anchor" href="#mentions" aria-hidden="true">#</a> Mentions</h3>',7),h={class:"custom-container tip"},m=a("i",{class:"fas fa-info"},null,-1),u=s(`<div class="language-text ext-text"><pre class="language-text"><code>@alice
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>@alice@example.com
</code></pre></div><h3 id="mot-croisillon" tabindex="-1"><a class="header-anchor" href="#mot-croisillon" aria-hidden="true">#</a> Mot-croisillon</h3><div class="custom-container tip"><i class="fas fa-info"></i><p>Pour plus d\u2019informations sur les mots-croisillons, voir <a href="./hashtag">ici</a>.</p></div><div class="language-text ext-text"><pre class="language-text"><code>#misskey
</code></pre></div><h3 id="emoticone-personnalise" tabindex="-1"><a class="header-anchor" href="#emoticone-personnalise" aria-hidden="true">#</a> \xC9motic\xF4ne personnalis\xE9</h3><div class="custom-container tip"><i class="fas fa-info"></i><p>Pour plus d\u2019informations sur les \xE9motic\xF4nes personnalis\xE9s, voir <a href="./custom-emoji">ici</a>.</p></div><div class="language-text ext-text"><pre class="language-text"><code>:misskey:
</code></pre></div><h3 id="liens" tabindex="-1"><a class="header-anchor" href="#liens" aria-hidden="true">#</a> Liens</h3><div class="language-text ext-text"><pre class="language-text"><code>[example link](https://example.com)
</code></pre></div><h3 id="gras" tabindex="-1"><a class="header-anchor" href="#gras" aria-hidden="true">#</a> Gras</h3><div class="language-text ext-text"><pre class="language-text"><code>**Bold**
</code></pre></div><hr><div class="custom-container tip"><i class="fas fa-info"></i><p>Plus de d\xE9tails sur la syntaxe sont disponibles sur le <strong>pense-b\xEAte MFM</strong> de l\u2019interface web Misskey sur la page <code>/mfm-cheat-sheet</code> de votre instance.</p></div><h2 id="informations-pour-le-developpement" tabindex="-1"><a class="header-anchor" href="#informations-pour-le-developpement" aria-hidden="true">#</a> Informations pour le d\xE9veloppement</h2><p>L\u2019analyse syntaxique de MFM est disponible comme librairie, facilitant son impl\xE9mentation dans vos applications.</p><ul><li><a href="https://github.com/misskey-dev/mfm.js" target="_blank" rel="noopener noreferrer">misskey-dev/mfm.js</a> - Analyseur syntaxique en JavaScript.</li></ul>`,17);function f(x,v){const i=n("RouterLink");return o(),r("div",null,[p,a("div",h,[m,a("p",null,[e("Pour plus d\u2019informations sur les mentions, voir "),l(i,{to:"/fr/docs/features/mention.html"},{default:d(()=>[e("ici")]),_:1}),e(".")])]),u])}var _=t(c,[["render",f],["__file","mfm.html.vue"]]);export{_ as default};
