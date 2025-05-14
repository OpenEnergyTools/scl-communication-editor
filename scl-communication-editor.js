/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$3=globalThis,e$9=t$3.ShadowRoot&&(void 0===t$3.ShadyCSS||t$3.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$3=Symbol(),o$9=new WeakMap;class n$8{constructor(t,e,o){if(this._$cssResult$=!0,o!==s$3)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$9&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$9.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$9.set(s,t));}return t}toString(){return this.cssText}}const r$7=t=>new n$8("string"==typeof t?t:t+"",void 0,s$3),S$2=(s,o)=>{if(e$9)s.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of o){const o=document.createElement("style"),n=t$3.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$4=e$9?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$7(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:i$7,defineProperty:e$8,getOwnPropertyDescriptor:h$2,getOwnPropertyNames:r$6,getOwnPropertySymbols:o$8,getPrototypeOf:n$7}=Object,a$3=globalThis,c$3=a$3.trustedTypes,l$4=c$3?c$3.emptyScript:"",p$2=a$3.reactiveElementPolyfillSupport,d$2=(t,s)=>t,u$4={toAttribute(t,s){switch(s){case Boolean:t=t?l$4:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$3=(t,s)=>!i$7(t,s),b$2={attribute:!0,type:String,converter:u$4,reflect:!1,useDefault:!1,hasChanged:f$3};Symbol.metadata??=Symbol("metadata"),a$3.litPropertyMetadata??=new WeakMap;class y$2 extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=b$2){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),h=this.getPropertyDescriptor(t,i,s);void 0!==h&&e$8(this.prototype,t,h);}}static getPropertyDescriptor(t,s,i){const{get:e,set:r}=h$2(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get:e,set(s){const h=e?.call(this);r?.call(this,s),this.requestUpdate(t,h,i);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b$2}static _$Ei(){if(this.hasOwnProperty(d$2("elementProperties")))return;const t=n$7(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d$2("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(d$2("properties"))){const t=this.properties,s=[...r$6(t),...o$8(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$4(s));}else void 0!==s&&i.push(c$4(s));return i}static _$Eu(t,s){const i=s.attribute;return !1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev();}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)));}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$EO?.delete(t);}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$2(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()));}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()));}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$ET(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&!0===i.reflect){const h=(void 0!==i.converter?.toAttribute?i.converter:u$4).toAttribute(s,i.type);this._$Em=t,null==h?this.removeAttribute(e):this.setAttribute(e,h),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$4;this._$Em=e,this[e]=h.fromAttribute(s,t.type)??this._$Ej?.get(e)??null,this._$Em=null;}}requestUpdate(t,s,i){if(void 0!==t){const e=this.constructor,h=this[t];if(i??=e.getPropertyOptions(t),!((i.hasChanged??f$3)(h,s)||i.useDefault&&i.reflect&&h===this._$Ej?.get(t)&&!this.hasAttribute(e._$Eu(t,i))))return;this.C(t,s,i);}!1===this.isUpdatePending&&(this._$ES=this._$EP());}C(t,s,{useDefault:i,reflect:e,wrapped:h},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??s??this[t]),!0!==h||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(s=void 0),this._$AL.set(t,s)),!0===e&&this._$Em!==t&&(this._$Eq??=new Set).add(t));}async _$EP(){this.isUpdatePending=!0;try{await this._$ES;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t){const{wrapped:t}=i,e=this[s];!0!==t||this._$AL.has(s)||void 0===e||this.C(s,void 0,i,e);}}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(s)):this._$EM();}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$EM(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return !0}update(t){this._$Eq&&=this._$Eq.forEach((t=>this._$ET(t,this[t]))),this._$EM();}updated(t){}firstUpdated(t){}}y$2.elementStyles=[],y$2.shadowRootOptions={mode:"open"},y$2[d$2("elementProperties")]=new Map,y$2[d$2("finalized")]=new Map,p$2?.({ReactiveElement:y$2}),(a$3.reactiveElementVersions??=[]).push("2.1.0");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$2=globalThis,i$6=t$2.trustedTypes,s$2=i$6?i$6.createPolicy("lit-html",{createHTML:t=>t}):void 0,e$7="$lit$",h$1=`lit$${Math.random().toFixed(9).slice(2)}$`,o$7="?"+h$1,n$6=`<${o$7}>`,r$5=document,l$3=()=>r$5.createComment(""),c$2=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a$2=Array.isArray,u$3=t=>a$2(t)||"function"==typeof t?.[Symbol.iterator],d$1="[ \t\n\f\r]",f$2=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m$1=RegExp(`>|${d$1}(?:([^\\s"'>=/]+)(${d$1}*=${d$1}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p$1=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y$1=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y$1(1),b$1=y$1(2),T=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),A=new WeakMap,C=r$5.createTreeWalker(r$5,129);function P(t,i){if(!a$2(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s$2?s$2.createHTML(i):i}const V=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":3===i?"<math>":"",c=f$2;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f$2?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m$1):void 0!==u[3]&&(c=m$1):c===m$1?">"===u[0]?(c=r??f$2,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m$1:'"'===u[3]?g:p$1):c===g||c===p$1?c=m$1:c===v||c===_?c=f$2:(c=m$1,r=void 0);const x=c===m$1&&t[i+1].startsWith("/>")?" ":"";l+=c===f$2?s+n$6:d>=0?(o.push(a),s.slice(0,d)+e$7+s.slice(d)+h$1+x):s+h$1+(-2===d?i:x);}return [P(t,l+(t[s]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),o]};class N{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=V(t,s);if(this.el=N.createElement(f,n),C.currentNode=this.el.content,2===s||3===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=C.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e$7)){const i=v[a++],s=r.getAttribute(t).split(h$1),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?H:"?"===e[1]?I:"@"===e[1]?L:k}),r.removeAttribute(t);}else t.startsWith(h$1)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h$1),s=t.length-1;if(s>0){r.textContent=i$6?i$6.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l$3()),C.nextNode(),d.push({type:2,index:++c});r.append(t[s],l$3());}}}else if(8===r.nodeType)if(r.data===o$7)d.push({type:2,index:c});else {let t=-1;for(;-1!==(t=r.data.indexOf(h$1,t+1));)d.push({type:7,index:c}),t+=h$1.length-1;}c++;}}static createElement(t,i){const s=r$5.createElement("template");return s.innerHTML=t,s}}function S$1(t,i,s=t,e){if(i===T)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c$2(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=S$1(t,h._$AS(t,i.values),h,e)),i}class M{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r$5).importNode(i,!0);C.currentNode=e;let h=C.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new R(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new z(h,this,t)),this._$AV.push(i),l=s[++n];}o!==l?.index&&(h=C.nextNode(),o++);}return C.currentNode=r$5,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=S$1(this,t,i),c$2(t)?t===E||null==t||""===t?(this._$AH!==E&&this._$AR(),this._$AH=E):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):u$3(t)?this.k(t):this._(t);}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t));}_(t){this._$AH!==E&&c$2(this._$AH)?this._$AA.nextSibling.data=t:this.T(r$5.createTextNode(t)),this._$AH=t;}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=N.createElement(P(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new M(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t;}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new N(t)),i}k(t){a$2(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new R(this.O(l$3()),this.O(l$3()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=E,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=E;}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=S$1(this,t,i,0),o=!c$2(t)||t!==this._$AH&&t!==T,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=S$1(this,e[s+n],i,n),r===T&&(r=this._$AH[n]),o||=!c$2(r)||r!==this._$AH[n],r===E?t=E:t!==E&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.j(t);}j(t){t===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class H extends k{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===E?void 0:t;}}class I extends k{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==E);}}class L extends k{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=S$1(this,t,i,0)??E)===T)return;const s=this._$AH,e=t===E&&s!==E||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==E&&(s===E||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){S$1(this,t);}}const j=t$2.litHtmlPolyfillSupport;j?.(N,R),(t$2.litHtmlVersions??=[]).push("3.3.0");const B=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new R(i.insertBefore(l$3(),t),t,void 0,s??{});}return h._$AI(t),h};

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1=globalThis,e$6=t$1.ShadowRoot&&(void 0===t$1.ShadyCSS||t$1.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$1=Symbol(),o$6=new WeakMap;class n$5{constructor(t,e,o){if(this._$cssResult$=!0,o!==s$1)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$6&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$6.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$6.set(s,t));}return t}toString(){return this.cssText}}const r$4=t=>new n$5("string"==typeof t?t:t+"",void 0,s$1),i$5=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,s,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1]),t[0]);return new n$5(o,t,s$1)},S=(s,o)=>{if(e$6)s.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of o){const o=document.createElement("style"),n=t$1.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$1=e$6?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$4(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:i$4,defineProperty:e$5,getOwnPropertyDescriptor:h,getOwnPropertyNames:r$3,getOwnPropertySymbols:o$5,getPrototypeOf:n$4}=Object,a$1=globalThis,c=a$1.trustedTypes,l$2=c?c.emptyScript:"",p=a$1.reactiveElementPolyfillSupport,d=(t,s)=>t,u$2={toAttribute(t,s){switch(s){case Boolean:t=t?l$2:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$1=(t,s)=>!i$4(t,s),b={attribute:!0,type:String,converter:u$2,reflect:!1,useDefault:!1,hasChanged:f$1};Symbol.metadata??=Symbol("metadata"),a$1.litPropertyMetadata??=new WeakMap;class y extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=b){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),h=this.getPropertyDescriptor(t,i,s);void 0!==h&&e$5(this.prototype,t,h);}}static getPropertyDescriptor(t,s,i){const{get:e,set:r}=h(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get:e,set(s){const h=e?.call(this);r?.call(this,s),this.requestUpdate(t,h,i);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(d("elementProperties")))return;const t=n$4(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(d("properties"))){const t=this.properties,s=[...r$3(t),...o$5(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$1(s));}else void 0!==s&&i.push(c$1(s));return i}static _$Eu(t,s){const i=s.attribute;return !1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev();}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)));}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$EO?.delete(t);}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()));}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()));}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$ET(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&!0===i.reflect){const h=(void 0!==i.converter?.toAttribute?i.converter:u$2).toAttribute(s,i.type);this._$Em=t,null==h?this.removeAttribute(e):this.setAttribute(e,h),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$2;this._$Em=e,this[e]=h.fromAttribute(s,t.type)??this._$Ej?.get(e)??null,this._$Em=null;}}requestUpdate(t,s,i){if(void 0!==t){const e=this.constructor,h=this[t];if(i??=e.getPropertyOptions(t),!((i.hasChanged??f$1)(h,s)||i.useDefault&&i.reflect&&h===this._$Ej?.get(t)&&!this.hasAttribute(e._$Eu(t,i))))return;this.C(t,s,i);}!1===this.isUpdatePending&&(this._$ES=this._$EP());}C(t,s,{useDefault:i,reflect:e,wrapped:h},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??s??this[t]),!0!==h||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(s=void 0),this._$AL.set(t,s)),!0===e&&this._$Em!==t&&(this._$Eq??=new Set).add(t));}async _$EP(){this.isUpdatePending=!0;try{await this._$ES;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t){const{wrapped:t}=i,e=this[s];!0!==t||this._$AL.has(s)||void 0===e||this.C(s,void 0,i,e);}}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(s)):this._$EM();}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$EM(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return !0}update(t){this._$Eq&&=this._$Eq.forEach((t=>this._$ET(t,this[t]))),this._$EM();}updated(t){}firstUpdated(t){}}y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[d("elementProperties")]=new Map,y[d("finalized")]=new Map,p?.({ReactiveElement:y}),(a$1.reactiveElementVersions??=[]).push("2.1.0");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s=globalThis;class i$3 extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=B(r,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1);}render(){return T}}i$3._$litElement$=!0,i$3["finalized"]=!0,s.litElementHydrateSupport?.({LitElement:i$3});const o$4=s.litElementPolyfillSupport;o$4?.({LitElement:i$3});(s.litElementVersions??=[]).push("4.2.0");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o$3={attribute:!0,type:String,converter:u$4,reflect:!1,hasChanged:f$3},r$2=(t=o$3,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),"setter"===n&&((t=Object.create(t)).wrapped=!0),s.set(r.name,t),"accessor"===n){const{name:o}=r;return {set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t);},init(e){return void 0!==e&&this.C(o,void 0,t,e),e}}}if("setter"===n){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t);}}throw Error("Unsupported decorator location: "+n)};function n$3(t){return (e,o)=>"object"==typeof o?r$2(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,t),r?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function r$1(r){return n$3({...r,state:!0,attribute:!1})}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e$4=(e,t,c)=>(c.configurable=!0,c.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,c),c);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function e$3(e,r){return (n,s,i)=>{const o=t=>t.renderRoot?.querySelector(e)??null;if(r){const{get:e,set:r}="object"==typeof s?n:i??(()=>{const t=Symbol();return {get(){return this[t]},set(e){this[t]=e;}}})();return e$4(n,s,{get(){let t=e.call(this);return void 0===t&&(t=o(this),(null!==t||this.hasUpdated)&&r.call(this,t)),t}})}return e$4(n,s,{get(){return o(this)}})}}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let e$2;function r(r){return (n,o)=>e$4(n,o,{get(){return (this.renderRoot??(e$2??=document.createDocumentFragment())).querySelectorAll(r)}})}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function o$2(o){return (e,n)=>{const{slot:r,selector:s}=o??{},c="slot"+(r?`[name=${r}]`:":not([name])");return e$4(e,n,{get(){const t=this.renderRoot?.querySelector(c),e=t?.assignedElements(o)??[];return void 0===s?e:e.filter((t=>t.matches(s)))}})}}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function n$2(n){return (o,r)=>{const{slot:e}=n??{},s="slot"+(e?`[name=${e}]`:":not([name])");return e$4(o,r,{get(){const t=this.renderRoot?.querySelector(s);return t?.assignedNodes(n)??[]}})}}

const appliedClassMixins = new WeakMap();

/** Vefify if the Mixin was previously applyed
 * @private
 * @param {function} mixin      Mixin being applyed
 * @param {object} superClass   Class receiving the new mixin
 * @returns {boolean}
 */
function wasMixinPreviouslyApplied(mixin, superClass) {
  let klass = superClass;
  while (klass) {
    if (appliedClassMixins.get(klass) === mixin) {
      return true;
    }
    klass = Object.getPrototypeOf(klass);
  }
  return false;
}

/** Apply each mixin in the chain to make sure they are not applied more than once to the final class.
 * @export
 * @param {function} mixin      Mixin to be applyed
 * @returns {object}            Mixed class with mixin applied
 */
function dedupeMixin(mixin) {
  return superClass => {
    if (wasMixinPreviouslyApplied(mixin, superClass)) {
      return superClass;
    }
    const mixedClass = mixin(superClass);
    appliedClassMixins.set(mixedClass, mixin);
    return mixedClass;
  };
}

/**
 * @typedef {import('./types.js').ScopedElementsHost} ScopedElementsHost
 * @typedef {import('./types.js').ScopedElementsMap} ScopedElementsMap
 */

const version = '3.0.0';
const versions = window.scopedElementsVersions || (window.scopedElementsVersions = []);
if (!versions.includes(version)) {
  versions.push(version);
}

/**
 * @template {import('./types.js').Constructor<HTMLElement>} T
 * @param {T} superclass
 * @return {T & import('./types.js').Constructor<ScopedElementsHost>}
 */
const ScopedElementsMixinImplementation$1 = superclass =>
  /** @type {ScopedElementsHost} */
  class ScopedElementsHost extends superclass {
    /**
     * Obtains the scoped elements definitions map if specified.
     *
     * @type {ScopedElementsMap=}
     */
    static scopedElements;

    static get scopedElementsVersion() {
      return version;
    }

    /** @type {CustomElementRegistry=} */
    static __registry;

    /**
     * Obtains the CustomElementRegistry associated to the ShadowRoot.
     *
     * @returns {CustomElementRegistry=}
     */
    get registry() {
      return /** @type {typeof ScopedElementsHost} */ (this.constructor).__registry;
    }

    /**
     * Set the CustomElementRegistry associated to the ShadowRoot
     *
     * @param {CustomElementRegistry} registry
     */
    set registry(registry) {
      /** @type {typeof ScopedElementsHost} */ (this.constructor).__registry = registry;
    }

    /**
     * @param {ShadowRootInit} options
     * @returns {ShadowRoot}
     */
    attachShadow(options) {
      const { scopedElements } = /** @type {typeof ScopedElementsHost} */ (this.constructor);

      const shouldCreateRegistry =
        !this.registry ||
        // @ts-ignore
        (this.registry === this.constructor.__registry &&
          !Object.prototype.hasOwnProperty.call(this.constructor, '__registry'));

      /**
       * Create a new registry if:
       * - the registry is not defined
       * - this class doesn't have its own registry *AND* has no shared registry
       * This is important specifically for superclasses/inheritance
       */
      if (shouldCreateRegistry) {
        this.registry = new CustomElementRegistry();
        for (const [tagName, klass] of Object.entries(scopedElements ?? {})) {
          this.registry.define(tagName, klass);
        }
      }

      return super.attachShadow({
        ...options,
        // The polyfill currently expects the registry to be passed as `customElements`
        customElements: this.registry,
        // But the proposal has moved forward, and renamed it to `registry`
        // For backwards compatibility, we pass it as both
        registry: this.registry,
      });
    }
  };

const ScopedElementsMixin$1 = dedupeMixin(ScopedElementsMixinImplementation$1);

/**
 * @typedef {import('./types.js').ScopedElementsHost} ScopedElementsHost
 * @typedef {import('./types.js').ScopedElementsMap} ScopedElementsMap
 * @typedef {import('lit').CSSResultOrNative} CSSResultOrNative
 * @typedef {import('lit').LitElement} LitElement
 * @typedef {typeof import('lit').LitElement} TypeofLitElement
 * @typedef {import('@open-wc/dedupe-mixin').Constructor<LitElement>} LitElementConstructor
 * @typedef {import('@open-wc/dedupe-mixin').Constructor<ScopedElementsHost>} ScopedElementsHostConstructor
 */

/**
 * @template {LitElementConstructor} T
 * @param {T} superclass
 * @return {T & ScopedElementsHostConstructor}
 */
const ScopedElementsMixinImplementation = superclass =>
  /** @type {ScopedElementsHost} */
  class ScopedElementsHost extends ScopedElementsMixin$1(superclass) {
    createRenderRoot() {
      const { shadowRootOptions, elementStyles } = /** @type {TypeofLitElement} */ (
        this.constructor
      );

      const shadowRoot = this.attachShadow(shadowRootOptions);
      // @ts-ignore
      this.renderOptions.creationScope = shadowRoot;

      S(shadowRoot, elementStyles);

      this.renderOptions.renderBefore ??= shadowRoot.firstChild;

      return shadowRoot;
    }
  };

const ScopedElementsMixin = dedupeMixin(ScopedElementsMixinImplementation);

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A divider component.
 */
class Divider extends i$3 {
    constructor() {
        super(...arguments);
        /**
         * Indents the divider with equal padding on both sides.
         */
        this.inset = false;
        /**
         * Indents the divider with padding on the leading side.
         */
        this.insetStart = false;
        /**
         * Indents the divider with padding on the trailing side.
         */
        this.insetEnd = false;
    }
}
__decorate([
    n$3({ type: Boolean, reflect: true })
], Divider.prototype, "inset", void 0);
__decorate([
    n$3({ type: Boolean, reflect: true, attribute: 'inset-start' })
], Divider.prototype, "insetStart", void 0);
__decorate([
    n$3({ type: Boolean, reflect: true, attribute: 'inset-end' })
], Divider.prototype, "insetEnd", void 0);

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const styles$l = i$5 `:host{box-sizing:border-box;color:var(--md-divider-color, var(--md-sys-color-outline-variant, #cac4d0));display:flex;height:var(--md-divider-thickness, 1px);width:100%}:host([inset]),:host([inset-start]){padding-inline-start:16px}:host([inset]),:host([inset-end]){padding-inline-end:16px}:host::before{background:currentColor;content:"";height:100%;width:100%}@media(forced-colors: active){:host::before{background:CanvasText}}
`;

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary A divider is a thin line that groups content in lists and
 * containers.
 *
 * @description Dividers can reinforce tapability, such as when used to separate
 * list items or define tappable regions in an accordion.
 *
 * @final
 * @suppress {visibility}
 */
class MdDivider extends Divider {
}
MdDivider.styles = [styles$l];

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e$1=t=>(...e)=>({_$litDirective$:t,values:e});class i$2{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e=e$1(class extends i$2{constructor(t$1){if(super(t$1),t$1.type!==t.ATTRIBUTE||"class"!==t$1.name||t$1.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return " "+Object.keys(t).filter((s=>t[s])).join(" ")+" "}update(s,[i]){if(void 0===this.st){this.st=new Set,void 0!==s.strings&&(this.nt=new Set(s.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in i)i[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(i)}const r=s.element.classList;for(const t of this.st)t in i||(r.remove(t),this.st.delete(t));for(const t in i){const s=!!i[t];s===this.st.has(t)||this.nt?.has(t)||(s?(r.add(t),this.st.add(t)):(r.remove(t),this.st.delete(t)));}return T}});

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Accessibility Object Model reflective aria properties.
 */
const ARIA_PROPERTIES = [
    'role',
    'ariaAtomic',
    'ariaAutoComplete',
    'ariaBusy',
    'ariaChecked',
    'ariaColCount',
    'ariaColIndex',
    'ariaColSpan',
    'ariaCurrent',
    'ariaDisabled',
    'ariaExpanded',
    'ariaHasPopup',
    'ariaHidden',
    'ariaInvalid',
    'ariaKeyShortcuts',
    'ariaLabel',
    'ariaLevel',
    'ariaLive',
    'ariaModal',
    'ariaMultiLine',
    'ariaMultiSelectable',
    'ariaOrientation',
    'ariaPlaceholder',
    'ariaPosInSet',
    'ariaPressed',
    'ariaReadOnly',
    'ariaRequired',
    'ariaRoleDescription',
    'ariaRowCount',
    'ariaRowIndex',
    'ariaRowSpan',
    'ariaSelected',
    'ariaSetSize',
    'ariaSort',
    'ariaValueMax',
    'ariaValueMin',
    'ariaValueNow',
    'ariaValueText',
];
/**
 * Accessibility Object Model aria attributes.
 */
const ARIA_ATTRIBUTES = ARIA_PROPERTIES.map(ariaPropertyToAttribute);
/**
 * Checks if an attribute is one of the AOM aria attributes.
 *
 * @example
 * isAriaAttribute('aria-label'); // true
 *
 * @param attribute The attribute to check.
 * @return True if the attribute is an aria attribute, or false if not.
 */
function isAriaAttribute(attribute) {
    return ARIA_ATTRIBUTES.includes(attribute);
}
/**
 * Converts an AOM aria property into its corresponding attribute.
 *
 * @example
 * ariaPropertyToAttribute('ariaLabel'); // 'aria-label'
 *
 * @param property The aria property.
 * @return The aria attribute.
 */
function ariaPropertyToAttribute(property) {
    return property
        .replace('aria', 'aria-')
        // IDREF attributes also include an "Element" or "Elements" suffix
        .replace(/Elements?/g, '')
        .toLowerCase();
}

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Private symbols
const privateIgnoreAttributeChangesFor = Symbol('privateIgnoreAttributeChangesFor');
/**
 * Mixes in aria delegation for elements that delegate focus and aria to inner
 * shadow root elements.
 *
 * This mixin fixes invalid aria announcements with shadow roots, caused by
 * duplicate aria attributes on both the host and the inner shadow root element.
 *
 * Note: this mixin **does not yet support** ID reference attributes, such as
 * `aria-labelledby` or `aria-controls`.
 *
 * @example
 * ```ts
 * class MyButton extends mixinDelegatesAria(LitElement) {
 *   static shadowRootOptions = {mode: 'open', delegatesFocus: true};
 *
 *   render() {
 *     return html`
 *       <button aria-label=${this.ariaLabel || nothing}>
 *         <slot></slot>
 *       </button>
 *     `;
 *   }
 * }
 * ```
 * ```html
 * <my-button aria-label="Plus one">+1</my-button>
 * ```
 *
 * Use `ARIAMixinStrict` for lit analyzer strict types, such as the "role"
 * attribute.
 *
 * @example
 * ```ts
 * return html`
 *   <button role=${(this as ARIAMixinStrict).role || nothing}>
 *     <slot></slot>
 *   </button>
 * `;
 * ```
 *
 * In the future, updates to the Accessibility Object Model (AOM) will provide
 * built-in aria delegation features that will replace this mixin.
 *
 * @param base The class to mix functionality into.
 * @return The provided class with aria delegation mixed in.
 */
function mixinDelegatesAria(base) {
    var _a;
    class WithDelegatesAriaElement extends base {
        constructor() {
            super(...arguments);
            this[_a] = new Set();
        }
        attributeChangedCallback(name, oldValue, newValue) {
            if (!isAriaAttribute(name)) {
                super.attributeChangedCallback(name, oldValue, newValue);
                return;
            }
            if (this[privateIgnoreAttributeChangesFor].has(name)) {
                return;
            }
            // Don't trigger another `attributeChangedCallback` once we remove the
            // aria attribute from the host. We check the explicit name of the
            // attribute to ignore since `attributeChangedCallback` can be called
            // multiple times out of an expected order when hydrating an element with
            // multiple attributes.
            this[privateIgnoreAttributeChangesFor].add(name);
            this.removeAttribute(name);
            this[privateIgnoreAttributeChangesFor].delete(name);
            const dataProperty = ariaAttributeToDataProperty(name);
            if (newValue === null) {
                delete this.dataset[dataProperty];
            }
            else {
                this.dataset[dataProperty] = newValue;
            }
            this.requestUpdate(ariaAttributeToDataProperty(name), oldValue);
        }
        getAttribute(name) {
            if (isAriaAttribute(name)) {
                return super.getAttribute(ariaAttributeToDataAttribute(name));
            }
            return super.getAttribute(name);
        }
        removeAttribute(name) {
            super.removeAttribute(name);
            if (isAriaAttribute(name)) {
                super.removeAttribute(ariaAttributeToDataAttribute(name));
                // Since `aria-*` attributes are already removed`, we need to request
                // an update because `attributeChangedCallback` will not be called.
                this.requestUpdate();
            }
        }
    }
    _a = privateIgnoreAttributeChangesFor;
    setupDelegatesAriaProperties(WithDelegatesAriaElement);
    return WithDelegatesAriaElement;
}
/**
 * Overrides the constructor's native `ARIAMixin` properties to ensure that
 * aria properties reflect the values that were shifted to a data attribute.
 *
 * @param ctor The `ReactiveElement` constructor to patch.
 */
function setupDelegatesAriaProperties(ctor) {
    for (const ariaProperty of ARIA_PROPERTIES) {
        // The casing between ariaProperty and the dataProperty may be different.
        // ex: aria-haspopup -> ariaHasPopup
        const ariaAttribute = ariaPropertyToAttribute(ariaProperty);
        // ex: aria-haspopup -> data-aria-haspopup
        const dataAttribute = ariaAttributeToDataAttribute(ariaAttribute);
        // ex: aria-haspopup -> dataset.ariaHaspopup
        const dataProperty = ariaAttributeToDataProperty(ariaAttribute);
        // Call `ReactiveElement.createProperty()` so that the `aria-*` and `data-*`
        // attributes are added to the `static observedAttributes` array. This
        // triggers `attributeChangedCallback` for the delegates aria mixin to
        // handle.
        ctor.createProperty(ariaProperty, {
            attribute: ariaAttribute,
            noAccessor: true,
        });
        ctor.createProperty(Symbol(dataAttribute), {
            attribute: dataAttribute,
            noAccessor: true,
        });
        // Re-define the `ARIAMixin` properties to handle data attribute shifting.
        // It is safe to use `Object.defineProperty` here because the properties
        // are native and not renamed.
        // tslint:disable-next-line:ban-unsafe-reflection
        Object.defineProperty(ctor.prototype, ariaProperty, {
            configurable: true,
            enumerable: true,
            get() {
                return this.dataset[dataProperty] ?? null;
            },
            set(value) {
                const prevValue = this.dataset[dataProperty] ?? null;
                if (value === prevValue) {
                    return;
                }
                if (value === null) {
                    delete this.dataset[dataProperty];
                }
                else {
                    this.dataset[dataProperty] = value;
                }
                this.requestUpdate(ariaProperty, prevValue);
            },
        });
    }
}
function ariaAttributeToDataAttribute(ariaAttribute) {
    // aria-haspopup -> data-aria-haspopup
    return `data-${ariaAttribute}`;
}
function ariaAttributeToDataProperty(ariaAttribute) {
    // aria-haspopup -> dataset.ariaHaspopup
    return ariaAttribute.replace(/-\w/, (dashLetter) => dashLetter[1].toUpperCase());
}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Re-dispatches an event from the provided element.
 *
 * This function is useful for forwarding non-composed events, such as `change`
 * events.
 *
 * @example
 * class MyInput extends LitElement {
 *   render() {
 *     return html`<input @change=${this.redispatchEvent}>`;
 *   }
 *
 *   protected redispatchEvent(event: Event) {
 *     redispatchEvent(this, event);
 *   }
 * }
 *
 * @param element The element to dispatch the event from.
 * @param event The event to re-dispatch.
 * @return Whether or not the event was dispatched (if cancelable).
 */
function redispatchEvent(element, event) {
    // For bubbling events in SSR light DOM (or composed), stop their propagation
    // and dispatch the copy.
    if (event.bubbles && (!element.shadowRoot || event.composed)) {
        event.stopPropagation();
    }
    const copy = Reflect.construct(event.constructor, [event.type, event]);
    const dispatched = element.dispatchEvent(copy);
    if (!dispatched) {
        event.preventDefault();
    }
    return dispatched;
}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Easing functions to use for web animations.
 *
 * **NOTE:** `EASING.EMPHASIZED` is approximated with unknown accuracy.
 *
 * TODO(b/241113345): replace with tokens
 */
const EASING = {
    STANDARD: 'cubic-bezier(0.2, 0, 0, 1)',
    STANDARD_ACCELERATE: 'cubic-bezier(.3,0,1,1)',
    STANDARD_DECELERATE: 'cubic-bezier(0,0,0,1)',
    EMPHASIZED: 'cubic-bezier(.3,0,0,1)',
    EMPHASIZED_ACCELERATE: 'cubic-bezier(.3,0,.8,.15)',
    EMPHASIZED_DECELERATE: 'cubic-bezier(.05,.7,.1,1)',
};
/**
 * Creates an `AnimationSignal` that can be used to cancel a previous task.
 *
 * @example
 * class MyClass {
 *   private labelAnimationSignal = createAnimationSignal();
 *
 *   private async animateLabel() {
 *     // Start of the task. Previous tasks will be canceled.
 *     const signal = this.labelAnimationSignal.start();
 *
 *     // Do async work...
 *     if (signal.aborted) {
 *       // Use AbortSignal to check if a request was made to abort after some
 *       // asynchronous work.
 *       return;
 *     }
 *
 *     const animation = this.animate(...);
 *     // Add event listeners to be notified when the task should be canceled.
 *     signal.addEventListener('abort', () => {
 *       animation.cancel();
 *     });
 *
 *     animation.addEventListener('finish', () => {
 *       // Tell the signal that the current task is finished.
 *       this.labelAnimationSignal.finish();
 *     });
 *   }
 * }
 *
 * @return An `AnimationSignal`.
 */
function createAnimationSignal() {
    // The current animation's AbortController
    let animationAbortController = null;
    return {
        start() {
            // Tell the previous animation to cancel.
            animationAbortController?.abort();
            // Set up a new AbortController for the current animation.
            animationAbortController = new AbortController();
            // Provide the AbortSignal so that the caller can check aborted status
            // and add listeners.
            return animationAbortController.signal;
        },
        finish() {
            animationAbortController = null;
        },
    };
}

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * The default dialog open animation.
 */
const DIALOG_DEFAULT_OPEN_ANIMATION = {
    dialog: [
        [
            // Dialog slide down
            [{ 'transform': 'translateY(-50px)' }, { 'transform': 'translateY(0)' }],
            { duration: 500, easing: EASING.EMPHASIZED },
        ],
    ],
    scrim: [
        [
            // Scrim fade in
            [{ 'opacity': 0 }, { 'opacity': 0.32 }],
            { duration: 500, easing: 'linear' },
        ],
    ],
    container: [
        [
            // Container fade in
            [{ 'opacity': 0 }, { 'opacity': 1 }],
            { duration: 50, easing: 'linear', pseudoElement: '::before' },
        ],
        [
            // Container grow
            // Note: current spec says to grow from 0dp->100% and shrink from
            // 100%->35%. We change this to 35%->100% to simplify the animation that
            // is supposed to clip content as it grows. From 0dp it's possible to see
            // text/actions appear before the container has fully grown.
            [{ 'height': '35%' }, { 'height': '100%' }],
            { duration: 500, easing: EASING.EMPHASIZED, pseudoElement: '::before' },
        ],
    ],
    headline: [
        [
            // Headline fade in
            [{ 'opacity': 0 }, { 'opacity': 0, offset: 0.2 }, { 'opacity': 1 }],
            { duration: 250, easing: 'linear', fill: 'forwards' },
        ],
    ],
    content: [
        [
            // Content fade in
            [{ 'opacity': 0 }, { 'opacity': 0, offset: 0.2 }, { 'opacity': 1 }],
            { duration: 250, easing: 'linear', fill: 'forwards' },
        ],
    ],
    actions: [
        [
            // Actions fade in
            [{ 'opacity': 0 }, { 'opacity': 0, offset: 0.5 }, { 'opacity': 1 }],
            { duration: 300, easing: 'linear', fill: 'forwards' },
        ],
    ],
};
/**
 * The default dialog close animation.
 */
const DIALOG_DEFAULT_CLOSE_ANIMATION = {
    dialog: [
        [
            // Dialog slide up
            [{ 'transform': 'translateY(0)' }, { 'transform': 'translateY(-50px)' }],
            { duration: 150, easing: EASING.EMPHASIZED_ACCELERATE },
        ],
    ],
    scrim: [
        [
            // Scrim fade out
            [{ 'opacity': 0.32 }, { 'opacity': 0 }],
            { duration: 150, easing: 'linear' },
        ],
    ],
    container: [
        [
            // Container shrink
            [{ 'height': '100%' }, { 'height': '35%' }],
            {
                duration: 150,
                easing: EASING.EMPHASIZED_ACCELERATE,
                pseudoElement: '::before',
            },
        ],
        [
            // Container fade out
            [{ 'opacity': '1' }, { 'opacity': '0' }],
            { delay: 100, duration: 50, easing: 'linear', pseudoElement: '::before' },
        ],
    ],
    headline: [
        [
            // Headline fade out
            [{ 'opacity': 1 }, { 'opacity': 0 }],
            { duration: 100, easing: 'linear', fill: 'forwards' },
        ],
    ],
    content: [
        [
            // Content fade out
            [{ 'opacity': 1 }, { 'opacity': 0 }],
            { duration: 100, easing: 'linear', fill: 'forwards' },
        ],
    ],
    actions: [
        [
            // Actions fade out
            [{ 'opacity': 1 }, { 'opacity': 0 }],
            { duration: 100, easing: 'linear', fill: 'forwards' },
        ],
    ],
};

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Separate variable needed for closure.
const dialogBaseClass = mixinDelegatesAria(ScopedElementsMixin(i$3));
/**
 * A dialog component.
 *
 * @fires open {Event} Dispatched when the dialog is opening before any animations.
 * @fires opened {Event} Dispatched when the dialog has opened after any animations.
 * @fires close {Event} Dispatched when the dialog is closing before any animations.
 * @fires closed {Event} Dispatched when the dialog has closed after any animations.
 * @fires cancel {Event} Dispatched when the dialog has been canceled by clicking
 * on the scrim or pressing Escape.
 */
class Dialog extends dialogBaseClass {
    get open() {
        return this.isOpen;
    }
    set open(open) {
        if (open === this.isOpen) {
            return;
        }
        this.isOpen = open;
        if (open) {
            this.setAttribute('open', '');
            this.show();
        }
        else {
            this.removeAttribute('open');
            this.close();
        }
    }
    constructor() {
        super();
        /**
         * Skips the opening and closing animations.
         */
        this.quick = false;
        /**
         * Gets or sets the dialog's return value, usually to indicate which button
         * a user pressed to close it.
         *
         * https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/returnValue
         */
        this.returnValue = '';
        /**
         * Disables focus trapping, which by default keeps keyboard Tab navigation
         * within the dialog.
         *
         * When disabled, after focusing the last element of a dialog, pressing Tab
         * again will release focus from the window back to the browser (such as the
         * URL bar).
         *
         * Focus trapping is recommended for accessibility, and should not typically
         * be disabled. Only turn this off if the use case of a dialog is more
         * accessible without focus trapping.
         */
        this.noFocusTrap = false;
        /**
         * Gets the opening animation for a dialog. Set to a new function to customize
         * the animation.
         */
        this.getOpenAnimation = () => DIALOG_DEFAULT_OPEN_ANIMATION;
        /**
         * Gets the closing animation for a dialog. Set to a new function to customize
         * the animation.
         */
        this.getCloseAnimation = () => DIALOG_DEFAULT_CLOSE_ANIMATION;
        this.isOpen = false;
        this.isOpening = false;
        this.isConnectedPromise = this.getIsConnectedPromise();
        this.isAtScrollTop = false;
        this.isAtScrollBottom = false;
        this.nextClickIsFromContent = false;
        // Dialogs should not be SSR'd while open, so we can just use runtime checks.
        this.hasHeadline = false;
        this.hasActions = false;
        this.hasIcon = false;
        // See https://bugs.chromium.org/p/chromium/issues/detail?id=1512224
        // Chrome v120 has a bug where escape keys do not trigger cancels. If we get
        // a dialog "close" event that is triggered without a "cancel" after an escape
        // keydown, then we need to manually trigger our closing logic.
        //
        // This bug occurs when pressing escape to close a dialog without first
        // interacting with the dialog's content.
        //
        // Cleanup tracking:
        // https://github.com/material-components/material-web/issues/5330
        // This can be removed when full CloseWatcher support added and the above bug
        // in Chromium is fixed to fire 'cancel' with one escape press and close with
        // multiple.
        this.escapePressedWithoutCancel = false;
        // This TreeWalker is used to walk through a dialog's children to find
        // focusable elements. TreeWalker is faster than `querySelectorAll('*')`.
        // We check for isServer because there isn't a "document" during an SSR
        // run.
        this.treewalker = document.createTreeWalker(this, NodeFilter.SHOW_ELEMENT);
        {
            this.addEventListener('submit', this.handleSubmit);
        }
    }
    /**
     * Opens the dialog and fires a cancelable `open` event. After a dialog's
     * animation, an `opened` event is fired.
     *
     * Add an `autofocus` attribute to a child of the dialog that should
     * receive focus after opening.
     *
     * @return A Promise that resolves after the animation is finished and the
     *     `opened` event was fired.
     */
    async show() {
        this.isOpening = true;
        // Dialogs can be opened before being attached to the DOM, so we need to
        // wait until we're connected before calling `showModal()`.
        await this.isConnectedPromise;
        await this.updateComplete;
        const dialog = this.dialog;
        // Check if already opened or if `dialog.close()` was called while awaiting.
        if (dialog.open || !this.isOpening) {
            this.isOpening = false;
            return;
        }
        const preventOpen = !this.dispatchEvent(new Event('open', { cancelable: true }));
        if (preventOpen) {
            this.open = false;
            this.isOpening = false;
            return;
        }
        // All Material dialogs are modal.
        dialog.showModal();
        this.open = true;
        // Reset scroll position if re-opening a dialog with the same content.
        if (this.scroller) {
            this.scroller.scrollTop = 0;
        }
        // Native modal dialogs ignore autofocus and instead force focus to the
        // first focusable child. Override this behavior if there is a child with
        // an autofocus attribute.
        this.querySelector('[autofocus]')?.focus();
        await this.animateDialog(this.getOpenAnimation());
        this.dispatchEvent(new Event('opened'));
        this.isOpening = false;
    }
    /**
     * Closes the dialog and fires a cancelable `close` event. After a dialog's
     * animation, a `closed` event is fired.
     *
     * @param returnValue A return value usually indicating which button was used
     *     to close a dialog. If a dialog is canceled by clicking the scrim or
     *     pressing Escape, it will not change the return value after closing.
     * @return A Promise that resolves after the animation is finished and the
     *     `closed` event was fired.
     */
    async close(returnValue = this.returnValue) {
        this.isOpening = false;
        if (!this.isConnected) {
            // Disconnected dialogs do not fire close events or animate.
            this.open = false;
            return;
        }
        await this.updateComplete;
        const dialog = this.dialog;
        // Check if already closed or if `dialog.show()` was called while awaiting.
        if (!dialog.open || this.isOpening) {
            this.open = false;
            return;
        }
        const prevReturnValue = this.returnValue;
        this.returnValue = returnValue;
        const preventClose = !this.dispatchEvent(new Event('close', { cancelable: true }));
        if (preventClose) {
            this.returnValue = prevReturnValue;
            return;
        }
        await this.animateDialog(this.getCloseAnimation());
        dialog.close(returnValue);
        this.open = false;
        this.dispatchEvent(new Event('closed'));
    }
    connectedCallback() {
        super.connectedCallback();
        this.isConnectedPromiseResolve();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.isConnectedPromise = this.getIsConnectedPromise();
    }
    render() {
        const scrollable = this.open && !(this.isAtScrollTop && this.isAtScrollBottom);
        const classes = {
            'has-headline': this.hasHeadline,
            'has-actions': this.hasActions,
            'has-icon': this.hasIcon,
            'scrollable': scrollable,
            'show-top-divider': scrollable && !this.isAtScrollTop,
            'show-bottom-divider': scrollable && !this.isAtScrollBottom,
        };
        // The focus trap sentinels are only added after the dialog opens, since
        // dialog.showModal() will try to autofocus them, even with tabindex="-1".
        const showFocusTrap = this.open && !this.noFocusTrap;
        const focusTrap = x `
      <div
        class="focus-trap"
        tabindex="0"
        aria-hidden="true"
        @focus=${this.handleFocusTrapFocus}></div>
    `;
        const { ariaLabel } = this;
        return x `
      <div class="scrim"></div>
      <dialog
        class=${e(classes)}
        aria-label=${ariaLabel || E}
        aria-labelledby=${this.hasHeadline ? 'headline' : E}
        role=${this.type === 'alert' ? 'alertdialog' : E}
        @cancel=${this.handleCancel}
        @click=${this.handleDialogClick}
        @close=${this.handleClose}
        @keydown=${this.handleKeydown}
        .returnValue=${this.returnValue || E}>
        ${showFocusTrap ? focusTrap : E}
        <div class="container" @click=${this.handleContentClick}>
          <div class="headline">
            <div class="icon" aria-hidden="true">
              <slot name="icon" @slotchange=${this.handleIconChange}></slot>
            </div>
            <h2 id="headline" aria-hidden=${!this.hasHeadline || E}>
              <slot
                name="headline"
                @slotchange=${this.handleHeadlineChange}></slot>
            </h2>
            <md-divider></md-divider>
          </div>
          <div class="scroller">
            <div class="content">
              <div class="top anchor"></div>
              <slot name="content"></slot>
              <div class="bottom anchor"></div>
            </div>
          </div>
          <div class="actions">
            <md-divider></md-divider>
            <slot name="actions" @slotchange=${this.handleActionsChange}></slot>
          </div>
        </div>
        ${showFocusTrap ? focusTrap : E}
      </dialog>
    `;
    }
    firstUpdated() {
        this.intersectionObserver = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                this.handleAnchorIntersection(entry);
            }
        }, { root: this.scroller });
        this.intersectionObserver.observe(this.topAnchor);
        this.intersectionObserver.observe(this.bottomAnchor);
    }
    handleDialogClick() {
        if (this.nextClickIsFromContent) {
            // Avoid doing a layout calculation below if we know the click came from
            // content.
            this.nextClickIsFromContent = false;
            return;
        }
        // Click originated on the backdrop. Native `<dialog>`s will not cancel,
        // but Material dialogs do.
        const preventDefault = !this.dispatchEvent(new Event('cancel', { cancelable: true }));
        if (preventDefault) {
            return;
        }
        this.close();
    }
    handleContentClick() {
        this.nextClickIsFromContent = true;
    }
    handleSubmit(event) {
        const form = event.target;
        const { submitter } = event;
        if (form.method !== 'dialog' || !submitter) {
            return;
        }
        // Close reason is the submitter's value attribute, or the dialog's
        // `returnValue` if there is no attribute.
        this.close(submitter.getAttribute('value') ?? this.returnValue);
    }
    handleCancel(event) {
        if (event.target !== this.dialog) {
            // Ignore any cancel events dispatched by content.
            return;
        }
        this.escapePressedWithoutCancel = false;
        const preventDefault = !redispatchEvent(this, event);
        // We always prevent default on the original dialog event since we'll
        // animate closing it before it actually closes.
        event.preventDefault();
        if (preventDefault) {
            return;
        }
        this.close();
    }
    handleClose() {
        if (!this.escapePressedWithoutCancel) {
            return;
        }
        this.escapePressedWithoutCancel = false;
        this.dialog?.dispatchEvent(new Event('cancel', { cancelable: true }));
    }
    handleKeydown(event) {
        if (event.key !== 'Escape') {
            return;
        }
        // An escape key was pressed. If a "close" event fires next without a
        // "cancel" event first, then we know we're in the Chrome v120 bug.
        this.escapePressedWithoutCancel = true;
        // Wait a full task for the cancel/close event listeners to fire, then
        // reset the flag.
        setTimeout(() => {
            this.escapePressedWithoutCancel = false;
        });
    }
    async animateDialog(animation) {
        // Always cancel the previous animations. Animations can include `fill`
        // modes that need to be cleared when `quick` is toggled. If not, content
        // that faded out will remain hidden when a `quick` dialog re-opens after
        // previously opening and closing without `quick`.
        this.cancelAnimations?.abort();
        this.cancelAnimations = new AbortController();
        if (this.quick) {
            return;
        }
        const { dialog, scrim, container, headline, content, actions } = this;
        if (!dialog || !scrim || !container || !headline || !content || !actions) {
            return;
        }
        const { container: containerAnimate, dialog: dialogAnimate, scrim: scrimAnimate, headline: headlineAnimate, content: contentAnimate, actions: actionsAnimate, } = animation;
        const elementAndAnimation = [
            [dialog, dialogAnimate ?? []],
            [scrim, scrimAnimate ?? []],
            [container, containerAnimate ?? []],
            [headline, headlineAnimate ?? []],
            [content, contentAnimate ?? []],
            [actions, actionsAnimate ?? []],
        ];
        const animations = [];
        for (const [element, animation] of elementAndAnimation) {
            for (const animateArgs of animation) {
                const animation = element.animate(...animateArgs);
                this.cancelAnimations.signal.addEventListener('abort', () => {
                    animation.cancel();
                });
                animations.push(animation);
            }
        }
        await Promise.all(animations.map((animation) => animation.finished.catch(() => {
            // Ignore intentional AbortErrors when calling `animation.cancel()`.
        })));
    }
    handleHeadlineChange(event) {
        const slot = event.target;
        this.hasHeadline = slot.assignedElements().length > 0;
    }
    handleActionsChange(event) {
        const slot = event.target;
        this.hasActions = slot.assignedElements().length > 0;
    }
    handleIconChange(event) {
        const slot = event.target;
        this.hasIcon = slot.assignedElements().length > 0;
    }
    handleAnchorIntersection(entry) {
        const { target, isIntersecting } = entry;
        if (target === this.topAnchor) {
            this.isAtScrollTop = isIntersecting;
        }
        if (target === this.bottomAnchor) {
            this.isAtScrollBottom = isIntersecting;
        }
    }
    getIsConnectedPromise() {
        return new Promise((resolve) => {
            this.isConnectedPromiseResolve = resolve;
        });
    }
    handleFocusTrapFocus(event) {
        const [firstFocusableChild, lastFocusableChild] = this.getFirstAndLastFocusableChildren();
        if (!firstFocusableChild || !lastFocusableChild) {
            // When a dialog does not have focusable children, the dialog itself
            // receives focus.
            this.dialog?.focus();
            return;
        }
        // To determine which child to focus, we need to know which focus trap
        // received focus...
        const isFirstFocusTrap = event.target === this.firstFocusTrap;
        const isLastFocusTrap = !isFirstFocusTrap;
        // ...and where the focus came from (what was previously focused).
        const focusCameFromFirstChild = event.relatedTarget === firstFocusableChild;
        const focusCameFromLastChild = event.relatedTarget === lastFocusableChild;
        // Although this is a focus trap, focus can come from outside the trap.
        // This can happen when elements are programmatically `focus()`'d. It also
        // happens when focus leaves and returns to the window, such as clicking on
        // the browser's URL bar and pressing Tab, or switching focus between
        // iframes.
        const focusCameFromOutsideDialog = !focusCameFromFirstChild && !focusCameFromLastChild;
        // Focus the dialog's first child when we reach the end of the dialog and
        // focus is moving forward. Or, when focus is moving forwards into the
        // dialog from outside of the window.
        const shouldFocusFirstChild = (isLastFocusTrap && focusCameFromLastChild) ||
            (isFirstFocusTrap && focusCameFromOutsideDialog);
        if (shouldFocusFirstChild) {
            firstFocusableChild.focus();
            return;
        }
        // Focus the dialog's last child when we reach the beginning of the dialog
        // and focus is moving backward. Or, when focus is moving backwards into the
        // dialog from outside of the window.
        const shouldFocusLastChild = (isFirstFocusTrap && focusCameFromFirstChild) ||
            (isLastFocusTrap && focusCameFromOutsideDialog);
        if (shouldFocusLastChild) {
            lastFocusableChild.focus();
            return;
        }
        // The booleans above are verbose for readability, but code executation
        // won't actually reach here.
    }
    getFirstAndLastFocusableChildren() {
        if (!this.treewalker) {
            return [null, null];
        }
        let firstFocusableChild = null;
        let lastFocusableChild = null;
        // Reset the current node back to the root host element.
        this.treewalker.currentNode = this.treewalker.root;
        while (this.treewalker.nextNode()) {
            // Cast as Element since the TreeWalker filter only accepts Elements.
            const nextChild = this.treewalker.currentNode;
            if (!isFocusable(nextChild)) {
                continue;
            }
            if (!firstFocusableChild) {
                firstFocusableChild = nextChild;
            }
            lastFocusableChild = nextChild;
        }
        // We set lastFocusableChild immediately after finding a
        // firstFocusableChild, which means the pair is either both null or both
        // non-null. Cast since TypeScript does not recognize this.
        return [firstFocusableChild, lastFocusableChild];
    }
}
// We do not use `delegatesFocus: true` due to a Chromium bug with
// selecting text.
// See https://bugs.chromium.org/p/chromium/issues/detail?id=950357
/**
 * Opens the dialog when set to `true` and closes it when set to `false`.
 */
Dialog.scopedElements = {
    'md-divider': MdDivider,
};
__decorate([
    n$3({ type: Boolean })
], Dialog.prototype, "open", null);
__decorate([
    n$3({ type: Boolean })
], Dialog.prototype, "quick", void 0);
__decorate([
    n$3({ attribute: false })
], Dialog.prototype, "returnValue", void 0);
__decorate([
    n$3()
], Dialog.prototype, "type", void 0);
__decorate([
    n$3({ type: Boolean, attribute: 'no-focus-trap' })
], Dialog.prototype, "noFocusTrap", void 0);
__decorate([
    e$3('dialog')
], Dialog.prototype, "dialog", void 0);
__decorate([
    e$3('.scrim')
], Dialog.prototype, "scrim", void 0);
__decorate([
    e$3('.container')
], Dialog.prototype, "container", void 0);
__decorate([
    e$3('.headline')
], Dialog.prototype, "headline", void 0);
__decorate([
    e$3('.content')
], Dialog.prototype, "content", void 0);
__decorate([
    e$3('.actions')
], Dialog.prototype, "actions", void 0);
__decorate([
    r$1()
], Dialog.prototype, "isAtScrollTop", void 0);
__decorate([
    r$1()
], Dialog.prototype, "isAtScrollBottom", void 0);
__decorate([
    e$3('.scroller')
], Dialog.prototype, "scroller", void 0);
__decorate([
    e$3('.top.anchor')
], Dialog.prototype, "topAnchor", void 0);
__decorate([
    e$3('.bottom.anchor')
], Dialog.prototype, "bottomAnchor", void 0);
__decorate([
    e$3('.focus-trap')
], Dialog.prototype, "firstFocusTrap", void 0);
__decorate([
    r$1()
], Dialog.prototype, "hasHeadline", void 0);
__decorate([
    r$1()
], Dialog.prototype, "hasActions", void 0);
__decorate([
    r$1()
], Dialog.prototype, "hasIcon", void 0);
function isFocusable(element) {
    // Check if the element is a known built-in focusable element:
    // - <a> and <area> with `href` attributes.
    // - Form controls that are not disabled.
    // - `contenteditable` elements.
    // - Anything with a non-negative `tabindex`.
    const knownFocusableElements = ':is(button,input,select,textarea,object,:is(a,area)[href],[tabindex],[contenteditable=true])';
    const notDisabled = ':not(:disabled,[disabled])';
    const notNegativeTabIndex = ':not([tabindex^="-"])';
    if (element.matches(knownFocusableElements + notDisabled + notNegativeTabIndex)) {
        return true;
    }
    const isCustomElement = element.localName.includes('-');
    if (!isCustomElement) {
        return false;
    }
    // If a custom element does not have a tabindex, it may still be focusable
    // if it delegates focus with a shadow root. We also need to check again if
    // the custom element is a disabled form control.
    if (!element.matches(notDisabled)) {
        return false;
    }
    return element.shadowRoot?.delegatesFocus ?? false;
}

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const styles$k = i$5 `:host{border-start-start-radius:var(--md-dialog-container-shape-start-start, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));border-start-end-radius:var(--md-dialog-container-shape-start-end, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));border-end-end-radius:var(--md-dialog-container-shape-end-end, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));border-end-start-radius:var(--md-dialog-container-shape-end-start, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));display:contents;margin:auto;max-height:min(var(--md-dialog-container-max-height, 560px),100% - 48px);max-width:min(var(--md-dialog-container-max-width, 560px),100% - 48px);min-height:140px;min-width:280px;position:fixed;height:fit-content;width:fit-content}dialog{background:rgba(0,0,0,0);border:none;border-radius:inherit;flex-direction:column;height:inherit;margin:inherit;max-height:inherit;max-width:inherit;min-height:inherit;min-width:inherit;outline:none;overflow:visible;padding:0;width:inherit}dialog[open]{display:flex}::backdrop{background:none}.scrim{background:var(--md-sys-color-scrim, #000);display:none;inset:0;opacity:32%;pointer-events:none;position:fixed;z-index:1}:host([open]) .scrim{display:flex}h2{all:unset;align-self:stretch}.headline{align-items:center;color:var(--md-dialog-headline-color, var(--md-sys-color-on-surface, #1d1b20));display:flex;flex-direction:column;font-family:var(--md-dialog-headline-font, var(--md-sys-typescale-headline-small-font, var(--md-ref-typeface-brand, Roboto)));font-size:var(--md-dialog-headline-size, var(--md-sys-typescale-headline-small-size, 1.5rem));line-height:var(--md-dialog-headline-line-height, var(--md-sys-typescale-headline-small-line-height, 2rem));font-weight:var(--md-dialog-headline-weight, var(--md-sys-typescale-headline-small-weight, var(--md-ref-typeface-weight-regular, 400)));position:relative}slot[name=headline]::slotted(*){align-items:center;align-self:stretch;box-sizing:border-box;display:flex;gap:8px;padding:24px 24px 0}.icon{display:flex}slot[name=icon]::slotted(*){color:var(--md-dialog-icon-color, var(--md-sys-color-secondary, #625b71));fill:currentColor;font-size:var(--md-dialog-icon-size, 24px);margin-top:24px;height:var(--md-dialog-icon-size, 24px);width:var(--md-dialog-icon-size, 24px)}.has-icon slot[name=headline]::slotted(*){justify-content:center;padding-top:16px}.scrollable slot[name=headline]::slotted(*){padding-bottom:16px}.scrollable.has-headline slot[name=content]::slotted(*){padding-top:8px}.container{border-radius:inherit;display:flex;flex-direction:column;flex-grow:1;overflow:hidden;position:relative;transform-origin:top}.container::before{background:var(--md-dialog-container-color, var(--md-sys-color-surface-container-high, #ece6f0));border-radius:inherit;content:"";inset:0;position:absolute}.scroller{display:flex;flex:1;flex-direction:column;overflow:hidden;z-index:1}.scrollable .scroller{overflow-y:scroll}.content{color:var(--md-dialog-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-dialog-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-dialog-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));line-height:var(--md-dialog-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));flex:1;font-weight:var(--md-dialog-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)));height:min-content;position:relative}slot[name=content]::slotted(*){box-sizing:border-box;padding:24px}.anchor{position:absolute}.top.anchor{top:0}.bottom.anchor{bottom:0}.actions{position:relative}slot[name=actions]::slotted(*){box-sizing:border-box;display:flex;gap:8px;justify-content:flex-end;padding:16px 24px 24px}.has-actions slot[name=content]::slotted(*){padding-bottom:8px}md-divider{display:none;position:absolute}.has-headline.show-top-divider .headline md-divider,.has-actions.show-bottom-divider .actions md-divider{display:flex}.headline md-divider{bottom:0}.actions md-divider{top:0}@media(forced-colors: active){dialog{outline:2px solid WindowText}}
`;

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Dialogs can require an action, communicate information, or help
 * users accomplish a task. There are two types of dialogs: basic and
 * full-screen.
 *
 * @description
 * A dialog is a modal window that appears in front of app content to provide
 * critical information or ask for a decision. Dialogs disable all app
 * functionality when they appear, and remain on screen until confirmed,
 * dismissed, or a required action has been taken.
 *
 * Dialogs are purposefully interruptive, so they should be used sparingly.
 * A less disruptive alternative is to use a menu, which provides options
 * without interrupting a user’s experience.
 *
 * On mobile devices only, complex dialogs should be displayed fullscreen.
 *
 * __Example usages:__
 * - Common use cases for basic dialogs include alerts, quick selection, and
 * confirmation.
 * - More complex dialogs may contain actions that require a series of tasks
 * to complete. One example is creating a calendar entry with the event title,
 * date, location, and time.
 *
 * @final
 * @suppress {visibility}
 */
class MdDialog extends Dialog {
}
MdDialog.styles = [styles$k];

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A unique symbol used for protected access to an instance's
 * `ElementInternals`.
 *
 * @example
 * ```ts
 * class MyElement extends mixinElementInternals(LitElement) {
 *   constructor() {
 *     super();
 *     this[internals].role = 'button';
 *   }
 * }
 * ```
 */
const internals = Symbol('internals');
// Private symbols
const privateInternals = Symbol('privateInternals');
/**
 * Mixes in an attached `ElementInternals` instance.
 *
 * This mixin is only needed when other shared code needs access to a
 * component's `ElementInternals`, such as form-associated mixins.
 *
 * @param base The class to mix functionality into.
 * @return The provided class with `WithElementInternals` mixed in.
 */
function mixinElementInternals(base) {
    class WithElementInternalsElement extends base {
        get [internals]() {
            // Create internals in getter so that it can be used in methods called on
            // construction in `ReactiveElement`, such as `requestUpdate()`.
            if (!this[privateInternals]) {
                // Cast needed for closure
                this[privateInternals] = this.attachInternals();
            }
            return this[privateInternals];
        }
    }
    return WithElementInternalsElement;
}

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Sets up an element's constructor to enable form submission. The element
 * instance should be form associated and have a `type` property.
 *
 * A click listener is added to each element instance. If the click is not
 * default prevented, it will submit the element's form, if any.
 *
 * @example
 * ```ts
 * class MyElement extends mixinElementInternals(LitElement) {
 *   static {
 *     setupFormSubmitter(MyElement);
 *   }
 *
 *   static formAssociated = true;
 *
 *   type: FormSubmitterType = 'submit';
 * }
 * ```
 *
 * @param ctor The form submitter element's constructor.
 */
function setupFormSubmitter(ctor) {
    ctor.addInitializer((instance) => {
        const submitter = instance;
        submitter.addEventListener('click', async (event) => {
            const { type, [internals]: elementInternals } = submitter;
            const { form } = elementInternals;
            if (!form || type === 'button') {
                return;
            }
            // Wait a full task for event bubbling to complete.
            await new Promise((resolve) => {
                setTimeout(resolve);
            });
            if (event.defaultPrevented) {
                return;
            }
            if (type === 'reset') {
                form.reset();
                return;
            }
            // form.requestSubmit(submitter) does not work with form associated custom
            // elements. This patches the dispatched submit event to add the correct
            // `submitter`.
            // See https://github.com/WICG/webcomponents/issues/814
            form.addEventListener('submit', (submitEvent) => {
                Object.defineProperty(submitEvent, 'submitter', {
                    configurable: true,
                    enumerable: true,
                    get: () => submitter,
                });
            }, { capture: true, once: true });
            elementInternals.setFormValue(submitter.value);
            form.requestSubmit();
        });
    });
}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Dispatches a click event to the given element that triggers a native action,
 * but is not composed and therefore is not seen outside the element.
 *
 * This is useful for responding to an external click event on the host element
 * that should trigger an internal action like a button click.
 *
 * Note, a helper is provided because setting this up correctly is a bit tricky.
 * In particular, calling `click` on an element creates a composed event, which
 * is not desirable, and a manually dispatched event must specifically be a
 * `MouseEvent` to trigger a native action.
 *
 * @example
 * hostClickListener = (event: MouseEvent) {
 *   if (isActivationClick(event)) {
 *     this.dispatchActivationClick(this.buttonElement);
 *   }
 * }
 *
 */
function dispatchActivationClick(element) {
    const event = new MouseEvent('click', { bubbles: true });
    element.dispatchEvent(event);
    return event;
}
/**
 * Returns true if the click event should trigger an activation behavior. The
 * behavior is defined by the element and is whatever it should do when
 * clicked.
 *
 * Typically when an element needs to handle a click, the click is generated
 * from within the element and an event listener within the element implements
 * the needed behavior; however, it's possible to fire a click directly
 * at the element that the element should handle. This method helps
 * distinguish these "external" clicks.
 *
 * An "external" click can be triggered in a number of ways: via a click
 * on an associated label for a form  associated element, calling
 * `element.click()`, or calling
 * `element.dispatchEvent(new MouseEvent('click', ...))`.
 *
 * Also works around Firefox issue
 * https://bugzilla.mozilla.org/show_bug.cgi?id=1804576 by squelching
 * events for a microtask after called.
 *
 * @example
 * hostClickListener = (event: MouseEvent) {
 *   if (isActivationClick(event)) {
 *     this.dispatchActivationClick(this.buttonElement);
 *   }
 * }
 *
 */
function isActivationClick(event) {
    // Event must start at the event target.
    if (event.currentTarget !== event.target) {
        return false;
    }
    // Event must not be retargeted from shadowRoot.
    if (event.composedPath()[0] !== event.target) {
        return false;
    }
    // Target must not be disabled; this should only occur for a synthetically
    // dispatched click.
    if (event.target.disabled) {
        return false;
    }
    // This is an activation if the event should not be squelched.
    return !squelchEvent(event);
}
// TODO(https://bugzilla.mozilla.org/show_bug.cgi?id=1804576)
//  Remove when Firefox bug is addressed.
function squelchEvent(event) {
    const squelched = isSquelchingEvents;
    if (squelched) {
        event.preventDefault();
        event.stopImmediatePropagation();
    }
    squelchEventsForMicrotask();
    return squelched;
}
// Ignore events for one microtask only.
let isSquelchingEvents = false;
async function squelchEventsForMicrotask() {
    isSquelchingEvents = true;
    // Need to pause for just one microtask.
    // tslint:disable-next-line
    await null;
    isSquelchingEvents = false;
}

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Separate variable needed for closure.
const buttonBaseClass = mixinDelegatesAria(mixinElementInternals(ScopedElementsMixin(i$3)));
/**
 * A button component.
 */
class Button extends buttonBaseClass {
    get name() {
        return this.getAttribute('name') ?? '';
    }
    set name(name) {
        this.setAttribute('name', name);
    }
    /**
     * The associated form element with which this element's value will submit.
     */
    get form() {
        return this[internals].form;
    }
    constructor() {
        super();
        /**
         * Whether or not the button is disabled.
         */
        this.disabled = false;
        /**
         * Whether or not the button is "soft-disabled" (disabled but still
         * focusable).
         *
         * Use this when a button needs increased visibility when disabled. See
         * https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_disabled_controls
         * for more guidance on when this is needed.
         */
        this.softDisabled = false;
        /**
         * The URL that the link button points to.
         */
        this.href = '';
        /**
         * Where to display the linked `href` URL for a link button. Common options
         * include `_blank` to open in a new tab.
         */
        this.target = '';
        /**
         * Whether to render the icon at the inline end of the label rather than the
         * inline start.
         *
         * _Note:_ Link buttons cannot have trailing icons.
         */
        this.trailingIcon = false;
        /**
         * Whether to display the icon or not.
         */
        this.hasIcon = false;
        /**
         * The default behavior of the button. May be "button", "reset", or "submit"
         * (default).
         */
        this.type = 'submit';
        /**
         * The value added to a form with the button's name when the button submits a
         * form.
         */
        this.value = '';
        {
            this.addEventListener('click', this.handleClick.bind(this));
        }
    }
    focus() {
        this.buttonElement?.focus();
    }
    blur() {
        this.buttonElement?.blur();
    }
    render() {
        // Link buttons may not be disabled
        const isRippleDisabled = !this.href && (this.disabled || this.softDisabled);
        const buttonOrLink = this.href ? this.renderLink() : this.renderButton();
        // TODO(b/310046938): due to a limitation in focus ring/ripple, we can't use
        // the same ID for different elements, so we change the ID instead.
        const buttonId = this.href ? 'link' : 'button';
        return x `
      ${this.renderElevationOrOutline?.()}
      <div class="background"></div>
      <md-focus-ring part="focus-ring" for=${buttonId}></md-focus-ring>
      <md-ripple
        part="ripple"
        for=${buttonId}
        ?disabled="${isRippleDisabled}"></md-ripple>
      ${buttonOrLink}
    `;
    }
    renderButton() {
        // Needed for closure conformance
        const { ariaLabel, ariaHasPopup, ariaExpanded } = this;
        return x `<button
      id="button"
      class="button"
      ?disabled=${this.disabled}
      aria-disabled=${this.softDisabled || E}
      aria-label="${ariaLabel || E}"
      aria-haspopup="${ariaHasPopup || E}"
      aria-expanded="${ariaExpanded || E}">
      ${this.renderContent()}
    </button>`;
    }
    renderLink() {
        // Needed for closure conformance
        const { ariaLabel, ariaHasPopup, ariaExpanded } = this;
        return x `<a
      id="link"
      class="button"
      aria-label="${ariaLabel || E}"
      aria-haspopup="${ariaHasPopup || E}"
      aria-expanded="${ariaExpanded || E}"
      href=${this.href}
      target=${this.target || E}
      >${this.renderContent()}
    </a>`;
    }
    renderContent() {
        const icon = x `<slot
      name="icon"
      @slotchange="${this.handleSlotChange}"></slot>`;
        return x `
      <span class="touch"></span>
      ${this.trailingIcon ? E : icon}
      <span class="label"><slot></slot></span>
      ${this.trailingIcon ? icon : E}
    `;
    }
    handleClick(event) {
        // If the button is soft-disabled, we need to explicitly prevent the click
        // from propagating to other event listeners as well as prevent the default
        // action.
        if (!this.href && this.softDisabled) {
            event.stopImmediatePropagation();
            event.preventDefault();
            return;
        }
        if (!isActivationClick(event) || !this.buttonElement) {
            return;
        }
        this.focus();
        dispatchActivationClick(this.buttonElement);
    }
    handleSlotChange() {
        this.hasIcon = this.assignedIcons.length > 0;
    }
}
(() => {
    setupFormSubmitter(Button);
})();
/** @nocollapse */
Button.formAssociated = true;
/** @nocollapse */
Button.shadowRootOptions = {
    mode: 'open',
    delegatesFocus: true,
};
__decorate([
    n$3({ type: Boolean, reflect: true })
], Button.prototype, "disabled", void 0);
__decorate([
    n$3({ type: Boolean, attribute: 'soft-disabled', reflect: true })
], Button.prototype, "softDisabled", void 0);
__decorate([
    n$3()
], Button.prototype, "href", void 0);
__decorate([
    n$3()
], Button.prototype, "target", void 0);
__decorate([
    n$3({ type: Boolean, attribute: 'trailing-icon', reflect: true })
], Button.prototype, "trailingIcon", void 0);
__decorate([
    n$3({ type: Boolean, attribute: 'has-icon', reflect: true })
], Button.prototype, "hasIcon", void 0);
__decorate([
    n$3()
], Button.prototype, "type", void 0);
__decorate([
    n$3({ reflect: true })
], Button.prototype, "value", void 0);
__decorate([
    e$3('.button')
], Button.prototype, "buttonElement", void 0);
__decorate([
    o$2({ slot: 'icon', flatten: true })
], Button.prototype, "assignedIcons", void 0);

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const styles$j = i$5 `:host{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end);box-sizing:border-box;cursor:pointer;display:inline-flex;gap:8px;min-height:var(--_container-height);outline:none;padding-block:calc((var(--_container-height) - max(var(--_label-text-line-height),var(--_icon-size)))/2);padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space);place-content:center;place-items:center;position:relative;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);text-overflow:ellipsis;text-wrap:nowrap;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:top;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host(:is([disabled],[soft-disabled])){cursor:default;pointer-events:none}.button{border-radius:inherit;cursor:inherit;display:inline-flex;align-items:center;justify-content:center;border:none;outline:none;-webkit-appearance:none;vertical-align:middle;background:rgba(0,0,0,0);text-decoration:none;min-width:calc(64px - var(--_leading-space) - var(--_trailing-space));width:100%;z-index:0;height:100%;font:inherit;color:var(--_label-text-color);padding:0;gap:inherit;text-transform:inherit}.button::-moz-focus-inner{padding:0;border:0}:host(:hover) .button{color:var(--_hover-label-text-color)}:host(:focus-within) .button{color:var(--_focus-label-text-color)}:host(:active) .button{color:var(--_pressed-label-text-color)}.background{background-color:var(--_container-color);border-radius:inherit;inset:0;position:absolute}.label{overflow:hidden}:is(.button,.label,.label slot),.label ::slotted(*){text-overflow:inherit}:host(:is([disabled],[soft-disabled])) .label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}:host(:is([disabled],[soft-disabled])) .background{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}@media(forced-colors: active){.background{border:1px solid CanvasText}:host(:is([disabled],[soft-disabled])){--_disabled-icon-color: GrayText;--_disabled-icon-opacity: 1;--_disabled-container-opacity: 1;--_disabled-label-text-color: GrayText;--_disabled-label-text-opacity: 1}}:host([has-icon]:not([trailing-icon])){padding-inline-start:var(--_with-leading-icon-leading-space);padding-inline-end:var(--_with-leading-icon-trailing-space)}:host([has-icon][trailing-icon]){padding-inline-start:var(--_with-trailing-icon-leading-space);padding-inline-end:var(--_with-trailing-icon-trailing-space)}::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;flex-shrink:0;color:var(--_icon-color);font-size:var(--_icon-size);inline-size:var(--_icon-size);block-size:var(--_icon-size)}:host(:hover) ::slotted([slot=icon]){color:var(--_hover-icon-color)}:host(:focus-within) ::slotted([slot=icon]){color:var(--_focus-icon-color)}:host(:active) ::slotted([slot=icon]){color:var(--_pressed-icon-color)}:host(:is([disabled],[soft-disabled])) ::slotted([slot=icon]){color:var(--_disabled-icon-color);opacity:var(--_disabled-icon-opacity)}.touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}:host([touch-target=none]) .touch{display:none}
`;

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const styles$i = i$5 `:host{--_container-height: var(--md-text-button-container-height, 40px);--_disabled-label-text-color: var(--md-text-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-text-button-disabled-label-text-opacity, 0.38);--_focus-label-text-color: var(--md-text-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-text-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-text-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-text-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-text-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-text-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-text-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-text-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-text-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-label-text-color: var(--md-text-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color: var(--md-text-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-text-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-text-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-text-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-text-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-text-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-text-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-text-button-icon-size, 18px);--_pressed-icon-color: var(--md-text-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_container-shape-start-start: var(--md-text-button-container-shape-start-start, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-text-button-container-shape-start-end, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-text-button-container-shape-end-end, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-text-button-container-shape-end-start, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-text-button-leading-space, 12px);--_trailing-space: var(--md-text-button-trailing-space, 12px);--_with-leading-icon-leading-space: var(--md-text-button-with-leading-icon-leading-space, 12px);--_with-leading-icon-trailing-space: var(--md-text-button-with-leading-icon-trailing-space, 16px);--_with-trailing-icon-leading-space: var(--md-text-button-with-trailing-icon-leading-space, 16px);--_with-trailing-icon-trailing-space: var(--md-text-button-with-trailing-icon-trailing-space, 12px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0}
`;

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A key to retrieve an `Attachable` element's `AttachableController` from a
 * global `MutationObserver`.
 */
const ATTACHABLE_CONTROLLER = Symbol('attachableController');
let FOR_ATTRIBUTE_OBSERVER;
{
    /**
     * A global `MutationObserver` that reacts to `for` attribute changes on
     * `Attachable` elements. If the `for` attribute changes, the controller will
     * re-attach to the new referenced element.
     */
    FOR_ATTRIBUTE_OBSERVER = new MutationObserver((records) => {
        for (const record of records) {
            // When a control's `for` attribute changes, inform its
            // `AttachableController` to update to a new control.
            record.target[ATTACHABLE_CONTROLLER]?.hostConnected();
        }
    });
}
/**
 * A controller that provides an implementation for `Attachable` elements.
 *
 * @example
 * ```ts
 * class MyElement extends LitElement implements Attachable {
 *   get control() { return this.attachableController.control; }
 *
 *   private readonly attachableController = new AttachableController(
 *     this,
 *     (previousControl, newControl) => {
 *       previousControl?.removeEventListener('click', this.handleClick);
 *       newControl?.addEventListener('click', this.handleClick);
 *     }
 *   );
 *
 *   // Implement remaining `Attachable` properties/methods that call the
 *   // controller's properties/methods.
 * }
 * ```
 */
class AttachableController {
    get htmlFor() {
        return this.host.getAttribute('for');
    }
    set htmlFor(htmlFor) {
        if (htmlFor === null) {
            this.host.removeAttribute('for');
        }
        else {
            this.host.setAttribute('for', htmlFor);
        }
    }
    get control() {
        if (this.host.hasAttribute('for')) {
            if (!this.htmlFor || !this.host.isConnected) {
                return null;
            }
            return this.host.getRootNode().querySelector(`#${this.htmlFor}`);
        }
        return this.currentControl || this.host.parentElement;
    }
    set control(control) {
        if (control) {
            this.attach(control);
        }
        else {
            this.detach();
        }
    }
    /**
     * Creates a new controller for an `Attachable` element.
     *
     * @param host The `Attachable` element.
     * @param onControlChange A callback with two parameters for the previous and
     *     next control. An `Attachable` element may perform setup or teardown
     *     logic whenever the control changes.
     */
    constructor(host, onControlChange) {
        this.host = host;
        this.onControlChange = onControlChange;
        this.currentControl = null;
        host.addController(this);
        host[ATTACHABLE_CONTROLLER] = this;
        FOR_ATTRIBUTE_OBSERVER?.observe(host, { attributeFilter: ['for'] });
    }
    attach(control) {
        if (control === this.currentControl) {
            return;
        }
        this.setCurrentControl(control);
        // When imperatively attaching, remove the `for` attribute so
        // that the attached control is used instead of a referenced one.
        this.host.removeAttribute('for');
    }
    detach() {
        this.setCurrentControl(null);
        // When imperatively detaching, add an empty `for=""` attribute. This will
        // ensure the control is `null` rather than the `parentElement`.
        this.host.setAttribute('for', '');
    }
    /** @private */
    hostConnected() {
        this.setCurrentControl(this.control);
    }
    /** @private */
    hostDisconnected() {
        this.setCurrentControl(null);
    }
    setCurrentControl(control) {
        this.onControlChange(this.currentControl, control);
        this.currentControl = control;
    }
}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Events that the focus ring listens to.
 */
const EVENTS$1 = ['focusin', 'focusout', 'pointerdown'];
/**
 * A focus ring component.
 *
 * @fires visibility-changed {Event} Fired whenever `visible` changes.
 */
class FocusRing extends i$3 {
    constructor() {
        super(...arguments);
        /**
         * Makes the focus ring visible.
         */
        this.visible = false;
        /**
         * Makes the focus ring animate inwards instead of outwards.
         */
        this.inward = false;
        this.attachableController = new AttachableController(this, this.onControlChange.bind(this));
    }
    get htmlFor() {
        return this.attachableController.htmlFor;
    }
    set htmlFor(htmlFor) {
        this.attachableController.htmlFor = htmlFor;
    }
    get control() {
        return this.attachableController.control;
    }
    set control(control) {
        this.attachableController.control = control;
    }
    attach(control) {
        this.attachableController.attach(control);
    }
    detach() {
        this.attachableController.detach();
    }
    connectedCallback() {
        super.connectedCallback();
        // Needed for VoiceOver, which will create a "group" if the element is a
        // sibling to other content.
        this.setAttribute('aria-hidden', 'true');
    }
    /** @private */
    handleEvent(event) {
        if (event[HANDLED_BY_FOCUS_RING]) {
            // This ensures the focus ring does not activate when multiple focus rings
            // are used within a single component.
            return;
        }
        switch (event.type) {
            default:
                return;
            case 'focusin':
                this.visible = this.control?.matches(':focus-visible') ?? false;
                break;
            case 'focusout':
            case 'pointerdown':
                this.visible = false;
                break;
        }
        event[HANDLED_BY_FOCUS_RING] = true;
    }
    onControlChange(prev, next) {
        for (const event of EVENTS$1) {
            prev?.removeEventListener(event, this);
            next?.addEventListener(event, this);
        }
    }
    update(changed) {
        if (changed.has('visible')) {
            // This logic can be removed once the `:has` selector has been introduced
            // to Firefox. This is necessary to allow correct submenu styles.
            this.dispatchEvent(new Event('visibility-changed'));
        }
        super.update(changed);
    }
}
__decorate([
    n$3({ type: Boolean, reflect: true })
], FocusRing.prototype, "visible", void 0);
__decorate([
    n$3({ type: Boolean, reflect: true })
], FocusRing.prototype, "inward", void 0);
const HANDLED_BY_FOCUS_RING = Symbol('handledByFocusRing');

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const styles$h = i$5 `:host{animation-delay:0s,calc(var(--md-focus-ring-duration, 600ms)*.25);animation-duration:calc(var(--md-focus-ring-duration, 600ms)*.25),calc(var(--md-focus-ring-duration, 600ms)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));inset:calc(-1*var(--md-focus-ring-outward-offset, 2px));outline:var(--md-focus-ring-width, 3px) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border:var(--md-focus-ring-width, 3px) solid currentColor;inset:var(--md-focus-ring-inward-offset, 0px)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes outward-shrink{from{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-shrink{from{border-width:var(--md-focus-ring-active-width, 8px)}}@media(prefers-reduced-motion){:host{animation:none}}
`;

class MdFocusRing extends FocusRing {
}
MdFocusRing.styles = [styles$h];

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const PRESS_GROW_MS = 450;
const MINIMUM_PRESS_MS = 225;
const INITIAL_ORIGIN_SCALE = 0.2;
const PADDING = 10;
const SOFT_EDGE_MINIMUM_SIZE = 75;
const SOFT_EDGE_CONTAINER_RATIO = 0.35;
const PRESS_PSEUDO = '::after';
const ANIMATION_FILL = 'forwards';
/**
 * Interaction states for the ripple.
 *
 * On Touch:
 *  - `INACTIVE -> TOUCH_DELAY -> WAITING_FOR_CLICK -> INACTIVE`
 *  - `INACTIVE -> TOUCH_DELAY -> HOLDING -> WAITING_FOR_CLICK -> INACTIVE`
 *
 * On Mouse or Pen:
 *   - `INACTIVE -> WAITING_FOR_CLICK -> INACTIVE`
 */
var State;
(function (State) {
    /**
     * Initial state of the control, no touch in progress.
     *
     * Transitions:
     *   - on touch down: transition to `TOUCH_DELAY`.
     *   - on mouse down: transition to `WAITING_FOR_CLICK`.
     */
    State[State["INACTIVE"] = 0] = "INACTIVE";
    /**
     * Touch down has been received, waiting to determine if it's a swipe or
     * scroll.
     *
     * Transitions:
     *   - on touch up: begin press; transition to `WAITING_FOR_CLICK`.
     *   - on cancel: transition to `INACTIVE`.
     *   - after `TOUCH_DELAY_MS`: begin press; transition to `HOLDING`.
     */
    State[State["TOUCH_DELAY"] = 1] = "TOUCH_DELAY";
    /**
     * A touch has been deemed to be a press
     *
     * Transitions:
     *  - on up: transition to `WAITING_FOR_CLICK`.
     */
    State[State["HOLDING"] = 2] = "HOLDING";
    /**
     * The user touch has finished, transition into rest state.
     *
     * Transitions:
     *   - on click end press; transition to `INACTIVE`.
     */
    State[State["WAITING_FOR_CLICK"] = 3] = "WAITING_FOR_CLICK";
})(State || (State = {}));
/**
 * Events that the ripple listens to.
 */
const EVENTS = [
    'click',
    'contextmenu',
    'pointercancel',
    'pointerdown',
    'pointerenter',
    'pointerleave',
    'pointerup',
];
/**
 * Delay reacting to touch so that we do not show the ripple for a swipe or
 * scroll interaction.
 */
const TOUCH_DELAY_MS = 150;
/**
 * Used to detect if HCM is active. Events do not process during HCM when the
 * ripple is not displayed.
 */
const FORCED_COLORS = window.matchMedia('(forced-colors: active)');
/**
 * A ripple component.
 */
class Ripple extends i$3 {
    constructor() {
        super(...arguments);
        /**
         * Disables the ripple.
         */
        this.disabled = false;
        this.hovered = false;
        this.pressed = false;
        this.rippleSize = '';
        this.rippleScale = '';
        this.initialSize = 0;
        this.state = State.INACTIVE;
        this.checkBoundsAfterContextMenu = false;
        this.attachableController = new AttachableController(this, this.onControlChange.bind(this));
    }
    get htmlFor() {
        return this.attachableController.htmlFor;
    }
    set htmlFor(htmlFor) {
        this.attachableController.htmlFor = htmlFor;
    }
    get control() {
        return this.attachableController.control;
    }
    set control(control) {
        this.attachableController.control = control;
    }
    attach(control) {
        this.attachableController.attach(control);
    }
    detach() {
        this.attachableController.detach();
    }
    connectedCallback() {
        super.connectedCallback();
        // Needed for VoiceOver, which will create a "group" if the element is a
        // sibling to other content.
        this.setAttribute('aria-hidden', 'true');
    }
    render() {
        const classes = {
            'hovered': this.hovered,
            'pressed': this.pressed,
        };
        return x `<div class="surface ${e(classes)}"></div>`;
    }
    update(changedProps) {
        if (changedProps.has('disabled') && this.disabled) {
            this.hovered = false;
            this.pressed = false;
        }
        super.update(changedProps);
    }
    /**
     * TODO(b/269799771): make private
     * @private only public for slider
     */
    handlePointerenter(event) {
        if (!this.shouldReactToEvent(event)) {
            return;
        }
        this.hovered = true;
    }
    /**
     * TODO(b/269799771): make private
     * @private only public for slider
     */
    handlePointerleave(event) {
        if (!this.shouldReactToEvent(event)) {
            return;
        }
        this.hovered = false;
        // release a held mouse or pen press that moves outside the element
        if (this.state !== State.INACTIVE) {
            this.endPressAnimation();
        }
    }
    handlePointerup(event) {
        if (!this.shouldReactToEvent(event)) {
            return;
        }
        if (this.state === State.HOLDING) {
            this.state = State.WAITING_FOR_CLICK;
            return;
        }
        if (this.state === State.TOUCH_DELAY) {
            this.state = State.WAITING_FOR_CLICK;
            this.startPressAnimation(this.rippleStartEvent);
            return;
        }
    }
    async handlePointerdown(event) {
        if (!this.shouldReactToEvent(event)) {
            return;
        }
        this.rippleStartEvent = event;
        if (!this.isTouch(event)) {
            this.state = State.WAITING_FOR_CLICK;
            this.startPressAnimation(event);
            return;
        }
        // after a longpress contextmenu event, an extra `pointerdown` can be
        // dispatched to the pressed element. Check that the down is within
        // bounds of the element in this case.
        if (this.checkBoundsAfterContextMenu && !this.inBounds(event)) {
            return;
        }
        this.checkBoundsAfterContextMenu = false;
        // Wait for a hold after touch delay
        this.state = State.TOUCH_DELAY;
        await new Promise((resolve) => {
            setTimeout(resolve, TOUCH_DELAY_MS);
        });
        if (this.state !== State.TOUCH_DELAY) {
            return;
        }
        this.state = State.HOLDING;
        this.startPressAnimation(event);
    }
    handleClick() {
        // Click is a MouseEvent in Firefox and Safari, so we cannot use
        // `shouldReactToEvent`
        if (this.disabled) {
            return;
        }
        if (this.state === State.WAITING_FOR_CLICK) {
            this.endPressAnimation();
            return;
        }
        if (this.state === State.INACTIVE) {
            // keyboard synthesized click event
            this.startPressAnimation();
            this.endPressAnimation();
        }
    }
    handlePointercancel(event) {
        if (!this.shouldReactToEvent(event)) {
            return;
        }
        this.endPressAnimation();
    }
    handleContextmenu() {
        if (this.disabled) {
            return;
        }
        this.checkBoundsAfterContextMenu = true;
        this.endPressAnimation();
    }
    determineRippleSize() {
        const { height, width } = this.getBoundingClientRect();
        const maxDim = Math.max(height, width);
        const softEdgeSize = Math.max(SOFT_EDGE_CONTAINER_RATIO * maxDim, SOFT_EDGE_MINIMUM_SIZE);
        const initialSize = Math.floor(maxDim * INITIAL_ORIGIN_SCALE);
        const hypotenuse = Math.sqrt(width ** 2 + height ** 2);
        const maxRadius = hypotenuse + PADDING;
        this.initialSize = initialSize;
        this.rippleScale = `${(maxRadius + softEdgeSize) / initialSize}`;
        this.rippleSize = `${initialSize}px`;
    }
    getNormalizedPointerEventCoords(pointerEvent) {
        const { scrollX, scrollY } = window;
        const { left, top } = this.getBoundingClientRect();
        const documentX = scrollX + left;
        const documentY = scrollY + top;
        const { pageX, pageY } = pointerEvent;
        return { x: pageX - documentX, y: pageY - documentY };
    }
    getTranslationCoordinates(positionEvent) {
        const { height, width } = this.getBoundingClientRect();
        // end in the center
        const endPoint = {
            x: (width - this.initialSize) / 2,
            y: (height - this.initialSize) / 2,
        };
        let startPoint;
        if (positionEvent instanceof PointerEvent) {
            startPoint = this.getNormalizedPointerEventCoords(positionEvent);
        }
        else {
            startPoint = {
                x: width / 2,
                y: height / 2,
            };
        }
        // center around start point
        startPoint = {
            x: startPoint.x - this.initialSize / 2,
            y: startPoint.y - this.initialSize / 2,
        };
        return { startPoint, endPoint };
    }
    startPressAnimation(positionEvent) {
        if (!this.mdRoot) {
            return;
        }
        this.pressed = true;
        this.growAnimation?.cancel();
        this.determineRippleSize();
        const { startPoint, endPoint } = this.getTranslationCoordinates(positionEvent);
        const translateStart = `${startPoint.x}px, ${startPoint.y}px`;
        const translateEnd = `${endPoint.x}px, ${endPoint.y}px`;
        this.growAnimation = this.mdRoot.animate({
            top: [0, 0],
            left: [0, 0],
            height: [this.rippleSize, this.rippleSize],
            width: [this.rippleSize, this.rippleSize],
            transform: [
                `translate(${translateStart}) scale(1)`,
                `translate(${translateEnd}) scale(${this.rippleScale})`,
            ],
        }, {
            pseudoElement: PRESS_PSEUDO,
            duration: PRESS_GROW_MS,
            easing: EASING.STANDARD,
            fill: ANIMATION_FILL,
        });
    }
    async endPressAnimation() {
        this.rippleStartEvent = undefined;
        this.state = State.INACTIVE;
        const animation = this.growAnimation;
        let pressAnimationPlayState = Infinity;
        if (typeof animation?.currentTime === 'number') {
            pressAnimationPlayState = animation.currentTime;
        }
        else if (animation?.currentTime) {
            pressAnimationPlayState = animation.currentTime.to('ms').value;
        }
        if (pressAnimationPlayState >= MINIMUM_PRESS_MS) {
            this.pressed = false;
            return;
        }
        await new Promise((resolve) => {
            setTimeout(resolve, MINIMUM_PRESS_MS - pressAnimationPlayState);
        });
        if (this.growAnimation !== animation) {
            // A new press animation was started. The old animation was canceled and
            // should not finish the pressed state.
            return;
        }
        this.pressed = false;
    }
    /**
     * Returns `true` if
     *  - the ripple element is enabled
     *  - the pointer is primary for the input type
     *  - the pointer is the pointer that started the interaction, or will start
     * the interaction
     *  - the pointer is a touch, or the pointer state has the primary button
     * held, or the pointer is hovering
     */
    shouldReactToEvent(event) {
        if (this.disabled || !event.isPrimary) {
            return false;
        }
        if (this.rippleStartEvent &&
            this.rippleStartEvent.pointerId !== event.pointerId) {
            return false;
        }
        if (event.type === 'pointerenter' || event.type === 'pointerleave') {
            return !this.isTouch(event);
        }
        const isPrimaryButton = event.buttons === 1;
        return this.isTouch(event) || isPrimaryButton;
    }
    /**
     * Check if the event is within the bounds of the element.
     *
     * This is only needed for the "stuck" contextmenu longpress on Chrome.
     */
    inBounds({ x, y }) {
        const { top, left, bottom, right } = this.getBoundingClientRect();
        return x >= left && x <= right && y >= top && y <= bottom;
    }
    isTouch({ pointerType }) {
        return pointerType === 'touch';
    }
    /** @private */
    async handleEvent(event) {
        if (FORCED_COLORS?.matches) {
            // Skip event logic since the ripple is `display: none`.
            return;
        }
        switch (event.type) {
            case 'click':
                this.handleClick();
                break;
            case 'contextmenu':
                this.handleContextmenu();
                break;
            case 'pointercancel':
                this.handlePointercancel(event);
                break;
            case 'pointerdown':
                await this.handlePointerdown(event);
                break;
            case 'pointerenter':
                this.handlePointerenter(event);
                break;
            case 'pointerleave':
                this.handlePointerleave(event);
                break;
            case 'pointerup':
                this.handlePointerup(event);
                break;
        }
    }
    onControlChange(prev, next) {
        for (const event of EVENTS) {
            prev?.removeEventListener(event, this);
            next?.addEventListener(event, this);
        }
    }
}
__decorate([
    n$3({ type: Boolean, reflect: true })
], Ripple.prototype, "disabled", void 0);
__decorate([
    r$1()
], Ripple.prototype, "hovered", void 0);
__decorate([
    r$1()
], Ripple.prototype, "pressed", void 0);
__decorate([
    e$3('.surface')
], Ripple.prototype, "mdRoot", void 0);

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const styles$g = i$5 `:host{display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media(forced-colors: active){:host{display:none}}:host,.surface{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side, var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20)) max(100% - 70px, 65%), transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-ripple-hover-opacity, 0.08)}.pressed::after{opacity:var(--md-ripple-pressed-opacity, 0.12);transition-duration:105ms}
`;

class MdRipple extends Ripple {
}
MdRipple.styles = [styles$g];

/**
 * @summary Buttons help people take action, such as sending an email, sharing a
 * document, or liking a comment.
 *
 * @description
 * __Emphasis:__ Low emphasis – For optional or supplementary actions with the
 * least amount of prominence
 *
 * __Rationale:__ Text buttons have less visual prominence, so should be used
 * for low emphasis actions, such as an alternative option.
 *
 * __Example usages:__
 * - Learn more
 * - View all
 * - Change account
 * - Turn on
 *
 * @final
 * @suppress {visibility}
 */
class MdTextButton extends Button {
}
MdTextButton.scopedElements = {
    'md-focus-ring': MdFocusRing,
    'md-ripple': MdRipple,
};
MdTextButton.styles = [styles$j, styles$i];

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A component for elevation.
 */
class Elevation extends i$3 {
    connectedCallback() {
        super.connectedCallback();
        // Needed for VoiceOver, which will create a "group" if the element is a
        // sibling to other content.
        this.setAttribute('aria-hidden', 'true');
    }
    render() {
        return x `<span class="shadow"></span>`;
    }
}

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const styles$f = i$5 `:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-property:inherit;transition-timing-function:inherit}:host{display:flex;pointer-events:none;transition-property:box-shadow,opacity}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity;--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000))}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}
`;

class MdElevation extends Elevation {
}
MdElevation.styles = [styles$f];

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const n$1="important",i$1=" !"+n$1,o$1=e$1(class extends i$2{constructor(t$1){if(super(t$1),t$1.type!==t.ATTRIBUTE||"style"!==t$1.name||t$1.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,r)=>{const s=t[r];return null==s?e:e+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(e,[r]){const{style:s}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(r)),this.render(r);for(const t of this.ft)null==r[t]&&(this.ft.delete(t),t.includes("-")?s.removeProperty(t):s[t]=null);for(const t in r){const e=r[t];if(null!=e){this.ft.add(t);const r="string"==typeof e&&e.endsWith(i$1);t.includes("-")||r?s.setProperty(t,r?e.slice(0,-11):e,r?n$1:""):s[t]=e;}}return T}});

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Activates the first non-disabled item of a given array of items.
 *
 * @param items {Array<ListItem>} The items from which to activate the
 *     first item.
 * @param isActivatable Function to determine if an item can be  activated.
 *     Defaults to non-disabled items.
 */
function activateFirstItem(items, isActivatable = (isItemNotDisabled)) {
    // NOTE: These selector functions are static and not on the instance such
    // that multiple operations can be chained and we do not have to re-query
    // the DOM
    const firstItem = getFirstActivatableItem(items, isActivatable);
    if (firstItem) {
        firstItem.tabIndex = 0;
        firstItem.focus();
    }
    return firstItem;
}
/**
 * Activates the last non-disabled item of a given array of items.
 *
 * @param items {Array<ListItem>} The items from which to activate the
 *     last item.
 * @param isActivatable Function to determine if an item can be  activated.
 *     Defaults to non-disabled items.
 * @nocollapse
 */
function activateLastItem(items, isActivatable = (isItemNotDisabled)) {
    const lastItem = getLastActivatableItem(items, isActivatable);
    if (lastItem) {
        lastItem.tabIndex = 0;
        lastItem.focus();
    }
    return lastItem;
}
/**
 * Retrieves the first activated item of a given array of items.
 *
 * @param items {Array<ListItem>} The items to search.
 * @param isActivatable Function to determine if an item can be  activated.
 *     Defaults to non-disabled items.
 * @return A record of the first activated item including the item and the
 *     index of the item or `null` if none are activated.
 * @nocollapse
 */
function getActiveItem(items, isActivatable = (isItemNotDisabled)) {
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item.tabIndex === 0 && isActivatable(item)) {
            return {
                item,
                index: i,
            };
        }
    }
    return null;
}
/**
 * Retrieves the first non-disabled item of a given array of items. This
 * the first item that is not disabled.
 *
 * @param items {Array<ListItem>} The items to search.
 * @param isActivatable Function to determine if an item can be  activated.
 *     Defaults to non-disabled items.
 * @return The first activatable item or `null` if none are activatable.
 * @nocollapse
 */
function getFirstActivatableItem(items, isActivatable = (isItemNotDisabled)) {
    for (const item of items) {
        if (isActivatable(item)) {
            return item;
        }
    }
    return null;
}
/**
 * Retrieves the last non-disabled item of a given array of items.
 *
 * @param items {Array<ListItem>} The items to search.
 * @param isActivatable Function to determine if an item can be  activated.
 *     Defaults to non-disabled items.
 * @return The last activatable item or `null` if none are activatable.
 * @nocollapse
 */
function getLastActivatableItem(items, isActivatable = (isItemNotDisabled)) {
    for (let i = items.length - 1; i >= 0; i--) {
        const item = items[i];
        if (isActivatable(item)) {
            return item;
        }
    }
    return null;
}
/**
 * Retrieves the next non-disabled item of a given array of items.
 *
 * @param items {Array<ListItem>} The items to search.
 * @param index {{index: number}} The index to search from.
 * @param isActivatable Function to determine if an item can be  activated.
 *     Defaults to non-disabled items.
 * @param wrap If true, then the next item at the end of the list is the first
 *     item. Defaults to true.
 * @return The next activatable item or `null` if none are activatable.
 */
function getNextItem(items, index, isActivatable = (isItemNotDisabled), wrap = true) {
    for (let i = 1; i < items.length; i++) {
        const nextIndex = (i + index) % items.length;
        if (nextIndex < index && !wrap) {
            // Return if the index loops back to the beginning and not wrapping.
            return null;
        }
        const item = items[nextIndex];
        if (isActivatable(item)) {
            return item;
        }
    }
    return items[index] ? items[index] : null;
}
/**
 * Retrieves the previous non-disabled item of a given array of items.
 *
 * @param items {Array<ListItem>} The items to search.
 * @param index {{index: number}} The index to search from.
 * @param isActivatable Function to determine if an item can be  activated.
 *     Defaults to non-disabled items.
 * @param wrap If true, then the previous item at the beginning of the list is
 *     the last item. Defaults to true.
 * @return The previous activatable item or `null` if none are activatable.
 */
function getPrevItem(items, index, isActivatable = (isItemNotDisabled), wrap = true) {
    for (let i = 1; i < items.length; i++) {
        const prevIndex = (index - i + items.length) % items.length;
        if (prevIndex > index && !wrap) {
            // Return if the index loops back to the end and not wrapping.
            return null;
        }
        const item = items[prevIndex];
        if (isActivatable(item)) {
            return item;
        }
    }
    return items[index] ? items[index] : null;
}
/**
 * Activates the next item and focuses it. If nothing is currently activated,
 * activates the first item.
 */
function activateNextItem(items, activeItemRecord, isActivatable = (isItemNotDisabled), wrap = true) {
    if (activeItemRecord) {
        const next = getNextItem(items, activeItemRecord.index, isActivatable, wrap);
        if (next) {
            next.tabIndex = 0;
            next.focus();
        }
        return next;
    }
    else {
        return activateFirstItem(items, isActivatable);
    }
}
/**
 * Activates the previous item and focuses it. If nothing is currently
 * activated, activates the last item.
 */
function activatePreviousItem(items, activeItemRecord, isActivatable = (isItemNotDisabled), wrap = true) {
    if (activeItemRecord) {
        const prev = getPrevItem(items, activeItemRecord.index, isActivatable, wrap);
        if (prev) {
            prev.tabIndex = 0;
            prev.focus();
        }
        return prev;
    }
    else {
        return activateLastItem(items, isActivatable);
    }
}
/**
 * Creates an event that requests the menu to set `tabindex=0` on the item and
 * focus it. We use this pattern because List keeps track of what element is
 * active in the List by maintaining tabindex. We do not want list items
 * to set tabindex on themselves or focus themselves so that we can organize all
 * that logic in the parent List and Menus, and list item stays as dumb as
 * possible.
 */
function createRequestActivationEvent() {
    return new Event('request-activation', { bubbles: true, composed: true });
}
/**
 * The default `isActivatable` function, which checks if an item is not
 * disabled.
 *
 * @param item The item to check.
 * @return true if `item.disabled` is `false.
 */
function isItemNotDisabled(item) {
    return !item.disabled;
}

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// TODO: move this file to List and make List use this
/**
 * Default keys that trigger navigation.
 */
// tslint:disable:enforce-name-casing Following Enum style
const NavigableKeys = {
    ArrowDown: 'ArrowDown',
    ArrowLeft: 'ArrowLeft',
    ArrowUp: 'ArrowUp',
    ArrowRight: 'ArrowRight',
    Home: 'Home',
    End: 'End',
};
/**
 * A controller that handles list keyboard navigation and item management.
 */
class ListController {
    constructor(config) {
        /**
         * Handles keyboard navigation. Should be bound to the node that will act as
         * the List.
         */
        this.handleKeydown = (event) => {
            const key = event.key;
            if (event.defaultPrevented || !this.isNavigableKey(key)) {
                return;
            }
            // do not use this.items directly in upcoming calculations so we don't
            // re-query the DOM unnecessarily
            const items = this.items;
            if (!items.length) {
                return;
            }
            const activeItemRecord = getActiveItem(items, this.isActivatable);
            event.preventDefault();
            const isRtl = this.isRtl();
            const inlinePrevious = isRtl
                ? NavigableKeys.ArrowRight
                : NavigableKeys.ArrowLeft;
            const inlineNext = isRtl
                ? NavigableKeys.ArrowLeft
                : NavigableKeys.ArrowRight;
            let nextActiveItem = null;
            switch (key) {
                // Activate the next item
                case NavigableKeys.ArrowDown:
                case inlineNext:
                    nextActiveItem = activateNextItem(items, activeItemRecord, this.isActivatable, this.wrapNavigation());
                    break;
                // Activate the previous item
                case NavigableKeys.ArrowUp:
                case inlinePrevious:
                    nextActiveItem = activatePreviousItem(items, activeItemRecord, this.isActivatable, this.wrapNavigation());
                    break;
                // Activate the first item
                case NavigableKeys.Home:
                    nextActiveItem = activateFirstItem(items, this.isActivatable);
                    break;
                // Activate the last item
                case NavigableKeys.End:
                    nextActiveItem = activateLastItem(items, this.isActivatable);
                    break;
            }
            if (nextActiveItem &&
                activeItemRecord &&
                activeItemRecord.item !== nextActiveItem) {
                // If a new item was activated, remove the tabindex of the previous
                // activated item.
                activeItemRecord.item.tabIndex = -1;
            }
        };
        /**
         * Listener to be bound to the `deactivate-items` item event.
         */
        this.onDeactivateItems = () => {
            const items = this.items;
            for (const item of items) {
                this.deactivateItem(item);
            }
        };
        /**
         * Listener to be bound to the `request-activation` item event..
         */
        this.onRequestActivation = (event) => {
            this.onDeactivateItems();
            const target = event.target;
            this.activateItem(target);
            target.focus();
        };
        /**
         * Listener to be bound to the `slotchange` event for the slot that renders
         * the items.
         */
        this.onSlotchange = () => {
            const items = this.items;
            // Whether we have encountered an item that has been activated
            let encounteredActivated = false;
            for (const item of items) {
                const isActivated = !item.disabled && item.tabIndex > -1;
                if (isActivated && !encounteredActivated) {
                    encounteredActivated = true;
                    item.tabIndex = 0;
                    continue;
                }
                // Deactivate the rest including disabled
                item.tabIndex = -1;
            }
            if (encounteredActivated) {
                return;
            }
            const firstActivatableItem = getFirstActivatableItem(items, this.isActivatable);
            if (!firstActivatableItem) {
                return;
            }
            firstActivatableItem.tabIndex = 0;
        };
        const { isItem, getPossibleItems, isRtl, deactivateItem, activateItem, isNavigableKey, isActivatable, wrapNavigation, } = config;
        this.isItem = isItem;
        this.getPossibleItems = getPossibleItems;
        this.isRtl = isRtl;
        this.deactivateItem = deactivateItem;
        this.activateItem = activateItem;
        this.isNavigableKey = isNavigableKey;
        this.isActivatable = isActivatable;
        this.wrapNavigation = wrapNavigation ?? (() => true);
    }
    /**
     * The items being managed by the list. Additionally, attempts to see if the
     * object has a sub-item in the `.item` property.
     */
    get items() {
        const maybeItems = this.getPossibleItems();
        const items = [];
        for (const itemOrParent of maybeItems) {
            const isItem = this.isItem(itemOrParent);
            // if the item is a list item, add it to the list of items
            if (isItem) {
                items.push(itemOrParent);
                continue;
            }
            // If the item exposes an `item` property check if it is a list item.
            const subItem = itemOrParent.item;
            if (subItem && this.isItem(subItem)) {
                items.push(subItem);
            }
        }
        return items;
    }
    /**
     * Activates the next item in the list. If at the end of the list, the first
     * item will be activated.
     *
     * @return The activated list item or `null` if there are no items.
     */
    activateNextItem() {
        const items = this.items;
        const activeItemRecord = getActiveItem(items, this.isActivatable);
        if (activeItemRecord) {
            activeItemRecord.item.tabIndex = -1;
        }
        return activateNextItem(items, activeItemRecord, this.isActivatable, this.wrapNavigation());
    }
    /**
     * Activates the previous item in the list. If at the start of the list, the
     * last item will be activated.
     *
     * @return The activated list item or `null` if there are no items.
     */
    activatePreviousItem() {
        const items = this.items;
        const activeItemRecord = getActiveItem(items, this.isActivatable);
        if (activeItemRecord) {
            activeItemRecord.item.tabIndex = -1;
        }
        return activatePreviousItem(items, activeItemRecord, this.isActivatable, this.wrapNavigation());
    }
}

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Creates an event that closes any parent menus.
 */
function createCloseMenuEvent(initiator, reason) {
    return new CustomEvent('close-menu', {
        bubbles: true,
        composed: true,
        detail: { initiator, reason, itemPath: [initiator] },
    });
}
/**
 * Creates a default close menu event used by md-menu.
 */
const createDefaultCloseMenuEvent = (createCloseMenuEvent);
/**
 * Keys that are used for selection in menus.
 */
// tslint:disable-next-line:enforce-name-casing We are mimicking enum style
const SelectionKey = {
    SPACE: 'Space',
    ENTER: 'Enter',
};
/**
 * Default close `Reason` kind values.
 */
// tslint:disable-next-line:enforce-name-casing We are mimicking enum style
const CloseReason = {
    CLICK_SELECTION: 'click-selection',
    KEYDOWN: 'keydown',
};
/**
 * Keys that can close menus.
 */
// tslint:disable-next-line:enforce-name-casing We are mimicking enum style
const KeydownCloseKey = {
    ESCAPE: 'Escape',
    SPACE: SelectionKey.SPACE,
    ENTER: SelectionKey.ENTER,
};
/**
 * Determines whether the given key code is a key code that should close the
 * menu.
 *
 * @param code The KeyboardEvent code to check.
 * @return Whether or not the key code is in the predetermined list to close the
 * menu.
 */
function isClosableKey(code) {
    return Object.values(KeydownCloseKey).some((value) => value === code);
}
/**
 * Determines whether a target element is contained inside another element's
 * composed tree.
 *
 * @param target The potential contained element.
 * @param container The potential containing element of the target.
 * @returns Whether the target element is contained inside the container's
 * composed subtree
 */
function isElementInSubtree(target, container) {
    // Dispatch a composed, bubbling event to check its path to see if the
    // newly-focused element is contained in container's subtree
    const focusEv = new Event('md-contains', { bubbles: true, composed: true });
    let composedPath = [];
    const listener = (ev) => {
        composedPath = ev.composedPath();
    };
    container.addEventListener('md-contains', listener);
    target.dispatchEvent(focusEv);
    container.removeEventListener('md-contains', listener);
    const isContained = composedPath.length > 0;
    return isContained;
}
/**
 * Element to focus on when menu is first opened.
 */
// tslint:disable-next-line:enforce-name-casing We are mimicking enum style
const FocusState = {
    NONE: 'none',
    LIST_ROOT: 'list-root',
    FIRST_ITEM: 'first-item',
    LAST_ITEM: 'last-item',
};

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * An enum of supported Menu corners
 */
// tslint:disable-next-line:enforce-name-casing We are mimicking enum style
const Corner = {
    END_START: 'end-start',
    END_END: 'end-end',
    START_START: 'start-start',
    START_END: 'start-end',
};
/**
 * Given a surface, an anchor, corners, and some options, this surface will
 * calculate the position of a surface to align the two given corners and keep
 * the surface inside the window viewport. It also provides a StyleInfo map that
 * can be applied to the surface to handle visiblility and position.
 */
class SurfacePositionController {
    /**
     * @param host The host to connect the controller to.
     * @param getProperties A function that returns the properties for the
     * controller.
     */
    constructor(host, getProperties) {
        this.host = host;
        this.getProperties = getProperties;
        // The current styles to apply to the surface.
        this.surfaceStylesInternal = {
            'display': 'none',
        };
        // Previous values stored for change detection. Open change detection is
        // calculated separately so initialize it here.
        this.lastValues = {
            isOpen: false,
        };
        this.host.addController(this);
    }
    /**
     * The StyleInfo map to apply to the surface via Lit's stylemap
     */
    get surfaceStyles() {
        return this.surfaceStylesInternal;
    }
    /**
     * Calculates the surface's new position required so that the surface's
     * `surfaceCorner` aligns to the anchor's `anchorCorner` while keeping the
     * surface inside the window viewport. This positioning also respects RTL by
     * checking `getComputedStyle()` on the surface element.
     */
    async position() {
        const { surfaceEl, anchorEl, anchorCorner: anchorCornerRaw, surfaceCorner: surfaceCornerRaw, positioning, xOffset, yOffset, disableBlockFlip, disableInlineFlip, repositionStrategy, } = this.getProperties();
        const anchorCorner = anchorCornerRaw.toLowerCase().trim();
        const surfaceCorner = surfaceCornerRaw.toLowerCase().trim();
        if (!surfaceEl || !anchorEl) {
            return;
        }
        // Store these before we potentially resize the window with the next set of
        // lines
        const windowInnerWidth = window.innerWidth;
        const windowInnerHeight = window.innerHeight;
        const div = document.createElement('div');
        div.style.opacity = '0';
        div.style.position = 'fixed';
        div.style.display = 'block';
        div.style.inset = '0';
        document.body.appendChild(div);
        const scrollbarTestRect = div.getBoundingClientRect();
        div.remove();
        // Calculate the widths of the scrollbars in the inline and block directions
        // to account for window-relative calculations.
        const blockScrollbarHeight = window.innerHeight - scrollbarTestRect.bottom;
        const inlineScrollbarWidth = window.innerWidth - scrollbarTestRect.right;
        // Paint the surface transparently so that we can get the position and the
        // rect info of the surface.
        this.surfaceStylesInternal = {
            'display': 'block',
            'opacity': '0',
        };
        // Wait for it to be visible.
        this.host.requestUpdate();
        await this.host.updateComplete;
        // Safari has a bug that makes popovers render incorrectly if the node is
        // made visible + Animation Frame before calling showPopover().
        // https://bugs.webkit.org/show_bug.cgi?id=264069
        // also the cast is required due to differing TS types in Google and OSS.
        if (surfaceEl.popover &&
            surfaceEl.isConnected) {
            surfaceEl.showPopover();
        }
        const surfaceRect = surfaceEl.getSurfacePositionClientRect
            ? surfaceEl.getSurfacePositionClientRect()
            : surfaceEl.getBoundingClientRect();
        const anchorRect = anchorEl.getSurfacePositionClientRect
            ? anchorEl.getSurfacePositionClientRect()
            : anchorEl.getBoundingClientRect();
        const [surfaceBlock, surfaceInline] = surfaceCorner.split('-');
        const [anchorBlock, anchorInline] = anchorCorner.split('-');
        // LTR depends on the direction of the SURFACE not the anchor.
        const isLTR = getComputedStyle(surfaceEl).direction === 'ltr';
        /*
         * For more on inline and block dimensions, see MDN article:
         * https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values
         *
         * ┌───── inline/blockDocumentOffset  inlineScrollbarWidth
         * │       │                                    │
         * │     ┌─▼─────┐                              │Document
         * │    ┌┼───────┴──────────────────────────────┼────────┐
         * │    ││                                      │        │
         * └──► ││ ┌───── inline/blockWindowOffset      │        │
         *      ││ │       │                            ▼        │
         *      ││ │     ┌─▼───┐                 Window┌┐        │
         *      └┤ │    ┌┼─────┴───────────────────────┼│        │
         *       │ │    ││                             ││        │
         *       │ └──► ││  ┌──inline/blockAnchorOffset││        │
         *       │      ││  │     │                    ││        │
         *       │      └┤  │  ┌──▼───┐                ││        │
         *       │       │  │ ┌┼──────┤                ││        │
         *       │       │  └─►│Anchor│                ││        │
         *       │       │    └┴──────┘                ││        │
         *       │       │                             ││        │
         *       │       │     ┌───────────────────────┼┼────┐   │
         *       │       │     │ Surface               ││    │   │
         *       │       │     │                       ││    │   │
         *       │       │     │                       ││    │   │
         *       │       │     │                       ││    │   │
         *       │       │     │                       ││    │   │
         *       │      ┌┼─────┼───────────────────────┼│    │   │
         *       │   ┌─►┴──────┼────────────────────────┘    ├┐  │
         *       │   │         │ inline/blockOOBCorrection   ││  │
         *       │   │         │                         │   ││  │
         *       │   │         │                         ├──►├│  │
         *       │   │         │                         │   ││  │
         *       │   │         └────────────────────────┐▼───┼┘  │
         *       │  blockScrollbarHeight                └────┘   │
         *       │                                               │
         *       └───────────────────────────────────────────────┘
         */
        // Calculate the block positioning properties
        let { blockInset, blockOutOfBoundsCorrection, surfaceBlockProperty } = this.calculateBlock({
            surfaceRect,
            anchorRect,
            anchorBlock,
            surfaceBlock,
            yOffset,
            positioning,
            windowInnerHeight,
            blockScrollbarHeight,
        });
        // If the surface should be out of bounds in the block direction, flip the
        // surface and anchor corner block values and recalculate
        if (blockOutOfBoundsCorrection && !disableBlockFlip) {
            const flippedSurfaceBlock = surfaceBlock === 'start' ? 'end' : 'start';
            const flippedAnchorBlock = anchorBlock === 'start' ? 'end' : 'start';
            const flippedBlock = this.calculateBlock({
                surfaceRect,
                anchorRect,
                anchorBlock: flippedAnchorBlock,
                surfaceBlock: flippedSurfaceBlock,
                yOffset,
                positioning,
                windowInnerHeight,
                blockScrollbarHeight,
            });
            // In the case that the flipped verion would require less out of bounds
            // correcting, use the flipped corner block values
            if (blockOutOfBoundsCorrection > flippedBlock.blockOutOfBoundsCorrection) {
                blockInset = flippedBlock.blockInset;
                blockOutOfBoundsCorrection = flippedBlock.blockOutOfBoundsCorrection;
                surfaceBlockProperty = flippedBlock.surfaceBlockProperty;
            }
        }
        // Calculate the inline positioning properties
        let { inlineInset, inlineOutOfBoundsCorrection, surfaceInlineProperty } = this.calculateInline({
            surfaceRect,
            anchorRect,
            anchorInline,
            surfaceInline,
            xOffset,
            positioning,
            isLTR,
            windowInnerWidth,
            inlineScrollbarWidth,
        });
        // If the surface should be out of bounds in the inline direction, flip the
        // surface and anchor corner inline values and recalculate
        if (inlineOutOfBoundsCorrection && !disableInlineFlip) {
            const flippedSurfaceInline = surfaceInline === 'start' ? 'end' : 'start';
            const flippedAnchorInline = anchorInline === 'start' ? 'end' : 'start';
            const flippedInline = this.calculateInline({
                surfaceRect,
                anchorRect,
                anchorInline: flippedAnchorInline,
                surfaceInline: flippedSurfaceInline,
                xOffset,
                positioning,
                isLTR,
                windowInnerWidth,
                inlineScrollbarWidth,
            });
            // In the case that the flipped verion would require less out of bounds
            // correcting, use the flipped corner inline values
            if (Math.abs(inlineOutOfBoundsCorrection) >
                Math.abs(flippedInline.inlineOutOfBoundsCorrection)) {
                inlineInset = flippedInline.inlineInset;
                inlineOutOfBoundsCorrection = flippedInline.inlineOutOfBoundsCorrection;
                surfaceInlineProperty = flippedInline.surfaceInlineProperty;
            }
        }
        // If we are simply repositioning the surface back inside the viewport,
        // subtract the out of bounds correction values from the positioning.
        if (repositionStrategy === 'move') {
            blockInset = blockInset - blockOutOfBoundsCorrection;
            inlineInset = inlineInset - inlineOutOfBoundsCorrection;
        }
        this.surfaceStylesInternal = {
            'display': 'block',
            'opacity': '1',
            [surfaceBlockProperty]: `${blockInset}px`,
            [surfaceInlineProperty]: `${inlineInset}px`,
        };
        // In the case that we are resizing the surface to stay inside the viewport
        // we need to set height and width on the surface.
        if (repositionStrategy === 'resize') {
            // Add a height property to the styles if there is block height correction
            if (blockOutOfBoundsCorrection) {
                this.surfaceStylesInternal['height'] = `${surfaceRect.height - blockOutOfBoundsCorrection}px`;
            }
            // Add a width property to the styles if there is block height correction
            if (inlineOutOfBoundsCorrection) {
                this.surfaceStylesInternal['width'] = `${surfaceRect.width - inlineOutOfBoundsCorrection}px`;
            }
        }
        this.host.requestUpdate();
    }
    /**
     * Calculates the css property, the inset, and the out of bounds correction
     * for the surface in the block direction.
     */
    calculateBlock(config) {
        const { surfaceRect, anchorRect, anchorBlock, surfaceBlock, yOffset, positioning, windowInnerHeight, blockScrollbarHeight, } = config;
        // We use number booleans to multiply values rather than `if` / ternary
        // statements because it _heavily_ cuts down on nesting and readability
        const relativeToWindow = positioning === 'fixed' || positioning === 'document' ? 1 : 0;
        const relativeToDocument = positioning === 'document' ? 1 : 0;
        const isSurfaceBlockStart = surfaceBlock === 'start' ? 1 : 0;
        const isSurfaceBlockEnd = surfaceBlock === 'end' ? 1 : 0;
        const isOneBlockEnd = anchorBlock !== surfaceBlock ? 1 : 0;
        // Whether or not to apply the height of the anchor
        const blockAnchorOffset = isOneBlockEnd * anchorRect.height + yOffset;
        // The absolute block position of the anchor relative to window
        const blockTopLayerOffset = isSurfaceBlockStart * anchorRect.top +
            isSurfaceBlockEnd *
                (windowInnerHeight - anchorRect.bottom - blockScrollbarHeight);
        const blockDocumentOffset = isSurfaceBlockStart * window.scrollY - isSurfaceBlockEnd * window.scrollY;
        // If the surface's block would be out of bounds of the window, move it back
        // in
        const blockOutOfBoundsCorrection = Math.abs(Math.min(0, windowInnerHeight -
            blockTopLayerOffset -
            blockAnchorOffset -
            surfaceRect.height));
        // The block logical value of the surface
        const blockInset = relativeToWindow * blockTopLayerOffset +
            relativeToDocument * blockDocumentOffset +
            blockAnchorOffset;
        const surfaceBlockProperty = surfaceBlock === 'start' ? 'inset-block-start' : 'inset-block-end';
        return { blockInset, blockOutOfBoundsCorrection, surfaceBlockProperty };
    }
    /**
     * Calculates the css property, the inset, and the out of bounds correction
     * for the surface in the inline direction.
     */
    calculateInline(config) {
        const { isLTR: isLTRBool, surfaceInline, anchorInline, anchorRect, surfaceRect, xOffset, positioning, windowInnerWidth, inlineScrollbarWidth, } = config;
        // We use number booleans to multiply values rather than `if` / ternary
        // statements because it _heavily_ cuts down on nesting and readability
        const relativeToWindow = positioning === 'fixed' || positioning === 'document' ? 1 : 0;
        const relativeToDocument = positioning === 'document' ? 1 : 0;
        const isLTR = isLTRBool ? 1 : 0;
        const isRTL = isLTRBool ? 0 : 1;
        const isSurfaceInlineStart = surfaceInline === 'start' ? 1 : 0;
        const isSurfaceInlineEnd = surfaceInline === 'end' ? 1 : 0;
        const isOneInlineEnd = anchorInline !== surfaceInline ? 1 : 0;
        // Whether or not to apply the width of the anchor
        const inlineAnchorOffset = isOneInlineEnd * anchorRect.width + xOffset;
        // The inline position of the anchor relative to window in LTR
        const inlineTopLayerOffsetLTR = isSurfaceInlineStart * anchorRect.left +
            isSurfaceInlineEnd *
                (windowInnerWidth - anchorRect.right - inlineScrollbarWidth);
        // The inline position of the anchor relative to window in RTL
        const inlineTopLayerOffsetRTL = isSurfaceInlineStart *
            (windowInnerWidth - anchorRect.right - inlineScrollbarWidth) +
            isSurfaceInlineEnd * anchorRect.left;
        // The inline position of the anchor relative to window
        const inlineTopLayerOffset = isLTR * inlineTopLayerOffsetLTR + isRTL * inlineTopLayerOffsetRTL;
        // The inline position of the anchor relative to window in LTR
        const inlineDocumentOffsetLTR = isSurfaceInlineStart * window.scrollX -
            isSurfaceInlineEnd * window.scrollX;
        // The inline position of the anchor relative to window in RTL
        const inlineDocumentOffsetRTL = isSurfaceInlineEnd * window.scrollX -
            isSurfaceInlineStart * window.scrollX;
        // The inline position of the anchor relative to window
        const inlineDocumentOffset = isLTR * inlineDocumentOffsetLTR + isRTL * inlineDocumentOffsetRTL;
        // If the surface's inline would be out of bounds of the window, move it
        // back in
        const inlineOutOfBoundsCorrection = Math.abs(Math.min(0, windowInnerWidth -
            inlineTopLayerOffset -
            inlineAnchorOffset -
            surfaceRect.width));
        // The inline logical value of the surface
        const inlineInset = relativeToWindow * inlineTopLayerOffset +
            inlineAnchorOffset +
            relativeToDocument * inlineDocumentOffset;
        let surfaceInlineProperty = surfaceInline === 'start' ? 'inset-inline-start' : 'inset-inline-end';
        // There are cases where the element is RTL but the root of the page is not.
        // In these cases we want to not use logical properties.
        if (positioning === 'document' || positioning === 'fixed') {
            if ((surfaceInline === 'start' && isLTRBool) ||
                (surfaceInline === 'end' && !isLTRBool)) {
                surfaceInlineProperty = 'left';
            }
            else {
                surfaceInlineProperty = 'right';
            }
        }
        return {
            inlineInset,
            inlineOutOfBoundsCorrection,
            surfaceInlineProperty,
        };
    }
    hostUpdate() {
        this.onUpdate();
    }
    hostUpdated() {
        this.onUpdate();
    }
    /**
     * Checks whether the properties passed into the controller have changed since
     * the last positioning. If so, it will reposition if the surface is open or
     * close it if the surface should close.
     */
    async onUpdate() {
        const props = this.getProperties();
        let hasChanged = false;
        for (const [key, value] of Object.entries(props)) {
            // tslint:disable-next-line
            hasChanged = hasChanged || value !== this.lastValues[key];
            if (hasChanged)
                break;
        }
        const openChanged = this.lastValues.isOpen !== props.isOpen;
        const hasAnchor = !!props.anchorEl;
        const hasSurface = !!props.surfaceEl;
        if (hasChanged && hasAnchor && hasSurface) {
            // Only update isOpen, because if it's closed, we do not want to waste
            // time on a useless reposition calculation. So save the other "dirty"
            // values until next time it opens.
            this.lastValues.isOpen = props.isOpen;
            if (props.isOpen) {
                // We are going to do a reposition, so save the prop values for future
                // dirty checking.
                this.lastValues = props;
                await this.position();
                props.onOpen();
            }
            else if (openChanged) {
                await props.beforeClose();
                this.close();
                props.onClose();
            }
        }
    }
    /**
     * Hides the surface.
     */
    close() {
        this.surfaceStylesInternal = {
            'display': 'none',
        };
        this.host.requestUpdate();
        const surfaceEl = this.getProperties().surfaceEl;
        // The following type casts are required due to differing TS types in Google
        // and open source.
        if (surfaceEl?.popover &&
            surfaceEl?.isConnected) {
            surfaceEl.hidePopover();
        }
    }
}

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Indicies to access the TypeaheadRecord tuple type.
 */
const TYPEAHEAD_RECORD = {
    INDEX: 0,
    ITEM: 1,
    TEXT: 2,
};
/**
 * This controller listens to `keydown` events and searches the header text of
 * an array of `MenuItem`s with the corresponding entered keys within the buffer
 * time and activates the item.
 *
 * @example
 * ```ts
 * const typeaheadController = new TypeaheadController(() => ({
 *   typeaheadBufferTime: 50,
 *   getItems: () => Array.from(document.querySelectorAll('md-menu-item'))
 * }));
 * html`
 *   <div
 *       @keydown=${typeaheadController.onKeydown}
 *       tabindex="0"
 *       class="activeItemText">
 *     <!-- focusable element that will receive keydown events -->
 *     Apple
 *   </div>
 *   <div>
 *     <md-menu-item active header="Apple"></md-menu-item>
 *     <md-menu-item header="Apricot"></md-menu-item>
 *     <md-menu-item header="Banana"></md-menu-item>
 *     <md-menu-item header="Olive"></md-menu-item>
 *     <md-menu-item header="Orange"></md-menu-item>
 *   </div>
 * `;
 * ```
 */
class TypeaheadController {
    /**
     * @param getProperties A function that returns the options of the typeahead
     * controller:
     *
     * {
     *   getItems: A function that returns an array of menu items to be searched.
     *   typeaheadBufferTime: The maximum time between each keystroke to keep the
     *       current type buffer alive.
     * }
     */
    constructor(getProperties) {
        this.getProperties = getProperties;
        /**
         * Array of tuples that helps with indexing.
         */
        this.typeaheadRecords = [];
        /**
         * Currently-typed text since last buffer timeout
         */
        this.typaheadBuffer = '';
        /**
         * The timeout id from the current buffer's setTimeout
         */
        this.cancelTypeaheadTimeout = 0;
        /**
         * If we are currently "typing"
         */
        this.isTypingAhead = false;
        /**
         * The record of the last active item.
         */
        this.lastActiveRecord = null;
        /**
         * Apply this listener to the element that will receive `keydown` events that
         * should trigger this controller.
         *
         * @param event The native browser `KeyboardEvent` from the `keydown` event.
         */
        this.onKeydown = (event) => {
            if (this.isTypingAhead) {
                this.typeahead(event);
            }
            else {
                this.beginTypeahead(event);
            }
        };
        /**
         * Ends the current typeahead and clears the buffer.
         */
        this.endTypeahead = () => {
            this.isTypingAhead = false;
            this.typaheadBuffer = '';
            this.typeaheadRecords = [];
        };
    }
    get items() {
        return this.getProperties().getItems();
    }
    get active() {
        return this.getProperties().active;
    }
    /**
     * Sets up typingahead
     */
    beginTypeahead(event) {
        if (!this.active) {
            return;
        }
        // We don't want to typeahead if the _beginning_ of the typeahead is a menu
        // navigation, or a selection. We will handle "Space" only if it's in the
        // middle of a typeahead
        if (event.code === 'Space' ||
            event.code === 'Enter' ||
            event.code.startsWith('Arrow') ||
            event.code === 'Escape') {
            return;
        }
        this.isTypingAhead = true;
        // Generates the record array data structure which is the index, the element
        // and a normalized header.
        this.typeaheadRecords = this.items.map((el, index) => [
            index,
            el,
            el.typeaheadText.trim().toLowerCase(),
        ]);
        this.lastActiveRecord =
            this.typeaheadRecords.find((record) => record[TYPEAHEAD_RECORD.ITEM].tabIndex === 0) ?? null;
        if (this.lastActiveRecord) {
            this.lastActiveRecord[TYPEAHEAD_RECORD.ITEM].tabIndex = -1;
        }
        this.typeahead(event);
    }
    /**
     * Performs the typeahead. Based on the normalized items and the current text
     * buffer, finds the _next_ item with matching text and activates it.
     *
     * @example
     *
     * items: Apple, Banana, Olive, Orange, Cucumber
     * buffer: ''
     * user types: o
     *
     * activates Olive
     *
     * @example
     *
     * items: Apple, Banana, Olive (active), Orange, Cucumber
     * buffer: 'o'
     * user types: l
     *
     * activates Olive
     *
     * @example
     *
     * items: Apple, Banana, Olive (active), Orange, Cucumber
     * buffer: ''
     * user types: o
     *
     * activates Orange
     *
     * @example
     *
     * items: Apple, Banana, Olive, Orange (active), Cucumber
     * buffer: ''
     * user types: o
     *
     * activates Olive
     */
    typeahead(event) {
        if (event.defaultPrevented)
            return;
        clearTimeout(this.cancelTypeaheadTimeout);
        // Stop typingahead if one of the navigation or selection keys (except for
        // Space) are pressed
        if (event.code === 'Enter' ||
            event.code.startsWith('Arrow') ||
            event.code === 'Escape') {
            this.endTypeahead();
            if (this.lastActiveRecord) {
                this.lastActiveRecord[TYPEAHEAD_RECORD.ITEM].tabIndex = -1;
            }
            return;
        }
        // If Space is pressed, prevent it from selecting and closing the menu
        if (event.code === 'Space') {
            event.preventDefault();
        }
        // Start up a new keystroke buffer timeout
        this.cancelTypeaheadTimeout = window.setTimeout(this.endTypeahead, this.getProperties().typeaheadBufferTime);
        this.typaheadBuffer += event.key.toLowerCase();
        const lastActiveIndex = this.lastActiveRecord
            ? this.lastActiveRecord[TYPEAHEAD_RECORD.INDEX]
            : -1;
        const numRecords = this.typeaheadRecords.length;
        /**
         * Sorting function that will resort the items starting with the given index
         *
         * @example
         *
         * this.typeaheadRecords =
         * 0: [0, <reference>, 'apple']
         * 1: [1, <reference>, 'apricot']
         * 2: [2, <reference>, 'banana']
         * 3: [3, <reference>, 'olive'] <-- lastActiveIndex
         * 4: [4, <reference>, 'orange']
         * 5: [5, <reference>, 'strawberry']
         *
         * this.typeaheadRecords.sort((a,b) => rebaseIndexOnActive(a)
         *                                       - rebaseIndexOnActive(b)) ===
         * 0: [3, <reference>, 'olive'] <-- lastActiveIndex
         * 1: [4, <reference>, 'orange']
         * 2: [5, <reference>, 'strawberry']
         * 3: [0, <reference>, 'apple']
         * 4: [1, <reference>, 'apricot']
         * 5: [2, <reference>, 'banana']
         */
        const rebaseIndexOnActive = (record) => {
            return ((record[TYPEAHEAD_RECORD.INDEX] + numRecords - lastActiveIndex) %
                numRecords);
        };
        // records filtered and sorted / rebased around the last active index
        const matchingRecords = this.typeaheadRecords
            .filter((record) => !record[TYPEAHEAD_RECORD.ITEM].disabled &&
            record[TYPEAHEAD_RECORD.TEXT].startsWith(this.typaheadBuffer))
            .sort((a, b) => rebaseIndexOnActive(a) - rebaseIndexOnActive(b));
        // Just leave if there's nothing that matches. Native select will just
        // choose the first thing that starts with the next letter in the alphabet
        // but that's out of scope and hard to localize
        if (matchingRecords.length === 0) {
            clearTimeout(this.cancelTypeaheadTimeout);
            if (this.lastActiveRecord) {
                this.lastActiveRecord[TYPEAHEAD_RECORD.ITEM].tabIndex = -1;
            }
            this.endTypeahead();
            return;
        }
        const isNewQuery = this.typaheadBuffer.length === 1;
        let nextRecord;
        // This is likely the case that someone is trying to "tab" through different
        // entries that start with the same letter
        if (this.lastActiveRecord === matchingRecords[0] && isNewQuery) {
            nextRecord = matchingRecords[1] ?? matchingRecords[0];
        }
        else {
            nextRecord = matchingRecords[0];
        }
        if (this.lastActiveRecord) {
            this.lastActiveRecord[TYPEAHEAD_RECORD.ITEM].tabIndex = -1;
        }
        this.lastActiveRecord = nextRecord;
        nextRecord[TYPEAHEAD_RECORD.ITEM].tabIndex = 0;
        nextRecord[TYPEAHEAD_RECORD.ITEM].focus();
        return;
    }
}

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * The default value for the typeahead buffer time in Milliseconds.
 */
const DEFAULT_TYPEAHEAD_BUFFER_TIME = 200;
const submenuNavKeys = new Set([
    NavigableKeys.ArrowDown,
    NavigableKeys.ArrowUp,
    NavigableKeys.Home,
    NavigableKeys.End,
]);
const menuNavKeys = new Set([
    NavigableKeys.ArrowLeft,
    NavigableKeys.ArrowRight,
    ...submenuNavKeys,
]);
/**
 * Gets the currently focused element on the page.
 *
 * @param activeDoc The document or shadowroot from which to start the search.
 *    Defaults to `window.document`
 * @return Returns the currently deeply focused element or `null` if none.
 */
function getFocusedElement(activeDoc = document) {
    let activeEl = activeDoc.activeElement;
    // Check for activeElement in the case that an element with a shadow root host
    // is currently focused.
    while (activeEl && activeEl?.shadowRoot?.activeElement) {
        activeEl = activeEl.shadowRoot.activeElement;
    }
    return activeEl;
}
/**
 * @fires opening {Event} Fired before the opening animation begins
 * @fires opened {Event} Fired once the menu is open, after any animations
 * @fires closing {Event} Fired before the closing animation begins
 * @fires closed {Event} Fired once the menu is closed, after any animations
 */
class Menu extends ScopedElementsMixin(i$3) {
    /**
     * Whether the menu is animating upwards or downwards when opening. This is
     * helpful for calculating some animation calculations.
     */
    get openDirection() {
        const menuCornerBlock = this.menuCorner.split('-')[0];
        return menuCornerBlock === 'start' ? 'DOWN' : 'UP';
    }
    /**
     * The element which the menu should align to. If `anchor` is set to a
     * non-empty idref string, then `anchorEl` will resolve to the element with
     * the given id in the same root node. Otherwise, `null`.
     */
    get anchorElement() {
        if (this.anchor) {
            return this.getRootNode().querySelector(`#${this.anchor}`);
        }
        return this.currentAnchorElement;
    }
    set anchorElement(element) {
        this.currentAnchorElement = element;
        this.requestUpdate('anchorElement');
    }
    constructor() {
        super();
        /**
         * The ID of the element in the same root node in which the menu should align
         * to. Overrides setting `anchorElement = elementReference`.
         *
         * __NOTE__: anchor or anchorElement must either be an HTMLElement or resolve
         * to an HTMLElement in order for menu to open.
         */
        this.anchor = '';
        /**
         * Whether the positioning algorithm should calculate relative to the parent
         * of the anchor element (`absolute`), relative to the window (`fixed`), or
         * relative to the document (`document`). `popover` will use the popover API
         * to render the menu in the top-layer. If your browser does not support the
         * popover API, it will fall back to `fixed`.
         *
         * __Examples for `position = 'fixed'`:__
         *
         * - If there is no `position:relative` in the given parent tree and the
         *   surface is `position:absolute`
         * - If the surface is `position:fixed`
         * - If the surface is in the "top layer"
         * - The anchor and the surface do not share a common `position:relative`
         *   ancestor
         *
         * When using `positioning=fixed`, in most cases, the menu should position
         * itself above most other `position:absolute` or `position:fixed` elements
         * when placed inside of them. e.g. using a menu inside of an `md-dialog`.
         *
         * __NOTE__: Fixed menus will not scroll with the page and will be fixed to
         * the window instead.
         *
         * __Examples for `position = 'document'`:__
         *
         * - There is no parent that creates a relative positioning context e.g.
         *   `position: relative`, `position: absolute`, `transform: translate(x, y)`,
         *   etc.
         * - You put the effort into hoisting the menu to the top of the DOM like the
         *   end of the `<body>` to render over everything or in a top-layer.
         * - You are reusing a single `md-menu` element that dynamically renders
         *   content.
         *
         * __Examples for `position = 'popover'`:__
         *
         * - Your browser supports `popover`.
         * - Most cases. Once popover is in browsers, this will become the default.
         */
        this.positioning = 'absolute';
        /**
         * Skips the opening and closing animations.
         */
        this.quick = false;
        /**
         * Displays overflow content like a submenu. Not required in most cases when
         * using `positioning="popover"`.
         *
         * __NOTE__: This may cause adverse effects if you set
         * `md-menu {max-height:...}`
         * and have items overflowing items in the "y" direction.
         */
        this.hasOverflow = false;
        /**
         * Opens the menu and makes it visible. Alternative to the `.show()` and
         * `.close()` methods
         */
        this.open = false;
        /**
         * Offsets the menu's inline alignment from the anchor by the given number in
         * pixels. This value is direction aware and will follow the LTR / RTL
         * direction.
         *
         * e.g. LTR: positive -> right, negative -> left
         *      RTL: positive -> left, negative -> right
         */
        this.xOffset = 0;
        /**
         * Offsets the menu's block alignment from the anchor by the given number in
         * pixels.
         *
         * e.g. positive -> down, negative -> up
         */
        this.yOffset = 0;
        /**
         * Disable the `flip` behavior that usually happens on the horizontal axis
         * when the surface would render outside the viewport.
         */
        this.noHorizontalFlip = false;
        /**
         * Disable the `flip` behavior that usually happens on the vertical axis when
         * the surface would render outside the viewport.
         */
        this.noVerticalFlip = false;
        /**
         * The max time between the keystrokes of the typeahead menu behavior before
         * it clears the typeahead buffer.
         */
        this.typeaheadDelay = DEFAULT_TYPEAHEAD_BUFFER_TIME;
        /**
         * The corner of the anchor which to align the menu in the standard logical
         * property style of <block>-<inline> e.g. `'end-start'`.
         *
         * NOTE: This value may not be respected by the menu positioning algorithm
         * if the menu would render outisde the viewport.
         * Use `no-horizontal-flip` or `no-vertical-flip` to force the usage of the value
         */
        this.anchorCorner = Corner.END_START;
        /**
         * The corner of the menu which to align the anchor in the standard logical
         * property style of <block>-<inline> e.g. `'start-start'`.
         *
         * NOTE: This value may not be respected by the menu positioning algorithm
         * if the menu would render outisde the viewport.
         * Use `no-horizontal-flip` or `no-vertical-flip` to force the usage of the value
         */
        this.menuCorner = Corner.START_START;
        /**
         * Keeps the user clicks outside the menu.
         *
         * NOTE: clicking outside may still cause focusout to close the menu so see
         * `stayOpenOnFocusout`.
         */
        this.stayOpenOnOutsideClick = false;
        /**
         * Keeps the menu open when focus leaves the menu's composed subtree.
         *
         * NOTE: Focusout behavior will stop propagation of the focusout event. Set
         * this property to true to opt-out of menu's focusout handling altogether.
         */
        this.stayOpenOnFocusout = false;
        /**
         * After closing, does not restore focus to the last focused element before
         * the menu was opened.
         */
        this.skipRestoreFocus = false;
        /**
         * The element that should be focused by default once opened.
         *
         * NOTE: When setting default focus to 'LIST_ROOT', remember to change
         * `tabindex` to `0` and change md-menu's display to something other than
         * `display: contents` when necessary.
         */
        this.defaultFocus = FocusState.FIRST_ITEM;
        /**
         * Turns off navigation wrapping. By default, navigating past the end of the
         * menu items will wrap focus back to the beginning and vice versa. Use this
         * for ARIA patterns that do not wrap focus, like combobox.
         */
        this.noNavigationWrap = false;
        this.typeaheadActive = true;
        /**
         * Whether or not the current menu is a submenu and should not handle specific
         * navigation keys.
         *
         * @export
         */
        this.isSubmenu = false;
        /**
         * The event path of the last window pointerdown event.
         */
        this.pointerPath = [];
        /**
         * Whether or not the menu is repositoining due to window / document resize
         */
        this.isRepositioning = false;
        this.openCloseAnimationSignal = createAnimationSignal();
        this.listController = new ListController({
            isItem: (maybeItem) => {
                return maybeItem.hasAttribute('md-menu-item');
            },
            getPossibleItems: () => this.slotItems,
            isRtl: () => getComputedStyle(this).direction === 'rtl',
            deactivateItem: (item) => {
                item.selected = false;
                item.tabIndex = -1;
            },
            activateItem: (item) => {
                item.selected = true;
                item.tabIndex = 0;
            },
            isNavigableKey: (key) => {
                if (!this.isSubmenu) {
                    return menuNavKeys.has(key);
                }
                const isRtl = getComputedStyle(this).direction === 'rtl';
                // we want md-submenu to handle the submenu's left/right arrow exit
                // key so it can close the menu instead of navigate the list.
                // Therefore we need to include all keys but left/right arrow close
                // key
                const arrowOpen = isRtl
                    ? NavigableKeys.ArrowLeft
                    : NavigableKeys.ArrowRight;
                if (key === arrowOpen) {
                    return true;
                }
                return submenuNavKeys.has(key);
            },
            wrapNavigation: () => !this.noNavigationWrap,
        });
        /**
         * The element that was focused before the menu opened.
         */
        this.lastFocusedElement = null;
        /**
         * Handles typeahead navigation through the menu.
         */
        this.typeaheadController = new TypeaheadController(() => {
            return {
                getItems: () => this.items,
                typeaheadBufferTime: this.typeaheadDelay,
                active: this.typeaheadActive,
            };
        });
        this.currentAnchorElement = null;
        this.internals = 
        // Cast needed for closure
        this.attachInternals();
        /**
         * Handles positioning the surface and aligning it to the anchor as well as
         * keeping it in the viewport.
         */
        this.menuPositionController = new SurfacePositionController(this, () => {
            return {
                anchorCorner: this.anchorCorner,
                surfaceCorner: this.menuCorner,
                surfaceEl: this.surfaceEl,
                anchorEl: this.anchorElement,
                positioning: this.positioning === 'popover' ? 'document' : this.positioning,
                isOpen: this.open,
                xOffset: this.xOffset,
                yOffset: this.yOffset,
                disableBlockFlip: this.noVerticalFlip,
                disableInlineFlip: this.noHorizontalFlip,
                onOpen: this.onOpened,
                beforeClose: this.beforeClose,
                onClose: this.onClosed,
                // We can't resize components that have overflow like menus with
                // submenus because the overflow-y will show menu items / content
                // outside the bounds of the menu. Popover API fixes this because each
                // submenu is hoisted to the top-layer and are not considered overflow
                // content.
                repositionStrategy: this.hasOverflow && this.positioning !== 'popover'
                    ? 'move'
                    : 'resize',
            };
        });
        this.onWindowResize = () => {
            if (this.isRepositioning ||
                (this.positioning !== 'document' &&
                    this.positioning !== 'fixed' &&
                    this.positioning !== 'popover')) {
                return;
            }
            this.isRepositioning = true;
            this.reposition();
            this.isRepositioning = false;
        };
        this.handleFocusout = async (event) => {
            const anchorEl = this.anchorElement;
            // Do not close if we focused out by clicking on the anchor element. We
            // can't assume anchor buttons can be the related target because of iOS does
            // not focus buttons.
            if (this.stayOpenOnFocusout ||
                !this.open ||
                this.pointerPath.includes(anchorEl)) {
                return;
            }
            if (event.relatedTarget) {
                // Don't close the menu if we are switching focus between menu,
                // md-menu-item, and md-list or if the anchor was click focused, but check
                // if length of pointerPath is 0 because that means something was at least
                // clicked (shift+tab case).
                if (isElementInSubtree(event.relatedTarget, this) ||
                    (this.pointerPath.length !== 0 &&
                        isElementInSubtree(event.relatedTarget, anchorEl))) {
                    return;
                }
            }
            else if (this.pointerPath.includes(this)) {
                // If menu tabindex == -1 and the user clicks on the menu or a divider, we
                // want to keep the menu open.
                return;
            }
            const oldRestoreFocus = this.skipRestoreFocus;
            // allow focus to continue to the next focused object rather than returning
            this.skipRestoreFocus = true;
            this.close();
            // await for close
            await this.updateComplete;
            // return to previous behavior
            this.skipRestoreFocus = oldRestoreFocus;
        };
        /**
         * Saves the last focused element focuses the new element based on
         * `defaultFocus`, and animates open.
         */
        this.onOpened = async () => {
            this.lastFocusedElement = getFocusedElement();
            const items = this.items;
            const activeItemRecord = getActiveItem(items);
            if (activeItemRecord && this.defaultFocus !== FocusState.NONE) {
                activeItemRecord.item.tabIndex = -1;
            }
            let animationAborted = !this.quick;
            if (this.quick) {
                this.dispatchEvent(new Event('opening'));
            }
            else {
                animationAborted = !!(await this.animateOpen());
            }
            // This must come after the opening animation or else it may focus one of
            // the items before the animation has begun and causes the list to slide
            // (block-padding-of-the-menu)px at the end of the animation
            switch (this.defaultFocus) {
                case FocusState.FIRST_ITEM:
                    const first = getFirstActivatableItem(items);
                    if (first) {
                        first.tabIndex = 0;
                        first.focus();
                        await first.updateComplete;
                    }
                    break;
                case FocusState.LAST_ITEM:
                    const last = getLastActivatableItem(items);
                    if (last) {
                        last.tabIndex = 0;
                        last.focus();
                        await last.updateComplete;
                    }
                    break;
                case FocusState.LIST_ROOT:
                    this.focus();
                    break;
                default:
                case FocusState.NONE:
                    // Do nothing.
                    break;
            }
            if (!animationAborted) {
                this.dispatchEvent(new Event('opened'));
            }
        };
        /**
         * Animates closed.
         */
        this.beforeClose = async () => {
            this.open = false;
            if (!this.skipRestoreFocus) {
                this.lastFocusedElement?.focus?.();
            }
            if (!this.quick) {
                await this.animateClose();
            }
        };
        /**
         * Focuses the last focused element.
         */
        this.onClosed = () => {
            if (this.quick) {
                this.dispatchEvent(new Event('closing'));
                this.dispatchEvent(new Event('closed'));
            }
        };
        this.onWindowPointerdown = (event) => {
            this.pointerPath = event.composedPath();
        };
        /**
         * We cannot listen to window click because Safari on iOS will not bubble a
         * click event on window if the item clicked is not a "clickable" item such as
         * <body>
         */
        this.onDocumentClick = (event) => {
            if (!this.open) {
                return;
            }
            const path = event.composedPath();
            if (!this.stayOpenOnOutsideClick &&
                !path.includes(this) &&
                !path.includes(this.anchorElement)) {
                this.open = false;
            }
        };
        {
            this.internals.role = 'menu';
            this.addEventListener('keydown', this.handleKeydown);
            // Capture so that we can grab the event before it reaches the menu item
            // istelf. Specifically useful for the case where typeahead encounters a
            // space and we don't want the menu item to close the menu.
            this.addEventListener('keydown', this.captureKeydown, { capture: true });
            this.addEventListener('focusout', this.handleFocusout);
        }
    }
    /**
     * The menu items associated with this menu. The items must be `MenuItem`s and
     * have both the `md-menu-item` and `md-list-item` attributes.
     */
    get items() {
        return this.listController.items;
    }
    willUpdate(changed) {
        if (!changed.has('open')) {
            return;
        }
        if (this.open) {
            this.removeAttribute('aria-hidden');
            return;
        }
        this.setAttribute('aria-hidden', 'true');
    }
    update(changed) {
        if (changed.has('open')) {
            if (this.open) {
                this.setUpGlobalEventListeners();
            }
            else {
                this.cleanUpGlobalEventListeners();
            }
        }
        // Firefox does not support popover. Fall-back to using fixed.
        if (changed.has('positioning') &&
            this.positioning === 'popover' &&
            // type required for Google JS conformance
            !this.showPopover) {
            this.positioning = 'fixed';
        }
        super.update(changed);
    }
    connectedCallback() {
        super.connectedCallback();
        if (this.open) {
            this.setUpGlobalEventListeners();
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.cleanUpGlobalEventListeners();
    }
    getBoundingClientRect() {
        if (!this.surfaceEl) {
            return super.getBoundingClientRect();
        }
        return this.surfaceEl.getBoundingClientRect();
    }
    getClientRects() {
        if (!this.surfaceEl) {
            return super.getClientRects();
        }
        return this.surfaceEl.getClientRects();
    }
    render() {
        return this.renderSurface();
    }
    /**
     * Renders the positionable surface element and its contents.
     */
    renderSurface() {
        return x `
      <div
        class="menu ${e(this.getSurfaceClasses())}"
        style=${o$1(this.menuPositionController.surfaceStyles)}
        popover=${this.positioning === 'popover' ? 'manual' : E}>
        ${this.renderElevation()}
        <div class="items">
          <div class="item-padding"> ${this.renderMenuItems()} </div>
        </div>
      </div>
    `;
    }
    /**
     * Renders the menu items' slot
     */
    renderMenuItems() {
        return x `<slot
      @close-menu=${this.onCloseMenu}
      @deactivate-items=${this.onDeactivateItems}
      @request-activation=${this.onRequestActivation}
      @deactivate-typeahead=${this.handleDeactivateTypeahead}
      @activate-typeahead=${this.handleActivateTypeahead}
      @stay-open-on-focusout=${this.handleStayOpenOnFocusout}
      @close-on-focusout=${this.handleCloseOnFocusout}
      @slotchange=${this.listController.onSlotchange}></slot>`;
    }
    /**
     * Renders the elevation component.
     */
    renderElevation() {
        return x `<md-elevation part="elevation"></md-elevation>`;
    }
    getSurfaceClasses() {
        return {
            open: this.open,
            fixed: this.positioning === 'fixed',
            'has-overflow': this.hasOverflow,
        };
    }
    captureKeydown(event) {
        if (event.target === this &&
            !event.defaultPrevented &&
            isClosableKey(event.code)) {
            event.preventDefault();
            this.close();
        }
        this.typeaheadController.onKeydown(event);
    }
    /**
     * Performs the opening animation:
     *
     * https://direct.googleplex.com/#/spec/295000003+271060003
     *
     * @return A promise that resolve to `true` if the animation was aborted,
     *     `false` if it was not aborted.
     */
    async animateOpen() {
        const surfaceEl = this.surfaceEl;
        const slotEl = this.slotEl;
        if (!surfaceEl || !slotEl)
            return true;
        const openDirection = this.openDirection;
        this.dispatchEvent(new Event('opening'));
        // needs to be imperative because we don't want to mix animation and Lit
        // render timing
        surfaceEl.classList.toggle('animating', true);
        const signal = this.openCloseAnimationSignal.start();
        const height = surfaceEl.offsetHeight;
        const openingUpwards = openDirection === 'UP';
        const children = this.items;
        const FULL_DURATION = 500;
        const SURFACE_OPACITY_DURATION = 50;
        const ITEM_OPACITY_DURATION = 250;
        // We want to fit every child fade-in animation within the full duration of
        // the animation.
        const DELAY_BETWEEN_ITEMS = (FULL_DURATION - ITEM_OPACITY_DURATION) / children.length;
        const surfaceHeightAnimation = surfaceEl.animate([{ height: '0px' }, { height: `${height}px` }], {
            duration: FULL_DURATION,
            easing: EASING.EMPHASIZED,
        });
        // When we are opening upwards, we want to make sure the last item is always
        // in view, so we need to translate it upwards the opposite direction of the
        // height animation
        const upPositionCorrectionAnimation = slotEl.animate([
            { transform: openingUpwards ? `translateY(-${height}px)` : '' },
            { transform: '' },
        ], { duration: FULL_DURATION, easing: EASING.EMPHASIZED });
        const surfaceOpacityAnimation = surfaceEl.animate([{ opacity: 0 }, { opacity: 1 }], SURFACE_OPACITY_DURATION);
        const childrenAnimations = [];
        for (let i = 0; i < children.length; i++) {
            // If we are animating upwards, then reverse the children list.
            const directionalIndex = openingUpwards ? children.length - 1 - i : i;
            const child = children[directionalIndex];
            const animation = child.animate([{ opacity: 0 }, { opacity: 1 }], {
                duration: ITEM_OPACITY_DURATION,
                delay: DELAY_BETWEEN_ITEMS * i,
            });
            // Make them all initially hidden and then clean up at the end of each
            // animation.
            child.classList.toggle('md-menu-hidden', true);
            animation.addEventListener('finish', () => {
                child.classList.toggle('md-menu-hidden', false);
            });
            childrenAnimations.push([child, animation]);
        }
        let resolveAnimation = (value) => { };
        const animationFinished = new Promise((resolve) => {
            resolveAnimation = resolve;
        });
        signal.addEventListener('abort', () => {
            surfaceHeightAnimation.cancel();
            upPositionCorrectionAnimation.cancel();
            surfaceOpacityAnimation.cancel();
            childrenAnimations.forEach(([child, animation]) => {
                child.classList.toggle('md-menu-hidden', false);
                animation.cancel();
            });
            resolveAnimation(true);
        });
        surfaceHeightAnimation.addEventListener('finish', () => {
            surfaceEl.classList.toggle('animating', false);
            this.openCloseAnimationSignal.finish();
            resolveAnimation(false);
        });
        return await animationFinished;
    }
    /**
     * Performs the closing animation:
     *
     * https://direct.googleplex.com/#/spec/295000003+271060003
     */
    animateClose() {
        let resolve;
        // This promise blocks the surface position controller from setting
        // display: none on the surface which will interfere with this animation.
        const animationEnded = new Promise((res) => {
            resolve = res;
        });
        const surfaceEl = this.surfaceEl;
        const slotEl = this.slotEl;
        if (!surfaceEl || !slotEl) {
            resolve(false);
            return animationEnded;
        }
        const openDirection = this.openDirection;
        const closingDownwards = openDirection === 'UP';
        this.dispatchEvent(new Event('closing'));
        // needs to be imperative because we don't want to mix animation and Lit
        // render timing
        surfaceEl.classList.toggle('animating', true);
        const signal = this.openCloseAnimationSignal.start();
        const height = surfaceEl.offsetHeight;
        const children = this.items;
        const FULL_DURATION = 150;
        const SURFACE_OPACITY_DURATION = 50;
        // The surface fades away at the very end
        const SURFACE_OPACITY_DELAY = FULL_DURATION - SURFACE_OPACITY_DURATION;
        const ITEM_OPACITY_DURATION = 50;
        const ITEM_OPACITY_INITIAL_DELAY = 50;
        const END_HEIGHT_PERCENTAGE = 0.35;
        // We want to fit every child fade-out animation within the full duration of
        // the animation.
        const DELAY_BETWEEN_ITEMS = (FULL_DURATION - ITEM_OPACITY_INITIAL_DELAY - ITEM_OPACITY_DURATION) /
            children.length;
        // The mock has the animation shrink to 35%
        const surfaceHeightAnimation = surfaceEl.animate([
            { height: `${height}px` },
            { height: `${height * END_HEIGHT_PERCENTAGE}px` },
        ], {
            duration: FULL_DURATION,
            easing: EASING.EMPHASIZED_ACCELERATE,
        });
        // When we are closing downwards, we want to make sure the last item is
        // always in view, so we need to translate it upwards the opposite direction
        // of the height animation
        const downPositionCorrectionAnimation = slotEl.animate([
            { transform: '' },
            {
                transform: closingDownwards
                    ? `translateY(-${height * (1 - END_HEIGHT_PERCENTAGE)}px)`
                    : '',
            },
        ], { duration: FULL_DURATION, easing: EASING.EMPHASIZED_ACCELERATE });
        const surfaceOpacityAnimation = surfaceEl.animate([{ opacity: 1 }, { opacity: 0 }], { duration: SURFACE_OPACITY_DURATION, delay: SURFACE_OPACITY_DELAY });
        const childrenAnimations = [];
        for (let i = 0; i < children.length; i++) {
            // If the animation is closing upwards, then reverse the list of
            // children so that we animate in the opposite direction.
            const directionalIndex = closingDownwards ? i : children.length - 1 - i;
            const child = children[directionalIndex];
            const animation = child.animate([{ opacity: 1 }, { opacity: 0 }], {
                duration: ITEM_OPACITY_DURATION,
                delay: ITEM_OPACITY_INITIAL_DELAY + DELAY_BETWEEN_ITEMS * i,
            });
            // Make sure the items stay hidden at the end of each child animation.
            // We clean this up at the end of the overall animation.
            animation.addEventListener('finish', () => {
                child.classList.toggle('md-menu-hidden', true);
            });
            childrenAnimations.push([child, animation]);
        }
        signal.addEventListener('abort', () => {
            surfaceHeightAnimation.cancel();
            downPositionCorrectionAnimation.cancel();
            surfaceOpacityAnimation.cancel();
            childrenAnimations.forEach(([child, animation]) => {
                animation.cancel();
                child.classList.toggle('md-menu-hidden', false);
            });
            resolve(false);
        });
        surfaceHeightAnimation.addEventListener('finish', () => {
            surfaceEl.classList.toggle('animating', false);
            childrenAnimations.forEach(([child]) => {
                child.classList.toggle('md-menu-hidden', false);
            });
            this.openCloseAnimationSignal.finish();
            this.dispatchEvent(new Event('closed'));
            resolve(true);
        });
        return animationEnded;
    }
    handleKeydown(event) {
        // At any key event, the pointer interaction is done so we need to clear our
        // cached pointerpath. This handles the case where the user clicks on the
        // anchor, and then hits shift+tab
        this.pointerPath = [];
        this.listController.handleKeydown(event);
    }
    setUpGlobalEventListeners() {
        document.addEventListener('click', this.onDocumentClick, { capture: true });
        window.addEventListener('pointerdown', this.onWindowPointerdown);
        document.addEventListener('resize', this.onWindowResize, { passive: true });
        window.addEventListener('resize', this.onWindowResize, { passive: true });
    }
    cleanUpGlobalEventListeners() {
        document.removeEventListener('click', this.onDocumentClick, {
            capture: true,
        });
        window.removeEventListener('pointerdown', this.onWindowPointerdown);
        document.removeEventListener('resize', this.onWindowResize);
        window.removeEventListener('resize', this.onWindowResize);
    }
    onCloseMenu() {
        this.close();
    }
    onDeactivateItems(event) {
        event.stopPropagation();
        this.listController.onDeactivateItems();
    }
    onRequestActivation(event) {
        event.stopPropagation();
        this.listController.onRequestActivation(event);
    }
    handleDeactivateTypeahead(event) {
        // stopPropagation so that this does not deactivate any typeaheads in menus
        // nested above it e.g. md-sub-menu
        event.stopPropagation();
        this.typeaheadActive = false;
    }
    handleActivateTypeahead(event) {
        // stopPropagation so that this does not activate any typeaheads in menus
        // nested above it e.g. md-sub-menu
        event.stopPropagation();
        this.typeaheadActive = true;
    }
    handleStayOpenOnFocusout(event) {
        event.stopPropagation();
        this.stayOpenOnFocusout = true;
    }
    handleCloseOnFocusout(event) {
        event.stopPropagation();
        this.stayOpenOnFocusout = false;
    }
    close() {
        this.open = false;
        const maybeSubmenu = this.slotItems;
        maybeSubmenu.forEach((item) => {
            item.close?.();
        });
    }
    show() {
        this.open = true;
    }
    /**
     * Activates the next item in the menu. If at the end of the menu, the first
     * item will be activated.
     *
     * @return The activated menu item or `null` if there are no items.
     */
    activateNextItem() {
        return this.listController.activateNextItem() ?? null;
    }
    /**
     * Activates the previous item in the menu. If at the start of the menu, the
     * last item will be activated.
     *
     * @return The activated menu item or `null` if there are no items.
     */
    activatePreviousItem() {
        return this.listController.activatePreviousItem() ?? null;
    }
    /**
     * Repositions the menu if it is open.
     *
     * Useful for the case where document or window-positioned menus have their
     * anchors moved while open.
     */
    reposition() {
        if (this.open) {
            this.menuPositionController.position();
        }
    }
}
Menu.scopedElements = {
    'md-focus-ring': MdFocusRing,
    'md-elevation': MdElevation,
};
__decorate([
    e$3('.menu')
], Menu.prototype, "surfaceEl", void 0);
__decorate([
    e$3('slot')
], Menu.prototype, "slotEl", void 0);
__decorate([
    n$3()
], Menu.prototype, "anchor", void 0);
__decorate([
    n$3()
], Menu.prototype, "positioning", void 0);
__decorate([
    n$3({ type: Boolean })
], Menu.prototype, "quick", void 0);
__decorate([
    n$3({ type: Boolean, attribute: 'has-overflow' })
], Menu.prototype, "hasOverflow", void 0);
__decorate([
    n$3({ type: Boolean, reflect: true })
], Menu.prototype, "open", void 0);
__decorate([
    n$3({ type: Number, attribute: 'x-offset' })
], Menu.prototype, "xOffset", void 0);
__decorate([
    n$3({ type: Number, attribute: 'y-offset' })
], Menu.prototype, "yOffset", void 0);
__decorate([
    n$3({ type: Boolean, attribute: 'no-horizontal-flip' })
], Menu.prototype, "noHorizontalFlip", void 0);
__decorate([
    n$3({ type: Boolean, attribute: 'no-vertical-flip' })
], Menu.prototype, "noVerticalFlip", void 0);
__decorate([
    n$3({ type: Number, attribute: 'typeahead-delay' })
], Menu.prototype, "typeaheadDelay", void 0);
__decorate([
    n$3({ attribute: 'anchor-corner' })
], Menu.prototype, "anchorCorner", void 0);
__decorate([
    n$3({ attribute: 'menu-corner' })
], Menu.prototype, "menuCorner", void 0);
__decorate([
    n$3({ type: Boolean, attribute: 'stay-open-on-outside-click' })
], Menu.prototype, "stayOpenOnOutsideClick", void 0);
__decorate([
    n$3({ type: Boolean, attribute: 'stay-open-on-focusout' })
], Menu.prototype, "stayOpenOnFocusout", void 0);
__decorate([
    n$3({ type: Boolean, attribute: 'skip-restore-focus' })
], Menu.prototype, "skipRestoreFocus", void 0);
__decorate([
    n$3({ attribute: 'default-focus' })
], Menu.prototype, "defaultFocus", void 0);
__decorate([
    n$3({ type: Boolean, attribute: 'no-navigation-wrap' })
], Menu.prototype, "noNavigationWrap", void 0);
__decorate([
    o$2({ flatten: true })
], Menu.prototype, "slotItems", void 0);
__decorate([
    r$1()
], Menu.prototype, "typeaheadActive", void 0);

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const styles$e = i$5 `:host{--md-elevation-level: var(--md-menu-container-elevation, 2);--md-elevation-shadow-color: var(--md-menu-container-shadow-color, var(--md-sys-color-shadow, #000));min-width:112px;color:unset;display:contents}md-focus-ring{--md-focus-ring-shape: var(--md-menu-container-shape, var(--md-sys-shape-corner-extra-small, 4px))}.menu{border-radius:var(--md-menu-container-shape, var(--md-sys-shape-corner-extra-small, 4px));display:none;inset:auto;border:none;padding:0px;overflow:visible;background-color:rgba(0,0,0,0);color:inherit;opacity:0;z-index:20;position:absolute;user-select:none;max-height:inherit;height:inherit;min-width:inherit;max-width:inherit;scrollbar-width:inherit}.menu::backdrop{display:none}.fixed{position:fixed}.items{display:block;list-style-type:none;margin:0;outline:none;box-sizing:border-box;background-color:var(--md-menu-container-color, var(--md-sys-color-surface-container, #f3edf7));height:inherit;max-height:inherit;overflow:auto;min-width:inherit;max-width:inherit;border-radius:inherit;scrollbar-width:inherit}.item-padding{padding-block:8px}.has-overflow:not([popover]) .items{overflow:visible}.has-overflow.animating .items,.animating .items{overflow:hidden}.has-overflow.animating .items{pointer-events:none}.animating ::slotted(.md-menu-hidden){opacity:0}slot{display:block;height:inherit;max-height:inherit}::slotted(:is(md-divider,[role=separator])){margin:8px 0}@media(forced-colors: active){.menu{border-style:solid;border-color:CanvasText;border-width:1px}}
`;

class MdMenu extends Menu {
}
MdMenu.styles = [styles$e];

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * TODO(b/265336902): add docs
 */
class Icon extends i$3 {
    render() {
        return x `<slot></slot>`;
    }
    connectedCallback() {
        super.connectedCallback();
        const ariaHidden = this.getAttribute('aria-hidden');
        if (ariaHidden === 'false') {
            // Allow the user to set `aria-hidden="false"` to create an icon that is
            // announced by screenreaders.
            this.removeAttribute('aria-hidden');
            return;
        }
        // Needed for VoiceOver, which will create a "group" if the element is a
        // sibling to other content.
        this.setAttribute('aria-hidden', 'true');
    }
}

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const styles$d = i$5 `:host{font-size:var(--md-icon-size, 24px);width:var(--md-icon-size, 24px);height:var(--md-icon-size, 24px);color:inherit;font-variation-settings:inherit;font-weight:400;font-family:var(--md-icon-font, Material Symbols Outlined);display:inline-flex;font-style:normal;place-items:center;place-content:center;line-height:1;overflow:hidden;letter-spacing:normal;text-transform:none;user-select:none;white-space:nowrap;word-wrap:normal;flex-shrink:0;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale}::slotted(svg){fill:currentColor}::slotted(*){height:100%;width:100%}
`;

class MdIcon extends Icon {
}
/** @nocollapse */
MdIcon.styles = [styles$d];

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const NAVIGABLE_KEY_SET = new Set(Object.values(NavigableKeys));
// tslint:disable-next-line:enforce-comments-on-exported-symbols
class List extends i$3 {
    /** @export */
    get items() {
        return this.listController.items;
    }
    constructor() {
        super();
        this.listController = new ListController({
            isItem: (item) => item.hasAttribute('md-list-item'),
            getPossibleItems: () => this.slotItems,
            isRtl: () => getComputedStyle(this).direction === 'rtl',
            deactivateItem: (item) => {
                item.tabIndex = -1;
            },
            activateItem: (item) => {
                item.tabIndex = 0;
            },
            isNavigableKey: (key) => NAVIGABLE_KEY_SET.has(key),
            isActivatable: (item) => !item.disabled && item.type !== 'text',
        });
        this.internals = 
        // Cast needed for closure
        this.attachInternals();
        {
            this.internals.role = 'list';
            this.addEventListener('keydown', this.listController.handleKeydown);
        }
    }
    render() {
        return x `
      <slot
        @deactivate-items=${this.listController.onDeactivateItems}
        @request-activation=${this.listController.onRequestActivation}
        @slotchange=${this.listController.onSlotchange}>
      </slot>
    `;
    }
    /**
     * Activates the next item in the list. If at the end of the list, the first
     * item will be activated.
     *
     * @return The activated list item or `null` if there are no items.
     */
    activateNextItem() {
        return this.listController.activateNextItem();
    }
    /**
     * Activates the previous item in the list. If at the start of the list, the
     * last item will be activated.
     *
     * @return The activated list item or `null` if there are no items.
     */
    activatePreviousItem() {
        return this.listController.activatePreviousItem();
    }
}
__decorate([
    o$2({ flatten: true })
], List.prototype, "slotItems", void 0);

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const styles$c = i$5 `:host{background:var(--md-list-container-color, var(--md-sys-color-surface, #fef7ff));color:unset;display:flex;flex-direction:column;outline:none;padding:8px 0;position:relative}
`;

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Lists are continuous, vertical indexes of text or images.
 *
 * @description
 * Lists consist of one or more list items, and can contain actions represented
 * by icons and text. List items come in three sizes: one-line, two-line, and
 * three-line.
 *
 * __Takeaways:__
 *
 * - Lists should be sorted in logical ways that make content easy to scan, such
 *   as alphabetical, numerical, chronological, or by user preference.
 * - Lists present content in a way that makes it easy to identify a specific
 *   item in a collection and act on it.
 * - Lists should present icons, text, and actions in a consistent format.
 *
 * @final
 * @suppress {visibility}
 */
class MdList extends List {
}
MdList.styles = [styles$c];

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * An item layout component.
 */
class Item extends i$3 {
    constructor() {
        super(...arguments);
        /**
         * Only needed for SSR.
         *
         * Add this attribute when an item has two lines to avoid a Flash Of Unstyled
         * Content. This attribute is not needed for single line items or items with
         * three or more lines.
         */
        this.multiline = false;
    }
    render() {
        return x `
      <slot name="container"></slot>
      <slot class="non-text" name="start"></slot>
      <div class="text">
        <slot name="overline" @slotchange=${this.handleTextSlotChange}></slot>
        <slot
          class="default-slot"
          @slotchange=${this.handleTextSlotChange}></slot>
        <slot name="headline" @slotchange=${this.handleTextSlotChange}></slot>
        <slot
          name="supporting-text"
          @slotchange=${this.handleTextSlotChange}></slot>
      </div>
      <slot class="non-text" name="trailing-supporting-text"></slot>
      <slot class="non-text" name="end"></slot>
    `;
    }
    handleTextSlotChange() {
        // Check if there's more than one text slot with content. If so, the item is
        // multiline, which has a different min-height than single line items.
        let isMultiline = false;
        let slotsWithContent = 0;
        for (const slot of this.textSlots) {
            if (slotHasContent(slot)) {
                slotsWithContent += 1;
            }
            if (slotsWithContent > 1) {
                isMultiline = true;
                break;
            }
        }
        this.multiline = isMultiline;
    }
}
__decorate([
    n$3({ type: Boolean, reflect: true })
], Item.prototype, "multiline", void 0);
__decorate([
    r('.text slot')
], Item.prototype, "textSlots", void 0);
function slotHasContent(slot) {
    for (const node of slot.assignedNodes({ flatten: true })) {
        // Assume there's content if there's an element slotted in
        const isElement = node.nodeType === Node.ELEMENT_NODE;
        // If there's only text nodes for the default slot, check if there's
        // non-whitespace.
        const isTextWithContent = node.nodeType === Node.TEXT_NODE && node.textContent?.match(/\S/);
        if (isElement || isTextWithContent) {
            return true;
        }
    }
    return false;
}

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const styles$b = i$5 `:host{color:var(--md-sys-color-on-surface, #1d1b20);font-family:var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-large-size, 1rem);font-weight:var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-large-line-height, 1.5rem);align-items:center;box-sizing:border-box;display:flex;gap:16px;min-height:56px;overflow:hidden;padding:12px 16px;position:relative;text-overflow:ellipsis}:host([multiline]){min-height:72px}[name=overline]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-medium-size, 0.875rem);font-weight:var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-medium-line-height, 1.25rem)}[name=trailing-supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=container]::slotted(*){inset:0;position:absolute}.default-slot{display:inline}.default-slot,.text ::slotted(*){overflow:hidden;text-overflow:ellipsis}.text{display:flex;flex:1;flex-direction:column;overflow:hidden}
`;

class MdItem extends Item {
}
MdItem.styles = [styles$b];

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const a=Symbol.for(""),o=t=>{if(t?.r===a)return t?._$litStatic$},i=(t,...r)=>({_$litStatic$:r.reduce(((r,e,a)=>r+(t=>{if(void 0!==t._$litStatic$)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(e)+t[a+1]),t[0]),r:a}),l$1=new Map,n=t=>(r,...e)=>{const a=e.length;let s,i;const n=[],u=[];let c,$=0,f=!1;for(;$<a;){for(c=r[$];$<a&&void 0!==(i=e[$],s=o(i));)c+=s+r[++$],f=!0;$!==a&&u.push(i),n.push(c),$++;}if($===a&&n.push(r[a]),f){const t=n.join("$$lit$$");void 0===(r=l$1.get(t))&&(n.raw=n,l$1.set(t,r=n)),e=u;}return t(r,...e)},u$1=n(x);

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Separate variable needed for closure.
const listItemBaseClass = mixinDelegatesAria(ScopedElementsMixin(i$3));
/**
 * @fires request-activation {Event} Requests the list to set `tabindex=0` on
 * the item and focus it. --bubbles --composed
 */
class ListItemEl extends listItemBaseClass {
    constructor() {
        super(...arguments);
        /**
         * Disables the item and makes it non-selectable and non-interactive.
         */
        this.disabled = false;
        /**
         * Sets the behavior of the list item, defaults to "text". Change to "link" or
         * "button" for interactive items.
         */
        this.type = 'text';
        /**
         * READONLY. Sets the `md-list-item` attribute on the element.
         */
        this.isListItem = true;
        /**
         * Sets the underlying `HTMLAnchorElement`'s `href` resource attribute.
         */
        this.href = '';
        /**
         * Sets the underlying `HTMLAnchorElement`'s `target` attribute when `href` is
         * set.
         */
        this.target = '';
        /** Highlight the item */
        this.activated = false;
    }
    get isDisabled() {
        return this.disabled && this.type !== 'link';
    }
    willUpdate(changed) {
        if (this.href) {
            this.type = 'link';
        }
        super.willUpdate(changed);
    }
    render() {
        return this.renderListItem(x `
      <md-item>
        <div slot="container">
          ${this.renderRipple()} ${this.renderFocusRing()}
        </div>
        <slot name="start" slot="start"></slot>
        <slot name="end" slot="end"></slot>
        ${this.renderBody()}
      </md-item>
    `);
    }
    /**
     * Renders the root list item.
     *
     * @param content the child content of the list item.
     */
    renderListItem(content) {
        const isAnchor = this.type === 'link';
        let tag;
        switch (this.type) {
            case 'link':
                tag = i `a`;
                break;
            case 'button':
                tag = i `button`;
                break;
            default:
            case 'text':
                tag = i `li`;
                break;
        }
        const isInteractive = this.type !== 'text';
        // TODO(b/265339866): announce "button"/"link" inside of a list item. Until
        // then all are "listitem" roles for correct announcement.
        const target = isAnchor && !!this.target ? this.target : E;
        return u$1 `
      <${tag}
        id="item"
        tabindex="${this.isDisabled || !isInteractive ? -1 : 0}"
        ?disabled=${this.isDisabled}
        role="listitem"
        aria-selected=${this.ariaSelected || E}
        aria-checked=${this.ariaChecked || E}
        aria-expanded=${this.ariaExpanded || E}
        aria-haspopup=${this.ariaHasPopup || E}
        class="list-item ${e(this.getRenderClasses())}"
        href=${this.href || E}
        target=${target}
        @focus=${this.onFocus}
      >${content}</${tag}>
    `;
    }
    /**
     * Handles rendering of the ripple element.
     */
    renderRipple() {
        if (this.type === 'text') {
            return E;
        }
        return x ` <md-ripple
      part="ripple"
      for="item"
      ?disabled=${this.isDisabled}></md-ripple>`;
    }
    /**
     * Handles rendering of the focus ring.
     */
    renderFocusRing() {
        if (this.type === 'text') {
            return E;
        }
        return x ` <md-focus-ring
      @visibility-changed=${this.onFocusRingVisibilityChanged}
      part="focus-ring"
      for="item"
      inward></md-focus-ring>`;
    }
    onFocusRingVisibilityChanged(e) { }
    /**
     * Classes applied to the list item root.
     */
    getRenderClasses() {
        return { 'disabled': this.isDisabled, 'activated': this.activated, };
    }
    /**
     * Handles rendering the headline and supporting text.
     */
    renderBody() {
        return x `
      <slot></slot>
      <slot name="overline" slot="overline"></slot>
      <slot name="headline" slot="headline"></slot>
      <slot name="supporting-text" slot="supporting-text"></slot>
      <slot
        name="trailing-supporting-text"
        slot="trailing-supporting-text"></slot>
    `;
    }
    onFocus() {
        if (this.tabIndex !== -1) {
            return;
        }
        // Handles the case where the user clicks on the element and then tabs.
        this.dispatchEvent(createRequestActivationEvent());
    }
    focus() {
        // TODO(b/300334509): needed for some cases where delegatesFocus doesn't
        // work programmatically like in FF and select-option
        this.listItemRoot?.focus();
    }
}
/** @nocollapse */
ListItemEl.shadowRootOptions = {
    ...i$3.shadowRootOptions,
    delegatesFocus: true,
};
ListItemEl.scopedElements = {
    'md-focus-ring': MdFocusRing,
    'md-item': MdItem,
    'md-ripple': MdRipple,
};
__decorate([
    n$3({ type: Boolean, reflect: true })
], ListItemEl.prototype, "disabled", void 0);
__decorate([
    n$3({ reflect: true })
], ListItemEl.prototype, "type", void 0);
__decorate([
    n$3({ type: Boolean, attribute: 'md-list-item', reflect: true })
], ListItemEl.prototype, "isListItem", void 0);
__decorate([
    n$3()
], ListItemEl.prototype, "href", void 0);
__decorate([
    n$3()
], ListItemEl.prototype, "target", void 0);
__decorate([
    n$3({ type: Boolean })
], ListItemEl.prototype, "activated", void 0);
__decorate([
    e$3('.list-item')
], ListItemEl.prototype, "listItemRoot", void 0);

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const styles$a = i$5 `:host{display:flex;-webkit-tap-highlight-color:rgba(0,0,0,0);--md-ripple-hover-color: var(--md-list-item-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-list-item-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-list-item-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-opacity: var(--md-list-item-pressed-state-layer-opacity, 0.12)}:host(:is([type=button]:not([disabled]),[type=link])){cursor:pointer}md-focus-ring{z-index:1;--md-focus-ring-shape: 8px}a,button,li{background:none;border:none;cursor:inherit;padding:0;margin:0;text-align:unset;text-decoration:none}.list-item{border-radius:inherit;display:flex;flex:1;max-width:inherit;min-width:inherit;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);width:100%}.list-item.interactive{cursor:pointer}.list-item.disabled{opacity:var(--md-list-item-disabled-opacity, 0.3);pointer-events:none}.list-item.activated:not(.disabled){background-color:var(--md-list-item-activated-background, rgba(98, 0, 238, 0.2196078431))}[slot=container]{pointer-events:none}md-ripple{border-radius:inherit}md-item{border-radius:inherit;flex:1;height:100%;color:var(--md-list-item-label-text-color, var(--md-sys-color-on-surface, #1d1b20));font-family:var(--md-list-item-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));line-height:var(--md-list-item-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));font-weight:var(--md-list-item-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));min-height:var(--md-list-item-one-line-container-height, 56px);padding-top:var(--md-list-item-top-space, 12px);padding-bottom:var(--md-list-item-bottom-space, 12px);padding-inline-start:var(--md-list-item-leading-space, 16px);padding-inline-end:var(--md-list-item-trailing-space, 16px)}md-item[multiline]{min-height:var(--md-list-item-two-line-container-height, 72px)}[slot=supporting-text]{color:var(--md-list-item-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-list-item-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));line-height:var(--md-list-item-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));font-weight:var(--md-list-item-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)))}[slot=trailing-supporting-text]{color:var(--md-list-item-trailing-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-list-item-trailing-supporting-text-font, var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-trailing-supporting-text-size, var(--md-sys-typescale-label-small-size, 0.6875rem));line-height:var(--md-list-item-trailing-supporting-text-line-height, var(--md-sys-typescale-label-small-line-height, 1rem));font-weight:var(--md-list-item-trailing-supporting-text-weight, var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500)))}:is([slot=start],[slot=end])::slotted(*){fill:currentColor}[slot=start]{color:var(--md-list-item-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}[slot=end]{color:var(--md-list-item-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}@media(forced-colors: active){.disabled slot{color:GrayText}.list-item.disabled{color:GrayText;opacity:1}}
`;

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary
 * Lists are continuous, vertical indexes of text or images. Items are placed
 * inside the list.
 *
 * @description
 * Lists consist of one or more list items, and can contain actions represented
 * by icons and text. List items come in three sizes: one-line, two-line, and
 * three-line.
 *
 * __Takeaways:__
 *
 * - Lists should be sorted in logical ways that make content easy to scan, such
 *   as alphabetical, numerical, chronological, or by user preference.
 * - Lists present content in a way that makes it easy to identify a specific
 *   item in a collection and act on it.
 * - Lists should present icons, text, and actions in a consistent format.
 *
 * Acceptable slot child variants are:
 *
 * - `img[slot=end]`
 * - `img[slot=start]`
 *
 *  @example
 * ```html
 * <md-list-item
 *     headline="User Name"
 *     supportingText="user@name.com">
 *   <md-icon slot="start">account_circle</md-icon>
 *   <md-icon slot="end">check</md-icon>
 * </md-list-item>
 * ```
 *
 * @example
 *
 * @final
 * @suppress {visibility}
 */
class MdListItem extends ListItemEl {
}
MdListItem.styles = [styles$a];

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A controller that provides most functionality of an element that implements
 * the MenuItem interface.
 */
class MenuItemController {
    /**
     * @param host The MenuItem in which to attach this controller to.
     * @param config The object that configures this controller's behavior.
     */
    constructor(host, config) {
        this.host = host;
        this.internalTypeaheadText = null;
        /**
         * Bind this click listener to the interactive element. Handles closing the
         * menu.
         */
        this.onClick = () => {
            if (this.host.keepOpen)
                return;
            this.host.dispatchEvent(createDefaultCloseMenuEvent(this.host, {
                kind: CloseReason.CLICK_SELECTION,
            }));
        };
        /**
         * Bind this click listener to the interactive element. Handles closing the
         * menu.
         */
        this.onKeydown = (event) => {
            // Check if the interactive element is an anchor tag. If so, click it.
            if (this.host.href && event.code === 'Enter') {
                const interactiveElement = this.getInteractiveElement();
                if (interactiveElement instanceof HTMLAnchorElement) {
                    interactiveElement.click();
                }
            }
            if (event.defaultPrevented)
                return;
            // If the host has keepOpen = true we should ignore clicks & Space/Enter,
            // however we always maintain the ability to close a menu with a explicit
            // `escape` keypress.
            const keyCode = event.code;
            if (this.host.keepOpen && keyCode !== 'Escape')
                return;
            if (isClosableKey(keyCode)) {
                event.preventDefault();
                this.host.dispatchEvent(createDefaultCloseMenuEvent(this.host, {
                    kind: CloseReason.KEYDOWN,
                    key: keyCode,
                }));
            }
        };
        this.getHeadlineElements = config.getHeadlineElements;
        this.getSupportingTextElements = config.getSupportingTextElements;
        this.getDefaultElements = config.getDefaultElements;
        this.getInteractiveElement = config.getInteractiveElement;
        this.host.addController(this);
    }
    /**
     * The text that is selectable via typeahead. If not set, defaults to the
     * innerText of the item slotted into the `"headline"` slot, and if there are
     * no slotted elements into headline, then it checks the _default_ slot, and
     * then the `"supporting-text"` slot if nothing is in _default_.
     */
    get typeaheadText() {
        if (this.internalTypeaheadText !== null) {
            return this.internalTypeaheadText;
        }
        const headlineElements = this.getHeadlineElements();
        const textParts = [];
        headlineElements.forEach((headlineElement) => {
            if (headlineElement.textContent && headlineElement.textContent.trim()) {
                textParts.push(headlineElement.textContent.trim());
            }
        });
        // If there are no headline elements, check the default slot's text content
        if (textParts.length === 0) {
            this.getDefaultElements().forEach((defaultElement) => {
                if (defaultElement.textContent && defaultElement.textContent.trim()) {
                    textParts.push(defaultElement.textContent.trim());
                }
            });
        }
        // If there are no headline nor default slot elements, check the
        //supporting-text slot's text content
        if (textParts.length === 0) {
            this.getSupportingTextElements().forEach((supportingTextElement) => {
                if (supportingTextElement.textContent &&
                    supportingTextElement.textContent.trim()) {
                    textParts.push(supportingTextElement.textContent.trim());
                }
            });
        }
        return textParts.join(' ');
    }
    /**
     * The recommended tag name to render as the list item.
     */
    get tagName() {
        const type = this.host.type;
        switch (type) {
            case 'link':
                return 'a';
            case 'button':
                return 'button';
            default:
            case 'menuitem':
            case 'option':
                return 'li';
        }
    }
    /**
     * The recommended role of the menu item.
     */
    get role() {
        return this.host.type === 'option' ? 'option' : 'menuitem';
    }
    hostConnected() {
        this.host.toggleAttribute('md-menu-item', true);
    }
    hostUpdate() {
        if (this.host.href) {
            this.host.type = 'link';
        }
    }
    /**
     * Use to set the typeaheadText when it changes.
     */
    setTypeaheadText(text) {
        this.internalTypeaheadText = text;
    }
}

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Separate variable needed for closure.
const menuItemBaseClass = mixinDelegatesAria(ScopedElementsMixin(i$3));
/**
 * @fires close-menu {CustomEvent<{initiator: SelectOption, reason: Reason, itemPath: SelectOption[]}>}
 * Closes the encapsulating menu on closable interaction. --bubbles --composed
 */
class MenuItemEl extends menuItemBaseClass {
    constructor() {
        super(...arguments);
        /**
         * Disables the item and makes it non-selectable and non-interactive.
         */
        this.disabled = false;
        /**
         * Sets the behavior and role of the menu item, defaults to "menuitem".
         */
        this.type = 'menuitem';
        /**
         * Sets the underlying `HTMLAnchorElement`'s `href` resource attribute.
         */
        this.href = '';
        /**
         * Sets the underlying `HTMLAnchorElement`'s `target` attribute when `href` is
         * set.
         */
        this.target = '';
        /**
         * Keeps the menu open if clicked or keyboard selected.
         */
        this.keepOpen = false;
        /**
         * Sets the item in the selected visual state when a submenu is opened.
         */
        this.selected = false;
        this.menuItemController = new MenuItemController(this, {
            getHeadlineElements: () => {
                return this.headlineElements;
            },
            getSupportingTextElements: () => {
                return this.supportingTextElements;
            },
            getDefaultElements: () => {
                return this.defaultElements;
            },
            getInteractiveElement: () => this.listItemRoot,
        });
    }
    /**
     * The text that is selectable via typeahead. If not set, defaults to the
     * innerText of the item slotted into the `"headline"` slot.
     */
    get typeaheadText() {
        return this.menuItemController.typeaheadText;
    }
    set typeaheadText(text) {
        this.menuItemController.setTypeaheadText(text);
    }
    render() {
        return this.renderListItem(x `
      <md-item>
        <div slot="container">
          ${this.renderRipple()} ${this.renderFocusRing()}
        </div>
        <slot name="start" slot="start"></slot>
        <slot name="end" slot="end"></slot>
        ${this.renderBody()}
      </md-item>
    `);
    }
    /**
     * Renders the root list item.
     *
     * @param content the child content of the list item.
     */
    renderListItem(content) {
        const isAnchor = this.type === 'link';
        let tag;
        switch (this.menuItemController.tagName) {
            case 'a':
                tag = i `a`;
                break;
            case 'button':
                tag = i `button`;
                break;
            default:
            case 'li':
                tag = i `li`;
                break;
        }
        // TODO(b/265339866): announce "button"/"link" inside of a list item. Until
        // then all are "menuitem" roles for correct announcement.
        const target = isAnchor && !!this.target ? this.target : E;
        return u$1 `
      <${tag}
        id="item"
        tabindex=${this.disabled && !isAnchor ? -1 : 0}
        role=${this.menuItemController.role}
        aria-label=${this.ariaLabel || E}
        aria-selected=${this.ariaSelected || E}
        aria-checked=${this.ariaChecked || E}
        aria-expanded=${this.ariaExpanded || E}
        aria-haspopup=${this.ariaHasPopup || E}
        class="list-item ${e(this.getRenderClasses())}"
        href=${this.href || E}
        target=${target}
        @click=${this.menuItemController.onClick}
        @keydown=${this.menuItemController.onKeydown}
      >${content}</${tag}>
    `;
    }
    /**
     * Handles rendering of the ripple element.
     */
    renderRipple() {
        return x ` <md-ripple
      part="ripple"
      for="item"
      ?disabled=${this.disabled}></md-ripple>`;
    }
    /**
     * Handles rendering of the focus ring.
     */
    renderFocusRing() {
        return x ` <md-focus-ring
      part="focus-ring"
      for="item"
      inward></md-focus-ring>`;
    }
    /**
     * Classes applied to the list item root.
     */
    getRenderClasses() {
        return {
            'disabled': this.disabled,
            'selected': this.selected,
        };
    }
    /**
     * Handles rendering the headline and supporting text.
     */
    renderBody() {
        return x `
      <slot></slot>
      <slot name="overline" slot="overline"></slot>
      <slot name="headline" slot="headline"></slot>
      <slot name="supporting-text" slot="supporting-text"></slot>
      <slot
        name="trailing-supporting-text"
        slot="trailing-supporting-text"></slot>
    `;
    }
    focus() {
        // TODO(b/300334509): needed for some cases where delegatesFocus doesn't
        // work programmatically like in FF and select-option
        this.listItemRoot?.focus();
    }
}
/** @nocollapse */
MenuItemEl.shadowRootOptions = {
    ...i$3.shadowRootOptions,
    delegatesFocus: true,
};
MenuItemEl.scopedElements = {
    'md-focus-ring': MdFocusRing,
    'md-item': MdItem,
    'md-ripple': MdRipple,
};
__decorate([
    n$3({ type: Boolean, reflect: true })
], MenuItemEl.prototype, "disabled", void 0);
__decorate([
    n$3()
], MenuItemEl.prototype, "type", void 0);
__decorate([
    n$3()
], MenuItemEl.prototype, "href", void 0);
__decorate([
    n$3()
], MenuItemEl.prototype, "target", void 0);
__decorate([
    n$3({ type: Boolean, attribute: 'keep-open' })
], MenuItemEl.prototype, "keepOpen", void 0);
__decorate([
    n$3({ type: Boolean })
], MenuItemEl.prototype, "selected", void 0);
__decorate([
    e$3('.list-item')
], MenuItemEl.prototype, "listItemRoot", void 0);
__decorate([
    o$2({ slot: 'headline' })
], MenuItemEl.prototype, "headlineElements", void 0);
__decorate([
    o$2({ slot: 'supporting-text' })
], MenuItemEl.prototype, "supportingTextElements", void 0);
__decorate([
    n$2({ slot: '' })
], MenuItemEl.prototype, "defaultElements", void 0);
__decorate([
    n$3({ attribute: 'typeahead-text' })
], MenuItemEl.prototype, "typeaheadText", null);

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const styles$9 = i$5 `:host{display:flex;--md-ripple-hover-color: var(--md-menu-item-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-menu-item-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-menu-item-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-opacity: var(--md-menu-item-pressed-state-layer-opacity, 0.12)}:host([disabled]){opacity:var(--md-menu-item-disabled-opacity, 0.3);pointer-events:none}md-focus-ring{z-index:1;--md-focus-ring-shape: 8px}a,button,li{background:none;border:none;padding:0;margin:0;text-align:unset;text-decoration:none}.list-item{border-radius:inherit;display:flex;flex:1;max-width:inherit;min-width:inherit;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.list-item:not(.disabled){cursor:pointer}[slot=container]{pointer-events:none}md-ripple{border-radius:inherit}md-item{border-radius:inherit;flex:1;color:var(--md-menu-item-label-text-color, var(--md-sys-color-on-surface, #1d1b20));font-family:var(--md-menu-item-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-menu-item-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));line-height:var(--md-menu-item-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));font-weight:var(--md-menu-item-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));min-height:var(--md-menu-item-one-line-container-height, 56px);padding-top:var(--md-menu-item-top-space, 12px);padding-bottom:var(--md-menu-item-bottom-space, 12px);padding-inline-start:var(--md-menu-item-leading-space, 16px);padding-inline-end:var(--md-menu-item-trailing-space, 16px)}md-item[multiline]{min-height:var(--md-menu-item-two-line-container-height, 72px)}[slot=supporting-text]{color:var(--md-menu-item-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-menu-item-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-menu-item-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));line-height:var(--md-menu-item-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));font-weight:var(--md-menu-item-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)))}[slot=trailing-supporting-text]{color:var(--md-menu-item-trailing-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-menu-item-trailing-supporting-text-font, var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-menu-item-trailing-supporting-text-size, var(--md-sys-typescale-label-small-size, 0.6875rem));line-height:var(--md-menu-item-trailing-supporting-text-line-height, var(--md-sys-typescale-label-small-line-height, 1rem));font-weight:var(--md-menu-item-trailing-supporting-text-weight, var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500)))}:is([slot=start],[slot=end])::slotted(*){fill:currentColor}[slot=start]{color:var(--md-menu-item-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}[slot=end]{color:var(--md-menu-item-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}.list-item{background-color:var(--md-menu-item-container-color, transparent)}.list-item.selected{background-color:var(--md-menu-item-selected-container-color, var(--md-sys-color-secondary-container, #e8def8))}.selected:not(.disabled) ::slotted(*){color:var(--md-menu-item-selected-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b))}@media(forced-colors: active){:host([disabled]),:host([disabled]) slot{color:GrayText;opacity:1}.list-item{position:relative}.list-item.selected::before{content:"";position:absolute;inset:0;box-sizing:border-box;border-radius:inherit;pointer-events:none;border:3px double CanvasText}}
`;

class MdMenuItem extends MenuItemEl {
}
MdMenuItem.styles = [styles$9];

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const f=o=>void 0===o.strings,u={},m=(o,t=u)=>o._$AH=t;

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l=e$1(class extends i$2{constructor(r){if(super(r),r.type!==t.PROPERTY&&r.type!==t.ATTRIBUTE&&r.type!==t.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!f(r))throw Error("`live` bindings can only contain a single expression")}render(r){return r}update(i,[t$1]){if(t$1===T||t$1===E)return t$1;const o=i.element,l=i.name;if(i.type===t.PROPERTY){if(t$1===o[l])return T}else if(i.type===t.BOOLEAN_ATTRIBUTE){if(!!t$1===o.hasAttribute(l))return T}else if(i.type===t.ATTRIBUTE&&o.getAttribute(l)===t$1+"")return T;return m(i),t$1}});

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const stringConverter = {
    fromAttribute(value) {
        return value ?? '';
    },
    toAttribute(value) {
        return value || null;
    },
};

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A symbol property used to create a constraint validation `Validator`.
 * Required for all `mixinConstraintValidation()` elements.
 */
const createValidator = Symbol('createValidator');
/**
 * A symbol property used to return an anchor for constraint validation popups.
 * Required for all `mixinConstraintValidation()` elements.
 */
const getValidityAnchor = Symbol('getValidityAnchor');
// Private symbol members, used to avoid name clashing.
const privateValidator = Symbol('privateValidator');
const privateSyncValidity = Symbol('privateSyncValidity');
const privateCustomValidationMessage = Symbol('privateCustomValidationMessage');
/**
 * Mixes in constraint validation APIs for an element.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation
 * for more details.
 *
 * Implementations must provide a validator to cache and compute its validity,
 * along with a shadow root element to anchor validation popups to.
 *
 * @example
 * ```ts
 * const baseClass = mixinConstraintValidation(
 *   mixinFormAssociated(mixinElementInternals(LitElement))
 * );
 *
 * class MyCheckbox extends baseClass {
 *   \@property({type: Boolean}) checked = false;
 *   \@property({type: Boolean}) required = false;
 *
 *   [createValidator]() {
 *     return new CheckboxValidator(() => this);
 *   }
 *
 *   [getValidityAnchor]() {
 *     return this.renderRoot.querySelector('.root');
 *   }
 * }
 * ```
 *
 * @param base The class to mix functionality into.
 * @return The provided class with `ConstraintValidation` mixed in.
 */
function mixinConstraintValidation(base) {
    var _a;
    class ConstraintValidationElement extends base {
        constructor() {
            super(...arguments);
            /**
             * Needed for Safari, see https://bugs.webkit.org/show_bug.cgi?id=261432
             * Replace with this[internals].validity.customError when resolved.
             */
            this[_a] = '';
        }
        get validity() {
            this[privateSyncValidity]();
            return this[internals].validity;
        }
        get validationMessage() {
            this[privateSyncValidity]();
            return this[internals].validationMessage;
        }
        get willValidate() {
            this[privateSyncValidity]();
            return this[internals].willValidate;
        }
        checkValidity() {
            this[privateSyncValidity]();
            return this[internals].checkValidity();
        }
        reportValidity() {
            this[privateSyncValidity]();
            return this[internals].reportValidity();
        }
        setCustomValidity(error) {
            this[privateCustomValidationMessage] = error;
            this[privateSyncValidity]();
        }
        requestUpdate(name, oldValue, options) {
            super.requestUpdate(name, oldValue, options);
            this[privateSyncValidity]();
        }
        firstUpdated(changed) {
            super.firstUpdated(changed);
            // Sync the validity again when the element first renders, since the
            // validity anchor is now available.
            //
            // Elements that `delegatesFocus: true` to an `<input>` will throw an
            // error in Chrome and Safari when a form tries to submit or call
            // `form.reportValidity()`:
            // "An invalid form control with name='' is not focusable"
            //
            // The validity anchor MUST be provided in `internals.setValidity()` and
            // MUST be the `<input>` element rendered.
            //
            // See https://lit.dev/playground/#gist=6c26e418e0010f7a5aac15005cde8bde
            // for a reproduction.
            this[privateSyncValidity]();
        }
        [(_a = privateCustomValidationMessage, privateSyncValidity)]() {
            if (!this[privateValidator]) {
                this[privateValidator] = this[createValidator]();
            }
            const { validity, validationMessage: nonCustomValidationMessage } = this[privateValidator].getValidity();
            const customError = !!this[privateCustomValidationMessage];
            const validationMessage = this[privateCustomValidationMessage] || nonCustomValidationMessage;
            this[internals].setValidity({ ...validity, customError }, validationMessage, this[getValidityAnchor]() ?? undefined);
        }
        [createValidator]() {
            throw new Error('Implement [createValidator]');
        }
        [getValidityAnchor]() {
            throw new Error('Implement [getValidityAnchor]');
        }
    }
    return ConstraintValidationElement;
}

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A symbol property to retrieve the form value for an element.
 */
const getFormValue = Symbol('getFormValue');
/**
 * A symbol property to retrieve the form state for an element.
 */
const getFormState = Symbol('getFormState');
/**
 * Mixes in form-associated behavior for a class. This allows an element to add
 * values to `<form>` elements.
 *
 * Implementing classes should provide a `[formValue]` to return the current
 * value of the element, as well as reset and restore callbacks.
 *
 * @example
 * ```ts
 * const base = mixinFormAssociated(mixinElementInternals(LitElement));
 *
 * class MyControl extends base {
 *   \@property()
 *   value = '';
 *
 *   override [getFormValue]() {
 *     return this.value;
 *   }
 *
 *   override formResetCallback() {
 *     const defaultValue = this.getAttribute('value');
 *     this.value = defaultValue;
 *   }
 *
 *   override formStateRestoreCallback(state: string) {
 *     this.value = state;
 *   }
 * }
 * ```
 *
 * Elements may optionally provide a `[formState]` if their values do not
 * represent the state of the component.
 *
 * @example
 * ```ts
 * const base = mixinFormAssociated(mixinElementInternals(LitElement));
 *
 * class MyCheckbox extends base {
 *   \@property()
 *   value = 'on';
 *
 *   \@property({type: Boolean})
 *   checked = false;
 *
 *   override [getFormValue]() {
 *     return this.checked ? this.value : null;
 *   }
 *
 *   override [getFormState]() {
 *     return String(this.checked);
 *   }
 *
 *   override formResetCallback() {
 *     const defaultValue = this.hasAttribute('checked');
 *     this.checked = defaultValue;
 *   }
 *
 *   override formStateRestoreCallback(state: string) {
 *     this.checked = Boolean(state);
 *   }
 * }
 * ```
 *
 * IMPORTANT: Requires declares for lit-analyzer
 * @example
 * ```ts
 * const base = mixinFormAssociated(mixinElementInternals(LitElement));
 * class MyControl extends base {
 *   // Writable mixin properties for lit-html binding, needed for lit-analyzer
 *   declare disabled: boolean;
 *   declare name: string;
 * }
 * ```
 *
 * @param base The class to mix functionality into. The base class must use
 *     `mixinElementInternals()`.
 * @return The provided class with `FormAssociated` mixed in.
 */
function mixinFormAssociated(base) {
    class FormAssociatedElement extends base {
        get form() {
            return this[internals].form;
        }
        get labels() {
            return this[internals].labels;
        }
        // Use @property for the `name` and `disabled` properties to add them to the
        // `observedAttributes` array and trigger `attributeChangedCallback()`.
        //
        // We don't use Lit's default getter/setter (`noAccessor: true`) because
        // the attributes need to be updated synchronously to work with synchronous
        // form APIs, and Lit updates attributes async by default.
        get name() {
            return this.getAttribute('name') ?? '';
        }
        set name(name) {
            // Note: setting name to null or empty does not remove the attribute.
            this.setAttribute('name', name);
            // We don't need to call `requestUpdate()` since it's called synchronously
            // in `attributeChangedCallback()`.
        }
        get disabled() {
            return this.hasAttribute('disabled');
        }
        set disabled(disabled) {
            this.toggleAttribute('disabled', disabled);
            // We don't need to call `requestUpdate()` since it's called synchronously
            // in `attributeChangedCallback()`.
        }
        attributeChangedCallback(name, old, value) {
            // Manually `requestUpdate()` for `name` and `disabled` when their
            // attribute or property changes.
            // The properties update their attributes, so this callback is invoked
            // immediately when the properties are set. We call `requestUpdate()` here
            // instead of letting Lit set the properties from the attribute change.
            // That would cause the properties to re-set the attribute and invoke this
            // callback again in a loop. This leads to stale state when Lit tries to
            // determine if a property changed or not.
            if (name === 'name' || name === 'disabled') {
                // Disabled's value is only false if the attribute is missing and null.
                const oldValue = name === 'disabled' ? old !== null : old;
                // Trigger a lit update when the attribute changes.
                this.requestUpdate(name, oldValue);
                return;
            }
            super.attributeChangedCallback(name, old, value);
        }
        requestUpdate(name, oldValue, options) {
            super.requestUpdate(name, oldValue, options);
            // If any properties change, update the form value, which may have changed
            // as well.
            // Update the form value synchronously in `requestUpdate()` rather than
            // `update()` or `updated()`, which are async. This is necessary to ensure
            // that form data is updated in time for synchronous event listeners.
            this[internals].setFormValue(this[getFormValue](), this[getFormState]());
        }
        [getFormValue]() {
            // Closure does not allow abstract symbol members, so a default
            // implementation is needed.
            throw new Error('Implement [getFormValue]');
        }
        [getFormState]() {
            return this[getFormValue]();
        }
        formDisabledCallback(disabled) {
            this.disabled = disabled;
        }
    }
    /** @nocollapse */
    FormAssociatedElement.formAssociated = true;
    __decorate([
        n$3({ noAccessor: true })
    ], FormAssociatedElement.prototype, "name", null);
    __decorate([
        n$3({ type: Boolean, noAccessor: true })
    ], FormAssociatedElement.prototype, "disabled", null);
    return FormAssociatedElement;
}

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A symbol property used for a callback when validity has been reported.
 */
const onReportValidity = Symbol('onReportValidity');
// Private symbol members, used to avoid name clashing.
const privateCleanupFormListeners = Symbol('privateCleanupFormListeners');
const privateDoNotReportInvalid = Symbol('privateDoNotReportInvalid');
const privateIsSelfReportingValidity = Symbol('privateIsSelfReportingValidity');
const privateCallOnReportValidity = Symbol('privateCallOnReportValidity');
/**
 * Mixes in a callback for constraint validation when validity should be
 * styled and reported to the user.
 *
 * This is commonly used in text-field-like controls that display error styles
 * and error messages.
 *
 * @example
 * ```ts
 * const baseClass = mixinOnReportValidity(
 *   mixinConstraintValidation(
 *     mixinFormAssociated(mixinElementInternals(LitElement)),
 *   ),
 * );
 *
 * class MyField extends baseClass {
 *   \@property({type: Boolean}) error = false;
 *   \@property() errorMessage = '';
 *
 *   [onReportValidity](invalidEvent: Event | null) {
 *     this.error = !!invalidEvent;
 *     this.errorMessage = this.validationMessage;
 *
 *     // Optionally prevent platform popup from displaying
 *     invalidEvent?.preventDefault();
 *   }
 * }
 * ```
 *
 * @param base The class to mix functionality into.
 * @return The provided class with `OnReportValidity` mixed in.
 */
function mixinOnReportValidity(base) {
    var _a, _b, _c;
    class OnReportValidityElement extends base {
        // Mixins must have a constructor with `...args: any[]`
        // tslint:disable-next-line:no-any
        constructor(...args) {
            super(...args);
            /**
             * Used to clean up event listeners when a new form is associated.
             */
            this[_a] = new AbortController();
            /**
             * Used to determine if an invalid event should report validity. Invalid
             * events from `checkValidity()` do not trigger reporting.
             */
            this[_b] = false;
            /**
             * Used to determine if the control is reporting validity from itself, or
             * if a `<form>` is causing the validity report. Forms have different
             * control focusing behavior.
             */
            this[_c] = false;
            this.addEventListener('invalid', (invalidEvent) => {
                // Listen for invalid events dispatched by a `<form>` when it tries to
                // submit and the element is invalid. We ignore events dispatched when
                // calling `checkValidity()` as well as untrusted events, since the
                // `reportValidity()` and `<form>`-dispatched events are always
                // trusted.
                if (this[privateDoNotReportInvalid] || !invalidEvent.isTrusted) {
                    return;
                }
                this.addEventListener('invalid', () => {
                    // A normal bubbling phase event listener. By adding it here, we
                    // ensure it's the last event listener that is called during the
                    // bubbling phase.
                    this[privateCallOnReportValidity](invalidEvent);
                }, { once: true });
            }, {
                // Listen during the capture phase, which will happen before the
                // bubbling phase. That way, we can add a final event listener that
                // will run after other event listeners, and we can check if it was
                // default prevented. This works because invalid does not bubble.
                capture: true,
            });
        }
        checkValidity() {
            this[privateDoNotReportInvalid] = true;
            const valid = super.checkValidity();
            this[privateDoNotReportInvalid] = false;
            return valid;
        }
        reportValidity() {
            this[privateIsSelfReportingValidity] = true;
            const valid = super.reportValidity();
            // Constructor's invalid listener will handle reporting invalid events.
            if (valid) {
                this[privateCallOnReportValidity](null);
            }
            this[privateIsSelfReportingValidity] = false;
            return valid;
        }
        [(_a = privateCleanupFormListeners, _b = privateDoNotReportInvalid, _c = privateIsSelfReportingValidity, privateCallOnReportValidity)](invalidEvent) {
            // Since invalid events do not bubble to parent listeners, and because
            // our invalid listeners are added lazily after other listeners, we can
            // reliably read `defaultPrevented` synchronously without worrying
            // about waiting for another listener that could cancel it.
            const wasCanceled = invalidEvent?.defaultPrevented;
            if (wasCanceled) {
                return;
            }
            this[onReportValidity](invalidEvent);
            // If an implementation calls invalidEvent.preventDefault() to stop the
            // platform popup from displaying, focusing is also prevented, so we need
            // to manually focus.
            const implementationCanceledFocus = !wasCanceled && invalidEvent?.defaultPrevented;
            if (!implementationCanceledFocus) {
                return;
            }
            // The control should be focused when:
            // - `control.reportValidity()` is called (self-reporting).
            // - a form is reporting validity for its controls and this is the first
            //   invalid control.
            if (this[privateIsSelfReportingValidity] ||
                isFirstInvalidControlInForm(this[internals].form, this)) {
                this.focus();
            }
        }
        [onReportValidity](invalidEvent) {
            throw new Error('Implement [onReportValidity]');
        }
        formAssociatedCallback(form) {
            // can't use super.formAssociatedCallback?.() due to closure
            if (super.formAssociatedCallback) {
                super.formAssociatedCallback(form);
            }
            // Clean up previous form listeners.
            this[privateCleanupFormListeners].abort();
            if (!form) {
                return;
            }
            this[privateCleanupFormListeners] = new AbortController();
            // Add a listener that fires when the form runs constraint validation and
            // the control is valid, so that it may remove its error styles.
            //
            // This happens on `form.reportValidity()` and `form.requestSubmit()`
            // (both when the submit fails and passes).
            addFormReportValidListener(this, form, () => {
                this[privateCallOnReportValidity](null);
            }, this[privateCleanupFormListeners].signal);
        }
    }
    return OnReportValidityElement;
}
/**
 * Add a listener that fires when a form runs constraint validation on a control
 * and it is valid. This is needed to clear previously invalid styles.
 *
 * @param control The control of the form to listen for valid events.
 * @param form The control's form that can run constraint validation.
 * @param onControlValid A listener that is called when the form runs constraint
 *     validation and the control is valid.
 * @param cleanup A cleanup signal to remove the listener.
 */
function addFormReportValidListener(control, form, onControlValid, cleanup) {
    const validateHooks = getFormValidateHooks(form);
    // When a form validates its controls, check if an invalid event is dispatched
    // on the control. If it is not, then inform the control to report its valid
    // state.
    let controlFiredInvalid = false;
    let cleanupInvalidListener;
    let isNextSubmitFromHook = false;
    validateHooks.addEventListener('before', () => {
        isNextSubmitFromHook = true;
        cleanupInvalidListener = new AbortController();
        controlFiredInvalid = false;
        control.addEventListener('invalid', () => {
            controlFiredInvalid = true;
        }, {
            signal: cleanupInvalidListener.signal,
        });
    }, { signal: cleanup });
    validateHooks.addEventListener('after', () => {
        isNextSubmitFromHook = false;
        cleanupInvalidListener?.abort();
        if (controlFiredInvalid) {
            return;
        }
        onControlValid();
    }, { signal: cleanup });
    // The above hooks handle imperatively submitting the form, but not
    // declaratively submitting the form. This happens when:
    // 1. A non-custom element `<button type="submit">` is clicked.
    // 2. Enter is pressed on a non-custom element text editable `<input>`.
    form.addEventListener('submit', () => {
        // This submit was from `form.requestSubmit()`, which already calls the
        // listener.
        if (isNextSubmitFromHook) {
            return;
        }
        onControlValid();
    }, {
        signal: cleanup,
    });
    // Note: it is a known limitation that we cannot detect if a form tries to
    // submit declaratively, but fails to do so because an unrelated sibling
    // control failed its constraint validation.
    //
    // Since we cannot detect when that happens, a previously invalid control may
    // not clear its error styling when it becomes valid again.
    //
    // To work around this, call `form.reportValidity()` when submitting a form
    // declaratively. This can be down on the `<button type="submit">`'s click or
    // the text editable `<input>`'s 'Enter' keydown.
}
const FORM_VALIDATE_HOOKS = new WeakMap();
/**
 * Get a hooks `EventTarget` that dispatches 'before' and 'after' events that
 * fire before a form runs constraint validation and immediately after it
 * finishes running constraint validation on its controls.
 *
 * This happens during `form.reportValidity()` and `form.requestSubmit()`.
 *
 * @param form The form to get or set up hooks for.
 * @return A hooks `EventTarget` to add listeners to.
 */
function getFormValidateHooks(form) {
    if (!FORM_VALIDATE_HOOKS.has(form)) {
        // Patch form methods to add event listener hooks. These are needed to react
        // to form behaviors that do not dispatch events, such as a form asking its
        // controls to report their validity.
        //
        // We should only patch the methods once, since multiple controls and other
        // forces may want to patch this method. We cannot reliably clean it up if
        // there are multiple patched and re-patched methods referring holding
        // references to each other.
        //
        // Instead, we never clean up the patch but add and clean up event listeners
        // added to the hooks after the patch.
        const hooks = new EventTarget();
        FORM_VALIDATE_HOOKS.set(form, hooks);
        // Add hooks to support notifying before and after a form has run constraint
        // validation on its controls.
        // Note: `form.submit()` does not run constraint validation per spec.
        for (const methodName of ['reportValidity', 'requestSubmit']) {
            const superMethod = form[methodName];
            form[methodName] = function () {
                hooks.dispatchEvent(new Event('before'));
                const result = Reflect.apply(superMethod, this, arguments);
                hooks.dispatchEvent(new Event('after'));
                return result;
            };
        }
    }
    return FORM_VALIDATE_HOOKS.get(form);
}
/**
 * Checks if a control is the first invalid control in a form.
 *
 * @param form The control's form. When `null`, the control doesn't have a form
 *     and the method returns true.
 * @param control The control to check.
 * @return True if there is no form or if the control is the form's first
 *     invalid control.
 */
function isFirstInvalidControlInForm(form, control) {
    if (!form) {
        return true;
    }
    let firstInvalidControl;
    for (const element of Array.from(form.elements)) {
        if (element.matches(':invalid')) {
            firstInvalidControl = element;
            break;
        }
    }
    return firstInvalidControl === control;
}

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A class that computes and caches `ValidityStateFlags` for a component with
 * a given `State` interface.
 *
 * Cached performance before computing validity is important since constraint
 * validation must be checked frequently and synchronously when properties
 * change.
 *
 * @template State The expected interface of properties relevant to constraint
 *     validation.
 */
class Validator {
    /**
     * Creates a new validator.
     *
     * @param getCurrentState A callback that returns the current state of
     *     constraint validation-related properties.
     */
    constructor(getCurrentState) {
        this.getCurrentState = getCurrentState;
        /**
         * The current validity state and message. This is cached and returns if
         * constraint validation state does not change.
         */
        this.currentValidity = {
            validity: {},
            validationMessage: '',
        };
    }
    /**
     * Returns the current `ValidityStateFlags` and validation message for the
     * validator.
     *
     * If the constraint validation state has not changed, this will return a
     * cached result. This is important since `getValidity()` can be called
     * frequently in response to synchronous property changes.
     *
     * @return The current validity and validation message.
     */
    getValidity() {
        const state = this.getCurrentState();
        const hasStateChanged = !this.prevState || !this.equals(this.prevState, state);
        if (!hasStateChanged) {
            return this.currentValidity;
        }
        const { validity, validationMessage } = this.computeValidity(state);
        this.prevState = this.copy(state);
        this.currentValidity = {
            validationMessage,
            validity: {
                // Change any `ValidityState` instances into `ValidityStateFlags` since
                // `ValidityState` cannot be easily `{...spread}`.
                badInput: validity.badInput,
                customError: validity.customError,
                patternMismatch: validity.patternMismatch,
                rangeOverflow: validity.rangeOverflow,
                rangeUnderflow: validity.rangeUnderflow,
                stepMismatch: validity.stepMismatch,
                tooLong: validity.tooLong,
                tooShort: validity.tooShort,
                typeMismatch: validity.typeMismatch,
                valueMissing: validity.valueMissing,
            },
        };
        return this.currentValidity;
    }
}

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A validator that provides constraint validation that emulates `<input>` and
 * `<textarea>` validation.
 */
class TextFieldValidator extends Validator {
    computeValidity({ state, renderedControl }) {
        let inputOrTextArea = renderedControl;
        if (isInputState(state) && !inputOrTextArea) {
            // Get cached <input> or create it.
            inputOrTextArea = this.inputControl || document.createElement('input');
            // Cache the <input> to re-use it next time.
            this.inputControl = inputOrTextArea;
        }
        else if (!inputOrTextArea) {
            // Get cached <textarea> or create it.
            inputOrTextArea =
                this.textAreaControl || document.createElement('textarea');
            // Cache the <textarea> to re-use it next time.
            this.textAreaControl = inputOrTextArea;
        }
        // Set this variable so we can check it for input-specific properties.
        const input = isInputState(state)
            ? inputOrTextArea
            : null;
        // Set input's "type" first, since this can change the other properties
        if (input) {
            input.type = state.type;
        }
        if (inputOrTextArea.value !== state.value) {
            // Only programmatically set the value if there's a difference. When using
            // the rendered control, the value will always be up to date. Setting the
            // property (even if it's the same string) will reset the internal <input>
            // dirty flag, making minlength and maxlength validation reset.
            inputOrTextArea.value = state.value;
        }
        inputOrTextArea.required = state.required;
        // The following IDLAttribute properties will always hydrate an attribute,
        // even if set to a the default value ('' or -1). The presence of the
        // attribute triggers constraint validation, so we must remove the attribute
        // when empty.
        if (input) {
            const inputState = state;
            if (inputState.pattern) {
                input.pattern = inputState.pattern;
            }
            else {
                input.removeAttribute('pattern');
            }
            if (inputState.min) {
                input.min = inputState.min;
            }
            else {
                input.removeAttribute('min');
            }
            if (inputState.max) {
                input.max = inputState.max;
            }
            else {
                input.removeAttribute('max');
            }
            if (inputState.step) {
                input.step = inputState.step;
            }
            else {
                input.removeAttribute('step');
            }
        }
        // Use -1 to represent no minlength and maxlength, which is what the
        // platform input returns. However, it will throw an error if you try to
        // manually set it to -1.
        //
        // While the type is `number`, it may actually be `null` at runtime.
        // `null > -1` is true since `null` coerces to `0`, so we default null and
        // undefined to -1.
        //
        // We set attributes instead of properties since setting a property may
        // throw an out of bounds error in relation to the other property.
        // Attributes will not throw errors while the state is updating.
        if ((state.minLength ?? -1) > -1) {
            inputOrTextArea.setAttribute('minlength', String(state.minLength));
        }
        else {
            inputOrTextArea.removeAttribute('minlength');
        }
        if ((state.maxLength ?? -1) > -1) {
            inputOrTextArea.setAttribute('maxlength', String(state.maxLength));
        }
        else {
            inputOrTextArea.removeAttribute('maxlength');
        }
        return {
            validity: inputOrTextArea.validity,
            validationMessage: inputOrTextArea.validationMessage,
        };
    }
    equals({ state: prev }, { state: next }) {
        // Check shared input and textarea properties
        const inputOrTextAreaEqual = prev.type === next.type &&
            prev.value === next.value &&
            prev.required === next.required &&
            prev.minLength === next.minLength &&
            prev.maxLength === next.maxLength;
        if (!isInputState(prev) || !isInputState(next)) {
            // Both are textareas, all relevant properties are equal.
            return inputOrTextAreaEqual;
        }
        // Check additional input-specific properties.
        return (inputOrTextAreaEqual &&
            prev.pattern === next.pattern &&
            prev.min === next.min &&
            prev.max === next.max &&
            prev.step === next.step);
    }
    copy({ state }) {
        // Don't hold a reference to the rendered control when copying since we
        // don't use it when checking if the state changed.
        return {
            state: isInputState(state)
                ? this.copyInput(state)
                : this.copyTextArea(state),
            renderedControl: null,
        };
    }
    copyInput(state) {
        const { type, pattern, min, max, step } = state;
        return {
            ...this.copySharedState(state),
            type,
            pattern,
            min,
            max,
            step,
        };
    }
    copyTextArea(state) {
        return {
            ...this.copySharedState(state),
            type: state.type,
        };
    }
    copySharedState({ value, required, minLength, maxLength, }) {
        return { value, required, minLength, maxLength };
    }
}
function isInputState(state) {
    return state.type !== 'textarea';
}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Separate variable needed for closure.
const textFieldBaseClass = mixinDelegatesAria(mixinOnReportValidity(mixinConstraintValidation(mixinFormAssociated(mixinElementInternals(ScopedElementsMixin(i$3))))));
/**
 * A text field component.
 *
 * @fires select {Event} The native `select` event on
 * [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select_event)
 * --bubbles
 * @fires change {Event} The native `change` event on
 * [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
 * --bubbles
 * @fires input {InputEvent} The native `input` event on
 * [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
 * --bubbles --composed
 */
class TextField extends textFieldBaseClass {
    constructor() {
        super(...arguments);
        /**
         * Gets or sets whether or not the text field is in a visually invalid state.
         *
         * This error state overrides the error state controlled by
         * `reportValidity()`.
         */
        this.error = false;
        /**
         * The error message that replaces supporting text when `error` is true. If
         * `errorText` is an empty string, then the supporting text will continue to
         * show.
         *
         * This error message overrides the error message displayed by
         * `reportValidity()`.
         */
        this.errorText = '';
        /**
         * The floating Material label of the textfield component. It informs the user
         * about what information is requested for a text field. It is aligned with
         * the input text, is always visible, and it floats when focused or when text
         * is entered into the textfield. This label also sets accessibilty labels,
         * but the accessible label is overriden by `aria-label`.
         *
         * Learn more about floating labels from the Material Design guidelines:
         * https://m3.material.io/components/text-fields/guidelines
         */
        this.label = '';
        /**
         * Disables the asterisk on the floating label, when the text field is
         * required.
         */
        this.noAsterisk = false;
        /**
         * Indicates that the user must specify a value for the input before the
         * owning form can be submitted and will render an error state when
         * `reportValidity()` is invoked when value is empty. Additionally the
         * floating label will render an asterisk `"*"` when true.
         *
         * https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required
         */
        this.required = false;
        /**
         * The current value of the text field. It is always a string.
         */
        this.value = '';
        /**
         * An optional prefix to display before the input value.
         */
        this.prefixText = '';
        /**
         * An optional suffix to display after the input value.
         */
        this.suffixText = '';
        /**
         * Whether or not the text field has a leading icon. Used for SSR.
         */
        this.hasLeadingIcon = false;
        /**
         * Whether or not the text field has a trailing icon. Used for SSR.
         */
        this.hasTrailingIcon = false;
        /**
         * Conveys additional information below the text field, such as how it should
         * be used.
         */
        this.supportingText = '';
        /**
         * Override the input text CSS `direction`. Useful for RTL languages that use
         * LTR notation for fractions.
         */
        this.textDirection = '';
        /**
         * The number of rows to display for a `type="textarea"` text field.
         * Defaults to 2.
         */
        this.rows = 2;
        /**
         * The number of cols to display for a `type="textarea"` text field.
         * Defaults to 20.
         */
        this.cols = 20;
        // <input> properties
        this.inputMode = '';
        /**
         * Defines the greatest value in the range of permitted values.
         *
         * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#max
         */
        this.max = '';
        /**
         * The maximum number of characters a user can enter into the text field. Set
         * to -1 for none.
         *
         * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#maxlength
         */
        this.maxLength = -1;
        /**
         * Defines the most negative value in the range of permitted values.
         *
         * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#min
         */
        this.min = '';
        /**
         * The minimum number of characters a user can enter into the text field. Set
         * to -1 for none.
         *
         * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#minlength
         */
        this.minLength = -1;
        /**
         * When true, hide the spinner for `type="number"` text fields.
         */
        this.noSpinner = false;
        /**
         * A regular expression that the text field's value must match to pass
         * constraint validation.
         *
         * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#pattern
         */
        this.pattern = '';
        /**
         * Defines the text displayed in the textfield when it has no value. Provides
         * a brief hint to the user as to the expected type of data that should be
         * entered into the control. Unlike `label`, the placeholder is not visible
         * and does not float when the textfield has a value.
         *
         * https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/placeholder
         */
        this.placeholder = '';
        /**
         * Indicates whether or not a user should be able to edit the text field's
         * value.
         *
         * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#readonly
         */
        this.readOnly = false;
        /**
         * Indicates that input accepts multiple email addresses.
         *
         * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email#multiple
         */
        this.multiple = false;
        /**
         * Returns or sets the element's step attribute, which works with min and max
         * to limit the increments at which a numeric or date-time value can be set.
         *
         * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#step
         */
        this.step = '';
        /**
         * The `<input>` type to use, defaults to "text". The type greatly changes how
         * the text field behaves.
         *
         * Text fields support a limited number of `<input>` types:
         *
         * - text
         * - textarea
         * - email
         * - number
         * - password
         * - search
         * - tel
         * - url
         *
         * See
         * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types
         * for more details on each input type.
         */
        this.type = 'text';
        /**
         * Describes what, if any, type of autocomplete functionality the input
         * should provide.
         *
         * https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
         */
        this.autocomplete = '';
        /**
         * Returns true when the text field has been interacted with. Native
         * validation errors only display in response to user interactions.
         */
        this.dirty = false;
        this.focused = false;
        /**
         * Whether or not a native error has been reported via `reportValidity()`.
         */
        this.nativeError = false;
        /**
         * The validation message displayed from a native error via
         * `reportValidity()`.
         */
        this.nativeErrorText = '';
    }
    /**
     * Gets or sets the direction in which selection occurred.
     */
    get selectionDirection() {
        return this.getInputOrTextarea().selectionDirection;
    }
    set selectionDirection(value) {
        this.getInputOrTextarea().selectionDirection = value;
    }
    /**
     * Gets or sets the end position or offset of a text selection.
     */
    get selectionEnd() {
        return this.getInputOrTextarea().selectionEnd;
    }
    set selectionEnd(value) {
        this.getInputOrTextarea().selectionEnd = value;
    }
    /**
     * Gets or sets the starting position or offset of a text selection.
     */
    get selectionStart() {
        return this.getInputOrTextarea().selectionStart;
    }
    set selectionStart(value) {
        this.getInputOrTextarea().selectionStart = value;
    }
    /**
     * The text field's value as a number.
     */
    get valueAsNumber() {
        const input = this.getInput();
        if (!input) {
            return NaN;
        }
        return input.valueAsNumber;
    }
    set valueAsNumber(value) {
        const input = this.getInput();
        if (!input) {
            return;
        }
        input.valueAsNumber = value;
        this.value = input.value;
    }
    /**
     * The text field's value as a Date.
     */
    get valueAsDate() {
        const input = this.getInput();
        if (!input) {
            return null;
        }
        return input.valueAsDate;
    }
    set valueAsDate(value) {
        const input = this.getInput();
        if (!input) {
            return;
        }
        input.valueAsDate = value;
        this.value = input.value;
    }
    get hasError() {
        return this.error || this.nativeError;
    }
    /**
     * Selects all the text in the text field.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select
     */
    select() {
        this.getInputOrTextarea().select();
    }
    setRangeText(...args) {
        // Calling setRangeText with 1 vs 3-4 arguments has different behavior.
        // Use spread syntax and type casting to ensure correct usage.
        this.getInputOrTextarea().setRangeText(...args);
        this.value = this.getInputOrTextarea().value;
    }
    /**
     * Sets the start and end positions of a selection in the text field.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setSelectionRange
     *
     * @param start The offset into the text field for the start of the selection.
     * @param end The offset into the text field for the end of the selection.
     * @param direction The direction in which the selection is performed.
     */
    setSelectionRange(start, end, direction) {
        this.getInputOrTextarea().setSelectionRange(start, end, direction);
    }
    /**
     * Decrements the value of a numeric type text field by `step` or `n` `step`
     * number of times.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/stepDown
     *
     * @param stepDecrement The number of steps to decrement, defaults to 1.
     */
    stepDown(stepDecrement) {
        const input = this.getInput();
        if (!input) {
            return;
        }
        input.stepDown(stepDecrement);
        this.value = input.value;
    }
    /**
     * Increments the value of a numeric type text field by `step` or `n` `step`
     * number of times.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/stepUp
     *
     * @param stepIncrement The number of steps to increment, defaults to 1.
     */
    stepUp(stepIncrement) {
        const input = this.getInput();
        if (!input) {
            return;
        }
        input.stepUp(stepIncrement);
        this.value = input.value;
    }
    /**
     * Reset the text field to its default value.
     */
    reset() {
        this.dirty = false;
        this.value = this.getAttribute('value') ?? '';
        this.nativeError = false;
        this.nativeErrorText = '';
    }
    attributeChangedCallback(attribute, newValue, oldValue) {
        if (attribute === 'value' && this.dirty) {
            // After user input, changing the value attribute no longer updates the
            // text field's value (until reset). This matches native <input> behavior.
            return;
        }
        super.attributeChangedCallback(attribute, newValue, oldValue);
    }
    render() {
        const classes = {
            'disabled': this.disabled,
            'error': !this.disabled && this.hasError,
            'textarea': this.type === 'textarea',
            'no-spinner': this.noSpinner,
        };
        return x `
      <span class="text-field ${e(classes)}">
        ${this.renderField()}
      </span>
    `;
    }
    updated(changedProperties) {
        // Keep changedProperties arg so that subclasses may call it
        // If a property such as `type` changes and causes the internal <input>
        // value to change without dispatching an event, re-sync it.
        const value = this.getInputOrTextarea().value;
        if (this.value !== value) {
            // Note this is typically inefficient in updated() since it schedules
            // another update. However, it is needed for the <input> to fully render
            // before checking its value.
            this.value = value;
        }
    }
    renderField() {
        return u$1 `<${this.fieldTag}
      class="field"
      count=${this.value.length}
      ?disabled=${this.disabled}
      ?error=${this.hasError}
      error-text=${this.getErrorText()}
      ?focused=${this.focused}
      ?has-end=${this.hasTrailingIcon}
      ?has-start=${this.hasLeadingIcon}
      label=${this.label}
      ?no-asterisk=${this.noAsterisk}
      max=${this.maxLength}
      ?populated=${!!this.value}
      ?required=${this.required}
      ?resizable=${this.type === 'textarea'}
      supporting-text=${this.supportingText}
    >
      ${this.renderLeadingIcon()}
      ${this.renderInputOrTextarea()}
      ${this.renderTrailingIcon()}
      <div id="description" slot="aria-describedby"></div>
      <slot name="container" slot="container"></slot>
    </${this.fieldTag}>`;
    }
    renderLeadingIcon() {
        return x `
      <span class="icon leading" slot="start">
        <slot name="leading-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `;
    }
    renderTrailingIcon() {
        return x `
      <span class="icon trailing" slot="end">
        <slot name="trailing-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `;
    }
    renderInputOrTextarea() {
        const style = { 'direction': this.textDirection };
        const ariaLabel = this.ariaLabel || this.label || E;
        // lit-anaylzer `autocomplete` types are too strict
        // tslint:disable-next-line:no-any
        const autocomplete = this.autocomplete;
        // These properties may be set to null if the attribute is removed, and
        // `null > -1` is incorrectly `true`.
        const hasMaxLength = (this.maxLength ?? -1) > -1;
        const hasMinLength = (this.minLength ?? -1) > -1;
        if (this.type === 'textarea') {
            return x `
        <textarea
          class="input"
          style=${o$1(style)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${ariaLabel}
          autocomplete=${autocomplete || E}
          name=${this.name || E}
          ?disabled=${this.disabled}
          maxlength=${hasMaxLength ? this.maxLength : E}
          minlength=${hasMinLength ? this.minLength : E}
          placeholder=${this.placeholder || E}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          rows=${this.rows}
          cols=${this.cols}
          .value=${l(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent}></textarea>
      `;
        }
        const prefix = this.renderPrefix();
        const suffix = this.renderSuffix();
        // TODO(b/243805848): remove `as unknown as number` and `as any` once lit
        // analyzer is fixed
        // tslint:disable-next-line:no-any
        const inputMode = this.inputMode;
        return x `
      <div class="input-wrapper">
        ${prefix}
        <input
          class="input"
          style=${o$1(style)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${ariaLabel}
          autocomplete=${autocomplete || E}
          name=${this.name || E}
          ?disabled=${this.disabled}
          inputmode=${inputMode || E}
          max=${(this.max || E)}
          maxlength=${hasMaxLength ? this.maxLength : E}
          min=${(this.min || E)}
          minlength=${hasMinLength ? this.minLength : E}
          pattern=${this.pattern || E}
          placeholder=${this.placeholder || E}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          ?multiple=${this.multiple}
          step=${(this.step || E)}
          type=${this.type}
          .value=${l(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent} />
        ${suffix}
      </div>
    `;
    }
    renderPrefix() {
        return this.renderAffix(this.prefixText, /* isSuffix */ false);
    }
    renderSuffix() {
        return this.renderAffix(this.suffixText, /* isSuffix */ true);
    }
    renderAffix(text, isSuffix) {
        if (!text) {
            return E;
        }
        const classes = {
            'suffix': isSuffix,
            'prefix': !isSuffix,
        };
        return x `<span class="${e(classes)}">${text}</span>`;
    }
    getErrorText() {
        return this.error ? this.errorText : this.nativeErrorText;
    }
    handleFocusChange() {
        // When calling focus() or reportValidity() during change, it's possible
        // for blur to be called after the new focus event. Rather than set
        // `this.focused` to true/false on focus/blur, we always set it to whether
        // or not the input itself is focused.
        this.focused = this.inputOrTextarea?.matches(':focus') ?? false;
    }
    handleInput(event) {
        this.dirty = true;
        this.value = event.target.value;
    }
    redispatchEvent(event) {
        redispatchEvent(this, event);
    }
    getInputOrTextarea() {
        if (!this.inputOrTextarea) {
            // If the input is not yet defined, synchronously render.
            // e.g.
            // const textField = document.createElement('md-outlined-text-field');
            // document.body.appendChild(textField);
            // textField.focus(); // synchronously render
            this.connectedCallback();
            this.scheduleUpdate();
        }
        if (this.isUpdatePending) {
            // If there are pending updates, synchronously perform them. This ensures
            // that constraint validation properties (like `required`) are synced
            // before interacting with input APIs that depend on them.
            this.scheduleUpdate();
        }
        return this.inputOrTextarea;
    }
    getInput() {
        if (this.type === 'textarea') {
            return null;
        }
        return this.getInputOrTextarea();
    }
    handleIconChange() {
        this.hasLeadingIcon = this.leadingIcons.length > 0;
        this.hasTrailingIcon = this.trailingIcons.length > 0;
    }
    [getFormValue]() {
        return this.value;
    }
    formResetCallback() {
        this.reset();
    }
    formStateRestoreCallback(state) {
        this.value = state;
    }
    focus() {
        // Required for the case that the user slots a focusable element into the
        // leading icon slot such as an iconbutton due to how delegatesFocus works.
        this.getInputOrTextarea().focus();
    }
    [createValidator]() {
        return new TextFieldValidator(() => ({
            state: this,
            renderedControl: this.inputOrTextarea,
        }));
    }
    [getValidityAnchor]() {
        return this.inputOrTextarea;
    }
    [onReportValidity](invalidEvent) {
        // Prevent default pop-up behavior.
        invalidEvent?.preventDefault();
        const prevMessage = this.getErrorText();
        this.nativeError = !!invalidEvent;
        this.nativeErrorText = this.validationMessage;
        if (prevMessage === this.getErrorText()) {
            this.field?.reannounceError();
        }
    }
}
/** @nocollapse */
TextField.shadowRootOptions = {
    ...i$3.shadowRootOptions,
    delegatesFocus: true,
};
__decorate([
    n$3({ type: Boolean, reflect: true })
], TextField.prototype, "error", void 0);
__decorate([
    n$3({ attribute: 'error-text' })
], TextField.prototype, "errorText", void 0);
__decorate([
    n$3()
], TextField.prototype, "label", void 0);
__decorate([
    n$3({ type: Boolean, attribute: 'no-asterisk' })
], TextField.prototype, "noAsterisk", void 0);
__decorate([
    n$3({ type: Boolean, reflect: true })
], TextField.prototype, "required", void 0);
__decorate([
    n$3()
], TextField.prototype, "value", void 0);
__decorate([
    n$3({ attribute: 'prefix-text' })
], TextField.prototype, "prefixText", void 0);
__decorate([
    n$3({ attribute: 'suffix-text' })
], TextField.prototype, "suffixText", void 0);
__decorate([
    n$3({ type: Boolean, attribute: 'has-leading-icon' })
], TextField.prototype, "hasLeadingIcon", void 0);
__decorate([
    n$3({ type: Boolean, attribute: 'has-trailing-icon' })
], TextField.prototype, "hasTrailingIcon", void 0);
__decorate([
    n$3({ attribute: 'supporting-text' })
], TextField.prototype, "supportingText", void 0);
__decorate([
    n$3({ attribute: 'text-direction' })
], TextField.prototype, "textDirection", void 0);
__decorate([
    n$3({ type: Number })
], TextField.prototype, "rows", void 0);
__decorate([
    n$3({ type: Number })
], TextField.prototype, "cols", void 0);
__decorate([
    n$3({ reflect: true })
], TextField.prototype, "inputMode", void 0);
__decorate([
    n$3()
], TextField.prototype, "max", void 0);
__decorate([
    n$3({ type: Number })
], TextField.prototype, "maxLength", void 0);
__decorate([
    n$3()
], TextField.prototype, "min", void 0);
__decorate([
    n$3({ type: Number })
], TextField.prototype, "minLength", void 0);
__decorate([
    n$3({ type: Boolean, attribute: 'no-spinner' })
], TextField.prototype, "noSpinner", void 0);
__decorate([
    n$3()
], TextField.prototype, "pattern", void 0);
__decorate([
    n$3({ reflect: true, converter: stringConverter })
], TextField.prototype, "placeholder", void 0);
__decorate([
    n$3({ type: Boolean, reflect: true })
], TextField.prototype, "readOnly", void 0);
__decorate([
    n$3({ type: Boolean, reflect: true })
], TextField.prototype, "multiple", void 0);
__decorate([
    n$3()
], TextField.prototype, "step", void 0);
__decorate([
    n$3({ reflect: true })
], TextField.prototype, "type", void 0);
__decorate([
    n$3({ reflect: true })
], TextField.prototype, "autocomplete", void 0);
__decorate([
    r$1()
], TextField.prototype, "dirty", void 0);
__decorate([
    r$1()
], TextField.prototype, "focused", void 0);
__decorate([
    r$1()
], TextField.prototype, "nativeError", void 0);
__decorate([
    r$1()
], TextField.prototype, "nativeErrorText", void 0);
__decorate([
    e$3('.input')
], TextField.prototype, "inputOrTextarea", void 0);
__decorate([
    e$3('.field')
], TextField.prototype, "field", void 0);
__decorate([
    o$2({ slot: 'leading-icon' })
], TextField.prototype, "leadingIcons", void 0);
__decorate([
    o$2({ slot: 'trailing-icon' })
], TextField.prototype, "trailingIcons", void 0);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A field component.
 */
class Field extends i$3 {
    constructor() {
        super(...arguments);
        this.disabled = false;
        this.error = false;
        this.focused = false;
        this.label = '';
        this.noAsterisk = false;
        this.populated = false;
        this.required = false;
        this.resizable = false;
        this.supportingText = '';
        this.errorText = '';
        this.count = -1;
        this.max = -1;
        /**
         * Whether or not the field has leading content.
         */
        this.hasStart = false;
        /**
         * Whether or not the field has trailing content.
         */
        this.hasEnd = false;
        this.isAnimating = false;
        /**
         * When set to true, the error text's `role="alert"` will be removed, then
         * re-added after an animation frame. This will re-announce an error message
         * to screen readers.
         */
        this.refreshErrorAlert = false;
        this.disableTransitions = false;
    }
    get counterText() {
        // Count and max are typed as number, but can be set to null when Lit removes
        // their attributes. These getters coerce back to a number for calculations.
        const countAsNumber = this.count ?? -1;
        const maxAsNumber = this.max ?? -1;
        // Counter does not show if count is negative, or max is negative or 0.
        if (countAsNumber < 0 || maxAsNumber <= 0) {
            return '';
        }
        return `${countAsNumber} / ${maxAsNumber}`;
    }
    get supportingOrErrorText() {
        return this.error && this.errorText ? this.errorText : this.supportingText;
    }
    /**
     * Re-announces the field's error supporting text to screen readers.
     *
     * Error text announces to screen readers anytime it is visible and changes.
     * Use the method to re-announce the message when the text has not changed,
     * but announcement is still needed (such as for `reportValidity()`).
     */
    reannounceError() {
        this.refreshErrorAlert = true;
    }
    update(props) {
        // Client-side property updates
        const isDisabledChanging = props.has('disabled') && props.get('disabled') !== undefined;
        if (isDisabledChanging) {
            this.disableTransitions = true;
        }
        // When disabling, remove focus styles if focused.
        if (this.disabled && this.focused) {
            props.set('focused', true);
            this.focused = false;
        }
        // Animate if focused or populated change.
        this.animateLabelIfNeeded({
            wasFocused: props.get('focused'),
            wasPopulated: props.get('populated'),
        });
        super.update(props);
    }
    render() {
        const floatingLabel = this.renderLabel(/*isFloating*/ true);
        const restingLabel = this.renderLabel(/*isFloating*/ false);
        const outline = this.renderOutline?.(floatingLabel);
        const classes = {
            'disabled': this.disabled,
            'disable-transitions': this.disableTransitions,
            'error': this.error && !this.disabled,
            'focused': this.focused,
            'with-start': this.hasStart,
            'with-end': this.hasEnd,
            'populated': this.populated,
            'resizable': this.resizable,
            'required': this.required,
            'no-label': !this.label,
        };
        return x `
      <div class="field ${e(classes)}">
        <div class="container-overflow">
          ${this.renderBackground?.()}
          <slot name="container"></slot>
          ${this.renderStateLayer?.()} ${this.renderIndicator?.()} ${outline}
          <div class="container">
            <div class="start">
              <slot name="start"></slot>
            </div>
            <div class="middle">
              <div class="label-wrapper">
                ${restingLabel} ${outline ? E : floatingLabel}
              </div>
              <div class="content">
                <slot></slot>
              </div>
            </div>
            <div class="end">
              <slot name="end"></slot>
            </div>
          </div>
        </div>
        ${this.renderSupportingText()}
      </div>
    `;
    }
    updated(changed) {
        if (changed.has('supportingText') ||
            changed.has('errorText') ||
            changed.has('count') ||
            changed.has('max')) {
            this.updateSlottedAriaDescribedBy();
        }
        if (this.refreshErrorAlert) {
            // The past render cycle removed the role="alert" from the error message.
            // Re-add it after an animation frame to re-announce the error.
            requestAnimationFrame(() => {
                this.refreshErrorAlert = false;
            });
        }
        if (this.disableTransitions) {
            requestAnimationFrame(() => {
                this.disableTransitions = false;
            });
        }
    }
    renderSupportingText() {
        const { supportingOrErrorText, counterText } = this;
        if (!supportingOrErrorText && !counterText) {
            return E;
        }
        // Always render the supporting text span so that our `space-around`
        // container puts the counter at the end.
        const start = x `<span>${supportingOrErrorText}</span>`;
        // Conditionally render counter so we don't render the extra `gap`.
        // TODO(b/244473435): add aria-label and announcements
        const end = counterText
            ? x `<span class="counter">${counterText}</span>`
            : E;
        // Announce if there is an error and error text visible.
        // If refreshErrorAlert is true, do not announce. This will remove the
        // role="alert" attribute. Another render cycle will happen after an
        // animation frame to re-add the role.
        const shouldErrorAnnounce = this.error && this.errorText && !this.refreshErrorAlert;
        const role = shouldErrorAnnounce ? 'alert' : E;
        return x `
      <div class="supporting-text" role=${role}>${start}${end}</div>
      <slot
        name="aria-describedby"
        @slotchange=${this.updateSlottedAriaDescribedBy}></slot>
    `;
    }
    updateSlottedAriaDescribedBy() {
        for (const element of this.slottedAriaDescribedBy) {
            B(x `${this.supportingOrErrorText} ${this.counterText}`, element);
            element.setAttribute('hidden', '');
        }
    }
    renderLabel(isFloating) {
        if (!this.label) {
            return E;
        }
        let visible;
        if (isFloating) {
            // Floating label is visible when focused/populated or when animating.
            visible = this.focused || this.populated || this.isAnimating;
        }
        else {
            // Resting label is visible when unfocused. It is never visible while
            // animating.
            visible = !this.focused && !this.populated && !this.isAnimating;
        }
        const classes = {
            'hidden': !visible,
            'floating': isFloating,
            'resting': !isFloating,
        };
        // Add '*' if a label is present and the field is required
        const labelText = `${this.label}${this.required && !this.noAsterisk ? '*' : ''}`;
        return x `
      <span class="label ${e(classes)}" aria-hidden=${!visible}
        >${labelText}</span
      >
    `;
    }
    animateLabelIfNeeded({ wasFocused, wasPopulated, }) {
        if (!this.label) {
            return;
        }
        wasFocused ??= this.focused;
        wasPopulated ??= this.populated;
        const wasFloating = wasFocused || wasPopulated;
        const shouldBeFloating = this.focused || this.populated;
        if (wasFloating === shouldBeFloating) {
            return;
        }
        this.isAnimating = true;
        this.labelAnimation?.cancel();
        // Only one label is visible at a time for clearer text rendering.
        // The floating label is visible and used during animation. At the end of
        // the animation, it will either remain visible (if floating) or hide and
        // the resting label will be shown.
        //
        // We don't use forward filling because if the dimensions of the text field
        // change (leading icon removed, density changes, etc), then the animation
        // will be inaccurate.
        //
        // Re-calculating the animation each time will prevent any visual glitches
        // from appearing.
        // TODO(b/241113345): use animation tokens
        this.labelAnimation = this.floatingLabelEl?.animate(this.getLabelKeyframes(), { duration: 150, easing: EASING.STANDARD });
        this.labelAnimation?.addEventListener('finish', () => {
            // At the end of the animation, update the visible label.
            this.isAnimating = false;
        });
    }
    getLabelKeyframes() {
        const { floatingLabelEl, restingLabelEl } = this;
        if (!floatingLabelEl || !restingLabelEl) {
            return [];
        }
        const { x: floatingX, y: floatingY, height: floatingHeight, } = floatingLabelEl.getBoundingClientRect();
        const { x: restingX, y: restingY, height: restingHeight, } = restingLabelEl.getBoundingClientRect();
        const floatingScrollWidth = floatingLabelEl.scrollWidth;
        const restingScrollWidth = restingLabelEl.scrollWidth;
        // Scale by width ratio instead of font size since letter-spacing will scale
        // incorrectly. Using the width we can better approximate the adjusted
        // scale and compensate for tracking and overflow.
        // (use scrollWidth instead of width to account for clipped labels)
        const scale = restingScrollWidth / floatingScrollWidth;
        const xDelta = restingX - floatingX;
        // The line-height of the resting and floating label are different. When
        // we move the floating label down to the resting label's position, it won't
        // exactly match because of this. We need to adjust by half of what the
        // final scaled floating label's height will be.
        const yDelta = restingY -
            floatingY +
            Math.round((restingHeight - floatingHeight * scale) / 2);
        // Create the two transforms: floating to resting (using the calculations
        // above), and resting to floating (re-setting the transform to initial
        // values).
        const restTransform = `translateX(${xDelta}px) translateY(${yDelta}px) scale(${scale})`;
        const floatTransform = `translateX(0) translateY(0) scale(1)`;
        // Constrain the floating labels width to a scaled percentage of the
        // resting label's width. This will prevent long clipped labels from
        // overflowing the container.
        const restingClientWidth = restingLabelEl.clientWidth;
        const isRestingClipped = restingScrollWidth > restingClientWidth;
        const width = isRestingClipped ? `${restingClientWidth / scale}px` : '';
        if (this.focused || this.populated) {
            return [
                { transform: restTransform, width },
                { transform: floatTransform, width },
            ];
        }
        return [
            { transform: floatTransform, width },
            { transform: restTransform, width },
        ];
    }
    getSurfacePositionClientRect() {
        return this.containerEl.getBoundingClientRect();
    }
}
__decorate([
    n$3({ type: Boolean })
], Field.prototype, "disabled", void 0);
__decorate([
    n$3({ type: Boolean })
], Field.prototype, "error", void 0);
__decorate([
    n$3({ type: Boolean })
], Field.prototype, "focused", void 0);
__decorate([
    n$3()
], Field.prototype, "label", void 0);
__decorate([
    n$3({ type: Boolean, attribute: 'no-asterisk' })
], Field.prototype, "noAsterisk", void 0);
__decorate([
    n$3({ type: Boolean })
], Field.prototype, "populated", void 0);
__decorate([
    n$3({ type: Boolean })
], Field.prototype, "required", void 0);
__decorate([
    n$3({ type: Boolean })
], Field.prototype, "resizable", void 0);
__decorate([
    n$3({ attribute: 'supporting-text' })
], Field.prototype, "supportingText", void 0);
__decorate([
    n$3({ attribute: 'error-text' })
], Field.prototype, "errorText", void 0);
__decorate([
    n$3({ type: Number })
], Field.prototype, "count", void 0);
__decorate([
    n$3({ type: Number })
], Field.prototype, "max", void 0);
__decorate([
    n$3({ type: Boolean, attribute: 'has-start' })
], Field.prototype, "hasStart", void 0);
__decorate([
    n$3({ type: Boolean, attribute: 'has-end' })
], Field.prototype, "hasEnd", void 0);
__decorate([
    o$2({ slot: 'aria-describedby' })
], Field.prototype, "slottedAriaDescribedBy", void 0);
__decorate([
    r$1()
], Field.prototype, "isAnimating", void 0);
__decorate([
    r$1()
], Field.prototype, "refreshErrorAlert", void 0);
__decorate([
    r$1()
], Field.prototype, "disableTransitions", void 0);
__decorate([
    e$3('.label.floating')
], Field.prototype, "floatingLabelEl", void 0);
__decorate([
    e$3('.label.resting')
], Field.prototype, "restingLabelEl", void 0);
__decorate([
    e$3('.container')
], Field.prototype, "containerEl", void 0);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * An outlined field component.
 */
class OutlinedField extends Field {
    renderOutline(floatingLabel) {
        return x `
      <div class="outline">
        <div class="outline-start"></div>
        <div class="outline-notch">
          <div class="outline-panel-inactive"></div>
          <div class="outline-panel-active"></div>
          <div class="outline-label">${floatingLabel}</div>
        </div>
        <div class="outline-end"></div>
      </div>
    `;
    }
}

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const styles$8 = i$5 `@layer styles{:host{--_bottom-space: var(--md-outlined-field-bottom-space, 16px);--_content-color: var(--md-outlined-field-content-color, var(--md-sys-color-on-surface, #1d1b20));--_content-font: var(--md-outlined-field-content-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_content-line-height: var(--md-outlined-field-content-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_content-size: var(--md-outlined-field-content-size, var(--md-sys-typescale-body-large-size, 1rem));--_content-space: var(--md-outlined-field-content-space, 16px);--_content-weight: var(--md-outlined-field-content-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_disabled-content-color: var(--md-outlined-field-disabled-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-content-opacity: var(--md-outlined-field-disabled-content-opacity, 0.38);--_disabled-label-text-color: var(--md-outlined-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-field-disabled-label-text-opacity, 0.38);--_disabled-leading-content-color: var(--md-outlined-field-disabled-leading-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-content-opacity: var(--md-outlined-field-disabled-leading-content-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-field-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-field-disabled-outline-opacity, 0.12);--_disabled-outline-width: var(--md-outlined-field-disabled-outline-width, 1px);--_disabled-supporting-text-color: var(--md-outlined-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-outlined-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-content-color: var(--md-outlined-field-disabled-trailing-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-content-opacity: var(--md-outlined-field-disabled-trailing-content-opacity, 0.38);--_error-content-color: var(--md-outlined-field-error-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-content-color: var(--md-outlined-field-error-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-outlined-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-content-color: var(--md-outlined-field-error-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-outline-color: var(--md-outlined-field-error-focus-outline-color, var(--md-sys-color-error, #b3261e));--_error-focus-supporting-text-color: var(--md-outlined-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-content-color: var(--md-outlined-field-error-focus-trailing-content-color, var(--md-sys-color-error, #b3261e));--_error-hover-content-color: var(--md-outlined-field-error-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-outlined-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-content-color: var(--md-outlined-field-error-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-outline-color: var(--md-outlined-field-error-hover-outline-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-supporting-text-color: var(--md-outlined-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-content-color: var(--md-outlined-field-error-hover-trailing-content-color, var(--md-sys-color-on-error-container, #410e0b));--_error-label-text-color: var(--md-outlined-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-content-color: var(--md-outlined-field-error-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-outline-color: var(--md-outlined-field-error-outline-color, var(--md-sys-color-error, #b3261e));--_error-supporting-text-color: var(--md-outlined-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-content-color: var(--md-outlined-field-error-trailing-content-color, var(--md-sys-color-error, #b3261e));--_focus-content-color: var(--md-outlined-field-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-outlined-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-content-color: var(--md-outlined-field-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-outline-color: var(--md-outlined-field-focus-outline-color, var(--md-sys-color-primary, #6750a4));--_focus-outline-width: var(--md-outlined-field-focus-outline-width, 3px);--_focus-supporting-text-color: var(--md-outlined-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-content-color: var(--md-outlined-field-focus-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-content-color: var(--md-outlined-field-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-outlined-field-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-leading-content-color: var(--md-outlined-field-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-outline-color: var(--md-outlined-field-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-outline-width: var(--md-outlined-field-hover-outline-width, 1px);--_hover-supporting-text-color: var(--md-outlined-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-content-color: var(--md-outlined-field-hover-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-color: var(--md-outlined-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-outlined-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-padding-bottom: var(--md-outlined-field-label-text-padding-bottom, 8px);--_label-text-populated-line-height: var(--md-outlined-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-outlined-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-outlined-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-outlined-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-content-color: var(--md-outlined-field-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-space: var(--md-outlined-field-leading-space, 16px);--_outline-color: var(--md-outlined-field-outline-color, var(--md-sys-color-outline, #79747e));--_outline-label-padding: var(--md-outlined-field-outline-label-padding, 4px);--_outline-width: var(--md-outlined-field-outline-width, 1px);--_supporting-text-color: var(--md-outlined-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-outlined-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-leading-space: var(--md-outlined-field-supporting-text-leading-space, 16px);--_supporting-text-line-height: var(--md-outlined-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-outlined-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-top-space: var(--md-outlined-field-supporting-text-top-space, 4px);--_supporting-text-trailing-space: var(--md-outlined-field-supporting-text-trailing-space, 16px);--_supporting-text-weight: var(--md-outlined-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_top-space: var(--md-outlined-field-top-space, 16px);--_trailing-content-color: var(--md-outlined-field-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-space: var(--md-outlined-field-trailing-space, 16px);--_with-leading-content-leading-space: var(--md-outlined-field-with-leading-content-leading-space, 12px);--_with-trailing-content-trailing-space: var(--md-outlined-field-with-trailing-content-trailing-space, 12px);--_container-shape-start-start: var(--md-outlined-field-container-shape-start-start, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-start-end: var(--md-outlined-field-container-shape-start-end, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-end: var(--md-outlined-field-container-shape-end-end, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-start: var(--md-outlined-field-container-shape-end-start, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)))}.outline{border-color:var(--_outline-color);border-radius:inherit;display:flex;pointer-events:none;height:100%;position:absolute;width:100%;z-index:1}.outline-start::before,.outline-start::after,.outline-panel-inactive::before,.outline-panel-inactive::after,.outline-panel-active::before,.outline-panel-active::after,.outline-end::before,.outline-end::after{border:inherit;content:"";inset:0;position:absolute}.outline-start,.outline-end{border:inherit;border-radius:inherit;box-sizing:border-box;position:relative}.outline-start::before,.outline-start::after,.outline-end::before,.outline-end::after{border-bottom-style:solid;border-top-style:solid}.outline-start::after,.outline-end::after{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .outline-start::after,.focused .outline-end::after{opacity:1}.outline-start::before,.outline-start::after{border-inline-start-style:solid;border-inline-end-style:none;border-start-start-radius:inherit;border-start-end-radius:0;border-end-start-radius:inherit;border-end-end-radius:0;margin-inline-end:var(--_outline-label-padding)}.outline-end{flex-grow:1;margin-inline-start:calc(-1*var(--_outline-label-padding))}.outline-end::before,.outline-end::after{border-inline-start-style:none;border-inline-end-style:solid;border-start-start-radius:0;border-start-end-radius:inherit;border-end-start-radius:0;border-end-end-radius:inherit}.outline-notch{align-items:flex-start;border:inherit;display:flex;margin-inline-start:calc(-1*var(--_outline-label-padding));margin-inline-end:var(--_outline-label-padding);max-width:calc(100% - var(--_leading-space) - var(--_trailing-space));padding:0 var(--_outline-label-padding);position:relative}.no-label .outline-notch{display:none}.outline-panel-inactive,.outline-panel-active{border:inherit;border-bottom-style:solid;inset:0;position:absolute}.outline-panel-inactive::before,.outline-panel-inactive::after,.outline-panel-active::before,.outline-panel-active::after{border-top-style:solid;border-bottom:none;bottom:auto;transform:scaleX(1);transition:transform 150ms cubic-bezier(0.2, 0, 0, 1)}.outline-panel-inactive::before,.outline-panel-active::before{right:50%;transform-origin:top left}.outline-panel-inactive::after,.outline-panel-active::after{left:50%;transform-origin:top right}.populated .outline-panel-inactive::before,.populated .outline-panel-inactive::after,.populated .outline-panel-active::before,.populated .outline-panel-active::after,.focused .outline-panel-inactive::before,.focused .outline-panel-inactive::after,.focused .outline-panel-active::before,.focused .outline-panel-active::after{transform:scaleX(0)}.outline-panel-active{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .outline-panel-active{opacity:1}.outline-label{display:flex;max-width:100%;transform:translateY(calc(-100% + var(--_label-text-padding-bottom)))}.outline-start,.field:not(.with-start) .content ::slotted(*){padding-inline-start:max(var(--_leading-space),max(var(--_container-shape-start-start),var(--_container-shape-end-start)) + var(--_outline-label-padding))}.field:not(.with-start) .label-wrapper{margin-inline-start:max(var(--_leading-space),max(var(--_container-shape-start-start),var(--_container-shape-end-start)) + var(--_outline-label-padding))}.field:not(.with-end) .content ::slotted(*){padding-inline-end:max(var(--_trailing-space),max(var(--_container-shape-start-end),var(--_container-shape-end-end)))}.field:not(.with-end) .label-wrapper{margin-inline-end:max(var(--_trailing-space),max(var(--_container-shape-start-end),var(--_container-shape-end-end)))}.outline-start::before,.outline-end::before,.outline-panel-inactive,.outline-panel-inactive::before,.outline-panel-inactive::after{border-width:var(--_outline-width)}:hover .outline{border-color:var(--_hover-outline-color);color:var(--_hover-outline-color)}:hover .outline-start::before,:hover .outline-end::before,:hover .outline-panel-inactive,:hover .outline-panel-inactive::before,:hover .outline-panel-inactive::after{border-width:var(--_hover-outline-width)}.focused .outline{border-color:var(--_focus-outline-color);color:var(--_focus-outline-color)}.outline-start::after,.outline-end::after,.outline-panel-active,.outline-panel-active::before,.outline-panel-active::after{border-width:var(--_focus-outline-width)}.disabled .outline{border-color:var(--_disabled-outline-color);color:var(--_disabled-outline-color)}.disabled .outline-start,.disabled .outline-end,.disabled .outline-panel-inactive{opacity:var(--_disabled-outline-opacity)}.disabled .outline-start::before,.disabled .outline-end::before,.disabled .outline-panel-inactive,.disabled .outline-panel-inactive::before,.disabled .outline-panel-inactive::after{border-width:var(--_disabled-outline-width)}.error .outline{border-color:var(--_error-outline-color);color:var(--_error-outline-color)}.error:hover .outline{border-color:var(--_error-hover-outline-color);color:var(--_error-hover-outline-color)}.error.focused .outline{border-color:var(--_error-focus-outline-color);color:var(--_error-focus-outline-color)}.resizable .container{bottom:var(--_focus-outline-width);inset-inline-end:var(--_focus-outline-width);clip-path:inset(var(--_focus-outline-width) 0 0 var(--_focus-outline-width))}.resizable .container>*{top:var(--_focus-outline-width);inset-inline-start:var(--_focus-outline-width)}.resizable .container:dir(rtl){clip-path:inset(var(--_focus-outline-width) var(--_focus-outline-width) 0 0)}}@layer hcm{@media(forced-colors: active){.disabled .outline{border-color:GrayText;color:GrayText}.disabled :is(.outline-start,.outline-end,.outline-panel-inactive){opacity:1}}}
`;

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const styles$7 = i$5 `:host{display:inline-flex;resize:both}.field{display:flex;flex:1;flex-direction:column;writing-mode:horizontal-tb;max-width:100%}.container-overflow{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);display:flex;height:100%;position:relative}.container{align-items:center;border-radius:inherit;display:flex;flex:1;max-height:100%;min-height:100%;min-width:min-content;position:relative}.field,.container-overflow{resize:inherit}.resizable:not(.disabled) .container{resize:inherit;overflow:hidden}.disabled{pointer-events:none}slot[name=container]{border-radius:inherit}slot[name=container]::slotted(*){border-radius:inherit;inset:0;pointer-events:none;position:absolute}@layer styles{.start,.middle,.end{display:flex;box-sizing:border-box;height:100%;position:relative}.start{color:var(--_leading-content-color)}.end{color:var(--_trailing-content-color)}.start,.end{align-items:center;justify-content:center}.with-start .start{margin-inline:var(--_with-leading-content-leading-space) var(--_content-space)}.with-end .end{margin-inline:var(--_content-space) var(--_with-trailing-content-trailing-space)}.middle{align-items:stretch;align-self:baseline;flex:1}.content{color:var(--_content-color);display:flex;flex:1;opacity:0;transition:opacity 83ms cubic-bezier(0.2, 0, 0, 1)}.no-label .content,.focused .content,.populated .content{opacity:1;transition-delay:67ms}:is(.disabled,.disable-transitions) .content{transition:none}.content ::slotted(*){all:unset;color:currentColor;font-family:var(--_content-font);font-size:var(--_content-size);line-height:var(--_content-line-height);font-weight:var(--_content-weight);width:100%;overflow-wrap:revert;white-space:revert}.content ::slotted(:not(textarea)){padding-top:var(--_top-space);padding-bottom:var(--_bottom-space)}.content ::slotted(textarea){margin-top:var(--_top-space);margin-bottom:var(--_bottom-space)}:hover .content{color:var(--_hover-content-color)}:hover .start{color:var(--_hover-leading-content-color)}:hover .end{color:var(--_hover-trailing-content-color)}.focused .content{color:var(--_focus-content-color)}.focused .start{color:var(--_focus-leading-content-color)}.focused .end{color:var(--_focus-trailing-content-color)}.disabled .content{color:var(--_disabled-content-color)}.disabled.no-label .content,.disabled.focused .content,.disabled.populated .content{opacity:var(--_disabled-content-opacity)}.disabled .start{color:var(--_disabled-leading-content-color);opacity:var(--_disabled-leading-content-opacity)}.disabled .end{color:var(--_disabled-trailing-content-color);opacity:var(--_disabled-trailing-content-opacity)}.error .content{color:var(--_error-content-color)}.error .start{color:var(--_error-leading-content-color)}.error .end{color:var(--_error-trailing-content-color)}.error:hover .content{color:var(--_error-hover-content-color)}.error:hover .start{color:var(--_error-hover-leading-content-color)}.error:hover .end{color:var(--_error-hover-trailing-content-color)}.error.focused .content{color:var(--_error-focus-content-color)}.error.focused .start{color:var(--_error-focus-leading-content-color)}.error.focused .end{color:var(--_error-focus-trailing-content-color)}}@layer hcm{@media(forced-colors: active){.disabled :is(.start,.content,.end){color:GrayText;opacity:1}}}@layer styles{.label{box-sizing:border-box;color:var(--_label-text-color);overflow:hidden;max-width:100%;text-overflow:ellipsis;white-space:nowrap;z-index:1;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);width:min-content}.label-wrapper{inset:0;pointer-events:none;position:absolute}.label.resting{position:absolute;top:var(--_top-space)}.label.floating{font-size:var(--_label-text-populated-size);line-height:var(--_label-text-populated-line-height);transform-origin:top left}.label.hidden{opacity:0}.no-label .label{display:none}.label-wrapper{inset:0;position:absolute;text-align:initial}:hover .label{color:var(--_hover-label-text-color)}.focused .label{color:var(--_focus-label-text-color)}.disabled .label{color:var(--_disabled-label-text-color)}.disabled .label:not(.hidden){opacity:var(--_disabled-label-text-opacity)}.error .label{color:var(--_error-label-text-color)}.error:hover .label{color:var(--_error-hover-label-text-color)}.error.focused .label{color:var(--_error-focus-label-text-color)}}@layer hcm{@media(forced-colors: active){.disabled .label:not(.hidden){color:GrayText;opacity:1}}}@layer styles{.supporting-text{color:var(--_supporting-text-color);display:flex;font-family:var(--_supporting-text-font);font-size:var(--_supporting-text-size);line-height:var(--_supporting-text-line-height);font-weight:var(--_supporting-text-weight);gap:16px;justify-content:space-between;padding-inline-start:var(--_supporting-text-leading-space);padding-inline-end:var(--_supporting-text-trailing-space);padding-top:var(--_supporting-text-top-space)}.supporting-text :nth-child(2){flex-shrink:0}:hover .supporting-text{color:var(--_hover-supporting-text-color)}.focus .supporting-text{color:var(--_focus-supporting-text-color)}.disabled .supporting-text{color:var(--_disabled-supporting-text-color);opacity:var(--_disabled-supporting-text-opacity)}.error .supporting-text{color:var(--_error-supporting-text-color)}.error:hover .supporting-text{color:var(--_error-hover-supporting-text-color)}.error.focus .supporting-text{color:var(--_error-focus-supporting-text-color)}}@layer hcm{@media(forced-colors: active){.disabled .supporting-text{color:GrayText;opacity:1}}}
`;

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * TODO(b/228525797): add docs
 * @final
 * @suppress {visibility}
 */
class MdOutlinedField extends OutlinedField {
}
MdOutlinedField.styles = [styles$7, styles$8];

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const styles$6 = i$5 `:host{--_caret-color: var(--md-outlined-text-field-caret-color, var(--md-sys-color-primary, #6750a4));--_disabled-input-text-color: var(--md-outlined-text-field-disabled-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-input-text-opacity: var(--md-outlined-text-field-disabled-input-text-opacity, 0.38);--_disabled-label-text-color: var(--md-outlined-text-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-text-field-disabled-label-text-opacity, 0.38);--_disabled-leading-icon-color: var(--md-outlined-text-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-outlined-text-field-disabled-leading-icon-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-text-field-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-text-field-disabled-outline-opacity, 0.12);--_disabled-outline-width: var(--md-outlined-text-field-disabled-outline-width, 1px);--_disabled-supporting-text-color: var(--md-outlined-text-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-outlined-text-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-icon-color: var(--md-outlined-text-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-icon-opacity: var(--md-outlined-text-field-disabled-trailing-icon-opacity, 0.38);--_error-focus-caret-color: var(--md-outlined-text-field-error-focus-caret-color, var(--md-sys-color-error, #b3261e));--_error-focus-input-text-color: var(--md-outlined-text-field-error-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-outlined-text-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-icon-color: var(--md-outlined-text-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-outline-color: var(--md-outlined-text-field-error-focus-outline-color, var(--md-sys-color-error, #b3261e));--_error-focus-supporting-text-color: var(--md-outlined-text-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-icon-color: var(--md-outlined-text-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_error-hover-input-text-color: var(--md-outlined-text-field-error-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-outlined-text-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-icon-color: var(--md-outlined-text-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-outline-color: var(--md-outlined-text-field-error-hover-outline-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-supporting-text-color: var(--md-outlined-text-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-icon-color: var(--md-outlined-text-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_error-input-text-color: var(--md-outlined-text-field-error-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-label-text-color: var(--md-outlined-text-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-icon-color: var(--md-outlined-text-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-outline-color: var(--md-outlined-text-field-error-outline-color, var(--md-sys-color-error, #b3261e));--_error-supporting-text-color: var(--md-outlined-text-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-icon-color: var(--md-outlined-text-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_focus-input-text-color: var(--md-outlined-text-field-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-outlined-text-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-icon-color: var(--md-outlined-text-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-outline-color: var(--md-outlined-text-field-focus-outline-color, var(--md-sys-color-primary, #6750a4));--_focus-outline-width: var(--md-outlined-text-field-focus-outline-width, 3px);--_focus-supporting-text-color: var(--md-outlined-text-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-icon-color: var(--md-outlined-text-field-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-input-text-color: var(--md-outlined-text-field-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-outlined-text-field-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-leading-icon-color: var(--md-outlined-text-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-outline-color: var(--md-outlined-text-field-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-outline-width: var(--md-outlined-text-field-hover-outline-width, 1px);--_hover-supporting-text-color: var(--md-outlined-text-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-outlined-text-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-color: var(--md-outlined-text-field-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_input-text-font: var(--md-outlined-text-field-input-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_input-text-line-height: var(--md-outlined-text-field-input-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_input-text-placeholder-color: var(--md-outlined-text-field-input-text-placeholder-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-prefix-color: var(--md-outlined-text-field-input-text-prefix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-size: var(--md-outlined-text-field-input-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_input-text-suffix-color: var(--md-outlined-text-field-input-text-suffix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-weight: var(--md-outlined-text-field-input-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_label-text-color: var(--md-outlined-text-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-outlined-text-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-text-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-populated-line-height: var(--md-outlined-text-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-outlined-text-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-outlined-text-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-outlined-text-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-icon-color: var(--md-outlined-text-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-icon-size: var(--md-outlined-text-field-leading-icon-size, 24px);--_outline-color: var(--md-outlined-text-field-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-outlined-text-field-outline-width, 1px);--_supporting-text-color: var(--md-outlined-text-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-outlined-text-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-line-height: var(--md-outlined-text-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-outlined-text-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-weight: var(--md-outlined-text-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_trailing-icon-color: var(--md-outlined-text-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-size: var(--md-outlined-text-field-trailing-icon-size, 24px);--_container-shape-start-start: var(--md-outlined-text-field-container-shape-start-start, var(--md-outlined-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-start-end: var(--md-outlined-text-field-container-shape-start-end, var(--md-outlined-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-end: var(--md-outlined-text-field-container-shape-end-end, var(--md-outlined-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-start: var(--md-outlined-text-field-container-shape-end-start, var(--md-outlined-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_icon-input-space: var(--md-outlined-text-field-icon-input-space, 16px);--_leading-space: var(--md-outlined-text-field-leading-space, 16px);--_trailing-space: var(--md-outlined-text-field-trailing-space, 16px);--_top-space: var(--md-outlined-text-field-top-space, 16px);--_bottom-space: var(--md-outlined-text-field-bottom-space, 16px);--_input-text-prefix-trailing-space: var(--md-outlined-text-field-input-text-prefix-trailing-space, 2px);--_input-text-suffix-leading-space: var(--md-outlined-text-field-input-text-suffix-leading-space, 2px);--_focus-caret-color: var(--md-outlined-text-field-focus-caret-color, var(--md-sys-color-primary, #6750a4));--_with-leading-icon-leading-space: var(--md-outlined-text-field-with-leading-icon-leading-space, 12px);--_with-trailing-icon-trailing-space: var(--md-outlined-text-field-with-trailing-icon-trailing-space, 12px);--md-outlined-field-bottom-space: var(--_bottom-space);--md-outlined-field-container-shape-end-end: var(--_container-shape-end-end);--md-outlined-field-container-shape-end-start: var(--_container-shape-end-start);--md-outlined-field-container-shape-start-end: var(--_container-shape-start-end);--md-outlined-field-container-shape-start-start: var(--_container-shape-start-start);--md-outlined-field-content-color: var(--_input-text-color);--md-outlined-field-content-font: var(--_input-text-font);--md-outlined-field-content-line-height: var(--_input-text-line-height);--md-outlined-field-content-size: var(--_input-text-size);--md-outlined-field-content-space: var(--_icon-input-space);--md-outlined-field-content-weight: var(--_input-text-weight);--md-outlined-field-disabled-content-color: var(--_disabled-input-text-color);--md-outlined-field-disabled-content-opacity: var(--_disabled-input-text-opacity);--md-outlined-field-disabled-label-text-color: var(--_disabled-label-text-color);--md-outlined-field-disabled-label-text-opacity: var(--_disabled-label-text-opacity);--md-outlined-field-disabled-leading-content-color: var(--_disabled-leading-icon-color);--md-outlined-field-disabled-leading-content-opacity: var(--_disabled-leading-icon-opacity);--md-outlined-field-disabled-outline-color: var(--_disabled-outline-color);--md-outlined-field-disabled-outline-opacity: var(--_disabled-outline-opacity);--md-outlined-field-disabled-outline-width: var(--_disabled-outline-width);--md-outlined-field-disabled-supporting-text-color: var(--_disabled-supporting-text-color);--md-outlined-field-disabled-supporting-text-opacity: var(--_disabled-supporting-text-opacity);--md-outlined-field-disabled-trailing-content-color: var(--_disabled-trailing-icon-color);--md-outlined-field-disabled-trailing-content-opacity: var(--_disabled-trailing-icon-opacity);--md-outlined-field-error-content-color: var(--_error-input-text-color);--md-outlined-field-error-focus-content-color: var(--_error-focus-input-text-color);--md-outlined-field-error-focus-label-text-color: var(--_error-focus-label-text-color);--md-outlined-field-error-focus-leading-content-color: var(--_error-focus-leading-icon-color);--md-outlined-field-error-focus-outline-color: var(--_error-focus-outline-color);--md-outlined-field-error-focus-supporting-text-color: var(--_error-focus-supporting-text-color);--md-outlined-field-error-focus-trailing-content-color: var(--_error-focus-trailing-icon-color);--md-outlined-field-error-hover-content-color: var(--_error-hover-input-text-color);--md-outlined-field-error-hover-label-text-color: var(--_error-hover-label-text-color);--md-outlined-field-error-hover-leading-content-color: var(--_error-hover-leading-icon-color);--md-outlined-field-error-hover-outline-color: var(--_error-hover-outline-color);--md-outlined-field-error-hover-supporting-text-color: var(--_error-hover-supporting-text-color);--md-outlined-field-error-hover-trailing-content-color: var(--_error-hover-trailing-icon-color);--md-outlined-field-error-label-text-color: var(--_error-label-text-color);--md-outlined-field-error-leading-content-color: var(--_error-leading-icon-color);--md-outlined-field-error-outline-color: var(--_error-outline-color);--md-outlined-field-error-supporting-text-color: var(--_error-supporting-text-color);--md-outlined-field-error-trailing-content-color: var(--_error-trailing-icon-color);--md-outlined-field-focus-content-color: var(--_focus-input-text-color);--md-outlined-field-focus-label-text-color: var(--_focus-label-text-color);--md-outlined-field-focus-leading-content-color: var(--_focus-leading-icon-color);--md-outlined-field-focus-outline-color: var(--_focus-outline-color);--md-outlined-field-focus-outline-width: var(--_focus-outline-width);--md-outlined-field-focus-supporting-text-color: var(--_focus-supporting-text-color);--md-outlined-field-focus-trailing-content-color: var(--_focus-trailing-icon-color);--md-outlined-field-hover-content-color: var(--_hover-input-text-color);--md-outlined-field-hover-label-text-color: var(--_hover-label-text-color);--md-outlined-field-hover-leading-content-color: var(--_hover-leading-icon-color);--md-outlined-field-hover-outline-color: var(--_hover-outline-color);--md-outlined-field-hover-outline-width: var(--_hover-outline-width);--md-outlined-field-hover-supporting-text-color: var(--_hover-supporting-text-color);--md-outlined-field-hover-trailing-content-color: var(--_hover-trailing-icon-color);--md-outlined-field-label-text-color: var(--_label-text-color);--md-outlined-field-label-text-font: var(--_label-text-font);--md-outlined-field-label-text-line-height: var(--_label-text-line-height);--md-outlined-field-label-text-populated-line-height: var(--_label-text-populated-line-height);--md-outlined-field-label-text-populated-size: var(--_label-text-populated-size);--md-outlined-field-label-text-size: var(--_label-text-size);--md-outlined-field-label-text-weight: var(--_label-text-weight);--md-outlined-field-leading-content-color: var(--_leading-icon-color);--md-outlined-field-leading-space: var(--_leading-space);--md-outlined-field-outline-color: var(--_outline-color);--md-outlined-field-outline-width: var(--_outline-width);--md-outlined-field-supporting-text-color: var(--_supporting-text-color);--md-outlined-field-supporting-text-font: var(--_supporting-text-font);--md-outlined-field-supporting-text-line-height: var(--_supporting-text-line-height);--md-outlined-field-supporting-text-size: var(--_supporting-text-size);--md-outlined-field-supporting-text-weight: var(--_supporting-text-weight);--md-outlined-field-top-space: var(--_top-space);--md-outlined-field-trailing-content-color: var(--_trailing-icon-color);--md-outlined-field-trailing-space: var(--_trailing-space);--md-outlined-field-with-leading-content-leading-space: var(--_with-leading-icon-leading-space);--md-outlined-field-with-trailing-content-trailing-space: var(--_with-trailing-icon-trailing-space)}
`;

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const styles$5 = i$5 `:host{display:inline-flex;outline:none;resize:both;text-align:start;-webkit-tap-highlight-color:rgba(0,0,0,0)}.text-field,.field{width:100%}.text-field{display:inline-flex}.field{cursor:text}.disabled .field{cursor:default}.text-field,.textarea .field{resize:inherit}slot[name=container]{border-radius:inherit}.icon{color:currentColor;display:flex;align-items:center;justify-content:center;fill:currentColor;position:relative}.icon ::slotted(*){display:flex;position:absolute}[has-start] .icon.leading{font-size:var(--_leading-icon-size);height:var(--_leading-icon-size);width:var(--_leading-icon-size)}[has-end] .icon.trailing{font-size:var(--_trailing-icon-size);height:var(--_trailing-icon-size);width:var(--_trailing-icon-size)}.input-wrapper{display:flex}.input-wrapper>*{all:inherit;padding:0}.input{caret-color:var(--_caret-color);overflow-x:hidden;text-align:inherit}.input::placeholder{color:currentColor;opacity:1}.input::-webkit-calendar-picker-indicator{display:none}.input::-webkit-search-decoration,.input::-webkit-search-cancel-button{display:none}@media(forced-colors: active){.input{background:none}}.no-spinner .input::-webkit-inner-spin-button,.no-spinner .input::-webkit-outer-spin-button{display:none}.no-spinner .input[type=number]{-moz-appearance:textfield}:focus-within .input{caret-color:var(--_focus-caret-color)}.error:focus-within .input{caret-color:var(--_error-focus-caret-color)}.text-field:not(.disabled) .prefix{color:var(--_input-text-prefix-color)}.text-field:not(.disabled) .suffix{color:var(--_input-text-suffix-color)}.text-field:not(.disabled) .input::placeholder{color:var(--_input-text-placeholder-color)}.prefix,.suffix{text-wrap:nowrap;width:min-content}.prefix{padding-inline-end:var(--_input-text-prefix-trailing-space)}.suffix{padding-inline-start:var(--_input-text-suffix-leading-space)}
`;

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * TODO(b/228525797): Add docs
 * @final
 * @suppress {visibility}
 */
class MdOutlinedTextField extends TextField {
    constructor() {
        super(...arguments);
        this.fieldTag = i `md-outlined-field`;
    }
}
MdOutlinedTextField.scopedElements = {
    'md-outlined-field': MdOutlinedField,
};
MdOutlinedTextField.styles = [styles$5, styles$6];

function searchRegex(filter) {
    var _a;
    if (!filter)
        return /.*/i;
    const terms = (_a = filter
        .replace(/[.+^${}()|[\]\\]/g, '\\$&')
        .trim()
        .match(/(?:[^\s"']+|['"][^'"]*["'])+/g)) !== null && _a !== void 0 ? _a : [];
    const expandedTerms = terms.map(term => term.replace(/\*/g, '.*').replace(/\?/g, '.{1}').replace(/"|'/g, ''));
    const regexString = expandedTerms.map(term => `(?=.*${term})`);
    return new RegExp(`${regexString.join('')}.*`, 'i');
}
function debounce(callback, delay = 100) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            callback(...args);
        }, delay);
    };
}
// Base class for all filterable list components
class FilterListBase extends ScopedElementsMixin(i$3) {
    constructor() {
        super(...arguments);
        /** Whether list items can be filtered on `headline` and `supportingText` */
        this.filterable = false;
        /** Placeholder for search input field */
        this.searchhelper = 'search';
        this.searchRegex = /.*/i;
    }
    onFilter() {
        var _a;
        this.searchRegex = searchRegex((_a = this.searchInput) === null || _a === void 0 ? void 0 : _a.value);
    }
    renderSearchField() {
        return this.filterable
            ? x `<md-outlined-text-field
          placeholder="${this.searchhelper}"
          @input="${debounce(() => this.onFilter())}"
        >
          <md-icon slot="leading-icon">search</md-icon></md-outlined-text-field
        >`
            : x ``;
    }
}
__decorate([
    n$3({ type: Boolean })
], FilterListBase.prototype, "filterable", void 0);
__decorate([
    n$3({ type: String })
], FilterListBase.prototype, "searchhelper", void 0);
__decorate([
    r$1()
], FilterListBase.prototype, "searchRegex", void 0);
__decorate([
    e$3('md-outlined-text-field')
], FilterListBase.prototype, "searchInput", void 0);

function term(item) {
    var _a, _b, _c;
    return `${item.headline} ${(_a = item.supportingText) !== null && _a !== void 0 ? _a : ''}${(_c = (_b = item.filtergroup) === null || _b === void 0 ? void 0 : _b.join(' ')) !== null && _c !== void 0 ? _c : ''}`;
}
/** TextField designed to be used for SCL element */
class ActionList extends FilterListBase {
    constructor() {
        super(...arguments);
        /** ListItems and potential */
        this.items = [];
        /** Height of each list item */
        this.height = 72;
    }
    renderMoreVertItem(item) {
        item.actions.shift();
        const otherActions = item.actions;
        return x `
      <span style="position: relative">
        <md-list-item
          id="more-vert-anchor"
          type="button"
          class="${e({
            hidden: !this.searchRegex.test(term(item)),
        })}"
          @click=${(evt) => {
            const menu = evt.target instanceof Icon
                ? evt.target.parentElement
                    .nextElementSibling
                : evt.target.nextElementSibling;
            menu.show();
        }}
        >
          <md-icon slot="start">more_vert</md-icon>
        </md-list-item>
        <md-menu id="more-vert-menu" anchor="more-vert-anchor">
          ${otherActions.map(action => x `<md-menu-item @click=${action.callback}>
              <div slot="headline">${action.label}</div>
              <md-icon slot="start">${action.icon}</md-icon>
            </md-menu-item>`)}
        </md-menu> </span
      >${item.divider
            ? x `<md-divider
            class="${e({ hidden: !this.searchRegex.test(term(item)) })}"
          ></md-divider>`
            : x ``}
    `;
    }
    renderActionItem(item, index = 0) {
        const action = item.actions ? item.actions[index] : null;
        if (!action)
            return x `<md-list-item
          class="${e({
                hidden: !this.searchRegex.test(term(item)),
            })}"
        ></md-list-item
        >${item.divider
                ? x `<md-divider
              class="${e({
                    hidden: !this.searchRegex.test(term(item)),
                })}"
            ></md-divider>`
                : x ``}`;
        return x `<md-list-item
        type="button"
        class="${e({
            hidden: !this.searchRegex.test(term(item)),
        })}"
        @click=${action.callback}
      >
        <md-icon slot="start">${action.icon}</md-icon> </md-list-item
      >${item.divider
            ? x `<md-divider
            class="${e({ hidden: !this.searchRegex.test(term(item)) })}"
          ></md-divider>`
            : x ``}`;
    }
    renderOtherActions() {
        return x `<md-list>
      ${this.items.map(item => {
            var _a;
            return item.actions && ((_a = item.actions) === null || _a === void 0 ? void 0 : _a.length) > 2
                ? this.renderMoreVertItem(item)
                : this.renderActionItem(item, 1);
        })}</md-list
    >`;
    }
    renderFirstAction() {
        return x `<md-list>
      ${this.items.map(item => this.renderActionItem(item))}</md-list
    >`;
    }
    renderActions() {
        return x `
      ${this.items.some(item => item.actions && item.actions[0])
            ? this.renderFirstAction()
            : x ``}
      ${this.items.some(item => item.actions && item.actions.length > 1)
            ? this.renderOtherActions()
            : x ``}
    `;
    }
    renderActionListItem(item) {
        var _a;
        return x `<md-list-item
        type="${item.primaryAction ? 'link' : 'text'}"
        class="${e({
            hidden: !this.searchRegex.test(term(item)),
        })}"
        title="${(_a = item.headline) !== null && _a !== void 0 ? _a : ''}
${item.headline && item.supportingText ? '-' : ''}${item.supportingText}"
        @click="${item.primaryAction}"
      >
        <div slot="headline" class="firstLine">${item.headline}</div>
        ${item.supportingText
            ? x `<div slot="supporting-text">${item.supportingText}</div>`
            : x ``}
        ${item.startingIcon
            ? x `<md-icon slot="start">${item.startingIcon}</md-icon>`
            : x ``}
        ${item.endingIcon
            ? x `<md-icon slot="end">${item.endingIcon}</md-icon>`
            : x ``} </md-list-item
      >${item.divider
            ? x `<md-divider
            class="${e({ hidden: !this.searchRegex.test(term(item)) })}"
          ></md-divider>`
            : x ``}`;
    }
    renderListItem(item) {
        return this.renderActionListItem(item);
    }
    render() {
        return x `<style>
        md-list-item {
          height: ${this.height}px;
        }
        [slot='supporting-text'] {
          max-height: ${this.height - 24}px;
        }
      </style>
      <section>
        ${this.renderSearchField()}
        <div style="display: flex;">
          <md-list class="listitems">
            ${this.items.map(item => this.renderListItem(item))}</md-list
          >
          ${this.renderActions()}
        </div>
      </section>`;
    }
}
ActionList.scopedElements = {
    'md-outlined-text-field': MdOutlinedTextField,
    'md-icon': MdIcon,
    'md-list': MdList,
    'md-list-item': MdListItem,
    'md-divider': MdDivider,
    'md-menu': MdMenu,
    'md-menu-item': MdMenuItem,
};
ActionList.styles = i$5 `
    section {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    md-outlined-text-field {
      background-color: var(--md-sys-color-surface, #fef7ff);
      --md-outlined-text-field-container-shape: 32px;
      padding: 8px;
    }

    [slot='headline'] {
      white-space: pre;
    }

    [slot='supporting-text'] {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: normal;
    }

    .listitems {
      flex: auto;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .hidden {
      display: none;
    }
  `;
__decorate([
    n$3({ type: Array })
], ActionList.prototype, "items", void 0);
__decorate([
    n$3({ type: Number })
], ActionList.prototype, "height", void 0);

function newEditEvent(edit) {
    return new CustomEvent('oscd-edit', {
        composed: true,
        bubbles: true,
        detail: edit,
    });
}

/** @returns the cartesian product of `arrays` */
function crossProduct(...arrays) {
    return arrays.reduce((a, b) => a.flatMap((d) => b.map((e) => [d, e].flat())), [[]]);
}

const tAbstractConductingEquipment = [
    "TransformerWinding",
    "ConductingEquipment",
];
const tEquipment = [
    "GeneralEquipment",
    "PowerTransformer",
    ...tAbstractConductingEquipment,
];
const tEquipmentContainer = ["Substation", "VoltageLevel", "Bay"];
const tGeneralEquipmentContainer = ["Process", "Line"];
const tAbstractEqFuncSubFunc = ["EqSubFunction", "EqFunction"];
const tPowerSystemResource = [
    "SubFunction",
    "Function",
    "TapChanger",
    "SubEquipment",
    ...tEquipment,
    ...tEquipmentContainer,
    ...tGeneralEquipmentContainer,
    ...tAbstractEqFuncSubFunc,
];
const tLNodeContainer = ["ConnectivityNode", ...tPowerSystemResource];
const tCertificate = ["GOOSESecurity", "SMVSecurity"];
const tNaming = ["SubNetwork", ...tCertificate, ...tLNodeContainer];
const tAbstractDataAttribute = ["BDA", "DA"];
const tControlWithIEDName = ["SampledValueControl", "GSEControl"];
const tControlWithTriggerOpt = ["LogControl", "ReportControl"];
const tControl = [...tControlWithIEDName, ...tControlWithTriggerOpt];
const tControlBlock = ["GSE", "SMV"];
const tUnNaming = [
    "ConnectedAP",
    "PhysConn",
    "SDO",
    "DO",
    "DAI",
    "SDI",
    "DOI",
    "Inputs",
    "RptEnabled",
    "Server",
    "ServerAt",
    "SettingControl",
    "Communication",
    "Log",
    "LDevice",
    "DataSet",
    "AccessPoint",
    "IED",
    "NeutralPoint",
    ...tControl,
    ...tControlBlock,
    ...tAbstractDataAttribute,
];
const tAnyLN = ["LN0", "LN"];
const tAnyContentFromOtherNamespace = [
    "Text",
    "Private",
    "Hitem",
    "AccessControl",
];
const tCert = ["Subject", "IssuerName"];
const tDurationInMilliSec = ["MinTime", "MaxTime"];
const tIDNaming = ["LNodeType", "DOType", "DAType", "EnumType"];
const tServiceYesNo = [
    "FileHandling",
    "TimeSyncProt",
    "CommProt",
    "SGEdit",
    "ConfSG",
    "GetDirectory",
    "GetDataObjectDefinition",
    "DataObjectDirectory",
    "GetDataSetValue",
    "SetDataSetValue",
    "DataSetDirectory",
    "ReadWrite",
    "TimerActivatedControl",
    "GetCBValues",
    "GSEDir",
    "ConfLdName",
];
const tServiceWithMaxAndMaxAttributes = ["DynDataSet", "ConfDataSet"];
const tServiceWithMax = [
    "GSSE",
    "GOOSE",
    "ConfReportControl",
    "SMVsc",
    ...tServiceWithMaxAndMaxAttributes,
];
const tServiceWithMaxNonZero = ["ConfLogControl", "ConfSigRef"];
const tServiceSettings = [
    "ReportSettings",
    "LogSettings",
    "GSESettings",
    "SMVSettings",
];
const tBaseElement = ["SCL", ...tNaming, ...tUnNaming, ...tIDNaming];
const sCLTags = [
    ...tBaseElement,
    ...tAnyContentFromOtherNamespace,
    "Header",
    "LNode",
    "Val",
    "Voltage",
    "Services",
    ...tCert,
    ...tDurationInMilliSec,
    "Association",
    "FCDA",
    "ClientLN",
    "IEDName",
    "ExtRef",
    "Protocol",
    ...tAnyLN,
    ...tServiceYesNo,
    "DynAssociation",
    "SettingGroups",
    ...tServiceWithMax,
    ...tServiceWithMaxNonZero,
    ...tServiceSettings,
    "ConfLNs",
    "ClientServices",
    "SupSubscription",
    "ValueHandling",
    "RedProt",
    "McSecurity",
    "KDC",
    "Address",
    "P",
    "ProtNs",
    "EnumVal",
    "Terminal",
    "BitRate",
    "Authentication",
    "DataTypeTemplates",
    "History",
    "OptFields",
    "SmvOpts",
    "TrgOps",
    "SamplesPerSec",
    "SmpRate",
    "SecPerSamples",
];
const tBaseNameSequence = ["Text", "Private"];
const tNamingSequence = [...tBaseNameSequence];
const tUnNamingSequence = [...tBaseNameSequence];
const tIDNamingSequence = [...tBaseNameSequence];
const tAbstractDataAttributeSequence = [...tUnNamingSequence, "Val"];
const tLNodeContainerSequence = [...tNamingSequence, "LNode"];
const tPowerSystemResourceSequence = [...tLNodeContainerSequence];
const tEquipmentSequence = [...tPowerSystemResourceSequence];
const tEquipmentContainerSequence = [
    ...tPowerSystemResourceSequence,
    "PowerTransformer",
    "GeneralEquipment",
];
const tAbstractConductingEquipmentSequence = [
    ...tEquipmentSequence,
    "Terminal",
];
const tControlBlockSequence = [...tUnNamingSequence, "Address"];
const tControlSequence = [...tNamingSequence];
const tControlWithIEDNameSequence = [...tControlSequence, "IEDName"];
const tAnyLNSequence = [
    ...tUnNamingSequence,
    "DataSet",
    "ReportControl",
    "LogControl",
    "DOI",
    "Inputs",
    "Log",
];
const tGeneralEquipmentContainerSequence = [
    ...tPowerSystemResourceSequence,
    "GeneralEquipment",
    "Function",
];
const tControlWithTriggerOptSequence = [...tControlSequence, "TrgOps"];
const tAbstractEqFuncSubFuncSequence = [
    ...tPowerSystemResourceSequence,
    "GeneralEquipment",
    "EqSubFunction",
];
({
    AccessControl: {
        parents: ["LDevice"],
        children: [],
    },
    AccessPoint: {
        parents: ["IED"],
        children: [
            ...tNamingSequence,
            "Server",
            "LN",
            "ServerAt",
            "Services",
            "GOOSESecurity",
            "SMVSecurity",
        ],
    },
    Address: {
        parents: ["ConnectedAP", "GSE", "SMV"],
        children: ["P"],
    },
    Association: {
        parents: ["Server"],
        children: [],
    },
    Authentication: {
        parents: ["Server"],
        children: [],
    },
    BDA: {
        parents: ["DAType"],
        children: [...tAbstractDataAttributeSequence],
    },
    BitRate: {
        parents: ["SubNetwork"],
        children: [],
    },
    Bay: {
        parents: ["VoltageLevel"],
        children: [
            ...tEquipmentContainerSequence,
            "ConductingEquipment",
            "ConnectivityNode",
            "Function",
        ],
    },
    ClientLN: {
        parents: ["RptEnabled"],
        children: [],
    },
    ClientServices: {
        parents: ["Services"],
        children: ["TimeSyncProt", "McSecurity"],
    },
    CommProt: {
        parents: ["Services"],
        children: [],
    },
    Communication: {
        parents: ["SCL"],
        children: [...tUnNamingSequence, "SubNetwork"],
    },
    ConductingEquipment: {
        parents: ["Process", "Line", "SubFunction", "Function", "Bay"],
        children: [
            ...tAbstractConductingEquipmentSequence,
            "EqFunction",
            "SubEquipment",
        ],
    },
    ConfDataSet: {
        parents: ["Services"],
        children: [],
    },
    ConfLdName: {
        parents: ["Services"],
        children: [],
    },
    ConfLNs: {
        parents: ["Services"],
        children: [],
    },
    ConfLogControl: {
        parents: ["Services"],
        children: [],
    },
    ConfReportControl: {
        parents: ["Services"],
        children: [],
    },
    ConfSG: {
        parents: ["SettingGroups"],
        children: [],
    },
    ConfSigRef: {
        parents: ["Services"],
        children: [],
    },
    ConnectedAP: {
        parents: ["SubNetwork"],
        children: [...tUnNamingSequence, "Address", "GSE", "SMV", "PhysConn"],
    },
    ConnectivityNode: {
        parents: ["Bay", "Line"],
        children: [...tLNodeContainerSequence],
    },
    DA: {
        parents: ["DOType"],
        children: [...tAbstractDataAttributeSequence],
    },
    DAI: {
        parents: ["DOI", "SDI"],
        children: [...tUnNamingSequence, "Val"],
    },
    DAType: {
        parents: ["DataTypeTemplates"],
        children: [...tIDNamingSequence, "BDA", "ProtNs"],
    },
    DO: {
        parents: ["LNodeType"],
        children: [...tUnNamingSequence],
    },
    DOI: {
        parents: [...tAnyLN],
        children: [...tUnNamingSequence, "SDI", "DAI"],
    },
    DOType: {
        parents: ["DataTypeTemplates"],
        children: [...tIDNamingSequence, "SDO", "DA"],
    },
    DataObjectDirectory: {
        parents: ["Services"],
        children: [],
    },
    DataSet: {
        parents: [...tAnyLN],
        children: [...tNamingSequence, "FCDA"],
    },
    DataSetDirectory: {
        parents: ["Services"],
        children: [],
    },
    DataTypeTemplates: {
        parents: ["SCL"],
        children: ["LNodeType", "DOType", "DAType", "EnumType"],
    },
    DynAssociation: {
        parents: ["Services"],
        children: [],
    },
    DynDataSet: {
        parents: ["Services"],
        children: [],
    },
    EnumType: {
        parents: ["DataTypeTemplates"],
        children: [...tIDNamingSequence, "EnumVal"],
    },
    EnumVal: {
        parents: ["EnumType"],
        children: [],
    },
    EqFunction: {
        parents: [
            "GeneralEquipment",
            "TapChanger",
            "TransformerWinding",
            "PowerTransformer",
            "SubEquipment",
            "ConductingEquipment",
        ],
        children: [...tAbstractEqFuncSubFuncSequence],
    },
    EqSubFunction: {
        parents: ["EqSubFunction", "EqFunction"],
        children: [...tAbstractEqFuncSubFuncSequence],
    },
    ExtRef: {
        parents: ["Inputs"],
        children: [],
    },
    FCDA: {
        parents: ["DataSet"],
        children: [],
    },
    FileHandling: {
        parents: ["Services"],
        children: [],
    },
    Function: {
        parents: ["Bay", "VoltageLevel", "Substation", "Process", "Line"],
        children: [
            ...tPowerSystemResourceSequence,
            "SubFunction",
            "GeneralEquipment",
            "ConductingEquipment",
        ],
    },
    GeneralEquipment: {
        parents: [
            "SubFunction",
            "Function",
            ...tGeneralEquipmentContainer,
            ...tAbstractEqFuncSubFunc,
            ...tEquipmentContainer,
        ],
        children: [...tEquipmentSequence, "EqFunction"],
    },
    GetCBValues: {
        parents: ["Services"],
        children: [],
    },
    GetDataObjectDefinition: {
        parents: ["Services"],
        children: [],
    },
    GetDataSetValue: {
        parents: ["Services"],
        children: [],
    },
    GetDirectory: {
        parents: ["Services"],
        children: [],
    },
    GOOSE: {
        parents: ["Services"],
        children: [],
    },
    GOOSESecurity: {
        parents: ["AccessPoint"],
        children: [...tNamingSequence, "Subject", "IssuerName"],
    },
    GSE: {
        parents: ["ConnectedAP"],
        children: [...tControlBlockSequence, "MinTime", "MaxTime"],
    },
    GSEDir: {
        parents: ["Services"],
        children: [],
    },
    GSEControl: {
        parents: ["LN0"],
        children: [...tControlWithIEDNameSequence, "Protocol"],
    },
    GSESettings: {
        parents: ["Services"],
        children: [],
    },
    GSSE: {
        parents: ["Services"],
        children: [],
    },
    Header: {
        parents: ["SCL"],
        children: ["Text", "History"],
    },
    History: {
        parents: ["Header"],
        children: ["Hitem"],
    },
    Hitem: {
        parents: ["History"],
        children: [],
    },
    IED: {
        parents: ["SCL"],
        children: [...tUnNamingSequence, "Services", "AccessPoint", "KDC"],
    },
    IEDName: {
        parents: ["GSEControl", "SampledValueControl"],
        children: [],
    },
    Inputs: {
        parents: [...tAnyLN],
        children: [...tUnNamingSequence, "ExtRef"],
    },
    IssuerName: {
        parents: ["GOOSESecurity", "SMVSecurity"],
        children: [],
    },
    KDC: {
        parents: ["IED"],
        children: [],
    },
    LDevice: {
        parents: ["Server"],
        children: [...tUnNamingSequence, "LN0", "LN", "AccessControl"],
    },
    LN: {
        parents: ["AccessPoint", "LDevice"],
        children: [...tAnyLNSequence],
    },
    LN0: {
        parents: ["LDevice"],
        children: [
            ...tAnyLNSequence,
            "GSEControl",
            "SampledValueControl",
            "SettingControl",
        ],
    },
    LNode: {
        parents: [...tLNodeContainer],
        children: [...tUnNamingSequence],
    },
    LNodeType: {
        parents: ["DataTypeTemplates"],
        children: [...tIDNamingSequence, "DO"],
    },
    Line: {
        parents: ["Process", "SCL"],
        children: [
            ...tGeneralEquipmentContainerSequence,
            "Voltage",
            "ConductingEquipment",
        ],
    },
    Log: {
        parents: [...tAnyLN],
        children: [...tUnNamingSequence],
    },
    LogControl: {
        parents: [...tAnyLN],
        children: [...tControlWithTriggerOptSequence],
    },
    LogSettings: {
        parents: ["Services"],
        children: [],
    },
    MaxTime: {
        parents: ["GSE"],
        children: [],
    },
    McSecurity: {
        parents: ["GSESettings", "SMVSettings", "ClientServices"],
        children: [],
    },
    MinTime: {
        parents: ["GSE"],
        children: [],
    },
    NeutralPoint: {
        parents: ["TransformerWinding"],
        children: [...tUnNamingSequence],
    },
    OptFields: {
        parents: ["ReportControl"],
        children: [],
    },
    P: {
        parents: ["Address", "PhysConn"],
        children: [],
    },
    PhysConn: {
        parents: ["ConnectedAP"],
        children: [...tUnNamingSequence, "P"],
    },
    PowerTransformer: {
        parents: [...tEquipmentContainer],
        children: [
            ...tEquipmentSequence,
            "TransformerWinding",
            "SubEquipment",
            "EqFunction",
        ],
    },
    Private: {
        parents: [],
        children: [],
    },
    Process: {
        parents: ["Process", "SCL"],
        children: [
            ...tGeneralEquipmentContainerSequence,
            "ConductingEquipment",
            "Substation",
            "Line",
            "Process",
        ],
    },
    ProtNs: {
        parents: ["DAType", "DA"],
        children: [],
    },
    Protocol: {
        parents: ["GSEControl", "SampledValueControl"],
        children: [],
    },
    ReadWrite: {
        parents: ["Services"],
        children: [],
    },
    RedProt: {
        parents: ["Services"],
        children: [],
    },
    ReportControl: {
        parents: [...tAnyLN],
        children: [...tControlWithTriggerOptSequence, "OptFields", "RptEnabled"],
    },
    ReportSettings: {
        parents: ["Services"],
        children: [],
    },
    RptEnabled: {
        parents: ["ReportControl"],
        children: [...tUnNamingSequence, "ClientLN"],
    },
    SamplesPerSec: {
        parents: ["SMVSettings"],
        children: [],
    },
    SampledValueControl: {
        parents: ["LN0"],
        children: [...tControlWithIEDNameSequence, "SmvOpts"],
    },
    SecPerSamples: {
        parents: ["SMVSettings"],
        children: [],
    },
    SCL: {
        parents: [],
        children: [
            ...tBaseNameSequence,
            "Header",
            "Substation",
            "Communication",
            "IED",
            "DataTypeTemplates",
            "Line",
            "Process",
        ],
    },
    SDI: {
        parents: ["DOI", "SDI"],
        children: [...tUnNamingSequence, "SDI", "DAI"],
    },
    SDO: {
        parents: ["DOType"],
        children: [...tNamingSequence],
    },
    Server: {
        parents: ["AccessPoint"],
        children: [
            ...tUnNamingSequence,
            "Authentication",
            "LDevice",
            "Association",
        ],
    },
    ServerAt: {
        parents: ["AccessPoint"],
        children: [...tUnNamingSequence],
    },
    Services: {
        parents: ["IED", "AccessPoint"],
        children: [
            "DynAssociation",
            "SettingGroups",
            "GetDirectory",
            "GetDataObjectDefinition",
            "DataObjectDirectory",
            "GetDataSetValue",
            "SetDataSetValue",
            "DataSetDirectory",
            "ConfDataSet",
            "DynDataSet",
            "ReadWrite",
            "TimerActivatedControl",
            "ConfReportControl",
            "GetCBValues",
            "ConfLogControl",
            "ReportSettings",
            "LogSettings",
            "GSESettings",
            "SMVSettings",
            "GSEDir",
            "GOOSE",
            "GSSE",
            "SMVsc",
            "FileHandling",
            "ConfLNs",
            "ClientServices",
            "ConfLdName",
            "SupSubscription",
            "ConfSigRef",
            "ValueHandling",
            "RedProt",
            "TimeSyncProt",
            "CommProt",
        ],
    },
    SetDataSetValue: {
        parents: ["Services"],
        children: [],
    },
    SettingControl: {
        parents: ["LN0"],
        children: [...tUnNamingSequence],
    },
    SettingGroups: {
        parents: ["Services"],
        children: ["SGEdit", "ConfSG"],
    },
    SGEdit: {
        parents: ["SettingGroups"],
        children: [],
    },
    SmpRate: {
        parents: ["SMVSettings"],
        children: [],
    },
    SMV: {
        parents: ["ConnectedAP"],
        children: [...tControlBlockSequence],
    },
    SmvOpts: {
        parents: ["SampledValueControl"],
        children: [],
    },
    SMVsc: {
        parents: ["Services"],
        children: [],
    },
    SMVSecurity: {
        parents: ["AccessPoint"],
        children: [...tNamingSequence, "Subject", "IssuerName"],
    },
    SMVSettings: {
        parents: ["Services"],
        children: ["SmpRate", "SamplesPerSec", "SecPerSamples", "McSecurity"],
    },
    SubEquipment: {
        parents: [
            "TapChanger",
            "PowerTransformer",
            "ConductingEquipment",
            "TransformerWinding",
            ...tAbstractConductingEquipment,
        ],
        children: [...tPowerSystemResourceSequence, "EqFunction"],
    },
    SubFunction: {
        parents: ["SubFunction", "Function"],
        children: [
            ...tPowerSystemResourceSequence,
            "GeneralEquipment",
            "ConductingEquipment",
            "SubFunction",
        ],
    },
    SubNetwork: {
        parents: ["Communication"],
        children: [...tNamingSequence, "BitRate", "ConnectedAP"],
    },
    Subject: {
        parents: ["GOOSESecurity", "SMVSecurity"],
        children: [],
    },
    Substation: {
        parents: ["SCL"],
        children: [...tEquipmentContainerSequence, "VoltageLevel", "Function"],
    },
    SupSubscription: {
        parents: ["Services"],
        children: [],
    },
    TapChanger: {
        parents: ["TransformerWinding"],
        children: [...tPowerSystemResourceSequence, "SubEquipment", "EqFunction"],
    },
    Terminal: {
        parents: [...tEquipment],
        children: [...tUnNamingSequence],
    },
    Text: {
        parents: sCLTags.filter((tag) => tag !== "Text" && tag !== "Private"),
        children: [],
    },
    TimerActivatedControl: {
        parents: ["Services"],
        children: [],
    },
    TimeSyncProt: {
        parents: ["Services", "ClientServices"],
        children: [],
    },
    TransformerWinding: {
        parents: ["PowerTransformer"],
        children: [
            ...tAbstractConductingEquipmentSequence,
            "TapChanger",
            "NeutralPoint",
            "EqFunction",
            "SubEquipment",
        ],
    },
    TrgOps: {
        parents: ["ReportControl"],
        children: [],
    },
    Val: {
        parents: ["DAI", "DA", "BDA"],
        children: [],
    },
    ValueHandling: {
        parents: ["Services"],
        children: [],
    },
    Voltage: {
        parents: ["VoltageLevel"],
        children: [],
    },
    VoltageLevel: {
        parents: ["Substation"],
        children: [...tEquipmentContainerSequence, "Voltage", "Bay", "Function"],
    },
});
const tagSet = new Set(sCLTags);
function isSCLTag(tag) {
    return tagSet.has(tag);
}

/** @returns object reference acc. IEC 61850-7-3 for control block elements */
function controlBlockObjRef(ctrlBlock) {
    const iedName = ctrlBlock.closest("IED")?.getAttribute("name");
    const ldInst = ctrlBlock.closest("LDevice")?.getAttribute("inst");
    const parentLn = ctrlBlock.closest("LN,LN0");
    const prefix = parentLn?.getAttribute("prefix") ?? "";
    const lnClass = parentLn?.getAttribute("lnClass");
    const lnInst = parentLn?.getAttribute("inst") ?? "";
    const cbName = ctrlBlock.getAttribute("name");
    if (!iedName || !ldInst || !lnClass || !cbName)
        return null;
    return `${iedName}${ldInst}/${prefix}${lnClass}${lnInst}.${cbName}`;
}

function isInputLeaf(input, allInputs) {
    let sameInputs = 0;
    for (const value of allInputs)
        if (value === input)
            sameInputs++;
    return input.querySelectorAll("ExtRef").length === sameInputs;
}
/**
 * Makes sure to not leave empty `Inputs` element after removing
 * its child `ExtRef` elements using [[`extRefedits`]]
 * @returns edits to remove `Inputs` when empty
 * */
function removeInputs(extRefs) {
    const removeInputs = [];
    const parentInputs = extRefs
        .map((remove) => remove.node.parentElement)
        .filter((input) => input);
    parentInputs.forEach((input, _index, inputs) => {
        const inputNotRemovedYet = !removeInputs.some((removeInput) => removeInput.node === input);
        if (isInputLeaf(input, inputs) && inputNotRemovedYet)
            removeInputs.push({ node: input });
    });
    return extRefs.concat(removeInputs);
}

/**
 * Locates control block from an ExtRef element.
 * NOTE: Only supports > Edition 2 using the srcXXX attributes.
 * @param extRef - SCL ExtRef element.
 * @returns Either ReportControl/GSEControl/SampledValueControl or null
 * if not found.
 */
function sourceControlBlock(extRef) {
    const [iedName, srcPrefix, srcLNInst, srcCBName] = [
        "iedName",
        "srcPrefix",
        "srcLNInst",
        "srcCBName",
    ].map((attr) => extRef.getAttribute(attr));
    const doc = extRef.ownerDocument;
    const srcLDInst = extRef.getAttribute("srcLDInst") ?? extRef.getAttribute("ldInst");
    const srcLNClass = extRef.getAttribute("srcLNClass") ?? "LLN0";
    const serviceType = extRef.getAttribute("serviceType") ?? extRef.getAttribute("pServT");
    if (!iedName || !srcLDInst || !srcCBName || serviceType === "Poll")
        return null;
    const lDevice = `:root > IED[name="${iedName}"] > AccessPoint > Server > LDevice[inst="${srcLDInst}"]`;
    const maybeReport = !serviceType || serviceType === "Report";
    const maybeGSE = !serviceType || serviceType === "GOOSE";
    const maybeSMV = !serviceType || serviceType === "SMV";
    const anyLN = srcLNClass === "LLN0" ? "LN0" : "LN";
    const lnClass = `[lnClass="${srcLNClass}"]`;
    let lnPrefixQualifiers;
    if (anyLN === "LN") {
        lnPrefixQualifiers =
            srcPrefix && srcPrefix !== ""
                ? [`[prefix="${srcPrefix}"]`]
                : [":not([prefix])", '[prefix=""]'];
    }
    else {
        lnPrefixQualifiers = [":not([prefix])"];
    }
    // On LN0 srcLNInst missing on the ExtRef means an inst=""
    // On LN inst must be a non-empty string and so srcLNInst
    // must also be a non-empty string and be present
    const lnInst = anyLN !== "LN0" && srcLNInst ? `[inst="${srcLNInst}"]` : '[inst=""]';
    const cbName = `[name="${srcCBName}"]`;
    const cbTypes = [
        maybeReport ? `ReportControl${cbName}` : null,
        maybeGSE ? `GSEControl${cbName}` : null,
        maybeSMV ? `SampledValueControl${cbName}` : null,
    ].filter((s) => !!s);
    return doc.querySelector(crossProduct([`${lDevice}>${anyLN}${lnClass}${lnInst}`], lnPrefixQualifiers, [">"], cbTypes)
        .map((strings) => strings.join(""))
        .join(","));
}

/** @returns Element to remove the subscription supervision */
function removableSupervisionElement(ctrlBlock, subscriberIed) {
    const supervisionType = ctrlBlock.tagName === "GSEControl" ? "LGOS" : "LSVS";
    const valElement = Array.from(subscriberIed.querySelectorAll(`LN[lnClass="${supervisionType}"] > DOI > DAI > Val`)).find((val) => val.textContent === controlBlockObjRef(ctrlBlock));
    if (!valElement)
        return null;
    const ln = valElement.closest("LN");
    const doi = valElement.closest("DOI");
    // do not remove logical nodes `LGOS`, `LSVS` unless privately tagged
    const canRemoveLn = ln.querySelector(':scope > Private[type="OpenSCD.create"]');
    return canRemoveLn ? ln : doi;
}
/** @returns Whether `DA` with name `setSrcRef`  can edited by SCL editor */
function isSrcRefEditable(ctrlBlock, subscriberIed) {
    const supervisionElement = removableSupervisionElement(ctrlBlock, subscriberIed);
    const ln = supervisionElement?.closest("LN") ?? null;
    if (!ln)
        return false;
    if (supervisionElement?.querySelector(':scope DAI[name="setSrcRef"][valImport="true"][valKind="RO"],' +
        ' :scope DAI[name="setSrcRef"][valImport="true"][valKind="Conf"]'))
        return true;
    const rootNode = ln.ownerDocument;
    const lnClass = ln.getAttribute("lnClass");
    const cbRefType = lnClass === "LGOS" ? "GoCBRef" : "SvCBRef";
    const lnType = ln.getAttribute("lnType");
    const goOrSvCBRef = rootNode.querySelector(`DataTypeTemplates > 
        LNodeType[id="${lnType}"][lnClass="${lnClass}"] > DO[name="${cbRefType}"]`);
    const cbRefId = goOrSvCBRef?.getAttribute("type");
    const setSrcRef = rootNode.querySelector(`DataTypeTemplates > DOType[id="${cbRefId}"] > DA[name="setSrcRef"]`);
    return ((setSrcRef?.getAttribute("valKind") === "Conf" ||
        setSrcRef?.getAttribute("valKind") === "RO") &&
        setSrcRef.getAttribute("valImport") === "true");
}
/** @returns Whether other subscribed ExtRef of the same control block exist */
function isControlBlockSubscribed(extRefs) {
    const [srcCBName, srcLDInst, srcLNClass, iedName, srcPrefix, srcLNInst, serviceType,] = [
        "srcCBName",
        "srcLDInst",
        "srcLNClass",
        "iedName",
        "srcPrefix",
        "srcLNInst",
        "serviceType",
    ].map((attr) => extRefs[0].getAttribute(attr));
    const parentIed = extRefs[0].closest("IED");
    return Array.from(parentIed.getElementsByTagName("ExtRef")).some((otherExtRef) => !extRefs.includes(otherExtRef) &&
        (otherExtRef.getAttribute("srcPrefix") ?? "") === (srcPrefix ?? "") &&
        (otherExtRef.getAttribute("srcLNInst") ?? "") === (srcLNInst ?? "") &&
        otherExtRef.getAttribute("srcCBName") === srcCBName &&
        otherExtRef.getAttribute("srcLDInst") === srcLDInst &&
        otherExtRef.getAttribute("srcLNClass") === srcLNClass &&
        otherExtRef.getAttribute("iedName") === iedName &&
        otherExtRef.getAttribute("serviceType") === serviceType);
}
function cannotRemoveSupervision(extRefGroup) {
    return (isControlBlockSubscribed(extRefGroup.extRefs) ||
        !isSrcRefEditable(extRefGroup.ctrlBlock, extRefGroup.subscriberIed));
}
function groupPerControlBlock(extRefs) {
    const groupedExtRefs = {};
    extRefs.forEach((extRef) => {
        const ctrlBlock = sourceControlBlock(extRef);
        if (ctrlBlock) {
            const ctrlBlockRef = controlBlockObjRef(ctrlBlock);
            if (groupedExtRefs[ctrlBlockRef])
                groupedExtRefs[ctrlBlockRef].extRefs.push(extRef);
            else
                groupedExtRefs[ctrlBlockRef] = {
                    extRefs: [extRef],
                    ctrlBlock,
                    subscriberIed: extRef.closest("IED"),
                };
        }
    });
    return groupedExtRefs;
}
/** Removes subscription supervision - `LGOS` or `LSVS` - when no other data
 * of a given `GSEControl` or `SampledValueControl`
 * @param extRefs - An array of external reference elements
 * @returns edits to remove subscription supervision `LGOS` or `LSVS`
 */
function removeSubscriptionSupervision(extRefs) {
    if (extRefs.length === 0)
        return [];
    const groupedExtRefs = groupPerControlBlock(extRefs);
    return Object.values(groupedExtRefs)
        .map((extRefGroup) => {
        if (cannotRemoveSupervision(extRefGroup))
            return null;
        return removableSupervisionElement(extRefGroup.ctrlBlock, extRefGroup.subscriberIed);
    })
        .filter((element) => element).map((node) => ({ node }));
}

/**
 * Remove link between sending IED data to receiving IED external
 * references - unsubscribing.
 * ```md
 * 1. Unsubscribes external references itself:
 * -Update `ExtRef` in case later binging is used (existing `intAddr` attribute)
 * -Remove `ExtRef` in case `intAddr` is missing
 *
 * 2. Removes leaf `Input` elements as well
 * 3. Removes subscription supervision (can be disabled through options.ignoreSupervision)
 * - when all external references of one control block are unsubscribed
 * - when `valKind` RO|Conf and `valImport` true
 * ```
 * In case the external reference
 * @param extRefs - Array of external references
 * @returns An array of update and/or remove edit representing changes required
 * to unsubscribe.
 */
function unsubscribe(extRefs, options = { ignoreSupervision: false }) {
    const updateEdits = [];
    const removeEdits = [];
    extRefs.map((extRef) => {
        if (extRef.getAttribute("intAddr"))
            updateEdits.push({
                element: extRef,
                attributes: {
                    iedName: null,
                    ldInst: null,
                    prefix: null,
                    lnClass: null,
                    lnInst: null,
                    doName: null,
                    daName: null,
                    srcLDInst: null,
                    srcPrefix: null,
                    srcLNClass: null,
                    srcLNInst: null,
                    srcCBName: null,
                    ...(extRef.getAttribute("pServT") && { serviceType: null }),
                },
            });
        else
            removeEdits.push({ node: extRef });
    });
    return [
        ...removeInputs(removeEdits),
        ...updateEdits,
        ...(options.ignoreSupervision
            ? []
            : removeSubscriptionSupervision(extRefs)),
    ];
}

const maxGseMacAddress = 0x010ccd0101ff;
const minGseMacAddress = 0x010ccd010000;
const maxSmvMacAddress = 0x010ccd0401ff;
const minSmvMacAddress = 0x010ccd040000;
function convertToMac(mac) {
    const str = 0 + mac.toString(16).toUpperCase();
    const arr = str.match(/.{1,2}/g);
    return arr.join("-");
}
Array(maxGseMacAddress - minGseMacAddress)
    .fill(1)
    .map((_, i) => convertToMac(minGseMacAddress + i));
Array(maxSmvMacAddress - minSmvMacAddress)
    .fill(1)
    .map((_, i) => convertToMac(minSmvMacAddress + i));

const maxGseAppId = 0x3fff;
const minGseAppId = 0x0000;
// APPID range for Type1A(Trip) GOOSE acc. IEC 61850-8-1
const maxGseTripAppId = 0xbfff;
const minGseTripAppId = 0x8000;
const maxSmvAppId = 0x7fff;
const minSmvAppId = 0x4000;
Array(maxGseAppId - minGseAppId)
    .fill(1)
    .map((_, i) => (minGseAppId + i).toString(16).toUpperCase().padStart(4, "0"));
Array(maxGseTripAppId - minGseTripAppId)
    .fill(1)
    .map((_, i) => (minGseTripAppId + i).toString(16).toUpperCase().padStart(4, "0"));
Array(maxSmvAppId - minSmvAppId)
    .fill(1)
    .map((_, i) => (minSmvAppId + i).toString(16).toUpperCase().padStart(4, "0"));

/** maximum value for `lnInst` attribute */
const maxLnInst = 99;
Array(maxLnInst)
    .fill(1)
    .map((_, i) => `${i + 1}`);

await fetch(new URL(new URL('assets/nsd-0a370a57.json', import.meta.url).href, import.meta.url)).then((res) => res.json());

/* eslint-disable no-use-before-define */
function hitemIdentity(e) {
    return `${e.getAttribute("version")}\t${e.getAttribute("revision")}`;
}
function terminalIdentity(e) {
    return `${identity(e.parentElement)}>${e.getAttribute("connectivityNode")}`;
}
function lNodeIdentity(e) {
    const [iedName, ldInst, prefix, lnClass, lnInst, lnType] = [
        "iedName",
        "ldInst",
        "prefix",
        "lnClass",
        "lnInst",
        "lnType",
    ].map((name) => e.getAttribute(name));
    if (iedName === "None")
        return `${identity(e.parentElement)}>(${lnClass} ${lnType})`;
    return `${iedName} ${ldInst || "(Client)"}/${prefix ?? ""} ${lnClass} ${lnInst ?? ""}`;
}
function kDCIdentity(e) {
    return `${identity(e.parentElement)}>${e.getAttribute("iedName")} ${e.getAttribute("apName")}`;
}
function associationIdentity(e) {
    const [iedName, ldInst, prefix, lnClass, lnInst] = [
        "iedName",
        "ldInst",
        "prefix",
        "lnClass",
        "lnInst",
        "lnType",
    ].map((name) => e.getAttribute(name));
    return `${identity(e.parentElement)}>${iedName} ${ldInst}/${prefix ?? ""} ${lnClass} ${lnInst ?? ""}`;
}
function lDeviceIdentity(e) {
    return `${identity(e.closest("IED"))}>>${e.getAttribute("inst")}`;
}
function iEDNameIdentity(e) {
    const iedName = e.textContent;
    const [apRef, ldInst, prefix, lnClass, lnInst] = [
        "apRef",
        "ldInst",
        "prefix",
        "lnClass",
        "lnInst",
    ].map((name) => e.getAttribute(name));
    return `${identity(e.parentElement)}>${iedName} ${apRef || ""} ${ldInst || ""}/${prefix ?? ""} ${lnClass ?? ""} ${lnInst ?? ""}`;
}
function fCDAIdentity(e) {
    const [ldInst, prefix, lnClass, lnInst, doName, daName, fc, ix] = [
        "ldInst",
        "prefix",
        "lnClass",
        "lnInst",
        "doName",
        "daName",
        "fc",
        "ix",
    ].map((name) => e.getAttribute(name));
    const dataPath = `${ldInst}/${prefix ?? ""} ${lnClass} ${lnInst ?? ""}.${doName} ${daName || ""}`;
    return `${identity(e.parentElement)}>${dataPath} (${fc}${ix ? ` [${ix}]` : ""})`;
}
function extRefIdentity(e) {
    if (!e.parentElement)
        return NaN;
    const parentIdentity = identity(e.parentElement);
    const iedName = e.getAttribute("iedName");
    const intAddr = e.getAttribute("intAddr");
    const intAddrIndex = Array.from(e.parentElement.querySelectorAll(`ExtRef[intAddr="${intAddr}"]`)).indexOf(e);
    if (intAddr)
        return `${parentIdentity}>${intAddr}[${intAddrIndex}]`;
    const [ldInst, prefix, lnClass, lnInst, doName, daName, serviceType, srcLDInst, srcPrefix, srcLNClass, srcLNInst, srcCBName,] = [
        "ldInst",
        "prefix",
        "lnClass",
        "lnInst",
        "doName",
        "daName",
        "serviceType",
        "srcLDInst",
        "srcPrefix",
        "srcLNClass",
        "srcLNInst",
        "srcCBName",
    ].map((name) => e.getAttribute(name));
    const defaultSrcPrefix = "";
    const finalSrcPrefix = srcPrefix ?? defaultSrcPrefix;
    const defaultSrcLNInst = "";
    const finalSrcLNInst = srcLNInst ?? defaultSrcLNInst;
    const cbPath = srcCBName
        ? `${serviceType}:${srcCBName} ${srcLDInst}/${finalSrcPrefix} ${srcLNClass} ${finalSrcLNInst}`
        : "";
    const defaultPrefix = "";
    const finalPrefix = prefix ?? defaultPrefix;
    const defaultLnInst = "";
    const finalLnInst = lnInst ?? defaultLnInst;
    const defaultDaName = "";
    const finalDaName = daName || defaultDaName;
    const dataPath = `${iedName} ${ldInst}/${finalPrefix} ${lnClass} ${finalLnInst} ${doName} ${finalDaName}`;
    return `${parentIdentity}>${cbPath ? `${cbPath} ` : ""}${dataPath}`;
}
function lNIdentity(e) {
    const [prefix, lnClass, inst] = ["prefix", "lnClass", "inst"].map((name) => e.getAttribute(name));
    return `${identity(e.parentElement)}>${prefix ?? ""} ${lnClass} ${inst}`;
}
function clientLNIdentity(e) {
    const [apRef, iedName, ldInst, prefix, lnClass, lnInst] = [
        "apRef",
        "iedName",
        "ldInst",
        "prefix",
        "lnClass",
        "lnInst",
    ].map((name) => e.getAttribute(name));
    return `${identity(e.parentElement)}>${iedName} ${apRef || ""} ${ldInst}/${prefix ?? ""} ${lnClass} ${lnInst}`;
}
function ixNamingIdentity(e) {
    const [name, ix] = ["name", "ix"].map((naming) => e.getAttribute(naming));
    return `${identity(e.parentElement)}>${name}${ix ? `[${ix}]` : ""}`;
}
function valIdentity(e) {
    if (!e.parentElement)
        return NaN;
    const sGroup = e.getAttribute("sGroup");
    const index = Array.from(e.parentElement.children)
        .filter((child) => child.getAttribute("sGroup") === sGroup)
        .findIndex((child) => child.isSameNode(e));
    return `${identity(e.parentElement)}>${sGroup ? `${sGroup}` : ""} ${index}`;
}
function connectedAPIdentity(e) {
    const [iedName, apName] = ["iedName", "apName"].map((name) => e.getAttribute(name));
    return `${iedName} ${apName}`;
}
function controlBlockIdentity(e) {
    const [ldInst, cbName] = ["ldInst", "cbName"].map((name) => e.getAttribute(name));
    return `${ldInst} ${cbName}`;
}
function physConnIdentity(e) {
    if (!e.parentElement)
        return NaN;
    const pcType = e.getAttribute("type");
    if (e.parentElement.children.length > 1 &&
        pcType !== "Connection" &&
        pcType !== "RedConn")
        return NaN;
    return `${identity(e.parentElement)}>${pcType}`;
}
function pIdentity(e) {
    if (!e.parentElement)
        return NaN;
    const eParent = e.parentElement;
    const eType = e.getAttribute("type");
    if (eParent.tagName === "PhysConn")
        return `${identity(e.parentElement)}>${eType}`;
    const index = Array.from(e.parentElement.children)
        .filter((child) => child.getAttribute("type") === eType)
        .findIndex((child) => child.isSameNode(e));
    return `${identity(e.parentElement)}>${eType} [${index}]`;
}
function enumValIdentity(e) {
    return `${identity(e.parentElement)}>${e.getAttribute("ord")}`;
}
function protNsIdentity(e) {
    if (!e.parentElement)
        return NaN;
    const type = e.getAttribute("type");
    return `${identity(e.parentElement)}>${type || "8-MMS"}\t${e.textContent}`;
}
function sCLIdentity() {
    return "";
}
function namingIdentity(e) {
    return e.parentElement.tagName === "SCL"
        ? e.getAttribute("name")
        : `${identity(e.parentElement)}>${e.getAttribute("name")}`;
}
function singletonIdentity(e) {
    return identity(e.parentElement).toString();
}
function idNamingIdentity(e) {
    return `#${e.id}`;
}
const tags = {
    AccessControl: {
        identity: singletonIdentity,
    },
    AccessPoint: {
        identity: namingIdentity,
    },
    Address: {
        identity: singletonIdentity,
    },
    Association: {
        identity: associationIdentity,
    },
    Authentication: {
        identity: singletonIdentity,
    },
    BDA: {
        identity: namingIdentity,
    },
    BitRate: {
        identity: singletonIdentity,
    },
    Bay: {
        identity: namingIdentity,
    },
    ClientLN: {
        identity: clientLNIdentity,
    },
    ClientServices: {
        identity: singletonIdentity,
    },
    CommProt: {
        identity: singletonIdentity,
    },
    Communication: {
        identity: singletonIdentity,
    },
    ConductingEquipment: {
        identity: namingIdentity,
    },
    ConfDataSet: {
        identity: singletonIdentity,
    },
    ConfLdName: {
        identity: singletonIdentity,
    },
    ConfLNs: {
        identity: singletonIdentity,
    },
    ConfLogControl: {
        identity: singletonIdentity,
    },
    ConfReportControl: {
        identity: singletonIdentity,
    },
    ConfSG: {
        identity: singletonIdentity,
    },
    ConfSigRef: {
        identity: singletonIdentity,
    },
    ConnectedAP: {
        identity: connectedAPIdentity,
    },
    ConnectivityNode: {
        identity: namingIdentity,
    },
    DA: {
        identity: namingIdentity,
    },
    DAI: {
        identity: ixNamingIdentity,
    },
    DAType: {
        identity: idNamingIdentity,
    },
    DO: {
        identity: namingIdentity,
    },
    DOI: {
        identity: namingIdentity,
    },
    DOType: {
        identity: idNamingIdentity,
    },
    DataObjectDirectory: {
        identity: singletonIdentity,
    },
    DataSet: {
        identity: namingIdentity,
    },
    DataSetDirectory: {
        identity: singletonIdentity,
    },
    DataTypeTemplates: {
        identity: singletonIdentity,
    },
    DynAssociation: {
        identity: singletonIdentity,
    },
    DynDataSet: {
        identity: singletonIdentity,
    },
    EnumType: {
        identity: idNamingIdentity,
    },
    EnumVal: {
        identity: enumValIdentity,
    },
    EqFunction: {
        identity: namingIdentity,
    },
    EqSubFunction: {
        identity: namingIdentity,
    },
    ExtRef: {
        identity: extRefIdentity,
    },
    FCDA: {
        identity: fCDAIdentity,
    },
    FileHandling: {
        identity: singletonIdentity,
    },
    Function: {
        identity: namingIdentity,
    },
    GeneralEquipment: {
        identity: namingIdentity,
    },
    GetCBValues: {
        identity: singletonIdentity,
    },
    GetDataObjectDefinition: {
        identity: singletonIdentity,
    },
    GetDataSetValue: {
        identity: singletonIdentity,
    },
    GetDirectory: {
        identity: singletonIdentity,
    },
    GOOSE: {
        identity: singletonIdentity,
    },
    GOOSESecurity: {
        identity: namingIdentity,
    },
    GSE: {
        identity: controlBlockIdentity,
    },
    GSEDir: {
        identity: singletonIdentity,
    },
    GSEControl: {
        identity: namingIdentity,
    },
    GSESettings: {
        identity: singletonIdentity,
    },
    GSSE: {
        identity: singletonIdentity,
    },
    Header: {
        identity: singletonIdentity,
    },
    History: {
        identity: singletonIdentity,
    },
    Hitem: {
        identity: hitemIdentity,
    },
    IED: {
        identity: namingIdentity,
    },
    IEDName: {
        identity: iEDNameIdentity,
    },
    Inputs: {
        identity: singletonIdentity,
    },
    IssuerName: {
        identity: singletonIdentity,
    },
    KDC: {
        identity: kDCIdentity,
    },
    LDevice: {
        identity: lDeviceIdentity,
    },
    LN: {
        identity: lNIdentity,
    },
    LN0: {
        identity: singletonIdentity,
    },
    LNode: {
        identity: lNodeIdentity,
    },
    LNodeType: {
        identity: idNamingIdentity,
    },
    Line: {
        identity: namingIdentity,
    },
    Log: {
        identity: namingIdentity,
    },
    LogControl: {
        identity: namingIdentity,
    },
    LogSettings: {
        identity: singletonIdentity,
    },
    MaxTime: {
        identity: singletonIdentity,
    },
    McSecurity: {
        identity: singletonIdentity,
    },
    MinTime: {
        identity: singletonIdentity,
    },
    NeutralPoint: {
        identity: terminalIdentity,
    },
    OptFields: {
        identity: singletonIdentity,
    },
    P: {
        identity: pIdentity,
    },
    PhysConn: {
        identity: physConnIdentity,
    },
    PowerTransformer: {
        identity: namingIdentity,
    },
    Process: {
        identity: namingIdentity,
    },
    ProtNs: {
        identity: protNsIdentity,
    },
    Protocol: {
        identity: singletonIdentity,
    },
    ReadWrite: {
        identity: singletonIdentity,
    },
    RedProt: {
        identity: singletonIdentity,
    },
    ReportControl: {
        identity: namingIdentity,
    },
    ReportSettings: {
        identity: singletonIdentity,
    },
    RptEnabled: {
        identity: singletonIdentity,
    },
    SamplesPerSec: {
        identity: singletonIdentity,
    },
    SampledValueControl: {
        identity: namingIdentity,
    },
    SecPerSamples: {
        identity: singletonIdentity,
    },
    SCL: {
        identity: sCLIdentity,
    },
    SDI: {
        identity: ixNamingIdentity,
    },
    SDO: {
        identity: namingIdentity,
    },
    Server: {
        identity: singletonIdentity,
    },
    ServerAt: {
        identity: singletonIdentity,
    },
    Services: {
        identity: singletonIdentity,
    },
    SetDataSetValue: {
        identity: singletonIdentity,
    },
    SettingControl: {
        identity: singletonIdentity,
    },
    SettingGroups: {
        identity: singletonIdentity,
    },
    SGEdit: {
        identity: singletonIdentity,
    },
    SmpRate: {
        identity: singletonIdentity,
    },
    SMV: {
        identity: controlBlockIdentity,
    },
    SmvOpts: {
        identity: singletonIdentity,
    },
    SMVsc: {
        identity: singletonIdentity,
    },
    SMVSecurity: {
        identity: namingIdentity,
    },
    SMVSettings: {
        identity: singletonIdentity,
    },
    SubEquipment: {
        identity: namingIdentity,
    },
    SubFunction: {
        identity: namingIdentity,
    },
    SubNetwork: {
        identity: namingIdentity,
    },
    Subject: {
        identity: singletonIdentity,
    },
    Substation: {
        identity: namingIdentity,
    },
    SupSubscription: {
        identity: singletonIdentity,
    },
    TapChanger: {
        identity: namingIdentity,
    },
    Terminal: {
        identity: terminalIdentity,
    },
    Text: {
        identity: singletonIdentity,
    },
    TimerActivatedControl: {
        identity: singletonIdentity,
    },
    TimeSyncProt: {
        identity: singletonIdentity,
    },
    TransformerWinding: {
        identity: namingIdentity,
    },
    TrgOps: {
        identity: singletonIdentity,
    },
    Val: {
        identity: valIdentity,
    },
    ValueHandling: {
        identity: singletonIdentity,
    },
    Voltage: {
        identity: singletonIdentity,
    },
    VoltageLevel: {
        identity: namingIdentity,
    },
};
/** @returns Identity string for a valid SCL element or NaN */
function identity(e) {
    if (e === null)
        return NaN;
    if (e.closest("Private"))
        return NaN;
    const tag = e.tagName;
    if (isSCLTag(tag))
        return tags[tag].identity(e);
    return NaN;
}

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Separate variable needed for closure.
const fabBaseClass = mixinDelegatesAria(ScopedElementsMixin(i$3));
// tslint:disable-next-line:enforce-comments-on-exported-symbols
class SharedFab extends fabBaseClass {
    constructor() {
        super(...arguments);
        this.size = 'medium';
        /**
         * The text to display on the FAB.
         */
        this.label = '';
        /**
         * Lowers the FAB's elevation.
         */
        this.lowered = false;
    }
    render() {
        // Needed for closure conformance
        const { ariaLabel } = this;
        return x `
      <button
        class="fab ${e(this.getRenderClasses())}"
        aria-label=${ariaLabel || E}>
        <md-elevation part="elevation"></md-elevation>
        <md-focus-ring part="focus-ring"></md-focus-ring>
        <md-ripple class="ripple"></md-ripple>
        ${this.renderTouchTarget()} ${this.renderIcon()} ${this.renderLabel()}
      </button>
    `;
    }
    getRenderClasses() {
        const isExtended = !!this.label;
        return {
            'lowered': this.lowered,
            'small': this.size === 'small' && !isExtended,
            'large': this.size === 'large' && !isExtended,
            'extended': isExtended,
        };
    }
    renderTouchTarget() {
        return x `<div class="touch-target"></div>`;
    }
    renderLabel() {
        return this.label ? x `<span class="label">${this.label}</span>` : '';
    }
    renderIcon() {
        const { ariaLabel } = this;
        return x `<span class="icon">
      <slot
        name="icon"
        aria-hidden=${ariaLabel || this.label
            ? 'true'
            : E}>
        <span></span>
      </slot>
    </span>`;
    }
}
/** @nocollapse */
SharedFab.shadowRootOptions = {
    mode: 'open',
    delegatesFocus: true,
};
/**
 * The size of the FAB.
 *
 * NOTE: Branded FABs cannot be sized to `small`, and Extended FABs do not
 * have different sizes.
 */
SharedFab.scopedElements = {
    'md-ripple': MdRipple,
    'md-focus-ring': MdFocusRing,
    'md-elevation': MdElevation,
};
__decorate([
    n$3({ reflect: true })
], SharedFab.prototype, "size", void 0);
__decorate([
    n$3()
], SharedFab.prototype, "label", void 0);
__decorate([
    n$3({ type: Boolean })
], SharedFab.prototype, "lowered", void 0);

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// tslint:disable-next-line:enforce-comments-on-exported-symbols
class Fab extends SharedFab {
    constructor() {
        super(...arguments);
        /**
         * The FAB color variant to render.
         */
        this.variant = 'surface';
    }
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'primary': this.variant === 'primary',
            'secondary': this.variant === 'secondary',
            'tertiary': this.variant === 'tertiary',
        };
    }
}
__decorate([
    n$3()
], Fab.prototype, "variant", void 0);

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const styles$4 = i$5 `:host{--_container-color: var(--md-fab-container-color, var(--md-sys-color-surface-container-high, #ece6f0));--_container-elevation: var(--md-fab-container-elevation, 3);--_container-height: var(--md-fab-container-height, 56px);--_container-shadow-color: var(--md-fab-container-shadow-color, var(--md-sys-color-shadow, #000));--_container-width: var(--md-fab-container-width, 56px);--_focus-container-elevation: var(--md-fab-focus-container-elevation, 3);--_focus-icon-color: var(--md-fab-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-container-elevation: var(--md-fab-hover-container-elevation, 4);--_hover-icon-color: var(--md-fab-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-fab-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-fab-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-fab-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-fab-icon-size, 24px);--_lowered-container-color: var(--md-fab-lowered-container-color, var(--md-sys-color-surface-container-low, #f7f2fa));--_lowered-container-elevation: var(--md-fab-lowered-container-elevation, 1);--_lowered-focus-container-elevation: var(--md-fab-lowered-focus-container-elevation, 1);--_lowered-hover-container-elevation: var(--md-fab-lowered-hover-container-elevation, 2);--_lowered-pressed-container-elevation: var(--md-fab-lowered-pressed-container-elevation, 1);--_pressed-container-elevation: var(--md-fab-pressed-container-elevation, 3);--_pressed-icon-color: var(--md-fab-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color: var(--md-fab-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-fab-pressed-state-layer-opacity, 0.12);--_focus-label-text-color: var(--md-fab-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-fab-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-color: var(--md-fab-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-fab-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-fab-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-fab-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-fab-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_large-container-height: var(--md-fab-large-container-height, 96px);--_large-container-width: var(--md-fab-large-container-width, 96px);--_large-icon-size: var(--md-fab-large-icon-size, 36px);--_pressed-label-text-color: var(--md-fab-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_primary-container-color: var(--md-fab-primary-container-color, var(--md-sys-color-primary-container, #eaddff));--_primary-focus-icon-color: var(--md-fab-primary-focus-icon-color, var(--md-sys-color-on-primary-container, #21005d));--_primary-focus-label-text-color: var(--md-fab-primary-focus-label-text-color, var(--md-sys-color-on-primary-container, #21005d));--_primary-hover-icon-color: var(--md-fab-primary-hover-icon-color, var(--md-sys-color-on-primary-container, #21005d));--_primary-hover-label-text-color: var(--md-fab-primary-hover-label-text-color, var(--md-sys-color-on-primary-container, #21005d));--_primary-hover-state-layer-color: var(--md-fab-primary-hover-state-layer-color, var(--md-sys-color-on-primary-container, #21005d));--_primary-icon-color: var(--md-fab-primary-icon-color, var(--md-sys-color-on-primary-container, #21005d));--_primary-label-text-color: var(--md-fab-primary-label-text-color, var(--md-sys-color-on-primary-container, #21005d));--_primary-pressed-icon-color: var(--md-fab-primary-pressed-icon-color, var(--md-sys-color-on-primary-container, #21005d));--_primary-pressed-label-text-color: var(--md-fab-primary-pressed-label-text-color, var(--md-sys-color-on-primary-container, #21005d));--_primary-pressed-state-layer-color: var(--md-fab-primary-pressed-state-layer-color, var(--md-sys-color-on-primary-container, #21005d));--_secondary-container-color: var(--md-fab-secondary-container-color, var(--md-sys-color-secondary-container, #e8def8));--_secondary-focus-icon-color: var(--md-fab-secondary-focus-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_secondary-focus-label-text-color: var(--md-fab-secondary-focus-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_secondary-hover-icon-color: var(--md-fab-secondary-hover-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_secondary-hover-label-text-color: var(--md-fab-secondary-hover-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_secondary-hover-state-layer-color: var(--md-fab-secondary-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_secondary-icon-color: var(--md-fab-secondary-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_secondary-label-text-color: var(--md-fab-secondary-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_secondary-pressed-icon-color: var(--md-fab-secondary-pressed-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_secondary-pressed-label-text-color: var(--md-fab-secondary-pressed-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_secondary-pressed-state-layer-color: var(--md-fab-secondary-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_small-container-height: var(--md-fab-small-container-height, 40px);--_small-container-width: var(--md-fab-small-container-width, 40px);--_small-icon-size: var(--md-fab-small-icon-size, 24px);--_tertiary-container-color: var(--md-fab-tertiary-container-color, var(--md-sys-color-tertiary-container, #ffd8e4));--_tertiary-focus-icon-color: var(--md-fab-tertiary-focus-icon-color, var(--md-sys-color-on-tertiary-container, #31111d));--_tertiary-focus-label-text-color: var(--md-fab-tertiary-focus-label-text-color, var(--md-sys-color-on-tertiary-container, #31111d));--_tertiary-hover-icon-color: var(--md-fab-tertiary-hover-icon-color, var(--md-sys-color-on-tertiary-container, #31111d));--_tertiary-hover-label-text-color: var(--md-fab-tertiary-hover-label-text-color, var(--md-sys-color-on-tertiary-container, #31111d));--_tertiary-hover-state-layer-color: var(--md-fab-tertiary-hover-state-layer-color, var(--md-sys-color-on-tertiary-container, #31111d));--_tertiary-icon-color: var(--md-fab-tertiary-icon-color, var(--md-sys-color-on-tertiary-container, #31111d));--_tertiary-label-text-color: var(--md-fab-tertiary-label-text-color, var(--md-sys-color-on-tertiary-container, #31111d));--_tertiary-pressed-icon-color: var(--md-fab-tertiary-pressed-icon-color, var(--md-sys-color-on-tertiary-container, #31111d));--_tertiary-pressed-label-text-color: var(--md-fab-tertiary-pressed-label-text-color, var(--md-sys-color-on-tertiary-container, #31111d));--_tertiary-pressed-state-layer-color: var(--md-fab-tertiary-pressed-state-layer-color, var(--md-sys-color-on-tertiary-container, #31111d));--_container-shape-start-start: var(--md-fab-container-shape-start-start, var(--md-fab-container-shape, var(--md-sys-shape-corner-large, 16px)));--_container-shape-start-end: var(--md-fab-container-shape-start-end, var(--md-fab-container-shape, var(--md-sys-shape-corner-large, 16px)));--_container-shape-end-end: var(--md-fab-container-shape-end-end, var(--md-fab-container-shape, var(--md-sys-shape-corner-large, 16px)));--_container-shape-end-start: var(--md-fab-container-shape-end-start, var(--md-fab-container-shape, var(--md-sys-shape-corner-large, 16px)));--_large-container-shape-start-start: var(--md-fab-large-container-shape-start-start, var(--md-fab-large-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));--_large-container-shape-start-end: var(--md-fab-large-container-shape-start-end, var(--md-fab-large-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));--_large-container-shape-end-end: var(--md-fab-large-container-shape-end-end, var(--md-fab-large-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));--_large-container-shape-end-start: var(--md-fab-large-container-shape-end-start, var(--md-fab-large-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));--_small-container-shape-start-start: var(--md-fab-small-container-shape-start-start, var(--md-fab-small-container-shape, var(--md-sys-shape-corner-medium, 12px)));--_small-container-shape-start-end: var(--md-fab-small-container-shape-start-end, var(--md-fab-small-container-shape, var(--md-sys-shape-corner-medium, 12px)));--_small-container-shape-end-end: var(--md-fab-small-container-shape-end-end, var(--md-fab-small-container-shape, var(--md-sys-shape-corner-medium, 12px)));--_small-container-shape-end-start: var(--md-fab-small-container-shape-end-start, var(--md-fab-small-container-shape, var(--md-sys-shape-corner-medium, 12px)));cursor:pointer}:host([size=small][touch-target=wrapper]){margin:max(0px,48px - var(--_small-container-height))}.fab{cursor:inherit}.fab .icon ::slotted(*){color:var(--_icon-color)}.fab:focus{color:var(--_focus-icon-color)}.fab:hover{color:var(--_hover-icon-color)}.fab:active{color:var(--_pressed-icon-color)}.fab.primary{background-color:var(--_primary-container-color);--md-ripple-hover-color: var(--_primary-hover-state-layer-color);--md-ripple-pressed-color: var(--_primary-pressed-state-layer-color)}.fab.primary .icon ::slotted(*){color:var(--_primary-icon-color)}.fab.primary:focus{color:var(--_primary-focus-icon-color)}.fab.primary:hover{color:var(--_primary-hover-icon-color)}.fab.primary:active{color:var(--_primary-pressed-icon-color)}.fab.primary .label{color:var(--_primary-label-text-color)}.fab:hover .fab.primary .label{color:var(--_primary-hover-label-text-color)}.fab:focus .fab.primary .label{color:var(--_primary-focus-label-text-color)}.fab:active .fab.primary .label{color:var(--_primary-pressed-label-text-color)}.fab.secondary{background-color:var(--_secondary-container-color);--md-ripple-hover-color: var(--_secondary-hover-state-layer-color);--md-ripple-pressed-color: var(--_secondary-pressed-state-layer-color)}.fab.secondary .icon ::slotted(*){color:var(--_secondary-icon-color)}.fab.secondary:focus{color:var(--_secondary-focus-icon-color)}.fab.secondary:hover{color:var(--_secondary-hover-icon-color)}.fab.secondary:active{color:var(--_secondary-pressed-icon-color)}.fab.secondary .label{color:var(--_secondary-label-text-color)}.fab:hover .fab.secondary .label{color:var(--_secondary-hover-label-text-color)}.fab:focus .fab.secondary .label{color:var(--_secondary-focus-label-text-color)}.fab:active .fab.secondary .label{color:var(--_secondary-pressed-label-text-color)}.fab.tertiary{background-color:var(--_tertiary-container-color);--md-ripple-hover-color: var(--_tertiary-hover-state-layer-color);--md-ripple-pressed-color: var(--_tertiary-pressed-state-layer-color)}.fab.tertiary .icon ::slotted(*){color:var(--_tertiary-icon-color)}.fab.tertiary:focus{color:var(--_tertiary-focus-icon-color)}.fab.tertiary:hover{color:var(--_tertiary-hover-icon-color)}.fab.tertiary:active{color:var(--_tertiary-pressed-icon-color)}.fab.tertiary .label{color:var(--_tertiary-label-text-color)}.fab:hover .fab.tertiary .label{color:var(--_tertiary-hover-label-text-color)}.fab:focus .fab.tertiary .label{color:var(--_tertiary-focus-label-text-color)}.fab:active .fab.tertiary .label{color:var(--_tertiary-pressed-label-text-color)}.fab.extended slot span{padding-inline-start:4px}.fab.small{width:var(--_small-container-width);height:var(--_small-container-height)}.fab.small .icon ::slotted(*){width:var(--_small-icon-size);height:var(--_small-icon-size);font-size:var(--_small-icon-size)}.fab.small,.fab.small .ripple{border-start-start-radius:var(--_small-container-shape-start-start);border-start-end-radius:var(--_small-container-shape-start-end);border-end-start-radius:var(--_small-container-shape-end-start);border-end-end-radius:var(--_small-container-shape-end-end)}.fab.small md-focus-ring{--md-focus-ring-shape-start-start: var(--_small-container-shape-start-start);--md-focus-ring-shape-start-end: var(--_small-container-shape-start-end);--md-focus-ring-shape-end-end: var(--_small-container-shape-end-end);--md-focus-ring-shape-end-start: var(--_small-container-shape-end-start)}
`;

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const styles$3 = i$5 `@media(forced-colors: active){.fab{border:1px solid ButtonText}.fab.extended{padding-inline-start:15px;padding-inline-end:19px}md-focus-ring{--md-focus-ring-outward-offset: 3px}}
`;

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const styles$2 = i$5 `:host{--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity);display:inline-flex;-webkit-tap-highlight-color:rgba(0,0,0,0)}:host([size=medium][touch-target=wrapper]){margin:max(0px,48px - var(--_container-height))}:host([size=large][touch-target=wrapper]){margin:max(0px,48px - var(--_large-container-height))}.fab,.icon,.icon ::slotted(*){display:flex}.fab{align-items:center;justify-content:center;vertical-align:middle;padding:0;position:relative;height:var(--_container-height);transition-property:background-color;border-width:0px;outline:none;z-index:0;text-transform:inherit;--md-elevation-level: var(--_container-elevation);--md-elevation-shadow-color: var(--_container-shadow-color);background-color:var(--_container-color);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-pressed-color: var(--_pressed-state-layer-color)}.fab.extended{width:inherit;box-sizing:border-box;padding-inline-start:16px;padding-inline-end:20px}.fab:not(.extended){width:var(--_container-width)}.fab.large{width:var(--_large-container-width);height:var(--_large-container-height)}.fab.large .icon ::slotted(*){width:var(--_large-icon-size);height:var(--_large-icon-size);font-size:var(--_large-icon-size)}.fab.large,.fab.large .ripple{border-start-start-radius:var(--_large-container-shape-start-start);border-start-end-radius:var(--_large-container-shape-start-end);border-end-start-radius:var(--_large-container-shape-end-start);border-end-end-radius:var(--_large-container-shape-end-end)}.fab.large md-focus-ring{--md-focus-ring-shape-start-start: var(--_large-container-shape-start-start);--md-focus-ring-shape-start-end: var(--_large-container-shape-start-end);--md-focus-ring-shape-end-end: var(--_large-container-shape-end-end);--md-focus-ring-shape-end-start: var(--_large-container-shape-end-start)}.fab:focus{--md-elevation-level: var(--_focus-container-elevation)}.fab:hover{--md-elevation-level: var(--_hover-container-elevation)}.fab:active{--md-elevation-level: var(--_pressed-container-elevation)}.fab.lowered{background-color:var(--_lowered-container-color);--md-elevation-level: var(--_lowered-container-elevation)}.fab.lowered:focus{--md-elevation-level: var(--_lowered-focus-container-elevation)}.fab.lowered:hover{--md-elevation-level: var(--_lowered-hover-container-elevation)}.fab.lowered:active{--md-elevation-level: var(--_lowered-pressed-container-elevation)}.fab .label{color:var(--_label-text-color)}.fab:hover .fab .label{color:var(--_hover-label-text-color)}.fab:focus .fab .label{color:var(--_focus-label-text-color)}.fab:active .fab .label{color:var(--_pressed-label-text-color)}.label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight)}.fab.extended .icon ::slotted(*){margin-inline-end:12px}.ripple{overflow:hidden}.ripple,md-elevation{z-index:-1}.touch-target{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}:host([touch-target=none]) .touch-target{display:none}md-elevation,.fab{transition-duration:280ms;transition-timing-function:cubic-bezier(0.2, 0, 0, 1)}.fab,.ripple{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}.icon ::slotted(*){width:var(--_icon-size);height:var(--_icon-size);font-size:var(--_icon-size)}
`;

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Floating action buttons (FABs) help people take primary actions.
 * They’re used to represent the most important action on a screen, such as
 * Create or Reply.
 *
 * @description
 * __Emphasis:__ High emphasis – For the primary, most important, or most common
 * action on a screen
 *
 * __Rationale:__ The FAB remains the default component for a screen’s primary
 * action. It comes in three sizes: small FAB, FAB, and large FAB. The extended
 * FAB’s wider format and text label give it more visual prominence than a  FAB.
 * It’s often used on larger screens where a FAB would seem too small.
 *
 * __Example usages:__
 * - FAB
 *   - Create
 *   - Compose
 * - Extended FAB
 *   - Create
 *   - Compose
 *   - New Thread
 *   - New File
 *
 * @final
 * @suppress {visibility}
 */
class MdFab extends Fab {
}
MdFab.styles = [styles$2, styles$4, styles$3];

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Returns `true` if the given element is in a right-to-left direction.
 *
 * @param el Element to determine direction from
 * @param shouldCheck Optional. If `false`, return `false` without checking
 *     direction. Determining the direction of `el` is somewhat expensive, so
 *     this parameter can be used as a conditional guard. Defaults to `true`.
 */
function isRtl(el, shouldCheck = true) {
    return (shouldCheck &&
        getComputedStyle(el).getPropertyValue('direction').trim() === 'rtl');
}

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Separate variable needed for closure.
const iconButtonBaseClass = mixinDelegatesAria(mixinElementInternals(ScopedElementsMixin((i$3))));
/**
 * A button for rendering icons.
 *
 * @fires input {InputEvent} Dispatched when a toggle button toggles --bubbles
 * --composed
 * @fires change {Event} Dispatched when a toggle button toggles --bubbles
 */
class IconButton extends iconButtonBaseClass {
    get name() {
        return this.getAttribute('name') ?? '';
    }
    set name(name) {
        this.setAttribute('name', name);
    }
    /**
     * The associated form element with which this element's value will submit.
     */
    get form() {
        return this[internals].form;
    }
    /**
     * The labels this element is associated with.
     */
    get labels() {
        return this[internals].labels;
    }
    constructor() {
        super();
        /**
         * Disables the icon button and makes it non-interactive.
         */
        this.disabled = false;
        /**
         * "Soft-disables" the icon button (disabled but still focusable).
         *
         * Use this when an icon button needs increased visibility when disabled. See
         * https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_disabled_controls
         * for more guidance on when this is needed.
         */
        this.softDisabled = false;
        /**
         * Flips the icon if it is in an RTL context at startup.
         */
        this.flipIconInRtl = false;
        /**
         * Sets the underlying `HTMLAnchorElement`'s `href` resource attribute.
         */
        this.href = '';
        /**
         * Sets the underlying `HTMLAnchorElement`'s `target` attribute.
         */
        this.target = '';
        /**
         * The `aria-label` of the button when the button is toggleable and selected.
         */
        this.ariaLabelSelected = '';
        /**
         * When true, the button will toggle between selected and unselected
         * states
         */
        this.toggle = false;
        /**
         * Sets the selected state. When false, displays the default icon. When true,
         * displays the selected icon, or the default icon If no `slot="selected"`
         * icon is provided.
         */
        this.selected = false;
        /**
         * The default behavior of the button. May be "button", "reset", or "submit"
         * (default).
         */
        this.type = 'submit';
        /**
         * The value added to a form with the button's name when the button submits a
         * form.
         */
        this.value = '';
        this.flipIcon = isRtl(this, this.flipIconInRtl);
        {
            this.addEventListener('click', this.handleClick.bind(this));
        }
    }
    willUpdate() {
        // Link buttons cannot be disabled or soft-disabled.
        if (this.href) {
            this.disabled = false;
            this.softDisabled = false;
        }
    }
    render() {
        const tag = this.href ? i `div` : i `button`;
        // Needed for closure conformance
        const { ariaLabel, ariaHasPopup, ariaExpanded } = this;
        const hasToggledAriaLabel = ariaLabel && this.ariaLabelSelected;
        const ariaPressedValue = !this.toggle ? E : this.selected;
        let ariaLabelValue = E;
        if (!this.href) {
            ariaLabelValue =
                hasToggledAriaLabel && this.selected
                    ? this.ariaLabelSelected
                    : ariaLabel;
        }
        return u$1 `<${tag}
        class="icon-button ${e(this.getRenderClasses())}"
        id="button"
        aria-label="${ariaLabelValue || E}"
        aria-haspopup="${(!this.href && ariaHasPopup) || E}"
        aria-expanded="${(!this.href && ariaExpanded) || E}"
        aria-pressed="${ariaPressedValue}"
        aria-disabled=${(!this.href && this.softDisabled) || E}
        ?disabled="${!this.href && this.disabled}"
        @click="${this.handleClickOnChild}">
        ${this.renderFocusRing()}
        ${this.renderRipple()}
        ${!this.selected ? this.renderIcon() : E}
        ${this.selected ? this.renderSelectedIcon() : E}
        ${this.renderTouchTarget()}
        ${this.href && this.renderLink()}
  </${tag}>`;
    }
    renderLink() {
        // Needed for closure conformance
        const { ariaLabel } = this;
        return x `
      <a
        class="link"
        id="link"
        href="${this.href}"
        target="${this.target || E}"
        aria-label="${ariaLabel || E}"></a>
    `;
    }
    getRenderClasses() {
        return {
            'flip-icon': this.flipIcon,
            'selected': this.toggle && this.selected,
        };
    }
    renderIcon() {
        return x `<span class="icon"><slot></slot></span>`;
    }
    renderSelectedIcon() {
        // Use default slot as fallback to not require specifying multiple icons
        return x `<span class="icon icon--selected"
      ><slot name="selected"><slot></slot></slot
    ></span>`;
    }
    renderTouchTarget() {
        return x `<span class="touch"></span>`;
    }
    renderFocusRing() {
        // TODO(b/310046938): use the same id for both elements
        return x `<md-focus-ring
      part="focus-ring"
      for=${this.href ? 'link' : 'button'}></md-focus-ring>`;
    }
    renderRipple() {
        const isRippleDisabled = !this.href && (this.disabled || this.softDisabled);
        // TODO(b/310046938): use the same id for both elements
        return x `<md-ripple
      for=${this.href ? 'link' : E}
      ?disabled="${isRippleDisabled}"></md-ripple>`;
    }
    connectedCallback() {
        this.flipIcon = isRtl(this, this.flipIconInRtl);
        super.connectedCallback();
    }
    /** Handles a click on this element. */
    handleClick(event) {
        // If the icon button is soft-disabled, we need to explicitly prevent the
        // click from propagating to other event listeners as well as prevent the
        // default action.
        if (!this.href && this.softDisabled) {
            event.stopImmediatePropagation();
            event.preventDefault();
            return;
        }
    }
    /**
     * Handles a click on the child <div> or <button> element within this
     * element's shadow DOM.
     */
    async handleClickOnChild(event) {
        // Allow the event to propagate
        await 0;
        if (!this.toggle ||
            this.disabled ||
            this.softDisabled ||
            event.defaultPrevented) {
            return;
        }
        this.selected = !this.selected;
        this.dispatchEvent(new InputEvent('input', { bubbles: true, composed: true }));
        // Bubbles but does not compose to mimic native browser <input> & <select>
        // Additionally, native change event is not an InputEvent.
        this.dispatchEvent(new Event('change', { bubbles: true }));
    }
}
(() => {
    setupFormSubmitter(IconButton);
})();
/** @nocollapse */
IconButton.formAssociated = true;
/** @nocollapse */
IconButton.shadowRootOptions = {
    mode: 'open',
    delegatesFocus: true,
};
IconButton.scopedElements = {
    'md-focus-ring': MdFocusRing,
    'md-ripple': MdRipple,
};
__decorate([
    n$3({ type: Boolean, reflect: true })
], IconButton.prototype, "disabled", void 0);
__decorate([
    n$3({ type: Boolean, attribute: 'soft-disabled', reflect: true })
], IconButton.prototype, "softDisabled", void 0);
__decorate([
    n$3({ type: Boolean, attribute: 'flip-icon-in-rtl' })
], IconButton.prototype, "flipIconInRtl", void 0);
__decorate([
    n$3()
], IconButton.prototype, "href", void 0);
__decorate([
    n$3()
], IconButton.prototype, "target", void 0);
__decorate([
    n$3({ attribute: 'aria-label-selected' })
], IconButton.prototype, "ariaLabelSelected", void 0);
__decorate([
    n$3({ type: Boolean })
], IconButton.prototype, "toggle", void 0);
__decorate([
    n$3({ type: Boolean, reflect: true })
], IconButton.prototype, "selected", void 0);
__decorate([
    n$3()
], IconButton.prototype, "type", void 0);
__decorate([
    n$3({ reflect: true })
], IconButton.prototype, "value", void 0);
__decorate([
    r$1()
], IconButton.prototype, "flipIcon", void 0);

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const styles$1 = i$5 `:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);height:var(--_container-height);width:var(--_container-width);justify-content:center}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) max(0px,(48px - var(--_container-width))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host(:is([disabled],[soft-disabled])){pointer-events:none}.icon-button{place-items:center;background:none;border:none;box-sizing:border-box;cursor:pointer;display:flex;place-content:center;outline:none;padding:0;position:relative;text-decoration:none;user-select:none;z-index:0;flex:1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.icon ::slotted(*){font-size:var(--_icon-size);height:var(--_icon-size);width:var(--_icon-size);font-weight:inherit}md-ripple{z-index:-1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.flip-icon .icon{transform:scaleX(-1)}.icon{display:inline-flex}.link{height:100%;outline:none;position:absolute;width:100%}.touch{position:absolute;height:max(48px,100%);width:max(48px,100%)}:host([touch-target=none]) .touch{display:none}@media(forced-colors: active){:host(:is([disabled],[soft-disabled])){--_disabled-icon-color: GrayText;--_disabled-icon-opacity: 1}}
`;

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const styles = i$5 `:host{--_disabled-icon-color: var(--md-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-icon-button-disabled-icon-opacity, 0.38);--_icon-size: var(--md-icon-button-icon-size, 24px);--_selected-focus-icon-color: var(--md-icon-button-selected-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-icon-color: var(--md-icon-button-selected-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-color: var(--md-icon-button-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-icon-button-selected-hover-state-layer-opacity, 0.08);--_selected-icon-color: var(--md-icon-button-selected-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-icon-color: var(--md-icon-button-selected-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-color: var(--md-icon-button-selected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-opacity: var(--md-icon-button-selected-pressed-state-layer-opacity, 0.12);--_state-layer-height: var(--md-icon-button-state-layer-height, 40px);--_state-layer-shape: var(--md-icon-button-state-layer-shape, var(--md-sys-shape-corner-full, 9999px));--_state-layer-width: var(--md-icon-button-state-layer-width, 40px);--_focus-icon-color: var(--md-icon-button-focus-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-icon-color: var(--md-icon-button-hover-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-icon-button-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-opacity: var(--md-icon-button-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-icon-button-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color: var(--md-icon-button-pressed-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-color: var(--md-icon-button-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-opacity: var(--md-icon-button-pressed-state-layer-opacity, 0.12);--_container-shape-start-start: 0;--_container-shape-start-end: 0;--_container-shape-end-end: 0;--_container-shape-end-start: 0;--_container-height: 0;--_container-width: 0;height:var(--_state-layer-height);width:var(--_state-layer-width)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_state-layer-height))/2) max(0px,(48px - var(--_state-layer-width))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_state-layer-shape);--md-focus-ring-shape-start-end: var(--_state-layer-shape);--md-focus-ring-shape-end-end: var(--_state-layer-shape);--md-focus-ring-shape-end-start: var(--_state-layer-shape)}.standard{background-color:rgba(0,0,0,0);color:var(--_icon-color);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.standard:hover{color:var(--_hover-icon-color)}.standard:focus{color:var(--_focus-icon-color)}.standard:active{color:var(--_pressed-icon-color)}.standard:is(:disabled,[aria-disabled=true]){color:var(--_disabled-icon-color)}md-ripple{border-radius:var(--_state-layer-shape)}.standard:is(:disabled,[aria-disabled=true]){opacity:var(--_disabled-icon-opacity)}.selected{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}.selected:not(:disabled,[aria-disabled=true]){color:var(--_selected-icon-color)}.selected:not(:disabled,[aria-disabled=true]):hover{color:var(--_selected-hover-icon-color)}.selected:not(:disabled,[aria-disabled=true]):focus{color:var(--_selected-focus-icon-color)}.selected:not(:disabled,[aria-disabled=true]):active{color:var(--_selected-pressed-icon-color)}
`;

class MdIconButton extends IconButton {
    getRenderClasses() {
        return {
            ...super.getRenderClasses(),
            'standard': true,
        };
    }
}
MdIconButton.styles = [styles$1, styles];

const privType = 'Transpower-SLD-Vertices';
const sldNs = 'https://transpower.co.nz/SCL/SSD/SLD/v0';
const svgNs = 'http://www.w3.org/2000/svg';
const xlinkNs = 'http://www.w3.org/1999/xlink';
const sldPrefix = 'esld';
const eqTypes = [
    'CAB',
    'CAP',
    'CBR',
    'CTR',
    'DIS',
    'GEN',
    'IFL',
    'LIN',
    'MOT',
    'REA',
    'RES',
    'SAR',
    'SMC',
    'VTR',
];
function isEqType(str) {
    return eqTypes.includes(str);
}
const ringedEqTypes = new Set(['GEN', 'MOT', 'SMC']);
const transformerKinds = ['default', 'auto', 'earthing'];
function isTransformerKind(kind) {
    return transformerKinds.includes(kind);
}
function xmlBoolean(value) {
    var _a;
    return ['true', '1'].includes((_a = value === null || value === void 0 ? void 0 : value.trim()) !== null && _a !== void 0 ? _a : 'false');
}
function isBusBar(element) {
    var _a;
    return (element.tagName === 'Bay' &&
        xmlBoolean((_a = element.querySelector('Section[bus]')) === null || _a === void 0 ? void 0 : _a.getAttribute('bus')));
}
function attributes(element) {
    var _a;
    const [x, y, w, h, rotVal, labelX, labelY] = [
        'x',
        'y',
        'w',
        'h',
        'rot',
        'lx',
        'ly',
    ].map(name => { var _a; return parseFloat((_a = element.getAttributeNS(sldNs, name)) !== null && _a !== void 0 ? _a : '0'); });
    const weight = parseInt((_a = element.getAttributeNS(sldNs, 'weight')) !== null && _a !== void 0 ? _a : '300', 10);
    const pos = [x, y].map(d => Math.max(0, d));
    const dim = [w, h].map(d => Math.max(1, d));
    const label = [labelX, labelY].map(d => Math.max(0, d));
    const bus = xmlBoolean(element.getAttribute('bus'));
    const flip = xmlBoolean(element.getAttributeNS(sldNs, 'flip'));
    const kindVal = element.getAttributeNS(sldNs, 'kind');
    const kind = isTransformerKind(kindVal) ? kindVal : 'default';
    const color = element.getAttributeNS(sldNs, 'color') || '#000';
    const rot = (((rotVal % 4) + 4) % 4);
    return { pos, dim, label, flip, rot, bus, weight, color, kind };
}
const robotoDataURL = 'data:application/font-woff;charset=utf-8;base64,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';

const zigPath = b$1 `
  <line x1="1.5" y1="1.5" x2="1.5" y2="1.25" />
  <line transform="rotate(240 1.5 1.25)" x1="1.5" y1="1.5" x2="1.5" y2="1.25" />
`;
const zigZagPath = b$1 `
<g>${zigPath}</g>
<g transform="rotate(120 1.5 1.5)">${zigPath}</g>
<g transform="rotate(240 1.5 1.5)">${zigPath}</g>
`;
const zigZag2WTransform = 'matrix(0.8, 0, 0, 0.8, 0.3, 0.3) translate(0 -0.1) rotate(-20 1.5 1.5)';
const equipmentPaths = {
    CAB: b$1 `
  <path
    d="M 9.4,4.2 H 15.6 L 12.5,8.3 Z"
    fill="currentColor"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    />
  <path
    d="m 12.5,8.3 v 9"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    />
  <path
    d="m 9.4,21.3 h 6.2 l -3.1,-4.1 z"
    fill="currentColor"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    />
  `,
    CAP: b$1 `
  <path
    d="M 6.5,10.1 H 18.5"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    />
  <path
    d="M 12.5,4 V 10.1"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    />
  <path
    d="M 6.5,14.9 H 18.5"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    />
  <path
    d="M 12.5,14.9 V 21"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    />
  `,
    CBR: b$1 `
  <line
    x1="12.5"
    y1="21"
    x2="4"
    y2="5"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
  />
  <line
    x1="9.5"
    y1="1"
    x2="15.5"
    y2="7"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
  />
  <line
    x1="9.5"
    y1="7"
    x2="15.5"
    y2="1"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
  />
  `,
    CTR: b$1 `
  <line
    x1="12.5"
    y1="4"
    x2="12.5"
    y2="21"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
  />
  <circle
    cx="12.5"
    cy="12.5"
    r="7.5"
    stroke="currentColor"
    fill="none"
    stroke-width="1.5"
    stroke-linecap="round"
  />
  `,
    DIS: b$1 `
  <path
    d="M 12.5 21 L 4 4"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
  />
  <path
    d="M 8 4 L 17 4"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
  />
  `,
    GEN: b$1 `
  <path
    d="m 16.2,12.5 v 4.2 q -0.2,0.2 -0.6,0.6 -0.4,0.4 -1.1,0.7 -0.7,0.3 -1.8,0.3 -1.8,0 -2.9,-1.2 -1.1,-1.2 -1.1,-3.6 v -2.1 q 0,-2.4 1,-3.6 1,-1.1 2.9,-1.1 1.7,0 2.6,0.9 0.9,0.9 1,2.6 h -1.4 q -0.1,-1.1 -0.6,-1.6 -0.5,-0.6 -1.5,-0.6 -1.3,0 -1.8,0.9 -0.5,0.9 -0.5,2.6 v 2.1 q 0,1.8 0.7,2.7 0.7,0.9 1.9,0.9 1,0 1.4,-0.3 0.4,-0.3 0.6,-0.5 v -2.6 h -2.1 v -1.2 z"
    stroke="currentColor"
    fill="currentColor"
    stroke-width="0.3"
    stroke-linecap="round"
  />
  `,
    IFL: b$1 `
  <polygon
    points="4,4 12.5,21 21,4"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linejoin="round"
    stroke-linecap="round"
  />
  `,
    LIN: b$1 `
  <path
    d="M 12.5,4 V 21"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
  />
  <path
    d="m 10.3,12.5 4.3,-2.5"
    fill="currentColor"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
  />
  <path
    d="m 10.3,15 4.3,-2.5"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
  />
  `,
    MOT: b$1 `
  <path
    d="m 12.5,15.5 2.3,-7.8 h 1.4 v 9.6 h -1.1 v -3.7 l 0.1,-3.7 -2.3,7.4 h -0.9 L 9.8,9.8 9.9,13.6 v 3.7 H 8.8 V 7.7 h 1.4 z"
    stroke="currentColor"
    fill="currentColor"
    stroke-width="0.3"
    stroke-linecap="round"
  />
  `,
    REA: b$1 `
  <path
    d="m 4.5,12.5 h 8 V 4"
    stroke="currentColor"
    fill="none"
    stroke-width="1.5"
    stroke-linecap="round"
  />
  <path
    d="m 4.5,12.5 a 8,8 0 0 1 8,-8 8,8 0 0 1 8,8 8,8 0 0 1 -8,8"
    stroke="currentColor"
    fill="none"
    stroke-width="1.5"
    stroke-linecap="round"
  />
  <path
    d="M 12.5,20.5 V 21"
    stroke="currentColor"
    fill="none"
    stroke-width="1.5"
    stroke-linecap="round"
  />
  `,
    RES: b$1 `
  <rect
    y="4"
    x="8.5"
    height="17"
    width="8"
    stroke="currentColor"
    fill="none"
    stroke-width="1.5"
    stroke-linecap="round"
  />
  `,
    SAR: b$1 `
  <path
    d="M 12.5,4 V 8"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    />
  <path
    d="m 12.5,21 v 4"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
  />
  <line
    x1="10"
    y1="24.25"
    x2="15"
    y2="24.25"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
  />
  <path
    d="M 11.2,8 12.5,11 13.8,8 Z"
    fill="currentColor"
    stroke="currentColor"
    stroke-width="1"
    stroke-linecap="round"
  />
  <rect
    y="4"
    x="8.5"
    height="17"
    width="8"
    stroke="currentColor"
    fill="none"
    stroke-width="1.5"
    stroke-linecap="round"
  />
  `,
    SMC: b$1 `
  <path
    d="m 16.6,12.5 c -0.7,1.4 -1.3,2.8 -2.1,2.8 -1.5,0 -2.6,-5.6 -4.1,-5.6 -0.7,0 -1.4,1.4 -2.1,2.8"
    stroke="currentColor"
    fill="none"
    stroke-width="1.2"
    stroke-linecap="round"
  />
  `,
    VTR: b$1 `
  <circle
    cx="12.5"
    cy="9.5"
    r="5.25"
    stroke="currentColor"
    fill="none"
    stroke-width="1.5"
    stroke-linecap="round"
  />
  <circle
    cx="12.5"
    cy="15.5"
    r="5.25"
    stroke="currentColor"
    fill="none"
    stroke-width="1.5"
    stroke-linecap="round"
  />
`,
};
const eqRingPath = b$1 `
  <circle
    cx="12.5"
    cy="12.5"
    r="8.5"
    stroke="currentColor"
    fill="none"
    stroke-width="1.5"
    stroke-linecap="round"
  />
  `;
const defaultEquipmentPath = b$1 `
  <circle
    cx="12.5"
    cy="12.5"
    r="11"
    stroke-width="1.5"
    stroke="currentColor"
    fill="none"
  />
  <path
    d=" M 7.5 17.5
    L 12 13
    Z"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linejoin="round"
    stroke-linecap="round"
  />
  <path
    d="	M 11 7
      L 10 8
      C 5 13, 11 20, 17 15
      L 18 14
      Z"
    fill="currentColor"
    stroke="currentColor"
    stroke-linejoin="round"
  />
  <path
    d=" M 13 9
    L 16 6
    Z"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linejoin="round"
    stroke-linecap="round"
  />
  <path
    d=" M 16 12
    L 19 9
    Z"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linejoin="round"
    stroke-linecap="round"
  />
`;
function equipmentPath(equipmentType) {
    if (equipmentType && isEqType(equipmentType))
        return equipmentPaths[equipmentType];
    return defaultEquipmentPath;
}
function equipmentSymbol(equipmentType) {
    return b$1 `<symbol
    id="${equipmentType}"
    viewBox="0 0 25 25"
    width="1" height="1"
  >
    ${equipmentPath(equipmentType)}
  </symbol>`;
}
function iedSymbol() {
    return b$1 `<symbol
    id="IED"
    viewBox="0 0 25 25"
    width="1" height="1"
  >
  <path
    fill="currentColor"
    d="M22 9V7h-2V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2h2v-2h-2v-2h2v-2h-2V9zm-4 10H4V5h14zM6 13h5v4H6zm6-6h4v3h-4zM6 7h5v5H6zm6 4h4v6h-4z"
  />
  </symbol>`;
}
const groundedMarker = b$1 `<marker
  markerWidth="20" markerHeight="20"
  refX="12.5" refY="12.5"
  viewBox="0 0 25 25"
  id="grounded"
  orient="auto-start-reverse"
>
  <line
    y1="17"
    y2="8"
    x1="12.5"
    x2="12.5"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-width="1.5"
  />
  <line
    y1="15.5"
    y2="9.5"
    x1="14.7"
    x2="14.7"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-width="1.5"
  />
  <line
    y1="14.5"
    y2="10.5"
    x1="16.8"
    x2="16.8"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-width="1.5"
  />
</marker>`;
const arrowMarker = b$1 `
<marker
  id="arrow"
  viewBox="0 0 10 10"
  refX="5"
  refY="5"
  markerWidth="6"
  markerHeight="6"
  orient="auto-start-reverse">
  <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
</marker>
`;
const symbols = b$1 `
  <defs>
  <pattern id="halfgrid" patternUnits="userSpaceOnUse" width="1" height="1" viewBox="0 0 1 1">
  <circle cx="0.1" cy="0.25" r="0.035" fill="#888" opacity="0.3" />
  <circle cx="0.6" cy="0.25" r="0.035" fill="#888" opacity="0.3" />
  <circle cx="0.1" cy="0.75" r="0.035" fill="#888" opacity="0.3" />
  <circle cx="0.6" cy="0.75" r="0.035" fill="#888" opacity="0.3" />
  </pattern>
  <pattern id="grid" patternUnits="userSpaceOnUse" width="1" height="1" viewBox="0 0 1 1">
  <line x1="0" y1="0" x2="0" y2="1" stroke="#888" stroke-opacity="0.3" stroke-width="0.06" />
  <line x1="0" y1="0" x2="1" y2="0" stroke="#888" stroke-opacity="0.3" stroke-width="0.06" />
  <line x1="1" y1="0" x2="1" y2="1" stroke="#888" stroke-opacity="0.3" stroke-width="0.06" />
  <line x1="0" y1="1" x2="1" y2="1" stroke="#888" stroke-opacity="0.3" stroke-width="0.06" />
  </pattern>
  ${eqTypes.map(eqType => equipmentSymbol(eqType))}
  ${equipmentSymbol('ConductingEquipment')}
  ${iedSymbol()}
  ${groundedMarker}
  ${arrowMarker}
  </defs>
`;

function isBay(element) {
    return element.tagName === 'Bay' && !isBusBar(element);
}
function renderedPosition(element) {
    const { pos: [x, y], } = attributes(element);
    return [x, y];
}
function renderedLabelPosition(element) {
    const { label: [x, y], } = attributes(element);
    return [x, y];
}
function renderLabel(element, linkedEquipments) {
    const deg = 0;
    const text = element.getAttribute('name');
    const weight = 400;
    const color = 'black';
    const [x, y] = renderedLabelPosition(element);
    const fontSize = element.tagName === 'ConductingEquipment' || element.tagName === 'IED'
        ? 0.45
        : 0.6;
    const id = identity(element);
    const classes = e({
        label: true,
        container: (element.tagName === 'Bay' && !isBusBar(element)) ||
            element.tagName === 'VoltageLevel',
        ied: element.tagName === 'IED',
        equipment: element.tagName === 'ConductingEquipment',
        linked: linkedEquipments.includes(element),
    });
    return b$1 `<g class="${classes}" id="label:${id}"
                 transform="rotate(${deg} ${x + 0.5} ${y - 0.5})">
        <text x="${x + 0.1}" y="${y - 0.5}"
          alignment-baseline="central"
          fill="${color}" font-weight="${weight}"
          font-size="${fontSize}px" font-family="Roboto, sans-serif"
          style="cursor: default;">
          ${text}
        </text>
      </g>`;
}
function windingMeasures(winding) {
    const transformer = winding.parentElement;
    const windings = Array.from(transformer.children).filter(c => c.tagName === 'TransformerWinding');
    const [x, y] = renderedPosition(transformer).map(c => c + 0.5);
    let center = [x, y];
    const size = 0.7;
    const grounded = {};
    const terminals = {};
    let arc;
    let zigZagTransform;
    const terminalElements = Array.from(winding.children).filter(c => c.tagName === 'Terminal');
    const terminal1 = terminalElements.find(t => t.getAttribute('name') === 'T1');
    const terminal2 = terminalElements.find(t => t.getAttribute('name') !== 'T1');
    const neutral = Array.from(winding.children).find(c => c.tagName === 'NeutralPoint');
    const windingIndex = windings.indexOf(winding);
    const { rot, kind, flip } = attributes(transformer);
    function shift(point, coord, amount) {
        const shifted = point.slice();
        if (coord === 0)
            shifted[rot % 2] += rot < 2 ? amount : -amount;
        else
            shifted[(rot + 1) % 2] += rot > 0 && rot < 3 ? -amount : amount;
        return shifted;
    }
    if (windings.length === 1) {
        if (kind === 'earthing') {
            zigZagTransform = '';
            const n1 = shift(center, 1, size);
            if (!neutral) {
                terminals.N1 = n1;
            }
            else if (neutral.getAttribute('cNodeName') === 'grounded') {
                const n1p = shift(n1, 1, 0.2);
                grounded.N1 = [n1p, n1];
            }
            if (!terminal1 && !terminal2) {
                terminals.T1 = shift(center, 1, -size);
            }
        }
        else {
            const sgn = flip ? -1 : 1;
            const n1 = shift(center, 0, -size);
            const n2 = shift(center, 0, size);
            const t1 = shift(center, 1, (-size - 0.5) * sgn);
            const t2 = shift(center, 1, size * sgn);
            if (!neutral) {
                terminals.N1 = n1;
                terminals.N2 = n2;
            }
            else if (neutral.getAttribute('cNodeName') === 'grounded') {
                if (neutral.getAttribute('name') === 'N1') {
                    const n1p = shift(n1, 0, -0.2);
                    grounded.N1 = [n1p, n1];
                }
                else {
                    const n2p = shift(n2, 0, 0.2);
                    grounded.N2 = [n2p, n2];
                }
            }
            arc = {
                from: n2,
                fromCtl: shift(n2, 1, -sgn),
                to: t1,
                toCtl: shift(shift(t1, 0, 0.2), 1, 0.1 * sgn),
            };
            if (!terminal1) {
                terminals.T1 = t1;
            }
            if (!terminal2) {
                terminals.T2 = t2;
            }
        }
    }
    else if (windings.length === 2) {
        if (windingIndex === 1) {
            center = shift(center, 1, 1);
        }
        if (kind === 'auto') {
            if (windingIndex === 1) {
                const n1 = shift(center, 0, -size);
                const n2 = shift(center, 0, size);
                if (!neutral) {
                    terminals.N1 = n1;
                    terminals.N2 = n2;
                }
                else if (neutral.getAttribute('cNodeName') === 'grounded') {
                    if (neutral.getAttribute('name') === 'N1') {
                        const n1p = shift(n1, 0, -0.2);
                        grounded.N1 = [n1p, n1];
                    }
                    else {
                        const n2p = shift(n2, 0, 0.2);
                        grounded.N2 = [n2p, n2];
                    }
                }
                if (!terminal1 && !terminal2) {
                    terminals.T1 = shift(center, 1, size);
                }
            }
            else {
                const sgn = flip ? -1 : 1;
                const t1 = shift(center, 0, size * sgn);
                const t2 = shift(center, 0, (-size - 0.5) * sgn);
                const n1 = shift(center, 1, -size);
                arc = {
                    from: n1,
                    fromCtl: shift(n1, 0, -sgn),
                    to: t2,
                    toCtl: shift(shift(t2, 1, -0.2), 0, 0.1 * sgn),
                };
                if (!terminal1)
                    terminals.T1 = t1;
                if (!terminal2)
                    terminals.T2 = t2;
                if (!neutral) {
                    terminals.N1 = n1;
                }
                else if (neutral.getAttribute('cNodeName') === 'grounded') {
                    const n1p = shift(n1, 1, -0.2);
                    grounded.N1 = [n1p, n1];
                }
            }
        }
        else if (kind === 'earthing') {
            if (windingIndex === 1) {
                if (!terminal1 && !terminal2) {
                    terminals.T1 = shift(center, 1, size);
                }
            }
            else {
                zigZagTransform = zigZag2WTransform;
                const sgn = flip ? -1 : 1;
                if (!terminal1 && !terminal2)
                    terminals.T1 = shift(center, 0, -size * sgn);
                const n1 = shift(center, 0, size * sgn);
                if (!neutral) {
                    terminals.N1 = n1;
                }
                else if (neutral.getAttribute('cNodeName') === 'grounded') {
                    const n1p = shift(n1, 0, 0.2 * sgn);
                    grounded.N1 = [n1p, n1];
                }
            }
        }
        else if (windingIndex === 1) {
            const n1 = shift(center, 0, -size);
            const n2 = shift(center, 0, +size);
            if (!neutral) {
                terminals.N1 = n1;
                terminals.N2 = n2;
            }
            else if (neutral.getAttribute('cNodeName') === 'grounded') {
                if (neutral.getAttribute('name') === 'N1') {
                    const n1p = shift(n1, 0, -0.2);
                    grounded.N1 = [n1p, n1];
                }
                else {
                    const n2p = shift(n2, 0, 0.2);
                    grounded.N2 = [n2p, n2];
                }
            }
            if (!terminal1 && !terminal2) {
                terminals.T1 = shift(center, 1, +size);
            }
        }
        else {
            const n1 = shift(center, 0, -size);
            const n2 = shift(center, 0, +size);
            if (!neutral) {
                terminals.N1 = n1;
                terminals.N2 = n2;
            }
            else if (neutral.getAttribute('cNodeName') === 'grounded') {
                if (neutral.getAttribute('name') === 'N1') {
                    const n1p = shift(n1, 0, -0.2);
                    grounded.N1 = [n1p, n1];
                }
                else {
                    const n2p = shift(n2, 0, 0.2);
                    grounded.N2 = [n2p, n2];
                }
            }
            if (!terminal1 && !terminal2) {
                terminals.T1 = shift(center, 1, -size);
            }
        }
    }
    else if (windings.length === 3) {
        if (windingIndex === 0) {
            if (!terminal1 && !terminal2) {
                terminals.T1 = shift(center, 1, -size);
            }
            const n1 = shift(center, 0, -size);
            const n2 = shift(center, 0, +size);
            if (!neutral) {
                terminals.N1 = n1;
                terminals.N2 = n2;
            }
            else if (neutral.getAttribute('cNodeName') === 'grounded') {
                if (neutral.getAttribute('name') === 'N1') {
                    const n1p = shift(n1, 0, -0.2);
                    grounded.N1 = [n1p, n1];
                }
                else {
                    const n2p = shift(n2, 0, 0.2);
                    grounded.N2 = [n2p, n2];
                }
            }
        }
        else if (windingIndex === 1) {
            center = shift(shift(center, 0, 0.5), 1, 1);
            if (!terminal1 && !terminal2) {
                terminals.T1 = shift(center, 0, size);
            }
            const n1 = shift(center, 1, size);
            if (!neutral) {
                terminals.N1 = n1;
            }
            else if (neutral.getAttribute('cNodeName') === 'grounded') {
                const n1p = shift(n1, 1, 0.2);
                grounded.N1 = [n1p, n1];
            }
        }
        else if (windingIndex === 2) {
            center = shift(shift(center, 0, -0.5), 1, 1);
            if (!terminal1 && !terminal2) {
                terminals.T1 = shift(center, 0, -size);
            }
            const n1 = shift(center, 1, size);
            if (!neutral) {
                terminals.N1 = n1;
            }
            else if (neutral.getAttribute('cNodeName') === 'grounded') {
                const n1p = shift(n1, 1, 0.2);
                grounded.N1 = [n1p, n1];
            }
        }
    }
    return { center, size, terminals, grounded, arc, zigZagTransform };
}
function renderTransformerWinding(winding) {
    const { size, center: [cx, cy], grounded, arc, zigZagTransform, } = windingMeasures(winding);
    const ports = [];
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Object.entries(grounded).forEach(([_, [[x1, y1], [x2, y2]]]) => {
        ports.push(b$1 `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="black" stroke-width="0.06" marker-start="url(#grounded)" />`);
    });
    let longArrow = false;
    let arcPath = b$1 ``;
    const { flip, rot } = attributes(winding.parentElement);
    if (arc) {
        const { from: [xf, yf], fromCtl: [xfc, yfc], to: [xt, yt], toCtl: [xtc, ytc], } = arc;
        if (!flip && yfc < yf)
            longArrow = true;
        if (flip && xfc > xf)
            longArrow = true;
        arcPath = b$1 `<path d="M ${xf} ${yf} C ${xfc} ${yfc}, ${xtc} ${ytc}, ${xt} ${yt}" stroke="black" stroke-width="0.06" />`;
    }
    const tapChanger = winding.querySelector('TapChanger');
    const ltcArrow = tapChanger
        ? b$1 `<line x1="${cx - 0.8}" y1="${cy + 0.8}" x2="${cx + 0.8}" y2="${cy - (longArrow ? 1 : 0.8)}"
              stroke="black" stroke-width="0.06" marker-end="url(#arrow)" />`
        : E;
    const zigZag = zigZagTransform === undefined
        ? E
        : b$1 `<g stroke="black" stroke-linecap="round"
                transform="rotate(${rot * 90} ${cx} ${cy})
                translate(${cx - 1.5} ${cy - 1.5})
                ${zigZagTransform}">${zigZagPath}</g>`;
    return b$1 `<g class="winding"><circle cx="${cx}" cy="${cy}" r="${size}" stroke="black" stroke-width="0.06" />${arcPath}${zigZag}${ltcArrow}${ports}</g>`;
}
function renderPowerTransformer(transformer) {
    const windings = Array.from(transformer.children).filter(c => c.tagName === 'TransformerWinding');
    return b$1 `<g class="${e({ transformer: true })}"
        pointer-events="all" >
        ${windings.map(w => renderTransformerWinding(w))}
      </g>`;
}
function renderConnectivityNode(cNode) {
    const priv = cNode.querySelector(`Private[type="${privType}"]`);
    if (!priv)
        return E;
    const circles = [];
    const intersections = Object.entries(Array.from(priv.querySelectorAll('Vertex')).reduce((record, vertex) => {
        const ret = record;
        const key = JSON.stringify(renderedPosition(vertex));
        if (ret[key])
            ret[key].push(vertex);
        else
            ret[key] = [vertex];
        return ret;
    }, {}))
        .filter(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ([_, vertices]) => vertices.length > 2 ||
        (vertices.length === 2 &&
            vertices.find(v => v.hasAttributeNS(sldNs, 'uuid'))))
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .map(([_, [vertex]]) => renderedPosition(vertex));
    intersections.forEach(([x, y]) => circles.push(b$1 `<circle fill="black" cx="${x}" cy="${y}" r="0.15" />`));
    const lines = [];
    const sections = Array.from(priv.getElementsByTagNameNS(sldNs, 'Section'));
    const targetSize = 0.5;
    sections.forEach(section => {
        const busBar = xmlBoolean(section.getAttribute('bus'));
        const vertices = Array.from(section.getElementsByTagNameNS(sldNs, 'Vertex'));
        let i = 0;
        while (i < vertices.length - 1) {
            const [x1, y1] = renderedPosition(vertices[i]);
            const [x2, y2] = renderedPosition(vertices[i + 1]);
            lines.push(b$1 `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"
                stroke-width="${busBar ? 0.12 : E}" stroke="black" 
                stroke-linecap="${busBar ? 'round' : 'square'}" />`);
            lines.push(b$1 `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke-width="${targetSize}" />`);
            i += 1;
        }
    });
    const id = identity(cNode);
    return b$1 `<g class="node" id="${id}" >
        <title>${cNode.getAttribute('pathName')}</title>
        ${circles}
        ${lines}
      </g>`;
}
function renderEquipment(equipment, linkedEquipments) {
    const [x, y] = renderedPosition(equipment);
    const { flip, rot } = attributes(equipment);
    const deg = 90 * rot;
    const eqType = equipment.getAttribute('type');
    const ringed = ringedEqTypes.has(eqType);
    const symbol = isEqType(eqType) ? eqType : 'ConductingEquipment';
    const icon = ringed
        ? b$1 `<svg
    viewBox="0 0 25 25"
    width="1"
    height="1"
  >
    ${eqRingPath}
  </svg>`
        : b$1 `<use href="#${symbol}" xlink:href="#${symbol}"
              pointer-events="none" />`;
    const terminals = Array.from(equipment.children).filter(c => c.tagName === 'Terminal');
    const topTerminal = terminals.find(t => t.getAttribute('name') === 'T1');
    const bottomTerminal = terminals.find(t => t.getAttribute('name') !== 'T1');
    const topGrounded = (topTerminal === null || topTerminal === void 0 ? void 0 : topTerminal.getAttribute('cNodeName')) === 'grounded'
        ? b$1 `<line x1="0.5" y1="-0.1" x2="0.5" y2="0.16" stroke="black"
                stroke-width="0.06" marker-start="url(#grounded)" />`
        : E;
    const bottomGrounded = (bottomTerminal === null || bottomTerminal === void 0 ? void 0 : bottomTerminal.getAttribute('cNodeName')) === 'grounded'
        ? b$1 `<line x1="0.5" y1="1.1" x2="0.5" y2="0.84" stroke="black"
                stroke-width="0.06" marker-start="url(#grounded)" />`
        : E;
    return b$1 `<g class="${e({
        equipment: true,
        linked: linkedEquipments.includes(equipment),
    })}"
    id="${identity(equipment)}"
    transform="translate(${x} ${y}) rotate(${deg} 0.5 0.5)${flip ? ' scale(-1,1) translate(-1 0)' : ''}">
      <title>${equipment.getAttribute('name')}</title>
      ${icon}
      ${ringed
        ? b$1 `<use transform="rotate(${-deg} 0.5 0.5)" pointer-events="none"
                  href="#${symbol}" xlink:href="#${symbol}" />`
        : E}
      <rect width="1" height="1" fill="none" />
      ${topGrounded}
      ${bottomGrounded}
    </g>`;
}
function renderContainer(bayOrVL, selectedElements) {
    const isVL = bayOrVL.tagName === 'VoltageLevel';
    const [x, y] = renderedPosition(bayOrVL);
    const { dim: [w, h], } = attributes(bayOrVL);
    return b$1 `<g id="${identity(bayOrVL)}" class=${e({
        voltagelevel: isVL,
        bay: !isVL,
    })} tabindex="0" style="outline: none;">
      <rect x="${x}" y="${y}" width="${w}" height="${h}" fill="white" stroke-dasharray="${isVL ? E : '0.18'}"
        stroke="${isVL ? '#2aa198' : '#6c71c4'}" />
      ${Array.from(bayOrVL.children)
        .filter(isBay)
        .map(bay => renderContainer(bay, selectedElements))}
      ${Array.from(bayOrVL.children)
        .filter(child => child.tagName === 'ConductingEquipment')
        .map(equipment => renderEquipment(equipment, selectedElements))}
      ${Array.from(bayOrVL.children)
        .filter(child => child.tagName === 'PowerTransformer')
        .map(equipment => renderPowerTransformer(equipment))}
      </g>`;
}
function sldSvg(substation, options) {
    const nested = !options.gridSize;
    const { dim: [w, h], } = attributes(substation);
    return x ` <svg
    xmlns="${svgNs}"
    xmlns:xlink="${xlinkNs}"
    ${nested ? E : `viewBox = '0 0 ${w} ${h}'`}
    ${nested ? E : `width="${w * options.gridSize}"`}
    ${nested ? E : `height="${h * options.gridSize}"`}
    id="sld"
    stroke-width="0.06"
    fill="none"
  >
    <style>
      @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        src: url(${robotoDataURL}) format('woff');
      }
    </style>
    ${symbols}
    <rect width="100%" height="100%" fill="white" />
    ${Array.from(substation.children)
        .filter(child => child.tagName === 'VoltageLevel')
        .map(vl => b$1 `${renderContainer(vl, options.linkedEquipments)}`)}
    ${Array.from(substation.querySelectorAll('ConnectivityNode'))
        .filter(node => node.getAttribute('name') !== 'grounded' &&
        !isBusBar(node.parentElement))
        .map(cNode => renderConnectivityNode(cNode))}
    ${Array.from(substation.querySelectorAll('ConnectivityNode'))
        .filter(node => node.getAttribute('name') !== 'grounded' &&
        isBusBar(node.parentElement))
        .map(cNode => renderConnectivityNode(cNode))}
    ${Array.from(substation.querySelectorAll(':scope > PowerTransformer')).map(transformer => renderPowerTransformer(transformer))}
    ${Array.from(substation.querySelectorAll('VoltageLevel, Bay, ConductingEquipment, PowerTransformer, Line')).map(element => renderLabel(element, options.linkedEquipments))}
  </svg>`;
}

function inputReference(input) {
    var _a, _b, _c;
    const prefix = (_a = input.getAttribute('prefix')) !== null && _a !== void 0 ? _a : '';
    const lnClass = input.getAttribute('lnClass');
    const lnInst = (_b = input.getAttribute('lnInst')) !== null && _b !== void 0 ? _b : '';
    const ln = `${prefix}${lnClass}${lnInst}`;
    if (input.tagName === 'ClientLN')
        return ln;
    const ldInst = input.getAttribute('ldInst');
    const doName = input.getAttribute('doName');
    const daName = (_c = input.getAttribute('daName')) !== null && _c !== void 0 ? _c : '';
    return `${ldInst}/${ln}.${doName}.${daName}`;
}
function inputSupportingText(input) {
    const desc = input.getAttribute('desc');
    if (input.tagName === 'ClientLN')
        return desc ? `${desc}` : undefined;
    const intAddr = input.getAttribute('intAddr');
    if (desc || intAddr)
        return `${desc !== null && desc !== void 0 ? desc : ''}${intAddr ? ` (${intAddr})` : ''}`;
    return undefined;
}

const serviceColoring = {
    ReportControl: '#859900',
    GSEControl: '#268bd2',
    SampledValueControl: '#cb4b16',
};
function tooltip(conn) {
    const cbName = conn.source.controlBlock.getAttribute('name');
    const sourceIed = conn.source.ied.getAttribute('name');
    const targetIed = conn.target.ied.getAttribute('name');
    const data = conn.target.inputs.map(input => inputReference(input));
    return `${sourceIed}:${cbName} -> ${targetIed}
   
  \t${data.join('\n\t')}`;
}
function connDimensions(conn) {
    const { pos: [sx, sy], } = attributes(conn.source.ied);
    const { pos: [tx, ty], } = attributes(conn.target.ied);
    return { sx, sy, tx, ty };
}
function connDirection(conn) {
    const { sx, sy, tx, ty } = connDimensions(conn);
    if (sx !== tx && sy === ty)
        return { sDir: 'n', tDir: 'n' };
    if (sx === tx && sy > ty + 1)
        return { sDir: 'n', tDir: 's' };
    if (sx === tx && sy < ty - 1)
        return { sDir: 's', tDir: 'n' };
    if (sx === tx && sy === ty + 1)
        return { sDir: 'w', tDir: 'w' };
    if (sx === tx && sy === ty - 1)
        return { sDir: 'w', tDir: 'w' };
    if (sx < tx && sy === ty + 1)
        return { sDir: 'n', tDir: 'w' };
    if (sx > tx && sy === ty + 1)
        return { sDir: 'n', tDir: 'e' };
    if (sx < tx && sy === ty - 1)
        return { sDir: 's', tDir: 'w' };
    if (sx > tx && sy === ty - 1)
        return { sDir: 's', tDir: 'e' };
    if (sx === tx - 1 && sy > ty)
        return { sDir: 'n', tDir: 's' };
    if (sx === tx - 1 && sy < ty)
        return { sDir: 's', tDir: 'n' };
    if (sx === tx + 1 && sy > ty)
        return { sDir: 'n', tDir: 's' };
    if (sx === tx + 1 && sy < ty)
        return { sDir: 's', tDir: 'n' };
    if (sx < tx - 1 && sy > ty + 1)
        return { sDir: 'n', tDir: 's' };
    if (sx < tx - 1 && sy < ty - 1)
        return { sDir: 's', tDir: 'n' };
    if (sx > tx + 1 && sy > ty + 1)
        return { sDir: 'n', tDir: 's' };
    // if (sx > tx + 1 && sy < ty - 1)
    return { sDir: 's', tDir: 'n' };
}
function adjust(conn, faceCount) {
    const { sDir, tDir } = connDirection(conn);
    const sourceid = `${identity(conn.source.ied)}`;
    const targetid = `${identity(conn.target.ied)}`;
    let sI = 1;
    let sT = 1;
    if (faceCount[sourceid] && faceCount[sourceid][sDir]) {
        sI = faceCount[sourceid][sDir].index;
        // eslint-disable-next-line no-param-reassign
        faceCount[sourceid][sDir].index += 1;
        sT = faceCount[sourceid][sDir].total;
    }
    let tI = 1;
    let tT = 1;
    if (faceCount[targetid] && faceCount[targetid][tDir]) {
        tI = faceCount[targetid][tDir].index;
        // eslint-disable-next-line no-param-reassign
        faceCount[targetid][tDir].index += 1;
        tT = faceCount[targetid][tDir].total;
    }
    const sAdj = (2 * sI - 1) / (sT * 2);
    const tAdj = (2 * tI - 1) / (tT * 2);
    return { sAdj, tAdj };
}
function arrow(conn, tx, ty) {
    const { tDir } = connDirection(conn);
    if (tDir === 'n')
        return `M${tx},${ty}L${tx - 0.08},${ty - 0.16}L${tx + 0.08},${ty - 0.16}Z`;
    if (tDir === 's')
        return `M${tx},${ty}L${tx - 0.08},${ty + 0.16}L${tx + 0.08},${ty + 0.16}Z`;
    if (tDir === 'e')
        return `M${tx},${ty}L${tx + 0.16},${ty + 0.08}L${tx + 0.16},${ty - 0.08}Z`;
    return `M${tx},${ty}L${tx - 0.16},${ty + 0.08}L${tx - 0.16},${ty - 0.08}Z`;
}
function svgPath(conn, faceCount) {
    let r = 0.15;
    const { sx, sy, tx, ty } = connDimensions(conn);
    const { sAdj, tAdj } = adjust(conn, faceCount);
    if (sx !== tx && sy === ty) {
        if (sx > tx)
            return [
                `M${sx + sAdj},${sy}L${sx + sAdj},${sy - 0.5 + r}A${r},${r} 0 0 0 ${sx + sAdj - r},${sy - 0.5}L${tx + tAdj + r},${ty - 0.5}A${r},${r} 0 0 0 ${tx + tAdj},${ty - 0.5 + r}L${tx + tAdj},${ty}`,
                arrow(conn, tx + tAdj, ty),
            ];
        return [
            `M${sx + sAdj},${sy}L${sx + sAdj},${sy - 0.5 + r}A${r},${r} 0 0 1 ${sx + sAdj + r},${sy - 0.5}L${tx + tAdj - r},${ty - 0.5}A${r},${r} 0 0 1 ${tx + tAdj},${ty - 0.5 + r}L${tx + tAdj},${ty}`,
            arrow(conn, tx + tAdj, ty),
        ];
    }
    if (sx === tx && sy > ty + 1) {
        if (sAdj === tAdj)
            return [
                `M${sx + sAdj},${sy}L${tx + tAdj},${ty + 1}`,
                arrow(conn, tx + tAdj, ty + 1),
            ];
        if (Math.abs(sAdj - tAdj) <= r * 2)
            r = Math.abs(sAdj - tAdj) / 2;
        if (sAdj < tAdj)
            return [
                `M${sx + sAdj},${sy}L${sx + sAdj},${sy - (sy - ty - 1) / 2 + r}A${r},${r} 0 0 1 ${sx + sAdj + r},${sy - (sy - ty - 1) / 2}L${tx + tAdj - r},${sy - (sy - ty - 1) / 2}A${r},${r} 0 0 0 ${tx + tAdj},${sy - (sy - ty - 1) / 2 - r}L${tx + tAdj},${ty + 1}`,
                arrow(conn, tx + tAdj, ty + 1),
            ];
        return [
            `M${sx + sAdj},${sy}L${sx + sAdj},${sy - (sy - ty - 1) / 2 + r}A${r},${r} 0 0 0 ${sx + sAdj - r},${sy - (sy - ty - 1) / 2}L${tx + tAdj + r},${sy - (sy - ty - 1) / 2}A${r},${r} 0 0 1 ${tx + tAdj},${sy - (sy - ty - 1) / 2 - r}L${tx + tAdj},${ty + 1}`,
            arrow(conn, tx + tAdj, ty + 1),
        ];
    }
    if (sx === tx && sy < ty - 1) {
        if (sAdj === tAdj)
            return [
                `M${sx + sAdj},${sy + 1}L${tx + tAdj},${ty}`,
                arrow(conn, tx + tAdj, ty),
            ];
        if (Math.abs(sAdj - tAdj) <= r * 2)
            r = Math.abs(sAdj - tAdj) / 2;
        if (sAdj < tAdj)
            return [
                `M${sx + sAdj},${sy + 1}L${sx + sAdj},${sy - (sy - ty - 1) / 2 - r}A${r},${r} 0 0 0 ${sx + sAdj + r},${sy - (sy - ty - 1) / 2}L${tx + tAdj - r},${sy - (sy - ty - 1) / 2}A${r},${r} 0 0 1 ${tx + tAdj},${sy - (sy - ty - 1) / 2 + r}L${tx + tAdj},${ty}`,
                arrow(conn, tx + tAdj, ty),
            ];
        return [
            `M${sx + sAdj},${sy + 1}L${sx + sAdj},${sy - (sy - ty - 1) / 2 - r}A${r},${r} 0 0 1 ${sx + sAdj - r},${sy - (sy - ty - 1) / 2}L${tx + tAdj + r},${sy - (sy - ty - 1) / 2}A${r},${r} 0 0 0 ${tx + tAdj},${sy - (sy - ty - 1) / 2 + r}L${tx + tAdj},${ty}`,
            arrow(conn, tx + tAdj, ty),
        ];
    }
    if (sx === tx && sy === ty - 1)
        return [
            `M${sx},${sy + sAdj}L${sx - 0.5 + r},${sy + sAdj}A${r},${r} 0 0 0 ${sx - 0.5},${sy + sAdj + r}L${tx - 0.5},${ty + tAdj - r}A${r},${r} 0 0 0 ${tx - 0.5 + r},${ty + tAdj}L${tx},${ty + tAdj}`,
            arrow(conn, tx, ty + tAdj),
        ];
    if (sx === tx && sy === ty + 1)
        return [
            `M${sx},${sy + sAdj}L${sx - 0.5 + r},${sy + sAdj}A${r},${r} 0 0 1 ${sx - 0.5},${sy + sAdj - r}L${tx - 0.5},${ty + tAdj + r}A${r},${r} 0 0 1 ${sx - 0.5 + r},${ty + tAdj}L${tx},${ty + tAdj}`,
            arrow(conn, tx, ty + tAdj),
        ];
    if (sx < tx && sy === ty + 1)
        return [
            `M${sx + sAdj},${sy}L${sx + sAdj},${sy - (1 - tAdj) + r}A${r},${r} 0 0 1 ${sx + sAdj + r},${ty + tAdj}L${tx},${ty + tAdj}`,
            arrow(conn, tx, ty + tAdj),
        ];
    if (sx > tx && sy === ty + 1)
        return [
            `M${sx + sAdj},${sy}L${sx + sAdj},${sy - (1 - tAdj) + r}A${r},${r} 0 0 0 ${sx + sAdj - r},${ty + tAdj}L${tx + 1},${ty + tAdj}`,
            arrow(conn, tx + 1, ty + tAdj),
        ];
    if (sx < tx && sy === ty - 1)
        return [
            `M${sx + sAdj},${sy + 1}L${sx + sAdj},${ty + tAdj - r}A${r},${r} 0 0 0 ${sx + sAdj + r},${ty + tAdj}L${tx},${ty + tAdj}`,
            arrow(conn, tx, ty + tAdj),
        ];
    if (sx > tx && sy === ty - 1)
        return [
            `M${sx + sAdj},${sy + 1}L${sx + sAdj},${ty + tAdj - r}A${r},${r} 0 0 1 ${sx + sAdj - r},${ty + tAdj}L${tx + 1},${ty + tAdj}`,
            arrow(conn, tx + 1, ty + tAdj),
        ];
    if (sx === tx - 1 && sy > ty)
        return [
            `M${sx + sAdj},${sy}L${sx + sAdj},${sy - (sy - ty - 1) / 2 + r}A${r},${r} 0 0 1 ${sx + sAdj + r},${sy - (sy - ty - 1) / 2}L${tx + tAdj - r},${sy - (sy - ty - 1) / 2}A${r},${r} 0 0 0 ${tx + tAdj},${sy - (sy - ty - 1) / 2 - r}L${tx + tAdj},${ty + 1}`,
            arrow(conn, tx + tAdj, ty + 1),
        ];
    if (sx === tx - 1 && sy < ty)
        return [
            `M${sx + sAdj},${sy + 1}L${sx + sAdj},${sy - (sy - ty - 1) / 2 - r}A${r},${r} 0 0 0 ${sx + sAdj + r},${sy - (sy - ty - 1) / 2}L${tx + tAdj - r},${sy - (sy - ty - 1) / 2}A${r},${r} 0 0 1 ${tx + tAdj},${sy - (sy - ty - 1) / 2 + r}L${tx + tAdj},${ty}`,
            arrow(conn, tx + tAdj, ty),
        ];
    if (sx === tx + 1 && sy > ty)
        return [
            `M${sx + sAdj},${sy}L${sx + sAdj},${sy - (sy - ty - 1) / 2 + r}A${r},${r} 0 0 0 ${sx + sAdj - r},${sy - (sy - ty - 1) / 2}L
      ${tx + tAdj + r},${sy - (sy - ty - 1) / 2}A${r},${r} 0 0 1 ${tx + tAdj},${sy - (sy - ty - 1) / 2 - r}L${tx + tAdj},${ty + 1}`,
            arrow(conn, tx + tAdj, ty + 1),
        ];
    if (sx === tx + 1 && sy < ty)
        return [
            `M${sx + sAdj},${sy + 1.0}L${sx + sAdj},${sy - (sy - ty - 1) / 2 - r}A${r},${r} 0 0 1 ${sx + sAdj - r},${sy - (sy - ty - 1) / 2}L${tx + tAdj + r},${sy - (sy - ty - 1) / 2}A${r},${r} 0 0 0 ${tx + tAdj},${sy - (sy - ty - 1) / 2 + r}L${tx + tAdj},${ty}`,
            arrow(conn, tx + tAdj, ty),
        ];
    if (sx < tx - 1 && sy > ty + 1)
        return [
            `M
      ${sx + sAdj},${sy}L
      ${sx + sAdj},${sy - (sy - ty - 1) / 2 + r}A${r},${r} 0 0 1 ${sx + sAdj + r},${sy - (sy - ty - 1) / 2}L
      ${tx + tAdj - r},${sy - (sy - ty - 1) / 2}A${r},${r} 0 0 0 ${tx + tAdj},${sy - (sy - ty - 1) / 2 - r}L
      ${tx + tAdj},${ty + 1}`,
            arrow(conn, tx + tAdj, ty + 1),
        ];
    if (sx < tx - 1 && sy < ty - 1)
        return [
            `M${sx + sAdj},${sy + 1}L${sx + sAdj},${sy - (sy - ty - 1) / 2 - r}A${r},${r} 0 0 0 ${sx + sAdj + r},${sy - (sy - ty - 1) / 2}L${tx + tAdj - r},${sy - (sy - ty - 1) / 2}A${r},${r} 0 0 1 ${tx + tAdj},${sy - (sy - ty - 1) / 2 + r}L${tx + tAdj},${ty}`,
            arrow(conn, tx + tAdj, ty),
        ];
    if (sx > tx + 1 && sy > ty + 1)
        return [
            `M${sx + sAdj},${sy}L${sx + sAdj},${sy - (sy - ty - 1) / 2 + r}A${r},${r} 0 0 0 ${sx + sAdj - r},${sy - (sy - ty - 1) / 2}L${tx + tAdj + r},${sy - (sy - ty - 1) / 2}A${r},${r} 0 0 1 ${tx + tAdj},${sy - (sy - ty - 1) / 2 - r}L${tx + tAdj},${ty + 1}`,
            arrow(conn, tx + tAdj, ty + 1),
        ];
    // if (sx > tx + 1 && sy < ty - 1)
    return [
        `M${sx + sAdj},${sy + 1}L${sx + sAdj},${sy - (sy - ty - 1) / 2 - r}A${r},${r} 0 0 1 ${sx + sAdj - r},${sy - (sy - ty - 1) / 2}L${tx + tAdj + r},${sy - (sy - ty - 1) / 2}A${r},${r} 0 0 0 ${tx + tAdj},${sy - (sy - ty - 1) / 2 + r}L${tx + tAdj},${ty}`,
        arrow(conn, tx + tAdj, ty),
    ];
}
function svgConnectionGenerator(substation, conns) {
    const { dim: [w, h], } = attributes(substation);
    const faceCount = {};
    conns.forEach(conn => {
        const { sDir, tDir } = connDirection(conn);
        const sourceid = `${identity(conn.source.ied)}`;
        const targetid = `${identity(conn.target.ied)}`;
        if (!faceCount[sourceid])
            faceCount[sourceid] = {
                n: { index: 1, total: 0 },
                s: { index: 1, total: 0 },
                e: { index: 1, total: 0 },
                w: { index: 1, total: 0 },
            };
        faceCount[sourceid][sDir].total += 1;
        if (!faceCount[targetid])
            faceCount[targetid] = {
                n: { index: 1, total: 0 },
                s: { index: 1, total: 0 },
                e: { index: 1, total: 0 },
                w: { index: 1, total: 0 },
            };
        faceCount[targetid][tDir].total += 1;
    });
    return (conn) => {
        const [linkPath, arrowPath] = svgPath(conn, faceCount);
        const event = new CustomEvent('select-connection', {
            bubbles: true,
            composed: true,
            detail: conn,
        });
        const color = serviceColoring[conn.source.controlBlock.tagName];
        return b$1 `<svg class="connection ${conn.source.controlBlock.tagName}"
          width="${w}"
          height="${h}">
          <path d="${linkPath}" stroke="${color}" stroke-width="0.08" @click="${(evt) => { var _a; return (_a = evt.target) === null || _a === void 0 ? void 0 : _a.dispatchEvent(event); }}"><title>${tooltip(conn)}</title></path>
          <path d="${arrowPath}" stroke="${color}" fill="${color}" stroke-width="0.08"/>
          </svg>`;
    };
}

class CommunicationSclEditor extends ScopedElementsMixin(i$3) {
    get ieds() {
        return Array.from(this.substation.ownerDocument.querySelectorAll(':root > IED')).map(ied => ({
            element: ied,
            name: ied.getAttribute('name'),
        }));
    }
    get idle() {
        return !(this.placing || this.placingLabel);
    }
    svgCoordinates(clientX, clientY) {
        const p = new DOMPoint(clientX, clientY);
        const { x, y } = p.matrixTransform(this.sld.getScreenCTM().inverse());
        return [x, y].map(coord => Math.max(0, coord));
    }
    reset() {
        this.placing = undefined;
        this.placingLabel = undefined;
    }
    placeLabel(element, x, y) {
        this.dispatchEvent(newEditEvent({
            element,
            attributes: {
                [`${sldPrefix}:lx`]: { namespaceURI: sldNs, value: x.toString() },
                [`${sldPrefix}:ly`]: { namespaceURI: sldNs, value: y.toString() },
            },
        }));
        this.reset();
    }
    startPlacingLabel(element, offset = [0, 0]) {
        this.reset();
        this.placingLabel = element;
        this.placingOffset = offset;
    }
    placeElement(element, x, y) {
        const { pos: [oldX, oldY], label: [oldLX, oldLY], } = attributes(element);
        const dx = x - oldX;
        const dy = y - oldY;
        const lx = oldLX;
        const ly = oldLY;
        const update = {
            element,
            attributes: {
                [`${sldPrefix}:x`]: { namespaceURI: sldNs, value: x.toString() },
                [`${sldPrefix}:y`]: { namespaceURI: sldNs, value: y.toString() },
                [`${sldPrefix}:lx`]: {
                    namespaceURI: sldNs,
                    value: (lx + dx).toString(),
                },
                [`${sldPrefix}:ly`]: {
                    namespaceURI: sldNs,
                    value: (ly + dy).toString(),
                },
            },
        };
        this.dispatchEvent(newEditEvent(update));
        this.reset();
    }
    startPlacing(element, offset = [0, 0]) {
        this.reset();
        this.placing = element;
        this.placingOffset = offset;
    }
    onWheelZoom(evt) {
        if (evt.ctrlKey) {
            evt.preventDefault();
            if ((evt.deltaY < 0 && this.gridSize >= 10) ||
                (evt.deltaY > 0 && this.gridSize <= 200)) {
                const d = evt.deltaY < 0 ? -1 : 1;
                const f = (this.gridSize + d) / this.gridSize;
                const xs = this.container.scrollLeft;
                const xa = evt.offsetX;
                const dx = (f - 1) * (xs + xa);
                const ys = this.container.scrollTop;
                const ya = evt.offsetY - 57;
                const dy = (f - 1) * (ys + ya);
                this.container.scrollBy(dx, dy);
                this.gridSize += d;
            }
        }
    }
    clearFilter() {
        this.sourceIEDFilter = '';
        this.targetIEDFilter = '';
        this.cbNameFilter = '';
    }
    activeFilter() {
        return (this.sourceIEDFilter !== '' ||
            this.targetIEDFilter !== '' ||
            this.cbNameFilter !== '');
    }
    filterCbName(conn) {
        if (this.cbNameFilter === '')
            return false;
        const terms = this.cbNameFilter.split(' ');
        const iedName = conn.source.controlBlock.getAttribute('name');
        return !terms.some(term => iedName.includes(term));
    }
    filterTargetIED(conn) {
        if (this.targetIEDFilter === '')
            return false;
        const terms = this.targetIEDFilter.split(' ');
        const iedName = conn.target.ied.getAttribute('name');
        return !terms.some(term => iedName.includes(term));
    }
    filterSourceIED(conn) {
        if (this.sourceIEDFilter === '')
            return false;
        const terms = this.sourceIEDFilter.split(' ');
        const iedName = conn.source.ied.getAttribute('name');
        return !terms.some(term => iedName.includes(term));
    }
    filterConnections(conn) {
        const service = (conn.source.controlBlock.tagName === 'ReportControl' &&
            this.filterReport) ||
            (conn.source.controlBlock.tagName === 'GSEControl' && this.filterGOOSE) ||
            (conn.source.controlBlock.tagName === 'SampledValueControl' &&
                this.filterSMV);
        const ied = !!this.selectedIed &&
            conn.source.ied !== this.selectedIed &&
            conn.target.ied !== this.selectedIed;
        const source = this.filterSourceIED(conn);
        const target = this.filterTargetIED(conn);
        const cbName = this.filterCbName(conn);
        const receive = this.filterRcv && conn.source.ied === this.selectedIed;
        const send = this.filterSend && conn.target.ied === this.selectedIed;
        return !(service || ied || source || target || cbName || receive || send);
    }
    resetIedSelection() {
        this.selectedIed = undefined;
        this.linkedEquipments = [];
    }
    selectIED(ied) {
        if (this.selectedIed !== ied.element) {
            this.selectedIed = ied.element;
            this.linkedEquipments = Array.from(this.selectedIed.ownerDocument.querySelectorAll(`ConductingEquipment LNode[iedName="${this.selectedIed.getAttribute('name')}"]`)).map(lNode => lNode.closest('ConductingEquipment'));
        }
        else
            this.resetIedSelection();
    }
    constructor() {
        super();
        this.connections = [];
        this.filterReport = false;
        this.filterGOOSE = false;
        this.filterSMV = false;
        this.filterRcv = false;
        this.filterSend = false;
        this.sourceIEDFilter = '';
        this.targetIEDFilter = '';
        this.cbNameFilter = '';
        this.showFilterBox = false;
        this.editMode = false;
        this.showLabel = true;
        this.placingOffset = [0, 0];
        this.mouseX = 0;
        this.mouseY = 0;
        this.mouseX2 = 0;
        this.mouseY2 = 0;
        this.linkedEquipments = [];
        this.addEventListener('wheel', this.onWheelZoom);
    }
    renderedLabelPosition(element) {
        let { label: [x, y], } = attributes(element);
        const [offsetX, offsetY] = this.placingOffset;
        if (this.placing &&
            element.closest(this.placing.tagName) === this.placing) {
            const { pos: [parentX, parentY], } = attributes(this.placing);
            x += this.mouseX - parentX - offsetX;
            y += this.mouseY - parentY - offsetY;
        }
        if (this.placingLabel === element) {
            x = this.mouseX2 - 0.5 - offsetX;
            y = this.mouseY2 + 0.5 - offsetY;
        }
        return [x, y];
    }
    renderLabel(element) {
        const deg = 0;
        const text = element.getAttribute('name');
        const weight = 400;
        const color = 'black';
        const [x, y] = this.renderedLabelPosition(element);
        const fontSize = 0.45;
        let events = 'none';
        let handleClick = E;
        if (this.idle && this.editMode) {
            events = 'all';
            const offset = [this.mouseX2 - x - 0.5, this.mouseY2 - y + 0.5];
            handleClick = () => this.startPlacingLabel(element, offset);
        }
        const id = identity(element);
        const classes = e({
            label: true,
            ied: true,
        });
        return b$1 `<g class="${classes}" id="label:${id}"
                 transform="rotate(${deg} ${x + 0.5} ${y - 0.5})">
        <text x="${x + 0.1}" y="${y - 0.5}"
          alignment-baseline="central"
          @click=${handleClick}
          pointer-events="${events}" fill="${color}" font-weight="${weight}"
          font-size="${fontSize}px" font-family="Roboto, sans-serif"
          style="cursor: default;">
          ${text}
        </text>
      </g>`;
    }
    renderedPosition(element) {
        let { pos: [x, y], } = attributes(element);
        if (this.placing &&
            element.closest(this.placing.tagName) === this.placing) {
            const { pos: [parentX, parentY], } = attributes(this.placing);
            const [offsetX, offsetY] = this.placingOffset;
            x += this.mouseX - parentX - offsetX;
            y += this.mouseY - parentY - offsetY;
        }
        return [x, y];
    }
    renderIED(ied) {
        const [x, y] = this.renderedPosition(ied.element);
        const symbol = 'IED';
        const icon = b$1 `<use href="#${symbol}" xlink:href="#${symbol}"
                pointer-events="none" />`;
        let handleClick = E;
        if (this.idle && this.editMode)
            handleClick = () => this.startPlacing(ied.element);
        else if (!this.editMode)
            handleClick = () => {
                this.selectIED(ied);
            };
        return b$1 `<svg
    xmlns="${svgNs}"
    xmlns:xlink="${xlinkNs}"
    id="${identity(ied.element)}"
    x="${x}"
    y="${y}"
    width="${1 * this.gridSize}"
    height="${1 * this.gridSize}"
    stroke-width="0.06"
    fill="none">
    <g class="ied"
      id="#${ied.name}"
      transform="translate(${0} ${0})">
        <title>${ied.name}</title>
        ${icon}
        <rect width="1" height="1" fill="none" pointer-events="all"
        @click=${handleClick}
        />
      </g></svg>`;
    }
    // eslint-disable-next-line class-methods-use-this
    renderFilterBox() {
        if (!this.showFilterBox)
            return x ``;
        return x `<div class="filter box" style="">
      <h3 class="filter title">
        Filter connections
        <nav style="float: right;">
          <md-icon-button
            @click="${() => {
            this.showFilterBox = false;
        }}"
          >
            <md-icon>close</md-icon>
          </md-icon-button>
        </nav>
      </h3>
      <md-outlined-textfield
        label="Source IED name"
        value="${this.sourceIEDFilter}"
        @input="${(evt) => {
            this.sourceIEDFilter = evt.target.value;
        }}"
      ></md-outlined-textfield>
      <md-outlined-textfield
        label="Target IED name"
        value="${this.targetIEDFilter}"
        @input="${(evt) => {
            this.targetIEDFilter = evt.target.value;
        }}"
      ></md-outlined-textfield>
      <md-outlined-textfield
        label="Control Block name"
        value="${this.cbNameFilter}"
        @input="${(evt) => {
            this.cbNameFilter = evt.target.value;
        }}"
      ></md-outlined-textfield>
    </div>`;
    }
    renderFilterFab() {
        return x `<nav class="filter button">
      ${this.activeFilter()
            ? x `<md-fab
            class="filter refresh"
            style="padding-right: 10px;"
            label="Clear"
            @click="${() => {
                this.clearFilter();
            }}"
            ><md-icon slot="icon">refresh</md-icon>
          </md-fab>`
            : E}
      <md-fab
        @click="${() => {
            this.showFilterBox = true;
        }}"
      >
        <md-icon slot="icon">filter_alt</md-icon>
      </md-fab>
    </nav>`;
    }
    renderService(controlBlock) {
        return [
            x `<svg viewBox="0 0 25 25" width="25" height="25">
        <path
          d="M0,12.5L25,12.5"
          stroke-width="3"
          stroke="${serviceColoring[controlBlock]}"
        />
      </svg>`,
            x `<div class="serviceFilter">
        <input
          type="checkbox"
          id="serviceFilter"
          name="serviceFilter"
          checked
          @click="${(evt) => {
                if (controlBlock === 'ReportControl')
                    this.filterReport = !evt.target.checked;
                if (controlBlock === 'GSEControl')
                    this.filterGOOSE = !evt.target.checked;
                if (controlBlock === 'SampledValueControl')
                    this.filterSMV = !evt.target.checked;
            }}"
        />
        <label for="serviceFilter">${controlBlock}</label>
      </div>`,
        ];
    }
    renderInfoBox() {
        const controlBlocks = [
            'ReportControl',
            'GSEControl',
            'SampledValueControl',
        ];
        return x `<div class="info-box">
      ${controlBlocks.map(controlBlock => this.renderService(controlBlock))}
      ${this.selectedIed && !this.editMode
            ? x `<svg viewBox="0 0 25 25" width="25" height="25">
              <path d="M0,12.5L22,12.5" stroke-width="3" stroke="black" />
              <path d="M25,12.5L12.5,18L12.5,7Z" stroke-width="1" />
            </svg>
            <input
              type="checkbox"
              checked
              @click="${(evt) => {
                this.filterRcv = !evt.target.checked;
            }}"
            />
            <svg viewBox="0 0 25 25" width="25" height="25">
              <path d="M3,12.5L25,12.5" stroke-width="3" stroke="black" />
              <path d="M0,12.5L12.5,18L12.5,7Z" stroke-width="1" />
            </svg>
            <input
              type="checkbox"
              checked
              @click="${(evt) => {
                this.filterSend = !evt.target.checked;
            }}"
            />`
            : E}
      <md-icon-button
        ?selected=${this.editMode}
        @click="${(evt) => {
            this.editMode = !evt.target.closest('md-icon-button').selected;
            this.resetIedSelection();
        }}"
      >
        <md-icon>edit_off</md-icon>
        <md-icon slot="selected">edit</md-icon>
      </md-icon-button>
      <md-icon-button
        class="zoom"
        title="Zoom in"
        @click="${() => {
            this.gridSize += 4;
        }}"
      >
        <md-icon>zoom_in</md-icon>
      </md-icon-button>
      <md-icon-button
        class="zoom"
        icon="zoom_out"
        title="Zoom out"
        @click="${() => {
            this.gridSize -= 4;
        }}"
      >
        <md-icon>zoom_out</md-icon>
      </md-icon-button>
      <md-icon-button
        ?selected=${this.showLabel}
        @click="${(evt) => {
            this.showLabel = !evt.target.closest('md-icon-button').selected;
        }}"
      >
        <md-icon>font_download_off</md-icon>
        <md-icon slot="selected">font_download</md-icon>
      </md-icon-button>
    </div>`;
    }
    render() {
        var _a;
        const { dim: [w, h], } = attributes(this.substation);
        const placingLabelTarget = this.placingLabel
            ? b$1 `<rect width="100%" height="100%" fill="url(#halfgrid)"
      @click=${() => {
                const element = this.placingLabel;
                const [x, y] = this.renderedLabelPosition(element);
                this.placeLabel(element, x, y);
            }} />`
            : E;
        const iedPlacingTarget = ((_a = this.placing) === null || _a === void 0 ? void 0 : _a.tagName) === 'IED'
            ? b$1 `<rect width="100%" height="100%" fill="url(#grid)" 
        @click=${() => {
                const element = this.placing;
                const [x, y] = this.renderedPosition(element);
                this.placeElement(element, x, y);
            }} />`
            : E;
        const filteredConnections = this.connections.filter(conn => this.filterConnections(conn));
        const svgConnection = svgConnectionGenerator(this.substation, filteredConnections);
        return x ` ${this.renderInfoBox()}
      <div id="container">
        <style>
          ${this.showLabel
            ? E
            : `.label:not(.ied):not(.linked) {display: none} `}
        </style>
        <svg
          xmlns="${svgNs}"
          xmlns:xlink="${xlinkNs}"
          viewBox="0 0 ${w} ${h}"
          width="${w * this.gridSize}"
          height="${h * this.gridSize}"
          id="sldContainer"
          stroke-width="0.06"
          fill="none"
          @mousemove=${(e) => {
            const [x, y] = this.svgCoordinates(e.clientX, e.clientY);
            this.mouseX = Math.floor(x);
            this.mouseY = Math.floor(y);
            this.mouseX2 = Math.round(x * 2) / 2;
            this.mouseY2 = Math.round(y * 2) / 2;
        }}
        >
          ${sldSvg(this.substation, {
            gridSize: this.gridSize,
            linkedEquipments: this.linkedEquipments,
        })}
          ${this.ieds.map(ied => this.renderIED(ied))}
          ${this.ieds.map(ied => this.renderLabel(ied.element))}
          ${placingLabelTarget} ${iedPlacingTarget}
          ${filteredConnections.map(link => svgConnection(link))}
        </svg>
      </div>
      ${this.renderFilterFab()} ${this.renderFilterBox()}`;
    }
}
CommunicationSclEditor.scopedElements = {
    'md-fab': MdFab,
    'md-icon': MdIcon,
    'md-outlined-textfield': MdOutlinedTextField,
    'md-icon-button': MdIconButton,
};
CommunicationSclEditor.styles = i$5 `
    #container {
      width: 100%;
      height: 80vh;
      overflow: scroll;
      background-color: white;
    }

    g.equipment:not(.linked) {
      opacity: 0.2;
    }

    g.node {
      opacity: 0.2;
    }

    g.transformer {
      opacity: 0.2;
    }

    g.label:not(.ied):not(.linked) {
      opacity: 0.2;
    }

    svg.connection:hover > path {
      stroke: black;
      stroke-width: 0.12;
    }

    .info-box {
      display: flex;
      align-items: center;
    }

    .info-box > svg {
      padding-left: 15px;
    }

    .info-box > .serviceFilter > label {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
    }

    .filter.box > md-outlined-textfield {
      padding: 10px;
    }

    .filter.box {
      width: 250px;
      height: 280px;
      position: fixed;
      bottom: 5px;
      right: 5px;
      border: 2px solid var(--oscd-theme-base01);
      background-color: var(--oscd-theme-base3);
      border-radius: 5px;
    }

    .filter.title {
      color: var(--oscd-theme-base01);
      font-family: var(--oscd-theme-text-font, 'Roboto');
      font-weight: 300;
      overflow: clip visible;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin: 0px;
      line-height: 52px;
      padding-left: 0.3em;
    }

    .filter.button {
      position: fixed;
      bottom: 15px;
      right: 15px;
    }

    .linked > rect {
      fill: black;
      opacity: 0.1;
    }
  `;
__decorate([
    n$3({ attribute: false })
], CommunicationSclEditor.prototype, "substation", void 0);
__decorate([
    n$3({ type: Number })
], CommunicationSclEditor.prototype, "gridSize", void 0);
__decorate([
    n$3({ attribute: false })
], CommunicationSclEditor.prototype, "connections", void 0);
__decorate([
    r$1()
], CommunicationSclEditor.prototype, "ieds", null);
__decorate([
    r$1()
], CommunicationSclEditor.prototype, "filterReport", void 0);
__decorate([
    r$1()
], CommunicationSclEditor.prototype, "filterGOOSE", void 0);
__decorate([
    r$1()
], CommunicationSclEditor.prototype, "filterSMV", void 0);
__decorate([
    r$1()
], CommunicationSclEditor.prototype, "selectedIed", void 0);
__decorate([
    r$1()
], CommunicationSclEditor.prototype, "filterRcv", void 0);
__decorate([
    r$1()
], CommunicationSclEditor.prototype, "filterSend", void 0);
__decorate([
    r$1()
], CommunicationSclEditor.prototype, "sourceIEDFilter", void 0);
__decorate([
    r$1()
], CommunicationSclEditor.prototype, "targetIEDFilter", void 0);
__decorate([
    r$1()
], CommunicationSclEditor.prototype, "cbNameFilter", void 0);
__decorate([
    r$1()
], CommunicationSclEditor.prototype, "showFilterBox", void 0);
__decorate([
    r$1()
], CommunicationSclEditor.prototype, "editMode", void 0);
__decorate([
    r$1()
], CommunicationSclEditor.prototype, "showLabel", void 0);
__decorate([
    r$1()
], CommunicationSclEditor.prototype, "placing", void 0);
__decorate([
    r$1()
], CommunicationSclEditor.prototype, "placingLabel", void 0);
__decorate([
    r$1()
], CommunicationSclEditor.prototype, "placingOffset", void 0);
__decorate([
    r$1()
], CommunicationSclEditor.prototype, "mouseX", void 0);
__decorate([
    r$1()
], CommunicationSclEditor.prototype, "mouseY", void 0);
__decorate([
    r$1()
], CommunicationSclEditor.prototype, "mouseX2", void 0);
__decorate([
    r$1()
], CommunicationSclEditor.prototype, "mouseY2", void 0);
__decorate([
    r$1()
], CommunicationSclEditor.prototype, "linkedEquipments", void 0);
__decorate([
    r$1()
], CommunicationSclEditor.prototype, "idle", null);
__decorate([
    e$3('svg#sldContainer')
], CommunicationSclEditor.prototype, "sld", void 0);
__decorate([
    e$3('#container')
], CommunicationSclEditor.prototype, "container", void 0);

function combineSelectors(...selectors) {
    return selectors
        .reduce((a, b) => a.flatMap(d => b.map(e => [d, e].flat())), [[]])
        .map(str => str.join(''))
        .join(',');
}
function clientLnConnections(doc) {
    const controlBlockSelector = combineSelectors([':root > IED > AccessPoint > Server > LDevice'], ['>'], ['LN0', 'LN'], ['>'], ['ReportControl']);
    return Array.from(doc.querySelectorAll(controlBlockSelector)).flatMap(sourceCb => {
        const sourceIed = sourceCb.closest('IED');
        const sortedClientLns = {};
        sourceCb
            .querySelectorAll(':scope > RptEnabled > ClientLN')
            .forEach(clientLn => {
            const targetIed = doc.querySelector(`:root > IED[name="${clientLn.getAttribute('iedName')}"`);
            const targetIedName = targetIed === null || targetIed === void 0 ? void 0 : targetIed.getAttribute('name');
            if (!targetIed || !targetIedName)
                return;
            if (sortedClientLns[targetIedName])
                sortedClientLns[targetIedName].inputs.push(clientLn);
            else
                sortedClientLns[targetIedName] = {
                    ied: targetIed,
                    inputs: [clientLn],
                };
        });
        return Object.values(sortedClientLns).map(target => {
            const id = `${identity(sourceCb)}${identity(target.ied)}`;
            return {
                id,
                source: { ied: sourceIed, controlBlock: sourceCb },
                target,
            };
        });
    });
}
function parseExtRefs(doc) {
    const controlBlockSelector = combineSelectors([':root > IED > AccessPoint > Server > LDevice'], ['>'], ['LN0'], ['>'], ['GSEControl', 'SampledValueControl']);
    return Array.from(doc.querySelectorAll(controlBlockSelector)).flatMap(controlBlock => {
        const sourceIed = controlBlock.closest('IED');
        const iedName = sourceIed.getAttribute('name');
        const ldInst = controlBlock.closest('LDevice').getAttribute('inst');
        const anyLn = controlBlock.closest('LN,LN0');
        const prefix = anyLn.getAttribute('prefix');
        const lnClass = anyLn.getAttribute('lnClass');
        const lnInst = anyLn.getAttribute('inst');
        const cbName = controlBlock.getAttribute('name');
        const extRefSelector = combineSelectors([':root > IED > AccessPoint > Server > LDevice'], ['>'], ['LN0', 'LN'], ['>'], [
            `Inputs > ExtRef[iedName="${iedName}"][srcLNClass="${lnClass}"][srcCBName="${cbName}"]`,
        ]);
        const targetMap = {};
        Array.from(doc.querySelectorAll(extRefSelector))
            .filter(extRef => {
            const [extRefLdInst, srcLDInst, srcPrefix, srcLNInst] = [
                'ldInst',
                'srcLDInst',
                'srcPrefix',
                'srcLNInst',
            ].map(attr => extRef.getAttribute(attr));
            return ((srcLDInst ? srcLDInst === ldInst : extRefLdInst === srcLDInst) &&
                (srcPrefix !== null && srcPrefix !== void 0 ? srcPrefix : '') === (prefix !== null && prefix !== void 0 ? prefix : '') &&
                (srcLNInst !== null && srcLNInst !== void 0 ? srcLNInst : '') === (lnInst !== null && lnInst !== void 0 ? lnInst : ''));
        })
            .forEach(extRef => {
            const target = extRef.closest('IED');
            const targetName = target.getAttribute('name');
            if (targetName && targetMap[targetName])
                targetMap[targetName].inputs.push(extRef);
            else if (targetName)
                targetMap[targetName] = { ied: target, inputs: [extRef] };
        });
        return Object.values(targetMap).map(target => {
            const id = `${identity(controlBlock)}${target.ied}`;
            return { id, source: { ied: sourceIed, controlBlock }, target };
        });
    });
}
function connectionHeading(conn) {
    const sourceIedName = conn.source.ied.getAttribute('name');
    const cbName = conn.source.controlBlock.getAttribute('name');
    const targetIedName = conn.target.ied.getAttribute('name');
    return `${sourceIedName}:${cbName} ->${targetIedName}`;
}
class SlcCommunicationEditor extends ScopedElementsMixin(i$3) {
    constructor() {
        super(...arguments);
        this.gridSize = 32;
        this.editCount = -1;
    }
    get substation() {
        var _a, _b;
        return (_b = (_a = this.doc) === null || _a === void 0 ? void 0 : _a.querySelector(':root > Substation')) !== null && _b !== void 0 ? _b : null;
    }
    removeInputs(inputs) {
        const removeClientLNs = inputs
            .filter(input => input.tagName === 'ClientLN')
            .map(clientLn => ({ node: clientLn }));
        const removeExtRefs = unsubscribe(inputs.filter(input => input.tagName === 'ExtRef'));
        const edits = [...removeClientLNs, ...removeExtRefs];
        if (edits.length > 0)
            this.dispatchEvent(newEditEvent(edits));
    }
    removeAllInputs() {
        var _a, _b;
        const inputs = (_b = (_a = this.selectedConnection) === null || _a === void 0 ? void 0 : _a.target.inputs) !== null && _b !== void 0 ? _b : [];
        this.removeInputs(inputs);
        this.requestUpdate();
    }
    renderRemoveDialog() {
        const heading = this.selectedConnection
            ? connectionHeading(this.selectedConnection)
            : 'No connection selected';
        const items = this.selectedConnection
            ? this.selectedConnection.target.inputs.map(input => ({
                headline: inputReference(input),
                supportingText: inputSupportingText(input),
            }))
            : [];
        const content = x `<action-list
      style="min-width: min-content;"
      filterable
      .items=${items}
    ></action-list>`;
        return x `<md-dialog>
      <div slot="headline">${heading}</div>
      <form slot="content" id="form-id" method="dialog">${content}</form>
      <div slot="actions">
        <md-text-button
          style="--mdc-theme-primary: var(--oscd-error)"
          @click="${() => {
            this.removeSelection.close();
        }}"
          >discard</md-text-button
        >
        <md-text-button
          @click="${() => {
            this.removeSelection.close();
            this.removeAllInputs();
        }}"
        >
          remove all
        </md-text-button>
      </div>
    </md-dialog>`;
    }
    render() {
        if (!this.substation)
            return x `<main>No substation section</main>`;
        return x `<main>
      <communication-scl-editor
        .substation=${this.substation}
        .gridSize=${this.gridSize}
        .connections=${[
            ...clientLnConnections(this.substation.ownerDocument),
            ...parseExtRefs(this.substation.ownerDocument),
        ]}
        @select-connection="${(evt) => {
            this.selectedConnection = evt.detail;
            this.removeSelection.show();
        }}"
      ></communication-scl-editor>
      ${this.renderRemoveDialog()}
    </main>`;
    }
}
SlcCommunicationEditor.scopedElements = {
    'communication-scl-editor': CommunicationSclEditor,
    'md-dialog': MdDialog,
    'action-list': ActionList,
    'md-text-button': MdTextButton,
};
SlcCommunicationEditor.styles = i$5 `
    main {
      width: 100%;
      height: 100%;
    }

    md-dialog {
      --md-dialog-container-max-height: 100%;
      --md-dialog-container-max-width: 100%;
    }

    * {
      --md-sys-color-primary: var(--oscd-primary);
      --md-sys-color-secondary: var(--oscd-secondary);
      --md-sys-typescale-body-large-font: var(--oscd-theme-text-font);

      --md-sys-color-surface: var(--oscd-base3);
      --md-sys-color-on-surface: var(--oscd-base00);
      --md-sys-color-on-primary: var(--oscd-base2);
      --md-sys-color-on-surface-variant: var(--oscd-base00);
      --md-menu-container-color: var(--oscd-base3);
      font-family: var(--oscd-theme-text-font);
      --md-sys-color-surface-container-highest: var(--oscd-base2);
    }
  `;
__decorate([
    n$3({ attribute: false })
], SlcCommunicationEditor.prototype, "doc", void 0);
__decorate([
    n$3({ attribute: false })
], SlcCommunicationEditor.prototype, "substation", null);
__decorate([
    r$1()
], SlcCommunicationEditor.prototype, "gridSize", void 0);
__decorate([
    n$3({ type: Number })
], SlcCommunicationEditor.prototype, "editCount", void 0);
__decorate([
    r$1()
], SlcCommunicationEditor.prototype, "selectedConnection", void 0);
__decorate([
    e$3('md-dialog')
], SlcCommunicationEditor.prototype, "removeSelection", void 0);

export { SlcCommunicationEditor as default };
//# sourceMappingURL=scl-communication-editor.js.map
