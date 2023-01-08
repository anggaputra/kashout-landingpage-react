"use strict";(self.webpackChunkfinity_gatsby=self.webpackChunkfinity_gatsby||[]).push([[379],{6106:function(t,e,n){n.r(e),n.d(e,{CountUp:function(){return i}});var r=function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},i=function(){function t(t,e,n){var i=this;this.endVal=e,this.options=n,this.version="2.3.2",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(t){i.startTime||(i.startTime=t);var e=t-i.startTime;i.remaining=i.duration-e,i.useEasing?i.countDown?i.frameVal=i.startVal-i.easingFn(e,0,i.startVal-i.endVal,i.duration):i.frameVal=i.easingFn(e,i.startVal,i.endVal-i.startVal,i.duration):i.frameVal=i.startVal+(i.endVal-i.startVal)*(e/i.duration);var n=i.countDown?i.frameVal<i.endVal:i.frameVal>i.endVal;i.frameVal=n?i.endVal:i.frameVal,i.frameVal=Number(i.frameVal.toFixed(i.options.decimalPlaces)),i.printValue(i.frameVal),e<i.duration?i.rAF=requestAnimationFrame(i.count):null!==i.finalEndVal?i.update(i.finalEndVal):i.callback&&i.callback()},this.formatNumber=function(t){var e,n,r,o,a=t<0?"-":"";e=Math.abs(t).toFixed(i.options.decimalPlaces);var s=(e+="").split(".");if(n=s[0],r=s.length>1?i.options.decimal+s[1]:"",i.options.useGrouping){o="";for(var u=0,l=n.length;u<l;++u)0!==u&&u%3==0&&(o=i.options.separator+o),o=n[l-u-1]+o;n=o}return i.options.numerals&&i.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(t){return i.options.numerals[+t]})),r=r.replace(/[0-9]/g,(function(t){return i.options.numerals[+t]}))),a+i.options.prefix+n+r+i.options.suffix},this.easeOutExpo=function(t,e,n,r){return n*(1-Math.pow(2,-10*t/r))*1024/1023+e},this.options=r(r({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(e),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,t):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push((function(){return i.handleScroll(i)})),window.onscroll=function(){window.onScrollFns.forEach((function(t){return t()}))},this.handleScroll(this)))}return t.prototype.handleScroll=function(t){if(t&&window&&!t.once){var e=window.innerHeight+window.scrollY,n=t.el.getBoundingClientRect(),r=n.top+n.height+window.pageYOffset;r<e&&r>window.scrollY&&t.paused?(t.paused=!1,setTimeout((function(){return t.start()}),t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):window.scrollY>r&&!t.paused&&t.reset()}},t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var e=t-this.startVal;if(Math.abs(e)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var n=this.countDown?1:-1;this.endVal=t+n*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.callback=t,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var e=this.formattingFn(t);"INPUT"===this.el.tagName?this.el.value=e:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=e:this.el.innerHTML=e},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var e=Number(t);return this.ensureNumber(e)?e:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}()},2158:function(t,e,n){var r=n(7294),i=n(6106);function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(){return u=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},u.apply(this,arguments)}function l(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var f="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?r.useLayoutEffect:r.useEffect;function c(t){var e=r.useRef(t);return f((function(){e.current=t})),r.useCallback((function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.current.apply(void 0,n)}),[])}var p=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],d={decimal:".",delay:null,prefix:"",suffix:"",duration:2,start:0,startOnMount:!0,enableReinitialize:!0},h=function(t){var e=r.useMemo((function(){return a(a({},d),t)}),[t]),n=e.ref,o=e.startOnMount,s=e.enableReinitialize,u=e.delay,f=e.onEnd,h=e.onStart,m=e.onPauseResume,v=e.onReset,y=e.onUpdate,b=l(e,p),g=r.useRef(),w=r.useRef(),E=r.useRef(!1),V=c((function(){return function(t,e){var n=e.decimal,r=e.decimals,o=e.duration,a=e.easingFn,s=e.end,u=e.formattingFn,l=e.numerals,f=e.prefix,c=e.separator,p=e.start,d=e.suffix,h=e.useEasing,m=e.enableScrollSpy,v=e.scrollSpyDelay,y=e.scrollSpyOnce;return new i.CountUp(t,s,{startVal:p,duration:o,decimal:n,decimalPlaces:r,easingFn:a,formattingFn:u,numerals:l,separator:c,prefix:f,suffix:d,useEasing:h,useGrouping:!!c,enableScrollSpy:m,scrollSpyDelay:v,scrollSpyOnce:y})}("string"==typeof n?n:n.current,b)})),O=c((function(t){var e=g.current;if(e&&!t)return e;var n=V();return g.current=n,n})),P=c((function(){var t=function(){return O(!0).start((function(){null==f||f({pauseResume:S,reset:F,start:j,update:R})}))};u&&u>0?w.current=setTimeout(t,1e3*u):t(),null==h||h({pauseResume:S,reset:F,update:R})})),S=c((function(){O().pauseResume(),null==m||m({reset:F,start:j,update:R})})),F=c((function(){O().el&&(w.current&&clearTimeout(w.current),O().reset(),null==v||v({pauseResume:S,start:j,update:R}))})),R=c((function(t){O().update(t),null==y||y({pauseResume:S,reset:F,start:j})})),j=c((function(){F(),P()})),x=c((function(t){o&&(t&&F(),P())}));return r.useEffect((function(){E.current?s&&x(!0):(E.current=!0,x())}),[s,E,x,u,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.formattingFn]),r.useEffect((function(){return function(){F()}}),[F]),{start:j,pauseResume:S,reset:F,update:R,getCountUp:O}},m=["className","redraw","containerProps","children","style"];e.ZP=function(t){var e=t.className,n=t.redraw,i=t.containerProps,o=t.children,s=t.style,f=l(t,m),p=r.useRef(null),d=r.useRef(!1),v=h(a(a({},f),{},{ref:p,startOnMount:"function"!=typeof o||0===t.delay,enableReinitialize:!1})),y=v.start,b=v.reset,g=v.update,w=v.pauseResume,E=v.getCountUp,V=c((function(){y()})),O=c((function(e){t.preserveValue||b(),g(e)})),P=c((function(){"function"!=typeof t.children||p.current instanceof Element?E():console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.')}));r.useEffect((function(){P()}),[P]),r.useEffect((function(){d.current&&O(t.end)}),[t.end,O]);var S=n&&t;return r.useEffect((function(){n&&d.current&&V()}),[V,n,S]),r.useEffect((function(){!n&&d.current&&V()}),[V,n,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.className,t.formattingFn]),r.useEffect((function(){d.current=!0}),[]),"function"==typeof o?o({countUpRef:p,start:y,reset:b,update:g,pauseResume:w,getCountUp:E}):r.createElement("span",u({className:e,ref:p,style:s},i),void 0!==t.start?E().formattingFn(t.start):"")}},932:function(t,e,n){var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=n(7294),o=c(i),a=c(n(5697)),s=n(2208),u=c(n(8062)),l=c(n(1116)),f=c(n(5152));function c(t){return t&&t.__esModule?t:{default:t}}function p(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var m=0,v=0,y=0,b=0,g="data-lazyload-listened",w=[],E=[],V=!1;try{var O=Object.defineProperty({},"passive",{get:function(){V=!0}});window.addEventListener("test",null,O)}catch(D){}var P=!!V&&{capture:!1,passive:!0},S=function(t){var e=t.ref;if(e instanceof HTMLElement){var n=(0,u.default)(e),r=t.props.overflow&&n!==e.ownerDocument&&n!==document&&n!==document.documentElement?function(t,e){var n=t.ref,r=void 0,i=void 0,o=void 0,a=void 0;try{var s=e.getBoundingClientRect();r=s.top,i=s.left,o=s.height,a=s.width}catch(D){r=m,i=v,o=b,a=y}var u=window.innerHeight||document.documentElement.clientHeight,l=window.innerWidth||document.documentElement.clientWidth,f=Math.max(r,0),c=Math.max(i,0),p=Math.min(u,r+o)-f,d=Math.min(l,i+a)-c,h=void 0,g=void 0,w=void 0,E=void 0;try{var V=n.getBoundingClientRect();h=V.top,g=V.left,w=V.height,E=V.width}catch(D){h=m,g=v,w=b,E=y}var O=h-f,P=g-c,S=Array.isArray(t.props.offset)?t.props.offset:[t.props.offset,t.props.offset];return O-S[0]<=p&&O+w+S[1]>=0&&P-S[0]<=d&&P+E+S[1]>=0}(t,n):function(t){var e=t.ref;if(!(e.offsetWidth||e.offsetHeight||e.getClientRects().length))return!1;var n=void 0,r=void 0;try{var i=e.getBoundingClientRect();n=i.top,r=i.height}catch(D){n=m,r=b}var o=window.innerHeight||document.documentElement.clientHeight,a=Array.isArray(t.props.offset)?t.props.offset:[t.props.offset,t.props.offset];return n-a[0]<=o&&n+r+a[1]>=0}(t);r?t.visible||(t.props.once&&E.push(t),t.visible=!0,t.forceUpdate()):t.props.once&&t.visible||(t.visible=!1,t.props.unmountIfInvisible&&t.forceUpdate())}},F=function(){E.forEach((function(t){var e=w.indexOf(t);-1!==e&&w.splice(e,1)})),E=[]},R=function(){for(var t=0;t<w.length;++t){var e=w[t];S(e)}F()},j=void 0,x=null,A=function(t){function e(t){p(this,e);var n=d(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.visible=!1,n.setRef=n.setRef.bind(n),n}return h(e,t),r(e,[{key:"componentDidMount",value:function(){var t=window,e=this.props.scrollContainer;e&&"string"==typeof e&&(t=t.document.querySelector(e));var n=void 0!==this.props.debounce&&"throttle"===j||"debounce"===j&&void 0===this.props.debounce;if(n&&((0,s.off)(t,"scroll",x,P),(0,s.off)(window,"resize",x,P),x=null),x||(void 0!==this.props.debounce?(x=(0,l.default)(R,"number"==typeof this.props.debounce?this.props.debounce:300),j="debounce"):void 0!==this.props.throttle?(x=(0,f.default)(R,"number"==typeof this.props.throttle?this.props.throttle:300),j="throttle"):x=R),this.props.overflow){var r=(0,u.default)(this.ref);if(r&&"function"==typeof r.getAttribute){var i=+r.getAttribute(g)+1;1===i&&r.addEventListener("scroll",x,P),r.setAttribute(g,i)}}else if(0===w.length||n){var o=this.props,a=o.scroll,c=o.resize;a&&(0,s.on)(t,"scroll",x,P),c&&(0,s.on)(window,"resize",x,P)}w.push(this),S(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var t=(0,u.default)(this.ref);if(t&&"function"==typeof t.getAttribute){var e=+t.getAttribute(g)-1;0===e?(t.removeEventListener("scroll",x,P),t.removeAttribute(g)):t.setAttribute(g,e)}}var n=w.indexOf(this);-1!==n&&w.splice(n,1),0===w.length&&"undefined"!=typeof window&&((0,s.off)(window,"resize",x,P),(0,s.off)(window,"scroll",x,P))}},{key:"setRef",value:function(t){t&&(this.ref=t)}},{key:"render",value:function(){var t=this.props,e=t.height,n=t.children,r=t.placeholder,i=t.className,a=t.classNamePrefix,s=t.style;return o.default.createElement("div",{className:a+"-wrapper "+i,ref:this.setRef,style:s},this.visible?n:r||o.default.createElement("div",{style:{height:e},className:a+"-placeholder"}))}}]),e}(i.Component);A.propTypes={className:a.default.string,classNamePrefix:a.default.string,once:a.default.bool,height:a.default.oneOfType([a.default.number,a.default.string]),offset:a.default.oneOfType([a.default.number,a.default.arrayOf(a.default.number)]),overflow:a.default.bool,resize:a.default.bool,scroll:a.default.bool,children:a.default.node,throttle:a.default.oneOfType([a.default.number,a.default.bool]),debounce:a.default.oneOfType([a.default.number,a.default.bool]),placeholder:a.default.node,scrollContainer:a.default.oneOfType([a.default.string,a.default.object]),unmountIfInvisible:a.default.bool,style:a.default.object},A.defaultProps={className:"",classNamePrefix:"lazyload",once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};var N=function(t){return t.displayName||t.name||"Component"};e.ZP=A},1116:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,n){var r=void 0,i=void 0,o=void 0,a=void 0,s=void 0,u=function u(){var l=+new Date-a;l<e&&l>=0?r=setTimeout(u,e-l):(r=null,n||(s=t.apply(o,i),r||(o=null,i=null)))};return function(){o=this,i=arguments,a=+new Date;var l=n&&!r;return r||(r=setTimeout(u,e)),l&&(s=t.apply(o,i),o=null,i=null),s}}},2208:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.on=function(t,e,n,r){r=r||!1,t.addEventListener?t.addEventListener(e,n,r):t.attachEvent&&t.attachEvent("on"+e,(function(e){n.call(t,e||window.event)}))},e.off=function(t,e,n,r){r=r||!1,t.removeEventListener?t.removeEventListener(e,n,r):t.detachEvent&&t.detachEvent("on"+e,n)}},8062:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){if(!(t instanceof HTMLElement))return document.documentElement;for(var e="absolute"===t.style.position,n=/(scroll|auto)/,r=t;r;){if(!r.parentNode)return t.ownerDocument||document.documentElement;var i=window.getComputedStyle(r),o=i.position,a=i.overflow,s=i["overflow-x"],u=i["overflow-y"];if("static"===o&&e)r=r.parentNode;else{if(n.test(a)&&n.test(s)&&n.test(u))return r;r=r.parentNode}}return t.ownerDocument||t.documentElement||document.documentElement}},5152:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,n){var r,i;return e||(e=250),function(){var o=n||this,a=+new Date,s=arguments;r&&a<r+e?(clearTimeout(i),i=setTimeout((function(){r=a,t.apply(o,s)}),e)):(r=a,t.apply(o,s))}}}}]);
//# sourceMappingURL=0d9b4698ec35cae9baf75fe1591e30effaa14feb-eae51cd6ecbe802a706e.js.map