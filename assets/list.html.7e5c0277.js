import{_ as m,r as a,o as h,c as p,b as t,w as o,a as e,d as r}from"./app.b145dd9f.js";const f={},b=e("h1",{id:"hashtags-list",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#hashtags-list","aria-hidden":"true"},"#"),r(),e("code",null,"hashtags/list")],-1),u=e("p",null,"\u30CF\u30C3\u30B7\u30E5\u30BF\u30B0\u306E\u4E00\u89A7\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002",-1),_=e("h2",{id:"\u30CF\u309A\u30E9\u30E1\u30FC\u30BF",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u30CF\u309A\u30E9\u30E1\u30FC\u30BF","aria-hidden":"true"},"#"),r(" \u30D1\u30E9\u30E1\u30FC\u30BF")],-1),U=e("h2",{id:"\u30EC\u30B9\u30DB\u309A\u30F3\u30B9",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u30EC\u30B9\u30DB\u309A\u30F3\u30B9","aria-hidden":"true"},"#"),r(" \u30EC\u30B9\u30DD\u30F3\u30B9")],-1),y=e("h2",{id:"\u30A8\u30E9\u30FC",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u30A8\u30E9\u30FC","aria-hidden":"true"},"#"),r(" \u30A8\u30E9\u30FC")],-1),R=e("h2",{id:"\u30EA\u30BD\u30FC\u30B9",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u30EA\u30BD\u30FC\u30B9","aria-hidden":"true"},"#"),r(" \u30EA\u30BD\u30FC\u30B9")],-1);function E(g,L){const d=a("MkApiConsole"),s=a("ClientOnly"),n=a("MkSchemaViewerItemObject"),i=a("MkSchemaViewer"),c=a("MkApiErrors"),l=a("MkApiResources");return h(),p("div",null,[b,u,t(s,null,{default:o(()=>[t(d,{name:"hashtags/list",def:{summary:"\u30CF\u30C3\u30B7\u30E5\u30BF\u30B0\u306E\u4E00\u89A7\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002",description:"\u30CF\u30C3\u30B7\u30E5\u30BF\u30B0\u306E\u4E00\u89A7\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002",tags:["hashtags"],requireCredential:!1,req:{type:"object",properties:{limit:{type:"integer",minimum:1,maximum:100,default:10,description:"\u53D6\u5F97\u3059\u308B\u30CF\u30C3\u30B7\u30E5\u30BF\u30B0\u306E\u6700\u5927\u6570\u3002"},attachedToUserOnly:{type:"boolean",default:!1,description:"\u30E6\u30FC\u30B6\u30FC\u304C\u4F7F\u3063\u305F\u30CF\u30C3\u30B7\u30E5\u30BF\u30B0\u306E\u307F\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002"},attachedToLocalUserOnly:{type:"boolean",default:!1,description:"\u30ED\u30FC\u30AB\u30EB\u30E6\u30FC\u30B6\u30FC\u304C\u4F7F\u3063\u305F\u30CF\u30C3\u30B7\u30E5\u30BF\u30B0\u306E\u307F\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002"},attachedToRemoteUserOnly:{type:"boolean",default:!1,description:"\u30EA\u30E2\u30FC\u30C8\u30E6\u30FC\u30B6\u30FC\u304C\u4F7F\u3063\u305F\u30CF\u30C3\u30B7\u30E5\u30BF\u30B0\u306E\u307F\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002"},sort:{type:"string",enum:["+mentionedUsers","-mentionedUsers","+mentionedLocalUsers","-mentionedLocalUsers","+mentionedRemoteUsers","-mentionedRemoteUsers","+attachedUsers","-attachedUsers","+attachedLocalUsers","-attachedLocalUsers","+attachedRemoteUsers","-attachedRemoteUsers"],description:"\u30BD\u30FC\u30C8\u9806\u3002+ \u306F\u964D\u9806\u3001- \u306F\u6607\u9806\u3092\u793A\u3057\u307E\u3059\u3002"}},required:["sort"]},res:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,ref:"Hashtag",$ref:"ocean://Hashtag"}},errors:{}}})]),_:1}),_,t(s,null,{default:o(()=>[t(n,{schema:{type:"object",properties:{limit:{type:"integer",minimum:1,maximum:100,default:10,description:"\u53D6\u5F97\u3059\u308B\u30CF\u30C3\u30B7\u30E5\u30BF\u30B0\u306E\u6700\u5927\u6570\u3002"},attachedToUserOnly:{type:"boolean",default:!1,description:"\u30E6\u30FC\u30B6\u30FC\u304C\u4F7F\u3063\u305F\u30CF\u30C3\u30B7\u30E5\u30BF\u30B0\u306E\u307F\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002"},attachedToLocalUserOnly:{type:"boolean",default:!1,description:"\u30ED\u30FC\u30AB\u30EB\u30E6\u30FC\u30B6\u30FC\u304C\u4F7F\u3063\u305F\u30CF\u30C3\u30B7\u30E5\u30BF\u30B0\u306E\u307F\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002"},attachedToRemoteUserOnly:{type:"boolean",default:!1,description:"\u30EA\u30E2\u30FC\u30C8\u30E6\u30FC\u30B6\u30FC\u304C\u4F7F\u3063\u305F\u30CF\u30C3\u30B7\u30E5\u30BF\u30B0\u306E\u307F\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002"},sort:{type:"string",enum:["+mentionedUsers","-mentionedUsers","+mentionedLocalUsers","-mentionedLocalUsers","+mentionedRemoteUsers","-mentionedRemoteUsers","+attachedUsers","-attachedUsers","+attachedLocalUsers","-attachedLocalUsers","+attachedRemoteUsers","-attachedRemoteUsers"],description:"\u30BD\u30FC\u30C8\u9806\u3002+ \u306F\u964D\u9806\u3001- \u306F\u6607\u9806\u3092\u793A\u3057\u307E\u3059\u3002"}},required:["sort"]}})]),_:1}),U,t(s,null,{default:o(()=>[t(i,{schema:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,ref:"Hashtag",$ref:"ocean://Hashtag"}}})]),_:1}),y,t(s,null,{default:o(()=>[t(c,{errors:{},"common-errors":{"1384574d-a912-4b81-8601-c7b1c4085df1":{id:"1384574d-a912-4b81-8601-c7b1c4085df1",code:"CREDENTIAL_REQUIRED",description:"\u30AF\u30EC\u30C7\u30F3\u30B7\u30E3\u30EB\u5FC5\u9808\u306E\u30A8\u30F3\u30C9\u30DD\u30A4\u30F3\u30C8\u306B\u30AF\u30EC\u30C7\u30F3\u30B7\u30E3\u30EB\u7121\u3057\u3067\u30EA\u30AF\u30A8\u30B9\u30C8\u3055\u308C\u307E\u3057\u305F\u3002"},"d5826d14-3982-4d2e-8011-b9e9f02499ef":{id:"d5826d14-3982-4d2e-8011-b9e9f02499ef",code:"RATE_LIMIT_EXCEEDED",description:"\u30EC\u30FC\u30C8\u30EA\u30DF\u30C3\u30C8\u306B\u3088\u308B\u5236\u9650\u306E\u305F\u3081\u4E00\u6642\u7684\u306B\u5229\u7528\u3067\u304D\u307E\u305B\u3093\u3002"},"56f35758-7dd5-468b-8439-5d6fb8ec9b8e":{id:"56f35758-7dd5-468b-8439-5d6fb8ec9b8e",code:"ACCESS_DENIED",description:"\u30A2\u30AF\u30BB\u30B9\u6A29\u9650\u304C\u3042\u308A\u307E\u305B\u3093\u3002"},"1370e5b7-d4eb-4566-bb1d-7748ee6a1838":{id:"1370e5b7-d4eb-4566-bb1d-7748ee6a1838",code:"PERMISSION_DENIED",description:"\u4E0E\u3048\u3089\u308C\u305F\u30AF\u30EC\u30C7\u30F3\u30B7\u30E3\u30EB\u306B\u306F\u5FC5\u8981\u306A\u30D1\u30FC\u30DF\u30C3\u30B7\u30E7\u30F3\u304C\u3042\u308A\u307E\u305B\u3093\u3002"},"a8c724b3-6e9c-4b46-b1a8-bc3ed6258370":{id:"a8c724b3-6e9c-4b46-b1a8-bc3ed6258370",code:"YOUR_ACCOUNT_SUSPENDED",description:"\u30A2\u30AB\u30A6\u30F3\u30C8\u304C\u51CD\u7D50\u3055\u308C\u3066\u3044\u308B\u305F\u3081\u5229\u7528\u3067\u304D\u307E\u305B\u3093\u3002"},"3d81ceae-475f-4600-b2a8-2bc116157532":{id:"3d81ceae-475f-4600-b2a8-2bc116157532",code:"INVALID_PARAM",description:"\u30EA\u30AF\u30A8\u30B9\u30C8\u30D1\u30E9\u30E1\u30FC\u30BF\u306B\u8AA4\u308A\u304C\u3042\u308A\u307E\u3059\u3002"},"5d37dbcb-891e-41ca-a3d6-e690c97775ac":{id:"5d37dbcb-891e-41ca-a3d6-e690c97775ac",code:"INTERNAL_ERROR",description:"\u30B5\u30FC\u30D0\u30FC\u5185\u90E8\u3067\u554F\u984C\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002\u5F15\u304D\u7D9A\u304D\u554F\u984C\u304C\u767A\u751F\u3059\u308B\u5834\u5408\u306F\u7BA1\u7406\u8005\u306B\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044\u3002"}}})]),_:1}),R,t(s,null,{default:o(()=>[t(l,{def:{summary:"\u30CF\u30C3\u30B7\u30E5\u30BF\u30B0\u306E\u4E00\u89A7\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002",description:"\u30CF\u30C3\u30B7\u30E5\u30BF\u30B0\u306E\u4E00\u89A7\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002",tags:["hashtags"],requireCredential:!1,req:{type:"object",properties:{limit:{type:"integer",minimum:1,maximum:100,default:10,description:"\u53D6\u5F97\u3059\u308B\u30CF\u30C3\u30B7\u30E5\u30BF\u30B0\u306E\u6700\u5927\u6570\u3002"},attachedToUserOnly:{type:"boolean",default:!1,description:"\u30E6\u30FC\u30B6\u30FC\u304C\u4F7F\u3063\u305F\u30CF\u30C3\u30B7\u30E5\u30BF\u30B0\u306E\u307F\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002"},attachedToLocalUserOnly:{type:"boolean",default:!1,description:"\u30ED\u30FC\u30AB\u30EB\u30E6\u30FC\u30B6\u30FC\u304C\u4F7F\u3063\u305F\u30CF\u30C3\u30B7\u30E5\u30BF\u30B0\u306E\u307F\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002"},attachedToRemoteUserOnly:{type:"boolean",default:!1,description:"\u30EA\u30E2\u30FC\u30C8\u30E6\u30FC\u30B6\u30FC\u304C\u4F7F\u3063\u305F\u30CF\u30C3\u30B7\u30E5\u30BF\u30B0\u306E\u307F\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002"},sort:{type:"string",enum:["+mentionedUsers","-mentionedUsers","+mentionedLocalUsers","-mentionedLocalUsers","+mentionedRemoteUsers","-mentionedRemoteUsers","+attachedUsers","-attachedUsers","+attachedLocalUsers","-attachedLocalUsers","+attachedRemoteUsers","-attachedRemoteUsers"],description:"\u30BD\u30FC\u30C8\u9806\u3002+ \u306F\u964D\u9806\u3001- \u306F\u6607\u9806\u3092\u793A\u3057\u307E\u3059\u3002"}},required:["sort"]},res:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,ref:"Hashtag",$ref:"ocean://Hashtag"}},errors:{}}})]),_:1})])}var T=m(f,[["render",E],["__file","list.html.vue"]]);export{T as default};
