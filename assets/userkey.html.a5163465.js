import{_ as l,o as p,c as _,b as c,w as t,a as e,d as s,r as a}from"./app.aecf66dd.js";const f={},u=e("h1",{id:"auth-session-userkey",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#auth-session-userkey","aria-hidden":"true"},"#"),s(),e("code",null,"auth/session/userkey")],-1),h=e("p",null,"\u30A2\u30D7\u30EA\u306E\u30A2\u30AF\u30BB\u30B9\u30C8\u30FC\u30AF\u30F3\u3092\u767A\u884C\u3057\u307E\u3059\u3002",-1),S=e("h2",{id:"\u30CF\u309A\u30E9\u30E1\u30FC\u30BF",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u30CF\u309A\u30E9\u30E1\u30FC\u30BF","aria-hidden":"true"},"#"),s(" \u30D1\u30E9\u30E1\u30FC\u30BF")],-1),N=e("h2",{id:"\u30EC\u30B9\u30DB\u309A\u30F3\u30B9",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u30EC\u30B9\u30DB\u309A\u30F3\u30B9","aria-hidden":"true"},"#"),s(" \u30EC\u30B9\u30DD\u30F3\u30B9")],-1),k=e("h2",{id:"\u30A8\u30E9\u30FC",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u30A8\u30E9\u30FC","aria-hidden":"true"},"#"),s(" \u30A8\u30E9\u30FC")],-1),m=e("h2",{id:"\u30EA\u30BD\u30FC\u30B9",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u30EA\u30BD\u30FC\u30B9","aria-hidden":"true"},"#"),s(" \u30EA\u30BD\u30FC\u30B9")],-1);function y(E,I){const r=a("MkApiConsole"),d=a("ClientOnly"),o=a("MkSchemaViewerItemObject"),i=a("MkSchemaViewer"),n=a("MkApiErrors"),b=a("MkApiResources");return p(),_("div",null,[u,h,c(d,null,{default:t(()=>[c(r,{name:"auth/session/userkey",def:{summary:"\u30A2\u30D7\u30EA\u306E\u30A2\u30AF\u30BB\u30B9\u30C8\u30FC\u30AF\u30F3\u3092\u767A\u884C\u3057\u307E\u3059\u3002",description:"\u30A2\u30D7\u30EA\u306E\u30A2\u30AF\u30BB\u30B9\u30C8\u30FC\u30AF\u30F3\u3092\u767A\u884C\u3057\u307E\u3059\u3002",tags:["auth"],requireCredential:!1,req:{type:"object",properties:{appSecret:{type:"string",description:"\u30A2\u30D7\u30EA\u306E\u30B7\u30FC\u30AF\u30EC\u30C3\u30C8\u30AD\u30FC\u3002"},token:{type:"string",description:"\u30BB\u30C3\u30B7\u30E7\u30F3\u306E\u30C8\u30FC\u30AF\u30F3\u3002"}},required:["appSecret","token"]},res:{type:"object",optional:!1,nullable:!1,properties:{accessToken:{type:"string",optional:!1,nullable:!1,description:"\u30E6\u30FC\u30B6\u30FC\u306E\u30A2\u30AF\u30BB\u30B9\u30C8\u30FC\u30AF\u30F3\u3002"},user:{type:"object",optional:!1,nullable:!1,ref:"UserDetailedNotMe",$ref:"misskey://UserDetailedNotMe"}},required:["accessToken","user"]},errors:{"fcab192a-2c5a-43b7-8ad8-9b7054d8d40d":{id:"fcab192a-2c5a-43b7-8ad8-9b7054d8d40d",code:"NO_SUCH_APP",description:"\u30A2\u30D7\u30EA\u304C\u5B58\u5728\u3057\u307E\u305B\u3093\u3002"},"5b5a1503-8bc8-4bd0-8054-dc189e8cdcb3":{id:"5b5a1503-8bc8-4bd0-8054-dc189e8cdcb3",code:"NO_SUCH_SESSION",description:"\u30BB\u30C3\u30B7\u30E7\u30F3\u304C\u5B58\u5728\u3057\u307E\u305B\u3093\u3002"},"8c8a4145-02cc-4cca-8e66-29ba60445a8e":{id:"8c8a4145-02cc-4cca-8e66-29ba60445a8e",code:"PENDING_SESSION",description:""}}}})]),_:1}),S,c(d,null,{default:t(()=>[c(o,{schema:{type:"object",properties:{appSecret:{type:"string",description:"\u30A2\u30D7\u30EA\u306E\u30B7\u30FC\u30AF\u30EC\u30C3\u30C8\u30AD\u30FC\u3002"},token:{type:"string",description:"\u30BB\u30C3\u30B7\u30E7\u30F3\u306E\u30C8\u30FC\u30AF\u30F3\u3002"}},required:["appSecret","token"]}})]),_:1}),N,c(d,null,{default:t(()=>[c(i,{schema:{type:"object",optional:!1,nullable:!1,properties:{accessToken:{type:"string",optional:!1,nullable:!1,description:"\u30E6\u30FC\u30B6\u30FC\u306E\u30A2\u30AF\u30BB\u30B9\u30C8\u30FC\u30AF\u30F3\u3002"},user:{type:"object",optional:!1,nullable:!1,ref:"UserDetailedNotMe",$ref:"misskey://UserDetailedNotMe"}},required:["accessToken","user"]}})]),_:1}),k,c(d,null,{default:t(()=>[c(n,{errors:{"fcab192a-2c5a-43b7-8ad8-9b7054d8d40d":{id:"fcab192a-2c5a-43b7-8ad8-9b7054d8d40d",code:"NO_SUCH_APP",description:"\u30A2\u30D7\u30EA\u304C\u5B58\u5728\u3057\u307E\u305B\u3093\u3002"},"5b5a1503-8bc8-4bd0-8054-dc189e8cdcb3":{id:"5b5a1503-8bc8-4bd0-8054-dc189e8cdcb3",code:"NO_SUCH_SESSION",description:"\u30BB\u30C3\u30B7\u30E7\u30F3\u304C\u5B58\u5728\u3057\u307E\u305B\u3093\u3002"},"8c8a4145-02cc-4cca-8e66-29ba60445a8e":{id:"8c8a4145-02cc-4cca-8e66-29ba60445a8e",code:"PENDING_SESSION",description:""}},"common-errors":{"1384574d-a912-4b81-8601-c7b1c4085df1":{id:"1384574d-a912-4b81-8601-c7b1c4085df1",code:"CREDENTIAL_REQUIRED",description:"\u30AF\u30EC\u30C7\u30F3\u30B7\u30E3\u30EB\u5FC5\u9808\u306E\u30A8\u30F3\u30C9\u30DD\u30A4\u30F3\u30C8\u306B\u30AF\u30EC\u30C7\u30F3\u30B7\u30E3\u30EB\u7121\u3057\u3067\u30EA\u30AF\u30A8\u30B9\u30C8\u3055\u308C\u307E\u3057\u305F\u3002"},"d5826d14-3982-4d2e-8011-b9e9f02499ef":{id:"d5826d14-3982-4d2e-8011-b9e9f02499ef",code:"RATE_LIMIT_EXCEEDED",description:"\u30EC\u30FC\u30C8\u30EA\u30DF\u30C3\u30C8\u306B\u3088\u308B\u5236\u9650\u306E\u305F\u3081\u4E00\u6642\u7684\u306B\u5229\u7528\u3067\u304D\u307E\u305B\u3093\u3002"},"56f35758-7dd5-468b-8439-5d6fb8ec9b8e":{id:"56f35758-7dd5-468b-8439-5d6fb8ec9b8e",code:"ACCESS_DENIED",description:"\u30A2\u30AF\u30BB\u30B9\u6A29\u9650\u304C\u3042\u308A\u307E\u305B\u3093\u3002"},"1370e5b7-d4eb-4566-bb1d-7748ee6a1838":{id:"1370e5b7-d4eb-4566-bb1d-7748ee6a1838",code:"PERMISSION_DENIED",description:"\u4E0E\u3048\u3089\u308C\u305F\u30AF\u30EC\u30C7\u30F3\u30B7\u30E3\u30EB\u306B\u306F\u5FC5\u8981\u306A\u30D1\u30FC\u30DF\u30C3\u30B7\u30E7\u30F3\u304C\u3042\u308A\u307E\u305B\u3093\u3002"},"a8c724b3-6e9c-4b46-b1a8-bc3ed6258370":{id:"a8c724b3-6e9c-4b46-b1a8-bc3ed6258370",code:"YOUR_ACCOUNT_SUSPENDED",description:"\u30A2\u30AB\u30A6\u30F3\u30C8\u304C\u51CD\u7D50\u3055\u308C\u3066\u3044\u308B\u305F\u3081\u5229\u7528\u3067\u304D\u307E\u305B\u3093\u3002"},"3d81ceae-475f-4600-b2a8-2bc116157532":{id:"3d81ceae-475f-4600-b2a8-2bc116157532",code:"INVALID_PARAM",description:"\u30EA\u30AF\u30A8\u30B9\u30C8\u30D1\u30E9\u30E1\u30FC\u30BF\u306B\u8AA4\u308A\u304C\u3042\u308A\u307E\u3059\u3002"},"5d37dbcb-891e-41ca-a3d6-e690c97775ac":{id:"5d37dbcb-891e-41ca-a3d6-e690c97775ac",code:"INTERNAL_ERROR",description:"\u30B5\u30FC\u30D0\u30FC\u5185\u90E8\u3067\u554F\u984C\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002\u5F15\u304D\u7D9A\u304D\u554F\u984C\u304C\u767A\u751F\u3059\u308B\u5834\u5408\u306F\u7BA1\u7406\u8005\u306B\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044\u3002"}}})]),_:1}),m,c(d,null,{default:t(()=>[c(b,{def:{summary:"\u30A2\u30D7\u30EA\u306E\u30A2\u30AF\u30BB\u30B9\u30C8\u30FC\u30AF\u30F3\u3092\u767A\u884C\u3057\u307E\u3059\u3002",description:"\u30A2\u30D7\u30EA\u306E\u30A2\u30AF\u30BB\u30B9\u30C8\u30FC\u30AF\u30F3\u3092\u767A\u884C\u3057\u307E\u3059\u3002",tags:["auth"],requireCredential:!1,req:{type:"object",properties:{appSecret:{type:"string",description:"\u30A2\u30D7\u30EA\u306E\u30B7\u30FC\u30AF\u30EC\u30C3\u30C8\u30AD\u30FC\u3002"},token:{type:"string",description:"\u30BB\u30C3\u30B7\u30E7\u30F3\u306E\u30C8\u30FC\u30AF\u30F3\u3002"}},required:["appSecret","token"]},res:{type:"object",optional:!1,nullable:!1,properties:{accessToken:{type:"string",optional:!1,nullable:!1,description:"\u30E6\u30FC\u30B6\u30FC\u306E\u30A2\u30AF\u30BB\u30B9\u30C8\u30FC\u30AF\u30F3\u3002"},user:{type:"object",optional:!1,nullable:!1,ref:"UserDetailedNotMe",$ref:"misskey://UserDetailedNotMe"}},required:["accessToken","user"]},errors:{"fcab192a-2c5a-43b7-8ad8-9b7054d8d40d":{id:"fcab192a-2c5a-43b7-8ad8-9b7054d8d40d",code:"NO_SUCH_APP",description:"\u30A2\u30D7\u30EA\u304C\u5B58\u5728\u3057\u307E\u305B\u3093\u3002"},"5b5a1503-8bc8-4bd0-8054-dc189e8cdcb3":{id:"5b5a1503-8bc8-4bd0-8054-dc189e8cdcb3",code:"NO_SUCH_SESSION",description:"\u30BB\u30C3\u30B7\u30E7\u30F3\u304C\u5B58\u5728\u3057\u307E\u305B\u3093\u3002"},"8c8a4145-02cc-4cca-8e66-29ba60445a8e":{id:"8c8a4145-02cc-4cca-8e66-29ba60445a8e",code:"PENDING_SESSION",description:""}}}})]),_:1})])}var D=l(f,[["render",y],["__file","userkey.html.vue"]]);export{D as default};
