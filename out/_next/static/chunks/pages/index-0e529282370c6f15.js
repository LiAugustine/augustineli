(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(4369)}])},1423:function(e,n,s){"use strict";s.r(n);var i=s(5893),t=s(7294),r=s(1163),c=s(8527),l=s(4651);n.default=function(){var e=(0,t.useState)([]),n=e[0],s=e[1],o=(0,r.useRouter)();return(0,t.useEffect)((function(){fetch("/get_articles",{method:"GET",headers:{content_type:"application/json"}}).then((function(e){return e.json()})).then((function(e){s(e)}))}),[]),(0,i.jsx)("div",{children:n.map((function(e){return(0,i.jsx)(c.M5,{h:"170px",children:(0,i.jsxs)(c.xu,{maxW:"md",borderWidth:"1px",borderRadius:"lg",overflow:"hidden",children:[(0,i.jsx)(l.Ee,{src:e.image}),(0,i.jsxs)(c.xu,{p:"6",children:[(0,i.jsxs)(c.xu,{display:"flex",alignItems:"baseline",children:[(0,i.jsx)(c.Ct,{borderRadius:"full",px:"2",colorScheme:"teal",children:e.topic}),(0,i.jsx)(c.xu,{color:"gray.500",fontWeight:"semibold",letterSpacing:"wide",fontSize:"xs",textTransform:"uppercase",ml:"2",children:e.date})]}),(0,i.jsx)(c.xu,{mt:"1",fontWeight:"semibold",as:"h4",lineHeight:"tight",noOfLines:1,children:(0,i.jsx)(c.rU,{onClick:function(){return o.push({pathname:"/components/post/"+e.title,query:{id:e.id,title:e.title,subtitle:e.subtitle,topic:e.topic,image:e.image,author:e.author,date:e.date,article:e.article,likes:e.likes}},"/components/post/"+e.title)},children:e.title})}),(0,i.jsxs)(c.xu,{children:[e.subtitle,(0,i.jsx)(c.xu,{as:"span",color:"gray.600",fontSize:"sm"})]}),(0,i.jsx)(c.xu,{display:"flex",mt:"2",alignItems:"center",children:(0,i.jsxs)(c.xu,{as:"span",ml:"2",color:"gray.600",fontSize:"sm",children:[e.likes," likes"]})})]})]})})}))})}},8010:function(e,n,s){"use strict";s.r(n);var i=s(5893),t=s(8527);n.default=function(){return(0,i.jsx)("div",{className:"Home",children:(0,i.jsx)(t.M5,{children:(0,i.jsxs)(t.xu,{maxW:"36rem",children:[(0,i.jsx)(t.X6,{as:"h3",mb:3,children:"Augustine Li"}),(0,i.jsx)(t.xv,{fontSize:"xl",children:"Blogger, cybersecurity enthusiast, hobbyist web developer"})]})})})}},5283:function(e,n,s){"use strict";s.r(n);var i=s(5893),t=s(7294),r=s(1163),c=s(298),l=s(5193),o=s(8527),u=s(3181),d=s(7657),x=s(6871),h=s(8010),a=s(1423);n.default=function(){var e=(0,r.useRouter)(),n=(0,t.useState)(!1),s=n[0],j=n[1];return(0,t.useEffect)((function(){fetch("/get_user",{method:"GET",headers:{content_type:"application/json"}}).then((function(e){return e.json()})).then((function(e){j(e)}))}),[]),(0,i.jsx)("div",{className:"Navbar",children:(0,i.jsxs)(c.mQ,{children:[(0,i.jsxs)(c.td,{children:[(0,i.jsx)(l.zx,{variant:"ghost",size:"md",children:"Augustine Li"}),(0,i.jsx)(c.OK,{children:"Home"}),(0,i.jsx)(c.OK,{children:"Blog"}),(0,i.jsx)(c.OK,{children:"Contact"}),(0,i.jsx)(o.LZ,{}),(0,i.jsx)("div",{children:s?(0,i.jsxs)(u.J2,{children:[(0,i.jsx)(u.xo,{children:(0,i.jsxs)(l.zx,{children:[(0,i.jsx)(o.Eq,{children:(0,i.jsx)(o.Uc,{children:(0,i.jsx)(d.qE,{size:"sm",src:s.picture})})}),s.name]})}),(0,i.jsx)(x.h_,{children:(0,i.jsxs)(u.yk,{children:[(0,i.jsx)(u.QH,{}),(0,i.jsx)(u.Yt,{children:"Account Options"}),(0,i.jsx)(u.us,{}),(0,i.jsx)(u.b,{children:(0,i.jsx)(l.zx,{colorScheme:"red",size:"md",onClick:function(){return e.push("/logout")},children:"Sign-out"})})]})})]}):(0,i.jsxs)(u.J2,{children:[(0,i.jsx)(u.xo,{children:(0,i.jsx)(l.zx,{colorScheme:"green",size:"md",children:"Sign-in"})}),(0,i.jsx)(x.h_,{children:(0,i.jsxs)(u.yk,{children:[(0,i.jsx)(u.QH,{}),(0,i.jsx)(u.Yt,{children:"Sign-in Options"}),(0,i.jsx)(u.us,{}),(0,i.jsx)(u.b,{children:(0,i.jsx)(l.zx,{colorScheme:"green",size:"md",onClick:function(){return e.push("/login")},children:"Sign-in with Google"})})]})})]})})]}),(0,i.jsxs)(c.nP,{children:[(0,i.jsx)(c.x4,{children:(0,i.jsx)(h.default,{})}),(0,i.jsx)(c.x4,{children:(0,i.jsx)(a.default,{})}),(0,i.jsx)(c.x4,{})]})]})})}},4369:function(e,n,s){"use strict";s.r(n);var i=s(5893),t=s(5283);n.default=function(){return(0,i.jsx)("div",{className:"App",children:(0,i.jsx)(t.default,{})})}}},function(e){e.O(0,[527,543,774,888,179],(function(){return n=5557,e(e.s=n);var n}));var n=e.O();_N_E=n}]);