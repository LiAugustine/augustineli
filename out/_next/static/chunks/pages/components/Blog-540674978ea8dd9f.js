(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[155],{4651:function(e,r,n){"use strict";n.d(r,{Ee:function(){return g},d9:function(){return s}});var t=n(2846),i=n(5031),o=n(7294),a=n(4697);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},l.apply(this,arguments)}function c(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}function s(e){var r=e.loading,n=e.src,t=e.srcSet,i=e.onLoad,l=e.onError,c=e.crossOrigin,s=e.sizes,u=e.ignoreFallback,f=(0,o.useState)("pending"),d=f[0],g=f[1];(0,o.useEffect)((function(){g(n?"loading":"pending")}),[n]);var h=(0,o.useRef)(),m=(0,o.useCallback)((function(){if(n){p();var e=new Image;e.src=n,c&&(e.crossOrigin=c),t&&(e.srcset=t),s&&(e.sizes=s),r&&(e.loading=r),e.onload=function(e){p(),g("loaded"),null==i||i(e)},e.onerror=function(e){p(),g("failed"),null==l||l(e)},h.current=e}}),[n,c,t,s,i,l,r]),p=function(){h.current&&(h.current.onload=null,h.current.onerror=null,h.current=null)};return(0,a.a)((function(){if(!u)return"loading"===d&&m(),function(){p()}}),[d,m,u]),u?"loaded":d}var u=["htmlWidth","htmlHeight","alt"],f=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin","fallbackStrategy","referrerPolicy"],d=o.forwardRef((function(e,r){var n=e.htmlWidth,t=e.htmlHeight,i=e.alt,a=c(e,u);return o.createElement("img",l({width:n,height:t,ref:r,alt:i},a))})),g=(0,t.Gp)((function(e,r){var n=e.fallbackSrc,a=e.fallback,u=e.src,g=e.srcSet,h=e.align,m=e.fit,p=e.loading,x=e.ignoreFallback,b=e.crossOrigin,k=e.fallbackStrategy,j=void 0===k?"beforeLoadOrError":k,v=e.referrerPolicy,E=c(e,f),y=null!=p||x||!(void 0!==n||void 0!==a),O=function(e,r){return"loaded"!==e&&"beforeLoadOrError"===r||"failed"===e&&"onError"===r}(s(l({},e,{ignoreFallback:y})),j),_=l({ref:r,objectFit:m,objectPosition:h},y?E:(0,i.CE)(E,["onError","onLoad"]));return O?a||o.createElement(t.m$.img,l({as:d,className:"chakra-image__placeholder",src:n},_)):o.createElement(t.m$.img,l({as:d,src:u,srcSet:g,crossOrigin:b,loading:p,referrerPolicy:v,className:"chakra-image"},_))}));i.Ts&&(g.displayName="Image")},4754:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/Blog",function(){return n(1423)}])},1423:function(e,r,n){"use strict";n.r(r);var t=n(5893),i=n(7294),o=n(1163),a=n(8527),l=n(4651);r.default=function(){var e=(0,i.useState)([]),r=e[0],n=e[1],c=(0,o.useRouter)();return(0,i.useEffect)((function(){fetch("/get_articles",{method:"GET",headers:{content_type:"application/json"}}).then((function(e){return e.json()})).then((function(e){n(e)}))}),[]),(0,t.jsx)("div",{children:r.map((function(e){return(0,t.jsx)(a.M5,{h:"170px",children:(0,t.jsxs)(a.xu,{maxW:"md",borderWidth:"1px",borderRadius:"lg",overflow:"hidden",children:[(0,t.jsx)(l.Ee,{src:e.image}),(0,t.jsxs)(a.xu,{p:"6",children:[(0,t.jsxs)(a.xu,{display:"flex",alignItems:"baseline",children:[(0,t.jsx)(a.Ct,{borderRadius:"full",px:"2",colorScheme:"teal",children:e.topic}),(0,t.jsx)(a.xu,{color:"gray.500",fontWeight:"semibold",letterSpacing:"wide",fontSize:"xs",textTransform:"uppercase",ml:"2",children:e.date})]}),(0,t.jsx)(a.xu,{mt:"1",fontWeight:"semibold",as:"h4",lineHeight:"tight",noOfLines:1,children:(0,t.jsx)(a.rU,{onClick:function(){return c.push({pathname:"/components/post/"+e.title,query:{id:e.id,title:e.title,subtitle:e.subtitle,topic:e.topic,image:e.image,author:e.author,date:e.date,article:e.article,likes:e.likes}},"/components/post/"+e.title)},children:e.title})}),(0,t.jsxs)(a.xu,{children:[e.subtitle,(0,t.jsx)(a.xu,{as:"span",color:"gray.600",fontSize:"sm"})]}),(0,t.jsx)(a.xu,{display:"flex",mt:"2",alignItems:"center",children:(0,t.jsxs)(a.xu,{as:"span",ml:"2",color:"gray.600",fontSize:"sm",children:[e.likes," likes"]})})]})]})})}))})}},1163:function(e,r,n){e.exports=n(880)}},function(e){e.O(0,[527,774,888,179],(function(){return r=4754,e(e.s=r);var r}));var r=e.O();_N_E=r}]);