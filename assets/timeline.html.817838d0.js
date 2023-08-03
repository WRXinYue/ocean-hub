import{_ as r,r as i,o as s,c as l,a as h,d as t,b as e,w as a,e as o}from"./app.e2d673e1.js";const n={},c=o('<h1 id="timeline" tabindex="-1"><a class="header-anchor" href="#timeline" aria-hidden="true">#</a> Timeline</h1><p>The timeline displays <a href=".note">notes</a> in reverse chronological order. There are different types of timelines as shown below, and the notes displayed differ depending on the type. Note that some types of timelines may be disabled by the instance.</p><h2 id="home" tabindex="-1"><a class="header-anchor" href="#home" aria-hidden="true">#</a> Home</h2><p>Posts by users you are following will be displayed. Abbreviated as HTL.</p><h2 id="local" tabindex="-1"><a class="header-anchor" href="#local" aria-hidden="true">#</a> Local</h2><p>All local users&#39; posts that do not have the visibility of &quot;Home&quot; will be shown. Abbreviated as LTL.</p><h2 id="social" tabindex="-1"><a class="header-anchor" href="#social" aria-hidden="true">#</a> Social</h2><p>Posts of users you are following and all local users&#39;s posts that do not have the visibility of &quot;Home&quot; will be shown. Abbreviated as STL. Think of it as STL = HTL + LTL.</p><h2 id="global" tabindex="-1"><a class="header-anchor" href="#global" aria-hidden="true">#</a> Global</h2><p>All local users&#39; posts that do not have the visibility of &quot;Home&quot; and all remote users&#39; posts that do not have the visibility of &quot;Home&quot; that reach the server. Abbreviated as GTL.</p><h2 id="custom-timelines" tabindex="-1"><a class="header-anchor" href="#custom-timelines" aria-hidden="true">#</a> Custom Timelines</h2>',11),m=o('<h2 id="comparison" tabindex="-1"><a class="header-anchor" href="#comparison" aria-hidden="true">#</a> Comparison</h2><table><thead><tr><th>Source</th><th></th><th></th><th>Timeline</th><th></th><th></th></tr></thead><tbody><tr><td>User</td><td>Visibility</td><td>Home</td><td>Local</td><td>Social</td><td>Global</td></tr><tr><td>Local (Followers)</td><td>Public</td><td>\u2714</td><td>\u2714</td><td>\u2714</td><td>\u2714</td></tr><tr><td></td><td>Home</td><td>\u2714</td><td></td><td>\u2714</td><td></td></tr><tr><td></td><td>Followers</td><td>\u2714</td><td></td><td>\u2714</td><td></td></tr><tr><td>Remote (Followers)</td><td>Public</td><td>\u2714</td><td></td><td>\u2714</td><td>\u2714</td></tr><tr><td></td><td>Home</td><td>\u2714</td><td></td><td>\u2714</td><td></td></tr><tr><td></td><td>Followers</td><td>\u2714</td><td></td><td>\u2714</td><td></td></tr><tr><td>local (Non-followers)</td><td>Public</td><td></td><td>\u2714</td><td>\u2714</td><td>\u2714</td></tr><tr><td></td><td>Home</td><td></td><td></td><td></td><td></td></tr><tr><td></td><td>Followers</td><td></td><td></td><td></td><td></td></tr><tr><td>Remote (Non-followers)</td><td>Public</td><td></td><td></td><td></td><td>\u2714</td></tr><tr><td></td><td>Home</td><td></td><td></td><td></td><td></td></tr><tr><td></td><td>Followers</td><td></td><td></td><td></td><td></td></tr></tbody></table>',2);function u(b,f){const d=i("RouterLink");return s(),l("div",null,[c,h("p",null,[t("Misskey has other features where you can create timelines with more granularity. See "),e(d,{to:"/docs/features/list.html"},{default:a(()=>[t("Lists")]),_:1}),t(" and "),e(d,{to:"/docs/features/antenna.html"},{default:a(()=>[t("Antennas")]),_:1}),t(" for details.")]),m])}var w=r(n,[["render",u],["__file","timeline.html.vue"]]);export{w as default};