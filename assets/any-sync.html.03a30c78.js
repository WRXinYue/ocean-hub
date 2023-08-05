import{_ as e,o as p,c as r,e as a}from"./app.6043c0e4.js";var n="/assets/crdt.1ac7f6fe.gif",o="/assets/space.527fde0d.png",t="/assets/infrastructure.f5932461.png",c="/assets/peer_retrieval.c0510399.png";const i={},s=a('<h1 id="\u534F\u8BAE\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u534F\u8BAE\u6982\u8FF0" aria-hidden="true">#</a> \u534F\u8BAE\u6982\u8FF0</h1><p>Any-Sync \u662F\u4E00\u79CD\u5F00\u6E90\u534F\u8BAE\uFF0C\u65E8\u5728\u521B\u5EFA\u9AD8\u6027\u80FD\u3001\u672C\u5730\u4F18\u5148\u3001\u70B9\u5BF9\u70B9\u3001\u7AEF\u5BF9\u7AEF\u52A0\u5BC6\u7684\u5E94\u7528\u7A0B\u5E8F\uFF0C\u4FC3\u8FDB\u591A\u4E2A\u7528\u6237\u548C\u8BBE\u5907\u4E4B\u95F4\u7684\u65E0\u7F1D\u534F\u4F5C\u3002</p><p>\u901A\u8FC7\u4F7F\u7528\u8BE5\u534F\u8BAE\uFF0C\u7528\u6237\u53EF\u4EE5\u653E\u5FC3\u5730\u4FDD\u7559\u5BF9\u5176\u6570\u636E\u548C\u6570\u5B57\u4F53\u9A8C\u7684\u5B8C\u5168\u63A7\u5236\u3002\u4ED6\u4EEC\u6709\u6743\u5728\u4E0D\u540C\u7684\u670D\u52A1\u63D0\u4F9B\u5546\u4E4B\u95F4\u81EA\u7531\u8F6C\u6362\uFF0C\u751A\u81F3\u9009\u62E9\u81EA\u884C\u6258\u7BA1\u5E94\u7528\u7A0B\u5E8F\u3002</p><p>\u8FD9\u786E\u4FDD\u4E86\u7528\u6237\u5728\u7BA1\u7406\u4E2A\u4EBA\u4FE1\u606F\u548C\u6570\u5B57\u4E92\u52A8\u65B9\u9762\u7684\u6700\u5927\u7075\u6D3B\u6027\u548C\u81EA\u4E3B\u6027\u3002</p><h3 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h3><p>\u73B0\u6709\u7684\u5927\u591A\u6570\u4FE1\u606F\u7BA1\u7406\u5DE5\u5177\u90FD\u662F\u5728\u96C6\u4E2D\u5F0F\u5BA2\u6237\u670D\u52A1\u5668\u67B6\u6784\u4E0A\u5B9E\u65BD\u7684\uFF0C\u6216\u8005\u662F\u4E3A\u79BB\u7EBF\u5355\u7528\u6237\u4F7F\u7528\u800C\u8BBE\u8BA1\u7684\u3002\u65E0\u8BBA\u54EA\u79CD\u65B9\u5F0F\uFF0C\u7528\u6237\u90FD\u9700\u8981\u505A\u51FA\u6743\u8861\uFF1A\u4ED6\u4EEC\u53EF\u80FD\u4F1A\u9762\u4E34\u81EA\u7531\u53D7\u9650\u548C\u9690\u79C1\u88AB\u4FB5\u72AF\u7684\u95EE\u9898\uFF0C\u6216\u8005\u4E3A\u4E86\u907F\u514D\u8FD9\u79CD\u60C5\u51B5\u800C\u5728\u5DE5\u5177\u529F\u80FD\u4E0A\u505A\u51FA\u59A5\u534F\u3002</p><p>\u6211\u4EEC\u8BA4\u4E3A\u8FD9\u6709\u6096\u4E8E\u57FA\u672C\u7684\u6570\u5B57\u81EA\u7531\uFF0C\u56E0\u6B64\u9700\u8981\u65B0\u4E00\u4EE3\u8F6F\u4EF6\u6765\u5C0A\u91CD\u8FD9\u4E9B\u81EA\u7531\uFF0C\u540C\u65F6\u63D0\u4F9B\u4E00\u6D41\u7684\u7528\u6237\u4F53\u9A8C\u3002</p><p>\u6211\u4EEC\u5BF9 <code>any-sync</code> \u7684\u76EE\u6807\u662F\u5F00\u53D1\u4E00\u79CD\u534F\u8BAE\uFF0C\u4F7F\u8FD9\u79CD\u8F6F\u4EF6\u7684\u90E8\u7F72\u6210\u4E3A\u53EF\u80FD\u3002</p><p>Features:</p><ul><li>\u8DE8\u591A\u4E2A\u8BBE\u5907\u548C\u4EE3\u7406\u8FDB\u884C\u65E0\u51B2\u7A81\u6570\u636E\u590D\u5236</li><li>\u5185\u7F6E\u7AEF\u5230\u7AEF\u52A0\u5BC6\u529F\u80FD</li><li>\u53EF\u52A0\u5BC6\u9A8C\u8BC1\u7684\u66F4\u6539\u5386\u53F2\u8BB0\u5F55</li><li>\u9002\u5E94\u9891\u7E41\u64CD\u4F5C\uFF08\u9AD8\u6027\u80FD\uFF09</li><li>\u53EF\u9760\u3001\u53EF\u6269\u5C55\u7684\u57FA\u7840\u8BBE\u65BD</li><li>\u540C\u65F6\u652F\u6301 p2p \u548C\u8FDC\u7A0B\u901A\u4FE1</li></ul><h3 id="\u534F\u8BAE\u89E3\u91CA" tabindex="-1"><a class="header-anchor" href="#\u534F\u8BAE\u89E3\u91CA" aria-hidden="true">#</a> \u534F\u8BAE\u89E3\u91CA</h3><h4 id="\u6570\u636E\u8868\u793A" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u8868\u793A" aria-hidden="true">#</a> \u6570\u636E\u8868\u793A</h4><p><img src="'+n+'" alt="CRDT"></p><p><em><strong>\u5BF9\u8C61</strong></em></p><p><code>any-sync</code> \u65E8\u5728\u540C\u6B65\u7ED3\u6784\u4E3A<a href="https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type" target="_blank" rel="noopener noreferrer">\u65E0\u51B2\u7A81\u590D\u5236\u6570\u636E</a> <a href="https://en.wikipedia.org/wiki/Directed_acyclic_graph" target="_blank" rel="noopener noreferrer">\u6709\u5411\u65E0\u73AF\u56FE</a> (DAGs) \u7684\u6570\u5B57\u5BF9\u8C61\u3002\u5728\u8FD9\u79CD\u8868\u793A\u6CD5\u4E2D\uFF0C\u6BCF\u4E2A\u5BF9\u8C61\u90FD\u88AB\u89C6\u4E3A\u6839\uFF0C\u4EE3\u8868\u5176\u521D\u59CB\u72B6\u6001\uFF0C\u5E76\u6355\u6349\u5BF9\u8C61\u968F\u65F6\u95F4\u53D1\u751F\u7684\u6240\u6709\u540E\u7EED\u53D8\u5316\u3002\u7B80\u5355\u5730\u8BF4\uFF0C\u5728 &quot;\u540C\u6B65 &quot;\u4E2D\uFF0C\u5BF9\u8C61\u662F\u76F8\u5173\u53D8\u5316\u7684\u5B8C\u6574\u5386\u53F2\u7684\u5168\u9762\u8BB0\u5F55\u3002</p><p>\u540E\u9762\u6CA1\u6709\u53D8\u5316\u7684\u53D8\u5316\u662F\u5BF9\u8C61\u5934\u3002</p><p><em><strong>\u51B2\u7A81\u89E3\u51B3</strong></em></p><p><code>any-sync</code> \u4E13\u95E8\u8BBE\u8BA1\u7528\u4E8E\u652F\u6301\u591A\u4E2A\u8BBE\u5907\u548C\u4EE3\u7406\u4E4B\u95F4\u7684\u534F\u4F5C\uFF0C\u8FD9\u53EF\u80FD\u4F1A\u5BFC\u81F4\u5BF9\u8C61\u5177\u6709\u591A\u4E2A<code>\u5934</code>\u7684\u60C5\u51B5\u3002 \u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u5934\u6307\u7684\u662F\u6240\u6D89\u53CA\u7684\u6BCF\u4E2A\u8BBE\u5907\u6216\u4EE3\u7406\u89C2\u5BDF\u5230\u7684\u5BF9\u8C61\u7684\u672C\u5730\u72B6\u6001\u3002</p><p>\u5F53\u7528\u6237\u5BF9\u5177\u6709\u591A\u4E2A\u5934\u7684\u5BF9\u8C61\u8FDB\u884C\u66F4\u6539\u65F6\uFF0C\u65B0\u7684\u66F4\u6539\u5C06\u5408\u5E76\u5E76\u5F15\u7528\u6240\u6709\u8FD9\u4E9B\u5934\u3002 \u6B64\u8FC7\u7A0B\u6709\u6548\u5730\u5C06\u591A\u4E2A\u5206\u652F<code>\u5408\u5E76</code>\u5728\u4E00\u8D77\uFF0C\u4ECE\u800C\u4E3A\u5BF9\u8C61\u5E26\u6765\u7EDF\u4E00\u4E14\u5355\u4E00\u7684\u72B6\u6001\u3002</p><p>\u5728\u68C0\u7D22\u5BF9\u8C61\u5F53\u524D\u72B6\u6001\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u534F\u8BAE\u4EE5\u7279\u5B9A\u5934\u5F00\u59CB\uFF0C\u5E76\u9075\u5FAA\u5185\u5BB9 ID (CID) \u6765\u6784\u9020\u66F4\u6539\u5E8F\u5217\u3002 \u5982\u679C\u6709\u591A\u4E2A\u5934\u6216\u591A\u79CD\u53EF\u80FD\u7684\u65B9\u5F0F\u6765\u8BC6\u522B\u5148\u524D\u7684\u53D8\u5316\uFF0C\u5219\u91C7\u7528\u62D3\u6251\u6392\u5E8F\u3002 \u8FD9\u79CD\u6392\u5E8F\u4F9D\u8D56\u4E8E\u4E0E\u66F4\u6539\u76F8\u5173\u7684\u54C8\u5E0C\u503C\u6765\u786E\u5B9A\u66F4\u6539\u53D1\u751F\u7684\u987A\u5E8F\uFF0C\u6700\u7EC8\u5EFA\u7ACB\u6B63\u786E\u7684\u66F4\u6539\u5E8F\u5217\u3002</p><p><em><strong>\u5FEB\u7167</strong></em></p><p>\u4E3A\u4E86\u63D0\u9AD8\u68C0\u7D22\u5F53\u524D\u72B6\u6001\u7684\u6548\u7387\uFF0C<code>any-sync</code> \u6240\u91C7\u7528\u7684\u534F\u8BAE\u4F7F\u7528\u57FA\u4E8E\u6982\u7387\u7684\u673A\u5236\uFF0C\u5C06\u66F4\u6539\u8F6C\u6362\u4E3A\u5FEB\u7167\u3002\u521B\u5EFA\u5FEB\u7167\u540E\uFF0C\u5C31\u4E0D\u518D\u9700\u8981\u5206\u6790\u5728\u6B64\u4E4B\u524D\u53D1\u751F\u7684\u66F4\u6539\uFF0C\u4EE5\u91CD\u5EFA\u5BF9\u8C61\u7684\u5F53\u524D\u72B6\u6001\u3002\u8FD9\u6837\u7684\u4F18\u5316\u901A\u8FC7\u5728\u5FEB\u7167\u53EF\u7528\u65F6\u8DF3\u8FC7\u5BF9\u524D\u9762\u66F4\u6539\u7684\u5206\u6790\uFF0C\u5B9E\u73B0\u4E86\u66F4\u5FEB\u901F\u7684\u68C0\u7D22\u3002</p><p><code>any-sync</code> \u662F\u4E00\u4E2A\u72EC\u7ACB\u4E8E\u7279\u5B9A\u5BA2\u6237\u7AEF\u5B9E\u73B0\u7684\u534F\u8BAE\uFF0C\u4F7F\u5176\u6210\u4E3A\u5BA2\u6237\u7AEF\u4E0D\u53EF\u77E5\u3002\u5B83\u63D0\u4F9B\u4E86\u904D\u5386\u5BF9\u8C61\u7684\u673A\u5236\uFF0C\u5141\u8BB8\u5E94\u7528\u7A0B\u5E8F\u6839\u636E\u901A\u8FC7\u534F\u8BAE\u63A5\u6536\u5230\u7684\u5BF9\u8C61\u6784\u5EFA\u81EA\u5DF1\u7684\u5E94\u7528\u72B6\u6001\u3002\u6362\u53E5\u8BDD\u8BF4\uFF0C\u4F7F\u7528 <code>any-sync</code> \u7684\u5E94\u7528\u7A0B\u5E8F\u53EF\u4EE5\u5229\u7528\u4ECE\u4E2D\u6536\u5230\u7684\u5BF9\u8C61\u6784\u5EFA\u81EA\u5DF1\u7684\u5185\u90E8\u72B6\u6001\uFF0C\u4EE5\u6EE1\u8DB3\u7279\u5B9A\u7684\u9700\u6C42\u548C\u529F\u80FD\u3002</p><p><em><strong>\u6587\u4EF6</strong></em></p><p><code>any-sync</code> \u7684\u6587\u4EF6\u5904\u7406\u662F\u4E00\u4E2A\u4E24\u90E8\u5206\u7684\u89E3\u51B3\u65B9\u6848\uFF1A\u6570\u636E\u5B58\u50A8\u548C\u6570\u636E\u68C0\u7D22\u3002</p><p>\u5B83\u4F7F\u7528 <a href="https://ipld.io/" target="_blank" rel="noopener noreferrer">IPLD</a> \u6570\u636E\u7ED3\u6784\u6765\u5B58\u50A8\u6587\u4EF6\u7684\u6570\u636E\u3002\u6587\u4EF6\u53EF\u4EE5\u5B58\u50A8\u5728\u7528\u6237\u8BBE\u5907\u4E0A\uFF0C\u4E5F\u53EF\u4EE5\u5B58\u50A8\u5728\u5916\u90E8\u7F51\u7EDC\u4E0A\u7684\u6587\u4EF6\u8282\u70B9\u4E0A\uFF0C\u8FD9\u610F\u5473\u7740\u534F\u8BAE\u53EF\u4EE5\u4E0E\u7B80\u5355\u7F51\u7EDC\u62D3\u6251\u4E00\u8D77\u5DE5\u4F5C\u3002</p><p><code>any-sync</code> \u540C\u4E4B\u524D\u7684 <a href="https://docs.ipfs.tech/concepts/bitswap/" target="_blank" rel="noopener noreferrer">bitswap</a> \u76F8\u6BD4\u6709\u81EA\u5DF1\u72EC\u7279\u7684\u6587\u4EF6\u68C0\u7D22\u65B9\u5F0F\uFF0C\u5176\u9002\u7528\u4E8E\u590D\u6742\u7F51\u7EDC\u62D3\u6251\u3002</p><p><em><strong>\u7A7A\u95F4</strong></em></p><p><img src="'+o+'" alt="\u7A7A\u95F4"></p><p>\u7A7A\u95F4\u662F\u4E00\u4E2A\u5E26\u6709\u8BBF\u95EE\u63A7\u5236\u5217\u8868 (ACL) \u7684\u6570\u5B57\u5BF9\u8C61\u96C6\u5408\uFF0C\u7528\u6237\u53EF\u4EE5\u5B9A\u4E49\u8C01\u53EF\u4EE5\u8BFB\u53D6\u548C\u4FEE\u6539\u5176\u5185\u5BB9\u3002</p><p>\u5728\u6700\u7B80\u5355\u7684\u60C5\u51B5\u4E0B\uFF0C\u6BCF\u4E2A\u7A7A\u95F4\u90FD\u4FDD\u5B58\u4E00\u4E2A\u7528\u6237\u7684\u6570\u636E\uFF0C\u53EF\u4EE5\u4ECE\u8BE5\u7528\u6237\u7684\u591A\u4E2A\u8BBE\u5907\u8BBF\u95EE\u8BE5\u7A7A\u95F4\u3002\u4F46\u662F\uFF0C\u5728\u591A\u4E2A\u4EE3\u7406\u5728\u540C\u4E00\u4E2A\u7A7A\u95F4\u4E2D\u534F\u4F5C\u7684\u60C5\u51B5\u4E0B\uFF0C\u7A7A\u95F4\u5C06\u5B58\u50A8\u6709\u6743\u8BBF\u95EE\u5176\u6570\u636E\u7684\u6BCF\u4E2A\u7528\u6237\u8BBE\u5907\u4E0A\u7684\u6570\u636E\u3002\u5728\u8FD9\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u8BBF\u95EE\u548C\u7BA1\u7406\u7A7A\u95F4\u5185\u6570\u636E\u7684\u6743\u9650\u7531 ACL \u786E\u5B9A\u3002</p><p>\u7A7A\u95F4\u53EF\u4EE5\u5B58\u50A8\u5728\u7528\u6237\u8BBE\u5907\u4E0A\uFF0C\u4E5F\u53EF\u4EE5\u5B58\u50A8\u5728\u5916\u90E8\u7F51\u7EDC\u4E0A\u7684\u540C\u6B65\u8282\u70B9\u4E0A\u3002</p><p><em><strong>\u52A0\u5BC6</strong></em></p><p>\u6BCF\u4E2A\u7528\u6237\u90FD\u6709\u7528\u4E8E\u7B7E\u540D\u3001\u52A0\u5BC6\u548C\u89E3\u5BC6\u7684\u79C1\u94A5\u548C\u516C\u94A5\u3002</p><p><code>any-sync</code> \u4F7F\u7528 <a href="https://en.wikipedia.org/wiki/EdDSA" target="_blank" rel="noopener noreferrer">Ed25519</a> \u7B97\u6CD5\u8FDB\u884C\u7B7E\u540D\uFF0C\u4EE5\u63D0\u4F9B\u5F3A\u5927\u7684\u52A0\u5BC6\u5B89\u5168\u6027\uFF0C\u540C\u65F6\u4FDD\u6301\u6027\u80FD\u5F00\u9500\u8F83\u4F4E\u3002</p><p>\u6BCF\u5F53\u7528\u6237\u4FEE\u6539\u6570\u636E\u65F6\uFF0C\u4F7F\u7528\u4ED6\u4EEC\u81EA\u5DF1\u7684\u79C1\u94A5\u5BF9\u66F4\u6539\u8FDB\u884C\u52A0\u5BC6\u548C\u7B7E\u540D\u3002\u5F53\u8FD9\u4E9B\u66F4\u6539\u4E0E\u5176\u4ED6\u8BBE\u5907\u6216\u540C\u6B65\u8282\u70B9\u540C\u6B65\u65F6\uFF0C\u5C06\u4F7F\u7528\u5171\u4EAB\u7684\u516C\u94A5\u8FDB\u884C\u9A8C\u8BC1\u3002\u7136\u800C\uFF0C\u53EA\u6709\u62E5\u6709\u79C1\u94A5\u7684\u7528\u6237\u624D\u80FD\u8BBF\u95EE\u8FD9\u4E9B\u66F4\u6539\u7684\u5185\u5BB9\u3002</p><h4 id="\u57FA\u7840\u8BBE\u65BD" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u8BBE\u65BD" aria-hidden="true">#</a> \u57FA\u7840\u8BBE\u65BD</h4><p><img src="'+t+'" alt="\u57FA\u7840\u8BBE\u65BD"></p><p>\u867D\u7136 <code>any-sync</code> \u5728\u7528\u6237\u7684\u8BBE\u5907\u548C\u672C\u5730p2p\u7F51\u7EDC\u4E0A\u8FD0\u884C\uFF0C\u4F46\u9700\u8981\u57FA\u7840\u8BBE\u65BD\u5C42\u6765\u63D0\u4F9B\u5916\u90E8\u6570\u636E\u5B58\u50A8\u548C\u5907\u4EFD\uFF0C\u4EE5\u53CA\u4E0D\u540C\u7F51\u7EDC\u4E2D\u4EE3\u7406\u4E4B\u95F4\u7684\u65E0\u7F1D\u534F\u4F5C\u3002</p><p><code>any-sync</code>\u534F\u8BAE\u5728\u7528\u6237\u7684\u8BBE\u5907\u548C\u57FA\u7840\u8BBE\u65BD\u6570\u5B57\u4E0A\u7684\u8FD0\u884C\u65B9\u5F0F\u76F8\u540C\u3002\u56E0\u6B64\uFF0C\u6BCF\u4E2A\u8282\u70B9\u90FD\u53EF\u4EE5\u770B\u4F5C\u662F\u4E00\u4E2A\u5BF9\u7B49\u8282\u70B9\u3002</p><p><em><strong>\u8282\u70B9</strong></em><br> \u57FA\u7840\u8BBE\u65BD\u65B9\u9762\u5305\u62EC\u4E09\u79CD\u7C7B\u578B\u7684\u8282\u70B9\uFF1A\u540C\u6B65\u8282\u70B9\u3001\u6587\u4EF6\u8282\u70B9\u548C\u534F\u8C03\u5668\u8282\u70B9\u3002</p><ul><li><em>\u540C\u6B65\u8282\u70B9</em> \u5B58\u50A8\u548C\u5904\u7406\u7A7A\u95F4\u3002\u4E3A\u4E86\u63D0\u9AD8\u57FA\u7840\u8BBE\u65BD\u7684\u53EF\u9760\u6027\uFF0C\u6BCF\u4E2A\u7A7A\u95F4\u7531\u591A\u4E2A\u540C\u6B65\u8282\u70B9\u63D0\u4F9B\u670D\u52A1\u3002</li><li><em>\u6587\u4EF6\u8282\u70B9</em> \u6839\u636E IPLD \u6570\u636E\u7ED3\u6784\u5B58\u50A8\u548C\u5904\u7406\u6587\u4EF6\u3002</li><li><em>\u534F\u8C03\u5668\u8282\u70B9</em> \u8D1F\u8D23\u5B58\u50A8\u548C\u66F4\u65B0\u57FA\u7840\u8BBE\u65BD\u914D\u7F6E\uFF1A\u5B83\u7BA1\u7406\u8282\u70B9\u5217\u8868\uFF0C\u4E3A\u5BA2\u6237\u7AEF\u63D0\u4F9B\u7A7A\u95F4\u8282\u70B9\u7684\u5730\u5740\uFF0C\u4E3A\u8282\u70B9\u63D0\u4F9B\u526F\u672C\u7684\u5730\u5740\u7B49\u3002</li></ul><p><em><strong>\u8D1F\u8F7D\u5206\u914D</strong></em></p><p><a href="https://github.com/anyproto/go-chash" target="_blank" rel="noopener noreferrer">\u8D1F\u8F7D\u5206\u914D</a> \u662F\u901A\u8FC7\u6A21\u5757\u5316\u54C8\u5E0C\u548C\u4E00\u81F4\u6027\u54C8\u5E0C\u7684\u7EC4\u5408\u6765\u5B9E\u73B0\u7684\u3002\u8BE5\u7B97\u6CD5\u4F7F\u7528\u4E00\u81F4\u6027\u54C8\u5E0C\u5728\u8282\u70B9\u95F4\u5206\u5E03\u5206\u533A\uFF08\u7A7A\u95F4\u7EC4\uFF09\uFF0C\u7136\u540E\u4F7F\u7528\u6A21\u5757\u5316\u54C8\u5E0C\u786E\u5B9A\u7A7A\u95F4\u5206\u533A\uFF08\u4ECE\u800C\u786E\u5B9A\u7A7A\u95F4\u7684\u8282\u70B9\uFF09\u3002</p><p>\u8BE5\u7B97\u6CD5\u9650\u5236\u4E86\u8282\u70B9\u4E0A\u7684\u8D1F\u8F7D\uFF0C\u4F7F\u5206\u914D\u66F4\u52A0\u5747\u5300\u3002</p><p>\u6DFB\u52A0\u65B0\u8282\u70B9\u4F1A\u5BFC\u81F4\u57FA\u7840\u8BBE\u65BD\u914D\u7F6E\u53D1\u751F\u53D8\u5316\u3002\u6B64\u4E8B\u4EF6\u542F\u52A8\u4E86\u91CD\u5206\u7247\u5904\u7406\u8FC7\u7A0B\uFF0C\u6839\u636E\u65B0\u914D\u7F6E\u5C06\u7A7A\u95F4\u53CA\u5176\u6570\u636E\u5728\u8282\u70B9\u4E4B\u95F4\u4F20\u8F93\u3002</p><h4 id="\u5BF9\u7B49\u8282\u70B9\u68C0\u7D22" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u7B49\u8282\u70B9\u68C0\u7D22" aria-hidden="true">#</a> \u5BF9\u7B49\u8282\u70B9\u68C0\u7D22</h4><p><img src="'+c+'" alt="\u6DF7\u5408\u5BF9\u7B49\u8282\u70B9\u68C0\u7D22"></p><p><em><strong>\u672C\u5730p2p</strong></em></p><p>\u4E3A\u4E86\u5728\u672C\u5730\u7F51\u7EDC\u4E2D\u627E\u5230\u5BF9\u7B49\u8282\u70B9\u5E76\u4E0E\u5B83\u4EEC\u8FDB\u884C\u901A\u4FE1\uFF0C\u65E0\u9700\u8FDE\u63A5\u5230\u5916\u90E8\u57FA\u7840\u8BBE\u65BD\uFF0C<code>any-sync</code> \u4F9D\u8D56\u4E8E <a href="https://en.wikipedia.org/wiki/Multicast_DNS" target="_blank" rel="noopener noreferrer">mDNS \u534F\u8BAE</a>\u3002</p><p>\u7528\u6237\u8BBE\u5907\u53D1\u9001\u4E00\u4E2A mDNS \u67E5\u8BE2\uFF0C\u8BF7\u6C42\u5177\u6709\u7279\u5B9A\u4E3B\u673A\u540D\u7684\u8BBE\u5907\u7684 IP \u5730\u5740\u3002\u7F51\u7EDC\u4E0A\u5177\u6709\u8BE5\u4E3B\u673A\u540D\u7684\u5176\u4ED6\u8BBE\u5907\u5C06\u4F7F\u7528\u5B83\u4EEC\u7684 IP \u5730\u5740\u8FDB\u884C\u54CD\u5E94\u3002</p><p>\u4E00\u65E6\u5BA2\u6237\u7AEF\u83B7\u5F97\u540C\u7EA7\u8BBE\u5907\u7684 IP \u5730\u5740\uFF0C<code>any-sync</code> \u5C1D\u8BD5\u68C0\u7D22\u6B64\u8BBE\u5907\u4E0A\u5B58\u5728\u7684\u7A7A\u95F4\u3002</p><p>\u5982\u679C\u5F53\u524D\u7528\u6237\u53EF\u4EE5\u8BBF\u95EE\u540C\u7EA7\u8BBE\u5907\u4E0A\u7684\u7A7A\u95F4\uFF08\u57FA\u4E8E\u7A7A\u95F4ACL\uFF09\uFF0C\u5219\u5F00\u59CB\u5E38\u89C4\u6D88\u606F\u4EA4\u6362\u3002</p><p>\u540C\u7EA7\u8BBE\u5907\u4E0A\u5B58\u50A8\u7684\u6587\u4EF6\u4E5F\u53EF\u4EE5\u76F4\u63A5\u4ECE\u4E0A\u9762\u68C0\u7D22\u3002</p><p>\u8FD9\u5141\u8BB8\u540C\u4E00\u7F51\u7EDC\u4E0A\u7684\u8BBE\u5907\u4E4B\u95F4\u8FDB\u884C\u9AD8\u6548\u4E14\u76F4\u63A5\u7684\u901A\u4FE1\uFF0C\u65E0\u9700\u8FDC\u7A0B\u670D\u52A1\u5668\u6216\u4E92\u8054\u7F51\u8FDE\u63A5\u3002</p><p><em><strong>\u5168\u7403\u7F51\u7EDC</strong></em></p><p>\u7528\u6237\u8BBE\u5907\u4E0A\u7684 <code>any-sync</code> \u5B58\u50A8\u6709\u5916\u90E8\u57FA\u7840\u8BBE\u65BD\u5730\u5740\u7684\u914D\u7F6E\u3002\u5B83\u8BF7\u6C42\u534F\u8C03\u5668\u8282\u70B9\u4E3A\u7528\u6237\u5206\u914D\u7684\u7A7A\u95F4\u7684\u540C\u6B65\u8282\u70B9\u7684\u5730\u5740\u3002</p><p>\u4E00\u65E6\u5BA2\u6237\u7AEF\u63A5\u6536\u5230\u7A7A\u95F4\u8282\u70B9\u7684\u5730\u5740\uFF0C\u5B83\u8BA2\u9605\u66F4\u65B0\u5E76\u5C06\u66F4\u6539\u53D1\u9001\u7ED9\u5B83\u3002</p><p>\u5728\u5916\u90E8\u57FA\u7840\u8BBE\u65BD\u4E0A\u5B58\u50A8\u7684\u6587\u4EF6\u53EF\u4EE5\u4ECE\u6587\u4EF6\u8282\u70B9\u4E2D\u68C0\u7D22\u3002</p><p>\u6B64\u5916\uFF0C\u5982\u679C\u7528\u6237\u5728\u540C\u4E00\u5C40\u57DF\u7F51\u4E2D\u6709\u4E24\u53F0\u5B89\u88C5\u6709<code>any-sync</code>\u7684\u8BBE\u5907\uFF0C\u5219\u53EF\u4EE5\u4F7F\u7528\u6DF7\u5408\u6A21\u5F0F\u3002\u6BD4\u65B9\u8BF4\uFF0C\u7B2C\u4E00\u53F0\u8BBE\u5907\u53EF\u4EE5\u8BBF\u95EE\u5916\u90E8\u57FA\u7840\u8BBE\u65BD\uFF0C\u800C\u7B2C\u4E8C\u53F0\u8BBE\u5907\u4E0D\u80FD\u8BBF\u95EE\u3002</p><p>\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u7B2C\u4E00\u53F0\u8BBE\u5907\u4F5C\u4E3A\u6865\u63A5\u8BBE\u5907\u3002\u5B83\u4E0E\u672C\u5730\u5BF9\u7B49\u65B9\u4EA4\u6362\u6570\u636E\uFF0C\u5E76\u5C06\u7B2C\u4E8C\u53F0\u8BBE\u5907\u4E0A\u6240\u505A\u7684\u66F4\u6539\u8F6C\u6362\u4E3A\u5916\u90E8\u5B58\u50A8\u3002</p><p>\u5B83\u8FD8\u53EF\u4EE5\u53CD\u8FC7\u6765\u5DE5\u4F5C\uFF1A\u5F53\u7B2C\u4E00\u53F0\u8BBE\u5907\u4ECE\u8FDC\u7A0B\u540C\u6B65\u8282\u70B9\u63A5\u6536\u66F4\u65B0\u65F6\uFF0C\u5B83\u901A\u8FC7\u672C\u5730p2p\u8FDE\u63A5\u5C06\u8FD9\u4E9B\u66F4\u65B0\u53D1\u9001\u5230\u7B2C\u4E8C\u53F0\u8BBE\u5907\u3002</p><h3 id="\u5F00\u53D1\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#\u5F00\u53D1\u80CC\u666F" aria-hidden="true">#</a> \u5F00\u53D1\u80CC\u666F</h3><p>\u6211\u4EEC\u4E86\u89E3\u5230\u5F00\u53D1\u548C\u7EF4\u62A4\u4E00\u4E2A\u5168\u65B0\u534F\u8BAE\u7684\u91CD\u8981\u6027\uFF0C\u5E76\u5728\u4ED4\u7EC6\u8003\u8651\u73B0\u6709\u89E3\u51B3\u65B9\u6848\u4E4B\u540E\u505A\u51FA\u4E86\u8FD9\u4E2A\u51B3\u5B9A\u3002</p><p>\u6211\u4EEC\u8BC4\u4F30\u4E86\u5982 RGA\u3001Logoot\u3001LSEQ\u3001Automerge \u7B49\u7B97\u6CD5\u7684\u5B9E\u73B0\u3002\u5C3D\u7BA1\u5B83\u4EEC\u5728\u6570\u636E\u8868\u793A\u65B9\u9762\u6709\u7C7B\u4F3C\u7684\u60F3\u6CD5\uFF0C\u5982\u5BF9\u8C61\u64CD\u4F5C\u7684\u903B\u8F91\u6392\u5E8F\uFF0C\u4F46\u5B83\u4EEC\u4E0D\u63D0\u4F9B\u5185\u5BB9\u6807\u8BC6\u7B26\u548C\u52A0\u5BC6\u65B9\u6848\u3002</p><p>\u6B64\u5916\uFF0C\u5B83\u4EEC\u8FD8\u8BBE\u8BA1\u7528\u4E8E\u5904\u7406\u7EAF\u6587\u672C\u6570\u636E\uFF0C\u800Cany-sync \u4F9D\u8D56\u4E8E\u4E8C\u8FDB\u5236\u683C\u5F0F\u6765\u652F\u6301\u590D\u6742\u6570\u636E\u7ED3\u6784\u3002</p><p>\u56E0\u6B64\uFF0C\u6211\u4EEC\u8BBE\u8BA1\u4E86\u7B26\u5408\u6211\u4EEC\u9700\u6C42\u7684\u6570\u636E\u7ED3\u6784\u3002\u503C\u5F97\u6CE8\u610F\u7684\u662F\uFF0C\u524D\u8FF0\u89E3\u51B3\u65B9\u6848\u4E2D\u6CA1\u6709\u4E00\u4E2A\u652F\u6301\u6DF7\u5408\u7F51\u7EDC\uFF0C\u8FD9\u5C06\u9700\u8981\u6211\u4EEC\u5728\u5B83\u4EEC\u4E4B\u4E0A\u6784\u5EFA\u4E00\u4E9B\u4E1C\u897F\u3002</p><p>\u6211\u4EEC\u8FD8\u8003\u8651\u8FC7\u4F7F\u7528 IPFS\uFF0C\u4F46\u5176\u5BF9\u5185\u5BB9\u6807\u8BC6\u7B26\u7684\u5904\u7406\u65B9\u5F0F\u5E76\u4E0D\u80FD\u6EE1\u8DB3\u6211\u4EEC\u7684\u4F7F\u7528\u573A\u666F\u3002\u867D\u7136 IPFS \u53EF\u4EE5\u89E3\u51B3\u6211\u4EEC\u5BF9\u6DF7\u5408\u7F51\u7EDC\u7684\u9700\u6C42\uFF0C\u4F46\u5B83\u4F7F\u7528 CID \u6765\u63CF\u8FF0\u6587\u6863\uFF0C\u5E76\u4E14\u8FD9\u4E2A CID \u4F1A\u968F\u7740\u6BCF\u6B21\u4FEE\u6539\u800C\u53D1\u751F\u53D8\u5316\u3002\u7136\u800C\uFF0C\u6211\u4EEC\u9700\u8981\u8BA9\u6587\u6863\u5177\u6709\u7A33\u5B9A\u7684\u6807\u8BC6\u7B26\uFF0C\u4EE5\u4FBF\u4E8E\u94FE\u63A5\u4EE5\u53CA\u5176\u4ED6\u76EE\u7684\u3002</p><p>\u5728 IPFS \u4E4B\u4E0A\u521B\u5EFA\u7A33\u5B9A\u7684\u6807\u8BC6\u7B26\u5E76\u5B9E\u73B0\u5408\u5E76\u4E0D\u540C\u6587\u6863\u72B6\u6001\u7684\u903B\u8F91\u8FC7\u4E8E\u590D\u6742\uFF0C\u56E0\u6B64\u6211\u4EEC\u9009\u62E9\u4E86\u4E00\u79CD\u66F4\u7B80\u5355\u7684\u65B9\u6CD5\u3002</p><h3 id="\u4E0B\u4E00\u6B65\u8BA1\u5212" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u4E00\u6B65\u8BA1\u5212" aria-hidden="true">#</a> \u4E0B\u4E00\u6B65\u8BA1\u5212</h3><p>\u6211\u4EEC\u5F88\u9AD8\u5174\u5411\u793E\u533A\u5BA3\u5E03 <code>any-sync</code> \u9879\u76EE\u7684\u65E9\u671F\u5F00\u53D1\u9636\u6BB5\u3002</p><p>\u5728\u5373\u5C06\u5230\u6765\u7684\u5F00\u53D1\u9636\u6BB5\uFF0C\u6211\u4EEC\u8BA1\u5212\u5B9E\u73B0\u4EE5\u4E0B\u91CD\u8981\u529F\u80FD\uFF1A</p><ul><li>\u652F\u6301\u591A\u4EE3\u7406\u673A\u5236\u7684\u5B8C\u5168\u8BBF\u95EE\u63A7\u5236\u5217\u8868\uFF08ACL\uFF09\uFF1A \u901A\u8FC7\u4E3A\u540C\u6B65\u8FC7\u7A0B\u4E2D\u6D89\u53CA\u7684\u4E0D\u540C\u4EE3\u7406\u63D0\u4F9B\u5168\u9762\u7684\u8BBF\u95EE\u6743\u9650\u548C\u7279\u6743\u63A7\u5236\uFF0C\u8FD9\u4E2A\u6539\u8FDB\u5C06\u5B9E\u73B0\u590D\u6742\u6570\u5B57\u534F\u4F5C\u573A\u666F\u3002</li><li>\u591A\u670D\u52A1\u63D0\u4F9B\u5546\u652F\u6301\uFF1A\u6211\u4EEC\u6253\u7B97\u5F15\u5165\u5BF9\u591A\u4E2A\u670D\u52A1\u63D0\u4F9B\u5546\u7684\u652F\u6301\uFF0C\u4FC3\u8FDB\u4E0D\u540C\u8FDC\u7A0B\u57FA\u7840\u8BBE\u65BD\u4E4B\u95F4\u7684\u65E0\u7F1D\u901A\u4FE1\u3002\u8FD9\u4E2A\u529F\u80FD\u5C06\u63D0\u9AD8\u4E92\u64CD\u4F5C\u6027\uFF0C\u4F7F\u7528\u6237\u80FD\u591F\u5728\u5404\u79CD\u57FA\u7840\u8BBE\u65BD\u63D0\u4F9B\u5546\u4E4B\u95F4\u8FDB\u884C\u8FDE\u63A5\u548C\u534F\u4F5C\u3002</li><li>\u5168\u7403\u7AEF\u5230\u7AEF\uFF08p2p\uFF09\u901A\u4FE1\uFF1A <code>any-sync</code> \u5C06\u8FDB\u884C\u4F18\u5316\uFF0C\u4F7F\u8BBE\u5907\u4E4B\u95F4\u65E0\u9700\u8FDC\u7A0B\u57FA\u7840\u8BBE\u65BD\u5373\u53EF\u76F4\u63A5\u901A\u4FE1\u548C\u8FDE\u63A5\u3002\u8FD9\u9879\u6539\u8FDB\u5C06\u4F7F\u7528\u6237\u80FD\u591F\u5EFA\u7ACB\u76F4\u63A5\u7684 p2p \u8FDE\u63A5\uFF0C\u52A0\u5FEB\u6570\u636E\u540C\u6B65\u901F\u5EA6\uFF0C\u63D0\u9AD8\u6548\u7387\u3002</li></ul><p>\u6211\u4EEC\u81F4\u529B\u4E8E\u4E0D\u65AD\u5B8C\u5584 <code>any-sync</code>\uFF0C\u5E76\u5F88\u9AD8\u5174\u5728\u4E0D\u4E45\u7684\u5C06\u6765\u5B9E\u73B0\u8FD9\u4E9B\u6FC0\u52A8\u4EBA\u5FC3\u7684\u529F\u80FD\uFF0C\u4E3A\u793E\u533A\u5E26\u6765\u66F4\u591A\u597D\u5904\u3002</p>',74),d=[s];function h(l,y){return p(),r("div",null,d)}var m=e(i,[["render",h],["__file","any-sync.html.vue"]]);export{m as default};