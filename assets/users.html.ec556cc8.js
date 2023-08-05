import{_ as p,r as a,o as u,c as m,b as t,w as i,a as e,d}from"./app.b145dd9f.js";const f={},b=e("h1",{id:"hashtags-users",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#hashtags-users","aria-hidden":"true"},"#"),d(),e("code",null,"hashtags/users")],-1),h=e("h2",{id:"\u30CF\u309A\u30E9\u30E1\u30FC\u30BF",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u30CF\u309A\u30E9\u30E1\u30FC\u30BF","aria-hidden":"true"},"#"),d(" \u30D1\u30E9\u30E1\u30FC\u30BF")],-1),_=e("h2",{id:"\u30EC\u30B9\u30DB\u309A\u30F3\u30B9",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u30EC\u30B9\u30DB\u309A\u30F3\u30B9","aria-hidden":"true"},"#"),d(" \u30EC\u30B9\u30DD\u30F3\u30B9")],-1),g=e("h2",{id:"\u30A8\u30E9\u30FC",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u30A8\u30E9\u30FC","aria-hidden":"true"},"#"),d(" \u30A8\u30E9\u30FC")],-1),A=e("h2",{id:"\u30EA\u30BD\u30FC\u30B9",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u30EA\u30BD\u30FC\u30B9","aria-hidden":"true"},"#"),d(" \u30EA\u30BD\u30FC\u30B9")],-1);function y(E,D){const o=a("MkApiConsole"),r=a("ClientOnly"),s=a("MkSchemaViewerItemObject"),l=a("MkSchemaViewer"),c=a("MkApiErrors"),n=a("MkApiResources");return u(),m("div",null,[b,t(r,null,{default:i(()=>[t(o,{name:"hashtags/users",def:{summary:"",description:"",tags:["hashtags"],requireCredential:!1,req:{type:"object",properties:{tag:{type:"string"},limit:{type:"integer",minimum:1,maximum:100,default:10,description:"\u53D6\u5F97\u3059\u308B\u30E6\u30FC\u30B6\u30FC\u306E\u6700\u5927\u6570\u3002"},sort:{type:"string",enum:["+follower","-follower","+createdAt","-createdAt","+updatedAt","-updatedAt"],description:"\u30BD\u30FC\u30C8\u9806\u3002+\u306F\u964D\u9806\u3092\u3001-\u306F\u6607\u9806\u3092\u793A\u3057\u307E\u3059\u3002follower\u306F\u30E6\u30FC\u30B6\u30FC\u306E\u30D5\u30A9\u30ED\u30EF\u30FC\u6570\u3067\u3059\u3002createdAt, updatedAt\u306F\u305D\u308C\u305E\u308C\u30E6\u30FC\u30B6\u30FC\u304C\u767B\u9332\u3057\u305F\u6642\u523B\u3001\u6700\u5F8C\u306B\u30A2\u30AF\u30C6\u30A3\u30D6\u3060\u3063\u305F\u6642\u523B\u3067\u3059\u3002"},state:{type:"string",enum:["all","alive"],default:"all",description:"alive\u306B\u3059\u308B\u3068\u30015\u65E5\u9593\u4EE5\u5185\u306B\u30A2\u30AF\u30C6\u30A3\u30D6\u3067\u3042\u3063\u305F\u30E6\u30FC\u30B6\u30FC\u306E\u307F\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002"},origin:{type:"string",enum:["combined","local","remote"],default:"local",description:"\u30E6\u30FC\u30B6\u30FC\u306E\u6240\u5C5E\u30B5\u30FC\u30D0\u30FC\u306E\u533A\u5206\u3002local\uFF08\u30C7\u30D5\u30A9\u30EB\u30C8\uFF09, remote\u306B\u3059\u308B\u3068\u3001\u305D\u308C\u305E\u308C\u30ED\u30FC\u30AB\u30EB\u30FB\u30EA\u30E2\u30FC\u30C8\u30E6\u30FC\u30B6\u30FC\u306E\u307F\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002combined\u306B\u3059\u308B\u3068\u3001\u3059\u3079\u3066\u306E\u30E6\u30FC\u30B6\u30FC\u3092\u5BFE\u8C61\u306B\u3057\u307E\u3059\u3002"}},required:["tag","sort"]},res:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,ref:"UserDetailed",$ref:"ocean://UserDetailed"}},errors:{}}})]),_:1}),h,t(r,null,{default:i(()=>[t(s,{schema:{type:"object",properties:{tag:{type:"string"},limit:{type:"integer",minimum:1,maximum:100,default:10,description:"\u53D6\u5F97\u3059\u308B\u30E6\u30FC\u30B6\u30FC\u306E\u6700\u5927\u6570\u3002"},sort:{type:"string",enum:["+follower","-follower","+createdAt","-createdAt","+updatedAt","-updatedAt"],description:"\u30BD\u30FC\u30C8\u9806\u3002+\u306F\u964D\u9806\u3092\u3001-\u306F\u6607\u9806\u3092\u793A\u3057\u307E\u3059\u3002follower\u306F\u30E6\u30FC\u30B6\u30FC\u306E\u30D5\u30A9\u30ED\u30EF\u30FC\u6570\u3067\u3059\u3002createdAt, updatedAt\u306F\u305D\u308C\u305E\u308C\u30E6\u30FC\u30B6\u30FC\u304C\u767B\u9332\u3057\u305F\u6642\u523B\u3001\u6700\u5F8C\u306B\u30A2\u30AF\u30C6\u30A3\u30D6\u3060\u3063\u305F\u6642\u523B\u3067\u3059\u3002"},state:{type:"string",enum:["all","alive"],default:"all",description:"alive\u306B\u3059\u308B\u3068\u30015\u65E5\u9593\u4EE5\u5185\u306B\u30A2\u30AF\u30C6\u30A3\u30D6\u3067\u3042\u3063\u305F\u30E6\u30FC\u30B6\u30FC\u306E\u307F\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002"},origin:{type:"string",enum:["combined","local","remote"],default:"local",description:"\u30E6\u30FC\u30B6\u30FC\u306E\u6240\u5C5E\u30B5\u30FC\u30D0\u30FC\u306E\u533A\u5206\u3002local\uFF08\u30C7\u30D5\u30A9\u30EB\u30C8\uFF09, remote\u306B\u3059\u308B\u3068\u3001\u305D\u308C\u305E\u308C\u30ED\u30FC\u30AB\u30EB\u30FB\u30EA\u30E2\u30FC\u30C8\u30E6\u30FC\u30B6\u30FC\u306E\u307F\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002combined\u306B\u3059\u308B\u3068\u3001\u3059\u3079\u3066\u306E\u30E6\u30FC\u30B6\u30FC\u3092\u5BFE\u8C61\u306B\u3057\u307E\u3059\u3002"}},required:["tag","sort"]}})]),_:1}),_,t(r,null,{default:i(()=>[t(l,{schema:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,ref:"UserDetailed",$ref:"ocean://UserDetailed"}}})]),_:1}),g,t(r,null,{default:i(()=>[t(c,{errors:{},"common-errors":{"1384574d-a912-4b81-8601-c7b1c4085df1":{id:"1384574d-a912-4b81-8601-c7b1c4085df1",code:"CREDENTIAL_REQUIRED",description:"\u30AF\u30EC\u30C7\u30F3\u30B7\u30E3\u30EB\u5FC5\u9808\u306E\u30A8\u30F3\u30C9\u30DD\u30A4\u30F3\u30C8\u306B\u30AF\u30EC\u30C7\u30F3\u30B7\u30E3\u30EB\u7121\u3057\u3067\u30EA\u30AF\u30A8\u30B9\u30C8\u3055\u308C\u307E\u3057\u305F\u3002"},"d5826d14-3982-4d2e-8011-b9e9f02499ef":{id:"d5826d14-3982-4d2e-8011-b9e9f02499ef",code:"RATE_LIMIT_EXCEEDED",description:"\u30EC\u30FC\u30C8\u30EA\u30DF\u30C3\u30C8\u306B\u3088\u308B\u5236\u9650\u306E\u305F\u3081\u4E00\u6642\u7684\u306B\u5229\u7528\u3067\u304D\u307E\u305B\u3093\u3002"},"56f35758-7dd5-468b-8439-5d6fb8ec9b8e":{id:"56f35758-7dd5-468b-8439-5d6fb8ec9b8e",code:"ACCESS_DENIED",description:"\u30A2\u30AF\u30BB\u30B9\u6A29\u9650\u304C\u3042\u308A\u307E\u305B\u3093\u3002"},"1370e5b7-d4eb-4566-bb1d-7748ee6a1838":{id:"1370e5b7-d4eb-4566-bb1d-7748ee6a1838",code:"PERMISSION_DENIED",description:"\u4E0E\u3048\u3089\u308C\u305F\u30AF\u30EC\u30C7\u30F3\u30B7\u30E3\u30EB\u306B\u306F\u5FC5\u8981\u306A\u30D1\u30FC\u30DF\u30C3\u30B7\u30E7\u30F3\u304C\u3042\u308A\u307E\u305B\u3093\u3002"},"a8c724b3-6e9c-4b46-b1a8-bc3ed6258370":{id:"a8c724b3-6e9c-4b46-b1a8-bc3ed6258370",code:"YOUR_ACCOUNT_SUSPENDED",description:"\u30A2\u30AB\u30A6\u30F3\u30C8\u304C\u51CD\u7D50\u3055\u308C\u3066\u3044\u308B\u305F\u3081\u5229\u7528\u3067\u304D\u307E\u305B\u3093\u3002"},"3d81ceae-475f-4600-b2a8-2bc116157532":{id:"3d81ceae-475f-4600-b2a8-2bc116157532",code:"INVALID_PARAM",description:"\u30EA\u30AF\u30A8\u30B9\u30C8\u30D1\u30E9\u30E1\u30FC\u30BF\u306B\u8AA4\u308A\u304C\u3042\u308A\u307E\u3059\u3002"},"5d37dbcb-891e-41ca-a3d6-e690c97775ac":{id:"5d37dbcb-891e-41ca-a3d6-e690c97775ac",code:"INTERNAL_ERROR",description:"\u30B5\u30FC\u30D0\u30FC\u5185\u90E8\u3067\u554F\u984C\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002\u5F15\u304D\u7D9A\u304D\u554F\u984C\u304C\u767A\u751F\u3059\u308B\u5834\u5408\u306F\u7BA1\u7406\u8005\u306B\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044\u3002"}}})]),_:1}),A,t(r,null,{default:i(()=>[t(n,{def:{summary:"",description:"",tags:["hashtags"],requireCredential:!1,req:{type:"object",properties:{tag:{type:"string"},limit:{type:"integer",minimum:1,maximum:100,default:10,description:"\u53D6\u5F97\u3059\u308B\u30E6\u30FC\u30B6\u30FC\u306E\u6700\u5927\u6570\u3002"},sort:{type:"string",enum:["+follower","-follower","+createdAt","-createdAt","+updatedAt","-updatedAt"],description:"\u30BD\u30FC\u30C8\u9806\u3002+\u306F\u964D\u9806\u3092\u3001-\u306F\u6607\u9806\u3092\u793A\u3057\u307E\u3059\u3002follower\u306F\u30E6\u30FC\u30B6\u30FC\u306E\u30D5\u30A9\u30ED\u30EF\u30FC\u6570\u3067\u3059\u3002createdAt, updatedAt\u306F\u305D\u308C\u305E\u308C\u30E6\u30FC\u30B6\u30FC\u304C\u767B\u9332\u3057\u305F\u6642\u523B\u3001\u6700\u5F8C\u306B\u30A2\u30AF\u30C6\u30A3\u30D6\u3060\u3063\u305F\u6642\u523B\u3067\u3059\u3002"},state:{type:"string",enum:["all","alive"],default:"all",description:"alive\u306B\u3059\u308B\u3068\u30015\u65E5\u9593\u4EE5\u5185\u306B\u30A2\u30AF\u30C6\u30A3\u30D6\u3067\u3042\u3063\u305F\u30E6\u30FC\u30B6\u30FC\u306E\u307F\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002"},origin:{type:"string",enum:["combined","local","remote"],default:"local",description:"\u30E6\u30FC\u30B6\u30FC\u306E\u6240\u5C5E\u30B5\u30FC\u30D0\u30FC\u306E\u533A\u5206\u3002local\uFF08\u30C7\u30D5\u30A9\u30EB\u30C8\uFF09, remote\u306B\u3059\u308B\u3068\u3001\u305D\u308C\u305E\u308C\u30ED\u30FC\u30AB\u30EB\u30FB\u30EA\u30E2\u30FC\u30C8\u30E6\u30FC\u30B6\u30FC\u306E\u307F\u3092\u53D6\u5F97\u3057\u307E\u3059\u3002combined\u306B\u3059\u308B\u3068\u3001\u3059\u3079\u3066\u306E\u30E6\u30FC\u30B6\u30FC\u3092\u5BFE\u8C61\u306B\u3057\u307E\u3059\u3002"}},required:["tag","sort"]},res:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,ref:"UserDetailed",$ref:"ocean://UserDetailed"}},errors:{}}})]),_:1})])}var C=p(f,[["render",y],["__file","users.html.vue"]]);export{C as default};
