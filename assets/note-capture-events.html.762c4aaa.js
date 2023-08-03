import{_ as a,r as n,o as c,c as s,b as r,a as e,d as t}from"./app.0f017d40.js";const d={},i=e("h1",{id:"note-capture-events",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#note-capture-events","aria-hidden":"true"},"#"),t(" Note Capture Events")],-1),h=e("h2",{id:"reacted",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#reacted","aria-hidden":"true"},"#"),t(),e("code",null,"reacted")],-1),l=e("p",null,"Occurs when a reaction is made to the target note.",-1),p=e("h2",{id:"pollvoted",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#pollvoted","aria-hidden":"true"},"#"),t(),e("code",null,"pollVoted")],-1),u=e("p",null,"Occurs when the survey attached to the target note is voted on.",-1),_=e("h2",{id:"deleted",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#deleted","aria-hidden":"true"},"#"),t(),e("code",null,"deleted")],-1),m=e("p",null,"Occurs when the target note is deleted.",-1);function f(v,y){const o=n("MkSchemaViewer");return c(),s("div",null,[i,h,r(o,{schema:{type:"object",properties:{reaction:{type:"string",description:"type of reaction"},userId:{type:"string",description:"ID of the user who made the reaction"}}}}),l,p,r(o,{schema:{type:"object",properties:{choice:{type:"number",description:"choice ID"},userId:{type:"string",description:"ID of the user who cast the vote"}}}}),u,_,r(o,{schema:{type:"object",properties:{deletedAt:{type:"string",description:"deletion time"}}}}),m])}var x=a(d,[["render",f],["__file","note-capture-events.html.vue"]]);export{x as default};
