import{_ as e,o as a,c,e as n}from"./app.b145dd9f.js";const t={},o=n('<h1 id="set-up-a-cdn" tabindex="-1"><a class="header-anchor" href="#set-up-a-cdn" aria-hidden="true">#</a> Set up a CDN</h1><p>When publishing your Ocean instance, we strongly recommend using a CDN such as <a href="https://www.cloudflare.com/" target="_blank" rel="noopener noreferrer">Cloudflare</a>.</p><p>Using a CDN has the following advantages</p><ul><li>You can have static content cached, which reduces the load on your server</li><li>The IP address of the server is less exposed, which can mitigate DoS attacks etc.</li></ul><h2 id="caching" tabindex="-1"><a class="header-anchor" href="#caching" aria-hidden="true">#</a> Caching</h2><p>Ocean Web is completely static and does not require a server to run. Therefore the whole Ocean Web can be cached in a CDN. The Ocean API cannot be cached.</p><p>You need to configure the following settings in your CDN</p><ul><li>Cache all requests except <code>/api/*</code>.</li></ul><div class="custom-container tip"><i class="fas fa-info"></i><p>You don&#39;t need to clear the cache when you update Ocean.</p></div>',9),r=[o];function s(i,h){return a(),c("div",null,r)}var l=e(t,[["render",s],["__file","cdn.html.vue"]]);export{l as default};
