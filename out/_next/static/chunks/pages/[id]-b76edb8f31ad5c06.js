(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[112],{5222:function(n,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[id]",function(){return s(1577)}])},3377:function(n,e,s){"use strict";s.r(e);var t=s(5893),i=s(7294),r=s(1163),c=s(8527),o=s(5193),h=s(3181),u=s(7657),l=s(6871),a=s(1872);e.default=function(){var n=(0,r.useRouter)(),e=(0,i.useState)(!1),s=e[0],d=e[1];return(0,i.useEffect)((function(){fetch("/get_user",{method:"GET",headers:{content_type:"application/json"}}).then((function(n){return n.json()})).then((function(n){d(n)}))}),[]),(0,t.jsx)("div",{className:"Navbar",children:(0,t.jsx)(c.M5,{h:"80px",children:(0,t.jsxs)(c.kC,{minWidth:"max-content",alignItems:"center",gap:"3",children:[(0,t.jsx)(c.xu,{p:"3",children:(0,t.jsx)(c.X6,{size:"md",children:"Augustine Li"})}),(0,t.jsxs)(o.hE,{children:[(0,t.jsx)(o.zx,{variant:"ghost",onClick:function(){return n.push("/")},children:"Home"}),(0,t.jsx)(o.zx,{variant:"ghost",onClick:function(){return n.push("/Blog")},children:"Blog"}),(0,t.jsx)("a",{href:"https://docs.google.com/document/d/1WuDqJs1mmAWxWuJoka2puwaelpOe7kVK7aL1_5aM8Y8/edit?usp=sharing",target:"_blank",children:(0,t.jsx)(o.zx,{variant:"ghost",children:"Resume"})})]}),(0,t.jsx)(c.LZ,{}),s?(0,t.jsxs)(h.J2,{children:[(0,t.jsx)(h.xo,{children:(0,t.jsxs)(o.zx,{children:[(0,t.jsx)(c.Eq,{children:(0,t.jsx)(c.Uc,{children:(0,t.jsx)(u.qE,{size:"sm",src:s.picture})})}),s.name]})}),(0,t.jsx)(l.h_,{children:(0,t.jsxs)(h.yk,{children:[(0,t.jsx)(h.QH,{}),(0,t.jsx)(h.Yt,{children:"Account Options"}),(0,t.jsx)(h.us,{}),(0,t.jsx)(h.b,{children:(0,t.jsx)("a",{href:"/logout",children:(0,t.jsx)(o.zx,{colorScheme:"red",size:"md",children:"Sign-out"})})})]})})]}):(0,t.jsxs)(h.J2,{children:[(0,t.jsx)(h.xo,{children:(0,t.jsx)(o.zx,{colorScheme:"green",size:"md",children:"Sign-in"})}),(0,t.jsx)(l.h_,{children:(0,t.jsxs)(h.yk,{children:[(0,t.jsx)(h.QH,{}),(0,t.jsx)(h.Yt,{children:"Sign-in Options"}),(0,t.jsx)(h.us,{}),(0,t.jsx)(h.b,{children:(0,t.jsx)("a",{href:"/login",children:(0,t.jsxs)(o.zx,{colorScheme:"gray",color:"black",size:"md",children:[(0,t.jsx)(a.JM8,{})," Sign-in with Google"]})})})]})})]})]})})})}},1577:function(n,e,s){"use strict";s.r(e);var t=s(4051),i=s.n(t),r=s(5893),c=s(7294),o=s(1163),h=s(5935),u=s(8527),l=s(3377);function a(n,e,s,t,i,r,c){try{var o=n[r](c),h=o.value}catch(u){return void s(u)}o.done?e(h):Promise.resolve(h).then(t,i)}e.default=function(){var n=(0,o.useRouter)(),e={};console.log(n),(0,c.useEffect)((function(){n.isReady&&(e=n.asPath.slice(1))}),[n.isReady]);var s=(0,c.useState)([]),t=s[0],d=s[1];return(0,c.useEffect)((function(){if(e){var n=function(){var n,s=(n=i().mark((function n(){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/fetch_post",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(n){return n.json()})).then((function(n){d(n)}));case 2:n.sent;case 3:case"end":return n.stop()}}),n)})),function(){var e=this,s=arguments;return new Promise((function(t,i){var r=n.apply(e,s);function c(n){a(r,t,i,c,o,"next",n)}function o(n){a(r,t,i,c,o,"throw",n)}c(void 0)}))});return function(){return s.apply(this,arguments)}}();n()}}),[e]),(0,r.jsxs)("div",{children:[(0,r.jsx)(l.default,{}),(0,r.jsx)(u.M5,{children:(0,r.jsx)(u.X6,{as:"h3",size:"xl",children:t.title})}),(0,r.jsx)(u.M5,{children:(0,r.jsx)(u.xv,{fontSize:"xl",fontWeight:"semibold",color:"gray.500",children:t.subtitle})}),(0,r.jsx)(u.M5,{mb:6,children:(0,r.jsxs)(u.xv,{fontSize:"md",children:[t.author," | ",t.date]})}),(0,r.jsx)(u.M5,{children:(0,h.ZP)(String(t.article))})]})}}},function(n){n.O(0,[994,552,395,935,774,888,179],(function(){return e=5222,n(n.s=e);var e}));var e=n.O();_N_E=e}]);