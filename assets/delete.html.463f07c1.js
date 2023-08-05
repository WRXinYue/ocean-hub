import{_,r as c,o as l,c as p,b as d,w as o,a as e,d as r}from"./app.b145dd9f.js";const h={},u=e("h1",{id:"notes-delete",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#notes-delete","aria-hidden":"true"},"#"),r(),e("code",null,"notes/delete")],-1),E=e("p",null,"\u30CE\u30FC\u30C8\u3092\u524A\u9664\u3057\u307E\u3059\u3002",-1),m=e("h2",{id:"\u30CF\u309A\u30E9\u30E1\u30FC\u30BF",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u30CF\u309A\u30E9\u30E1\u30FC\u30BF","aria-hidden":"true"},"#"),r(" \u30D1\u30E9\u30E1\u30FC\u30BF")],-1),C=e("h2",{id:"\u30EC\u30B9\u30DB\u309A\u30F3\u30B9",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u30EC\u30B9\u30DB\u309A\u30F3\u30B9","aria-hidden":"true"},"#"),r(" \u30EC\u30B9\u30DD\u30F3\u30B9")],-1),I=e("h2",{id:"\u30A8\u30E9\u30FC",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u30A8\u30E9\u30FC","aria-hidden":"true"},"#"),r(" \u30A8\u30E9\u30FC")],-1),N=e("h2",{id:"\u30EA\u30BD\u30FC\u30B9",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u30EA\u30BD\u30FC\u30B9","aria-hidden":"true"},"#"),r(" \u30EA\u30BD\u30FC\u30B9")],-1);function S(A,D){const i=c("el-alert"),n=c("MkApiConsole"),t=c("ClientOnly"),a=c("MkSchemaViewerItemObject"),s=c("MkSchemaViewer"),f=c("MkApiErrors"),b=c("MkApiResources");return l(),p("div",null,[u,E,d(i,{title:"\u30AF\u30EC\u30C7\u30F3\u30B7\u30E3\u30EB\u5FC5\u9808",type:"success",closable:!1}),d(t,null,{default:o(()=>[d(n,{name:"notes/delete",def:{summary:"\u30CE\u30FC\u30C8\u3092\u524A\u9664\u3057\u307E\u3059\u3002",description:"\u30CE\u30FC\u30C8\u3092\u524A\u9664\u3057\u307E\u3059\u3002",tags:["notes"],requireCredential:!0,req:{type:"object",properties:{noteId:{type:"string",format:"ocean:id",description:"\u30CE\u30FC\u30C8\u306Eid\u3002"}},required:["noteId"]},res:{},errors:{"490be23f-8c1f-4796-819f-94cb4f9d1630":{id:"490be23f-8c1f-4796-819f-94cb4f9d1630",code:"NO_SUCH_NOTE",description:"\u30CE\u30FC\u30C8\u304C\u5B58\u5728\u3057\u307E\u305B\u3093\u3002"},"fe8d7103-0ea8-4ec3-814d-f8b401dc69e9":{id:"fe8d7103-0ea8-4ec3-814d-f8b401dc69e9",code:"ACCESS_DENIED",description:"\u30CE\u30FC\u30C8\u3092\u524A\u9664\u3059\u308B\u6A29\u9650\u304C\u3042\u308A\u307E\u305B\u3093\u3002\u30CE\u30FC\u30C8\u306E\u524A\u9664\u306F\u3001\u30CE\u30FC\u30C8\u3092\u4F5C\u6210\u3057\u305F\u30E6\u30FC\u30B6\u30FC\u304B\u3001\u30B5\u30FC\u30D0\u30FC\u306E\u7BA1\u7406\u8005\u3042\u308B\u3044\u306F\u30E2\u30C7\u30EC\u30FC\u30BF\u30FC\u306E\u307F\u304C\u884C\u3048\u307E\u3059\u3002"}}}})]),_:1}),m,d(t,null,{default:o(()=>[d(a,{schema:{type:"object",properties:{noteId:{type:"string",format:"ocean:id",description:"\u30CE\u30FC\u30C8\u306Eid\u3002"}},required:["noteId"]}})]),_:1}),C,d(t,null,{default:o(()=>[d(s,{schema:{}})]),_:1}),I,d(t,null,{default:o(()=>[d(f,{errors:{"490be23f-8c1f-4796-819f-94cb4f9d1630":{id:"490be23f-8c1f-4796-819f-94cb4f9d1630",code:"NO_SUCH_NOTE",description:"\u30CE\u30FC\u30C8\u304C\u5B58\u5728\u3057\u307E\u305B\u3093\u3002"},"fe8d7103-0ea8-4ec3-814d-f8b401dc69e9":{id:"fe8d7103-0ea8-4ec3-814d-f8b401dc69e9",code:"ACCESS_DENIED",description:"\u30CE\u30FC\u30C8\u3092\u524A\u9664\u3059\u308B\u6A29\u9650\u304C\u3042\u308A\u307E\u305B\u3093\u3002\u30CE\u30FC\u30C8\u306E\u524A\u9664\u306F\u3001\u30CE\u30FC\u30C8\u3092\u4F5C\u6210\u3057\u305F\u30E6\u30FC\u30B6\u30FC\u304B\u3001\u30B5\u30FC\u30D0\u30FC\u306E\u7BA1\u7406\u8005\u3042\u308B\u3044\u306F\u30E2\u30C7\u30EC\u30FC\u30BF\u30FC\u306E\u307F\u304C\u884C\u3048\u307E\u3059\u3002"}},"common-errors":{"1384574d-a912-4b81-8601-c7b1c4085df1":{id:"1384574d-a912-4b81-8601-c7b1c4085df1",code:"CREDENTIAL_REQUIRED",description:"\u30AF\u30EC\u30C7\u30F3\u30B7\u30E3\u30EB\u5FC5\u9808\u306E\u30A8\u30F3\u30C9\u30DD\u30A4\u30F3\u30C8\u306B\u30AF\u30EC\u30C7\u30F3\u30B7\u30E3\u30EB\u7121\u3057\u3067\u30EA\u30AF\u30A8\u30B9\u30C8\u3055\u308C\u307E\u3057\u305F\u3002"},"d5826d14-3982-4d2e-8011-b9e9f02499ef":{id:"d5826d14-3982-4d2e-8011-b9e9f02499ef",code:"RATE_LIMIT_EXCEEDED",description:"\u30EC\u30FC\u30C8\u30EA\u30DF\u30C3\u30C8\u306B\u3088\u308B\u5236\u9650\u306E\u305F\u3081\u4E00\u6642\u7684\u306B\u5229\u7528\u3067\u304D\u307E\u305B\u3093\u3002"},"56f35758-7dd5-468b-8439-5d6fb8ec9b8e":{id:"56f35758-7dd5-468b-8439-5d6fb8ec9b8e",code:"ACCESS_DENIED",description:"\u30A2\u30AF\u30BB\u30B9\u6A29\u9650\u304C\u3042\u308A\u307E\u305B\u3093\u3002"},"1370e5b7-d4eb-4566-bb1d-7748ee6a1838":{id:"1370e5b7-d4eb-4566-bb1d-7748ee6a1838",code:"PERMISSION_DENIED",description:"\u4E0E\u3048\u3089\u308C\u305F\u30AF\u30EC\u30C7\u30F3\u30B7\u30E3\u30EB\u306B\u306F\u5FC5\u8981\u306A\u30D1\u30FC\u30DF\u30C3\u30B7\u30E7\u30F3\u304C\u3042\u308A\u307E\u305B\u3093\u3002"},"a8c724b3-6e9c-4b46-b1a8-bc3ed6258370":{id:"a8c724b3-6e9c-4b46-b1a8-bc3ed6258370",code:"YOUR_ACCOUNT_SUSPENDED",description:"\u30A2\u30AB\u30A6\u30F3\u30C8\u304C\u51CD\u7D50\u3055\u308C\u3066\u3044\u308B\u305F\u3081\u5229\u7528\u3067\u304D\u307E\u305B\u3093\u3002"},"3d81ceae-475f-4600-b2a8-2bc116157532":{id:"3d81ceae-475f-4600-b2a8-2bc116157532",code:"INVALID_PARAM",description:"\u30EA\u30AF\u30A8\u30B9\u30C8\u30D1\u30E9\u30E1\u30FC\u30BF\u306B\u8AA4\u308A\u304C\u3042\u308A\u307E\u3059\u3002"},"5d37dbcb-891e-41ca-a3d6-e690c97775ac":{id:"5d37dbcb-891e-41ca-a3d6-e690c97775ac",code:"INTERNAL_ERROR",description:"\u30B5\u30FC\u30D0\u30FC\u5185\u90E8\u3067\u554F\u984C\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002\u5F15\u304D\u7D9A\u304D\u554F\u984C\u304C\u767A\u751F\u3059\u308B\u5834\u5408\u306F\u7BA1\u7406\u8005\u306B\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044\u3002"}}})]),_:1}),N,d(t,null,{default:o(()=>[d(b,{def:{summary:"\u30CE\u30FC\u30C8\u3092\u524A\u9664\u3057\u307E\u3059\u3002",description:"\u30CE\u30FC\u30C8\u3092\u524A\u9664\u3057\u307E\u3059\u3002",tags:["notes"],requireCredential:!0,req:{type:"object",properties:{noteId:{type:"string",format:"ocean:id",description:"\u30CE\u30FC\u30C8\u306Eid\u3002"}},required:["noteId"]},res:{},errors:{"490be23f-8c1f-4796-819f-94cb4f9d1630":{id:"490be23f-8c1f-4796-819f-94cb4f9d1630",code:"NO_SUCH_NOTE",description:"\u30CE\u30FC\u30C8\u304C\u5B58\u5728\u3057\u307E\u305B\u3093\u3002"},"fe8d7103-0ea8-4ec3-814d-f8b401dc69e9":{id:"fe8d7103-0ea8-4ec3-814d-f8b401dc69e9",code:"ACCESS_DENIED",description:"\u30CE\u30FC\u30C8\u3092\u524A\u9664\u3059\u308B\u6A29\u9650\u304C\u3042\u308A\u307E\u305B\u3093\u3002\u30CE\u30FC\u30C8\u306E\u524A\u9664\u306F\u3001\u30CE\u30FC\u30C8\u3092\u4F5C\u6210\u3057\u305F\u30E6\u30FC\u30B6\u30FC\u304B\u3001\u30B5\u30FC\u30D0\u30FC\u306E\u7BA1\u7406\u8005\u3042\u308B\u3044\u306F\u30E2\u30C7\u30EC\u30FC\u30BF\u30FC\u306E\u307F\u304C\u884C\u3048\u307E\u3059\u3002"}}}})]),_:1})])}var M=_(h,[["render",S],["__file","delete.html.vue"]]);export{M as default};
