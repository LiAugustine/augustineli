(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(1459)}])},9749:function(e,t,i){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var n,r,o=[],a=!0,s=!1;try{for(i=i.call(e);!(a=(n=i.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(l){s=!0,r=l}finally{try{a||null==i.return||i.return()}finally{if(s)throw r}}return o}}(e,t)||s(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||s(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){if(e){if("string"===typeof e)return n(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(i):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?n(e,t):void 0}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,i=e.sizes,n=e.unoptimized,s=void 0!==n&&n,l=e.priority,c=void 0!==l&&l,m=e.loading,p=e.lazyRoot,v=void 0===p?null:p,O=e.lazyBoundary,R=void 0===O?"200px":O,L=e.className,I=e.quality,P=e.width,M=e.height,B=e.style,C=e.objectFit,_=e.objectPosition,N=e.onLoadingComplete,W=e.placeholder,U=void 0===W?"empty":W,D=e.blurDataURL,q=x(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),H=d.useContext(g.ImageConfigContext),V=d.useMemo((function(){var e=b||H||h.imageConfigDefault,t=a(e.deviceSizes).concat(a(e.imageSizes)).sort((function(e,t){return e-t})),i=e.deviceSizes.sort((function(e,t){return e-t}));return A({},e,{allSizes:t,deviceSizes:i})}),[H]),F=q,G=i?"responsive":"intrinsic";"layout"in F&&(F.layout&&(G=F.layout),delete F.layout);var J=E;if("loader"in F){if(F.loader){var Q=F.loader;J=function(e){e.config;var t=x(e,["config"]);return Q(t)}}delete F.loader}var T="";if(function(e){return"object"===typeof e&&(w(e)||function(e){return void 0!==e.src}(e))}(t)){var X=w(t)?t.default:t;if(!X.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(X)));if(D=D||X.blurDataURL,T=X.src,(!G||"fill"!==G)&&(M=M||X.height,P=P||X.width,!X.height||!X.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(X)))}t="string"===typeof t?t:T;var Y=z(P),Z=z(M),K=z(I),$=!c&&("lazy"===m||"undefined"===typeof m);(t.startsWith("data:")||t.startsWith("blob:"))&&(s=!0,$=!1);y.has(t)&&($=!1);var ee,te=o(d.useState(!1),2),ie=te[0],ne=te[1],re=o(f.useIntersection({rootRef:v,rootMargin:R,disabled:!$}),3),oe=re[0],ae=re[1],se=re[2],le=!$||ae,ce={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},de={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ue=!1,he={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:C,objectPosition:_};0;0;var fe=Object.assign({},B,"raw"===G?{}:he),ge="blur"!==U||ie?{}:{filter:"blur(20px)",backgroundSize:C||"cover",backgroundImage:'url("'.concat(D,'")'),backgroundPosition:_||"0% 0%"};if("fill"===G)ce.display="block",ce.position="absolute",ce.top=0,ce.left=0,ce.bottom=0,ce.right=0;else if("undefined"!==typeof Y&&"undefined"!==typeof Z){var me=Z/Y,pe=isNaN(me)?"100%":"".concat(100*me,"%");"responsive"===G?(ce.display="block",ce.position="relative",ue=!0,de.paddingTop=pe):"intrinsic"===G?(ce.display="inline-block",ce.position="relative",ce.maxWidth="100%",ue=!0,de.maxWidth="100%",ee="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(Y,"%27%20height=%27").concat(Z,"%27/%3e")):"fixed"===G&&(ce.display="inline-block",ce.position="relative",ce.width=Y,ce.height=Z)}else 0;var Ae={src:j,srcSet:void 0,sizes:void 0};le&&(Ae=S({config:V,src:t,unoptimized:s,layout:G,width:Y,quality:K,sizes:i,loader:J}));var xe=t;0;var be,ye="imagesrcset",je="imagesizes";ye="imageSrcSet",je="imageSizes";var ve=(r(be={},ye,Ae.srcSet),r(be,je,Ae.sizes),be),we=d.default.useLayoutEffect,Se=d.useRef(N),ze=d.useRef(t);d.useEffect((function(){Se.current=N}),[N]),we((function(){ze.current!==t&&(se(),ze.current=t)}),[se,t]);var Ee=A({isLazy:$,imgAttributes:Ae,heightInt:Z,widthInt:Y,qualityInt:K,layout:G,className:L,imgStyle:fe,blurStyle:ge,loading:m,config:V,unoptimized:s,placeholder:U,loader:J,srcString:xe,onLoadingCompleteRef:Se,setBlurComplete:ne,setIntersection:oe,isVisible:le},F);return d.default.createElement(d.default.Fragment,null,"raw"===G?d.default.createElement(k,Object.assign({},Ee)):d.default.createElement("span",{style:ce},ue?d.default.createElement("span",{style:de},ee?d.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:ee}):null):null,d.default.createElement(k,Object.assign({},Ee))),c?d.default.createElement(u.default,null,d.default.createElement("link",Object.assign({key:"__nimg-"+Ae.src+Ae.srcSet+Ae.sizes,rel:"preload",as:"image",href:Ae.srcSet?void 0:Ae.src},ve))):null)};var l,c,d=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,i):{};n.get||n.set?Object.defineProperty(t,i,n):t[i]=e[i]}return t.default=e,t}(i(7294)),u=(l=i(3121))&&l.__esModule?l:{default:l},h=i(139),f=i(9246),g=i(8730),m=(i(670),i(2700));function p(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function A(e){for(var t=arguments,i=function(i){var n=null!=t[i]?t[i]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){p(e,t,n[t])}))},n=1;n<arguments.length;n++)i(n);return e}function x(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}c={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/",loader:"akamai",experimentalLayoutRaw:!1};var b={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/",loader:"akamai",experimentalLayoutRaw:!1},y=new Set,j=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var v=new Map([["default",function(e){var t=e.config,i=e.src,n=e.width,r=e.quality;0;if(i.endsWith(".svg")&&!t.dangerouslyAllowSVG)return i;return"".concat(m.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(r||75)}],["imgix",function(e){var t=e.config,i=e.src,n=e.width,r=e.quality,o=new URL("".concat(t.path).concat(R(i))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||n.toString()),r&&a.set("q",r.toString());return o.href}],["cloudinary",function(e){var t=e.config,i=e.src,n=e.width,r=e.quality,o=["f_auto","c_limit","w_"+n,"q_"+(r||"auto")].join(",")+"/";return"".concat(t.path).concat(o).concat(R(i))}],["akamai",function(e){var t=e.config,i=e.src,n=e.width;return"".concat(t.path).concat(R(i),"?imwidth=").concat(n)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function w(e){return void 0!==e.default}function S(e){var t=e.config,i=e.src,n=e.unoptimized,r=e.layout,o=e.width,s=e.quality,l=e.sizes,c=e.loader;if(n)return{src:i,srcSet:void 0,sizes:void 0};var d=function(e,t,i,n){var r=e.deviceSizes,o=e.allSizes;if(n&&("fill"===i||"responsive"===i||"raw"===i)){for(var s,l=/(^|\s)(1?\d?\d)vw/g,c=[];s=l.exec(n);s)c.push(parseInt(s[2]));if(c.length){var d,u=.01*(d=Math).min.apply(d,a(c));return{widths:o.filter((function(e){return e>=r[0]*u})),kind:"w"}}return{widths:o,kind:"w"}}return"number"!==typeof t||"fill"===i||"responsive"===i?{widths:r,kind:"w"}:{widths:a(new Set([t,2*t].map((function(e){return o.find((function(t){return t>=e}))||o[o.length-1]})))),kind:"x"}}(t,o,r,l),u=d.widths,h=d.kind,f=u.length-1;return{sizes:l||"w"!==h?l:"100vw",srcSet:u.map((function(e,n){return"".concat(c({config:t,src:i,quality:s,width:e})," ").concat("w"===h?e:n+1).concat(h)})).join(", "),src:c({config:t,src:i,quality:s,width:u[f]})}}function z(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function E(e){var t,i=(null===(t=e.config)||void 0===t?void 0:t.loader)||"default",n=v.get(i);if(n)return n(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(h.VALID_LOADERS.join(", "),". Received: ").concat(i))}function O(e,t,i,n,r,o){e&&e.src!==j&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(y.add(t),"blur"===n&&o(!0),null===r||void 0===r?void 0:r.current)){var i=e.naturalWidth,a=e.naturalHeight;r.current({naturalWidth:i,naturalHeight:a})}})))}var k=function(e){var t=e.imgAttributes,i=e.heightInt,n=e.widthInt,r=e.qualityInt,o=e.layout,a=e.className,s=e.imgStyle,l=e.blurStyle,c=e.isLazy,u=e.placeholder,h=e.loading,f=e.srcString,g=e.config,m=e.unoptimized,p=e.loader,b=e.onLoadingCompleteRef,y=e.setBlurComplete,j=e.setIntersection,v=e.onLoad,w=e.onError,z=(e.isVisible,x(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible"]));return d.default.createElement(d.default.Fragment,null,d.default.createElement("img",Object.assign({},z,t,"raw"===o?{height:i,width:n}:{},{decoding:"async","data-nimg":o,className:a,style:A({},s,l),ref:d.useCallback((function(e){j(e),(null===e||void 0===e?void 0:e.complete)&&O(e,f,0,u,b,y)}),[j,f,o,u,b,y]),onLoad:function(e){O(e.currentTarget,f,0,u,b,y),v&&v(e)},onError:function(e){"blur"===u&&y(!0),w&&w(e)}})),(c||"blur"===u)&&d.default.createElement("noscript",null,d.default.createElement("img",Object.assign({},z,S({config:g,src:f,unoptimized:m,layout:o,width:n,quality:r,sizes:t.sizes,loader:p}),"raw"===o?{height:i,width:n}:{},{decoding:"async","data-nimg":o,style:s,className:a,loading:h||"lazy"}))))};function R(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},3377:function(e,t,i){"use strict";i.r(t);var n=i(5893),r=i(7294),o=i(1163),a=(i(1664),i(8641)),s=i(7741),l=i(5405),c=i(3812),d=i(7174),u=i(1872);t.default=function(){var e=(0,o.useRouter)(),t=(0,r.useState)(!1),i=t[0],h=t[1];return(0,r.useEffect)((function(){fetch("/get_user",{method:"GET",headers:{content_type:"application/json"}}).then((function(e){return e.json()})).then((function(e){h(e)}))}),[]),(0,n.jsx)("div",{className:"Navbar",children:(0,n.jsx)(a.M5,{h:"80px",children:(0,n.jsxs)(a.kC,{minWidth:"max-content",alignItems:"center",gap:"3",children:[(0,n.jsx)(a.xu,{p:"3",children:(0,n.jsx)(a.X6,{size:"md",children:"Augustine Li"})}),(0,n.jsxs)(s.hE,{children:[(0,n.jsx)(s.zx,{variant:"ghost",onClick:function(){return e.push("/")},children:"Home"}),(0,n.jsx)(s.zx,{variant:"ghost",onClick:function(){return e.push("/Blog")},children:"Blog"}),(0,n.jsx)(s.zx,{variant:"ghost",onClick:function(){return e.push("/Projects")},children:"Projects"})]}),(0,n.jsx)(a.LZ,{}),i?(0,n.jsxs)(l.J2,{children:[(0,n.jsx)(l.xo,{children:(0,n.jsxs)(s.zx,{children:[(0,n.jsx)(a.Eq,{children:(0,n.jsx)(a.Uc,{children:(0,n.jsx)(c.qE,{size:"sm",src:i.picture})})}),i.name]})}),(0,n.jsx)(d.h_,{children:(0,n.jsxs)(l.yk,{children:[(0,n.jsx)(l.QH,{}),(0,n.jsx)(l.Yt,{children:"Account Options"}),(0,n.jsx)(l.us,{}),(0,n.jsx)(l.b,{children:(0,n.jsx)("a",{href:"/logout",children:(0,n.jsx)(s.zx,{colorScheme:"red",size:"md",children:"Sign-out"})})})]})})]}):(0,n.jsxs)(l.J2,{children:[(0,n.jsx)(l.xo,{children:(0,n.jsx)(s.zx,{colorScheme:"green",size:"md",children:"Sign-in"})}),(0,n.jsx)(d.h_,{children:(0,n.jsxs)(l.yk,{children:[(0,n.jsx)(l.QH,{}),(0,n.jsx)(l.Yt,{children:"Sign-in Options"}),(0,n.jsx)(l.us,{}),(0,n.jsx)(l.b,{children:(0,n.jsx)("a",{href:"/login",children:(0,n.jsxs)(s.zx,{colorScheme:"gray",color:"black",size:"md",children:[(0,n.jsx)(u.JM8,{})," Sign-in with Google"]})})})]})})]})]})})})}},1459:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return v}});var n=i(5893),r=i(8641),o=i(9008),a=i.n(o),s=i(5675),l=i.n(s),c={src:"/_next/static/media/flask.dc366ac9.png",height:256,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAQAAAAZxLZ7AAAAOElEQVR42lXDIQrAIAAAwDMOLGPra4vDNLMIvsAH+P9XaPXgOF02wy+qHockkow1K5ruhU9zIyBMeXcD8Od62YUAAAAASUVORK5CYII="},d={src:"/_next/static/media/react.b84becef.png",height:665,width:1200,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAEBAMAAABB42PDAAAAMFBMVEX////9/v76/f70+/7y+/7v+v7s+f7q+f7o+P7n+P7m9/7j9/7a9P7Z9P6/7f2+7f0TiH4dAAAAHElEQVR42mNgEmBgYMg/3hLMkHd11xQGJgEGBgAulATDBp+YUAAAAABJRU5ErkJggg=="},u={src:"/_next/static/media/chakra.363aceb3.png",height:320,width:400,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAP1BMVEX////+/v79/v76/P3y+Prz9vbu7e7s7e3r6+zd8O7j7e3p6uvm5+jd3uDA5uLZ2tvU1tfW1Nax397LzM550M8STVzjAAAAKklEQVR42mNgYGAEAwZmFgYIEBLhEhQQ5udl4ORjZePmYedggAMmJohiABjpAOBmnn2dAAAAAElFTkSuQmCC"},h={src:"/_next/static/media/heroku.0185984e.png",height:500,width:900,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAM1BMVEX////8/P38/Pz7+/zt7PLr6fHq6fDo5u7n5u7n5e7m5O3l4+zk4uvj4evf3eje3Ojb2ebY/wdWAAAAIklEQVR42mNgZGaAAAF+Fi4udg5WBl4+Nh5uLm5OBiaoFAAMNgCrtY4RPgAAAABJRU5ErkJggg=="},f=i(3377),g="Flask",m="Backend Flask with SQLAlchemy ORM.",p="React",A="React Frontend using the NextJS Framework.",x="Chakra UI",b="Styling solution for React.",y="Heroku",j="Website deployment and hosting.",v=function(){return(0,n.jsxs)("div",{children:[(0,n.jsxs)(a(),{children:[(0,n.jsx)("title",{children:"Home - Augustine Li"}),(0,n.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,n.jsx)(f.default,{}),(0,n.jsx)(r.M5,{children:(0,n.jsxs)(r.xu,{maxW:"48rem",children:[(0,n.jsx)(r.M5,{children:(0,n.jsx)(r.X6,{as:"h3",mb:3,children:"Augustine Li"})}),(0,n.jsx)(r.M5,{children:(0,n.jsx)(r.xv,{fontSize:"xl",mb:6,children:"Welcome to my website!"})}),(0,n.jsx)(r.M5,{children:(0,n.jsx)(r.X6,{as:"h5",mb:3,children:"Website Technologies"})}),(0,n.jsxs)(r.rj,{templateColumns:"repeat(2, 1fr)",gap:6,children:[(0,n.jsxs)(r.xu,{maxW:"sm",borderWidth:"1px",borderRadius:"lg",overflow:"hidden",children:[(0,n.jsx)(r.M5,{children:(0,n.jsx)(r.xu,{w:"sm",h:"200px",children:(0,n.jsx)(l(),{src:c,alt:"Flask"})})}),(0,n.jsxs)(r.xu,{p:"6",children:[(0,n.jsx)(r.xu,{mt:"1",fontWeight:"semibold",as:"h4",lineHeight:"tight",noOfLines:1,children:g}),(0,n.jsx)(r.xu,{children:m})]})]}),(0,n.jsxs)(r.xu,{maxW:"sm",borderWidth:"1px",borderRadius:"lg",overflow:"hidden",children:[(0,n.jsx)(r.M5,{children:(0,n.jsx)(r.xu,{w:"sm",h:"200px",children:(0,n.jsx)(l(),{src:d,alt:"React"})})}),(0,n.jsxs)(r.xu,{p:"6",children:[(0,n.jsx)(r.xu,{mt:"1",fontWeight:"semibold",as:"h4",lineHeight:"tight",noOfLines:1,children:p}),(0,n.jsx)(r.xu,{children:A})]})]}),(0,n.jsxs)(r.xu,{maxW:"sm",borderWidth:"1px",borderRadius:"lg",overflow:"hidden",children:[(0,n.jsx)(r.M5,{children:(0,n.jsx)(r.xu,{w:"sm",h:"200px",children:(0,n.jsx)(l(),{src:u,alt:"Chakra UI",height:250})})}),(0,n.jsxs)(r.xu,{p:"6",children:[(0,n.jsx)(r.xu,{mt:"1",fontWeight:"semibold",as:"h4",lineHeight:"tight",noOfLines:1,children:x}),(0,n.jsx)(r.xu,{children:b})]})]}),(0,n.jsxs)(r.xu,{maxW:"sm",borderWidth:"1px",borderRadius:"lg",overflow:"hidden",children:[(0,n.jsx)(r.M5,{children:(0,n.jsx)(r.xu,{w:"sm",h:"200px",children:(0,n.jsx)(l(),{src:h,alt:"Heroku"})})}),(0,n.jsxs)(r.xu,{p:"6",children:[(0,n.jsx)(r.xu,{mt:"1",fontWeight:"semibold",as:"h4",lineHeight:"tight",noOfLines:1,children:y}),(0,n.jsx)(r.xu,{children:j})]})]})]})]})})]})}},9008:function(e,t,i){e.exports=i(3121)},5675:function(e,t,i){e.exports=i(9749)}},function(e){e.O(0,[994,155,839,774,888,179],(function(){return t=5557,e(e.s=t);var t}));var t=e.O();_N_E=t}]);