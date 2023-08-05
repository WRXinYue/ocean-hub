import{_ as n,r as o,o as r,c as i,a,d as e,b as s,w as c,e as d}from"./app.b145dd9f.js";const h={},l=a("h1",{id:"pages",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#pages","aria-hidden":"true"},"#"),e(" Pages")],-1),b=d('<p>Pages in Ocean are composed of different types of Blocks, and the blocks can be moved around using drag-and-drop.</p><h2 id="content-blocks" tabindex="-1"><a class="header-anchor" href="#content-blocks" aria-hidden="true">#</a> Content Blocks</h2><p>Content blocks display different types of content to the user.</p><h3 id="section" tabindex="-1"><a class="header-anchor" href="#section" aria-hidden="true">#</a> Section</h3><p>A grouping block that can contain other blocks. Each content block has a title that it will display at its top.</p><h3 id="text" tabindex="-1"><a class="header-anchor" href="#text" aria-hidden="true">#</a> Text</h3><p>Displays text content to the user. The text content can be formatted and can include variables interpolation (See Variables below).</p><h3 id="images" tabindex="-1"><a class="header-anchor" href="#images" aria-hidden="true">#</a> Images</h3><p>Displays an image that you can select from your drive.</p><h3 id="text-area" tabindex="-1"><a class="header-anchor" href="#text-area" aria-hidden="true">#</a> Text Area</h3><p>Displays text in a text area tag. This block does not support MFM but variable interpolation is allowed.</p><h3 id="embedded-note" tabindex="-1"><a class="header-anchor" href="#embedded-note" aria-hidden="true">#</a> Embedded Note</h3><p>TODO</p><h3 id="canvas" tabindex="-1"><a class="header-anchor" href="#canvas" aria-hidden="true">#</a> Canvas</h3><p>TODO</p><h2 id="input-blocks" tabindex="-1"><a class="header-anchor" href="#input-blocks" aria-hidden="true">#</a> Input Blocks</h2><p>Input blocks can be used to create interactive pages with form elements. These blocks can be used to interact with the variables and scripts in a page.</p><h2 id="special-blocks" tabindex="-1"><a class="header-anchor" href="#special-blocks" aria-hidden="true">#</a> Special Blocks</h2><p>Special blocks provide unique features for your page. This includes a note posting form and page control flow.</p><h2 id="variables" tabindex="-1"><a class="header-anchor" href="#variables" aria-hidden="true">#</a> Variables</h2><p>Variables can be used to create dynamic pages. You can embed the value of a variable by writing <b>{ variable name }</b> in the text. For example, in <b>Hello { thing } world!</b>, if the value of the variable (thing) was <b>ai</b>, then the text would become <b>Hello ai world!</b>.</p><p>Variables are evaluated from top to bottom, so you cannot refer to a variable defined below you in a given variable. For example, if there are three variables, <b>A, B, C</b>, that are defined in that order, <b>A</b> and <b>B</b> can be referenced inside of <b>C</b>&#39;s definition; however, <b>B</b> and <b>C</b> cannot be referenced inside of <b>A</b>&#39;s.</p><p>To receive input from the user, place an &quot;Input&quot; block on the page and set the &quot;Variable Name&quot; to the name of the variable in which you want to store the value (the variable will automatically be created by the block). The variable can the be used to perform actions in response to user input.</p><p>Functions can be used to encapsulate value calculations in a reusable form. To create a function, create a variable of type &quot;Function&quot;. A function can have slots (arguments), and the values of the slots are available as variables within the function. There are also functions called higher-order functions that take another function as an argument. Functions can be predefined or instantiated in-line in slots of such higher order functions.</p>',24);function u(p,f){const t=o("RouterLink");return r(),i("div",null,[l,a("p",null,[e("Ocean Pages are a feature where you can create custom web pages. In them you can include different types of media and formatting. and even run programming scripts. Like with many other areas of Ocean, you can format your content using "),s(t,{to:"/docs/features/mfm.html"},{default:c(()=>[e("MFM")]),_:1}),e(".")]),b])}var v=n(h,[["render",u],["__file","pages.html.vue"]]);export{v as default};
