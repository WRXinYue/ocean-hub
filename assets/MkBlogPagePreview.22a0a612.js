import{_ as l,a3 as n,r as s,o as c,m as _,w as i,a,d as u,t}from"./app.1e729f30.js";const d={props:{page:{required:!0}},setup(){return{themeLocale:n()}}};function g(p,m,e,o,v,f){const r=s("RouterLink");return c(),_(r,{class:"mk-blog-page-preview",to:e.page.path},{default:i(()=>[a("header",null,[u(t(e.page.title),1),a("time",null,t(new Date(e.page.createdTime).toLocaleString()),1)]),a("div",null,t(e.page.summary),1),a("footer",null,t(o.themeLocale.readThisArticle),1)]),_:1},8,["to"])}var k=l(d,[["render",g],["__scopeId","data-v-e0b18e9c"],["__file","MkBlogPagePreview.vue"]]);export{k as default};