(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[158],{9179:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/Like",function(){return n(8646)}])},8646:function(t,e,n){"use strict";n.r(e);var r=n(5893),o=n(7294),i=n(3750);e.default=function(t){var e=(0,o.useState)(t.article_id),n=e[0],c=(e[1],(0,o.useState)(t.likes)),l=c[0],u=c[1],a=(0,o.useState)(t.liked),s=a[0],f=a[1],h=function(t,e){var n;"true"==e?(u(l-1),f("false"),n=t,fetch("/unlike_article",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(t){return t.json()})).then((function(t){alert(t)}))):(u(l+1),f("true"),function(t){fetch("/like_article",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(t){return t.json()})).then((function(t){alert(t)}))}(t))};return(0,r.jsx)("div",{children:"true"==s?(0,r.jsxs)("button",{onClick:function(){return h(n,s)},children:[(0,r.jsx)(i.ytW,{}),l]}):(0,r.jsxs)("button",{onClick:function(){return h(n,s)},children:[(0,r.jsx)(i.sF8,{}),l]})})}},5177:function(t,e,n){"use strict";n.d(e,{w_:function(){return a}});var r=n(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(o),c=function(){return c=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},c.apply(this,arguments)},l=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n};function u(t){return t&&t.map((function(t,e){return r.createElement(t.tag,c({key:e},t.attr),u(t.child))}))}function a(t){return function(e){return r.createElement(s,c({attr:c({},t.attr)},e),u(t.child))}}function s(t){var e=function(e){var n,o=t.attr,i=t.size,u=t.title,a=l(t,["attr","size","title"]),s=i||e.size||"1em";return e.className&&(n=e.className),t.className&&(n=(n?n+" ":"")+t.className),r.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,o,a,{className:n,style:c(c({color:t.color||e.color},e.style),t.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),u&&r.createElement("title",null,u),t.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(t){return e(t)})):e(o)}}},function(t){t.O(0,[13,774,888,179],(function(){return e=9179,t(t.s=e);var e}));var e=t.O();_N_E=e}]);