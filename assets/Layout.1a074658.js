import{F as H,Y as X,Z as Y,f as E,g as x,r as C,o as i,c as m,h as u,b as d,p as D,a as L,t as N,w as R,N as U,O as j,_ as w,i as T,v as P,d as z,$ as S,X as G,z as I,Q,R as Z,a0 as q,n as M,j as J,k as K,P as W,a1 as ee,m as A,T as te,a2 as se}from"./app.1e729f30.js";import{r as ae,A as F,N as ne,S as oe}from"./Sidebar.96041d95.js";const re={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},le=({docsRepo:h,editLinkPattern:a})=>{if(a)return a;const n=ae(h);return n!==null?re[n]:null},ie=({docsRepo:h,docsBranch:a,docsDir:n,filePathRelative:_,editLinkPattern:v})=>{if(!_)return null;const p=le({docsRepo:h,editLinkPattern:v});return p?p.replace(/:repo/,H(h)?h:`https://github.com/${h}`).replace(/:branch/,a).replace(/:path/,X(`${Y(n)}/${_}`)):null},ce={class:"page-meta"},ue={key:0,class:"meta-item edit-link"},de={key:1,class:"meta-item last-updated"},_e={class:"meta-item-label"},ve={class:"meta-item-info"},pe={key:2,class:"meta-item contributors"},me={class:"meta-item-label"},he={class:"meta-item-info"},fe=["title"],ge=E({__name:"PageMeta",setup(h){const a=()=>{const e=x(),c=S(),r=T();return P(()=>{var $,B,O,V;if(!((B=($=r.value.editLink)!=null?$:e.value.editLink)!=null?B:!0))return null;const{repo:t,docsRepo:l=t,docsBranch:k="main",docsDir:b="",editLinkText:s}=e.value;if(!l)return null;const y=ie({docsRepo:l,docsBranch:k,docsDir:b,filePathRelative:(O=r.value.filePath)!=null?O:c.value.filePathRelative,editLinkPattern:(V=r.value.editLinkPattern)!=null?V:e.value.editLinkPattern});return y?{text:s!=null?s:"Edit this page",link:y}:null})},n=()=>{const e=x(),c=S(),r=T();return P(()=>{var l,k,b,s;return!((k=(l=r.value.lastUpdated)!=null?l:e.value.lastUpdated)!=null?k:!0)||!((b=c.value.git)!=null&&b.updatedTime)?null:new Date((s=c.value.git)==null?void 0:s.updatedTime).toLocaleString()})},_=()=>{const e=x(),c=S(),r=T();return P(()=>{var t,l,k,b;return((l=(t=r.value.contributors)!=null?t:e.value.contributors)!=null?l:!0)&&(b=(k=c.value.git)==null?void 0:k.contributors)!=null?b:null})},v=x(),p=a(),f=n(),o=_();return(e,c)=>{const r=C("ClientOnly");return i(),m("footer",ce,[u(p)?(i(),m("div",ue,[d(F,{class:"meta-item-label",item:u(p)},null,8,["item"])])):D("",!0),u(f)?(i(),m("div",de,[L("span",_e,N(u(v).lastUpdatedText)+": ",1),d(r,null,{default:R(()=>[L("span",ve,N(u(f)),1)]),_:1})])):D("",!0),u(o)&&u(o).length?(i(),m("div",pe,[L("span",me,N(u(v).contributorsText)+": ",1),L("span",he,[(i(!0),m(U,null,j(u(o),(g,t)=>(i(),m(U,{key:t},[L("span",{class:"contributor",title:`email: ${g.email}`},N(g.name),9,fe),t!==u(o).length-1?(i(),m(U,{key:0},[z(", ")],64)):D("",!0)],64))),128))])])):D("",!0)])}}});var ke=w(ge,[["__file","PageMeta.vue"]]);const be={key:0,class:"page-nav"},ye={class:"inner"},Le={key:0,class:"prev"},De={key:1,class:"next"},Pe=E({__name:"PageNav",setup(h){const a=e=>e===!1?null:Q(e)?Z(e):q(e)?e:!1,n=(e,c,r)=>{const g=e.findIndex(t=>t.link===c);if(g!==-1){const t=e[g+r];return t!=null&&t.link?t:null}for(const t of e)if(t.children){const l=n(t.children,c,r);if(l)return l}return null},_=T(),v=G(),p=I(),f=P(()=>{const e=a(_.value.prev);return e!==!1?e:n(v.value,p.path,-1)}),o=P(()=>{const e=a(_.value.next);return e!==!1?e:n(v.value,p.path,1)});return(e,c)=>f.value||o.value?(i(),m("nav",be,[L("p",ye,[f.value?(i(),m("span",Le,[d(F,{item:f.value},null,8,["item"])])):D("",!0),o.value?(i(),m("span",De,[d(F,{item:o.value},null,8,["item"])])):D("",!0)])])):D("",!0)}});var $e=w(Pe,[["__file","PageNav.vue"]]);const xe="_footer_1yl4i_1",Ce="_headerDots_1yl4i_5",Te="_footerDots_1yl4i_15";var Me={footer:xe,headerDots:Ce,footerDots:Te};const Ne={class:"page"},Se={class:"theme-default-content"},Ee=E({__name:"Page",setup(h){return(a,n)=>{const _=C("MkDots"),v=C("Content"),p=C("MkRelatedPages");return i(),m("main",Ne,[d(_,{class:M(a.$style.headerDots)},null,8,["class"]),L("div",Se,[d(v)]),d(ke),d($e),d(p),d(_,{class:M(a.$style.footerDots)},null,8,["class"]),L("div",{class:M(a.$style.footer)},"Copyright \xA9 2023 ocean team and other contributors",2)])}}}),we={$style:Me};var Be=w(Ee,[["__cssModules",we],["__file","Page.vue"]]);const Ue="_sidebarDots_rom89_1",Re="_koko9_rom89_9",Fe="_live2d_rom89_18";var Oe={sidebarDots:Ue,koko9:Re,live2d:Fe};const Ve=E({__name:"Layout",setup(h){const a=S(),n=T(),_=x(),v=P(()=>n.value.navbar!==!1&&_.value.navbar!==!1),p=G(),f=J(!1),o=s=>{f.value=typeof s=="boolean"?s:!f.value},e={x:0,y:0},c=s=>{e.x=s.changedTouches[0].clientX,e.y=s.changedTouches[0].clientY},r=s=>{const y=s.changedTouches[0].clientX-e.x,$=s.changedTouches[0].clientY-e.y;Math.abs(y)>Math.abs($)&&Math.abs(y)>40&&(y>0&&e.x<=80?o(!0):o(!1))},g=P(()=>[{"no-navbar":!v.value,"no-sidebar":!p.value.length,"sidebar-open":f.value},n.value.pageClass]);let t;K(()=>{t=W().afterEach(()=>{o(!1)})}),ee(()=>{t()});const l=se(),k=l.resolve,b=l.pending;return(s,y)=>{const $=C("MkDots");return i(),m("div",{class:M(["theme-container",g.value]),onTouchstart:c,onTouchend:r},[v.value?(i(),A(ne,{key:0,onToggleSidebar:o})):D("",!0),L("div",{class:"sidebar-mask",onClick:y[0]||(y[0]=B=>o(!1))}),d(oe,null,{bottom:R(()=>[d($,{class:M(s.$style.sidebarDots),space:12},null,8,["class"])]),_:1}),d(te,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:u(k),onBeforeLeave:u(b)},{default:R(()=>[(i(),A(Be,{key:u(a).path}))]),_:1},8,["onBeforeEnter","onBeforeLeave"])],34)}}}),Ae={$style:Oe};var Xe=w(Ve,[["__cssModules",Ae],["__file","Layout.vue"]]);export{Xe as default};