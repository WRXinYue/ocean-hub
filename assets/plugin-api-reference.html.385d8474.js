import{_ as e,o as r,c as i,e as t}from"./app.aecf66dd.js";const a={},n=t('<h1 id="\u30D5\u309A\u30E9\u30AF\u3099\u30A4\u30F3api\u30EA\u30D5\u30A1\u30EC\u30F3\u30B9" tabindex="-1"><a class="header-anchor" href="#\u30D5\u309A\u30E9\u30AF\u3099\u30A4\u30F3api\u30EA\u30D5\u30A1\u30EC\u30F3\u30B9" aria-hidden="true">#</a> \u30D7\u30E9\u30B0\u30A4\u30F3API\u30EA\u30D5\u30A1\u30EC\u30F3\u30B9</h1><h2 id="mk-dialog-title-text-type" tabindex="-1"><a class="header-anchor" href="#mk-dialog-title-text-type" aria-hidden="true">#</a> Mk:dialog(title text type)</h2><p>\u30C0\u30A4\u30A2\u30ED\u30B0\u3092\u8868\u793A\u3057\u307E\u3059\u3002type\u306B\u306F\u4EE5\u4E0B\u306E\u5024\u304C\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002<br> info success warn error question<br> \u7701\u7565\u3059\u308B\u3068 info \u306B\u306A\u308A\u307E\u3059\u3002</p><h2 id="mk-confirm-title-text-type" tabindex="-1"><a class="header-anchor" href="#mk-confirm-title-text-type" aria-hidden="true">#</a> Mk:confirm(title text type)</h2><p>\u78BA\u8A8D\u30C0\u30A4\u30A2\u30ED\u30B0\u3092\u8868\u793A\u3057\u307E\u3059\u3002type\u306B\u306F\u4EE5\u4E0B\u306E\u5024\u304C\u8A2D\u5B9A\u3067\u304D\u307E\u3059\u3002<br> info success warn error question<br> \u7701\u7565\u3059\u308B\u3068 question \u306B\u306A\u308A\u307E\u3059\u3002<br> \u30E6\u30FC\u30B6\u30FC\u304C&quot;OK&quot;\u3092\u9078\u629E\u3057\u305F\u5834\u5408\u306F true \u3092\u3001&quot;\u30AD\u30E3\u30F3\u30BB\u30EB&quot;\u3092\u9078\u629E\u3057\u305F\u5834\u5408\u306F false \u304C\u8FD4\u308A\u307E\u3059\u3002</p><h2 id="mk-api-endpoint-params" tabindex="-1"><a class="header-anchor" href="#mk-api-endpoint-params" aria-hidden="true">#</a> Mk:api(endpoint params)</h2><p>Misskey API\u306B\u30EA\u30AF\u30A8\u30B9\u30C8\u3057\u307E\u3059\u3002\u7B2C\u4E00\u5F15\u6570\u306B\u30A8\u30F3\u30C9\u30DD\u30A4\u30F3\u30C8\u540D\u3001\u7B2C\u4E8C\u5F15\u6570\u306B\u30D1\u30E9\u30E1\u30FC\u30BF\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u6E21\u3057\u307E\u3059\u3002</p><h2 id="mk-save-key-value" tabindex="-1"><a class="header-anchor" href="#mk-save-key-value" aria-hidden="true">#</a> Mk:save(key value)</h2><p>\u4EFB\u610F\u306E\u5024\u306B\u4EFB\u610F\u306E\u540D\u524D\u3092\u4ED8\u3051\u3066\u6C38\u7D9A\u5316\u3057\u307E\u3059\u3002\u6C38\u7D9A\u5316\u3057\u305F\u5024\u306F\u3001AiScript\u30B3\u30F3\u30C6\u30AD\u30B9\u30C8\u304C\u7D42\u4E86\u3057\u3066\u3082\u6B8B\u308A\u3001Mk:load\u3067\u8AAD\u307F\u53D6\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002</p><h2 id="mk-load-key" tabindex="-1"><a class="header-anchor" href="#mk-load-key" aria-hidden="true">#</a> Mk:load(key)</h2><p>Mk:save\u3067\u6C38\u7D9A\u5316\u3057\u305F\u6307\u5B9A\u306E\u540D\u524D\u306E\u5024\u3092\u8AAD\u307F\u53D6\u308A\u307E\u3059\u3002</p><h2 id="plugin-register-post-form-action-title-fn" tabindex="-1"><a class="header-anchor" href="#plugin-register-post-form-action-title-fn" aria-hidden="true">#</a> Plugin:register_post_form_action(title fn)</h2><p>\u6295\u7A3F\u30D5\u30A9\u30FC\u30E0\u306B\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u8FFD\u52A0\u3057\u307E\u3059\u3002\u7B2C\u4E00\u5F15\u6570\u306B\u30A2\u30AF\u30B7\u30E7\u30F3\u540D\u3001\u7B2C\u4E8C\u5F15\u6570\u306B\u30A2\u30AF\u30B7\u30E7\u30F3\u304C\u9078\u629E\u3055\u308C\u305F\u969B\u306E\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u95A2\u6570\u3092\u6E21\u3057\u307E\u3059\u3002<br> \u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u95A2\u6570\u306B\u306F\u3001\u7B2C\u4E00\u5F15\u6570\u306B\u6295\u7A3F\u30D5\u30A9\u30FC\u30E0\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u304C\u6E21\u3055\u308C\u307E\u3059\u3002</p><h2 id="plugin-register-note-action-title-fn" tabindex="-1"><a class="header-anchor" href="#plugin-register-note-action-title-fn" aria-hidden="true">#</a> Plugin:register_note_action(title fn)</h2><p>\u30CE\u30FC\u30C8\u30E1\u30CB\u30E5\u30FC\u306B\u9805\u76EE\u3092\u8FFD\u52A0\u3057\u307E\u3059\u3002\u7B2C\u4E00\u5F15\u6570\u306B\u9805\u76EE\u540D\u3001\u7B2C\u4E8C\u5F15\u6570\u306B\u9805\u76EE\u304C\u9078\u629E\u3055\u308C\u305F\u969B\u306E\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u95A2\u6570\u3092\u6E21\u3057\u307E\u3059\u3002<br> \u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u95A2\u6570\u306B\u306F\u3001\u7B2C\u4E00\u5F15\u6570\u306B\u5BFE\u8C61\u306E\u30CE\u30FC\u30C8\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u304C\u6E21\u3055\u308C\u307E\u3059\u3002</p><h2 id="plugin-register-user-action-title-fn" tabindex="-1"><a class="header-anchor" href="#plugin-register-user-action-title-fn" aria-hidden="true">#</a> Plugin:register_user_action(title fn)</h2><p>\u30E6\u30FC\u30B6\u30FC\u30E1\u30CB\u30E5\u30FC\u306B\u9805\u76EE\u3092\u8FFD\u52A0\u3057\u307E\u3059\u3002\u7B2C\u4E00\u5F15\u6570\u306B\u9805\u76EE\u540D\u3001\u7B2C\u4E8C\u5F15\u6570\u306B\u9805\u76EE\u304C\u9078\u629E\u3055\u308C\u305F\u969B\u306E\u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u95A2\u6570\u3092\u6E21\u3057\u307E\u3059\u3002<br> \u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u95A2\u6570\u306B\u306F\u3001\u7B2C\u4E00\u5F15\u6570\u306B\u5BFE\u8C61\u306E\u30E6\u30FC\u30B6\u30FC\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u304C\u6E21\u3055\u308C\u307E\u3059\u3002</p><h2 id="plugin-register-note-view-interruptor-fn" tabindex="-1"><a class="header-anchor" href="#plugin-register-note-view-interruptor-fn" aria-hidden="true">#</a> Plugin:register_note_view_interruptor(fn)</h2><p>UI\u306B\u8868\u793A\u3055\u308C\u308B\u30CE\u30FC\u30C8\u60C5\u5831\u3092\u66F8\u304D\u63DB\u3048\u307E\u3059\u3002<br> \u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u95A2\u6570\u306B\u306F\u3001\u7B2C\u4E00\u5F15\u6570\u306B\u5BFE\u8C61\u306E\u30CE\u30FC\u30C8\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u304C\u6E21\u3055\u308C\u307E\u3059\u3002<br> \u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u95A2\u6570\u306E\u8FD4\u308A\u5024\u3067\u30CE\u30FC\u30C8\u304C\u66F8\u304D\u63DB\u3048\u3089\u308C\u307E\u3059\u3002</p><h2 id="plugin-register-note-post-interruptor-fn" tabindex="-1"><a class="header-anchor" href="#plugin-register-note-post-interruptor-fn" aria-hidden="true">#</a> Plugin:register_note_post_interruptor(fn)</h2><p>\u30CE\u30FC\u30C8\u6295\u7A3F\u6642\u306B\u30CE\u30FC\u30C8\u60C5\u5831\u3092\u66F8\u304D\u63DB\u3048\u307E\u3059\u3002<br> \u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u95A2\u6570\u306B\u306F\u3001\u7B2C\u4E00\u5F15\u6570\u306B\u5BFE\u8C61\u306E\u30CE\u30FC\u30C8\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u304C\u6E21\u3055\u308C\u307E\u3059\u3002<br> \u30B3\u30FC\u30EB\u30D0\u30C3\u30AF\u95A2\u6570\u306E\u8FD4\u308A\u5024\u3067\u30CE\u30FC\u30C8\u304C\u66F8\u304D\u63DB\u3048\u3089\u308C\u307E\u3059\u3002</p><h2 id="plugin-open-url-url" tabindex="-1"><a class="header-anchor" href="#plugin-open-url-url" aria-hidden="true">#</a> Plugin:open_url(url)</h2><p>\u7B2C\u4E00\u5F15\u6570\u306B\u6E21\u3055\u308C\u305FURL\u3092\u30D6\u30E9\u30A6\u30B6\u306E\u65B0\u3057\u3044\u30BF\u30D6\u3067\u958B\u304D\u307E\u3059\u3002</p><h2 id="plugin-config" tabindex="-1"><a class="header-anchor" href="#plugin-config" aria-hidden="true">#</a> Plugin:config</h2><p>\u30D7\u30E9\u30B0\u30A4\u30F3\u306E\u8A2D\u5B9A\u304C\u683C\u7D0D\u3055\u308C\u308B\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3002\u30D7\u30E9\u30B0\u30A4\u30F3\u5B9A\u7FA9\u306Econfig\u3067\u8A2D\u5B9A\u3057\u305F\u30AD\u30FC\u3067\u5024\u304C\u5165\u308A\u307E\u3059\u3002</p>',25),o=[n];function h(d,s){return r(),i("div",null,o)}var l=e(a,[["render",h],["__file","plugin-api-reference.html.vue"]]);export{l as default};
