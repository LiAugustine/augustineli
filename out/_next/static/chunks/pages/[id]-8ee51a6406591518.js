(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[112],{5222:function(n,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[id]",function(){return s(1577)}])},3377:function(n,e,s){"use strict";s.r(e);var i=s(5893),t=s(7294),r=s(1163),c=(s(1664),s(8527)),o=s(5193),h=s(3181),l=s(7657),d=s(6871),x=s(1872);e.default=function(){var n=(0,r.useRouter)(),e=(0,t.useState)(!1),s=e[0],u=e[1];return(0,t.useEffect)((function(){fetch("/get_user",{method:"GET",headers:{content_type:"application/json"}}).then((function(n){return n.json()})).then((function(n){u(n)}))}),[]),(0,i.jsx)("div",{className:"Navbar",children:(0,i.jsx)(c.M5,{h:"80px",children:(0,i.jsxs)(c.kC,{minWidth:"max-content",alignItems:"center",gap:"3",children:[(0,i.jsx)(c.xu,{p:"3",children:(0,i.jsx)(c.X6,{size:"md",children:"Augustine Li"})}),(0,i.jsxs)(o.hE,{children:[(0,i.jsx)(o.zx,{variant:"ghost",onClick:function(){return n.push("/")},children:"Home"}),(0,i.jsx)(o.zx,{variant:"ghost",onClick:function(){return n.push("/Blog")},children:"Blog"}),(0,i.jsx)(o.zx,{variant:"ghost",onClick:function(){return n.push("/Projects")},children:"Projects"})]}),(0,i.jsx)(c.LZ,{}),s?(0,i.jsxs)(h.J2,{children:[(0,i.jsx)(h.xo,{children:(0,i.jsxs)(o.zx,{children:[(0,i.jsx)(c.Eq,{children:(0,i.jsx)(c.Uc,{children:(0,i.jsx)(l.qE,{size:"sm",src:s.picture})})}),s.name]})}),(0,i.jsx)(d.h_,{children:(0,i.jsxs)(h.yk,{children:[(0,i.jsx)(h.QH,{}),(0,i.jsx)(h.Yt,{children:"Account Options"}),(0,i.jsx)(h.us,{}),(0,i.jsx)(h.b,{children:(0,i.jsx)("a",{href:"/logout",children:(0,i.jsx)(o.zx,{colorScheme:"red",size:"md",children:"Sign-out"})})})]})})]}):(0,i.jsxs)(h.J2,{children:[(0,i.jsx)(h.xo,{children:(0,i.jsx)(o.zx,{colorScheme:"green",size:"md",children:"Sign-in"})}),(0,i.jsx)(d.h_,{children:(0,i.jsxs)(h.yk,{children:[(0,i.jsx)(h.QH,{}),(0,i.jsx)(h.Yt,{children:"Sign-in Options"}),(0,i.jsx)(h.us,{}),(0,i.jsx)(h.b,{children:(0,i.jsx)("a",{href:"/login",children:(0,i.jsxs)(o.zx,{colorScheme:"gray",color:"black",size:"md",children:[(0,i.jsx)(x.JM8,{})," Sign-in with Google"]})})})]})})]})]})})})}},1577:function(n,e,s){"use strict";s.r(e);var i=s(5893),t=s(7294),r=s(1163),c=s(5935),o=s(8527),h=s(3377);e.default=function(){var n=(0,r.useRouter)(),e={};console.log(n),(0,t.useEffect)((function(){n.isReady&&(e=n.asPath.slice(1))}),[n.isReady]);var s=(0,t.useState)([]),l=s[0],d=s[1];return(0,t.useEffect)((function(){e&&fetch("/fetch_post",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(n){return n.json()})).then((function(n){d(n)}))}),[e]),(0,i.jsxs)("div",{children:[(0,i.jsx)(h.default,{}),(0,i.jsx)(o.M5,{children:(0,i.jsx)(o.X6,{as:"h3",size:"xl",children:l.title})}),(0,i.jsx)(o.M5,{children:(0,i.jsx)(o.xv,{fontSize:"xl",fontWeight:"semibold",color:"gray.500",children:l.subtitle})}),(0,i.jsx)(o.M5,{mb:6,children:(0,i.jsxs)(o.xv,{fontSize:"md",children:[l.author," | ",l.date]})}),(0,i.jsx)(o.M5,{children:(0,c.ZP)(String(l.article))})]})}}},function(n){n.O(0,[994,552,95,935,774,888,179],(function(){return e=5222,n(n.s=e);var e}));var e=n.O();_N_E=e}]);