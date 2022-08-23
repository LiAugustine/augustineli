(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[388],{3234:function(e,n,t){"use strict";t.d(n,{NI:function(){return h},Yp:function(){return v},lX:function(){return E}});var o=t(7294),r=t(9653),i=t(187),a=t(5038),s=t(4520),l=t(2446),u=t(2494),[c,d]=(0,i.kr)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),[p,f]=(0,i.kr)({strict:!1,name:"FormControlContext"});var h=(0,a.Gp)((function(e,n){const t=(0,a.jC)("Form",e),u=(0,s.Lr)(e),{getRootProps:d,htmlProps:f,...h}=function(e){const{id:n,isRequired:t,isInvalid:a,isDisabled:s,isReadOnly:u,...c}=e,d=(0,r.Me)(),p=n||`field-${d}`,f=`${p}-label`,h=`${p}-feedback`,m=`${p}-helptext`,[v,y]=(0,o.useState)(!1),[g,b]=(0,o.useState)(!1),[C,E]=(0,r.kt)(),k=(0,o.useCallback)(((e={},n=null)=>({id:m,...e,ref:(0,i.lq)(n,(e=>{e&&b(!0)}))})),[m]),I=(0,o.useCallback)(((e={},n=null)=>({...e,ref:n,"data-focus":(0,l.PB)(C),"data-disabled":(0,l.PB)(s),"data-invalid":(0,l.PB)(a),"data-readonly":(0,l.PB)(u),id:e.id??f,htmlFor:e.htmlFor??p})),[p,s,C,a,u,f]),_=(0,o.useCallback)(((e={},n=null)=>({id:h,...e,ref:(0,i.lq)(n,(e=>{e&&y(!0)})),"aria-live":"polite"})),[h]),S=(0,o.useCallback)(((e={},n=null)=>({...e,...c,ref:n,role:"group"})),[c]),T=(0,o.useCallback)(((e={},n=null)=>({...e,ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"})),[]);return{isRequired:!!t,isInvalid:!!a,isReadOnly:!!u,isDisabled:!!s,isFocused:!!C,onFocus:E.on,onBlur:E.off,hasFeedbackText:v,setHasFeedbackText:y,hasHelpText:g,setHasHelpText:b,id:p,labelId:f,feedbackId:h,helpTextId:m,htmlProps:c,getHelpTextProps:k,getErrorMessageProps:_,getRootProps:S,getLabelProps:I,getRequiredIndicatorProps:T}}(u),m=(0,l.cx)("chakra-form-control",e.className);return o.createElement(p,{value:h},o.createElement(c,{value:t},o.createElement(a.m$.div,{...d({},n),className:m,__css:t.container})))}));l.Ts&&(h.displayName="FormControl");var m=(0,a.Gp)((function(e,n){const t=f(),r=d(),i=(0,l.cx)("chakra-form__helper-text",e.className);return o.createElement(a.m$.div,{...null==t?void 0:t.getHelpTextProps(e,n),__css:r.helperText,className:i})}));function v(e){const{isDisabled:n,isInvalid:t,isReadOnly:o,isRequired:r,...i}=function(e){const n=f(),{id:t,disabled:o,readOnly:r,required:i,isRequired:a,isInvalid:s,isReadOnly:u,isDisabled:c,onFocus:d,onBlur:p,...h}=e,m=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==n?void 0:n.hasFeedbackText)&&(null==n?void 0:n.isInvalid)&&m.push(n.feedbackId);(null==n?void 0:n.hasHelpText)&&m.push(n.helpTextId);return{...h,"aria-describedby":m.join(" ")||void 0,id:t??(null==n?void 0:n.id),isDisabled:o??c??(null==n?void 0:n.isDisabled),isReadOnly:r??u??(null==n?void 0:n.isReadOnly),isRequired:i??a??(null==n?void 0:n.isRequired),isInvalid:s??(null==n?void 0:n.isInvalid),onFocus:(0,l.v0)(null==n?void 0:n.onFocus,d),onBlur:(0,l.v0)(null==n?void 0:n.onBlur,p)}}(e);return{...i,disabled:n,readOnly:o,required:r,"aria-invalid":(0,l.Qm)(t),"aria-required":(0,l.Qm)(r),"aria-readonly":(0,l.Qm)(o)}}l.Ts&&(m.displayName="FormHelperText");var[y,g]=(0,i.kr)({name:"FormErrorStylesContext",errorMessage:"useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormError />\" "}),b=(0,a.Gp)(((e,n)=>{const t=(0,a.jC)("FormError",e),r=(0,s.Lr)(e),i=f();return(null==i?void 0:i.isInvalid)?o.createElement(y,{value:t},o.createElement(a.m$.div,{...null==i?void 0:i.getErrorMessageProps(r,n),className:(0,l.cx)("chakra-form__error-message",e.className),__css:{display:"flex",alignItems:"center",...t.text}})):null}));l.Ts&&(b.displayName="FormErrorMessage");var C=(0,a.Gp)(((e,n)=>{const t=g(),r=f();if(!(null==r?void 0:r.isInvalid))return null;const i=(0,l.cx)("chakra-form__error-icon",e.className);return o.createElement(u.ZP,{ref:n,"aria-hidden":!0,...e,__css:t.icon,className:i},o.createElement("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"}))}));l.Ts&&(C.displayName="FormErrorIcon");var E=(0,a.Gp)((function(e,n){const t=(0,a.mq)("FormLabel",e),r=(0,s.Lr)(e),{className:i,children:u,requiredIndicator:c=o.createElement(k,null),optionalIndicator:d=null,...p}=r,h=f(),m=(null==h?void 0:h.getLabelProps(p,n))??{ref:n,...p};return o.createElement(a.m$.label,{...m,className:(0,l.cx)("chakra-form__label",r.className),__css:{display:"block",textAlign:"start",...t}},u,(null==h?void 0:h.isRequired)?c:d)}));l.Ts&&(E.displayName="FormLabel");var k=(0,a.Gp)((function(e,n){const t=f(),r=d();if(!(null==t?void 0:t.isRequired))return null;const i=(0,l.cx)("chakra-form__required-indicator",e.className);return o.createElement(a.m$.span,{...null==t?void 0:t.getRequiredIndicatorProps(e,n),__css:r.requiredIndicator,className:i})}));l.Ts&&(k.displayName="RequiredIndicator")},979:function(e,n,t){"use strict";t.d(n,{II:function(){return u}});var o=t(7294),r=t(3234),i=t(5038),a=t(4520),s=t(2446),l=t(187),u=(0,i.Gp)((function(e,n){const{htmlSize:t,...l}=e,u=(0,i.jC)("Input",l),c=(0,a.Lr)(l),d=(0,r.Yp)(c),p=(0,s.cx)("chakra-input",e.className);return o.createElement(i.m$.input,{size:t,...d,__css:u.field,ref:n,className:p})}));s.Ts&&(u.displayName="Input"),u.id="Input";var[c,d]=(0,l.kr)({name:"InputGroupStylesContext",errorMessage:"useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<InputGroup />\" "}),p=(0,i.Gp)((function(e,n){const t=(0,i.jC)("Input",e),{children:r,className:u,...d}=(0,a.Lr)(e),p=(0,s.cx)("chakra-input__group",u),f={},h=(0,l.WR)(r),m=t.field;h.forEach((e=>{t&&(m&&"InputLeftElement"===e.type.id&&(f.paddingStart=m.height??m.h),m&&"InputRightElement"===e.type.id&&(f.paddingEnd=m.height??m.h),"InputRightAddon"===e.type.id&&(f.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(f.borderStartRadius=0))}));const v=h.map((n=>{var t,r;const i=(0,s.YU)({size:(null==(t=n.props)?void 0:t.size)||e.size,variant:(null==(r=n.props)?void 0:r.variant)||e.variant});return"Input"!==n.type.id?(0,o.cloneElement)(n,i):(0,o.cloneElement)(n,Object.assign(i,f,n.props))}));return o.createElement(i.m$.div,{className:p,ref:n,__css:{width:"100%",display:"flex",position:"relative"},...d},o.createElement(c,{value:t},v))}));s.Ts&&(p.displayName="InputGroup");var f={left:{marginEnd:"-1px",borderEndRadius:0,borderEndColor:"transparent"},right:{marginStart:"-1px",borderStartRadius:0,borderStartColor:"transparent"}},h=(0,i.m$)("div",{baseStyle:{flex:"0 0 auto",width:"auto",display:"flex",alignItems:"center",whiteSpace:"nowrap"}}),m=(0,i.Gp)((function(e,n){const{placement:t="left",...r}=e,i=f[t]??{},a=d();return o.createElement(h,{ref:n,...r,__css:{...a.addon,...i}})}));s.Ts&&(m.displayName="InputAddon");var v=(0,i.Gp)((function(e,n){return o.createElement(m,{ref:n,placement:"left",...e,className:(0,s.cx)("chakra-input__left-addon",e.className)})}));s.Ts&&(v.displayName="InputLeftAddon"),v.id="InputLeftAddon";var y=(0,i.Gp)((function(e,n){return o.createElement(m,{ref:n,placement:"right",...e,className:(0,s.cx)("chakra-input__right-addon",e.className)})}));s.Ts&&(y.displayName="InputRightAddon"),y.id="InputRightAddon";var g=(0,i.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),b=(0,i.Gp)((function(e,n){const{placement:t="left",...r}=e,i=d(),a=i.field,s={["left"===t?"insetStart":"insetEnd"]:"0",width:(null==a?void 0:a.height)??(null==a?void 0:a.h),height:(null==a?void 0:a.height)??(null==a?void 0:a.h),fontSize:null==a?void 0:a.fontSize,...i.element};return o.createElement(g,{ref:n,__css:s,...r})}));b.id="InputElement",s.Ts&&(b.displayName="InputElement");var C=(0,i.Gp)((function(e,n){const{className:t,...r}=e,i=(0,s.cx)("chakra-input__left-element",t);return o.createElement(b,{ref:n,placement:"left",className:i,...r})}));C.id="InputLeftElement",s.Ts&&(C.displayName="InputLeftElement");var E=(0,i.Gp)((function(e,n){const{className:t,...r}=e,i=(0,s.cx)("chakra-input__right-element",t);return o.createElement(b,{ref:n,placement:"right",className:i,...r})}));E.id="InputRightElement",s.Ts&&(E.displayName="InputRightElement")},6235:function(e,n,t){"use strict";t.d(n,{M:function(){return k}});var o=t(7294),r=t(5697),i=function(){return i=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},i.apply(this,arguments)},a={onActivate:r.func,onAddUndo:r.func,onBeforeAddUndo:r.func,onBeforeExecCommand:r.func,onBeforeGetContent:r.func,onBeforeRenderUI:r.func,onBeforeSetContent:r.func,onBeforePaste:r.func,onBlur:r.func,onChange:r.func,onClearUndos:r.func,onClick:r.func,onContextMenu:r.func,onCommentChange:r.func,onCopy:r.func,onCut:r.func,onDblclick:r.func,onDeactivate:r.func,onDirty:r.func,onDrag:r.func,onDragDrop:r.func,onDragEnd:r.func,onDragGesture:r.func,onDragOver:r.func,onDrop:r.func,onExecCommand:r.func,onFocus:r.func,onFocusIn:r.func,onFocusOut:r.func,onGetContent:r.func,onHide:r.func,onInit:r.func,onKeyDown:r.func,onKeyPress:r.func,onKeyUp:r.func,onLoadContent:r.func,onMouseDown:r.func,onMouseEnter:r.func,onMouseLeave:r.func,onMouseMove:r.func,onMouseOut:r.func,onMouseOver:r.func,onMouseUp:r.func,onNodeChange:r.func,onObjectResizeStart:r.func,onObjectResized:r.func,onObjectSelected:r.func,onPaste:r.func,onPostProcess:r.func,onPostRender:r.func,onPreProcess:r.func,onProgressState:r.func,onRedo:r.func,onRemove:r.func,onReset:r.func,onSaveContent:r.func,onSelectionChange:r.func,onSetAttrib:r.func,onSetContent:r.func,onShow:r.func,onSubmit:r.func,onUndo:r.func,onVisualAid:r.func,onSkinLoadError:r.func,onThemeLoadError:r.func,onModelLoadError:r.func,onPluginLoadError:r.func,onIconsLoadError:r.func,onLanguageLoadError:r.func},s=i({apiKey:r.string,id:r.string,inline:r.bool,init:r.object,initialValue:r.string,onEditorChange:r.func,value:r.string,tagName:r.string,cloudChannel:r.string,plugins:r.oneOfType([r.string,r.array]),toolbar:r.oneOfType([r.string,r.array]),disabled:r.bool,textareaName:r.string,tinymceScriptSrc:r.string,rollback:r.oneOfType([r.number,r.oneOf([!1])]),scriptLoading:r.shape({async:r.bool,defer:r.bool,delay:r.number})},a),l=function(e){return"function"===typeof e},u=function(e){return e in a},c=function(e){return e.substr(2)},d=function(e,n,t,o,r){return function(e,n,t,o,r,i,a){var s=Object.keys(r).filter(u),l=Object.keys(i).filter(u),d=s.filter((function(e){return void 0===i[e]})),p=l.filter((function(e){return void 0===r[e]}));d.forEach((function(e){var n=c(e),o=a[n];t(n,o),delete a[n]})),p.forEach((function(t){var r=o(e,t),i=c(t);a[i]=r,n(i,r)}))}(r,e.on.bind(e),e.off.bind(e),(function(n,t){return function(o){var r;return null===(r=n(t))||void 0===r?void 0:r(o,e)}}),n,t,o)},p=0,f=function(e){var n=Date.now();return e+"_"+Math.floor(1e9*Math.random())+ ++p+String(n)},h=function(e){return null!==e&&("textarea"===e.tagName.toLowerCase()||"input"===e.tagName.toLowerCase())},m=function(e){return"undefined"===typeof e||""===e?[]:Array.isArray(e)?e:e.split(" ")},v=function(e,n){void 0!==e&&(null!=e.mode&&"object"===typeof e.mode&&"function"===typeof e.mode.set?e.mode.set(n):e.setMode(n))},y=function(){return{listeners:[],scriptId:f("tiny-script"),scriptLoading:!1,scriptLoaded:!1}},g=function(){var e=y();return{load:function(n,t,o,r,i,a){var s=function(){return function(e,n,t,o,r,i){var a=n.createElement("script");a.referrerPolicy="origin",a.type="application/javascript",a.id=e,a.src=t,a.async=o,a.defer=r;var s=function(){a.removeEventListener("load",s),i()};a.addEventListener("load",s),n.head&&n.head.appendChild(a)}(e.scriptId,n,t,o,r,(function(){e.listeners.forEach((function(e){return e()})),e.scriptLoaded=!0}))};e.scriptLoaded?a():(e.listeners.push(a),e.scriptLoading||(e.scriptLoading=!0,i>0?setTimeout(s,i):s()))},reinitialize:function(){e=y()}}}(),b=function(e){var n=e;return n&&n.tinymce?n.tinymce:null},C=function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},e(n,t)};return function(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function o(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}}(),E=function(){return E=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},E.apply(this,arguments)},k=function(e){function n(n){var t,r,i,a=this;return(a=e.call(this,n)||this).rollbackTimer=void 0,a.valueCursor=void 0,a.rollbackChange=function(){var e=a.editor,n=a.props.value;e&&n&&n!==a.currentContent&&e.undoManager.ignore((function(){if(e.setContent(n),a.valueCursor&&(!a.inline||e.hasFocus()))try{e.selection.moveToBookmark(a.valueCursor)}catch(t){}})),a.rollbackTimer=void 0},a.handleBeforeInput=function(e){if(void 0!==a.props.value&&a.props.value===a.currentContent&&a.editor&&(!a.inline||a.editor.hasFocus()))try{a.valueCursor=a.editor.selection.getBookmark(3)}catch(n){}},a.handleBeforeInputSpecial=function(e){"Enter"!==e.key&&"Backspace"!==e.key&&"Delete"!==e.key||a.handleBeforeInput(e)},a.handleEditorChange=function(e){var n=a.editor;if(n&&n.initialized){var t=n.getContent();void 0!==a.props.value&&a.props.value!==t&&!1!==a.props.rollback&&(a.rollbackTimer||(a.rollbackTimer=window.setTimeout(a.rollbackChange,"number"===typeof a.props.rollback?a.props.rollback:200))),t!==a.currentContent&&(a.currentContent=t,l(a.props.onEditorChange)&&a.props.onEditorChange(t,n))}},a.handleEditorChangeSpecial=function(e){"Backspace"!==e.key&&"Delete"!==e.key||a.handleEditorChange(e)},a.initialise=function(e){var n,t,o;void 0===e&&(e=0);var r=a.elementRef.current;if(r)if(function(e){if(!("isConnected"in Node.prototype)){for(var n=e,t=e.parentNode;null!=t;)t=(n=t).parentNode;return n===e.ownerDocument}return e.isConnected}(r)){var i=b(a.view);if(!i)throw new Error("tinymce should have been loaded into global scope");var s,u,c=E(E({},a.props.init),{selector:void 0,target:r,readonly:a.props.disabled,inline:a.inline,plugins:(s=null===(n=a.props.init)||void 0===n?void 0:n.plugins,u=a.props.plugins,m(s).concat(m(u))),toolbar:null!==(t=a.props.toolbar)&&void 0!==t?t:null===(o=a.props.init)||void 0===o?void 0:o.toolbar,setup:function(e){a.editor=e,a.bindHandlers({}),a.inline&&!h(r)&&e.once("PostRender",(function(n){e.setContent(a.getInitialValue(),{no_events:!0})})),a.props.init&&l(a.props.init.setup)&&a.props.init.setup(e)},init_instance_callback:function(e){var n,t,o=a.getInitialValue();a.currentContent=null!==(n=a.currentContent)&&void 0!==n?n:e.getContent(),a.currentContent!==o&&(a.currentContent=o,e.setContent(o),e.undoManager.clear(),e.undoManager.add(),e.setDirty(!1));var r=null!==(t=a.props.disabled)&&void 0!==t&&t;v(a.editor,r?"readonly":"design"),a.props.init&&l(a.props.init.init_instance_callback)&&a.props.init.init_instance_callback(e)}});a.inline||(r.style.visibility=""),h(r)&&(r.value=a.getInitialValue()),i.init(c)}else if(0===e)setTimeout((function(){return a.initialise(1)}),1);else{if(!(e<100))throw new Error("tinymce can only be initialised when in a document");setTimeout((function(){return a.initialise(e+1)}),100)}},a.id=a.props.id||f("tiny-react"),a.elementRef=o.createRef(),a.inline=null!==(i=null!==(t=a.props.inline)&&void 0!==t?t:null===(r=a.props.init)||void 0===r?void 0:r.inline)&&void 0!==i&&i,a.boundHandlers={},a}return C(n,e),Object.defineProperty(n.prototype,"view",{get:function(){var e,n;return null!==(n=null===(e=this.elementRef.current)||void 0===e?void 0:e.ownerDocument.defaultView)&&void 0!==n?n:window},enumerable:!1,configurable:!0}),n.prototype.componentDidUpdate=function(e){var n,t,o=this;if(this.rollbackTimer&&(clearTimeout(this.rollbackTimer),this.rollbackTimer=void 0),this.editor&&(this.bindHandlers(e),this.editor.initialized)){if(this.currentContent=null!==(n=this.currentContent)&&void 0!==n?n:this.editor.getContent(),"string"===typeof this.props.initialValue&&this.props.initialValue!==e.initialValue)this.editor.setContent(this.props.initialValue),this.editor.undoManager.clear(),this.editor.undoManager.add(),this.editor.setDirty(!1);else if("string"===typeof this.props.value&&this.props.value!==this.currentContent){var r=this.editor;r.undoManager.transact((function(){var e;if(!o.inline||r.hasFocus())try{e=r.selection.getBookmark(3)}catch(s){}var n=o.valueCursor;if(r.setContent(o.props.value),!o.inline||r.hasFocus())for(var t=0,i=[e,n];t<i.length;t++){var a=i[t];if(a)try{r.selection.moveToBookmark(a),o.valueCursor=a;break}catch(s){}}}))}if(this.props.disabled!==e.disabled){var i=null!==(t=this.props.disabled)&&void 0!==t&&t;v(this.editor,i?"readonly":"design")}}},n.prototype.componentDidMount=function(){var e,n,t,o,r,i;null!==b(this.view)?this.initialise():this.elementRef.current&&this.elementRef.current.ownerDocument&&g.load(this.elementRef.current.ownerDocument,this.getScriptSrc(),null!==(n=null===(e=this.props.scriptLoading)||void 0===e?void 0:e.async)&&void 0!==n&&n,null!==(o=null===(t=this.props.scriptLoading)||void 0===t?void 0:t.defer)&&void 0!==o&&o,null!==(i=null===(r=this.props.scriptLoading)||void 0===r?void 0:r.delay)&&void 0!==i?i:0,this.initialise)},n.prototype.componentWillUnmount=function(){var e=this,n=this.editor;n&&(n.off(this.changeEvents(),this.handleEditorChange),n.off(this.beforeInputEvent(),this.handleBeforeInput),n.off("keypress",this.handleEditorChangeSpecial),n.off("keydown",this.handleBeforeInputSpecial),n.off("NewBlock",this.handleEditorChange),Object.keys(this.boundHandlers).forEach((function(t){n.off(t,e.boundHandlers[t])})),this.boundHandlers={},n.remove(),this.editor=void 0)},n.prototype.render=function(){return this.inline?this.renderInline():this.renderIframe()},n.prototype.changeEvents=function(){var e,n,t;return(null===(t=null===(n=null===(e=b(this.view))||void 0===e?void 0:e.Env)||void 0===n?void 0:n.browser)||void 0===t?void 0:t.isIE())?"change keyup compositionend setcontent CommentChange":"change input compositionend setcontent CommentChange"},n.prototype.beforeInputEvent=function(){return window.InputEvent&&"function"===typeof InputEvent.prototype.getTargetRanges?"beforeinput SelectionChange":"SelectionChange"},n.prototype.renderInline=function(){var e=this.props.tagName,n=void 0===e?"div":e;return o.createElement(n,{ref:this.elementRef,id:this.id})},n.prototype.renderIframe=function(){return o.createElement("textarea",{ref:this.elementRef,style:{visibility:"hidden"},name:this.props.textareaName,id:this.id})},n.prototype.getScriptSrc=function(){if("string"===typeof this.props.tinymceScriptSrc)return this.props.tinymceScriptSrc;var e=this.props.cloudChannel,n=this.props.apiKey?this.props.apiKey:"no-api-key";return"https://cdn.tiny.cloud/1/".concat(n,"/tinymce/").concat(e,"/tinymce.min.js")},n.prototype.getInitialValue=function(){return"string"===typeof this.props.initialValue?this.props.initialValue:"string"===typeof this.props.value?this.props.value:""},n.prototype.bindHandlers=function(e){var n=this;if(void 0!==this.editor){d(this.editor,e,this.props,this.boundHandlers,(function(e){return n.props[e]}));var t=function(e){return void 0!==e.onEditorChange||void 0!==e.value},o=t(e),r=t(this.props);!o&&r?(this.editor.on(this.changeEvents(),this.handleEditorChange),this.editor.on(this.beforeInputEvent(),this.handleBeforeInput),this.editor.on("keydown",this.handleBeforeInputSpecial),this.editor.on("keyup",this.handleEditorChangeSpecial),this.editor.on("NewBlock",this.handleEditorChange)):o&&!r&&(this.editor.off(this.changeEvents(),this.handleEditorChange),this.editor.off(this.beforeInputEvent(),this.handleBeforeInput),this.editor.off("keydown",this.handleBeforeInputSpecial),this.editor.off("keyup",this.handleEditorChangeSpecial),this.editor.off("NewBlock",this.handleEditorChange))}},n.propTypes=s,n.defaultProps={cloudChannel:"6"},n}(o.Component)},2703:function(e,n,t){"use strict";var o=t(414);function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,n,t,r,i,a){if(a!==o){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:i,resetWarningCache:r};return t.PropTypes=t,t}},5697:function(e,n,t){e.exports=t(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);