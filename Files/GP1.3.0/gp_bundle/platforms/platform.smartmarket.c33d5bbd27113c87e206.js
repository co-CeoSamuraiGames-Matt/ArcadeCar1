(self.webpackChunkgame_score_sdk=self.webpackChunkgame_score_sdk||[]).push([[552],{5709:(t,e)=>{"use strict";e.Ko=void 0;e.Ko=function(){if("undefined"==typeof navigator)return"sberBox";switch(!0){case function(){if("undefined"==typeof navigator)return!1;var t=navigator.userAgent.toLowerCase();return t.includes("sberportal")||t.includes("stargate")}():return"sberPortal";case function(){if("undefined"==typeof navigator)return!1;var t=navigator.userAgent.toLowerCase();return t.includes("satellite")||t.includes("sberbox top")}():case"undefined"!=typeof navigator&&navigator.userAgent.toLowerCase().includes("sberbox"):case function(){if("undefined"==typeof navigator)return!1;var t=navigator.userAgent.toLowerCase();return t.includes("(tv; tv)")||t.includes("(tv; huawei)")||t.includes("(huawei-tv; huawei)")||t.includes("(huawei-tv; huawei tv)")}():return"sberBox";default:return"mobile"}}},4340:(t,e,i)=>{"use strict";i.d(e,{D:()=>n});const n=()=>Promise.resolve({success:!1,rating:0,error:""})},501:(t,e,i)=>{"use strict";i.d(e,{Z:()=>s});var n=i(4340),r=function(t,e,i,n){return new(i||(i=Promise))((function(r,s){function a(t){try{c(n.next(t))}catch(t){s(t)}}function o(t){try{c(n.throw(t))}catch(t){s(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(a,o)}c((n=n.apply(t,e||[])).next())}))};class s{constructor(){this.canAddShortcut=!1,this.canRequestReview=!1,this.isAlreadyReviewed=!1}addShortcut(){return r(this,void 0,void 0,(function*(){return!1}))}requestReview(){return(0,n.D)()}requestGameUrl(){return r(this,void 0,void 0,(function*(){}))}}},5572:(t,e,i)=>{"use strict";i.d(e,{VK:()=>n,yl:()=>r});const n={success:!0,payload:{}},r={success:!1,payload:{}}},2712:(t,e,i)=>{"use strict";i.d(e,{aD:()=>l,FU:()=>f,hc:()=>v});const n=(t,e)=>({type:t,getLink:e}),r=n("facebook",(t=>`//www.facebook.com/sharer/sharer.php?u=${t.url}`)),s=n("whatsapp",(t=>`//api.whatsapp.com/send?text=${t.text}%20${t.url}`)),a=n("telegram",(t=>`//t.me/share/url?url=${t.url}&text=${t.text}`)),o=n("vkontakte",(t=>`//vk.com/share.php?url=${t.url}&title=${t.text}&image=${t.image}`)),c=n("twitter",(t=>`//twitter.com/share?text=${t.text}&url=${t.url}`)),u=n("odnoklassniki",(t=>`//connect.ok.ru/offer?url=${t.url}&title=${t.text}&imageUrl=${t.image}`)),h=n("viber",(t=>`viber://forward?text=${t.text}%20${t.url}`)),d=n("moymir",(t=>`//connect.mail.ru/share?url=${t.url}&title=${t.text}&image_url=${t.image}`)),l=[s,a,o,u,h,d],f=[r,c,a,s,h],v=[r,c,a,s,h,o,u,d]},6390:(t,e,i)=>{"use strict";function n(){try{return window.top.location.href||location.href}catch(t){return location.href}}i.d(e,{T:()=>n})},5092:(t,e,i)=>{"use strict";i.d(e,{M:()=>n});const n=(t,e,i,n)=>{var r;const s=(window.innerWidth-i)/2,a=(window.innerHeight-n)/2,o=window.open(t,e,`scrollbars=yes,\n        width=${i},\n        height=${n},\n        top=${a},\n        left=${s}\n        `);return null===(r=o.focus)||void 0===r||r.call(o),o}},5122:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>T});var n,r,s,a,o=i(5709),c=i(6390),u=i(4917),h=i(6558),d=i(5092),l=i(8293),f=function(t,e,i,n){return new(i||(i=Promise))((function(r,s){function a(t){try{c(n.next(t))}catch(t){s(t)}}function o(t){try{c(n.throw(t))}catch(t){s(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(a,o)}c((n=n.apply(t,e||[])).next())}))},v=function(t,e,i,n,r){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!r)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!r:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?r.call(t,i):r?r.value=i:e.set(t,i),i},p=function(t,e,i,n){if("a"===i&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!n:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?n:"a"===i?n.call(t):n?n.value:e.get(t)};class y{constructor(t,e){var i,c;this.config=t,this.gp=e,this.deviceType=(0,o.Ko)(),this.isSupportsNativePayment=!1,this.isOnSberRu=!1,n.set(this,(0,l._)({timeout:15e3})),r.set(this,{userId:"",signature:""}),s.set(this,null),a.set(this,null),this.isSupportsNativePayment=Array.isArray(window.appInitialData)&&window.appInitialData.some((t=>"app_context"===(null==t?void 0:t.type))),window.addEventListener("message",(t=>{"https://sber.ru"===t.origin&&(this.isSupportsNativePayment=!1,this.isOnSberRu=!0)})),null===(c=null===(i=window.top)||void 0===i?void 0:i.postMessage)||void 0===c||c.call(i,JSON.stringify({type:"ready"}),"*")}get appUrl(){return(0,c.T)()}init(){return f(this,void 0,void 0,(function*(){const t=(0,l._)();return this.ready=t.ready,Promise.all([(0,u.Z)({src:"https://cdn-app.sberdevices.ru/shared-static/0.0.0/polyfills/cookie-ls-polyfill.min.js"}),(0,u.Z)({src:"https://unpkg.com/@salutejs/client@1.32.3/umd/assistant.production.min.js",check:t=>"assistant"in t})]).catch(h.kg.error).finally(t.done),t.ready.then((()=>{const{assistant:t,SberDevicesAdSDK:e}=window;this.assistant=t.createAssistant({getState:()=>{}}),this.assistant.on("data",(t=>{if("smart_app_data"!==t.type)return;const e=t.smart_app_data;switch(this.handleOnCheckPurchase(e),this.handleOnInvoiceCreated(e),this.handleOnGsRequestPayload(e),e.type){case"sub":e.gsPayload&&v(this,r,e.gsPayload,"f"),p(this,n,"f").done();break;case"GS_INVOICE_ASK_PAYMENT":this.handleInvoiceAskPayment(e);break;case"error":this.cancelPayment(e.error),h.kg.error(e.error)}}))})),this.ready}))}getPayload(){return f(this,void 0,void 0,(function*(){return yield p(this,n,"f").ready,{userId:p(this,r,"f").userId,signature:p(this,r,"f").signature}}))}getPlayer(){return f(this,void 0,void 0,(function*(){const t=(0,l._)();return t.done({id:0,name:"",photoSmall:"",photoMedium:"",photoLarge:""}),t.ready}))}showRewardedVideo(){return f(this,void 0,void 0,(function*(){return!1}))}showPreloader(){return f(this,void 0,void 0,(function*(){return!1}))}showFullscreen(){return f(this,void 0,void 0,(function*(){return!1}))}showSticky(){return Promise.resolve(!1)}closeSticky(){}refreshSticky(){return this.closeSticky(),this.showSticky()}sendAction(t,e){const i=(0,l._)();return this.assistant.sendAction({type:t,payload:e},i.done,i.abort),i.ready}purchase(t){return this.cancelPayment(),v(this,a,(0,l._)(),"f"),p(this,a,"f").ready.finally((()=>{v(this,a,null,"f"),v(this,s,null,"f")})),this.sendAction("GS_PAYMENTS_PURCHASE",{product:t}).then(this.handleOnInvoiceCreated.bind(this)).catch(this.cancelPayment.bind(this)),p(this,a,"f").ready}handleOnInvoiceCreated(t){if("GS_INVOICE_CREATED"===t.type){const e="https://gs.eponesh.com/sdk/static/pages/payment-result.html";v(this,s,t.payload,"f"),this.sendAction("GS_INVOICE_CREATED_HANDLED",Object.assign(Object.assign({},p(this,s,"f")),{isSupportsNativePayment:this.isSupportsNativePayment,successUrl:`${e}?gsPaymentStatus=success`,failedUrl:`${e}?gsPaymentStatus=failed`}))}"error"===t.type&&this.cancelPayment(t.error)}handleOnCheckPurchase(t){switch(t.type){case"GS_PAYMENT_SUCCESS":p(this,a,"f").done({invoiceId:t.invoiceId});break;case"GS_PAYMENT_WAITING":{let t=window.setTimeout((()=>this.checkPurchase()),1e4);p(this,a,"f").ready.finally((()=>clearTimeout(t)));break}case"GS_PAYMENT_FAILED":case"error":this.cancelPayment(t.error)}}handleOnGsRequestPayload(t){"GS_REQUEST_PAYLOAD_RESULT"===t.type&&v(this,r,t.gsPayload,"f")}checkPurchase(){return f(this,void 0,void 0,(function*(){if(p(this,s,"f"))return this.sendAction("GS_PAYMENTS_CHECK_PURCHASE",p(this,s,"f")).then(this.handleOnCheckPurchase.bind(this)).catch(this.cancelPayment.bind(this))}))}cancelPayment(t="cancelled"){var e;null===(e=p(this,a,"f"))||void 0===e||e.abort(t),v(this,a,null,"f"),v(this,s,null,"f")}handleInvoiceAskPayment({formUrl:t}){return f(this,void 0,void 0,(function*(){let e,i=!1;const n=t=>{try{if("GS_PAYMENT_RESULT_MESSAGE"!==JSON.parse(t.data).type)return;i=!0,this.checkPurchase()}catch(t){}};var r;window.addEventListener("message",n),p(this,a,"f").ready.finally((()=>{v(this,a,null,"f"),v(this,s,null,"f"),e.close(),window.removeEventListener("message",n)})),e=(0,d.M)(t,"",400,600),yield(r=()=>e.closed,new Promise((t=>{let e=0;r(window)?t():e=setInterval((function(){r(window)&&(clearInterval(e),t())}),100)}))),i||this.cancelPayment()}))}}n=new WeakMap,r=new WeakMap,s=new WeakMap,a=new WeakMap;var w=function(t,e,i,n){return new(i||(i=Promise))((function(r,s){function a(t){try{c(n.next(t))}catch(t){s(t)}}function o(t){try{c(n.throw(t))}catch(t){s(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(a,o)}c((n=n.apply(t,e||[])).next())}))};class m{constructor(t){this.sdk=t,this.hasCredetials=!1,this.userId="",this.isAuthorizedAtPlatform=!0}getPlayerAuthInfo(){return w(this,void 0,void 0,(function*(){yield this.sdk.ready;const t=yield this.sdk.getPayload();return this.userId=t.userId,this.hasCredetials=!!t.userId&&!!t.signature,t}))}getPlayerContext(){return w(this,void 0,void 0,(function*(){return{platformData:yield this.getPlayerAuthInfo(),key:""}}))}loginPlayer(){return w(this,void 0,void 0,(function*(){return this.sdk.getPlayer()}))}getPlayer(){return w(this,void 0,void 0,(function*(){return this.sdk.getPlayer()}))}publishRecord(t){}isPlatformAvatar(){return!1}}var g=function(t,e,i,n){return new(i||(i=Promise))((function(r,s){function a(t){try{c(n.next(t))}catch(t){s(t)}}function o(t){try{c(n.throw(t))}catch(t){s(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(a,o)}c((n=n.apply(t,e||[])).next())}))};class P{constructor(t){this.sdk=t,this.isStickyAvailable=!1,this.stickyBannerConfig={isOverlapping:!1,height:0},this.isFullscreenAvailable=!0,this.isRewardedAvailable=!0,this.isPreloaderAvailable=!0,this.needToLeaveFullscreenBeforeAds=!1,this.canShowFullscreenBeforeGamePlay=!1}showPreloader(){return g(this,void 0,void 0,(function*(){return yield this.sdk.ready,this.sdk.showPreloader().catch((()=>!1))}))}showFullscreen(){return g(this,void 0,void 0,(function*(){return yield this.sdk.ready,this.sdk.showFullscreen().catch((()=>!1))}))}showRewardedVideo(){return g(this,void 0,void 0,(function*(){return yield this.sdk.ready,this.sdk.showRewardedVideo().catch((()=>!1))}))}showSticky(){return g(this,void 0,void 0,(function*(){return yield this.sdk.ready,this.sdk.showSticky().catch((()=>!1))}))}refreshSticky(){return g(this,void 0,void 0,(function*(){return yield this.sdk.ready,this.sdk.refreshSticky().catch((()=>!1))}))}closeSticky(){return g(this,void 0,void 0,(function*(){return yield this.sdk.ready,this.sdk.closeSticky()}))}}var k=i(2712),S=i(5942),A=i(5572);class b{constructor(t){this.sdk=t,this.hasIntegratedAuth=!1,this.isExternalLinksAllowed=!1,this.isSecretCodeAuthAvailable=!0,this._hasAuthModal=!1,this.type=S.z.SMARTMARKET,this.socialNetworks=k.aD,this.isSupportsImageUploading=!1,this.hasAccountLinkingFeature=!1}getSDK(){return this.sdk}getNativeSDK(){return this.sdk}requestPermissions(){return t=this,e=void 0,n=function*(){return A.VK},new((i=void 0)||(i=Promise))((function(r,s){function a(t){try{c(n.next(t))}catch(t){s(t)}}function o(t){try{c(n.throw(t))}catch(t){s(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(a,o)}c((n=n.apply(t,e||[])).next())}));var t,e,i,n}uploadImage(){return null}}class _{constructor(t){this.sdk=t,this.isSupportsShare=!1,this.isSupportsNativeShare=!1,this.isSupportsNativePosts=!1,this.isSupportsNativeInvite=!1,this.isSupportsNativeCommunityJoin=!1,this.canJoinCommunity=!0,this.isSupportShareParams=!1}get shareParams(){return{}}share(t){return Promise.resolve(!1)}post(t){return Promise.resolve(!1)}invite(t){return Promise.resolve(!1)}getCommunityLink(t){return t}joinCommunity(){return Promise.resolve(!1)}addShareParamsToUrl(t,e){return t}makeShareUrl(t){return""}getShareParam(t){return""}}var E=i(9696),C=function(t,e,i,n){return new(i||(i=Promise))((function(r,s){function a(t){try{c(n.next(t))}catch(t){s(t)}}function o(t){try{c(n.throw(t))}catch(t){s(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(a,o)}c((n=n.apply(t,e||[])).next())}))};const x={[E.Uo.RU]:"Руб",[E.Uo.EN]:"Rub"};class I{constructor(t){this.sdk=t,this.isSupportsSubscriptions=!1,this.isServerValidation=!0}get isSupportsPayments(){return!this.sdk.isOnSberRu}mapProducts(t,e){return C(this,void 0,void 0,(function*(){return e.map((e=>Object.assign(Object.assign({},e),{currencySymbol:x[t.language]||x[E.Uo.EN],currency:"RUB"})))}))}consumeAllExpired(t,e,i){return C(this,void 0,void 0,(function*(){}))}fetchPurchases(){return C(this,void 0,void 0,(function*(){return{payload:{},purchases:[]}}))}purchase(t){return C(this,void 0,void 0,(function*(){return yield this.sdk.ready,this.sdk.purchase(t)}))}consume(t){return C(this,void 0,void 0,(function*(){return{}}))}subscribe(t,e){return C(this,void 0,void 0,(function*(){return{}}))}unsubscribe(t,e){return C(this,void 0,void 0,(function*(){return{}}))}}var N=i(501);function T(t){return e=this,i=void 0,r=function*(){const e=new y({},t.gp),[,,i]=yield Promise.all([e.init(),t.setupStorage([]),t.fetchConfig()]),n=new m(e);return{adsAdapter:new P(e),appAdapter:new N.Z,playerAdapter:n,platformAdapter:new b(e),socialsAdapter:new _(e),paymentsAdapter:new I(e),projectConfig:i}},new((n=void 0)||(n=Promise))((function(t,s){function a(t){try{c(r.next(t))}catch(t){s(t)}}function o(t){try{c(r.throw(t))}catch(t){s(t)}}function c(e){var i;e.done?t(e.value):(i=e.value,i instanceof n?i:new n((function(t){t(i)}))).then(a,o)}c((r=r.apply(e,i||[])).next())}));var e,i,n,r}}}]);
