import f from"./MkSchemaViewerItem.5ad9876d.js";import{_ as h,f as b,r as i,o as _,c as p,b as a,w as o,h as y,a as t,t as r,p as w}from"./app.e2d673e1.js";const v={class:"mk-schema-viewer-item-object"},x={style:{padding:"8px 16px"}},k={style:{display:"flex","align-items":"center"}},V={class:"_mono"},g={key:0,class:"required",title:"Required",style:{color:"#f00","margin-left":"4px"}},j={style:{display:"flex","align-items":"center"}},I={class:"_mono"},S={style:{display:"flex","align-items":"center"}},M={class:"_mono"},O=b({__name:"MkSchemaViewerItemObject",props:{schema:{}},setup(d){const m=Object.entries(d.schema.properties).map(([l,s])=>({name:l,type:s.type,nullable:s.nullable,default:s.default,description:s.description}));return(l,s)=>{const n=i("el-table-column"),u=i("el-table");return _(),p("div",v,[a(u,{data:y(m),border:!1,stripe:"",style:{width:"100%"}},{default:o(()=>[a(n,{type:"expand"},{default:o(e=>[t("div",x,[a(f,{schema:l.schema.properties[e.row.name]},null,8,["schema"])])]),_:1}),a(n,{label:"Name",prop:"name"},{default:o(e=>{var c;return[t("div",k,[t("b",V,r(e.row.name),1),((c=l.schema.required)!=null?c:[]).includes(e.row.name)?(_(),p("span",g,"*")):w("",!0)])]}),_:1}),a(n,{label:"Type",prop:"type"},{default:o(e=>[t("div",j,[t("span",I,r(e.row.type)+r(e.row.nullable?" | null":""),1)])]),_:1}),a(n,{label:"Default",prop:"default"},{default:o(e=>[t("div",S,[t("span",M,r(e.row.default),1)])]),_:1})]),_:1},8,["data"])])}}});var B=h(O,[["__scopeId","data-v-24b50300"],["__file","MkSchemaViewerItemObject.vue"]]);export{B as default};
