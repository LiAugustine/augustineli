(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(1459)}])},9749:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(s){l=!0,i=s}finally{try{a||null==n.return||n.return()}finally{if(l)throw i}}return o}}(e,t)||l(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||l(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,n=e.sizes,r=e.unoptimized,l=void 0!==r&&r,s=e.priority,c=void 0!==s&&s,m=e.loading,p=e.lazyRoot,j=void 0===p?null:p,O=e.lazyBoundary,R=void 0===O?"200px":O,I=e.className,L=e.quality,M=e.width,P=e.height,C=e.style,_=e.objectFit,B=e.objectPosition,N=e.onLoadingComplete,U=e.placeholder,W=void 0===U?"empty":U,D=e.blurDataURL,q=b(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),H=u.useContext(g.ImageConfigContext),V=u.useMemo((function(){var e=x||H||f.imageConfigDefault,t=a(e.deviceSizes).concat(a(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return A({},e,{allSizes:t,deviceSizes:n})}),[H]),F=q,G=n?"responsive":"intrinsic";"layout"in F&&(F.layout&&(G=F.layout),delete F.layout);var J=E;if("loader"in F){if(F.loader){var Q=F.loader;J=function(e){e.config;var t=b(e,["config"]);return Q(t)}}delete F.loader}var T="";if(function(e){return"object"===typeof e&&(w(e)||function(e){return void 0!==e.src}(e))}(t)){var X=w(t)?t.default:t;if(!X.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(X)));if(D=D||X.blurDataURL,T=X.src,(!G||"fill"!==G)&&(P=P||X.height,M=M||X.width,!X.height||!X.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(X)))}t="string"===typeof t?t:T;var Y=z(M),Z=z(P),K=z(L),$=!c&&("lazy"===m||"undefined"===typeof m);(t.startsWith("data:")||t.startsWith("blob:"))&&(l=!0,$=!1);y.has(t)&&($=!1);var ee,te=o(u.useState(!1),2),ne=te[0],re=te[1],ie=o(h.useIntersection({rootRef:j,rootMargin:R,disabled:!$}),3),oe=ie[0],ae=ie[1],le=ie[2],se=!$||ae,ce={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ue={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},de=!1,fe={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:_,objectPosition:B};0;0;var he=Object.assign({},C,"raw"===G?{}:fe),ge="blur"!==W||ne?{}:{filter:"blur(20px)",backgroundSize:_||"cover",backgroundImage:'url("'.concat(D,'")'),backgroundPosition:B||"0% 0%"};if("fill"===G)ce.display="block",ce.position="absolute",ce.top=0,ce.left=0,ce.bottom=0,ce.right=0;else if("undefined"!==typeof Y&&"undefined"!==typeof Z){var me=Z/Y,pe=isNaN(me)?"100%":"".concat(100*me,"%");"responsive"===G?(ce.display="block",ce.position="relative",de=!0,ue.paddingTop=pe):"intrinsic"===G?(ce.display="inline-block",ce.position="relative",ce.maxWidth="100%",de=!0,ue.maxWidth="100%",ee="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(Y,"%27%20height=%27").concat(Z,"%27/%3e")):"fixed"===G&&(ce.display="inline-block",ce.position="relative",ce.width=Y,ce.height=Z)}else 0;var Ae={src:v,srcSet:void 0,sizes:void 0};se&&(Ae=S({config:V,src:t,unoptimized:l,layout:G,width:Y,quality:K,sizes:n,loader:J}));var be=t;0;var xe,ye="imagesrcset",ve="imagesizes";ye="imageSrcSet",ve="imageSizes";var je=(i(xe={},ye,Ae.srcSet),i(xe,ve,Ae.sizes),xe),we=u.default.useLayoutEffect,Se=u.useRef(N),ze=u.useRef(t);u.useEffect((function(){Se.current=N}),[N]),we((function(){ze.current!==t&&(le(),ze.current=t)}),[le,t]);var Ee=A({isLazy:$,imgAttributes:Ae,heightInt:Z,widthInt:Y,qualityInt:K,layout:G,className:I,imgStyle:he,blurStyle:ge,loading:m,config:V,unoptimized:l,placeholder:W,loader:J,srcString:be,onLoadingCompleteRef:Se,setBlurComplete:re,setIntersection:oe,isVisible:se},F);return u.default.createElement(u.default.Fragment,null,"raw"===G?u.default.createElement(k,Object.assign({},Ee)):u.default.createElement("span",{style:ce},de?u.default.createElement("span",{style:ue},ee?u.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:ee}):null):null,u.default.createElement(k,Object.assign({},Ee))),c?u.default.createElement(d.default,null,u.default.createElement("link",Object.assign({key:"__nimg-"+Ae.src+Ae.srcSet+Ae.sizes,rel:"preload",as:"image",href:Ae.srcSet?void 0:Ae.src},je))):null)};var s,c,u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294)),d=(s=n(3121))&&s.__esModule?s:{default:s},f=n(139),h=n(9246),g=n(8730),m=(n(670),n(2700));function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function A(e){for(var t=arguments,n=function(n){var r=null!=t[n]?t[n]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),i.forEach((function(t){p(e,t,r[t])}))},r=1;r<arguments.length;r++)n(r);return e}function b(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}c={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/",loader:"akamai",experimentalLayoutRaw:!1};var x={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/",loader:"akamai",experimentalLayoutRaw:!1},y=new Set,v=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var j=new Map([["default",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality;0;if(n.endsWith(".svg")&&!t.dangerouslyAllowSVG)return n;return"".concat(m.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality,o=new URL("".concat(t.path).concat(R(n))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),i&&a.set("q",i.toString());return o.href}],["cloudinary",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality,o=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(t.path).concat(o).concat(R(n))}],["akamai",function(e){var t=e.config,n=e.src,r=e.width;return"".concat(t.path).concat(R(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function w(e){return void 0!==e.default}function S(e){var t=e.config,n=e.src,r=e.unoptimized,i=e.layout,o=e.width,l=e.quality,s=e.sizes,c=e.loader;if(r)return{src:n,srcSet:void 0,sizes:void 0};var u=function(e,t,n,r){var i=e.deviceSizes,o=e.allSizes;if(r&&("fill"===n||"responsive"===n||"raw"===n)){for(var l,s=/(^|\s)(1?\d?\d)vw/g,c=[];l=s.exec(r);l)c.push(parseInt(l[2]));if(c.length){var u,d=.01*(u=Math).min.apply(u,a(c));return{widths:o.filter((function(e){return e>=i[0]*d})),kind:"w"}}return{widths:o,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:i,kind:"w"}:{widths:a(new Set([t,2*t].map((function(e){return o.find((function(t){return t>=e}))||o[o.length-1]})))),kind:"x"}}(t,o,i,s),d=u.widths,f=u.kind,h=d.length-1;return{sizes:s||"w"!==f?s:"100vw",srcSet:d.map((function(e,r){return"".concat(c({config:t,src:n,quality:l,width:e})," ").concat("w"===f?e:r+1).concat(f)})).join(", "),src:c({config:t,src:n,quality:l,width:d[h]})}}function z(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function E(e){var t,n=(null===(t=e.config)||void 0===t?void 0:t.loader)||"default",r=j.get(n);if(r)return r(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(n))}function O(e,t,n,r,i,o){e&&e.src!==v&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(y.add(t),"blur"===r&&o(!0),null===i||void 0===i?void 0:i.current)){var n=e.naturalWidth,a=e.naturalHeight;i.current({naturalWidth:n,naturalHeight:a})}})))}var k=function(e){var t=e.imgAttributes,n=e.heightInt,r=e.widthInt,i=e.qualityInt,o=e.layout,a=e.className,l=e.imgStyle,s=e.blurStyle,c=e.isLazy,d=e.placeholder,f=e.loading,h=e.srcString,g=e.config,m=e.unoptimized,p=e.loader,x=e.onLoadingCompleteRef,y=e.setBlurComplete,v=e.setIntersection,j=e.onLoad,w=e.onError,z=(e.isVisible,b(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible"]));return u.default.createElement(u.default.Fragment,null,u.default.createElement("img",Object.assign({},z,t,"raw"===o?{height:n,width:r}:{},{decoding:"async","data-nimg":o,className:a,style:A({},l,s),ref:u.useCallback((function(e){v(e),(null===e||void 0===e?void 0:e.complete)&&O(e,h,0,d,x,y)}),[v,h,o,d,x,y]),onLoad:function(e){O(e.currentTarget,h,0,d,x,y),j&&j(e)},onError:function(e){"blur"===d&&y(!0),w&&w(e)}})),(c||"blur"===d)&&u.default.createElement("noscript",null,u.default.createElement("img",Object.assign({},z,S({config:g,src:h,unoptimized:m,layout:o,width:r,quality:i,sizes:t.sizes,loader:p}),"raw"===o?{height:n,width:r}:{},{decoding:"async","data-nimg":o,style:l,className:a,loading:f||"lazy"}))))};function R(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(s){l=!0,i=s}finally{try{a||null==n.return||n.return()}finally{if(l)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!l,u=o.useRef(),d=i(o.useState(!1),2),f=d[0],h=d[1],g=i(o.useState(t?t.current:null),2),m=g[0],p=g[1],A=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),r||f||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=c.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=s.get(r):(t=s.get(n),c.push(n));if(t)return t;var i=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(n,t={id:n,observer:o,elements:i}),t}(n),i=r.id,o=r.observer,a=r.elements;return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),s.delete(i);var t=c.findIndex((function(e){return e.root===i.root&&e.margin===i.margin}));t>-1&&c.splice(t,1)}}}(e,(function(e){return e&&h(e)}),{root:m,rootMargin:n}))}),[r,m,n,f]),b=o.useCallback((function(){h(!1)}),[]);return o.useEffect((function(){if(!l&&!f){var e=a.requestIdleCallback((function(){return h(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),o.useEffect((function(){t&&p(t.current)}),[t]),[A,f,b]};var o=n(7294),a=n(4686),l="undefined"!==typeof IntersectionObserver;var s=new Map,c=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},3377:function(e,t,n){"use strict";n.r(t);var r=n(5893),i=n(7294),o=n(1163),a=n(8641),l=n(7741),s=n(5405),c=n(3812),u=n(7174),d=n(1872);t.default=function(){var e=(0,o.useRouter)(),t=(0,i.useState)(void 0),n=t[0],f=t[1];return(0,i.useEffect)((function(){fetch("/get_user",{method:"GET",headers:{content_type:"application/json"}}).then((function(e){return e.json()})).then((function(e){f(e)}))}),[]),(0,r.jsxs)("div",{className:"Navbar",children:[(0,r.jsxs)(a.kC,{minWidth:"max-content",alignItems:"center",gap:"2",children:[(0,r.jsx)(a.xu,{children:(0,r.jsx)(a.X6,{size:"md",as:"span",children:"Augustine Li"})}),(0,r.jsxs)(l.hE,{children:[(0,r.jsx)(l.zx,{variant:"ghost",onClick:function(){return e.push("/")},children:"Home"}),(0,r.jsx)(l.zx,{variant:"ghost",onClick:function(){return e.push("/Blog")},children:"Blog"}),(0,r.jsx)(l.zx,{variant:"ghost",onClick:function(){return e.push("/Projects")},children:"Projects"})]}),(0,r.jsx)(a.LZ,{}),n?(0,r.jsxs)(s.J2,{children:[(0,r.jsx)(s.xo,{children:(0,r.jsxs)(l.zx,{children:[(0,r.jsx)(a.Eq,{children:(0,r.jsx)(a.Uc,{children:(0,r.jsx)(c.qE,{size:"sm",src:n.picture})})}),n.name]})}),(0,r.jsx)(u.h_,{children:(0,r.jsxs)(s.yk,{children:[(0,r.jsx)(s.QH,{}),(0,r.jsx)(s.Yt,{children:"Account Options"}),(0,r.jsx)(s.us,{}),(0,r.jsx)(s.b,{children:(0,r.jsx)("a",{href:"/logout",children:(0,r.jsx)(l.zx,{colorScheme:"red",size:"md",children:"Sign-out"})})})]})})]}):(0,r.jsxs)(s.J2,{children:[(0,r.jsx)(s.xo,{children:(0,r.jsx)(l.zx,{colorScheme:"green",size:"md",children:"Sign-in"})}),(0,r.jsx)(u.h_,{children:(0,r.jsxs)(s.yk,{children:[(0,r.jsx)(s.QH,{}),(0,r.jsx)(s.Yt,{children:"Sign-in Options"}),(0,r.jsx)(s.us,{}),(0,r.jsx)(s.b,{children:(0,r.jsx)("a",{href:"/login",children:(0,r.jsxs)(l.zx,{colorScheme:"gray",color:"black",size:"md",children:[(0,r.jsx)(d.JM8,{})," Sign-in with Google"]})})})]})})]})]}),(0,r.jsx)(a.iz,{})]})}},1459:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var r=n(5893),i=n(8641),o=n(9008),a=n.n(o),l=n(5675),s=n.n(l),c={src:"/_next/static/media/flask.dc366ac9.png",height:256,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAQAAAAZxLZ7AAAAOElEQVR42lXDIQrAIAAAwDMOLGPra4vDNLMIvsAH+P9XaPXgOF02wy+qHockkow1K5ruhU9zIyBMeXcD8Od62YUAAAAASUVORK5CYII="},u={src:"/_next/static/media/react.b84becef.png",height:665,width:1200,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAEBAMAAABB42PDAAAAMFBMVEX////9/v76/f70+/7y+/7v+v7s+f7q+f7o+P7n+P7m9/7j9/7a9P7Z9P6/7f2+7f0TiH4dAAAAHElEQVR42mNgEmBgYMg/3hLMkHd11xQGJgEGBgAulATDBp+YUAAAAABJRU5ErkJggg=="},d={src:"/_next/static/media/chakra.363aceb3.png",height:320,width:400,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAP1BMVEX////+/v79/v76/P3y+Prz9vbu7e7s7e3r6+zd8O7j7e3p6uvm5+jd3uDA5uLZ2tvU1tfW1Nax397LzM550M8STVzjAAAAKklEQVR42mNgYGAEAwZmFgYIEBLhEhQQ5udl4ORjZePmYedggAMmJohiABjpAOBmnn2dAAAAAElFTkSuQmCC"},f={src:"/_next/static/media/heroku.0185984e.png",height:500,width:900,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAM1BMVEX////8/P38/Pz7+/zt7PLr6fHq6fDo5u7n5u7n5e7m5O3l4+zk4uvj4evf3eje3Ojb2ebY/wdWAAAAIklEQVR42mNgZGaAAAF+Fi4udg5WBl4+Nh5uLm5OBiaoFAAMNgCrtY4RPgAAAABJRU5ErkJggg=="},h=n(3377),g="Flask",m="Backend Flask with SQLAlchemy ORM.",p="React",A="React Frontend using the NextJS Framework.",b="Chakra UI",x="Styling solution for React.",y="Heroku",v="Website deployment and hosting.",j=function(){return(0,r.jsxs)("div",{children:[(0,r.jsxs)(a(),{children:[(0,r.jsx)("title",{children:"Home - Augustine Li"}),(0,r.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,r.jsx)(h.default,{}),(0,r.jsx)(i.M5,{children:(0,r.jsxs)(i.xu,{maxW:"48rem",children:[(0,r.jsx)(i.M5,{children:(0,r.jsx)(i.X6,{as:"h3",mb:3,children:"Augustine Li"})}),(0,r.jsx)(i.M5,{children:(0,r.jsx)(i.xv,{fontSize:"xl",mb:6,children:"Welcome to my website!"})}),(0,r.jsx)(i.M5,{children:(0,r.jsx)(i.X6,{as:"h5",mb:3,children:"Website Technologies"})}),(0,r.jsxs)(i.rj,{templateColumns:"repeat(2, 1fr)",gap:6,children:[(0,r.jsxs)(i.xu,{maxW:"sm",borderWidth:"1px",borderRadius:"lg",overflow:"hidden",children:[(0,r.jsx)(i.M5,{children:(0,r.jsx)(i.xu,{w:"sm",h:"200px",children:(0,r.jsx)(s(),{src:c,alt:"Flask"})})}),(0,r.jsxs)(i.xu,{p:"6",children:[(0,r.jsx)(i.xu,{mt:"1",fontWeight:"semibold",as:"h4",lineHeight:"tight",noOfLines:1,children:g}),(0,r.jsx)(i.xu,{children:m})]})]}),(0,r.jsxs)(i.xu,{maxW:"sm",borderWidth:"1px",borderRadius:"lg",overflow:"hidden",children:[(0,r.jsx)(i.M5,{children:(0,r.jsx)(i.xu,{w:"sm",h:"200px",children:(0,r.jsx)(s(),{src:u,alt:"React"})})}),(0,r.jsxs)(i.xu,{p:"6",children:[(0,r.jsx)(i.xu,{mt:"1",fontWeight:"semibold",as:"h4",lineHeight:"tight",noOfLines:1,children:p}),(0,r.jsx)(i.xu,{children:A})]})]}),(0,r.jsxs)(i.xu,{maxW:"sm",borderWidth:"1px",borderRadius:"lg",overflow:"hidden",children:[(0,r.jsx)(i.M5,{children:(0,r.jsx)(i.xu,{w:"sm",h:"200px",children:(0,r.jsx)(s(),{src:d,alt:"Chakra UI",height:250})})}),(0,r.jsxs)(i.xu,{p:"6",children:[(0,r.jsx)(i.xu,{mt:"1",fontWeight:"semibold",as:"h4",lineHeight:"tight",noOfLines:1,children:b}),(0,r.jsx)(i.xu,{children:x})]})]}),(0,r.jsxs)(i.xu,{maxW:"sm",borderWidth:"1px",borderRadius:"lg",overflow:"hidden",children:[(0,r.jsx)(i.M5,{children:(0,r.jsx)(i.xu,{w:"sm",h:"200px",children:(0,r.jsx)(s(),{src:f,alt:"Heroku"})})}),(0,r.jsxs)(i.xu,{p:"6",children:[(0,r.jsx)(i.xu,{mt:"1",fontWeight:"semibold",as:"h4",lineHeight:"tight",noOfLines:1,children:y}),(0,r.jsx)(i.xu,{children:v})]})]})]})]})})]})}},9008:function(e,t,n){e.exports=n(3121)},5675:function(e,t,n){e.exports=n(9749)}},function(e){e.O(0,[994,155,69,774,888,179],(function(){return t=5557,e(e.s=t);var t}));var t=e.O();_N_E=t}]);