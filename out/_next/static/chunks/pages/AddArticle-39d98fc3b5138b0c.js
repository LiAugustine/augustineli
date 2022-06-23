(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[719],{2970:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/AddArticle",function(){return n(4211)}])},4211:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ie}});var r=n(5893),a=n(7294),i=n(6235),l=n(7375),s=n(2846),o=n(5031),u=n(6450),d=n(894);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}var m=["id","isRequired","isInvalid","isDisabled","isReadOnly"],h=["getRootProps","htmlProps"],f=(0,s.eC)("FormControl"),v=f[0],b=f[1],g=b,y=(0,u.kr)({strict:!1,name:"FormControlContext"}),x=y[0],_=y[1];var I=(0,s.Gp)((function(e,t){var n=(0,s.jC)("Form",e),r=function(e){var t=e.id,n=e.isRequired,r=e.isInvalid,i=e.isDisabled,s=e.isReadOnly,d=p(e,m),h=(0,l.Me)(),f=t||"field-"+h,v=f+"-label",b=f+"-feedback",g=f+"-helptext",y=a.useState(!1),x=y[0],_=y[1],I=a.useState(!1),N=I[0],E=I[1],j=(0,l.kt)(),R=j[0],k=j[1],C=a.useCallback((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),c({id:g},e,{ref:(0,u.lq)(t,(function(e){e&&E(!0)}))})}),[g]),T=a.useCallback((function(e,t){var n,a;return void 0===e&&(e={}),void 0===t&&(t=null),c({},e,{ref:t,"data-focus":(0,o.PB)(R),"data-disabled":(0,o.PB)(i),"data-invalid":(0,o.PB)(r),"data-readonly":(0,o.PB)(s),id:null!=(n=e.id)?n:v,htmlFor:null!=(a=e.htmlFor)?a:f})}),[f,i,R,r,s,v]),O=a.useCallback((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),c({id:b},e,{ref:(0,u.lq)(t,(function(e){e&&_(!0)})),"aria-live":"polite"})}),[b]),q=a.useCallback((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),c({},e,d,{ref:t,role:"group"})}),[d]),F=a.useCallback((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),c({},e,{ref:t,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!n,isInvalid:!!r,isReadOnly:!!s,isDisabled:!!i,isFocused:!!R,onFocus:k.on,onBlur:k.off,hasFeedbackText:x,setHasFeedbackText:_,hasHelpText:N,setHasHelpText:E,id:f,labelId:v,feedbackId:b,helpTextId:g,htmlProps:d,getHelpTextProps:C,getErrorMessageProps:O,getRootProps:q,getLabelProps:T,getRequiredIndicatorProps:F}}((0,s.Lr)(e)),i=r.getRootProps;r.htmlProps;var d=p(r,h),f=(0,o.cx)("chakra-form-control",e.className);return a.createElement(x,{value:d},a.createElement(v,{value:n},a.createElement(s.m$.div,c({},i({},t),{className:f,__css:n.container}))))}));o.Ts&&(I.displayName="FormControl");var N=(0,s.Gp)((function(e,t){var n=_(),r=b(),i=(0,o.cx)("chakra-form__helper-text",e.className);return a.createElement(s.m$.div,c({},null==n?void 0:n.getHelpTextProps(e,t),{__css:r.helperText,className:i}))}));o.Ts&&(N.displayName="FormHelperText");var E=["isDisabled","isInvalid","isReadOnly","isRequired"],j=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function R(e){var t=function(e){var t,n,r,a=_(),i=e.id,l=e.disabled,s=e.readOnly,u=e.required,d=e.isRequired,m=e.isInvalid,h=e.isReadOnly,f=e.isDisabled,v=e.onFocus,b=e.onBlur,g=p(e,j),y=e["aria-describedby"]?[e["aria-describedby"]]:[];null!=a&&a.hasFeedbackText&&null!=a&&a.isInvalid&&y.push(a.feedbackId);null!=a&&a.hasHelpText&&y.push(a.helpTextId);return c({},g,{"aria-describedby":y.join(" ")||void 0,id:null!=i?i:null==a?void 0:a.id,isDisabled:null!=(t=null!=l?l:f)?t:null==a?void 0:a.isDisabled,isReadOnly:null!=(n=null!=s?s:h)?n:null==a?void 0:a.isReadOnly,isRequired:null!=(r=null!=u?u:d)?r:null==a?void 0:a.isRequired,isInvalid:null!=m?m:null==a?void 0:a.isInvalid,onFocus:(0,o.v0)(null==a?void 0:a.onFocus,v),onBlur:(0,o.v0)(null==a?void 0:a.onBlur,b)})}(e),n=t.isDisabled,r=t.isInvalid,a=t.isReadOnly,i=t.isRequired;return c({},p(t,E),{disabled:n,readOnly:a,required:i,"aria-invalid":(0,o.Qm)(r),"aria-required":(0,o.Qm)(i),"aria-readonly":(0,o.Qm)(a)})}var k=(0,s.eC)("FormError"),C=k[0],T=k[1],O=(0,s.Gp)((function(e,t){var n=(0,s.jC)("FormError",e),r=(0,s.Lr)(e),i=_();return null!=i&&i.isInvalid?a.createElement(C,{value:n},a.createElement(s.m$.div,c({},null==i?void 0:i.getErrorMessageProps(r,t),{className:(0,o.cx)("chakra-form__error-message",e.className),__css:c({display:"flex",alignItems:"center"},n.text)}))):null}));o.Ts&&(O.displayName="FormErrorMessage");var q=(0,s.Gp)((function(e,t){var n=T(),r=_();if(null==r||!r.isInvalid)return null;var i=(0,o.cx)("chakra-form__error-icon",e.className);return a.createElement(d.ZP,c({ref:t,"aria-hidden":!0},e,{__css:n.icon,className:i}),a.createElement("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"}))}));o.Ts&&(q.displayName="FormErrorIcon");var F=["className","children","requiredIndicator","optionalIndicator"],P=(0,s.Gp)((function(e,t){var n,r=(0,s.mq)("FormLabel",e),i=(0,s.Lr)(e);i.className;var l=i.children,u=i.requiredIndicator,d=void 0===u?a.createElement(S,null):u,m=i.optionalIndicator,h=void 0===m?null:m,f=p(i,F),v=_(),b=null!=(n=null==v?void 0:v.getLabelProps(f,t))?n:c({ref:t},f);return a.createElement(s.m$.label,c({},b,{className:(0,o.cx)("chakra-form__label",i.className),__css:c({display:"block",textAlign:"start"},r)}),l,null!=v&&v.isRequired?d:h)}));o.Ts&&(P.displayName="FormLabel");var S=(0,s.Gp)((function(e,t){var n=_(),r=g();if(null==n||!n.isRequired)return null;var i=(0,o.cx)("chakra-form__required-indicator",e.className);return a.createElement(s.m$.span,c({},null==n?void 0:n.getRequiredIndicatorProps(e,t),{__css:r.requiredIndicator,className:i}))}));function A(){return A=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},A.apply(this,arguments)}function w(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}o.Ts&&(S.displayName="RequiredIndicator");var G=["htmlSize"],L=(0,s.Gp)((function(e,t){var n=e.htmlSize,r=w(e,G),i=(0,s.jC)("Input",r),l=R((0,s.Lr)(r)),u=(0,o.cx)("chakra-input",e.className);return a.createElement(s.m$.input,A({size:n},l,{__css:i.field,ref:t,className:u}))}));o.Ts&&(L.displayName="Input"),L.id="Input";var z=["children","className"],D=(0,s.eC)("InputGroup"),M=D[0],B=D[1],H=(0,s.Gp)((function(e,t){var n=(0,s.jC)("Input",e),r=(0,s.Lr)(e),i=r.children,l=r.className,d=w(r,z),c=(0,o.cx)("chakra-input__group",l),p={},m=(0,u.WR)(i),h=n.field;m.forEach((function(e){if(n){var t,r;if(h&&"InputLeftElement"===e.type.id)p.paddingStart=null!=(t=h.height)?t:h.h;if(h&&"InputRightElement"===e.type.id)p.paddingEnd=null!=(r=h.height)?r:h.h;"InputRightAddon"===e.type.id&&(p.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(p.borderStartRadius=0)}}));var f=m.map((function(t){var n,r,i=(0,o.YU)({size:(null==(n=t.props)?void 0:n.size)||e.size,variant:(null==(r=t.props)?void 0:r.variant)||e.variant});return"Input"!==t.type.id?a.cloneElement(t,i):a.cloneElement(t,Object.assign(i,p,t.props))}));return a.createElement(s.m$.div,A({className:c,ref:t,__css:{width:"100%",display:"flex",position:"relative"}},d),a.createElement(M,{value:n},f))}));o.Ts&&(H.displayName="InputGroup");var $=["placement"],J={left:{marginEnd:"-1px",borderEndRadius:0,borderEndColor:"transparent"},right:{marginStart:"-1px",borderStartRadius:0,borderStartColor:"transparent"}},Z=(0,s.m$)("div",{baseStyle:{flex:"0 0 auto",width:"auto",display:"flex",alignItems:"center",whiteSpace:"nowrap"}}),Q=(0,s.Gp)((function(e,t){var n,r=e.placement,i=void 0===r?"left":r,l=w(e,$),s=null!=(n=J[i])?n:{},o=B();return a.createElement(Z,A({ref:t},l,{__css:A({},o.addon,s)}))}));o.Ts&&(Q.displayName="InputAddon");var U=(0,s.Gp)((function(e,t){return a.createElement(Q,A({ref:t,placement:"left"},e,{className:(0,o.cx)("chakra-input__left-addon",e.className)}))}));o.Ts&&(U.displayName="InputLeftAddon"),U.id="InputLeftAddon";var X=(0,s.Gp)((function(e,t){return a.createElement(Q,A({ref:t,placement:"right"},e,{className:(0,o.cx)("chakra-input__right-addon",e.className)}))}));o.Ts&&(X.displayName="InputRightAddon"),X.id="InputRightAddon";var Y=["placement"],K=["className"],V=["className"],W=(0,s.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),ee=(0,s.Gp)((function(e,t){var n,r,i,l=e.placement,s=void 0===l?"left":l,o=w(e,Y),u=B(),d=u.field,c=A(((i={})["left"===s?"insetStart":"insetEnd"]="0",i.width=null!=(n=null==d?void 0:d.height)?n:null==d?void 0:d.h,i.height=null!=(r=null==d?void 0:d.height)?r:null==d?void 0:d.h,i.fontSize=null==d?void 0:d.fontSize,i),u.element);return a.createElement(W,A({ref:t,__css:c},o))}));ee.id="InputElement",o.Ts&&(ee.displayName="InputElement");var te=(0,s.Gp)((function(e,t){var n=e.className,r=w(e,K),i=(0,o.cx)("chakra-input__left-element",n);return a.createElement(ee,A({ref:t,placement:"left",className:i},r))}));te.id="InputLeftElement",o.Ts&&(te.displayName="InputLeftElement");var ne=(0,s.Gp)((function(e,t){var n=e.className,r=w(e,V),i=(0,o.cx)("chakra-input__right-element",n);return a.createElement(ee,A({ref:t,placement:"right",className:i},r))}));ne.id="InputRightElement",o.Ts&&(ne.displayName="InputRightElement");var re=n(8527),ae=n(5193),ie=function(){var e=(0,a.useState)("Computers"),t=e[0],n=e[1],l=(0,a.useState)(""),s=l[0],o=l[1],u=(0,a.useState)(""),d=u[0],c=u[1],p=(0,a.useState)(""),m=p[0],h=p[1],f=(0,a.useState)(""),v=f[0],b=f[1],g=(0,a.useState)(""),y=g[0],x=g[1],_=new Date,N=_.getMonth(),E="".concat(["January","February","March","April","May","June","July","August","September","October","November","December"][N]," ").concat(_.getDate(),", ").concat(_.getFullYear()),j=(0,a.useRef)(null);return console.log(y),(0,a.useEffect)((function(){fetch("/get_author",{method:"GET",headers:{content_type:"application/json"}}).then((function(e){return e.json()})).then((function(e){b(e)}))}),[]),(0,r.jsxs)("div",{className:"App",children:[(0,r.jsx)(re.X6,{children:"Add an Article"}),(0,r.jsx)("br",{}),(0,r.jsxs)(I,{isRequired:!0,children:[(0,r.jsx)(P,{htmlFor:"title",children:"Article Title"}),(0,r.jsx)(L,{id:"title",placeholder:"Title",onChange:function(e){return c(e.target.value)}})]}),(0,r.jsxs)(I,{isRequired:!0,children:[(0,r.jsx)(P,{htmlFor:"subtitle",children:"Article Subtitle"}),(0,r.jsx)(L,{id:"subtitle",placeholder:"Subtitle",onChange:function(e){return h(e.target.value)}})]}),(0,r.jsxs)(I,{isRequired:!0,children:[(0,r.jsx)(P,{htmlFor:"topic",children:"Topic"}),(0,r.jsxs)("select",{id:"topic",value:t,onChange:function(e){return n(e.target.value)},children:[(0,r.jsx)("option",{value:"Computers",children:"Computers"}),(0,r.jsx)("option",{value:"Cybersecurity",children:"Cybersecurity"}),(0,r.jsx)("option",{value:"Politics",children:"Politics"})]})]}),(0,r.jsxs)(I,{children:[(0,r.jsx)(P,{htmlFor:"image",children:"Optional Image URL"}),(0,r.jsx)(L,{id:"image",placeholder:"Image URL",onChange:function(e){return o(e.target.value)}})]}),(0,r.jsxs)("h4",{children:["By ",v,". ",E,"."]}),(0,r.jsx)(i.M,{onChange:function(){j.current&&(console.log(j.current.getContent()),x(j.current.getContent()))},apiKey:"avfw25fyyi2vofb3loe81zl8x8pmg0wrhhahcak2oy7nnjzw",onInit:function(e,t){return j.current=t},initialValue:"<p>This is the initial content of the editor.</p>",init:{height:500,menubar:!1,plugins:["advlist","autolink","lists","link","image","charmap","preview","anchor","searchreplace","visualblocks","code","fullscreen","insertdatetime","media","table","code","help","wordcount"],toolbar:"undo redo | blocks | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",content_style:"body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"}}),(0,r.jsx)("br",{}),(0,r.jsx)(ae.zx,{onClick:function(){fetch("/add_article",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({topic:t,image:s,title:d,subtitle:m,author:v,date:E,newArticle:y})}).then((function(e){return e.json()})).then((function(e){alert("You published the article "+e)}))},children:"Publish Article"}),(0,r.jsx)("br",{})]})}}},function(e){e.O(0,[527,858,774,888,179],(function(){return t=2970,e(e.s=t);var t}));var t=e.O();_N_E=t}]);