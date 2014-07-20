/*! jQuery v1.8.2 jquery.com | jquery.org/license */
(function(a,b){function G(a){var b=F[a]={};return p.each(a.split(s),function(a,c){b[c]=!0}),b}function J(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(I,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:+d+""===d?+d:H.test(d)?p.parseJSON(d):d}catch(f){}p.data(a,c,d)}else d=b}return d}function K(a){var b;for(b in a){if(b==="data"&&p.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function ba(){return!1}function bb(){return!0}function bh(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function bi(a,b){do a=a[b];while(a&&a.nodeType!==1);return a}function bj(a,b,c){b=b||0;if(p.isFunction(b))return p.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return p.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=p.grep(a,function(a){return a.nodeType===1});if(be.test(b))return p.filter(b,d,!c);b=p.filter(b,d)}return p.grep(a,function(a,d){return p.inArray(a,b)>=0===c})}function bk(a){var b=bl.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function bC(a,b){return a.getElementsByTagName(b)[0]||a.appendChild(a.ownerDocument.createElement(b))}function bD(a,b){if(b.nodeType!==1||!p.hasData(a))return;var c,d,e,f=p._data(a),g=p._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;d<e;d++)p.event.add(b,c,h[c][d])}g.data&&(g.data=p.extend({},g.data))}function bE(a,b){var c;if(b.nodeType!==1)return;b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?(b.parentNode&&(b.outerHTML=a.outerHTML),p.support.html5Clone&&a.innerHTML&&!p.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):c==="input"&&bv.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text),b.removeAttribute(p.expando)}function bF(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bG(a){bv.test(a.type)&&(a.defaultChecked=a.checked)}function bY(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=bW.length;while(e--){b=bW[e]+c;if(b in a)return b}return d}function bZ(a,b){return a=b||a,p.css(a,"display")==="none"||!p.contains(a.ownerDocument,a)}function b$(a,b){var c,d,e=[],f=0,g=a.length;for(;f<g;f++){c=a[f];if(!c.style)continue;e[f]=p._data(c,"olddisplay"),b?(!e[f]&&c.style.display==="none"&&(c.style.display=""),c.style.display===""&&bZ(c)&&(e[f]=p._data(c,"olddisplay",cc(c.nodeName)))):(d=bH(c,"display"),!e[f]&&d!=="none"&&p._data(c,"olddisplay",d))}for(f=0;f<g;f++){c=a[f];if(!c.style)continue;if(!b||c.style.display==="none"||c.style.display==="")c.style.display=b?e[f]||"":"none"}return a}function b_(a,b,c){var d=bP.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function ca(a,b,c,d){var e=c===(d?"border":"content")?4:b==="width"?1:0,f=0;for(;e<4;e+=2)c==="margin"&&(f+=p.css(a,c+bV[e],!0)),d?(c==="content"&&(f-=parseFloat(bH(a,"padding"+bV[e]))||0),c!=="margin"&&(f-=parseFloat(bH(a,"border"+bV[e]+"Width"))||0)):(f+=parseFloat(bH(a,"padding"+bV[e]))||0,c!=="padding"&&(f+=parseFloat(bH(a,"border"+bV[e]+"Width"))||0));return f}function cb(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=!0,f=p.support.boxSizing&&p.css(a,"boxSizing")==="border-box";if(d<=0||d==null){d=bH(a,b);if(d<0||d==null)d=a.style[b];if(bQ.test(d))return d;e=f&&(p.support.boxSizingReliable||d===a.style[b]),d=parseFloat(d)||0}return d+ca(a,b,c||(f?"border":"content"),e)+"px"}function cc(a){if(bS[a])return bS[a];var b=p("<"+a+">").appendTo(e.body),c=b.css("display");b.remove();if(c==="none"||c===""){bI=e.body.appendChild(bI||p.extend(e.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!bJ||!bI.createElement)bJ=(bI.contentWindow||bI.contentDocument).document,bJ.write("<!doctype html><html><body>"),bJ.close();b=bJ.body.appendChild(bJ.createElement(a)),c=bH(b,"display"),e.body.removeChild(bI)}return bS[a]=c,c}function ci(a,b,c,d){var e;if(p.isArray(b))p.each(b,function(b,e){c||ce.test(a)?d(a,e):ci(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&p.type(b)==="object")for(e in b)ci(a+"["+e+"]",b[e],c,d);else d(a,b)}function cz(a){return function(b,c){typeof b!="string"&&(c=b,b="*");var d,e,f,g=b.toLowerCase().split(s),h=0,i=g.length;if(p.isFunction(c))for(;h<i;h++)d=g[h],f=/^\+/.test(d),f&&(d=d.substr(1)||"*"),e=a[d]=a[d]||[],e[f?"unshift":"push"](c)}}function cA(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h,i=a[f],j=0,k=i?i.length:0,l=a===cv;for(;j<k&&(l||!h);j++)h=i[j](c,d,e),typeof h=="string"&&(!l||g[h]?h=b:(c.dataTypes.unshift(h),h=cA(a,c,d,e,h,g)));return(l||!h)&&!g["*"]&&(h=cA(a,c,d,e,"*",g)),h}function cB(a,c){var d,e,f=p.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((f[d]?a:e||(e={}))[d]=c[d]);e&&p.extend(!0,a,e)}function cC(a,c,d){var e,f,g,h,i=a.contents,j=a.dataTypes,k=a.responseFields;for(f in k)f in d&&(c[k[f]]=d[f]);while(j[0]==="*")j.shift(),e===b&&(e=a.mimeType||c.getResponseHeader("content-type"));if(e)for(f in i)if(i[f]&&i[f].test(e)){j.unshift(f);break}if(j[0]in d)g=j[0];else{for(f in d){if(!j[0]||a.converters[f+" "+j[0]]){g=f;break}h||(h=f)}g=g||h}if(g)return g!==j[0]&&j.unshift(g),d[g]}function cD(a,b){var c,d,e,f,g=a.dataTypes.slice(),h=g[0],i={},j=0;a.dataFilter&&(b=a.dataFilter(b,a.dataType));if(g[1])for(c in a.converters)i[c.toLowerCase()]=a.converters[c];for(;e=g[++j];)if(e!=="*"){if(h!=="*"&&h!==e){c=i[h+" "+e]||i["* "+e];if(!c)for(d in i){f=d.split(" ");if(f[1]===e){c=i[h+" "+f[0]]||i["* "+f[0]];if(c){c===!0?c=i[d]:i[d]!==!0&&(e=f[0],g.splice(j--,0,e));break}}}if(c!==!0)if(c&&a["throws"])b=c(b);else try{b=c(b)}catch(k){return{state:"parsererror",error:c?k:"No conversion from "+h+" to "+e}}}h=e}return{state:"success",data:b}}function cL(){try{return new a.XMLHttpRequest}catch(b){}}function cM(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function cU(){return setTimeout(function(){cN=b},0),cN=p.now()}function cV(a,b){p.each(b,function(b,c){var d=(cT[b]||[]).concat(cT["*"]),e=0,f=d.length;for(;e<f;e++)if(d[e].call(a,b,c))return})}function cW(a,b,c){var d,e=0,f=0,g=cS.length,h=p.Deferred().always(function(){delete i.elem}),i=function(){var b=cN||cU(),c=Math.max(0,j.startTime+j.duration-b),d=1-(c/j.duration||0),e=0,f=j.tweens.length;for(;e<f;e++)j.tweens[e].run(d);return h.notifyWith(a,[j,d,c]),d<1&&f?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:p.extend({},b),opts:p.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:cN||cU(),duration:c.duration,tweens:[],createTween:function(b,c,d){var e=p.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(e),e},stop:function(b){var c=0,d=b?j.tweens.length:0;for(;c<d;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;cX(k,j.opts.specialEasing);for(;e<g;e++){d=cS[e].call(j,a,k,j.opts);if(d)return d}return cV(j,k),p.isFunction(j.opts.start)&&j.opts.start.call(a,j),p.fx.timer(p.extend(i,{anim:j,queue:j.opts.queue,elem:a})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function cX(a,b){var c,d,e,f,g;for(c in a){d=p.camelCase(c),e=b[d],f=a[c],p.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=p.cssHooks[d];if(g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}}function cY(a,b,c){var d,e,f,g,h,i,j,k,l=this,m=a.style,n={},o=[],q=a.nodeType&&bZ(a);c.queue||(j=p._queueHooks(a,"fx"),j.unqueued==null&&(j.unqueued=0,k=j.empty.fire,j.empty.fire=function(){j.unqueued||k()}),j.unqueued++,l.always(function(){l.always(function(){j.unqueued--,p.queue(a,"fx").length||j.empty.fire()})})),a.nodeType===1&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],p.css(a,"display")==="inline"&&p.css(a,"float")==="none"&&(!p.support.inlineBlockNeedsLayout||cc(a.nodeName)==="inline"?m.display="inline-block":m.zoom=1)),c.overflow&&(m.overflow="hidden",p.support.shrinkWrapBlocks||l.done(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b){f=b[d];if(cP.exec(f)){delete b[d];if(f===(q?"hide":"show"))continue;o.push(d)}}g=o.length;if(g){h=p._data(a,"fxshow")||p._data(a,"fxshow",{}),q?p(a).show():l.done(function(){p(a).hide()}),l.done(function(){var b;p.removeData(a,"fxshow",!0);for(b in n)p.style(a,b,n[b])});for(d=0;d<g;d++)e=o[d],i=l.createTween(e,q?h[e]:0),n[e]=h[e]||p.style(a,e),e in h||(h[e]=i.start,q&&(i.end=i.start,i.start=e==="width"||e==="height"?1:0))}}function cZ(a,b,c,d,e){return new cZ.prototype.init(a,b,c,d,e)}function c$(a,b){var c,d={height:a},e=0;b=b?1:0;for(;e<4;e+=2-b)c=bV[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function da(a){return p.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}var c,d,e=a.document,f=a.location,g=a.navigator,h=a.jQuery,i=a.$,j=Array.prototype.push,k=Array.prototype.slice,l=Array.prototype.indexOf,m=Object.prototype.toString,n=Object.prototype.hasOwnProperty,o=String.prototype.trim,p=function(a,b){return new p.fn.init(a,b,c)},q=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,r=/\S/,s=/\s+/,t=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,u=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,y=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,z=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,A=/^-ms-/,B=/-([\da-z])/gi,C=function(a,b){return(b+"").toUpperCase()},D=function(){e.addEventListener?(e.removeEventListener("DOMContentLoaded",D,!1),p.ready()):e.readyState==="complete"&&(e.detachEvent("onreadystatechange",D),p.ready())},E={};p.fn=p.prototype={constructor:p,init:function(a,c,d){var f,g,h,i;if(!a)return this;if(a.nodeType)return this.context=this[0]=a,this.length=1,this;if(typeof a=="string"){a.charAt(0)==="<"&&a.charAt(a.length-1)===">"&&a.length>=3?f=[null,a,null]:f=u.exec(a);if(f&&(f[1]||!c)){if(f[1])return c=c instanceof p?c[0]:c,i=c&&c.nodeType?c.ownerDocument||c:e,a=p.parseHTML(f[1],i,!0),v.test(f[1])&&p.isPlainObject(c)&&this.attr.call(a,c,!0),p.merge(this,a);g=e.getElementById(f[2]);if(g&&g.parentNode){if(g.id!==f[2])return d.find(a);this.length=1,this[0]=g}return this.context=e,this.selector=a,this}return!c||c.jquery?(c||d).find(a):this.constructor(c).find(a)}return p.isFunction(a)?d.ready(a):(a.selector!==b&&(this.selector=a.selector,this.context=a.context),p.makeArray(a,this))},selector:"",jquery:"1.8.2",length:0,size:function(){return this.length},toArray:function(){return k.call(this)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=p.merge(this.constructor(),a);return d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")"),d},each:function(a,b){return p.each(this,a,b)},ready:function(a){return p.ready.promise().done(a),this},eq:function(a){return a=+a,a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(k.apply(this,arguments),"slice",k.call(arguments).join(","))},map:function(a){return this.pushStack(p.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:j,sort:[].sort,splice:[].splice},p.fn.init.prototype=p.fn,p.extend=p.fn.extend=function(){var a,c,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;typeof h=="boolean"&&(k=h,h=arguments[1]||{},i=2),typeof h!="object"&&!p.isFunction(h)&&(h={}),j===i&&(h=this,--i);for(;i<j;i++)if((a=arguments[i])!=null)for(c in a){d=h[c],e=a[c];if(h===e)continue;k&&e&&(p.isPlainObject(e)||(f=p.isArray(e)))?(f?(f=!1,g=d&&p.isArray(d)?d:[]):g=d&&p.isPlainObject(d)?d:{},h[c]=p.extend(k,g,e)):e!==b&&(h[c]=e)}return h},p.extend({noConflict:function(b){return a.$===p&&(a.$=i),b&&a.jQuery===p&&(a.jQuery=h),p},isReady:!1,readyWait:1,holdReady:function(a){a?p.readyWait++:p.ready(!0)},ready:function(a){if(a===!0?--p.readyWait:p.isReady)return;if(!e.body)return setTimeout(p.ready,1);p.isReady=!0;if(a!==!0&&--p.readyWait>0)return;d.resolveWith(e,[p]),p.fn.trigger&&p(e).trigger("ready").off("ready")},isFunction:function(a){return p.type(a)==="function"},isArray:Array.isArray||function(a){return p.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):E[m.call(a)]||"object"},isPlainObject:function(a){if(!a||p.type(a)!=="object"||a.nodeType||p.isWindow(a))return!1;try{if(a.constructor&&!n.call(a,"constructor")&&!n.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||n.call(a,d)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},error:function(a){throw new Error(a)},parseHTML:function(a,b,c){var d;return!a||typeof a!="string"?null:(typeof b=="boolean"&&(c=b,b=0),b=b||e,(d=v.exec(a))?[b.createElement(d[1])]:(d=p.buildFragment([a],b,c?null:[]),p.merge([],(d.cacheable?p.clone(d.fragment):d.fragment).childNodes)))},parseJSON:function(b){if(!b||typeof b!="string")return null;b=p.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(w.test(b.replace(y,"@").replace(z,"]").replace(x,"")))return(new Function("return "+b))();p.error("Invalid JSON: "+b)},parseXML:function(c){var d,e;if(!c||typeof c!="string")return null;try{a.DOMParser?(e=new DOMParser,d=e.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(f){d=b}return(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&p.error("Invalid XML: "+c),d},noop:function(){},globalEval:function(b){b&&r.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(A,"ms-").replace(B,C)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,c,d){var e,f=0,g=a.length,h=g===b||p.isFunction(a);if(d){if(h){for(e in a)if(c.apply(a[e],d)===!1)break}else for(;f<g;)if(c.apply(a[f++],d)===!1)break}else if(h){for(e in a)if(c.call(a[e],e,a[e])===!1)break}else for(;f<g;)if(c.call(a[f],f,a[f++])===!1)break;return a},trim:o&&!o.call("﻿ ")?function(a){return a==null?"":o.call(a)}:function(a){return a==null?"":(a+"").replace(t,"")},makeArray:function(a,b){var c,d=b||[];return a!=null&&(c=p.type(a),a.length==null||c==="string"||c==="function"||c==="regexp"||p.isWindow(a)?j.call(d,a):p.merge(d,a)),d},inArray:function(a,b,c){var d;if(b){if(l)return l.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=c.length,e=a.length,f=0;if(typeof d=="number")for(;f<d;f++)a[e++]=c[f];else while(c[f]!==b)a[e++]=c[f++];return a.length=e,a},grep:function(a,b,c){var d,e=[],f=0,g=a.length;c=!!c;for(;f<g;f++)d=!!b(a[f],f),c!==d&&e.push(a[f]);return e},map:function(a,c,d){var e,f,g=[],h=0,i=a.length,j=a instanceof p||i!==b&&typeof i=="number"&&(i>0&&a[0]&&a[i-1]||i===0||p.isArray(a));if(j)for(;h<i;h++)e=c(a[h],h,d),e!=null&&(g[g.length]=e);else for(f in a)e=c(a[f],f,d),e!=null&&(g[g.length]=e);return g.concat.apply([],g)},guid:1,proxy:function(a,c){var d,e,f;return typeof c=="string"&&(d=a[c],c=a,a=d),p.isFunction(a)?(e=k.call(arguments,2),f=function(){return a.apply(c,e.concat(k.call(arguments)))},f.guid=a.guid=a.guid||p.guid++,f):b},access:function(a,c,d,e,f,g,h){var i,j=d==null,k=0,l=a.length;if(d&&typeof d=="object"){for(k in d)p.access(a,c,k,d[k],1,g,e);f=1}else if(e!==b){i=h===b&&p.isFunction(e),j&&(i?(i=c,c=function(a,b,c){return i.call(p(a),c)}):(c.call(a,e),c=null));if(c)for(;k<l;k++)c(a[k],d,i?e.call(a[k],k,c(a[k],d)):e,h);f=1}return f?a:j?c.call(a):l?c(a[0],d):g},now:function(){return(new Date).getTime()}}),p.ready.promise=function(b){if(!d){d=p.Deferred();if(e.readyState==="complete")setTimeout(p.ready,1);else if(e.addEventListener)e.addEventListener("DOMContentLoaded",D,!1),a.addEventListener("load",p.ready,!1);else{e.attachEvent("onreadystatechange",D),a.attachEvent("onload",p.ready);var c=!1;try{c=a.frameElement==null&&e.documentElement}catch(f){}c&&c.doScroll&&function g(){if(!p.isReady){try{c.doScroll("left")}catch(a){return setTimeout(g,50)}p.ready()}}()}}return d.promise(b)},p.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){E["[object "+b+"]"]=b.toLowerCase()}),c=p(e);var F={};p.Callbacks=function(a){a=typeof a=="string"?F[a]||G(a):p.extend({},a);var c,d,e,f,g,h,i=[],j=!a.once&&[],k=function(b){c=a.memory&&b,d=!0,h=f||0,f=0,g=i.length,e=!0;for(;i&&h<g;h++)if(i[h].apply(b[0],b[1])===!1&&a.stopOnFalse){c=!1;break}e=!1,i&&(j?j.length&&k(j.shift()):c?i=[]:l.disable())},l={add:function(){if(i){var b=i.length;(function d(b){p.each(b,function(b,c){var e=p.type(c);e==="function"&&(!a.unique||!l.has(c))?i.push(c):c&&c.length&&e!=="string"&&d(c)})})(arguments),e?g=i.length:c&&(f=b,k(c))}return this},remove:function(){return i&&p.each(arguments,function(a,b){var c;while((c=p.inArray(b,i,c))>-1)i.splice(c,1),e&&(c<=g&&g--,c<=h&&h--)}),this},has:function(a){return p.inArray(a,i)>-1},empty:function(){return i=[],this},disable:function(){return i=j=c=b,this},disabled:function(){return!i},lock:function(){return j=b,c||l.disable(),this},locked:function(){return!j},fireWith:function(a,b){return b=b||[],b=[a,b.slice?b.slice():b],i&&(!d||j)&&(e?j.push(b):k(b)),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!d}};return l},p.extend({Deferred:function(a){var b=[["resolve","done",p.Callbacks("once memory"),"resolved"],["reject","fail",p.Callbacks("once memory"),"rejected"],["notify","progress",p.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return p.Deferred(function(c){p.each(b,function(b,d){var f=d[0],g=a[b];e[d[1]](p.isFunction(g)?function(){var a=g.apply(this,arguments);a&&p.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f+"With"](this===e?c:this,[a])}:c[f])}),a=null}).promise()},promise:function(a){return a!=null?p.extend(a,d):d}},e={};return d.pipe=d.then,p.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[a^1][2].disable,b[2][2].lock),e[f[0]]=g.fire,e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=k.call(arguments),d=c.length,e=d!==1||a&&p.isFunction(a.promise)?d:0,f=e===1?a:p.Deferred(),g=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?k.call(arguments):d,c===h?f.notifyWith(b,c):--e||f.resolveWith(b,c)}},h,i,j;if(d>1){h=new Array(d),i=new Array(d),j=new Array(d);for(;b<d;b++)c[b]&&p.isFunction(c[b].promise)?c[b].promise().done(g(b,j,c)).fail(f.reject).progress(g(b,i,h)):--e}return e||f.resolveWith(j,c),f.promise()}}),p.support=function(){var b,c,d,f,g,h,i,j,k,l,m,n=e.createElement("div");n.setAttribute("className","t"),n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",c=n.getElementsByTagName("*"),d=n.getElementsByTagName("a")[0],d.style.cssText="top:1px;float:left;opacity:.5";if(!c||!c.length)return{};f=e.createElement("select"),g=f.appendChild(e.createElement("option")),h=n.getElementsByTagName("input")[0],b={leadingWhitespace:n.firstChild.nodeType===3,tbody:!n.getElementsByTagName("tbody").length,htmlSerialize:!!n.getElementsByTagName("link").length,style:/top/.test(d.getAttribute("style")),hrefNormalized:d.getAttribute("href")==="/a",opacity:/^0.5/.test(d.style.opacity),cssFloat:!!d.style.cssFloat,checkOn:h.value==="on",optSelected:g.selected,getSetAttribute:n.className!=="t",enctype:!!e.createElement("form").enctype,html5Clone:e.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:e.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},h.checked=!0,b.noCloneChecked=h.cloneNode(!0).checked,f.disabled=!0,b.optDisabled=!g.disabled;try{delete n.test}catch(o){b.deleteExpando=!1}!n.addEventListener&&n.attachEvent&&n.fireEvent&&(n.attachEvent("onclick",m=function(){b.noCloneEvent=!1}),n.cloneNode(!0).fireEvent("onclick"),n.detachEvent("onclick",m)),h=e.createElement("input"),h.value="t",h.setAttribute("type","radio"),b.radioValue=h.value==="t",h.setAttribute("checked","checked"),h.setAttribute("name","t"),n.appendChild(h),i=e.createDocumentFragment(),i.appendChild(n.lastChild),b.checkClone=i.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=h.checked,i.removeChild(h),i.appendChild(n);if(n.attachEvent)for(k in{submit:!0,change:!0,focusin:!0})j="on"+k,l=j in n,l||(n.setAttribute(j,"return;"),l=typeof n[j]=="function"),b[k+"Bubbles"]=l;return p(function(){var c,d,f,g,h="padding:0;margin:0;border:0;display:block;overflow:hidden;",i=e.getElementsByTagName("body")[0];if(!i)return;c=e.createElement("div"),c.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",i.insertBefore(c,i.firstChild),d=e.createElement("div"),c.appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",f=d.getElementsByTagName("td"),f[0].style.cssText="padding:0;margin:0;border:0;display:none",l=f[0].offsetHeight===0,f[0].style.display="",f[1].style.display="none",b.reliableHiddenOffsets=l&&f[0].offsetHeight===0,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",b.boxSizing=d.offsetWidth===4,b.doesNotIncludeMarginInBodyOffset=i.offsetTop!==1,a.getComputedStyle&&(b.pixelPosition=(a.getComputedStyle(d,null)||{}).top!=="1%",b.boxSizingReliable=(a.getComputedStyle(d,null)||{width:"4px"}).width==="4px",g=e.createElement("div"),g.style.cssText=d.style.cssText=h,g.style.marginRight=g.style.width="0",d.style.width="1px",d.appendChild(g),b.reliableMarginRight=!parseFloat((a.getComputedStyle(g,null)||{}).marginRight)),typeof d.style.zoom!="undefined"&&(d.innerHTML="",d.style.cssText=h+"width:1px;padding:1px;display:inline;zoom:1",b.inlineBlockNeedsLayout=d.offsetWidth===3,d.style.display="block",d.style.overflow="visible",d.innerHTML="<div></div>",d.firstChild.style.width="5px",b.shrinkWrapBlocks=d.offsetWidth!==3,c.style.zoom=1),i.removeChild(c),c=d=f=g=null}),i.removeChild(n),c=d=f=g=h=i=n=null,b}();var H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,I=/([A-Z])/g;p.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(p.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){return a=a.nodeType?p.cache[a[p.expando]]:a[p.expando],!!a&&!K(a)},data:function(a,c,d,e){if(!p.acceptData(a))return;var f,g,h=p.expando,i=typeof c=="string",j=a.nodeType,k=j?p.cache:a,l=j?a[h]:a[h]&&h;if((!l||!k[l]||!e&&!k[l].data)&&i&&d===b)return;l||(j?a[h]=l=p.deletedIds.pop()||p.guid++:l=h),k[l]||(k[l]={},j||(k[l].toJSON=p.noop));if(typeof c=="object"||typeof c=="function")e?k[l]=p.extend(k[l],c):k[l].data=p.extend(k[l].data,c);return f=k[l],e||(f.data||(f.data={}),f=f.data),d!==b&&(f[p.camelCase(c)]=d),i?(g=f[c],g==null&&(g=f[p.camelCase(c)])):g=f,g},removeData:function(a,b,c){if(!p.acceptData(a))return;var d,e,f,g=a.nodeType,h=g?p.cache:a,i=g?a[p.expando]:p.expando;if(!h[i])return;if(b){d=c?h[i]:h[i].data;if(d){p.isArray(b)||(b in d?b=[b]:(b=p.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,f=b.length;e<f;e++)delete d[b[e]];if(!(c?K:p.isEmptyObject)(d))return}}if(!c){delete h[i].data;if(!K(h[i]))return}g?p.cleanData([a],!0):p.support.deleteExpando||h!=h.window?delete h[i]:h[i]=null},_data:function(a,b,c){return p.data(a,b,c,!0)},acceptData:function(a){var b=a.nodeName&&p.noData[a.nodeName.toLowerCase()];return!b||b!==!0&&a.getAttribute("classid")===b}}),p.fn.extend({data:function(a,c){var d,e,f,g,h,i=this[0],j=0,k=null;if(a===b){if(this.length){k=p.data(i);if(i.nodeType===1&&!p._data(i,"parsedAttrs")){f=i.attributes;for(h=f.length;j<h;j++)g=f[j].name,g.indexOf("data-")||(g=p.camelCase(g.substring(5)),J(i,g,k[g]));p._data(i,"parsedAttrs",!0)}}return k}return typeof a=="object"?this.each(function(){p.data(this,a)}):(d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!",p.access(this,function(c){if(c===b)return k=this.triggerHandler("getData"+e,[d[0]]),k===b&&i&&(k=p.data(i,a),k=J(i,a,k)),k===b&&d[1]?this.data(d[0]):k;d[1]=c,this.each(function(){var b=p(this);b.triggerHandler("setData"+e,d),p.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1))},removeData:function(a){return this.each(function(){p.removeData(this,a)})}}),p.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=p._data(a,b),c&&(!d||p.isArray(c)?d=p._data(a,b,p.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=p.queue(a,b),d=c.length,e=c.shift(),f=p._queueHooks(a,b),g=function(){p.dequeue(a,b)};e==="inprogress"&&(e=c.shift(),d--),e&&(b==="fx"&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return p._data(a,c)||p._data(a,c,{empty:p.Callbacks("once memory").add(function(){p.removeData(a,b+"queue",!0),p.removeData(a,c,!0)})})}}),p.fn.extend({queue:function(a,c){var d=2;return typeof a!="string"&&(c=a,a="fx",d--),arguments.length<d?p.queue(this[0],a):c===b?this:this.each(function(){var b=p.queue(this,a,c);p._queueHooks(this,a),a==="fx"&&b[0]!=="inprogress"&&p.dequeue(this,a)})},dequeue:function(a){return this.each(function(){p.dequeue(this,a)})},delay:function(a,b){return a=p.fx?p.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){var d,e=1,f=p.Deferred(),g=this,h=this.length,i=function(){--e||f.resolveWith(g,[g])};typeof a!="string"&&(c=a,a=b),a=a||"fx";while(h--)d=p._data(g[h],a+"queueHooks"),d&&d.empty&&(e++,d.empty.add(i));return i(),f.promise(c)}});var L,M,N,O=/[\t\r\n]/g,P=/\r/g,Q=/^(?:button|input)$/i,R=/^(?:button|input|object|select|textarea)$/i,S=/^a(?:rea|)$/i,T=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,U=p.support.getSetAttribute;p.fn.extend({attr:function(a,b){return p.access(this,p.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){p.removeAttr(this,a)})},prop:function(a,b){return p.access(this,p.prop,a,b,arguments.length>1)},removeProp:function(a){return a=p.propFix[a]||a,this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,f,g,h;if(p.isFunction(a))return this.each(function(b){p(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(s);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{f=" "+e.className+" ";for(g=0,h=b.length;g<h;g++)f.indexOf(" "+b[g]+" ")<0&&(f+=b[g]+" ");e.className=p.trim(f)}}}return this},removeClass:function(a){var c,d,e,f,g,h,i;if(p.isFunction(a))return this.each(function(b){p(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(s);for(h=0,i=this.length;h<i;h++){e=this[h];if(e.nodeType===1&&e.className){d=(" "+e.className+" ").replace(O," ");for(f=0,g=c.length;f<g;f++)while(d.indexOf(" "+c[f]+" ")>=0)d=d.replace(" "+c[f]+" "," ");e.className=a?p.trim(d):""}}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";return p.isFunction(a)?this.each(function(c){p(this).toggleClass(a.call(this,c,this.className,b),b)}):this.each(function(){if(c==="string"){var e,f=0,g=p(this),h=b,i=a.split(s);while(e=i[f++])h=d?h:!g.hasClass(e),g[h?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&p._data(this,"__className__",this.className),this.className=this.className||a===!1?"":p._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(O," ").indexOf(b)>=0)return!0;return!1},val:function(a){var c,d,e,f=this[0];if(!arguments.length){if(f)return c=p.valHooks[f.type]||p.valHooks[f.nodeName.toLowerCase()],c&&"get"in c&&(d=c.get(f,"value"))!==b?d:(d=f.value,typeof d=="string"?d.replace(P,""):d==null?"":d);return}return e=p.isFunction(a),this.each(function(d){var f,g=p(this);if(this.nodeType!==1)return;e?f=a.call(this,d,g.val()):f=a,f==null?f="":typeof f=="number"?f+="":p.isArray(f)&&(f=p.map(f,function(a){return a==null?"":a+""})),c=p.valHooks[this.type]||p.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,f,"value")===b)this.value=f})}}),p.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,f=a.selectedIndex,g=[],h=a.options,i=a.type==="select-one";if(f<0)return null;c=i?f:0,d=i?f+1:h.length;for(;c<d;c++){e=h[c];if(e.selected&&(p.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!p.nodeName(e.parentNode,"optgroup"))){b=p(e).val();if(i)return b;g.push(b)}}return i&&!g.length&&h.length?p(h[f]).val():g},set:function(a,b){var c=p.makeArray(b);return p(a).find("option").each(function(){this.selected=p.inArray(p(this).val(),c)>=0}),c.length||(a.selectedIndex=-1),c}}},attrFn:{},attr:function(a,c,d,e){var f,g,h,i=a.nodeType;if(!a||i===3||i===8||i===2)return;if(e&&p.isFunction(p.fn[c]))return p(a)[c](d);if(typeof a.getAttribute=="undefined")return p.prop(a,c,d);h=i!==1||!p.isXMLDoc(a),h&&(c=c,g=p.attrHooks[c]||(T.test(c)?M:L));if(d!==b){if(d===null){p.removeAttr(a,c);return}return g&&"set"in g&&h&&(f=g.set(a,d,c))!==b?f:(a.setAttribute(c,d+""),d)}return g&&"get"in g&&h&&(f=g.get(a,c))!==null?f:(f=a.getAttribute(c),f===null?b:f)},removeAttr:function(a,b){var c,d,e,f,g=0;if(b&&a.nodeType===1){d=b.split(s);for(;g<d.length;g++)e=d[g],e&&(c=p.propFix[e]||e,f=T.test(e),f||p.attr(a,e,""),a.removeAttribute(U?e:c),f&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(Q.test(a.nodeName)&&a.parentNode)p.error("type property can't be changed");else if(!p.support.radioValue&&b==="radio"&&p.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}},value:{get:function(a,b){return L&&p.nodeName(a,"button")?L.get(a,b):b in a?a.value:null},set:function(a,b,c){if(L&&p.nodeName(a,"button"))return L.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,f,g,h=a.nodeType;if(!a||h===3||h===8||h===2)return;return g=h!==1||!p.isXMLDoc(a),g&&(c=p.propFix[c]||c,f=p.propHooks[c]),d!==b?f&&"set"in f&&(e=f.set(a,d,c))!==b?e:a[c]=d:f&&"get"in f&&(e=f.get(a,c))!==null?e:a[c]},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):R.test(a.nodeName)||S.test(a.nodeName)&&a.href?0:b}}}}),M={get:function(a,c){var d,e=p.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;return b===!1?p.removeAttr(a,c):(d=p.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase())),c}},U||(N={name:!0,id:!0,coords:!0},L=p.valHooks.button={get:function(a,c){var d;return d=a.getAttributeNode(c),d&&(N[c]?d.value!=="":d.specified)?d.value:b},set:function(a,b,c){var d=a.getAttributeNode(c);return d||(d=e.createAttribute(c),a.setAttributeNode(d)),d.value=b+""}},p.each(["width","height"],function(a,b){p.attrHooks[b]=p.extend(p.attrHooks[b],{set:function(a,c){if(c==="")return a.setAttribute(b,"auto"),c}})}),p.attrHooks.contenteditable={get:L.get,set:function(a,b,c){b===""&&(b="false"),L.set(a,b,c)}}),p.support.hrefNormalized||p.each(["href","src","width","height"],function(a,c){p.attrHooks[c]=p.extend(p.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),p.support.style||(p.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=b+""}}),p.support.optSelected||(p.propHooks.selected=p.extend(p.propHooks.selected,{get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}})),p.support.enctype||(p.propFix.enctype="encoding"),p.support.checkOn||p.each(["radio","checkbox"],function(){p.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),p.each(["radio","checkbox"],function(){p.valHooks[this]=p.extend(p.valHooks[this],{set:function(a,b){if(p.isArray(b))return a.checked=p.inArray(p(a).val(),b)>=0}})});var V=/^(?:textarea|input|select)$/i,W=/^([^\.]*|)(?:\.(.+)|)$/,X=/(?:^|\s)hover(\.\S+|)\b/,Y=/^key/,Z=/^(?:mouse|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=function(a){return p.event.special.hover?a:a.replace(X,"mouseenter$1 mouseleave$1")};p.event={add:function(a,c,d,e,f){var g,h,i,j,k,l,m,n,o,q,r;if(a.nodeType===3||a.nodeType===8||!c||!d||!(g=p._data(a)))return;d.handler&&(o=d,d=o.handler,f=o.selector),d.guid||(d.guid=p.guid++),i=g.events,i||(g.events=i={}),h=g.handle,h||(g.handle=h=function(a){return typeof p!="undefined"&&(!a||p.event.triggered!==a.type)?p.event.dispatch.apply(h.elem,arguments):b},h.elem=a),c=p.trim(_(c)).split(" ");for(j=0;j<c.length;j++){k=W.exec(c[j])||[],l=k[1],m=(k[2]||"").split(".").sort(),r=p.event.special[l]||{},l=(f?r.delegateType:r.bindType)||l,r=p.event.special[l]||{},n=p.extend({type:l,origType:k[1],data:e,handler:d,guid:d.guid,selector:f,needsContext:f&&p.expr.match.needsContext.test(f),namespace:m.join(".")},o),q=i[l];if(!q){q=i[l]=[],q.delegateCount=0;if(!r.setup||r.setup.call(a,e,m,h)===!1)a.addEventListener?a.addEventListener(l,h,!1):a.attachEvent&&a.attachEvent("on"+l,h)}r.add&&(r.add.call(a,n),n.handler.guid||(n.handler.guid=d.guid)),f?q.splice(q.delegateCount++,0,n):q.push(n),p.event.global[l]=!0}a=null},global:{},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,q,r=p.hasData(a)&&p._data(a);if(!r||!(m=r.events))return;b=p.trim(_(b||"")).split(" ");for(f=0;f<b.length;f++){g=W.exec(b[f])||[],h=i=g[1],j=g[2];if(!h){for(h in m)p.event.remove(a,h+b[f],c,d,!0);continue}n=p.event.special[h]||{},h=(d?n.delegateType:n.bindType)||h,o=m[h]||[],k=o.length,j=j?new RegExp("(^|\\.)"+j.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(l=0;l<o.length;l++)q=o[l],(e||i===q.origType)&&(!c||c.guid===q.guid)&&(!j||j.test(q.namespace))&&(!d||d===q.selector||d==="**"&&q.selector)&&(o.splice(l--,1),q.selector&&o.delegateCount--,n.remove&&n.remove.call(a,q));o.length===0&&k!==o.length&&((!n.teardown||n.teardown.call(a,j,r.handle)===!1)&&p.removeEvent(a,h,r.handle),delete m[h])}p.isEmptyObject(m)&&(delete r.handle,p.removeData(a,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,f,g){if(!f||f.nodeType!==3&&f.nodeType!==8){var h,i,j,k,l,m,n,o,q,r,s=c.type||c,t=[];if($.test(s+p.event.triggered))return;s.indexOf("!")>=0&&(s=s.slice(0,-1),i=!0),s.indexOf(".")>=0&&(t=s.split("."),s=t.shift(),t.sort());if((!f||p.event.customEvent[s])&&!p.event.global[s])return;c=typeof c=="object"?c[p.expando]?c:new p.Event(s,c):new p.Event(s),c.type=s,c.isTrigger=!0,c.exclusive=i,c.namespace=t.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+t.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,m=s.indexOf(":")<0?"on"+s:"";if(!f){h=p.cache;for(j in h)h[j].events&&h[j].events[s]&&p.event.trigger(c,d,h[j].handle.elem,!0);return}c.result=b,c.target||(c.target=f),d=d!=null?p.makeArray(d):[],d.unshift(c),n=p.event.special[s]||{};if(n.trigger&&n.trigger.apply(f,d)===!1)return;q=[[f,n.bindType||s]];if(!g&&!n.noBubble&&!p.isWindow(f)){r=n.delegateType||s,k=$.test(r+s)?f:f.parentNode;for(l=f;k;k=k.parentNode)q.push([k,r]),l=k;l===(f.ownerDocument||e)&&q.push([l.defaultView||l.parentWindow||a,r])}for(j=0;j<q.length&&!c.isPropagationStopped();j++)k=q[j][0],c.type=q[j][1],o=(p._data(k,"events")||{})[c.type]&&p._data(k,"handle"),o&&o.apply(k,d),o=m&&k[m],o&&p.acceptData(k)&&o.apply&&o.apply(k,d)===!1&&c.preventDefault();return c.type=s,!g&&!c.isDefaultPrevented()&&(!n._default||n._default.apply(f.ownerDocument,d)===!1)&&(s!=="click"||!p.nodeName(f,"a"))&&p.acceptData(f)&&m&&f[s]&&(s!=="focus"&&s!=="blur"||c.target.offsetWidth!==0)&&!p.isWindow(f)&&(l=f[m],l&&(f[m]=null),p.event.triggered=s,f[s](),p.event.triggered=b,l&&(f[m]=l)),c.result}return},dispatch:function(c){c=p.event.fix(c||a.event);var d,e,f,g,h,i,j,l,m,n,o=(p._data(this,"events")||{})[c.type]||[],q=o.delegateCount,r=k.call(arguments),s=!c.exclusive&&!c.namespace,t=p.event.special[c.type]||{},u=[];r[0]=c,c.delegateTarget=this;if(t.preDispatch&&t.preDispatch.call(this,c)===!1)return;if(q&&(!c.button||c.type!=="click"))for(f=c.target;f!=this;f=f.parentNode||this)if(f.disabled!==!0||c.type!=="click"){h={},j=[];for(d=0;d<q;d++)l=o[d],m=l.selector,h[m]===b&&(h[m]=l.needsContext?p(m,this).index(f)>=0:p.find(m,this,null,[f]).length),h[m]&&j.push(l);j.length&&u.push({elem:f,matches:j})}o.length>q&&u.push({elem:this,matches:o.slice(q)});for(d=0;d<u.length&&!c.isPropagationStopped();d++){i=u[d],c.currentTarget=i.elem;for(e=0;e<i.matches.length&&!c.isImmediatePropagationStopped();e++){l=i.matches[e];if(s||!c.namespace&&!l.namespace||c.namespace_re&&c.namespace_re.test(l.namespace))c.data=l.data,c.handleObj=l,g=((p.event.special[l.origType]||{}).handle||l.handler).apply(i.elem,r),g!==b&&(c.result=g,g===!1&&(c.preventDefault(),c.stopPropagation()))}}return t.postDispatch&&t.postDispatch.call(this,c),c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,c){var d,f,g,h=c.button,i=c.fromElement;return a.pageX==null&&c.clientX!=null&&(d=a.target.ownerDocument||e,f=d.documentElement,g=d.body,a.pageX=c.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=c.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?c.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0),a}},fix:function(a){if(a[p.expando])return a;var b,c,d=a,f=p.event.fixHooks[a.type]||{},g=f.props?this.props.concat(f.props):this.props;a=p.Event(d);for(b=g.length;b;)c=g[--b],a[c]=d[c];return a.target||(a.target=d.srcElement||e),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,f.filter?f.filter(a,d):a},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){p.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=p.extend(new p.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?p.event.trigger(e,null,b):p.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},p.event.handle=p.event.dispatch,p.removeEvent=e.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]=="undefined"&&(a[d]=null),a.detachEvent(d,c))},p.Event=function(a,b){if(this instanceof p.Event)a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?bb:ba):this.type=a,b&&p.extend(this,b),this.timeStamp=a&&a.timeStamp||p.now(),this[p.expando]=!0;else return new p.Event(a,b)},p.Event.prototype={preventDefault:function(){this.isDefaultPrevented=bb;var a=this.originalEvent;if(!a)return;a.preventDefault?a.preventDefault():a.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=bb;var a=this.originalEvent;if(!a)return;a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()},isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba},p.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){p.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj,g=f.selector;if(!e||e!==d&&!p.contains(d,e))a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b;return c}}}),p.support.submitBubbles||(p.event.special.submit={setup:function(){if(p.nodeName(this,"form"))return!1;p.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=p.nodeName(c,"input")||p.nodeName(c,"button")?c.form:b;d&&!p._data(d,"_submit_attached")&&(p.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),p._data(d,"_submit_attached",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&p.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(p.nodeName(this,"form"))return!1;p.event.remove(this,"._submit")}}),p.support.changeBubbles||(p.event.special.change={setup:function(){if(V.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")p.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),p.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),p.event.simulate("change",this,a,!0)});return!1}p.event.add(this,"beforeactivate._change",function(a){var b=a.target;V.test(b.nodeName)&&!p._data(b,"_change_attached")&&(p.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&p.event.simulate("change",this.parentNode,a,!0)}),p._data(b,"_change_attached",!0))})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){return p.event.remove(this,"._change"),!V.test(this.nodeName)}}),p.support.focusinBubbles||p.each({focus:"focusin",blur:"focusout"},function(a,b){var c=0,d=function(a){p.event.simulate(b,a.target,p.event.fix(a),!0)};p.event.special[b]={setup:function(){c++===0&&e.addEventListener(a,d,!0)},teardown:function(){--c===0&&e.removeEventListener(a,d,!0)}}}),p.fn.extend({on:function(a,c,d,e,f){var g,h;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(h in a)this.on(h,c,d,a[h],f);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=ba;else if(!e)return this;return f===1&&(g=e,e=function(a){return p().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=p.guid++)),this.each(function(){p.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){var e,f;if(a&&a.preventDefault&&a.handleObj)return e=a.handleObj,p(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler),this;if(typeof a=="object"){for(f in a)this.off(f,c,a[f]);return this}if(c===!1||typeof c=="function")d=c,c=b;return d===!1&&(d=ba),this.each(function(){p.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){return p(this.context).on(a,this.selector,b,c),this},die:function(a,b){return p(this.context).off(a,this.selector||"**",b),this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length===1?this.off(a,"**"):this.off(b,a||"**",c)},trigger:function(a,b){return this.each(function(){p.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return p.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||p.guid++,d=0,e=function(c){var e=(p._data(this,"lastToggle"+a.guid)||0)%d;return p._data(this,"lastToggle"+a.guid,e+1),c.preventDefault(),b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){p.fn[b]=function(a,c){return c==null&&(c=a,a=null),arguments.length>0?this.on(b,null,a,c):this.trigger(b)},Y.test(b)&&(p.event.fixHooks[b]=p.event.keyHooks),Z.test(b)&&(p.event.fixHooks[b]=p.event.mouseHooks)}),function(a,b){function bc(a,b,c,d){c=c||[],b=b||r;var e,f,i,j,k=b.nodeType;if(!a||typeof a!="string")return c;if(k!==1&&k!==9)return[];i=g(b);if(!i&&!d)if(e=P.exec(a))if(j=e[1]){if(k===9){f=b.getElementById(j);if(!f||!f.parentNode)return c;if(f.id===j)return c.push(f),c}else if(b.ownerDocument&&(f=b.ownerDocument.getElementById(j))&&h(b,f)&&f.id===j)return c.push(f),c}else{if(e[2])return w.apply(c,x.call(b.getElementsByTagName(a),0)),c;if((j=e[3])&&_&&b.getElementsByClassName)return w.apply(c,x.call(b.getElementsByClassName(j),0)),c}return bp(a.replace(L,"$1"),b,c,d,i)}function bd(a){return function(b){var c=b.nodeName.toLowerCase();return c==="input"&&b.type===a}}function be(a){return function(b){var c=b.nodeName.toLowerCase();return(c==="input"||c==="button")&&b.type===a}}function bf(a){return z(function(b){return b=+b,z(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function bg(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}function bh(a,b){var c,d,f,g,h,i,j,k=C[o][a];if(k)return b?0:k.slice(0);h=a,i=[],j=e.preFilter;while(h){if(!c||(d=M.exec(h)))d&&(h=h.slice(d[0].length)),i.push(f=[]);c=!1;if(d=N.exec(h))f.push(c=new q(d.shift())),h=h.slice(c.length),c.type=d[0].replace(L," ");for(g in e.filter)(d=W[g].exec(h))&&(!j[g]||(d=j[g](d,r,!0)))&&(f.push(c=new q(d.shift())),h=h.slice(c.length),c.type=g,c.matches=d);if(!c)break}return b?h.length:h?bc.error(a):C(a,i).slice(0)}function bi(a,b,d){var e=b.dir,f=d&&b.dir==="parentNode",g=u++;return b.first?function(b,c,d){while(b=b[e])if(f||b.nodeType===1)return a(b,c,d)}:function(b,d,h){if(!h){var i,j=t+" "+g+" ",k=j+c;while(b=b[e])if(f||b.nodeType===1){if((i=b[o])===k)return b.sizset;if(typeof i=="string"&&i.indexOf(j)===0){if(b.sizset)return b}else{b[o]=k;if(a(b,d,h))return b.sizset=!0,b;b.sizset=!1}}}else while(b=b[e])if(f||b.nodeType===1)if(a(b,d,h))return b}}function bj(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function bk(a,b,c,d,e){var f,g=[],h=0,i=a.length,j=b!=null;for(;h<i;h++)if(f=a[h])if(!c||c(f,d,e))g.push(f),j&&b.push(h);return g}function bl(a,b,c,d,e,f){return d&&!d[o]&&(d=bl(d)),e&&!e[o]&&(e=bl(e,f)),z(function(f,g,h,i){if(f&&e)return;var j,k,l,m=[],n=[],o=g.length,p=f||bo(b||"*",h.nodeType?[h]:h,[],f),q=a&&(f||!b)?bk(p,m,a,h,i):p,r=c?e||(f?a:o||d)?[]:g:q;c&&c(q,r,h,i);if(d){l=bk(r,n),d(l,[],h,i),j=l.length;while(j--)if(k=l[j])r[n[j]]=!(q[n[j]]=k)}if(f){j=a&&r.length;while(j--)if(k=r[j])f[m[j]]=!(g[m[j]]=k)}else r=bk(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):w.apply(g,r)})}function bm(a){var b,c,d,f=a.length,g=e.relative[a[0].type],h=g||e.relative[" "],i=g?1:0,j=bi(function(a){return a===b},h,!0),k=bi(function(a){return y.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==l)||((b=c).nodeType?j(a,c,d):k(a,c,d))}];for(;i<f;i++)if(c=e.relative[a[i].type])m=[bi(bj(m),c)];else{c=e.filter[a[i].type].apply(null,a[i].matches);if(c[o]){d=++i;for(;d<f;d++)if(e.relative[a[d].type])break;return bl(i>1&&bj(m),i>1&&a.slice(0,i-1).join("").replace(L,"$1"),c,i<d&&bm(a.slice(i,d)),d<f&&bm(a=a.slice(d)),d<f&&a.join(""))}m.push(c)}return bj(m)}function bn(a,b){var d=b.length>0,f=a.length>0,g=function(h,i,j,k,m){var n,o,p,q=[],s=0,u="0",x=h&&[],y=m!=null,z=l,A=h||f&&e.find.TAG("*",m&&i.parentNode||i),B=t+=z==null?1:Math.E;y&&(l=i!==r&&i,c=g.el);for(;(n=A[u])!=null;u++){if(f&&n){for(o=0;p=a[o];o++)if(p(n,i,j)){k.push(n);break}y&&(t=B,c=++g.el)}d&&((n=!p&&n)&&s--,h&&x.push(n))}s+=u;if(d&&u!==s){for(o=0;p=b[o];o++)p(x,q,i,j);if(h){if(s>0)while(u--)!x[u]&&!q[u]&&(q[u]=v.call(k));q=bk(q)}w.apply(k,q),y&&!h&&q.length>0&&s+b.length>1&&bc.uniqueSort(k)}return y&&(t=B,l=z),x};return g.el=0,d?z(g):g}function bo(a,b,c,d){var e=0,f=b.length;for(;e<f;e++)bc(a,b[e],c,d);return c}function bp(a,b,c,d,f){var g,h,j,k,l,m=bh(a),n=m.length;if(!d&&m.length===1){h=m[0]=m[0].slice(0);if(h.length>2&&(j=h[0]).type==="ID"&&b.nodeType===9&&!f&&e.relative[h[1].type]){b=e.find.ID(j.matches[0].replace(V,""),b,f)[0];if(!b)return c;a=a.slice(h.shift().length)}for(g=W.POS.test(a)?-1:h.length-1;g>=0;g--){j=h[g];if(e.relative[k=j.type])break;if(l=e.find[k])if(d=l(j.matches[0].replace(V,""),R.test(h[0].type)&&b.parentNode||b,f)){h.splice(g,1),a=d.length&&h.join("");if(!a)return w.apply(c,x.call(d,0)),c;break}}}return i(a,m)(d,b,f,c,R.test(a)),c}function bq(){}var c,d,e,f,g,h,i,j,k,l,m=!0,n="undefined",o=("sizcache"+Math.random()).replace(".",""),q=String,r=a.document,s=r.documentElement,t=0,u=0,v=[].pop,w=[].push,x=[].slice,y=[].indexOf||function(a){var b=0,c=this.length;for(;b<c;b++)if(this[b]===a)return b;return-1},z=function(a,b){return a[o]=b==null||b,a},A=function(){var a={},b=[];return z(function(c,d){return b.push(c)>e.cacheLength&&delete a[b.shift()],a[c]=d},a)},B=A(),C=A(),D=A(),E="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",G=F.replace("w","w#"),H="([*^$|!~]?=)",I="\\["+E+"*("+F+")"+E+"*(?:"+H+E+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+G+")|)|)"+E+"*\\]",J=":("+F+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+I+")|[^:]|\\\\.)*|.*))\\)|)",K=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+E+"*((?:-\\d)?\\d*)"+E+"*\\)|)(?=[^-]|$)",L=new RegExp("^"+E+"+|((?:^|[^\\\\])(?:\\\\.)*)"+E+"+$","g"),M=new RegExp("^"+E+"*,"+E+"*"),N=new RegExp("^"+E+"*([\\x20\\t\\r\\n\\f>+~])"+E+"*"),O=new RegExp(J),P=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,Q=/^:not/,R=/[\x20\t\r\n\f]*[+~]/,S=/:not\($/,T=/h\d/i,U=/input|select|textarea|button/i,V=/\\(?!\\)/g,W={ID:new RegExp("^#("+F+")"),CLASS:new RegExp("^\\.("+F+")"),NAME:new RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:new RegExp("^("+F.replace("w","w*")+")"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+J),POS:new RegExp(K,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+E+"*(even|odd|(([+-]|)(\\d*)n|)"+E+"*(?:([+-]|)"+E+"*(\\d+)|))"+E+"*\\)|)","i"),needsContext:new RegExp("^"+E+"*[>+~]|"+K,"i")},X=function(a){var b=r.createElement("div");try{return a(b)}catch(c){return!1}finally{b=null}},Y=X(function(a){return a.appendChild(r.createComment("")),!a.getElementsByTagName("*").length}),Z=X(function(a){return a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!==n&&a.firstChild.getAttribute("href")==="#"}),$=X(function(a){a.innerHTML="<select></select>";var b=typeof a.lastChild.getAttribute("multiple");return b!=="boolean"&&b!=="string"}),_=X(function(a){return a.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!a.getElementsByClassName||!a.getElementsByClassName("e").length?!1:(a.lastChild.className="e",a.getElementsByClassName("e").length===2)}),ba=X(function(a){a.id=o+0,a.innerHTML="<a name='"+o+"'></a><div name='"+o+"'></div>",s.insertBefore(a,s.firstChild);var b=r.getElementsByName&&r.getElementsByName(o).length===2+r.getElementsByName(o+0).length;return d=!r.getElementById(o),s.removeChild(a),b});try{x.call(s.childNodes,0)[0].nodeType}catch(bb){x=function(a){var b,c=[];for(;b=this[a];a++)c.push(b);return c}}bc.matches=function(a,b){return bc(a,null,null,b)},bc.matchesSelector=function(a,b){return bc(b,null,null,[a]).length>0},f=bc.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(e===1||e===9||e===11){if(typeof a.textContent=="string")return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=f(a)}else if(e===3||e===4)return a.nodeValue}else for(;b=a[d];d++)c+=f(b);return c},g=bc.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?b.nodeName!=="HTML":!1},h=bc.contains=s.contains?function(a,b){var c=a.nodeType===9?a.documentElement:a,d=b&&b.parentNode;return a===d||!!(d&&d.nodeType===1&&c.contains&&c.contains(d))}:s.compareDocumentPosition?function(a,b){return b&&!!(a.compareDocumentPosition(b)&16)}:function(a,b){while(b=b.parentNode)if(b===a)return!0;return!1},bc.attr=function(a,b){var c,d=g(a);return d||(b=b.toLowerCase()),(c=e.attrHandle[b])?c(a):d||$?a.getAttribute(b):(c=a.getAttributeNode(b),c?typeof a[b]=="boolean"?a[b]?b:null:c.specified?c.value:null:null)},e=bc.selectors={cacheLength:50,createPseudo:z,match:W,attrHandle:Z?{}:{href:function(a){return a.getAttribute("href",2)},type:function(a){return a.getAttribute("type")}},find:{ID:d?function(a,b,c){if(typeof b.getElementById!==n&&!c){var d=b.getElementById(a);return d&&d.parentNode?[d]:[]}}:function(a,c,d){if(typeof c.getElementById!==n&&!d){var e=c.getElementById(a);return e?e.id===a||typeof e.getAttributeNode!==n&&e.getAttributeNode("id").value===a?[e]:b:[]}},TAG:Y?function(a,b){if(typeof b.getElementsByTagName!==n)return b.getElementsByTagName(a)}:function(a,b){var c=b.getElementsByTagName(a);if(a==="*"){var d,e=[],f=0;for(;d=c[f];f++)d.nodeType===1&&e.push(d);return e}return c},NAME:ba&&function(a,b){if(typeof b.getElementsByName!==n)return b.getElementsByName(name)},CLASS:_&&function(a,b,c){if(typeof b.getElementsByClassName!==n&&!c)return b.getElementsByClassName(a)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(V,""),a[3]=(a[4]||a[5]||"").replace(V,""),a[2]==="~="&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),a[1]==="nth"?(a[2]||bc.error(a[0]),a[3]=+(a[3]?a[4]+(a[5]||1):2*(a[2]==="even"||a[2]==="odd")),a[4]=+(a[6]+a[7]||a[2]==="odd")):a[2]&&bc.error(a[0]),a},PSEUDO:function(a){var b,c;if(W.CHILD.test(a[0]))return null;if(a[3])a[2]=a[3];else if(b=a[4])O.test(b)&&(c=bh(b,!0))&&(c=b.indexOf(")",b.length-c)-b.length)&&(b=b.slice(0,c),a[0]=a[0].slice(0,c)),a[2]=b;return a.slice(0,3)}},filter:{ID:d?function(a){return a=a.replace(V,""),function(b){return b.getAttribute("id")===a}}:function(a){return a=a.replace(V,""),function(b){var c=typeof b.getAttributeNode!==n&&b.getAttributeNode("id");return c&&c.value===a}},TAG:function(a){return a==="*"?function(){return!0}:(a=a.replace(V,"").toLowerCase(),function(b){return b.nodeName&&b.nodeName.toLowerCase()===a})},CLASS:function(a){var b=B[o][a];return b||(b=B(a,new RegExp("(^|"+E+")"+a+"("+E+"|$)"))),function(a){return b.test(a.className||typeof a.getAttribute!==n&&a.getAttribute("class")||"")}},ATTR:function(a,b,c){return function(d,e){var f=bc.attr(d,a);return f==null?b==="!=":b?(f+="",b==="="?f===c:b==="!="?f!==c:b==="^="?c&&f.indexOf(c)===0:b==="*="?c&&f.indexOf(c)>-1:b==="$="?c&&f.substr(f.length-c.length)===c:b==="~="?(" "+f+" ").indexOf(c)>-1:b==="|="?f===c||f.substr(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d){return a==="nth"?function(a){var b,e,f=a.parentNode;if(c===1&&d===0)return!0;if(f){e=0;for(b=f.firstChild;b;b=b.nextSibling)if(b.nodeType===1){e++;if(a===b)break}}return e-=d,e===c||e%c===0&&e/c>=0}:function(b){var c=b;switch(a){case"only":case"first":while(c=c.previousSibling)if(c.nodeType===1)return!1;if(a==="first")return!0;c=b;case"last":while(c=c.nextSibling)if(c.nodeType===1)return!1;return!0}}},PSEUDO:function(a,b){var c,d=e.pseudos[a]||e.setFilters[a.toLowerCase()]||bc.error("unsupported pseudo: "+a);return d[o]?d(b):d.length>1?(c=[a,a,"",b],e.setFilters.hasOwnProperty(a.toLowerCase())?z(function(a,c){var e,f=d(a,b),g=f.length;while(g--)e=y.call(a,f[g]),a[e]=!(c[e]=f[g])}):function(a){return d(a,0,c)}):d}},pseudos:{not:z(function(a){var b=[],c=[],d=i(a.replace(L,"$1"));return d[o]?z(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)if(f=g[h])a[h]=!(b[h]=f)}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:z(function(a){return function(b){return bc(a,b).length>0}}),contains:z(function(a){return function(b){return(b.textContent||b.innerText||f(b)).indexOf(a)>-1}}),enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&!!a.checked||b==="option"&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},parent:function(a){return!e.pseudos.empty(a)},empty:function(a){var b;a=a.firstChild;while(a){if(a.nodeName>"@"||(b=a.nodeType)===3||b===4)return!1;a=a.nextSibling}return!0},header:function(a){return T.test(a.nodeName)},text:function(a){var b,c;return a.nodeName.toLowerCase()==="input"&&(b=a.type)==="text"&&((c=a.getAttribute("type"))==null||c.toLowerCase()===b)},radio:bd("radio"),checkbox:bd("checkbox"),file:bd("file"),password:bd("password"),image:bd("image"),submit:be("submit"),reset:be("reset"),button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&a.type==="button"||b==="button"},input:function(a){return U.test(a.nodeName)},focus:function(a){var b=a.ownerDocument;return a===b.activeElement&&(!b.hasFocus||b.hasFocus())&&(!!a.type||!!a.href)},active:function(a){return a===a.ownerDocument.activeElement},first:bf(function(a,b,c){return[0]}),last:bf(function(a,b,c){return[b-1]}),eq:bf(function(a,b,c){return[c<0?c+b:c]}),even:bf(function(a,b,c){for(var d=0;d<b;d+=2)a.push(d);return a}),odd:bf(function(a,b,c){for(var d=1;d<b;d+=2)a.push(d);return a}),lt:bf(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:bf(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},j=s.compareDocumentPosition?function(a,b){return a===b?(k=!0,0):(!a.compareDocumentPosition||!b.compareDocumentPosition?a.compareDocumentPosition:a.compareDocumentPosition(b)&4)?-1:1}:function(a,b){if(a===b)return k=!0,0;if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,h=b.parentNode,i=g;if(g===h)return bg(a,b);if(!g)return-1;if(!h)return 1;while(i)e.unshift(i),i=i.parentNode;i=h;while(i)f.unshift(i),i=i.parentNode;c=e.length,d=f.length;for(var j=0;j<c&&j<d;j++)if(e[j]!==f[j])return bg(e[j],f[j]);return j===c?bg(a,f[j],-1):bg(e[j],b,1)},[0,0].sort(j),m=!k,bc.uniqueSort=function(a){var b,c=1;k=m,a.sort(j);if(k)for(;b=a[c];c++)b===a[c-1]&&a.splice(c--,1);return a},bc.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},i=bc.compile=function(a,b){var c,d=[],e=[],f=D[o][a];if(!f){b||(b=bh(a)),c=b.length;while(c--)f=bm(b[c]),f[o]?d.push(f):e.push(f);f=D(a,bn(e,d))}return f},r.querySelectorAll&&function(){var a,b=bp,c=/'|\\/g,d=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,e=[":focus"],f=[":active",":focus"],h=s.matchesSelector||s.mozMatchesSelector||s.webkitMatchesSelector||s.oMatchesSelector||s.msMatchesSelector;X(function(a){a.innerHTML="<select><option selected=''></option></select>",a.querySelectorAll("[selected]").length||e.push("\\["+E+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),a.querySelectorAll(":checked").length||e.push(":checked")}),X(function(a){a.innerHTML="<p test=''></p>",a.querySelectorAll("[test^='']").length&&e.push("[*^$]="+E+"*(?:\"\"|'')"),a.innerHTML="<input type='hidden'/>",a.querySelectorAll(":enabled").length||e.push(":enabled",":disabled")}),e=new RegExp(e.join("|")),bp=function(a,d,f,g,h){if(!g&&!h&&(!e||!e.test(a))){var i,j,k=!0,l=o,m=d,n=d.nodeType===9&&a;if(d.nodeType===1&&d.nodeName.toLowerCase()!=="object"){i=bh(a),(k=d.getAttribute("id"))?l=k.replace(c,"\\$&"):d.setAttribute("id",l),l="[id='"+l+"'] ",j=i.length;while(j--)i[j]=l+i[j].join("");m=R.test(a)&&d.parentNode||d,n=i.join(",")}if(n)try{return w.apply(f,x.call(m.querySelectorAll(n),0)),f}catch(p){}finally{k||d.removeAttribute("id")}}return b(a,d,f,g,h)},h&&(X(function(b){a=h.call(b,"div");try{h.call(b,"[test!='']:sizzle"),f.push("!=",J)}catch(c){}}),f=new RegExp(f.join("|")),bc.matchesSelector=function(b,c){c=c.replace(d,"='$1']");if(!g(b)&&!f.test(c)&&(!e||!e.test(c)))try{var i=h.call(b,c);if(i||a||b.document&&b.document.nodeType!==11)return i}catch(j){}return bc(c,null,null,[b]).length>0})}(),e.pseudos.nth=e.pseudos.eq,e.filters=bq.prototype=e.pseudos,e.setFilters=new bq,bc.attr=p.attr,p.find=bc,p.expr=bc.selectors,p.expr[":"]=p.expr.pseudos,p.unique=bc.uniqueSort,p.text=bc.getText,p.isXMLDoc=bc.isXML,p.contains=bc.contains}(a);var bc=/Until$/,bd=/^(?:parents|prev(?:Until|All))/,be=/^.[^:#\[\.,]*$/,bf=p.expr.match.needsContext,bg={children:!0,contents:!0,next:!0,prev:!0};p.fn.extend({find:function(a){var b,c,d,e,f,g,h=this;if(typeof a!="string")return p(a).filter(function(){for(b=0,c=h.length;b<c;b++)if(p.contains(h[b],this))return!0});g=this.pushStack("","find",a);for(b=0,c=this.length;b<c;b++){d=g.length,p.find(a,this[b],g);if(b>0)for(e=d;e<g.length;e++)for(f=0;f<d;f++)if(g[f]===g[e]){g.splice(e--,1);break}}return g},has:function(a){var b,c=p(a,this),d=c.length;return this.filter(function(){for(b=0;b<d;b++)if(p.contains(this,c[b]))return!0})},not:function(a){return this.pushStack(bj(this,a,!1),"not",a)},filter:function(a){return this.pushStack(bj(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?bf.test(a)?p(a,this.context).index(this[0])>=0:p.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c,d=0,e=this.length,f=[],g=bf.test(a)||typeof a!="string"?p(a,b||this.context):0;for(;d<e;d++){c=this[d];while(c&&c.ownerDocument&&c!==b&&c.nodeType!==11){if(g?g.index(c)>-1:p.find.matchesSelector(c,a)){f.push(c);break}c=c.parentNode}}return f=f.length>1?p.unique(f):f,this.pushStack(f,"closest",a)},index:function(a){return a?typeof a=="string"?p.inArray(this[0],p(a)):p.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(a,b){var c=typeof a=="string"?p(a,b):p.makeArray(a&&a.nodeType?[a]:a),d=p.merge(this.get(),c);return this.pushStack(bh(c[0])||bh(d[0])?d:p.unique(d))},addBack:function(a){return this.add(a==null?this.prevObject:this.prevObject.filter(a))}}),p.fn.andSelf=p.fn.addBack,p.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return p.dir(a,"parentNode")},parentsUntil:function(a,b,c){return p.dir(a,"parentNode",c)},next:function(a){return bi(a,"nextSibling")},prev:function(a){return bi(a,"previousSibling")},nextAll:function(a){return p.dir(a,"nextSibling")},prevAll:function(a){return p.dir(a,"previousSibling")},nextUntil:function(a,b,c){return p.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return p.dir(a,"previousSibling",c)},siblings:function(a){return p.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return p.sibling(a.firstChild)},contents:function(a){return p.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:p.merge([],a.childNodes)}},function(a,b){p.fn[a]=function(c,d){var e=p.map(this,b,c);return bc.test(a)||(d=c),d&&typeof d=="string"&&(e=p.filter(d,e)),e=this.length>1&&!bg[a]?p.unique(e):e,this.length>1&&bd.test(a)&&(e=e.reverse()),this.pushStack(e,a,k.call(arguments).join(","))}}),p.extend({filter:function(a,b,c){return c&&(a=":not("+a+")"),b.length===1?p.find.matchesSelector(b[0],a)?[b[0]]:[]:p.find.matches(a,b)},dir:function(a,c,d){var e=[],f=a[c];while(f&&f.nodeType!==9&&(d===b||f.nodeType!==1||!p(f).is(d)))f.nodeType===1&&e.push(f),f=f[c];return e},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var bl="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",bm=/ jQuery\d+="(?:null|\d+)"/g,bn=/^\s+/,bo=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bp=/<([\w:]+)/,bq=/<tbody/i,br=/<|&#?\w+;/,bs=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,bu=new RegExp("<(?:"+bl+")[\\s/>]","i"),bv=/^(?:checkbox|radio)$/,bw=/checked\s*(?:[^=]|=\s*.checked.)/i,bx=/\/(java|ecma)script/i,by=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,bz={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bA=bk(e),bB=bA.appendChild(e.createElement("div"));bz.optgroup=bz.option,bz.tbody=bz.tfoot=bz.colgroup=bz.caption=bz.thead,bz.th=bz.td,p.support.htmlSerialize||(bz._default=[1,"X<div>","</div>"]),p.fn.extend({text:function(a){return p.access(this,function(a){return a===b?p.text(this):this.empty().append((this[0]&&this[0].ownerDocument||e).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(p.isFunction(a))return this.each(function(b){p(this).wrapAll(a.call(this,b))});if(this[0]){var b=p(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return p.isFunction(a)?this.each(function(b){p(this).wrapInner(a.call(this,b))}):this.each(function(){var b=p(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=p.isFunction(a);return this.each(function(c){p(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){p.nodeName(this,"body")||p(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(a,this.firstChild)})},before:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(a,this),"before",this.selector)}},after:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(this,a),"after",this.selector)}},remove:function(a,b){var c,d=0;for(;(c=this[d])!=null;d++)if(!a||p.filter(a,[c]).length)!b&&c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),p.cleanData([c])),c.parentNode&&c.parentNode.removeChild(c);return this},empty:function(){var a,b=0;for(;(a=this[b])!=null;b++){a.nodeType===1&&p.cleanData(a.getElementsByTagName("*"));while(a.firstChild)a.removeChild(a.firstChild)}return this},clone:function(a,b){return a=a==null?!1:a,b=b==null?a:b,this.map(function(){return p.clone(this,a,b)})},html:function(a){return p.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(bm,""):b;if(typeof a=="string"&&!bs.test(a)&&(p.support.htmlSerialize||!bu.test(a))&&(p.support.leadingWhitespace||!bn.test(a))&&!bz[(bp.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(bo,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(f){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){return bh(this[0])?this.length?this.pushStack(p(p.isFunction(a)?a():a),"replaceWith",a):this:p.isFunction(a)?this.each(function(b){var c=p(this),d=c.html();c.replaceWith(a.call(this,b,d))}):(typeof a!="string"&&(a=p(a).detach()),this.each(function(){var b=this.nextSibling,c=this.parentNode;p(this).remove(),b?p(b).before(a):p(c).append(a)}))},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){a=[].concat.apply([],a);var e,f,g,h,i=0,j=a[0],k=[],l=this.length;if(!p.support.checkClone&&l>1&&typeof j=="string"&&bw.test(j))return this.each(function(){p(this).domManip(a,c,d)});if(p.isFunction(j))return this.each(function(e){var f=p(this);a[0]=j.call(this,e,c?f.html():b),f.domManip(a,c,d)});if(this[0]){e=p.buildFragment(a,this,k),g=e.fragment,f=g.firstChild,g.childNodes.length===1&&(g=f);if(f){c=c&&p.nodeName(f,"tr");for(h=e.cacheable||l-1;i<l;i++)d.call(c&&p.nodeName(this[i],"table")?bC(this[i],"tbody"):this[i],i===h?g:p.clone(g,!0,!0))}g=f=null,k.length&&p.each(k,function(a,b){b.src?p.ajax?p.ajax({url:b.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):p.error("no ajax"):p.globalEval((b.text||b.textContent||b.innerHTML||"").replace(by,"")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),p.buildFragment=function(a,c,d){var f,g,h,i=a[0];return c=c||e,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,a.length===1&&typeof i=="string"&&i.length<512&&c===e&&i.charAt(0)==="<"&&!bt.test(i)&&(p.support.checkClone||!bw.test(i))&&(p.support.html5Clone||!bu.test(i))&&(g=!0,f=p.fragments[i],h=f!==b),f||(f=c.createDocumentFragment(),p.clean(a,c,f,d),g&&(p.fragments[i]=h&&f)),{fragment:f,cacheable:g}},p.fragments={},p.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){p.fn[a]=function(c){var d,e=0,f=[],g=p(c),h=g.length,i=this.length===1&&this[0].parentNode;if((i==null||i&&i.nodeType===11&&i.childNodes.length===1)&&h===1)return g[b](this[0]),this;for(;e<h;e++)d=(e>0?this.clone(!0):this).get(),p(g[e])[b](d),f=f.concat(d);return this.pushStack(f,a,g.selector)}}),p.extend({clone:function(a,b,c){var d,e,f,g;p.support.html5Clone||p.isXMLDoc(a)||!bu.test("<"+a.nodeName+">")?g=a.cloneNode(!0):(bB.innerHTML=a.outerHTML,bB.removeChild(g=bB.firstChild));if((!p.support.noCloneEvent||!p.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!p.isXMLDoc(a)){bE(a,g),d=bF(a),e=bF(g);for(f=0;d[f];++f)e[f]&&bE(d[f],e[f])}if(b){bD(a,g);if(c){d=bF(a),e=bF(g);for(f=0;d[f];++f)bD(d[f],e[f])}}return d=e=null,g},clean:function(a,b,c,d){var f,g,h,i,j,k,l,m,n,o,q,r,s=b===e&&bA,t=[];if(!b||typeof b.createDocumentFragment=="undefined")b=e;for(f=0;(h=a[f])!=null;f++){typeof h=="number"&&(h+="");if(!h)continue;if(typeof h=="string")if(!br.test(h))h=b.createTextNode(h);else{s=s||bk(b),l=b.createElement("div"),s.appendChild(l),h=h.replace(bo,"<$1></$2>"),i=(bp.exec(h)||["",""])[1].toLowerCase(),j=bz[i]||bz._default,k=j[0],l.innerHTML=j[1]+h+j[2];while(k--)l=l.lastChild;if(!p.support.tbody){m=bq.test(h),n=i==="table"&&!m?l.firstChild&&l.firstChild.childNodes:j[1]==="<table>"&&!m?l.childNodes:[];for(g=n.length-1;g>=0;--g)p.nodeName(n[g],"tbody")&&!n[g].childNodes.length&&n[g].parentNode.removeChild(n[g])}!p.support.leadingWhitespace&&bn.test(h)&&l.insertBefore(b.createTextNode(bn.exec(h)[0]),l.firstChild),h=l.childNodes,l.parentNode.removeChild(l)}h.nodeType?t.push(h):p.merge(t,h)}l&&(h=l=s=null);if(!p.support.appendChecked)for(f=0;(h=t[f])!=null;f++)p.nodeName(h,"input")?bG(h):typeof h.getElementsByTagName!="undefined"&&p.grep(h.getElementsByTagName("input"),bG);if(c){q=function(a){if(!a.type||bx.test(a.type))return d?d.push(a.parentNode?a.parentNode.removeChild(a):a):c.appendChild(a)};for(f=0;(h=t[f])!=null;f++)if(!p.nodeName(h,"script")||!q(h))c.appendChild(h),typeof h.getElementsByTagName!="undefined"&&(r=p.grep(p.merge([],h.getElementsByTagName("script")),q),t.splice.apply(t,[f+1,0].concat(r)),f+=r.length)}return t},cleanData:function(a,b){var c,d,e,f,g=0,h=p.expando,i=p.cache,j=p.support.deleteExpando,k=p.event.special;for(;(e=a[g])!=null;g++)if(b||p.acceptData(e)){d=e[h],c=d&&i[d];if(c){if(c.events)for(f in c.events)k[f]?p.event.remove(e,f):p.removeEvent(e,f,c.handle);i[d]&&(delete i[d],j?delete e[h]:e.removeAttribute?e.removeAttribute(h):e[h]=null,p.deletedIds.push(d))}}}}),function(){var a,b;p.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a=p.uaMatch(g.userAgent),b={},a.browser&&(b[a.browser]=!0,b.version=a.version),b.chrome?b.webkit=!0:b.webkit&&(b.safari=!0),p.browser=b,p.sub=function(){function a(b,c){return new a.fn.init(b,c)}p.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function c(c,d){return d&&d instanceof p&&!(d instanceof a)&&(d=a(d)),p.fn.init.call(this,c,d,b)},a.fn.init.prototype=a.fn;var b=a(e);return a}}();var bH,bI,bJ,bK=/alpha\([^)]*\)/i,bL=/opacity=([^)]*)/,bM=/^(top|right|bottom|left)$/,bN=/^(none|table(?!-c[ea]).+)/,bO=/^margin/,bP=new RegExp("^("+q+")(.*)$","i"),bQ=new RegExp("^("+q+")(?!px)[a-z%]+$","i"),bR=new RegExp("^([-+])=("+q+")","i"),bS={},bT={position:"absolute",visibility:"hidden",display:"block"},bU={letterSpacing:0,fontWeight:400},bV=["Top","Right","Bottom","Left"],bW=["Webkit","O","Moz","ms"],bX=p.fn.toggle;p.fn.extend({css:function(a,c){return p.access(this,function(a,c,d){return d!==b?p.style(a,c,d):p.css(a,c)},a,c,arguments.length>1)},show:function(){return b$(this,!0)},hide:function(){return b$(this)},toggle:function(a,b){var c=typeof a=="boolean";return p.isFunction(a)&&p.isFunction(b)?bX.apply(this,arguments):this.each(function(){(c?a:bZ(this))?p(this).show():p(this).hide()})}}),p.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bH(a,"opacity");return c===""?"1":c}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":p.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!a||a.nodeType===3||a.nodeType===8||!a.style)return;var f,g,h,i=p.camelCase(c),j=a.style;c=p.cssProps[i]||(p.cssProps[i]=bY(j,i)),h=p.cssHooks[c]||p.cssHooks[i];if(d===b)return h&&"get"in h&&(f=h.get(a,!1,e))!==b?f:j[c];g=typeof d,g==="string"&&(f=bR.exec(d))&&(d=(f[1]+1)*f[2]+parseFloat(p.css(a,c)),g="number");if(d==null||g==="number"&&isNaN(d))return;g==="number"&&!p.cssNumber[i]&&(d+="px");if(!h||!("set"in h)||(d=h.set(a,d,e))!==b)try{j[c]=d}catch(k){}},css:function(a,c,d,e){var f,g,h,i=p.camelCase(c);return c=p.cssProps[i]||(p.cssProps[i]=bY(a.style,i)),h=p.cssHooks[c]||p.cssHooks[i],h&&"get"in h&&(f=h.get(a,!0,e)),f===b&&(f=bH(a,c)),f==="normal"&&c in bU&&(f=bU[c]),d||e!==b?(g=parseFloat(f),d||p.isNumeric(g)?g||0:f):f},swap:function(a,b,c){var d,e,f={};for(e in b)f[e]=a.style[e],a.style[e]=b[e];d=c.call(a);for(e in b)a.style[e]=f[e];return d}}),a.getComputedStyle?bH=function(b,c){var d,e,f,g,h=a.getComputedStyle(b,null),i=b.style;return h&&(d=h[c],d===""&&!p.contains(b.ownerDocument,b)&&(d=p.style(b,c)),bQ.test(d)&&bO.test(c)&&(e=i.width,f=i.minWidth,g=i.maxWidth,i.minWidth=i.maxWidth=i.width=d,d=h.width,i.width=e,i.minWidth=f,i.maxWidth=g)),d}:e.documentElement.currentStyle&&(bH=function(a,b){var c,d,e=a.currentStyle&&a.currentStyle[b],f=a.style;return e==null&&f&&f[b]&&(e=f[b]),bQ.test(e)&&!bM.test(b)&&(c=f.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":e,e=f.pixelLeft+"px",f.left=c,d&&(a.runtimeStyle.left=d)),e===""?"auto":e}),p.each(["height","width"],function(a,b){p.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth===0&&bN.test(bH(a,"display"))?p.swap(a,bT,function(){return cb(a,b,d)}):cb(a,b,d)},set:function(a,c,d){return b_(a,c,d?ca(a,b,d,p.support.boxSizing&&p.css(a,"boxSizing")==="border-box"):0)}}}),p.support.opacity||(p.cssHooks.opacity={get:function(a,b){return bL.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=p.isNumeric(b)?"alpha(opacity="+b*100+")":"",f=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&p.trim(f.replace(bK,""))===""&&c.removeAttribute){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bK.test(f)?f.replace(bK,e):f+" "+e}}),p(function(){p.support.reliableMarginRight||(p.cssHooks.marginRight={get:function(a,b){return p.swap(a,{display:"inline-block"},function(){if(b)return bH(a,"marginRight")})}}),!p.support.pixelPosition&&p.fn.position&&p.each(["top","left"],function(a,b){p.cssHooks[b]={get:function(a,c){if(c){var d=bH(a,b);return bQ.test(d)?p(a).position()[b]+"px":d}}}})}),p.expr&&p.expr.filters&&(p.expr.filters.hidden=function(a){return a.offsetWidth===0&&a.offsetHeight===0||!p.support.reliableHiddenOffsets&&(a.style&&a.style.display||bH(a,"display"))==="none"},p.expr.filters.visible=function(a){return!p.expr.filters.hidden(a)}),p.each({margin:"",padding:"",border:"Width"},function(a,b){p.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bV[d]+b]=e[d]||e[d-2]||e[0];return f}},bO.test(a)||(p.cssHooks[a+b].set=b_)});var cd=/%20/g,ce=/\[\]$/,cf=/\r?\n/g,cg=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,ch=/^(?:select|textarea)/i;p.fn.extend({serialize:function(){return p.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?p.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||ch.test(this.nodeName)||cg.test(this.type))}).map(function(a,b){var c=p(this).val();return c==null?null:p.isArray(c)?p.map(c,function(a,c){return{name:b.name,value:a.replace(cf,"\r\n")}}):{name:b.name,value:c.replace(cf,"\r\n")}}).get()}}),p.param=function(a,c){var d,e=[],f=function(a,b){b=p.isFunction(b)?b():b==null?"":b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=p.ajaxSettings&&p.ajaxSettings.traditional);if(p.isArray(a)||a.jquery&&!p.isPlainObject(a))p.each(a,function(){f(this.name,this.value)});else for(d in a)ci(d,a[d],c,f);return e.join("&").replace(cd,"+")};var cj,ck,cl=/#.*$/,cm=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,cn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,co=/^(?:GET|HEAD)$/,cp=/^\/\//,cq=/\?/,cr=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,cs=/([?&])_=[^&]*/,ct=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,cu=p.fn.load,cv={},cw={},cx=["*/"]+["*"];try{ck=f.href}catch(cy){ck=e.createElement("a"),ck.href="",ck=ck.href}cj=ct.exec(ck.toLowerCase())||[],p.fn.load=function(a,c,d){if(typeof a!="string"&&cu)return cu.apply(this,arguments);if(!this.length)return this;var e,f,g,h=this,i=a.indexOf(" ");return i>=0&&(e=a.slice(i,a.length),a=a.slice(0,i)),p.isFunction(c)?(d=c,c=b):c&&typeof c=="object"&&(f="POST"),p.ajax({url:a,type:f,dataType:"html",data:c,complete:function(a,b){d&&h.each(d,g||[a.responseText,b,a])}}).done(function(a){g=arguments,h.html(e?p("<div>").append(a.replace(cr,"")).find(e):a)}),this},p.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){p.fn[b]=function(a){return this.on(b,a)}}),p.each(["get","post"],function(a,c){p[c]=function(a,d,e,f){return p.isFunction(d)&&(f=f||e,e=d,d=b),p.ajax({type:c,url:a,data:d,success:e,dataType:f})}}),p.extend({getScript:function(a,c){return p.get(a,b,c,"script")},getJSON:function(a,b,c){return p.get(a,b,c,"json")},ajaxSetup:function(a,b){return b?cB(a,p.ajaxSettings):(b=a,a=p.ajaxSettings),cB(a,b),a},ajaxSettings:{url:ck,isLocal:cn.test(cj[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":cx},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":p.parseJSON,"text xml":p.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:cz(cv),ajaxTransport:cz(cw),ajax:function(a,c){function y(a,c,f,i){var k,s,t,u,w,y=c;if(v===2)return;v=2,h&&clearTimeout(h),g=b,e=i||"",x.readyState=a>0?4:0,f&&(u=cC(l,x,f));if(a>=200&&a<300||a===304)l.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(p.lastModified[d]=w),w=x.getResponseHeader("Etag"),w&&(p.etag[d]=w)),a===304?(y="notmodified",k=!0):(k=cD(l,u),y=k.state,s=k.data,t=k.error,k=!t);else{t=y;if(!y||a)y="error",a<0&&(a=0)}x.status=a,x.statusText=(c||y)+"",k?o.resolveWith(m,[s,y,x]):o.rejectWith(m,[x,y,t]),x.statusCode(r),r=b,j&&n.trigger("ajax"+(k?"Success":"Error"),[x,l,k?s:t]),q.fireWith(m,[x,y]),j&&(n.trigger("ajaxComplete",[x,l]),--p.active||p.event.trigger("ajaxStop"))}typeof a=="object"&&(c=a,a=b),c=c||{};var d,e,f,g,h,i,j,k,l=p.ajaxSetup({},c),m=l.context||l,n=m!==l&&(m.nodeType||m instanceof p)?p(m):p.event,o=p.Deferred(),q=p.Callbacks("once memory"),r=l.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,setRequestHeader:function(a,b){if(!v){var c=a.toLowerCase();a=u[c]=u[c]||a,t[a]=b}return this},getAllResponseHeaders:function(){return v===2?e:null},getResponseHeader:function(a){var c;if(v===2){if(!f){f={};while(c=cm.exec(e))f[c[1].toLowerCase()]=c[2]}c=f[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){return v||(l.mimeType=a),this},abort:function(a){return a=a||w,g&&g.abort(a),y(0,a),this}};o.promise(x),x.success=x.done,x.error=x.fail,x.complete=q.add,x.statusCode=function(a){if(a){var b;if(v<2)for(b in a)r[b]=[r[b],a[b]];else b=a[x.status],x.always(b)}return this},l.url=((a||l.url)+"").replace(cl,"").replace(cp,cj[1]+"//"),l.dataTypes=p.trim(l.dataType||"*").toLowerCase().split(s),l.crossDomain==null&&(i=ct.exec(l.url.toLowerCase())||!1,l.crossDomain=i&&i.join(":")+(i[3]?"":i[1]==="http:"?80:443)!==cj.join(":")+(cj[3]?"":cj[1]==="http:"?80:443)),l.data&&l.processData&&typeof l.data!="string"&&(l.data=p.param(l.data,l.traditional)),cA(cv,l,c,x);if(v===2)return x;j=l.global,l.type=l.type.toUpperCase(),l.hasContent=!co.test(l.type),j&&p.active++===0&&p.event.trigger("ajaxStart");if(!l.hasContent){l.data&&(l.url+=(cq.test(l.url)?"&":"?")+l.data,delete l.data),d=l.url;if(l.cache===!1){var z=p.now(),A=l.url.replace(cs,"$1_="+z);l.url=A+(A===l.url?(cq.test(l.url)?"&":"?")+"_="+z:"")}}(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",l.contentType),l.ifModified&&(d=d||l.url,p.lastModified[d]&&x.setRequestHeader("If-Modified-Since",p.lastModified[d]),p.etag[d]&&x.setRequestHeader("If-None-Match",p.etag[d])),x.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+(l.dataTypes[0]!=="*"?", "+cx+"; q=0.01":""):l.accepts["*"]);for(k in l.headers)x.setRequestHeader(k,l.headers[k]);if(!l.beforeSend||l.beforeSend.call(m,x,l)!==!1&&v!==2){w="abort";for(k in{success:1,error:1,complete:1})x[k](l[k]);g=cA(cw,l,c,x);if(!g)y(-1,"No Transport");else{x.readyState=1,j&&n.trigger("ajaxSend",[x,l]),l.async&&l.timeout>0&&(h=setTimeout(function(){x.abort("timeout")},l.timeout));try{v=1,g.send(t,y)}catch(B){if(v<2)y(-1,B);else throw B}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var cE=[],cF=/\?/,cG=/(=)\?(?=&|$)|\?\?/,cH=p.now();p.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=cE.pop()||p.expando+"_"+cH++;return this[a]=!0,a}}),p.ajaxPrefilter("json jsonp",function(c,d,e){var f,g,h,i=c.data,j=c.url,k=c.jsonp!==!1,l=k&&cG.test(j),m=k&&!l&&typeof i=="string"&&!(c.contentType||"").indexOf("application/x-www-form-urlencoded")&&cG.test(i);if(c.dataTypes[0]==="jsonp"||l||m)return f=c.jsonpCallback=p.isFunction(c.jsonpCallback)?c.jsonpCallback():c.jsonpCallback,g=a[f],l?c.url=j.replace(cG,"$1"+f):m?c.data=i.replace(cG,"$1"+f):k&&(c.url+=(cF.test(j)?"&":"?")+c.jsonp+"="+f),c.converters["script json"]=function(){return h||p.error(f+" was not called"),h[0]},c.dataTypes[0]="json",a[f]=function(){h=arguments},e.always(function(){a[f]=g,c[f]&&(c.jsonpCallback=d.jsonpCallback,cE.push(f)),h&&p.isFunction(g)&&g(h[0]),h=g=b}),"script"}),p.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){return p.globalEval(a),a}}}),p.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),p.ajaxTransport("script",function(a){if(a.crossDomain){var c,d=e.head||e.getElementsByTagName("head")[0]||e.documentElement;return{send:function(f,g){c=e.createElement("script"),c.async="async",a.scriptCharset&&(c.charset=a.scriptCharset),c.src=a.url,c.onload=c.onreadystatechange=function(a,e){if(e||!c.readyState||/loaded|complete/.test(c.readyState))c.onload=c.onreadystatechange=null,d&&c.parentNode&&d.removeChild(c),c=b,e||g(200,"success")},d.insertBefore(c,d.firstChild)},abort:function(){c&&c.onload(0,1)}}}});var cI,cJ=a.ActiveXObject?function(){for(var a in cI)cI[a](0,1)}:!1,cK=0;p.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&cL()||cM()}:cL,function(a){p.extend(p.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(p.ajaxSettings.xhr()),p.support.ajax&&p.ajaxTransport(function(c){if(!c.crossDomain||p.support.cors){var d;return{send:function(e,f){var g,h,i=c.xhr();c.username?i.open(c.type,c.url,c.async,c.username,c.password):i.open(c.type,c.url,c.async);if(c.xhrFields)for(h in c.xhrFields)i[h]=c.xhrFields[h];c.mimeType&&i.overrideMimeType&&i.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(h in e)i.setRequestHeader(h,e[h])}catch(j){}i.send(c.hasContent&&c.data||null),d=function(a,e){var h,j,k,l,m;try{if(d&&(e||i.readyState===4)){d=b,g&&(i.onreadystatechange=p.noop,cJ&&delete cI[g]);if(e)i.readyState!==4&&i.abort();else{h=i.status,k=i.getAllResponseHeaders(),l={},m=i.responseXML,m&&m.documentElement&&(l.xml=m);try{l.text=i.responseText}catch(a){}try{j=i.statusText}catch(n){j=""}!h&&c.isLocal&&!c.crossDomain?h=l.text?200:404:h===1223&&(h=204)}}}catch(o){e||f(-1,o)}l&&f(h,j,l,k)},c.async?i.readyState===4?setTimeout(d,0):(g=++cK,cJ&&(cI||(cI={},p(a).unload(cJ)),cI[g]=d),i.onreadystatechange=d):d()},abort:function(){d&&d(0,1)}}}});var cN,cO,cP=/^(?:toggle|show|hide)$/,cQ=new RegExp("^(?:([-+])=|)("+q+")([a-z%]*)$","i"),cR=/queueHooks$/,cS=[cY],cT={"*":[function(a,b){var c,d,e=this.createTween(a,b),f=cQ.exec(b),g=e.cur(),h=+g||0,i=1,j=20;if(f){c=+f[2],d=f[3]||(p.cssNumber[a]?"":"px");if(d!=="px"&&h){h=p.css(e.elem,a,!0)||c||1;do i=i||".5",h=h/i,p.style(e.elem,a,h+d);while(i!==(i=e.cur()/g)&&i!==1&&--j)}e.unit=d,e.start=h,e.end=f[1]?h+(f[1]+1)*c:c}return e}]};p.Animation=p.extend(cW,{tweener:function(a,b){p.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");var c,d=0,e=a.length;for(;d<e;d++)c=a[d],cT[c]=cT[c]||[],cT[c].unshift(b)},prefilter:function(a,b){b?cS.unshift(a):cS.push(a)}}),p.Tween=cZ,cZ.prototype={constructor:cZ,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(p.cssNumber[c]?"":"px")},cur:function(){var a=cZ.propHooks[this.prop];return a&&a.get?a.get(this):cZ.propHooks._default.get(this)},run:function(a){var b,c=cZ.propHooks[this.prop];return this.options.duration?this.pos=b=p.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):cZ.propHooks._default.set(this),this}},cZ.prototype.init.prototype=cZ.prototype,cZ.propHooks={_default:{get:function(a){var b;return a.elem[a.prop]==null||!!a.elem.style&&a.elem.style[a.prop]!=null?(b=p.css(a.elem,a.prop,!1,""),!b||b==="auto"?0:b):a.elem[a.prop]},set:function(a){p.fx.step[a.prop]?p.fx.step[a.prop](a):a.elem.style&&(a.elem.style[p.cssProps[a.prop]]!=null||p.cssHooks[a.prop])?p.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},cZ.propHooks.scrollTop=cZ.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},p.each(["toggle","show","hide"],function(a,b){var c=p.fn[b];p.fn[b]=function(d,e,f){return d==null||typeof d=="boolean"||!a&&p.isFunction(d)&&p.isFunction(e)?c.apply(this,arguments):this.animate(c$(b,!0),d,e,f)}}),p.fn.extend({fadeTo:function(a,b,c,d){return this.filter(bZ).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=p.isEmptyObject(a),f=p.speed(b,c,d),g=function(){var b=cW(this,p.extend({},a),f);e&&b.stop(!0)};return e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,c,d){var e=function(a){var b=a.stop;delete a.stop,b(d)};return typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,c=a!=null&&a+"queueHooks",f=p.timers,g=p._data(this);if(c)g[c]&&g[c].stop&&e(g[c]);else for(c in g)g[c]&&g[c].stop&&cR.test(c)&&e(g[c]);for(c=f.length;c--;)f[c].elem===this&&(a==null||f[c].queue===a)&&(f[c].anim.stop(d),b=!1,f.splice(c,1));(b||!d)&&p.dequeue(this,a)})}}),p.each({slideDown:c$("show"),slideUp:c$("hide"),slideToggle:c$("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){p.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),p.speed=function(a,b,c){var d=a&&typeof a=="object"?p.extend({},a):{complete:c||!c&&b||p.isFunction(a)&&a,duration:a,easing:c&&b||b&&!p.isFunction(b)&&b};d.duration=p.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in p.fx.speeds?p.fx.speeds[d.duration]:p.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";return d.old=d.complete,d.complete=function(){p.isFunction(d.old)&&d.old.call(this),d.queue&&p.dequeue(this,d.queue)},d},p.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},p.timers=[],p.fx=cZ.prototype.init,p.fx.tick=function(){var a,b=p.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||p.fx.stop()},p.fx.timer=function(a){a()&&p.timers.push(a)&&!cO&&(cO=setInterval(p.fx.tick,p.fx.interval))},p.fx.interval=13,p.fx.stop=function(){clearInterval(cO),cO=null},p.fx.speeds={slow:600,fast:200,_default:400},p.fx.step={},p.expr&&p.expr.filters&&(p.expr.filters.animated=function(a){return p.grep(p.timers,function(b){return a===b.elem}).length});var c_=/^(?:body|html)$/i;p.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){p.offset.setOffset(this,a,b)});var c,d,e,f,g,h,i,j={top:0,left:0},k=this[0],l=k&&k.ownerDocument;if(!l)return;return(d=l.body)===k?p.offset.bodyOffset(k):(c=l.documentElement,p.contains(c,k)?(typeof k.getBoundingClientRect!="undefined"&&(j=k.getBoundingClientRect()),e=da(l),f=c.clientTop||d.clientTop||0,g=c.clientLeft||d.clientLeft||0,h=e.pageYOffset||c.scrollTop,i=e.pageXOffset||c.scrollLeft,{top:j.top+h-f,left:j.left+i-g}):j)},p.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;return p.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(p.css(a,"marginTop"))||0,c+=parseFloat(p.css(a,"marginLeft"))||0),{top:b,left:c}},setOffset:function(a,b,c){var d=p.css(a,"position");d==="static"&&(a.style.position="relative");var e=p(a),f=e.offset(),g=p.css(a,"top"),h=p.css(a,"left"),i=(d==="absolute"||d==="fixed")&&p.inArray("auto",[g,h])>-1,j={},k={},l,m;i?(k=e.position(),l=k.top,m=k.left):(l=parseFloat(g)||0,m=parseFloat(h)||0),p.isFunction(b)&&(b=b.call(a,c,f)),b.top!=null&&(j.top=b.top-f.top+l),b.left!=null&&(j.left=b.left-f.left+m),"using"in b?b.using.call(a,j):e.css(j)}},p.fn.extend({position:function(){if(!this[0])return;var a=this[0],b=this.offsetParent(),c=this.offset(),d=c_.test(b[0].nodeName)?{top:0,left:0}:b.offset();return c.top-=parseFloat(p.css(a,"marginTop"))||0,c.left-=parseFloat(p.css(a,"marginLeft"))||0,d.top+=parseFloat(p.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(p.css(b[0],"borderLeftWidth"))||0,{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||e.body;while(a&&!c_.test(a.nodeName)&&p.css(a,"position")==="static")a=a.offsetParent;return a||e.body})}}),p.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);p.fn[a]=function(e){return p.access(this,function(a,e,f){var g=da(a);if(f===b)return g?c in g?g[c]:g.document.documentElement[e]:a[e];g?g.scrollTo(d?p(g).scrollLeft():f,d?f:p(g).scrollTop()):a[e]=f},a,e,arguments.length,null)}}),p.each({Height:"height",Width:"width"},function(a,c){p.each({padding:"inner"+a,content:c,"":"outer"+a},function(d,e){p.fn[e]=function(e,f){var g=arguments.length&&(d||typeof e!="boolean"),h=d||(e===!0||f===!0?"margin":"border");return p.access(this,function(c,d,e){var f;return p.isWindow(c)?c.document.documentElement["client"+a]:c.nodeType===9?(f=c.documentElement,Math.max(c.body["scroll"+a],f["scroll"+a],c.body["offset"+a],f["offset"+a],f["client"+a])):e===b?p.css(c,d,e,h):p.style(c,d,e,h)},c,g?e:b,g,null)}})}),a.jQuery=a.$=p,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return p})})(window);
/**
    Head JS     The only script in your <HEAD>
    Copyright   Tero Piirainen (tipiirai)
    License     MIT / http://bit.ly/mit-license
    Version     0.96

    http://headjs.com
*/(function(a){function z(){d||(d=!0,s(e,function(a){p(a)}))}function y(c,d){var e=a.createElement("script");e.type="text/"+(c.type||"javascript"),e.src=c.src||c,e.async=!1,e.onreadystatechange=e.onload=function(){var a=e.readyState;!d.done&&(!a||/loaded|complete/.test(a))&&(d.done=!0,d())},(a.body||b).appendChild(e)}function x(a,b){if(a.state==o)return b&&b();if(a.state==n)return k.ready(a.name,b);if(a.state==m)return a.onpreload.push(function(){x(a,b)});a.state=n,y(a.url,function(){a.state=o,b&&b(),s(g[a.name],function(a){p(a)}),u()&&d&&s(g.ALL,function(a){p(a)})})}function w(a,b){a.state===undefined&&(a.state=m,a.onpreload=[],y({src:a.url,type:"cache"},function(){v(a)}))}function v(a){a.state=l,s(a.onpreload,function(a){a.call()})}function u(a){a=a||h;var b;for(var c in a){if(a.hasOwnProperty(c)&&a[c].state!=o)return!1;b=!0}return b}function t(a){return Object.prototype.toString.call(a)=="[object Function]"}function s(a,b){if(!!a){typeof a=="object"&&(a=[].slice.call(a));for(var c=0;c<a.length;c++)b.call(a,a[c],c)}}function r(a){var b;if(typeof a=="object")for(var c in a)a[c]&&(b={name:c,url:a[c]});else b={name:q(a),url:a};var d=h[b.name];if(d&&d.url===b.url)return d;h[b.name]=b;return b}function q(a){var b=a.split("/"),c=b[b.length-1],d=c.indexOf("?");return d!=-1?c.substring(0,d):c}function p(a){a._done||(a(),a._done=1)}var b=a.documentElement,c,d,e=[],f=[],g={},h={},i=a.createElement("script").async===!0||"MozAppearance"in a.documentElement.style||window.opera,j=window.head_conf&&head_conf.head||"head",k=window[j]=window[j]||function(){k.ready.apply(null,arguments)},l=1,m=2,n=3,o=4;i?k.js=function(){var a=arguments,b=a[a.length-1],c={};t(b)||(b=null),s(a,function(d,e){d!=b&&(d=r(d),c[d.name]=d,x(d,b&&e==a.length-2?function(){u(c)&&p(b)}:null))});return k}:k.js=function(){var a=arguments,b=[].slice.call(a,1),d=b[0];if(!c){f.push(function(){k.js.apply(null,a)});return k}d?(s(b,function(a){t(a)||w(r(a))}),x(r(a[0]),t(d)?d:function(){k.js.apply(null,b)})):x(r(a[0]));return k},k.ready=function(b,c){if(b==a){d?p(c):e.push(c);return k}t(b)&&(c=b,b="ALL");if(typeof b!="string"||!t(c))return k;var f=h[b];if(f&&f.state==o||b=="ALL"&&u()&&d){p(c);return k}var i=g[b];i?i.push(c):i=g[b]=[c];return k},k.ready(a,function(){u()&&s(g.ALL,function(a){p(a)}),k.feature&&k.feature("domloaded",!0)});if(window.addEventListener)a.addEventListener("DOMContentLoaded",z,!1),window.addEventListener("load",z,!1);else if(window.attachEvent){a.attachEvent("onreadystatechange",function(){a.readyState==="complete"&&z()});var A=1;try{A=window.frameElement}catch(B){}!A&&b.doScroll&&function(){try{b.doScroll("left"),z()}catch(a){setTimeout(arguments.callee,1);return}}(),window.attachEvent("onload",z)}!a.readyState&&a.addEventListener&&(a.readyState="loading",a.addEventListener("DOMContentLoaded",handler=function(){a.removeEventListener("DOMContentLoaded",handler,!1),a.readyState="complete"},!1)),setTimeout(function(){c=!0,s(f,function(a){a()})},300)})(document)
/*!
 * reveal.js
 * http://lab.hakim.se/reveal-js
 * MIT licensed
 *
 * Copyright (C) 2013 Hakim El Hattab, http://hakim.se
 */
var Reveal = (function(){

	'use strict';

	var SLIDES_SELECTOR = '.reveal .slides section',
		HORIZONTAL_SLIDES_SELECTOR = '.reveal .slides>section',
		VERTICAL_SLIDES_SELECTOR = '.reveal .slides>section.present>section',
		HOME_SLIDE_SELECTOR = '.reveal .slides>section:first-of-type',

		// Configurations defaults, can be overridden at initialization time
		config = {

			// The "normal" size of the presentation, aspect ratio will be preserved
			// when the presentation is scaled to fit different resolutions
			width: 960,
			height: 700,

			// Factor of the display size that should remain empty around the content
			margin: 0.1,

			// Bounds for smallest/largest possible scale to apply to content
			minScale: 0.2,
			maxScale: 1.0,

			// Display controls in the bottom right corner
			controls: true,

			// Display a presentation progress bar
			progress: true,

			// Display the page number of the current slide
			slideNumber: false,

			// Push each slide change to the browser history
			history: false,

			// Enable keyboard shortcuts for navigation
			keyboard: true,

			// Enable the slide overview mode
			overview: true,

			// Vertical centering of slides
			center: true,

			// Enables touch navigation on devices with touch input
			touch: true,

			// Loop the presentation
			loop: false,

			// Change the presentation direction to be RTL
			rtl: false,

			// Turns fragments on and off globally
			fragments: true,

			// Flags if the presentation is running in an embedded mode,
			// i.e. contained within a limited portion of the screen
			embedded: false,

			// Number of milliseconds between automatically proceeding to the
			// next slide, disabled when set to 0, this value can be overwritten
			// by using a data-autoslide attribute on your slides
			autoSlide: 0,

			// Stop auto-sliding after user input
			autoSlideStoppable: true,

			// Enable slide navigation via mouse wheel
			mouseWheel: false,

			// Apply a 3D roll to links on hover
			rollingLinks: false,

			// Hides the address bar on mobile devices
			hideAddressBar: true,

			// Opens links in an iframe preview overlay
			previewLinks: false,

			// Focuses body when page changes visiblity to ensure keyboard shortcuts work
			focusBodyOnPageVisiblityChange: true,

			// Theme (see /css/theme)
			theme: null,

			// Transition style
			transition: 'default', // default/cube/page/concave/zoom/linear/fade/none

			// Transition speed
			transitionSpeed: 'default', // default/fast/slow

			// Transition style for full page slide backgrounds
			backgroundTransition: 'default', // default/linear/none

			// Parallax background image
			parallaxBackgroundImage: '', // CSS syntax, e.g. "a.jpg"

			// Parallax background size
			parallaxBackgroundSize: '', // CSS syntax, e.g. "3000px 2000px"

			// Number of slides away from the current that are visible
			viewDistance: 3,

			// Script dependencies to load
			dependencies: []

		},

		// Flags if reveal.js is loaded (has dispatched the 'ready' event)
		loaded = false,

		// The horizontal and vertical index of the currently active slide
		indexh,
		indexv,

		// The previous and current slide HTML elements
		previousSlide,
		currentSlide,

		previousBackground,

		// Slides may hold a data-state attribute which we pick up and apply
		// as a class to the body. This list contains the combined state of
		// all current slides.
		state = [],

		// The current scale of the presentation (see width/height config)
		scale = 1,

		// Cached references to DOM elements
		dom = {},

		// Features supported by the browser, see #checkCapabilities()
		features = {},

		// Client is a mobile device, see #checkCapabilities()
		isMobileDevice,

		// Throttles mouse wheel navigation
		lastMouseWheelStep = 0,

		// Delays updates to the URL due to a Chrome thumbnailer bug
		writeURLTimeout = 0,

		// A delay used to activate the overview mode
		activateOverviewTimeout = 0,

		// A delay used to deactivate the overview mode
		deactivateOverviewTimeout = 0,

		// Flags if the interaction event listeners are bound
		eventsAreBound = false,

		// The current auto-slide duration
		autoSlide = 0,

		// Auto slide properties
		autoSlidePlayer,
		autoSlideTimeout = 0,
		autoSlideStartTime = -1,
		autoSlidePaused = false,

		// Holds information about the currently ongoing touch input
		touch = {
			startX: 0,
			startY: 0,
			startSpan: 0,
			startCount: 0,
			captured: false,
			threshold: 40
		};

	/**
	 * Starts up the presentation if the client is capable.
	 */
	function initialize( options ) {

		checkCapabilities();

		if( !features.transforms2d && !features.transforms3d ) {
			document.body.setAttribute( 'class', 'no-transforms' );

			// If the browser doesn't support core features we won't be
			// using JavaScript to control the presentation
			return;
		}

		// Force a layout when the whole page, incl fonts, has loaded
		window.addEventListener( 'load', layout, false );

		var query = Reveal.getQueryHash();

		// Do not accept new dependencies via query config to avoid
		// the potential of malicious script injection
		if( typeof query['dependencies'] !== 'undefined' ) delete query['dependencies'];

		// Copy options over to our config object
		extend( config, options );
		extend( config, query );

		// Hide the address bar in mobile browsers
		hideAddressBar();

		// Loads the dependencies and continues to #start() once done
		load();

	}

	/**
	 * Inspect the client to see what it's capable of, this
	 * should only happens once per runtime.
	 */
	function checkCapabilities() {

		features.transforms3d = 'WebkitPerspective' in document.body.style ||
								'MozPerspective' in document.body.style ||
								'msPerspective' in document.body.style ||
								'OPerspective' in document.body.style ||
								'perspective' in document.body.style;

		features.transforms2d = 'WebkitTransform' in document.body.style ||
								'MozTransform' in document.body.style ||
								'msTransform' in document.body.style ||
								'OTransform' in document.body.style ||
								'transform' in document.body.style;

		features.requestAnimationFrameMethod = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
		features.requestAnimationFrame = typeof features.requestAnimationFrameMethod === 'function';

		features.canvas = !!document.createElement( 'canvas' ).getContext;

		isMobileDevice = navigator.userAgent.match( /(iphone|ipod|android)/gi );

	}


    /**
     * Loads the dependencies of reveal.js. Dependencies are
     * defined via the configuration option 'dependencies'
     * and will be loaded prior to starting/binding reveal.js.
     * Some dependencies may have an 'async' flag, if so they
     * will load after reveal.js has been started up.
     */
	function load() {

		var scripts = [],
			scriptsAsync = [],
			scriptsToPreload = 0;

		// Called once synchronous scripts finish loading
		function proceed() {
			if( scriptsAsync.length ) {
				// Load asynchronous scripts
				head.js.apply( null, scriptsAsync );
			}

			start();
		}

		function loadScript( s ) {
			head.ready( s.src.match( /([\w\d_\-]*)\.?js$|[^\\\/]*$/i )[0], function() {
				// Extension may contain callback functions
				if( typeof s.callback === 'function' ) {
					s.callback.apply( this );
				}

				if( --scriptsToPreload === 0 ) {
					proceed();
				}
			});
		}

		for( var i = 0, len = config.dependencies.length; i < len; i++ ) {
			var s = config.dependencies[i];

			// Load if there's no condition or the condition is truthy
			if( !s.condition || s.condition() ) {
				if( s.async ) {
					scriptsAsync.push( s.src );
				}
				else {
					scripts.push( s.src );
				}

				loadScript( s );
			}
		}

		if( scripts.length ) {
			scriptsToPreload = scripts.length;

			// Load synchronous scripts
			head.js.apply( null, scripts );
		}
		else {
			proceed();
		}

	}

	/**
	 * Starts up reveal.js by binding input events and navigating
	 * to the current URL deeplink if there is one.
	 */
	function start() {

		// Make sure we've got all the DOM elements we need
		setupDOM();

		// Resets all vertical slides so that only the first is visible
		resetVerticalSlides();

		// Updates the presentation to match the current configuration values
		configure();

		// Read the initial hash
		readURL();

		// Update all backgrounds
		updateBackground( true );

		// Notify listeners that the presentation is ready but use a 1ms
		// timeout to ensure it's not fired synchronously after #initialize()
		setTimeout( function() {
			// Enable transitions now that we're loaded
			dom.slides.classList.remove( 'no-transition' );

			loaded = true;

			dispatchEvent( 'ready', {
				'indexh': indexh,
				'indexv': indexv,
				'currentSlide': currentSlide
			} );
		}, 1 );

	}

	/**
	 * Finds and stores references to DOM elements which are
	 * required by the presentation. If a required element is
	 * not found, it is created.
	 */
	function setupDOM() {

		// Cache references to key DOM elements
		dom.theme = document.querySelector( '#theme' );
		dom.wrapper = document.querySelector( '.reveal' );
		dom.slides = document.querySelector( '.reveal .slides' );

		// Prevent transitions while we're loading
		dom.slides.classList.add( 'no-transition' );

		// Background element
		dom.background = createSingletonNode( dom.wrapper, 'div', 'backgrounds', null );

		// Progress bar
		dom.progress = createSingletonNode( dom.wrapper, 'div', 'progress', '<span></span>' );
		dom.progressbar = dom.progress.querySelector( 'span' );

		// Arrow controls
		createSingletonNode( dom.wrapper, 'aside', 'controls',
			'<div class="navigate-left"></div>' +
			'<div class="navigate-right"></div>' +
			'<div class="navigate-up"></div>' +
			'<div class="navigate-down"></div>' );

		// Slide number
		dom.slideNumber = createSingletonNode( dom.wrapper, 'div', 'slide-number', '' );

		// State background element [DEPRECATED]
		createSingletonNode( dom.wrapper, 'div', 'state-background', null );

		// Overlay graphic which is displayed during the paused mode
		createSingletonNode( dom.wrapper, 'div', 'pause-overlay', null );

		// Cache references to elements
		dom.controls = document.querySelector( '.reveal .controls' );

		// There can be multiple instances of controls throughout the page
		dom.controlsLeft = toArray( document.querySelectorAll( '.navigate-left' ) );
		dom.controlsRight = toArray( document.querySelectorAll( '.navigate-right' ) );
		dom.controlsUp = toArray( document.querySelectorAll( '.navigate-up' ) );
		dom.controlsDown = toArray( document.querySelectorAll( '.navigate-down' ) );
		dom.controlsPrev = toArray( document.querySelectorAll( '.navigate-prev' ) );
		dom.controlsNext = toArray( document.querySelectorAll( '.navigate-next' ) );

	}

	/**
	 * Creates an HTML element and returns a reference to it.
	 * If the element already exists the existing instance will
	 * be returned.
	 */
	function createSingletonNode( container, tagname, classname, innerHTML ) {

		var node = container.querySelector( '.' + classname );
		if( !node ) {
			node = document.createElement( tagname );
			node.classList.add( classname );
			if( innerHTML !== null ) {
				node.innerHTML = innerHTML;
			}
			container.appendChild( node );
		}
		return node;

	}

	/**
	 * Creates the slide background elements and appends them
	 * to the background container. One element is created per
	 * slide no matter if the given slide has visible background.
	 */
	function createBackgrounds() {

		if( isPrintingPDF() ) {
			document.body.classList.add( 'print-pdf' );
		}

		// Clear prior backgrounds
		dom.background.innerHTML = '';
		dom.background.classList.add( 'no-transition' );

		// Helper method for creating a background element for the
		// given slide
		function _createBackground( slide, container ) {

			var data = {
				background: slide.getAttribute( 'data-background' ),
				backgroundSize: slide.getAttribute( 'data-background-size' ),
				backgroundImage: slide.getAttribute( 'data-background-image' ),
				backgroundColor: slide.getAttribute( 'data-background-color' ),
				backgroundRepeat: slide.getAttribute( 'data-background-repeat' ),
				backgroundPosition: slide.getAttribute( 'data-background-position' ),
				backgroundTransition: slide.getAttribute( 'data-background-transition' )
			};

			var element = document.createElement( 'div' );
			element.className = 'slide-background';

			if( data.background ) {
				// Auto-wrap image urls in url(...)
				if( /^(http|file|\/\/)/gi.test( data.background ) || /\.(svg|png|jpg|jpeg|gif|bmp)$/gi.test( data.background ) ) {
					element.style.backgroundImage = 'url('+ data.background +')';
				}
				else {
					element.style.background = data.background;
				}
			}

			if( data.background || data.backgroundColor || data.backgroundImage ) {
				element.setAttribute( 'data-background-hash', data.background + data.backgroundSize + data.backgroundImage + data.backgroundColor + data.backgroundRepeat + data.backgroundPosition + data.backgroundTransition );
			}

			// Additional and optional background properties
			if( data.backgroundSize ) element.style.backgroundSize = data.backgroundSize;
			if( data.backgroundImage ) element.style.backgroundImage = 'url("' + data.backgroundImage + '")';
			if( data.backgroundColor ) element.style.backgroundColor = data.backgroundColor;
			if( data.backgroundRepeat ) element.style.backgroundRepeat = data.backgroundRepeat;
			if( data.backgroundPosition ) element.style.backgroundPosition = data.backgroundPosition;
			if( data.backgroundTransition ) element.setAttribute( 'data-background-transition', data.backgroundTransition );

			container.appendChild( element );

			return element;

		}

		// Iterate over all horizontal slides
		toArray( document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) ).forEach( function( slideh ) {

			var backgroundStack;

			if( isPrintingPDF() ) {
				backgroundStack = _createBackground( slideh, slideh );
			}
			else {
				backgroundStack = _createBackground( slideh, dom.background );
			}

			// Iterate over all vertical slides
			toArray( slideh.querySelectorAll( 'section' ) ).forEach( function( slidev ) {

				if( isPrintingPDF() ) {
					_createBackground( slidev, slidev );
				}
				else {
					_createBackground( slidev, backgroundStack );
				}

			} );

		} );

		// Add parallax background if specified
		if( config.parallaxBackgroundImage ) {

			dom.background.style.backgroundImage = 'url("' + config.parallaxBackgroundImage + '")';
			dom.background.style.backgroundSize = config.parallaxBackgroundSize;

			// Make sure the below properties are set on the element - these properties are
			// needed for proper transitions to be set on the element via CSS. To remove
			// annoying background slide-in effect when the presentation starts, apply
			// these properties after short time delay
			setTimeout( function() {
				dom.wrapper.classList.add( 'has-parallax-background' );
			}, 1 );

		}
		else {

			dom.background.style.backgroundImage = '';
			dom.wrapper.classList.remove( 'has-parallax-background' );

		}

	}

	/**
	 * Applies the configuration settings from the config
	 * object. May be called multiple times.
	 */
	function configure( options ) {

		var numberOfSlides = document.querySelectorAll( SLIDES_SELECTOR ).length;

		dom.wrapper.classList.remove( config.transition );

		// New config options may be passed when this method
		// is invoked through the API after initialization
		if( typeof options === 'object' ) extend( config, options );

		// Force linear transition based on browser capabilities
		if( features.transforms3d === false ) config.transition = 'linear';

		dom.wrapper.classList.add( config.transition );

		dom.wrapper.setAttribute( 'data-transition-speed', config.transitionSpeed );
		dom.wrapper.setAttribute( 'data-background-transition', config.backgroundTransition );

		dom.controls.style.display = config.controls ? 'block' : 'none';
		dom.progress.style.display = config.progress ? 'block' : 'none';

		if( config.rtl ) {
			dom.wrapper.classList.add( 'rtl' );
		}
		else {
			dom.wrapper.classList.remove( 'rtl' );
		}

		if( config.center ) {
			dom.wrapper.classList.add( 'center' );
		}
		else {
			dom.wrapper.classList.remove( 'center' );
		}

		if( config.mouseWheel ) {
			document.addEventListener( 'DOMMouseScroll', onDocumentMouseScroll, false ); // FF
			document.addEventListener( 'mousewheel', onDocumentMouseScroll, false );
		}
		else {
			document.removeEventListener( 'DOMMouseScroll', onDocumentMouseScroll, false ); // FF
			document.removeEventListener( 'mousewheel', onDocumentMouseScroll, false );
		}

		// Rolling 3D links
		if( config.rollingLinks ) {
			enableRollingLinks();
		}
		else {
			disableRollingLinks();
		}

		// Iframe link previews
		if( config.previewLinks ) {
			enablePreviewLinks();
		}
		else {
			disablePreviewLinks();
			enablePreviewLinks( '[data-preview-link]' );
		}

		// Auto-slide playback controls
		if( numberOfSlides > 1 && config.autoSlide && config.autoSlideStoppable && features.canvas && features.requestAnimationFrame ) {
			autoSlidePlayer = new Playback( dom.wrapper, function() {
				return Math.min( Math.max( ( Date.now() - autoSlideStartTime ) / autoSlide, 0 ), 1 );
			} );

			autoSlidePlayer.on( 'click', onAutoSlidePlayerClick );
			autoSlidePaused = false;
		}
		else if( autoSlidePlayer ) {
			autoSlidePlayer.destroy();
			autoSlidePlayer = null;
		}

		// Load the theme in the config, if it's not already loaded
		if( config.theme && dom.theme ) {
			var themeURL = dom.theme.getAttribute( 'href' );
			var themeFinder = /[^\/]*?(?=\.css)/;
			var themeName = themeURL.match(themeFinder)[0];

			if(  config.theme !== themeName ) {
				themeURL = themeURL.replace(themeFinder, config.theme);
				dom.theme.setAttribute( 'href', themeURL );
			}
		}

		sync();

	}

	/**
	 * Binds all event listeners.
	 */
	function addEventListeners() {

		eventsAreBound = true;

		window.addEventListener( 'hashchange', onWindowHashChange, false );
		window.addEventListener( 'resize', onWindowResize, false );

		if( config.touch ) {
			dom.wrapper.addEventListener( 'touchstart', onTouchStart, false );
			dom.wrapper.addEventListener( 'touchmove', onTouchMove, false );
			dom.wrapper.addEventListener( 'touchend', onTouchEnd, false );

			// Support pointer-style touch interaction as well
			if( window.navigator.msPointerEnabled ) {
				dom.wrapper.addEventListener( 'MSPointerDown', onPointerDown, false );
				dom.wrapper.addEventListener( 'MSPointerMove', onPointerMove, false );
				dom.wrapper.addEventListener( 'MSPointerUp', onPointerUp, false );
			}
		}

		if( config.keyboard ) {
			document.addEventListener( 'keydown', onDocumentKeyDown, false );
		}

		if( config.progress && dom.progress ) {
			dom.progress.addEventListener( 'click', onProgressClicked, false );
		}

		if( config.focusBodyOnPageVisiblityChange ) {
			var visibilityChange;

			if( 'hidden' in document ) {
				visibilityChange = 'visibilitychange';
			}
			else if( 'msHidden' in document ) {
				visibilityChange = 'msvisibilitychange';
			}
			else if( 'webkitHidden' in document ) {
				visibilityChange = 'webkitvisibilitychange';
			}

			if( visibilityChange ) {
				document.addEventListener( visibilityChange, onPageVisibilityChange, false );
			}
		}

		[ 'touchstart', 'click' ].forEach( function( eventName ) {
			dom.controlsLeft.forEach( function( el ) { el.addEventListener( eventName, onNavigateLeftClicked, false ); } );
			dom.controlsRight.forEach( function( el ) { el.addEventListener( eventName, onNavigateRightClicked, false ); } );
			dom.controlsUp.forEach( function( el ) { el.addEventListener( eventName, onNavigateUpClicked, false ); } );
			dom.controlsDown.forEach( function( el ) { el.addEventListener( eventName, onNavigateDownClicked, false ); } );
			dom.controlsPrev.forEach( function( el ) { el.addEventListener( eventName, onNavigatePrevClicked, false ); } );
			dom.controlsNext.forEach( function( el ) { el.addEventListener( eventName, onNavigateNextClicked, false ); } );
		} );

	}

	/**
	 * Unbinds all event listeners.
	 */
	function removeEventListeners() {

		eventsAreBound = false;

		document.removeEventListener( 'keydown', onDocumentKeyDown, false );
		window.removeEventListener( 'hashchange', onWindowHashChange, false );
		window.removeEventListener( 'resize', onWindowResize, false );

		dom.wrapper.removeEventListener( 'touchstart', onTouchStart, false );
		dom.wrapper.removeEventListener( 'touchmove', onTouchMove, false );
		dom.wrapper.removeEventListener( 'touchend', onTouchEnd, false );

		if( window.navigator.msPointerEnabled ) {
			dom.wrapper.removeEventListener( 'MSPointerDown', onPointerDown, false );
			dom.wrapper.removeEventListener( 'MSPointerMove', onPointerMove, false );
			dom.wrapper.removeEventListener( 'MSPointerUp', onPointerUp, false );
		}

		if ( config.progress && dom.progress ) {
			dom.progress.removeEventListener( 'click', onProgressClicked, false );
		}

		[ 'touchstart', 'click' ].forEach( function( eventName ) {
			dom.controlsLeft.forEach( function( el ) { el.removeEventListener( eventName, onNavigateLeftClicked, false ); } );
			dom.controlsRight.forEach( function( el ) { el.removeEventListener( eventName, onNavigateRightClicked, false ); } );
			dom.controlsUp.forEach( function( el ) { el.removeEventListener( eventName, onNavigateUpClicked, false ); } );
			dom.controlsDown.forEach( function( el ) { el.removeEventListener( eventName, onNavigateDownClicked, false ); } );
			dom.controlsPrev.forEach( function( el ) { el.removeEventListener( eventName, onNavigatePrevClicked, false ); } );
			dom.controlsNext.forEach( function( el ) { el.removeEventListener( eventName, onNavigateNextClicked, false ); } );
		} );

	}

	/**
	 * Extend object a with the properties of object b.
	 * If there's a conflict, object b takes precedence.
	 */
	function extend( a, b ) {

		for( var i in b ) {
			a[ i ] = b[ i ];
		}

	}

	/**
	 * Converts the target object to an array.
	 */
	function toArray( o ) {

		return Array.prototype.slice.call( o );

	}

	/**
	 * Measures the distance in pixels between point a
	 * and point b.
	 *
	 * @param {Object} a point with x/y properties
	 * @param {Object} b point with x/y properties
	 */
	function distanceBetween( a, b ) {

		var dx = a.x - b.x,
			dy = a.y - b.y;

		return Math.sqrt( dx*dx + dy*dy );

	}

	/**
	 * Applies a CSS transform to the target element.
	 */
	function transformElement( element, transform ) {

		element.style.WebkitTransform = transform;
		element.style.MozTransform = transform;
		element.style.msTransform = transform;
		element.style.OTransform = transform;
		element.style.transform = transform;

	}

	/**
	 * Retrieves the height of the given element by looking
	 * at the position and height of its immediate children.
	 */
	function getAbsoluteHeight( element ) {

		var height = 0;

		if( element ) {
			var absoluteChildren = 0;

			toArray( element.childNodes ).forEach( function( child ) {

				if( typeof child.offsetTop === 'number' && child.style ) {
					// Count # of abs children
					if( child.style.position === 'absolute' ) {
						absoluteChildren += 1;
					}

					height = Math.max( height, child.offsetTop + child.offsetHeight );
				}

			} );

			// If there are no absolute children, use offsetHeight
			if( absoluteChildren === 0 ) {
				height = element.offsetHeight;
			}

		}

		return height;

	}

	/**
	 * Returns the remaining height within the parent of the
	 * target element after subtracting the height of all
	 * siblings.
	 *
	 * remaining height = [parent height] - [ siblings height]
	 */
	function getRemainingHeight( element, height ) {

		height = height || 0;

		if( element ) {
			var parent = element.parentNode;
			var siblings = parent.childNodes;

			// Subtract the height of each sibling
			toArray( siblings ).forEach( function( sibling ) {

				if( typeof sibling.offsetHeight === 'number' && sibling !== element ) {

					var styles = window.getComputedStyle( sibling ),
						marginTop = parseInt( styles.marginTop, 10 ),
						marginBottom = parseInt( styles.marginBottom, 10 );

					height -= sibling.offsetHeight + marginTop + marginBottom;

				}

			} );

			var elementStyles = window.getComputedStyle( element );

			// Subtract the margins of the target element
			height -= parseInt( elementStyles.marginTop, 10 ) +
						parseInt( elementStyles.marginBottom, 10 );

		}

		return height;

	}

	/**
	 * Checks if this instance is being used to print a PDF.
	 */
	function isPrintingPDF() {

		return ( /print-pdf/gi ).test( window.location.search );

	}

	/**
	 * Hides the address bar if we're on a mobile device.
	 */
	function hideAddressBar() {

		if( config.hideAddressBar && isMobileDevice ) {
			// Events that should trigger the address bar to hide
			window.addEventListener( 'load', removeAddressBar, false );
			window.addEventListener( 'orientationchange', removeAddressBar, false );
		}

	}

	/**
	 * Causes the address bar to hide on mobile devices,
	 * more vertical space ftw.
	 */
	function removeAddressBar() {

		setTimeout( function() {
			window.scrollTo( 0, 1 );
		}, 10 );

	}

	/**
	 * Dispatches an event of the specified type from the
	 * reveal DOM element.
	 */
	function dispatchEvent( type, properties ) {

		var event = document.createEvent( "HTMLEvents", 1, 2 );
		event.initEvent( type, true, true );
		extend( event, properties );
		dom.wrapper.dispatchEvent( event );

	}

	/**
	 * Wrap all links in 3D goodness.
	 */
	function enableRollingLinks() {

		if( features.transforms3d && !( 'msPerspective' in document.body.style ) ) {
			var anchors = document.querySelectorAll( SLIDES_SELECTOR + ' a:not(.image)' );

			for( var i = 0, len = anchors.length; i < len; i++ ) {
				var anchor = anchors[i];

				if( anchor.textContent && !anchor.querySelector( '*' ) && ( !anchor.className || !anchor.classList.contains( anchor, 'roll' ) ) ) {
					var span = document.createElement('span');
					span.setAttribute('data-title', anchor.text);
					span.innerHTML = anchor.innerHTML;

					anchor.classList.add( 'roll' );
					anchor.innerHTML = '';
					anchor.appendChild(span);
				}
			}
		}

	}

	/**
	 * Unwrap all 3D links.
	 */
	function disableRollingLinks() {

		var anchors = document.querySelectorAll( SLIDES_SELECTOR + ' a.roll' );

		for( var i = 0, len = anchors.length; i < len; i++ ) {
			var anchor = anchors[i];
			var span = anchor.querySelector( 'span' );

			if( span ) {
				anchor.classList.remove( 'roll' );
				anchor.innerHTML = span.innerHTML;
			}
		}

	}

	/**
	 * Bind preview frame links.
	 */
	function enablePreviewLinks( selector ) {

		var anchors = toArray( document.querySelectorAll( selector ? selector : 'a' ) );

		anchors.forEach( function( element ) {
			if( /^(http|www)/gi.test( element.getAttribute( 'href' ) ) ) {
				element.addEventListener( 'click', onPreviewLinkClicked, false );
			}
		} );

	}

	/**
	 * Unbind preview frame links.
	 */
	function disablePreviewLinks() {

		var anchors = toArray( document.querySelectorAll( 'a' ) );

		anchors.forEach( function( element ) {
			if( /^(http|www)/gi.test( element.getAttribute( 'href' ) ) ) {
				element.removeEventListener( 'click', onPreviewLinkClicked, false );
			}
		} );

	}

	/**
	 * Opens a preview window for the target URL.
	 */
	function openPreview( url ) {

		closePreview();

		dom.preview = document.createElement( 'div' );
		dom.preview.classList.add( 'preview-link-overlay' );
		dom.wrapper.appendChild( dom.preview );

		dom.preview.innerHTML = [
			'<header>',
				'<a class="close" href="#"><span class="icon"></span></a>',
				'<a class="external" href="'+ url +'" target="_blank"><span class="icon"></span></a>',
			'</header>',
			'<div class="spinner"></div>',
			'<div class="viewport">',
				'<iframe src="'+ url +'"></iframe>',
			'</div>'
		].join('');

		dom.preview.querySelector( 'iframe' ).addEventListener( 'load', function( event ) {
			dom.preview.classList.add( 'loaded' );
		}, false );

		dom.preview.querySelector( '.close' ).addEventListener( 'click', function( event ) {
			closePreview();
			event.preventDefault();
		}, false );

		dom.preview.querySelector( '.external' ).addEventListener( 'click', function( event ) {
			closePreview();
		}, false );

		setTimeout( function() {
			dom.preview.classList.add( 'visible' );
		}, 1 );

	}

	/**
	 * Closes the iframe preview window.
	 */
	function closePreview() {

		if( dom.preview ) {
			dom.preview.setAttribute( 'src', '' );
			dom.preview.parentNode.removeChild( dom.preview );
			dom.preview = null;
		}

	}

	/**
	 * Applies JavaScript-controlled layout rules to the
	 * presentation.
	 */
	function layout() {

		if( dom.wrapper && !isPrintingPDF() ) {

			// Available space to scale within
			var availableWidth = dom.wrapper.offsetWidth,
				availableHeight = dom.wrapper.offsetHeight;

			// Reduce available space by margin
			availableWidth -= ( availableHeight * config.margin );
			availableHeight -= ( availableHeight * config.margin );

			// Dimensions of the content
			var slideWidth = config.width,
				slideHeight = config.height,
				slidePadding = 20; // TODO Dig this out of DOM

			// Layout the contents of the slides
			layoutSlideContents( config.width, config.height, slidePadding );

			// Slide width may be a percentage of available width
			if( typeof slideWidth === 'string' && /%$/.test( slideWidth ) ) {
				slideWidth = parseInt( slideWidth, 10 ) / 100 * availableWidth;
			}

			// Slide height may be a percentage of available height
			if( typeof slideHeight === 'string' && /%$/.test( slideHeight ) ) {
				slideHeight = parseInt( slideHeight, 10 ) / 100 * availableHeight;
			}

			dom.slides.style.width = slideWidth + 'px';
			dom.slides.style.height = slideHeight + 'px';

			// Determine scale of content to fit within available space
			scale = Math.min( availableWidth / slideWidth, availableHeight / slideHeight );

			// Respect max/min scale settings
			scale = Math.max( scale, config.minScale );
			scale = Math.min( scale, config.maxScale );

			// Prefer applying scale via zoom since Chrome blurs scaled content
			// with nested transforms
			if( typeof dom.slides.style.zoom !== 'undefined' && !navigator.userAgent.match( /(iphone|ipod|ipad|android)/gi ) ) {
				dom.slides.style.zoom = scale;
			}
			// Apply scale transform as a fallback
			else {
				transformElement( dom.slides, 'translate(-50%, -50%) scale('+ scale +') translate(50%, 50%)' );
			}

			// Select all slides, vertical and horizontal
			var slides = toArray( document.querySelectorAll( SLIDES_SELECTOR ) );

			for( var i = 0, len = slides.length; i < len; i++ ) {
				var slide = slides[ i ];

				// Don't bother updating invisible slides
				if( slide.style.display === 'none' ) {
					continue;
				}

				if( config.center || slide.classList.contains( 'center' ) ) {
					// Vertical stacks are not centred since their section
					// children will be
					if( slide.classList.contains( 'stack' ) ) {
						slide.style.top = 0;
					}
					else {
						slide.style.top = Math.max( - ( getAbsoluteHeight( slide ) / 2 ) - slidePadding, -slideHeight / 2 ) + 'px';
					}
				}
				else {
					slide.style.top = '';
				}

			}

			updateProgress();
			updateParallax();

		}

	}

	/**
	 * Applies layout logic to the contents of all slides in
	 * the presentation.
	 */
	function layoutSlideContents( width, height, padding ) {

		// Handle sizing of elements with the 'stretch' class
		toArray( dom.slides.querySelectorAll( 'section > .stretch' ) ).forEach( function( element ) {

			// Determine how much vertical space we can use
			var remainingHeight = getRemainingHeight( element, ( height - ( padding * 2 ) ) );

			// Consider the aspect ratio of media elements
			if( /(img|video)/gi.test( element.nodeName ) ) {
				var nw = element.naturalWidth || element.videoWidth,
					nh = element.naturalHeight || element.videoHeight;

				var es = Math.min( width / nw, remainingHeight / nh );

				element.style.width = ( nw * es ) + 'px';
				element.style.height = ( nh * es ) + 'px';

			}
			else {
				element.style.width = width + 'px';
				element.style.height = remainingHeight + 'px';
			}

		} );

	}

	/**
	 * Stores the vertical index of a stack so that the same
	 * vertical slide can be selected when navigating to and
	 * from the stack.
	 *
	 * @param {HTMLElement} stack The vertical stack element
	 * @param {int} v Index to memorize
	 */
	function setPreviousVerticalIndex( stack, v ) {

		if( typeof stack === 'object' && typeof stack.setAttribute === 'function' ) {
			stack.setAttribute( 'data-previous-indexv', v || 0 );
		}

	}

	/**
	 * Retrieves the vertical index which was stored using
	 * #setPreviousVerticalIndex() or 0 if no previous index
	 * exists.
	 *
	 * @param {HTMLElement} stack The vertical stack element
	 */
	function getPreviousVerticalIndex( stack ) {

		if( typeof stack === 'object' && typeof stack.setAttribute === 'function' && stack.classList.contains( 'stack' ) ) {
			// Prefer manually defined start-indexv
			var attributeName = stack.hasAttribute( 'data-start-indexv' ) ? 'data-start-indexv' : 'data-previous-indexv';

			return parseInt( stack.getAttribute( attributeName ) || 0, 10 );
		}

		return 0;

	}

	/**
	 * Displays the overview of slides (quick nav) by
	 * scaling down and arranging all slide elements.
	 *
	 * Experimental feature, might be dropped if perf
	 * can't be improved.
	 */
	function activateOverview() {

		// Only proceed if enabled in config
		if( config.overview ) {

			// Don't auto-slide while in overview mode
			cancelAutoSlide();

			var wasActive = dom.wrapper.classList.contains( 'overview' );

			// Vary the depth of the overview based on screen size
			var depth = window.innerWidth < 400 ? 1000 : 2500;

			dom.wrapper.classList.add( 'overview' );
			dom.wrapper.classList.remove( 'overview-deactivating' );

			clearTimeout( activateOverviewTimeout );
			clearTimeout( deactivateOverviewTimeout );

			// Not the pretties solution, but need to let the overview
			// class apply first so that slides are measured accurately
			// before we can position them
			activateOverviewTimeout = setTimeout( function() {

				var horizontalSlides = document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR );

				for( var i = 0, len1 = horizontalSlides.length; i < len1; i++ ) {
					var hslide = horizontalSlides[i],
						hoffset = config.rtl ? -105 : 105;

					hslide.setAttribute( 'data-index-h', i );

					// Apply CSS transform
					transformElement( hslide, 'translateZ(-'+ depth +'px) translate(' + ( ( i - indexh ) * hoffset ) + '%, 0%)' );

					if( hslide.classList.contains( 'stack' ) ) {

						var verticalSlides = hslide.querySelectorAll( 'section' );

						for( var j = 0, len2 = verticalSlides.length; j < len2; j++ ) {
							var verticalIndex = i === indexh ? indexv : getPreviousVerticalIndex( hslide );

							var vslide = verticalSlides[j];

							vslide.setAttribute( 'data-index-h', i );
							vslide.setAttribute( 'data-index-v', j );

							// Apply CSS transform
							transformElement( vslide, 'translate(0%, ' + ( ( j - verticalIndex ) * 105 ) + '%)' );

							// Navigate to this slide on click
							vslide.addEventListener( 'click', onOverviewSlideClicked, true );
						}

					}
					else {

						// Navigate to this slide on click
						hslide.addEventListener( 'click', onOverviewSlideClicked, true );

					}
				}

				updateSlidesVisibility();

				layout();

				if( !wasActive ) {
					// Notify observers of the overview showing
					dispatchEvent( 'overviewshown', {
						'indexh': indexh,
						'indexv': indexv,
						'currentSlide': currentSlide
					} );
				}

			}, 10 );

		}

	}

	/**
	 * Exits the slide overview and enters the currently
	 * active slide.
	 */
	function deactivateOverview() {

		// Only proceed if enabled in config
		if( config.overview ) {

			clearTimeout( activateOverviewTimeout );
			clearTimeout( deactivateOverviewTimeout );

			dom.wrapper.classList.remove( 'overview' );

			// Temporarily add a class so that transitions can do different things
			// depending on whether they are exiting/entering overview, or just
			// moving from slide to slide
			dom.wrapper.classList.add( 'overview-deactivating' );

			deactivateOverviewTimeout = setTimeout( function () {
				dom.wrapper.classList.remove( 'overview-deactivating' );
			}, 1 );

			// Select all slides
			toArray( document.querySelectorAll( SLIDES_SELECTOR ) ).forEach( function( slide ) {
				// Resets all transforms to use the external styles
				transformElement( slide, '' );

				slide.removeEventListener( 'click', onOverviewSlideClicked, true );
			} );

			slide( indexh, indexv );

			cueAutoSlide();

			// Notify observers of the overview hiding
			dispatchEvent( 'overviewhidden', {
				'indexh': indexh,
				'indexv': indexv,
				'currentSlide': currentSlide
			} );

		}
	}

	/**
	 * Toggles the slide overview mode on and off.
	 *
	 * @param {Boolean} override Optional flag which overrides the
	 * toggle logic and forcibly sets the desired state. True means
	 * overview is open, false means it's closed.
	 */
	function toggleOverview( override ) {

		if( typeof override === 'boolean' ) {
			override ? activateOverview() : deactivateOverview();
		}
		else {
			isOverview() ? deactivateOverview() : activateOverview();
		}

	}

	/**
	 * Checks if the overview is currently active.
	 *
	 * @return {Boolean} true if the overview is active,
	 * false otherwise
	 */
	function isOverview() {

		return dom.wrapper.classList.contains( 'overview' );

	}

	/**
	 * Checks if the current or specified slide is vertical
	 * (nested within another slide).
	 *
	 * @param {HTMLElement} slide [optional] The slide to check
	 * orientation of
	 */
	function isVerticalSlide( slide ) {

		// Prefer slide argument, otherwise use current slide
		slide = slide ? slide : currentSlide;

		return slide && slide.parentNode && !!slide.parentNode.nodeName.match( /section/i );

	}

	/**
	 * Handling the fullscreen functionality via the fullscreen API
	 *
	 * @see http://fullscreen.spec.whatwg.org/
	 * @see https://developer.mozilla.org/en-US/docs/DOM/Using_fullscreen_mode
	 */
	function enterFullscreen() {

		var element = document.body;

		// Check which implementation is available
		var requestMethod = element.requestFullScreen ||
							element.webkitRequestFullscreen ||
							element.webkitRequestFullScreen ||
							element.mozRequestFullScreen ||
							element.msRequestFullScreen;

		if( requestMethod ) {
			requestMethod.apply( element );
		}

	}

	/**
	 * Enters the paused mode which fades everything on screen to
	 * black.
	 */
	function pause() {

		var wasPaused = dom.wrapper.classList.contains( 'paused' );

		cancelAutoSlide();
		dom.wrapper.classList.add( 'paused' );

		if( wasPaused === false ) {
			dispatchEvent( 'paused' );
		}

	}

	/**
	 * Exits from the paused mode.
	 */
	function resume() {

		var wasPaused = dom.wrapper.classList.contains( 'paused' );
		dom.wrapper.classList.remove( 'paused' );

		cueAutoSlide();

		if( wasPaused ) {
			dispatchEvent( 'resumed' );
		}

	}

	/**
	 * Toggles the paused mode on and off.
	 */
	function togglePause() {

		if( isPaused() ) {
			resume();
		}
		else {
			pause();
		}

	}

	/**
	 * Checks if we are currently in the paused mode.
	 */
	function isPaused() {

		return dom.wrapper.classList.contains( 'paused' );

	}

	/**
	 * Steps from the current point in the presentation to the
	 * slide which matches the specified horizontal and vertical
	 * indices.
	 *
	 * @param {int} h Horizontal index of the target slide
	 * @param {int} v Vertical index of the target slide
	 * @param {int} f Optional index of a fragment within the
	 * target slide to activate
	 * @param {int} o Optional origin for use in multimaster environments
	 */
	function slide( h, v, f, o ) {

		// Remember where we were at before
		previousSlide = currentSlide;

		// Query all horizontal slides in the deck
		var horizontalSlides = document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR );

		// If no vertical index is specified and the upcoming slide is a
		// stack, resume at its previous vertical index
		if( v === undefined ) {
			v = getPreviousVerticalIndex( horizontalSlides[ h ] );
		}

		// If we were on a vertical stack, remember what vertical index
		// it was on so we can resume at the same position when returning
		if( previousSlide && previousSlide.parentNode && previousSlide.parentNode.classList.contains( 'stack' ) ) {
			setPreviousVerticalIndex( previousSlide.parentNode, indexv );
		}

		// Remember the state before this slide
		var stateBefore = state.concat();

		// Reset the state array
		state.length = 0;

		var indexhBefore = indexh || 0,
			indexvBefore = indexv || 0;

		// Activate and transition to the new slide
		indexh = updateSlides( HORIZONTAL_SLIDES_SELECTOR, h === undefined ? indexh : h );
		indexv = updateSlides( VERTICAL_SLIDES_SELECTOR, v === undefined ? indexv : v );

		// Update the visibility of slides now that the indices have changed
		updateSlidesVisibility();

		layout();

		// Apply the new state
		stateLoop: for( var i = 0, len = state.length; i < len; i++ ) {
			// Check if this state existed on the previous slide. If it
			// did, we will avoid adding it repeatedly
			for( var j = 0; j < stateBefore.length; j++ ) {
				if( stateBefore[j] === state[i] ) {
					stateBefore.splice( j, 1 );
					continue stateLoop;
				}
			}

			document.documentElement.classList.add( state[i] );

			// Dispatch custom event matching the state's name
			dispatchEvent( state[i] );
		}

		// Clean up the remains of the previous state
		while( stateBefore.length ) {
			document.documentElement.classList.remove( stateBefore.pop() );
		}

		// If the overview is active, re-activate it to update positions
		if( isOverview() ) {
			activateOverview();
		}

		// Find the current horizontal slide and any possible vertical slides
		// within it
		var currentHorizontalSlide = horizontalSlides[ indexh ],
			currentVerticalSlides = currentHorizontalSlide.querySelectorAll( 'section' );

		// Store references to the previous and current slides
		currentSlide = currentVerticalSlides[ indexv ] || currentHorizontalSlide;

		// Show fragment, if specified
		if( typeof f !== 'undefined' ) {
			navigateFragment( f );
		}

		// Dispatch an event if the slide changed
		var slideChanged = ( indexh !== indexhBefore || indexv !== indexvBefore );
		if( slideChanged ) {
			dispatchEvent( 'slidechanged', {
				'indexh': indexh,
				'indexv': indexv,
				'previousSlide': previousSlide,
				'currentSlide': currentSlide,
				'origin': o
			} );
		}
		else {
			// Ensure that the previous slide is never the same as the current
			previousSlide = null;
		}

		// Solves an edge case where the previous slide maintains the
		// 'present' class when navigating between adjacent vertical
		// stacks
		if( previousSlide ) {
			previousSlide.classList.remove( 'present' );

			// Reset all slides upon navigate to home
			// Issue: #285
			if ( document.querySelector( HOME_SLIDE_SELECTOR ).classList.contains( 'present' ) ) {
				// Launch async task
				setTimeout( function () {
					var slides = toArray( document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR + '.stack') ), i;
					for( i in slides ) {
						if( slides[i] ) {
							// Reset stack
							setPreviousVerticalIndex( slides[i], 0 );
						}
					}
				}, 0 );
			}
		}

		// Handle embedded content
		if( slideChanged ) {
			stopEmbeddedContent( previousSlide );
			startEmbeddedContent( currentSlide );
		}

		updateControls();
		updateProgress();
		updateBackground();
		updateParallax();
		updateSlideNumber();

		// Update the URL hash
		writeURL();

		cueAutoSlide();

	}

	/**
	 * Syncs the presentation with the current DOM. Useful
	 * when new slides or control elements are added or when
	 * the configuration has changed.
	 */
	function sync() {

		// Subscribe to input
		removeEventListeners();
		addEventListeners();

		// Force a layout to make sure the current config is accounted for
		layout();

		// Reflect the current autoSlide value
		autoSlide = config.autoSlide;

		// Start auto-sliding if it's enabled
		cueAutoSlide();

		// Re-create the slide backgrounds
		createBackgrounds();

		sortAllFragments();

		updateControls();
		updateProgress();
		updateBackground( true );
		updateSlideNumber();

	}

	/**
	 * Resets all vertical slides so that only the first
	 * is visible.
	 */
	function resetVerticalSlides() {

		var horizontalSlides = toArray( document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) );
		horizontalSlides.forEach( function( horizontalSlide ) {

			var verticalSlides = toArray( horizontalSlide.querySelectorAll( 'section' ) );
			verticalSlides.forEach( function( verticalSlide, y ) {

				if( y > 0 ) {
					verticalSlide.classList.remove( 'present' );
					verticalSlide.classList.remove( 'past' );
					verticalSlide.classList.add( 'future' );
				}

			} );

		} );

	}

	/**
	 * Sorts and formats all of fragments in the
	 * presentation.
	 */
	function sortAllFragments() {

		var horizontalSlides = toArray( document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) );
		horizontalSlides.forEach( function( horizontalSlide ) {

			var verticalSlides = toArray( horizontalSlide.querySelectorAll( 'section' ) );
			verticalSlides.forEach( function( verticalSlide, y ) {

				sortFragments( verticalSlide.querySelectorAll( '.fragment' ) );

			} );

			if( verticalSlides.length === 0 ) sortFragments( horizontalSlide.querySelectorAll( '.fragment' ) );

		} );

	}

	/**
	 * Updates one dimension of slides by showing the slide
	 * with the specified index.
	 *
	 * @param {String} selector A CSS selector that will fetch
	 * the group of slides we are working with
	 * @param {Number} index The index of the slide that should be
	 * shown
	 *
	 * @return {Number} The index of the slide that is now shown,
	 * might differ from the passed in index if it was out of
	 * bounds.
	 */
	function updateSlides( selector, index ) {

		// Select all slides and convert the NodeList result to
		// an array
		var slides = toArray( document.querySelectorAll( selector ) ),
			slidesLength = slides.length;

		if( slidesLength ) {

			// Should the index loop?
			if( config.loop ) {
				index %= slidesLength;

				if( index < 0 ) {
					index = slidesLength + index;
				}
			}

			// Enforce max and minimum index bounds
			index = Math.max( Math.min( index, slidesLength - 1 ), 0 );

			for( var i = 0; i < slidesLength; i++ ) {
				var element = slides[i];

				var reverse = config.rtl && !isVerticalSlide( element );

				element.classList.remove( 'past' );
				element.classList.remove( 'present' );
				element.classList.remove( 'future' );

				// http://www.w3.org/html/wg/drafts/html/master/editing.html#the-hidden-attribute
				element.setAttribute( 'hidden', '' );

				if( i < index ) {
					// Any element previous to index is given the 'past' class
					element.classList.add( reverse ? 'future' : 'past' );

					var pastFragments = toArray( element.querySelectorAll( '.fragment' ) );

					// Show all fragments on prior slides
					while( pastFragments.length ) {
						var pastFragment = pastFragments.pop();
						pastFragment.classList.add( 'visible' );
						pastFragment.classList.remove( 'current-fragment' );
					}
				}
				else if( i > index ) {
					// Any element subsequent to index is given the 'future' class
					element.classList.add( reverse ? 'past' : 'future' );

					var futureFragments = toArray( element.querySelectorAll( '.fragment.visible' ) );

					// No fragments in future slides should be visible ahead of time
					while( futureFragments.length ) {
						var futureFragment = futureFragments.pop();
						futureFragment.classList.remove( 'visible' );
						futureFragment.classList.remove( 'current-fragment' );
					}
				}

				// If this element contains vertical slides
				if( element.querySelector( 'section' ) ) {
					element.classList.add( 'stack' );
				}
			}

			// Mark the current slide as present
			slides[index].classList.add( 'present' );
			slides[index].removeAttribute( 'hidden' );

			// If this slide has a state associated with it, add it
			// onto the current state of the deck
			var slideState = slides[index].getAttribute( 'data-state' );
			if( slideState ) {
				state = state.concat( slideState.split( ' ' ) );
			}

		}
		else {
			// Since there are no slides we can't be anywhere beyond the
			// zeroth index
			index = 0;
		}

		return index;

	}

	/**
	 * Optimization method; hide all slides that are far away
	 * from the present slide.
	 */
	function updateSlidesVisibility() {

		// Select all slides and convert the NodeList result to
		// an array
		var horizontalSlides = toArray( document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) ),
			horizontalSlidesLength = horizontalSlides.length,
			distanceX,
			distanceY;

		if( horizontalSlidesLength ) {

			// The number of steps away from the present slide that will
			// be visible
			var viewDistance = isOverview() ? 10 : config.viewDistance;

			// Limit view distance on weaker devices
			if( isMobileDevice ) {
				viewDistance = isOverview() ? 6 : 1;
			}

			for( var x = 0; x < horizontalSlidesLength; x++ ) {
				var horizontalSlide = horizontalSlides[x];

				var verticalSlides = toArray( horizontalSlide.querySelectorAll( 'section' ) ),
					verticalSlidesLength = verticalSlides.length;

				// Loops so that it measures 1 between the first and last slides
				distanceX = Math.abs( ( indexh - x ) % ( horizontalSlidesLength - viewDistance ) ) || 0;

				// Show the horizontal slide if it's within the view distance
				horizontalSlide.style.display = distanceX > viewDistance ? 'none' : 'block';

				if( verticalSlidesLength ) {

					var oy = getPreviousVerticalIndex( horizontalSlide );

					for( var y = 0; y < verticalSlidesLength; y++ ) {
						var verticalSlide = verticalSlides[y];

						distanceY = x === indexh ? Math.abs( indexv - y ) : Math.abs( y - oy );

						verticalSlide.style.display = ( distanceX + distanceY ) > viewDistance ? 'none' : 'block';
					}

				}
			}

		}

	}

	/**
	 * Updates the progress bar to reflect the current slide.
	 */
	function updateProgress() {

		// Update progress if enabled
		if( config.progress && dom.progress ) {

			var horizontalSlides = toArray( document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) );

			// The number of past and total slides
			var totalCount = document.querySelectorAll( SLIDES_SELECTOR + ':not(.stack)' ).length;
			var pastCount = 0;

			// Step through all slides and count the past ones
			mainLoop: for( var i = 0; i < horizontalSlides.length; i++ ) {

				var horizontalSlide = horizontalSlides[i];
				var verticalSlides = toArray( horizontalSlide.querySelectorAll( 'section' ) );

				for( var j = 0; j < verticalSlides.length; j++ ) {

					// Stop as soon as we arrive at the present
					if( verticalSlides[j].classList.contains( 'present' ) ) {
						break mainLoop;
					}

					pastCount++;

				}

				// Stop as soon as we arrive at the present
				if( horizontalSlide.classList.contains( 'present' ) ) {
					break;
				}

				// Don't count the wrapping section for vertical slides
				if( horizontalSlide.classList.contains( 'stack' ) === false ) {
					pastCount++;
				}

			}

			dom.progressbar.style.width = ( pastCount / ( totalCount - 1 ) ) * window.innerWidth + 'px';

		}

	}

	/**
	 * Updates the slide number div to reflect the current slide.
	 */
	function updateSlideNumber() {

		// Update slide number if enabled
		if( config.slideNumber && dom.slideNumber) {

			// Display the number of the page using 'indexh - indexv' format
			var indexString = indexh;
			if( indexv > 0 ) {
				indexString += ' - ' + indexv;
			}

			dom.slideNumber.innerHTML = indexString;
		}

	}

	/**
	 * Updates the state of all control/navigation arrows.
	 */
	function updateControls() {

		var routes = availableRoutes();
		var fragments = availableFragments();

		// Remove the 'enabled' class from all directions
		dom.controlsLeft.concat( dom.controlsRight )
						.concat( dom.controlsUp )
						.concat( dom.controlsDown )
						.concat( dom.controlsPrev )
						.concat( dom.controlsNext ).forEach( function( node ) {
			node.classList.remove( 'enabled' );
			node.classList.remove( 'fragmented' );
		} );

		// Add the 'enabled' class to the available routes
		if( routes.left ) dom.controlsLeft.forEach( function( el ) { el.classList.add( 'enabled' );	} );
		if( routes.right ) dom.controlsRight.forEach( function( el ) { el.classList.add( 'enabled' ); } );
		if( routes.up ) dom.controlsUp.forEach( function( el ) { el.classList.add( 'enabled' );	} );
		if( routes.down ) dom.controlsDown.forEach( function( el ) { el.classList.add( 'enabled' ); } );

		// Prev/next buttons
		if( routes.left || routes.up ) dom.controlsPrev.forEach( function( el ) { el.classList.add( 'enabled' ); } );
		if( routes.right || routes.down ) dom.controlsNext.forEach( function( el ) { el.classList.add( 'enabled' ); } );

		// Highlight fragment directions
		if( currentSlide ) {

			// Always apply fragment decorator to prev/next buttons
			if( fragments.prev ) dom.controlsPrev.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); } );
			if( fragments.next ) dom.controlsNext.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); } );

			// Apply fragment decorators to directional buttons based on
			// what slide axis they are in
			if( isVerticalSlide( currentSlide ) ) {
				if( fragments.prev ) dom.controlsUp.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); } );
				if( fragments.next ) dom.controlsDown.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); } );
			}
			else {
				if( fragments.prev ) dom.controlsLeft.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); } );
				if( fragments.next ) dom.controlsRight.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); } );
			}

		}

	}

	/**
	 * Updates the background elements to reflect the current
	 * slide.
	 *
	 * @param {Boolean} includeAll If true, the backgrounds of
	 * all vertical slides (not just the present) will be updated.
	 */
	function updateBackground( includeAll ) {

		var currentBackground = null;

		// Reverse past/future classes when in RTL mode
		var horizontalPast = config.rtl ? 'future' : 'past',
			horizontalFuture = config.rtl ? 'past' : 'future';

		// Update the classes of all backgrounds to match the
		// states of their slides (past/present/future)
		toArray( dom.background.childNodes ).forEach( function( backgroundh, h ) {

			if( h < indexh ) {
				backgroundh.className = 'slide-background ' + horizontalPast;
			}
			else if ( h > indexh ) {
				backgroundh.className = 'slide-background ' + horizontalFuture;
			}
			else {
				backgroundh.className = 'slide-background present';

				// Store a reference to the current background element
				currentBackground = backgroundh;
			}

			if( includeAll || h === indexh ) {
				toArray( backgroundh.childNodes ).forEach( function( backgroundv, v ) {

					if( v < indexv ) {
						backgroundv.className = 'slide-background past';
					}
					else if ( v > indexv ) {
						backgroundv.className = 'slide-background future';
					}
					else {
						backgroundv.className = 'slide-background present';

						// Only if this is the present horizontal and vertical slide
						if( h === indexh ) currentBackground = backgroundv;
					}

				} );
			}

		} );

		// Don't transition between identical backgrounds. This
		// prevents unwanted flicker.
		if( currentBackground ) {
			var previousBackgroundHash = previousBackground ? previousBackground.getAttribute( 'data-background-hash' ) : null;
			var currentBackgroundHash = currentBackground.getAttribute( 'data-background-hash' );
			if( currentBackgroundHash && currentBackgroundHash === previousBackgroundHash && currentBackground !== previousBackground ) {
				dom.background.classList.add( 'no-transition' );
			}

			previousBackground = currentBackground;
		}

		// Allow the first background to apply without transition
		setTimeout( function() {
			dom.background.classList.remove( 'no-transition' );
		}, 1 );

	}

	/**
	 * Updates the position of the parallax background based
	 * on the current slide index.
	 */
	function updateParallax() {

		if( config.parallaxBackgroundImage ) {

			var horizontalSlides = document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ),
				verticalSlides = document.querySelectorAll( VERTICAL_SLIDES_SELECTOR );

			var backgroundSize = dom.background.style.backgroundSize.split( ' ' ),
				backgroundWidth, backgroundHeight;

			if( backgroundSize.length === 1 ) {
				backgroundWidth = backgroundHeight = parseInt( backgroundSize[0], 10 );
			}
			else {
				backgroundWidth = parseInt( backgroundSize[0], 10 );
				backgroundHeight = parseInt( backgroundSize[1], 10 );
			}

			var slideWidth = dom.background.offsetWidth;
			var horizontalSlideCount = horizontalSlides.length;
			var horizontalOffset = -( backgroundWidth - slideWidth ) / ( horizontalSlideCount-1 ) * indexh;

			var slideHeight = dom.background.offsetHeight;
			var verticalSlideCount = verticalSlides.length;
			var verticalOffset = verticalSlideCount > 0 ? -( backgroundHeight - slideHeight ) / ( verticalSlideCount-1 ) * indexv : 0;

			dom.background.style.backgroundPosition = horizontalOffset + 'px ' + verticalOffset + 'px';

		}

	}

	/**
	 * Determine what available routes there are for navigation.
	 *
	 * @return {Object} containing four booleans: left/right/up/down
	 */
	function availableRoutes() {

		var horizontalSlides = document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ),
			verticalSlides = document.querySelectorAll( VERTICAL_SLIDES_SELECTOR );

		var routes = {
			left: indexh > 0 || config.loop,
			right: indexh < horizontalSlides.length - 1 || config.loop,
			up: indexv > 0,
			down: indexv < verticalSlides.length - 1
		};

		// reverse horizontal controls for rtl
		if( config.rtl ) {
			var left = routes.left;
			routes.left = routes.right;
			routes.right = left;
		}

		return routes;

	}

	/**
	 * Returns an object describing the available fragment
	 * directions.
	 *
	 * @return {Object} two boolean properties: prev/next
	 */
	function availableFragments() {

		if( currentSlide && config.fragments ) {
			var fragments = currentSlide.querySelectorAll( '.fragment' );
			var hiddenFragments = currentSlide.querySelectorAll( '.fragment:not(.visible)' );

			return {
				prev: fragments.length - hiddenFragments.length > 0,
				next: !!hiddenFragments.length
			};
		}
		else {
			return { prev: false, next: false };
		}

	}

	/**
	 * Start playback of any embedded content inside of
	 * the targeted slide.
	 */
	function startEmbeddedContent( slide ) {

		if( slide && !isSpeakerNotes() ) {
			// HTML5 media elements
			toArray( slide.querySelectorAll( 'video, audio' ) ).forEach( function( el ) {
				if( el.hasAttribute( 'data-autoplay' ) ) {
					el.play();
				}
			} );

			// iframe embeds
			toArray( slide.querySelectorAll( 'iframe' ) ).forEach( function( el ) {
				el.contentWindow.postMessage( 'slide:start', '*' );
			});

			// YouTube embeds
			toArray( slide.querySelectorAll( 'iframe[src*="youtube.com/embed/"]' ) ).forEach( function( el ) {
				if( el.hasAttribute( 'data-autoplay' ) ) {
					el.contentWindow.postMessage( '{"event":"command","func":"playVideo","args":""}', '*' );
				}
			});
		}

	}

	/**
	 * Stop playback of any embedded content inside of
	 * the targeted slide.
	 */
	function stopEmbeddedContent( slide ) {

		if( slide ) {
			// HTML5 media elements
			toArray( slide.querySelectorAll( 'video, audio' ) ).forEach( function( el ) {
				if( !el.hasAttribute( 'data-ignore' ) ) {
					el.pause();
				}
			} );

			// iframe embeds
			toArray( slide.querySelectorAll( 'iframe' ) ).forEach( function( el ) {
				el.contentWindow.postMessage( 'slide:stop', '*' );
			});

			// YouTube embeds
			toArray( slide.querySelectorAll( 'iframe[src*="youtube.com/embed/"]' ) ).forEach( function( el ) {
				if( !el.hasAttribute( 'data-ignore' ) && typeof el.contentWindow.postMessage === 'function' ) {
					el.contentWindow.postMessage( '{"event":"command","func":"pauseVideo","args":""}', '*' );
				}
			});
		}

	}

	/**
	 * Checks if this presentation is running inside of the
	 * speaker notes window.
	 */
	function isSpeakerNotes() {

		return !!window.location.search.match( /receiver/gi );

	}

	/**
	 * Reads the current URL (hash) and navigates accordingly.
	 */
	function readURL() {

		var hash = window.location.hash;

		// Attempt to parse the hash as either an index or name
		var bits = hash.slice( 2 ).split( '/' ),
			name = hash.replace( /#|\//gi, '' );

		// If the first bit is invalid and there is a name we can
		// assume that this is a named link
		if( isNaN( parseInt( bits[0], 10 ) ) && name.length ) {
			// Find the slide with the specified name
			var element = document.querySelector( '#' + name );

			if( element ) {
				// Find the position of the named slide and navigate to it
				var indices = Reveal.getIndices( element );
				slide( indices.h, indices.v );
			}
			// If the slide doesn't exist, navigate to the current slide
			else {
				slide( indexh || 0, indexv || 0 );
			}
		}
		else {
			// Read the index components of the hash
			var h = parseInt( bits[0], 10 ) || 0,
				v = parseInt( bits[1], 10 ) || 0;

			if( h !== indexh || v !== indexv ) {
				slide( h, v );
			}
		}

	}

	/**
	 * Updates the page URL (hash) to reflect the current
	 * state.
	 *
	 * @param {Number} delay The time in ms to wait before
	 * writing the hash
	 */
	function writeURL( delay ) {

		if( config.history ) {

			// Make sure there's never more than one timeout running
			clearTimeout( writeURLTimeout );

			// If a delay is specified, timeout this call
			if( typeof delay === 'number' ) {
				writeURLTimeout = setTimeout( writeURL, delay );
			}
			else {
				var url = '/';

				// If the current slide has an ID, use that as a named link
				if( currentSlide && typeof currentSlide.getAttribute( 'id' ) === 'string' ) {
					url = '/' + currentSlide.getAttribute( 'id' );
				}
				// Otherwise use the /h/v index
				else {
					if( indexh > 0 || indexv > 0 ) url += indexh;
					if( indexv > 0 ) url += '/' + indexv;
				}

				window.location.hash = url;
			}
		}

	}

	/**
	 * Retrieves the h/v location of the current, or specified,
	 * slide.
	 *
	 * @param {HTMLElement} slide If specified, the returned
	 * index will be for this slide rather than the currently
	 * active one
	 *
	 * @return {Object} { h: <int>, v: <int>, f: <int> }
	 */
	function getIndices( slide ) {

		// By default, return the current indices
		var h = indexh,
			v = indexv,
			f;

		// If a slide is specified, return the indices of that slide
		if( slide ) {
			var isVertical = isVerticalSlide( slide );
			var slideh = isVertical ? slide.parentNode : slide;

			// Select all horizontal slides
			var horizontalSlides = toArray( document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) );

			// Now that we know which the horizontal slide is, get its index
			h = Math.max( horizontalSlides.indexOf( slideh ), 0 );

			// If this is a vertical slide, grab the vertical index
			if( isVertical ) {
				v = Math.max( toArray( slide.parentNode.querySelectorAll( 'section' ) ).indexOf( slide ), 0 );
			}
		}

		if( !slide && currentSlide ) {
			var hasFragments = currentSlide.querySelectorAll( '.fragment' ).length > 0;
			if( hasFragments ) {
				var visibleFragments = currentSlide.querySelectorAll( '.fragment.visible' );
				f = visibleFragments.length - 1;
			}
		}

		return { h: h, v: v, f: f };

	}

	/**
	 * Return a sorted fragments list, ordered by an increasing
	 * "data-fragment-index" attribute.
	 *
	 * Fragments will be revealed in the order that they are returned by
	 * this function, so you can use the index attributes to control the
	 * order of fragment appearance.
	 *
	 * To maintain a sensible default fragment order, fragments are presumed
	 * to be passed in document order. This function adds a "fragment-index"
	 * attribute to each node if such an attribute is not already present,
	 * and sets that attribute to an integer value which is the position of
	 * the fragment within the fragments list.
	 */
	function sortFragments( fragments ) {

		fragments = toArray( fragments );

		var ordered = [],
			unordered = [],
			sorted = [];

		// Group ordered and unordered elements
		fragments.forEach( function( fragment, i ) {
			if( fragment.hasAttribute( 'data-fragment-index' ) ) {
				var index = parseInt( fragment.getAttribute( 'data-fragment-index' ), 10 );

				if( !ordered[index] ) {
					ordered[index] = [];
				}

				ordered[index].push( fragment );
			}
			else {
				unordered.push( [ fragment ] );
			}
		} );

		// Append fragments without explicit indices in their
		// DOM order
		ordered = ordered.concat( unordered );

		// Manually count the index up per group to ensure there
		// are no gaps
		var index = 0;

		// Push all fragments in their sorted order to an array,
		// this flattens the groups
		ordered.forEach( function( group ) {
			group.forEach( function( fragment ) {
				sorted.push( fragment );
				fragment.setAttribute( 'data-fragment-index', index );
			} );

			index ++;
		} );

		return sorted;

	}

	/**
	 * Navigate to the specified slide fragment.
	 *
	 * @param {Number} index The index of the fragment that
	 * should be shown, -1 means all are invisible
	 * @param {Number} offset Integer offset to apply to the
	 * fragment index
	 *
	 * @return {Boolean} true if a change was made in any
	 * fragments visibility as part of this call
	 */
	function navigateFragment( index, offset ) {

		if( currentSlide && config.fragments ) {

			var fragments = sortFragments( currentSlide.querySelectorAll( '.fragment' ) );
			if( fragments.length ) {

				// If no index is specified, find the current
				if( typeof index !== 'number' ) {
					var lastVisibleFragment = sortFragments( currentSlide.querySelectorAll( '.fragment.visible' ) ).pop();

					if( lastVisibleFragment ) {
						index = parseInt( lastVisibleFragment.getAttribute( 'data-fragment-index' ) || 0, 10 );
					}
					else {
						index = -1;
					}
				}

				// If an offset is specified, apply it to the index
				if( typeof offset === 'number' ) {
					index += offset;
				}

				var fragmentsShown = [],
					fragmentsHidden = [];

				toArray( fragments ).forEach( function( element, i ) {

					if( element.hasAttribute( 'data-fragment-index' ) ) {
						i = parseInt( element.getAttribute( 'data-fragment-index' ), 10 );
					}

					// Visible fragments
					if( i <= index ) {
						if( !element.classList.contains( 'visible' ) ) fragmentsShown.push( element );
						element.classList.add( 'visible' );
						element.classList.remove( 'current-fragment' );

						if( i === index ) {
							element.classList.add( 'current-fragment' );
						}
					}
					// Hidden fragments
					else {
						if( element.classList.contains( 'visible' ) ) fragmentsHidden.push( element );
						element.classList.remove( 'visible' );
						element.classList.remove( 'current-fragment' );
					}


				} );

				if( fragmentsHidden.length ) {
					dispatchEvent( 'fragmenthidden', { fragment: fragmentsHidden[0], fragments: fragmentsHidden } );
				}

				if( fragmentsShown.length ) {
					dispatchEvent( 'fragmentshown', { fragment: fragmentsShown[0], fragments: fragmentsShown } );
				}

				updateControls();

				return !!( fragmentsShown.length || fragmentsHidden.length );

			}

		}

		return false;

	}

	/**
	 * Navigate to the next slide fragment.
	 *
	 * @return {Boolean} true if there was a next fragment,
	 * false otherwise
	 */
	function nextFragment() {

		return navigateFragment( null, 1 );

	}

	/**
	 * Navigate to the previous slide fragment.
	 *
	 * @return {Boolean} true if there was a previous fragment,
	 * false otherwise
	 */
	function previousFragment() {

		return navigateFragment( null, -1 );

	}

	/**
	 * Cues a new automated slide if enabled in the config.
	 */
	function cueAutoSlide() {

		cancelAutoSlide();

		if( currentSlide ) {

			var parentAutoSlide = currentSlide.parentNode ? currentSlide.parentNode.getAttribute( 'data-autoslide' ) : null;
			var slideAutoSlide = currentSlide.getAttribute( 'data-autoslide' );

			// Pick value in the following priority order:
			// 1. Current slide's data-autoslide
			// 2. Parent slide's data-autoslide
			// 3. Global autoSlide setting
			if( slideAutoSlide ) {
				autoSlide = parseInt( slideAutoSlide, 10 );
			}
			else if( parentAutoSlide ) {
				autoSlide = parseInt( parentAutoSlide, 10 );
			}
			else {
				autoSlide = config.autoSlide;
			}

			// If there are media elements with data-autoplay,
			// automatically set the autoSlide duration to the
			// length of that media
			toArray( currentSlide.querySelectorAll( 'video, audio' ) ).forEach( function( el ) {
				if( el.hasAttribute( 'data-autoplay' ) ) {
					if( autoSlide && el.duration * 1000 > autoSlide ) {
						autoSlide = ( el.duration * 1000 ) + 1000;
					}
				}
			} );

			// Cue the next auto-slide if:
			// - There is an autoSlide value
			// - Auto-sliding isn't paused by the user
			// - The presentation isn't paused
			// - The overview isn't active
			// - The presentation isn't over
			if( autoSlide && !autoSlidePaused && !isPaused() && !isOverview() && ( !Reveal.isLastSlide() || config.loop === true ) ) {
				autoSlideTimeout = setTimeout( navigateNext, autoSlide );
				autoSlideStartTime = Date.now();
			}

			if( autoSlidePlayer ) {
				autoSlidePlayer.setPlaying( autoSlideTimeout !== -1 );
			}

		}

	}

	/**
	 * Cancels any ongoing request to auto-slide.
	 */
	function cancelAutoSlide() {

		clearTimeout( autoSlideTimeout );
		autoSlideTimeout = -1;

	}

	function pauseAutoSlide() {

		autoSlidePaused = true;
		clearTimeout( autoSlideTimeout );

		if( autoSlidePlayer ) {
			autoSlidePlayer.setPlaying( false );
		}

	}

	function resumeAutoSlide() {

		autoSlidePaused = false;
		cueAutoSlide();

	}

	function navigateLeft() {

		// Reverse for RTL
		if( config.rtl ) {
			if( ( isOverview() || nextFragment() === false ) && availableRoutes().left ) {
				slide( indexh + 1 );
			}
		}
		// Normal navigation
		else if( ( isOverview() || previousFragment() === false ) && availableRoutes().left ) {
			slide( indexh - 1 );
		}

	}

	function navigateRight() {

		// Reverse for RTL
		if( config.rtl ) {
			if( ( isOverview() || previousFragment() === false ) && availableRoutes().right ) {
				slide( indexh - 1 );
			}
		}
		// Normal navigation
		else if( ( isOverview() || nextFragment() === false ) && availableRoutes().right ) {
			slide( indexh + 1 );
		}

	}

	function navigateUp() {

		// Prioritize hiding fragments
		if( ( isOverview() || previousFragment() === false ) && availableRoutes().up ) {
			slide( indexh, indexv - 1 );
		}

	}

	function navigateDown() {

		// Prioritize revealing fragments
		if( ( isOverview() || nextFragment() === false ) && availableRoutes().down ) {
			slide( indexh, indexv + 1 );
		}

	}

	/**
	 * Navigates backwards, prioritized in the following order:
	 * 1) Previous fragment
	 * 2) Previous vertical slide
	 * 3) Previous horizontal slide
	 */
	function navigatePrev() {

		// Prioritize revealing fragments
		if( previousFragment() === false ) {
			if( availableRoutes().up ) {
				navigateUp();
			}
			else {
				// Fetch the previous horizontal slide, if there is one
				var previousSlide = document.querySelector( HORIZONTAL_SLIDES_SELECTOR + '.past:nth-child(' + indexh + ')' );

				if( previousSlide ) {
					var v = ( previousSlide.querySelectorAll( 'section' ).length - 1 ) || undefined;
					var h = indexh - 1;
					slide( h, v );
				}
			}
		}

	}

	/**
	 * Same as #navigatePrev() but navigates forwards.
	 */
	function navigateNext() {

		// Prioritize revealing fragments
		if( nextFragment() === false ) {
			availableRoutes().down ? navigateDown() : navigateRight();
		}

		// If auto-sliding is enabled we need to cue up
		// another timeout
		cueAutoSlide();

	}


	// --------------------------------------------------------------------//
	// ----------------------------- EVENTS -------------------------------//
	// --------------------------------------------------------------------//

	/**
	 * Called by all event handlers that are based on user
	 * input.
	 */
	function onUserInput( event ) {

		if( config.autoSlideStoppable ) {
			pauseAutoSlide();
		}

	}

	/**
	 * Handler for the document level 'keydown' event.
	 */
	function onDocumentKeyDown( event ) {

		onUserInput( event );

		// Check if there's a focused element that could be using
		// the keyboard
		var activeElement = document.activeElement;
		var hasFocus = !!( document.activeElement && ( document.activeElement.type || document.activeElement.href || document.activeElement.contentEditable !== 'inherit' ) );

		// Disregard the event if there's a focused element or a
		// keyboard modifier key is present
		if( hasFocus || (event.shiftKey && event.keyCode !== 32) || event.altKey || event.ctrlKey || event.metaKey ) return;

		// While paused only allow "unpausing" keyboard events (b and .)
		if( isPaused() && [66,190,191].indexOf( event.keyCode ) === -1 ) {
			return false;
		}

		var triggered = false;

		// 1. User defined key bindings
		if( typeof config.keyboard === 'object' ) {

			for( var key in config.keyboard ) {

				// Check if this binding matches the pressed key
				if( parseInt( key, 10 ) === event.keyCode ) {

					var value = config.keyboard[ key ];

					// Callback function
					if( typeof value === 'function' ) {
						value.apply( null, [ event ] );
					}
					// String shortcuts to reveal.js API
					else if( typeof value === 'string' && typeof Reveal[ value ] === 'function' ) {
						Reveal[ value ].call();
					}

					triggered = true;

				}

			}

		}

		// 2. System defined key bindings
		if( triggered === false ) {

			// Assume true and try to prove false
			triggered = true;

			switch( event.keyCode ) {
				// p, page up
				case 80: case 33: navigatePrev(); break;
				// n, page down
				case 78: case 34: navigateNext(); break;
				// h, left
				case 72: case 37: navigateLeft(); break;
				// l, right
				case 76: case 39: navigateRight(); break;
				// k, up
				case 75: case 38: navigateUp(); break;
				// j, down
				case 74: case 40: navigateDown(); break;
				// home
				case 36: slide( 0 ); break;
				// end
				case 35: slide( Number.MAX_VALUE ); break;
				// space
				case 32: isOverview() ? deactivateOverview() : event.shiftKey ? navigatePrev() : navigateNext(); break;
				// return
				case 13: isOverview() ? deactivateOverview() : triggered = false; break;
				// b, period, Logitech presenter tools "black screen" button
				case 66: case 190: case 191: togglePause(); break;
				// f
				case 70: enterFullscreen(); break;
				default:
					triggered = false;
			}

		}

		// If the input resulted in a triggered action we should prevent
		// the browsers default behavior
		if( triggered ) {
			event.preventDefault();
		}
		// ESC or O key
		else if ( ( event.keyCode === 27 || event.keyCode === 79 ) && features.transforms3d ) {
			if( dom.preview ) {
				closePreview();
			}
			else {
				toggleOverview();
			}

			event.preventDefault();
		}

		// If auto-sliding is enabled we need to cue up
		// another timeout
		cueAutoSlide();

	}

	/**
	 * Handler for the 'touchstart' event, enables support for
	 * swipe and pinch gestures.
	 */
	function onTouchStart( event ) {

		touch.startX = event.touches[0].clientX;
		touch.startY = event.touches[0].clientY;
		touch.startCount = event.touches.length;

		// If there's two touches we need to memorize the distance
		// between those two points to detect pinching
		if( event.touches.length === 2 && config.overview ) {
			touch.startSpan = distanceBetween( {
				x: event.touches[1].clientX,
				y: event.touches[1].clientY
			}, {
				x: touch.startX,
				y: touch.startY
			} );
		}

	}

	/**
	 * Handler for the 'touchmove' event.
	 */
	function onTouchMove( event ) {

		// Each touch should only trigger one action
		if( !touch.captured ) {
			onUserInput( event );

			var currentX = event.touches[0].clientX;
			var currentY = event.touches[0].clientY;

			// If the touch started with two points and still has
			// two active touches; test for the pinch gesture
			if( event.touches.length === 2 && touch.startCount === 2 && config.overview ) {

				// The current distance in pixels between the two touch points
				var currentSpan = distanceBetween( {
					x: event.touches[1].clientX,
					y: event.touches[1].clientY
				}, {
					x: touch.startX,
					y: touch.startY
				} );

				// If the span is larger than the desire amount we've got
				// ourselves a pinch
				if( Math.abs( touch.startSpan - currentSpan ) > touch.threshold ) {
					touch.captured = true;

					if( currentSpan < touch.startSpan ) {
						activateOverview();
					}
					else {
						deactivateOverview();
					}
				}

				event.preventDefault();

			}
			// There was only one touch point, look for a swipe
			else if( event.touches.length === 1 && touch.startCount !== 2 ) {

				var deltaX = currentX - touch.startX,
					deltaY = currentY - touch.startY;

				if( deltaX > touch.threshold && Math.abs( deltaX ) > Math.abs( deltaY ) ) {
					touch.captured = true;
					navigateLeft();
				}
				else if( deltaX < -touch.threshold && Math.abs( deltaX ) > Math.abs( deltaY ) ) {
					touch.captured = true;
					navigateRight();
				}
				else if( deltaY > touch.threshold ) {
					touch.captured = true;
					navigateUp();
				}
				else if( deltaY < -touch.threshold ) {
					touch.captured = true;
					navigateDown();
				}

				// If we're embedded, only block touch events if they have
				// triggered an action
				if( config.embedded ) {
					if( touch.captured || isVerticalSlide( currentSlide ) ) {
						event.preventDefault();
					}
				}
				// Not embedded? Block them all to avoid needless tossing
				// around of the viewport in iOS
				else {
					event.preventDefault();
				}

			}
		}
		// There's a bug with swiping on some Android devices unless
		// the default action is always prevented
		else if( navigator.userAgent.match( /android/gi ) ) {
			event.preventDefault();
		}

	}

	/**
	 * Handler for the 'touchend' event.
	 */
	function onTouchEnd( event ) {

		touch.captured = false;

	}

	/**
	 * Convert pointer down to touch start.
	 */
	function onPointerDown( event ) {

		if( event.pointerType === event.MSPOINTER_TYPE_TOUCH ) {
			event.touches = [{ clientX: event.clientX, clientY: event.clientY }];
			onTouchStart( event );
		}

	}

	/**
	 * Convert pointer move to touch move.
	 */
	function onPointerMove( event ) {

		if( event.pointerType === event.MSPOINTER_TYPE_TOUCH ) {
			event.touches = [{ clientX: event.clientX, clientY: event.clientY }];
			onTouchMove( event );
		}

	}

	/**
	 * Convert pointer up to touch end.
	 */
	function onPointerUp( event ) {

		if( event.pointerType === event.MSPOINTER_TYPE_TOUCH ) {
			event.touches = [{ clientX: event.clientX, clientY: event.clientY }];
			onTouchEnd( event );
		}

	}

	/**
	 * Handles mouse wheel scrolling, throttled to avoid skipping
	 * multiple slides.
	 */
	function onDocumentMouseScroll( event ) {

		if( Date.now() - lastMouseWheelStep > 600 ) {

			lastMouseWheelStep = Date.now();

			var delta = event.detail || -event.wheelDelta;
			if( delta > 0 ) {
				navigateNext();
			}
			else {
				navigatePrev();
			}

		}

	}

	/**
	 * Clicking on the progress bar results in a navigation to the
	 * closest approximate horizontal slide using this equation:
	 *
	 * ( clickX / presentationWidth ) * numberOfSlides
	 */
	function onProgressClicked( event ) {

		onUserInput( event );

		event.preventDefault();

		var slidesTotal = toArray( document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) ).length;
		var slideIndex = Math.floor( ( event.clientX / dom.wrapper.offsetWidth ) * slidesTotal );

		slide( slideIndex );

	}

	/**
	 * Event handler for navigation control buttons.
	 */
	function onNavigateLeftClicked( event ) { event.preventDefault(); onUserInput(); navigateLeft(); }
	function onNavigateRightClicked( event ) { event.preventDefault(); onUserInput(); navigateRight(); }
	function onNavigateUpClicked( event ) { event.preventDefault(); onUserInput(); navigateUp(); }
	function onNavigateDownClicked( event ) { event.preventDefault(); onUserInput(); navigateDown(); }
	function onNavigatePrevClicked( event ) { event.preventDefault(); onUserInput(); navigatePrev(); }
	function onNavigateNextClicked( event ) { event.preventDefault(); onUserInput(); navigateNext(); }

	/**
	 * Handler for the window level 'hashchange' event.
	 */
	function onWindowHashChange( event ) {

		readURL();

	}

	/**
	 * Handler for the window level 'resize' event.
	 */
	function onWindowResize( event ) {

		layout();

	}

	/**
	 * Handle for the window level 'visibilitychange' event.
	 */
	function onPageVisibilityChange( event ) {

		var isHidden =  document.webkitHidden ||
						document.msHidden ||
						document.hidden;

		// If, after clicking a link or similar and we're coming back,
		// focus the document.body to ensure we can use keyboard shortcuts
		if( isHidden === false && document.activeElement !== document.body ) {
			document.activeElement.blur();
			document.body.focus();
		}

	}

	/**
	 * Invoked when a slide is and we're in the overview.
	 */
	function onOverviewSlideClicked( event ) {

		// TODO There's a bug here where the event listeners are not
		// removed after deactivating the overview.
		if( eventsAreBound && isOverview() ) {
			event.preventDefault();

			var element = event.target;

			while( element && !element.nodeName.match( /section/gi ) ) {
				element = element.parentNode;
			}

			if( element && !element.classList.contains( 'disabled' ) ) {

				deactivateOverview();

				if( element.nodeName.match( /section/gi ) ) {
					var h = parseInt( element.getAttribute( 'data-index-h' ), 10 ),
						v = parseInt( element.getAttribute( 'data-index-v' ), 10 );

					slide( h, v );
				}

			}
		}

	}

	/**
	 * Handles clicks on links that are set to preview in the
	 * iframe overlay.
	 */
	function onPreviewLinkClicked( event ) {

		var url = event.target.getAttribute( 'href' );
		if( url ) {
			openPreview( url );
			event.preventDefault();
		}

	}

	/**
	 * Handles click on the auto-sliding controls element.
	 */
	function onAutoSlidePlayerClick( event ) {

		// Replay
		if( Reveal.isLastSlide() && config.loop === false ) {
			slide( 0, 0 );
			resumeAutoSlide();
		}
		// Resume
		else if( autoSlidePaused ) {
			resumeAutoSlide();
		}
		// Pause
		else {
			pauseAutoSlide();
		}

	}


	// --------------------------------------------------------------------//
	// ------------------------ PLAYBACK COMPONENT ------------------------//
	// --------------------------------------------------------------------//


	/**
	 * Constructor for the playback component, which displays
	 * play/pause/progress controls.
	 *
	 * @param {HTMLElement} container The component will append
	 * itself to this
	 * @param {Function} progressCheck A method which will be
	 * called frequently to get the current progress on a range
	 * of 0-1
	 */
	function Playback( container, progressCheck ) {

		// Cosmetics
		this.diameter = 50;
		this.thickness = 3;

		// Flags if we are currently playing
		this.playing = false;

		// Current progress on a 0-1 range
		this.progress = 0;

		// Used to loop the animation smoothly
		this.progressOffset = 1;

		this.container = container;
		this.progressCheck = progressCheck;

		this.canvas = document.createElement( 'canvas' );
		this.canvas.className = 'playback';
		this.canvas.width = this.diameter;
		this.canvas.height = this.diameter;
		this.context = this.canvas.getContext( '2d' );

		this.container.appendChild( this.canvas );

		this.render();

	}

	Playback.prototype.setPlaying = function( value ) {

		var wasPlaying = this.playing;

		this.playing = value;

		// Start repainting if we weren't already
		if( !wasPlaying && this.playing ) {
			this.animate();
		}
		else {
			this.render();
		}

	};

	Playback.prototype.animate = function() {

		var progressBefore = this.progress;

		this.progress = this.progressCheck();

		// When we loop, offset the progress so that it eases
		// smoothly rather than immediately resetting
		if( progressBefore > 0.8 && this.progress < 0.2 ) {
			this.progressOffset = this.progress;
		}

		this.render();

		if( this.playing ) {
			features.requestAnimationFrameMethod.call( window, this.animate.bind( this ) );
		}

	};

	/**
	 * Renders the current progress and playback state.
	 */
	Playback.prototype.render = function() {

		var progress = this.playing ? this.progress : 0,
			radius = ( this.diameter / 2 ) - this.thickness,
			x = this.diameter / 2,
			y = this.diameter / 2,
			iconSize = 14;

		// Ease towards 1
		this.progressOffset += ( 1 - this.progressOffset ) * 0.1;

		var endAngle = ( - Math.PI / 2 ) + ( progress * ( Math.PI * 2 ) );
		var startAngle = ( - Math.PI / 2 ) + ( this.progressOffset * ( Math.PI * 2 ) );

		this.context.save();
		this.context.clearRect( 0, 0, this.diameter, this.diameter );

		// Solid background color
		this.context.beginPath();
		this.context.arc( x, y, radius + 2, 0, Math.PI * 2, false );
		this.context.fillStyle = 'rgba( 0, 0, 0, 0.4 )';
		this.context.fill();

		// Draw progress track
		this.context.beginPath();
		this.context.arc( x, y, radius, 0, Math.PI * 2, false );
		this.context.lineWidth = this.thickness;
		this.context.strokeStyle = '#666';
		this.context.stroke();

		if( this.playing ) {
			// Draw progress on top of track
			this.context.beginPath();
			this.context.arc( x, y, radius, startAngle, endAngle, false );
			this.context.lineWidth = this.thickness;
			this.context.strokeStyle = '#fff';
			this.context.stroke();
		}

		this.context.translate( x - ( iconSize / 2 ), y - ( iconSize / 2 ) );

		// Draw play/pause icons
		if( this.playing ) {
			this.context.fillStyle = '#fff';
			this.context.fillRect( 0, 0, iconSize / 2 - 2, iconSize );
			this.context.fillRect( iconSize / 2 + 2, 0, iconSize / 2 - 2, iconSize );
		}
		else {
			this.context.beginPath();
			this.context.translate( 2, 0 );
			this.context.moveTo( 0, 0 );
			this.context.lineTo( iconSize - 2, iconSize / 2 );
			this.context.lineTo( 0, iconSize );
			this.context.fillStyle = '#fff';
			this.context.fill();
		}

		this.context.restore();

	};

	Playback.prototype.on = function( type, listener ) {
		this.canvas.addEventListener( type, listener, false );
	};

	Playback.prototype.off = function( type, listener ) {
		this.canvas.removeEventListener( type, listener, false );
	};

	Playback.prototype.destroy = function() {

		this.playing = false;

		if( this.canvas.parentNode ) {
			this.container.removeChild( this.canvas );
		}

	};


	// --------------------------------------------------------------------//
	// ------------------------------- API --------------------------------//
	// --------------------------------------------------------------------//


	return {
		initialize: initialize,
		configure: configure,
		sync: sync,

		// Navigation methods
		slide: slide,
		left: navigateLeft,
		right: navigateRight,
		up: navigateUp,
		down: navigateDown,
		prev: navigatePrev,
		next: navigateNext,

		// Fragment methods
		navigateFragment: navigateFragment,
		prevFragment: previousFragment,
		nextFragment: nextFragment,

		// Deprecated aliases
		navigateTo: slide,
		navigateLeft: navigateLeft,
		navigateRight: navigateRight,
		navigateUp: navigateUp,
		navigateDown: navigateDown,
		navigatePrev: navigatePrev,
		navigateNext: navigateNext,

		// Forces an update in slide layout
		layout: layout,

		// Returns an object with the available routes as booleans (left/right/top/bottom)
		availableRoutes: availableRoutes,

		// Returns an object with the available fragments as booleans (prev/next)
		availableFragments: availableFragments,

		// Toggles the overview mode on/off
		toggleOverview: toggleOverview,

		// Toggles the "black screen" mode on/off
		togglePause: togglePause,

		// State checks
		isOverview: isOverview,
		isPaused: isPaused,

		// Adds or removes all internal event listeners (such as keyboard)
		addEventListeners: addEventListeners,
		removeEventListeners: removeEventListeners,

		// Returns the indices of the current, or specified, slide
		getIndices: getIndices,

		// Returns the slide at the specified index, y is optional
		getSlide: function( x, y ) {
			var horizontalSlide = document.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR )[ x ];
			var verticalSlides = horizontalSlide && horizontalSlide.querySelectorAll( 'section' );

			if( typeof y !== 'undefined' ) {
				return verticalSlides ? verticalSlides[ y ] : undefined;
			}

			return horizontalSlide;
		},

		// Returns the previous slide element, may be null
		getPreviousSlide: function() {
			return previousSlide;
		},

		// Returns the current slide element
		getCurrentSlide: function() {
			return currentSlide;
		},

		// Returns the current scale of the presentation content
		getScale: function() {
			return scale;
		},

		// Returns the current configuration object
		getConfig: function() {
			return config;
		},

		// Helper method, retrieves query string as a key/value hash
		getQueryHash: function() {
			var query = {};

			location.search.replace( /[A-Z0-9]+?=([\w\.%-]*)/gi, function(a) {
				query[ a.split( '=' ).shift() ] = a.split( '=' ).pop();
			} );

			// Basic deserialization
			for( var i in query ) {
				var value = query[ i ];

				query[ i ] = unescape( value );

				if( value === 'null' ) query[ i ] = null;
				else if( value === 'true' ) query[ i ] = true;
				else if( value === 'false' ) query[ i ] = false;
				else if( value.match( /^\d+$/ ) ) query[ i ] = parseFloat( value );
			}

			return query;
		},

		// Returns true if we're currently on the first slide
		isFirstSlide: function() {
			return document.querySelector( SLIDES_SELECTOR + '.past' ) == null ? true : false;
		},

		// Returns true if we're currently on the last slide
		isLastSlide: function() {
			if( currentSlide ) {
				// Does this slide has next a sibling?
				if( currentSlide.nextElementSibling ) return false;

				// If it's vertical, does its parent have a next sibling?
				if( isVerticalSlide( currentSlide ) && currentSlide.parentNode.nextElementSibling ) return false;

				return true;
			}

			return false;
		},

		// Checks if reveal.js has been loaded and is ready for use
		isReady: function() {
			return loaded;
		},

		// Forward event binding to the reveal DOM element
		addEventListener: function( type, listener, useCapture ) {
			if( 'addEventListener' in window ) {
				( dom.wrapper || document.querySelector( '.reveal' ) ).addEventListener( type, listener, useCapture );
			}
		},
		removeEventListener: function( type, listener, useCapture ) {
			if( 'addEventListener' in window ) {
				( dom.wrapper || document.querySelector( '.reveal' ) ).removeEventListener( type, listener, useCapture );
			}
		}
	};

})();

var COMPILED=!0,goog=goog||{};goog.global=this;goog.exportPath_=function(a,b,c){a=a.split(".");c=c||goog.global;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c=c[d]?c[d]:c[d]={}:c[d]=b};goog.define=function(a,b){var c=b;COMPILED||goog.global.CLOSURE_DEFINES&&Object.prototype.hasOwnProperty.call(goog.global.CLOSURE_DEFINES,a)&&(c=goog.global.CLOSURE_DEFINES[a]);goog.exportPath_(a,c)};goog.DEBUG=!0;goog.LOCALE="en";goog.TRUSTED_SITE=!0;
goog.provide=function(a){if(!COMPILED){if(goog.isProvided_(a))throw Error('Namespace "'+a+'" already declared.');delete goog.implicitNamespaces_[a];for(var b=a;(b=b.substring(0,b.lastIndexOf(".")))&&!goog.getObjectByName(b);)goog.implicitNamespaces_[b]=!0}goog.exportPath_(a)};goog.setTestOnly=function(a){if(COMPILED&&!goog.DEBUG)throw a=a||"",Error("Importing test-only code into non-debug environment"+a?": "+a:".");};goog.forwardDeclare=function(a){};
COMPILED||(goog.isProvided_=function(a){return!goog.implicitNamespaces_[a]&&goog.isDefAndNotNull(goog.getObjectByName(a))},goog.implicitNamespaces_={});goog.getObjectByName=function(a,b){for(var c=a.split("."),d=b||goog.global,e;e=c.shift();)if(goog.isDefAndNotNull(d[e]))d=d[e];else return null;return d};goog.globalize=function(a,b){var c=b||goog.global,d;for(d in a)c[d]=a[d]};
goog.addDependency=function(a,b,c){if(goog.DEPENDENCIES_ENABLED){var d;a=a.replace(/\\/g,"/");for(var e=goog.dependencies_,f=0;d=b[f];f++)e.nameToPath[d]=a,a in e.pathToNames||(e.pathToNames[a]={}),e.pathToNames[a][d]=!0;for(d=0;b=c[d];d++)a in e.requires||(e.requires[a]={}),e.requires[a][b]=!0}};goog.ENABLE_DEBUG_LOADER=!0;
goog.require=function(a){if(!COMPILED&&!goog.isProvided_(a)){if(goog.ENABLE_DEBUG_LOADER){var b=goog.getPathFromDeps_(a);if(b){goog.included_[b]=!0;goog.writeScripts_();return}}a="goog.require could not find: "+a;goog.global.console&&goog.global.console.error(a);throw Error(a);}};goog.basePath="";goog.nullFunction=function(){};goog.identityFunction=function(a,b){return a};goog.abstractMethod=function(){throw Error("unimplemented abstract method");};
goog.addSingletonGetter=function(a){a.getInstance=function(){if(a.instance_)return a.instance_;goog.DEBUG&&(goog.instantiatedSingletons_[goog.instantiatedSingletons_.length]=a);return a.instance_=new a}};goog.instantiatedSingletons_=[];goog.DEPENDENCIES_ENABLED=!COMPILED&&goog.ENABLE_DEBUG_LOADER;
goog.DEPENDENCIES_ENABLED&&(goog.included_={},goog.dependencies_={pathToNames:{},nameToPath:{},requires:{},visited:{},written:{}},goog.inHtmlDocument_=function(){var a=goog.global.document;return"undefined"!=typeof a&&"write"in a},goog.findBasePath_=function(){if(goog.global.CLOSURE_BASE_PATH)goog.basePath=goog.global.CLOSURE_BASE_PATH;else if(goog.inHtmlDocument_())for(var a=goog.global.document.getElementsByTagName("script"),b=a.length-1;0<=b;--b){var c=a[b].src,d=c.lastIndexOf("?"),d=-1==d?c.length:
d;if("base.js"==c.substr(d-7,7)){goog.basePath=c.substr(0,d-7);break}}},goog.importScript_=function(a){var b=goog.global.CLOSURE_IMPORT_SCRIPT||goog.writeScriptTag_;!goog.dependencies_.written[a]&&b(a)&&(goog.dependencies_.written[a]=!0)},goog.writeScriptTag_=function(a){if(goog.inHtmlDocument_()){var b=goog.global.document;if("complete"==b.readyState){if(/\bdeps.js$/.test(a))return!1;throw Error('Cannot write "'+a+'" after document load');}b.write('\x3cscript type\x3d"text/javascript" src\x3d"'+
a+'"\x3e\x3c/script\x3e');return!0}return!1},goog.writeScripts_=function(){function a(e){if(!(e in d.written)){if(!(e in d.visited)&&(d.visited[e]=!0,e in d.requires))for(var g in d.requires[e])if(!goog.isProvided_(g))if(g in d.nameToPath)a(d.nameToPath[g]);else throw Error("Undefined nameToPath for "+g);e in c||(c[e]=!0,b.push(e))}}var b=[],c={},d=goog.dependencies_,e;for(e in goog.included_)d.written[e]||a(e);for(e=0;e<b.length;e++)if(b[e])goog.importScript_(goog.basePath+b[e]);else throw Error("Undefined script input");
},goog.getPathFromDeps_=function(a){return a in goog.dependencies_.nameToPath?goog.dependencies_.nameToPath[a]:null},goog.findBasePath_(),goog.global.CLOSURE_NO_DEPS||goog.importScript_(goog.basePath+"deps.js"));
goog.typeOf=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b};goog.isDef=function(a){return void 0!==a};goog.isNull=function(a){return null===a};goog.isDefAndNotNull=function(a){return null!=a};goog.isArray=function(a){return"array"==goog.typeOf(a)};goog.isArrayLike=function(a){var b=goog.typeOf(a);return"array"==b||"object"==b&&"number"==typeof a.length};goog.isDateLike=function(a){return goog.isObject(a)&&"function"==typeof a.getFullYear};goog.isString=function(a){return"string"==typeof a};
goog.isBoolean=function(a){return"boolean"==typeof a};goog.isNumber=function(a){return"number"==typeof a};goog.isFunction=function(a){return"function"==goog.typeOf(a)};goog.isObject=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};goog.getUid=function(a){return a[goog.UID_PROPERTY_]||(a[goog.UID_PROPERTY_]=++goog.uidCounter_)};goog.hasUid=function(a){return!!a[goog.UID_PROPERTY_]};goog.removeUid=function(a){"removeAttribute"in a&&a.removeAttribute(goog.UID_PROPERTY_);try{delete a[goog.UID_PROPERTY_]}catch(b){}};
goog.UID_PROPERTY_="closure_uid_"+(1E9*Math.random()>>>0);goog.uidCounter_=0;goog.getHashCode=goog.getUid;goog.removeHashCode=goog.removeUid;goog.cloneObject=function(a){var b=goog.typeOf(a);if("object"==b||"array"==b){if(a.clone)return a.clone();var b="array"==b?[]:{},c;for(c in a)b[c]=goog.cloneObject(a[c]);return b}return a};goog.bindNative_=function(a,b,c){return a.call.apply(a.bind,arguments)};
goog.bindJs_=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}};goog.bind=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?goog.bind=goog.bindNative_:goog.bind=goog.bindJs_;return goog.bind.apply(null,arguments)};
goog.partial=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}};goog.mixin=function(a,b){for(var c in b)a[c]=b[c]};goog.now=goog.TRUSTED_SITE&&Date.now||function(){return+new Date};
goog.globalEval=function(a){if(goog.global.execScript)goog.global.execScript(a,"JavaScript");else if(goog.global.eval)if(null==goog.evalWorksForGlobals_&&(goog.global.eval("var _et_ \x3d 1;"),"undefined"!=typeof goog.global._et_?(delete goog.global._et_,goog.evalWorksForGlobals_=!0):goog.evalWorksForGlobals_=!1),goog.evalWorksForGlobals_)goog.global.eval(a);else{var b=goog.global.document,c=b.createElement("script");c.type="text/javascript";c.defer=!1;c.appendChild(b.createTextNode(a));b.body.appendChild(c);
b.body.removeChild(c)}else throw Error("goog.globalEval not available");};goog.evalWorksForGlobals_=null;goog.getCssName=function(a,b){var c=function(a){return goog.cssNameMapping_[a]||a},d=function(a){a=a.split("-");for(var b=[],d=0;d<a.length;d++)b.push(c(a[d]));return b.join("-")},d=goog.cssNameMapping_?"BY_WHOLE"==goog.cssNameMappingStyle_?c:d:function(a){return a};return b?a+"-"+d(b):d(a)};goog.setCssNameMapping=function(a,b){goog.cssNameMapping_=a;goog.cssNameMappingStyle_=b};
!COMPILED&&goog.global.CLOSURE_CSS_NAME_MAPPING&&(goog.cssNameMapping_=goog.global.CLOSURE_CSS_NAME_MAPPING);goog.getMsg=function(a,b){var c=b||{},d;for(d in c){var e=(""+c[d]).replace(/\$/g,"$$$$");a=a.replace(RegExp("\\{\\$"+d+"\\}","gi"),e)}return a};goog.getMsgWithFallback=function(a,b){return a};goog.exportSymbol=function(a,b,c){goog.exportPath_(a,b,c)};goog.exportProperty=function(a,b,c){a[b]=c};
goog.inherits=function(a,b){function c(){}c.prototype=b.prototype;a.superClass_=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(a,c,f){var g=Array.prototype.slice.call(arguments,2);return b.prototype[c].apply(a,g)}};
goog.base=function(a,b,c){var d=arguments.callee.caller;if(goog.DEBUG&&!d)throw Error("arguments.caller not defined.  goog.base() expects not to be running in strict mode. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");if(d.superClass_)return d.superClass_.constructor.apply(a,Array.prototype.slice.call(arguments,1));for(var e=Array.prototype.slice.call(arguments,2),f=!1,g=a.constructor;g;g=g.superClass_&&g.superClass_.constructor)if(g.prototype[b]===d)f=!0;else if(f)return g.prototype[b].apply(a,
e);if(a[b]===d)return a.constructor.prototype[b].apply(a,e);throw Error("goog.base called from a method of one name to a method of a different name");};goog.scope=function(a){a.call(goog.global)};goog.string={};goog.string.Unicode={NBSP:"\u00a0"};goog.string.startsWith=function(a,b){return 0==a.lastIndexOf(b,0)};goog.string.endsWith=function(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c};goog.string.caseInsensitiveStartsWith=function(a,b){return 0==goog.string.caseInsensitiveCompare(b,a.substr(0,b.length))};goog.string.caseInsensitiveEndsWith=function(a,b){return 0==goog.string.caseInsensitiveCompare(b,a.substr(a.length-b.length,b.length))};
goog.string.caseInsensitiveEquals=function(a,b){return a.toLowerCase()==b.toLowerCase()};goog.string.subs=function(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")};goog.string.collapseWhitespace=function(a){return a.replace(/[\s\xa0]+/g," ").replace(/^\s+|\s+$/g,"")};goog.string.isEmpty=function(a){return/^[\s\xa0]*$/.test(a)};goog.string.isEmptySafe=function(a){return goog.string.isEmpty(goog.string.makeSafe(a))};
goog.string.isBreakingWhitespace=function(a){return!/[^\t\n\r ]/.test(a)};goog.string.isAlpha=function(a){return!/[^a-zA-Z]/.test(a)};goog.string.isNumeric=function(a){return!/[^0-9]/.test(a)};goog.string.isAlphaNumeric=function(a){return!/[^a-zA-Z0-9]/.test(a)};goog.string.isSpace=function(a){return" "==a};goog.string.isUnicodeChar=function(a){return 1==a.length&&" "<=a&&"~">=a||"\u0080"<=a&&"\ufffd">=a};goog.string.stripNewlines=function(a){return a.replace(/(\r\n|\r|\n)+/g," ")};
goog.string.canonicalizeNewlines=function(a){return a.replace(/(\r\n|\r|\n)/g,"\n")};goog.string.normalizeWhitespace=function(a){return a.replace(/\xa0|\s/g," ")};goog.string.normalizeSpaces=function(a){return a.replace(/\xa0|[ \t]+/g," ")};goog.string.collapseBreakingSpaces=function(a){return a.replace(/[\t\r\n ]+/g," ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g,"")};goog.string.trim=function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
goog.string.trimLeft=function(a){return a.replace(/^[\s\xa0]+/,"")};goog.string.trimRight=function(a){return a.replace(/[\s\xa0]+$/,"")};goog.string.caseInsensitiveCompare=function(a,b){var c=String(a).toLowerCase(),d=String(b).toLowerCase();return c<d?-1:c==d?0:1};goog.string.numerateCompareRegExp_=/(\.\d+)|(\d+)|(\D+)/g;
goog.string.numerateCompare=function(a,b){if(a==b)return 0;if(!a)return-1;if(!b)return 1;for(var c=a.toLowerCase().match(goog.string.numerateCompareRegExp_),d=b.toLowerCase().match(goog.string.numerateCompareRegExp_),e=Math.min(c.length,d.length),f=0;f<e;f++){var g=c[f],h=d[f];if(g!=h)return c=parseInt(g,10),!isNaN(c)&&(d=parseInt(h,10),!isNaN(d)&&c-d)?c-d:g<h?-1:1}return c.length!=d.length?c.length-d.length:a<b?-1:1};goog.string.urlEncode=function(a){return encodeURIComponent(String(a))};
goog.string.urlDecode=function(a){return decodeURIComponent(a.replace(/\+/g," "))};goog.string.newLineToBr=function(a,b){return a.replace(/(\r\n|\r|\n)/g,b?"\x3cbr /\x3e":"\x3cbr\x3e")};
goog.string.htmlEscape=function(a,b){if(b)return a.replace(goog.string.amperRe_,"\x26amp;").replace(goog.string.ltRe_,"\x26lt;").replace(goog.string.gtRe_,"\x26gt;").replace(goog.string.quotRe_,"\x26quot;").replace(goog.string.singleQuoteRe_,"\x26#39;");if(!goog.string.allRe_.test(a))return a;-1!=a.indexOf("\x26")&&(a=a.replace(goog.string.amperRe_,"\x26amp;"));-1!=a.indexOf("\x3c")&&(a=a.replace(goog.string.ltRe_,"\x26lt;"));-1!=a.indexOf("\x3e")&&(a=a.replace(goog.string.gtRe_,"\x26gt;"));-1!=a.indexOf('"')&&
(a=a.replace(goog.string.quotRe_,"\x26quot;"));-1!=a.indexOf("'")&&(a=a.replace(goog.string.singleQuoteRe_,"\x26#39;"));return a};goog.string.amperRe_=/&/g;goog.string.ltRe_=/</g;goog.string.gtRe_=/>/g;goog.string.quotRe_=/"/g;goog.string.singleQuoteRe_=/'/g;goog.string.allRe_=/[&<>"']/;goog.string.unescapeEntities=function(a){return goog.string.contains(a,"\x26")?"document"in goog.global?goog.string.unescapeEntitiesUsingDom_(a):goog.string.unescapePureXmlEntities_(a):a};
goog.string.unescapeEntitiesWithDocument=function(a,b){return goog.string.contains(a,"\x26")?goog.string.unescapeEntitiesUsingDom_(a,b):a};
goog.string.unescapeEntitiesUsingDom_=function(a,b){var c={"\x26amp;":"\x26","\x26lt;":"\x3c","\x26gt;":"\x3e","\x26quot;":'"'},d;d=b?b.createElement("div"):document.createElement("div");return a.replace(goog.string.HTML_ENTITY_PATTERN_,function(a,b){var g=c[a];if(g)return g;if("#"==b.charAt(0)){var h=Number("0"+b.substr(1));isNaN(h)||(g=String.fromCharCode(h))}g||(d.innerHTML=a+" ",g=d.firstChild.nodeValue.slice(0,-1));return c[a]=g})};
goog.string.unescapePureXmlEntities_=function(a){return a.replace(/&([^;]+);/g,function(a,c){switch(c){case "amp":return"\x26";case "lt":return"\x3c";case "gt":return"\x3e";case "quot":return'"';default:if("#"==c.charAt(0)){var d=Number("0"+c.substr(1));if(!isNaN(d))return String.fromCharCode(d)}return a}})};goog.string.HTML_ENTITY_PATTERN_=/&([^;\s<&]+);?/g;goog.string.whitespaceEscape=function(a,b){return goog.string.newLineToBr(a.replace(/  /g," \x26#160;"),b)};
goog.string.stripQuotes=function(a,b){for(var c=b.length,d=0;d<c;d++){var e=1==c?b:b.charAt(d);if(a.charAt(0)==e&&a.charAt(a.length-1)==e)return a.substring(1,a.length-1)}return a};goog.string.truncate=function(a,b,c){c&&(a=goog.string.unescapeEntities(a));a.length>b&&(a=a.substring(0,b-3)+"...");c&&(a=goog.string.htmlEscape(a));return a};
goog.string.truncateMiddle=function(a,b,c,d){c&&(a=goog.string.unescapeEntities(a));if(d&&a.length>b){d>b&&(d=b);var e=a.length-d;a=a.substring(0,b-d)+"..."+a.substring(e)}else a.length>b&&(d=Math.floor(b/2),e=a.length-d,a=a.substring(0,d+b%2)+"..."+a.substring(e));c&&(a=goog.string.htmlEscape(a));return a};goog.string.specialEscapeChars_={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\"};goog.string.jsEscapeCache_={"'":"\\'"};
goog.string.quote=function(a){a=String(a);if(a.quote)return a.quote();for(var b=['"'],c=0;c<a.length;c++){var d=a.charAt(c),e=d.charCodeAt(0);b[c+1]=goog.string.specialEscapeChars_[d]||(31<e&&127>e?d:goog.string.escapeChar(d))}b.push('"');return b.join("")};goog.string.escapeString=function(a){for(var b=[],c=0;c<a.length;c++)b[c]=goog.string.escapeChar(a.charAt(c));return b.join("")};
goog.string.escapeChar=function(a){if(a in goog.string.jsEscapeCache_)return goog.string.jsEscapeCache_[a];if(a in goog.string.specialEscapeChars_)return goog.string.jsEscapeCache_[a]=goog.string.specialEscapeChars_[a];var b=a,c=a.charCodeAt(0);if(31<c&&127>c)b=a;else{if(256>c){if(b="\\x",16>c||256<c)b+="0"}else b="\\u",4096>c&&(b+="0");b+=c.toString(16).toUpperCase()}return goog.string.jsEscapeCache_[a]=b};goog.string.toMap=function(a){for(var b={},c=0;c<a.length;c++)b[a.charAt(c)]=!0;return b};
goog.string.contains=function(a,b){return-1!=a.indexOf(b)};goog.string.countOf=function(a,b){return a&&b?a.split(b).length-1:0};goog.string.removeAt=function(a,b,c){var d=a;0<=b&&b<a.length&&0<c&&(d=a.substr(0,b)+a.substr(b+c,a.length-b-c));return d};goog.string.remove=function(a,b){var c=RegExp(goog.string.regExpEscape(b),"");return a.replace(c,"")};goog.string.removeAll=function(a,b){var c=RegExp(goog.string.regExpEscape(b),"g");return a.replace(c,"")};
goog.string.regExpEscape=function(a){return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")};goog.string.repeat=function(a,b){return Array(b+1).join(a)};goog.string.padNumber=function(a,b,c){a=goog.isDef(c)?a.toFixed(c):String(a);c=a.indexOf(".");-1==c&&(c=a.length);return goog.string.repeat("0",Math.max(0,b-c))+a};goog.string.makeSafe=function(a){return null==a?"":String(a)};goog.string.buildString=function(a){return Array.prototype.join.call(arguments,"")};
goog.string.getRandomString=function(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^goog.now()).toString(36)};
goog.string.compareVersions=function(a,b){for(var c=0,d=goog.string.trim(String(a)).split("."),e=goog.string.trim(String(b)).split("."),f=Math.max(d.length,e.length),g=0;0==c&&g<f;g++){var h=d[g]||"",k=e[g]||"",l=RegExp("(\\d*)(\\D*)","g"),m=RegExp("(\\d*)(\\D*)","g");do{var n=l.exec(h)||["","",""],p=m.exec(k)||["","",""];if(0==n[0].length&&0==p[0].length)break;var c=0==n[1].length?0:parseInt(n[1],10),q=0==p[1].length?0:parseInt(p[1],10),c=goog.string.compareElements_(c,q)||goog.string.compareElements_(0==
n[2].length,0==p[2].length)||goog.string.compareElements_(n[2],p[2])}while(0==c)}return c};goog.string.compareElements_=function(a,b){return a<b?-1:a>b?1:0};goog.string.HASHCODE_MAX_=4294967296;goog.string.hashCode=function(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c),b%=goog.string.HASHCODE_MAX_;return b};goog.string.uniqueStringCounter_=2147483648*Math.random()|0;goog.string.createUniqueString=function(){return"goog_"+goog.string.uniqueStringCounter_++};
goog.string.toNumber=function(a){var b=Number(a);return 0==b&&goog.string.isEmpty(a)?NaN:b};goog.string.isLowerCamelCase=function(a){return/^[a-z]+([A-Z][a-z]*)*$/.test(a)};goog.string.isUpperCamelCase=function(a){return/^([A-Z][a-z]*)+$/.test(a)};goog.string.toCamelCase=function(a){return String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()})};goog.string.toSelectorCase=function(a){return String(a).replace(/([A-Z])/g,"-$1").toLowerCase()};
goog.string.toTitleCase=function(a,b){var c=goog.isString(b)?goog.string.regExpEscape(b):"\\s";return a.replace(RegExp("(^"+(c?"|["+c+"]+":"")+")([a-z])","g"),function(a,b,c){return b+c.toUpperCase()})};goog.string.parseInt=function(a){isFinite(a)&&(a=String(a));return goog.isString(a)?/^\s*-?0x/i.test(a)?parseInt(a,16):parseInt(a,10):NaN};goog.string.splitLimit=function(a,b,c){a=a.split(b);for(var d=[];0<c&&a.length;)d.push(a.shift()),c--;a.length&&d.push(a.join(b));return d};goog.debug={};goog.debug.Error=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,goog.debug.Error);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};goog.inherits(goog.debug.Error,Error);goog.debug.Error.prototype.name="CustomError";goog.dom={};goog.dom.NodeType={ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12};goog.asserts={};goog.asserts.ENABLE_ASSERTS=goog.DEBUG;goog.asserts.AssertionError=function(a,b){b.unshift(a);goog.debug.Error.call(this,goog.string.subs.apply(null,b));b.shift();this.messagePattern=a};goog.inherits(goog.asserts.AssertionError,goog.debug.Error);goog.asserts.AssertionError.prototype.name="AssertionError";goog.asserts.doAssertFailure_=function(a,b,c,d){var e="Assertion failed";if(c)var e=e+(": "+c),f=d;else a&&(e+=": "+a,f=b);throw new goog.asserts.AssertionError(""+e,f||[]);};
goog.asserts.assert=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!a&&goog.asserts.doAssertFailure_("",null,b,Array.prototype.slice.call(arguments,2));return a};goog.asserts.fail=function(a,b){if(goog.asserts.ENABLE_ASSERTS)throw new goog.asserts.AssertionError("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};
goog.asserts.assertNumber=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!goog.isNumber(a)&&goog.asserts.doAssertFailure_("Expected number but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};goog.asserts.assertString=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!goog.isString(a)&&goog.asserts.doAssertFailure_("Expected string but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};
goog.asserts.assertFunction=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!goog.isFunction(a)&&goog.asserts.doAssertFailure_("Expected function but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};goog.asserts.assertObject=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!goog.isObject(a)&&goog.asserts.doAssertFailure_("Expected object but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};
goog.asserts.assertArray=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!goog.isArray(a)&&goog.asserts.doAssertFailure_("Expected array but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};goog.asserts.assertBoolean=function(a,b,c){goog.asserts.ENABLE_ASSERTS&&!goog.isBoolean(a)&&goog.asserts.doAssertFailure_("Expected boolean but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};
goog.asserts.assertElement=function(a,b,c){!goog.asserts.ENABLE_ASSERTS||goog.isObject(a)&&a.nodeType==goog.dom.NodeType.ELEMENT||goog.asserts.doAssertFailure_("Expected Element but got %s: %s.",[goog.typeOf(a),a],b,Array.prototype.slice.call(arguments,2));return a};goog.asserts.assertInstanceof=function(a,b,c,d){!goog.asserts.ENABLE_ASSERTS||a instanceof b||goog.asserts.doAssertFailure_("instanceof check failed.",null,c,Array.prototype.slice.call(arguments,3));return a};
goog.asserts.assertObjectPrototypeIsIntact=function(){for(var a in Object.prototype)goog.asserts.fail(a+" should not be enumerable in Object.prototype.")};goog.array={};goog.NATIVE_ARRAY_PROTOTYPES=goog.TRUSTED_SITE;goog.array.ASSUME_NATIVE_FUNCTIONS=!1;goog.array.peek=function(a){return a[a.length-1]};goog.array.ARRAY_PROTOTYPE_=Array.prototype;
goog.array.indexOf=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||goog.array.ARRAY_PROTOTYPE_.indexOf)?function(a,b,c){goog.asserts.assert(null!=a.length);return goog.array.ARRAY_PROTOTYPE_.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(goog.isString(a))return goog.isString(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};
goog.array.lastIndexOf=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||goog.array.ARRAY_PROTOTYPE_.lastIndexOf)?function(a,b,c){goog.asserts.assert(null!=a.length);return goog.array.ARRAY_PROTOTYPE_.lastIndexOf.call(a,b,null==c?a.length-1:c)}:function(a,b,c){c=null==c?a.length-1:c;0>c&&(c=Math.max(0,a.length+c));if(goog.isString(a))return goog.isString(b)&&1==b.length?a.lastIndexOf(b,c):-1;for(;0<=c;c--)if(c in a&&a[c]===b)return c;return-1};
goog.array.forEach=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||goog.array.ARRAY_PROTOTYPE_.forEach)?function(a,b,c){goog.asserts.assert(null!=a.length);goog.array.ARRAY_PROTOTYPE_.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=goog.isString(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};goog.array.forEachRight=function(a,b,c){for(var d=a.length,e=goog.isString(a)?a.split(""):a,d=d-1;0<=d;--d)d in e&&b.call(c,e[d],d,a)};
goog.array.filter=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||goog.array.ARRAY_PROTOTYPE_.filter)?function(a,b,c){goog.asserts.assert(null!=a.length);return goog.array.ARRAY_PROTOTYPE_.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=goog.isString(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var k=g[h];b.call(c,k,h,a)&&(e[f++]=k)}return e};
goog.array.map=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||goog.array.ARRAY_PROTOTYPE_.map)?function(a,b,c){goog.asserts.assert(null!=a.length);return goog.array.ARRAY_PROTOTYPE_.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=goog.isString(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e};
goog.array.reduce=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||goog.array.ARRAY_PROTOTYPE_.reduce)?function(a,b,c,d){goog.asserts.assert(null!=a.length);d&&(b=goog.bind(b,d));return goog.array.ARRAY_PROTOTYPE_.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;goog.array.forEach(a,function(c,g){e=b.call(d,e,c,g,a)});return e};
goog.array.reduceRight=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||goog.array.ARRAY_PROTOTYPE_.reduceRight)?function(a,b,c,d){goog.asserts.assert(null!=a.length);d&&(b=goog.bind(b,d));return goog.array.ARRAY_PROTOTYPE_.reduceRight.call(a,b,c)}:function(a,b,c,d){var e=c;goog.array.forEachRight(a,function(c,g){e=b.call(d,e,c,g,a)});return e};
goog.array.some=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||goog.array.ARRAY_PROTOTYPE_.some)?function(a,b,c){goog.asserts.assert(null!=a.length);return goog.array.ARRAY_PROTOTYPE_.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=goog.isString(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1};
goog.array.every=goog.NATIVE_ARRAY_PROTOTYPES&&(goog.array.ASSUME_NATIVE_FUNCTIONS||goog.array.ARRAY_PROTOTYPE_.every)?function(a,b,c){goog.asserts.assert(null!=a.length);return goog.array.ARRAY_PROTOTYPE_.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=goog.isString(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;return!0};goog.array.count=function(a,b,c){var d=0;goog.array.forEach(a,function(a,f,g){b.call(c,a,f,g)&&++d},c);return d};
goog.array.find=function(a,b,c){b=goog.array.findIndex(a,b,c);return 0>b?null:goog.isString(a)?a.charAt(b):a[b]};goog.array.findIndex=function(a,b,c){for(var d=a.length,e=goog.isString(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1};goog.array.findRight=function(a,b,c){b=goog.array.findIndexRight(a,b,c);return 0>b?null:goog.isString(a)?a.charAt(b):a[b]};
goog.array.findIndexRight=function(a,b,c){for(var d=a.length,e=goog.isString(a)?a.split(""):a,d=d-1;0<=d;d--)if(d in e&&b.call(c,e[d],d,a))return d;return-1};goog.array.contains=function(a,b){return 0<=goog.array.indexOf(a,b)};goog.array.isEmpty=function(a){return 0==a.length};goog.array.clear=function(a){if(!goog.isArray(a))for(var b=a.length-1;0<=b;b--)delete a[b];a.length=0};goog.array.insert=function(a,b){goog.array.contains(a,b)||a.push(b)};
goog.array.insertAt=function(a,b,c){goog.array.splice(a,c,0,b)};goog.array.insertArrayAt=function(a,b,c){goog.partial(goog.array.splice,a,c,0).apply(null,b)};goog.array.insertBefore=function(a,b,c){var d;2==arguments.length||0>(d=goog.array.indexOf(a,c))?a.push(b):goog.array.insertAt(a,b,d)};goog.array.remove=function(a,b){var c=goog.array.indexOf(a,b),d;(d=0<=c)&&goog.array.removeAt(a,c);return d};
goog.array.removeAt=function(a,b){goog.asserts.assert(null!=a.length);return 1==goog.array.ARRAY_PROTOTYPE_.splice.call(a,b,1).length};goog.array.removeIf=function(a,b,c){b=goog.array.findIndex(a,b,c);return 0<=b?(goog.array.removeAt(a,b),!0):!1};goog.array.concat=function(a){return goog.array.ARRAY_PROTOTYPE_.concat.apply(goog.array.ARRAY_PROTOTYPE_,arguments)};goog.array.toArray=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};goog.array.clone=goog.array.toArray;
goog.array.extend=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c],e;if(goog.isArray(d)||(e=goog.isArrayLike(d))&&Object.prototype.hasOwnProperty.call(d,"callee"))a.push.apply(a,d);else if(e)for(var f=a.length,g=d.length,h=0;h<g;h++)a[f+h]=d[h];else a.push(d)}};goog.array.splice=function(a,b,c,d){goog.asserts.assert(null!=a.length);return goog.array.ARRAY_PROTOTYPE_.splice.apply(a,goog.array.slice(arguments,1))};
goog.array.slice=function(a,b,c){goog.asserts.assert(null!=a.length);return 2>=arguments.length?goog.array.ARRAY_PROTOTYPE_.slice.call(a,b):goog.array.ARRAY_PROTOTYPE_.slice.call(a,b,c)};goog.array.removeDuplicates=function(a,b,c){b=b||a;var d=function(a){return goog.isObject(g)?"o"+goog.getUid(g):(typeof g).charAt(0)+g};c=c||d;for(var d={},e=0,f=0;f<a.length;){var g=a[f++],h=c(g);Object.prototype.hasOwnProperty.call(d,h)||(d[h]=!0,b[e++]=g)}b.length=e};
goog.array.binarySearch=function(a,b,c){return goog.array.binarySearch_(a,c||goog.array.defaultCompare,!1,b)};goog.array.binarySelect=function(a,b,c){return goog.array.binarySearch_(a,b,!0,void 0,c)};goog.array.binarySearch_=function(a,b,c,d,e){for(var f=0,g=a.length,h;f<g;){var k=f+g>>1,l;l=c?b.call(e,a[k],k,a):b(d,a[k]);0<l?f=k+1:(g=k,h=!l)}return h?f:~f};goog.array.sort=function(a,b){a.sort(b||goog.array.defaultCompare)};
goog.array.stableSort=function(a,b){for(var c=0;c<a.length;c++)a[c]={index:c,value:a[c]};var d=b||goog.array.defaultCompare;goog.array.sort(a,function(a,b){return d(a.value,b.value)||a.index-b.index});for(c=0;c<a.length;c++)a[c]=a[c].value};goog.array.sortObjectsByKey=function(a,b,c){var d=c||goog.array.defaultCompare;goog.array.sort(a,function(a,c){return d(a[b],c[b])})};
goog.array.isSorted=function(a,b,c){b=b||goog.array.defaultCompare;for(var d=1;d<a.length;d++){var e=b(a[d-1],a[d]);if(0<e||0==e&&c)return!1}return!0};goog.array.equals=function(a,b,c){if(!goog.isArrayLike(a)||!goog.isArrayLike(b)||a.length!=b.length)return!1;var d=a.length;c=c||goog.array.defaultCompareEquality;for(var e=0;e<d;e++)if(!c(a[e],b[e]))return!1;return!0};
goog.array.compare3=function(a,b,c){c=c||goog.array.defaultCompare;for(var d=Math.min(a.length,b.length),e=0;e<d;e++){var f=c(a[e],b[e]);if(0!=f)return f}return goog.array.defaultCompare(a.length,b.length)};goog.array.defaultCompare=function(a,b){return a>b?1:a<b?-1:0};goog.array.defaultCompareEquality=function(a,b){return a===b};goog.array.binaryInsert=function(a,b,c){c=goog.array.binarySearch(a,b,c);return 0>c?(goog.array.insertAt(a,b,-(c+1)),!0):!1};
goog.array.binaryRemove=function(a,b,c){b=goog.array.binarySearch(a,b,c);return 0<=b?goog.array.removeAt(a,b):!1};goog.array.bucket=function(a,b,c){for(var d={},e=0;e<a.length;e++){var f=a[e],g=b.call(c,f,e,a);goog.isDef(g)&&(d[g]||(d[g]=[])).push(f)}return d};goog.array.toObject=function(a,b,c){var d={};goog.array.forEach(a,function(e,f){d[b.call(c,e,f,a)]=e});return d};
goog.array.range=function(a,b,c){var d=[],e=0,f=a;c=c||1;void 0!==b&&(e=a,f=b);if(0>c*(f-e))return[];if(0<c)for(a=e;a<f;a+=c)d.push(a);else for(a=e;a>f;a+=c)d.push(a);return d};goog.array.repeat=function(a,b){for(var c=[],d=0;d<b;d++)c[d]=a;return c};goog.array.flatten=function(a){for(var b=[],c=0;c<arguments.length;c++){var d=arguments[c];goog.isArray(d)?b.push.apply(b,goog.array.flatten.apply(null,d)):b.push(d)}return b};
goog.array.rotate=function(a,b){goog.asserts.assert(null!=a.length);a.length&&(b%=a.length,0<b?goog.array.ARRAY_PROTOTYPE_.unshift.apply(a,a.splice(-b,b)):0>b&&goog.array.ARRAY_PROTOTYPE_.push.apply(a,a.splice(0,-b)));return a};goog.array.moveItem=function(a,b,c){goog.asserts.assert(0<=b&&b<a.length);goog.asserts.assert(0<=c&&c<a.length);b=goog.array.ARRAY_PROTOTYPE_.splice.call(a,b,1);goog.array.ARRAY_PROTOTYPE_.splice.call(a,c,0,b[0])};
goog.array.zip=function(a){if(!arguments.length)return[];for(var b=[],c=0;;c++){for(var d=[],e=0;e<arguments.length;e++){var f=arguments[e];if(c>=f.length)return b;d.push(f[c])}b.push(d)}};goog.array.shuffle=function(a,b){for(var c=b||Math.random,d=a.length-1;0<d;d--){var e=Math.floor(c()*(d+1)),f=a[d];a[d]=a[e];a[e]=f}};goog.object={};goog.object.forEach=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)};goog.object.filter=function(a,b,c){var d={},e;for(e in a)b.call(c,a[e],e,a)&&(d[e]=a[e]);return d};goog.object.map=function(a,b,c){var d={},e;for(e in a)d[e]=b.call(c,a[e],e,a);return d};goog.object.some=function(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return!0;return!1};goog.object.every=function(a,b,c){for(var d in a)if(!b.call(c,a[d],d,a))return!1;return!0};
goog.object.getCount=function(a){var b=0,c;for(c in a)b++;return b};goog.object.getAnyKey=function(a){for(var b in a)return b};goog.object.getAnyValue=function(a){for(var b in a)return a[b]};goog.object.contains=function(a,b){return goog.object.containsValue(a,b)};goog.object.getValues=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b};goog.object.getKeys=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b};
goog.object.getValueByKeys=function(a,b){for(var c=goog.isArrayLike(b),d=c?b:arguments,c=c?0:1;c<d.length&&(a=a[d[c]],goog.isDef(a));c++);return a};goog.object.containsKey=function(a,b){return b in a};goog.object.containsValue=function(a,b){for(var c in a)if(a[c]==b)return!0;return!1};goog.object.findKey=function(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d};goog.object.findValue=function(a,b,c){return(b=goog.object.findKey(a,b,c))&&a[b]};
goog.object.isEmpty=function(a){for(var b in a)return!1;return!0};goog.object.clear=function(a){for(var b in a)delete a[b]};goog.object.remove=function(a,b){var c;(c=b in a)&&delete a[b];return c};goog.object.add=function(a,b,c){if(b in a)throw Error('The object already contains the key "'+b+'"');goog.object.set(a,b,c)};goog.object.get=function(a,b,c){return b in a?a[b]:c};goog.object.set=function(a,b,c){a[b]=c};goog.object.setIfUndefined=function(a,b,c){return b in a?a[b]:a[b]=c};
goog.object.clone=function(a){var b={},c;for(c in a)b[c]=a[c];return b};goog.object.unsafeClone=function(a){var b=goog.typeOf(a);if("object"==b||"array"==b){if(a.clone)return a.clone();var b="array"==b?[]:{},c;for(c in a)b[c]=goog.object.unsafeClone(a[c]);return b}return a};goog.object.transpose=function(a){var b={},c;for(c in a)b[a[c]]=c;return b};goog.object.PROTOTYPE_FIELDS_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
goog.object.extend=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<goog.object.PROTOTYPE_FIELDS_.length;f++)c=goog.object.PROTOTYPE_FIELDS_[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};
goog.object.create=function(a){var b=arguments.length;if(1==b&&goog.isArray(arguments[0]))return goog.object.create.apply(null,arguments[0]);if(b%2)throw Error("Uneven number of arguments");for(var c={},d=0;d<b;d+=2)c[arguments[d]]=arguments[d+1];return c};goog.object.createSet=function(a){var b=arguments.length;if(1==b&&goog.isArray(arguments[0]))return goog.object.createSet.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c};
goog.object.createImmutableView=function(a){var b=a;Object.isFrozen&&!Object.isFrozen(a)&&(b=Object.create(a),Object.freeze(b));return b};goog.object.isImmutableView=function(a){return!!Object.isFrozen&&Object.isFrozen(a)};goog.string.StringBuffer=function(a,b){null!=a&&this.append.apply(this,arguments)};goog.string.StringBuffer.prototype.buffer_="";goog.string.StringBuffer.prototype.set=function(a){this.buffer_=""+a};goog.string.StringBuffer.prototype.append=function(a,b,c){this.buffer_+=a;if(null!=b)for(var d=1;d<arguments.length;d++)this.buffer_+=arguments[d];return this};goog.string.StringBuffer.prototype.clear=function(){this.buffer_=""};goog.string.StringBuffer.prototype.getLength=function(){return this.buffer_.length};
goog.string.StringBuffer.prototype.toString=function(){return this.buffer_};var cljs={core:{}};cljs.core._STAR_clojurescript_version_STAR_="0.0-2234";cljs.core._STAR_unchecked_if_STAR_=!1;cljs.core._STAR_print_fn_STAR_=function(a){throw Error("No *print-fn* fn set for evaluation environment");};cljs.core.set_print_fn_BANG_=function(a){return cljs.core._STAR_print_fn_STAR_=a};cljs.core._STAR_flush_on_newline_STAR_=!0;cljs.core._STAR_print_newline_STAR_=!0;cljs.core._STAR_print_readably_STAR_=!0;cljs.core._STAR_print_meta_STAR_=!1;cljs.core._STAR_print_dup_STAR_=!1;
cljs.core._STAR_print_length_STAR_=null;cljs.core._STAR_print_level_STAR_=null;
cljs.core.pr_opts=function(){return new cljs.core.PersistentArrayMap(null,5,[new cljs.core.Keyword(null,"flush-on-newline","flush-on-newline",4338025857),cljs.core._STAR_flush_on_newline_STAR_,new cljs.core.Keyword(null,"readably","readably",4441712502),cljs.core._STAR_print_readably_STAR_,new cljs.core.Keyword(null,"meta","meta",1017252215),cljs.core._STAR_print_meta_STAR_,new cljs.core.Keyword(null,"dup","dup",1014004081),cljs.core._STAR_print_dup_STAR_,new cljs.core.Keyword(null,"print-length",
"print-length",3960797560),cljs.core._STAR_print_length_STAR_],null)};
cljs.core.enable_console_print_BANG_=function(){cljs.core._STAR_print_newline_STAR_=!1;return cljs.core._STAR_print_fn_STAR_=function(){var a=function(a){return console.log.apply(console,cljs.core.into_array.call(null,a))},b=function(b){var d=null;0<arguments.length&&(d=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0));return a.call(this,d)};b.cljs$lang$maxFixedArity=0;b.cljs$lang$applyTo=function(b){b=cljs.core.seq(b);return a(b)};b.cljs$core$IFn$_invoke$arity$variadic=a;return b}()};
cljs.core.truth_=function(a){return null!=a&&!1!==a};cljs.core.not_native=null;cljs.core.identical_QMARK_=function(a,b){return a===b};cljs.core.nil_QMARK_=function(a){return null==a};cljs.core.array_QMARK_=function(a){return a instanceof Array};cljs.core.number_QMARK_=function(a){return"number"===typeof a};cljs.core.not=function(a){return cljs.core.truth_(a)?!1:!0};cljs.core.object_QMARK_=function(a){return null!=a?a.constructor===Object:!1};cljs.core.string_QMARK_=function(a){return goog.isString(a)};
cljs.core.native_satisfies_QMARK_=function(a,b){return a[goog.typeOf(null==b?null:b)]?!0:a._?!0:new cljs.core.Keyword(null,"else","else",1017020587)?!1:null};cljs.core.is_proto_=function(a){return a.constructor.prototype===a};cljs.core._STAR_main_cli_fn_STAR_=null;cljs.core.type=function(a){return null==a?null:a.constructor};
cljs.core.missing_protocol=function(a,b){var c=cljs.core.type.call(null,b),c=cljs.core.truth_(cljs.core.truth_(c)?c.cljs$lang$type:c)?c.cljs$lang$ctorStr:goog.typeOf(b);return Error(["No protocol method ",a," defined for type ",c,": ",b].join(""))};cljs.core.type__GT_str=function(a){var b=a.cljs$lang$ctorStr;return cljs.core.truth_(b)?b:""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)};
cljs.core.make_array=function(){var a=null,b=function(b,d){return a.call(null,d)},a=function(a,d){switch(arguments.length){case 1:return Array(a);case 2:return b.call(this,a,d)}throw Error("Invalid arity: "+arguments.length);};a.cljs$core$IFn$_invoke$arity$1=function(a){return Array(a)};a.cljs$core$IFn$_invoke$arity$2=b;return a}();cljs.core.aclone=function(a){for(var b=a.length,c=Array(b),d=0;;)if(d<b)c[d]=a[d],d+=1;else break;return c};cljs.core.array=function(a){return Array.prototype.slice.call(arguments)};
cljs.core.aget=function(){var a=null,b=function(){var b=function(b,c,d){return cljs.core.apply.call(null,a,a.call(null,b,c),d)},d=function(a,d,g){var h=null;2<arguments.length&&(h=cljs.core.array_seq(Array.prototype.slice.call(arguments,2),0));return b.call(this,a,d,h)};d.cljs$lang$maxFixedArity=2;d.cljs$lang$applyTo=function(a){var d=cljs.core.first(a);a=cljs.core.next(a);var g=cljs.core.first(a);a=cljs.core.rest(a);return b(d,g,a)};d.cljs$core$IFn$_invoke$arity$variadic=b;return d}(),a=function(a,
d,e){switch(arguments.length){case 2:return a[d];default:return b.cljs$core$IFn$_invoke$arity$variadic(a,d,cljs.core.array_seq(arguments,2))}throw Error("Invalid arity: "+arguments.length);};a.cljs$lang$maxFixedArity=2;a.cljs$lang$applyTo=b.cljs$lang$applyTo;a.cljs$core$IFn$_invoke$arity$2=function(a,b){return a[b]};a.cljs$core$IFn$_invoke$arity$variadic=b.cljs$core$IFn$_invoke$arity$variadic;return a}();
cljs.core.aset=function(){var a=null,b=function(){var b=function(b,c,d,h){return cljs.core.apply.call(null,a,b[c],d,h)},d=function(a,d,g,h){var k=null;3<arguments.length&&(k=cljs.core.array_seq(Array.prototype.slice.call(arguments,3),0));return b.call(this,a,d,g,k)};d.cljs$lang$maxFixedArity=3;d.cljs$lang$applyTo=function(a){var d=cljs.core.first(a);a=cljs.core.next(a);var g=cljs.core.first(a);a=cljs.core.next(a);var h=cljs.core.first(a);a=cljs.core.rest(a);return b(d,g,h,a)};d.cljs$core$IFn$_invoke$arity$variadic=
b;return d}(),a=function(a,d,e,f){switch(arguments.length){case 3:return a[d]=e;default:return b.cljs$core$IFn$_invoke$arity$variadic(a,d,e,cljs.core.array_seq(arguments,3))}throw Error("Invalid arity: "+arguments.length);};a.cljs$lang$maxFixedArity=3;a.cljs$lang$applyTo=b.cljs$lang$applyTo;a.cljs$core$IFn$_invoke$arity$3=function(a,b,e){return a[b]=e};a.cljs$core$IFn$_invoke$arity$variadic=b.cljs$core$IFn$_invoke$arity$variadic;return a}();cljs.core.alength=function(a){return a.length};
cljs.core.into_array=function(){var a=null,b=function(b){return a.call(null,null,b)},c=function(a,b){return cljs.core.reduce.call(null,function(a,b){a.push(b);return a},[],b)},a=function(a,e){switch(arguments.length){case 1:return b.call(this,a);case 2:return c.call(this,a,e)}throw Error("Invalid arity: "+arguments.length);};a.cljs$core$IFn$_invoke$arity$1=b;a.cljs$core$IFn$_invoke$arity$2=c;return a}();cljs.core.Fn=function(){return{}}();cljs.core.IFn=function(){return{}}();
cljs.core._invoke=function(){var a=null,b=function(a){if(a?a.cljs$core$IFn$_invoke$arity$1:a)return a.cljs$core$IFn$_invoke$arity$1(a);var b;b=cljs.core._invoke[goog.typeOf(null==a?null:a)];if(!b&&(b=cljs.core._invoke._,!b))throw cljs.core.missing_protocol.call(null,"IFn.-invoke",a);return b.call(null,a)},c=function(a,b){if(a?a.cljs$core$IFn$_invoke$arity$2:a)return a.cljs$core$IFn$_invoke$arity$2(a,b);var c;c=cljs.core._invoke[goog.typeOf(null==a?null:a)];if(!c&&(c=cljs.core._invoke._,!c))throw cljs.core.missing_protocol.call(null,
"IFn.-invoke",a);return c.call(null,a,b)},d=function(a,b,c){if(a?a.cljs$core$IFn$_invoke$arity$3:a)return a.cljs$core$IFn$_invoke$arity$3(a,b,c);var d;d=cljs.core._invoke[goog.typeOf(null==a?null:a)];if(!d&&(d=cljs.core._invoke._,!d))throw cljs.core.missing_protocol.call(null,"IFn.-invoke",a);return d.call(null,a,b,c)},e=function(a,b,c,d){if(a?a.cljs$core$IFn$_invoke$arity$4:a)return a.cljs$core$IFn$_invoke$arity$4(a,b,c,d);var e;e=cljs.core._invoke[goog.typeOf(null==a?null:a)];if(!e&&(e=cljs.core._invoke._,
!e))throw cljs.core.missing_protocol.call(null,"IFn.-invoke",a);return e.call(null,a,b,c,d)},f=function(a,b,c,d,e){if(a?a.cljs$core$IFn$_invoke$arity$5:a)return a.cljs$core$IFn$_invoke$arity$5(a,b,c,d,e);var f;f=cljs.core._invoke[goog.typeOf(null==a?null:a)];if(!f&&(f=cljs.core._invoke._,!f))throw cljs.core.missing_protocol.call(null,"IFn.-invoke",a);return f.call(null,a,b,c,d,e)},g=function(a,b,c,d,e,f){if(a?a.cljs$core$IFn$_invoke$arity$6:a)return a.cljs$core$IFn$_invoke$arity$6(a,b,c,d,e,f);var g;
g=cljs.core._invoke[goog.typeOf(null==a?null:a)];if(!g&&(g=cljs.core._invoke._,!g))throw cljs.core.missing_protocol.call(null,"IFn.-invoke",a);return g.call(null,a,b,c,d,e,f)},h=function(a,b,c,d,e,f,g){if(a?a.cljs$core$IFn$_invoke$arity$7:a)return a.cljs$core$IFn$_invoke$arity$7(a,b,c,d,e,f,g);var h;h=cljs.core._invoke[goog.typeOf(null==a?null:a)];if(!h&&(h=cljs.core._invoke._,!h))throw cljs.core.missing_protocol.call(null,"IFn.-invoke",a);return h.call(null,a,b,c,d,e,f,g)},k=function(a,b,c,d,e,f,
g,h){if(a?a.cljs$core$IFn$_invoke$arity$8:a)return a.cljs$core$IFn$_invoke$arity$8(a,b,c,d,e,f,g,h);var k;k=cljs.core._invoke[goog.typeOf(null==a?null:a)];if(!k&&(k=cljs.core._invoke._,!k))throw cljs.core.missing_protocol.call(null,"IFn.-invoke",a);return k.call(null,a,b,c,d,e,f,g,h)},l=function(a,b,c,d,e,f,g,h,k){if(a?a.cljs$core$IFn$_invoke$arity$9:a)return a.cljs$core$IFn$_invoke$arity$9(a,b,c,d,e,f,g,h,k);var l;l=cljs.core._invoke[goog.typeOf(null==a?null:a)];if(!l&&(l=cljs.core._invoke._,!l))throw cljs.core.missing_protocol.call(null,
"IFn.-invoke",a);return l.call(null,a,b,c,d,e,f,g,h,k)},m=function(a,b,c,d,e,f,g,h,k,l){if(a?a.cljs$core$IFn$_invoke$arity$10:a)return a.cljs$core$IFn$_invoke$arity$10(a,b,c,d,e,f,g,h,k,l);var m;m=cljs.core._invoke[goog.typeOf(null==a?null:a)];if(!m&&(m=cljs.core._invoke._,!m))throw cljs.core.missing_protocol.call(null,"IFn.-invoke",a);return m.call(null,a,b,c,d,e,f,g,h,k,l)},n=function(a,b,c,d,e,f,g,h,k,l,m){if(a?a.cljs$core$IFn$_invoke$arity$11:a)return a.cljs$core$IFn$_invoke$arity$11(a,b,c,d,
e,f,g,h,k,l,m);var n;n=cljs.core._invoke[goog.typeOf(null==a?null:a)];if(!n&&(n=cljs.core._invoke._,!n))throw cljs.core.missing_protocol.call(null,"IFn.-invoke",a);return n.call(null,a,b,c,d,e,f,g,h,k,l,m)},p=function(a,b,c,d,e,f,g,h,k,l,m,n){if(a?a.cljs$core$IFn$_invoke$arity$12:a)return a.cljs$core$IFn$_invoke$arity$12(a,b,c,d,e,f,g,h,k,l,m,n);var p;p=cljs.core._invoke[goog.typeOf(null==a?null:a)];if(!p&&(p=cljs.core._invoke._,!p))throw cljs.core.missing_protocol.call(null,"IFn.-invoke",a);return p.call(null,
a,b,c,d,e,f,g,h,k,l,m,n)},q=function(a,b,c,d,e,f,g,h,k,l,m,n,p){if(a?a.cljs$core$IFn$_invoke$arity$13:a)return a.cljs$core$IFn$_invoke$arity$13(a,b,c,d,e,f,g,h,k,l,m,n,p);var q;q=cljs.core._invoke[goog.typeOf(null==a?null:a)];if(!q&&(q=cljs.core._invoke._,!q))throw cljs.core.missing_protocol.call(null,"IFn.-invoke",a);return q.call(null,a,b,c,d,e,f,g,h,k,l,m,n,p)},r=function(a,b,c,d,e,f,g,h,k,l,m,n,p,q){if(a?a.cljs$core$IFn$_invoke$arity$14:a)return a.cljs$core$IFn$_invoke$arity$14(a,b,c,d,e,f,g,
h,k,l,m,n,p,q);var r;r=cljs.core._invoke[goog.typeOf(null==a?null:a)];if(!r&&(r=cljs.core._invoke._,!r))throw cljs.core.missing_protocol.call(null,"IFn.-invoke",a);return r.call(null,a,b,c,d,e,f,g,h,k,l,m,n,p,q)},s=function(a,b,c,d,e,f,g,h,k,l,m,n,p,q,r){if(a?a.cljs$core$IFn$_invoke$arity$15:a)return a.cljs$core$IFn$_invoke$arity$15(a,b,c,d,e,f,g,h,k,l,m,n,p,q,r);var s;s=cljs.core._invoke[goog.typeOf(null==a?null:a)];if(!s&&(s=cljs.core._invoke._,!s))throw cljs.core.missing_protocol.call(null,"IFn.-invoke",
a);return s.call(null,a,b,c,d,e,f,g,h,k,l,m,n,p,q,r)},t=function(a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s){if(a?a.cljs$core$IFn$_invoke$arity$16:a)return a.cljs$core$IFn$_invoke$arity$16(a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s);var t;t=cljs.core._invoke[goog.typeOf(null==a?null:a)];if(!t&&(t=cljs.core._invoke._,!t))throw cljs.core.missing_protocol.call(null,"IFn.-invoke",a);return t.call(null,a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s)},v=function(a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t){if(a?a.cljs$core$IFn$_invoke$arity$17:a)return a.cljs$core$IFn$_invoke$arity$17(a,
b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t);var v;v=cljs.core._invoke[goog.typeOf(null==a?null:a)];if(!v&&(v=cljs.core._invoke._,!v))throw cljs.core.missing_protocol.call(null,"IFn.-invoke",a);return v.call(null,a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t)},y=function(a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v){if(a?a.cljs$core$IFn$_invoke$arity$18:a)return a.cljs$core$IFn$_invoke$arity$18(a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v);var y;y=cljs.core._invoke[goog.typeOf(null==a?null:a)];if(!y&&(y=cljs.core._invoke._,!y))throw cljs.core.missing_protocol.call(null,
"IFn.-invoke",a);return y.call(null,a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v)},z=function(a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v,y){if(a?a.cljs$core$IFn$_invoke$arity$19:a)return a.cljs$core$IFn$_invoke$arity$19(a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v,y);var z;z=cljs.core._invoke[goog.typeOf(null==a?null:a)];if(!z&&(z=cljs.core._invoke._,!z))throw cljs.core.missing_protocol.call(null,"IFn.-invoke",a);return z.call(null,a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v,y)},A=function(a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v,y,z){if(a?
a.cljs$core$IFn$_invoke$arity$20:a)return a.cljs$core$IFn$_invoke$arity$20(a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v,y,z);var A;A=cljs.core._invoke[goog.typeOf(null==a?null:a)];if(!A&&(A=cljs.core._invoke._,!A))throw cljs.core.missing_protocol.call(null,"IFn.-invoke",a);return A.call(null,a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v,y,z)},B=function(a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v,y,z,A){if(a?a.cljs$core$IFn$_invoke$arity$21:a)return a.cljs$core$IFn$_invoke$arity$21(a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v,y,z,A);
var B;B=cljs.core._invoke[goog.typeOf(null==a?null:a)];if(!B&&(B=cljs.core._invoke._,!B))throw cljs.core.missing_protocol.call(null,"IFn.-invoke",a);return B.call(null,a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v,y,z,A)},a=function(a,u,w,x,F,C,E,G,H,I,J,K,M,N,O,P,Q,R,S,T,V){switch(arguments.length){case 1:return b.call(this,a);case 2:return c.call(this,a,u);case 3:return d.call(this,a,u,w);case 4:return e.call(this,a,u,w,x);case 5:return f.call(this,a,u,w,x,F);case 6:return g.call(this,a,u,w,x,F,C);case 7:return h.call(this,
a,u,w,x,F,C,E);case 8:return k.call(this,a,u,w,x,F,C,E,G);case 9:return l.call(this,a,u,w,x,F,C,E,G,H);case 10:return m.call(this,a,u,w,x,F,C,E,G,H,I);case 11:return n.call(this,a,u,w,x,F,C,E,G,H,I,J);case 12:return p.call(this,a,u,w,x,F,C,E,G,H,I,J,K);case 13:return q.call(this,a,u,w,x,F,C,E,G,H,I,J,K,M);case 14:return r.call(this,a,u,w,x,F,C,E,G,H,I,J,K,M,N);case 15:return s.call(this,a,u,w,x,F,C,E,G,H,I,J,K,M,N,O);case 16:return t.call(this,a,u,w,x,F,C,E,G,H,I,J,K,M,N,O,P);case 17:return v.call(this,
a,u,w,x,F,C,E,G,H,I,J,K,M,N,O,P,Q);case 18:return y.call(this,a,u,w,x,F,C,E,G,H,I,J,K,M,N,O,P,Q,R);case 19:return z.call(this,a,u,w,x,F,C,E,G,H,I,J,K,M,N,O,P,Q,R,S);case 20:return A.call(this,a,u,w,x,F,C,E,G,H,I,J,K,M,N,O,P,Q,R,S,T);case 21:return B.call(this,a,u,w,x,F,C,E,G,H,I,J,K,M,N,O,P,Q,R,S,T,V)}throw Error("Invalid arity: "+arguments.length);};a.cljs$core$IFn$_invoke$arity$1=b;a.cljs$core$IFn$_invoke$arity$2=c;a.cljs$core$IFn$_invoke$arity$3=d;a.cljs$core$IFn$_invoke$arity$4=e;a.cljs$core$IFn$_invoke$arity$5=
f;a.cljs$core$IFn$_invoke$arity$6=g;a.cljs$core$IFn$_invoke$arity$7=h;a.cljs$core$IFn$_invoke$arity$8=k;a.cljs$core$IFn$_invoke$arity$9=l;a.cljs$core$IFn$_invoke$arity$10=m;a.cljs$core$IFn$_invoke$arity$11=n;a.cljs$core$IFn$_invoke$arity$12=p;a.cljs$core$IFn$_invoke$arity$13=q;a.cljs$core$IFn$_invoke$arity$14=r;a.cljs$core$IFn$_invoke$arity$15=s;a.cljs$core$IFn$_invoke$arity$16=t;a.cljs$core$IFn$_invoke$arity$17=v;a.cljs$core$IFn$_invoke$arity$18=y;a.cljs$core$IFn$_invoke$arity$19=z;a.cljs$core$IFn$_invoke$arity$20=
A;a.cljs$core$IFn$_invoke$arity$21=B;return a}();cljs.core.ICloneable=function(){return{}}();cljs.core._clone=function(a){if(a?a.cljs$core$ICloneable$_clone$arity$1:a)return a.cljs$core$ICloneable$_clone$arity$1(a);var b;b=cljs.core._clone[goog.typeOf(null==a?null:a)];if(!b&&(b=cljs.core._clone._,!b))throw cljs.core.missing_protocol.call(null,"ICloneable.-clone",a);return b.call(null,a)};cljs.core.ICounted=function(){return{}}();
cljs.core._count=function(a){if(a?a.cljs$core$ICounted$_count$arity$1:a)return a.cljs$core$ICounted$_count$arity$1(a);var b;b=cljs.core._count[goog.typeOf(null==a?null:a)];if(!b&&(b=cljs.core._count._,!b))throw cljs.core.missing_protocol.call(null,"ICounted.-count",a);return b.call(null,a)};cljs.core.IEmptyableCollection=function(){return{}}();
cljs.core._empty=function(a){if(a?a.cljs$core$IEmptyableCollection$_empty$arity$1:a)return a.cljs$core$IEmptyableCollection$_empty$arity$1(a);var b;b=cljs.core._empty[goog.typeOf(null==a?null:a)];if(!b&&(b=cljs.core._empty._,!b))throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",a);return b.call(null,a)};cljs.core.ICollection=function(){return{}}();
cljs.core._conj=function(a,b){if(a?a.cljs$core$ICollection$_conj$arity$2:a)return a.cljs$core$ICollection$_conj$arity$2(a,b);var c;c=cljs.core._conj[goog.typeOf(null==a?null:a)];if(!c&&(c=cljs.core._conj._,!c))throw cljs.core.missing_protocol.call(null,"ICollection.-conj",a);return c.call(null,a,b)};cljs.core.IIndexed=function(){return{}}();
cljs.core._nth=function(){var a=null,b=function(a,b){if(a?a.cljs$core$IIndexed$_nth$arity$2:a)return a.cljs$core$IIndexed$_nth$arity$2(a,b);var c;c=cljs.core._nth[goog.typeOf(null==a?null:a)];if(!c&&(c=cljs.core._nth._,!c))throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",a);return c.call(null,a,b)},c=function(a,b,c){if(a?a.cljs$core$IIndexed$_nth$arity$3:a)return a.cljs$core$IIndexed$_nth$arity$3(a,b,c);var g;g=cljs.core._nth[goog.typeOf(null==a?null:a)];if(!g&&(g=cljs.core._nth._,!g))throw cljs.core.missing_protocol.call(null,
"IIndexed.-nth",a);return g.call(null,a,b,c)},a=function(a,e,f){switch(arguments.length){case 2:return b.call(this,a,e);case 3:return c.call(this,a,e,f)}throw Error("Invalid arity: "+arguments.length);};a.cljs$core$IFn$_invoke$arity$2=b;a.cljs$core$IFn$_invoke$arity$3=c;return a}();cljs.core.ASeq=function(){return{}}();cljs.core.ISeq=function(){return{}}();
cljs.core._first=function(a){if(a?a.cljs$core$ISeq$_first$arity$1:a)return a.cljs$core$ISeq$_first$arity$1(a);var b;b=cljs.core._first[goog.typeOf(null==a?null:a)];if(!b&&(b=cljs.core._first._,!b))throw cljs.core.missing_protocol.call(null,"ISeq.-first",a);return b.call(null,a)};
cljs.core._rest=function(a){if(a?a.cljs$core$ISeq$_rest$arity$1:a)return a.cljs$core$ISeq$_rest$arity$1(a);var b;b=cljs.core._rest[goog.typeOf(null==a?null:a)];if(!b&&(b=cljs.core._rest._,!b))throw cljs.core.missing_protocol.call(null,"ISeq.-rest",a);return b.call(null,a)};cljs.core.INext=function(){return{}}();
cljs.core._next=function(a){if(a?a.cljs$core$INext$_next$arity$1:a)return a.cljs$core$INext$_next$arity$1(a);var b;b=cljs.core._next[goog.typeOf(null==a?null:a)];if(!b&&(b=cljs.core._next._,!b))throw cljs.core.missing_protocol.call(null,"INext.-next",a);return b.call(null,a)};cljs.core.ILookup=function(){return{}}();
cljs.core._lookup=function(){var a=null,b=function(a,b){if(a?a.cljs$core$ILookup$_lookup$arity$2:a)return a.cljs$core$ILookup$_lookup$arity$2(a,b);var c;c=cljs.core._lookup[goog.typeOf(null==a?null:a)];if(!c&&(c=cljs.core._lookup._,!c))throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",a);return c.call(null,a,b)},c=function(a,b,c){if(a?a.cljs$core$ILookup$_lookup$arity$3:a)return a.cljs$core$ILookup$_lookup$arity$3(a,b,c);var g;g=cljs.core._lookup[goog.typeOf(null==a?null:a)];if(!g&&(g=
cljs.core._lookup._,!g))throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",a);return g.call(null,a,b,c)},a=function(a,e,f){switch(arguments.length){case 2:return b.call(this,a,e);case 3:return c.call(this,a,e,f)}throw Error("Invalid arity: "+arguments.length);};a.cljs$core$IFn$_invoke$arity$2=b;a.cljs$core$IFn$_invoke$arity$3=c;return a}();cljs.core.IAssociative=function(){return{}}();
cljs.core._contains_key_QMARK_=function(a,b){if(a?a.cljs$core$IAssociative$_contains_key_QMARK_$arity$2:a)return a.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(a,b);var c;c=cljs.core._contains_key_QMARK_[goog.typeOf(null==a?null:a)];if(!c&&(c=cljs.core._contains_key_QMARK_._,!c))throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",a);return c.call(null,a,b)};
cljs.core._assoc=function(a,b,c){if(a?a.cljs$core$IAssociative$_assoc$arity$3:a)return a.cljs$core$IAssociative$_assoc$arity$3(a,b,c);var d;d=cljs.core._assoc[goog.typeOf(null==a?null:a)];if(!d&&(d=cljs.core._assoc._,!d))throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",a);return d.call(null,a,b,c)};cljs.core.IMap=function(){return{}}();
cljs.core._dissoc=function(a,b){if(a?a.cljs$core$IMap$_dissoc$arity$2:a)return a.cljs$core$IMap$_dissoc$arity$2(a,b);var c;c=cljs.core._dissoc[goog.typeOf(null==a?null:a)];if(!c&&(c=cljs.core._dissoc._,!c))throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",a);return c.call(null,a,b)};cljs.core.IMapEntry=function(){return{}}();
cljs.core._key=function(a){if(a?a.cljs$core$IMapEntry$_key$arity$1:a)return a.cljs$core$IMapEntry$_key$arity$1(a);var b;b=cljs.core._key[goog.typeOf(null==a?null:a)];if(!b&&(b=cljs.core._key._,!b))throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",a);return b.call(null,a)};
cljs.core._val=function(a){if(a?a.cljs$core$IMapEntry$_val$arity$1:a)return a.cljs$core$IMapEntry$_val$arity$1(a);var b;b=cljs.core._val[goog.typeOf(null==a?null:a)];if(!b&&(b=cljs.core._val._,!b))throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",a);return b.call(null,a)};cljs.core.ISet=function(){return{}}();
cljs.core._disjoin=function(a,b){if(a?a.cljs$core$ISet$_disjoin$arity$2:a)return a.cljs$core$ISet$_disjoin$arity$2(a,b);var c;c=cljs.core._disjoin[goog.typeOf(null==a?null:a)];if(!c&&(c=cljs.core._disjoin._,!c))throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",a);return c.call(null,a,b)};cljs.core.IStack=function(){return{}}();
cljs.core._peek=function(a){if(a?a.cljs$core$IStack$_peek$arity$1:a)return a.cljs$core$IStack$_peek$arity$1(a);var b;b=cljs.core._peek[goog.typeOf(null==a?null:a)];if(!b&&(b=cljs.core._peek._,!b))throw cljs.core.missing_protocol.call(null,"IStack.-peek",a);return b.call(null,a)};
cljs.core._pop=function(a){if(a?a.cljs$core$IStack$_pop$arity$1:a)return a.cljs$core$IStack$_pop$arity$1(a);var b;b=cljs.core._pop[goog.typeOf(null==a?null:a)];if(!b&&(b=cljs.core._pop._,!b))throw cljs.core.missing_protocol.call(null,"IStack.-pop",a);return b.call(null,a)};cljs.core.IVector=function(){return{}}();
cljs.core._assoc_n=function(a,b,c){if(a?a.cljs$core$IVector$_assoc_n$arity$3:a)return a.cljs$core$IVector$_assoc_n$arity$3(a,b,c);var d;d=cljs.core._assoc_n[goog.typeOf(null==a?null:a)];if(!d&&(d=cljs.core._assoc_n._,!d))throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",a);return d.call(null,a,b,c)};cljs.core.IDeref=function(){return{}}();
cljs.core._deref=function(a){if(a?a.cljs$core$IDeref$_deref$arity$1:a)return a.cljs$core$IDeref$_deref$arity$1(a);var b;b=cljs.core._deref[goog.typeOf(null==a?null:a)];if(!b&&(b=cljs.core._deref._,!b))throw cljs.core.missing_protocol.call(null,"IDeref.-deref",a);return b.call(null,a)};cljs.core.IDerefWithTimeout=function(){return{}}();
cljs.core._deref_with_timeout=function(a,b,c){if(a?a.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3:a)return a.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(a,b,c);var d;d=cljs.core._deref_with_timeout[goog.typeOf(null==a?null:a)];if(!d&&(d=cljs.core._deref_with_timeout._,!d))throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",a);return d.call(null,a,b,c)};cljs.core.IMeta=function(){return{}}();
cljs.core._meta=function(a){if(a?a.cljs$core$IMeta$_meta$arity$1:a)return a.cljs$core$IMeta$_meta$arity$1(a);var b;b=cljs.core._meta[goog.typeOf(null==a?null:a)];if(!b&&(b=cljs.core._meta._,!b))throw cljs.core.missing_protocol.call(null,"IMeta.-meta",a);return b.call(null,a)};cljs.core.IWithMeta=function(){return{}}();
cljs.core._with_meta=function(a,b){if(a?a.cljs$core$IWithMeta$_with_meta$arity$2:a)return a.cljs$core$IWithMeta$_with_meta$arity$2(a,b);var c;c=cljs.core._with_meta[goog.typeOf(null==a?null:a)];if(!c&&(c=cljs.core._with_meta._,!c))throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",a);return c.call(null,a,b)};cljs.core.IReduce=function(){return{}}();
cljs.core._reduce=function(){var a=null,b=function(a,b){if(a?a.cljs$core$IReduce$_reduce$arity$2:a)return a.cljs$core$IReduce$_reduce$arity$2(a,b);var c;c=cljs.core._reduce[goog.typeOf(null==a?null:a)];if(!c&&(c=cljs.core._reduce._,!c))throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",a);return c.call(null,a,b)},c=function(a,b,c){if(a?a.cljs$core$IReduce$_reduce$arity$3:a)return a.cljs$core$IReduce$_reduce$arity$3(a,b,c);var g;g=cljs.core._reduce[goog.typeOf(null==a?null:a)];if(!g&&(g=
cljs.core._reduce._,!g))throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",a);return g.call(null,a,b,c)},a=function(a,e,f){switch(arguments.length){case 2:return b.call(this,a,e);case 3:return c.call(this,a,e,f)}throw Error("Invalid arity: "+arguments.length);};a.cljs$core$IFn$_invoke$arity$2=b;a.cljs$core$IFn$_invoke$arity$3=c;return a}();cljs.core.IKVReduce=function(){return{}}();
cljs.core._kv_reduce=function(a,b,c){if(a?a.cljs$core$IKVReduce$_kv_reduce$arity$3:a)return a.cljs$core$IKVReduce$_kv_reduce$arity$3(a,b,c);var d;d=cljs.core._kv_reduce[goog.typeOf(null==a?null:a)];if(!d&&(d=cljs.core._kv_reduce._,!d))throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",a);return d.call(null,a,b,c)};cljs.core.IEquiv=function(){return{}}();
cljs.core._equiv=function(a,b){if(a?a.cljs$core$IEquiv$_equiv$arity$2:a)return a.cljs$core$IEquiv$_equiv$arity$2(a,b);var c;c=cljs.core._equiv[goog.typeOf(null==a?null:a)];if(!c&&(c=cljs.core._equiv._,!c))throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",a);return c.call(null,a,b)};cljs.core.IHash=function(){return{}}();
cljs.core._hash=function(a){if(a?a.cljs$core$IHash$_hash$arity$1:a)return a.cljs$core$IHash$_hash$arity$1(a);var b;b=cljs.core._hash[goog.typeOf(null==a?null:a)];if(!b&&(b=cljs.core._hash._,!b))throw cljs.core.missing_protocol.call(null,"IHash.-hash",a);return b.call(null,a)};cljs.core.ISeqable=function(){return{}}();
cljs.core._seq=function(a){if(a?a.cljs$core$ISeqable$_seq$arity$1:a)return a.cljs$core$ISeqable$_seq$arity$1(a);var b;b=cljs.core._seq[goog.typeOf(null==a?null:a)];if(!b&&(b=cljs.core._seq._,!b))throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",a);return b.call(null,a)};cljs.core.ISequential=function(){return{}}();cljs.core.IList=function(){return{}}();cljs.core.IRecord=function(){return{}}();cljs.core.IReversible=function(){return{}}();
cljs.core._rseq=function(a){if(a?a.cljs$core$IReversible$_rseq$arity$1:a)return a.cljs$core$IReversible$_rseq$arity$1(a);var b;b=cljs.core._rseq[goog.typeOf(null==a?null:a)];if(!b&&(b=cljs.core._rseq._,!b))throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",a);return b.call(null,a)};cljs.core.ISorted=function(){return{}}();
cljs.core._sorted_seq=function(a,b){if(a?a.cljs$core$ISorted$_sorted_seq$arity$2:a)return a.cljs$core$ISorted$_sorted_seq$arity$2(a,b);var c;c=cljs.core._sorted_seq[goog.typeOf(null==a?null:a)];if(!c&&(c=cljs.core._sorted_seq._,!c))throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",a);return c.call(null,a,b)};
cljs.core._sorted_seq_from=function(a,b,c){if(a?a.cljs$core$ISorted$_sorted_seq_from$arity$3:a)return a.cljs$core$ISorted$_sorted_seq_from$arity$3(a,b,c);var d;d=cljs.core._sorted_seq_from[goog.typeOf(null==a?null:a)];if(!d&&(d=cljs.core._sorted_seq_from._,!d))throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",a);return d.call(null,a,b,c)};
cljs.core._entry_key=function(a,b){if(a?a.cljs$core$ISorted$_entry_key$arity$2:a)return a.cljs$core$ISorted$_entry_key$arity$2(a,b);var c;c=cljs.core._entry_key[goog.typeOf(null==a?null:a)];if(!c&&(c=cljs.core._entry_key._,!c))throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",a);return c.call(null,a,b)};
cljs.core._comparator=function(a){if(a?a.cljs$core$ISorted$_comparator$arity$1:a)return a.cljs$core$ISorted$_comparator$arity$1(a);var b;b=cljs.core._comparator[goog.typeOf(null==a?null:a)];if(!b&&(b=cljs.core._comparator._,!b))throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",a);return b.call(null,a)};cljs.core.IWriter=function(){return{}}();
cljs.core._write=function(a,b){if(a?a.cljs$core$IWriter$_write$arity$2:a)return a.cljs$core$IWriter$_write$arity$2(a,b);var c;c=cljs.core._write[goog.typeOf(null==a?null:a)];if(!c&&(c=cljs.core._write._,!c))throw cljs.core.missing_protocol.call(null,"IWriter.-write",a);return c.call(null,a,b)};
cljs.core._flush=function(a){if(a?a.cljs$core$IWriter$_flush$arity$1:a)return a.cljs$core$IWriter$_flush$arity$1(a);var b;b=cljs.core._flush[goog.typeOf(null==a?null:a)];if(!b&&(b=cljs.core._flush._,!b))throw cljs.core.missing_protocol.call(null,"IWriter.-flush",a);return b.call(null,a)};cljs.core.IPrintWithWriter=function(){return{}}();
cljs.core._pr_writer=function(a,b,c){if(a?a.cljs$core$IPrintWithWriter$_pr_writer$arity$3:a)return a.cljs$core$IPrintWithWriter$_pr_writer$arity$3(a,b,c);var d;d=cljs.core._pr_writer[goog.typeOf(null==a?null:a)];if(!d&&(d=cljs.core._pr_writer._,!d))throw cljs.core.missing_protocol.call(null,"IPrintWithWriter.-pr-writer",a);return d.call(null,a,b,c)};cljs.core.IPending=function(){return{}}();
cljs.core._realized_QMARK_=function(a){if(a?a.cljs$core$IPending$_realized_QMARK_$arity$1:a)return a.cljs$core$IPending$_realized_QMARK_$arity$1(a);var b;b=cljs.core._realized_QMARK_[goog.typeOf(null==a?null:a)];if(!b&&(b=cljs.core._realized_QMARK_._,!b))throw cljs.core.missing_protocol.call(null,"IPending.-realized?",a);return b.call(null,a)};cljs.core.IWatchable=function(){return{}}();
cljs.core._notify_watches=function(a,b,c){if(a?a.cljs$core$IWatchable$_notify_watches$arity$3:a)return a.cljs$core$IWatchable$_notify_watches$arity$3(a,b,c);var d;d=cljs.core._notify_watches[goog.typeOf(null==a?null:a)];if(!d&&(d=cljs.core._notify_watches._,!d))throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",a);return d.call(null,a,b,c)};
cljs.core._add_watch=function(a,b,c){if(a?a.cljs$core$IWatchable$_add_watch$arity$3:a)return a.cljs$core$IWatchable$_add_watch$arity$3(a,b,c);var d;d=cljs.core._add_watch[goog.typeOf(null==a?null:a)];if(!d&&(d=cljs.core._add_watch._,!d))throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",a);return d.call(null,a,b,c)};
cljs.core._remove_watch=function(a,b){if(a?a.cljs$core$IWatchable$_remove_watch$arity$2:a)return a.cljs$core$IWatchable$_remove_watch$arity$2(a,b);var c;c=cljs.core._remove_watch[goog.typeOf(null==a?null:a)];if(!c&&(c=cljs.core._remove_watch._,!c))throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",a);return c.call(null,a,b)};cljs.core.IEditableCollection=function(){return{}}();
cljs.core._as_transient=function(a){if(a?a.cljs$core$IEditableCollection$_as_transient$arity$1:a)return a.cljs$core$IEditableCollection$_as_transient$arity$1(a);var b;b=cljs.core._as_transient[goog.typeOf(null==a?null:a)];if(!b&&(b=cljs.core._as_transient._,!b))throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",a);return b.call(null,a)};cljs.core.ITransientCollection=function(){return{}}();
cljs.core._conj_BANG_=function(a,b){if(a?a.cljs$core$ITransientCollection$_conj_BANG_$arity$2:a)return a.cljs$core$ITransientCollection$_conj_BANG_$arity$2(a,b);var c;c=cljs.core._conj_BANG_[goog.typeOf(null==a?null:a)];if(!c&&(c=cljs.core._conj_BANG_._,!c))throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",a);return c.call(null,a,b)};
cljs.core._persistent_BANG_=function(a){if(a?a.cljs$core$ITransientCollection$_persistent_BANG_$arity$1:a)return a.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(a);var b;b=cljs.core._persistent_BANG_[goog.typeOf(null==a?null:a)];if(!b&&(b=cljs.core._persistent_BANG_._,!b))throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",a);return b.call(null,a)};cljs.core.ITransientAssociative=function(){return{}}();
cljs.core._assoc_BANG_=function(a,b,c){if(a?a.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3:a)return a.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(a,b,c);var d;d=cljs.core._assoc_BANG_[goog.typeOf(null==a?null:a)];if(!d&&(d=cljs.core._assoc_BANG_._,!d))throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",a);return d.call(null,a,b,c)};cljs.core.ITransientMap=function(){return{}}();
cljs.core._dissoc_BANG_=function(a,b){if(a?a.cljs$core$ITransientMap$_dissoc_BANG_$arity$2:a)return a.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(a,b);var c;c=cljs.core._dissoc_BANG_[goog.typeOf(null==a?null:a)];if(!c&&(c=cljs.core._dissoc_BANG_._,!c))throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",a);return c.call(null,a,b)};cljs.core.ITransientVector=function(){return{}}();
cljs.core._assoc_n_BANG_=function(a,b,c){if(a?a.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3:a)return a.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(a,b,c);var d;d=cljs.core._assoc_n_BANG_[goog.typeOf(null==a?null:a)];if(!d&&(d=cljs.core._assoc_n_BANG_._,!d))throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",a);return d.call(null,a,b,c)};
cljs.core._pop_BANG_=function(a){if(a?a.cljs$core$ITransientVector$_pop_BANG_$arity$1:a)return a.cljs$core$ITransientVector$_pop_BANG_$arity$1(a);var b;b=cljs.core._pop_BANG_[goog.typeOf(null==a?null:a)];if(!b&&(b=cljs.core._pop_BANG_._,!b))throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",a);return b.call(null,a)};cljs.core.ITransientSet=function(){return{}}();
cljs.core._disjoin_BANG_=function(a,b){if(a?a.cljs$core$ITransientSet$_disjoin_BANG_$arity$2:a)return a.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(a,b);var c;c=cljs.core._disjoin_BANG_[goog.typeOf(null==a?null:a)];if(!c&&(c=cljs.core._disjoin_BANG_._,!c))throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",a);return c.call(null,a,b)};cljs.core.IComparable=function(){return{}}();
cljs.core._compare=function(a,b){if(a?a.cljs$core$IComparable$_compare$arity$2:a)return a.cljs$core$IComparable$_compare$arity$2(a,b);var c;c=cljs.core._compare[goog.typeOf(null==a?null:a)];if(!c&&(c=cljs.core._compare._,!c))throw cljs.core.missing_protocol.call(null,"IComparable.-compare",a);return c.call(null,a,b)};cljs.core.IChunk=function(){return{}}();
cljs.core._drop_first=function(a){if(a?a.cljs$core$IChunk$_drop_first$arity$1:a)return a.cljs$core$IChunk$_drop_first$arity$1(a);var b;b=cljs.core._drop_first[goog.typeOf(null==a?null:a)];if(!b&&(b=cljs.core._drop_first._,!b))throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",a);return b.call(null,a)};cljs.core.IChunkedSeq=function(){return{}}();
cljs.core._chunked_first=function(a){if(a?a.cljs$core$IChunkedSeq$_chunked_first$arity$1:a)return a.cljs$core$IChunkedSeq$_chunked_first$arity$1(a);var b;b=cljs.core._chunked_first[goog.typeOf(null==a?null:a)];if(!b&&(b=cljs.core._chunked_first._,!b))throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",a);return b.call(null,a)};
cljs.core._chunked_rest=function(a){if(a?a.cljs$core$IChunkedSeq$_chunked_rest$arity$1:a)return a.cljs$core$IChunkedSeq$_chunked_rest$arity$1(a);var b;b=cljs.core._chunked_rest[goog.typeOf(null==a?null:a)];if(!b&&(b=cljs.core._chunked_rest._,!b))throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",a);return b.call(null,a)};cljs.core.IChunkedNext=function(){return{}}();
cljs.core._chunked_next=function(a){if(a?a.cljs$core$IChunkedNext$_chunked_next$arity$1:a)return a.cljs$core$IChunkedNext$_chunked_next$arity$1(a);var b;b=cljs.core._chunked_next[goog.typeOf(null==a?null:a)];if(!b&&(b=cljs.core._chunked_next._,!b))throw cljs.core.missing_protocol.call(null,"IChunkedNext.-chunked-next",a);return b.call(null,a)};cljs.core.INamed=function(){return{}}();
cljs.core._name=function(a){if(a?a.cljs$core$INamed$_name$arity$1:a)return a.cljs$core$INamed$_name$arity$1(a);var b;b=cljs.core._name[goog.typeOf(null==a?null:a)];if(!b&&(b=cljs.core._name._,!b))throw cljs.core.missing_protocol.call(null,"INamed.-name",a);return b.call(null,a)};
cljs.core._namespace=function(a){if(a?a.cljs$core$INamed$_namespace$arity$1:a)return a.cljs$core$INamed$_namespace$arity$1(a);var b;b=cljs.core._namespace[goog.typeOf(null==a?null:a)];if(!b&&(b=cljs.core._namespace._,!b))throw cljs.core.missing_protocol.call(null,"INamed.-namespace",a);return b.call(null,a)};cljs.core.StringBufferWriter=function(a){this.sb=a;this.cljs$lang$protocol_mask$partition1$=0;this.cljs$lang$protocol_mask$partition0$=1073741824};
cljs.core.StringBufferWriter.cljs$lang$type=!0;cljs.core.StringBufferWriter.cljs$lang$ctorStr="cljs.core/StringBufferWriter";cljs.core.StringBufferWriter.cljs$lang$ctorPrWriter=function(a,b,c){return cljs.core._write.call(null,b,"cljs.core/StringBufferWriter")};cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_write$arity$2=function(a,b){return this.sb.append(b)};cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_flush$arity$1=function(a){return null};
cljs.core.__GT_StringBufferWriter=function(a){return new cljs.core.StringBufferWriter(a)};cljs.core.pr_str_STAR_=function(a){var b=new goog.string.StringBuffer,c=new cljs.core.StringBufferWriter(b);cljs.core._pr_writer.call(null,a,c,cljs.core.pr_opts.call(null));cljs.core._flush.call(null,c);return""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)};cljs.core.instance_QMARK_=function(a,b){return b instanceof a};cljs.core.symbol_QMARK_=function(a){return a instanceof cljs.core.Symbol};
cljs.core.hash_symbol=function(a){return cljs.core.hash_combine.call(null,cljs.core.hash.call(null,a.ns),cljs.core.hash.call(null,a.name))};
cljs.core.compare_symbols=function(a,b){if(cljs.core.truth_(cljs.core._EQ_.call(null,a,b)))return 0;if(cljs.core.truth_(function(){var c=cljs.core.not.call(null,a.ns);return c?b.ns:c}()))return-1;if(cljs.core.truth_(a.ns)){if(cljs.core.not.call(null,b.ns))return 1;var c=cljs.core.compare.call(null,a.ns,b.ns);return 0===c?cljs.core.compare.call(null,a.name,b.name):c}return new cljs.core.Keyword(null,"default","default",2558708147)?cljs.core.compare.call(null,a.name,b.name):null};
cljs.core.Symbol=function(a,b,c,d,e){this.ns=a;this.name=b;this.str=c;this._hash=d;this._meta=e;this.cljs$lang$protocol_mask$partition0$=2154168321;this.cljs$lang$protocol_mask$partition1$=4096};cljs.core.Symbol.cljs$lang$type=!0;cljs.core.Symbol.cljs$lang$ctorStr="cljs.core/Symbol";cljs.core.Symbol.cljs$lang$ctorPrWriter=function(a,b,c){return cljs.core._write.call(null,b,"cljs.core/Symbol")};
cljs.core.Symbol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3=function(a,b,c){return cljs.core._write.call(null,b,this.str)};cljs.core.Symbol.prototype.cljs$core$INamed$_name$arity$1=function(a){return this.name};cljs.core.Symbol.prototype.cljs$core$INamed$_namespace$arity$1=function(a){return this.ns};cljs.core.Symbol.prototype.cljs$core$IHash$_hash$arity$1=function(a){a=this._hash;return null!=a?a:this._hash=a=cljs.core.hash_symbol.call(null,this)};
cljs.core.Symbol.prototype.cljs$core$IWithMeta$_with_meta$arity$2=function(a,b){return new cljs.core.Symbol(this.ns,this.name,this.str,this._hash,b)};cljs.core.Symbol.prototype.cljs$core$IMeta$_meta$arity$1=function(a){return this._meta};cljs.core.Symbol.prototype.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return cljs.core._lookup.call(null,c,this,null);case 3:return cljs.core._lookup.call(null,c,this,d)}throw Error("Invalid arity: "+arguments.length);}}();
cljs.core.Symbol.prototype.apply=function(a,b){return this.call.apply(this,[this].concat(cljs.core.aclone.call(null,b)))};cljs.core.Symbol.prototype.cljs$core$IFn$_invoke$arity$1=function(a){return cljs.core._lookup.call(null,a,this,null)};cljs.core.Symbol.prototype.cljs$core$IFn$_invoke$arity$2=function(a,b){return cljs.core._lookup.call(null,a,this,b)};cljs.core.Symbol.prototype.cljs$core$IEquiv$_equiv$arity$2=function(a,b){return b instanceof cljs.core.Symbol?this.str===b.str:!1};
cljs.core.Symbol.prototype.toString=function(){return this.str};cljs.core.__GT_Symbol=function(a,b,c,d,e){return new cljs.core.Symbol(a,b,c,d,e)};
cljs.core.symbol=function(){var a=null,b=function(b){return b instanceof cljs.core.Symbol?b:a.call(null,null,b)},c=function(a,b){var c=null!=a?""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b):b;return new cljs.core.Symbol(a,b,c,null,null)},a=function(a,e){switch(arguments.length){case 1:return b.call(this,a);case 2:return c.call(this,a,e)}throw Error("Invalid arity: "+arguments.length);};a.cljs$core$IFn$_invoke$arity$1=b;a.cljs$core$IFn$_invoke$arity$2=
c;return a}();cljs.core.clone=function(a){return cljs.core._clone.call(null,a)};cljs.core.cloneable_QMARK_=function(a){return a?a.cljs$lang$protocol_mask$partition1$&8192||a.cljs$core$ICloneable$?!0:a.cljs$lang$protocol_mask$partition1$?!1:cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,a):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,a)};
cljs.core.seq=function(a){if(null==a)return null;if(a&&(a.cljs$lang$protocol_mask$partition0$&8388608||a.cljs$core$ISeqable$))return cljs.core._seq.call(null,a);if(a instanceof Array||"string"===typeof a)return 0===a.length?null:new cljs.core.IndexedSeq(a,0);if(cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,a))return cljs.core._seq.call(null,a);if(new cljs.core.Keyword(null,"else","else",1017020587))throw Error(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)+" is not ISeqable");
return null};cljs.core.first=function(a){if(null==a)return null;if(a&&(a.cljs$lang$protocol_mask$partition0$&64||a.cljs$core$ISeq$))return cljs.core._first.call(null,a);a=cljs.core.seq.call(null,a);return null==a?null:cljs.core._first.call(null,a)};cljs.core.rest=function(a){return null!=a?a&&(a.cljs$lang$protocol_mask$partition0$&64||a.cljs$core$ISeq$)?cljs.core._rest.call(null,a):(a=cljs.core.seq.call(null,a))?cljs.core._rest.call(null,a):cljs.core.List.EMPTY:cljs.core.List.EMPTY};
cljs.core.next=function(a){return null==a?null:a&&(a.cljs$lang$protocol_mask$partition0$&128||a.cljs$core$INext$)?cljs.core._next.call(null,a):cljs.core.seq.call(null,cljs.core.rest.call(null,a))};
cljs.core._EQ_=function(){var a=null,b=function(a,b){return null==a?null==b:a===b||cljs.core._equiv.call(null,a,b)},c=function(){var b=function(b,c,d){for(;;)if(a.call(null,b,c))if(cljs.core.next.call(null,d))b=c,c=cljs.core.first.call(null,d),d=cljs.core.next.call(null,d);else return a.call(null,c,cljs.core.first.call(null,d));else return!1},c=function(a,c,e){var k=null;2<arguments.length&&(k=cljs.core.array_seq(Array.prototype.slice.call(arguments,2),0));return b.call(this,a,c,k)};c.cljs$lang$maxFixedArity=
2;c.cljs$lang$applyTo=function(a){var c=cljs.core.first(a);a=cljs.core.next(a);var e=cljs.core.first(a);a=cljs.core.rest(a);return b(c,e,a)};c.cljs$core$IFn$_invoke$arity$variadic=b;return c}(),a=function(a,e,f){switch(arguments.length){case 1:return!0;case 2:return b.call(this,a,e);default:return c.cljs$core$IFn$_invoke$arity$variadic(a,e,cljs.core.array_seq(arguments,2))}throw Error("Invalid arity: "+arguments.length);};a.cljs$lang$maxFixedArity=2;a.cljs$lang$applyTo=c.cljs$lang$applyTo;a.cljs$core$IFn$_invoke$arity$1=
function(a){return!0};a.cljs$core$IFn$_invoke$arity$2=b;a.cljs$core$IFn$_invoke$arity$variadic=c.cljs$core$IFn$_invoke$arity$variadic;return a}();cljs.core.ICounted["null"]=!0;cljs.core._count["null"]=function(a){return 0};Date.prototype.cljs$core$IEquiv$=!0;Date.prototype.cljs$core$IEquiv$_equiv$arity$2=function(a,b){return b instanceof Date&&this.toString()===b.toString()};cljs.core.IEquiv.number=!0;cljs.core._equiv.number=function(a,b){return a===b};cljs.core.IMeta["function"]=!0;
cljs.core._meta["function"]=function(a){return null};cljs.core.Fn["function"]=!0;cljs.core.IHash._=!0;cljs.core._hash._=function(a){return goog.getUid(a)};cljs.core.inc=function(a){return a+1};cljs.core.Reduced=function(a){this.val=a;this.cljs$lang$protocol_mask$partition1$=0;this.cljs$lang$protocol_mask$partition0$=32768};cljs.core.Reduced.cljs$lang$type=!0;cljs.core.Reduced.cljs$lang$ctorStr="cljs.core/Reduced";
cljs.core.Reduced.cljs$lang$ctorPrWriter=function(a,b,c){return cljs.core._write.call(null,b,"cljs.core/Reduced")};cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1=function(a){return this.val};cljs.core.__GT_Reduced=function(a){return new cljs.core.Reduced(a)};cljs.core.reduced=function(a){return new cljs.core.Reduced(a)};cljs.core.reduced_QMARK_=function(a){return a instanceof cljs.core.Reduced};
cljs.core.ci_reduce=function(){var a=null,b=function(a,b){var c=cljs.core._count.call(null,a);if(0===c)return b.call(null);for(var d=cljs.core._nth.call(null,a,0),k=1;;)if(k<c){d=b.call(null,d,cljs.core._nth.call(null,a,k));if(cljs.core.reduced_QMARK_.call(null,d))return cljs.core.deref.call(null,d);k+=1}else return d},c=function(a,b,c){for(var d=cljs.core._count.call(null,a),k=0;;)if(k<d){c=b.call(null,c,cljs.core._nth.call(null,a,k));if(cljs.core.reduced_QMARK_.call(null,c))return cljs.core.deref.call(null,
c);k+=1}else return c},d=function(a,b,c,d){for(var k=cljs.core._count.call(null,a);;)if(d<k){c=b.call(null,c,cljs.core._nth.call(null,a,d));if(cljs.core.reduced_QMARK_.call(null,c))return cljs.core.deref.call(null,c);d+=1}else return c},a=function(a,f,g,h){switch(arguments.length){case 2:return b.call(this,a,f);case 3:return c.call(this,a,f,g);case 4:return d.call(this,a,f,g,h)}throw Error("Invalid arity: "+arguments.length);};a.cljs$core$IFn$_invoke$arity$2=b;a.cljs$core$IFn$_invoke$arity$3=c;a.cljs$core$IFn$_invoke$arity$4=
d;return a}();
cljs.core.array_reduce=function(){var a=null,b=function(a,b){var c=a.length;if(0===a.length)return b.call(null);for(var d=a[0],k=1;;)if(k<c){d=b.call(null,d,a[k]);if(cljs.core.reduced_QMARK_.call(null,d))return cljs.core.deref.call(null,d);k+=1}else return d},c=function(a,b,c){for(var d=a.length,k=0;;)if(k<d){c=b.call(null,c,a[k]);if(cljs.core.reduced_QMARK_.call(null,c))return cljs.core.deref.call(null,c);k+=1}else return c},d=function(a,b,c,d){for(var k=a.length;;)if(d<k){c=b.call(null,c,a[d]);
if(cljs.core.reduced_QMARK_.call(null,c))return cljs.core.deref.call(null,c);d+=1}else return c},a=function(a,f,g,h){switch(arguments.length){case 2:return b.call(this,a,f);case 3:return c.call(this,a,f,g);case 4:return d.call(this,a,f,g,h)}throw Error("Invalid arity: "+arguments.length);};a.cljs$core$IFn$_invoke$arity$2=b;a.cljs$core$IFn$_invoke$arity$3=c;a.cljs$core$IFn$_invoke$arity$4=d;return a}();
cljs.core.counted_QMARK_=function(a){return a?a.cljs$lang$protocol_mask$partition0$&2||a.cljs$core$ICounted$?!0:a.cljs$lang$protocol_mask$partition0$?!1:cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICounted,a):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICounted,a)};
cljs.core.indexed_QMARK_=function(a){return a?a.cljs$lang$protocol_mask$partition0$&16||a.cljs$core$IIndexed$?!0:a.cljs$lang$protocol_mask$partition0$?!1:cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IIndexed,a):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IIndexed,a)};cljs.core.IndexedSeq=function(a,b){this.arr=a;this.i=b;this.cljs$lang$protocol_mask$partition0$=166199550;this.cljs$lang$protocol_mask$partition1$=8192};cljs.core.IndexedSeq.cljs$lang$type=!0;
cljs.core.IndexedSeq.cljs$lang$ctorStr="cljs.core/IndexedSeq";cljs.core.IndexedSeq.cljs$lang$ctorPrWriter=function(a,b,c){return cljs.core._write.call(null,b,"cljs.core/IndexedSeq")};cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1=function(a){return cljs.core.hash_coll.call(null,this)};cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1=function(a){return this.i+1<this.arr.length?new cljs.core.IndexedSeq(this.arr,this.i+1):null};
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2=function(a,b){return cljs.core.cons.call(null,b,this)};cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1=function(a){a=cljs.core._count.call(null,this);return 0<a?new cljs.core.RSeq(this,a-1,null):null};cljs.core.IndexedSeq.prototype.toString=function(){return cljs.core.pr_str_STAR_.call(null,this)};
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2=function(a,b){return cljs.core.array_reduce.call(null,this.arr,b,this.arr[this.i],this.i+1)};cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3=function(a,b,c){return cljs.core.array_reduce.call(null,this.arr,b,c,this.i)};cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1=function(a){return this};cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1=function(a){return this.arr.length-this.i};
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1=function(a){return this.arr[this.i]};cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1=function(a){return this.i+1<this.arr.length?new cljs.core.IndexedSeq(this.arr,this.i+1):cljs.core.List.EMPTY};cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2=function(a,b){return cljs.core.equiv_sequential.call(null,this,b)};
cljs.core.IndexedSeq.prototype.cljs$core$ICloneable$_clone$arity$1=function(a){return new cljs.core.IndexedSeq(this.arr,this.i)};cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2=function(a,b){var c=b+this.i;return c<this.arr.length?this.arr[c]:null};cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3=function(a,b,c){a=b+this.i;return a<this.arr.length?this.arr[a]:c};cljs.core.IndexedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1=function(a){return cljs.core.List.EMPTY};
cljs.core.__GT_IndexedSeq=function(a,b){return new cljs.core.IndexedSeq(a,b)};cljs.core.prim_seq=function(){var a=null,b=function(b){return a.call(null,b,0)},c=function(a,b){return b<a.length?new cljs.core.IndexedSeq(a,b):null},a=function(a,e){switch(arguments.length){case 1:return b.call(this,a);case 2:return c.call(this,a,e)}throw Error("Invalid arity: "+arguments.length);};a.cljs$core$IFn$_invoke$arity$1=b;a.cljs$core$IFn$_invoke$arity$2=c;return a}();
cljs.core.array_seq=function(){var a=null,b=function(a){return cljs.core.prim_seq.call(null,a,0)},c=function(a,b){return cljs.core.prim_seq.call(null,a,b)},a=function(a,e){switch(arguments.length){case 1:return b.call(this,a);case 2:return c.call(this,a,e)}throw Error("Invalid arity: "+arguments.length);};a.cljs$core$IFn$_invoke$arity$1=b;a.cljs$core$IFn$_invoke$arity$2=c;return a}();
cljs.core.RSeq=function(a,b,c){this.ci=a;this.i=b;this.meta=c;this.cljs$lang$protocol_mask$partition0$=32374990;this.cljs$lang$protocol_mask$partition1$=8192};cljs.core.RSeq.cljs$lang$type=!0;cljs.core.RSeq.cljs$lang$ctorStr="cljs.core/RSeq";cljs.core.RSeq.cljs$lang$ctorPrWriter=function(a,b,c){return cljs.core._write.call(null,b,"cljs.core/RSeq")};cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1=function(a){return cljs.core.hash_coll.call(null,this)};
cljs.core.RSeq.prototype.cljs$core$INext$_next$arity$1=function(a){return 0<this.i?new cljs.core.RSeq(this.ci,this.i-1,null):null};cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2=function(a,b){return cljs.core.cons.call(null,b,this)};cljs.core.RSeq.prototype.toString=function(){return cljs.core.pr_str_STAR_.call(null,this)};cljs.core.RSeq.prototype.cljs$core$IReduce$_reduce$arity$2=function(a,b){return cljs.core.seq_reduce.call(null,b,this)};
cljs.core.RSeq.prototype.cljs$core$IReduce$_reduce$arity$3=function(a,b,c){return cljs.core.seq_reduce.call(null,b,c,this)};cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1=function(a){return this};cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1=function(a){return this.i+1};cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1=function(a){return cljs.core._nth.call(null,this.ci,this.i)};
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1=function(a){return 0<this.i?new cljs.core.RSeq(this.ci,this.i-1,null):cljs.core.List.EMPTY};cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2=function(a,b){return cljs.core.equiv_sequential.call(null,this,b)};cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2=function(a,b){return new cljs.core.RSeq(this.ci,this.i,b)};
cljs.core.RSeq.prototype.cljs$core$ICloneable$_clone$arity$1=function(a){return new cljs.core.RSeq(this.ci,this.i,this.meta)};cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1=function(a){return this.meta};cljs.core.RSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1=function(a){return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this.meta)};cljs.core.__GT_RSeq=function(a,b,c){return new cljs.core.RSeq(a,b,c)};
cljs.core.second=function(a){return cljs.core.first.call(null,cljs.core.next.call(null,a))};cljs.core.ffirst=function(a){return cljs.core.first.call(null,cljs.core.first.call(null,a))};cljs.core.nfirst=function(a){return cljs.core.next.call(null,cljs.core.first.call(null,a))};cljs.core.fnext=function(a){return cljs.core.first.call(null,cljs.core.next.call(null,a))};cljs.core.nnext=function(a){return cljs.core.next.call(null,cljs.core.next.call(null,a))};
cljs.core.last=function(a){for(;;){var b=cljs.core.next.call(null,a);if(null!=b)a=b;else return cljs.core.first.call(null,a)}};cljs.core.IEquiv._=!0;cljs.core._equiv._=function(a,b){return a===b};
cljs.core.conj=function(){var a=null,b=function(a,b){return null!=a?cljs.core._conj.call(null,a,b):cljs.core._conj.call(null,cljs.core.List.EMPTY,b)},c=function(){var b=function(b,c,d){for(;;)if(cljs.core.truth_(d))b=a.call(null,b,c),c=cljs.core.first.call(null,d),d=cljs.core.next.call(null,d);else return a.call(null,b,c)},c=function(a,c,e){var k=null;2<arguments.length&&(k=cljs.core.array_seq(Array.prototype.slice.call(arguments,2),0));return b.call(this,a,c,k)};c.cljs$lang$maxFixedArity=2;c.cljs$lang$applyTo=
function(a){var c=cljs.core.first(a);a=cljs.core.next(a);var e=cljs.core.first(a);a=cljs.core.rest(a);return b(c,e,a)};c.cljs$core$IFn$_invoke$arity$variadic=b;return c}(),a=function(a,e,f){switch(arguments.length){case 2:return b.call(this,a,e);default:return c.cljs$core$IFn$_invoke$arity$variadic(a,e,cljs.core.array_seq(arguments,2))}throw Error("Invalid arity: "+arguments.length);};a.cljs$lang$maxFixedArity=2;a.cljs$lang$applyTo=c.cljs$lang$applyTo;a.cljs$core$IFn$_invoke$arity$2=b;a.cljs$core$IFn$_invoke$arity$variadic=
c.cljs$core$IFn$_invoke$arity$variadic;return a}();cljs.core.empty=function(a){return null==a?null:cljs.core._empty.call(null,a)};cljs.core.accumulating_seq_count=function(a){a=cljs.core.seq.call(null,a);for(var b=0;;){if(cljs.core.counted_QMARK_.call(null,a))return b+cljs.core._count.call(null,a);a=cljs.core.next.call(null,a);b+=1}};
cljs.core.count=function(a){return null!=a?a&&(a.cljs$lang$protocol_mask$partition0$&2||a.cljs$core$ICounted$)?cljs.core._count.call(null,a):a instanceof Array?a.length:"string"===typeof a?a.length:cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICounted,a)?cljs.core._count.call(null,a):new cljs.core.Keyword(null,"else","else",1017020587)?cljs.core.accumulating_seq_count.call(null,a):null:0};
cljs.core.linear_traversal_nth=function(){var a=null,b=function(a,b){for(;;){if(null==a)throw Error("Index out of bounds");if(0===b){if(cljs.core.seq.call(null,a))return cljs.core.first.call(null,a);throw Error("Index out of bounds");}if(cljs.core.indexed_QMARK_.call(null,a))return cljs.core._nth.call(null,a,b);if(cljs.core.seq.call(null,a)){var c=cljs.core.next.call(null,a),g=b-1;a=c;b=g}else{if(new cljs.core.Keyword(null,"else","else",1017020587))throw Error("Index out of bounds");return null}}},
c=function(a,b,c){for(;;){if(null==a)return c;if(0===b)return cljs.core.seq.call(null,a)?cljs.core.first.call(null,a):c;if(cljs.core.indexed_QMARK_.call(null,a))return cljs.core._nth.call(null,a,b,c);if(cljs.core.seq.call(null,a))a=cljs.core.next.call(null,a),b-=1;else return new cljs.core.Keyword(null,"else","else",1017020587)?c:null}},a=function(a,e,f){switch(arguments.length){case 2:return b.call(this,a,e);case 3:return c.call(this,a,e,f)}throw Error("Invalid arity: "+arguments.length);};a.cljs$core$IFn$_invoke$arity$2=
b;a.cljs$core$IFn$_invoke$arity$3=c;return a}();
cljs.core.nth=function(){var a=null,b=function(a,b){if("number"!==typeof b)throw Error("index argument to nth must be a number");if(null==a)return a;if(a&&(a.cljs$lang$protocol_mask$partition0$&16||a.cljs$core$IIndexed$))return cljs.core._nth.call(null,a,b);if(a instanceof Array||"string"===typeof a)return b<a.length?a[b]:null;if(cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IIndexed,a))return cljs.core._nth.call(null,a,b);if(a?a.cljs$lang$protocol_mask$partition0$&64||a.cljs$core$ISeq$||
(a.cljs$lang$protocol_mask$partition0$?0:cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeq,a)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeq,a))return cljs.core.linear_traversal_nth.call(null,a,b);if(new cljs.core.Keyword(null,"else","else",1017020587))throw Error("nth not supported on this type "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type__GT_str.call(null,cljs.core.type.call(null,a))));return null},c=function(a,b,c){if("number"!==typeof b)throw Error("index argument to nth must be a number.");
if(null==a)return c;if(a&&(a.cljs$lang$protocol_mask$partition0$&16||a.cljs$core$IIndexed$))return cljs.core._nth.call(null,a,b,c);if(a instanceof Array||"string"===typeof a)return b<a.length?a[b]:c;if(cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IIndexed,a))return cljs.core._nth.call(null,a,b);if(a?a.cljs$lang$protocol_mask$partition0$&64||a.cljs$core$ISeq$||(a.cljs$lang$protocol_mask$partition0$?0:cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeq,a)):cljs.core.native_satisfies_QMARK_.call(null,
cljs.core.ISeq,a))return cljs.core.linear_traversal_nth.call(null,a,b,c);if(new cljs.core.Keyword(null,"else","else",1017020587))throw Error("nth not supported on this type "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type__GT_str.call(null,cljs.core.type.call(null,a))));return null},a=function(a,e,f){switch(arguments.length){case 2:return b.call(this,a,e);case 3:return c.call(this,a,e,f)}throw Error("Invalid arity: "+arguments.length);};a.cljs$core$IFn$_invoke$arity$2=b;a.cljs$core$IFn$_invoke$arity$3=
c;return a}();
cljs.core.get=function(){var a=null,b=function(a,b){if(null==a)return null;if(a&&(a.cljs$lang$protocol_mask$partition0$&256||a.cljs$core$ILookup$))return cljs.core._lookup.call(null,a,b);if(a instanceof Array||"string"===typeof a)return b<a.length?a[b]:null;if(cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,a))return cljs.core._lookup.call(null,a,b);new cljs.core.Keyword(null,"else","else",1017020587);return null},c=function(a,b,c){return null!=a?a&&(a.cljs$lang$protocol_mask$partition0$&256||
a.cljs$core$ILookup$)?cljs.core._lookup.call(null,a,b,c):a instanceof Array?b<a.length?a[b]:c:"string"===typeof a?b<a.length?a[b]:c:cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,a)?cljs.core._lookup.call(null,a,b,c):new cljs.core.Keyword(null,"else","else",1017020587)?c:null:c},a=function(a,e,f){switch(arguments.length){case 2:return b.call(this,a,e);case 3:return c.call(this,a,e,f)}throw Error("Invalid arity: "+arguments.length);};a.cljs$core$IFn$_invoke$arity$2=b;a.cljs$core$IFn$_invoke$arity$3=
c;return a}();
cljs.core.assoc=function(){var a=null,b=function(a,b,c){return null!=a?cljs.core._assoc.call(null,a,b,c):cljs.core.PersistentHashMap.fromArrays.call(null,[b],[c])},c=function(){var b=function(b,c,d,e){for(;;)if(b=a.call(null,b,c,d),cljs.core.truth_(e))c=cljs.core.first.call(null,e),d=cljs.core.second.call(null,e),e=cljs.core.nnext.call(null,e);else return b},c=function(a,c,e,k){var l=null;3<arguments.length&&(l=cljs.core.array_seq(Array.prototype.slice.call(arguments,3),0));return b.call(this,a,c,
e,l)};c.cljs$lang$maxFixedArity=3;c.cljs$lang$applyTo=function(a){var c=cljs.core.first(a);a=cljs.core.next(a);var e=cljs.core.first(a);a=cljs.core.next(a);var k=cljs.core.first(a);a=cljs.core.rest(a);return b(c,e,k,a)};c.cljs$core$IFn$_invoke$arity$variadic=b;return c}(),a=function(a,e,f,g){switch(arguments.length){case 3:return b.call(this,a,e,f);default:return c.cljs$core$IFn$_invoke$arity$variadic(a,e,f,cljs.core.array_seq(arguments,3))}throw Error("Invalid arity: "+arguments.length);};a.cljs$lang$maxFixedArity=
3;a.cljs$lang$applyTo=c.cljs$lang$applyTo;a.cljs$core$IFn$_invoke$arity$3=b;a.cljs$core$IFn$_invoke$arity$variadic=c.cljs$core$IFn$_invoke$arity$variadic;return a}();
cljs.core.dissoc=function(){var a=null,b=function(a,b){return null==a?null:cljs.core._dissoc.call(null,a,b)},c=function(){var b=function(b,c,d){for(;;){if(null==b)return null;b=a.call(null,b,c);if(cljs.core.truth_(d))c=cljs.core.first.call(null,d),d=cljs.core.next.call(null,d);else return b}},c=function(a,c,e){var k=null;2<arguments.length&&(k=cljs.core.array_seq(Array.prototype.slice.call(arguments,2),0));return b.call(this,a,c,k)};c.cljs$lang$maxFixedArity=2;c.cljs$lang$applyTo=function(a){var c=
cljs.core.first(a);a=cljs.core.next(a);var e=cljs.core.first(a);a=cljs.core.rest(a);return b(c,e,a)};c.cljs$core$IFn$_invoke$arity$variadic=b;return c}(),a=function(a,e,f){switch(arguments.length){case 1:return a;case 2:return b.call(this,a,e);default:return c.cljs$core$IFn$_invoke$arity$variadic(a,e,cljs.core.array_seq(arguments,2))}throw Error("Invalid arity: "+arguments.length);};a.cljs$lang$maxFixedArity=2;a.cljs$lang$applyTo=c.cljs$lang$applyTo;a.cljs$core$IFn$_invoke$arity$1=function(a){return a};
a.cljs$core$IFn$_invoke$arity$2=b;a.cljs$core$IFn$_invoke$arity$variadic=c.cljs$core$IFn$_invoke$arity$variadic;return a}();cljs.core.fn_QMARK_=function(a){var b=goog.isFunction(a);return b?b:a?cljs.core.truth_(cljs.core.truth_(null)?null:a.cljs$core$Fn$)?!0:a.cljs$lang$protocol_mask$partition$?!1:cljs.core.native_satisfies_QMARK_.call(null,cljs.core.Fn,a):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.Fn,a)};
cljs.core.MetaFn=function(a,b){this.afn=a;this.meta=b;this.cljs$lang$protocol_mask$partition1$=0;this.cljs$lang$protocol_mask$partition0$=393217};cljs.core.MetaFn.cljs$lang$type=!0;cljs.core.MetaFn.cljs$lang$ctorStr="cljs.core/MetaFn";cljs.core.MetaFn.cljs$lang$ctorPrWriter=function(a,b,c){return cljs.core._write.call(null,b,"cljs.core/MetaFn")};
cljs.core.MetaFn.prototype.call=function(){var a=null;return a=function(a,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v,y,z,A,B,D){switch(arguments.length){case 2:return this.afn.call(null,c);case 3:return this.afn.call(null,c,d);case 4:return this.afn.call(null,c,d,e);case 5:return this.afn.call(null,c,d,e,f);case 6:return this.afn.call(null,c,d,e,f,g);case 7:return this.afn.call(null,c,d,e,f,g,h);case 8:return this.afn.call(null,c,d,e,f,g,h,k);case 9:return this.afn.call(null,c,d,e,f,g,h,k,l);case 10:return this.afn.call(null,
c,d,e,f,g,h,k,l,m);case 11:return this.afn.call(null,c,d,e,f,g,h,k,l,m,n);case 12:return this.afn.call(null,c,d,e,f,g,h,k,l,m,n,p);case 13:return this.afn.call(null,c,d,e,f,g,h,k,l,m,n,p,q);case 14:return this.afn.call(null,c,d,e,f,g,h,k,l,m,n,p,q,r);case 15:return this.afn.call(null,c,d,e,f,g,h,k,l,m,n,p,q,r,s);case 16:return this.afn.call(null,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t);case 17:return this.afn.call(null,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v);case 18:return this.afn.call(null,c,d,e,f,g,h,k,l,m,n,p,
q,r,s,t,v,y);case 19:return this.afn.call(null,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v,y,z);case 20:return this.afn.call(null,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v,y,z,A);case 21:return this.afn.call(null,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v,y,z,A,B);case 22:return cljs.core.apply.call(null,this.afn,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v,y,z,A,B,D)}throw Error("Invalid arity: "+arguments.length);}}();cljs.core.MetaFn.prototype.apply=function(a,b){return this.call.apply(this,[this].concat(cljs.core.aclone.call(null,b)))};
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$1=function(a){return this.afn.call(null,a)};cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$2=function(a,b){return this.afn.call(null,a,b)};cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$3=function(a,b,c){return this.afn.call(null,a,b,c)};cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$4=function(a,b,c,d){return this.afn.call(null,a,b,c,d)};
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$5=function(a,b,c,d,e){return this.afn.call(null,a,b,c,d,e)};cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$6=function(a,b,c,d,e,f){return this.afn.call(null,a,b,c,d,e,f)};cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$7=function(a,b,c,d,e,f,g){return this.afn.call(null,a,b,c,d,e,f,g)};cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$8=function(a,b,c,d,e,f,g,h){return this.afn.call(null,a,b,c,d,e,f,g,h)};
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$9=function(a,b,c,d,e,f,g,h,k){return this.afn.call(null,a,b,c,d,e,f,g,h,k)};cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$10=function(a,b,c,d,e,f,g,h,k,l){return this.afn.call(null,a,b,c,d,e,f,g,h,k,l)};cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$11=function(a,b,c,d,e,f,g,h,k,l,m){return this.afn.call(null,a,b,c,d,e,f,g,h,k,l,m)};
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$12=function(a,b,c,d,e,f,g,h,k,l,m,n){return this.afn.call(null,a,b,c,d,e,f,g,h,k,l,m,n)};cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$13=function(a,b,c,d,e,f,g,h,k,l,m,n,p){return this.afn.call(null,a,b,c,d,e,f,g,h,k,l,m,n,p)};cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$14=function(a,b,c,d,e,f,g,h,k,l,m,n,p,q){return this.afn.call(null,a,b,c,d,e,f,g,h,k,l,m,n,p,q)};
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$15=function(a,b,c,d,e,f,g,h,k,l,m,n,p,q,r){return this.afn.call(null,a,b,c,d,e,f,g,h,k,l,m,n,p,q,r)};cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$16=function(a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s){return this.afn.call(null,a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s)};cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$17=function(a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t){return this.afn.call(null,a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t)};
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$18=function(a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v){return this.afn.call(null,a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v)};cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$19=function(a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v,y){return this.afn.call(null,a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v,y)};
cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$20=function(a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v,y,z){return this.afn.call(null,a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v,y,z)};cljs.core.MetaFn.prototype.cljs$core$IFn$_invoke$arity$21=function(a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v,y,z,A){return cljs.core.apply.call(null,this.afn,a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v,y,z,A)};cljs.core.MetaFn.prototype.cljs$core$Fn$=!0;
cljs.core.MetaFn.prototype.cljs$core$IWithMeta$_with_meta$arity$2=function(a,b){return new cljs.core.MetaFn(this.afn,b)};cljs.core.MetaFn.prototype.cljs$core$IMeta$_meta$arity$1=function(a){return this.meta};cljs.core.__GT_MetaFn=function(a,b){return new cljs.core.MetaFn(a,b)};
cljs.core.with_meta=function(a,b){var c;if(c=cljs.core.fn_QMARK_.call(null,a))c=!(a?a.cljs$lang$protocol_mask$partition0$&262144||a.cljs$core$IWithMeta$||(a.cljs$lang$protocol_mask$partition0$?0:cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,a)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,a));return c?new cljs.core.MetaFn(a,b):null==a?null:cljs.core._with_meta.call(null,a,b)};
cljs.core.meta=function(a){var b;b=(b=null!=a)?a?a.cljs$lang$protocol_mask$partition0$&131072||a.cljs$core$IMeta$?!0:a.cljs$lang$protocol_mask$partition0$?!1:cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMeta,a):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMeta,a):b;return b?cljs.core._meta.call(null,a):null};cljs.core.peek=function(a){return null==a?null:cljs.core._peek.call(null,a)};cljs.core.pop=function(a){return null==a?null:cljs.core._pop.call(null,a)};
cljs.core.disj=function(){var a=null,b=function(a,b){return null==a?null:cljs.core._disjoin.call(null,a,b)},c=function(){var b=function(b,c,d){for(;;){if(null==b)return null;b=a.call(null,b,c);if(cljs.core.truth_(d))c=cljs.core.first.call(null,d),d=cljs.core.next.call(null,d);else return b}},c=function(a,c,e){var k=null;2<arguments.length&&(k=cljs.core.array_seq(Array.prototype.slice.call(arguments,2),0));return b.call(this,a,c,k)};c.cljs$lang$maxFixedArity=2;c.cljs$lang$applyTo=function(a){var c=
cljs.core.first(a);a=cljs.core.next(a);var e=cljs.core.first(a);a=cljs.core.rest(a);return b(c,e,a)};c.cljs$core$IFn$_invoke$arity$variadic=b;return c}(),a=function(a,e,f){switch(arguments.length){case 1:return a;case 2:return b.call(this,a,e);default:return c.cljs$core$IFn$_invoke$arity$variadic(a,e,cljs.core.array_seq(arguments,2))}throw Error("Invalid arity: "+arguments.length);};a.cljs$lang$maxFixedArity=2;a.cljs$lang$applyTo=c.cljs$lang$applyTo;a.cljs$core$IFn$_invoke$arity$1=function(a){return a};
a.cljs$core$IFn$_invoke$arity$2=b;a.cljs$core$IFn$_invoke$arity$variadic=c.cljs$core$IFn$_invoke$arity$variadic;return a}();cljs.core.string_hash_cache=function(){return{}}();cljs.core.string_hash_cache_count=0;cljs.core.add_to_string_hash_cache=function(a){var b=goog.string.hashCode(a);cljs.core.string_hash_cache[a]=b;cljs.core.string_hash_cache_count+=1;return b};
cljs.core.check_string_hash_cache=function(a){255<cljs.core.string_hash_cache_count&&(cljs.core.string_hash_cache={},cljs.core.string_hash_cache_count=0);var b=cljs.core.string_hash_cache[a];return"number"===typeof b?b:cljs.core.add_to_string_hash_cache.call(null,a)};
cljs.core.hash=function(a){return a&&(a.cljs$lang$protocol_mask$partition0$&4194304||a.cljs$core$IHash$)?cljs.core._hash.call(null,a):"number"===typeof a?Math.floor(a)%2147483647:!0===a?1:!1===a?0:"string"===typeof a?cljs.core.check_string_hash_cache.call(null,a):null==a?0:new cljs.core.Keyword(null,"else","else",1017020587)?cljs.core._hash.call(null,a):null};cljs.core.empty_QMARK_=function(a){return null==a||cljs.core.not.call(null,cljs.core.seq.call(null,a))};
cljs.core.coll_QMARK_=function(a){return null==a?!1:a?a.cljs$lang$protocol_mask$partition0$&8||a.cljs$core$ICollection$?!0:a.cljs$lang$protocol_mask$partition0$?!1:cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICollection,a):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICollection,a)};
cljs.core.set_QMARK_=function(a){return null==a?!1:a?a.cljs$lang$protocol_mask$partition0$&4096||a.cljs$core$ISet$?!0:a.cljs$lang$protocol_mask$partition0$?!1:cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISet,a):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISet,a)};
cljs.core.associative_QMARK_=function(a){return a?a.cljs$lang$protocol_mask$partition0$&512||a.cljs$core$IAssociative$?!0:a.cljs$lang$protocol_mask$partition0$?!1:cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAssociative,a):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAssociative,a)};
cljs.core.sequential_QMARK_=function(a){return a?a.cljs$lang$protocol_mask$partition0$&16777216||a.cljs$core$ISequential$?!0:a.cljs$lang$protocol_mask$partition0$?!1:cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISequential,a):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISequential,a)};
cljs.core.sorted_QMARK_=function(a){return a?a.cljs$lang$protocol_mask$partition0$&268435456||a.cljs$core$ISorted$?!0:a.cljs$lang$protocol_mask$partition0$?!1:cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISorted,a):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISorted,a)};
cljs.core.reduceable_QMARK_=function(a){return a?a.cljs$lang$protocol_mask$partition0$&524288||a.cljs$core$IReduce$?!0:a.cljs$lang$protocol_mask$partition0$?!1:cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IReduce,a):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IReduce,a)};
cljs.core.map_QMARK_=function(a){return null==a?!1:a?a.cljs$lang$protocol_mask$partition0$&1024||a.cljs$core$IMap$?!0:a.cljs$lang$protocol_mask$partition0$?!1:cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMap,a):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMap,a)};
cljs.core.vector_QMARK_=function(a){return a?a.cljs$lang$protocol_mask$partition0$&16384||a.cljs$core$IVector$?!0:a.cljs$lang$protocol_mask$partition0$?!1:cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IVector,a):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IVector,a)};cljs.core.chunked_seq_QMARK_=function(a){return a?a.cljs$lang$protocol_mask$partition1$&512||a.cljs$core$IChunkedSeq$?!0:!1:!1};
cljs.core.js_obj=function(){var a=null,b=function(){var a=function(a){return cljs.core.apply.call(null,goog.object.create,a)},b=function(b){var d=null;0<arguments.length&&(d=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0));return a.call(this,d)};b.cljs$lang$maxFixedArity=0;b.cljs$lang$applyTo=function(b){b=cljs.core.seq(b);return a(b)};b.cljs$core$IFn$_invoke$arity$variadic=a;return b}(),a=function(a){switch(arguments.length){case 0:return{};default:return b.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(arguments,
0))}throw Error("Invalid arity: "+arguments.length);};a.cljs$lang$maxFixedArity=0;a.cljs$lang$applyTo=b.cljs$lang$applyTo;a.cljs$core$IFn$_invoke$arity$0=function(){return{}};a.cljs$core$IFn$_invoke$arity$variadic=b.cljs$core$IFn$_invoke$arity$variadic;return a}();cljs.core.js_keys=function(a){var b=[];goog.object.forEach(a,function(a){return function(b,e,f){return a.push(e)}}(b));return b};cljs.core.js_delete=function(a,b){return delete a[b]};
cljs.core.array_copy=function(a,b,c,d,e){for(;;){if(0===e)return c;c[d]=a[b];d+=1;e-=1;b+=1}};cljs.core.array_copy_downward=function(a,b,c,d,e){b+=e-1;for(d+=e-1;;){if(0===e)return c;c[d]=a[b];d-=1;e-=1;b-=1}};cljs.core.lookup_sentinel=function(){return{}}();cljs.core.false_QMARK_=function(a){return!1===a};cljs.core.true_QMARK_=function(a){return!0===a};cljs.core.undefined_QMARK_=function(a){return void 0===a};
cljs.core.seq_QMARK_=function(a){return null==a?!1:a?a.cljs$lang$protocol_mask$partition0$&64||a.cljs$core$ISeq$?!0:a.cljs$lang$protocol_mask$partition0$?!1:cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeq,a):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeq,a)};
cljs.core.seqable_QMARK_=function(a){return a?a.cljs$lang$protocol_mask$partition0$&8388608||a.cljs$core$ISeqable$?!0:a.cljs$lang$protocol_mask$partition0$?!1:cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,a):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,a)};cljs.core.boolean$=function(a){return cljs.core.truth_(a)?!0:!1};
cljs.core.ifn_QMARK_=function(a){var b=cljs.core.fn_QMARK_.call(null,a);return b?b:a?a.cljs$lang$protocol_mask$partition0$&1||a.cljs$core$IFn$?!0:a.cljs$lang$protocol_mask$partition0$?!1:cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IFn,a):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IFn,a)};cljs.core.integer_QMARK_=function(a){return"number"===typeof a&&!isNaN(a)&&Infinity!==a&&parseFloat(a)===parseInt(a,10)};
cljs.core.contains_QMARK_=function(a,b){return cljs.core.get.call(null,a,b,cljs.core.lookup_sentinel)===cljs.core.lookup_sentinel?!1:!0};cljs.core.find=function(a,b){return null!=a&&cljs.core.associative_QMARK_.call(null,a)&&cljs.core.contains_QMARK_.call(null,a,b)?new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[b,cljs.core.get.call(null,a,b)],null):null};
cljs.core.distinct_QMARK_=function(){var a=null,b=function(a,b){return!cljs.core._EQ_.call(null,a,b)},c=function(){var a=function(a,b,c){if(cljs.core._EQ_.call(null,a,b))return!1;a=cljs.core.PersistentHashSet.fromArray([b,a],!0);for(b=c;;){var d=cljs.core.first.call(null,b);c=cljs.core.next.call(null,b);if(cljs.core.truth_(b)){if(cljs.core.contains_QMARK_.call(null,a,d))return!1;a=cljs.core.conj.call(null,a,d);b=c}else return!0}},b=function(b,c,e){var k=null;2<arguments.length&&(k=cljs.core.array_seq(Array.prototype.slice.call(arguments,
2),0));return a.call(this,b,c,k)};b.cljs$lang$maxFixedArity=2;b.cljs$lang$applyTo=function(b){var c=cljs.core.first(b);b=cljs.core.next(b);var e=cljs.core.first(b);b=cljs.core.rest(b);return a(c,e,b)};b.cljs$core$IFn$_invoke$arity$variadic=a;return b}(),a=function(a,e,f){switch(arguments.length){case 1:return!0;case 2:return b.call(this,a,e);default:return c.cljs$core$IFn$_invoke$arity$variadic(a,e,cljs.core.array_seq(arguments,2))}throw Error("Invalid arity: "+arguments.length);};a.cljs$lang$maxFixedArity=
2;a.cljs$lang$applyTo=c.cljs$lang$applyTo;a.cljs$core$IFn$_invoke$arity$1=function(a){return!0};a.cljs$core$IFn$_invoke$arity$2=b;a.cljs$core$IFn$_invoke$arity$variadic=c.cljs$core$IFn$_invoke$arity$variadic;return a}();cljs.core.sequence=function(a){return cljs.core.seq_QMARK_.call(null,a)?a:(a=cljs.core.seq.call(null,a))?a:cljs.core.List.EMPTY};
cljs.core.compare=function(a,b){if(a===b)return 0;if(null==a)return-1;if(null==b)return 1;if(cljs.core.type.call(null,a)===cljs.core.type.call(null,b))return a&&(a.cljs$lang$protocol_mask$partition1$&2048||a.cljs$core$IComparable$)?cljs.core._compare.call(null,a,b):goog.array.defaultCompare(a,b);if(new cljs.core.Keyword(null,"else","else",1017020587))throw Error("compare on non-nil objects of different types");return null};
cljs.core.compare_indexed=function(){var a=null,b=function(b,c){var f=cljs.core.count.call(null,b),g=cljs.core.count.call(null,c);return f<g?-1:f>g?1:new cljs.core.Keyword(null,"else","else",1017020587)?a.call(null,b,c,f,0):null},c=function(a,b,c,g){for(;;){var h=cljs.core.compare.call(null,cljs.core.nth.call(null,a,g),cljs.core.nth.call(null,b,g));if(0===h&&g+1<c)g+=1;else return h}},a=function(a,e,f,g){switch(arguments.length){case 2:return b.call(this,a,e);case 4:return c.call(this,a,e,f,g)}throw Error("Invalid arity: "+
arguments.length);};a.cljs$core$IFn$_invoke$arity$2=b;a.cljs$core$IFn$_invoke$arity$4=c;return a}();cljs.core.fn__GT_comparator=function(a){return cljs.core._EQ_.call(null,a,cljs.core.compare)?cljs.core.compare:function(b,c){var d=a.call(null,b,c);return"number"===typeof d?d:cljs.core.truth_(d)?-1:cljs.core.truth_(a.call(null,c,b))?1:0}};
cljs.core.sort=function(){var a=null,b=function(b){return a.call(null,cljs.core.compare,b)},c=function(a,b){if(cljs.core.seq.call(null,b)){var c=cljs.core.to_array.call(null,b);goog.array.stableSort(c,cljs.core.fn__GT_comparator.call(null,a));return cljs.core.seq.call(null,c)}return cljs.core.List.EMPTY},a=function(a,e){switch(arguments.length){case 1:return b.call(this,a);case 2:return c.call(this,a,e)}throw Error("Invalid arity: "+arguments.length);};a.cljs$core$IFn$_invoke$arity$1=b;a.cljs$core$IFn$_invoke$arity$2=
c;return a}();cljs.core.sort_by=function(){var a=null,b=function(b,c){return a.call(null,b,cljs.core.compare,c)},c=function(a,b,c){return cljs.core.sort.call(null,function(c,f){return cljs.core.fn__GT_comparator.call(null,b).call(null,a.call(null,c),a.call(null,f))},c)},a=function(a,e,f){switch(arguments.length){case 2:return b.call(this,a,e);case 3:return c.call(this,a,e,f)}throw Error("Invalid arity: "+arguments.length);};a.cljs$core$IFn$_invoke$arity$2=b;a.cljs$core$IFn$_invoke$arity$3=c;return a}();
cljs.core.seq_reduce=function(){var a=null,b=function(a,b){var c=cljs.core.seq.call(null,b);return c?cljs.core.reduce.call(null,a,cljs.core.first.call(null,c),cljs.core.next.call(null,c)):a.call(null)},c=function(a,b,c){for(c=cljs.core.seq.call(null,c);;)if(c){b=a.call(null,b,cljs.core.first.call(null,c));if(cljs.core.reduced_QMARK_.call(null,b))return cljs.core.deref.call(null,b);c=cljs.core.next.call(null,c)}else return b},a=function(a,e,f){switch(arguments.length){case 2:return b.call(this,a,e);
case 3:return c.call(this,a,e,f)}throw Error("Invalid arity: "+arguments.length);};a.cljs$core$IFn$_invoke$arity$2=b;a.cljs$core$IFn$_invoke$arity$3=c;return a}();cljs.core.shuffle=function(a){a=cljs.core.to_array.call(null,a);goog.array.shuffle(a);return cljs.core.vec.call(null,a)};
cljs.core.reduce=function(){var a=null,b=function(a,b){return b&&(b.cljs$lang$protocol_mask$partition0$&524288||b.cljs$core$IReduce$)?cljs.core._reduce.call(null,b,a):b instanceof Array?cljs.core.array_reduce.call(null,b,a):"string"===typeof b?cljs.core.array_reduce.call(null,b,a):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IReduce,b)?cljs.core._reduce.call(null,b,a):new cljs.core.Keyword(null,"else","else",1017020587)?cljs.core.seq_reduce.call(null,a,b):null},c=function(a,b,c){return c&&
(c.cljs$lang$protocol_mask$partition0$&524288||c.cljs$core$IReduce$)?cljs.core._reduce.call(null,c,a,b):c instanceof Array?cljs.core.array_reduce.call(null,c,a,b):"string"===typeof c?cljs.core.array_reduce.call(null,c,a,b):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IReduce,c)?cljs.core._reduce.call(null,c,a,b):new cljs.core.Keyword(null,"else","else",1017020587)?cljs.core.seq_reduce.call(null,a,b,c):null},a=function(a,e,f){switch(arguments.length){case 2:return b.call(this,a,e);case 3:return c.call(this,
a,e,f)}throw Error("Invalid arity: "+arguments.length);};a.cljs$core$IFn$_invoke$arity$2=b;a.cljs$core$IFn$_invoke$arity$3=c;return a}();cljs.core.reduce_kv=function(a,b,c){return null!=c?cljs.core._kv_reduce.call(null,c,a,b):b};
cljs.core._PLUS_=function(){var a=null,b=function(){var b=function(b,c,d){return cljs.core.reduce.call(null,a,b+c,d)},d=function(a,d,g){var h=null;2<arguments.length&&(h=cljs.core.array_seq(Array.prototype.slice.call(arguments,2),0));return b.call(this,a,d,h)};d.cljs$lang$maxFixedArity=2;d.cljs$lang$applyTo=function(a){var d=cljs.core.first(a);a=cljs.core.next(a);var g=cljs.core.first(a);a=cljs.core.rest(a);return b(d,g,a)};d.cljs$core$IFn$_invoke$arity$variadic=b;return d}(),a=function(a,d,e){switch(arguments.length){case 0:return 0;
case 1:return a;case 2:return a+d;default:return b.cljs$core$IFn$_invoke$arity$variadic(a,d,cljs.core.array_seq(arguments,2))}throw Error("Invalid arity: "+arguments.length);};a.cljs$lang$maxFixedArity=2;a.cljs$lang$applyTo=b.cljs$lang$applyTo;a.cljs$core$IFn$_invoke$arity$0=function(){return 0};a.cljs$core$IFn$_invoke$arity$1=function(a){return a};a.cljs$core$IFn$_invoke$arity$2=function(a,b){return a+b};a.cljs$core$IFn$_invoke$arity$variadic=b.cljs$core$IFn$_invoke$arity$variadic;return a}();
cljs.core._=function(){var a=null,b=function(){var b=function(b,c,d){return cljs.core.reduce.call(null,a,b-c,d)},d=function(a,d,g){var h=null;2<arguments.length&&(h=cljs.core.array_seq(Array.prototype.slice.call(arguments,2),0));return b.call(this,a,d,h)};d.cljs$lang$maxFixedArity=2;d.cljs$lang$applyTo=function(a){var d=cljs.core.first(a);a=cljs.core.next(a);var g=cljs.core.first(a);a=cljs.core.rest(a);return b(d,g,a)};d.cljs$core$IFn$_invoke$arity$variadic=b;return d}(),a=function(a,d,e){switch(arguments.length){case 1:return-a;
case 2:return a-d;default:return b.cljs$core$IFn$_invoke$arity$variadic(a,d,cljs.core.array_seq(arguments,2))}throw Error("Invalid arity: "+arguments.length);};a.cljs$lang$maxFixedArity=2;a.cljs$lang$applyTo=b.cljs$lang$applyTo;a.cljs$core$IFn$_invoke$arity$1=function(a){return-a};a.cljs$core$IFn$_invoke$arity$2=function(a,b){return a-b};a.cljs$core$IFn$_invoke$arity$variadic=b.cljs$core$IFn$_invoke$arity$variadic;return a}();
cljs.core._STAR_=function(){var a=null,b=function(){var b=function(b,c,d){return cljs.core.reduce.call(null,a,b*c,d)},d=function(a,d,g){var h=null;2<arguments.length&&(h=cljs.core.array_seq(Array.prototype.slice.call(arguments,2),0));return b.call(this,a,d,h)};d.cljs$lang$maxFixedArity=2;d.cljs$lang$applyTo=function(a){var d=cljs.core.first(a);a=cljs.core.next(a);var g=cljs.core.first(a);a=cljs.core.rest(a);return b(d,g,a)};d.cljs$core$IFn$_invoke$arity$variadic=b;return d}(),a=function(a,d,e){switch(arguments.length){case 0:return 1;
case 1:return a;case 2:return a*d;default:return b.cljs$core$IFn$_invoke$arity$variadic(a,d,cljs.core.array_seq(arguments,2))}throw Error("Invalid arity: "+arguments.length);};a.cljs$lang$maxFixedArity=2;a.cljs$lang$applyTo=b.cljs$lang$applyTo;a.cljs$core$IFn$_invoke$arity$0=function(){return 1};a.cljs$core$IFn$_invoke$arity$1=function(a){return a};a.cljs$core$IFn$_invoke$arity$2=function(a,b){return a*b};a.cljs$core$IFn$_invoke$arity$variadic=b.cljs$core$IFn$_invoke$arity$variadic;return a}();
cljs.core._SLASH_=function(){var a=null,b=function(b){return a.call(null,1,b)},c=function(){var b=function(b,c,d){return cljs.core.reduce.call(null,a,a.call(null,b,c),d)},c=function(a,c,e){var k=null;2<arguments.length&&(k=cljs.core.array_seq(Array.prototype.slice.call(arguments,2),0));return b.call(this,a,c,k)};c.cljs$lang$maxFixedArity=2;c.cljs$lang$applyTo=function(a){var c=cljs.core.first(a);a=cljs.core.next(a);var e=cljs.core.first(a);a=cljs.core.rest(a);return b(c,e,a)};c.cljs$core$IFn$_invoke$arity$variadic=
b;return c}(),a=function(a,e,f){switch(arguments.length){case 1:return b.call(this,a);case 2:return a/e;default:return c.cljs$core$IFn$_invoke$arity$variadic(a,e,cljs.core.array_seq(arguments,2))}throw Error("Invalid arity: "+arguments.length);};a.cljs$lang$maxFixedArity=2;a.cljs$lang$applyTo=c.cljs$lang$applyTo;a.cljs$core$IFn$_invoke$arity$1=b;a.cljs$core$IFn$_invoke$arity$2=function(a,b){return a/b};a.cljs$core$IFn$_invoke$arity$variadic=c.cljs$core$IFn$_invoke$arity$variadic;return a}();
cljs.core._LT_=function(){var a=null,b=function(){var a=function(a,b,c){for(;;)if(a<b)if(cljs.core.next.call(null,c))a=b,b=cljs.core.first.call(null,c),c=cljs.core.next.call(null,c);else return b<cljs.core.first.call(null,c);else return!1},b=function(b,d,g){var h=null;2<arguments.length&&(h=cljs.core.array_seq(Array.prototype.slice.call(arguments,2),0));return a.call(this,b,d,h)};b.cljs$lang$maxFixedArity=2;b.cljs$lang$applyTo=function(b){var d=cljs.core.first(b);b=cljs.core.next(b);var g=cljs.core.first(b);
b=cljs.core.rest(b);return a(d,g,b)};b.cljs$core$IFn$_invoke$arity$variadic=a;return b}(),a=function(a,d,e){switch(arguments.length){case 1:return!0;case 2:return a<d;default:return b.cljs$core$IFn$_invoke$arity$variadic(a,d,cljs.core.array_seq(arguments,2))}throw Error("Invalid arity: "+arguments.length);};a.cljs$lang$maxFixedArity=2;a.cljs$lang$applyTo=b.cljs$lang$applyTo;a.cljs$core$IFn$_invoke$arity$1=function(a){return!0};a.cljs$core$IFn$_invoke$arity$2=function(a,b){return a<b};a.cljs$core$IFn$_invoke$arity$variadic=
b.cljs$core$IFn$_invoke$arity$variadic;return a}();
cljs.core._LT__EQ_=function(){var a=null,b=function(){var a=function(a,b,c){for(;;)if(a<=b)if(cljs.core.next.call(null,c))a=b,b=cljs.core.first.call(null,c),c=cljs.core.next.call(null,c);else return b<=cljs.core.first.call(null,c);else return!1},b=function(b,d,g){var h=null;2<arguments.length&&(h=cljs.core.array_seq(Array.prototype.slice.call(arguments,2),0));return a.call(this,b,d,h)};b.cljs$lang$maxFixedArity=2;b.cljs$lang$applyTo=function(b){var d=cljs.core.first(b);b=cljs.core.next(b);var g=cljs.core.first(b);
b=cljs.core.rest(b);return a(d,g,b)};b.cljs$core$IFn$_invoke$arity$variadic=a;return b}(),a=function(a,d,e){switch(arguments.length){case 1:return!0;case 2:return a<=d;default:return b.cljs$core$IFn$_invoke$arity$variadic(a,d,cljs.core.array_seq(arguments,2))}throw Error("Invalid arity: "+arguments.length);};a.cljs$lang$maxFixedArity=2;a.cljs$lang$applyTo=b.cljs$lang$applyTo;a.cljs$core$IFn$_invoke$arity$1=function(a){return!0};a.cljs$core$IFn$_invoke$arity$2=function(a,b){return a<=b};a.cljs$core$IFn$_invoke$arity$variadic=
b.cljs$core$IFn$_invoke$arity$variadic;return a}();
cljs.core._GT_=function(){var a=null,b=function(){var a=function(a,b,c){for(;;)if(a>b)if(cljs.core.next.call(null,c))a=b,b=cljs.core.first.call(null,c),c=cljs.core.next.call(null,c);else return b>cljs.core.first.call(null,c);else return!1},b=function(b,d,g){var h=null;2<arguments.length&&(h=cljs.core.array_seq(Array.prototype.slice.call(arguments,2),0));return a.call(this,b,d,h)};b.cljs$lang$maxFixedArity=2;b.cljs$lang$applyTo=function(b){var d=cljs.core.first(b);b=cljs.core.next(b);var g=cljs.core.first(b);
b=cljs.core.rest(b);return a(d,g,b)};b.cljs$core$IFn$_invoke$arity$variadic=a;return b}(),a=function(a,d,e){switch(arguments.length){case 1:return!0;case 2:return a>d;default:return b.cljs$core$IFn$_invoke$arity$variadic(a,d,cljs.core.array_seq(arguments,2))}throw Error("Invalid arity: "+arguments.length);};a.cljs$lang$maxFixedArity=2;a.cljs$lang$applyTo=b.cljs$lang$applyTo;a.cljs$core$IFn$_invoke$arity$1=function(a){return!0};a.cljs$core$IFn$_invoke$arity$2=function(a,b){return a>b};a.cljs$core$IFn$_invoke$arity$variadic=
b.cljs$core$IFn$_invoke$arity$variadic;return a}();
cljs.core._GT__EQ_=function(){var a=null,b=function(){var a=function(a,b,c){for(;;)if(a>=b)if(cljs.core.next.call(null,c))a=b,b=cljs.core.first.call(null,c),c=cljs.core.next.call(null,c);else return b>=cljs.core.first.call(null,c);else return!1},b=function(b,d,g){var h=null;2<arguments.length&&(h=cljs.core.array_seq(Array.prototype.slice.call(arguments,2),0));return a.call(this,b,d,h)};b.cljs$lang$maxFixedArity=2;b.cljs$lang$applyTo=function(b){var d=cljs.core.first(b);b=cljs.core.next(b);var g=cljs.core.first(b);
b=cljs.core.rest(b);return a(d,g,b)};b.cljs$core$IFn$_invoke$arity$variadic=a;return b}(),a=function(a,d,e){switch(arguments.length){case 1:return!0;case 2:return a>=d;default:return b.cljs$core$IFn$_invoke$arity$variadic(a,d,cljs.core.array_seq(arguments,2))}throw Error("Invalid arity: "+arguments.length);};a.cljs$lang$maxFixedArity=2;a.cljs$lang$applyTo=b.cljs$lang$applyTo;a.cljs$core$IFn$_invoke$arity$1=function(a){return!0};a.cljs$core$IFn$_invoke$arity$2=function(a,b){return a>=b};a.cljs$core$IFn$_invoke$arity$variadic=
b.cljs$core$IFn$_invoke$arity$variadic;return a}();cljs.core.dec=function(a){return a-1};
cljs.core.max=function(){var a=null,b=function(a,b){return a>b?a:b},c=function(){var b=function(b,c,d){return cljs.core.reduce.call(null,a,b>c?b:c,d)},c=function(a,c,e){var k=null;2<arguments.length&&(k=cljs.core.array_seq(Array.prototype.slice.call(arguments,2),0));return b.call(this,a,c,k)};c.cljs$lang$maxFixedArity=2;c.cljs$lang$applyTo=function(a){var c=cljs.core.first(a);a=cljs.core.next(a);var e=cljs.core.first(a);a=cljs.core.rest(a);return b(c,e,a)};c.cljs$core$IFn$_invoke$arity$variadic=b;
return c}(),a=function(a,e,f){switch(arguments.length){case 1:return a;case 2:return b.call(this,a,e);default:return c.cljs$core$IFn$_invoke$arity$variadic(a,e,cljs.core.array_seq(arguments,2))}throw Error("Invalid arity: "+arguments.length);};a.cljs$lang$maxFixedArity=2;a.cljs$lang$applyTo=c.cljs$lang$applyTo;a.cljs$core$IFn$_invoke$arity$1=function(a){return a};a.cljs$core$IFn$_invoke$arity$2=b;a.cljs$core$IFn$_invoke$arity$variadic=c.cljs$core$IFn$_invoke$arity$variadic;return a}();
cljs.core.min=function(){var a=null,b=function(a,b){return a<b?a:b},c=function(){var b=function(b,c,d){return cljs.core.reduce.call(null,a,b<c?b:c,d)},c=function(a,c,e){var k=null;2<arguments.length&&(k=cljs.core.array_seq(Array.prototype.slice.call(arguments,2),0));return b.call(this,a,c,k)};c.cljs$lang$maxFixedArity=2;c.cljs$lang$applyTo=function(a){var c=cljs.core.first(a);a=cljs.core.next(a);var e=cljs.core.first(a);a=cljs.core.rest(a);return b(c,e,a)};c.cljs$core$IFn$_invoke$arity$variadic=b;
return c}(),a=function(a,e,f){switch(arguments.length){case 1:return a;case 2:return b.call(this,a,e);default:return c.cljs$core$IFn$_invoke$arity$variadic(a,e,cljs.core.array_seq(arguments,2))}throw Error("Invalid arity: "+arguments.length);};a.cljs$lang$maxFixedArity=2;a.cljs$lang$applyTo=c.cljs$lang$applyTo;a.cljs$core$IFn$_invoke$arity$1=function(a){return a};a.cljs$core$IFn$_invoke$arity$2=b;a.cljs$core$IFn$_invoke$arity$variadic=c.cljs$core$IFn$_invoke$arity$variadic;return a}();
cljs.core.byte$=function(a){return a};cljs.core.char$=function(a){if("number"===typeof a)return String.fromCharCode(a);if("string"===typeof a&&1===a.length)return a;if(new cljs.core.Keyword(null,"else","else",1017020587))throw Error("Argument to char must be a character or number");return null};cljs.core.short$=function(a){return a};cljs.core.float$=function(a){return a};cljs.core.double$=function(a){return a};cljs.core.unchecked_byte=function(a){return a};cljs.core.unchecked_char=function(a){return a};
cljs.core.unchecked_short=function(a){return a};cljs.core.unchecked_float=function(a){return a};cljs.core.unchecked_double=function(a){return a};
cljs.core.unchecked_add=function(){var a=null,b=function(){var b=function(b,c,d){return cljs.core.reduce.call(null,a,b+c,d)},d=function(a,d,g){var h=null;2<arguments.length&&(h=cljs.core.array_seq(Array.prototype.slice.call(arguments,2),0));return b.call(this,a,d,h)};d.cljs$lang$maxFixedArity=2;d.cljs$lang$applyTo=function(a){var d=cljs.core.first(a);a=cljs.core.next(a);var g=cljs.core.first(a);a=cljs.core.rest(a);return b(d,g,a)};d.cljs$core$IFn$_invoke$arity$variadic=b;return d}(),a=function(a,
d,e){switch(arguments.length){case 0:return 0;case 1:return a;case 2:return a+d;default:return b.cljs$core$IFn$_invoke$arity$variadic(a,d,cljs.core.array_seq(arguments,2))}throw Error("Invalid arity: "+arguments.length);};a.cljs$lang$maxFixedArity=2;a.cljs$lang$applyTo=b.cljs$lang$applyTo;a.cljs$core$IFn$_invoke$arity$0=function(){return 0};a.cljs$core$IFn$_invoke$arity$1=function(a){return a};a.cljs$core$IFn$_invoke$arity$2=function(a,b){return a+b};a.cljs$core$IFn$_invoke$arity$variadic=b.cljs$core$IFn$_invoke$arity$variadic;
return a}();
cljs.core.unchecked_add_int=function(){var a=null,b=function(){var b=function(b,c,d){return cljs.core.reduce.call(null,a,b+c,d)},d=function(a,d,g){var h=null;2<arguments.length&&(h=cljs.core.array_seq(Array.prototype.slice.call(arguments,2),0));return b.call(this,a,d,h)};d.cljs$lang$maxFixedArity=2;d.cljs$lang$applyTo=function(a){var d=cljs.core.first(a);a=cljs.core.next(a);var g=cljs.core.first(a);a=cljs.core.rest(a);return b(d,g,a)};d.cljs$core$IFn$_invoke$arity$variadic=b;return d}(),a=function(a,
d,e){switch(arguments.length){case 0:return 0;case 1:return a;case 2:return a+d;default:return b.cljs$core$IFn$_invoke$arity$variadic(a,d,cljs.core.array_seq(arguments,2))}throw Error("Invalid arity: "+arguments.length);};a.cljs$lang$maxFixedArity=2;a.cljs$lang$applyTo=b.cljs$lang$applyTo;a.cljs$core$IFn$_invoke$arity$0=function(){return 0};a.cljs$core$IFn$_invoke$arity$1=function(a){return a};a.cljs$core$IFn$_invoke$arity$2=function(a,b){return a+b};a.cljs$core$IFn$_invoke$arity$variadic=b.cljs$core$IFn$_invoke$arity$variadic;
return a}();cljs.core.unchecked_dec=function(a){return a-1};cljs.core.unchecked_dec_int=function(a){return a-1};
cljs.core.unchecked_divide_int=function(){var a=null,b=function(b){return a.call(null,1,b)},c=function(){var b=function(b,c,d){return cljs.core.reduce.call(null,a,a.call(null,b,c),d)},c=function(a,c,e){var k=null;2<arguments.length&&(k=cljs.core.array_seq(Array.prototype.slice.call(arguments,2),0));return b.call(this,a,c,k)};c.cljs$lang$maxFixedArity=2;c.cljs$lang$applyTo=function(a){var c=cljs.core.first(a);a=cljs.core.next(a);var e=cljs.core.first(a);a=cljs.core.rest(a);return b(c,e,a)};c.cljs$core$IFn$_invoke$arity$variadic=
b;return c}(),a=function(a,e,f){switch(arguments.length){case 1:return b.call(this,a);case 2:return a/e;default:return c.cljs$core$IFn$_invoke$arity$variadic(a,e,cljs.core.array_seq(arguments,2))}throw Error("Invalid arity: "+arguments.length);};a.cljs$lang$maxFixedArity=2;a.cljs$lang$applyTo=c.cljs$lang$applyTo;a.cljs$core$IFn$_invoke$arity$1=b;a.cljs$core$IFn$_invoke$arity$2=function(a,b){return a/b};a.cljs$core$IFn$_invoke$arity$variadic=c.cljs$core$IFn$_invoke$arity$variadic;return a}();
cljs.core.unchecked_inc=function(a){return a+1};cljs.core.unchecked_inc_int=function(a){return a+1};
cljs.core.unchecked_multiply=function(){var a=null,b=function(){var b=function(b,c,d){return cljs.core.reduce.call(null,a,b*c,d)},d=function(a,d,g){var h=null;2<arguments.length&&(h=cljs.core.array_seq(Array.prototype.slice.call(arguments,2),0));return b.call(this,a,d,h)};d.cljs$lang$maxFixedArity=2;d.cljs$lang$applyTo=function(a){var d=cljs.core.first(a);a=cljs.core.next(a);var g=cljs.core.first(a);a=cljs.core.rest(a);return b(d,g,a)};d.cljs$core$IFn$_invoke$arity$variadic=b;return d}(),a=function(a,
d,e){switch(arguments.length){case 0:return 1;case 1:return a;case 2:return a*d;default:return b.cljs$core$IFn$_invoke$arity$variadic(a,d,cljs.core.array_seq(arguments,2))}throw Error("Invalid arity: "+arguments.length);};a.cljs$lang$maxFixedArity=2;a.cljs$lang$applyTo=b.cljs$lang$applyTo;a.cljs$core$IFn$_invoke$arity$0=function(){return 1};a.cljs$core$IFn$_invoke$arity$1=function(a){return a};a.cljs$core$IFn$_invoke$arity$2=function(a,b){return a*b};a.cljs$core$IFn$_invoke$arity$variadic=b.cljs$core$IFn$_invoke$arity$variadic;
return a}();
cljs.core.unchecked_multiply_int=function(){var a=null,b=function(){var b=function(b,c,d){return cljs.core.reduce.call(null,a,b*c,d)},d=function(a,d,g){var h=null;2<arguments.length&&(h=cljs.core.array_seq(Array.prototype.slice.call(arguments,2),0));return b.call(this,a,d,h)};d.cljs$lang$maxFixedArity=2;d.cljs$lang$applyTo=function(a){var d=cljs.core.first(a);a=cljs.core.next(a);var g=cljs.core.first(a);a=cljs.core.rest(a);return b(d,g,a)};d.cljs$core$IFn$_invoke$arity$variadic=b;return d}(),a=function(a,
d,e){switch(arguments.length){case 0:return 1;case 1:return a;case 2:return a*d;default:return b.cljs$core$IFn$_invoke$arity$variadic(a,d,cljs.core.array_seq(arguments,2))}throw Error("Invalid arity: "+arguments.length);};a.cljs$lang$maxFixedArity=2;a.cljs$lang$applyTo=b.cljs$lang$applyTo;a.cljs$core$IFn$_invoke$arity$0=function(){return 1};a.cljs$core$IFn$_invoke$arity$1=function(a){return a};a.cljs$core$IFn$_invoke$arity$2=function(a,b){return a*b};a.cljs$core$IFn$_invoke$arity$variadic=b.cljs$core$IFn$_invoke$arity$variadic;
return a}();cljs.core.unchecked_negate=function(a){return-a};cljs.core.unchecked_negate_int=function(a){return-a};cljs.core.unchecked_remainder_int=function(a,b){return cljs.core.mod.call(null,a,b)};
cljs.core.unchecked_substract=function(){var a=null,b=function(){var b=function(b,c,d){return cljs.core.reduce.call(null,a,b-c,d)},d=function(a,d,g){var h=null;2<arguments.length&&(h=cljs.core.array_seq(Array.prototype.slice.call(arguments,2),0));return b.call(this,a,d,h)};d.cljs$lang$maxFixedArity=2;d.cljs$lang$applyTo=function(a){var d=cljs.core.first(a);a=cljs.core.next(a);var g=cljs.core.first(a);a=cljs.core.rest(a);return b(d,g,a)};d.cljs$core$IFn$_invoke$arity$variadic=b;return d}(),a=function(a,
d,e){switch(arguments.length){case 1:return-a;case 2:return a-d;default:return b.cljs$core$IFn$_invoke$arity$variadic(a,d,cljs.core.array_seq(arguments,2))}throw Error("Invalid arity: "+arguments.length);};a.cljs$lang$maxFixedArity=2;a.cljs$lang$applyTo=b.cljs$lang$applyTo;a.cljs$core$IFn$_invoke$arity$1=function(a){return-a};a.cljs$core$IFn$_invoke$arity$2=function(a,b){return a-b};a.cljs$core$IFn$_invoke$arity$variadic=b.cljs$core$IFn$_invoke$arity$variadic;return a}();
cljs.core.unchecked_substract_int=function(){var a=null,b=function(){var b=function(b,c,d){return cljs.core.reduce.call(null,a,b-c,d)},d=function(a,d,g){var h=null;2<arguments.length&&(h=cljs.core.array_seq(Array.prototype.slice.call(arguments,2),0));return b.call(this,a,d,h)};d.cljs$lang$maxFixedArity=2;d.cljs$lang$applyTo=function(a){var d=cljs.core.first(a);a=cljs.core.next(a);var g=cljs.core.first(a);a=cljs.core.rest(a);return b(d,g,a)};d.cljs$core$IFn$_invoke$arity$variadic=b;return d}(),a=function(a,
d,e){switch(arguments.length){case 1:return-a;case 2:return a-d;default:return b.cljs$core$IFn$_invoke$arity$variadic(a,d,cljs.core.array_seq(arguments,2))}throw Error("Invalid arity: "+arguments.length);};a.cljs$lang$maxFixedArity=2;a.cljs$lang$applyTo=b.cljs$lang$applyTo;a.cljs$core$IFn$_invoke$arity$1=function(a){return-a};a.cljs$core$IFn$_invoke$arity$2=function(a,b){return a-b};a.cljs$core$IFn$_invoke$arity$variadic=b.cljs$core$IFn$_invoke$arity$variadic;return a}();
cljs.core.fix=function(a){return 0<=a?Math.floor.call(null,a):Math.ceil.call(null,a)};cljs.core.int$=function(a){return a|0};cljs.core.unchecked_int=function(a){return cljs.core.fix.call(null,a)};cljs.core.long$=function(a){return cljs.core.fix.call(null,a)};cljs.core.unchecked_long=function(a){return cljs.core.fix.call(null,a)};cljs.core.booleans=function(a){return a};cljs.core.bytes=function(a){return a};cljs.core.chars=function(a){return a};cljs.core.shorts=function(a){return a};
cljs.core.ints=function(a){return a};cljs.core.floats=function(a){return a};cljs.core.doubles=function(a){return a};cljs.core.longs=function(a){return a};cljs.core.js_mod=function(a,b){return a%b};cljs.core.mod=function(a,b){return(a%b+b)%b};cljs.core.quot=function(a,b){return cljs.core.fix.call(null,(a-a%b)/b)};cljs.core.rem=function(a,b){var c=cljs.core.quot.call(null,a,b);return a-b*c};
cljs.core.rand=function(){var a=null,b=function(){return Math.random.call(null)},c=function(b){return b*a.call(null)},a=function(a){switch(arguments.length){case 0:return b.call(this);case 1:return c.call(this,a)}throw Error("Invalid arity: "+arguments.length);};a.cljs$core$IFn$_invoke$arity$0=b;a.cljs$core$IFn$_invoke$arity$1=c;return a}();cljs.core.rand_int=function(a){return cljs.core.fix.call(null,cljs.core.rand.call(null,a))};cljs.core.bit_xor=function(a,b){return a^b};
cljs.core.bit_and=function(a,b){return a&b};cljs.core.bit_or=function(a,b){return a|b};cljs.core.bit_and_not=function(a,b){return a&~b};cljs.core.bit_clear=function(a,b){return a&~(1<<b)};cljs.core.bit_flip=function(a,b){return a^1<<b};cljs.core.bit_not=function(a){return~a};cljs.core.bit_set=function(a,b){return a|1<<b};cljs.core.bit_test=function(a,b){return 0!=(a&1<<b)};cljs.core.bit_shift_left=function(a,b){return a<<b};cljs.core.bit_shift_right=function(a,b){return a>>b};
cljs.core.bit_shift_right_zero_fill=function(a,b){return a>>>b};cljs.core.unsigned_bit_shift_right=function(a,b){return a>>>b};cljs.core.bit_count=function(a){a-=a>>1&1431655765;a=(a&858993459)+(a>>2&858993459);return 16843009*(a+(a>>4)&252645135)>>24};
cljs.core._EQ__EQ_=function(){var a=null,b=function(a,b){return cljs.core._equiv.call(null,a,b)},c=function(){var b=function(b,c,d){for(;;)if(a.call(null,b,c))if(cljs.core.next.call(null,d))b=c,c=cljs.core.first.call(null,d),d=cljs.core.next.call(null,d);else return a.call(null,c,cljs.core.first.call(null,d));else return!1},c=function(a,c,e){var k=null;2<arguments.length&&(k=cljs.core.array_seq(Array.prototype.slice.call(arguments,2),0));return b.call(this,a,c,k)};c.cljs$lang$maxFixedArity=2;c.cljs$lang$applyTo=
function(a){var c=cljs.core.first(a);a=cljs.core.next(a);var e=cljs.core.first(a);a=cljs.core.rest(a);return b(c,e,a)};c.cljs$core$IFn$_invoke$arity$variadic=b;return c}(),a=function(a,e,f){switch(arguments.length){case 1:return!0;case 2:return b.call(this,a,e);default:return c.cljs$core$IFn$_invoke$arity$variadic(a,e,cljs.core.array_seq(arguments,2))}throw Error("Invalid arity: "+arguments.length);};a.cljs$lang$maxFixedArity=2;a.cljs$lang$applyTo=c.cljs$lang$applyTo;a.cljs$core$IFn$_invoke$arity$1=
function(a){return!0};a.cljs$core$IFn$_invoke$arity$2=b;a.cljs$core$IFn$_invoke$arity$variadic=c.cljs$core$IFn$_invoke$arity$variadic;return a}();cljs.core.pos_QMARK_=function(a){return 0<a};cljs.core.zero_QMARK_=function(a){return 0===a};cljs.core.neg_QMARK_=function(a){return 0>a};cljs.core.nthnext=function(a,b){for(var c=b,d=cljs.core.seq.call(null,a);;)if(d&&0<c)c-=1,d=cljs.core.next.call(null,d);else return d};
cljs.core.str=function(){var a=null,b=function(a){return null==a?"":a.toString()},c=function(){var b=function(b,c){for(var d=new goog.string.StringBuffer(a.call(null,b)),e=c;;)if(cljs.core.truth_(e))d=d.append(a.call(null,cljs.core.first.call(null,e))),e=cljs.core.next.call(null,e);else return d.toString()},c=function(a,c){var e=null;1<arguments.length&&(e=cljs.core.array_seq(Array.prototype.slice.call(arguments,1),0));return b.call(this,a,e)};c.cljs$lang$maxFixedArity=1;c.cljs$lang$applyTo=function(a){var c=
cljs.core.first(a);a=cljs.core.rest(a);return b(c,a)};c.cljs$core$IFn$_invoke$arity$variadic=b;return c}(),a=function(a,e){switch(arguments.length){case 0:return"";case 1:return b.call(this,a);default:return c.cljs$core$IFn$_invoke$arity$variadic(a,cljs.core.array_seq(arguments,1))}throw Error("Invalid arity: "+arguments.length);};a.cljs$lang$maxFixedArity=1;a.cljs$lang$applyTo=c.cljs$lang$applyTo;a.cljs$core$IFn$_invoke$arity$0=function(){return""};a.cljs$core$IFn$_invoke$arity$1=b;a.cljs$core$IFn$_invoke$arity$variadic=
c.cljs$core$IFn$_invoke$arity$variadic;return a}();cljs.core.subs=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return a.substring(c);case 3:return a.substring(c,d)}throw Error("Invalid arity: "+arguments.length);};a.cljs$core$IFn$_invoke$arity$2=function(a,c){return a.substring(c)};a.cljs$core$IFn$_invoke$arity$3=function(a,c,d){return a.substring(c,d)};return a}();
cljs.core.equiv_sequential=function(a,b){return cljs.core.boolean$.call(null,cljs.core.sequential_QMARK_.call(null,b)?function(){for(var c=cljs.core.seq.call(null,a),d=cljs.core.seq.call(null,b);;){if(null==c)return null==d;if(null==d)return!1;if(cljs.core._EQ_.call(null,cljs.core.first.call(null,c),cljs.core.first.call(null,d)))c=cljs.core.next.call(null,c),d=cljs.core.next.call(null,d);else return new cljs.core.Keyword(null,"else","else",1017020587)?!1:null}}():null)};
cljs.core.hash_combine=function(a,b){return a^b+2654435769+(a<<6)+(a>>2)};cljs.core.hash_coll=function(a){if(cljs.core.seq.call(null,a)){var b=cljs.core.hash.call(null,cljs.core.first.call(null,a));for(a=cljs.core.next.call(null,a);;){if(null==a)return b;b=cljs.core.hash_combine.call(null,b,cljs.core.hash.call(null,cljs.core.first.call(null,a)));a=cljs.core.next.call(null,a)}}else return 0};
cljs.core.hash_imap=function(a){var b=0;for(a=cljs.core.seq.call(null,a);;)if(a){var c=cljs.core.first.call(null,a),b=(b+(cljs.core.hash.call(null,cljs.core.key.call(null,c))^cljs.core.hash.call(null,cljs.core.val.call(null,c))))%4503599627370496;a=cljs.core.next.call(null,a)}else return b};cljs.core.hash_iset=function(a){var b=0;for(a=cljs.core.seq.call(null,a);;)if(a){var c=cljs.core.first.call(null,a),b=(b+cljs.core.hash.call(null,c))%4503599627370496;a=cljs.core.next.call(null,a)}else return b};
cljs.core.extend_object_BANG_=function(a,b){for(var c=cljs.core.seq.call(null,b),d=null,e=0,f=0;;)if(f<e){var g=cljs.core._nth.call(null,d,f),h=cljs.core.nth.call(null,g,0,null),g=cljs.core.nth.call(null,g,1,null),h=cljs.core.name.call(null,h);a[h]=g;f+=1}else if(c=cljs.core.seq.call(null,c))cljs.core.chunked_seq_QMARK_.call(null,c)?(e=cljs.core.chunk_first.call(null,c),c=cljs.core.chunk_rest.call(null,c),d=e,e=cljs.core.count.call(null,e)):(e=cljs.core.first.call(null,c),d=cljs.core.nth.call(null,
e,0,null),e=cljs.core.nth.call(null,e,1,null),d=cljs.core.name.call(null,d),a[d]=e,c=cljs.core.next.call(null,c),d=null,e=0),f=0;else break;return a};cljs.core.List=function(a,b,c,d,e){this.meta=a;this.first=b;this.rest=c;this.count=d;this.__hash=e;this.cljs$lang$protocol_mask$partition0$=65937646;this.cljs$lang$protocol_mask$partition1$=8192};cljs.core.List.cljs$lang$type=!0;cljs.core.List.cljs$lang$ctorStr="cljs.core/List";
cljs.core.List.cljs$lang$ctorPrWriter=function(a,b,c){return cljs.core._write.call(null,b,"cljs.core/List")};cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1=function(a){a=this.__hash;return null!=a?a:this.__hash=a=cljs.core.hash_coll.call(null,this)};cljs.core.List.prototype.cljs$core$INext$_next$arity$1=function(a){return 1===this.count?null:this.rest};cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2=function(a,b){return new cljs.core.List(this.meta,b,this,this.count+1,null)};
cljs.core.List.prototype.toString=function(){return cljs.core.pr_str_STAR_.call(null,this)};cljs.core.List.prototype.cljs$core$IReduce$_reduce$arity$2=function(a,b){return cljs.core.seq_reduce.call(null,b,this)};cljs.core.List.prototype.cljs$core$IReduce$_reduce$arity$3=function(a,b,c){return cljs.core.seq_reduce.call(null,b,c,this)};cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1=function(a){return this};cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1=function(a){return this.count};
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1=function(a){return this.first};cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1=function(a){return cljs.core._rest.call(null,this)};cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1=function(a){return this.first};cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1=function(a){return 1===this.count?cljs.core.List.EMPTY:this.rest};
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2=function(a,b){return cljs.core.equiv_sequential.call(null,this,b)};cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2=function(a,b){return new cljs.core.List(b,this.first,this.rest,this.count,this.__hash)};cljs.core.List.prototype.cljs$core$ICloneable$_clone$arity$1=function(a){return new cljs.core.List(this.meta,this.first,this.rest,this.count,this.__hash)};cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1=function(a){return this.meta};
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1=function(a){return cljs.core.List.EMPTY};cljs.core.__GT_List=function(a,b,c,d,e){return new cljs.core.List(a,b,c,d,e)};cljs.core.EmptyList=function(a){this.meta=a;this.cljs$lang$protocol_mask$partition0$=65937614;this.cljs$lang$protocol_mask$partition1$=8192};cljs.core.EmptyList.cljs$lang$type=!0;cljs.core.EmptyList.cljs$lang$ctorStr="cljs.core/EmptyList";
cljs.core.EmptyList.cljs$lang$ctorPrWriter=function(a,b,c){return cljs.core._write.call(null,b,"cljs.core/EmptyList")};cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1=function(a){return 0};cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1=function(a){return null};cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2=function(a,b){return new cljs.core.List(this.meta,b,null,1,null)};
cljs.core.EmptyList.prototype.toString=function(){return cljs.core.pr_str_STAR_.call(null,this)};cljs.core.EmptyList.prototype.cljs$core$IReduce$_reduce$arity$2=function(a,b){return cljs.core.seq_reduce.call(null,b,this)};cljs.core.EmptyList.prototype.cljs$core$IReduce$_reduce$arity$3=function(a,b,c){return cljs.core.seq_reduce.call(null,b,c,this)};cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1=function(a){return null};
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1=function(a){return 0};cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1=function(a){return null};cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1=function(a){throw Error("Can't pop empty list");};cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1=function(a){return null};cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1=function(a){return cljs.core.List.EMPTY};
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2=function(a,b){return cljs.core.equiv_sequential.call(null,this,b)};cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2=function(a,b){return new cljs.core.EmptyList(b)};cljs.core.EmptyList.prototype.cljs$core$ICloneable$_clone$arity$1=function(a){return new cljs.core.EmptyList(this.meta)};cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1=function(a){return this.meta};
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1=function(a){return this};cljs.core.__GT_EmptyList=function(a){return new cljs.core.EmptyList(a)};cljs.core.List.EMPTY=new cljs.core.EmptyList(null);
cljs.core.reversible_QMARK_=function(a){return a?a.cljs$lang$protocol_mask$partition0$&134217728||a.cljs$core$IReversible$?!0:a.cljs$lang$protocol_mask$partition0$?!1:cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IReversible,a):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IReversible,a)};cljs.core.rseq=function(a){return cljs.core._rseq.call(null,a)};
cljs.core.reverse=function(a){return cljs.core.reversible_QMARK_.call(null,a)?cljs.core.rseq.call(null,a):cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,a)};
cljs.core.list=function(){var a=function(a){var b;if(a instanceof cljs.core.IndexedSeq&&0===a.i)b=a.arr;else a:{for(b=[];;)if(null!=a)b.push(cljs.core._first.call(null,a)),a=cljs.core._next.call(null,a);else break a;b=void 0}a=b.length;for(var e=cljs.core.List.EMPTY;;)if(0<a){var f=a-1,e=cljs.core._conj.call(null,e,b[a-1]);a=f}else return e},b=function(b){var d=null;0<arguments.length&&(d=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0));return a.call(this,d)};b.cljs$lang$maxFixedArity=
0;b.cljs$lang$applyTo=function(b){b=cljs.core.seq(b);return a(b)};b.cljs$core$IFn$_invoke$arity$variadic=a;return b}();cljs.core.Cons=function(a,b,c,d){this.meta=a;this.first=b;this.rest=c;this.__hash=d;this.cljs$lang$protocol_mask$partition0$=65929452;this.cljs$lang$protocol_mask$partition1$=8192};cljs.core.Cons.cljs$lang$type=!0;cljs.core.Cons.cljs$lang$ctorStr="cljs.core/Cons";cljs.core.Cons.cljs$lang$ctorPrWriter=function(a,b,c){return cljs.core._write.call(null,b,"cljs.core/Cons")};
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1=function(a){a=this.__hash;return null!=a?a:this.__hash=a=cljs.core.hash_coll.call(null,this)};cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1=function(a){return null==this.rest?null:cljs.core.seq.call(null,this.rest)};cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2=function(a,b){return new cljs.core.Cons(null,b,this,this.__hash)};cljs.core.Cons.prototype.toString=function(){return cljs.core.pr_str_STAR_.call(null,this)};
cljs.core.Cons.prototype.cljs$core$IReduce$_reduce$arity$2=function(a,b){return cljs.core.seq_reduce.call(null,b,this)};cljs.core.Cons.prototype.cljs$core$IReduce$_reduce$arity$3=function(a,b,c){return cljs.core.seq_reduce.call(null,b,c,this)};cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1=function(a){return this};cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1=function(a){return this.first};
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1=function(a){return null==this.rest?cljs.core.List.EMPTY:this.rest};cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2=function(a,b){return cljs.core.equiv_sequential.call(null,this,b)};cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2=function(a,b){return new cljs.core.Cons(b,this.first,this.rest,this.__hash)};
cljs.core.Cons.prototype.cljs$core$ICloneable$_clone$arity$1=function(a){return new cljs.core.Cons(this.meta,this.first,this.rest,this.__hash)};cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1=function(a){return this.meta};cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1=function(a){return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this.meta)};cljs.core.__GT_Cons=function(a,b,c,d){return new cljs.core.Cons(a,b,c,d)};
cljs.core.cons=function(a,b){var c;c=(c=null==b)?c:b?b.cljs$lang$protocol_mask$partition0$&64||b.cljs$core$ISeq$?!0:!1:!1;return c?new cljs.core.Cons(null,a,b,null):new cljs.core.Cons(null,a,cljs.core.seq.call(null,b),null)};
cljs.core.list_QMARK_=function(a){return a?a.cljs$lang$protocol_mask$partition0$&33554432||a.cljs$core$IList$?!0:a.cljs$lang$protocol_mask$partition0$?!1:cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IList,a):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IList,a)};cljs.core.Keyword=function(a,b,c,d){this.ns=a;this.name=b;this.fqn=c;this._hash=d;this.cljs$lang$protocol_mask$partition0$=2153775105;this.cljs$lang$protocol_mask$partition1$=4096};cljs.core.Keyword.cljs$lang$type=!0;
cljs.core.Keyword.cljs$lang$ctorStr="cljs.core/Keyword";cljs.core.Keyword.cljs$lang$ctorPrWriter=function(a,b,c){return cljs.core._write.call(null,b,"cljs.core/Keyword")};cljs.core.Keyword.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3=function(a,b,c){return cljs.core._write.call(null,b,":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this.fqn))};cljs.core.Keyword.prototype.cljs$core$INamed$_name$arity$1=function(a){return this.name};
cljs.core.Keyword.prototype.cljs$core$INamed$_namespace$arity$1=function(a){return this.ns};cljs.core.Keyword.prototype.cljs$core$IHash$_hash$arity$1=function(a){null==this._hash&&(this._hash=cljs.core.hash_combine.call(null,cljs.core.hash.call(null,this.ns),cljs.core.hash.call(null,this.name))+2654435769);return this._hash};
cljs.core.Keyword.prototype.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return cljs.core.get.call(null,c,this);case 3:return cljs.core.get.call(null,c,this,d)}throw Error("Invalid arity: "+arguments.length);}}();cljs.core.Keyword.prototype.apply=function(a,b){return this.call.apply(this,[this].concat(cljs.core.aclone.call(null,b)))};cljs.core.Keyword.prototype.cljs$core$IFn$_invoke$arity$1=function(a){return cljs.core.get.call(null,a,this)};
cljs.core.Keyword.prototype.cljs$core$IFn$_invoke$arity$2=function(a,b){return cljs.core.get.call(null,a,this,b)};cljs.core.Keyword.prototype.cljs$core$IEquiv$_equiv$arity$2=function(a,b){return b instanceof cljs.core.Keyword?this.fqn===b.fqn:!1};cljs.core.Keyword.prototype.toString=function(){return":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this.fqn)};cljs.core.__GT_Keyword=function(a,b,c,d){return new cljs.core.Keyword(a,b,c,d)};cljs.core.keyword_QMARK_=function(a){return a instanceof cljs.core.Keyword};
cljs.core.keyword_identical_QMARK_=function(a,b){return a===b?!0:a instanceof cljs.core.Keyword&&b instanceof cljs.core.Keyword?a.fqn===b.fqn:!1};cljs.core.namespace=function(a){if(a&&(a.cljs$lang$protocol_mask$partition1$&4096||a.cljs$core$INamed$))return cljs.core._namespace.call(null,a);throw Error("Doesn't support namespace: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a));};
cljs.core.keyword=function(){var a=null,b=function(a){if(a instanceof cljs.core.Keyword)return a;if(a instanceof cljs.core.Symbol)return new cljs.core.Keyword(cljs.core.namespace.call(null,a),cljs.core.name.call(null,a),a.str,null);if("string"===typeof a){var b=a.split("/");return 2===b.length?new cljs.core.Keyword(b[0],b[1],a,null):new cljs.core.Keyword(null,b[0],a,null)}return null},c=function(a,b){return new cljs.core.Keyword(a,b,""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.truth_(a)?
""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)+"/":null)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b),null)},a=function(a,e){switch(arguments.length){case 1:return b.call(this,a);case 2:return c.call(this,a,e)}throw Error("Invalid arity: "+arguments.length);};a.cljs$core$IFn$_invoke$arity$1=b;a.cljs$core$IFn$_invoke$arity$2=c;return a}();
cljs.core.LazySeq=function(a,b,c,d){this.meta=a;this.fn=b;this.s=c;this.__hash=d;this.cljs$lang$protocol_mask$partition1$=0;this.cljs$lang$protocol_mask$partition0$=32374988};cljs.core.LazySeq.cljs$lang$type=!0;cljs.core.LazySeq.cljs$lang$ctorStr="cljs.core/LazySeq";cljs.core.LazySeq.cljs$lang$ctorPrWriter=function(a,b,c){return cljs.core._write.call(null,b,"cljs.core/LazySeq")};
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1=function(a){a=this.__hash;return null!=a?a:this.__hash=a=cljs.core.hash_coll.call(null,this)};cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1=function(a){cljs.core._seq.call(null,this);return null==this.s?null:cljs.core.next.call(null,this.s)};cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2=function(a,b){return cljs.core.cons.call(null,b,this)};
cljs.core.LazySeq.prototype.toString=function(){return cljs.core.pr_str_STAR_.call(null,this)};cljs.core.LazySeq.prototype.sval=function(){null!=this.fn&&(this.s=this.fn.call(null),this.fn=null);return this.s};cljs.core.LazySeq.prototype.cljs$core$IReduce$_reduce$arity$2=function(a,b){return cljs.core.seq_reduce.call(null,b,this)};cljs.core.LazySeq.prototype.cljs$core$IReduce$_reduce$arity$3=function(a,b,c){return cljs.core.seq_reduce.call(null,b,c,this)};
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1=function(a){this.sval();if(null==this.s)return null;for(a=this.s;;)if(a instanceof cljs.core.LazySeq)a=a.sval();else return this.s=a,cljs.core.seq.call(null,this.s)};cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1=function(a){cljs.core._seq.call(null,this);return null==this.s?null:cljs.core.first.call(null,this.s)};
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1=function(a){cljs.core._seq.call(null,this);return null!=this.s?cljs.core.rest.call(null,this.s):cljs.core.List.EMPTY};cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2=function(a,b){return cljs.core.equiv_sequential.call(null,this,b)};cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2=function(a,b){return new cljs.core.LazySeq(b,this.fn,this.s,this.__hash)};
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1=function(a){return this.meta};cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1=function(a){return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this.meta)};cljs.core.__GT_LazySeq=function(a,b,c,d){return new cljs.core.LazySeq(a,b,c,d)};cljs.core.ChunkBuffer=function(a,b){this.buf=a;this.end=b;this.cljs$lang$protocol_mask$partition1$=0;this.cljs$lang$protocol_mask$partition0$=2};
cljs.core.ChunkBuffer.cljs$lang$type=!0;cljs.core.ChunkBuffer.cljs$lang$ctorStr="cljs.core/ChunkBuffer";cljs.core.ChunkBuffer.cljs$lang$ctorPrWriter=function(a,b,c){return cljs.core._write.call(null,b,"cljs.core/ChunkBuffer")};cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1=function(a){return this.end};cljs.core.ChunkBuffer.prototype.add=function(a){this.buf[this.end]=a;return this.end+=1};
cljs.core.ChunkBuffer.prototype.chunk=function(a){a=new cljs.core.ArrayChunk(this.buf,0,this.end);this.buf=null;return a};cljs.core.__GT_ChunkBuffer=function(a,b){return new cljs.core.ChunkBuffer(a,b)};cljs.core.chunk_buffer=function(a){return new cljs.core.ChunkBuffer(Array(a),0)};cljs.core.ArrayChunk=function(a,b,c){this.arr=a;this.off=b;this.end=c;this.cljs$lang$protocol_mask$partition1$=0;this.cljs$lang$protocol_mask$partition0$=524306};cljs.core.ArrayChunk.cljs$lang$type=!0;
cljs.core.ArrayChunk.cljs$lang$ctorStr="cljs.core/ArrayChunk";cljs.core.ArrayChunk.cljs$lang$ctorPrWriter=function(a,b,c){return cljs.core._write.call(null,b,"cljs.core/ArrayChunk")};cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2=function(a,b){return cljs.core.array_reduce.call(null,this.arr,b,this.arr[this.off],this.off+1)};cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3=function(a,b,c){return cljs.core.array_reduce.call(null,this.arr,b,c,this.off)};
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$=!0;cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1=function(a){if(this.off===this.end)throw Error("-drop-first of empty chunk");return new cljs.core.ArrayChunk(this.arr,this.off+1,this.end)};cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2=function(a,b){return this.arr[this.off+b]};cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3=function(a,b,c){return 0<=b&&b<this.end-this.off?this.arr[this.off+b]:c};
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1=function(a){return this.end-this.off};cljs.core.__GT_ArrayChunk=function(a,b,c){return new cljs.core.ArrayChunk(a,b,c)};
cljs.core.array_chunk=function(){var a=null,b=function(a){return new cljs.core.ArrayChunk(a,0,a.length)},c=function(a,b){return new cljs.core.ArrayChunk(a,b,a.length)},d=function(a,b,c){return new cljs.core.ArrayChunk(a,b,c)},a=function(a,f,g){switch(arguments.length){case 1:return b.call(this,a);case 2:return c.call(this,a,f);case 3:return d.call(this,a,f,g)}throw Error("Invalid arity: "+arguments.length);};a.cljs$core$IFn$_invoke$arity$1=b;a.cljs$core$IFn$_invoke$arity$2=c;a.cljs$core$IFn$_invoke$arity$3=
d;return a}();cljs.core.ChunkedCons=function(a,b,c,d){this.chunk=a;this.more=b;this.meta=c;this.__hash=d;this.cljs$lang$protocol_mask$partition0$=31850732;this.cljs$lang$protocol_mask$partition1$=1536};cljs.core.ChunkedCons.cljs$lang$type=!0;cljs.core.ChunkedCons.cljs$lang$ctorStr="cljs.core/ChunkedCons";cljs.core.ChunkedCons.cljs$lang$ctorPrWriter=function(a,b,c){return cljs.core._write.call(null,b,"cljs.core/ChunkedCons")};
cljs.core.ChunkedCons.prototype.cljs$core$IHash$_hash$arity$1=function(a){a=this.__hash;return null!=a?a:this.__hash=a=cljs.core.hash_coll.call(null,this)};cljs.core.ChunkedCons.prototype.cljs$core$INext$_next$arity$1=function(a){if(1<cljs.core._count.call(null,this.chunk))return new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this.chunk),this.more,this.meta,null);a=cljs.core._seq.call(null,this.more);return null==a?null:a};
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2=function(a,b){return cljs.core.cons.call(null,b,this)};cljs.core.ChunkedCons.prototype.toString=function(){return cljs.core.pr_str_STAR_.call(null,this)};cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1=function(a){return this};cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1=function(a){return cljs.core._nth.call(null,this.chunk,0)};
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1=function(a){return 1<cljs.core._count.call(null,this.chunk)?new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this.chunk),this.more,this.meta,null):null==this.more?cljs.core.List.EMPTY:this.more};cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1=function(a){return null==this.more?null:this.more};
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2=function(a,b){return cljs.core.equiv_sequential.call(null,this,b)};cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2=function(a,b){return new cljs.core.ChunkedCons(this.chunk,this.more,b,this.__hash)};cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1=function(a){return this.meta};
cljs.core.ChunkedCons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1=function(a){return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this.meta)};cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1=function(a){return this.chunk};cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1=function(a){return null==this.more?cljs.core.List.EMPTY:this.more};cljs.core.__GT_ChunkedCons=function(a,b,c,d){return new cljs.core.ChunkedCons(a,b,c,d)};
cljs.core.chunk_cons=function(a,b){return 0===cljs.core._count.call(null,a)?b:new cljs.core.ChunkedCons(a,b,null,null)};cljs.core.chunk_append=function(a,b){return a.add(b)};cljs.core.chunk=function(a){return a.chunk()};cljs.core.chunk_first=function(a){return cljs.core._chunked_first.call(null,a)};cljs.core.chunk_rest=function(a){return cljs.core._chunked_rest.call(null,a)};
cljs.core.chunk_next=function(a){return a&&(a.cljs$lang$protocol_mask$partition1$&1024||a.cljs$core$IChunkedNext$)?cljs.core._chunked_next.call(null,a):cljs.core.seq.call(null,cljs.core._chunked_rest.call(null,a))};cljs.core.to_array=function(a){for(var b=[];;)if(cljs.core.seq.call(null,a))b.push(cljs.core.first.call(null,a)),a=cljs.core.next.call(null,a);else return b};
cljs.core.to_array_2d=function(a){var b=Array(cljs.core.count.call(null,a)),c=0;for(a=cljs.core.seq.call(null,a);;)if(a)b[c]=cljs.core.to_array.call(null,cljs.core.first.call(null,a)),c+=1,a=cljs.core.next.call(null,a);else break;return b};
cljs.core.int_array=function(){var a=null,b=function(b){return"number"===typeof b?a.call(null,b,null):cljs.core.into_array.call(null,b)},c=function(a,b){var c=Array(a);if(cljs.core.seq_QMARK_.call(null,b))for(var g=0,h=cljs.core.seq.call(null,b);;)if(h&&g<a)c[g]=cljs.core.first.call(null,h),g+=1,h=cljs.core.next.call(null,h);else return c;else{for(g=0;;)if(g<a)c[g]=b,g+=1;else break;return c}},a=function(a,e){switch(arguments.length){case 1:return b.call(this,a);case 2:return c.call(this,a,e)}throw Error("Invalid arity: "+
arguments.length);};a.cljs$core$IFn$_invoke$arity$1=b;a.cljs$core$IFn$_invoke$arity$2=c;return a}();
cljs.core.long_array=function(){var a=null,b=function(b){return"number"===typeof b?a.call(null,b,null):cljs.core.into_array.call(null,b)},c=function(a,b){var c=Array(a);if(cljs.core.seq_QMARK_.call(null,b))for(var g=0,h=cljs.core.seq.call(null,b);;)if(h&&g<a)c[g]=cljs.core.first.call(null,h),g+=1,h=cljs.core.next.call(null,h);else return c;else{for(g=0;;)if(g<a)c[g]=b,g+=1;else break;return c}},a=function(a,e){switch(arguments.length){case 1:return b.call(this,a);case 2:return c.call(this,a,e)}throw Error("Invalid arity: "+
arguments.length);};a.cljs$core$IFn$_invoke$arity$1=b;a.cljs$core$IFn$_invoke$arity$2=c;return a}();
cljs.core.double_array=function(){var a=null,b=function(b){return"number"===typeof b?a.call(null,b,null):cljs.core.into_array.call(null,b)},c=function(a,b){var c=Array(a);if(cljs.core.seq_QMARK_.call(null,b))for(var g=0,h=cljs.core.seq.call(null,b);;)if(h&&g<a)c[g]=cljs.core.first.call(null,h),g+=1,h=cljs.core.next.call(null,h);else return c;else{for(g=0;;)if(g<a)c[g]=b,g+=1;else break;return c}},a=function(a,e){switch(arguments.length){case 1:return b.call(this,a);case 2:return c.call(this,a,e)}throw Error("Invalid arity: "+
arguments.length);};a.cljs$core$IFn$_invoke$arity$1=b;a.cljs$core$IFn$_invoke$arity$2=c;return a}();
cljs.core.object_array=function(){var a=null,b=function(b){return"number"===typeof b?a.call(null,b,null):cljs.core.into_array.call(null,b)},c=function(a,b){var c=Array(a);if(cljs.core.seq_QMARK_.call(null,b))for(var g=0,h=cljs.core.seq.call(null,b);;)if(h&&g<a)c[g]=cljs.core.first.call(null,h),g+=1,h=cljs.core.next.call(null,h);else return c;else{for(g=0;;)if(g<a)c[g]=b,g+=1;else break;return c}},a=function(a,e){switch(arguments.length){case 1:return b.call(this,a);case 2:return c.call(this,a,e)}throw Error("Invalid arity: "+
arguments.length);};a.cljs$core$IFn$_invoke$arity$1=b;a.cljs$core$IFn$_invoke$arity$2=c;return a}();cljs.core.bounded_count=function(a,b){if(cljs.core.counted_QMARK_.call(null,a))return cljs.core.count.call(null,a);for(var c=a,d=b,e=0;;)if(0<d&&cljs.core.seq.call(null,c))c=cljs.core.next.call(null,c),d-=1,e+=1;else return e};
cljs.core.spread=function spread(b){return null==b?null:null==cljs.core.next.call(null,b)?cljs.core.seq.call(null,cljs.core.first.call(null,b)):new cljs.core.Keyword(null,"else","else",1017020587)?cljs.core.cons.call(null,cljs.core.first.call(null,b),spread.call(null,cljs.core.next.call(null,b))):null};
cljs.core.concat=function(){var a=null,b=function(){return new cljs.core.LazySeq(null,function(){return null},null,null)},c=function(a){return new cljs.core.LazySeq(null,function(){return a},null,null)},d=function(b,c){return new cljs.core.LazySeq(null,function(){var d=cljs.core.seq.call(null,b);return d?cljs.core.chunked_seq_QMARK_.call(null,d)?cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,d),a.call(null,cljs.core.chunk_rest.call(null,d),c)):cljs.core.cons.call(null,cljs.core.first.call(null,
d),a.call(null,cljs.core.rest.call(null,d),c)):c},null,null)},e=function(){var b=function(b,c,d){return function n(a,b){return new cljs.core.LazySeq(null,function(){var c=cljs.core.seq.call(null,a);return c?cljs.core.chunked_seq_QMARK_.call(null,c)?cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,c),n.call(null,cljs.core.chunk_rest.call(null,c),b)):cljs.core.cons.call(null,cljs.core.first.call(null,c),n.call(null,cljs.core.rest.call(null,c),b)):cljs.core.truth_(b)?n.call(null,cljs.core.first.call(null,
b),cljs.core.next.call(null,b)):null},null,null)}.call(null,a.call(null,b,c),d)},c=function(a,c,d){var e=null;2<arguments.length&&(e=cljs.core.array_seq(Array.prototype.slice.call(arguments,2),0));return b.call(this,a,c,e)};c.cljs$lang$maxFixedArity=2;c.cljs$lang$applyTo=function(a){var c=cljs.core.first(a);a=cljs.core.next(a);var d=cljs.core.first(a);a=cljs.core.rest(a);return b(c,d,a)};c.cljs$core$IFn$_invoke$arity$variadic=b;return c}(),a=function(a,g,h){switch(arguments.length){case 0:return b.call(this);
case 1:return c.call(this,a);case 2:return d.call(this,a,g);default:return e.cljs$core$IFn$_invoke$arity$variadic(a,g,cljs.core.array_seq(arguments,2))}throw Error("Invalid arity: "+arguments.length);};a.cljs$lang$maxFixedArity=2;a.cljs$lang$applyTo=e.cljs$lang$applyTo;a.cljs$core$IFn$_invoke$arity$0=b;a.cljs$core$IFn$_invoke$arity$1=c;a.cljs$core$IFn$_invoke$arity$2=d;a.cljs$core$IFn$_invoke$arity$variadic=e.cljs$core$IFn$_invoke$arity$variadic;return a}();
cljs.core.list_STAR_=function(){var a=null,b=function(a){return cljs.core.seq.call(null,a)},c=function(a,b){return cljs.core.cons.call(null,a,b)},d=function(a,b,c){return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,c))},e=function(a,b,c,d){return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,d)))},f=function(){var a=function(a,b,c,d,e){return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,
e)))))},b=function(b,c,d,e,f){var h=null;4<arguments.length&&(h=cljs.core.array_seq(Array.prototype.slice.call(arguments,4),0));return a.call(this,b,c,d,e,h)};b.cljs$lang$maxFixedArity=4;b.cljs$lang$applyTo=function(b){var c=cljs.core.first(b);b=cljs.core.next(b);var d=cljs.core.first(b);b=cljs.core.next(b);var e=cljs.core.first(b);b=cljs.core.next(b);var f=cljs.core.first(b);b=cljs.core.rest(b);return a(c,d,e,f,b)};b.cljs$core$IFn$_invoke$arity$variadic=a;return b}(),a=function(a,h,k,l,m){switch(arguments.length){case 1:return b.call(this,
a);case 2:return c.call(this,a,h);case 3:return d.call(this,a,h,k);case 4:return e.call(this,a,h,k,l);default:return f.cljs$core$IFn$_invoke$arity$variadic(a,h,k,l,cljs.core.array_seq(arguments,4))}throw Error("Invalid arity: "+arguments.length);};a.cljs$lang$maxFixedArity=4;a.cljs$lang$applyTo=f.cljs$lang$applyTo;a.cljs$core$IFn$_invoke$arity$1=b;a.cljs$core$IFn$_invoke$arity$2=c;a.cljs$core$IFn$_invoke$arity$3=d;a.cljs$core$IFn$_invoke$arity$4=e;a.cljs$core$IFn$_invoke$arity$variadic=f.cljs$core$IFn$_invoke$arity$variadic;
return a}();cljs.core.transient$=function(a){return cljs.core._as_transient.call(null,a)};cljs.core.persistent_BANG_=function(a){return cljs.core._persistent_BANG_.call(null,a)};
cljs.core.conj_BANG_=function(){var a=null,b=function(a,b){return cljs.core._conj_BANG_.call(null,a,b)},c=function(){var a=function(a,b,c){for(;;)if(a=cljs.core._conj_BANG_.call(null,a,b),cljs.core.truth_(c))b=cljs.core.first.call(null,c),c=cljs.core.next.call(null,c);else return a},b=function(b,c,e){var k=null;2<arguments.length&&(k=cljs.core.array_seq(Array.prototype.slice.call(arguments,2),0));return a.call(this,b,c,k)};b.cljs$lang$maxFixedArity=2;b.cljs$lang$applyTo=function(b){var c=cljs.core.first(b);
b=cljs.core.next(b);var e=cljs.core.first(b);b=cljs.core.rest(b);return a(c,e,b)};b.cljs$core$IFn$_invoke$arity$variadic=a;return b}(),a=function(a,e,f){switch(arguments.length){case 2:return b.call(this,a,e);default:return c.cljs$core$IFn$_invoke$arity$variadic(a,e,cljs.core.array_seq(arguments,2))}throw Error("Invalid arity: "+arguments.length);};a.cljs$lang$maxFixedArity=2;a.cljs$lang$applyTo=c.cljs$lang$applyTo;a.cljs$core$IFn$_invoke$arity$2=b;a.cljs$core$IFn$_invoke$arity$variadic=c.cljs$core$IFn$_invoke$arity$variadic;
return a}();
cljs.core.assoc_BANG_=function(){var a=null,b=function(a,b,c){return cljs.core._assoc_BANG_.call(null,a,b,c)},c=function(){var a=function(a,b,c,d){for(;;)if(a=cljs.core._assoc_BANG_.call(null,a,b,c),cljs.core.truth_(d))b=cljs.core.first.call(null,d),c=cljs.core.second.call(null,d),d=cljs.core.nnext.call(null,d);else return a},b=function(b,c,e,k){var l=null;3<arguments.length&&(l=cljs.core.array_seq(Array.prototype.slice.call(arguments,3),0));return a.call(this,b,c,e,l)};b.cljs$lang$maxFixedArity=3;
b.cljs$lang$applyTo=function(b){var c=cljs.core.first(b);b=cljs.core.next(b);var e=cljs.core.first(b);b=cljs.core.next(b);var k=cljs.core.first(b);b=cljs.core.rest(b);return a(c,e,k,b)};b.cljs$core$IFn$_invoke$arity$variadic=a;return b}(),a=function(a,e,f,g){switch(arguments.length){case 3:return b.call(this,a,e,f);default:return c.cljs$core$IFn$_invoke$arity$variadic(a,e,f,cljs.core.array_seq(arguments,3))}throw Error("Invalid arity: "+arguments.length);};a.cljs$lang$maxFixedArity=3;a.cljs$lang$applyTo=
c.cljs$lang$applyTo;a.cljs$core$IFn$_invoke$arity$3=b;a.cljs$core$IFn$_invoke$arity$variadic=c.cljs$core$IFn$_invoke$arity$variadic;return a}();
cljs.core.dissoc_BANG_=function(){var a=null,b=function(a,b){return cljs.core._dissoc_BANG_.call(null,a,b)},c=function(){var a=function(a,b,c){for(;;)if(a=cljs.core._dissoc_BANG_.call(null,a,b),cljs.core.truth_(c))b=cljs.core.first.call(null,c),c=cljs.core.next.call(null,c);else return a},b=function(b,c,e){var k=null;2<arguments.length&&(k=cljs.core.array_seq(Array.prototype.slice.call(arguments,2),0));return a.call(this,b,c,k)};b.cljs$lang$maxFixedArity=2;b.cljs$lang$applyTo=function(b){var c=cljs.core.first(b);
b=cljs.core.next(b);var e=cljs.core.first(b);b=cljs.core.rest(b);return a(c,e,b)};b.cljs$core$IFn$_invoke$arity$variadic=a;return b}(),a=function(a,e,f){switch(arguments.length){case 2:return b.call(this,a,e);default:return c.cljs$core$IFn$_invoke$arity$variadic(a,e,cljs.core.array_seq(arguments,2))}throw Error("Invalid arity: "+arguments.length);};a.cljs$lang$maxFixedArity=2;a.cljs$lang$applyTo=c.cljs$lang$applyTo;a.cljs$core$IFn$_invoke$arity$2=b;a.cljs$core$IFn$_invoke$arity$variadic=c.cljs$core$IFn$_invoke$arity$variadic;
return a}();cljs.core.pop_BANG_=function(a){return cljs.core._pop_BANG_.call(null,a)};
cljs.core.disj_BANG_=function(){var a=null,b=function(a,b){return cljs.core._disjoin_BANG_.call(null,a,b)},c=function(){var a=function(a,b,c){for(;;)if(a=cljs.core._disjoin_BANG_.call(null,a,b),cljs.core.truth_(c))b=cljs.core.first.call(null,c),c=cljs.core.next.call(null,c);else return a},b=function(b,c,e){var k=null;2<arguments.length&&(k=cljs.core.array_seq(Array.prototype.slice.call(arguments,2),0));return a.call(this,b,c,k)};b.cljs$lang$maxFixedArity=2;b.cljs$lang$applyTo=function(b){var c=cljs.core.first(b);
b=cljs.core.next(b);var e=cljs.core.first(b);b=cljs.core.rest(b);return a(c,e,b)};b.cljs$core$IFn$_invoke$arity$variadic=a;return b}(),a=function(a,e,f){switch(arguments.length){case 2:return b.call(this,a,e);default:return c.cljs$core$IFn$_invoke$arity$variadic(a,e,cljs.core.array_seq(arguments,2))}throw Error("Invalid arity: "+arguments.length);};a.cljs$lang$maxFixedArity=2;a.cljs$lang$applyTo=c.cljs$lang$applyTo;a.cljs$core$IFn$_invoke$arity$2=b;a.cljs$core$IFn$_invoke$arity$variadic=c.cljs$core$IFn$_invoke$arity$variadic;
return a}();
cljs.core.apply_to=function(a,b,c){var d=cljs.core.seq.call(null,c);if(0===b)return a.call(null);c=cljs.core._first.call(null,d);var e=cljs.core._rest.call(null,d);if(1===b)return a.cljs$core$IFn$_invoke$arity$1?a.cljs$core$IFn$_invoke$arity$1(c):a.call(null,c);var d=cljs.core._first.call(null,e),f=cljs.core._rest.call(null,e);if(2===b)return a.cljs$core$IFn$_invoke$arity$2?a.cljs$core$IFn$_invoke$arity$2(c,d):a.call(null,c,d);var e=cljs.core._first.call(null,f),g=cljs.core._rest.call(null,f);if(3===
b)return a.cljs$core$IFn$_invoke$arity$3?a.cljs$core$IFn$_invoke$arity$3(c,d,e):a.call(null,c,d,e);var f=cljs.core._first.call(null,g),h=cljs.core._rest.call(null,g);if(4===b)return a.cljs$core$IFn$_invoke$arity$4?a.cljs$core$IFn$_invoke$arity$4(c,d,e,f):a.call(null,c,d,e,f);var g=cljs.core._first.call(null,h),k=cljs.core._rest.call(null,h);if(5===b)return a.cljs$core$IFn$_invoke$arity$5?a.cljs$core$IFn$_invoke$arity$5(c,d,e,f,g):a.call(null,c,d,e,f,g);var h=cljs.core._first.call(null,k),l=cljs.core._rest.call(null,
k);if(6===b)return a.cljs$core$IFn$_invoke$arity$6?a.cljs$core$IFn$_invoke$arity$6(c,d,e,f,g,h):a.call(null,c,d,e,f,g,h);var k=cljs.core._first.call(null,l),m=cljs.core._rest.call(null,l);if(7===b)return a.cljs$core$IFn$_invoke$arity$7?a.cljs$core$IFn$_invoke$arity$7(c,d,e,f,g,h,k):a.call(null,c,d,e,f,g,h,k);var l=cljs.core._first.call(null,m),n=cljs.core._rest.call(null,m);if(8===b)return a.cljs$core$IFn$_invoke$arity$8?a.cljs$core$IFn$_invoke$arity$8(c,d,e,f,g,h,k,l):a.call(null,c,d,e,f,g,h,k,l);
var m=cljs.core._first.call(null,n),p=cljs.core._rest.call(null,n);if(9===b)return a.cljs$core$IFn$_invoke$arity$9?a.cljs$core$IFn$_invoke$arity$9(c,d,e,f,g,h,k,l,m):a.call(null,c,d,e,f,g,h,k,l,m);var n=cljs.core._first.call(null,p),q=cljs.core._rest.call(null,p);if(10===b)return a.cljs$core$IFn$_invoke$arity$10?a.cljs$core$IFn$_invoke$arity$10(c,d,e,f,g,h,k,l,m,n):a.call(null,c,d,e,f,g,h,k,l,m,n);var p=cljs.core._first.call(null,q),r=cljs.core._rest.call(null,q);if(11===b)return a.cljs$core$IFn$_invoke$arity$11?
a.cljs$core$IFn$_invoke$arity$11(c,d,e,f,g,h,k,l,m,n,p):a.call(null,c,d,e,f,g,h,k,l,m,n,p);var q=cljs.core._first.call(null,r),s=cljs.core._rest.call(null,r);if(12===b)return a.cljs$core$IFn$_invoke$arity$12?a.cljs$core$IFn$_invoke$arity$12(c,d,e,f,g,h,k,l,m,n,p,q):a.call(null,c,d,e,f,g,h,k,l,m,n,p,q);var r=cljs.core._first.call(null,s),t=cljs.core._rest.call(null,s);if(13===b)return a.cljs$core$IFn$_invoke$arity$13?a.cljs$core$IFn$_invoke$arity$13(c,d,e,f,g,h,k,l,m,n,p,q,r):a.call(null,c,d,e,f,g,
h,k,l,m,n,p,q,r);var s=cljs.core._first.call(null,t),v=cljs.core._rest.call(null,t);if(14===b)return a.cljs$core$IFn$_invoke$arity$14?a.cljs$core$IFn$_invoke$arity$14(c,d,e,f,g,h,k,l,m,n,p,q,r,s):a.call(null,c,d,e,f,g,h,k,l,m,n,p,q,r,s);var t=cljs.core._first.call(null,v),y=cljs.core._rest.call(null,v);if(15===b)return a.cljs$core$IFn$_invoke$arity$15?a.cljs$core$IFn$_invoke$arity$15(c,d,e,f,g,h,k,l,m,n,p,q,r,s,t):a.call(null,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t);var v=cljs.core._first.call(null,y),z=cljs.core._rest.call(null,
y);if(16===b)return a.cljs$core$IFn$_invoke$arity$16?a.cljs$core$IFn$_invoke$arity$16(c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v):a.call(null,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v);var y=cljs.core._first.call(null,z),A=cljs.core._rest.call(null,z);if(17===b)return a.cljs$core$IFn$_invoke$arity$17?a.cljs$core$IFn$_invoke$arity$17(c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v,y):a.call(null,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v,y);var z=cljs.core._first.call(null,A),B=cljs.core._rest.call(null,A);if(18===b)return a.cljs$core$IFn$_invoke$arity$18?
a.cljs$core$IFn$_invoke$arity$18(c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v,y,z):a.call(null,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v,y,z);A=cljs.core._first.call(null,B);B=cljs.core._rest.call(null,B);if(19===b)return a.cljs$core$IFn$_invoke$arity$19?a.cljs$core$IFn$_invoke$arity$19(c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v,y,z,A):a.call(null,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v,y,z,A);var D=cljs.core._first.call(null,B);cljs.core._rest.call(null,B);if(20===b)return a.cljs$core$IFn$_invoke$arity$20?a.cljs$core$IFn$_invoke$arity$20(c,
d,e,f,g,h,k,l,m,n,p,q,r,s,t,v,y,z,A,D):a.call(null,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v,y,z,A,D);throw Error("Only up to 20 arguments supported on functions");};
cljs.core.apply=function(){var a=null,b=function(a,b){var c=a.cljs$lang$maxFixedArity;if(a.cljs$lang$applyTo){var d=cljs.core.bounded_count.call(null,b,c+1);return d<=c?cljs.core.apply_to.call(null,a,d,b):a.cljs$lang$applyTo(b)}return a.apply(a,cljs.core.to_array.call(null,b))},c=function(a,b,c){b=cljs.core.list_STAR_.call(null,b,c);c=a.cljs$lang$maxFixedArity;if(a.cljs$lang$applyTo){var d=cljs.core.bounded_count.call(null,b,c+1);return d<=c?cljs.core.apply_to.call(null,a,d,b):a.cljs$lang$applyTo(b)}return a.apply(a,
cljs.core.to_array.call(null,b))},d=function(a,b,c,d){b=cljs.core.list_STAR_.call(null,b,c,d);c=a.cljs$lang$maxFixedArity;return a.cljs$lang$applyTo?(d=cljs.core.bounded_count.call(null,b,c+1),d<=c?cljs.core.apply_to.call(null,a,d,b):a.cljs$lang$applyTo(b)):a.apply(a,cljs.core.to_array.call(null,b))},e=function(a,b,c,d,e){b=cljs.core.list_STAR_.call(null,b,c,d,e);c=a.cljs$lang$maxFixedArity;return a.cljs$lang$applyTo?(d=cljs.core.bounded_count.call(null,b,c+1),d<=c?cljs.core.apply_to.call(null,a,
d,b):a.cljs$lang$applyTo(b)):a.apply(a,cljs.core.to_array.call(null,b))},f=function(){var a=function(a,b,c,d,e,f){b=cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.cons.call(null,e,cljs.core.spread.call(null,f)))));c=a.cljs$lang$maxFixedArity;return a.cljs$lang$applyTo?(d=cljs.core.bounded_count.call(null,b,c+1),d<=c?cljs.core.apply_to.call(null,a,d,b):a.cljs$lang$applyTo(b)):a.apply(a,cljs.core.to_array.call(null,b))},b=function(b,c,d,e,f,h){var r=null;
5<arguments.length&&(r=cljs.core.array_seq(Array.prototype.slice.call(arguments,5),0));return a.call(this,b,c,d,e,f,r)};b.cljs$lang$maxFixedArity=5;b.cljs$lang$applyTo=function(b){var c=cljs.core.first(b);b=cljs.core.next(b);var d=cljs.core.first(b);b=cljs.core.next(b);var e=cljs.core.first(b);b=cljs.core.next(b);var f=cljs.core.first(b);b=cljs.core.next(b);var h=cljs.core.first(b);b=cljs.core.rest(b);return a(c,d,e,f,h,b)};b.cljs$core$IFn$_invoke$arity$variadic=a;return b}(),a=function(a,h,k,l,m,
n){switch(arguments.length){case 2:return b.call(this,a,h);case 3:return c.call(this,a,h,k);case 4:return d.call(this,a,h,k,l);case 5:return e.call(this,a,h,k,l,m);default:return f.cljs$core$IFn$_invoke$arity$variadic(a,h,k,l,m,cljs.core.array_seq(arguments,5))}throw Error("Invalid arity: "+arguments.length);};a.cljs$lang$maxFixedArity=5;a.cljs$lang$applyTo=f.cljs$lang$applyTo;a.cljs$core$IFn$_invoke$arity$2=b;a.cljs$core$IFn$_invoke$arity$3=c;a.cljs$core$IFn$_invoke$arity$4=d;a.cljs$core$IFn$_invoke$arity$5=
e;a.cljs$core$IFn$_invoke$arity$variadic=f.cljs$core$IFn$_invoke$arity$variadic;return a}();
cljs.core.vary_meta=function(){var a=null,b=function(a,b){return cljs.core.with_meta.call(null,a,b.call(null,cljs.core.meta.call(null,a)))},c=function(a,b,c){return cljs.core.with_meta.call(null,a,b.call(null,cljs.core.meta.call(null,a),c))},d=function(a,b,c,d){return cljs.core.with_meta.call(null,a,b.call(null,cljs.core.meta.call(null,a),c,d))},e=function(a,b,c,d,e){return cljs.core.with_meta.call(null,a,b.call(null,cljs.core.meta.call(null,a),c,d,e))},f=function(a,b,c,d,e,f){return cljs.core.with_meta.call(null,
a,b.call(null,cljs.core.meta.call(null,a),c,d,e,f))},g=function(){var a=function(a,b,c,d,e,f,g){return cljs.core.with_meta.call(null,a,cljs.core.apply.call(null,b,cljs.core.meta.call(null,a),c,d,e,f,g))},b=function(b,c,d,e,f,g,k){var t=null;6<arguments.length&&(t=cljs.core.array_seq(Array.prototype.slice.call(arguments,6),0));return a.call(this,b,c,d,e,f,g,t)};b.cljs$lang$maxFixedArity=6;b.cljs$lang$applyTo=function(b){var c=cljs.core.first(b);b=cljs.core.next(b);var d=cljs.core.first(b);b=cljs.core.next(b);
var e=cljs.core.first(b);b=cljs.core.next(b);var f=cljs.core.first(b);b=cljs.core.next(b);var g=cljs.core.first(b);b=cljs.core.next(b);var k=cljs.core.first(b);b=cljs.core.rest(b);return a(c,d,e,f,g,k,b)};b.cljs$core$IFn$_invoke$arity$variadic=a;return b}(),a=function(a,k,l,m,n,p,q){switch(arguments.length){case 2:return b.call(this,a,k);case 3:return c.call(this,a,k,l);case 4:return d.call(this,a,k,l,m);case 5:return e.call(this,a,k,l,m,n);case 6:return f.call(this,a,k,l,m,n,p);default:return g.cljs$core$IFn$_invoke$arity$variadic(a,
k,l,m,n,p,cljs.core.array_seq(arguments,6))}throw Error("Invalid arity: "+arguments.length);};a.cljs$lang$maxFixedArity=6;a.cljs$lang$applyTo=g.cljs$lang$applyTo;a.cljs$core$IFn$_invoke$arity$2=b;a.cljs$core$IFn$_invoke$arity$3=c;a.cljs$core$IFn$_invoke$arity$4=d;a.cljs$core$IFn$_invoke$arity$5=e;a.cljs$core$IFn$_invoke$arity$6=f;a.cljs$core$IFn$_invoke$arity$variadic=g.cljs$core$IFn$_invoke$arity$variadic;return a}();
cljs.core.not_EQ_=function(){var a=null,b=function(a,b){return!cljs.core._EQ_.call(null,a,b)},c=function(){var a=function(a,b,c){return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,a,b,c))},b=function(b,c,e){var k=null;2<arguments.length&&(k=cljs.core.array_seq(Array.prototype.slice.call(arguments,2),0));return a.call(this,b,c,k)};b.cljs$lang$maxFixedArity=2;b.cljs$lang$applyTo=function(b){var c=cljs.core.first(b);b=cljs.core.next(b);var e=cljs.core.first(b);b=cljs.core.rest(b);
return a(c,e,b)};b.cljs$core$IFn$_invoke$arity$variadic=a;return b}(),a=function(a,e,f){switch(arguments.length){case 1:return!1;case 2:return b.call(this,a,e);default:return c.cljs$core$IFn$_invoke$arity$variadic(a,e,cljs.core.array_seq(arguments,2))}throw Error("Invalid arity: "+arguments.length);};a.cljs$lang$maxFixedArity=2;a.cljs$lang$applyTo=c.cljs$lang$applyTo;a.cljs$core$IFn$_invoke$arity$1=function(a){return!1};a.cljs$core$IFn$_invoke$arity$2=b;a.cljs$core$IFn$_invoke$arity$variadic=c.cljs$core$IFn$_invoke$arity$variadic;
return a}();cljs.core.not_empty=function(a){return cljs.core.seq.call(null,a)?a:null};cljs.core.every_QMARK_=function(a,b){for(;;){if(null==cljs.core.seq.call(null,b))return!0;if(cljs.core.truth_(a.call(null,cljs.core.first.call(null,b)))){var c=a,d=cljs.core.next.call(null,b);a=c;b=d}else return new cljs.core.Keyword(null,"else","else",1017020587)?!1:null}};cljs.core.not_every_QMARK_=function(a,b){return!cljs.core.every_QMARK_.call(null,a,b)};
cljs.core.some=function(a,b){for(;;)if(cljs.core.seq.call(null,b)){var c=a.call(null,cljs.core.first.call(null,b));if(cljs.core.truth_(c))return c;var c=a,d=cljs.core.next.call(null,b);a=c;b=d}else return null};cljs.core.not_any_QMARK_=function(a,b){return cljs.core.not.call(null,cljs.core.some.call(null,a,b))};cljs.core.even_QMARK_=function(a){if(cljs.core.integer_QMARK_.call(null,a))return 0===(a&1);throw Error("Argument must be an integer: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a));};
cljs.core.odd_QMARK_=function(a){return!cljs.core.even_QMARK_.call(null,a)};cljs.core.identity=function(a){return a};
cljs.core.complement=function(a){return function(){var b=null,c=function(){var b=function(b,c,d){return cljs.core.not.call(null,cljs.core.apply.call(null,a,b,c,d))},c=function(a,c,e){var k=null;2<arguments.length&&(k=cljs.core.array_seq(Array.prototype.slice.call(arguments,2),0));return b.call(this,a,c,k)};c.cljs$lang$maxFixedArity=2;c.cljs$lang$applyTo=function(a){var c=cljs.core.first(a);a=cljs.core.next(a);var e=cljs.core.first(a);a=cljs.core.rest(a);return b(c,e,a)};c.cljs$core$IFn$_invoke$arity$variadic=
b;return c}(),b=function(b,e,f){switch(arguments.length){case 0:return cljs.core.not.call(null,a.call(null));case 1:return cljs.core.not.call(null,a.call(null,b));case 2:return cljs.core.not.call(null,a.call(null,b,e));default:return c.cljs$core$IFn$_invoke$arity$variadic(b,e,cljs.core.array_seq(arguments,2))}throw Error("Invalid arity: "+arguments.length);};b.cljs$lang$maxFixedArity=2;b.cljs$lang$applyTo=c.cljs$lang$applyTo;return b}()};
cljs.core.constantly=function(a){return function(){var b=function(b){0<arguments.length&&cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0);return a};b.cljs$lang$maxFixedArity=0;b.cljs$lang$applyTo=function(b){cljs.core.seq(b);return a};b.cljs$core$IFn$_invoke$arity$variadic=function(b){return a};return b}()};
cljs.core.comp=function(){var a=null,b=function(){return cljs.core.identity},c=function(a,b){return function(){var c=null,d=function(){var c=function(c,d,e,h){return a.call(null,cljs.core.apply.call(null,b,c,d,e,h))},d=function(a,b,d,e){var f=null;3<arguments.length&&(f=cljs.core.array_seq(Array.prototype.slice.call(arguments,3),0));return c.call(this,a,b,d,f)};d.cljs$lang$maxFixedArity=3;d.cljs$lang$applyTo=function(a){var b=cljs.core.first(a);a=cljs.core.next(a);var d=cljs.core.first(a);a=cljs.core.next(a);
var e=cljs.core.first(a);a=cljs.core.rest(a);return c(b,d,e,a)};d.cljs$core$IFn$_invoke$arity$variadic=c;return d}(),c=function(c,e,h,p){switch(arguments.length){case 0:return a.call(null,b.call(null));case 1:return a.call(null,b.call(null,c));case 2:return a.call(null,b.call(null,c,e));case 3:return a.call(null,b.call(null,c,e,h));default:return d.cljs$core$IFn$_invoke$arity$variadic(c,e,h,cljs.core.array_seq(arguments,3))}throw Error("Invalid arity: "+arguments.length);};c.cljs$lang$maxFixedArity=
3;c.cljs$lang$applyTo=d.cljs$lang$applyTo;return c}()},d=function(a,b,c){return function(){var d=null,e=function(){var d=function(d,e,k,l){return a.call(null,b.call(null,cljs.core.apply.call(null,c,d,e,k,l)))},e=function(a,b,c,e){var f=null;3<arguments.length&&(f=cljs.core.array_seq(Array.prototype.slice.call(arguments,3),0));return d.call(this,a,b,c,f)};e.cljs$lang$maxFixedArity=3;e.cljs$lang$applyTo=function(a){var b=cljs.core.first(a);a=cljs.core.next(a);var c=cljs.core.first(a);a=cljs.core.next(a);
var e=cljs.core.first(a);a=cljs.core.rest(a);return d(b,c,e,a)};e.cljs$core$IFn$_invoke$arity$variadic=d;return e}(),d=function(d,k,p,q){switch(arguments.length){case 0:return a.call(null,b.call(null,c.call(null)));case 1:return a.call(null,b.call(null,c.call(null,d)));case 2:return a.call(null,b.call(null,c.call(null,d,k)));case 3:return a.call(null,b.call(null,c.call(null,d,k,p)));default:return e.cljs$core$IFn$_invoke$arity$variadic(d,k,p,cljs.core.array_seq(arguments,3))}throw Error("Invalid arity: "+
arguments.length);};d.cljs$lang$maxFixedArity=3;d.cljs$lang$applyTo=e.cljs$lang$applyTo;return d}()},e=function(){var a=function(a,b,c,d){return function(a){return function(){var b=function(b){b=cljs.core.apply.call(null,cljs.core.first.call(null,a),b);for(var c=cljs.core.next.call(null,a);;)if(c)b=cljs.core.first.call(null,c).call(null,b),c=cljs.core.next.call(null,c);else return b},c=function(a){var c=null;0<arguments.length&&(c=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0));return b.call(this,
c)};c.cljs$lang$maxFixedArity=0;c.cljs$lang$applyTo=function(a){a=cljs.core.seq(a);return b(a)};c.cljs$core$IFn$_invoke$arity$variadic=b;return c}()}(cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,a,b,c,d)))},b=function(b,c,d,e){var g=null;3<arguments.length&&(g=cljs.core.array_seq(Array.prototype.slice.call(arguments,3),0));return a.call(this,b,c,d,g)};b.cljs$lang$maxFixedArity=3;b.cljs$lang$applyTo=function(b){var c=cljs.core.first(b);b=cljs.core.next(b);var d=cljs.core.first(b);b=cljs.core.next(b);
var e=cljs.core.first(b);b=cljs.core.rest(b);return a(c,d,e,b)};b.cljs$core$IFn$_invoke$arity$variadic=a;return b}(),a=function(a,g,h,k){switch(arguments.length){case 0:return b.call(this);case 1:return a;case 2:return c.call(this,a,g);case 3:return d.call(this,a,g,h);default:return e.cljs$core$IFn$_invoke$arity$variadic(a,g,h,cljs.core.array_seq(arguments,3))}throw Error("Invalid arity: "+arguments.length);};a.cljs$lang$maxFixedArity=3;a.cljs$lang$applyTo=e.cljs$lang$applyTo;a.cljs$core$IFn$_invoke$arity$0=
b;a.cljs$core$IFn$_invoke$arity$1=function(a){return a};a.cljs$core$IFn$_invoke$arity$2=c;a.cljs$core$IFn$_invoke$arity$3=d;a.cljs$core$IFn$_invoke$arity$variadic=e.cljs$core$IFn$_invoke$arity$variadic;return a}();
cljs.core.partial=function(){var a=null,b=function(a,b){return function(){var c=function(c){return cljs.core.apply.call(null,a,b,c)},d=function(a){var b=null;0<arguments.length&&(b=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0));return c.call(this,b)};d.cljs$lang$maxFixedArity=0;d.cljs$lang$applyTo=function(a){a=cljs.core.seq(a);return c(a)};d.cljs$core$IFn$_invoke$arity$variadic=c;return d}()},c=function(a,b,c){return function(){var d=function(d){return cljs.core.apply.call(null,
a,b,c,d)},e=function(a){var b=null;0<arguments.length&&(b=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0));return d.call(this,b)};e.cljs$lang$maxFixedArity=0;e.cljs$lang$applyTo=function(a){a=cljs.core.seq(a);return d(a)};e.cljs$core$IFn$_invoke$arity$variadic=d;return e}()},d=function(a,b,c,d){return function(){var e=function(e){return cljs.core.apply.call(null,a,b,c,d,e)},m=function(a){var b=null;0<arguments.length&&(b=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0));
return e.call(this,b)};m.cljs$lang$maxFixedArity=0;m.cljs$lang$applyTo=function(a){a=cljs.core.seq(a);return e(a)};m.cljs$core$IFn$_invoke$arity$variadic=e;return m}()},e=function(){var a=function(a,b,c,d,e){return function(){var f=function(f){return cljs.core.apply.call(null,a,b,c,d,cljs.core.concat.call(null,e,f))},g=function(a){var b=null;0<arguments.length&&(b=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0));return f.call(this,b)};g.cljs$lang$maxFixedArity=0;g.cljs$lang$applyTo=
function(a){a=cljs.core.seq(a);return f(a)};g.cljs$core$IFn$_invoke$arity$variadic=f;return g}()},b=function(b,c,d,e,g){var p=null;4<arguments.length&&(p=cljs.core.array_seq(Array.prototype.slice.call(arguments,4),0));return a.call(this,b,c,d,e,p)};b.cljs$lang$maxFixedArity=4;b.cljs$lang$applyTo=function(b){var c=cljs.core.first(b);b=cljs.core.next(b);var d=cljs.core.first(b);b=cljs.core.next(b);var e=cljs.core.first(b);b=cljs.core.next(b);var g=cljs.core.first(b);b=cljs.core.rest(b);return a(c,d,
e,g,b)};b.cljs$core$IFn$_invoke$arity$variadic=a;return b}(),a=function(a,g,h,k,l){switch(arguments.length){case 1:return a;case 2:return b.call(this,a,g);case 3:return c.call(this,a,g,h);case 4:return d.call(this,a,g,h,k);default:return e.cljs$core$IFn$_invoke$arity$variadic(a,g,h,k,cljs.core.array_seq(arguments,4))}throw Error("Invalid arity: "+arguments.length);};a.cljs$lang$maxFixedArity=4;a.cljs$lang$applyTo=e.cljs$lang$applyTo;a.cljs$core$IFn$_invoke$arity$1=function(a){return a};a.cljs$core$IFn$_invoke$arity$2=
b;a.cljs$core$IFn$_invoke$arity$3=c;a.cljs$core$IFn$_invoke$arity$4=d;a.cljs$core$IFn$_invoke$arity$variadic=e.cljs$core$IFn$_invoke$arity$variadic;return a}();
cljs.core.fnil=function(){var a=null,b=function(a,b){return function(){var c=null,d=function(){var c=function(c,d,g,h){return cljs.core.apply.call(null,a,null==c?b:c,d,g,h)},d=function(a,b,d,e){var f=null;3<arguments.length&&(f=cljs.core.array_seq(Array.prototype.slice.call(arguments,3),0));return c.call(this,a,b,d,f)};d.cljs$lang$maxFixedArity=3;d.cljs$lang$applyTo=function(a){var b=cljs.core.first(a);a=cljs.core.next(a);var d=cljs.core.first(a);a=cljs.core.next(a);var e=cljs.core.first(a);a=cljs.core.rest(a);
return c(b,d,e,a)};d.cljs$core$IFn$_invoke$arity$variadic=c;return d}(),c=function(c,g,m,n){switch(arguments.length){case 1:return a.call(null,null==c?b:c);case 2:return a.call(null,null==c?b:c,g);case 3:return a.call(null,null==c?b:c,g,m);default:return d.cljs$core$IFn$_invoke$arity$variadic(c,g,m,cljs.core.array_seq(arguments,3))}throw Error("Invalid arity: "+arguments.length);};c.cljs$lang$maxFixedArity=3;c.cljs$lang$applyTo=d.cljs$lang$applyTo;return c}()},c=function(a,b,c){return function(){var d=
null,k=function(){var d=function(d,h,k,l){return cljs.core.apply.call(null,a,null==d?b:d,null==h?c:h,k,l)},h=function(a,b,c,e){var f=null;3<arguments.length&&(f=cljs.core.array_seq(Array.prototype.slice.call(arguments,3),0));return d.call(this,a,b,c,f)};h.cljs$lang$maxFixedArity=3;h.cljs$lang$applyTo=function(a){var b=cljs.core.first(a);a=cljs.core.next(a);var c=cljs.core.first(a);a=cljs.core.next(a);var e=cljs.core.first(a);a=cljs.core.rest(a);return d(b,c,e,a)};h.cljs$core$IFn$_invoke$arity$variadic=
d;return h}(),d=function(d,h,n,p){switch(arguments.length){case 2:return a.call(null,null==d?b:d,null==h?c:h);case 3:return a.call(null,null==d?b:d,null==h?c:h,n);default:return k.cljs$core$IFn$_invoke$arity$variadic(d,h,n,cljs.core.array_seq(arguments,3))}throw Error("Invalid arity: "+arguments.length);};d.cljs$lang$maxFixedArity=3;d.cljs$lang$applyTo=k.cljs$lang$applyTo;return d}()},d=function(a,b,c,d){return function(){var k=null,l=function(){var k=function(k,l,m,n){return cljs.core.apply.call(null,
a,null==k?b:k,null==l?c:l,null==m?d:m,n)},l=function(a,b,c,d){var e=null;3<arguments.length&&(e=cljs.core.array_seq(Array.prototype.slice.call(arguments,3),0));return k.call(this,a,b,c,e)};l.cljs$lang$maxFixedArity=3;l.cljs$lang$applyTo=function(a){var b=cljs.core.first(a);a=cljs.core.next(a);var c=cljs.core.first(a);a=cljs.core.next(a);var d=cljs.core.first(a);a=cljs.core.rest(a);return k(b,c,d,a)};l.cljs$core$IFn$_invoke$arity$variadic=k;return l}(),k=function(k,n,p,q){switch(arguments.length){case 2:return a.call(null,
null==k?b:k,null==n?c:n);case 3:return a.call(null,null==k?b:k,null==n?c:n,null==p?d:p);default:return l.cljs$core$IFn$_invoke$arity$variadic(k,n,p,cljs.core.array_seq(arguments,3))}throw Error("Invalid arity: "+arguments.length);};k.cljs$lang$maxFixedArity=3;k.cljs$lang$applyTo=l.cljs$lang$applyTo;return k}()},a=function(a,f,g,h){switch(arguments.length){case 2:return b.call(this,a,f);case 3:return c.call(this,a,f,g);case 4:return d.call(this,a,f,g,h)}throw Error("Invalid arity: "+arguments.length);
};a.cljs$core$IFn$_invoke$arity$2=b;a.cljs$core$IFn$_invoke$arity$3=c;a.cljs$core$IFn$_invoke$arity$4=d;return a}();
cljs.core.map_indexed=function(a,b){return function d(b,f){return new cljs.core.LazySeq(null,function(){var g=cljs.core.seq.call(null,f);if(g){if(cljs.core.chunked_seq_QMARK_.call(null,g)){for(var h=cljs.core.chunk_first.call(null,g),k=cljs.core.count.call(null,h),l=cljs.core.chunk_buffer.call(null,k),m=0;;)if(m<k)cljs.core.chunk_append.call(null,l,a.call(null,b+m,cljs.core._nth.call(null,h,m))),m+=1;else break;return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,l),d.call(null,b+k,cljs.core.chunk_rest.call(null,
g)))}return cljs.core.cons.call(null,a.call(null,b,cljs.core.first.call(null,g)),d.call(null,b+1,cljs.core.rest.call(null,g)))}return null},null,null)}.call(null,0,b)};
cljs.core.keep=function keep(b,c){return new cljs.core.LazySeq(null,function(){var d=cljs.core.seq.call(null,c);if(d){if(cljs.core.chunked_seq_QMARK_.call(null,d)){for(var e=cljs.core.chunk_first.call(null,d),f=cljs.core.count.call(null,e),g=cljs.core.chunk_buffer.call(null,f),h=0;;)if(h<f){var k=b.call(null,cljs.core._nth.call(null,e,h));null!=k&&cljs.core.chunk_append.call(null,g,k);h+=1}else break;return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,g),keep.call(null,b,cljs.core.chunk_rest.call(null,
d)))}e=b.call(null,cljs.core.first.call(null,d));return null==e?keep.call(null,b,cljs.core.rest.call(null,d)):cljs.core.cons.call(null,e,keep.call(null,b,cljs.core.rest.call(null,d)))}return null},null,null)};
cljs.core.keep_indexed=function(a,b){return function d(b,f){return new cljs.core.LazySeq(null,function(){var g=cljs.core.seq.call(null,f);if(g){if(cljs.core.chunked_seq_QMARK_.call(null,g)){for(var h=cljs.core.chunk_first.call(null,g),k=cljs.core.count.call(null,h),l=cljs.core.chunk_buffer.call(null,k),m=0;;)if(m<k){var n=a.call(null,b+m,cljs.core._nth.call(null,h,m));null!=n&&cljs.core.chunk_append.call(null,l,n);m+=1}else break;return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,l),
d.call(null,b+k,cljs.core.chunk_rest.call(null,g)))}h=a.call(null,b,cljs.core.first.call(null,g));return null==h?d.call(null,b+1,cljs.core.rest.call(null,g)):cljs.core.cons.call(null,h,d.call(null,b+1,cljs.core.rest.call(null,g)))}return null},null,null)}.call(null,0,b)};
cljs.core.every_pred=function(){var a=null,b=function(a){return function(){var b=null,c=function(b){return cljs.core.boolean$.call(null,a.call(null,b))},d=function(b,c){return cljs.core.boolean$.call(null,function(){var d=a.call(null,b);return cljs.core.truth_(d)?a.call(null,c):d}())},e=function(b,c,d){return cljs.core.boolean$.call(null,function(){var e=a.call(null,b);return cljs.core.truth_(e)?(e=a.call(null,c),cljs.core.truth_(e)?a.call(null,d):e):e}())},m=function(){var c=function(c,d,e,h){return cljs.core.boolean$.call(null,
b.call(null,c,d,e)&&cljs.core.every_QMARK_.call(null,a,h))},d=function(a,b,d,e){var f=null;3<arguments.length&&(f=cljs.core.array_seq(Array.prototype.slice.call(arguments,3),0));return c.call(this,a,b,d,f)};d.cljs$lang$maxFixedArity=3;d.cljs$lang$applyTo=function(a){var b=cljs.core.first(a);a=cljs.core.next(a);var d=cljs.core.first(a);a=cljs.core.next(a);var e=cljs.core.first(a);a=cljs.core.rest(a);return c(b,d,e,a)};d.cljs$core$IFn$_invoke$arity$variadic=c;return d}(),b=function(a,b,f,g){switch(arguments.length){case 0:return!0;
case 1:return c.call(this,a);case 2:return d.call(this,a,b);case 3:return e.call(this,a,b,f);default:return m.cljs$core$IFn$_invoke$arity$variadic(a,b,f,cljs.core.array_seq(arguments,3))}throw Error("Invalid arity: "+arguments.length);};b.cljs$lang$maxFixedArity=3;b.cljs$lang$applyTo=m.cljs$lang$applyTo;b.cljs$core$IFn$_invoke$arity$0=function(){return!0};b.cljs$core$IFn$_invoke$arity$1=c;b.cljs$core$IFn$_invoke$arity$2=d;b.cljs$core$IFn$_invoke$arity$3=e;b.cljs$core$IFn$_invoke$arity$variadic=m.cljs$core$IFn$_invoke$arity$variadic;
return b}()},c=function(a,b){return function(){var c=null,d=function(c){return cljs.core.boolean$.call(null,function(){var d=a.call(null,c);return cljs.core.truth_(d)?b.call(null,c):d}())},e=function(c,d){return cljs.core.boolean$.call(null,function(){var e=a.call(null,c);return cljs.core.truth_(e)&&(e=a.call(null,d),cljs.core.truth_(e))?(e=b.call(null,c),cljs.core.truth_(e)?b.call(null,d):e):e}())},m=function(c,d,e){return cljs.core.boolean$.call(null,function(){var h=a.call(null,c);return cljs.core.truth_(h)&&
(h=a.call(null,d),cljs.core.truth_(h)&&(h=a.call(null,e),cljs.core.truth_(h)&&(h=b.call(null,c),cljs.core.truth_(h))))?(h=b.call(null,d),cljs.core.truth_(h)?b.call(null,e):h):h}())},n=function(){var d=function(d,e,k,l){return cljs.core.boolean$.call(null,c.call(null,d,e,k)&&cljs.core.every_QMARK_.call(null,function(c){var d=a.call(null,c);return cljs.core.truth_(d)?b.call(null,c):d},l))},e=function(a,b,c,e){var f=null;3<arguments.length&&(f=cljs.core.array_seq(Array.prototype.slice.call(arguments,
3),0));return d.call(this,a,b,c,f)};e.cljs$lang$maxFixedArity=3;e.cljs$lang$applyTo=function(a){var b=cljs.core.first(a);a=cljs.core.next(a);var c=cljs.core.first(a);a=cljs.core.next(a);var e=cljs.core.first(a);a=cljs.core.rest(a);return d(b,c,e,a)};e.cljs$core$IFn$_invoke$arity$variadic=d;return e}(),c=function(a,b,c,f){switch(arguments.length){case 0:return!0;case 1:return d.call(this,a);case 2:return e.call(this,a,b);case 3:return m.call(this,a,b,c);default:return n.cljs$core$IFn$_invoke$arity$variadic(a,
b,c,cljs.core.array_seq(arguments,3))}throw Error("Invalid arity: "+arguments.length);};c.cljs$lang$maxFixedArity=3;c.cljs$lang$applyTo=n.cljs$lang$applyTo;c.cljs$core$IFn$_invoke$arity$0=function(){return!0};c.cljs$core$IFn$_invoke$arity$1=d;c.cljs$core$IFn$_invoke$arity$2=e;c.cljs$core$IFn$_invoke$arity$3=m;c.cljs$core$IFn$_invoke$arity$variadic=n.cljs$core$IFn$_invoke$arity$variadic;return c}()},d=function(a,b,c){return function(){var d=null,e=function(d){return cljs.core.boolean$.call(null,function(){var e=
a.call(null,d);return cljs.core.truth_(e)?(e=b.call(null,d),cljs.core.truth_(e)?c.call(null,d):e):e}())},m=function(d,e){return cljs.core.boolean$.call(null,function(){var k=a.call(null,d);return cljs.core.truth_(k)&&(k=b.call(null,d),cljs.core.truth_(k)&&(k=c.call(null,d),cljs.core.truth_(k)&&(k=a.call(null,e),cljs.core.truth_(k))))?(k=b.call(null,e),cljs.core.truth_(k)?c.call(null,e):k):k}())},n=function(d,e,k){return cljs.core.boolean$.call(null,function(){var l=a.call(null,d);return cljs.core.truth_(l)&&
(l=b.call(null,d),cljs.core.truth_(l)&&(l=c.call(null,d),cljs.core.truth_(l)&&(l=a.call(null,e),cljs.core.truth_(l)&&(l=b.call(null,e),cljs.core.truth_(l)&&(l=c.call(null,e),cljs.core.truth_(l)&&(l=a.call(null,k),cljs.core.truth_(l)))))))?(l=b.call(null,k),cljs.core.truth_(l)?c.call(null,k):l):l}())},p=function(){var e=function(e,l,m,n){return cljs.core.boolean$.call(null,d.call(null,e,l,m)&&cljs.core.every_QMARK_.call(null,function(d){var e=a.call(null,d);return cljs.core.truth_(e)?(e=b.call(null,
d),cljs.core.truth_(e)?c.call(null,d):e):e},n))},l=function(a,b,c,d){var f=null;3<arguments.length&&(f=cljs.core.array_seq(Array.prototype.slice.call(arguments,3),0));return e.call(this,a,b,c,f)};l.cljs$lang$maxFixedArity=3;l.cljs$lang$applyTo=function(a){var b=cljs.core.first(a);a=cljs.core.next(a);var c=cljs.core.first(a);a=cljs.core.next(a);var d=cljs.core.first(a);a=cljs.core.rest(a);return e(b,c,d,a)};l.cljs$core$IFn$_invoke$arity$variadic=e;return l}(),d=function(a,b,c,d){switch(arguments.length){case 0:return!0;
case 1:return e.call(this,a);case 2:return m.call(this,a,b);case 3:return n.call(this,a,b,c);default:return p.cljs$core$IFn$_invoke$arity$variadic(a,b,c,cljs.core.array_seq(arguments,3))}throw Error("Invalid arity: "+arguments.length);};d.cljs$lang$maxFixedArity=3;d.cljs$lang$applyTo=p.cljs$lang$applyTo;d.cljs$core$IFn$_invoke$arity$0=function(){return!0};d.cljs$core$IFn$_invoke$arity$1=e;d.cljs$core$IFn$_invoke$arity$2=m;d.cljs$core$IFn$_invoke$arity$3=n;d.cljs$core$IFn$_invoke$arity$variadic=p.cljs$core$IFn$_invoke$arity$variadic;
return d}()},e=function(){var a=function(a,b,c,d){return function(a){return function(){var b=null,c=function(b){return cljs.core.every_QMARK_.call(null,function(a){return function(a){return a.call(null,b)}}(a),a)},d=function(b,c){return cljs.core.every_QMARK_.call(null,function(a){return function(a){var d=a.call(null,b);return cljs.core.truth_(d)?a.call(null,c):d}}(a),a)},e=function(b,c,d){return cljs.core.every_QMARK_.call(null,function(a){return function(a){var e=a.call(null,b);return cljs.core.truth_(e)?
(e=a.call(null,c),cljs.core.truth_(e)?a.call(null,d):e):e}}(a),a)},f=function(){var c=function(c,d,e,f){return cljs.core.boolean$.call(null,b.call(null,c,d,e)&&cljs.core.every_QMARK_.call(null,function(a){return function(a){return cljs.core.every_QMARK_.call(null,a,f)}}(a),a))},d=function(a,b,d,e){var f=null;3<arguments.length&&(f=cljs.core.array_seq(Array.prototype.slice.call(arguments,3),0));return c.call(this,a,b,d,f)};d.cljs$lang$maxFixedArity=3;d.cljs$lang$applyTo=function(a){var b=cljs.core.first(a);
a=cljs.core.next(a);var d=cljs.core.first(a);a=cljs.core.next(a);var e=cljs.core.first(a);a=cljs.core.rest(a);return c(b,d,e,a)};d.cljs$core$IFn$_invoke$arity$variadic=c;return d}(),b=function(a,b,g,h){switch(arguments.length){case 0:return!0;case 1:return c.call(this,a);case 2:return d.call(this,a,b);case 3:return e.call(this,a,b,g);default:return f.cljs$core$IFn$_invoke$arity$variadic(a,b,g,cljs.core.array_seq(arguments,3))}throw Error("Invalid arity: "+arguments.length);};b.cljs$lang$maxFixedArity=
3;b.cljs$lang$applyTo=f.cljs$lang$applyTo;b.cljs$core$IFn$_invoke$arity$0=function(){return!0};b.cljs$core$IFn$_invoke$arity$1=c;b.cljs$core$IFn$_invoke$arity$2=d;b.cljs$core$IFn$_invoke$arity$3=e;b.cljs$core$IFn$_invoke$arity$variadic=f.cljs$core$IFn$_invoke$arity$variadic;return b}()}(cljs.core.list_STAR_.call(null,a,b,c,d))},b=function(b,c,d,e){var g=null;3<arguments.length&&(g=cljs.core.array_seq(Array.prototype.slice.call(arguments,3),0));return a.call(this,b,c,d,g)};b.cljs$lang$maxFixedArity=
3;b.cljs$lang$applyTo=function(b){var c=cljs.core.first(b);b=cljs.core.next(b);var d=cljs.core.first(b);b=cljs.core.next(b);var e=cljs.core.first(b);b=cljs.core.rest(b);return a(c,d,e,b)};b.cljs$core$IFn$_invoke$arity$variadic=a;return b}(),a=function(a,g,h,k){switch(arguments.length){case 1:return b.call(this,a);case 2:return c.call(this,a,g);case 3:return d.call(this,a,g,h);default:return e.cljs$core$IFn$_invoke$arity$variadic(a,g,h,cljs.core.array_seq(arguments,3))}throw Error("Invalid arity: "+
arguments.length);};a.cljs$lang$maxFixedArity=3;a.cljs$lang$applyTo=e.cljs$lang$applyTo;a.cljs$core$IFn$_invoke$arity$1=b;a.cljs$core$IFn$_invoke$arity$2=c;a.cljs$core$IFn$_invoke$arity$3=d;a.cljs$core$IFn$_invoke$arity$variadic=e.cljs$core$IFn$_invoke$arity$variadic;return a}();
cljs.core.some_fn=function(){var a=null,b=function(a){return function(){var b=null,c=function(b){return a.call(null,b)},d=function(b,c){var d=a.call(null,b);return cljs.core.truth_(d)?d:a.call(null,c)},e=function(b,c,d){b=a.call(null,b);if(cljs.core.truth_(b))return b;c=a.call(null,c);return cljs.core.truth_(c)?c:a.call(null,d)},m=function(){var c=function(c,d,e,h){c=b.call(null,c,d,e);return cljs.core.truth_(c)?c:cljs.core.some.call(null,a,h)},d=function(a,b,d,e){var f=null;3<arguments.length&&(f=
cljs.core.array_seq(Array.prototype.slice.call(arguments,3),0));return c.call(this,a,b,d,f)};d.cljs$lang$maxFixedArity=3;d.cljs$lang$applyTo=function(a){var b=cljs.core.first(a);a=cljs.core.next(a);var d=cljs.core.first(a);a=cljs.core.next(a);var e=cljs.core.first(a);a=cljs.core.rest(a);return c(b,d,e,a)};d.cljs$core$IFn$_invoke$arity$variadic=c;return d}(),b=function(a,b,f,g){switch(arguments.length){case 0:return null;case 1:return c.call(this,a);case 2:return d.call(this,a,b);case 3:return e.call(this,
a,b,f);default:return m.cljs$core$IFn$_invoke$arity$variadic(a,b,f,cljs.core.array_seq(arguments,3))}throw Error("Invalid arity: "+arguments.length);};b.cljs$lang$maxFixedArity=3;b.cljs$lang$applyTo=m.cljs$lang$applyTo;b.cljs$core$IFn$_invoke$arity$0=function(){return null};b.cljs$core$IFn$_invoke$arity$1=c;b.cljs$core$IFn$_invoke$arity$2=d;b.cljs$core$IFn$_invoke$arity$3=e;b.cljs$core$IFn$_invoke$arity$variadic=m.cljs$core$IFn$_invoke$arity$variadic;return b}()},c=function(a,b){return function(){var c=
null,d=function(c){var d=a.call(null,c);return cljs.core.truth_(d)?d:b.call(null,c)},e=function(c,d){var e=a.call(null,c);if(cljs.core.truth_(e))return e;e=a.call(null,d);if(cljs.core.truth_(e))return e;e=b.call(null,c);return cljs.core.truth_(e)?e:b.call(null,d)},m=function(c,d,e){var h=a.call(null,c);if(cljs.core.truth_(h))return h;h=a.call(null,d);if(cljs.core.truth_(h))return h;h=a.call(null,e);if(cljs.core.truth_(h))return h;c=b.call(null,c);if(cljs.core.truth_(c))return c;d=b.call(null,d);return cljs.core.truth_(d)?
d:b.call(null,e)},n=function(){var d=function(d,e,k,l){d=c.call(null,d,e,k);return cljs.core.truth_(d)?d:cljs.core.some.call(null,function(c){return function(c){var d=a.call(null,c);return cljs.core.truth_(d)?d:b.call(null,c)}}(d),l)},e=function(a,b,c,e){var f=null;3<arguments.length&&(f=cljs.core.array_seq(Array.prototype.slice.call(arguments,3),0));return d.call(this,a,b,c,f)};e.cljs$lang$maxFixedArity=3;e.cljs$lang$applyTo=function(a){var b=cljs.core.first(a);a=cljs.core.next(a);var c=cljs.core.first(a);
a=cljs.core.next(a);var e=cljs.core.first(a);a=cljs.core.rest(a);return d(b,c,e,a)};e.cljs$core$IFn$_invoke$arity$variadic=d;return e}(),c=function(a,b,c,f){switch(arguments.length){case 0:return null;case 1:return d.call(this,a);case 2:return e.call(this,a,b);case 3:return m.call(this,a,b,c);default:return n.cljs$core$IFn$_invoke$arity$variadic(a,b,c,cljs.core.array_seq(arguments,3))}throw Error("Invalid arity: "+arguments.length);};c.cljs$lang$maxFixedArity=3;c.cljs$lang$applyTo=n.cljs$lang$applyTo;
c.cljs$core$IFn$_invoke$arity$0=function(){return null};c.cljs$core$IFn$_invoke$arity$1=d;c.cljs$core$IFn$_invoke$arity$2=e;c.cljs$core$IFn$_invoke$arity$3=m;c.cljs$core$IFn$_invoke$arity$variadic=n.cljs$core$IFn$_invoke$arity$variadic;return c}()},d=function(a,b,c){return function(){var d=null,e=function(d){var e=a.call(null,d);if(cljs.core.truth_(e))return e;e=b.call(null,d);return cljs.core.truth_(e)?e:c.call(null,d)},m=function(d,e){var k=a.call(null,d);if(cljs.core.truth_(k))return k;k=b.call(null,
d);if(cljs.core.truth_(k))return k;k=c.call(null,d);if(cljs.core.truth_(k))return k;k=a.call(null,e);if(cljs.core.truth_(k))return k;k=b.call(null,e);return cljs.core.truth_(k)?k:c.call(null,e)},n=function(d,e,k){var l=a.call(null,d);if(cljs.core.truth_(l))return l;l=b.call(null,d);if(cljs.core.truth_(l))return l;d=c.call(null,d);if(cljs.core.truth_(d))return d;d=a.call(null,e);if(cljs.core.truth_(d))return d;d=b.call(null,e);if(cljs.core.truth_(d))return d;e=c.call(null,e);if(cljs.core.truth_(e))return e;
e=a.call(null,k);if(cljs.core.truth_(e))return e;e=b.call(null,k);return cljs.core.truth_(e)?e:c.call(null,k)},p=function(){var e=function(e,l,m,n){e=d.call(null,e,l,m);return cljs.core.truth_(e)?e:cljs.core.some.call(null,function(d){return function(d){var e=a.call(null,d);if(cljs.core.truth_(e))return e;e=b.call(null,d);return cljs.core.truth_(e)?e:c.call(null,d)}}(e),n)},l=function(a,b,c,d){var f=null;3<arguments.length&&(f=cljs.core.array_seq(Array.prototype.slice.call(arguments,3),0));return e.call(this,
a,b,c,f)};l.cljs$lang$maxFixedArity=3;l.cljs$lang$applyTo=function(a){var b=cljs.core.first(a);a=cljs.core.next(a);var c=cljs.core.first(a);a=cljs.core.next(a);var d=cljs.core.first(a);a=cljs.core.rest(a);return e(b,c,d,a)};l.cljs$core$IFn$_invoke$arity$variadic=e;return l}(),d=function(a,b,c,d){switch(arguments.length){case 0:return null;case 1:return e.call(this,a);case 2:return m.call(this,a,b);case 3:return n.call(this,a,b,c);default:return p.cljs$core$IFn$_invoke$arity$variadic(a,b,c,cljs.core.array_seq(arguments,
3))}throw Error("Invalid arity: "+arguments.length);};d.cljs$lang$maxFixedArity=3;d.cljs$lang$applyTo=p.cljs$lang$applyTo;d.cljs$core$IFn$_invoke$arity$0=function(){return null};d.cljs$core$IFn$_invoke$arity$1=e;d.cljs$core$IFn$_invoke$arity$2=m;d.cljs$core$IFn$_invoke$arity$3=n;d.cljs$core$IFn$_invoke$arity$variadic=p.cljs$core$IFn$_invoke$arity$variadic;return d}()},e=function(){var a=function(a,b,c,d){return function(a){return function(){var b=null,c=function(b){return cljs.core.some.call(null,
function(a){return function(a){return a.call(null,b)}}(a),a)},d=function(b,c){return cljs.core.some.call(null,function(a){return function(a){var d=a.call(null,b);return cljs.core.truth_(d)?d:a.call(null,c)}}(a),a)},e=function(b,c,d){return cljs.core.some.call(null,function(a){return function(a){var e=a.call(null,b);if(cljs.core.truth_(e))return e;e=a.call(null,c);return cljs.core.truth_(e)?e:a.call(null,d)}}(a),a)},f=function(){var c=function(c,d,e,f){c=b.call(null,c,d,e);return cljs.core.truth_(c)?
c:cljs.core.some.call(null,function(a,b){return function(a){return cljs.core.some.call(null,a,f)}}(c,a),a)},d=function(a,b,d,e){var f=null;3<arguments.length&&(f=cljs.core.array_seq(Array.prototype.slice.call(arguments,3),0));return c.call(this,a,b,d,f)};d.cljs$lang$maxFixedArity=3;d.cljs$lang$applyTo=function(a){var b=cljs.core.first(a);a=cljs.core.next(a);var d=cljs.core.first(a);a=cljs.core.next(a);var e=cljs.core.first(a);a=cljs.core.rest(a);return c(b,d,e,a)};d.cljs$core$IFn$_invoke$arity$variadic=
c;return d}(),b=function(a,b,g,h){switch(arguments.length){case 0:return null;case 1:return c.call(this,a);case 2:return d.call(this,a,b);case 3:return e.call(this,a,b,g);default:return f.cljs$core$IFn$_invoke$arity$variadic(a,b,g,cljs.core.array_seq(arguments,3))}throw Error("Invalid arity: "+arguments.length);};b.cljs$lang$maxFixedArity=3;b.cljs$lang$applyTo=f.cljs$lang$applyTo;b.cljs$core$IFn$_invoke$arity$0=function(){return null};b.cljs$core$IFn$_invoke$arity$1=c;b.cljs$core$IFn$_invoke$arity$2=
d;b.cljs$core$IFn$_invoke$arity$3=e;b.cljs$core$IFn$_invoke$arity$variadic=f.cljs$core$IFn$_invoke$arity$variadic;return b}()}(cljs.core.list_STAR_.call(null,a,b,c,d))},b=function(b,c,d,e){var g=null;3<arguments.length&&(g=cljs.core.array_seq(Array.prototype.slice.call(arguments,3),0));return a.call(this,b,c,d,g)};b.cljs$lang$maxFixedArity=3;b.cljs$lang$applyTo=function(b){var c=cljs.core.first(b);b=cljs.core.next(b);var d=cljs.core.first(b);b=cljs.core.next(b);var e=cljs.core.first(b);b=cljs.core.rest(b);
return a(c,d,e,b)};b.cljs$core$IFn$_invoke$arity$variadic=a;return b}(),a=function(a,g,h,k){switch(arguments.length){case 1:return b.call(this,a);case 2:return c.call(this,a,g);case 3:return d.call(this,a,g,h);default:return e.cljs$core$IFn$_invoke$arity$variadic(a,g,h,cljs.core.array_seq(arguments,3))}throw Error("Invalid arity: "+arguments.length);};a.cljs$lang$maxFixedArity=3;a.cljs$lang$applyTo=e.cljs$lang$applyTo;a.cljs$core$IFn$_invoke$arity$1=b;a.cljs$core$IFn$_invoke$arity$2=c;a.cljs$core$IFn$_invoke$arity$3=
d;a.cljs$core$IFn$_invoke$arity$variadic=e.cljs$core$IFn$_invoke$arity$variadic;return a}();
cljs.core.map=function(){var a=null,b=function(b,c){return new cljs.core.LazySeq(null,function(){var d=cljs.core.seq.call(null,c);if(d){if(cljs.core.chunked_seq_QMARK_.call(null,d)){for(var e=cljs.core.chunk_first.call(null,d),l=cljs.core.count.call(null,e),m=cljs.core.chunk_buffer.call(null,l),n=0;;)if(n<l)cljs.core.chunk_append.call(null,m,b.call(null,cljs.core._nth.call(null,e,n))),n+=1;else break;return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,m),a.call(null,b,cljs.core.chunk_rest.call(null,
d)))}return cljs.core.cons.call(null,b.call(null,cljs.core.first.call(null,d)),a.call(null,b,cljs.core.rest.call(null,d)))}return null},null,null)},c=function(b,c,d){return new cljs.core.LazySeq(null,function(){var e=cljs.core.seq.call(null,c),l=cljs.core.seq.call(null,d);return e&&l?cljs.core.cons.call(null,b.call(null,cljs.core.first.call(null,e),cljs.core.first.call(null,l)),a.call(null,b,cljs.core.rest.call(null,e),cljs.core.rest.call(null,l))):null},null,null)},d=function(b,c,d,e){return new cljs.core.LazySeq(null,
function(){var l=cljs.core.seq.call(null,c),m=cljs.core.seq.call(null,d),n=cljs.core.seq.call(null,e);return l&&m&&n?cljs.core.cons.call(null,b.call(null,cljs.core.first.call(null,l),cljs.core.first.call(null,m),cljs.core.first.call(null,n)),a.call(null,b,cljs.core.rest.call(null,l),cljs.core.rest.call(null,m),cljs.core.rest.call(null,n))):null},null,null)},e=function(){var b=function(b,c,d,e,f){var g=function r(b){return new cljs.core.LazySeq(null,function(){var c=a.call(null,cljs.core.seq,b);return cljs.core.every_QMARK_.call(null,
cljs.core.identity,c)?cljs.core.cons.call(null,a.call(null,cljs.core.first,c),r.call(null,a.call(null,cljs.core.rest,c))):null},null,null)};return a.call(null,function(a){return function(a){return cljs.core.apply.call(null,b,a)}}(g),g.call(null,cljs.core.conj.call(null,f,e,d,c)))},c=function(a,c,d,e,g){var p=null;4<arguments.length&&(p=cljs.core.array_seq(Array.prototype.slice.call(arguments,4),0));return b.call(this,a,c,d,e,p)};c.cljs$lang$maxFixedArity=4;c.cljs$lang$applyTo=function(a){var c=cljs.core.first(a);
a=cljs.core.next(a);var d=cljs.core.first(a);a=cljs.core.next(a);var e=cljs.core.first(a);a=cljs.core.next(a);var g=cljs.core.first(a);a=cljs.core.rest(a);return b(c,d,e,g,a)};c.cljs$core$IFn$_invoke$arity$variadic=b;return c}(),a=function(a,g,h,k,l){switch(arguments.length){case 2:return b.call(this,a,g);case 3:return c.call(this,a,g,h);case 4:return d.call(this,a,g,h,k);default:return e.cljs$core$IFn$_invoke$arity$variadic(a,g,h,k,cljs.core.array_seq(arguments,4))}throw Error("Invalid arity: "+
arguments.length);};a.cljs$lang$maxFixedArity=4;a.cljs$lang$applyTo=e.cljs$lang$applyTo;a.cljs$core$IFn$_invoke$arity$2=b;a.cljs$core$IFn$_invoke$arity$3=c;a.cljs$core$IFn$_invoke$arity$4=d;a.cljs$core$IFn$_invoke$arity$variadic=e.cljs$core$IFn$_invoke$arity$variadic;return a}();
cljs.core.take=function take(b,c){return new cljs.core.LazySeq(null,function(){if(0<b){var d=cljs.core.seq.call(null,c);return d?cljs.core.cons.call(null,cljs.core.first.call(null,d),take.call(null,b-1,cljs.core.rest.call(null,d))):null}return null},null,null)};
cljs.core.drop=function(a,b){return new cljs.core.LazySeq(null,function(c){return function(){return c.call(null,a,b)}}(function(a,b){for(;;){var e=cljs.core.seq.call(null,b);if(0<a&&e){var f=a-1,e=cljs.core.rest.call(null,e);a=f;b=e}else return e}}),null,null)};
cljs.core.drop_last=function(){var a=null,b=function(b){return a.call(null,1,b)},c=function(a,b){return cljs.core.map.call(null,function(a,b){return a},b,cljs.core.drop.call(null,a,b))},a=function(a,e){switch(arguments.length){case 1:return b.call(this,a);case 2:return c.call(this,a,e)}throw Error("Invalid arity: "+arguments.length);};a.cljs$core$IFn$_invoke$arity$1=b;a.cljs$core$IFn$_invoke$arity$2=c;return a}();
cljs.core.take_last=function(a,b){for(var c=cljs.core.seq.call(null,b),d=cljs.core.seq.call(null,cljs.core.drop.call(null,a,b));;)if(d)c=cljs.core.next.call(null,c),d=cljs.core.next.call(null,d);else return c};
cljs.core.drop_while=function(a,b){return new cljs.core.LazySeq(null,function(c){return function(){return c.call(null,a,b)}}(function(a,b){for(;;){var e=cljs.core.seq.call(null,b);if(cljs.core.truth_(function(){var b=e;return b?a.call(null,cljs.core.first.call(null,e)):b}())){var f=a,g=cljs.core.rest.call(null,e);a=f;b=g}else return e}}),null,null)};
cljs.core.cycle=function cycle(b){return new cljs.core.LazySeq(null,function(){var c=cljs.core.seq.call(null,b);return c?cljs.core.concat.call(null,c,cycle.call(null,c)):null},null,null)};cljs.core.split_at=function(a,b){return new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.take.call(null,a,b),cljs.core.drop.call(null,a,b)],null)};
cljs.core.repeat=function(){var a=null,b=function(b){return new cljs.core.LazySeq(null,function(){return cljs.core.cons.call(null,b,a.call(null,b))},null,null)},c=function(b,c){return cljs.core.take.call(null,b,a.call(null,c))},a=function(a,e){switch(arguments.length){case 1:return b.call(this,a);case 2:return c.call(this,a,e)}throw Error("Invalid arity: "+arguments.length);};a.cljs$core$IFn$_invoke$arity$1=b;a.cljs$core$IFn$_invoke$arity$2=c;return a}();
cljs.core.replicate=function(a,b){return cljs.core.take.call(null,a,cljs.core.repeat.call(null,b))};
cljs.core.repeatedly=function(){var a=null,b=function(b){return new cljs.core.LazySeq(null,function(){return cljs.core.cons.call(null,b.call(null),a.call(null,b))},null,null)},c=function(b,c){return cljs.core.take.call(null,b,a.call(null,c))},a=function(a,e){switch(arguments.length){case 1:return b.call(this,a);case 2:return c.call(this,a,e)}throw Error("Invalid arity: "+arguments.length);};a.cljs$core$IFn$_invoke$arity$1=b;a.cljs$core$IFn$_invoke$arity$2=c;return a}();
cljs.core.iterate=function iterate(b,c){return cljs.core.cons.call(null,c,new cljs.core.LazySeq(null,function(){return iterate.call(null,b,b.call(null,c))},null,null))};
cljs.core.interleave=function(){var a=null,b=function(b,c){return new cljs.core.LazySeq(null,function(){var f=cljs.core.seq.call(null,b),g=cljs.core.seq.call(null,c);return f&&g?cljs.core.cons.call(null,cljs.core.first.call(null,f),cljs.core.cons.call(null,cljs.core.first.call(null,g),a.call(null,cljs.core.rest.call(null,f),cljs.core.rest.call(null,g)))):null},null,null)},c=function(){var b=function(b,c,d){return new cljs.core.LazySeq(null,function(){var e=cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,
d,c,b));return cljs.core.every_QMARK_.call(null,cljs.core.identity,e)?cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,e),cljs.core.apply.call(null,a,cljs.core.map.call(null,cljs.core.rest,e))):null},null,null)},c=function(a,c,e){var k=null;2<arguments.length&&(k=cljs.core.array_seq(Array.prototype.slice.call(arguments,2),0));return b.call(this,a,c,k)};c.cljs$lang$maxFixedArity=2;c.cljs$lang$applyTo=function(a){var c=cljs.core.first(a);a=cljs.core.next(a);var e=cljs.core.first(a);
a=cljs.core.rest(a);return b(c,e,a)};c.cljs$core$IFn$_invoke$arity$variadic=b;return c}(),a=function(a,e,f){switch(arguments.length){case 2:return b.call(this,a,e);default:return c.cljs$core$IFn$_invoke$arity$variadic(a,e,cljs.core.array_seq(arguments,2))}throw Error("Invalid arity: "+arguments.length);};a.cljs$lang$maxFixedArity=2;a.cljs$lang$applyTo=c.cljs$lang$applyTo;a.cljs$core$IFn$_invoke$arity$2=b;a.cljs$core$IFn$_invoke$arity$variadic=c.cljs$core$IFn$_invoke$arity$variadic;return a}();
cljs.core.interpose=function(a,b){return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,a),b))};
cljs.core.flatten1=function(a){return function c(a,e){return new cljs.core.LazySeq(null,function(){var f=cljs.core.seq.call(null,a);return f?cljs.core.cons.call(null,cljs.core.first.call(null,f),c.call(null,cljs.core.rest.call(null,f),e)):cljs.core.seq.call(null,e)?c.call(null,cljs.core.first.call(null,e),cljs.core.rest.call(null,e)):null},null,null)}.call(null,null,a)};
cljs.core.mapcat=function(){var a=null,b=function(a,b){return cljs.core.flatten1.call(null,cljs.core.map.call(null,a,b))},c=function(){var a=function(a,b,c){return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,a,b,c))},b=function(b,c,e){var k=null;2<arguments.length&&(k=cljs.core.array_seq(Array.prototype.slice.call(arguments,2),0));return a.call(this,b,c,k)};b.cljs$lang$maxFixedArity=2;b.cljs$lang$applyTo=function(b){var c=cljs.core.first(b);b=cljs.core.next(b);var e=cljs.core.first(b);
b=cljs.core.rest(b);return a(c,e,b)};b.cljs$core$IFn$_invoke$arity$variadic=a;return b}(),a=function(a,e,f){switch(arguments.length){case 2:return b.call(this,a,e);default:return c.cljs$core$IFn$_invoke$arity$variadic(a,e,cljs.core.array_seq(arguments,2))}throw Error("Invalid arity: "+arguments.length);};a.cljs$lang$maxFixedArity=2;a.cljs$lang$applyTo=c.cljs$lang$applyTo;a.cljs$core$IFn$_invoke$arity$2=b;a.cljs$core$IFn$_invoke$arity$variadic=c.cljs$core$IFn$_invoke$arity$variadic;return a}();
cljs.core.filter=function filter(b,c){return new cljs.core.LazySeq(null,function(){var d=cljs.core.seq.call(null,c);if(d){if(cljs.core.chunked_seq_QMARK_.call(null,d)){for(var e=cljs.core.chunk_first.call(null,d),f=cljs.core.count.call(null,e),g=cljs.core.chunk_buffer.call(null,f),h=0;;)if(h<f)cljs.core.truth_(b.call(null,cljs.core._nth.call(null,e,h)))&&cljs.core.chunk_append.call(null,g,cljs.core._nth.call(null,e,h)),h+=1;else break;return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,
g),filter.call(null,b,cljs.core.chunk_rest.call(null,d)))}e=cljs.core.first.call(null,d);d=cljs.core.rest.call(null,d);return cljs.core.truth_(b.call(null,e))?cljs.core.cons.call(null,e,filter.call(null,b,d)):filter.call(null,b,d)}return null},null,null)};cljs.core.remove=function(a,b){return cljs.core.filter.call(null,cljs.core.complement.call(null,a),b)};
cljs.core.tree_seq=function(a,b,c){return function e(c){return new cljs.core.LazySeq(null,function(){return cljs.core.cons.call(null,c,cljs.core.truth_(a.call(null,c))?cljs.core.mapcat.call(null,e,b.call(null,c)):null)},null,null)}.call(null,c)};cljs.core.flatten=function(a){return cljs.core.filter.call(null,function(a){return!cljs.core.sequential_QMARK_.call(null,a)},cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,a)))};
cljs.core.into=function(a,b){return null!=a?a&&(a.cljs$lang$protocol_mask$partition1$&4||a.cljs$core$IEditableCollection$)?cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core.transient$.call(null,a),b)):cljs.core.reduce.call(null,cljs.core._conj,a,b):cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,b)};
cljs.core.mapv=function(){var a=null,b=function(a,b){return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,function(b,c){return cljs.core.conj_BANG_.call(null,b,a.call(null,c))},cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),b))},c=function(a,b,c){return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,a,b,c))},d=function(a,b,c,d){return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,a,b,c,d))},
e=function(){var a=function(a,b,c,d,e){return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,a,b,c,d,e))},b=function(b,c,d,e,g){var p=null;4<arguments.length&&(p=cljs.core.array_seq(Array.prototype.slice.call(arguments,4),0));return a.call(this,b,c,d,e,p)};b.cljs$lang$maxFixedArity=4;b.cljs$lang$applyTo=function(b){var c=cljs.core.first(b);b=cljs.core.next(b);var d=cljs.core.first(b);b=cljs.core.next(b);var e=cljs.core.first(b);b=cljs.core.next(b);
var g=cljs.core.first(b);b=cljs.core.rest(b);return a(c,d,e,g,b)};b.cljs$core$IFn$_invoke$arity$variadic=a;return b}(),a=function(a,g,h,k,l){switch(arguments.length){case 2:return b.call(this,a,g);case 3:return c.call(this,a,g,h);case 4:return d.call(this,a,g,h,k);default:return e.cljs$core$IFn$_invoke$arity$variadic(a,g,h,k,cljs.core.array_seq(arguments,4))}throw Error("Invalid arity: "+arguments.length);};a.cljs$lang$maxFixedArity=4;a.cljs$lang$applyTo=e.cljs$lang$applyTo;a.cljs$core$IFn$_invoke$arity$2=
b;a.cljs$core$IFn$_invoke$arity$3=c;a.cljs$core$IFn$_invoke$arity$4=d;a.cljs$core$IFn$_invoke$arity$variadic=e.cljs$core$IFn$_invoke$arity$variadic;return a}();cljs.core.filterv=function(a,b){return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,function(b,d){return cljs.core.truth_(a.call(null,d))?cljs.core.conj_BANG_.call(null,b,d):b},cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),b))};
cljs.core.partition=function(){var a=null,b=function(b,c){return a.call(null,b,b,c)},c=function(b,c,d){return new cljs.core.LazySeq(null,function(){var h=cljs.core.seq.call(null,d);if(h){var k=cljs.core.take.call(null,b,h);return b===cljs.core.count.call(null,k)?cljs.core.cons.call(null,k,a.call(null,b,c,cljs.core.drop.call(null,c,h))):null}return null},null,null)},d=function(b,c,d,h){return new cljs.core.LazySeq(null,function(){var k=cljs.core.seq.call(null,h);if(k){var l=cljs.core.take.call(null,
b,k);return b===cljs.core.count.call(null,l)?cljs.core.cons.call(null,l,a.call(null,b,c,d,cljs.core.drop.call(null,c,k))):cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.take.call(null,b,cljs.core.concat.call(null,l,d)))}return null},null,null)},a=function(a,f,g,h){switch(arguments.length){case 2:return b.call(this,a,f);case 3:return c.call(this,a,f,g);case 4:return d.call(this,a,f,g,h)}throw Error("Invalid arity: "+arguments.length);};a.cljs$core$IFn$_invoke$arity$2=b;a.cljs$core$IFn$_invoke$arity$3=
c;a.cljs$core$IFn$_invoke$arity$4=d;return a}();
cljs.core.get_in=function(){var a=null,b=function(b,c){return a.call(null,b,c,null)},c=function(a,b,c){var g=cljs.core.lookup_sentinel;for(b=cljs.core.seq.call(null,b);;)if(b){var h=a;if(h?h.cljs$lang$protocol_mask$partition0$&256||h.cljs$core$ILookup$||(h.cljs$lang$protocol_mask$partition0$?0:cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,h)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,h)){a=cljs.core.get.call(null,a,cljs.core.first.call(null,b),g);if(g===a)return c;
b=cljs.core.next.call(null,b)}else return c}else return a},a=function(a,e,f){switch(arguments.length){case 2:return b.call(this,a,e);case 3:return c.call(this,a,e,f)}throw Error("Invalid arity: "+arguments.length);};a.cljs$core$IFn$_invoke$arity$2=b;a.cljs$core$IFn$_invoke$arity$3=c;return a}();
cljs.core.assoc_in=function assoc_in(b,c,d){var e=cljs.core.nth.call(null,c,0,null);return(c=cljs.core.nthnext.call(null,c,1))?cljs.core.assoc.call(null,b,e,assoc_in.call(null,cljs.core.get.call(null,b,e),c,d)):cljs.core.assoc.call(null,b,e,d)};
cljs.core.update_in=function(){var a=null,b=function(b,c,d){var e=cljs.core.nth.call(null,c,0,null);return(c=cljs.core.nthnext.call(null,c,1))?cljs.core.assoc.call(null,b,e,a.call(null,cljs.core.get.call(null,b,e),c,d)):cljs.core.assoc.call(null,b,e,d.call(null,cljs.core.get.call(null,b,e)))},c=function(b,c,d,e){var f=cljs.core.nth.call(null,c,0,null);return(c=cljs.core.nthnext.call(null,c,1))?cljs.core.assoc.call(null,b,f,a.call(null,cljs.core.get.call(null,b,f),c,d,e)):cljs.core.assoc.call(null,
b,f,d.call(null,cljs.core.get.call(null,b,f),e))},d=function(b,c,d,e,f){var n=cljs.core.nth.call(null,c,0,null);return(c=cljs.core.nthnext.call(null,c,1))?cljs.core.assoc.call(null,b,n,a.call(null,cljs.core.get.call(null,b,n),c,d,e,f)):cljs.core.assoc.call(null,b,n,d.call(null,cljs.core.get.call(null,b,n),e,f))},e=function(b,c,d,e,f,n){var p=cljs.core.nth.call(null,c,0,null);return(c=cljs.core.nthnext.call(null,c,1))?cljs.core.assoc.call(null,b,p,a.call(null,cljs.core.get.call(null,b,p),c,d,e,f,n)):
cljs.core.assoc.call(null,b,p,d.call(null,cljs.core.get.call(null,b,p),e,f,n))},f=function(){var b=function(b,c,d,e,f,g,h){var s=cljs.core.nth.call(null,c,0,null);return(c=cljs.core.nthnext.call(null,c,1))?cljs.core.assoc.call(null,b,s,cljs.core.apply.call(null,a,cljs.core.get.call(null,b,s),c,d,e,f,g,h)):cljs.core.assoc.call(null,b,s,cljs.core.apply.call(null,d,cljs.core.get.call(null,b,s),e,f,g,h))},c=function(a,c,d,e,f,h,r){var s=null;6<arguments.length&&(s=cljs.core.array_seq(Array.prototype.slice.call(arguments,
6),0));return b.call(this,a,c,d,e,f,h,s)};c.cljs$lang$maxFixedArity=6;c.cljs$lang$applyTo=function(a){var c=cljs.core.first(a);a=cljs.core.next(a);var d=cljs.core.first(a);a=cljs.core.next(a);var e=cljs.core.first(a);a=cljs.core.next(a);var f=cljs.core.first(a);a=cljs.core.next(a);var h=cljs.core.first(a);a=cljs.core.next(a);var r=cljs.core.first(a);a=cljs.core.rest(a);return b(c,d,e,f,h,r,a)};c.cljs$core$IFn$_invoke$arity$variadic=b;return c}(),a=function(a,h,k,l,m,n,p){switch(arguments.length){case 3:return b.call(this,
a,h,k);case 4:return c.call(this,a,h,k,l);case 5:return d.call(this,a,h,k,l,m);case 6:return e.call(this,a,h,k,l,m,n);default:return f.cljs$core$IFn$_invoke$arity$variadic(a,h,k,l,m,n,cljs.core.array_seq(arguments,6))}throw Error("Invalid arity: "+arguments.length);};a.cljs$lang$maxFixedArity=6;a.cljs$lang$applyTo=f.cljs$lang$applyTo;a.cljs$core$IFn$_invoke$arity$3=b;a.cljs$core$IFn$_invoke$arity$4=c;a.cljs$core$IFn$_invoke$arity$5=d;a.cljs$core$IFn$_invoke$arity$6=e;a.cljs$core$IFn$_invoke$arity$variadic=
f.cljs$core$IFn$_invoke$arity$variadic;return a}();cljs.core.VectorNode=function(a,b){this.edit=a;this.arr=b};cljs.core.VectorNode.cljs$lang$type=!0;cljs.core.VectorNode.cljs$lang$ctorStr="cljs.core/VectorNode";cljs.core.VectorNode.cljs$lang$ctorPrWriter=function(a,b,c){return cljs.core._write.call(null,b,"cljs.core/VectorNode")};cljs.core.__GT_VectorNode=function(a,b){return new cljs.core.VectorNode(a,b)};
cljs.core.pv_fresh_node=function(a){return new cljs.core.VectorNode(a,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null])};cljs.core.pv_aget=function(a,b){return a.arr[b]};cljs.core.pv_aset=function(a,b,c){return a.arr[b]=c};cljs.core.pv_clone_node=function(a){return new cljs.core.VectorNode(a.edit,cljs.core.aclone.call(null,a.arr))};
cljs.core.tail_off=function(a){a=a.cnt;return 32>a?0:a-1>>>5<<5};cljs.core.new_path=function(a,b,c){for(;;){if(0===b)return c;var d=cljs.core.pv_fresh_node.call(null,a);cljs.core.pv_aset.call(null,d,0,c);c=d;b-=5}};
cljs.core.push_tail=function push_tail(b,c,d,e){var f=cljs.core.pv_clone_node.call(null,d),g=b.cnt-1>>>c&31;5===c?cljs.core.pv_aset.call(null,f,g,e):(d=cljs.core.pv_aget.call(null,d,g),b=null!=d?push_tail.call(null,b,c-5,d,e):cljs.core.new_path.call(null,null,c-5,e),cljs.core.pv_aset.call(null,f,g,b));return f};
cljs.core.vector_index_out_of_bounds=function(a,b){throw Error("No item "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)+" in vector of length "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b));};cljs.core.first_array_for_longvec=function(a){var b=a.root;for(a=a.shift;;)if(0<a)b=cljs.core.pv_aget.call(null,b,0),a-=5;else return b.arr};
cljs.core.unchecked_array_for=function(a,b){if(b>=cljs.core.tail_off.call(null,a))return a.tail;for(var c=a.root,d=a.shift;;)if(0<d)c=cljs.core.pv_aget.call(null,c,b>>>d&31),d-=5;else return c.arr};cljs.core.array_for=function(a,b){return 0<=b&&b<a.cnt?cljs.core.unchecked_array_for.call(null,a,b):cljs.core.vector_index_out_of_bounds.call(null,b,a.cnt)};
cljs.core.do_assoc=function do_assoc(b,c,d,e,f){var g=cljs.core.pv_clone_node.call(null,d);if(0===c)cljs.core.pv_aset.call(null,g,e&31,f);else{var h=e>>>c&31;cljs.core.pv_aset.call(null,g,h,do_assoc.call(null,b,c-5,cljs.core.pv_aget.call(null,d,h),e,f))}return g};
cljs.core.pop_tail=function pop_tail(b,c,d){var e=b.cnt-2>>>c&31;if(5<c){b=pop_tail.call(null,b,c-5,cljs.core.pv_aget.call(null,d,e));if(null==b&&0===e)return null;d=cljs.core.pv_clone_node.call(null,d);cljs.core.pv_aset.call(null,d,e,b);return d}return 0===e?null:new cljs.core.Keyword(null,"else","else",1017020587)?(d=cljs.core.pv_clone_node.call(null,d),cljs.core.pv_aset.call(null,d,e,null),d):null};
cljs.core.PersistentVector=function(a,b,c,d,e,f){this.meta=a;this.cnt=b;this.shift=c;this.root=d;this.tail=e;this.__hash=f;this.cljs$lang$protocol_mask$partition1$=8196;this.cljs$lang$protocol_mask$partition0$=167668511};cljs.core.PersistentVector.cljs$lang$type=!0;cljs.core.PersistentVector.cljs$lang$ctorStr="cljs.core/PersistentVector";cljs.core.PersistentVector.cljs$lang$ctorPrWriter=function(a,b,c){return cljs.core._write.call(null,b,"cljs.core/PersistentVector")};
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1=function(a){return new cljs.core.TransientVector(this.cnt,this.shift,cljs.core.tv_editable_root.call(null,this.root),cljs.core.tv_editable_tail.call(null,this.tail))};cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1=function(a){a=this.__hash;return null!=a?a:this.__hash=a=cljs.core.hash_coll.call(null,this)};
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2=function(a,b){return cljs.core._lookup.call(null,this,b,null)};cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3=function(a,b,c){return"number"===typeof b?cljs.core._nth.call(null,this,b,c):c};
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3=function(a,b,c){if("number"===typeof b)return cljs.core._assoc_n.call(null,this,b,c);throw Error("Vector's key for assoc must be a number.");};cljs.core.PersistentVector.prototype.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.cljs$core$IIndexed$_nth$arity$2(null,c);case 3:return this.cljs$core$IIndexed$_nth$arity$3(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();
cljs.core.PersistentVector.prototype.apply=function(a,b){return this.call.apply(this,[this].concat(cljs.core.aclone.call(null,b)))};cljs.core.PersistentVector.prototype.cljs$core$IFn$_invoke$arity$1=function(a){return this.cljs$core$IIndexed$_nth$arity$2(null,a)};cljs.core.PersistentVector.prototype.cljs$core$IFn$_invoke$arity$2=function(a,b){return this.cljs$core$IIndexed$_nth$arity$3(null,a,b)};
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3=function(a,b,c){a=[0,c];for(c=0;;)if(c<this.cnt){var d=cljs.core.unchecked_array_for.call(null,this,c),e=d.length;a:{for(var f=0,g=a[1];;)if(f<e)if(g=b.call(null,g,f+c,d[f]),cljs.core.reduced_QMARK_.call(null,g)){d=g;break a}else f+=1;else{a[0]=e;d=a[1]=g;break a}d=void 0}if(cljs.core.reduced_QMARK_.call(null,d))return cljs.core.deref.call(null,d);c+=a[0]}else return a[1]};
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2=function(a,b){if(32>this.cnt-cljs.core.tail_off.call(null,this)){for(var c=this.tail.length,d=Array(c+1),e=0;;)if(e<c)d[e]=this.tail[e],e+=1;else break;d[c]=b;return new cljs.core.PersistentVector(this.meta,this.cnt+1,this.shift,this.root,d,null)}c=(d=this.cnt>>>5>1<<this.shift)?this.shift+5:this.shift;d?(d=cljs.core.pv_fresh_node.call(null,null),cljs.core.pv_aset.call(null,d,0,this.root),cljs.core.pv_aset.call(null,d,1,cljs.core.new_path.call(null,
null,this.shift,new cljs.core.VectorNode(null,this.tail)))):d=cljs.core.push_tail.call(null,this,this.shift,this.root,new cljs.core.VectorNode(null,this.tail));return new cljs.core.PersistentVector(this.meta,this.cnt+1,c,d,[b],null)};cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1=function(a){return 0<this.cnt?new cljs.core.RSeq(this,this.cnt-1,null):null};
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1=function(a){return cljs.core._nth.call(null,this,0)};cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1=function(a){return cljs.core._nth.call(null,this,1)};cljs.core.PersistentVector.prototype.toString=function(){return cljs.core.pr_str_STAR_.call(null,this)};cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2=function(a,b){return cljs.core.ci_reduce.call(null,this,b)};
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3=function(a,b,c){return cljs.core.ci_reduce.call(null,this,b,c)};cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1=function(a){return 0===this.cnt?null:32>=this.cnt?new cljs.core.IndexedSeq(this.tail,0):new cljs.core.Keyword(null,"else","else",1017020587)?cljs.core.chunked_seq.call(null,this,cljs.core.first_array_for_longvec.call(null,this),0,0):null};
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1=function(a){return this.cnt};cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1=function(a){return 0<this.cnt?cljs.core._nth.call(null,this,this.cnt-1):null};
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1=function(a){if(0===this.cnt)throw Error("Can't pop empty vector");if(1===this.cnt)return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this.meta);if(1<this.cnt-cljs.core.tail_off.call(null,this))return new cljs.core.PersistentVector(this.meta,this.cnt-1,this.shift,this.root,this.tail.slice(0,-1),null);if(new cljs.core.Keyword(null,"else","else",1017020587)){a=cljs.core.unchecked_array_for.call(null,this,this.cnt-
2);var b=cljs.core.pop_tail.call(null,this,this.shift,this.root),b=null==b?cljs.core.PersistentVector.EMPTY_NODE:b,c=this.cnt-1;return 5<this.shift&&null==cljs.core.pv_aget.call(null,b,1)?new cljs.core.PersistentVector(this.meta,c,this.shift-5,cljs.core.pv_aget.call(null,b,0),a,null):new cljs.core.PersistentVector(this.meta,c,this.shift,b,a,null)}return null};
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3=function(a,b,c){if(0<=b&&b<this.cnt)return cljs.core.tail_off.call(null,this)<=b?(a=cljs.core.aclone.call(null,this.tail),a[b&31]=c,new cljs.core.PersistentVector(this.meta,this.cnt,this.shift,this.root,a,null)):new cljs.core.PersistentVector(this.meta,this.cnt,this.shift,cljs.core.do_assoc.call(null,this,this.shift,this.root,b,c),this.tail,null);if(b===this.cnt)return cljs.core._conj.call(null,this,c);if(new cljs.core.Keyword(null,
"else","else",1017020587))throw Error("Index "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)+" out of bounds  [0,"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this.cnt)+"]");return null};cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2=function(a,b){return cljs.core.equiv_sequential.call(null,this,b)};cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2=function(a,b){return new cljs.core.PersistentVector(b,this.cnt,this.shift,this.root,this.tail,this.__hash)};
cljs.core.PersistentVector.prototype.cljs$core$ICloneable$_clone$arity$1=function(a){return new cljs.core.PersistentVector(this.meta,this.cnt,this.shift,this.root,this.tail,this.__hash)};cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1=function(a){return this.meta};cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2=function(a,b){return cljs.core.array_for.call(null,this,b)[b&31]};
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3=function(a,b,c){return 0<=b&&b<this.cnt?cljs.core.unchecked_array_for.call(null,this,b)[b&31]:c};cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1=function(a){return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this.meta)};cljs.core.__GT_PersistentVector=function(a,b,c,d,e,f){return new cljs.core.PersistentVector(a,b,c,d,e,f)};
cljs.core.PersistentVector.EMPTY_NODE=new cljs.core.VectorNode(null,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]);cljs.core.PersistentVector.EMPTY=new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0);
cljs.core.PersistentVector.fromArray=function(a,b){var c=a.length,d=b?a:cljs.core.aclone.call(null,a);if(32>c)return new cljs.core.PersistentVector(null,c,5,cljs.core.PersistentVector.EMPTY_NODE,d,null);for(var e=d.slice(0,32),f=new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,e,null),e=32,g=cljs.core._as_transient.call(null,f);;)if(e<c)f=e+1,g=cljs.core.conj_BANG_.call(null,g,d[e]),e=f;else return cljs.core.persistent_BANG_.call(null,g)};
cljs.core.vec=function(a){return cljs.core._persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core._as_transient.call(null,cljs.core.PersistentVector.EMPTY),a))};
cljs.core.vector=function(){var a=function(a){return a instanceof cljs.core.IndexedSeq&&0===a.i?cljs.core.PersistentVector.fromArray.call(null,a.arr,!0):cljs.core.vec.call(null,a)},b=function(b){var d=null;0<arguments.length&&(d=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0));return a.call(this,d)};b.cljs$lang$maxFixedArity=0;b.cljs$lang$applyTo=function(b){b=cljs.core.seq(b);return a(b)};b.cljs$core$IFn$_invoke$arity$variadic=a;return b}();
cljs.core.ChunkedSeq=function(a,b,c,d,e,f){this.vec=a;this.node=b;this.i=c;this.off=d;this.meta=e;this.__hash=f;this.cljs$lang$protocol_mask$partition0$=32243948;this.cljs$lang$protocol_mask$partition1$=1536};cljs.core.ChunkedSeq.cljs$lang$type=!0;cljs.core.ChunkedSeq.cljs$lang$ctorStr="cljs.core/ChunkedSeq";cljs.core.ChunkedSeq.cljs$lang$ctorPrWriter=function(a,b,c){return cljs.core._write.call(null,b,"cljs.core/ChunkedSeq")};
cljs.core.ChunkedSeq.prototype.cljs$core$IHash$_hash$arity$1=function(a){a=this.__hash;return null!=a?a:this.__hash=a=cljs.core.hash_coll.call(null,this)};cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1=function(a){return this.off+1<this.node.length?(a=cljs.core.chunked_seq.call(null,this.vec,this.node,this.i,this.off+1),null==a?null:a):cljs.core._chunked_next.call(null,this)};
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2=function(a,b){return cljs.core.cons.call(null,b,this)};cljs.core.ChunkedSeq.prototype.toString=function(){return cljs.core.pr_str_STAR_.call(null,this)};cljs.core.ChunkedSeq.prototype.cljs$core$IReduce$_reduce$arity$2=function(a,b){return cljs.core.ci_reduce.call(null,cljs.core.subvec.call(null,this.vec,this.i+this.off,cljs.core.count.call(null,this.vec)),b)};
cljs.core.ChunkedSeq.prototype.cljs$core$IReduce$_reduce$arity$3=function(a,b,c){return cljs.core.ci_reduce.call(null,cljs.core.subvec.call(null,this.vec,this.i+this.off,cljs.core.count.call(null,this.vec)),b,c)};cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1=function(a){return this};cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1=function(a){return this.node[this.off]};
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1=function(a){return this.off+1<this.node.length?(a=cljs.core.chunked_seq.call(null,this.vec,this.node,this.i,this.off+1),null==a?cljs.core.List.EMPTY:a):cljs.core._chunked_rest.call(null,this)};
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1=function(a){a=this.i+this.node.length;return a<cljs.core._count.call(null,this.vec)?cljs.core.chunked_seq.call(null,this.vec,cljs.core.unchecked_array_for.call(null,this.vec,a),a,0):null};cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2=function(a,b){return cljs.core.equiv_sequential.call(null,this,b)};
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2=function(a,b){return cljs.core.chunked_seq.call(null,this.vec,this.node,this.i,this.off,b)};cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1=function(a){return this.meta};cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1=function(a){return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this.meta)};
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1=function(a){return cljs.core.array_chunk.call(null,this.node,this.off)};cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1=function(a){a=this.i+this.node.length;return a<cljs.core._count.call(null,this.vec)?cljs.core.chunked_seq.call(null,this.vec,cljs.core.unchecked_array_for.call(null,this.vec,a),a,0):cljs.core.List.EMPTY};
cljs.core.__GT_ChunkedSeq=function(a,b,c,d,e,f){return new cljs.core.ChunkedSeq(a,b,c,d,e,f)};
cljs.core.chunked_seq=function(){var a=null,b=function(a,b,c){return new cljs.core.ChunkedSeq(a,cljs.core.array_for.call(null,a,b),b,c,null,null)},c=function(a,b,c,d){return new cljs.core.ChunkedSeq(a,b,c,d,null,null)},d=function(a,b,c,d,k){return new cljs.core.ChunkedSeq(a,b,c,d,k,null)},a=function(a,f,g,h,k){switch(arguments.length){case 3:return b.call(this,a,f,g);case 4:return c.call(this,a,f,g,h);case 5:return d.call(this,a,f,g,h,k)}throw Error("Invalid arity: "+arguments.length);};a.cljs$core$IFn$_invoke$arity$3=
b;a.cljs$core$IFn$_invoke$arity$4=c;a.cljs$core$IFn$_invoke$arity$5=d;return a}();cljs.core.Subvec=function(a,b,c,d,e){this.meta=a;this.v=b;this.start=c;this.end=d;this.__hash=e;this.cljs$lang$protocol_mask$partition0$=166617887;this.cljs$lang$protocol_mask$partition1$=8192};cljs.core.Subvec.cljs$lang$type=!0;cljs.core.Subvec.cljs$lang$ctorStr="cljs.core/Subvec";cljs.core.Subvec.cljs$lang$ctorPrWriter=function(a,b,c){return cljs.core._write.call(null,b,"cljs.core/Subvec")};
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1=function(a){a=this.__hash;return null!=a?a:this.__hash=a=cljs.core.hash_coll.call(null,this)};cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2=function(a,b){return cljs.core._lookup.call(null,this,b,null)};cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3=function(a,b,c){return"number"===typeof b?cljs.core._nth.call(null,this,b,c):c};
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3=function(a,b,c){if("number"===typeof b)return cljs.core._assoc_n.call(null,this,b,c);throw Error("Subvec's key for assoc must be a number.");};cljs.core.Subvec.prototype.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.cljs$core$IIndexed$_nth$arity$2(null,c);case 3:return this.cljs$core$IIndexed$_nth$arity$3(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();
cljs.core.Subvec.prototype.apply=function(a,b){return this.call.apply(this,[this].concat(cljs.core.aclone.call(null,b)))};cljs.core.Subvec.prototype.cljs$core$IFn$_invoke$arity$1=function(a){return this.cljs$core$IIndexed$_nth$arity$2(null,a)};cljs.core.Subvec.prototype.cljs$core$IFn$_invoke$arity$2=function(a,b){return this.cljs$core$IIndexed$_nth$arity$3(null,a,b)};
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2=function(a,b){return cljs.core.build_subvec.call(null,this.meta,cljs.core._assoc_n.call(null,this.v,this.end,b),this.start,this.end+1,null)};cljs.core.Subvec.prototype.cljs$core$IReversible$_rseq$arity$1=function(a){return this.start!==this.end?new cljs.core.RSeq(this,this.end-this.start-1,null):null};cljs.core.Subvec.prototype.toString=function(){return cljs.core.pr_str_STAR_.call(null,this)};
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2=function(a,b){return cljs.core.ci_reduce.call(null,this,b)};cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3=function(a,b,c){return cljs.core.ci_reduce.call(null,this,b,c)};
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1=function(a){var b=this;return function(a){return function e(f){return f===b.end?null:cljs.core.cons.call(null,cljs.core._nth.call(null,b.v,f),new cljs.core.LazySeq(null,function(a){return function(){return e.call(null,f+1)}}(a),null,null))}}(this).call(null,b.start)};cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1=function(a){return this.end-this.start};
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1=function(a){return cljs.core._nth.call(null,this.v,this.end-1)};cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1=function(a){if(this.start===this.end)throw Error("Can't pop empty vector");return cljs.core.build_subvec.call(null,this.meta,this.v,this.start,this.end-1,null)};
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3=function(a,b,c){var d=this,e=d.start+b;return cljs.core.build_subvec.call(null,d.meta,cljs.core.assoc.call(null,d.v,e,c),d.start,function(){var a=d.end,b=e+1;return a>b?a:b}(),null)};cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2=function(a,b){return cljs.core.equiv_sequential.call(null,this,b)};
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2=function(a,b){return cljs.core.build_subvec.call(null,b,this.v,this.start,this.end,this.__hash)};cljs.core.Subvec.prototype.cljs$core$ICloneable$_clone$arity$1=function(a){return new cljs.core.Subvec(this.meta,this.v,this.start,this.end,this.__hash)};cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1=function(a){return this.meta};
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2=function(a,b){return 0>b||this.end<=this.start+b?cljs.core.vector_index_out_of_bounds.call(null,b,this.end-this.start):cljs.core._nth.call(null,this.v,this.start+b)};cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3=function(a,b,c){return 0>b||this.end<=this.start+b?c:cljs.core._nth.call(null,this.v,this.start+b,c)};
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1=function(a){return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this.meta)};cljs.core.__GT_Subvec=function(a,b,c,d,e){return new cljs.core.Subvec(a,b,c,d,e)};cljs.core.build_subvec=function(a,b,c,d,e){for(;;)if(b instanceof cljs.core.Subvec)c=b.start+c,d=b.start+d,b=b.v;else{var f=cljs.core.count.call(null,b);if(0>c||0>d||c>f||d>f)throw Error("Index out of bounds");return new cljs.core.Subvec(a,b,c,d,e)}};
cljs.core.subvec=function(){var a=null,b=function(b,c){return a.call(null,b,c,cljs.core.count.call(null,b))},c=function(a,b,c){return cljs.core.build_subvec.call(null,null,a,b,c,null)},a=function(a,e,f){switch(arguments.length){case 2:return b.call(this,a,e);case 3:return c.call(this,a,e,f)}throw Error("Invalid arity: "+arguments.length);};a.cljs$core$IFn$_invoke$arity$2=b;a.cljs$core$IFn$_invoke$arity$3=c;return a}();
cljs.core.tv_ensure_editable=function(a,b){return a===b.edit?b:new cljs.core.VectorNode(a,cljs.core.aclone.call(null,b.arr))};cljs.core.tv_editable_root=function(a){return new cljs.core.VectorNode({},cljs.core.aclone.call(null,a.arr))};cljs.core.tv_editable_tail=function(a){var b=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];cljs.core.array_copy.call(null,a,0,b,0,a.length);return b};
cljs.core.tv_push_tail=function tv_push_tail(b,c,d,e){var f=cljs.core.tv_ensure_editable.call(null,b.root.edit,d),g=b.cnt-1>>>c&31;cljs.core.pv_aset.call(null,f,g,5===c?e:function(){var d=cljs.core.pv_aget.call(null,f,g);return null!=d?tv_push_tail.call(null,b,c-5,d,e):cljs.core.new_path.call(null,b.root.edit,c-5,e)}());return f};
cljs.core.tv_pop_tail=function tv_pop_tail(b,c,d){d=cljs.core.tv_ensure_editable.call(null,b.root.edit,d);var e=b.cnt-2>>>c&31;if(5<c){b=tv_pop_tail.call(null,b,c-5,cljs.core.pv_aget.call(null,d,e));if(null==b&&0===e)return null;cljs.core.pv_aset.call(null,d,e,b);return d}return 0===e?null:new cljs.core.Keyword(null,"else","else",1017020587)?(cljs.core.pv_aset.call(null,d,e,null),d):null};
cljs.core.unchecked_editable_array_for=function(a,b){if(b>=cljs.core.tail_off.call(null,a))return a.tail;for(var c=a.root,d=c,e=a.shift;;)if(0<e)d=cljs.core.tv_ensure_editable.call(null,c.edit,cljs.core.pv_aget.call(null,d,b>>>e&31)),e-=5;else return d.arr};cljs.core.TransientVector=function(a,b,c,d){this.cnt=a;this.shift=b;this.root=c;this.tail=d;this.cljs$lang$protocol_mask$partition0$=275;this.cljs$lang$protocol_mask$partition1$=88};cljs.core.TransientVector.cljs$lang$type=!0;
cljs.core.TransientVector.cljs$lang$ctorStr="cljs.core/TransientVector";cljs.core.TransientVector.cljs$lang$ctorPrWriter=function(a,b,c){return cljs.core._write.call(null,b,"cljs.core/TransientVector")};cljs.core.TransientVector.prototype.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.cljs$core$ILookup$_lookup$arity$2(null,c);case 3:return this.cljs$core$ILookup$_lookup$arity$3(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();
cljs.core.TransientVector.prototype.apply=function(a,b){return this.call.apply(this,[this].concat(cljs.core.aclone.call(null,b)))};cljs.core.TransientVector.prototype.cljs$core$IFn$_invoke$arity$1=function(a){return this.cljs$core$ILookup$_lookup$arity$2(null,a)};cljs.core.TransientVector.prototype.cljs$core$IFn$_invoke$arity$2=function(a,b){return this.cljs$core$ILookup$_lookup$arity$3(null,a,b)};
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2=function(a,b){return cljs.core._lookup.call(null,this,b,null)};cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3=function(a,b,c){return"number"===typeof b?cljs.core._nth.call(null,this,b,c):c};cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2=function(a,b){if(this.root.edit)return cljs.core.array_for.call(null,this,b)[b&31];throw Error("nth after persistent!");};
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3=function(a,b,c){return 0<=b&&b<this.cnt?cljs.core._nth.call(null,this,b):c};cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1=function(a){if(this.root.edit)return this.cnt;throw Error("count after persistent!");};
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3=function(a,b,c){var d=this;if(d.root.edit){if(0<=b&&b<d.cnt)return cljs.core.tail_off.call(null,this)<=b?d.tail[b&31]=c:(a=function(a){return function g(a,e){var l=cljs.core.tv_ensure_editable.call(null,d.root.edit,e);if(0===a)cljs.core.pv_aset.call(null,l,b&31,c);else{var m=b>>>a&31;cljs.core.pv_aset.call(null,l,m,g.call(null,a-5,cljs.core.pv_aget.call(null,l,m)))}return l}}(this).call(null,d.shift,d.root),d.root=
a),this;if(b===d.cnt)return cljs.core._conj_BANG_.call(null,this,c);if(new cljs.core.Keyword(null,"else","else",1017020587))throw Error("Index "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)+" out of bounds for TransientVector of length"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(d.cnt));return null}throw Error("assoc! after persistent!");};
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1=function(a){if(this.root.edit){if(0===this.cnt)throw Error("Can't pop empty vector");if(1===this.cnt)return this.cnt=0,this;if(0<(this.cnt-1&31))return this.cnt-=1,this;if(new cljs.core.Keyword(null,"else","else",1017020587)){a=cljs.core.unchecked_editable_array_for.call(null,this,this.cnt-2);var b;b=cljs.core.tv_pop_tail.call(null,this,this.shift,this.root);b=null!=b?b:new cljs.core.VectorNode(this.root.edit,[null,
null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]);5<this.shift&&null==cljs.core.pv_aget.call(null,b,1)?(this.root=cljs.core.tv_ensure_editable.call(null,this.root.edit,cljs.core.pv_aget.call(null,b,0)),this.shift-=5):this.root=b;this.cnt-=1;this.tail=a;return this}return null}throw Error("pop! after persistent!");};
cljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3=function(a,b,c){if("number"===typeof b)return cljs.core._assoc_n_BANG_.call(null,this,b,c);throw Error("TransientVector's key for assoc! must be a number.");};
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2=function(a,b){if(this.root.edit){if(32>this.cnt-cljs.core.tail_off.call(null,this))this.tail[this.cnt&31]=b;else{var c=new cljs.core.VectorNode(this.root.edit,this.tail),d=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];d[0]=b;this.tail=d;if(this.cnt>>>5>1<<this.shift){var d=[null,null,null,null,null,
null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],e=this.shift+5;d[0]=this.root;d[1]=cljs.core.new_path.call(null,this.root.edit,this.shift,c);this.root=new cljs.core.VectorNode(this.root.edit,d);this.shift=e}else this.root=cljs.core.tv_push_tail.call(null,this,this.shift,this.root,c)}this.cnt+=1;return this}throw Error("conj! after persistent!");};
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1=function(a){if(this.root.edit){this.root.edit=null;a=this.cnt-cljs.core.tail_off.call(null,this);var b=Array(a);cljs.core.array_copy.call(null,this.tail,0,b,0,a);return new cljs.core.PersistentVector(null,this.cnt,this.shift,this.root,b,null)}throw Error("persistent! called twice");};cljs.core.__GT_TransientVector=function(a,b,c,d){return new cljs.core.TransientVector(a,b,c,d)};
cljs.core.PersistentQueueSeq=function(a,b,c,d){this.meta=a;this.front=b;this.rear=c;this.__hash=d;this.cljs$lang$protocol_mask$partition1$=0;this.cljs$lang$protocol_mask$partition0$=31850572};cljs.core.PersistentQueueSeq.cljs$lang$type=!0;cljs.core.PersistentQueueSeq.cljs$lang$ctorStr="cljs.core/PersistentQueueSeq";cljs.core.PersistentQueueSeq.cljs$lang$ctorPrWriter=function(a,b,c){return cljs.core._write.call(null,b,"cljs.core/PersistentQueueSeq")};
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1=function(a){a=this.__hash;return null!=a?a:this.__hash=a=cljs.core.hash_coll.call(null,this)};cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2=function(a,b){return cljs.core.cons.call(null,b,this)};cljs.core.PersistentQueueSeq.prototype.toString=function(){return cljs.core.pr_str_STAR_.call(null,this)};cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1=function(a){return this};
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1=function(a){return cljs.core.first.call(null,this.front)};cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1=function(a){return(a=cljs.core.next.call(null,this.front))?new cljs.core.PersistentQueueSeq(this.meta,a,this.rear,null):null==this.rear?cljs.core._empty.call(null,this):new cljs.core.PersistentQueueSeq(this.meta,this.rear,null,null)};
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2=function(a,b){return cljs.core.equiv_sequential.call(null,this,b)};cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2=function(a,b){return new cljs.core.PersistentQueueSeq(b,this.front,this.rear,this.__hash)};cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1=function(a){return this.meta};
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1=function(a){return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this.meta)};cljs.core.__GT_PersistentQueueSeq=function(a,b,c,d){return new cljs.core.PersistentQueueSeq(a,b,c,d)};cljs.core.PersistentQueue=function(a,b,c,d,e){this.meta=a;this.count=b;this.front=c;this.rear=d;this.__hash=e;this.cljs$lang$protocol_mask$partition0$=31858766;this.cljs$lang$protocol_mask$partition1$=8192};
cljs.core.PersistentQueue.cljs$lang$type=!0;cljs.core.PersistentQueue.cljs$lang$ctorStr="cljs.core/PersistentQueue";cljs.core.PersistentQueue.cljs$lang$ctorPrWriter=function(a,b,c){return cljs.core._write.call(null,b,"cljs.core/PersistentQueue")};cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1=function(a){a=this.__hash;return null!=a?a:this.__hash=a=cljs.core.hash_coll.call(null,this)};
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2=function(a,b){var c=this;return cljs.core.truth_(c.front)?new cljs.core.PersistentQueue(c.meta,c.count+1,c.front,cljs.core.conj.call(null,function(){var a=c.rear;return cljs.core.truth_(a)?a:cljs.core.PersistentVector.EMPTY}(),b),null):new cljs.core.PersistentQueue(c.meta,c.count+1,cljs.core.conj.call(null,c.front,b),cljs.core.PersistentVector.EMPTY,null)};
cljs.core.PersistentQueue.prototype.toString=function(){return cljs.core.pr_str_STAR_.call(null,this)};cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1=function(a){var b=this,c=cljs.core.seq.call(null,b.rear);return cljs.core.truth_(function(){var a=b.front;return cljs.core.truth_(a)?a:c}())?new cljs.core.PersistentQueueSeq(null,b.front,cljs.core.seq.call(null,c),null):null};cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1=function(a){return this.count};
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1=function(a){return cljs.core.first.call(null,this.front)};cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1=function(a){return cljs.core.truth_(this.front)?(a=cljs.core.next.call(null,this.front))?new cljs.core.PersistentQueue(this.meta,this.count-1,a,this.rear,null):new cljs.core.PersistentQueue(this.meta,this.count-1,cljs.core.seq.call(null,this.rear),cljs.core.PersistentVector.EMPTY,null):this};
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1=function(a){return cljs.core.first.call(null,this.front)};cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1=function(a){return cljs.core.rest.call(null,cljs.core.seq.call(null,this))};cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2=function(a,b){return cljs.core.equiv_sequential.call(null,this,b)};
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2=function(a,b){return new cljs.core.PersistentQueue(b,this.count,this.front,this.rear,this.__hash)};cljs.core.PersistentQueue.prototype.cljs$core$ICloneable$_clone$arity$1=function(a){return new cljs.core.PersistentQueue(this.meta,this.count,this.front,this.rear,this.__hash)};cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1=function(a){return this.meta};
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1=function(a){return cljs.core.PersistentQueue.EMPTY};cljs.core.__GT_PersistentQueue=function(a,b,c,d,e){return new cljs.core.PersistentQueue(a,b,c,d,e)};cljs.core.PersistentQueue.EMPTY=new cljs.core.PersistentQueue(null,0,null,cljs.core.PersistentVector.EMPTY,0);cljs.core.NeverEquiv=function(){this.cljs$lang$protocol_mask$partition1$=0;this.cljs$lang$protocol_mask$partition0$=2097152};
cljs.core.NeverEquiv.cljs$lang$type=!0;cljs.core.NeverEquiv.cljs$lang$ctorStr="cljs.core/NeverEquiv";cljs.core.NeverEquiv.cljs$lang$ctorPrWriter=function(a,b,c){return cljs.core._write.call(null,b,"cljs.core/NeverEquiv")};cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2=function(a,b){return!1};cljs.core.__GT_NeverEquiv=function(){return new cljs.core.NeverEquiv};cljs.core.never_equiv=new cljs.core.NeverEquiv;
cljs.core.equiv_map=function(a,b){return cljs.core.boolean$.call(null,cljs.core.map_QMARK_.call(null,b)?cljs.core.count.call(null,a)===cljs.core.count.call(null,b)?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,function(a){return cljs.core._EQ_.call(null,cljs.core.get.call(null,b,cljs.core.first.call(null,a),cljs.core.never_equiv),cljs.core.second.call(null,a))},a)):null:null)};
cljs.core.scan_array=function(a,b,c){for(var d=c.length,e=0;;)if(e<d){if(b===c[e])return e;e+=a}else return null};cljs.core.obj_map_compare_keys=function(a,b){var c=cljs.core.hash.call(null,a),d=cljs.core.hash.call(null,b);return c<d?-1:c>d?1:new cljs.core.Keyword(null,"else","else",1017020587)?0:null};
cljs.core.obj_map__GT_hash_map=function(a,b,c){var d=a.keys,e=d.length,f=a.strobj;a=cljs.core.meta.call(null,a);for(var g=0,h=cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);;)if(g<e)var k=d[g],g=g+1,h=cljs.core.assoc_BANG_.call(null,h,k,f[k]);else return cljs.core.with_meta.call(null,cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,h,b,c)),a)};cljs.core.obj_clone=function(a,b){var c;c={};for(var d=b.length,e=0;;)if(e<d){var f=b[e];c[f]=a[f];e+=1}else break;return c};
cljs.core.ObjMap=function(a,b,c,d,e){this.meta=a;this.keys=b;this.strobj=c;this.update_count=d;this.__hash=e;this.cljs$lang$protocol_mask$partition1$=4;this.cljs$lang$protocol_mask$partition0$=16123663};cljs.core.ObjMap.cljs$lang$type=!0;cljs.core.ObjMap.cljs$lang$ctorStr="cljs.core/ObjMap";cljs.core.ObjMap.cljs$lang$ctorPrWriter=function(a,b,c){return cljs.core._write.call(null,b,"cljs.core/ObjMap")};
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1=function(a){return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,this))};cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1=function(a){a=this.__hash;return null!=a?a:this.__hash=a=cljs.core.hash_imap.call(null,this)};cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2=function(a,b){return cljs.core._lookup.call(null,this,b,null)};
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3=function(a,b,c){return goog.isString(b)&&null!=cljs.core.scan_array.call(null,1,b,this.keys)?this.strobj[b]:c};
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3=function(a,b,c){if(goog.isString(b)){if(this.update_count>cljs.core.ObjMap.HASHMAP_THRESHOLD||this.keys.length>=cljs.core.ObjMap.HASHMAP_THRESHOLD)return cljs.core.obj_map__GT_hash_map.call(null,this,b,c);if(null!=cljs.core.scan_array.call(null,1,b,this.keys))return a=cljs.core.obj_clone.call(null,this.strobj,this.keys),a[b]=c,new cljs.core.ObjMap(this.meta,this.keys,a,this.update_count+1,null);a=cljs.core.obj_clone.call(null,this.strobj,
this.keys);var d=cljs.core.aclone.call(null,this.keys);a[b]=c;d.push(b);return new cljs.core.ObjMap(this.meta,d,a,this.update_count+1,null)}return cljs.core.obj_map__GT_hash_map.call(null,this,b,c)};cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2=function(a,b){return goog.isString(b)&&null!=cljs.core.scan_array.call(null,1,b,this.keys)?!0:!1};
cljs.core.ObjMap.prototype.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.cljs$core$ILookup$_lookup$arity$2(null,c);case 3:return this.cljs$core$ILookup$_lookup$arity$3(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();cljs.core.ObjMap.prototype.apply=function(a,b){return this.call.apply(this,[this].concat(cljs.core.aclone.call(null,b)))};
cljs.core.ObjMap.prototype.cljs$core$IFn$_invoke$arity$1=function(a){return this.cljs$core$ILookup$_lookup$arity$2(null,a)};cljs.core.ObjMap.prototype.cljs$core$IFn$_invoke$arity$2=function(a,b){return this.cljs$core$ILookup$_lookup$arity$3(null,a,b)};
cljs.core.ObjMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3=function(a,b,c){for(a=this.keys.sort(cljs.core.obj_map_compare_keys);;)if(cljs.core.seq.call(null,a)){var d=cljs.core.first.call(null,a);c=b.call(null,c,d,this.strobj[d]);if(cljs.core.reduced_QMARK_.call(null,c))return cljs.core.deref.call(null,c);a=cljs.core.rest.call(null,a)}else return c};
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2=function(a,b){return cljs.core.vector_QMARK_.call(null,b)?cljs.core._assoc.call(null,this,cljs.core._nth.call(null,b,0),cljs.core._nth.call(null,b,1)):cljs.core.reduce.call(null,cljs.core._conj,this,b)};cljs.core.ObjMap.prototype.toString=function(){return cljs.core.pr_str_STAR_.call(null,this)};
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1=function(a){var b=this;return 0<b.keys.length?cljs.core.map.call(null,function(a){return function(a){return new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[a,b.strobj[a]],null)}}(this),b.keys.sort(cljs.core.obj_map_compare_keys)):null};cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1=function(a){return this.keys.length};
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2=function(a,b){return cljs.core.equiv_map.call(null,this,b)};cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2=function(a,b){return new cljs.core.ObjMap(b,this.keys,this.strobj,this.update_count,this.__hash)};cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1=function(a){return this.meta};
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1=function(a){return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this.meta)};
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2=function(a,b){if(goog.isString(b)&&null!=cljs.core.scan_array.call(null,1,b,this.keys)){var c=cljs.core.aclone.call(null,this.keys),d=cljs.core.obj_clone.call(null,this.strobj,this.keys);c.splice(cljs.core.scan_array.call(null,1,b,c),1);delete d[b];return new cljs.core.ObjMap(this.meta,c,d,this.update_count+1,null)}return this};cljs.core.__GT_ObjMap=function(a,b,c,d,e){return new cljs.core.ObjMap(a,b,c,d,e)};
cljs.core.ObjMap.EMPTY=new cljs.core.ObjMap(null,[],function(){return{}}(),0,0);cljs.core.ObjMap.HASHMAP_THRESHOLD=8;cljs.core.ObjMap.fromObject=function(a,b){return new cljs.core.ObjMap(null,a,b,0,null)};cljs.core.array_map_index_of_nil_QMARK_=function(a,b,c){b=a.length;for(c=0;;){if(b<=c)return-1;if(null==a[c])return c;if(new cljs.core.Keyword(null,"else","else",1017020587))c+=2;else return null}};
cljs.core.array_map_index_of_keyword_QMARK_=function(a,b,c){b=a.length;c=c.fqn;for(var d=0;;){if(b<=d)return-1;var e=a[d];if(e instanceof cljs.core.Keyword&&c===e.fqn)return d;if(new cljs.core.Keyword(null,"else","else",1017020587))d+=2;else return null}};cljs.core.array_map_index_of_symbol_QMARK_=function(a,b,c){b=a.length;c=c.str;for(var d=0;;){if(b<=d)return-1;var e=a[d];if(e instanceof cljs.core.Symbol&&c===e.str)return d;if(new cljs.core.Keyword(null,"else","else",1017020587))d+=2;else return null}};
cljs.core.array_map_index_of_identical_QMARK_=function(a,b,c){b=a.length;for(var d=0;;){if(b<=d)return-1;if(c===a[d])return d;if(new cljs.core.Keyword(null,"else","else",1017020587))d+=2;else return null}};cljs.core.array_map_index_of_equiv_QMARK_=function(a,b,c){b=a.length;for(var d=0;;){if(b<=d)return-1;if(cljs.core._EQ_.call(null,c,a[d]))return d;if(new cljs.core.Keyword(null,"else","else",1017020587))d+=2;else return null}};
cljs.core.array_map_index_of=function(a,b){var c=a.arr;return b instanceof cljs.core.Keyword?cljs.core.array_map_index_of_keyword_QMARK_.call(null,c,a,b):goog.isString(b)||"number"===typeof b?cljs.core.array_map_index_of_identical_QMARK_.call(null,c,a,b):b instanceof cljs.core.Symbol?cljs.core.array_map_index_of_symbol_QMARK_.call(null,c,a,b):null==b?cljs.core.array_map_index_of_nil_QMARK_.call(null,c,a,b):new cljs.core.Keyword(null,"else","else",1017020587)?cljs.core.array_map_index_of_equiv_QMARK_.call(null,
c,a,b):null};cljs.core.array_map_extend_kv=function(a,b,c){a=a.arr;for(var d=a.length,e=Array(d+2),f=0;;)if(f<d)e[f]=a[f],f+=1;else break;e[d]=b;e[d+1]=c;return e};cljs.core.PersistentArrayMapSeq=function(a,b,c){this.arr=a;this.i=b;this._meta=c;this.cljs$lang$protocol_mask$partition1$=0;this.cljs$lang$protocol_mask$partition0$=32374990};cljs.core.PersistentArrayMapSeq.cljs$lang$type=!0;cljs.core.PersistentArrayMapSeq.cljs$lang$ctorStr="cljs.core/PersistentArrayMapSeq";
cljs.core.PersistentArrayMapSeq.cljs$lang$ctorPrWriter=function(a,b,c){return cljs.core._write.call(null,b,"cljs.core/PersistentArrayMapSeq")};cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IHash$_hash$arity$1=function(a){return cljs.core.hash_coll.call(null,this)};cljs.core.PersistentArrayMapSeq.prototype.cljs$core$INext$_next$arity$1=function(a){return this.i<this.arr.length-2?new cljs.core.PersistentArrayMapSeq(this.arr,this.i+2,this._meta):null};
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ICollection$_conj$arity$2=function(a,b){return cljs.core.cons.call(null,b,this)};cljs.core.PersistentArrayMapSeq.prototype.toString=function(){return cljs.core.pr_str_STAR_.call(null,this)};cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IReduce$_reduce$arity$2=function(a,b){return cljs.core.seq_reduce.call(null,b,this)};
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IReduce$_reduce$arity$3=function(a,b,c){return cljs.core.seq_reduce.call(null,b,c,this)};cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1=function(a){return this};cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ICounted$_count$arity$1=function(a){return(this.arr.length-this.i)/2};
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ISeq$_first$arity$1=function(a){return new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[this.arr[this.i],this.arr[this.i+1]],null)};cljs.core.PersistentArrayMapSeq.prototype.cljs$core$ISeq$_rest$arity$1=function(a){return this.i<this.arr.length-2?new cljs.core.PersistentArrayMapSeq(this.arr,this.i+2,this._meta):cljs.core.List.EMPTY};
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2=function(a,b){return cljs.core.equiv_sequential.call(null,this,b)};cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2=function(a,b){return new cljs.core.PersistentArrayMapSeq(this.arr,this.i,b)};cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IMeta$_meta$arity$1=function(a){return this._meta};
cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1=function(a){return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this._meta)};cljs.core.__GT_PersistentArrayMapSeq=function(a,b,c){return new cljs.core.PersistentArrayMapSeq(a,b,c)};cljs.core.persistent_array_map_seq=function(a,b,c){return b<=a.length-2?new cljs.core.PersistentArrayMapSeq(a,b,c):null};
cljs.core.PersistentArrayMap=function(a,b,c,d){this.meta=a;this.cnt=b;this.arr=c;this.__hash=d;this.cljs$lang$protocol_mask$partition1$=8196;this.cljs$lang$protocol_mask$partition0$=16647951};cljs.core.PersistentArrayMap.cljs$lang$type=!0;cljs.core.PersistentArrayMap.cljs$lang$ctorStr="cljs.core/PersistentArrayMap";cljs.core.PersistentArrayMap.cljs$lang$ctorPrWriter=function(a,b,c){return cljs.core._write.call(null,b,"cljs.core/PersistentArrayMap")};
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1=function(a){return new cljs.core.TransientArrayMap({},this.arr.length,cljs.core.aclone.call(null,this.arr))};cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1=function(a){a=this.__hash;return null!=a?a:this.__hash=a=cljs.core.hash_imap.call(null,this)};cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2=function(a,b){return cljs.core._lookup.call(null,this,b,null)};
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3=function(a,b,c){a=cljs.core.array_map_index_of.call(null,this,b);return-1===a?c:this.arr[a+1]};
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3=function(a,b,c){a=cljs.core.array_map_index_of.call(null,this,b);return-1===a?this.cnt<cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD?(c=cljs.core.array_map_extend_kv.call(null,this,b,c),new cljs.core.PersistentArrayMap(this.meta,this.cnt+1,c,null)):cljs.core._with_meta.call(null,cljs.core._assoc.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,this),b,c),this.meta):c===this.arr[a+1]?this:new cljs.core.Keyword(null,
"else","else",1017020587)?(b=cljs.core.aclone.call(null,this.arr),b[a+1]=c,new cljs.core.PersistentArrayMap(this.meta,this.cnt,b,null)):null};cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2=function(a,b){return-1!==cljs.core.array_map_index_of.call(null,this,b)};
cljs.core.PersistentArrayMap.prototype.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.cljs$core$ILookup$_lookup$arity$2(null,c);case 3:return this.cljs$core$ILookup$_lookup$arity$3(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();cljs.core.PersistentArrayMap.prototype.apply=function(a,b){return this.call.apply(this,[this].concat(cljs.core.aclone.call(null,b)))};
cljs.core.PersistentArrayMap.prototype.cljs$core$IFn$_invoke$arity$1=function(a){return this.cljs$core$ILookup$_lookup$arity$2(null,a)};cljs.core.PersistentArrayMap.prototype.cljs$core$IFn$_invoke$arity$2=function(a,b){return this.cljs$core$ILookup$_lookup$arity$3(null,a,b)};
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3=function(a,b,c){a=this.arr.length;for(var d=0;;)if(d<a){c=b.call(null,c,this.arr[d],this.arr[d+1]);if(cljs.core.reduced_QMARK_.call(null,c))return cljs.core.deref.call(null,c);d+=2}else return c};
cljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$_conj$arity$2=function(a,b){if(cljs.core.vector_QMARK_.call(null,b))return cljs.core._assoc.call(null,this,cljs.core._nth.call(null,b,0),cljs.core._nth.call(null,b,1));for(var c=this,d=cljs.core.seq.call(null,b);;){if(null==d)return c;var e=cljs.core.first.call(null,d);if(cljs.core.vector_QMARK_.call(null,e))c=cljs.core._assoc.call(null,c,cljs.core._nth.call(null,e,0),cljs.core._nth.call(null,e,1)),d=cljs.core.next.call(null,d);else throw Error("conj on a map takes map entries or seqables of map entries");
}};cljs.core.PersistentArrayMap.prototype.toString=function(){return cljs.core.pr_str_STAR_.call(null,this)};cljs.core.PersistentArrayMap.prototype.cljs$core$IReduce$_reduce$arity$2=function(a,b){return cljs.core.seq_reduce.call(null,b,this)};cljs.core.PersistentArrayMap.prototype.cljs$core$IReduce$_reduce$arity$3=function(a,b,c){return cljs.core.seq_reduce.call(null,b,c,this)};
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1=function(a){return cljs.core.persistent_array_map_seq.call(null,this.arr,0,null)};cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1=function(a){return this.cnt};cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2=function(a,b){return cljs.core.equiv_map.call(null,this,b)};
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2=function(a,b){return new cljs.core.PersistentArrayMap(b,this.cnt,this.arr,this.__hash)};cljs.core.PersistentArrayMap.prototype.cljs$core$ICloneable$_clone$arity$1=function(a){return new cljs.core.PersistentArrayMap(this.meta,this.cnt,this.arr,this.__hash)};cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1=function(a){return this.meta};
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1=function(a){return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this.meta)};
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2=function(a,b){if(0<=cljs.core.array_map_index_of.call(null,this,b)){var c=this.arr.length,d=c-2;if(0===d)return cljs.core._empty.call(null,this);for(var d=Array(d),e=0,f=0;;){if(e>=c)return new cljs.core.PersistentArrayMap(this.meta,this.cnt-1,d,null);if(cljs.core._EQ_.call(null,b,this.arr[e]))e+=2;else if(new cljs.core.Keyword(null,"else","else",1017020587))d[f]=this.arr[e],d[f+1]=this.arr[e+1],f+=2,e+=2;else return null}}else return this};
cljs.core.__GT_PersistentArrayMap=function(a,b,c,d){return new cljs.core.PersistentArrayMap(a,b,c,d)};cljs.core.PersistentArrayMap.EMPTY=new cljs.core.PersistentArrayMap(null,0,[],null);cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD=8;
cljs.core.PersistentArrayMap.fromArray=function(a,b,c){a=b?a:cljs.core.aclone.call(null,a);if(c)return new cljs.core.PersistentArrayMap(null,a.length/2,a,null);c=a.length;b=0;for(var d=cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);;)if(b<c){var e=b+2,d=cljs.core._assoc_BANG_.call(null,d,a[b],a[b+1]);b=e}else return cljs.core._persistent_BANG_.call(null,d)};
cljs.core.TransientArrayMap=function(a,b,c){this.editable_QMARK_=a;this.len=b;this.arr=c;this.cljs$lang$protocol_mask$partition1$=56;this.cljs$lang$protocol_mask$partition0$=258};cljs.core.TransientArrayMap.cljs$lang$type=!0;cljs.core.TransientArrayMap.cljs$lang$ctorStr="cljs.core/TransientArrayMap";cljs.core.TransientArrayMap.cljs$lang$ctorPrWriter=function(a,b,c){return cljs.core._write.call(null,b,"cljs.core/TransientArrayMap")};
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2=function(a,b){if(cljs.core.truth_(this.editable_QMARK_)){var c=cljs.core.array_map_index_of.call(null,this,b);0<=c&&(this.arr[c]=this.arr[this.len-2],this.arr[c+1]=this.arr[this.len-1],c=this.arr,c.pop(),c.pop(),this.len-=2);return this}throw Error("dissoc! after persistent!");};
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3=function(a,b,c){if(cljs.core.truth_(this.editable_QMARK_)){a=cljs.core.array_map_index_of.call(null,this,b);if(-1===a)return this.len+2<=2*cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD?(this.len+=2,this.arr.push(b),this.arr.push(c),this):cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this.len,this.arr),b,c);c!==this.arr[a+1]&&(this.arr[a+1]=c);return this}throw Error("assoc! after persistent!");
};
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2=function(a,b){if(cljs.core.truth_(this.editable_QMARK_)){if(b?b.cljs$lang$protocol_mask$partition0$&2048||b.cljs$core$IMapEntry$||(b.cljs$lang$protocol_mask$partition0$?0:cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMapEntry,b)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMapEntry,b))return cljs.core._assoc_BANG_.call(null,this,cljs.core.key.call(null,b),cljs.core.val.call(null,b));for(var c=cljs.core.seq.call(null,
b),d=this;;){var e=cljs.core.first.call(null,c);if(cljs.core.truth_(e))c=cljs.core.next.call(null,c),d=cljs.core._assoc_BANG_.call(null,d,cljs.core.key.call(null,e),cljs.core.val.call(null,e));else return d}}else throw Error("conj! after persistent!");};
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1=function(a){if(cljs.core.truth_(this.editable_QMARK_))return this.editable_QMARK_=!1,new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this.len,2),this.arr,null);throw Error("persistent! called twice");};cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2=function(a,b){return cljs.core._lookup.call(null,this,b,null)};
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3=function(a,b,c){if(cljs.core.truth_(this.editable_QMARK_))return a=cljs.core.array_map_index_of.call(null,this,b),-1===a?c:this.arr[a+1];throw Error("lookup after persistent!");};cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1=function(a){if(cljs.core.truth_(this.editable_QMARK_))return cljs.core.quot.call(null,this.len,2);throw Error("count after persistent!");};
cljs.core.__GT_TransientArrayMap=function(a,b,c){return new cljs.core.TransientArrayMap(a,b,c)};cljs.core.array__GT_transient_hash_map=function(a,b){for(var c=cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY),d=0;;)if(d<a)c=cljs.core.assoc_BANG_.call(null,c,b[d],b[d+1]),d+=2;else return c};cljs.core.Box=function(a){this.val=a};cljs.core.Box.cljs$lang$type=!0;cljs.core.Box.cljs$lang$ctorStr="cljs.core/Box";
cljs.core.Box.cljs$lang$ctorPrWriter=function(a,b,c){return cljs.core._write.call(null,b,"cljs.core/Box")};cljs.core.__GT_Box=function(a){return new cljs.core.Box(a)};cljs.core.key_test=function(a,b){return a===b?!0:cljs.core.keyword_identical_QMARK_.call(null,a,b)?!0:new cljs.core.Keyword(null,"else","else",1017020587)?cljs.core._EQ_.call(null,a,b):null};cljs.core.mask=function(a,b){return a>>>b&31};
cljs.core.clone_and_set=function(){var a=null,b=function(a,b,c){a=cljs.core.aclone.call(null,a);a[b]=c;return a},c=function(a,b,c,g,h){a=cljs.core.aclone.call(null,a);a[b]=c;a[g]=h;return a},a=function(a,e,f,g,h){switch(arguments.length){case 3:return b.call(this,a,e,f);case 5:return c.call(this,a,e,f,g,h)}throw Error("Invalid arity: "+arguments.length);};a.cljs$core$IFn$_invoke$arity$3=b;a.cljs$core$IFn$_invoke$arity$5=c;return a}();
cljs.core.remove_pair=function(a,b){var c=Array(a.length-2);cljs.core.array_copy.call(null,a,0,c,0,2*b);cljs.core.array_copy.call(null,a,2*(b+1),c,2*b,c.length-2*b);return c};cljs.core.bitmap_indexed_node_index=function(a,b){return cljs.core.bit_count.call(null,a&b-1)};cljs.core.bitpos=function(a,b){return 1<<(a>>>b&31)};
cljs.core.edit_and_set=function(){var a=null,b=function(a,b,c,g){a=a.ensure_editable(b);a.arr[c]=g;return a},c=function(a,b,c,g,h,k){a=a.ensure_editable(b);a.arr[c]=g;a.arr[h]=k;return a},a=function(a,e,f,g,h,k){switch(arguments.length){case 4:return b.call(this,a,e,f,g);case 6:return c.call(this,a,e,f,g,h,k)}throw Error("Invalid arity: "+arguments.length);};a.cljs$core$IFn$_invoke$arity$4=b;a.cljs$core$IFn$_invoke$arity$6=c;return a}();
cljs.core.inode_kv_reduce=function(a,b,c){for(var d=a.length,e=0;;)if(e<d){var f=a[e];null!=f?c=b.call(null,c,f,a[e+1]):(f=a[e+1],c=null!=f?f.kv_reduce(b,c):c);if(cljs.core.reduced_QMARK_.call(null,c))return cljs.core.deref.call(null,c);e+=2}else return c};cljs.core.BitmapIndexedNode=function(a,b,c){this.edit=a;this.bitmap=b;this.arr=c};cljs.core.BitmapIndexedNode.cljs$lang$type=!0;cljs.core.BitmapIndexedNode.cljs$lang$ctorStr="cljs.core/BitmapIndexedNode";
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrWriter=function(a,b,c){return cljs.core._write.call(null,b,"cljs.core/BitmapIndexedNode")};cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair=function(a,b,c){if(this.bitmap===b)return null;a=this.ensure_editable(a);var d=a.arr,e=d.length;a.bitmap^=b;cljs.core.array_copy.call(null,d,2*(c+1),d,2*c,e-2*(c+1));d[e-2]=null;d[e-1]=null;return a};
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_=function(a,b,c,d,e,f){var g=1<<(c>>>b&31),h=cljs.core.bitmap_indexed_node_index.call(null,this.bitmap,g);if(0===(this.bitmap&g)){var k=cljs.core.bit_count.call(null,this.bitmap);if(2*k<this.arr.length)return a=this.ensure_editable(a),b=a.arr,f.val=!0,cljs.core.array_copy_downward.call(null,b,2*h,b,2*(h+1),2*(k-h)),b[2*h]=d,b[2*h+1]=e,a.bitmap|=g,a;if(16<=k){h=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,
null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];h[c>>>b&31]=cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(a,b+5,c,d,e,f);for(e=d=0;;)if(32>d)0!==(this.bitmap>>>d&1)&&(h[d]=null!=this.arr[e]?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(a,b+5,cljs.core.hash.call(null,this.arr[e]),this.arr[e],this.arr[e+1],f):this.arr[e+1],e+=2),d+=1;else break;return new cljs.core.ArrayNode(a,k+1,h)}return new cljs.core.Keyword(null,"else","else",1017020587)?(b=Array(2*(k+4)),
cljs.core.array_copy.call(null,this.arr,0,b,0,2*h),b[2*h]=d,b[2*h+1]=e,cljs.core.array_copy.call(null,this.arr,2*h,b,2*(h+1),2*(k-h)),f.val=!0,a=this.ensure_editable(a),a.arr=b,a.bitmap|=g,a):null}k=this.arr[2*h];g=this.arr[2*h+1];return null==k?(k=g.inode_assoc_BANG_(a,b+5,c,d,e,f),k===g?this:cljs.core.edit_and_set.call(null,this,a,2*h+1,k)):cljs.core.key_test.call(null,d,k)?e===g?this:cljs.core.edit_and_set.call(null,this,a,2*h+1,e):new cljs.core.Keyword(null,"else","else",1017020587)?(f.val=!0,
cljs.core.edit_and_set.call(null,this,a,2*h,null,2*h+1,cljs.core.create_node.call(null,a,b+5,k,g,c,d,e))):null};cljs.core.BitmapIndexedNode.prototype.inode_seq=function(){return cljs.core.create_inode_seq.call(null,this.arr)};
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_=function(a,b,c,d,e){var f=1<<(c>>>b&31);if(0===(this.bitmap&f))return this;var g=cljs.core.bitmap_indexed_node_index.call(null,this.bitmap,f),h=this.arr[2*g],k=this.arr[2*g+1];return null==h?(b=k.inode_without_BANG_(a,b+5,c,d,e),b===k?this:null!=b?cljs.core.edit_and_set.call(null,this,a,2*g+1,b):this.bitmap===f?null:new cljs.core.Keyword(null,"else","else",1017020587)?this.edit_and_remove_pair(a,f,g):null):cljs.core.key_test.call(null,d,h)?
(e[0]=!0,this.edit_and_remove_pair(a,f,g)):new cljs.core.Keyword(null,"else","else",1017020587)?this:null};cljs.core.BitmapIndexedNode.prototype.ensure_editable=function(a){if(a===this.edit)return this;var b=cljs.core.bit_count.call(null,this.bitmap),c=Array(0>b?4:2*(b+1));cljs.core.array_copy.call(null,this.arr,0,c,0,2*b);return new cljs.core.BitmapIndexedNode(a,this.bitmap,c)};cljs.core.BitmapIndexedNode.prototype.kv_reduce=function(a,b){return cljs.core.inode_kv_reduce.call(null,this.arr,a,b)};
cljs.core.BitmapIndexedNode.prototype.inode_find=function(a,b,c,d){var e=1<<(b>>>a&31);if(0===(this.bitmap&e))return d;var f=cljs.core.bitmap_indexed_node_index.call(null,this.bitmap,e),e=this.arr[2*f],f=this.arr[2*f+1];return null==e?f.inode_find(a+5,b,c,d):cljs.core.key_test.call(null,c,e)?new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[e,f],null):new cljs.core.Keyword(null,"else","else",1017020587)?d:null};
cljs.core.BitmapIndexedNode.prototype.inode_without=function(a,b,c){var d=1<<(b>>>a&31);if(0===(this.bitmap&d))return this;var e=cljs.core.bitmap_indexed_node_index.call(null,this.bitmap,d),f=this.arr[2*e],g=this.arr[2*e+1];return null==f?(a=g.inode_without(a+5,b,c),a===g?this:null!=a?new cljs.core.BitmapIndexedNode(null,this.bitmap,cljs.core.clone_and_set.call(null,this.arr,2*e+1,a)):this.bitmap===d?null:new cljs.core.Keyword(null,"else","else",1017020587)?new cljs.core.BitmapIndexedNode(null,this.bitmap^
d,cljs.core.remove_pair.call(null,this.arr,e)):null):cljs.core.key_test.call(null,c,f)?new cljs.core.BitmapIndexedNode(null,this.bitmap^d,cljs.core.remove_pair.call(null,this.arr,e)):new cljs.core.Keyword(null,"else","else",1017020587)?this:null};
cljs.core.BitmapIndexedNode.prototype.inode_assoc=function(a,b,c,d,e){var f=1<<(b>>>a&31),g=cljs.core.bitmap_indexed_node_index.call(null,this.bitmap,f);if(0===(this.bitmap&f)){var h=cljs.core.bit_count.call(null,this.bitmap);if(16<=h){g=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];g[b>>>a&31]=cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(a+5,b,c,d,e);for(d=c=0;;)if(32>c)0!==(this.bitmap>>>
c&1)&&(g[c]=null!=this.arr[d]?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(a+5,cljs.core.hash.call(null,this.arr[d]),this.arr[d],this.arr[d+1],e):this.arr[d+1],d+=2),c+=1;else break;return new cljs.core.ArrayNode(null,h+1,g)}a=Array(2*(h+1));cljs.core.array_copy.call(null,this.arr,0,a,0,2*g);a[2*g]=c;a[2*g+1]=d;cljs.core.array_copy.call(null,this.arr,2*g,a,2*(g+1),2*(h-g));e.val=!0;return new cljs.core.BitmapIndexedNode(null,this.bitmap|f,a)}h=this.arr[2*g];f=this.arr[2*g+1];return null==h?(h=f.inode_assoc(a+
5,b,c,d,e),h===f?this:new cljs.core.BitmapIndexedNode(null,this.bitmap,cljs.core.clone_and_set.call(null,this.arr,2*g+1,h))):cljs.core.key_test.call(null,c,h)?d===f?this:new cljs.core.BitmapIndexedNode(null,this.bitmap,cljs.core.clone_and_set.call(null,this.arr,2*g+1,d)):new cljs.core.Keyword(null,"else","else",1017020587)?(e.val=!0,new cljs.core.BitmapIndexedNode(null,this.bitmap,cljs.core.clone_and_set.call(null,this.arr,2*g,null,2*g+1,cljs.core.create_node.call(null,a+5,h,f,b,c,d)))):null};
cljs.core.BitmapIndexedNode.prototype.inode_lookup=function(a,b,c,d){var e=1<<(b>>>a&31);if(0===(this.bitmap&e))return d;var f=cljs.core.bitmap_indexed_node_index.call(null,this.bitmap,e),e=this.arr[2*f],f=this.arr[2*f+1];return null==e?f.inode_lookup(a+5,b,c,d):cljs.core.key_test.call(null,c,e)?f:new cljs.core.Keyword(null,"else","else",1017020587)?d:null};cljs.core.__GT_BitmapIndexedNode=function(a,b,c){return new cljs.core.BitmapIndexedNode(a,b,c)};
cljs.core.BitmapIndexedNode.EMPTY=new cljs.core.BitmapIndexedNode(null,0,[]);cljs.core.pack_array_node=function(a,b,c){var d=a.arr;a=2*(a.cnt-1);for(var e=Array(a),f=0,g=1,h=0;;)if(f<a)f!==c&&null!=d[f]&&(e[g]=d[f],g+=2,h|=1<<f),f+=1;else return new cljs.core.BitmapIndexedNode(b,h,e)};cljs.core.ArrayNode=function(a,b,c){this.edit=a;this.cnt=b;this.arr=c};cljs.core.ArrayNode.cljs$lang$type=!0;cljs.core.ArrayNode.cljs$lang$ctorStr="cljs.core/ArrayNode";
cljs.core.ArrayNode.cljs$lang$ctorPrWriter=function(a,b,c){return cljs.core._write.call(null,b,"cljs.core/ArrayNode")};cljs.core.ArrayNode.prototype.inode_assoc_BANG_=function(a,b,c,d,e,f){var g=c>>>b&31,h=this.arr[g];if(null==h)return a=cljs.core.edit_and_set.call(null,this,a,g,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(a,b+5,c,d,e,f)),a.cnt+=1,a;b=h.inode_assoc_BANG_(a,b+5,c,d,e,f);return b===h?this:cljs.core.edit_and_set.call(null,this,a,g,b)};
cljs.core.ArrayNode.prototype.inode_seq=function(){return cljs.core.create_array_node_seq.call(null,this.arr)};
cljs.core.ArrayNode.prototype.inode_without_BANG_=function(a,b,c,d,e){var f=c>>>b&31,g=this.arr[f];if(null==g)return this;b=g.inode_without_BANG_(a,b+5,c,d,e);if(b===g)return this;if(null==b){if(8>=this.cnt)return cljs.core.pack_array_node.call(null,this,a,f);a=cljs.core.edit_and_set.call(null,this,a,f,b);a.cnt-=1;return a}return new cljs.core.Keyword(null,"else","else",1017020587)?cljs.core.edit_and_set.call(null,this,a,f,b):null};
cljs.core.ArrayNode.prototype.ensure_editable=function(a){return a===this.edit?this:new cljs.core.ArrayNode(a,this.cnt,cljs.core.aclone.call(null,this.arr))};cljs.core.ArrayNode.prototype.kv_reduce=function(a,b){for(var c=this.arr.length,d=0,e=b;;)if(d<c){var f=this.arr[d];if(null!=f&&(e=f.kv_reduce(a,e),cljs.core.reduced_QMARK_.call(null,e)))return cljs.core.deref.call(null,e);d+=1}else return e};
cljs.core.ArrayNode.prototype.inode_find=function(a,b,c,d){var e=this.arr[b>>>a&31];return null!=e?e.inode_find(a+5,b,c,d):d};
cljs.core.ArrayNode.prototype.inode_without=function(a,b,c){var d=b>>>a&31,e=this.arr[d];return null!=e?(a=e.inode_without(a+5,b,c),a===e?this:null==a?8>=this.cnt?cljs.core.pack_array_node.call(null,this,null,d):new cljs.core.ArrayNode(null,this.cnt-1,cljs.core.clone_and_set.call(null,this.arr,d,a)):new cljs.core.Keyword(null,"else","else",1017020587)?new cljs.core.ArrayNode(null,this.cnt,cljs.core.clone_and_set.call(null,this.arr,d,a)):null):this};
cljs.core.ArrayNode.prototype.inode_assoc=function(a,b,c,d,e){var f=b>>>a&31,g=this.arr[f];if(null==g)return new cljs.core.ArrayNode(null,this.cnt+1,cljs.core.clone_and_set.call(null,this.arr,f,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(a+5,b,c,d,e)));a=g.inode_assoc(a+5,b,c,d,e);return a===g?this:new cljs.core.ArrayNode(null,this.cnt,cljs.core.clone_and_set.call(null,this.arr,f,a))};
cljs.core.ArrayNode.prototype.inode_lookup=function(a,b,c,d){var e=this.arr[b>>>a&31];return null!=e?e.inode_lookup(a+5,b,c,d):d};cljs.core.__GT_ArrayNode=function(a,b,c){return new cljs.core.ArrayNode(a,b,c)};cljs.core.hash_collision_node_find_index=function(a,b,c){b*=2;for(var d=0;;)if(d<b){if(cljs.core.key_test.call(null,c,a[d]))return d;d+=2}else return-1};cljs.core.HashCollisionNode=function(a,b,c,d){this.edit=a;this.collision_hash=b;this.cnt=c;this.arr=d};
cljs.core.HashCollisionNode.cljs$lang$type=!0;cljs.core.HashCollisionNode.cljs$lang$ctorStr="cljs.core/HashCollisionNode";cljs.core.HashCollisionNode.cljs$lang$ctorPrWriter=function(a,b,c){return cljs.core._write.call(null,b,"cljs.core/HashCollisionNode")};
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_=function(a,b,c,d,e,f){if(c===this.collision_hash){b=cljs.core.hash_collision_node_find_index.call(null,this.arr,this.cnt,d);if(-1===b){if(this.arr.length>2*this.cnt)return a=cljs.core.edit_and_set.call(null,this,a,2*this.cnt,d,2*this.cnt+1,e),f.val=!0,a.cnt+=1,a;b=this.arr.length;c=Array(b+2);cljs.core.array_copy.call(null,this.arr,0,c,0,b);c[b]=d;c[b+1]=e;f.val=!0;return this.ensure_editable_array(a,this.cnt+1,c)}return this.arr[b+1]===e?this:
cljs.core.edit_and_set.call(null,this,a,b+1,e)}return(new cljs.core.BitmapIndexedNode(a,1<<(this.collision_hash>>>b&31),[null,this,null,null])).inode_assoc_BANG_(a,b,c,d,e,f)};cljs.core.HashCollisionNode.prototype.inode_seq=function(){return cljs.core.create_inode_seq.call(null,this.arr)};
cljs.core.HashCollisionNode.prototype.inode_without_BANG_=function(a,b,c,d,e){b=cljs.core.hash_collision_node_find_index.call(null,this.arr,this.cnt,d);if(-1===b)return this;e[0]=!0;if(1===this.cnt)return null;a=this.ensure_editable(a);e=a.arr;e[b]=e[2*this.cnt-2];e[b+1]=e[2*this.cnt-1];e[2*this.cnt-1]=null;e[2*this.cnt-2]=null;a.cnt-=1;return a};
cljs.core.HashCollisionNode.prototype.ensure_editable=function(a){if(a===this.edit)return this;var b=Array(2*(this.cnt+1));cljs.core.array_copy.call(null,this.arr,0,b,0,2*this.cnt);return new cljs.core.HashCollisionNode(a,this.collision_hash,this.cnt,b)};cljs.core.HashCollisionNode.prototype.kv_reduce=function(a,b){return cljs.core.inode_kv_reduce.call(null,this.arr,a,b)};
cljs.core.HashCollisionNode.prototype.inode_find=function(a,b,c,d){a=cljs.core.hash_collision_node_find_index.call(null,this.arr,this.cnt,c);return 0>a?d:cljs.core.key_test.call(null,c,this.arr[a])?new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[this.arr[a],this.arr[a+1]],null):new cljs.core.Keyword(null,"else","else",1017020587)?d:null};
cljs.core.HashCollisionNode.prototype.inode_without=function(a,b,c){a=cljs.core.hash_collision_node_find_index.call(null,this.arr,this.cnt,c);return-1===a?this:1===this.cnt?null:new cljs.core.Keyword(null,"else","else",1017020587)?new cljs.core.HashCollisionNode(null,this.collision_hash,this.cnt-1,cljs.core.remove_pair.call(null,this.arr,cljs.core.quot.call(null,a,2))):null};
cljs.core.HashCollisionNode.prototype.inode_assoc=function(a,b,c,d,e){return b===this.collision_hash?(a=cljs.core.hash_collision_node_find_index.call(null,this.arr,this.cnt,c),-1===a?(a=2*this.cnt,b=Array(a+2),cljs.core.array_copy.call(null,this.arr,0,b,0,a),b[a]=c,b[a+1]=d,e.val=!0,new cljs.core.HashCollisionNode(null,this.collision_hash,this.cnt+1,b)):cljs.core._EQ_.call(null,this.arr[a],d)?this:new cljs.core.HashCollisionNode(null,this.collision_hash,this.cnt,cljs.core.clone_and_set.call(null,
this.arr,a+1,d))):(new cljs.core.BitmapIndexedNode(null,1<<(this.collision_hash>>>a&31),[null,this])).inode_assoc(a,b,c,d,e)};cljs.core.HashCollisionNode.prototype.inode_lookup=function(a,b,c,d){a=cljs.core.hash_collision_node_find_index.call(null,this.arr,this.cnt,c);return 0>a?d:cljs.core.key_test.call(null,c,this.arr[a])?this.arr[a+1]:new cljs.core.Keyword(null,"else","else",1017020587)?d:null};
cljs.core.HashCollisionNode.prototype.ensure_editable_array=function(a,b,c){return a===this.edit?(this.arr=c,this.cnt=b,this):new cljs.core.HashCollisionNode(this.edit,this.collision_hash,b,c)};cljs.core.__GT_HashCollisionNode=function(a,b,c,d){return new cljs.core.HashCollisionNode(a,b,c,d)};
cljs.core.create_node=function(){var a=null,b=function(a,b,c,g,h,k){var l=cljs.core.hash.call(null,b);if(l===g)return new cljs.core.HashCollisionNode(null,l,2,[b,c,h,k]);var m=new cljs.core.Box(!1);return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(a,l,b,c,m).inode_assoc(a,g,h,k,m)},c=function(a,b,c,g,h,k,l){var m=cljs.core.hash.call(null,c);if(m===h)return new cljs.core.HashCollisionNode(null,m,2,[c,g,k,l]);var n=new cljs.core.Box(!1);return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(a,
b,m,c,g,n).inode_assoc_BANG_(a,b,h,k,l,n)},a=function(a,e,f,g,h,k,l){switch(arguments.length){case 6:return b.call(this,a,e,f,g,h,k);case 7:return c.call(this,a,e,f,g,h,k,l)}throw Error("Invalid arity: "+arguments.length);};a.cljs$core$IFn$_invoke$arity$6=b;a.cljs$core$IFn$_invoke$arity$7=c;return a}();cljs.core.NodeSeq=function(a,b,c,d,e){this.meta=a;this.nodes=b;this.i=c;this.s=d;this.__hash=e;this.cljs$lang$protocol_mask$partition1$=0;this.cljs$lang$protocol_mask$partition0$=32374860};
cljs.core.NodeSeq.cljs$lang$type=!0;cljs.core.NodeSeq.cljs$lang$ctorStr="cljs.core/NodeSeq";cljs.core.NodeSeq.cljs$lang$ctorPrWriter=function(a,b,c){return cljs.core._write.call(null,b,"cljs.core/NodeSeq")};cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1=function(a){a=this.__hash;return null!=a?a:this.__hash=a=cljs.core.hash_coll.call(null,this)};cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2=function(a,b){return cljs.core.cons.call(null,b,this)};
cljs.core.NodeSeq.prototype.toString=function(){return cljs.core.pr_str_STAR_.call(null,this)};cljs.core.NodeSeq.prototype.cljs$core$IReduce$_reduce$arity$2=function(a,b){return cljs.core.seq_reduce.call(null,b,this)};cljs.core.NodeSeq.prototype.cljs$core$IReduce$_reduce$arity$3=function(a,b,c){return cljs.core.seq_reduce.call(null,b,c,this)};cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1=function(a){return this};
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1=function(a){return null==this.s?new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[this.nodes[this.i],this.nodes[this.i+1]],null):cljs.core.first.call(null,this.s)};cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1=function(a){return null==this.s?cljs.core.create_inode_seq.call(null,this.nodes,this.i+2,null):cljs.core.create_inode_seq.call(null,this.nodes,this.i,cljs.core.next.call(null,this.s))};
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2=function(a,b){return cljs.core.equiv_sequential.call(null,this,b)};cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2=function(a,b){return new cljs.core.NodeSeq(b,this.nodes,this.i,this.s,this.__hash)};cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1=function(a){return this.meta};
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1=function(a){return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this.meta)};cljs.core.__GT_NodeSeq=function(a,b,c,d,e){return new cljs.core.NodeSeq(a,b,c,d,e)};
cljs.core.create_inode_seq=function(){var a=null,b=function(b){return a.call(null,b,0,null)},c=function(a,b,c){if(null==c)for(c=a.length;;)if(b<c){if(null!=a[b])return new cljs.core.NodeSeq(null,a,b,null,null);var g=a[b+1];if(cljs.core.truth_(g)&&(g=g.inode_seq(),cljs.core.truth_(g)))return new cljs.core.NodeSeq(null,a,b+2,g,null);b+=2}else return null;else return new cljs.core.NodeSeq(null,a,b,c,null)},a=function(a,e,f){switch(arguments.length){case 1:return b.call(this,a);case 3:return c.call(this,
a,e,f)}throw Error("Invalid arity: "+arguments.length);};a.cljs$core$IFn$_invoke$arity$1=b;a.cljs$core$IFn$_invoke$arity$3=c;return a}();cljs.core.ArrayNodeSeq=function(a,b,c,d,e){this.meta=a;this.nodes=b;this.i=c;this.s=d;this.__hash=e;this.cljs$lang$protocol_mask$partition1$=0;this.cljs$lang$protocol_mask$partition0$=32374860};cljs.core.ArrayNodeSeq.cljs$lang$type=!0;cljs.core.ArrayNodeSeq.cljs$lang$ctorStr="cljs.core/ArrayNodeSeq";
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrWriter=function(a,b,c){return cljs.core._write.call(null,b,"cljs.core/ArrayNodeSeq")};cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1=function(a){a=this.__hash;return null!=a?a:this.__hash=a=cljs.core.hash_coll.call(null,this)};cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2=function(a,b){return cljs.core.cons.call(null,b,this)};cljs.core.ArrayNodeSeq.prototype.toString=function(){return cljs.core.pr_str_STAR_.call(null,this)};
cljs.core.ArrayNodeSeq.prototype.cljs$core$IReduce$_reduce$arity$2=function(a,b){return cljs.core.seq_reduce.call(null,b,this)};cljs.core.ArrayNodeSeq.prototype.cljs$core$IReduce$_reduce$arity$3=function(a,b,c){return cljs.core.seq_reduce.call(null,b,c,this)};cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1=function(a){return this};cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1=function(a){return cljs.core.first.call(null,this.s)};
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1=function(a){return cljs.core.create_array_node_seq.call(null,null,this.nodes,this.i,cljs.core.next.call(null,this.s))};cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2=function(a,b){return cljs.core.equiv_sequential.call(null,this,b)};cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2=function(a,b){return new cljs.core.ArrayNodeSeq(b,this.nodes,this.i,this.s,this.__hash)};
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1=function(a){return this.meta};cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1=function(a){return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this.meta)};cljs.core.__GT_ArrayNodeSeq=function(a,b,c,d,e){return new cljs.core.ArrayNodeSeq(a,b,c,d,e)};
cljs.core.create_array_node_seq=function(){var a=null,b=function(b){return a.call(null,null,b,0,null)},c=function(a,b,c,g){if(null==g)for(g=b.length;;)if(c<g){var h=b[c];if(cljs.core.truth_(h)&&(h=h.inode_seq(),cljs.core.truth_(h)))return new cljs.core.ArrayNodeSeq(a,b,c+1,h,null);c+=1}else return null;else return new cljs.core.ArrayNodeSeq(a,b,c,g,null)},a=function(a,e,f,g){switch(arguments.length){case 1:return b.call(this,a);case 4:return c.call(this,a,e,f,g)}throw Error("Invalid arity: "+arguments.length);
};a.cljs$core$IFn$_invoke$arity$1=b;a.cljs$core$IFn$_invoke$arity$4=c;return a}();cljs.core.PersistentHashMap=function(a,b,c,d,e,f){this.meta=a;this.cnt=b;this.root=c;this.has_nil_QMARK_=d;this.nil_val=e;this.__hash=f;this.cljs$lang$protocol_mask$partition1$=8196;this.cljs$lang$protocol_mask$partition0$=16123663};cljs.core.PersistentHashMap.cljs$lang$type=!0;cljs.core.PersistentHashMap.cljs$lang$ctorStr="cljs.core/PersistentHashMap";
cljs.core.PersistentHashMap.cljs$lang$ctorPrWriter=function(a,b,c){return cljs.core._write.call(null,b,"cljs.core/PersistentHashMap")};cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1=function(a){return new cljs.core.TransientHashMap({},this.root,this.cnt,this.has_nil_QMARK_,this.nil_val)};cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1=function(a){a=this.__hash;return null!=a?a:this.__hash=a=cljs.core.hash_imap.call(null,this)};
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2=function(a,b){return cljs.core._lookup.call(null,this,b,null)};cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3=function(a,b,c){return null==b?this.has_nil_QMARK_?this.nil_val:c:null==this.root?c:new cljs.core.Keyword(null,"else","else",1017020587)?this.root.inode_lookup(0,cljs.core.hash.call(null,b),b,c):null};
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3=function(a,b,c){if(null==b)return this.has_nil_QMARK_&&c===this.nil_val?this:new cljs.core.PersistentHashMap(this.meta,this.has_nil_QMARK_?this.cnt:this.cnt+1,this.root,!0,c,null);a=new cljs.core.Box(!1);b=(null==this.root?cljs.core.BitmapIndexedNode.EMPTY:this.root).inode_assoc(0,cljs.core.hash.call(null,b),b,c,a);return b===this.root?this:new cljs.core.PersistentHashMap(this.meta,a.val?this.cnt+1:this.cnt,b,this.has_nil_QMARK_,
this.nil_val,null)};cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2=function(a,b){return null==b?this.has_nil_QMARK_:null==this.root?!1:new cljs.core.Keyword(null,"else","else",1017020587)?this.root.inode_lookup(0,cljs.core.hash.call(null,b),b,cljs.core.lookup_sentinel)!==cljs.core.lookup_sentinel:null};
cljs.core.PersistentHashMap.prototype.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.cljs$core$ILookup$_lookup$arity$2(null,c);case 3:return this.cljs$core$ILookup$_lookup$arity$3(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();cljs.core.PersistentHashMap.prototype.apply=function(a,b){return this.call.apply(this,[this].concat(cljs.core.aclone.call(null,b)))};
cljs.core.PersistentHashMap.prototype.cljs$core$IFn$_invoke$arity$1=function(a){return this.cljs$core$ILookup$_lookup$arity$2(null,a)};cljs.core.PersistentHashMap.prototype.cljs$core$IFn$_invoke$arity$2=function(a,b){return this.cljs$core$ILookup$_lookup$arity$3(null,a,b)};
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3=function(a,b,c){a=this.has_nil_QMARK_?b.call(null,c,null,this.nil_val):c;return cljs.core.reduced_QMARK_.call(null,a)?cljs.core.deref.call(null,a):null!=this.root?this.root.kv_reduce(b,a):new cljs.core.Keyword(null,"else","else",1017020587)?a:null};
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2=function(a,b){if(cljs.core.vector_QMARK_.call(null,b))return cljs.core._assoc.call(null,this,cljs.core._nth.call(null,b,0),cljs.core._nth.call(null,b,1));for(var c=this,d=cljs.core.seq.call(null,b);;){if(null==d)return c;var e=cljs.core.first.call(null,d);if(cljs.core.vector_QMARK_.call(null,e))c=cljs.core._assoc.call(null,c,cljs.core._nth.call(null,e,0),cljs.core._nth.call(null,e,1)),d=cljs.core.next.call(null,d);else throw Error("conj on a map takes map entries or seqables of map entries");
}};cljs.core.PersistentHashMap.prototype.toString=function(){return cljs.core.pr_str_STAR_.call(null,this)};cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1=function(a){return 0<this.cnt?(a=null!=this.root?this.root.inode_seq():null,this.has_nil_QMARK_?cljs.core.cons.call(null,new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[null,this.nil_val],null),a):a):null};cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1=function(a){return this.cnt};
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2=function(a,b){return cljs.core.equiv_map.call(null,this,b)};cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2=function(a,b){return new cljs.core.PersistentHashMap(b,this.cnt,this.root,this.has_nil_QMARK_,this.nil_val,this.__hash)};
cljs.core.PersistentHashMap.prototype.cljs$core$ICloneable$_clone$arity$1=function(a){return new cljs.core.PersistentHashMap(this.meta,this.cnt,this.root,this.has_nil_QMARK_,this.nil_val,this.__hash)};cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1=function(a){return this.meta};cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1=function(a){return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this.meta)};
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2=function(a,b){if(null==b)return this.has_nil_QMARK_?new cljs.core.PersistentHashMap(this.meta,this.cnt-1,this.root,!1,null,null):this;if(null==this.root)return this;if(new cljs.core.Keyword(null,"else","else",1017020587)){var c=this.root.inode_without(0,cljs.core.hash.call(null,b),b);return c===this.root?this:new cljs.core.PersistentHashMap(this.meta,this.cnt-1,c,this.has_nil_QMARK_,this.nil_val,null)}return null};
cljs.core.__GT_PersistentHashMap=function(a,b,c,d,e,f){return new cljs.core.PersistentHashMap(a,b,c,d,e,f)};cljs.core.PersistentHashMap.EMPTY=new cljs.core.PersistentHashMap(null,0,null,!1,null,0);cljs.core.PersistentHashMap.fromArrays=function(a,b){for(var c=a.length,d=0,e=cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);;)if(d<c)var f=d+1,e=cljs.core._assoc_BANG_.call(null,e,a[d],b[d]),d=f;else return cljs.core.persistent_BANG_.call(null,e)};
cljs.core.TransientHashMap=function(a,b,c,d,e){this.edit=a;this.root=b;this.count=c;this.has_nil_QMARK_=d;this.nil_val=e;this.cljs$lang$protocol_mask$partition1$=56;this.cljs$lang$protocol_mask$partition0$=258};cljs.core.TransientHashMap.cljs$lang$type=!0;cljs.core.TransientHashMap.cljs$lang$ctorStr="cljs.core/TransientHashMap";cljs.core.TransientHashMap.cljs$lang$ctorPrWriter=function(a,b,c){return cljs.core._write.call(null,b,"cljs.core/TransientHashMap")};
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2=function(a,b){return this.without_BANG_(b)};cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3=function(a,b,c){return this.assoc_BANG_(b,c)};cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2=function(a,b){return this.conj_BANG_(b)};cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1=function(a){return this.persistent_BANG_()};
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2=function(a,b){return null==b?this.has_nil_QMARK_?this.nil_val:null:null==this.root?null:this.root.inode_lookup(0,cljs.core.hash.call(null,b),b)};cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3=function(a,b,c){return null==b?this.has_nil_QMARK_?this.nil_val:c:null==this.root?c:this.root.inode_lookup(0,cljs.core.hash.call(null,b),b,c)};
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1=function(a){if(this.edit)return this.count;throw Error("count after persistent!");};
cljs.core.TransientHashMap.prototype.conj_BANG_=function(a){if(this.edit){if(a?a.cljs$lang$protocol_mask$partition0$&2048||a.cljs$core$IMapEntry$||(a.cljs$lang$protocol_mask$partition0$?0:cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMapEntry,a)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMapEntry,a))return this.assoc_BANG_(cljs.core.key.call(null,a),cljs.core.val.call(null,a));a=cljs.core.seq.call(null,a);for(var b=this;;){var c=cljs.core.first.call(null,a);if(cljs.core.truth_(c))a=
cljs.core.next.call(null,a),b=b.assoc_BANG_(cljs.core.key.call(null,c),cljs.core.val.call(null,c));else return b}}else throw Error("conj! after persistent");};
cljs.core.TransientHashMap.prototype.assoc_BANG_=function(a,b){if(this.edit){if(null==a)this.nil_val!==b&&(this.nil_val=b),this.has_nil_QMARK_||(this.count+=1,this.has_nil_QMARK_=!0);else{var c=new cljs.core.Box(!1),d=(null==this.root?cljs.core.BitmapIndexedNode.EMPTY:this.root).inode_assoc_BANG_(this.edit,0,cljs.core.hash.call(null,a),a,b,c);d!==this.root&&(this.root=d);c.val&&(this.count+=1)}return this}throw Error("assoc! after persistent!");};
cljs.core.TransientHashMap.prototype.without_BANG_=function(a){if(this.edit){if(null==a)this.has_nil_QMARK_&&(this.has_nil_QMARK_=!1,this.nil_val=null,this.count-=1);else if(null!=this.root){var b=new cljs.core.Box(!1);a=this.root.inode_without_BANG_(this.edit,0,cljs.core.hash.call(null,a),a,b);a!==this.root&&(this.root=a);cljs.core.truth_(b[0])&&(this.count-=1)}return this}throw Error("dissoc! after persistent!");};
cljs.core.TransientHashMap.prototype.persistent_BANG_=function(){if(this.edit)return this.edit=null,new cljs.core.PersistentHashMap(null,this.count,this.root,this.has_nil_QMARK_,this.nil_val,null);throw Error("persistent! called twice");};cljs.core.__GT_TransientHashMap=function(a,b,c,d,e){return new cljs.core.TransientHashMap(a,b,c,d,e)};cljs.core.tree_map_seq_push=function(a,b,c){for(var d=b;;)if(null!=a)b=c?a.left:a.right,d=cljs.core.conj.call(null,d,a),a=b;else return d};
cljs.core.PersistentTreeMapSeq=function(a,b,c,d,e){this.meta=a;this.stack=b;this.ascending_QMARK_=c;this.cnt=d;this.__hash=e;this.cljs$lang$protocol_mask$partition1$=0;this.cljs$lang$protocol_mask$partition0$=32374862};cljs.core.PersistentTreeMapSeq.cljs$lang$type=!0;cljs.core.PersistentTreeMapSeq.cljs$lang$ctorStr="cljs.core/PersistentTreeMapSeq";cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrWriter=function(a,b,c){return cljs.core._write.call(null,b,"cljs.core/PersistentTreeMapSeq")};
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1=function(a){a=this.__hash;return null!=a?a:this.__hash=a=cljs.core.hash_coll.call(null,this)};cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2=function(a,b){return cljs.core.cons.call(null,b,this)};cljs.core.PersistentTreeMapSeq.prototype.toString=function(){return cljs.core.pr_str_STAR_.call(null,this)};
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IReduce$_reduce$arity$2=function(a,b){return cljs.core.seq_reduce.call(null,b,this)};cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IReduce$_reduce$arity$3=function(a,b,c){return cljs.core.seq_reduce.call(null,b,c,this)};cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1=function(a){return this};
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1=function(a){return 0>this.cnt?cljs.core.count.call(null,cljs.core.next.call(null,this))+1:this.cnt};cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1=function(a){return cljs.core.peek.call(null,this.stack)};
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1=function(a){a=cljs.core.first.call(null,this.stack);a=cljs.core.tree_map_seq_push.call(null,this.ascending_QMARK_?a.right:a.left,cljs.core.next.call(null,this.stack),this.ascending_QMARK_);return null!=a?new cljs.core.PersistentTreeMapSeq(null,a,this.ascending_QMARK_,this.cnt-1,null):cljs.core.List.EMPTY};
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2=function(a,b){return cljs.core.equiv_sequential.call(null,this,b)};cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2=function(a,b){return new cljs.core.PersistentTreeMapSeq(b,this.stack,this.ascending_QMARK_,this.cnt,this.__hash)};cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1=function(a){return this.meta};
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1=function(a){return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this.meta)};cljs.core.__GT_PersistentTreeMapSeq=function(a,b,c,d,e){return new cljs.core.PersistentTreeMapSeq(a,b,c,d,e)};cljs.core.create_tree_map_seq=function(a,b,c){return new cljs.core.PersistentTreeMapSeq(null,cljs.core.tree_map_seq_push.call(null,a,null,b),b,c,null)};
cljs.core.balance_left=function(a,b,c,d){return c instanceof cljs.core.RedNode?c.left instanceof cljs.core.RedNode?new cljs.core.RedNode(c.key,c.val,c.left.blacken(),new cljs.core.BlackNode(a,b,c.right,d,null),null):c.right instanceof cljs.core.RedNode?new cljs.core.RedNode(c.right.key,c.right.val,new cljs.core.BlackNode(c.key,c.val,c.left,c.right.left,null),new cljs.core.BlackNode(a,b,c.right.right,d,null),null):new cljs.core.Keyword(null,"else","else",1017020587)?new cljs.core.BlackNode(a,b,c,d,
null):null:new cljs.core.BlackNode(a,b,c,d,null)};
cljs.core.balance_right=function(a,b,c,d){return d instanceof cljs.core.RedNode?d.right instanceof cljs.core.RedNode?new cljs.core.RedNode(d.key,d.val,new cljs.core.BlackNode(a,b,c,d.left,null),d.right.blacken(),null):d.left instanceof cljs.core.RedNode?new cljs.core.RedNode(d.left.key,d.left.val,new cljs.core.BlackNode(a,b,c,d.left.left,null),new cljs.core.BlackNode(d.key,d.val,d.left.right,d.right,null),null):new cljs.core.Keyword(null,"else","else",1017020587)?new cljs.core.BlackNode(a,b,c,d,null):
null:new cljs.core.BlackNode(a,b,c,d,null)};
cljs.core.balance_left_del=function(a,b,c,d){if(c instanceof cljs.core.RedNode)return new cljs.core.RedNode(a,b,c.blacken(),d,null);if(d instanceof cljs.core.BlackNode)return cljs.core.balance_right.call(null,a,b,c,d.redden());if(d instanceof cljs.core.RedNode&&d.left instanceof cljs.core.BlackNode)return new cljs.core.RedNode(d.left.key,d.left.val,new cljs.core.BlackNode(a,b,c,d.left.left,null),cljs.core.balance_right.call(null,d.key,d.val,d.left.right,d.right.redden()),null);if(new cljs.core.Keyword(null,
"else","else",1017020587))throw Error("red-black tree invariant violation");return null};
cljs.core.balance_right_del=function(a,b,c,d){if(d instanceof cljs.core.RedNode)return new cljs.core.RedNode(a,b,c,d.blacken(),null);if(c instanceof cljs.core.BlackNode)return cljs.core.balance_left.call(null,a,b,c.redden(),d);if(c instanceof cljs.core.RedNode&&c.right instanceof cljs.core.BlackNode)return new cljs.core.RedNode(c.right.key,c.right.val,cljs.core.balance_left.call(null,c.key,c.val,c.left.redden(),c.right.left),new cljs.core.BlackNode(a,b,c.right.right,d,null),null);if(new cljs.core.Keyword(null,
"else","else",1017020587))throw Error("red-black tree invariant violation");return null};
cljs.core.tree_map_kv_reduce=function tree_map_kv_reduce(b,c,d){d=null!=b.left?tree_map_kv_reduce.call(null,b.left,c,d):d;if(cljs.core.reduced_QMARK_.call(null,d))return cljs.core.deref.call(null,d);d=c.call(null,d,b.key,b.val);if(cljs.core.reduced_QMARK_.call(null,d))return cljs.core.deref.call(null,d);b=null!=b.right?tree_map_kv_reduce.call(null,b.right,c,d):d;return cljs.core.reduced_QMARK_.call(null,b)?cljs.core.deref.call(null,b):b};
cljs.core.BlackNode=function(a,b,c,d,e){this.key=a;this.val=b;this.left=c;this.right=d;this.__hash=e;this.cljs$lang$protocol_mask$partition1$=0;this.cljs$lang$protocol_mask$partition0$=32402207};cljs.core.BlackNode.cljs$lang$type=!0;cljs.core.BlackNode.cljs$lang$ctorStr="cljs.core/BlackNode";cljs.core.BlackNode.cljs$lang$ctorPrWriter=function(a,b,c){return cljs.core._write.call(null,b,"cljs.core/BlackNode")};
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1=function(a){a=this.__hash;return null!=a?a:this.__hash=a=cljs.core.hash_coll.call(null,this)};cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2=function(a,b){return cljs.core._nth.call(null,this,b,null)};cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3=function(a,b,c){return cljs.core._nth.call(null,this,b,c)};
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3=function(a,b,c){return cljs.core.assoc.call(null,new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[this.key,this.val],null),b,c)};
cljs.core.BlackNode.prototype.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.cljs$core$ILookup$_lookup$arity$2(null,c);case 3:return this.cljs$core$ILookup$_lookup$arity$3(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();cljs.core.BlackNode.prototype.apply=function(a,b){return this.call.apply(this,[this].concat(cljs.core.aclone.call(null,b)))};
cljs.core.BlackNode.prototype.cljs$core$IFn$_invoke$arity$1=function(a){return this.cljs$core$ILookup$_lookup$arity$2(null,a)};cljs.core.BlackNode.prototype.cljs$core$IFn$_invoke$arity$2=function(a,b){return this.cljs$core$ILookup$_lookup$arity$3(null,a,b)};cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2=function(a,b){return new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,[this.key,this.val,b],null)};
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1=function(a){return this.key};cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1=function(a){return this.val};cljs.core.BlackNode.prototype.add_right=function(a){return a.balance_right(this)};cljs.core.BlackNode.prototype.redden=function(){return new cljs.core.RedNode(this.key,this.val,this.left,this.right,null)};
cljs.core.BlackNode.prototype.remove_right=function(a){return cljs.core.balance_right_del.call(null,this.key,this.val,this.left,a)};cljs.core.BlackNode.prototype.replace=function(a,b,c,d){return new cljs.core.BlackNode(a,b,c,d,null)};cljs.core.BlackNode.prototype.kv_reduce=function(a,b){return cljs.core.tree_map_kv_reduce.call(null,this,a,b)};cljs.core.BlackNode.prototype.remove_left=function(a){return cljs.core.balance_left_del.call(null,this.key,this.val,a,this.right)};
cljs.core.BlackNode.prototype.add_left=function(a){return a.balance_left(this)};cljs.core.BlackNode.prototype.balance_left=function(a){return new cljs.core.BlackNode(a.key,a.val,this,a.right,null)};cljs.core.BlackNode.prototype.balance_right=function(a){return new cljs.core.BlackNode(a.key,a.val,a.left,this,null)};cljs.core.BlackNode.prototype.blacken=function(){return this};cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2=function(a,b){return cljs.core.ci_reduce.call(null,this,b)};
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3=function(a,b,c){return cljs.core.ci_reduce.call(null,this,b,c)};cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1=function(a){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,this.val),this.key)};cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1=function(a){return 2};cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1=function(a){return this.val};
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1=function(a){return new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[this.key],null)};cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3=function(a,b,c){return(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[this.key,this.val],null)).cljs$core$IVector$_assoc_n$arity$3(null,b,c)};
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2=function(a,b){return cljs.core.equiv_sequential.call(null,this,b)};cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2=function(a,b){return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[this.key,this.val],null),b)};cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1=function(a){return null};
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2=function(a,b){if(0===b)return this.key;if(1===b)return this.val;new cljs.core.Keyword(null,"else","else",1017020587);return null};cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$3=function(a,b,c){return 0===b?this.key:1===b?this.val:new cljs.core.Keyword(null,"else","else",1017020587)?c:null};cljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1=function(a){return cljs.core.PersistentVector.EMPTY};
cljs.core.__GT_BlackNode=function(a,b,c,d,e){return new cljs.core.BlackNode(a,b,c,d,e)};cljs.core.RedNode=function(a,b,c,d,e){this.key=a;this.val=b;this.left=c;this.right=d;this.__hash=e;this.cljs$lang$protocol_mask$partition1$=0;this.cljs$lang$protocol_mask$partition0$=32402207};cljs.core.RedNode.cljs$lang$type=!0;cljs.core.RedNode.cljs$lang$ctorStr="cljs.core/RedNode";cljs.core.RedNode.cljs$lang$ctorPrWriter=function(a,b,c){return cljs.core._write.call(null,b,"cljs.core/RedNode")};
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1=function(a){a=this.__hash;return null!=a?a:this.__hash=a=cljs.core.hash_coll.call(null,this)};cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2=function(a,b){return cljs.core._nth.call(null,this,b,null)};cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3=function(a,b,c){return cljs.core._nth.call(null,this,b,c)};
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3=function(a,b,c){return cljs.core.assoc.call(null,new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[this.key,this.val],null),b,c)};
cljs.core.RedNode.prototype.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.cljs$core$ILookup$_lookup$arity$2(null,c);case 3:return this.cljs$core$ILookup$_lookup$arity$3(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();cljs.core.RedNode.prototype.apply=function(a,b){return this.call.apply(this,[this].concat(cljs.core.aclone.call(null,b)))};
cljs.core.RedNode.prototype.cljs$core$IFn$_invoke$arity$1=function(a){return this.cljs$core$ILookup$_lookup$arity$2(null,a)};cljs.core.RedNode.prototype.cljs$core$IFn$_invoke$arity$2=function(a,b){return this.cljs$core$ILookup$_lookup$arity$3(null,a,b)};cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2=function(a,b){return new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,[this.key,this.val,b],null)};
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1=function(a){return this.key};cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1=function(a){return this.val};cljs.core.RedNode.prototype.add_right=function(a){return new cljs.core.RedNode(this.key,this.val,this.left,a,null)};cljs.core.RedNode.prototype.redden=function(){throw Error("red-black tree invariant violation");};
cljs.core.RedNode.prototype.remove_right=function(a){return new cljs.core.RedNode(this.key,this.val,this.left,a,null)};cljs.core.RedNode.prototype.replace=function(a,b,c,d){return new cljs.core.RedNode(a,b,c,d,null)};cljs.core.RedNode.prototype.kv_reduce=function(a,b){return cljs.core.tree_map_kv_reduce.call(null,this,a,b)};cljs.core.RedNode.prototype.remove_left=function(a){return new cljs.core.RedNode(this.key,this.val,a,this.right,null)};
cljs.core.RedNode.prototype.add_left=function(a){return new cljs.core.RedNode(this.key,this.val,a,this.right,null)};
cljs.core.RedNode.prototype.balance_left=function(a){return this.left instanceof cljs.core.RedNode?new cljs.core.RedNode(this.key,this.val,this.left.blacken(),new cljs.core.BlackNode(a.key,a.val,this.right,a.right,null),null):this.right instanceof cljs.core.RedNode?new cljs.core.RedNode(this.right.key,this.right.val,new cljs.core.BlackNode(this.key,this.val,this.left,this.right.left,null),new cljs.core.BlackNode(a.key,a.val,this.right.right,a.right,null),null):new cljs.core.Keyword(null,"else","else",
1017020587)?new cljs.core.BlackNode(a.key,a.val,this,a.right,null):null};
cljs.core.RedNode.prototype.balance_right=function(a){return this.right instanceof cljs.core.RedNode?new cljs.core.RedNode(this.key,this.val,new cljs.core.BlackNode(a.key,a.val,a.left,this.left,null),this.right.blacken(),null):this.left instanceof cljs.core.RedNode?new cljs.core.RedNode(this.left.key,this.left.val,new cljs.core.BlackNode(a.key,a.val,a.left,this.left.left,null),new cljs.core.BlackNode(this.key,this.val,this.left.right,this.right,null),null):new cljs.core.Keyword(null,"else","else",
1017020587)?new cljs.core.BlackNode(a.key,a.val,a.left,this,null):null};cljs.core.RedNode.prototype.blacken=function(){return new cljs.core.BlackNode(this.key,this.val,this.left,this.right,null)};cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2=function(a,b){return cljs.core.ci_reduce.call(null,this,b)};cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3=function(a,b,c){return cljs.core.ci_reduce.call(null,this,b,c)};
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1=function(a){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,this.val),this.key)};cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1=function(a){return 2};cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1=function(a){return this.val};
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1=function(a){return new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[this.key],null)};cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3=function(a,b,c){return(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[this.key,this.val],null)).cljs$core$IVector$_assoc_n$arity$3(null,b,c)};
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2=function(a,b){return cljs.core.equiv_sequential.call(null,this,b)};cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2=function(a,b){return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[this.key,this.val],null),b)};cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1=function(a){return null};
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2=function(a,b){if(0===b)return this.key;if(1===b)return this.val;new cljs.core.Keyword(null,"else","else",1017020587);return null};cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$3=function(a,b,c){return 0===b?this.key:1===b?this.val:new cljs.core.Keyword(null,"else","else",1017020587)?c:null};cljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1=function(a){return cljs.core.PersistentVector.EMPTY};
cljs.core.__GT_RedNode=function(a,b,c,d,e){return new cljs.core.RedNode(a,b,c,d,e)};cljs.core.tree_map_add=function tree_map_add(b,c,d,e,f){if(null==c)return new cljs.core.RedNode(d,e,null,null,null);var g=b.call(null,d,c.key);return 0===g?(f[0]=c,null):0>g?(b=tree_map_add.call(null,b,c.left,d,e,f),null!=b?c.add_left(b):null):new cljs.core.Keyword(null,"else","else",1017020587)?(b=tree_map_add.call(null,b,c.right,d,e,f),null!=b?c.add_right(b):null):null};
cljs.core.tree_map_append=function tree_map_append(b,c){if(null==b)return c;if(null==c)return b;if(b instanceof cljs.core.RedNode){if(c instanceof cljs.core.RedNode){var d=tree_map_append.call(null,b.right,c.left);return d instanceof cljs.core.RedNode?new cljs.core.RedNode(d.key,d.val,new cljs.core.RedNode(b.key,b.val,b.left,d.left,null),new cljs.core.RedNode(c.key,c.val,d.right,c.right,null),null):new cljs.core.RedNode(b.key,b.val,b.left,new cljs.core.RedNode(c.key,c.val,d,c.right,null),null)}return new cljs.core.RedNode(b.key,
b.val,b.left,tree_map_append.call(null,b.right,c),null)}return c instanceof cljs.core.RedNode?new cljs.core.RedNode(c.key,c.val,tree_map_append.call(null,b,c.left),c.right,null):new cljs.core.Keyword(null,"else","else",1017020587)?(d=tree_map_append.call(null,b.right,c.left),d instanceof cljs.core.RedNode?new cljs.core.RedNode(d.key,d.val,new cljs.core.BlackNode(b.key,b.val,b.left,d.left,null),new cljs.core.BlackNode(c.key,c.val,d.right,c.right,null),null):cljs.core.balance_left_del.call(null,b.key,
b.val,b.left,new cljs.core.BlackNode(c.key,c.val,d,c.right,null))):null};
cljs.core.tree_map_remove=function tree_map_remove(b,c,d,e){if(null!=c){var f=b.call(null,d,c.key);if(0===f)return e[0]=c,cljs.core.tree_map_append.call(null,c.left,c.right);if(0>f)return b=tree_map_remove.call(null,b,c.left,d,e),null!=b||null!=e[0]?c.left instanceof cljs.core.BlackNode?cljs.core.balance_left_del.call(null,c.key,c.val,b,c.right):new cljs.core.RedNode(c.key,c.val,b,c.right,null):null;if(new cljs.core.Keyword(null,"else","else",1017020587))return b=tree_map_remove.call(null,b,c.right,
d,e),null!=b||null!=e[0]?c.right instanceof cljs.core.BlackNode?cljs.core.balance_right_del.call(null,c.key,c.val,c.left,b):new cljs.core.RedNode(c.key,c.val,c.left,b,null):null}return null};
cljs.core.tree_map_replace=function tree_map_replace(b,c,d,e){var f=c.key,g=b.call(null,d,f);return 0===g?c.replace(f,e,c.left,c.right):0>g?c.replace(f,c.val,tree_map_replace.call(null,b,c.left,d,e),c.right):new cljs.core.Keyword(null,"else","else",1017020587)?c.replace(f,c.val,c.left,tree_map_replace.call(null,b,c.right,d,e)):null};
cljs.core.PersistentTreeMap=function(a,b,c,d,e){this.comp=a;this.tree=b;this.cnt=c;this.meta=d;this.__hash=e;this.cljs$lang$protocol_mask$partition0$=418776847;this.cljs$lang$protocol_mask$partition1$=8192};cljs.core.PersistentTreeMap.cljs$lang$type=!0;cljs.core.PersistentTreeMap.cljs$lang$ctorStr="cljs.core/PersistentTreeMap";cljs.core.PersistentTreeMap.cljs$lang$ctorPrWriter=function(a,b,c){return cljs.core._write.call(null,b,"cljs.core/PersistentTreeMap")};
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1=function(a){a=this.__hash;return null!=a?a:this.__hash=a=cljs.core.hash_imap.call(null,this)};cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2=function(a,b){return cljs.core._lookup.call(null,this,b,null)};cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3=function(a,b,c){a=this.entry_at(b);return null!=a?a.val:c};
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3=function(a,b,c){a=[null];var d=cljs.core.tree_map_add.call(null,this.comp,this.tree,b,c,a);return null==d?(a=cljs.core.nth.call(null,a,0),cljs.core._EQ_.call(null,c,a.val)?this:new cljs.core.PersistentTreeMap(this.comp,cljs.core.tree_map_replace.call(null,this.comp,this.tree,b,c),this.cnt,this.meta,null)):new cljs.core.PersistentTreeMap(this.comp,d.blacken(),this.cnt+1,this.meta,null)};
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2=function(a,b){return null!=this.entry_at(b)};cljs.core.PersistentTreeMap.prototype.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.cljs$core$ILookup$_lookup$arity$2(null,c);case 3:return this.cljs$core$ILookup$_lookup$arity$3(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();
cljs.core.PersistentTreeMap.prototype.apply=function(a,b){return this.call.apply(this,[this].concat(cljs.core.aclone.call(null,b)))};cljs.core.PersistentTreeMap.prototype.cljs$core$IFn$_invoke$arity$1=function(a){return this.cljs$core$ILookup$_lookup$arity$2(null,a)};cljs.core.PersistentTreeMap.prototype.cljs$core$IFn$_invoke$arity$2=function(a,b){return this.cljs$core$ILookup$_lookup$arity$3(null,a,b)};
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3=function(a,b,c){return null!=this.tree?cljs.core.tree_map_kv_reduce.call(null,this.tree,b,c):c};
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2=function(a,b){if(cljs.core.vector_QMARK_.call(null,b))return cljs.core._assoc.call(null,this,cljs.core._nth.call(null,b,0),cljs.core._nth.call(null,b,1));for(var c=this,d=cljs.core.seq.call(null,b);;){if(null==d)return c;var e=cljs.core.first.call(null,d);if(cljs.core.vector_QMARK_.call(null,e))c=cljs.core._assoc.call(null,c,cljs.core._nth.call(null,e,0),cljs.core._nth.call(null,e,1)),d=cljs.core.next.call(null,d);else throw Error("conj on a map takes map entries or seqables of map entries");
}};cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1=function(a){return 0<this.cnt?cljs.core.create_tree_map_seq.call(null,this.tree,!1,this.cnt):null};cljs.core.PersistentTreeMap.prototype.toString=function(){return cljs.core.pr_str_STAR_.call(null,this)};
cljs.core.PersistentTreeMap.prototype.entry_at=function(a){for(var b=this.tree;;)if(null!=b){var c=this.comp.call(null,a,b.key);if(0===c)return b;if(0>c)b=b.left;else if(new cljs.core.Keyword(null,"else","else",1017020587))b=b.right;else return null}else return null};cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2=function(a,b){return 0<this.cnt?cljs.core.create_tree_map_seq.call(null,this.tree,b,this.cnt):null};
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3=function(a,b,c){if(0<this.cnt){a=null;for(var d=this.tree;;)if(null!=d){var e=this.comp.call(null,b,d.key);if(0===e)return new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,a,d),c,-1,null);if(cljs.core.truth_(c))0>e?(a=cljs.core.conj.call(null,a,d),d=d.left):d=d.right;else if(new cljs.core.Keyword(null,"else","else",1017020587))0<e?(a=cljs.core.conj.call(null,a,d),d=d.right):d=d.left;else return null}else return null==
a?null:new cljs.core.PersistentTreeMapSeq(null,a,c,-1,null)}else return null};cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_entry_key$arity$2=function(a,b){return cljs.core.key.call(null,b)};cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1=function(a){return this.comp};cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1=function(a){return 0<this.cnt?cljs.core.create_tree_map_seq.call(null,this.tree,!0,this.cnt):null};
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1=function(a){return this.cnt};cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2=function(a,b){return cljs.core.equiv_map.call(null,this,b)};cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2=function(a,b){return new cljs.core.PersistentTreeMap(this.comp,this.tree,this.cnt,b,this.__hash)};
cljs.core.PersistentTreeMap.prototype.cljs$core$ICloneable$_clone$arity$1=function(a){return new cljs.core.PersistentTreeMap(this.comp,this.tree,this.cnt,this.meta,this.__hash)};cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1=function(a){return this.meta};cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1=function(a){return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this.meta)};
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2=function(a,b){var c=[null],d=cljs.core.tree_map_remove.call(null,this.comp,this.tree,b,c);return null==d?null==cljs.core.nth.call(null,c,0)?this:new cljs.core.PersistentTreeMap(this.comp,null,0,this.meta,null):new cljs.core.PersistentTreeMap(this.comp,d.blacken(),this.cnt-1,this.meta,null)};cljs.core.__GT_PersistentTreeMap=function(a,b,c,d,e){return new cljs.core.PersistentTreeMap(a,b,c,d,e)};
cljs.core.PersistentTreeMap.EMPTY=new cljs.core.PersistentTreeMap(cljs.core.compare,null,0,null,0);
cljs.core.hash_map=function(){var a=function(a){a=cljs.core.seq.call(null,a);for(var b=cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);;)if(a){var e=cljs.core.nnext.call(null,a),b=cljs.core.assoc_BANG_.call(null,b,cljs.core.first.call(null,a),cljs.core.second.call(null,a));a=e}else return cljs.core.persistent_BANG_.call(null,b)},b=function(b){var d=null;0<arguments.length&&(d=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0));return a.call(this,d)};b.cljs$lang$maxFixedArity=
0;b.cljs$lang$applyTo=function(b){b=cljs.core.seq(b);return a(b)};b.cljs$core$IFn$_invoke$arity$variadic=a;return b}();
cljs.core.array_map=function(){var a=function(a){return new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,cljs.core.count.call(null,a),2),cljs.core.apply.call(null,cljs.core.array,a),null)},b=function(b){var d=null;0<arguments.length&&(d=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0));return a.call(this,d)};b.cljs$lang$maxFixedArity=0;b.cljs$lang$applyTo=function(b){b=cljs.core.seq(b);return a(b)};b.cljs$core$IFn$_invoke$arity$variadic=a;return b}();
cljs.core.obj_map=function(){var a=function(a){var b=[],e;e={};for(a=cljs.core.seq.call(null,a);;)if(a)b.push(cljs.core.first.call(null,a)),e[cljs.core.first.call(null,a)]=cljs.core.second.call(null,a),a=cljs.core.nnext.call(null,a);else return cljs.core.ObjMap.fromObject.call(null,b,e)},b=function(b){var d=null;0<arguments.length&&(d=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0));return a.call(this,d)};b.cljs$lang$maxFixedArity=0;b.cljs$lang$applyTo=function(b){b=cljs.core.seq(b);
return a(b)};b.cljs$core$IFn$_invoke$arity$variadic=a;return b}();
cljs.core.sorted_map=function(){var a=function(a){a=cljs.core.seq.call(null,a);for(var b=cljs.core.PersistentTreeMap.EMPTY;;)if(a){var e=cljs.core.nnext.call(null,a),b=cljs.core.assoc.call(null,b,cljs.core.first.call(null,a),cljs.core.second.call(null,a));a=e}else return b},b=function(b){var d=null;0<arguments.length&&(d=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0));return a.call(this,d)};b.cljs$lang$maxFixedArity=0;b.cljs$lang$applyTo=function(b){b=cljs.core.seq(b);return a(b)};
b.cljs$core$IFn$_invoke$arity$variadic=a;return b}();
cljs.core.sorted_map_by=function(){var a=function(a,b){for(var e=cljs.core.seq.call(null,b),f=new cljs.core.PersistentTreeMap(cljs.core.fn__GT_comparator.call(null,a),null,0,null,0);;)if(e)var g=cljs.core.nnext.call(null,e),f=cljs.core.assoc.call(null,f,cljs.core.first.call(null,e),cljs.core.second.call(null,e)),e=g;else return f},b=function(b,d){var e=null;1<arguments.length&&(e=cljs.core.array_seq(Array.prototype.slice.call(arguments,1),0));return a.call(this,b,e)};b.cljs$lang$maxFixedArity=1;b.cljs$lang$applyTo=
function(b){var d=cljs.core.first(b);b=cljs.core.rest(b);return a(d,b)};b.cljs$core$IFn$_invoke$arity$variadic=a;return b}();cljs.core.KeySeq=function(a,b){this.mseq=a;this._meta=b;this.cljs$lang$protocol_mask$partition1$=0;this.cljs$lang$protocol_mask$partition0$=32374988};cljs.core.KeySeq.cljs$lang$type=!0;cljs.core.KeySeq.cljs$lang$ctorStr="cljs.core/KeySeq";cljs.core.KeySeq.cljs$lang$ctorPrWriter=function(a,b,c){return cljs.core._write.call(null,b,"cljs.core/KeySeq")};
cljs.core.KeySeq.prototype.cljs$core$IHash$_hash$arity$1=function(a){return cljs.core.hash_coll.call(null,this)};
cljs.core.KeySeq.prototype.cljs$core$INext$_next$arity$1=function(a){a=((a=this.mseq)?a.cljs$lang$protocol_mask$partition0$&128||a.cljs$core$INext$||(a.cljs$lang$protocol_mask$partition0$?0:cljs.core.native_satisfies_QMARK_.call(null,cljs.core.INext,a)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.INext,a))?cljs.core._next.call(null,this.mseq):cljs.core.next.call(null,this.mseq);return null==a?null:new cljs.core.KeySeq(a,this._meta)};
cljs.core.KeySeq.prototype.cljs$core$ICollection$_conj$arity$2=function(a,b){return cljs.core.cons.call(null,b,this)};cljs.core.KeySeq.prototype.toString=function(){return cljs.core.pr_str_STAR_.call(null,this)};cljs.core.KeySeq.prototype.cljs$core$IReduce$_reduce$arity$2=function(a,b){return cljs.core.seq_reduce.call(null,b,this)};cljs.core.KeySeq.prototype.cljs$core$IReduce$_reduce$arity$3=function(a,b,c){return cljs.core.seq_reduce.call(null,b,c,this)};
cljs.core.KeySeq.prototype.cljs$core$ISeqable$_seq$arity$1=function(a){return this};cljs.core.KeySeq.prototype.cljs$core$ISeq$_first$arity$1=function(a){a=cljs.core._first.call(null,this.mseq);return cljs.core._key.call(null,a)};
cljs.core.KeySeq.prototype.cljs$core$ISeq$_rest$arity$1=function(a){a=((a=this.mseq)?a.cljs$lang$protocol_mask$partition0$&128||a.cljs$core$INext$||(a.cljs$lang$protocol_mask$partition0$?0:cljs.core.native_satisfies_QMARK_.call(null,cljs.core.INext,a)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.INext,a))?cljs.core._next.call(null,this.mseq):cljs.core.next.call(null,this.mseq);return null!=a?new cljs.core.KeySeq(a,this._meta):cljs.core.List.EMPTY};
cljs.core.KeySeq.prototype.cljs$core$IEquiv$_equiv$arity$2=function(a,b){return cljs.core.equiv_sequential.call(null,this,b)};cljs.core.KeySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2=function(a,b){return new cljs.core.KeySeq(this.mseq,b)};cljs.core.KeySeq.prototype.cljs$core$IMeta$_meta$arity$1=function(a){return this._meta};cljs.core.KeySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1=function(a){return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this._meta)};
cljs.core.__GT_KeySeq=function(a,b){return new cljs.core.KeySeq(a,b)};cljs.core.keys=function(a){return(a=cljs.core.seq.call(null,a))?new cljs.core.KeySeq(a,null):null};cljs.core.key=function(a){return cljs.core._key.call(null,a)};cljs.core.ValSeq=function(a,b){this.mseq=a;this._meta=b;this.cljs$lang$protocol_mask$partition1$=0;this.cljs$lang$protocol_mask$partition0$=32374988};cljs.core.ValSeq.cljs$lang$type=!0;cljs.core.ValSeq.cljs$lang$ctorStr="cljs.core/ValSeq";
cljs.core.ValSeq.cljs$lang$ctorPrWriter=function(a,b,c){return cljs.core._write.call(null,b,"cljs.core/ValSeq")};cljs.core.ValSeq.prototype.cljs$core$IHash$_hash$arity$1=function(a){return cljs.core.hash_coll.call(null,this)};
cljs.core.ValSeq.prototype.cljs$core$INext$_next$arity$1=function(a){a=((a=this.mseq)?a.cljs$lang$protocol_mask$partition0$&128||a.cljs$core$INext$||(a.cljs$lang$protocol_mask$partition0$?0:cljs.core.native_satisfies_QMARK_.call(null,cljs.core.INext,a)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.INext,a))?cljs.core._next.call(null,this.mseq):cljs.core.next.call(null,this.mseq);return null==a?null:new cljs.core.ValSeq(a,this._meta)};
cljs.core.ValSeq.prototype.cljs$core$ICollection$_conj$arity$2=function(a,b){return cljs.core.cons.call(null,b,this)};cljs.core.ValSeq.prototype.toString=function(){return cljs.core.pr_str_STAR_.call(null,this)};cljs.core.ValSeq.prototype.cljs$core$IReduce$_reduce$arity$2=function(a,b){return cljs.core.seq_reduce.call(null,b,this)};cljs.core.ValSeq.prototype.cljs$core$IReduce$_reduce$arity$3=function(a,b,c){return cljs.core.seq_reduce.call(null,b,c,this)};
cljs.core.ValSeq.prototype.cljs$core$ISeqable$_seq$arity$1=function(a){return this};cljs.core.ValSeq.prototype.cljs$core$ISeq$_first$arity$1=function(a){a=cljs.core._first.call(null,this.mseq);return cljs.core._val.call(null,a)};
cljs.core.ValSeq.prototype.cljs$core$ISeq$_rest$arity$1=function(a){a=((a=this.mseq)?a.cljs$lang$protocol_mask$partition0$&128||a.cljs$core$INext$||(a.cljs$lang$protocol_mask$partition0$?0:cljs.core.native_satisfies_QMARK_.call(null,cljs.core.INext,a)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.INext,a))?cljs.core._next.call(null,this.mseq):cljs.core.next.call(null,this.mseq);return null!=a?new cljs.core.ValSeq(a,this._meta):cljs.core.List.EMPTY};
cljs.core.ValSeq.prototype.cljs$core$IEquiv$_equiv$arity$2=function(a,b){return cljs.core.equiv_sequential.call(null,this,b)};cljs.core.ValSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2=function(a,b){return new cljs.core.ValSeq(this.mseq,b)};cljs.core.ValSeq.prototype.cljs$core$IMeta$_meta$arity$1=function(a){return this._meta};cljs.core.ValSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1=function(a){return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this._meta)};
cljs.core.__GT_ValSeq=function(a,b){return new cljs.core.ValSeq(a,b)};cljs.core.vals=function(a){return(a=cljs.core.seq.call(null,a))?new cljs.core.ValSeq(a,null):null};cljs.core.val=function(a){return cljs.core._val.call(null,a)};
cljs.core.merge=function(){var a=function(a){return cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,a))?cljs.core.reduce.call(null,function(a,b){return cljs.core.conj.call(null,cljs.core.truth_(a)?a:cljs.core.PersistentArrayMap.EMPTY,b)},a):null},b=function(b){var d=null;0<arguments.length&&(d=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0));return a.call(this,d)};b.cljs$lang$maxFixedArity=0;b.cljs$lang$applyTo=function(b){b=cljs.core.seq(b);return a(b)};b.cljs$core$IFn$_invoke$arity$variadic=
a;return b}();
cljs.core.merge_with=function(){var a=function(a,b){if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,b))){var e=function(a){return function(b,c){return cljs.core.reduce.call(null,a,cljs.core.truth_(b)?b:cljs.core.PersistentArrayMap.EMPTY,cljs.core.seq.call(null,c))}}(function(b,d){var e=cljs.core.first.call(null,d),k=cljs.core.second.call(null,d);return cljs.core.contains_QMARK_.call(null,b,e)?cljs.core.assoc.call(null,b,e,a.call(null,cljs.core.get.call(null,b,e),k)):cljs.core.assoc.call(null,
b,e,k)});return cljs.core.reduce.call(null,e,b)}return null},b=function(b,d){var e=null;1<arguments.length&&(e=cljs.core.array_seq(Array.prototype.slice.call(arguments,1),0));return a.call(this,b,e)};b.cljs$lang$maxFixedArity=1;b.cljs$lang$applyTo=function(b){var d=cljs.core.first(b);b=cljs.core.rest(b);return a(d,b)};b.cljs$core$IFn$_invoke$arity$variadic=a;return b}();
cljs.core.select_keys=function(a,b){for(var c=cljs.core.PersistentArrayMap.EMPTY,d=cljs.core.seq.call(null,b);;)if(d)var e=cljs.core.first.call(null,d),f=cljs.core.get.call(null,a,e,new cljs.core.Keyword("cljs.core","not-found","cljs.core/not-found",4155500789)),c=cljs.core.not_EQ_.call(null,f,new cljs.core.Keyword("cljs.core","not-found","cljs.core/not-found",4155500789))?cljs.core.assoc.call(null,c,e,f):c,d=cljs.core.next.call(null,d);else return c};
cljs.core.PersistentHashSet=function(a,b,c){this.meta=a;this.hash_map=b;this.__hash=c;this.cljs$lang$protocol_mask$partition1$=8196;this.cljs$lang$protocol_mask$partition0$=15077647};cljs.core.PersistentHashSet.cljs$lang$type=!0;cljs.core.PersistentHashSet.cljs$lang$ctorStr="cljs.core/PersistentHashSet";cljs.core.PersistentHashSet.cljs$lang$ctorPrWriter=function(a,b,c){return cljs.core._write.call(null,b,"cljs.core/PersistentHashSet")};
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1=function(a){return new cljs.core.TransientHashSet(cljs.core._as_transient.call(null,this.hash_map))};cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1=function(a){a=this.__hash;return null!=a?a:this.__hash=a=cljs.core.hash_iset.call(null,this)};cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2=function(a,b){return cljs.core._lookup.call(null,this,b,null)};
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3=function(a,b,c){return cljs.core._contains_key_QMARK_.call(null,this.hash_map,b)?b:c};cljs.core.PersistentHashSet.prototype.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.cljs$core$ILookup$_lookup$arity$2(null,c);case 3:return this.cljs$core$ILookup$_lookup$arity$3(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();
cljs.core.PersistentHashSet.prototype.apply=function(a,b){return this.call.apply(this,[this].concat(cljs.core.aclone.call(null,b)))};cljs.core.PersistentHashSet.prototype.cljs$core$IFn$_invoke$arity$1=function(a){return this.cljs$core$ILookup$_lookup$arity$2(null,a)};cljs.core.PersistentHashSet.prototype.cljs$core$IFn$_invoke$arity$2=function(a,b){return this.cljs$core$ILookup$_lookup$arity$3(null,a,b)};
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2=function(a,b){return new cljs.core.PersistentHashSet(this.meta,cljs.core.assoc.call(null,this.hash_map,b,null),null)};cljs.core.PersistentHashSet.prototype.toString=function(){return cljs.core.pr_str_STAR_.call(null,this)};cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1=function(a){return cljs.core.keys.call(null,this.hash_map)};
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2=function(a,b){return new cljs.core.PersistentHashSet(this.meta,cljs.core._dissoc.call(null,this.hash_map,b),null)};cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1=function(a){return cljs.core._count.call(null,this.hash_map)};
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2=function(a,b){return cljs.core.set_QMARK_.call(null,b)&&cljs.core.count.call(null,this)===cljs.core.count.call(null,b)&&cljs.core.every_QMARK_.call(null,function(a){return function(b){return cljs.core.contains_QMARK_.call(null,a,b)}}(this),b)};cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2=function(a,b){return new cljs.core.PersistentHashSet(b,this.hash_map,this.__hash)};
cljs.core.PersistentHashSet.prototype.cljs$core$ICloneable$_clone$arity$1=function(a){return new cljs.core.PersistentHashSet(this.meta,this.hash_map,this.__hash)};cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1=function(a){return this.meta};cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1=function(a){return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this.meta)};
cljs.core.__GT_PersistentHashSet=function(a,b,c){return new cljs.core.PersistentHashSet(a,b,c)};cljs.core.PersistentHashSet.EMPTY=new cljs.core.PersistentHashSet(null,cljs.core.PersistentArrayMap.EMPTY,0);
cljs.core.PersistentHashSet.fromArray=function(a,b){var c=a.length;if(c<=cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD){b||cljs.core.aclone.call(null,a);for(var d=0,e=cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);;)if(d<c)var f=d+1,e=cljs.core._assoc_BANG_.call(null,e,a[d],null),d=f;else return new cljs.core.PersistentHashSet(null,cljs.core._persistent_BANG_.call(null,e),null)}else for(d=0,e=cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);;)if(d<c)f=d+1,e=cljs.core._conj_BANG_.call(null,
e,a[d]),d=f;else return cljs.core._persistent_BANG_.call(null,e)};cljs.core.TransientHashSet=function(a){this.transient_map=a;this.cljs$lang$protocol_mask$partition0$=259;this.cljs$lang$protocol_mask$partition1$=136};cljs.core.TransientHashSet.cljs$lang$type=!0;cljs.core.TransientHashSet.cljs$lang$ctorStr="cljs.core/TransientHashSet";cljs.core.TransientHashSet.cljs$lang$ctorPrWriter=function(a,b,c){return cljs.core._write.call(null,b,"cljs.core/TransientHashSet")};
cljs.core.TransientHashSet.prototype.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:var e;e=cljs.core._lookup.call(null,this.transient_map,c,cljs.core.lookup_sentinel)===cljs.core.lookup_sentinel?null:c;return e;case 3:return e=cljs.core._lookup.call(null,this.transient_map,c,cljs.core.lookup_sentinel)===cljs.core.lookup_sentinel?d:c,e}throw Error("Invalid arity: "+arguments.length);}}();
cljs.core.TransientHashSet.prototype.apply=function(a,b){return this.call.apply(this,[this].concat(cljs.core.aclone.call(null,b)))};cljs.core.TransientHashSet.prototype.cljs$core$IFn$_invoke$arity$1=function(a){return cljs.core._lookup.call(null,this.transient_map,a,cljs.core.lookup_sentinel)===cljs.core.lookup_sentinel?null:a};
cljs.core.TransientHashSet.prototype.cljs$core$IFn$_invoke$arity$2=function(a,b){return cljs.core._lookup.call(null,this.transient_map,a,cljs.core.lookup_sentinel)===cljs.core.lookup_sentinel?b:a};cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2=function(a,b){return cljs.core._lookup.call(null,this,b,null)};
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3=function(a,b,c){return cljs.core._lookup.call(null,this.transient_map,b,cljs.core.lookup_sentinel)===cljs.core.lookup_sentinel?c:b};cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1=function(a){return cljs.core.count.call(null,this.transient_map)};
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2=function(a,b){this.transient_map=cljs.core.dissoc_BANG_.call(null,this.transient_map,b);return this};cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2=function(a,b){this.transient_map=cljs.core.assoc_BANG_.call(null,this.transient_map,b,null);return this};
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1=function(a){return new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this.transient_map),null)};cljs.core.__GT_TransientHashSet=function(a){return new cljs.core.TransientHashSet(a)};cljs.core.PersistentTreeSet=function(a,b,c){this.meta=a;this.tree_map=b;this.__hash=c;this.cljs$lang$protocol_mask$partition0$=417730831;this.cljs$lang$protocol_mask$partition1$=8192};
cljs.core.PersistentTreeSet.cljs$lang$type=!0;cljs.core.PersistentTreeSet.cljs$lang$ctorStr="cljs.core/PersistentTreeSet";cljs.core.PersistentTreeSet.cljs$lang$ctorPrWriter=function(a,b,c){return cljs.core._write.call(null,b,"cljs.core/PersistentTreeSet")};cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1=function(a){a=this.__hash;return null!=a?a:this.__hash=a=cljs.core.hash_iset.call(null,this)};
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2=function(a,b){return cljs.core._lookup.call(null,this,b,null)};cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3=function(a,b,c){a=this.tree_map.entry_at(b);return null!=a?a.key:c};
cljs.core.PersistentTreeSet.prototype.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.cljs$core$ILookup$_lookup$arity$2(null,c);case 3:return this.cljs$core$ILookup$_lookup$arity$3(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();cljs.core.PersistentTreeSet.prototype.apply=function(a,b){return this.call.apply(this,[this].concat(cljs.core.aclone.call(null,b)))};
cljs.core.PersistentTreeSet.prototype.cljs$core$IFn$_invoke$arity$1=function(a){return this.cljs$core$ILookup$_lookup$arity$2(null,a)};cljs.core.PersistentTreeSet.prototype.cljs$core$IFn$_invoke$arity$2=function(a,b){return this.cljs$core$ILookup$_lookup$arity$3(null,a,b)};cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2=function(a,b){return new cljs.core.PersistentTreeSet(this.meta,cljs.core.assoc.call(null,this.tree_map,b,null),null)};
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1=function(a){return 0<cljs.core.count.call(null,this.tree_map)?cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this.tree_map)):null};cljs.core.PersistentTreeSet.prototype.toString=function(){return cljs.core.pr_str_STAR_.call(null,this)};
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2=function(a,b){return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this.tree_map,b))};cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3=function(a,b,c){return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this.tree_map,b,c))};cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2=function(a,b){return b};
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1=function(a){return cljs.core._comparator.call(null,this.tree_map)};cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1=function(a){return cljs.core.keys.call(null,this.tree_map)};cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2=function(a,b){return new cljs.core.PersistentTreeSet(this.meta,cljs.core.dissoc.call(null,this.tree_map,b),null)};
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1=function(a){return cljs.core.count.call(null,this.tree_map)};cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2=function(a,b){return cljs.core.set_QMARK_.call(null,b)&&cljs.core.count.call(null,this)===cljs.core.count.call(null,b)&&cljs.core.every_QMARK_.call(null,function(a){return function(b){return cljs.core.contains_QMARK_.call(null,a,b)}}(this),b)};
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2=function(a,b){return new cljs.core.PersistentTreeSet(b,this.tree_map,this.__hash)};cljs.core.PersistentTreeSet.prototype.cljs$core$ICloneable$_clone$arity$1=function(a){return new cljs.core.PersistentTreeSet(this.meta,this.tree_map,this.__hash)};cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1=function(a){return this.meta};
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1=function(a){return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this.meta)};cljs.core.__GT_PersistentTreeSet=function(a,b,c){return new cljs.core.PersistentTreeSet(a,b,c)};cljs.core.PersistentTreeSet.EMPTY=new cljs.core.PersistentTreeSet(null,cljs.core.PersistentTreeMap.EMPTY,0);
cljs.core.set_from_indexed_seq=function(a){a=a.arr;a:{for(var b=0,c=cljs.core._as_transient.call(null,cljs.core.PersistentHashSet.EMPTY);;)if(b<a.length)var d=b+1,c=cljs.core._conj_BANG_.call(null,c,a[b]),b=d;else{a=c;break a}a=void 0}return cljs.core._persistent_BANG_.call(null,a)};
cljs.core.set=function(a){a=cljs.core.seq.call(null,a);if(null==a)return cljs.core.PersistentHashSet.EMPTY;if(a instanceof cljs.core.IndexedSeq&&0===a.i)return cljs.core.set_from_indexed_seq.call(null,a);if(new cljs.core.Keyword(null,"else","else",1017020587))for(var b=cljs.core._as_transient.call(null,cljs.core.PersistentHashSet.EMPTY);;)if(null!=a){var c=cljs.core._next.call(null,a),b=cljs.core._conj_BANG_.call(null,b,cljs.core._first.call(null,a));a=c}else return cljs.core._persistent_BANG_.call(null,
b);else return null};
cljs.core.hash_set=function(){var a=null,b=function(){return cljs.core.PersistentHashSet.EMPTY},c=function(){var a=function(a){return cljs.core.set.call(null,a)},b=function(b){var c=null;0<arguments.length&&(c=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0));return a.call(this,c)};b.cljs$lang$maxFixedArity=0;b.cljs$lang$applyTo=function(b){b=cljs.core.seq(b);return a(b)};b.cljs$core$IFn$_invoke$arity$variadic=a;return b}(),a=function(a){switch(arguments.length){case 0:return b.call(this);default:return c.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(arguments,
0))}throw Error("Invalid arity: "+arguments.length);};a.cljs$lang$maxFixedArity=0;a.cljs$lang$applyTo=c.cljs$lang$applyTo;a.cljs$core$IFn$_invoke$arity$0=b;a.cljs$core$IFn$_invoke$arity$variadic=c.cljs$core$IFn$_invoke$arity$variadic;return a}();
cljs.core.sorted_set=function(){var a=function(a){return cljs.core.reduce.call(null,cljs.core._conj,cljs.core.PersistentTreeSet.EMPTY,a)},b=function(b){var d=null;0<arguments.length&&(d=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0));return a.call(this,d)};b.cljs$lang$maxFixedArity=0;b.cljs$lang$applyTo=function(b){b=cljs.core.seq(b);return a(b)};b.cljs$core$IFn$_invoke$arity$variadic=a;return b}();
cljs.core.sorted_set_by=function(){var a=function(a,b){return cljs.core.reduce.call(null,cljs.core._conj,new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map_by.call(null,a),0),b)},b=function(b,d){var e=null;1<arguments.length&&(e=cljs.core.array_seq(Array.prototype.slice.call(arguments,1),0));return a.call(this,b,e)};b.cljs$lang$maxFixedArity=1;b.cljs$lang$applyTo=function(b){var d=cljs.core.first(b);b=cljs.core.rest(b);return a(d,b)};b.cljs$core$IFn$_invoke$arity$variadic=a;return b}();
cljs.core.replace=function(a,b){if(cljs.core.vector_QMARK_.call(null,b)){var c=cljs.core.count.call(null,b);return cljs.core.reduce.call(null,function(b){return function(b,c){var d=cljs.core.find.call(null,a,cljs.core.nth.call(null,b,c));return cljs.core.truth_(d)?cljs.core.assoc.call(null,b,c,cljs.core.second.call(null,d)):b}}(c),b,cljs.core.take.call(null,c,cljs.core.iterate.call(null,cljs.core.inc,0)))}return cljs.core.map.call(null,function(b){var c=cljs.core.find.call(null,a,b);return cljs.core.truth_(c)?
cljs.core.second.call(null,c):b},b)};cljs.core.distinct=function(a){return function c(a,e){return new cljs.core.LazySeq(null,function(){return function(a,d){for(;;){var e=a,k=cljs.core.nth.call(null,e,0,null);if(e=cljs.core.seq.call(null,e))if(cljs.core.contains_QMARK_.call(null,d,k))k=cljs.core.rest.call(null,e),e=d,a=k,d=e;else return cljs.core.cons.call(null,k,c.call(null,cljs.core.rest.call(null,e),cljs.core.conj.call(null,d,k)));else return null}}.call(null,a,e)},null,null)}.call(null,a,cljs.core.PersistentHashSet.EMPTY)};
cljs.core.butlast=function(a){for(var b=cljs.core.PersistentVector.EMPTY;;)if(cljs.core.next.call(null,a))b=cljs.core.conj.call(null,b,cljs.core.first.call(null,a)),a=cljs.core.next.call(null,a);else return cljs.core.seq.call(null,b)};cljs.core.name=function(a){if(a&&(a.cljs$lang$protocol_mask$partition1$&4096||a.cljs$core$INamed$))return cljs.core._name.call(null,a);if("string"===typeof a)return a;throw Error("Doesn't support name: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a));};
cljs.core.zipmap=function(a,b){for(var c=cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),d=cljs.core.seq.call(null,a),e=cljs.core.seq.call(null,b);;)if(d&&e)c=cljs.core.assoc_BANG_.call(null,c,cljs.core.first.call(null,d),cljs.core.first.call(null,e)),d=cljs.core.next.call(null,d),e=cljs.core.next.call(null,e);else return cljs.core.persistent_BANG_.call(null,c)};
cljs.core.max_key=function(){var a=null,b=function(a,b,c){return a.call(null,b)>a.call(null,c)?b:c},c=function(){var b=function(b,c,d,e){return cljs.core.reduce.call(null,function(c,d){return a.call(null,b,c,d)},a.call(null,b,c,d),e)},c=function(a,c,e,k){var l=null;3<arguments.length&&(l=cljs.core.array_seq(Array.prototype.slice.call(arguments,3),0));return b.call(this,a,c,e,l)};c.cljs$lang$maxFixedArity=3;c.cljs$lang$applyTo=function(a){var c=cljs.core.first(a);a=cljs.core.next(a);var e=cljs.core.first(a);
a=cljs.core.next(a);var k=cljs.core.first(a);a=cljs.core.rest(a);return b(c,e,k,a)};c.cljs$core$IFn$_invoke$arity$variadic=b;return c}(),a=function(a,e,f,g){switch(arguments.length){case 2:return e;case 3:return b.call(this,a,e,f);default:return c.cljs$core$IFn$_invoke$arity$variadic(a,e,f,cljs.core.array_seq(arguments,3))}throw Error("Invalid arity: "+arguments.length);};a.cljs$lang$maxFixedArity=3;a.cljs$lang$applyTo=c.cljs$lang$applyTo;a.cljs$core$IFn$_invoke$arity$2=function(a,b){return b};a.cljs$core$IFn$_invoke$arity$3=
b;a.cljs$core$IFn$_invoke$arity$variadic=c.cljs$core$IFn$_invoke$arity$variadic;return a}();
cljs.core.min_key=function(){var a=null,b=function(a,b,c){return a.call(null,b)<a.call(null,c)?b:c},c=function(){var b=function(b,c,d,e){return cljs.core.reduce.call(null,function(c,d){return a.call(null,b,c,d)},a.call(null,b,c,d),e)},c=function(a,c,e,k){var l=null;3<arguments.length&&(l=cljs.core.array_seq(Array.prototype.slice.call(arguments,3),0));return b.call(this,a,c,e,l)};c.cljs$lang$maxFixedArity=3;c.cljs$lang$applyTo=function(a){var c=cljs.core.first(a);a=cljs.core.next(a);var e=cljs.core.first(a);
a=cljs.core.next(a);var k=cljs.core.first(a);a=cljs.core.rest(a);return b(c,e,k,a)};c.cljs$core$IFn$_invoke$arity$variadic=b;return c}(),a=function(a,e,f,g){switch(arguments.length){case 2:return e;case 3:return b.call(this,a,e,f);default:return c.cljs$core$IFn$_invoke$arity$variadic(a,e,f,cljs.core.array_seq(arguments,3))}throw Error("Invalid arity: "+arguments.length);};a.cljs$lang$maxFixedArity=3;a.cljs$lang$applyTo=c.cljs$lang$applyTo;a.cljs$core$IFn$_invoke$arity$2=function(a,b){return b};a.cljs$core$IFn$_invoke$arity$3=
b;a.cljs$core$IFn$_invoke$arity$variadic=c.cljs$core$IFn$_invoke$arity$variadic;return a}();
cljs.core.partition_all=function(){var a=null,b=function(b,c){return a.call(null,b,b,c)},c=function(b,c,f){return new cljs.core.LazySeq(null,function(){var g=cljs.core.seq.call(null,f);return g?cljs.core.cons.call(null,cljs.core.take.call(null,b,g),a.call(null,b,c,cljs.core.drop.call(null,c,g))):null},null,null)},a=function(a,e,f){switch(arguments.length){case 2:return b.call(this,a,e);case 3:return c.call(this,a,e,f)}throw Error("Invalid arity: "+arguments.length);};a.cljs$core$IFn$_invoke$arity$2=
b;a.cljs$core$IFn$_invoke$arity$3=c;return a}();cljs.core.take_while=function take_while(b,c){return new cljs.core.LazySeq(null,function(){var d=cljs.core.seq.call(null,c);return d?cljs.core.truth_(b.call(null,cljs.core.first.call(null,d)))?cljs.core.cons.call(null,cljs.core.first.call(null,d),take_while.call(null,b,cljs.core.rest.call(null,d))):null:null},null,null)};
cljs.core.mk_bound_fn=function(a,b,c){return function(d){var e=cljs.core._comparator.call(null,a);return b.call(null,e.call(null,cljs.core._entry_key.call(null,a,d),c),0)}};
cljs.core.subseq=function(){var a=null,b=function(a,b,c){var g=cljs.core.mk_bound_fn.call(null,a,b,c);return cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_],!0).call(null,b))?(a=cljs.core._sorted_seq_from.call(null,a,c,!0),cljs.core.truth_(a)?(b=cljs.core.nth.call(null,a,0,null),cljs.core.truth_(g.call(null,b))?a:cljs.core.next.call(null,a)):null):cljs.core.take_while.call(null,g,cljs.core._sorted_seq.call(null,a,!0))},c=function(a,b,c,g,h){var k=cljs.core._sorted_seq_from.call(null,
a,c,!0);if(cljs.core.truth_(k)){var l=cljs.core.nth.call(null,k,0,null);return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,a,g,h),cljs.core.truth_(cljs.core.mk_bound_fn.call(null,a,b,c).call(null,l))?k:cljs.core.next.call(null,k))}return null},a=function(a,e,f,g,h){switch(arguments.length){case 3:return b.call(this,a,e,f);case 5:return c.call(this,a,e,f,g,h)}throw Error("Invalid arity: "+arguments.length);};a.cljs$core$IFn$_invoke$arity$3=b;a.cljs$core$IFn$_invoke$arity$5=c;return a}();
cljs.core.rsubseq=function(){var a=null,b=function(a,b,c){var g=cljs.core.mk_bound_fn.call(null,a,b,c);return cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_],!0).call(null,b))?(a=cljs.core._sorted_seq_from.call(null,a,c,!1),cljs.core.truth_(a)?(b=cljs.core.nth.call(null,a,0,null),cljs.core.truth_(g.call(null,b))?a:cljs.core.next.call(null,a)):null):cljs.core.take_while.call(null,g,cljs.core._sorted_seq.call(null,a,!1))},c=function(a,b,c,g,h){var k=cljs.core._sorted_seq_from.call(null,
a,h,!1);if(cljs.core.truth_(k)){var l=cljs.core.nth.call(null,k,0,null);return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,a,b,c),cljs.core.truth_(cljs.core.mk_bound_fn.call(null,a,g,h).call(null,l))?k:cljs.core.next.call(null,k))}return null},a=function(a,e,f,g,h){switch(arguments.length){case 3:return b.call(this,a,e,f);case 5:return c.call(this,a,e,f,g,h)}throw Error("Invalid arity: "+arguments.length);};a.cljs$core$IFn$_invoke$arity$3=b;a.cljs$core$IFn$_invoke$arity$5=c;return a}();
cljs.core.Range=function(a,b,c,d,e){this.meta=a;this.start=b;this.end=c;this.step=d;this.__hash=e;this.cljs$lang$protocol_mask$partition0$=32375006;this.cljs$lang$protocol_mask$partition1$=8192};cljs.core.Range.cljs$lang$type=!0;cljs.core.Range.cljs$lang$ctorStr="cljs.core/Range";cljs.core.Range.cljs$lang$ctorPrWriter=function(a,b,c){return cljs.core._write.call(null,b,"cljs.core/Range")};
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1=function(a){a=this.__hash;return null!=a?a:this.__hash=a=cljs.core.hash_coll.call(null,this)};cljs.core.Range.prototype.cljs$core$INext$_next$arity$1=function(a){return 0<this.step?this.start+this.step<this.end?new cljs.core.Range(this.meta,this.start+this.step,this.end,this.step,null):null:this.start+this.step>this.end?new cljs.core.Range(this.meta,this.start+this.step,this.end,this.step,null):null};
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2=function(a,b){return cljs.core.cons.call(null,b,this)};cljs.core.Range.prototype.toString=function(){return cljs.core.pr_str_STAR_.call(null,this)};cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2=function(a,b){return cljs.core.ci_reduce.call(null,this,b)};cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3=function(a,b,c){return cljs.core.ci_reduce.call(null,this,b,c)};
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1=function(a){return 0<this.step?this.start<this.end?this:null:this.start>this.end?this:null};cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1=function(a){return cljs.core.not.call(null,cljs.core._seq.call(null,this))?0:Math.ceil((this.end-this.start)/this.step)};cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1=function(a){return null==cljs.core._seq.call(null,this)?null:this.start};
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1=function(a){return null!=cljs.core._seq.call(null,this)?new cljs.core.Range(this.meta,this.start+this.step,this.end,this.step,null):cljs.core.List.EMPTY};cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2=function(a,b){return cljs.core.equiv_sequential.call(null,this,b)};cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2=function(a,b){return new cljs.core.Range(b,this.start,this.end,this.step,this.__hash)};
cljs.core.Range.prototype.cljs$core$ICloneable$_clone$arity$1=function(a){return new cljs.core.Range(this.meta,this.start,this.end,this.step,this.__hash)};cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1=function(a){return this.meta};cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2=function(a,b){if(b<cljs.core._count.call(null,this))return this.start+b*this.step;if(this.start>this.end&&0===this.step)return this.start;throw Error("Index out of bounds");};
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3=function(a,b,c){return b<cljs.core._count.call(null,this)?this.start+b*this.step:this.start>this.end&&0===this.step?this.start:c};cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1=function(a){return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this.meta)};cljs.core.__GT_Range=function(a,b,c,d,e){return new cljs.core.Range(a,b,c,d,e)};
cljs.core.range=function(){var a=null,b=function(){return a.call(null,0,Number.MAX_VALUE,1)},c=function(b){return a.call(null,0,b,1)},d=function(b,c){return a.call(null,b,c,1)},e=function(a,b,c){return new cljs.core.Range(null,a,b,c,null)},a=function(a,g,h){switch(arguments.length){case 0:return b.call(this);case 1:return c.call(this,a);case 2:return d.call(this,a,g);case 3:return e.call(this,a,g,h)}throw Error("Invalid arity: "+arguments.length);};a.cljs$core$IFn$_invoke$arity$0=b;a.cljs$core$IFn$_invoke$arity$1=
c;a.cljs$core$IFn$_invoke$arity$2=d;a.cljs$core$IFn$_invoke$arity$3=e;return a}();cljs.core.take_nth=function take_nth(b,c){return new cljs.core.LazySeq(null,function(){var d=cljs.core.seq.call(null,c);return d?cljs.core.cons.call(null,cljs.core.first.call(null,d),take_nth.call(null,b,cljs.core.drop.call(null,b,d))):null},null,null)};
cljs.core.split_with=function(a,b){return new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.take_while.call(null,a,b),cljs.core.drop_while.call(null,a,b)],null)};
cljs.core.partition_by=function partition_by(b,c){return new cljs.core.LazySeq(null,function(){var d=cljs.core.seq.call(null,c);if(d){var e=cljs.core.first.call(null,d),f=b.call(null,e),e=cljs.core.cons.call(null,e,cljs.core.take_while.call(null,function(c,d,e,f){return function(c){return cljs.core._EQ_.call(null,d,b.call(null,c))}}(e,f,d,d),cljs.core.next.call(null,d)));return cljs.core.cons.call(null,e,partition_by.call(null,b,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,
e),d))))}return null},null,null)};cljs.core.frequencies=function(a){return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,function(a,c){return cljs.core.assoc_BANG_.call(null,a,c,cljs.core.get.call(null,a,c,0)+1)},cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),a))};
cljs.core.reductions=function(){var a=null,b=function(b,c){return new cljs.core.LazySeq(null,function(){var f=cljs.core.seq.call(null,c);return f?a.call(null,b,cljs.core.first.call(null,f),cljs.core.rest.call(null,f)):cljs.core._conj.call(null,cljs.core.List.EMPTY,b.call(null))},null,null)},c=function(b,c,f){return cljs.core.cons.call(null,c,new cljs.core.LazySeq(null,function(){var g=cljs.core.seq.call(null,f);return g?a.call(null,b,b.call(null,c,cljs.core.first.call(null,g)),cljs.core.rest.call(null,
g)):null},null,null))},a=function(a,e,f){switch(arguments.length){case 2:return b.call(this,a,e);case 3:return c.call(this,a,e,f)}throw Error("Invalid arity: "+arguments.length);};a.cljs$core$IFn$_invoke$arity$2=b;a.cljs$core$IFn$_invoke$arity$3=c;return a}();
cljs.core.juxt=function(){var a=null,b=function(a){return function(){var b=null,c=function(){var b=function(b,c,d,e){return new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,a,b,c,d,e)],null)},c=function(a,c,d,e){var f=null;3<arguments.length&&(f=cljs.core.array_seq(Array.prototype.slice.call(arguments,3),0));return b.call(this,a,c,d,f)};c.cljs$lang$maxFixedArity=3;c.cljs$lang$applyTo=function(a){var c=cljs.core.first(a);a=cljs.core.next(a);var d=
cljs.core.first(a);a=cljs.core.next(a);var e=cljs.core.first(a);a=cljs.core.rest(a);return b(c,d,e,a)};c.cljs$core$IFn$_invoke$arity$variadic=b;return c}(),b=function(b,d,e,g){switch(arguments.length){case 0:return new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[a.call(null)],null);case 1:return new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[a.call(null,b)],null);case 2:return new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,
[a.call(null,b,d)],null);case 3:return new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[a.call(null,b,d,e)],null);default:return c.cljs$core$IFn$_invoke$arity$variadic(b,d,e,cljs.core.array_seq(arguments,3))}throw Error("Invalid arity: "+arguments.length);};b.cljs$lang$maxFixedArity=3;b.cljs$lang$applyTo=c.cljs$lang$applyTo;return b}()},c=function(a,b){return function(){var c=null,d=function(){var c=function(c,d,e,h){return new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,
[cljs.core.apply.call(null,a,c,d,e,h),cljs.core.apply.call(null,b,c,d,e,h)],null)},d=function(a,b,d,e){var f=null;3<arguments.length&&(f=cljs.core.array_seq(Array.prototype.slice.call(arguments,3),0));return c.call(this,a,b,d,f)};d.cljs$lang$maxFixedArity=3;d.cljs$lang$applyTo=function(a){var b=cljs.core.first(a);a=cljs.core.next(a);var d=cljs.core.first(a);a=cljs.core.next(a);var e=cljs.core.first(a);a=cljs.core.rest(a);return c(b,d,e,a)};d.cljs$core$IFn$_invoke$arity$variadic=c;return d}(),c=function(c,
e,h,p){switch(arguments.length){case 0:return new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[a.call(null),b.call(null)],null);case 1:return new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[a.call(null,c),b.call(null,c)],null);case 2:return new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[a.call(null,c,e),b.call(null,c,e)],null);case 3:return new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,
[a.call(null,c,e,h),b.call(null,c,e,h)],null);default:return d.cljs$core$IFn$_invoke$arity$variadic(c,e,h,cljs.core.array_seq(arguments,3))}throw Error("Invalid arity: "+arguments.length);};c.cljs$lang$maxFixedArity=3;c.cljs$lang$applyTo=d.cljs$lang$applyTo;return c}()},d=function(a,b,c){return function(){var d=null,e=function(){var d=function(d,e,k,l){return new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,a,d,e,k,l),cljs.core.apply.call(null,
b,d,e,k,l),cljs.core.apply.call(null,c,d,e,k,l)],null)},e=function(a,b,c,e){var f=null;3<arguments.length&&(f=cljs.core.array_seq(Array.prototype.slice.call(arguments,3),0));return d.call(this,a,b,c,f)};e.cljs$lang$maxFixedArity=3;e.cljs$lang$applyTo=function(a){var b=cljs.core.first(a);a=cljs.core.next(a);var c=cljs.core.first(a);a=cljs.core.next(a);var e=cljs.core.first(a);a=cljs.core.rest(a);return d(b,c,e,a)};e.cljs$core$IFn$_invoke$arity$variadic=d;return e}(),d=function(d,k,p,q){switch(arguments.length){case 0:return new cljs.core.PersistentVector(null,
3,5,cljs.core.PersistentVector.EMPTY_NODE,[a.call(null),b.call(null),c.call(null)],null);case 1:return new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,[a.call(null,d),b.call(null,d),c.call(null,d)],null);case 2:return new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,[a.call(null,d,k),b.call(null,d,k),c.call(null,d,k)],null);case 3:return new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,[a.call(null,d,k,p),b.call(null,
d,k,p),c.call(null,d,k,p)],null);default:return e.cljs$core$IFn$_invoke$arity$variadic(d,k,p,cljs.core.array_seq(arguments,3))}throw Error("Invalid arity: "+arguments.length);};d.cljs$lang$maxFixedArity=3;d.cljs$lang$applyTo=e.cljs$lang$applyTo;return d}()},e=function(){var a=function(a,b,c,d){return function(a){return function(){var b=null,c=function(){return cljs.core.reduce.call(null,function(a){return function(a,b){return cljs.core.conj.call(null,a,b.call(null))}}(a),cljs.core.PersistentVector.EMPTY,
a)},d=function(b){return cljs.core.reduce.call(null,function(a){return function(a,c){return cljs.core.conj.call(null,a,c.call(null,b))}}(a),cljs.core.PersistentVector.EMPTY,a)},e=function(b,c){return cljs.core.reduce.call(null,function(a){return function(a,d){return cljs.core.conj.call(null,a,d.call(null,b,c))}}(a),cljs.core.PersistentVector.EMPTY,a)},f=function(b,c,d){return cljs.core.reduce.call(null,function(a){return function(a,e){return cljs.core.conj.call(null,a,e.call(null,b,c,d))}}(a),cljs.core.PersistentVector.EMPTY,
a)},g=function(){var b=function(b,c,d,e){return cljs.core.reduce.call(null,function(a){return function(a,f){return cljs.core.conj.call(null,a,cljs.core.apply.call(null,f,b,c,d,e))}}(a),cljs.core.PersistentVector.EMPTY,a)},c=function(a,c,d,e){var f=null;3<arguments.length&&(f=cljs.core.array_seq(Array.prototype.slice.call(arguments,3),0));return b.call(this,a,c,d,f)};c.cljs$lang$maxFixedArity=3;c.cljs$lang$applyTo=function(a){var c=cljs.core.first(a);a=cljs.core.next(a);var d=cljs.core.first(a);a=
cljs.core.next(a);var e=cljs.core.first(a);a=cljs.core.rest(a);return b(c,d,e,a)};c.cljs$core$IFn$_invoke$arity$variadic=b;return c}(),b=function(a,b,h,k){switch(arguments.length){case 0:return c.call(this);case 1:return d.call(this,a);case 2:return e.call(this,a,b);case 3:return f.call(this,a,b,h);default:return g.cljs$core$IFn$_invoke$arity$variadic(a,b,h,cljs.core.array_seq(arguments,3))}throw Error("Invalid arity: "+arguments.length);};b.cljs$lang$maxFixedArity=3;b.cljs$lang$applyTo=g.cljs$lang$applyTo;
return b}()}(cljs.core.list_STAR_.call(null,a,b,c,d))},b=function(b,c,d,e){var g=null;3<arguments.length&&(g=cljs.core.array_seq(Array.prototype.slice.call(arguments,3),0));return a.call(this,b,c,d,g)};b.cljs$lang$maxFixedArity=3;b.cljs$lang$applyTo=function(b){var c=cljs.core.first(b);b=cljs.core.next(b);var d=cljs.core.first(b);b=cljs.core.next(b);var e=cljs.core.first(b);b=cljs.core.rest(b);return a(c,d,e,b)};b.cljs$core$IFn$_invoke$arity$variadic=a;return b}(),a=function(a,g,h,k){switch(arguments.length){case 1:return b.call(this,
a);case 2:return c.call(this,a,g);case 3:return d.call(this,a,g,h);default:return e.cljs$core$IFn$_invoke$arity$variadic(a,g,h,cljs.core.array_seq(arguments,3))}throw Error("Invalid arity: "+arguments.length);};a.cljs$lang$maxFixedArity=3;a.cljs$lang$applyTo=e.cljs$lang$applyTo;a.cljs$core$IFn$_invoke$arity$1=b;a.cljs$core$IFn$_invoke$arity$2=c;a.cljs$core$IFn$_invoke$arity$3=d;a.cljs$core$IFn$_invoke$arity$variadic=e.cljs$core$IFn$_invoke$arity$variadic;return a}();
cljs.core.dorun=function(){var a=null,b=function(a){for(;;)if(cljs.core.seq.call(null,a))a=cljs.core.next.call(null,a);else return null},c=function(a,b){for(;;)if(cljs.core.seq.call(null,b)&&0<a){var c=a-1,g=cljs.core.next.call(null,b);a=c;b=g}else return null},a=function(a,e){switch(arguments.length){case 1:return b.call(this,a);case 2:return c.call(this,a,e)}throw Error("Invalid arity: "+arguments.length);};a.cljs$core$IFn$_invoke$arity$1=b;a.cljs$core$IFn$_invoke$arity$2=c;return a}();
cljs.core.doall=function(){var a=null,b=function(a){cljs.core.dorun.call(null,a);return a},c=function(a,b){cljs.core.dorun.call(null,a,b);return b},a=function(a,e){switch(arguments.length){case 1:return b.call(this,a);case 2:return c.call(this,a,e)}throw Error("Invalid arity: "+arguments.length);};a.cljs$core$IFn$_invoke$arity$1=b;a.cljs$core$IFn$_invoke$arity$2=c;return a}();cljs.core.regexp_QMARK_=function(a){return a instanceof RegExp};
cljs.core.re_matches=function(a,b){var c=a.exec(b);return cljs.core._EQ_.call(null,cljs.core.first.call(null,c),b)?1===cljs.core.count.call(null,c)?cljs.core.first.call(null,c):cljs.core.vec.call(null,c):null};cljs.core.re_find=function(a,b){var c=a.exec(b);return null==c?null:1===cljs.core.count.call(null,c)?cljs.core.first.call(null,c):cljs.core.vec.call(null,c)};
cljs.core.re_seq=function re_seq(b,c){var d=cljs.core.re_find.call(null,b,c),e=c.search(b),f=cljs.core.coll_QMARK_.call(null,d)?cljs.core.first.call(null,d):d,g=cljs.core.subs.call(null,c,e+cljs.core.count.call(null,f));return cljs.core.truth_(d)?new cljs.core.LazySeq(null,function(c,d,e,f){return function(){return cljs.core.cons.call(null,c,cljs.core.seq.call(null,f)?re_seq.call(null,b,f):null)}}(d,e,f,g),null,null):null};
cljs.core.re_pattern=function(a){var b=cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,a);cljs.core.nth.call(null,b,0,null);a=cljs.core.nth.call(null,b,1,null);b=cljs.core.nth.call(null,b,2,null);return RegExp(b,a)};
cljs.core.pr_sequential_writer=function(a,b,c,d,e,f,g){var h=cljs.core._STAR_print_level_STAR_;try{cljs.core._STAR_print_level_STAR_=null==cljs.core._STAR_print_level_STAR_?null:cljs.core._STAR_print_level_STAR_-1;if(null!=cljs.core._STAR_print_level_STAR_&&0>cljs.core._STAR_print_level_STAR_)return cljs.core._write.call(null,a,"#");cljs.core._write.call(null,a,c);cljs.core.seq.call(null,g)&&b.call(null,cljs.core.first.call(null,g),a,f);for(var k=cljs.core.next.call(null,g),l=(new cljs.core.Keyword(null,
"print-length","print-length",3960797560)).cljs$core$IFn$_invoke$arity$1(f)-1;;)if(!k||null!=l&&0===l){cljs.core.seq.call(null,k)&&0===l&&(cljs.core._write.call(null,a,d),cljs.core._write.call(null,a,"..."));break}else{cljs.core._write.call(null,a,d);b.call(null,cljs.core.first.call(null,k),a,f);var m=cljs.core.next.call(null,k);c=l-1;k=m;l=c}return cljs.core._write.call(null,a,e)}finally{cljs.core._STAR_print_level_STAR_=h}};
cljs.core.write_all=function(){var a=function(a,b){for(var e=cljs.core.seq.call(null,b),f=null,g=0,h=0;;)if(h<g){var k=cljs.core._nth.call(null,f,h);cljs.core._write.call(null,a,k);h+=1}else if(e=cljs.core.seq.call(null,e))f=e,cljs.core.chunked_seq_QMARK_.call(null,f)?(e=cljs.core.chunk_first.call(null,f),g=cljs.core.chunk_rest.call(null,f),f=e,k=cljs.core.count.call(null,e),e=g,g=k):(k=cljs.core.first.call(null,f),cljs.core._write.call(null,a,k),e=cljs.core.next.call(null,f),f=null,g=0),h=0;else return null},
b=function(b,d){var e=null;1<arguments.length&&(e=cljs.core.array_seq(Array.prototype.slice.call(arguments,1),0));return a.call(this,b,e)};b.cljs$lang$maxFixedArity=1;b.cljs$lang$applyTo=function(b){var d=cljs.core.first(b);b=cljs.core.rest(b);return a(d,b)};b.cljs$core$IFn$_invoke$arity$variadic=a;return b}();cljs.core.string_print=function(a){cljs.core._STAR_print_fn_STAR_.call(null,a);return null};cljs.core.flush=function(){return null};
cljs.core.char_escapes=function(){return{'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"}}();cljs.core.quote_string=function(a){return'"'+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a.replace(RegExp('[\\\\"\b\f\n\r\t]',"g"),function(a){return cljs.core.char_escapes[a]}))+'"'};
cljs.core.pr_writer=function pr_writer(b,c,d){if(null==b)return cljs.core._write.call(null,c,"nil");if(void 0===b)return cljs.core._write.call(null,c,"#\x3cundefined\x3e");if(new cljs.core.Keyword(null,"else","else",1017020587)){cljs.core.truth_(function(){var c=cljs.core.get.call(null,d,new cljs.core.Keyword(null,"meta","meta",1017252215));return cljs.core.truth_(c)?(c=b?b.cljs$lang$protocol_mask$partition0$&131072||b.cljs$core$IMeta$?!0:b.cljs$lang$protocol_mask$partition0$?!1:cljs.core.native_satisfies_QMARK_.call(null,
cljs.core.IMeta,b):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMeta,b))?cljs.core.meta.call(null,b):c:c}())&&(cljs.core._write.call(null,c,"^"),pr_writer.call(null,cljs.core.meta.call(null,b),c,d),cljs.core._write.call(null,c," "));if(null==b)return cljs.core._write.call(null,c,"nil");if(b.cljs$lang$type)return b.cljs$lang$ctorPrWriter(b,c,d);if(b&&(b.cljs$lang$protocol_mask$partition0$&2147483648||b.cljs$core$IPrintWithWriter$))return cljs.core._pr_writer.call(null,b,c,d);if(cljs.core.type.call(null,
b)===Boolean||"number"===typeof b)return cljs.core._write.call(null,c,""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b));if(cljs.core.object_QMARK_.call(null,b))return cljs.core._write.call(null,c,"#js "),cljs.core.print_map.call(null,cljs.core.map.call(null,function(c){return new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.keyword.call(null,c),b[c]],null)},cljs.core.js_keys.call(null,b)),pr_writer,c,d);if(b instanceof Array)return cljs.core.pr_sequential_writer.call(null,
c,pr_writer,"#js ["," ","]",d,b);if(goog.isString(b))return cljs.core.truth_((new cljs.core.Keyword(null,"readably","readably",4441712502)).cljs$core$IFn$_invoke$arity$1(d))?cljs.core._write.call(null,c,cljs.core.quote_string.call(null,b)):cljs.core._write.call(null,c,b);if(cljs.core.fn_QMARK_.call(null,b))return cljs.core.write_all.call(null,c,"#\x3c",""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b),"\x3e");if(b instanceof Date){var e=function(b,c){for(var d=""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b);;)if(cljs.core.count.call(null,
d)<c)d="0"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(d);else return d};return cljs.core.write_all.call(null,c,'#inst "',""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b.getUTCFullYear()),"-",e.call(null,b.getUTCMonth()+1,2),"-",e.call(null,b.getUTCDate(),2),"T",e.call(null,b.getUTCHours(),2),":",e.call(null,b.getUTCMinutes(),2),":",e.call(null,b.getUTCSeconds(),2),".",e.call(null,b.getUTCMilliseconds(),3),"-",'00:00"')}return cljs.core.regexp_QMARK_.call(null,b)?cljs.core.write_all.call(null,c,
'#"',b.source,'"'):(b?b.cljs$lang$protocol_mask$partition0$&2147483648||b.cljs$core$IPrintWithWriter$||(b.cljs$lang$protocol_mask$partition0$?0:cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPrintWithWriter,b)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPrintWithWriter,b))?cljs.core._pr_writer.call(null,b,c,d):new cljs.core.Keyword(null,"else","else",1017020587)?cljs.core.write_all.call(null,c,"#\x3c",""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b),"\x3e"):null}return null};
cljs.core.pr_seq_writer=function(a,b,c){cljs.core.pr_writer.call(null,cljs.core.first.call(null,a),b,c);a=cljs.core.seq.call(null,cljs.core.next.call(null,a));for(var d=null,e=0,f=0;;)if(f<e){var g=cljs.core._nth.call(null,d,f);cljs.core._write.call(null,b," ");cljs.core.pr_writer.call(null,g,b,c);f+=1}else if(a=cljs.core.seq.call(null,a))d=a,cljs.core.chunked_seq_QMARK_.call(null,d)?(a=cljs.core.chunk_first.call(null,d),e=cljs.core.chunk_rest.call(null,d),d=a,g=cljs.core.count.call(null,a),a=e,e=
g):(g=cljs.core.first.call(null,d),cljs.core._write.call(null,b," "),cljs.core.pr_writer.call(null,g,b,c),a=cljs.core.next.call(null,d),d=null,e=0),f=0;else return null};cljs.core.pr_sb_with_opts=function(a,b){var c=new goog.string.StringBuffer,d=new cljs.core.StringBufferWriter(c);cljs.core.pr_seq_writer.call(null,a,d,b);cljs.core._flush.call(null,d);return c};
cljs.core.pr_str_with_opts=function(a,b){return cljs.core.empty_QMARK_.call(null,a)?"":""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_sb_with_opts.call(null,a,b))};cljs.core.prn_str_with_opts=function(a,b){if(cljs.core.empty_QMARK_.call(null,a))return"\n";var c=cljs.core.pr_sb_with_opts.call(null,a,b);c.append("\n");return""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)};
cljs.core.pr_with_opts=function(a,b){return cljs.core.string_print.call(null,cljs.core.pr_str_with_opts.call(null,a,b))};cljs.core.newline=function(a){cljs.core.string_print.call(null,"\n");return cljs.core.truth_(cljs.core.get.call(null,a,new cljs.core.Keyword(null,"flush-on-newline","flush-on-newline",4338025857)))?cljs.core.flush.call(null):null};
cljs.core.pr_str=function(){var a=function(a){return cljs.core.pr_str_with_opts.call(null,a,cljs.core.pr_opts.call(null))},b=function(b){var d=null;0<arguments.length&&(d=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0));return a.call(this,d)};b.cljs$lang$maxFixedArity=0;b.cljs$lang$applyTo=function(b){b=cljs.core.seq(b);return a(b)};b.cljs$core$IFn$_invoke$arity$variadic=a;return b}();
cljs.core.prn_str=function(){var a=function(a){return cljs.core.prn_str_with_opts.call(null,a,cljs.core.pr_opts.call(null))},b=function(b){var d=null;0<arguments.length&&(d=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0));return a.call(this,d)};b.cljs$lang$maxFixedArity=0;b.cljs$lang$applyTo=function(b){b=cljs.core.seq(b);return a(b)};b.cljs$core$IFn$_invoke$arity$variadic=a;return b}();
cljs.core.pr=function(){var a=function(a){return cljs.core.pr_with_opts.call(null,a,cljs.core.pr_opts.call(null))},b=function(b){var d=null;0<arguments.length&&(d=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0));return a.call(this,d)};b.cljs$lang$maxFixedArity=0;b.cljs$lang$applyTo=function(b){b=cljs.core.seq(b);return a(b)};b.cljs$core$IFn$_invoke$arity$variadic=a;return b}();
cljs.core.print=function(){var a=function(a){return cljs.core.pr_with_opts.call(null,a,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),new cljs.core.Keyword(null,"readably","readably",4441712502),!1))},b=function(b){var d=null;0<arguments.length&&(d=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0));return a.call(this,d)};b.cljs$lang$maxFixedArity=0;b.cljs$lang$applyTo=function(b){b=cljs.core.seq(b);return a(b)};b.cljs$core$IFn$_invoke$arity$variadic=a;return b}();
cljs.core.print_str=function(){var a=function(a){return cljs.core.pr_str_with_opts.call(null,a,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),new cljs.core.Keyword(null,"readably","readably",4441712502),!1))},b=function(b){var d=null;0<arguments.length&&(d=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0));return a.call(this,d)};b.cljs$lang$maxFixedArity=0;b.cljs$lang$applyTo=function(b){b=cljs.core.seq(b);return a(b)};b.cljs$core$IFn$_invoke$arity$variadic=a;return b}();
cljs.core.println=function(){var a=function(a){cljs.core.pr_with_opts.call(null,a,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),new cljs.core.Keyword(null,"readably","readably",4441712502),!1));return cljs.core.truth_(cljs.core._STAR_print_newline_STAR_)?cljs.core.newline.call(null,cljs.core.pr_opts.call(null)):null},b=function(b){var d=null;0<arguments.length&&(d=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0));return a.call(this,d)};b.cljs$lang$maxFixedArity=0;b.cljs$lang$applyTo=
function(b){b=cljs.core.seq(b);return a(b)};b.cljs$core$IFn$_invoke$arity$variadic=a;return b}();
cljs.core.println_str=function(){var a=function(a){return cljs.core.prn_str_with_opts.call(null,a,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),new cljs.core.Keyword(null,"readably","readably",4441712502),!1))},b=function(b){var d=null;0<arguments.length&&(d=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0));return a.call(this,d)};b.cljs$lang$maxFixedArity=0;b.cljs$lang$applyTo=function(b){b=cljs.core.seq(b);return a(b)};b.cljs$core$IFn$_invoke$arity$variadic=a;return b}();
cljs.core.prn=function(){var a=function(a){cljs.core.pr_with_opts.call(null,a,cljs.core.pr_opts.call(null));return cljs.core.truth_(cljs.core._STAR_print_newline_STAR_)?cljs.core.newline.call(null,cljs.core.pr_opts.call(null)):null},b=function(b){var d=null;0<arguments.length&&(d=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0));return a.call(this,d)};b.cljs$lang$maxFixedArity=0;b.cljs$lang$applyTo=function(b){b=cljs.core.seq(b);return a(b)};b.cljs$core$IFn$_invoke$arity$variadic=a;
return b}();cljs.core.print_map=function(a,b,c,d){return cljs.core.pr_sequential_writer.call(null,c,function(a,c,d){b.call(null,cljs.core.key.call(null,a),c,d);cljs.core._write.call(null,c," ");return b.call(null,cljs.core.val.call(null,a),c,d)},"{",", ","}",d,cljs.core.seq.call(null,a))};cljs.core.KeySeq.prototype.cljs$core$IPrintWithWriter$=!0;
cljs.core.KeySeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3=function(a,b,c){return cljs.core.pr_sequential_writer.call(null,b,cljs.core.pr_writer,"("," ",")",c,this)};cljs.core.IndexedSeq.prototype.cljs$core$IPrintWithWriter$=!0;cljs.core.IndexedSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3=function(a,b,c){return cljs.core.pr_sequential_writer.call(null,b,cljs.core.pr_writer,"("," ",")",c,this)};cljs.core.Subvec.prototype.cljs$core$IPrintWithWriter$=!0;
cljs.core.Subvec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3=function(a,b,c){return cljs.core.pr_sequential_writer.call(null,b,cljs.core.pr_writer,"["," ","]",c,this)};cljs.core.ChunkedCons.prototype.cljs$core$IPrintWithWriter$=!0;cljs.core.ChunkedCons.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3=function(a,b,c){return cljs.core.pr_sequential_writer.call(null,b,cljs.core.pr_writer,"("," ",")",c,this)};cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintWithWriter$=!0;
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3=function(a,b,c){return cljs.core.print_map.call(null,this,cljs.core.pr_writer,b,c)};cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$=!0;cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3=function(a,b,c){return cljs.core.print_map.call(null,this,cljs.core.pr_writer,b,c)};cljs.core.PersistentQueue.prototype.cljs$core$IPrintWithWriter$=!0;
cljs.core.PersistentQueue.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3=function(a,b,c){return cljs.core.pr_sequential_writer.call(null,b,cljs.core.pr_writer,"#queue ["," ","]",c,cljs.core.seq.call(null,this))};cljs.core.LazySeq.prototype.cljs$core$IPrintWithWriter$=!0;cljs.core.LazySeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3=function(a,b,c){return cljs.core.pr_sequential_writer.call(null,b,cljs.core.pr_writer,"("," ",")",c,this)};
cljs.core.RSeq.prototype.cljs$core$IPrintWithWriter$=!0;cljs.core.RSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3=function(a,b,c){return cljs.core.pr_sequential_writer.call(null,b,cljs.core.pr_writer,"("," ",")",c,this)};cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintWithWriter$=!0;cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3=function(a,b,c){return cljs.core.pr_sequential_writer.call(null,b,cljs.core.pr_writer,"#{"," ","}",c,this)};
cljs.core.NodeSeq.prototype.cljs$core$IPrintWithWriter$=!0;cljs.core.NodeSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3=function(a,b,c){return cljs.core.pr_sequential_writer.call(null,b,cljs.core.pr_writer,"("," ",")",c,this)};cljs.core.RedNode.prototype.cljs$core$IPrintWithWriter$=!0;cljs.core.RedNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3=function(a,b,c){return cljs.core.pr_sequential_writer.call(null,b,cljs.core.pr_writer,"["," ","]",c,this)};
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintWithWriter$=!0;cljs.core.ChunkedSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3=function(a,b,c){return cljs.core.pr_sequential_writer.call(null,b,cljs.core.pr_writer,"("," ",")",c,this)};cljs.core.PersistentHashMap.prototype.cljs$core$IPrintWithWriter$=!0;cljs.core.PersistentHashMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3=function(a,b,c){return cljs.core.print_map.call(null,this,cljs.core.pr_writer,b,c)};
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintWithWriter$=!0;cljs.core.PersistentHashSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3=function(a,b,c){return cljs.core.pr_sequential_writer.call(null,b,cljs.core.pr_writer,"#{"," ","}",c,this)};cljs.core.PersistentVector.prototype.cljs$core$IPrintWithWriter$=!0;
cljs.core.PersistentVector.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3=function(a,b,c){return cljs.core.pr_sequential_writer.call(null,b,cljs.core.pr_writer,"["," ","]",c,this)};cljs.core.List.prototype.cljs$core$IPrintWithWriter$=!0;cljs.core.List.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3=function(a,b,c){return cljs.core.pr_sequential_writer.call(null,b,cljs.core.pr_writer,"("," ",")",c,this)};cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintWithWriter$=!0;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3=function(a,b,c){return cljs.core.pr_sequential_writer.call(null,b,cljs.core.pr_writer,"("," ",")",c,this)};cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IPrintWithWriter$=!0;cljs.core.PersistentArrayMapSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3=function(a,b,c){return cljs.core.pr_sequential_writer.call(null,b,cljs.core.pr_writer,"("," ",")",c,this)};
cljs.core.EmptyList.prototype.cljs$core$IPrintWithWriter$=!0;cljs.core.EmptyList.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3=function(a,b,c){return cljs.core._write.call(null,b,"()")};cljs.core.BlackNode.prototype.cljs$core$IPrintWithWriter$=!0;cljs.core.BlackNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3=function(a,b,c){return cljs.core.pr_sequential_writer.call(null,b,cljs.core.pr_writer,"["," ","]",c,this)};cljs.core.Cons.prototype.cljs$core$IPrintWithWriter$=!0;
cljs.core.Cons.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3=function(a,b,c){return cljs.core.pr_sequential_writer.call(null,b,cljs.core.pr_writer,"("," ",")",c,this)};cljs.core.Range.prototype.cljs$core$IPrintWithWriter$=!0;cljs.core.Range.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3=function(a,b,c){return cljs.core.pr_sequential_writer.call(null,b,cljs.core.pr_writer,"("," ",")",c,this)};cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintWithWriter$=!0;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3=function(a,b,c){return cljs.core.pr_sequential_writer.call(null,b,cljs.core.pr_writer,"("," ",")",c,this)};cljs.core.ValSeq.prototype.cljs$core$IPrintWithWriter$=!0;cljs.core.ValSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3=function(a,b,c){return cljs.core.pr_sequential_writer.call(null,b,cljs.core.pr_writer,"("," ",")",c,this)};cljs.core.ObjMap.prototype.cljs$core$IPrintWithWriter$=!0;
cljs.core.ObjMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3=function(a,b,c){return cljs.core.print_map.call(null,this,cljs.core.pr_writer,b,c)};cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintWithWriter$=!0;cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3=function(a,b,c){return cljs.core.pr_sequential_writer.call(null,b,cljs.core.pr_writer,"("," ",")",c,this)};cljs.core.PersistentVector.prototype.cljs$core$IComparable$=!0;
cljs.core.PersistentVector.prototype.cljs$core$IComparable$_compare$arity$2=function(a,b){return cljs.core.compare_indexed.call(null,this,b)};cljs.core.Subvec.prototype.cljs$core$IComparable$=!0;cljs.core.Subvec.prototype.cljs$core$IComparable$_compare$arity$2=function(a,b){return cljs.core.compare_indexed.call(null,this,b)};cljs.core.Keyword.prototype.cljs$core$IComparable$=!0;
cljs.core.Keyword.prototype.cljs$core$IComparable$_compare$arity$2=function(a,b){return cljs.core.compare_symbols.call(null,this,b)};cljs.core.Symbol.prototype.cljs$core$IComparable$=!0;cljs.core.Symbol.prototype.cljs$core$IComparable$_compare$arity$2=function(a,b){return cljs.core.compare_symbols.call(null,this,b)};cljs.core.IAtom=function(){return{}}();cljs.core.IReset=function(){return{}}();
cljs.core._reset_BANG_=function(a,b){if(a?a.cljs$core$IReset$_reset_BANG_$arity$2:a)return a.cljs$core$IReset$_reset_BANG_$arity$2(a,b);var c;c=cljs.core._reset_BANG_[goog.typeOf(null==a?null:a)];if(!c&&(c=cljs.core._reset_BANG_._,!c))throw cljs.core.missing_protocol.call(null,"IReset.-reset!",a);return c.call(null,a,b)};cljs.core.ISwap=function(){return{}}();
cljs.core._swap_BANG_=function(){var a=null,b=function(a,b){if(a?a.cljs$core$ISwap$_swap_BANG_$arity$2:a)return a.cljs$core$ISwap$_swap_BANG_$arity$2(a,b);var c;c=cljs.core._swap_BANG_[goog.typeOf(null==a?null:a)];if(!c&&(c=cljs.core._swap_BANG_._,!c))throw cljs.core.missing_protocol.call(null,"ISwap.-swap!",a);return c.call(null,a,b)},c=function(a,b,c){if(a?a.cljs$core$ISwap$_swap_BANG_$arity$3:a)return a.cljs$core$ISwap$_swap_BANG_$arity$3(a,b,c);var d;d=cljs.core._swap_BANG_[goog.typeOf(null==
a?null:a)];if(!d&&(d=cljs.core._swap_BANG_._,!d))throw cljs.core.missing_protocol.call(null,"ISwap.-swap!",a);return d.call(null,a,b,c)},d=function(a,b,c,d){if(a?a.cljs$core$ISwap$_swap_BANG_$arity$4:a)return a.cljs$core$ISwap$_swap_BANG_$arity$4(a,b,c,d);var e;e=cljs.core._swap_BANG_[goog.typeOf(null==a?null:a)];if(!e&&(e=cljs.core._swap_BANG_._,!e))throw cljs.core.missing_protocol.call(null,"ISwap.-swap!",a);return e.call(null,a,b,c,d)},e=function(a,b,c,d,e){if(a?a.cljs$core$ISwap$_swap_BANG_$arity$5:
a)return a.cljs$core$ISwap$_swap_BANG_$arity$5(a,b,c,d,e);var m;m=cljs.core._swap_BANG_[goog.typeOf(null==a?null:a)];if(!m&&(m=cljs.core._swap_BANG_._,!m))throw cljs.core.missing_protocol.call(null,"ISwap.-swap!",a);return m.call(null,a,b,c,d,e)},a=function(a,g,h,k,l){switch(arguments.length){case 2:return b.call(this,a,g);case 3:return c.call(this,a,g,h);case 4:return d.call(this,a,g,h,k);case 5:return e.call(this,a,g,h,k,l)}throw Error("Invalid arity: "+arguments.length);};a.cljs$core$IFn$_invoke$arity$2=
b;a.cljs$core$IFn$_invoke$arity$3=c;a.cljs$core$IFn$_invoke$arity$4=d;a.cljs$core$IFn$_invoke$arity$5=e;return a}();cljs.core.Atom=function(a,b,c,d){this.state=a;this.meta=b;this.validator=c;this.watches=d;this.cljs$lang$protocol_mask$partition0$=2153938944;this.cljs$lang$protocol_mask$partition1$=16386};cljs.core.Atom.cljs$lang$type=!0;cljs.core.Atom.cljs$lang$ctorStr="cljs.core/Atom";cljs.core.Atom.cljs$lang$ctorPrWriter=function(a,b,c){return cljs.core._write.call(null,b,"cljs.core/Atom")};
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1=function(a){return goog.getUid(this)};
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3=function(a,b,c){a=cljs.core.seq.call(null,this.watches);for(var d=null,e=0,f=0;;)if(f<e){var g=cljs.core._nth.call(null,d,f),h=cljs.core.nth.call(null,g,0,null),g=cljs.core.nth.call(null,g,1,null);g.call(null,h,this,b,c);f+=1}else if(a=cljs.core.seq.call(null,a))cljs.core.chunked_seq_QMARK_.call(null,a)?(d=cljs.core.chunk_first.call(null,a),a=cljs.core.chunk_rest.call(null,a),h=d,e=cljs.core.count.call(null,d),d=h):(d=cljs.core.first.call(null,
a),h=cljs.core.nth.call(null,d,0,null),g=cljs.core.nth.call(null,d,1,null),g.call(null,h,this,b,c),a=cljs.core.next.call(null,a),d=null,e=0),f=0;else return null};cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3=function(a,b,c){this.watches=cljs.core.assoc.call(null,this.watches,b,c);return this};cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2=function(a,b){return this.watches=cljs.core.dissoc.call(null,this.watches,b)};
cljs.core.Atom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3=function(a,b,c){cljs.core._write.call(null,b,"#\x3cAtom: ");cljs.core.pr_writer.call(null,this.state,b,c);return cljs.core._write.call(null,b,"\x3e")};cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1=function(a){return this.meta};cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1=function(a){return this.state};cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2=function(a,b){return this===b};
cljs.core.__GT_Atom=function(a,b,c,d){return new cljs.core.Atom(a,b,c,d)};
cljs.core.atom=function(){var a=null,b=function(a){return new cljs.core.Atom(a,null,null,null)},c=function(){var a=function(a,b){var c=cljs.core.seq_QMARK_.call(null,b)?cljs.core.apply.call(null,cljs.core.hash_map,b):b,d=cljs.core.get.call(null,c,new cljs.core.Keyword(null,"validator","validator",4199087812)),c=cljs.core.get.call(null,c,new cljs.core.Keyword(null,"meta","meta",1017252215));return new cljs.core.Atom(a,c,d,null)},b=function(b,c){var e=null;1<arguments.length&&(e=cljs.core.array_seq(Array.prototype.slice.call(arguments,
1),0));return a.call(this,b,e)};b.cljs$lang$maxFixedArity=1;b.cljs$lang$applyTo=function(b){var c=cljs.core.first(b);b=cljs.core.rest(b);return a(c,b)};b.cljs$core$IFn$_invoke$arity$variadic=a;return b}(),a=function(a,e){switch(arguments.length){case 1:return b.call(this,a);default:return c.cljs$core$IFn$_invoke$arity$variadic(a,cljs.core.array_seq(arguments,1))}throw Error("Invalid arity: "+arguments.length);};a.cljs$lang$maxFixedArity=1;a.cljs$lang$applyTo=c.cljs$lang$applyTo;a.cljs$core$IFn$_invoke$arity$1=
b;a.cljs$core$IFn$_invoke$arity$variadic=c.cljs$core$IFn$_invoke$arity$variadic;return a}();
cljs.core.reset_BANG_=function(a,b){if(a instanceof cljs.core.Atom){var c=a.validator;if(null!=c&&!cljs.core.truth_(c.call(null,b)))throw Error("Assert failed: Validator rejected reference state\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validate","validate",1233162959,null),new cljs.core.Symbol(null,"new-value","new-value",972165309,null)))));c=a.state;a.state=b;null!=a.watches&&cljs.core._notify_watches.call(null,a,c,b);return b}return cljs.core._reset_BANG_.call(null,
a,b)};cljs.core.deref=function(a){return cljs.core._deref.call(null,a)};
cljs.core.swap_BANG_=function(){var a=null,b=function(a,b){return a instanceof cljs.core.Atom?cljs.core.reset_BANG_.call(null,a,b.call(null,a.state)):cljs.core._swap_BANG_.call(null,a,b)},c=function(a,b,c){return a instanceof cljs.core.Atom?cljs.core.reset_BANG_.call(null,a,b.call(null,a.state,c)):cljs.core._swap_BANG_.call(null,a,b,c)},d=function(a,b,c,d){return a instanceof cljs.core.Atom?cljs.core.reset_BANG_.call(null,a,b.call(null,a.state,c,d)):cljs.core._swap_BANG_.call(null,a,b,c,d)},e=function(){var a=
function(a,b,c,d,e){return a instanceof cljs.core.Atom?cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,b,a.state,c,d,e)):cljs.core._swap_BANG_.call(null,a,b,c,d,e)},b=function(b,c,d,e,g){var p=null;4<arguments.length&&(p=cljs.core.array_seq(Array.prototype.slice.call(arguments,4),0));return a.call(this,b,c,d,e,p)};b.cljs$lang$maxFixedArity=4;b.cljs$lang$applyTo=function(b){var c=cljs.core.first(b);b=cljs.core.next(b);var d=cljs.core.first(b);b=cljs.core.next(b);var e=cljs.core.first(b);
b=cljs.core.next(b);var g=cljs.core.first(b);b=cljs.core.rest(b);return a(c,d,e,g,b)};b.cljs$core$IFn$_invoke$arity$variadic=a;return b}(),a=function(a,g,h,k,l){switch(arguments.length){case 2:return b.call(this,a,g);case 3:return c.call(this,a,g,h);case 4:return d.call(this,a,g,h,k);default:return e.cljs$core$IFn$_invoke$arity$variadic(a,g,h,k,cljs.core.array_seq(arguments,4))}throw Error("Invalid arity: "+arguments.length);};a.cljs$lang$maxFixedArity=4;a.cljs$lang$applyTo=e.cljs$lang$applyTo;a.cljs$core$IFn$_invoke$arity$2=
b;a.cljs$core$IFn$_invoke$arity$3=c;a.cljs$core$IFn$_invoke$arity$4=d;a.cljs$core$IFn$_invoke$arity$variadic=e.cljs$core$IFn$_invoke$arity$variadic;return a}();cljs.core.compare_and_set_BANG_=function(a,b,c){return cljs.core._EQ_.call(null,a.state,b)?(cljs.core.reset_BANG_.call(null,a,c),!0):!1};cljs.core.set_validator_BANG_=function(a,b){return a.validator=b};cljs.core.get_validator=function(a){return a.validator};
cljs.core.alter_meta_BANG_=function(){var a=function(a,b,e){return a.meta=cljs.core.apply.call(null,b,a.meta,e)},b=function(b,d,e){var f=null;2<arguments.length&&(f=cljs.core.array_seq(Array.prototype.slice.call(arguments,2),0));return a.call(this,b,d,f)};b.cljs$lang$maxFixedArity=2;b.cljs$lang$applyTo=function(b){var d=cljs.core.first(b);b=cljs.core.next(b);var e=cljs.core.first(b);b=cljs.core.rest(b);return a(d,e,b)};b.cljs$core$IFn$_invoke$arity$variadic=a;return b}();
cljs.core.reset_meta_BANG_=function(a,b){return a.meta=b};cljs.core.add_watch=function(a,b,c){return cljs.core._add_watch.call(null,a,b,c)};cljs.core.remove_watch=function(a,b){return cljs.core._remove_watch.call(null,a,b)};cljs.core.gensym_counter=null;
cljs.core.gensym=function(){var a=null,b=function(){return a.call(null,"G__")},c=function(a){null==cljs.core.gensym_counter&&(cljs.core.gensym_counter=cljs.core.atom.call(null,0));return cljs.core.symbol.call(null,""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)))},a=function(a){switch(arguments.length){case 0:return b.call(this);case 1:return c.call(this,a)}throw Error("Invalid arity: "+
arguments.length);};a.cljs$core$IFn$_invoke$arity$0=b;a.cljs$core$IFn$_invoke$arity$1=c;return a}();cljs.core.fixture1=1;cljs.core.fixture2=2;cljs.core.Delay=function(a,b){this.state=a;this.f=b;this.cljs$lang$protocol_mask$partition1$=1;this.cljs$lang$protocol_mask$partition0$=32768};cljs.core.Delay.cljs$lang$type=!0;cljs.core.Delay.cljs$lang$ctorStr="cljs.core/Delay";cljs.core.Delay.cljs$lang$ctorPrWriter=function(a,b,c){return cljs.core._write.call(null,b,"cljs.core/Delay")};
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1=function(a){return(new cljs.core.Keyword(null,"done","done",1016993524)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this.state))};
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1=function(a){var b=this;return(new cljs.core.Keyword(null,"value","value",1125876963)).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.call(null,b.state,function(a){return function(a){a=cljs.core.seq_QMARK_.call(null,a)?cljs.core.apply.call(null,cljs.core.hash_map,a):a;var c=cljs.core.get.call(null,a,new cljs.core.Keyword(null,"done","done",1016993524));return cljs.core.truth_(c)?a:new cljs.core.PersistentArrayMap(null,2,[new cljs.core.Keyword(null,
"done","done",1016993524),!0,new cljs.core.Keyword(null,"value","value",1125876963),b.f.call(null)],null)}}(this)))};cljs.core.__GT_Delay=function(a,b){return new cljs.core.Delay(a,b)};cljs.core.delay_QMARK_=function(a){return a instanceof cljs.core.Delay};cljs.core.force=function(a){return cljs.core.delay_QMARK_.call(null,a)?cljs.core.deref.call(null,a):a};cljs.core.realized_QMARK_=function(a){return cljs.core._realized_QMARK_.call(null,a)};cljs.core.IEncodeJS=function(){return{}}();
cljs.core._clj__GT_js=function(a){if(a?a.cljs$core$IEncodeJS$_clj__GT_js$arity$1:a)return a.cljs$core$IEncodeJS$_clj__GT_js$arity$1(a);var b;b=cljs.core._clj__GT_js[goog.typeOf(null==a?null:a)];if(!b&&(b=cljs.core._clj__GT_js._,!b))throw cljs.core.missing_protocol.call(null,"IEncodeJS.-clj-\x3ejs",a);return b.call(null,a)};
cljs.core._key__GT_js=function(a){if(a?a.cljs$core$IEncodeJS$_key__GT_js$arity$1:a)return a.cljs$core$IEncodeJS$_key__GT_js$arity$1(a);var b;b=cljs.core._key__GT_js[goog.typeOf(null==a?null:a)];if(!b&&(b=cljs.core._key__GT_js._,!b))throw cljs.core.missing_protocol.call(null,"IEncodeJS.-key-\x3ejs",a);return b.call(null,a)};
cljs.core.key__GT_js=function(a){return(a?cljs.core.truth_(cljs.core.truth_(null)?null:a.cljs$core$IEncodeJS$)||(a.cljs$lang$protocol_mask$partition$?0:cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IEncodeJS,a)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IEncodeJS,a))?cljs.core._clj__GT_js.call(null,a):"string"===typeof a||"number"===typeof a||a instanceof cljs.core.Keyword||a instanceof cljs.core.Symbol?cljs.core.clj__GT_js.call(null,a):cljs.core.pr_str.call(null,a)};
cljs.core.clj__GT_js=function clj__GT_js(b){if(null==b)return null;if(b?cljs.core.truth_(cljs.core.truth_(null)?null:b.cljs$core$IEncodeJS$)||(b.cljs$lang$protocol_mask$partition$?0:cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IEncodeJS,b)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IEncodeJS,b))return cljs.core._clj__GT_js.call(null,b);if(b instanceof cljs.core.Keyword)return cljs.core.name.call(null,b);if(b instanceof cljs.core.Symbol)return""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.map_QMARK_.call(null,b)){var c={};b=cljs.core.seq.call(null,b);for(var d=null,e=0,f=0;;)if(f<e){var g=cljs.core._nth.call(null,d,f),h=cljs.core.nth.call(null,g,0,null),g=cljs.core.nth.call(null,g,1,null);c[cljs.core.key__GT_js.call(null,h)]=clj__GT_js.call(null,g);f+=1}else if(b=cljs.core.seq.call(null,b))cljs.core.chunked_seq_QMARK_.call(null,b)?(e=cljs.core.chunk_first.call(null,b),b=cljs.core.chunk_rest.call(null,b),d=e,e=cljs.core.count.call(null,e)):(e=cljs.core.first.call(null,
b),d=cljs.core.nth.call(null,e,0,null),e=cljs.core.nth.call(null,e,1,null),c[cljs.core.key__GT_js.call(null,d)]=clj__GT_js.call(null,e),b=cljs.core.next.call(null,b),d=null,e=0),f=0;else break;return c}if(cljs.core.coll_QMARK_.call(null,b)){c=[];b=cljs.core.seq.call(null,cljs.core.map.call(null,clj__GT_js,b));d=null;for(f=e=0;;)if(f<e)h=cljs.core._nth.call(null,d,f),c.push(h),f+=1;else if(b=cljs.core.seq.call(null,b))d=b,cljs.core.chunked_seq_QMARK_.call(null,d)?(b=cljs.core.chunk_first.call(null,
d),f=cljs.core.chunk_rest.call(null,d),d=b,e=cljs.core.count.call(null,b),b=f):(b=cljs.core.first.call(null,d),c.push(b),b=cljs.core.next.call(null,d),d=null,e=0),f=0;else break;return c}return new cljs.core.Keyword(null,"else","else",1017020587)?b:null};cljs.core.IEncodeClojure=function(){return{}}();
cljs.core._js__GT_clj=function(a,b){if(a?a.cljs$core$IEncodeClojure$_js__GT_clj$arity$2:a)return a.cljs$core$IEncodeClojure$_js__GT_clj$arity$2(a,b);var c;c=cljs.core._js__GT_clj[goog.typeOf(null==a?null:a)];if(!c&&(c=cljs.core._js__GT_clj._,!c))throw cljs.core.missing_protocol.call(null,"IEncodeClojure.-js-\x3eclj",a);return c.call(null,a,b)};
cljs.core.js__GT_clj=function(){var a=null,b=function(b){return a.call(null,b,new cljs.core.PersistentArrayMap(null,1,[new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),!1],null))},c=function(){var a=function(a,b){if(a?cljs.core.truth_(cljs.core.truth_(null)?null:a.cljs$core$IEncodeClojure$)||(a.cljs$lang$protocol_mask$partition$?0:cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IEncodeClojure,a)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IEncodeClojure,
a))return cljs.core._js__GT_clj.call(null,a,cljs.core.apply.call(null,cljs.core.array_map,b));if(cljs.core.seq.call(null,b)){var c=cljs.core.seq_QMARK_.call(null,b)?cljs.core.apply.call(null,cljs.core.hash_map,b):b,d=cljs.core.get.call(null,c,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672)),e=cljs.core.truth_(d)?cljs.core.keyword:cljs.core.str;return function(a,b,c,d){return function s(e){return cljs.core.seq_QMARK_.call(null,e)?cljs.core.doall.call(null,cljs.core.map.call(null,
s,e)):cljs.core.coll_QMARK_.call(null,e)?cljs.core.into.call(null,cljs.core.empty.call(null,e),cljs.core.map.call(null,s,e)):e instanceof Array?cljs.core.vec.call(null,cljs.core.map.call(null,s,e)):cljs.core.type.call(null,e)===Object?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,function(){return function(a,b,c,d){return function D(f){return new cljs.core.LazySeq(null,function(a,b,c,d){return function(){for(;;){var a=cljs.core.seq.call(null,f);if(a){if(cljs.core.chunked_seq_QMARK_.call(null,
a)){var b=cljs.core.chunk_first.call(null,a),c=cljs.core.count.call(null,b),g=cljs.core.chunk_buffer.call(null,c);a:{for(var h=0;;)if(h<c){var k=cljs.core._nth.call(null,b,h);cljs.core.chunk_append.call(null,g,new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[d.call(null,k),s.call(null,e[k])],null));h+=1}else{b=!0;break a}b=void 0}return b?cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,g),D.call(null,cljs.core.chunk_rest.call(null,a))):cljs.core.chunk_cons.call(null,
cljs.core.chunk.call(null,g),null)}g=cljs.core.first.call(null,a);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[d.call(null,g),s.call(null,e[g])],null),D.call(null,cljs.core.rest.call(null,a)))}return null}}}(a,b,c,d),null,null)}}(a,b,c,d).call(null,cljs.core.js_keys.call(null,e))}()):new cljs.core.Keyword(null,"else","else",1017020587)?e:null}}(b,c,d,e).call(null,a)}return null},b=function(b,c){var e=null;1<arguments.length&&(e=cljs.core.array_seq(Array.prototype.slice.call(arguments,
1),0));return a.call(this,b,e)};b.cljs$lang$maxFixedArity=1;b.cljs$lang$applyTo=function(b){var c=cljs.core.first(b);b=cljs.core.rest(b);return a(c,b)};b.cljs$core$IFn$_invoke$arity$variadic=a;return b}(),a=function(a,e){switch(arguments.length){case 1:return b.call(this,a);default:return c.cljs$core$IFn$_invoke$arity$variadic(a,cljs.core.array_seq(arguments,1))}throw Error("Invalid arity: "+arguments.length);};a.cljs$lang$maxFixedArity=1;a.cljs$lang$applyTo=c.cljs$lang$applyTo;a.cljs$core$IFn$_invoke$arity$1=
b;a.cljs$core$IFn$_invoke$arity$variadic=c.cljs$core$IFn$_invoke$arity$variadic;return a}();
cljs.core.memoize=function(a){return function(b){return function(){var c=function(c){var d=cljs.core.get.call(null,cljs.core.deref.call(null,b),c,cljs.core.lookup_sentinel);d===cljs.core.lookup_sentinel&&(d=cljs.core.apply.call(null,a,c),cljs.core.swap_BANG_.call(null,b,cljs.core.assoc,c,d));return d},d=function(a){var b=null;0<arguments.length&&(b=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0));return c.call(this,b)};d.cljs$lang$maxFixedArity=0;d.cljs$lang$applyTo=function(a){a=cljs.core.seq(a);
return c(a)};d.cljs$core$IFn$_invoke$arity$variadic=c;return d}()}(cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY))};
cljs.core.trampoline=function(){var a=null,b=function(a){for(;;)if(a=a.call(null),!cljs.core.fn_QMARK_.call(null,a))return a},c=function(){var b=function(b,c){return a.call(null,function(){return cljs.core.apply.call(null,b,c)})},c=function(a,c){var e=null;1<arguments.length&&(e=cljs.core.array_seq(Array.prototype.slice.call(arguments,1),0));return b.call(this,a,e)};c.cljs$lang$maxFixedArity=1;c.cljs$lang$applyTo=function(a){var c=cljs.core.first(a);a=cljs.core.rest(a);return b(c,a)};c.cljs$core$IFn$_invoke$arity$variadic=
b;return c}(),a=function(a,e){switch(arguments.length){case 1:return b.call(this,a);default:return c.cljs$core$IFn$_invoke$arity$variadic(a,cljs.core.array_seq(arguments,1))}throw Error("Invalid arity: "+arguments.length);};a.cljs$lang$maxFixedArity=1;a.cljs$lang$applyTo=c.cljs$lang$applyTo;a.cljs$core$IFn$_invoke$arity$1=b;a.cljs$core$IFn$_invoke$arity$variadic=c.cljs$core$IFn$_invoke$arity$variadic;return a}();
cljs.core.rand=function(){var a=null,b=function(){return a.call(null,1)},c=function(a){return Math.random.call(null)*a},a=function(a){switch(arguments.length){case 0:return b.call(this);case 1:return c.call(this,a)}throw Error("Invalid arity: "+arguments.length);};a.cljs$core$IFn$_invoke$arity$0=b;a.cljs$core$IFn$_invoke$arity$1=c;return a}();cljs.core.rand_int=function(a){return Math.floor.call(null,Math.random.call(null)*a)};
cljs.core.rand_nth=function(a){return cljs.core.nth.call(null,a,cljs.core.rand_int.call(null,cljs.core.count.call(null,a)))};cljs.core.group_by=function(a,b){return cljs.core.reduce.call(null,function(b,d){var e=a.call(null,d);return cljs.core.assoc.call(null,b,e,cljs.core.conj.call(null,cljs.core.get.call(null,b,e,cljs.core.PersistentVector.EMPTY),d))},cljs.core.PersistentArrayMap.EMPTY,b)};
cljs.core.make_hierarchy=function(){return new cljs.core.PersistentArrayMap(null,3,[new cljs.core.Keyword(null,"parents","parents",4515496059),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"descendants","descendants",768214664),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ancestors","ancestors",889955442),cljs.core.PersistentArrayMap.EMPTY],null)};cljs.core._global_hierarchy=null;
cljs.core.get_global_hierarchy=function(){null==cljs.core._global_hierarchy&&(cljs.core._global_hierarchy=cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null)));return cljs.core._global_hierarchy};
cljs.core.swap_global_hierarchy_BANG_=function(){var a=function(a,b){return cljs.core.apply.call(null,cljs.core.swap_BANG_,cljs.core.get_global_hierarchy.call(null),a,b)},b=function(b,d){var e=null;1<arguments.length&&(e=cljs.core.array_seq(Array.prototype.slice.call(arguments,1),0));return a.call(this,b,e)};b.cljs$lang$maxFixedArity=1;b.cljs$lang$applyTo=function(b){var d=cljs.core.first(b);b=cljs.core.rest(b);return a(d,b)};b.cljs$core$IFn$_invoke$arity$variadic=a;return b}();
cljs.core.isa_QMARK_=function(){var a=null,b=function(b,c){return a.call(null,cljs.core.deref.call(null,cljs.core.get_global_hierarchy.call(null)),b,c)},c=function(b,c,f){var g=cljs.core._EQ_.call(null,c,f);if(!g&&!(g=cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword(null,"ancestors","ancestors",889955442)).cljs$core$IFn$_invoke$arity$1(b).call(null,c),f))&&(g=cljs.core.vector_QMARK_.call(null,f))&&(g=cljs.core.vector_QMARK_.call(null,c)))if(g=cljs.core.count.call(null,f)===cljs.core.count.call(null,
c))for(var g=!0,h=0;;)if(g&&h!==cljs.core.count.call(null,f))g=a.call(null,b,c.call(null,h),f.call(null,h)),h+=1;else return g;else return g;else return g},a=function(a,e,f){switch(arguments.length){case 2:return b.call(this,a,e);case 3:return c.call(this,a,e,f)}throw Error("Invalid arity: "+arguments.length);};a.cljs$core$IFn$_invoke$arity$2=b;a.cljs$core$IFn$_invoke$arity$3=c;return a}();
cljs.core.parents=function(){var a=null,b=function(b){return a.call(null,cljs.core.deref.call(null,cljs.core.get_global_hierarchy.call(null)),b)},c=function(a,b){return cljs.core.not_empty.call(null,cljs.core.get.call(null,(new cljs.core.Keyword(null,"parents","parents",4515496059)).cljs$core$IFn$_invoke$arity$1(a),b))},a=function(a,e){switch(arguments.length){case 1:return b.call(this,a);case 2:return c.call(this,a,e)}throw Error("Invalid arity: "+arguments.length);};a.cljs$core$IFn$_invoke$arity$1=
b;a.cljs$core$IFn$_invoke$arity$2=c;return a}();
cljs.core.ancestors=function(){var a=null,b=function(b){return a.call(null,cljs.core.deref.call(null,cljs.core.get_global_hierarchy.call(null)),b)},c=function(a,b){return cljs.core.not_empty.call(null,cljs.core.get.call(null,(new cljs.core.Keyword(null,"ancestors","ancestors",889955442)).cljs$core$IFn$_invoke$arity$1(a),b))},a=function(a,e){switch(arguments.length){case 1:return b.call(this,a);case 2:return c.call(this,a,e)}throw Error("Invalid arity: "+arguments.length);};a.cljs$core$IFn$_invoke$arity$1=
b;a.cljs$core$IFn$_invoke$arity$2=c;return a}();
cljs.core.descendants=function(){var a=null,b=function(b){return a.call(null,cljs.core.deref.call(null,cljs.core.get_global_hierarchy.call(null)),b)},c=function(a,b){return cljs.core.not_empty.call(null,cljs.core.get.call(null,(new cljs.core.Keyword(null,"descendants","descendants",768214664)).cljs$core$IFn$_invoke$arity$1(a),b))},a=function(a,e){switch(arguments.length){case 1:return b.call(this,a);case 2:return c.call(this,a,e)}throw Error("Invalid arity: "+arguments.length);};a.cljs$core$IFn$_invoke$arity$1=
b;a.cljs$core$IFn$_invoke$arity$2=c;return a}();
cljs.core.derive=function(){var a=null,b=function(b,c){if(!cljs.core.truth_(cljs.core.namespace.call(null,c)))throw Error("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"namespace","namespace",-388313324,null),new cljs.core.Symbol(null,"parent","parent",1659011683,null)))));cljs.core.swap_global_hierarchy_BANG_.call(null,a,b,c);return null},c=function(a,b,c){if(!cljs.core.not_EQ_.call(null,b,c))throw Error("Assert failed: "+
cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not\x3d","not\x3d",-1637144189,null),new cljs.core.Symbol(null,"tag","tag",-1640416941,null),new cljs.core.Symbol(null,"parent","parent",1659011683,null)))));var g=(new cljs.core.Keyword(null,"parents","parents",4515496059)).cljs$core$IFn$_invoke$arity$1(a),h=(new cljs.core.Keyword(null,"descendants","descendants",768214664)).cljs$core$IFn$_invoke$arity$1(a),k=(new cljs.core.Keyword(null,
"ancestors","ancestors",889955442)).cljs$core$IFn$_invoke$arity$1(a),l=function(a,b,c){return function(d,e,f,g,h){return cljs.core.reduce.call(null,function(a,b,c){return function(a,b){return cljs.core.assoc.call(null,a,b,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,h,b,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons.call(null,g,h.call(null,g))))}}(a,b,c),d,cljs.core.cons.call(null,e,f.call(null,e)))}}(g,h,k);if(cljs.core.contains_QMARK_.call(null,g.call(null,b),c))b=null;else{if(cljs.core.contains_QMARK_.call(null,
k.call(null,b),c))throw Error(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)+"already has"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)+"as ancestor");if(cljs.core.contains_QMARK_.call(null,k.call(null,c),b))throw Error("Cyclic derivation:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)+"has"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)+"as ancestor");b=new cljs.core.PersistentArrayMap(null,3,[new cljs.core.Keyword(null,"parents","parents",4515496059),cljs.core.assoc.call(null,(new cljs.core.Keyword(null,
"parents","parents",4515496059)).cljs$core$IFn$_invoke$arity$1(a),b,cljs.core.conj.call(null,cljs.core.get.call(null,g,b,cljs.core.PersistentHashSet.EMPTY),c)),new cljs.core.Keyword(null,"ancestors","ancestors",889955442),l.call(null,(new cljs.core.Keyword(null,"ancestors","ancestors",889955442)).cljs$core$IFn$_invoke$arity$1(a),b,h,c,k),new cljs.core.Keyword(null,"descendants","descendants",768214664),l.call(null,(new cljs.core.Keyword(null,"descendants","descendants",768214664)).cljs$core$IFn$_invoke$arity$1(a),
c,k,b,h)],null)}return cljs.core.truth_(b)?b:a},a=function(a,e,f){switch(arguments.length){case 2:return b.call(this,a,e);case 3:return c.call(this,a,e,f)}throw Error("Invalid arity: "+arguments.length);};a.cljs$core$IFn$_invoke$arity$2=b;a.cljs$core$IFn$_invoke$arity$3=c;return a}();
cljs.core.underive=function(){var a=null,b=function(b,c){cljs.core.swap_global_hierarchy_BANG_.call(null,a,b,c);return null},c=function(a,b,c){var g=(new cljs.core.Keyword(null,"parents","parents",4515496059)).cljs$core$IFn$_invoke$arity$1(a),h=cljs.core.truth_(g.call(null,b))?cljs.core.disj.call(null,g.call(null,b),c):cljs.core.PersistentHashSet.EMPTY,k=cljs.core.truth_(cljs.core.not_empty.call(null,h))?cljs.core.assoc.call(null,g,b,h):cljs.core.dissoc.call(null,g,b),l=cljs.core.flatten.call(null,
cljs.core.map.call(null,function(a,b,c){return function(a){return cljs.core.cons.call(null,cljs.core.first.call(null,a),cljs.core.interpose.call(null,cljs.core.first.call(null,a),cljs.core.second.call(null,a)))}}(g,h,k),cljs.core.seq.call(null,k)));return cljs.core.contains_QMARK_.call(null,g.call(null,b),c)?cljs.core.reduce.call(null,function(a,b,c,d){return function(a,b){return cljs.core.apply.call(null,cljs.core.derive,a,b)}}(g,h,k,l),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,
2,l)):a},a=function(a,e,f){switch(arguments.length){case 2:return b.call(this,a,e);case 3:return c.call(this,a,e,f)}throw Error("Invalid arity: "+arguments.length);};a.cljs$core$IFn$_invoke$arity$2=b;a.cljs$core$IFn$_invoke$arity$3=c;return a}();cljs.core.reset_cache=function(a,b,c,d){cljs.core.swap_BANG_.call(null,a,function(a){return cljs.core.deref.call(null,b)});return cljs.core.swap_BANG_.call(null,c,function(a){return cljs.core.deref.call(null,d)})};
cljs.core.prefers_STAR_=function prefers_STAR_(b,c,d){var e=cljs.core.deref.call(null,d).call(null,b),e=cljs.core.truth_(cljs.core.truth_(e)?e.call(null,c):e)?!0:null;if(cljs.core.truth_(e))return e;e=function(){for(var e=cljs.core.parents.call(null,c);;)if(0<cljs.core.count.call(null,e))cljs.core.truth_(prefers_STAR_.call(null,b,cljs.core.first.call(null,e),d)),e=cljs.core.rest.call(null,e);else return null}();if(cljs.core.truth_(e))return e;e=function(){for(var e=cljs.core.parents.call(null,b);;)if(0<
cljs.core.count.call(null,e))cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,e),c,d)),e=cljs.core.rest.call(null,e);else return null}();return cljs.core.truth_(e)?e:!1};cljs.core.dominates=function(a,b,c){c=cljs.core.prefers_STAR_.call(null,a,b,c);return cljs.core.truth_(c)?c:cljs.core.isa_QMARK_.call(null,a,b)};
cljs.core.find_and_cache_best_method=function find_and_cache_best_method(b,c,d,e,f,g,h){var k=cljs.core.reduce.call(null,function(e,g){var h=cljs.core.nth.call(null,g,0,null);cljs.core.nth.call(null,g,1,null);if(cljs.core.isa_QMARK_.call(null,cljs.core.deref.call(null,d),c,h)){var k=cljs.core.truth_(function(){var b=null==e;return b?b:cljs.core.dominates.call(null,h,cljs.core.first.call(null,e),f)}())?g:e;if(!cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,k),h,f)))throw Error("Multiple methods in multimethod '"+
cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)+"' match dispatch value: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)+" -\x3e "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)+" and "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,k))+", and neither is preferred");return k}return e},null,cljs.core.deref.call(null,e));if(cljs.core.truth_(k)){if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,h),cljs.core.deref.call(null,d)))return cljs.core.swap_BANG_.call(null,g,cljs.core.assoc,
c,cljs.core.second.call(null,k)),cljs.core.second.call(null,k);cljs.core.reset_cache.call(null,g,e,h,d);return find_and_cache_best_method.call(null,b,c,d,e,f,g,h)}return null};cljs.core.IMultiFn=function(){return{}}();
cljs.core._reset=function(a){if(a?a.cljs$core$IMultiFn$_reset$arity$1:a)return a.cljs$core$IMultiFn$_reset$arity$1(a);var b;b=cljs.core._reset[goog.typeOf(null==a?null:a)];if(!b&&(b=cljs.core._reset._,!b))throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",a);return b.call(null,a)};
cljs.core._add_method=function(a,b,c){if(a?a.cljs$core$IMultiFn$_add_method$arity$3:a)return a.cljs$core$IMultiFn$_add_method$arity$3(a,b,c);var d;d=cljs.core._add_method[goog.typeOf(null==a?null:a)];if(!d&&(d=cljs.core._add_method._,!d))throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",a);return d.call(null,a,b,c)};
cljs.core._remove_method=function(a,b){if(a?a.cljs$core$IMultiFn$_remove_method$arity$2:a)return a.cljs$core$IMultiFn$_remove_method$arity$2(a,b);var c;c=cljs.core._remove_method[goog.typeOf(null==a?null:a)];if(!c&&(c=cljs.core._remove_method._,!c))throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",a);return c.call(null,a,b)};
cljs.core._prefer_method=function(a,b,c){if(a?a.cljs$core$IMultiFn$_prefer_method$arity$3:a)return a.cljs$core$IMultiFn$_prefer_method$arity$3(a,b,c);var d;d=cljs.core._prefer_method[goog.typeOf(null==a?null:a)];if(!d&&(d=cljs.core._prefer_method._,!d))throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",a);return d.call(null,a,b,c)};
cljs.core._get_method=function(a,b){if(a?a.cljs$core$IMultiFn$_get_method$arity$2:a)return a.cljs$core$IMultiFn$_get_method$arity$2(a,b);var c;c=cljs.core._get_method[goog.typeOf(null==a?null:a)];if(!c&&(c=cljs.core._get_method._,!c))throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",a);return c.call(null,a,b)};
cljs.core._methods=function(a){if(a?a.cljs$core$IMultiFn$_methods$arity$1:a)return a.cljs$core$IMultiFn$_methods$arity$1(a);var b;b=cljs.core._methods[goog.typeOf(null==a?null:a)];if(!b&&(b=cljs.core._methods._,!b))throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",a);return b.call(null,a)};
cljs.core._prefers=function(a){if(a?a.cljs$core$IMultiFn$_prefers$arity$1:a)return a.cljs$core$IMultiFn$_prefers$arity$1(a);var b;b=cljs.core._prefers[goog.typeOf(null==a?null:a)];if(!b&&(b=cljs.core._prefers._,!b))throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",a);return b.call(null,a)};
cljs.core.throw_no_method_error=function(a,b){throw Error("No method in multimethod '"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)+"' for dispatch value: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b));};
cljs.core.MultiFn=function(a,b,c,d,e,f,g,h){this.name=a;this.dispatch_fn=b;this.default_dispatch_val=c;this.hierarchy=d;this.method_table=e;this.prefer_table=f;this.method_cache=g;this.cached_hierarchy=h;this.cljs$lang$protocol_mask$partition0$=4194305;this.cljs$lang$protocol_mask$partition1$=256};cljs.core.MultiFn.cljs$lang$type=!0;cljs.core.MultiFn.cljs$lang$ctorStr="cljs.core/MultiFn";cljs.core.MultiFn.cljs$lang$ctorPrWriter=function(a,b,c){return cljs.core._write.call(null,b,"cljs.core/MultiFn")};
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1=function(a){return goog.getUid(this)};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1=function(a){cljs.core.swap_BANG_.call(null,this.method_table,function(a){return function(a){return cljs.core.PersistentArrayMap.EMPTY}}(this));cljs.core.swap_BANG_.call(null,this.method_cache,function(a){return function(a){return cljs.core.PersistentArrayMap.EMPTY}}(this));cljs.core.swap_BANG_.call(null,this.prefer_table,function(a){return function(a){return cljs.core.PersistentArrayMap.EMPTY}}(this));cljs.core.swap_BANG_.call(null,this.cached_hierarchy,
function(a){return function(a){return null}}(this));return this};cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3=function(a,b,c){cljs.core.swap_BANG_.call(null,this.method_table,cljs.core.assoc,b,c);cljs.core.reset_cache.call(null,this.method_cache,this.method_table,this.cached_hierarchy,this.hierarchy);return this};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2=function(a,b){cljs.core.swap_BANG_.call(null,this.method_table,cljs.core.dissoc,b);cljs.core.reset_cache.call(null,this.method_cache,this.method_table,this.cached_hierarchy,this.hierarchy);return this};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2=function(a,b){cljs.core._EQ_.call(null,cljs.core.deref.call(null,this.cached_hierarchy),cljs.core.deref.call(null,this.hierarchy))||cljs.core.reset_cache.call(null,this.method_cache,this.method_table,this.cached_hierarchy,this.hierarchy);var c=cljs.core.deref.call(null,this.method_cache).call(null,b);if(cljs.core.truth_(c))return c;c=cljs.core.find_and_cache_best_method.call(null,this.name,b,this.hierarchy,this.method_table,this.prefer_table,
this.method_cache,this.cached_hierarchy);return cljs.core.truth_(c)?c:cljs.core.deref.call(null,this.method_table).call(null,this.default_dispatch_val)};
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3=function(a,b,c){if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,b,c,this.prefer_table)))throw Error("Preference conflict in multimethod '"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this.name)+"': "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)+" is already preferred to "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b));cljs.core.swap_BANG_.call(null,this.prefer_table,function(a){return function(a){return cljs.core.assoc.call(null,
a,b,cljs.core.conj.call(null,cljs.core.get.call(null,a,b,cljs.core.PersistentHashSet.EMPTY),c))}}(this));return cljs.core.reset_cache.call(null,this.method_cache,this.method_table,this.cached_hierarchy,this.hierarchy)};cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1=function(a){return cljs.core.deref.call(null,this.method_table)};cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1=function(a){return cljs.core.deref.call(null,this.prefer_table)};
cljs.core.MultiFn.prototype.call=function(){var a=null;return a=function(a,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v,y,z,A,B,D){switch(arguments.length){case 2:var u=a,u=this,w=u.dispatch_fn.call(null,c),x=this.cljs$core$IMultiFn$_get_method$arity$2(null,w);cljs.core.truth_(x)||cljs.core.throw_no_method_error.call(null,u.name,w);return x.call(null,c);case 3:return u=a,u=this,w=u.dispatch_fn.call(null,c,d),x=this.cljs$core$IMultiFn$_get_method$arity$2(null,w),cljs.core.truth_(x)||cljs.core.throw_no_method_error.call(null,
u.name,w),x.call(null,c,d);case 4:return u=a,u=this,w=u.dispatch_fn.call(null,c,d,e),x=this.cljs$core$IMultiFn$_get_method$arity$2(null,w),cljs.core.truth_(x)||cljs.core.throw_no_method_error.call(null,u.name,w),x.call(null,c,d,e);case 5:return u=a,u=this,w=u.dispatch_fn.call(null,c,d,e,f),x=this.cljs$core$IMultiFn$_get_method$arity$2(null,w),cljs.core.truth_(x)||cljs.core.throw_no_method_error.call(null,u.name,w),x.call(null,c,d,e,f);case 6:return u=a,u=this,w=u.dispatch_fn.call(null,c,d,e,f,g),
x=this.cljs$core$IMultiFn$_get_method$arity$2(null,w),cljs.core.truth_(x)||cljs.core.throw_no_method_error.call(null,u.name,w),x.call(null,c,d,e,f,g);case 7:return u=a,u=this,w=u.dispatch_fn.call(null,c,d,e,f,g,h),x=this.cljs$core$IMultiFn$_get_method$arity$2(null,w),cljs.core.truth_(x)||cljs.core.throw_no_method_error.call(null,u.name,w),x.call(null,c,d,e,f,g,h);case 8:return u=a,u=this,w=u.dispatch_fn.call(null,c,d,e,f,g,h,k),x=this.cljs$core$IMultiFn$_get_method$arity$2(null,w),cljs.core.truth_(x)||
cljs.core.throw_no_method_error.call(null,u.name,w),x.call(null,c,d,e,f,g,h,k);case 9:return u=a,u=this,w=u.dispatch_fn.call(null,c,d,e,f,g,h,k,l),x=this.cljs$core$IMultiFn$_get_method$arity$2(null,w),cljs.core.truth_(x)||cljs.core.throw_no_method_error.call(null,u.name,w),x.call(null,c,d,e,f,g,h,k,l);case 10:return u=a,u=this,w=u.dispatch_fn.call(null,c,d,e,f,g,h,k,l,m),x=this.cljs$core$IMultiFn$_get_method$arity$2(null,w),cljs.core.truth_(x)||cljs.core.throw_no_method_error.call(null,u.name,w),
x.call(null,c,d,e,f,g,h,k,l,m);case 11:return u=a,u=this,w=u.dispatch_fn.call(null,c,d,e,f,g,h,k,l,m,n),x=this.cljs$core$IMultiFn$_get_method$arity$2(null,w),cljs.core.truth_(x)||cljs.core.throw_no_method_error.call(null,u.name,w),x.call(null,c,d,e,f,g,h,k,l,m,n);case 12:return u=a,u=this,w=u.dispatch_fn.call(null,c,d,e,f,g,h,k,l,m,n,p),x=this.cljs$core$IMultiFn$_get_method$arity$2(null,w),cljs.core.truth_(x)||cljs.core.throw_no_method_error.call(null,u.name,w),x.call(null,c,d,e,f,g,h,k,l,m,n,p);
case 13:return u=a,u=this,w=u.dispatch_fn.call(null,c,d,e,f,g,h,k,l,m,n,p,q),x=this.cljs$core$IMultiFn$_get_method$arity$2(null,w),cljs.core.truth_(x)||cljs.core.throw_no_method_error.call(null,u.name,w),x.call(null,c,d,e,f,g,h,k,l,m,n,p,q);case 14:return u=a,u=this,w=u.dispatch_fn.call(null,c,d,e,f,g,h,k,l,m,n,p,q,r),x=this.cljs$core$IMultiFn$_get_method$arity$2(null,w),cljs.core.truth_(x)||cljs.core.throw_no_method_error.call(null,u.name,w),x.call(null,c,d,e,f,g,h,k,l,m,n,p,q,r);case 15:return u=
a,u=this,w=u.dispatch_fn.call(null,c,d,e,f,g,h,k,l,m,n,p,q,r,s),x=this.cljs$core$IMultiFn$_get_method$arity$2(null,w),cljs.core.truth_(x)||cljs.core.throw_no_method_error.call(null,u.name,w),x.call(null,c,d,e,f,g,h,k,l,m,n,p,q,r,s);case 16:return u=a,u=this,w=u.dispatch_fn.call(null,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t),x=this.cljs$core$IMultiFn$_get_method$arity$2(null,w),cljs.core.truth_(x)||cljs.core.throw_no_method_error.call(null,u.name,w),x.call(null,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t);case 17:return u=
a,u=this,w=u.dispatch_fn.call(null,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v),x=this.cljs$core$IMultiFn$_get_method$arity$2(null,w),cljs.core.truth_(x)||cljs.core.throw_no_method_error.call(null,u.name,w),x.call(null,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v);case 18:return u=a,u=this,w=u.dispatch_fn.call(null,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v,y),x=this.cljs$core$IMultiFn$_get_method$arity$2(null,w),cljs.core.truth_(x)||cljs.core.throw_no_method_error.call(null,u.name,w),x.call(null,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v,y);
case 19:return u=a,u=this,w=u.dispatch_fn.call(null,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v,y,z),x=this.cljs$core$IMultiFn$_get_method$arity$2(null,w),cljs.core.truth_(x)||cljs.core.throw_no_method_error.call(null,u.name,w),x.call(null,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v,y,z);case 20:return u=a,u=this,w=u.dispatch_fn.call(null,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v,y,z,A),x=this.cljs$core$IMultiFn$_get_method$arity$2(null,w),cljs.core.truth_(x)||cljs.core.throw_no_method_error.call(null,u.name,w),x.call(null,c,d,e,
f,g,h,k,l,m,n,p,q,r,s,t,v,y,z,A);case 21:return u=a,u=this,w=u.dispatch_fn.call(null,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v,y,z,A,B),x=this.cljs$core$IMultiFn$_get_method$arity$2(null,w),cljs.core.truth_(x)||cljs.core.throw_no_method_error.call(null,u.name,w),x.call(null,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v,y,z,A,B);case 22:return u=a,u=this,w=cljs.core.apply.call(null,u.dispatch_fn,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v,y,z,A,B,D),x=this.cljs$core$IMultiFn$_get_method$arity$2(null,w),cljs.core.truth_(x)||cljs.core.throw_no_method_error.call(null,
u.name,w),cljs.core.apply.call(null,x,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v,y,z,A,B,D)}throw Error("Invalid arity: "+arguments.length);}}();cljs.core.MultiFn.prototype.apply=function(a,b){return this.call.apply(this,[this].concat(cljs.core.aclone.call(null,b)))};
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$1=function(a){var b=this.dispatch_fn.call(null,a),c=this.cljs$core$IMultiFn$_get_method$arity$2(null,b);cljs.core.truth_(c)||cljs.core.throw_no_method_error.call(null,this.name,b);return c.call(null,a)};
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$2=function(a,b){var c=this.dispatch_fn.call(null,a,b),d=this.cljs$core$IMultiFn$_get_method$arity$2(null,c);cljs.core.truth_(d)||cljs.core.throw_no_method_error.call(null,this.name,c);return d.call(null,a,b)};
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$3=function(a,b,c){var d=this.dispatch_fn.call(null,a,b,c),e=this.cljs$core$IMultiFn$_get_method$arity$2(null,d);cljs.core.truth_(e)||cljs.core.throw_no_method_error.call(null,this.name,d);return e.call(null,a,b,c)};
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$4=function(a,b,c,d){var e=this.dispatch_fn.call(null,a,b,c,d),f=this.cljs$core$IMultiFn$_get_method$arity$2(null,e);cljs.core.truth_(f)||cljs.core.throw_no_method_error.call(null,this.name,e);return f.call(null,a,b,c,d)};
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$5=function(a,b,c,d,e){var f=this.dispatch_fn.call(null,a,b,c,d,e),g=this.cljs$core$IMultiFn$_get_method$arity$2(null,f);cljs.core.truth_(g)||cljs.core.throw_no_method_error.call(null,this.name,f);return g.call(null,a,b,c,d,e)};
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$6=function(a,b,c,d,e,f){var g=this.dispatch_fn.call(null,a,b,c,d,e,f),h=this.cljs$core$IMultiFn$_get_method$arity$2(null,g);cljs.core.truth_(h)||cljs.core.throw_no_method_error.call(null,this.name,g);return h.call(null,a,b,c,d,e,f)};
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$7=function(a,b,c,d,e,f,g){var h=this.dispatch_fn.call(null,a,b,c,d,e,f,g),k=this.cljs$core$IMultiFn$_get_method$arity$2(null,h);cljs.core.truth_(k)||cljs.core.throw_no_method_error.call(null,this.name,h);return k.call(null,a,b,c,d,e,f,g)};
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$8=function(a,b,c,d,e,f,g,h){var k=this.dispatch_fn.call(null,a,b,c,d,e,f,g,h),l=this.cljs$core$IMultiFn$_get_method$arity$2(null,k);cljs.core.truth_(l)||cljs.core.throw_no_method_error.call(null,this.name,k);return l.call(null,a,b,c,d,e,f,g,h)};
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$9=function(a,b,c,d,e,f,g,h,k){var l=this.dispatch_fn.call(null,a,b,c,d,e,f,g,h,k),m=this.cljs$core$IMultiFn$_get_method$arity$2(null,l);cljs.core.truth_(m)||cljs.core.throw_no_method_error.call(null,this.name,l);return m.call(null,a,b,c,d,e,f,g,h,k)};
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$10=function(a,b,c,d,e,f,g,h,k,l){var m=this.dispatch_fn.call(null,a,b,c,d,e,f,g,h,k,l),n=this.cljs$core$IMultiFn$_get_method$arity$2(null,m);cljs.core.truth_(n)||cljs.core.throw_no_method_error.call(null,this.name,m);return n.call(null,a,b,c,d,e,f,g,h,k,l)};
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$11=function(a,b,c,d,e,f,g,h,k,l,m){var n=this.dispatch_fn.call(null,a,b,c,d,e,f,g,h,k,l,m),p=this.cljs$core$IMultiFn$_get_method$arity$2(null,n);cljs.core.truth_(p)||cljs.core.throw_no_method_error.call(null,this.name,n);return p.call(null,a,b,c,d,e,f,g,h,k,l,m)};
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$12=function(a,b,c,d,e,f,g,h,k,l,m,n){var p=this.dispatch_fn.call(null,a,b,c,d,e,f,g,h,k,l,m,n),q=this.cljs$core$IMultiFn$_get_method$arity$2(null,p);cljs.core.truth_(q)||cljs.core.throw_no_method_error.call(null,this.name,p);return q.call(null,a,b,c,d,e,f,g,h,k,l,m,n)};
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$13=function(a,b,c,d,e,f,g,h,k,l,m,n,p){var q=this.dispatch_fn.call(null,a,b,c,d,e,f,g,h,k,l,m,n,p),r=this.cljs$core$IMultiFn$_get_method$arity$2(null,q);cljs.core.truth_(r)||cljs.core.throw_no_method_error.call(null,this.name,q);return r.call(null,a,b,c,d,e,f,g,h,k,l,m,n,p)};
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$14=function(a,b,c,d,e,f,g,h,k,l,m,n,p,q){var r=this.dispatch_fn.call(null,a,b,c,d,e,f,g,h,k,l,m,n,p,q),s=this.cljs$core$IMultiFn$_get_method$arity$2(null,r);cljs.core.truth_(s)||cljs.core.throw_no_method_error.call(null,this.name,r);return s.call(null,a,b,c,d,e,f,g,h,k,l,m,n,p,q)};
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$15=function(a,b,c,d,e,f,g,h,k,l,m,n,p,q,r){var s=this.dispatch_fn.call(null,a,b,c,d,e,f,g,h,k,l,m,n,p,q,r),t=this.cljs$core$IMultiFn$_get_method$arity$2(null,s);cljs.core.truth_(t)||cljs.core.throw_no_method_error.call(null,this.name,s);return t.call(null,a,b,c,d,e,f,g,h,k,l,m,n,p,q,r)};
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$16=function(a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s){var t=this.dispatch_fn.call(null,a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s),v=this.cljs$core$IMultiFn$_get_method$arity$2(null,t);cljs.core.truth_(v)||cljs.core.throw_no_method_error.call(null,this.name,t);return v.call(null,a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s)};
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$17=function(a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t){var v=this.dispatch_fn.call(null,a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t),y=this.cljs$core$IMultiFn$_get_method$arity$2(null,v);cljs.core.truth_(y)||cljs.core.throw_no_method_error.call(null,this.name,v);return y.call(null,a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t)};
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$18=function(a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v){var y=this.dispatch_fn.call(null,a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v),z=this.cljs$core$IMultiFn$_get_method$arity$2(null,y);cljs.core.truth_(z)||cljs.core.throw_no_method_error.call(null,this.name,y);return z.call(null,a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v)};
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$19=function(a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v,y){var z=this.dispatch_fn.call(null,a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v,y),A=this.cljs$core$IMultiFn$_get_method$arity$2(null,z);cljs.core.truth_(A)||cljs.core.throw_no_method_error.call(null,this.name,z);return A.call(null,a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v,y)};
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$20=function(a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v,y,z){var A=this.dispatch_fn.call(null,a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v,y,z),B=this.cljs$core$IMultiFn$_get_method$arity$2(null,A);cljs.core.truth_(B)||cljs.core.throw_no_method_error.call(null,this.name,A);return B.call(null,a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v,y,z)};
cljs.core.MultiFn.prototype.cljs$core$IFn$_invoke$arity$21=function(a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v,y,z,A){var B=cljs.core.apply.call(null,this.dispatch_fn,a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v,y,z,A),D=this.cljs$core$IMultiFn$_get_method$arity$2(null,B);cljs.core.truth_(D)||cljs.core.throw_no_method_error.call(null,this.name,B);return cljs.core.apply.call(null,D,a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v,y,z,A)};
cljs.core.__GT_MultiFn=function(a,b,c,d,e,f,g,h){return new cljs.core.MultiFn(a,b,c,d,e,f,g,h)};cljs.core.remove_all_methods=function(a){return cljs.core._reset.call(null,a)};cljs.core.remove_method=function(a,b){return cljs.core._remove_method.call(null,a,b)};cljs.core.prefer_method=function(a,b,c){return cljs.core._prefer_method.call(null,a,b,c)};cljs.core.methods$=function(a){return cljs.core._methods.call(null,a)};cljs.core.get_method=function(a,b){return cljs.core._get_method.call(null,a,b)};
cljs.core.prefers=function(a){return cljs.core._prefers.call(null,a)};cljs.core.UUID=function(a){this.uuid=a;this.cljs$lang$protocol_mask$partition1$=0;this.cljs$lang$protocol_mask$partition0$=2153775104};cljs.core.UUID.cljs$lang$type=!0;cljs.core.UUID.cljs$lang$ctorStr="cljs.core/UUID";cljs.core.UUID.cljs$lang$ctorPrWriter=function(a,b,c){return cljs.core._write.call(null,b,"cljs.core/UUID")};
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1=function(a){return goog.string.hashCode(cljs.core.pr_str.call(null,this))};cljs.core.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3=function(a,b,c){return cljs.core._write.call(null,b,'#uuid "'+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this.uuid)+'"')};cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2=function(a,b){return b instanceof cljs.core.UUID&&this.uuid===b.uuid};cljs.core.UUID.prototype.toString=function(){return this.uuid};
cljs.core.__GT_UUID=function(a){return new cljs.core.UUID(a)};cljs.core.ExceptionInfo=function(a,b,c){this.message=a;this.data=b;this.cause=c};cljs.core.ExceptionInfo.cljs$lang$type=!0;cljs.core.ExceptionInfo.cljs$lang$ctorStr="cljs.core/ExceptionInfo";cljs.core.ExceptionInfo.cljs$lang$ctorPrWriter=function(a,b,c){return cljs.core._write.call(null,b,"cljs.core/ExceptionInfo")};cljs.core.__GT_ExceptionInfo=function(a,b,c){return new cljs.core.ExceptionInfo(a,b,c)};
cljs.core.ExceptionInfo.prototype=Error();cljs.core.ExceptionInfo.prototype.constructor=cljs.core.ExceptionInfo;cljs.core.ex_info=function(){var a=null,b=function(a,b){return new cljs.core.ExceptionInfo(a,b,null)},c=function(a,b,c){return new cljs.core.ExceptionInfo(a,b,c)},a=function(a,e,f){switch(arguments.length){case 2:return b.call(this,a,e);case 3:return c.call(this,a,e,f)}throw Error("Invalid arity: "+arguments.length);};a.cljs$core$IFn$_invoke$arity$2=b;a.cljs$core$IFn$_invoke$arity$3=c;return a}();
cljs.core.ex_data=function(a){return a instanceof cljs.core.ExceptionInfo?a.data:null};cljs.core.ex_message=function(a){return a instanceof Error?a.message:null};cljs.core.ex_cause=function(a){return a instanceof cljs.core.ExceptionInfo?a.cause:null};cljs.core.comparator=function(a){return function(b,c){return cljs.core.truth_(a.call(null,b,c))?-1:cljs.core.truth_(a.call(null,c,b))?1:new cljs.core.Keyword(null,"else","else",1017020587)?0:null}};
cljs.core.special_symbol_QMARK_=function(a){return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null,new cljs.core.PersistentArrayMap(null,19,[new cljs.core.Symbol(null,"deftype*","deftype*",-978581244,null),null,new cljs.core.Symbol(null,"new","new",-1640422567,null),null,new cljs.core.Symbol(null,"quote","quote",-1532577739,null),null,new cljs.core.Symbol(null,"\x26","\x26",-1640531489,null),null,new cljs.core.Symbol(null,"set!","set!",-1637004872,null),null,new cljs.core.Symbol(null,
"recur","recur",-1532142362,null),null,new cljs.core.Symbol(null,".",".",-1640531481,null),null,new cljs.core.Symbol(null,"ns","ns",-1640528002,null),null,new cljs.core.Symbol(null,"do","do",-1640528316,null),null,new cljs.core.Symbol(null,"fn*","fn*",-1640430053,null),null,new cljs.core.Symbol(null,"throw","throw",-1530191713,null),null,new cljs.core.Symbol(null,"letfn*","letfn*",1548249632,null),null,new cljs.core.Symbol(null,"js*","js*",-1640426054,null),null,new cljs.core.Symbol(null,"defrecord*",
"defrecord*",774272013,null),null,new cljs.core.Symbol(null,"let*","let*",-1637213400,null),null,new cljs.core.Symbol(null,"loop*","loop*",-1537374273,null),null,new cljs.core.Symbol(null,"try","try",-1640416396,null),null,new cljs.core.Symbol(null,"if","if",-1640528170,null),null,new cljs.core.Symbol(null,"def","def",-1640432194,null),null],null),null),a)};var clojure={string:{}};clojure.string.seq_reverse=function(a){return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,a)};clojure.string.reverse=function(a){return a.split("").reverse().join("")};
clojure.string.replace=function(a,b,c){if("string"===typeof b)return a.replace(RegExp(goog.string.regExpEscape(b),"g"),c);if(cljs.core.truth_(b.hasOwnProperty("source")))return a.replace(RegExp(b.source,"g"),c);if(new cljs.core.Keyword(null,"else","else",1017020587))throw"Invalid match arg: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b);return null};clojure.string.replace_first=function(a,b,c){return a.replace(b,c)};
clojure.string.join=function(){var a=null,b=function(a){return cljs.core.apply.call(null,cljs.core.str,a)},c=function(a,b){return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,a,b))},a=function(a,e){switch(arguments.length){case 1:return b.call(this,a);case 2:return c.call(this,a,e)}throw Error("Invalid arity: "+arguments.length);};a.cljs$core$IFn$_invoke$arity$1=b;a.cljs$core$IFn$_invoke$arity$2=c;return a}();clojure.string.upper_case=function(a){return a.toUpperCase()};
clojure.string.lower_case=function(a){return a.toLowerCase()};clojure.string.capitalize=function(a){return 2>cljs.core.count.call(null,a)?clojure.string.upper_case.call(null,a):""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case.call(null,cljs.core.subs.call(null,a,0,1)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case.call(null,cljs.core.subs.call(null,a,1)))};
clojure.string.pop_last_while_empty=function(a){for(;;)if(cljs.core._EQ_.call(null,"",cljs.core.peek.call(null,a)))a=cljs.core.pop.call(null,a);else return a};clojure.string.discard_trailing_if_needed=function(a,b){return cljs.core._EQ_.call(null,0,a)?clojure.string.pop_last_while_empty.call(null,b):b};
clojure.string.split_with_empty_regex=function(a,b){if(0>=b||b>=2+cljs.core.count.call(null,a))return cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,"",cljs.core.map.call(null,cljs.core.str,cljs.core.seq.call(null,a)))),"");var c=cljs.core._EQ_;if(cljs.core.truth_(c.call(null,1,b)))return new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[a],null);if(cljs.core.truth_(c.call(null,2,b)))return new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,
["",a],null);c=b-2;return cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,"",cljs.core.subvec.call(null,cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.str,cljs.core.seq.call(null,a))),0,c))),cljs.core.subs.call(null,a,c))};
clojure.string.split=function(){var a=null,b=function(b,c){return a.call(null,b,c,0)},c=function(a,b,c){return clojure.string.discard_trailing_if_needed.call(null,c,cljs.core._EQ_.call(null,""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b),"/(?:)/")?clojure.string.split_with_empty_regex.call(null,a,c):1>c?cljs.core.vec.call(null,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)).split(b)):function(){for(var g=a,h=c,k=cljs.core.PersistentVector.EMPTY;;){if(cljs.core._EQ_.call(null,h,1))return cljs.core.conj.call(null,
k,g);var l=cljs.core.re_find.call(null,b,g);if(cljs.core.truth_(l))var m=l,l=g.indexOf(m),m=g.substring(l+cljs.core.count.call(null,m)),h=h-1,k=cljs.core.conj.call(null,k,g.substring(0,l)),g=m;else return cljs.core.conj.call(null,k,g)}}())},a=function(a,e,f){switch(arguments.length){case 2:return b.call(this,a,e);case 3:return c.call(this,a,e,f)}throw Error("Invalid arity: "+arguments.length);};a.cljs$core$IFn$_invoke$arity$2=b;a.cljs$core$IFn$_invoke$arity$3=c;return a}();
clojure.string.split_lines=function(a){return clojure.string.split.call(null,a,/\n|\r\n/)};clojure.string.trim=function(a){return goog.string.trim(a)};clojure.string.triml=function(a){return goog.string.trimLeft(a)};clojure.string.trimr=function(a){return goog.string.trimRight(a)};clojure.string.trim_newline=function(a){for(var b=a.length;;){if(0===b)return"";var c=cljs.core.get.call(null,a,b-1);if(cljs.core._EQ_.call(null,c,"\n")||cljs.core._EQ_.call(null,c,"\r"))b-=1;else return a.substring(0,b)}};
clojure.string.blank_QMARK_=function(a){return goog.string.isEmptySafe(a)};clojure.string.escape=function(a,b){for(var c=new goog.string.StringBuffer,d=a.length,e=0;;){if(cljs.core._EQ_.call(null,d,e))return c.toString();var f=a.charAt(e),g=cljs.core.get.call(null,b,f);cljs.core.truth_(g)?c.append(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(g)):c.append(f);e+=1}};cljs.reader={};cljs.reader.PushbackReader=function(){return{}}();cljs.reader.read_char=function(a){if(a?a.cljs$reader$PushbackReader$read_char$arity$1:a)return a.cljs$reader$PushbackReader$read_char$arity$1(a);var b;b=cljs.reader.read_char[goog.typeOf(null==a?null:a)];if(!b&&(b=cljs.reader.read_char._,!b))throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",a);return b.call(null,a)};
cljs.reader.unread=function(a,b){if(a?a.cljs$reader$PushbackReader$unread$arity$2:a)return a.cljs$reader$PushbackReader$unread$arity$2(a,b);var c;c=cljs.reader.unread[goog.typeOf(null==a?null:a)];if(!c&&(c=cljs.reader.unread._,!c))throw cljs.core.missing_protocol.call(null,"PushbackReader.unread",a);return c.call(null,a,b)};cljs.reader.StringPushbackReader=function(a,b,c){this.s=a;this.buffer=b;this.idx=c};cljs.reader.StringPushbackReader.cljs$lang$type=!0;
cljs.reader.StringPushbackReader.cljs$lang$ctorStr="cljs.reader/StringPushbackReader";cljs.reader.StringPushbackReader.cljs$lang$ctorPrWriter=function(a,b,c){return cljs.core._write.call(null,b,"cljs.reader/StringPushbackReader")};cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$=!0;cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$read_char$arity$1=function(a){return 0===this.buffer.length?(this.idx+=1,this.s[this.idx]):this.buffer.pop()};
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread$arity$2=function(a,b){return this.buffer.push(b)};cljs.reader.__GT_StringPushbackReader=function(a,b,c){return new cljs.reader.StringPushbackReader(a,b,c)};cljs.reader.push_back_reader=function(a){return new cljs.reader.StringPushbackReader(a,[],-1)};cljs.reader.whitespace_QMARK_=function(a){var b=goog.string.isBreakingWhitespace(a);return cljs.core.truth_(b)?b:","===a};cljs.reader.numeric_QMARK_=function(a){return goog.string.isNumeric(a)};
cljs.reader.comment_prefix_QMARK_=function(a){return";"===a};cljs.reader.number_literal_QMARK_=function(a,b){return cljs.reader.numeric_QMARK_.call(null,b)||("+"===b||"-"===b)&&cljs.reader.numeric_QMARK_.call(null,function(){var b=cljs.reader.read_char.call(null,a);cljs.reader.unread.call(null,a,b);return b}())};
cljs.reader.reader_error=function(){var a=function(a,b){throw Error(cljs.core.apply.call(null,cljs.core.str,b));},b=function(b,d){var e=null;1<arguments.length&&(e=cljs.core.array_seq(Array.prototype.slice.call(arguments,1),0));return a.call(this,b,e)};b.cljs$lang$maxFixedArity=1;b.cljs$lang$applyTo=function(b){var d=cljs.core.first(b);b=cljs.core.rest(b);return a(d,b)};b.cljs$core$IFn$_invoke$arity$variadic=a;return b}();
cljs.reader.macro_terminating_QMARK_=function(a){var b="#"!==a;return b&&(b="'"!==a)?(b=":"!==a)?cljs.reader.macros.call(null,a):b:b};cljs.reader.read_token=function(a,b){for(var c=new goog.string.StringBuffer(b),d=cljs.reader.read_char.call(null,a);;){if(null==d||cljs.reader.whitespace_QMARK_.call(null,d)||cljs.reader.macro_terminating_QMARK_.call(null,d))return cljs.reader.unread.call(null,a,d),c.toString();c.append(d);d=cljs.reader.read_char.call(null,a)}};
cljs.reader.skip_line=function(a,b){for(;;){var c=cljs.reader.read_char.call(null,a);if("\n"===c||"\r"===c||null==c)return a}};cljs.reader.int_pattern=cljs.core.re_pattern.call(null,"^([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+))(N)?$");cljs.reader.ratio_pattern=cljs.core.re_pattern.call(null,"^([-+]?[0-9]+)/([0-9]+)$");cljs.reader.float_pattern=cljs.core.re_pattern.call(null,"^([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?$");
cljs.reader.symbol_pattern=cljs.core.re_pattern.call(null,"^[:]?([^0-9/].*/)?([^0-9/][^/]*)$");cljs.reader.re_matches_STAR_=function(a,b){var c=a.exec(b);return null!=c&&c[0]===b?1===c.length?c[0]:c:null};
cljs.reader.match_int=function(a){a=cljs.reader.re_matches_STAR_.call(null,cljs.reader.int_pattern,a);if(null!=a[2])return 0;var b=cljs.core.truth_(a[3])?[a[3],10]:cljs.core.truth_(a[4])?[a[4],16]:cljs.core.truth_(a[5])?[a[5],8]:cljs.core.truth_(a[6])?[a[7],parseInt(a[6],10)]:new cljs.core.Keyword(null,"else","else",1017020587)?[null,null]:null,c=b[0];if(null==c)return null;b=parseInt(c,b[1]);return"-"===a[1]?-b:b};
cljs.reader.match_ratio=function(a){a=cljs.reader.re_matches_STAR_.call(null,cljs.reader.ratio_pattern,a);var b=a[2];return parseInt(a[1],10)/parseInt(b,10)};cljs.reader.match_float=function(a){return parseFloat(a)};
cljs.reader.match_number=function(a){return cljs.core.truth_(cljs.reader.re_matches_STAR_.call(null,cljs.reader.int_pattern,a))?cljs.reader.match_int.call(null,a):cljs.core.truth_(cljs.reader.re_matches_STAR_.call(null,cljs.reader.ratio_pattern,a))?cljs.reader.match_ratio.call(null,a):cljs.core.truth_(cljs.reader.re_matches_STAR_.call(null,cljs.reader.float_pattern,a))?cljs.reader.match_float.call(null,a):null};
cljs.reader.escape_char_map=function(a){if("t"===a)return"\t";if("r"===a)return"\r";if("n"===a)return"\n";if("\\"===a)return"\\";if('"'===a)return'"';if("b"===a)return"\b";if("f"===a)return"\f";new cljs.core.Keyword(null,"else","else",1017020587);return null};cljs.reader.read_2_chars=function(a){return(new goog.string.StringBuffer(cljs.reader.read_char.call(null,a),cljs.reader.read_char.call(null,a))).toString()};
cljs.reader.read_4_chars=function(a){return(new goog.string.StringBuffer(cljs.reader.read_char.call(null,a),cljs.reader.read_char.call(null,a),cljs.reader.read_char.call(null,a),cljs.reader.read_char.call(null,a))).toString()};cljs.reader.unicode_2_pattern=cljs.core.re_pattern.call(null,"^[0-9A-Fa-f]{2}$");cljs.reader.unicode_4_pattern=cljs.core.re_pattern.call(null,"^[0-9A-Fa-f]{4}$");
cljs.reader.validate_unicode_escape=function(a,b,c,d){return cljs.core.truth_(cljs.core.re_matches.call(null,a,d))?d:cljs.reader.reader_error.call(null,b,"Unexpected unicode escape \\",c,d)};cljs.reader.make_unicode_char=function(a){a=parseInt(a,16);return String.fromCharCode(a)};
cljs.reader.escape_char=function(a,b){var c=cljs.reader.read_char.call(null,b),d=cljs.reader.escape_char_map.call(null,c);return cljs.core.truth_(d)?d:"x"===c?cljs.reader.make_unicode_char.call(null,cljs.reader.validate_unicode_escape.call(null,cljs.reader.unicode_2_pattern,b,c,cljs.reader.read_2_chars.call(null,b))):"u"===c?cljs.reader.make_unicode_char.call(null,cljs.reader.validate_unicode_escape.call(null,cljs.reader.unicode_4_pattern,b,c,cljs.reader.read_4_chars.call(null,b))):cljs.reader.numeric_QMARK_.call(null,
c)?String.fromCharCode(c):new cljs.core.Keyword(null,"else","else",1017020587)?cljs.reader.reader_error.call(null,b,"Unexpected unicode escape \\",c):null};cljs.reader.read_past=function(a,b){for(var c=cljs.reader.read_char.call(null,b);;)if(cljs.core.truth_(a.call(null,c)))c=cljs.reader.read_char.call(null,b);else return c};
cljs.reader.read_delimited_list=function(a,b,c){for(var d=cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);;){var e=cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,b);cljs.core.truth_(e)||cljs.reader.reader_error.call(null,b,"EOF while reading");if(a===e)return cljs.core.persistent_BANG_.call(null,d);var f=cljs.reader.macros.call(null,e);cljs.core.truth_(f)?e=f.call(null,b,e):(cljs.reader.unread.call(null,b,e),e=cljs.reader.read.call(null,b,!0,null,c));d=e===b?d:cljs.core.conj_BANG_.call(null,
d,e)}};cljs.reader.not_implemented=function(a,b){return cljs.reader.reader_error.call(null,a,"Reader for ",b," not implemented yet")};cljs.reader.read_dispatch=function(a,b){var c=cljs.reader.read_char.call(null,a),d=cljs.reader.dispatch_macros.call(null,c);if(cljs.core.truth_(d))return d.call(null,a,b);d=cljs.reader.maybe_read_tagged_type.call(null,a,c);return cljs.core.truth_(d)?d:cljs.reader.reader_error.call(null,a,"No dispatch macro for ",c)};
cljs.reader.read_unmatched_delimiter=function(a,b){return cljs.reader.reader_error.call(null,a,"Unmached delimiter ",b)};cljs.reader.read_list=function(a,b){return cljs.core.apply.call(null,cljs.core.list,cljs.reader.read_delimited_list.call(null,")",a,!0))};cljs.reader.read_comment=cljs.reader.skip_line;cljs.reader.read_vector=function(a,b){return cljs.reader.read_delimited_list.call(null,"]",a,!0)};
cljs.reader.read_map=function(a,b){var c=cljs.reader.read_delimited_list.call(null,"}",a,!0);cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,c))&&cljs.reader.reader_error.call(null,a,"Map literal must contain an even number of forms");return cljs.core.apply.call(null,cljs.core.hash_map,c)};
cljs.reader.read_number=function(a,b){for(var c=new goog.string.StringBuffer(b),d=cljs.reader.read_char.call(null,a);;){if(cljs.core.truth_(function(){var a=null==d;return a?a:(a=cljs.reader.whitespace_QMARK_.call(null,d))?a:cljs.reader.macros.call(null,d)}())){cljs.reader.unread.call(null,a,d);var e=c.toString(),c=cljs.reader.match_number.call(null,e);return cljs.core.truth_(c)?c:cljs.reader.reader_error.call(null,a,"Invalid number format [",e,"]")}c.append(d);d=e=cljs.reader.read_char.call(null,
a)}};cljs.reader.read_string_STAR_=function(a,b){for(var c=new goog.string.StringBuffer,d=cljs.reader.read_char.call(null,a);;){if(null==d)return cljs.reader.reader_error.call(null,a,"EOF while reading");if("\\"===d)c.append(cljs.reader.escape_char.call(null,c,a)),d=cljs.reader.read_char.call(null,a);else{if('"'===d)return c.toString();if(new cljs.core.Keyword(null,"default","default",2558708147))c.append(d),d=cljs.reader.read_char.call(null,a);else return null}}};
cljs.reader.special_symbols=function(a,b){return"nil"===a?null:"true"===a?!0:"false"===a?!1:new cljs.core.Keyword(null,"else","else",1017020587)?b:null};cljs.reader.read_symbol=function(a,b){var c=cljs.reader.read_token.call(null,a,b);return cljs.core.truth_(goog.string.contains(c,"/"))?cljs.core.symbol.call(null,cljs.core.subs.call(null,c,0,c.indexOf("/")),cljs.core.subs.call(null,c,c.indexOf("/")+1,c.length)):cljs.reader.special_symbols.call(null,c,cljs.core.symbol.call(null,c))};
cljs.reader.read_keyword=function(a,b){var c=cljs.reader.read_token.call(null,a,cljs.reader.read_char.call(null,a)),d=cljs.reader.re_matches_STAR_.call(null,cljs.reader.symbol_pattern,c),c=d[0],e=d[1],d=d[2];return void 0!==e&&":/"===e.substring(e.length-2,e.length)||":"===d[d.length-1]||-1!==c.indexOf("::",1)?cljs.reader.reader_error.call(null,a,"Invalid token: ",c):null!=e&&0<e.length?cljs.core.keyword.call(null,e.substring(0,e.indexOf("/")),d):cljs.core.keyword.call(null,c)};
cljs.reader.desugar_meta=function(a){return a instanceof cljs.core.Symbol?new cljs.core.PersistentArrayMap(null,1,[new cljs.core.Keyword(null,"tag","tag",1014018828),a],null):"string"===typeof a?new cljs.core.PersistentArrayMap(null,1,[new cljs.core.Keyword(null,"tag","tag",1014018828),a],null):a instanceof cljs.core.Keyword?new cljs.core.PersistentArrayMap.fromArray([a,!0],!0,!1):new cljs.core.Keyword(null,"else","else",1017020587)?a:null};
cljs.reader.wrapping_reader=function(a){return function(b,c){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.reader.read.call(null,b,!0,null,!0)),a)}};cljs.reader.throwing_reader=function(a){return function(b,c){return cljs.reader.reader_error.call(null,b,a)}};
cljs.reader.read_meta=function(a,b){var c=cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,a,!0,null,!0));cljs.core.map_QMARK_.call(null,c)||cljs.reader.reader_error.call(null,a,"Metadata must be Symbol,Keyword,String or Map");var d=cljs.reader.read.call(null,a,!0,null,!0);return(d?d.cljs$lang$protocol_mask$partition0$&262144||d.cljs$core$IWithMeta$||(d.cljs$lang$protocol_mask$partition0$?0:cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,d)):cljs.core.native_satisfies_QMARK_.call(null,
cljs.core.IWithMeta,d))?cljs.core.with_meta.call(null,d,cljs.core.merge.call(null,cljs.core.meta.call(null,d),c)):cljs.reader.reader_error.call(null,a,"Metadata can only be applied to IWithMetas")};cljs.reader.read_set=function(a,b){return cljs.core.set.call(null,cljs.reader.read_delimited_list.call(null,"}",a,!0))};cljs.reader.read_regex=function(a,b){return cljs.core.re_pattern.call(null,cljs.reader.read_string_STAR_.call(null,a,b))};
cljs.reader.read_discard=function(a,b){cljs.reader.read.call(null,a,!0,null,!0);return a};
cljs.reader.macros=function(a){if('"'===a)return cljs.reader.read_string_STAR_;if(":"===a)return cljs.reader.read_keyword;if(";"===a)return cljs.reader.read_comment;if("'"===a)return cljs.reader.wrapping_reader.call(null,new cljs.core.Symbol(null,"quote","quote",-1532577739,null));if("@"===a)return cljs.reader.wrapping_reader.call(null,new cljs.core.Symbol(null,"deref","deref",-1545057749,null));if("^"===a)return cljs.reader.read_meta;if("`"===a||"~"===a)return cljs.reader.not_implemented;if("("===
a)return cljs.reader.read_list;if(")"===a)return cljs.reader.read_unmatched_delimiter;if("["===a)return cljs.reader.read_vector;if("]"===a)return cljs.reader.read_unmatched_delimiter;if("{"===a)return cljs.reader.read_map;if("}"===a)return cljs.reader.read_unmatched_delimiter;if("\\"===a)return cljs.reader.read_char;if("#"===a)return cljs.reader.read_dispatch;new cljs.core.Keyword(null,"else","else",1017020587);return null};
cljs.reader.dispatch_macros=function(a){if("{"===a)return cljs.reader.read_set;if("\x3c"===a)return cljs.reader.throwing_reader.call(null,"Unreadable form");if('"'===a)return cljs.reader.read_regex;if("!"===a)return cljs.reader.read_comment;if("_"===a)return cljs.reader.read_discard;new cljs.core.Keyword(null,"else","else",1017020587);return null};
cljs.reader.read=function(a,b,c,d){for(;;){d=cljs.reader.read_char.call(null,a);if(null==d)return cljs.core.truth_(b)?cljs.reader.reader_error.call(null,a,"EOF while reading"):c;if(!cljs.reader.whitespace_QMARK_.call(null,d))if(cljs.reader.comment_prefix_QMARK_.call(null,d))a=cljs.reader.read_comment.call(null,a,d);else if(new cljs.core.Keyword(null,"else","else",1017020587)){var e=cljs.reader.macros.call(null,d);d=cljs.core.truth_(e)?e.call(null,a,d):cljs.reader.number_literal_QMARK_.call(null,a,
d)?cljs.reader.read_number.call(null,a,d):new cljs.core.Keyword(null,"else","else",1017020587)?cljs.reader.read_symbol.call(null,a,d):null;if(d!==a)return d}else return null}};cljs.reader.read_string=function(a){a=cljs.reader.push_back_reader.call(null,a);return cljs.reader.read.call(null,a,!1,null,!1)};
cljs.reader.zero_fill_right_and_truncate=function(a,b){if(cljs.core._EQ_.call(null,b,cljs.core.count.call(null,a)))return a;if(b<cljs.core.count.call(null,a))return cljs.core.subs.call(null,a,0,b);if(new cljs.core.Keyword(null,"else","else",1017020587))for(var c=new goog.string.StringBuffer(a);;)if(c.getLength()<b)c=c.append("0");else return c.toString();else return null};cljs.reader.divisible_QMARK_=function(a,b){return 0===cljs.core.mod.call(null,a,b)};
cljs.reader.indivisible_QMARK_=function(a,b){return!cljs.reader.divisible_QMARK_.call(null,a,b)};cljs.reader.leap_year_QMARK_=function(a){return cljs.reader.divisible_QMARK_.call(null,a,4)&&(cljs.reader.indivisible_QMARK_.call(null,a,100)||cljs.reader.divisible_QMARK_.call(null,a,400))};
cljs.reader.days_in_month=function(){var a=new cljs.core.PersistentVector(null,13,5,cljs.core.PersistentVector.EMPTY_NODE,[null,31,28,31,30,31,30,31,31,30,31,30,31],null),b=new cljs.core.PersistentVector(null,13,5,cljs.core.PersistentVector.EMPTY_NODE,[null,31,29,31,30,31,30,31,31,30,31,30,31],null);return function(a,b){return function(e,f){return cljs.core.get.call(null,cljs.core.truth_(f)?b:a,e)}}(a,b)}();cljs.reader.timestamp_regex=/(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
cljs.reader.parse_int=function(a){a=parseInt(a,10);return cljs.core.not.call(null,isNaN(a))?a:null};cljs.reader.check=function(a,b,c,d){a<=b&&b<=c||cljs.reader.reader_error.call(null,null,""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(d)+" Failed:  "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)+"\x3c\x3d"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)+"\x3c\x3d"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c));return b};
cljs.reader.parse_and_validate_timestamp=function(a){var b=cljs.core.re_matches.call(null,cljs.reader.timestamp_regex,a);cljs.core.nth.call(null,b,0,null);var c=cljs.core.nth.call(null,b,1,null),d=cljs.core.nth.call(null,b,2,null),e=cljs.core.nth.call(null,b,3,null),f=cljs.core.nth.call(null,b,4,null),g=cljs.core.nth.call(null,b,5,null),h=cljs.core.nth.call(null,b,6,null),k=cljs.core.nth.call(null,b,7,null),l=cljs.core.nth.call(null,b,8,null),m=cljs.core.nth.call(null,b,9,null),n=cljs.core.nth.call(null,
b,10,null);if(cljs.core.not.call(null,b))return cljs.reader.reader_error.call(null,null,"Unrecognized date/time syntax: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a));a=cljs.reader.parse_int.call(null,c);var b=function(){var a=cljs.reader.parse_int.call(null,d);return cljs.core.truth_(a)?a:1}(),c=function(){var a=cljs.reader.parse_int.call(null,e);return cljs.core.truth_(a)?a:1}(),p=function(){var a=cljs.reader.parse_int.call(null,f);return cljs.core.truth_(a)?a:0}(),q=function(){var a=cljs.reader.parse_int.call(null,
g);return cljs.core.truth_(a)?a:0}(),r=function(){var a=cljs.reader.parse_int.call(null,h);return cljs.core.truth_(a)?a:0}(),s=function(){var a=cljs.reader.parse_int.call(null,cljs.reader.zero_fill_right_and_truncate.call(null,k,3));return cljs.core.truth_(a)?a:0}(),l=cljs.core._EQ_.call(null,l,"-")?-1:1,t=function(){var a=cljs.reader.parse_int.call(null,m);return cljs.core.truth_(a)?a:0}(),v=function(){var a=cljs.reader.parse_int.call(null,n);return cljs.core.truth_(a)?a:0}(),l=l*(60*t+v);return new cljs.core.PersistentVector(null,
8,5,cljs.core.PersistentVector.EMPTY_NODE,[a,cljs.reader.check.call(null,1,b,12,"timestamp month field must be in range 1..12"),cljs.reader.check.call(null,1,c,cljs.reader.days_in_month.call(null,b,cljs.reader.leap_year_QMARK_.call(null,a)),"timestamp day field must be in range 1..last day in month"),cljs.reader.check.call(null,0,p,23,"timestamp hour field must be in range 0..23"),cljs.reader.check.call(null,0,q,59,"timestamp minute field must be in range 0..59"),cljs.reader.check.call(null,0,r,cljs.core._EQ_.call(null,
q,59)?60:59,"timestamp second field must be in range 0..60"),cljs.reader.check.call(null,0,s,999,"timestamp millisecond field must be in range 0..999"),l],null)};
cljs.reader.parse_timestamp=function(a){var b=cljs.reader.parse_and_validate_timestamp.call(null,a);if(cljs.core.truth_(b)){a=cljs.core.nth.call(null,b,0,null);var c=cljs.core.nth.call(null,b,1,null),d=cljs.core.nth.call(null,b,2,null),e=cljs.core.nth.call(null,b,3,null),f=cljs.core.nth.call(null,b,4,null),g=cljs.core.nth.call(null,b,5,null),h=cljs.core.nth.call(null,b,6,null),b=cljs.core.nth.call(null,b,7,null);return new Date(Date.UTC(a,c-1,d,e,f,g,h)-6E4*b)}return cljs.reader.reader_error.call(null,
null,"Unrecognized date/time syntax: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a))};cljs.reader.read_date=function(a){return"string"===typeof a?cljs.reader.parse_timestamp.call(null,a):cljs.reader.reader_error.call(null,null,"Instance literal expects a string for its timestamp.")};cljs.reader.read_queue=function(a){return cljs.core.vector_QMARK_.call(null,a)?cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,a):cljs.reader.reader_error.call(null,null,"Queue literal expects a vector for its elements.")};
cljs.reader.read_js=function(a){if(cljs.core.vector_QMARK_.call(null,a)){var b=[];a=cljs.core.seq.call(null,a);for(var c=null,d=0,e=0;;)if(e<d){var f=cljs.core._nth.call(null,c,e);b.push(f);e+=1}else if(a=cljs.core.seq.call(null,a))c=a,cljs.core.chunked_seq_QMARK_.call(null,c)?(a=cljs.core.chunk_first.call(null,c),e=cljs.core.chunk_rest.call(null,c),c=a,d=cljs.core.count.call(null,a),a=e):(a=cljs.core.first.call(null,c),b.push(a),a=cljs.core.next.call(null,c),c=null,d=0),e=0;else break;return b}if(cljs.core.map_QMARK_.call(null,
a)){b={};a=cljs.core.seq.call(null,a);c=null;for(e=d=0;;)if(e<d){var g=cljs.core._nth.call(null,c,e),f=cljs.core.nth.call(null,g,0,null),g=cljs.core.nth.call(null,g,1,null);b[cljs.core.name.call(null,f)]=g;e+=1}else if(a=cljs.core.seq.call(null,a))cljs.core.chunked_seq_QMARK_.call(null,a)?(d=cljs.core.chunk_first.call(null,a),a=cljs.core.chunk_rest.call(null,a),c=d,d=cljs.core.count.call(null,d)):(d=cljs.core.first.call(null,a),c=cljs.core.nth.call(null,d,0,null),d=cljs.core.nth.call(null,d,1,null),
b[cljs.core.name.call(null,c)]=d,a=cljs.core.next.call(null,a),c=null,d=0),e=0;else break;return b}return new cljs.core.Keyword(null,"else","else",1017020587)?cljs.reader.reader_error.call(null,null,"JS literal expects a vector or map containing only string or unqualified keyword keys"):null};cljs.reader.read_uuid=function(a){return"string"===typeof a?new cljs.core.UUID(a):cljs.reader.reader_error.call(null,null,"UUID literal expects a string as its representation.")};
cljs.reader._STAR_tag_table_STAR_=cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null,4,["inst",cljs.reader.read_date,"uuid",cljs.reader.read_uuid,"queue",cljs.reader.read_queue,"js",cljs.reader.read_js],null));cljs.reader._STAR_default_data_reader_fn_STAR_=cljs.core.atom.call(null,null);
cljs.reader.maybe_read_tagged_type=function(a,b){var c=cljs.reader.read_symbol.call(null,a,b),d=cljs.core.get.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)),e=cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_);return cljs.core.truth_(d)?d.call(null,cljs.reader.read.call(null,a,!0,null,!1)):cljs.core.truth_(e)?e.call(null,c,cljs.reader.read.call(null,a,!0,null,!1)):new cljs.core.Keyword(null,"else","else",
1017020587)?cljs.reader.reader_error.call(null,a,"Could not find tag parser for ",""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)," in ",cljs.core.pr_str.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_)))):null};
cljs.reader.register_tag_parser_BANG_=function(a,b){var c=""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a),d=cljs.core.get.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),c);cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,c,b);return d};
cljs.reader.deregister_tag_parser_BANG_=function(a){a=""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a);var b=cljs.core.get.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),a);cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.dissoc,a);return b};
cljs.reader.register_default_tag_parser_BANG_=function(a){var b=cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_);cljs.core.swap_BANG_.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_,function(b){return function(b){return a}}(b));return b};
cljs.reader.deregister_default_tag_parser_BANG_=function(){var a=cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_);cljs.core.swap_BANG_.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_,function(a){return function(a){return null}}(a));return a};var tailrecursion={priority_map:{}};tailrecursion.priority_map.PersistentPriorityMap=function(a,b,c,d){this.priority__GT_set_of_items=a;this.item__GT_priority=b;this.meta=c;this.__hash=d;this.cljs$lang$protocol_mask$partition1$=0;this.cljs$lang$protocol_mask$partition0$=2565220111};tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$type=!0;tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorStr="tailrecursion.priority-map/PersistentPriorityMap";
tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorPrWriter=function(a,b,c){return cljs.core._write.call(null,b,"tailrecursion.priority-map/PersistentPriorityMap")};tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IHash$_hash$arity$1=function(a){a=this.__hash;return null!=a?a:this.__hash=a=cljs.core.hash_imap.call(null,this)};
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ILookup$_lookup$arity$2=function(a,b){return cljs.core.get.call(null,this.item__GT_priority,b)};tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ILookup$_lookup$arity$3=function(a,b,c){return cljs.core.get.call(null,this.item__GT_priority,b,c)};
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IAssociative$_assoc$arity$3=function(a,b,c){a=cljs.core.get.call(null,this.item__GT_priority,b,null);if(cljs.core.truth_(a)){if(cljs.core._EQ_.call(null,a,c))return this;var d=cljs.core.get.call(null,this.priority__GT_set_of_items,a);return cljs.core._EQ_.call(null,cljs.core.count.call(null,d),1)?new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,cljs.core.dissoc.call(null,this.priority__GT_set_of_items,
a),c,cljs.core.conj.call(null,cljs.core.get.call(null,this.priority__GT_set_of_items,c,cljs.core.PersistentHashSet.EMPTY),b)),cljs.core.assoc.call(null,this.item__GT_priority,b,c),this.meta,null):new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,this.priority__GT_set_of_items,a,cljs.core.disj.call(null,cljs.core.get.call(null,this.priority__GT_set_of_items,a),b),c,cljs.core.conj.call(null,cljs.core.get.call(null,this.priority__GT_set_of_items,c,cljs.core.PersistentHashSet.EMPTY),
b)),cljs.core.assoc.call(null,this.item__GT_priority,b,c),this.meta,null)}return new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,this.priority__GT_set_of_items,c,cljs.core.conj.call(null,cljs.core.get.call(null,this.priority__GT_set_of_items,c,cljs.core.PersistentHashSet.EMPTY),b)),cljs.core.assoc.call(null,this.item__GT_priority,b,c),this.meta,null)};
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2=function(a,b){return cljs.core.contains_QMARK_.call(null,this.item__GT_priority,b)};
tailrecursion.priority_map.PersistentPriorityMap.prototype.call=function(){var a=null;return a=function(a,c,d){switch(arguments.length){case 2:return this.cljs$core$ILookup$_lookup$arity$2(null,c);case 3:return this.cljs$core$ILookup$_lookup$arity$3(null,c,d)}throw Error("Invalid arity: "+arguments.length);}}();tailrecursion.priority_map.PersistentPriorityMap.prototype.apply=function(a,b){return this.call.apply(this,[this].concat(cljs.core.aclone.call(null,b)))};
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IFn$_invoke$arity$1=function(a){return this.cljs$core$ILookup$_lookup$arity$2(null,a)};tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IFn$_invoke$arity$2=function(a,b){return this.cljs$core$ILookup$_lookup$arity$3(null,a,b)};
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3=function(a,b,c){a=function(a){return function(a){return cljs.core.pr_sequential_writer.call(null,b,cljs.core.pr_writer,""," ","",c,a)}}(this);return cljs.core.pr_sequential_writer.call(null,b,a,"#tailrecursion.priority-map {",", ","}",c,this)};
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ICollection$_conj$arity$2=function(a,b){return cljs.core.vector_QMARK_.call(null,b)?cljs.core._assoc.call(null,this,cljs.core._nth.call(null,b,0),cljs.core._nth.call(null,b,1)):cljs.core.reduce.call(null,cljs.core._conj,this,b)};
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IReversible$_rseq$arity$1=function(a){var b=this,c=this;return cljs.core.seq.call(null,function(){return function(a){return function f(b){return new cljs.core.LazySeq(null,function(a){return function(){for(var c=b;;){var d=cljs.core.seq.call(null,c);if(d){var m=d,n=cljs.core.first.call(null,m),p=cljs.core.nth.call(null,n,0,null),q=cljs.core.nth.call(null,n,1,null),d=function(a,b,c,d,f,g,h){return function D(k){return new cljs.core.LazySeq(null,
function(a,b,c,d,f,g,h){return function(){for(;;){var a=cljs.core.seq.call(null,k);if(a){if(cljs.core.chunked_seq_QMARK_.call(null,a)){var b=cljs.core.chunk_first.call(null,a),d=cljs.core.count.call(null,b),f=cljs.core.chunk_buffer.call(null,d);a:{for(var g=0;;)if(g<d){var h=cljs.core._nth.call(null,b,g);cljs.core.chunk_append.call(null,f,new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[h,c],null));g+=1}else{b=!0;break a}b=void 0}return b?cljs.core.chunk_cons.call(null,
cljs.core.chunk.call(null,f),D.call(null,cljs.core.chunk_rest.call(null,a))):cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,f),null)}f=cljs.core.first.call(null,a);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[f,c],null),D.call(null,cljs.core.rest.call(null,a)))}return null}}}(a,b,c,d,f,g,h),null,null)}}(c,n,p,q,m,d,a);if(q=cljs.core.seq.call(null,d.call(null,q)))return cljs.core.concat.call(null,q,f.call(null,cljs.core.rest.call(null,
c)));c=cljs.core.rest.call(null,c)}else return null}}}(a),null,null)}}(c).call(null,cljs.core.rseq.call(null,b.priority__GT_set_of_items))}())};tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2=function(a,b){return(cljs.core.truth_(b)?cljs.core.seq:cljs.core.rseq).call(null,this)};
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3=function(a,b,c){var d=this,e=cljs.core.truth_(c)?cljs.core.subseq.call(null,this.priority__GT_set_of_items,cljs.core._GT__EQ_,b):cljs.core.rsubseq.call(null,this.priority__GT_set_of_items,cljs.core._LT__EQ_,b);return cljs.core.seq.call(null,function(){return function(a,b){return function k(c){return new cljs.core.LazySeq(null,function(a,b){return function(){for(var d=c;;){var e=cljs.core.seq.call(null,
d);if(e){var f=e,g=cljs.core.first.call(null,f),t=cljs.core.nth.call(null,g,0,null),v=cljs.core.nth.call(null,g,1,null),e=function(a,b,c,d,e,f,g,k){return function C(l){return new cljs.core.LazySeq(null,function(a,b,c,d,e,f,g,k){return function(){for(;;){var a=cljs.core.seq.call(null,l);if(a){if(cljs.core.chunked_seq_QMARK_.call(null,a)){var b=cljs.core.chunk_first.call(null,a),d=cljs.core.count.call(null,b),e=cljs.core.chunk_buffer.call(null,d);a:{for(var f=0;;)if(f<d){var g=cljs.core._nth.call(null,
b,f);cljs.core.chunk_append.call(null,e,new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[g,c],null));f+=1}else{b=!0;break a}b=void 0}return b?cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,e),C.call(null,cljs.core.chunk_rest.call(null,a))):cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,e),null)}e=cljs.core.first.call(null,a);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[e,c],null),C.call(null,
cljs.core.rest.call(null,a)))}return null}}}(a,b,c,d,e,f,g,k),null,null)}}(d,g,t,v,f,e,a,b);if(v=cljs.core.seq.call(null,e.call(null,v)))return cljs.core.concat.call(null,v,k.call(null,cljs.core.rest.call(null,d)));d=cljs.core.rest.call(null,d)}else return null}}}(a,b),null,null)}}(e,d).call(null,e)}())};tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_entry_key$arity$2=function(a,b){return cljs.core.val.call(null,b)};
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_comparator$arity$1=function(a){return cljs.core.compare};
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISeqable$_seq$arity$1=function(a){var b=this,c=this;return cljs.core.seq.call(null,function(){return function(a){return function f(b){return new cljs.core.LazySeq(null,function(a){return function(){for(var c=b;;){var d=cljs.core.seq.call(null,c);if(d){var m=d,n=cljs.core.first.call(null,m),p=cljs.core.nth.call(null,n,0,null),q=cljs.core.nth.call(null,n,1,null),d=function(a,b,c,d,f,g,h){return function D(k){return new cljs.core.LazySeq(null,
function(a,b,c,d,f,g,h){return function(){for(;;){var a=cljs.core.seq.call(null,k);if(a){if(cljs.core.chunked_seq_QMARK_.call(null,a)){var b=cljs.core.chunk_first.call(null,a),d=cljs.core.count.call(null,b),f=cljs.core.chunk_buffer.call(null,d);a:{for(var g=0;;)if(g<d){var h=cljs.core._nth.call(null,b,g);cljs.core.chunk_append.call(null,f,new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[h,c],null));g+=1}else{b=!0;break a}b=void 0}return b?cljs.core.chunk_cons.call(null,
cljs.core.chunk.call(null,f),D.call(null,cljs.core.chunk_rest.call(null,a))):cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,f),null)}f=cljs.core.first.call(null,a);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[f,c],null),D.call(null,cljs.core.rest.call(null,a)))}return null}}}(a,b,c,d,f,g,h),null,null)}}(c,n,p,q,m,d,a);if(q=cljs.core.seq.call(null,d.call(null,q)))return cljs.core.concat.call(null,q,f.call(null,cljs.core.rest.call(null,
c)));c=cljs.core.rest.call(null,c)}else return null}}}(a),null,null)}}(c).call(null,b.priority__GT_set_of_items)}())};tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ICounted$_count$arity$1=function(a){return cljs.core.count.call(null,this.item__GT_priority)};
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IStack$_peek$arity$1=function(a){if(0===cljs.core.count.call(null,this.item__GT_priority))return null;a=cljs.core.first.call(null,this.priority__GT_set_of_items);return new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.first.call(null,cljs.core.val.call(null,a)),cljs.core.key.call(null,a)],null)};
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IStack$_pop$arity$1=function(a){if(0===cljs.core.count.call(null,this.item__GT_priority))throw Error("Can't pop empty priority map");var b=cljs.core.first.call(null,this.priority__GT_set_of_items);a=cljs.core.val.call(null,b);var c=cljs.core.first.call(null,a),b=cljs.core.key.call(null,b);return cljs.core._EQ_.call(null,cljs.core.count.call(null,a),1)?new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.dissoc.call(null,
this.priority__GT_set_of_items,b),cljs.core.dissoc.call(null,this.item__GT_priority,c),this.meta,null):new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,this.priority__GT_set_of_items,b,cljs.core.disj.call(null,a,c)),cljs.core.dissoc.call(null,this.item__GT_priority,c),this.meta,null)};tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IEquiv$_equiv$arity$2=function(a,b){return cljs.core._equiv.call(null,this.item__GT_priority,b)};
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2=function(a,b){return new tailrecursion.priority_map.PersistentPriorityMap(this.priority__GT_set_of_items,this.item__GT_priority,b,this.__hash)};tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IMeta$_meta$arity$1=function(a){return this.meta};
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1=function(a){return cljs.core.with_meta.call(null,tailrecursion.priority_map.PersistentPriorityMap.EMPTY,this.meta)};
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IMap$_dissoc$arity$2=function(a,b){var c=this.item__GT_priority.call(null,b,new cljs.core.Keyword("tailrecursion.priority-map","not-found","tailrecursion.priority-map/not-found",3913856644));if(cljs.core._EQ_.call(null,c,new cljs.core.Keyword("tailrecursion.priority-map","not-found","tailrecursion.priority-map/not-found",3913856644)))return this;var d=this.priority__GT_set_of_items.call(null,c);return cljs.core._EQ_.call(null,cljs.core.count.call(null,
d),1)?new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.dissoc.call(null,this.priority__GT_set_of_items,c),cljs.core.dissoc.call(null,this.item__GT_priority,b),this.meta,null):new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,this.priority__GT_set_of_items,c,cljs.core.disj.call(null,d,b)),cljs.core.dissoc.call(null,this.item__GT_priority,b),this.meta,null)};
tailrecursion.priority_map.__GT_PersistentPriorityMap=function(a,b,c,d){return new tailrecursion.priority_map.PersistentPriorityMap(a,b,c,d)};tailrecursion.priority_map.PersistentPriorityMap.EMPTY=new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map.call(null),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null);
tailrecursion.priority_map.pm_empty_by=function(a){return new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map_by.call(null,a),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null)};tailrecursion.priority_map.read_priority_map=function(a){return cljs.core.map_QMARK_.call(null,a)?cljs.core.into.call(null,tailrecursion.priority_map.PersistentPriorityMap.EMPTY,a):cljs.reader.reader_error.call(null,null,"Priority map literal expects a map for its elements.")};
cljs.reader.register_tag_parser_BANG_.call(null,"tailrecursion.priority-map",tailrecursion.priority_map.read_priority_map);
tailrecursion.priority_map.priority_map=function(){var a=function(a){a=cljs.core.seq.call(null,a);for(var b=tailrecursion.priority_map.PersistentPriorityMap.EMPTY;;)if(a){var e=cljs.core.nnext.call(null,a),b=cljs.core.assoc.call(null,b,cljs.core.first.call(null,a),cljs.core.second.call(null,a));a=e}else return b},b=function(b){var d=null;0<arguments.length&&(d=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0));return a.call(this,d)};b.cljs$lang$maxFixedArity=0;b.cljs$lang$applyTo=function(b){b=
cljs.core.seq(b);return a(b)};b.cljs$core$IFn$_invoke$arity$variadic=a;return b}();
tailrecursion.priority_map.priority_map_by=function(){var a=function(a,b){for(var e=cljs.core.seq.call(null,b),f=tailrecursion.priority_map.pm_empty_by.call(null,a);;)if(e)var g=cljs.core.nnext.call(null,e),f=cljs.core.assoc.call(null,f,cljs.core.first.call(null,e),cljs.core.second.call(null,e)),e=g;else return f},b=function(b,d){var e=null;1<arguments.length&&(e=cljs.core.array_seq(Array.prototype.slice.call(arguments,1),0));return a.call(this,b,e)};b.cljs$lang$maxFixedArity=1;b.cljs$lang$applyTo=
function(b){var d=cljs.core.first(b);b=cljs.core.rest(b);return a(d,b)};b.cljs$core$IFn$_invoke$arity$variadic=a;return b}();tailrecursion.javelin={};tailrecursion.javelin.bf_seq=function(a,b,c){return function e(c){var g=cljs.core.peek.call(null,c);return cljs.core.truth_(g)?new cljs.core.LazySeq(null,function(g,k){return function(){return cljs.core.cons.call(null,g,e.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,c),cljs.core.truth_(a.call(null,g))?b.call(null,g):null)))}}(g,g),null,null):null}.call(null,cljs.core.conj.call(null,cljs.core.PersistentQueue.EMPTY,c))};
tailrecursion.javelin.safe_nth=function(a,b){try{return cljs.core.nth.call(null,a,b)}catch(c){if(c instanceof Error)return null;if(new cljs.core.Keyword(null,"else","else",1017020587))throw c;return null}};tailrecursion.javelin.last_rank=cljs.core.atom.call(null,0);tailrecursion.javelin.next_rank=function(){return cljs.core.swap_BANG_.call(null,tailrecursion.javelin.last_rank,cljs.core.inc)};
tailrecursion.javelin.deref_STAR_=function(a){return cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,a))?cljs.core.deref.call(null,a):a};
tailrecursion.javelin.propagate_BANG_=function(a){for(var b=tailrecursion.priority_map.priority_map.call(null,a,a.rank);;)if(cljs.core.seq.call(null,b)){a=cljs.core.key.call(null,cljs.core.peek.call(null,b));var c=a.thunk.call(null),d=cljs.core.not_EQ_.call(null,c,a.prev),e=function(a,b,c,d){return function(a,b){return cljs.core.assoc.call(null,a,b,b.rank)}}(b,a,c,d),b=cljs.core.pop.call(null,b),f=a.sinks;d&&(a.prev=c);b=d?cljs.core.reduce.call(null,e,b,f):b}else return null};
tailrecursion.javelin.destroy_cell_BANG_=function(a){var b=a.sources;a.sources=cljs.core.PersistentVector.EMPTY;a.watches=cljs.core.PersistentArrayMap.EMPTY;for(var b=cljs.core.seq.call(null,cljs.core.filter.call(null,tailrecursion.javelin.cell_QMARK_,b)),c=null,d=0,e=0;;)if(e<d){var f=cljs.core._nth.call(null,c,e);f.sinks=cljs.core.disj.call(null,f.sinks,a);e+=1}else if(b=cljs.core.seq.call(null,b))c=b,cljs.core.chunked_seq_QMARK_.call(null,c)?(b=cljs.core.chunk_first.call(null,c),d=cljs.core.chunk_rest.call(null,
c),c=b,f=cljs.core.count.call(null,b),b=d,d=f):(f=cljs.core.first.call(null,c),f.sinks=cljs.core.disj.call(null,f.sinks,a),b=cljs.core.next.call(null,c),c=null,d=0),e=0;else return null};
tailrecursion.javelin.set_formula_BANG_=function(){var a=function(a,b){var e=cljs.core.nth.call(null,b,0,null),f=cljs.core.nth.call(null,b,1,null);tailrecursion.javelin.destroy_cell_BANG_.call(null,a);a.sources=cljs.core.truth_(e)?cljs.core.conj.call(null,cljs.core.vec.call(null,f),e):cljs.core.vec.call(null,f);for(var g=cljs.core.seq.call(null,cljs.core.filter.call(null,tailrecursion.javelin.cell_QMARK_,a.sources)),h=null,k=0,l=0;;)if(l<k){var m=cljs.core._nth.call(null,h,l);m.sinks=cljs.core.conj.call(null,
m.sinks,a);if(m.rank>a.rank)for(var m=cljs.core.seq.call(null,tailrecursion.javelin.bf_seq.call(null,cljs.core.identity,function(a,b,c,d,e,f,g,h){return function(a){return a.sinks}}(g,h,k,l,m,b,e,f),m)),n=null,p=0,q=0;;)if(q<p)cljs.core._nth.call(null,n,q).rank=tailrecursion.javelin.next_rank.call(null),q+=1;else if(m=cljs.core.seq.call(null,m))n=m,cljs.core.chunked_seq_QMARK_.call(null,n)?(m=cljs.core.chunk_first.call(null,n),q=cljs.core.chunk_rest.call(null,n),n=m,p=cljs.core.count.call(null,m),
m=q):(cljs.core.first.call(null,n).rank=tailrecursion.javelin.next_rank.call(null),m=cljs.core.next.call(null,n),n=null,p=0),q=0;else break;l+=1}else if(n=cljs.core.seq.call(null,g)){m=n;if(cljs.core.chunked_seq_QMARK_.call(null,m))g=cljs.core.chunk_first.call(null,m),l=cljs.core.chunk_rest.call(null,m),h=g,k=cljs.core.count.call(null,g),g=l;else{p=cljs.core.first.call(null,m);p.sinks=cljs.core.conj.call(null,p.sinks,a);if(p.rank>a.rank)for(g=cljs.core.seq.call(null,tailrecursion.javelin.bf_seq.call(null,
cljs.core.identity,function(a,b,c,d,e,f,g,h,k,l){return function(a){return a.sinks}}(g,h,k,l,p,m,n,b,e,f),p)),h=null,l=k=0;;)if(l<k)cljs.core._nth.call(null,h,l).rank=tailrecursion.javelin.next_rank.call(null),l+=1;else if(g=cljs.core.seq.call(null,g))h=g,cljs.core.chunked_seq_QMARK_.call(null,h)?(g=cljs.core.chunk_first.call(null,h),l=cljs.core.chunk_rest.call(null,h),h=g,k=cljs.core.count.call(null,g),g=l):(cljs.core.first.call(null,h).rank=tailrecursion.javelin.next_rank.call(null),g=cljs.core.next.call(null,
h),h=null,k=0),l=0;else break;g=cljs.core.next.call(null,m);h=null;k=0}l=0}else break;g=function(a,b,c){return function(a){return cljs.core.apply.call(null,tailrecursion.javelin.deref_STAR_.call(null,cljs.core.peek.call(null,a)),cljs.core.map.call(null,tailrecursion.javelin.deref_STAR_,cljs.core.pop.call(null,a)))}}(b,e,f);h=function(b,d,e,f){return function(){for(var d=a.state,e=b.call(null,a.sources),f=cljs.core.seq.call(null,cljs.core.dissoc.call(null,a.watches,new cljs.core.Keyword("tailrecursion.javelin",
"cell","tailrecursion.javelin/cell",3109523258))),g=null,h=0,k=0;;)if(k<h){var l=cljs.core._nth.call(null,g,k),m=cljs.core.nth.call(null,l,0,null);cljs.core.nth.call(null,l,1,null).call(null,m,a,d,e);k+=1}else if(f=cljs.core.seq.call(null,f))cljs.core.chunked_seq_QMARK_.call(null,f)?(h=cljs.core.chunk_first.call(null,f),f=cljs.core.chunk_rest.call(null,f),g=h,h=cljs.core.count.call(null,h)):(g=cljs.core.first.call(null,f),h=cljs.core.nth.call(null,g,0,null),cljs.core.nth.call(null,g,1,null).call(null,
h,a,d,e),f=cljs.core.next.call(null,f),g=null,h=0),k=0;else break;return a.state=e}}(g,b,e,f);cljs.core._add_watch.call(null,a,new cljs.core.Keyword("tailrecursion.javelin","cell","tailrecursion.javelin/cell",3109523258),cljs.core.truth_(e)?function(a,b,c,d,e,f){return function(){throw Error(c);}}(g,h,"formula cell can't be updated via swap! or reset!",b,e,f):function(a,b,c,d,e,f){return function(a,b){return tailrecursion.javelin.propagate_BANG_.call(null,b)}}(g,h,"formula cell can't be updated via swap! or reset!",
b,e,f));a.input_QMARK_=cljs.core.truth_(e)?!1:!0;a.thunk=cljs.core.truth_(e)?h:function(b,d,e,f,g,h){return function(){return cljs.core.deref.call(null,a)}}(g,h,"formula cell can't be updated via swap! or reset!",b,e,f);tailrecursion.javelin.propagate_BANG_.call(null,a);return a},b=function(b,d){var e=null;1<arguments.length&&(e=cljs.core.array_seq(Array.prototype.slice.call(arguments,1),0));return a.call(this,b,e)};b.cljs$lang$maxFixedArity=1;b.cljs$lang$applyTo=function(b){var d=cljs.core.first(b);
b=cljs.core.rest(b);return a(d,b)};b.cljs$core$IFn$_invoke$arity$variadic=a;return b}();tailrecursion.javelin.Cell=function(a,b,c,d,e,f,g,h,k){this.meta=a;this.state=b;this.rank=c;this.prev=d;this.sources=e;this.sinks=f;this.thunk=g;this.watches=h;this.input_QMARK_=k;this.cljs$lang$protocol_mask$partition1$=98306;this.cljs$lang$protocol_mask$partition0$=2147647488};tailrecursion.javelin.Cell.cljs$lang$type=!0;tailrecursion.javelin.Cell.cljs$lang$ctorStr="tailrecursion.javelin/Cell";
tailrecursion.javelin.Cell.cljs$lang$ctorPrWriter=function(a,b,c){return cljs.core._write.call(null,b,"tailrecursion.javelin/Cell")};
tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3=function(a,b,c){a=cljs.core.seq.call(null,this.watches);for(var d=null,e=0,f=0;;)if(f<e){var g=cljs.core._nth.call(null,d,f),h=cljs.core.nth.call(null,g,0,null),g=cljs.core.nth.call(null,g,1,null);g.call(null,h,this,b,c);f+=1}else if(a=cljs.core.seq.call(null,a))cljs.core.chunked_seq_QMARK_.call(null,a)?(d=cljs.core.chunk_first.call(null,a),a=cljs.core.chunk_rest.call(null,a),h=d,e=cljs.core.count.call(null,d),d=h):
(d=cljs.core.first.call(null,a),h=cljs.core.nth.call(null,d,0,null),g=cljs.core.nth.call(null,d,1,null),g.call(null,h,this,b,c),a=cljs.core.next.call(null,a),d=null,e=0),f=0;else return null};tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_add_watch$arity$3=function(a,b,c){return this.watches=cljs.core.assoc.call(null,this.watches,b,c)};
tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_remove_watch$arity$2=function(a,b){return this.watches=cljs.core.dissoc.call(null,this.watches,b)};tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$2=function(a,b){return cljs.core.reset_BANG_.call(null,this,b.call(null,this.state))};tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3=function(a,b,c){return cljs.core.reset_BANG_.call(null,this,b.call(null,this.state,c))};
tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4=function(a,b,c,d){return cljs.core.reset_BANG_.call(null,this,b.call(null,this.state,c,d))};tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5=function(a,b,c,d,e){return cljs.core.reset_BANG_.call(null,this,cljs.core.apply.call(null,b,this.state,c,d,e))};
tailrecursion.javelin.Cell.prototype.cljs$core$IReset$_reset_BANG_$arity$2=function(a,b){var c=this.state;this.state=b;null!=this.watches&&cljs.core._notify_watches.call(null,this,c,b);return b};tailrecursion.javelin.Cell.prototype.cljs$core$IDeref$_deref$arity$1=function(a){return this.state};tailrecursion.javelin.Cell.prototype.cljs$core$IMeta$_meta$arity$1=function(a){return this.meta};
tailrecursion.javelin.Cell.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3=function(a,b,c){return cljs.core.write_all.call(null,b,"#\x3cCell: ",cljs.core.pr_str.call(null,this.state),"\x3e")};tailrecursion.javelin.__GT_Cell=function(a,b,c,d,e,f,g,h,k){return new tailrecursion.javelin.Cell(a,b,c,d,e,f,g,h,k)};
tailrecursion.javelin.lift=function(a){return function(){var b=function(b){return tailrecursion.javelin.set_formula_BANG_.call(null,tailrecursion.javelin.cell.call(null,new cljs.core.Keyword("tailrecursion.javelin","none","tailrecursion.javelin/none",3109973412)),a,b)},c=function(a){var c=null;0<arguments.length&&(c=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0));return b.call(this,c)};c.cljs$lang$maxFixedArity=0;c.cljs$lang$applyTo=function(a){a=cljs.core.seq(a);return b(a)};c.cljs$core$IFn$_invoke$arity$variadic=
b;return c}()};tailrecursion.javelin.cell=function(a){return tailrecursion.javelin.set_formula_BANG_.call(null,new tailrecursion.javelin.Cell(cljs.core.PersistentArrayMap.EMPTY,a,tailrecursion.javelin.next_rank.call(null),a,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null))};tailrecursion.javelin.cell_QMARK_=function(a){return cljs.core._EQ_.call(null,cljs.core.type.call(null,a),tailrecursion.javelin.Cell)?a:null};
tailrecursion.javelin.input_QMARK_=function(a){return cljs.core.truth_(function(){var b=tailrecursion.javelin.cell_QMARK_.call(null,a);return cljs.core.truth_(b)?a.input_QMARK_:b}())?a:null};tailrecursion.javelin.set_cell_BANG_=function(a,b){a.state=b;return tailrecursion.javelin.set_formula_BANG_.call(null,a)};
tailrecursion.javelin.alts_BANG_=function(){var a=function(a){var b=cljs.core.atom.call(null,cljs.core.repeat.call(null,cljs.core.count.call(null,a),new cljs.core.Keyword("tailrecursion.javelin","none","tailrecursion.javelin/none",3109973412))),e=function(a){return function(a,b){return new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.call(null,a,b),b],null)}}(b),f=function(a,b){return function(a,c){return cljs.core.distinct.call(null,cljs.core.map.call(null,
cljs.core.second,cljs.core.filter.call(null,cljs.core.first,cljs.core.map.call(null,b,a,c))))}}(b,e),b=function(a,b,c){return function(){var b=function(b){var d=c.call(null,cljs.core.deref.call(null,a),b);cljs.core.reset_BANG_.call(null,a,b);return d},d=function(a){var c=null;0<arguments.length&&(c=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0));return b.call(this,c)};d.cljs$lang$maxFixedArity=0;d.cljs$lang$applyTo=function(a){a=cljs.core.seq(a);return b(a)};d.cljs$core$IFn$_invoke$arity$variadic=
b;return d}()}(b,e,f);return cljs.core.apply.call(null,tailrecursion.javelin.lift.call(null,b),a)},b=function(b){var d=null;0<arguments.length&&(d=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0));return a.call(this,d)};b.cljs$lang$maxFixedArity=0;b.cljs$lang$applyTo=function(b){b=cljs.core.seq(b);return a(b)};b.cljs$core$IFn$_invoke$arity$variadic=a;return b}();
tailrecursion.javelin.cell_map=function(a,b){var c=tailrecursion.javelin.lift.call(null,cljs.core.seq).call(null,b);return cljs.core.map.call(null,function(b){return function(c){return tailrecursion.javelin.lift.call(null,cljs.core.comp.call(null,a,tailrecursion.javelin.safe_nth)).call(null,b,c)}}(c),cljs.core.range.call(null,0,cljs.core.count.call(null,cljs.core.deref.call(null,c))))};
tailrecursion.javelin.cell_doseq_STAR_=function(a,b){var c=tailrecursion.javelin.cell.call(null,0),d=tailrecursion.javelin.lift.call(null,cljs.core.seq).call(null,a),e=tailrecursion.javelin.lift.call(null,cljs.core.count).call(null,d),f=function(a,b,c){return function(a){return tailrecursion.javelin.lift.call(null,tailrecursion.javelin.safe_nth).call(null,b,a)}}(c,d,e);return tailrecursion.javelin.lift.call(null,function(a,b,c,d){return function(a,b,c,d,e){if(a<b){a=cljs.core.seq.call(null,cljs.core.range.call(null,
a,b));for(var f=null,g=0,h=0;;)if(h<g){var k=cljs.core._nth.call(null,f,h);c.call(null,d.call(null,k));h+=1}else if(a=cljs.core.seq.call(null,a))f=a,cljs.core.chunked_seq_QMARK_.call(null,f)?(a=cljs.core.chunk_first.call(null,f),h=cljs.core.chunk_rest.call(null,f),f=a,g=cljs.core.count.call(null,a),a=h):(a=cljs.core.first.call(null,f),c.call(null,d.call(null,a)),a=cljs.core.next.call(null,f),f=null,g=0),h=0;else break;return e.call(null,b)}return null}}(c,d,e,f)).call(null,c,e,b,f,cljs.core.partial.call(null,
cljs.core.reset_BANG_,c))};tailrecursion.hoplon={};tailrecursion.hoplon.is_ie8=cljs.core.not.call(null,window.Node);tailrecursion.hoplon.node_QMARK_=cljs.core.not.call(null,tailrecursion.hoplon.is_ie8)?function(a){return a instanceof Node}:function(a){try{return a.nodeType}catch(b){if(b instanceof Error)return null;if(new cljs.core.Keyword(null,"else","else",1017020587))throw b;return null}};
tailrecursion.hoplon.vector_QMARK__STAR_=cljs.core.not.call(null,tailrecursion.hoplon.is_ie8)?cljs.core.vector_QMARK_:function(a){try{return cljs.core.vector_QMARK_.call(null,a)}catch(b){if(b instanceof Error)return null;if(new cljs.core.Keyword(null,"else","else",1017020587))throw b;return null}};
tailrecursion.hoplon.seq_QMARK__STAR_=cljs.core.not.call(null,tailrecursion.hoplon.is_ie8)?cljs.core.seq_QMARK_:function(a){try{return cljs.core.seq_QMARK_.call(null,a)}catch(b){if(b instanceof Error)return null;if(new cljs.core.Keyword(null,"else","else",1017020587))throw b;return null}};cljs.core.set_print_fn_BANG_.call(null,function(a){return cljs.core.truth_(function(){var a=console;return cljs.core.truth_(a)?console.log:a}())?console.log(a):null});
tailrecursion.hoplon.safe_nth=function(){var a=null,b=function(b,c){return a.call(null,b,c,null)},c=function(a,b,c){try{return cljs.core.nth.call(null,a,b,c)}catch(g){if(g instanceof Error)return c;if(new cljs.core.Keyword(null,"else","else",1017020587))throw g;return null}},a=function(a,e,f){switch(arguments.length){case 2:return b.call(this,a,e);case 3:return c.call(this,a,e,f)}throw Error("Invalid arity: "+arguments.length);};a.cljs$core$IFn$_invoke$arity$2=b;a.cljs$core$IFn$_invoke$arity$3=c;
return a}();tailrecursion.hoplon.timeout=function(){var a=null,b=function(b){return a.call(null,b,0)},c=function(a,b){return window.setTimeout(a,b)},a=function(a,e){switch(arguments.length){case 1:return b.call(this,a);case 2:return c.call(this,a,e)}throw Error("Invalid arity: "+arguments.length);};a.cljs$core$IFn$_invoke$arity$1=b;a.cljs$core$IFn$_invoke$arity$2=c;return a}();
tailrecursion.hoplon.unsplice=function unsplice(b){return cljs.core.mapcat.call(null,function(b){return cljs.core.truth_(function(){var d=tailrecursion.hoplon.seq_QMARK__STAR_.call(null,b);return cljs.core.truth_(d)?d:tailrecursion.hoplon.vector_QMARK__STAR_.call(null,b)}())?unsplice.call(null,b):new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[b],null)},b)};
tailrecursion.hoplon.when_dom=function(a,b){return a instanceof Element?tailrecursion.hoplon.timeout.call(null,function d(){return cljs.core.truth_(document.documentElement.contains(a))?b.call(null):tailrecursion.hoplon.timeout.call(null,d,20)}):b.call(null)};
tailrecursion.hoplon.parse_args=function(a){var b=cljs.core.nth.call(null,a,0,null),c=cljs.core.nthnext.call(null,a,1),d=cljs.core.comp.call(null,cljs.core.keyword_QMARK_,cljs.core.first),e=function(a,b,c,d,e){return function(b){return cljs.core.map.call(null,cljs.core.vec,cljs.core.take_while.call(null,a,cljs.core.partition.call(null,2,b)))}}(d,a,b,c,a),d=function(a,b,c,d,e,m){return function(b){return cljs.core.mapcat.call(null,cljs.core.identity,cljs.core.drop_while.call(null,a,cljs.core.partition.call(null,
2,2,cljs.core.PersistentVector.EMPTY,b)))}}(d,e,a,b,c,a);return cljs.core.map_QMARK_.call(null,b)?new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[b,tailrecursion.hoplon.unsplice.call(null,c)],null):b instanceof cljs.core.Keyword?new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,e.call(null,a)),tailrecursion.hoplon.unsplice.call(null,d.call(null,a))],null):new cljs.core.Keyword(null,
"else","else",1017020587)?new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.PersistentArrayMap.EMPTY,tailrecursion.hoplon.unsplice.call(null,a)],null):null};
tailrecursion.hoplon.add_attributes_BANG_=function(a,b){for(var c=function(a,b){var c;c=cljs.core.name.call(null,b);var d=cljs.core.last.call(null,c);c=cljs.core._EQ_.call(null,"\x3d",d)?c.slice(0,-1):c;d=c.substr(0,3);return cljs.core.keyword.call(null,cljs.core.namespace.call(null,b),cljs.core._EQ_.call(null,a,d)?c.substr(3):c)},d=cljs.core.partial.call(null,c,"do-"),e=cljs.core.partial.call(null,c,"on-"),f=cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),g=cljs.core.atom.call(null,
cljs.core.PersistentArrayMap.EMPTY),h=function(a,b,c,d,e){return function(a,b){return clojure.string.join.call(null," ",cljs.core.into.call(null,cljs.core.set.call(null,clojure.string.split.call(null,a,/ /)),clojure.string.split.call(null,b,/ /)))}}(c,d,e,f,g),k=cljs.core.seq.call(null,b),l=null,m=0,n=0;;)if(n<m){var p=cljs.core._nth.call(null,l,n),q=cljs.core.nth.call(null,p,0,null),p=cljs.core.nth.call(null,p,1,null);cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,p))?cljs.core.swap_BANG_.call(null,
f,cljs.core.assoc,d.call(null,q),p):cljs.core.fn_QMARK_.call(null,p)?cljs.core.swap_BANG_.call(null,g,cljs.core.assoc,e.call(null,q),p):new cljs.core.Keyword(null,"else","else",1017020587)&&tailrecursion.hoplon.do_BANG_.call(null,a,d.call(null,q),p);n+=1}else if(k=cljs.core.seq.call(null,k))cljs.core.chunked_seq_QMARK_.call(null,k)?(m=cljs.core.chunk_first.call(null,k),k=cljs.core.chunk_rest.call(null,k),l=m,m=cljs.core.count.call(null,m)):(m=cljs.core.first.call(null,k),l=cljs.core.nth.call(null,
m,0,null),m=cljs.core.nth.call(null,m,1,null),cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,m))?cljs.core.swap_BANG_.call(null,f,cljs.core.assoc,d.call(null,l),m):cljs.core.fn_QMARK_.call(null,m)?cljs.core.swap_BANG_.call(null,g,cljs.core.assoc,e.call(null,l),m):new cljs.core.Keyword(null,"else","else",1017020587)&&tailrecursion.hoplon.do_BANG_.call(null,a,d.call(null,l),m),k=cljs.core.next.call(null,k),l=null,m=0),n=0;else break;cljs.core.seq.call(null,cljs.core.deref.call(null,f))&&
setTimeout(function(b,c,d,e,f,g){return function(){for(var h=cljs.core.seq.call(null,cljs.core.deref.call(null,e)),k=null,l=0,m=0;;)if(m<l){var n=cljs.core._nth.call(null,k,m),p=cljs.core.nth.call(null,n,0,null),q=cljs.core.nth.call(null,n,1,null);tailrecursion.hoplon.do_BANG_.call(null,a,p,cljs.core.deref.call(null,q));cljs.core.add_watch.call(null,q,cljs.core.gensym.call(null),function(b,c,d,e,f,g,h,k,l,m,n,p,q){return function(b,c,d,e){return tailrecursion.hoplon.do_BANG_.call(null,a,g,e)}}(h,
k,l,m,n,p,q,b,c,d,e,f,g));m+=1}else{var C=cljs.core.seq.call(null,h);if(C){n=C;if(cljs.core.chunked_seq_QMARK_.call(null,n))h=cljs.core.chunk_first.call(null,n),m=cljs.core.chunk_rest.call(null,n),k=h,l=cljs.core.count.call(null,h),h=m;else{var E=cljs.core.first.call(null,n),p=cljs.core.nth.call(null,E,0,null),q=cljs.core.nth.call(null,E,1,null);tailrecursion.hoplon.do_BANG_.call(null,a,p,cljs.core.deref.call(null,q));cljs.core.add_watch.call(null,q,cljs.core.gensym.call(null),function(b,c,d,e,f,
g,h,k,l,m,n,p,q,r,s){return function(b,c,d,e){return tailrecursion.hoplon.do_BANG_.call(null,a,g,e)}}(h,k,l,m,E,p,q,n,C,b,c,d,e,f,g));h=cljs.core.next.call(null,n);k=null;l=0}m=0}else return null}}}(c,d,e,f,g,h),0);cljs.core.seq.call(null,cljs.core.deref.call(null,g))&&setTimeout(function(b,c,d,e,f,g){return function(){for(var b=cljs.core.seq.call(null,cljs.core.deref.call(null,f)),c=null,d=0,e=0;;)if(e<d){var g=cljs.core._nth.call(null,c,e),h=cljs.core.nth.call(null,g,0,null),g=cljs.core.nth.call(null,
g,1,null);tailrecursion.hoplon.on_BANG_.call(null,a,h,g);e+=1}else if(b=cljs.core.seq.call(null,b))cljs.core.chunked_seq_QMARK_.call(null,b)?(c=cljs.core.chunk_first.call(null,b),b=cljs.core.chunk_rest.call(null,b),h=c,d=cljs.core.count.call(null,c),c=h):(c=cljs.core.first.call(null,b),h=cljs.core.nth.call(null,c,0,null),g=cljs.core.nth.call(null,c,1,null),tailrecursion.hoplon.on_BANG_.call(null,a,h,g),b=cljs.core.next.call(null,b),c=null,d=0),e=0;else return null}}(c,d,e,f,g,h),0);return a};
tailrecursion.hoplon.append_child=cljs.core.not.call(null,tailrecursion.hoplon.is_ie8)?function(a,b){return a.appendChild(b)}:function(a,b){try{return a.appendChild(b)}catch(c){if(c instanceof Error)return null;if(new cljs.core.Keyword(null,"else","else",1017020587))throw c;return null}};
tailrecursion.hoplon.replace_children_BANG_=function(a,b){jQuery(a).empty();return tailrecursion.hoplon.add_children_BANG_.call(null,a,cljs.core.sequential_QMARK_.call(null,b)?b:new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[b],null))};
tailrecursion.hoplon.add_children_BANG_=function(a,b){var c=cljs.core.nth.call(null,b,0,null),d=cljs.core.nthnext.call(null,b,1);if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,c)))tailrecursion.hoplon.replace_children_BANG_.call(null,a,cljs.core.deref.call(null,c)),cljs.core.add_watch.call(null,c,cljs.core.gensym.call(null),function(b,c,d,e){return function(b,c,d,e){return tailrecursion.hoplon.replace_children_BANG_.call(null,a,e)}}(b,c,d,b));else for(var c=function(a,b,c,d){return function(a){return"string"===
typeof a?tailrecursion.hoplon.$text.call(null,a):cljs.core.truth_(tailrecursion.hoplon.node_QMARK_.call(null,a))?a:null}}(b,c,d,b),c=cljs.core.seq.call(null,cljs.core.keep.call(null,c,tailrecursion.hoplon.unsplice.call(null,b))),d=null,e=0,f=0;;)if(f<e){var g=cljs.core._nth.call(null,d,f);tailrecursion.hoplon.append_child.call(null,a,g);f+=1}else if(c=cljs.core.seq.call(null,c))d=c,cljs.core.chunked_seq_QMARK_.call(null,d)?(c=cljs.core.chunk_first.call(null,d),f=cljs.core.chunk_rest.call(null,d),
d=c,e=cljs.core.count.call(null,c),c=f):(c=cljs.core.first.call(null,d),tailrecursion.hoplon.append_child.call(null,a,c),c=cljs.core.next.call(null,d),d=null,e=0),f=0;else break;return a};tailrecursion.hoplon.on_append_BANG_=function(a,b){return a.hoplonIFn=b};Element.prototype.cljs$core$IFn$=!0;
Element.prototype.call=function(){var a=function(a,b){var e=tailrecursion.hoplon.parse_args.call(null,b),f=cljs.core.nth.call(null,e,0,null),e=cljs.core.nth.call(null,e,1,null);cljs.core.truth_(this.hoplonIFn)?this.hoplonIFn(f,e):(tailrecursion.hoplon.add_attributes_BANG_.call(null,this,f),tailrecursion.hoplon.add_children_BANG_.call(null,this,e));return this},b=function(b,d){var e=null;1<arguments.length&&(e=cljs.core.array_seq(Array.prototype.slice.call(arguments,1),0));return a.call(this,b,e)};
b.cljs$lang$maxFixedArity=1;b.cljs$lang$applyTo=function(b){var d=cljs.core.first(b);b=cljs.core.rest(b);return a(d,b)};b.cljs$core$IFn$_invoke$arity$variadic=a;return b}();Element.prototype.apply=function(a,b){return this.call.apply(this,[this].concat(cljs.core.aclone.call(null,b)))};
Element.prototype.cljs$core$IFn$_invoke$arity$2=function(){var a=function(a){var b=tailrecursion.hoplon.parse_args.call(null,a);a=cljs.core.nth.call(null,b,0,null);b=cljs.core.nth.call(null,b,1,null);cljs.core.truth_(this.hoplonIFn)?this.hoplonIFn(a,b):(tailrecursion.hoplon.add_attributes_BANG_.call(null,this,a),tailrecursion.hoplon.add_children_BANG_.call(null,this,b));return this},b=function(b){var d=null;0<arguments.length&&(d=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0));return a.call(this,
d)};b.cljs$lang$maxFixedArity=0;b.cljs$lang$applyTo=function(b){b=cljs.core.seq(b);return a(b)};b.cljs$core$IFn$_invoke$arity$variadic=a;return b}();Element.prototype.cljs$core$IPrintWithWriter$=!0;Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3=function(a,b,c){return cljs.core.write_all.call(null,b,"#\x3cElement: ",this.tagName,"\x3e")};
tailrecursion.hoplon.make_singleton_ctor=function(a){return function(){var b=function(b){var c=document.getElementsByTagName(a)[0],f=document.createElement(a);cljs.core.truth_(c)&&c.parentNode.replaceChild(f,c);return cljs.core.apply.call(null,f,b)},c=function(a){var c=null;0<arguments.length&&(c=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0));return b.call(this,c)};c.cljs$lang$maxFixedArity=0;c.cljs$lang$applyTo=function(a){a=cljs.core.seq(a);return b(a)};c.cljs$core$IFn$_invoke$arity$variadic=
b;return c}()};tailrecursion.hoplon.make_elem_ctor=function(a){return function(){var b=function(b){return cljs.core.apply.call(null,document.createElement(a),b)},c=function(a){var c=null;0<arguments.length&&(c=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0));return b.call(this,c)};c.cljs$lang$maxFixedArity=0;c.cljs$lang$applyTo=function(a){a=cljs.core.seq(a);return b(a)};c.cljs$core$IFn$_invoke$arity$variadic=b;return c}()};
tailrecursion.hoplon.html_body=tailrecursion.hoplon.make_singleton_ctor.call(null,"body");tailrecursion.hoplon.html_head=tailrecursion.hoplon.make_singleton_ctor.call(null,"head");tailrecursion.hoplon.html=tailrecursion.hoplon.make_singleton_ctor.call(null,"html");tailrecursion.hoplon.a=tailrecursion.hoplon.make_elem_ctor.call(null,"a");tailrecursion.hoplon.abbr=tailrecursion.hoplon.make_elem_ctor.call(null,"abbr");tailrecursion.hoplon.acronym=tailrecursion.hoplon.make_elem_ctor.call(null,"acronym");
tailrecursion.hoplon.address=tailrecursion.hoplon.make_elem_ctor.call(null,"address");tailrecursion.hoplon.applet=tailrecursion.hoplon.make_elem_ctor.call(null,"applet");tailrecursion.hoplon.area=tailrecursion.hoplon.make_elem_ctor.call(null,"area");tailrecursion.hoplon.article=tailrecursion.hoplon.make_elem_ctor.call(null,"article");tailrecursion.hoplon.aside=tailrecursion.hoplon.make_elem_ctor.call(null,"aside");tailrecursion.hoplon.audio=tailrecursion.hoplon.make_elem_ctor.call(null,"audio");
tailrecursion.hoplon.b=tailrecursion.hoplon.make_elem_ctor.call(null,"b");tailrecursion.hoplon.base=tailrecursion.hoplon.make_elem_ctor.call(null,"base");tailrecursion.hoplon.basefont=tailrecursion.hoplon.make_elem_ctor.call(null,"basefont");tailrecursion.hoplon.bdi=tailrecursion.hoplon.make_elem_ctor.call(null,"bdi");tailrecursion.hoplon.bdo=tailrecursion.hoplon.make_elem_ctor.call(null,"bdo");tailrecursion.hoplon.big=tailrecursion.hoplon.make_elem_ctor.call(null,"big");
tailrecursion.hoplon.blockquote=tailrecursion.hoplon.make_elem_ctor.call(null,"blockquote");tailrecursion.hoplon.br=tailrecursion.hoplon.make_elem_ctor.call(null,"br");tailrecursion.hoplon.button=tailrecursion.hoplon.make_elem_ctor.call(null,"button");tailrecursion.hoplon.canvas=tailrecursion.hoplon.make_elem_ctor.call(null,"canvas");tailrecursion.hoplon.caption=tailrecursion.hoplon.make_elem_ctor.call(null,"caption");tailrecursion.hoplon.center=tailrecursion.hoplon.make_elem_ctor.call(null,"center");
tailrecursion.hoplon.cite=tailrecursion.hoplon.make_elem_ctor.call(null,"cite");tailrecursion.hoplon.code=tailrecursion.hoplon.make_elem_ctor.call(null,"code");tailrecursion.hoplon.col=tailrecursion.hoplon.make_elem_ctor.call(null,"col");tailrecursion.hoplon.colgroup=tailrecursion.hoplon.make_elem_ctor.call(null,"colgroup");tailrecursion.hoplon.command=tailrecursion.hoplon.make_elem_ctor.call(null,"command");tailrecursion.hoplon.data=tailrecursion.hoplon.make_elem_ctor.call(null,"data");
tailrecursion.hoplon.datalist=tailrecursion.hoplon.make_elem_ctor.call(null,"datalist");tailrecursion.hoplon.dd=tailrecursion.hoplon.make_elem_ctor.call(null,"dd");tailrecursion.hoplon.del=tailrecursion.hoplon.make_elem_ctor.call(null,"del");tailrecursion.hoplon.details=tailrecursion.hoplon.make_elem_ctor.call(null,"details");tailrecursion.hoplon.dfn=tailrecursion.hoplon.make_elem_ctor.call(null,"dfn");tailrecursion.hoplon.dir=tailrecursion.hoplon.make_elem_ctor.call(null,"dir");
tailrecursion.hoplon.div=tailrecursion.hoplon.make_elem_ctor.call(null,"div");tailrecursion.hoplon.dl=tailrecursion.hoplon.make_elem_ctor.call(null,"dl");tailrecursion.hoplon.dt=tailrecursion.hoplon.make_elem_ctor.call(null,"dt");tailrecursion.hoplon.em=tailrecursion.hoplon.make_elem_ctor.call(null,"em");tailrecursion.hoplon.embed=tailrecursion.hoplon.make_elem_ctor.call(null,"embed");tailrecursion.hoplon.eventsource=tailrecursion.hoplon.make_elem_ctor.call(null,"eventsource");
tailrecursion.hoplon.fieldset=tailrecursion.hoplon.make_elem_ctor.call(null,"fieldset");tailrecursion.hoplon.figcaption=tailrecursion.hoplon.make_elem_ctor.call(null,"figcaption");tailrecursion.hoplon.figure=tailrecursion.hoplon.make_elem_ctor.call(null,"figure");tailrecursion.hoplon.font=tailrecursion.hoplon.make_elem_ctor.call(null,"font");tailrecursion.hoplon.footer=tailrecursion.hoplon.make_elem_ctor.call(null,"footer");tailrecursion.hoplon.form=tailrecursion.hoplon.make_elem_ctor.call(null,"form");
tailrecursion.hoplon.frame=tailrecursion.hoplon.make_elem_ctor.call(null,"frame");tailrecursion.hoplon.frameset=tailrecursion.hoplon.make_elem_ctor.call(null,"frameset");tailrecursion.hoplon.h1=tailrecursion.hoplon.make_elem_ctor.call(null,"h1");tailrecursion.hoplon.h2=tailrecursion.hoplon.make_elem_ctor.call(null,"h2");tailrecursion.hoplon.h3=tailrecursion.hoplon.make_elem_ctor.call(null,"h3");tailrecursion.hoplon.h4=tailrecursion.hoplon.make_elem_ctor.call(null,"h4");
tailrecursion.hoplon.h5=tailrecursion.hoplon.make_elem_ctor.call(null,"h5");tailrecursion.hoplon.h6=tailrecursion.hoplon.make_elem_ctor.call(null,"h6");tailrecursion.hoplon.header=tailrecursion.hoplon.make_elem_ctor.call(null,"header");tailrecursion.hoplon.hgroup=tailrecursion.hoplon.make_elem_ctor.call(null,"hgroup");tailrecursion.hoplon.hr=tailrecursion.hoplon.make_elem_ctor.call(null,"hr");tailrecursion.hoplon.i=tailrecursion.hoplon.make_elem_ctor.call(null,"i");
tailrecursion.hoplon.iframe=tailrecursion.hoplon.make_elem_ctor.call(null,"iframe");tailrecursion.hoplon.img=tailrecursion.hoplon.make_elem_ctor.call(null,"img");tailrecursion.hoplon.input=tailrecursion.hoplon.make_elem_ctor.call(null,"input");tailrecursion.hoplon.ins=tailrecursion.hoplon.make_elem_ctor.call(null,"ins");tailrecursion.hoplon.isindex=tailrecursion.hoplon.make_elem_ctor.call(null,"isindex");tailrecursion.hoplon.kbd=tailrecursion.hoplon.make_elem_ctor.call(null,"kbd");
tailrecursion.hoplon.keygen=tailrecursion.hoplon.make_elem_ctor.call(null,"keygen");tailrecursion.hoplon.label=tailrecursion.hoplon.make_elem_ctor.call(null,"label");tailrecursion.hoplon.legend=tailrecursion.hoplon.make_elem_ctor.call(null,"legend");tailrecursion.hoplon.li=tailrecursion.hoplon.make_elem_ctor.call(null,"li");tailrecursion.hoplon.link=tailrecursion.hoplon.make_elem_ctor.call(null,"link");tailrecursion.hoplon.html_map=tailrecursion.hoplon.make_elem_ctor.call(null,"map");
tailrecursion.hoplon.mark=tailrecursion.hoplon.make_elem_ctor.call(null,"mark");tailrecursion.hoplon.menu=tailrecursion.hoplon.make_elem_ctor.call(null,"menu");tailrecursion.hoplon.html_meta=tailrecursion.hoplon.make_elem_ctor.call(null,"meta");tailrecursion.hoplon.meter=tailrecursion.hoplon.make_elem_ctor.call(null,"meter");tailrecursion.hoplon.nav=tailrecursion.hoplon.make_elem_ctor.call(null,"nav");tailrecursion.hoplon.noframes=tailrecursion.hoplon.make_elem_ctor.call(null,"noframes");
tailrecursion.hoplon.noscript=tailrecursion.hoplon.make_elem_ctor.call(null,"noscript");tailrecursion.hoplon.object=tailrecursion.hoplon.make_elem_ctor.call(null,"object");tailrecursion.hoplon.ol=tailrecursion.hoplon.make_elem_ctor.call(null,"ol");tailrecursion.hoplon.optgroup=tailrecursion.hoplon.make_elem_ctor.call(null,"optgroup");tailrecursion.hoplon.option=tailrecursion.hoplon.make_elem_ctor.call(null,"option");tailrecursion.hoplon.output=tailrecursion.hoplon.make_elem_ctor.call(null,"output");
tailrecursion.hoplon.p=tailrecursion.hoplon.make_elem_ctor.call(null,"p");tailrecursion.hoplon.param=tailrecursion.hoplon.make_elem_ctor.call(null,"param");tailrecursion.hoplon.pre=tailrecursion.hoplon.make_elem_ctor.call(null,"pre");tailrecursion.hoplon.progress=tailrecursion.hoplon.make_elem_ctor.call(null,"progress");tailrecursion.hoplon.q=tailrecursion.hoplon.make_elem_ctor.call(null,"q");tailrecursion.hoplon.rp=tailrecursion.hoplon.make_elem_ctor.call(null,"rp");
tailrecursion.hoplon.rt=tailrecursion.hoplon.make_elem_ctor.call(null,"rt");tailrecursion.hoplon.ruby=tailrecursion.hoplon.make_elem_ctor.call(null,"ruby");tailrecursion.hoplon.s=tailrecursion.hoplon.make_elem_ctor.call(null,"s");tailrecursion.hoplon.samp=tailrecursion.hoplon.make_elem_ctor.call(null,"samp");tailrecursion.hoplon.script=tailrecursion.hoplon.make_elem_ctor.call(null,"script");tailrecursion.hoplon.section=tailrecursion.hoplon.make_elem_ctor.call(null,"section");
tailrecursion.hoplon.select=tailrecursion.hoplon.make_elem_ctor.call(null,"select");tailrecursion.hoplon.small=tailrecursion.hoplon.make_elem_ctor.call(null,"small");tailrecursion.hoplon.source=tailrecursion.hoplon.make_elem_ctor.call(null,"source");tailrecursion.hoplon.span=tailrecursion.hoplon.make_elem_ctor.call(null,"span");tailrecursion.hoplon.strike=tailrecursion.hoplon.make_elem_ctor.call(null,"strike");tailrecursion.hoplon.strong=tailrecursion.hoplon.make_elem_ctor.call(null,"strong");
tailrecursion.hoplon.style=tailrecursion.hoplon.make_elem_ctor.call(null,"style");tailrecursion.hoplon.sub=tailrecursion.hoplon.make_elem_ctor.call(null,"sub");tailrecursion.hoplon.summary=tailrecursion.hoplon.make_elem_ctor.call(null,"summary");tailrecursion.hoplon.sup=tailrecursion.hoplon.make_elem_ctor.call(null,"sup");tailrecursion.hoplon.table=tailrecursion.hoplon.make_elem_ctor.call(null,"table");tailrecursion.hoplon.tbody=tailrecursion.hoplon.make_elem_ctor.call(null,"tbody");
tailrecursion.hoplon.td=tailrecursion.hoplon.make_elem_ctor.call(null,"td");tailrecursion.hoplon.textarea=tailrecursion.hoplon.make_elem_ctor.call(null,"textarea");tailrecursion.hoplon.tfoot=tailrecursion.hoplon.make_elem_ctor.call(null,"tfoot");tailrecursion.hoplon.th=tailrecursion.hoplon.make_elem_ctor.call(null,"th");tailrecursion.hoplon.thead=tailrecursion.hoplon.make_elem_ctor.call(null,"thead");tailrecursion.hoplon.html_time=tailrecursion.hoplon.make_elem_ctor.call(null,"time");
tailrecursion.hoplon.title=tailrecursion.hoplon.make_elem_ctor.call(null,"title");tailrecursion.hoplon.tr=tailrecursion.hoplon.make_elem_ctor.call(null,"tr");tailrecursion.hoplon.track=tailrecursion.hoplon.make_elem_ctor.call(null,"track");tailrecursion.hoplon.tt=tailrecursion.hoplon.make_elem_ctor.call(null,"tt");tailrecursion.hoplon.u=tailrecursion.hoplon.make_elem_ctor.call(null,"u");tailrecursion.hoplon.ul=tailrecursion.hoplon.make_elem_ctor.call(null,"ul");
tailrecursion.hoplon.html_var=tailrecursion.hoplon.make_elem_ctor.call(null,"var");tailrecursion.hoplon.video=tailrecursion.hoplon.make_elem_ctor.call(null,"video");tailrecursion.hoplon.wbr=tailrecursion.hoplon.make_elem_ctor.call(null,"wbr");tailrecursion.hoplon.spliced=cljs.core.vector;tailrecursion.hoplon.$text=function(a){return document.createTextNode(a)};tailrecursion.hoplon.$comment=function(a){return document.createComment(a)};
tailrecursion.hoplon.initialized_QMARK_=cljs.core.atom.call(null,!1);tailrecursion.hoplon._STAR_initfns_STAR_=cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);tailrecursion.hoplon.add_initfn_BANG_=function(a){return cljs.core.truth_(cljs.core.deref.call(null,tailrecursion.hoplon.initialized_QMARK_))?a.call(null):cljs.core.swap_BANG_.call(null,tailrecursion.hoplon._STAR_initfns_STAR_,cljs.core.conj,a)};
tailrecursion.hoplon.init=function(){return setTimeout(function(){jQuery("body").on("submit",function(a){return a.preventDefault()});cljs.core.reset_BANG_.call(null,tailrecursion.hoplon.initialized_QMARK_,!0);for(var a=cljs.core.seq.call(null,cljs.core.deref.call(null,tailrecursion.hoplon._STAR_initfns_STAR_)),b=null,c=0,d=0;;)if(d<c){var e=cljs.core._nth.call(null,b,d);e.call(null);d+=1}else if(a=cljs.core.seq.call(null,a))b=a,cljs.core.chunked_seq_QMARK_.call(null,b)?(a=cljs.core.chunk_first.call(null,
b),c=cljs.core.chunk_rest.call(null,b),b=a,e=cljs.core.count.call(null,a),a=c,c=e):(e=cljs.core.first.call(null,b),e.call(null),a=cljs.core.next.call(null,b),b=null,c=0),d=0;else return null},0)};tailrecursion.hoplon.by_id=function(a){return document.getElementById(cljs.core.name.call(null,a))};tailrecursion.hoplon.val_id=function(a){return tailrecursion.hoplon.do_BANG_.call(null,tailrecursion.hoplon.by_id.call(null,a),new cljs.core.Keyword(null,"value","value",1125876963))};
tailrecursion.hoplon.rel=function(a,b){var c=cljs.core.js__GT_clj.call(null,jQuery(a).offset()),d=c.call(null,"left"),c=c.call(null,"top");return new cljs.core.PersistentArrayMap(null,2,[new cljs.core.Keyword(null,"x","x",1013904362),b.pageX-d,new cljs.core.Keyword(null,"y","y",1013904363),b.pageY-c],null)};tailrecursion.hoplon.relx=function(a,b){return(new cljs.core.Keyword(null,"x","x",1013904362)).cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.rel.call(null,a,b))};
tailrecursion.hoplon.rely=function(a,b){return(new cljs.core.Keyword(null,"y","y",1013904363)).cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.rel.call(null,a,b))};tailrecursion.hoplon.rel_event=function(a,b,c){return function(d){d[""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)+"X"]=tailrecursion.hoplon.relx.call(null,a,d);d[""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)+"Y"]=tailrecursion.hoplon.rely.call(null,a,d);return c.call(null,d)}};
tailrecursion.hoplon.text_val_BANG_=function(){var a=null,b=function(a){return a.val()},c=function(a,b){return a.val(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b))},a=function(a,e){switch(arguments.length){case 1:return b.call(this,a);case 2:return c.call(this,a,e)}throw Error("Invalid arity: "+arguments.length);};a.cljs$core$IFn$_invoke$arity$1=b;a.cljs$core$IFn$_invoke$arity$2=c;return a}();
tailrecursion.hoplon.check_val_BANG_=function(){var a=null,b=function(a){return a.is(":checked")},c=function(a,b){return a.prop("checked",cljs.core.boolean$.call(null,b))},a=function(a,e){switch(arguments.length){case 1:return b.call(this,a);case 2:return c.call(this,a,e)}throw Error("Invalid arity: "+arguments.length);};a.cljs$core$IFn$_invoke$arity$1=b;a.cljs$core$IFn$_invoke$arity$2=c;return a}();
tailrecursion.hoplon.do_BANG_=function(){var a=cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),b=cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),c=cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),d=cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),e=cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null,1,[new cljs.core.Keyword(null,"default","default",2558708147),new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",
1265562704)],null),new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return new cljs.core.MultiFn("do!",function(a,b,c,d,e){return function(a,b,c){return b}}(a,b,c,d,e),new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",1265562704),e,a,b,c,d)}();
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",1265562704),function(a,b,c){return tailrecursion.hoplon.do_BANG_.call(null,a,new cljs.core.Keyword(null,"attr","attr",1016909155),new cljs.core.PersistentArrayMap.fromArray([b,c],!0,!1))});
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"value","value",1125876963),function(){var a=function(a,b,e){a=jQuery(a);return cljs.core.apply.call(null,cljs.core._EQ_.call(null,"checkbox",a.attr("type"))?tailrecursion.hoplon.check_val_BANG_:tailrecursion.hoplon.text_val_BANG_,a,e)},b=function(b,d,e){var f=null;2<arguments.length&&(f=cljs.core.array_seq(Array.prototype.slice.call(arguments,2),0));return a.call(this,b,d,f)};b.cljs$lang$maxFixedArity=2;b.cljs$lang$applyTo=
function(b){var d=cljs.core.first(b);b=cljs.core.next(b);var e=cljs.core.first(b);b=cljs.core.rest(b);return a(d,e,b)};b.cljs$core$IFn$_invoke$arity$variadic=a;return b}());
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"attr","attr",1016909155),function(a,b,c){a=jQuery(a);c=cljs.core.seq.call(null,c);b=null;for(var d=0,e=0;;)if(e<d){var f=cljs.core._nth.call(null,b,e),g=cljs.core.nth.call(null,f,0,null),f=cljs.core.nth.call(null,f,1,null),g=cljs.core.name.call(null,g);cljs.core._EQ_.call(null,!1,f)?a.removeAttr(g):a.attr(g,cljs.core._EQ_.call(null,!0,f)?g:f);e+=1}else if(c=cljs.core.seq.call(null,c))cljs.core.chunked_seq_QMARK_.call(null,
c)?(g=cljs.core.chunk_first.call(null,c),c=cljs.core.chunk_rest.call(null,c),b=g,d=g=cljs.core.count.call(null,g)):(b=cljs.core.first.call(null,c),g=cljs.core.nth.call(null,b,0,null),f=cljs.core.nth.call(null,b,1,null),b=cljs.core.name.call(null,g),cljs.core._EQ_.call(null,!1,f)?a.removeAttr(b):a.attr(b,cljs.core._EQ_.call(null,!0,f)?b:f),c=cljs.core.next.call(null,c),b=null,d=0),e=0;else return null});
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"class","class",1108647146),function(a,b,c){a=jQuery(a);b=function(a){return function(a){return cljs.core.zipmap.call(null,a,cljs.core.repeat.call(null,!0))}}(a);c=cljs.core.map_QMARK_.call(null,c)?c:b.call(null,"string"===typeof c?c.split(/\s+/):cljs.core.seq.call(null,c));c=cljs.core.seq.call(null,c);for(var d=null,e=0,f=0;;)if(f<e){var g=cljs.core._nth.call(null,d,f);b=cljs.core.nth.call(null,g,0,null);g=cljs.core.nth.call(null,
g,1,null);a.toggleClass(cljs.core.name.call(null,b),cljs.core.boolean$.call(null,g));f+=1}else if(c=cljs.core.seq.call(null,c))cljs.core.chunked_seq_QMARK_.call(null,c)?(d=cljs.core.chunk_first.call(null,c),c=cljs.core.chunk_rest.call(null,c),b=d,e=cljs.core.count.call(null,d),d=b):(d=cljs.core.first.call(null,c),b=cljs.core.nth.call(null,d,0,null),g=cljs.core.nth.call(null,d,1,null),a.toggleClass(cljs.core.name.call(null,b),cljs.core.boolean$.call(null,g)),c=cljs.core.next.call(null,c),d=null,e=
0),f=0;else return null});
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"css","css",1014003061),function(a,b,c){a=jQuery(a);c=cljs.core.seq.call(null,c);for(var d=null,e=0,f=0;;)if(f<e){var g=cljs.core._nth.call(null,d,f);b=cljs.core.nth.call(null,g,0,null);g=cljs.core.nth.call(null,g,1,null);a.css(cljs.core.name.call(null,b),""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(g));f+=1}else if(c=cljs.core.seq.call(null,c))cljs.core.chunked_seq_QMARK_.call(null,c)?(d=cljs.core.chunk_first.call(null,
c),c=cljs.core.chunk_rest.call(null,c),b=d,e=cljs.core.count.call(null,d),d=b):(d=cljs.core.first.call(null,c),b=cljs.core.nth.call(null,d,0,null),g=cljs.core.nth.call(null,d,1,null),a.css(cljs.core.name.call(null,b),""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(g)),c=cljs.core.next.call(null,c),d=null,e=0),f=0;else return null});
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"toggle","toggle",4440567494),function(a,b,c){return jQuery(a).toggle(cljs.core.boolean$.call(null,c))});cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"slide-toggle","slide-toggle",3005235810),function(a,b,c){return cljs.core.truth_(c)?jQuery(a).hide().slideDown("fast"):jQuery(a).slideUp("fast")});
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"fade-toggle","fade-toggle",514539319),function(a,b,c){return cljs.core.truth_(c)?jQuery(a).hide().fadeIn("fast"):jQuery(a).fadeOut("fast")});cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"focus","focus",1111509066),function(a,b,c){return setTimeout(function(){return cljs.core.truth_(c)?jQuery(a).focus():jQuery(a).focusout()},0)});
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"select","select",4402849902),function(a,b,c){return jQuery(a).select()});
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"focus-select","focus-select",3635190531),function(a,b,c){return cljs.core.truth_(c)?(tailrecursion.hoplon.do_BANG_.call(null,a,new cljs.core.Keyword(null,"focus","focus",1111509066),c),tailrecursion.hoplon.do_BANG_.call(null,a,new cljs.core.Keyword(null,"select","select",4402849902),c)):null});
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"text","text",1017460895),function(a,b,c){return jQuery(a).text(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c))});cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"html","html",1017117469),function(a,b,c){return jQuery(a).html(c)});
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"scroll-to","scroll-to",1431647469),function(a,b,c){return cljs.core.truth_(c)?(b=jQuery("body,html"),a=jQuery(a),b.animate(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null,1,[new cljs.core.Keyword(null,"scrollTop","scrollTop",1431684794),a.offset().top],null)))):null});
tailrecursion.hoplon.on_BANG_=function(){var a=cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),b=cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),c=cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),d=cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),e=cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null,1,[new cljs.core.Keyword(null,"default","default",2558708147),new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",
1265562704)],null),new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return new cljs.core.MultiFn("on!",function(a,b,c,d,e){return function(a,b,c){return b}}(a,b,c,d,e),new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",1265562704),e,a,b,c,d)}();
cljs.core._add_method.call(null,tailrecursion.hoplon.on_BANG_,new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",1265562704),function(a,b,c){return tailrecursion.hoplon.when_dom.call(null,a,function(){return jQuery(a).on(cljs.core.name.call(null,b),c)})});
tailrecursion.hoplon.loop_tpl_STAR_=function(a,b,c){var d=tailrecursion.javelin.cell.call(null,0);a=tailrecursion.javelin.lift.call(null,function(a){return function(a,b){return b.call(null,a)}}(d)).call(null,a,cljs.core.seq);var e=tailrecursion.javelin.lift.call(null,function(a,b){return function(a,b){return a.call(null,b)}}(d,a)).call(null,cljs.core.count,a),f=function(a,b,c){return function(d){return tailrecursion.javelin.lift.call(null,function(a,b,c){return function(a,b){return b<a}}(a,b,c)).call(null,
c,d)}}(d,a,e),g=function(a,b,c,d){return function(e){return tailrecursion.javelin.lift.call(null,function(a,b,c,d){return function(a,b,c){return a.call(null,c,b)}}(a,b,c,d)).call(null,tailrecursion.hoplon.safe_nth,e,b)}}(d,a,e,f),h=tailrecursion.hoplon.span.call(null);tailrecursion.hoplon.when_dom.call(null,h,function(a,d,e,f,g,h){return function(){var r=a.parentNode;r.removeChild(a);return tailrecursion.javelin.lift.call(null,function(a,b,c,d,e,f,g){return function(a,b,c,d,e,f,g,h,k,l){if(cljs.core.truth_(g<
e)){g=cljs.core.seq.call(null,h.call(null,g,e));h=null;for(var m=0,n=0;;)if(cljs.core.truth_(n<m)){var p=cljs.core._nth.call(null,h,n),p=c.call(null,d.call(null,p)).call(null,new cljs.core.Keyword(null,"do-toggle","do-toggle",1250159176),f.call(null,p));cljs.core.not.call(null,l)?b.appendChild(p):b.insertBefore(p,b.firstChild);n+=1}else if(g=cljs.core.seq.call(null,g))cljs.core.chunked_seq_QMARK_.call(null,g)?(m=cljs.core.chunk_first.call(null,g),g=cljs.core.chunk_rest.call(null,g),h=m,m=cljs.core.count.call(null,
m)):(h=cljs.core.first.call(null,g),h=c.call(null,d.call(null,h)).call(null,new cljs.core.Keyword(null,"do-toggle","do-toggle",1250159176),f.call(null,h)),cljs.core.not.call(null,l)?b.appendChild(h):b.insertBefore(h,b.firstChild),g=cljs.core.next.call(null,g),h=null,m=0),n=0;else break;return k.call(null,a,e)}return null}}(r,a,d,e,f,g,h)).call(null,tailrecursion.javelin.cell.call(null,d),r,c,h,f,g,d,cljs.core.range,cljs.core.reset_BANG_,b)}}(h,d,a,e,f,g));return h};
tailrecursion.hoplon.route_cell=function(){var a=null,b=function(){var a=function(){var a=tailrecursion.javelin.cell.call(null,window.location.hash);setInterval(function(a){return function(){return cljs.core.reset_BANG_.call(null,a,window.location.hash)}}(a),100);return tailrecursion.javelin.lift.call(null,function(a){return function(a){return a}}(a)).call(null,a)}();return tailrecursion.javelin.lift.call(null,function(a){return function(a,b){return cljs.core.truth_(a.call(null,"",b))?b:null}}(a)).call(null,
cljs.core.not_EQ_,a)},c=function(b){if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,b))){var c=cljs.core.truth_(null)?null:cljs.core.identity;tailrecursion.javelin.lift.call(null,function(a,b){return function(a,b){return a.location.hash=b}}(b,c)).call(null,window,b);setInterval(function(a,b){return function(){return cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,a),window.location.hash)?(b.call(null,window.location.hash),window.location.hash=cljs.core.deref.call(null,a)):null}}(b,
c),100);return b}c=a.call(null);return tailrecursion.javelin.lift.call(null,function(a){return function(a,b){return cljs.core.truth_(b)?b:a}}(c)).call(null,b,c)},d=function(a,b){var c=cljs.core.truth_(b)?b:cljs.core.identity;tailrecursion.javelin.lift.call(null,function(a,b){return function(a,b){return a.location.hash=b}}(a,c)).call(null,window,a);setInterval(function(a,b){return function(){return cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,a),window.location.hash)?(b.call(null,window.location.hash),
window.location.hash=cljs.core.deref.call(null,a)):null}}(a,c),100);return a},a=function(a,f){switch(arguments.length){case 0:return b.call(this);case 1:return c.call(this,a);case 2:return d.call(this,a,f)}throw Error("Invalid arity: "+arguments.length);};a.cljs$core$IFn$_invoke$arity$0=b;a.cljs$core$IFn$_invoke$arity$1=c;a.cljs$core$IFn$_invoke$arity$2=d;return a}();tailrecursion.hoplon.reload={};
tailrecursion.hoplon.reload.reload_BANG_=function(a){var b=a.href;if(cljs.core.truth_(b)){var c=""+cljs.core.str.cljs$core$IFn$_invoke$arity$1("___tailrecursion_hoplon_reload___\x3d")+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date).getTime());return a.ownerNode.href=0>b.indexOf("?")?""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c):0>b.indexOf("___tailrecursion_hoplon_reload___\x3d")?""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)+"\x26"+
cljs.core.str.cljs$core$IFn$_invoke$arity$1(c):new cljs.core.Keyword(null,"else","else",1017020587)?clojure.string.replace.call(null,b,cljs.core.re_pattern.call(null,""+cljs.core.str.cljs$core$IFn$_invoke$arity$1("___tailrecursion_hoplon_reload___\x3d")+"\\d+"),c):null}return null};
tailrecursion.hoplon.reload.file_modified_atom=function(a,b){var c=cljs.core.atom.call(null,null),d=new cljs.core.PersistentArrayMap(null,3,[new cljs.core.Keyword(null,"url","url",1014020321),a,new cljs.core.Keyword(null,"type","type",1017479852),"HEAD",new cljs.core.Keyword(null,"dataType","dataType",2802975094),"text"],null),e=function(a,b){return function(a){return cljs.core._EQ_.call(null,"true",a.getResponseHeader("X-Dev-Mode"))}}(c,d),f=function(a,b,c){return function(a,b){return jQuery.ajax(cljs.core.clj__GT_js.call(null,
cljs.core.assoc.call(null,a,new cljs.core.Keyword(null,"success","success",3441701749),b)))}}(c,d,e),g=function(a,b,c,d){return function(a){return Date.parse(a.getResponseHeader("Last-Modified"))}}(c,d,e,f);(function(a,c,d,e,f){return function(){var g=function(g){var p=cljs.core.nth.call(null,g,0,null),t=cljs.core.nth.call(null,g,1,null),v=cljs.core.nth.call(null,g,2,null);cljs.core.truth_(v)&&cljs.core.reset_BANG_.call(null,a,f.call(null,v));return cljs.core.not.call(null,v)||d.call(null,v)?setTimeout(function(a,
b,c,d,e,f,g,h,k){return function(){return h.call(null,f,q)}}(g,p,t,v,a,c,d,e,f),b):null},q=function(a){var b=null;0<arguments.length&&(b=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0));return g.call(this,b)};q.cljs$lang$maxFixedArity=0;q.cljs$lang$applyTo=function(a){a=cljs.core.seq(a);return g(a)};q.cljs$core$IFn$_invoke$arity$variadic=g;return q}()})(c,d,e,f,g).call(null);return c};
tailrecursion.hoplon.reload.on_modified=function(a,b,c){return cljs.core.add_watch.call(null,tailrecursion.hoplon.reload.file_modified_atom.call(null,a,cljs.core.truth_(b)?b:100),null,function(a,b,f,g){return cljs.core.truth_(cljs.core.truth_(f)?cljs.core.not_EQ_.call(null,f,g):f)?c.call(null):null})};
tailrecursion.hoplon.reload.reload_js=function(){var a=function(a){var b=cljs.core.nth.call(null,a,0,null);return tailrecursion.hoplon.reload.on_modified.call(null,""+cljs.core.str.cljs$core$IFn$_invoke$arity$1("c6f4dce0-0384-11e4-9191-0800200c9a66")+".js",b,function(a,b){return function(){return window.location.reload()}}(a,b))},b=function(b){var d=null;0<arguments.length&&(d=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0));return a.call(this,d)};b.cljs$lang$maxFixedArity=0;b.cljs$lang$applyTo=
function(b){b=cljs.core.seq(b);return a(b)};b.cljs$core$IFn$_invoke$arity$variadic=a;return b}();
tailrecursion.hoplon.reload.reload_css=function(){var a=function(a){var b=cljs.core.nth.call(null,a,0,null);return function(a,b){return function h(){var c=document.styleSheets,d=cljs.core.range.call(null,0,c.length),m=cljs.core.keep.call(null,function(a,b,c,d){return function(a){return a.href}}(c,d,a,b),function(){return function(a,b,c,d){return function C(e){return new cljs.core.LazySeq(null,function(a,b,c,d){return function(){for(;;){var b=cljs.core.seq.call(null,e);if(b){if(cljs.core.chunked_seq_QMARK_.call(null,
b)){var c=cljs.core.chunk_first.call(null,b),d=cljs.core.count.call(null,c),f=cljs.core.chunk_buffer.call(null,d);a:{for(var h=0;;)if(h<d){var k=cljs.core._nth.call(null,c,h);cljs.core.chunk_append.call(null,f,a[k]);h+=1}else{c=!0;break a}c=void 0}return c?cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,f),C.call(null,cljs.core.chunk_rest.call(null,b))):cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,f),null)}f=cljs.core.first.call(null,b);return cljs.core.cons.call(null,a[f],C.call(null,
cljs.core.rest.call(null,b)))}return null}}}(a,b,c,d),null,null)}}(c,d,a,b).call(null,d)}());if(cljs.core.not.call(null,cljs.core.seq.call(null,m)))return setTimeout(h,cljs.core.truth_(b)?b:100);for(var n=cljs.core.seq.call(null,cljs.core.range.call(null,0,c.length)),p=null,q=0,r=0;;)if(r<q){var s=cljs.core._nth.call(null,p,r),t=c[s];if(cljs.core.truth_(t)){var v=t,y=v.href;if(cljs.core.truth_(y)){var z=y;tailrecursion.hoplon.reload.on_modified.call(null,z,b,function(a,b,c,d,e,f,h,k,l,m,n,p,q,r){return function(){return tailrecursion.hoplon.reload.reload_BANG_.call(null,
m[l])}}(n,p,q,r,z,y,v,t,s,c,d,m,a,b))}}r+=1}else if(v=cljs.core.seq.call(null,n)){t=v;if(cljs.core.chunked_seq_QMARK_.call(null,t))n=cljs.core.chunk_first.call(null,t),r=cljs.core.chunk_rest.call(null,t),p=n,q=cljs.core.count.call(null,n),n=r;else{s=cljs.core.first.call(null,t);y=c[s];if(cljs.core.truth_(y)){var z=y,A=z.href;if(cljs.core.truth_(A)){var B=A;tailrecursion.hoplon.reload.on_modified.call(null,B,b,function(a,b,c,d,e,f,h,k,l,m,n,p,q,r,s,t){return function(){return tailrecursion.hoplon.reload.reload_BANG_.call(null,
p[l])}}(n,p,q,r,B,A,z,y,s,t,v,c,d,m,a,b))}}n=cljs.core.next.call(null,t);p=null;q=0}r=0}else return null}}(a,b).call(null)},b=function(b){var d=null;0<arguments.length&&(d=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0));return a.call(this,d)};b.cljs$lang$maxFixedArity=0;b.cljs$lang$applyTo=function(b){b=cljs.core.seq(b);return a(b)};b.cljs$core$IFn$_invoke$arity$variadic=a;return b}();
tailrecursion.hoplon.reload.reload_all=function(){var a=function(a){a=cljs.core.nth.call(null,a,0,null);tailrecursion.hoplon.reload.reload_js.call(null,a);return tailrecursion.hoplon.reload.reload_css.call(null,a)},b=function(b){var d=null;0<arguments.length&&(d=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0));return a.call(this,d)};b.cljs$lang$maxFixedArity=0;b.cljs$lang$applyTo=function(b){b=cljs.core.seq(b);return a(b)};b.cljs$core$IFn$_invoke$arity$variadic=a;return b}();var hoplon={util:{}};hoplon.util.is_text_QMARK_=function(a){return cljs.core._EQ_.call(null,cljs.core.count.call(null,a),1)&&!cljs.core._EQ_.call(null,cljs.core.first.call(null,a).nodeType,1)};hoplon.util.url=function(a){return tailrecursion.hoplon.a.call(null,new cljs.core.PersistentArrayMap(null,1,[new cljs.core.Keyword(null,"href","href",1017115293),a],null),a)};hoplon.reveal={};
hoplon.reveal.markdown_slide=function(){var a=function(a){var b=tailrecursion.hoplon.parse_args.call(null,a);a=cljs.core.nth.call(null,b,0,null);b=cljs.core.nth.call(null,b,1,null);return tailrecursion.hoplon.section.call(null,cljs.core.merge.call(null,a,new cljs.core.PersistentArrayMap(null,1,[new cljs.core.Keyword(null,"data-markdown","data-markdown",2015462180),""],null)),tailrecursion.hoplon.script.call(null,new cljs.core.Keyword(null,"type","type",1017479852),"text/template",b))},b=function(b){var d=
null;0<arguments.length&&(d=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0));return a.call(this,d)};b.cljs$lang$maxFixedArity=0;b.cljs$lang$applyTo=function(b){b=cljs.core.seq(b);return a(b)};b.cljs$core$IFn$_invoke$arity$variadic=a;return b}();
hoplon.reveal.intro_title=function(){var a=function(a){a=tailrecursion.hoplon.parse_args.call(null,a);cljs.core.nth.call(null,a,0,null);a=cljs.core.nth.call(null,a,1,null);return hoplon.util.is_text_QMARK_.call(null,a)?tailrecursion.hoplon.add_attributes_BANG_.call(null,tailrecursion.hoplon.h1.call(null,cljs.core.first.call(null,a)),new cljs.core.PersistentArrayMap(null,1,[new cljs.core.Keyword(null,"class","class",1108647146),"slide-title intro"],null)):a},b=function(b){var d=null;0<arguments.length&&
(d=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0));return a.call(this,d)};b.cljs$lang$maxFixedArity=0;b.cljs$lang$applyTo=function(b){b=cljs.core.seq(b);return a(b)};b.cljs$core$IFn$_invoke$arity$variadic=a;return b}();
hoplon.reveal.chapter_title=function(){var a=function(a){a=tailrecursion.hoplon.parse_args.call(null,a);cljs.core.nth.call(null,a,0,null);a=cljs.core.nth.call(null,a,1,null);return hoplon.util.is_text_QMARK_.call(null,a)?tailrecursion.hoplon.add_attributes_BANG_.call(null,tailrecursion.hoplon.h2.call(null,cljs.core.first.call(null,a)),new cljs.core.PersistentArrayMap(null,1,[new cljs.core.Keyword(null,"class","class",1108647146),"slide-title chapter"],null)):a},b=function(b){var d=null;0<arguments.length&&
(d=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0));return a.call(this,d)};b.cljs$lang$maxFixedArity=0;b.cljs$lang$applyTo=function(b){b=cljs.core.seq(b);return a(b)};b.cljs$core$IFn$_invoke$arity$variadic=a;return b}();
hoplon.reveal.slide_title=function(){var a=function(a){a=tailrecursion.hoplon.parse_args.call(null,a);cljs.core.nth.call(null,a,0,null);a=cljs.core.nth.call(null,a,1,null);return hoplon.util.is_text_QMARK_.call(null,a)?tailrecursion.hoplon.add_attributes_BANG_.call(null,tailrecursion.hoplon.h3.call(null,cljs.core.first.call(null,a)),new cljs.core.PersistentArrayMap(null,1,[new cljs.core.Keyword(null,"class","class",1108647146),"slide-title slide"],null)):a},b=function(b){var d=null;0<arguments.length&&
(d=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0));return a.call(this,d)};b.cljs$lang$maxFixedArity=0;b.cljs$lang$applyTo=function(b){b=cljs.core.seq(b);return a(b)};b.cljs$core$IFn$_invoke$arity$variadic=a;return b}();
hoplon.reveal.slide=function(){var a=function(a){var b=tailrecursion.hoplon.parse_args.call(null,a);a=cljs.core.nth.call(null,b,0,null);var e=cljs.core.seq_QMARK_.call(null,a)?cljs.core.apply.call(null,cljs.core.hash_map,a):a,f=cljs.core.get.call(null,e,new cljs.core.Keyword(null,"transition","transition",3584712903)),g=cljs.core.get.call(null,e,new cljs.core.Keyword(null,"background","background",3976677536)),h=cljs.core.get.call(null,e,new cljs.core.Keyword(null,"title","title",1124275658));a=cljs.core.get.call(null,
e,new cljs.core.Keyword(null,"markdown","markdown",1260843105));b=cljs.core.nth.call(null,b,1,null);e=cljs.core.dissoc.call(null,e,new cljs.core.Keyword(null,"markdown","markdown",1260843105),new cljs.core.Keyword(null,"title","title",1124275658),new cljs.core.Keyword(null,"background","background",3976677536),new cljs.core.Keyword(null,"transition","transition",3584712903));g=cljs.core.truth_(g)?cljs.core.assoc.call(null,e,new cljs.core.Keyword(null,"data-background","data-background",3316135587),
g):e;f=cljs.core.truth_(f)?cljs.core.assoc.call(null,g,new cljs.core.Keyword(null,"data-transition","data-transition",2924170954),f):g;h=cljs.core.truth_(h)?cljs.core.concat.call(null,new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[hoplon.reveal.slide_title.call(null,h)],null),b):b;return cljs.core.truth_(a)?hoplon.reveal.markdown_slide.call(null,f,h):tailrecursion.hoplon.section.call(null,f,h)},b=function(b){var d=null;0<arguments.length&&(d=cljs.core.array_seq(Array.prototype.slice.call(arguments,
0),0));return a.call(this,d)};b.cljs$lang$maxFixedArity=0;b.cljs$lang$applyTo=function(b){b=cljs.core.seq(b);return a(b)};b.cljs$core$IFn$_invoke$arity$variadic=a;return b}();
hoplon.reveal.chapter=function(){var a=function(a){a=tailrecursion.hoplon.parse_args.call(null,a);var b=cljs.core.nth.call(null,a,0,null),b=cljs.core.seq_QMARK_.call(null,b)?cljs.core.apply.call(null,cljs.core.hash_map,b):b,e=cljs.core.get.call(null,b,new cljs.core.Keyword(null,"title","title",1124275658));a=cljs.core.nth.call(null,a,1,null);return cljs.core.empty_QMARK_.call(null,e)?hoplon.reveal.slide.call(null,cljs.core.dissoc.call(null,b,new cljs.core.Keyword(null,"title","title",1124275658)),
a):hoplon.reveal.slide.call(null,cljs.core.dissoc.call(null,b,new cljs.core.Keyword(null,"title","title",1124275658)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[hoplon.reveal.slide.call(null,hoplon.reveal.chapter_title.call(null,e))],null),a))},b=function(b){var d=null;0<arguments.length&&(d=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0));return a.call(this,d)};b.cljs$lang$maxFixedArity=0;b.cljs$lang$applyTo=function(b){b=
cljs.core.seq(b);return a(b)};b.cljs$core$IFn$_invoke$arity$variadic=a;return b}();
hoplon.reveal.intro=function(){var a=function(a){a=tailrecursion.hoplon.parse_args.call(null,a);var b=cljs.core.nth.call(null,a,0,null),b=cljs.core.seq_QMARK_.call(null,b)?cljs.core.apply.call(null,cljs.core.hash_map,b):b,e=cljs.core.get.call(null,b,new cljs.core.Keyword(null,"title","title",1124275658));a=cljs.core.nth.call(null,a,1,null);return cljs.core.empty_QMARK_.call(null,e)?hoplon.reveal.slide.call(null,cljs.core.dissoc.call(null,b,new cljs.core.Keyword(null,"title","title",1124275658)),a):
hoplon.reveal.slide.call(null,cljs.core.dissoc.call(null,b,new cljs.core.Keyword(null,"title","title",1124275658)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[hoplon.reveal.intro_title.call(null,e)],null),a))},b=function(b){var d=null;0<arguments.length&&(d=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0));return a.call(this,d)};b.cljs$lang$maxFixedArity=0;b.cljs$lang$applyTo=function(b){b=cljs.core.seq(b);return a(b)};b.cljs$core$IFn$_invoke$arity$variadic=
a;return b}();
hoplon.reveal.slideshow=function(){var a=function(a){a=tailrecursion.hoplon.parse_args.call(null,a);var b=cljs.core.nth.call(null,a,0,null),e=cljs.core.seq_QMARK_.call(null,b)?cljs.core.apply.call(null,cljs.core.hash_map,b):b,f=cljs.core.get.call(null,e,new cljs.core.Keyword(null,"theme","theme",1124231483),"default"),g=cljs.core.nth.call(null,a,1,null);tailrecursion.hoplon.add_initfn_BANG_.call(null,function(a,b,c,d,e,f){return function(){return Reveal.initialize(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null,
3,[new cljs.core.Keyword(null,"history","history",1940838406),!0,new cljs.core.Keyword(null,"transition","transition",3584712903),"linear",new cljs.core.Keyword(null,"dependencies","dependencies",1517678747),new cljs.core.PersistentVector(null,4,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.PersistentArrayMap(null,1,[new cljs.core.Keyword(null,"src","src",1014018390),"reveal.js/plugin/markdown/marked.js"],null),new cljs.core.PersistentArrayMap(null,1,[new cljs.core.Keyword(null,"src","src",
1014018390),"reveal.js/plugin/markdown/markdown.js"],null),new cljs.core.PersistentArrayMap(null,3,[new cljs.core.Keyword(null,"src","src",1014018390),"reveal.js/plugin/highlight/highlight.js",new cljs.core.Keyword(null,"async","async",1107031534),!0,new cljs.core.Keyword(null,"callback","callback",841683895),function(a,b,c,d,e,f){return function(){return hljs.initHighlightingOnLoad()}}(a,b,c,d,e,f)],null),new cljs.core.PersistentArrayMap(null,2,[new cljs.core.Keyword(null,"src","src",1014018390),
"reveal.js/plugin/notes/notes.js",new cljs.core.Keyword(null,"async","async",1107031534),!0],null)],null)],null)))}}(a,b,e,e,f,g));return tailrecursion.hoplon.div.call(null,cljs.core.merge.call(null,cljs.core.dissoc.call(null,e,new cljs.core.Keyword(null,"theme","theme",1124231483)),new cljs.core.PersistentArrayMap(null,1,[new cljs.core.Keyword(null,"class","class",1108647146),"reveal"],null)),tailrecursion.hoplon.link.call(null,new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet",new cljs.core.Keyword(null,
"href","href",1017115293),"reveal.js/css/reveal.css"),tailrecursion.hoplon.link.call(null,new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet",new cljs.core.Keyword(null,"href","href",1017115293),"reveal.js/css/theme/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)+".css",new cljs.core.Keyword(null,"id","id",1013907597),"theme"),tailrecursion.hoplon.link.call(null,new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet",new cljs.core.Keyword(null,"href","href",1017115293),"reveal.js/plugin/highlight/github.min.css"),
tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",1108647146),"slides",g))},b=function(b){var d=null;0<arguments.length&&(d=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0));return a.call(this,d)};b.cljs$lang$maxFixedArity=0;b.cljs$lang$applyTo=function(b){b=cljs.core.seq(b);return a(b)};b.cljs$core$IFn$_invoke$arity$variadic=a;return b}();hoplon.reveal.bullet=tailrecursion.hoplon.div;
hoplon.reveal.quicklist=function(){var a=function(a){return tailrecursion.hoplon.ul.call(null,tailrecursion.hoplon.loop_tpl_STAR_.call(null,a,null,function(a){a=tailrecursion.javelin.cell_map.call(null,cljs.core.identity,tailrecursion.javelin.lift.call(null,function(a){return new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[a],null)}).call(null,a));a=cljs.core.nth.call(null,a,0,null);return tailrecursion.hoplon.li.call(null,cljs.core.deref.call(null,a))}))},b=function(b){var d=
null;0<arguments.length&&(d=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0));return a.call(this,d)};b.cljs$lang$maxFixedArity=0;b.cljs$lang$applyTo=function(b){b=cljs.core.seq(b);return a(b)};b.cljs$core$IFn$_invoke$arity$variadic=a;return b}();
hoplon.reveal.notes=function(){var a=function(a){var b=tailrecursion.hoplon.parse_args.call(null,a);a=cljs.core.nth.call(null,b,0,null);b=cljs.core.nth.call(null,b,1,null);return tailrecursion.hoplon.aside.call(null,cljs.core.merge.call(null,a,new cljs.core.PersistentArrayMap(null,1,[new cljs.core.Keyword(null,"class","class",1108647146),"notes"],null)),b)},b=function(b){var d=null;0<arguments.length&&(d=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0));return a.call(this,d)};b.cljs$lang$maxFixedArity=
0;b.cljs$lang$applyTo=function(b){b=cljs.core.seq(b);return a(b)};b.cljs$core$IFn$_invoke$arity$variadic=a;return b}();
hoplon.reveal.highlight=function(){var a=function(a){var b=tailrecursion.hoplon.parse_args.call(null,a);a=cljs.core.nth.call(null,b,0,null);b=cljs.core.nth.call(null,b,1,null);return tailrecursion.hoplon.pre.call(null,tailrecursion.hoplon.code.call(null,a,b))},b=function(b){var d=null;0<arguments.length&&(d=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0));return a.call(this,d)};b.cljs$lang$maxFixedArity=0;b.cljs$lang$applyTo=function(b){b=cljs.core.seq(b);return a(b)};b.cljs$core$IFn$_invoke$arity$variadic=
a;return b}();
hoplon.reveal.hlclj=function(){var a=function(a){var b=tailrecursion.hoplon.parse_args.call(null,a),e=cljs.core.nth.call(null,b,0,null);a=cljs.core.nth.call(null,b,1,null);b=cljs.core.merge_with.call(null,function(a,b,c){return function(a,b){return""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)}}(b,e,a),e,new cljs.core.PersistentArrayMap(null,1,[new cljs.core.Keyword(null,"class","class",1108647146),"clojure"],null));return hoplon.reveal.highlight.call(null,b,
a)},b=function(b){var d=null;0<arguments.length&&(d=cljs.core.array_seq(Array.prototype.slice.call(arguments,0),0));return a.call(this,d)};b.cljs$lang$maxFixedArity=0;b.cljs$lang$applyTo=function(b){b=cljs.core.seq(b);return a(b)};b.cljs$core$IFn$_invoke$arity$variadic=a;return b}();var simplicity_deck={sample_code:{}};simplicity_deck.sample_code.show_vectors=function(){return hoplon.reveal.hlclj.call(null,"[1 2 3 4 5 6 7 8 9 10] \n[]")};simplicity_deck.sample_code.show_more_vectors=function(){return hoplon.reveal.hlclj.call(null,new cljs.core.Keyword(null,"class","class",1108647146),"two-cols","(vector? [3 6 9])\n;\x3d\x3e true\n\n(associative? [3 6 9])\n;\x3d\x3e true\n\n(sequential? [3 6 9])\n;\x3d\x3e true\n\n(vector 3 6 9)\n;\x3d\x3e [3 6 9]\n\n(conj [3 6] 9)\n;\x3d\x3e [3 6 9]\n\n(count [3 6 9])\n;\x3d\x3e 3\n\n(nth [3 6 9] 1)\n;\x3d\x3e 6 \n\n(first [3 6 9])\n;\x3d\x3e 3")};
simplicity_deck.sample_code.show_lists=function(){return hoplon.reveal.hlclj.call(null,"(1 2 3 4 5 6 7 8 9 10) \n()")};simplicity_deck.sample_code.show_more_lists=function(){return hoplon.reveal.hlclj.call(null,new cljs.core.Keyword(null,"class","class",1108647146),"two-cols","(list? (list 1 2 3))\n;\x3d\x3e true\n\n(sequential? (list 1 2 3))\n;\x3d\x3e true\n\n(associative? (list 1 2 3))\n;\x3d\x3e false\n\n(list 1 2 3)\n;\x3d\x3e (1 2 3)\n\n(cons 3 (list 1 2))\n;\x3d\x3e (3 1 2)\n\n(conj (list 1 2) 3)\n;\x3d\x3e (3 1 2)\n\n(count (list 1 2 3))\n;\x3d\x3e 3\n\n(first (list 1 2 3))\n;\x3d\x3e 1\n\n(rest (list 1 2 3))\n;\x3d\x3e (2 3)")};
simplicity_deck.sample_code.show_maps=function(){return hoplon.reveal.hlclj.call(null,'{:first-name "Eleanor"\n :last-name "Peacock"}\n{}')};simplicity_deck.sample_code.show_more_maps=function(){return hoplon.reveal.hlclj.call(null,'(map? {:first "Eleanor" :last "Peacock"})\n;\x3d\x3e true\n\n(get {:first "Eleanor" :last "Peacock"} :first)\n;\x3d\x3e "Eleanor"\n\n(get {:first "Eleanor"} :last :MISS)\n;\x3d\x3e :MISS\n\n(assoc {:first "Eleanor"} :last "Peacock")\n;\x3d\x3e {:first "Eleanor", :last "Peacock"}\n\n(dissoc {:first "Eleanor" :last "Peacock"} :last)\n;\x3d\x3e {:first "Eleanor"}\n\n(merge {:first "Eleanor"} {:last "Peacock"})\n;\x3d\x3e {:first "Eleanor", :last "Peacock"}\n\n(count {:first "Eleanor" :last "Peacock"})\n;\x3d\x3e 2\n\n(keys {:first "Eleanor" :last "Peacock"})\n;\x3d\x3e (:first :last)\n\n(vals {:first "Eleanor" :last "Peacock"})\n;\x3d\x3e ("Eleanor" "Peacock")\n\n(associative? {:first "Eleanor" :last "Peacock"})\n;\x3d\x3e true\n\n(sequential? {:first "Eleanor" :last "Peacock"})\n;\x3d\x3e false')};
simplicity_deck.sample_code.maps_as_functions=function(){return hoplon.reveal.hlclj.call(null,"(:a {:a 1})\n;\x3d\x3e 1\n(:b {:a 1})\n;\x3d\x3e nil\n(:b {:a 1} :MISS)\n;\x3d\x3e :MISS")};simplicity_deck.sample_code.show_sets=function(){return hoplon.reveal.hlclj.call(null,'#{"Library" "Billiard Room" "Conservatory"}\n#{}')};simplicity_deck.sample_code.show_more_sets=function(){return hoplon.reveal.hlclj.call(null,new cljs.core.Keyword(null,"class","class",1108647146),"two-cols","(set? #{1 2})\n;\x3d\x3e true\n\n(sequential? #{1 2}) \n;\x3d\x3e false \n\n(associative?#{1 2}) \n;\x3d\x3e false\n\n(set [1 2 3])\n;\x3d\x3e #{1 2 3}\n\n(conj #{1 2} 3)\n;\x3d\x3e #{1 2 3}\n\n(count #{1 2 3})\n;\x3d\x3e 3\n\n(disj #{1 2 3} 3) \n;\x3d\x3e #{1 2} \n\n(contains?#{1 2} 1) \n;\x3d\x3e true\n\n(:a #{:a :b})\n;\x3d\x3e :a")};
simplicity_deck.sample_code.infinite_seq=function(){return hoplon.reveal.hlclj.call(null,"(def integers (range))\n(take 10 integers)\n; \x3d\x3e (0 1 2 3 4 5 6 7 8 9)\n\n(def gregory-leibniz\n  (map first\n       (iterate\n        (fn [[pi div]]\n          [(if (\x3d 1 (mod div 4))\n             (+ pi (/ 4 div))\n             (- pi (/ 4 div)))\n           (+ div 2)]) [0.0 1])))\n(first (drop 100 gregory-leibniz))\n; \x3d\x3e ???")};
simplicity_deck.sample_code.call_a_function=function(){return hoplon.reveal.hlclj.call(null,'(println "Hello, friends!")\n(+ 1 2)\n(first (1 2 3))')};simplicity_deck.sample_code.use_let=function(){return hoplon.reveal.hlclj.call(null,'(let [x 4]\n  (* x 3))\n;;\x3d\x3e 12\n\n(let [x 1\n      y 2]\n  (println x " + " y " \x3d " (+ x y)))')};simplicity_deck.sample_code.define_with_defn=function(){return hoplon.reveal.hlclj.call(null,"(def triple \n  (fn \n    [x]\n    (* x 3)))\n\n(defn triple\n  [x]\n  (* x 3))")};
simplicity_deck.sample_code.show_map=function(){return hoplon.reveal.hlclj.call(null,"(map inc (range 1 10))    \n;;\x3d\x3e (2 3 4 5 6 7 8 9 10)")};simplicity_deck.sample_code.show_reduce=function(){return hoplon.reveal.hlclj.call(null,"(reduce + (range 1 10))\n;;\x3d\x3e 45")};simplicity_deck.sample_code.show_reduce_max=function(){return hoplon.reveal.hlclj.call(null,"(defn my-max\n  [coll]\n  (reduce (fn [current proposed]\n            (if (\x3e proposed current)\n              proposed\n              current)) coll))")};
simplicity_deck.sample_code.show_filter=function(){return hoplon.reveal.hlclj.call(null,'(def game-pieces\n  [{:color "red" :type "die" :sides 6}\n   {:color "blue" :type "meeple"}\n   {:color "white" :type "die" :sides 8}])\n\n(def dice (filter #(\x3d (:type %) "die") game-pieces))\n;\x3d\x3e ({:color "red", :type "die", :sides 6}\n;    {:color "white", :type "die", :sides 8})')};simplicity_deck.sample_code.show_map_with_side_effect=function(){return hoplon.reveal.hlclj.call(null,"(def squares (map (fn [x] (println x) (* x x)) (range 1 100)))\n(first squares)\n;; ...prints out 1 through 32...\n;\x3d\x3e 1")};
simplicity_deck.sample_code.show_cond=function(){return hoplon.reveal.hlclj.call(null,'(let [min-age 12]\n  (cond\n    (\x3e\x3d min-age 18) "Adult game"\n    (\x3e\x3d min-age 8) "Family game"\n    (\x3e\x3d min-age 3) "Children\'s game"\n    :else "Toy, not a game"))\n;\x3d\x3e "Family game"')};simplicity_deck.sample_code.truthiness=function(){return hoplon.reveal.hlclj.call(null,"(true? true)\n;\x3d\x3e true\n\n(false? false)\n;\x3d\x3e true\n\n(nil? nil)\n;\x3d\x3e true\n\n(true? 3)\n;\x3d\x3e false\n\n(false? nil)\n;\x3d\x3e false\n\n(true? (\x3d 1 1))\n;\x3d\x3e true")};
simplicity_deck.sample_code.show_if=function(){return hoplon.reveal.hlclj.call(null,'(if (\x3e 3 1)\n    "3 is greater than 1"\n    "3 is not greater than 1")\n;\x3d\x3e "3 is greater than 1"')};simplicity_deck.sample_code.show_loop=function(){return hoplon.reveal.hlclj.call(null,"(loop [x 21]\n  (when (\x3e x 1)\n    (println x)\n    (recur (- x 3))))")};simplicity_deck.sample_code.show_doseq=function(){return hoplon.reveal.hlclj.call(null,"(doseq [x [1 2 3]\n        y [1 2 3]]\n  (println (* x y)))")};
simplicity_deck.sample_code.clue_model=function(){return hoplon.reveal.hlclj.call(null,'{:name "Clue"\n :min-num-players   3\n :max-num-players   6\n :min-age           8\n :subdomain         "Family Games"\n :categories        ["Bluffing" "Deduction" "Murder/Mystery"]\n}')};simplicity_deck.sample_code.monopoly_model=function(){return hoplon.reveal.hlclj.call(null,'{:name "Monopoly"\n :min-num-players   2\n :max-num-players   8 \n :min-age           8\n :subdomain         "Family Games"\n :categories        ["Economic" "Negotiation"]\n}')};
simplicity_deck.sample_code.candy_land_model=function(){return hoplon.reveal.hlclj.call(null,'{:name "Candy Land"\n :min-num-players   2 \n :max-num-players   4 \n :min-age           3 \n :subdomain         "Children\'s Games"\n :categories        ["Children\'s Game" "Racing"]\n}')};simplicity_deck.sample_code.catan_model=function(){return hoplon.reveal.hlclj.call(null,'{:name "The Settlers of Catan"\n :min-num-players   3 \n :max-num-players   4 \n :min-age           10 \n :subdomain         "Strategy Games"\n :categories        ["Civilization" "Negotiation"]\n}')};
simplicity_deck.sample_code.diplomacy_model=function(){return hoplon.reveal.hlclj.call(null,'{:name "Diplomacy"\n :min-num-players   2 \n :max-num-players   7 \n :min-age           12 \n :subdomain         "Strategy Games"\n :categories        ["Bluffing" "Negotiation" "Political" "Post-Napoleonic"]\n}')};simplicity_deck.sample_code.board_games_model=function(){return hoplon.reveal.hlclj.call(null,'(def clue {:name "Clue" ...})\n(def monopoly {:name "Monopoly" ...})\n;; etc\n\n(def board-games #{clue monopoly candy-land apples-to-apples\n                   settlers-of-catan dominion netrunner risk})\n \n;; and, oh, so many more')};
simplicity_deck.sample_code.player_model=function(){return hoplon.reveal.hlclj.call(null,'(def dorian \n  {:first           "Dorian"\n   :last            "Hayes"\n   :age             12\n   :fav-categories  ["Fantasy" "Humor"]\n   :type            "Player"})')};simplicity_deck.sample_code.more_models=function(){return hoplon.reveal.hlclj.call(null,'(def brian\n {:first        "Brian"\n  :last         "Hunt"\n  :age          40\n  :type         "DungeonMaster"\n })\n\n(def keith\n {:first        "Keith"\n  :last         "Hayes"\n  :age          42\n  :type         "Host"\n  })')};
simplicity_deck.sample_code.access_model=function(){return hoplon.reveal.hlclj.call(null,"(get brian :age)\n(:age brian)\n\n(def people '(dorian brian keith))\n(map :age people)\n\n(keys people)\n(vals people)")};simplicity_deck.sample_code.player_record=function(){return hoplon.reveal.hlclj.call(null,'(defrecord Player [first last age])\n\n(def dorian \n  (-\x3e Player "Dorian" "Hayes" 12))\n\n(class dorian)\n;\x3d\x3e user.Player')};
simplicity_deck.sample_code.ref_example=function(){return hoplon.reveal.hlclj.call(null,'(def bank (ref 0))\n(def bank-props (ref #{"Baltic" "Park Place" "Boardwalk"}))\n(def player (ref [{:money 1500\n                   :props #{}}]))\n@bank\n;\x3d\x3e 0\n@bank-props\n;\x3d\x3e #{"Baltic" "Boardwalk" "Park Place"}\n@player\n;\x3d\x3e [{:money 1500, :props #{}}]\n \n(defn buy-property\n  [prop-name cost player-num]\n  (dosync \n    (alter bank + cost)\n    (alter player update-in [player-num :money] - cost)\n    (alter bank-props disj prop-name)\n    (alter player update-in [player-num :props] conj prop-name)))\n\n(buy-property "Baltic" 200 0)\n\n@bank\n;\x3d\x3e 200\n@bank-props\n;\x3d\x3e #{"Boardwalk" "Park Place"}\n@player\n;\x3d\x3e [{:money 1300, :props #{"Baltic"}}]')};
simplicity_deck.sample_code.atom_example=function(){return hoplon.reveal.hlclj.call(null,"(def player1 (atom {:brick 0 :lumber 1 :wool 1 :grain 0 :ore 0}))\n(def player2 (atom {:brick 1 :lumber 0 :wool 1 :grain 0 :ore 0}))\n(def player3 (atom {:brick 1 :lumber 0 :wool 0 :grain 2 :ore 0}))\n\n(swap! player1 update-in [:lumber] inc)\n(swap! player2 update-in [:grain] + 2)\n(swap! player3 update-in [:grain] inc)\n\n@player1\n;\x3d\x3e {:brick 0, :lumber 2, :wool 1, :grain 0, :ore 0}\n@player2\n;\x3d\x3e {:brick 1, :lumber 0, :wool 1, :grain 2, :ore 0}\n@player3\n;\x3d\x3e {:brick 1, :lumber 0, :wool 0, :grain 3, :ore 0}")};
simplicity_deck.sample_code.agent_example=function(){return hoplon.reveal.hlclj.call(null,'(def p1 (agent []))\n(def p2 (agent []))\n\n@p1\n;\x3d\x3e []\n@p2\n;\x3d\x3e []\n\n(send p1 conj [:A "Hol-Bel"] [:A "Kie-Hol"] [:A "Smy-Arm"] [:A "Bud-Ser"] \n      [:A "Tun-Wes"] [:F "Nap-Tys"] [:F "Por-Spa"])\n(send p2 conj [:F "Nwy-StP"] [:F "Nth-Nwy"] [:A "Edi-Nth"] [:A "Ruh-Bur"] \n      [:A "Bul-Rum"] [:A "Con-Bul"] [:F "Tri-Bud"] [:A "Wes-Mid"] [:F "TyS-Lyo"])\n\n@p1\n;\x3d\x3e [[:A "Hol-Bel"] [:A "Kie-Hol"] [:A "Smy-Arm"] [:A "Bud-Ser"] \n;\x3d\x3e [:A "Tun-Wes"] [:F "Nap-Tys"] [:F "Por-Spa"]]\n@p2\n;\x3d\x3e [[:F "Nwy-StP"] [:F "Nth-Nwy"] [:A "Edi-Nth"] [:A "Ruh-Bur"] \n;\x3d\x3e [:A "Bul-Rum"] [:A "Con-Bul"] [:F "Tri-Bud"] [:A "Wes-Mid"] [:F "TyS-Lyo"]]')};
simplicity_deck.sample_code.var_example=function(){return hoplon.reveal.hlclj.call(null,"(ns games)\n\n(def clue { ... })\n;\x3d\x3e #'games/clue\n\n(def monopoly { ... })\n;\x3d\x3e #'games/monopoly\n\n(def board-games #{ ... })\n;\x3d\x3e #'games/board-games\n\n(defn suggest-game [games min-age] ... )\n;\x3d\x3e #'games/suggest-game")};simplicity_deck.sample_code.show_namespaces=function(){return hoplon.reveal.hlclj.call(null,"(ns foo.bar.baz-quuz)")};
simplicity_deck.sample_code.show_require=function(){return hoplon.reveal.hlclj.call(null,"(ns my-ns\n  (:require clojure.set))\n\n(clojure.set/union #{1 2} #{2 3 4}) \n;;\x3d\x3e #{1 2 3 4}\n\n(ns my-ns\n  (:require clojure.set :as set))\n\n(set/union #{1 2} #{2 3 4}) \n;;\x3d\x3e #{1 2 3 4}")};simplicity_deck.sample_code.monopoly_maps=function(){return hoplon.reveal.hlclj.call(null,'(def park-place {:name "Park Place" :base-rent 35\n                 :type :property :color-count 2})\n(def electric-company {:name "Electric Company" :type :utility})\n(def short-line {:name "Short Line" :type :railroad})')};
simplicity_deck.sample_code.monopoly_rent_cond=function(){return hoplon.reveal.hlclj.call(null,"(defn roll-dice []\n  (+ 2 (rand-int 6) (rand-int 6)))\n\n(defn calculate-rent\n  ([location num-like-locations]\n     (calculate-rent location num-like-locations (roll-dice)))\n  ([location num-like-locations die-roll]\n     (let [type (:type location)]\n       (cond\n        (\x3d type :property)\n        (if (\x3d (inc num-like-locations) (:color-count location))\n          (* (:base-rent location) 2)\n          (:base-rent location))\n\n        (\x3d type :utility)\n        (if (zero? num-like-locations)\n          (* 4 die-roll)\n          (* 10 die-roll))\n\n        (\x3d type :railroad)\n        (* 25 (Math/pow 2 num-like-locations))))))")};
simplicity_deck.sample_code.monopoly_rent_multimethods=function(){return hoplon.reveal.hlclj.call(null,"(defmulti calculate-rent\n  (fn [location \x26 _]) (:type location))\n\n(defmethod calculate-rent :property\n  [location num-like-locations _]\n  (if (\x3d (inc num-like-locations) (:color-count location))\n    (* base-rent 2)\n    base-rent))\n\n(defmethod calculate-rent :utility\n  [_ num-like-locations die-roll]\n  (if (zero? num-like-locations)\n    (* 4 die-roll)\n    (* 10 die-roll)))\n\n(defmethod calculate-rent :railroad\n  [_ num-like-locations _]\n  (* 25 (Math/pow 2 num-like-locations)))\n\n(defmethod calculate-rent :default\n  [\x26 _]\n  0)")};
simplicity_deck.sample_code.rentable_protocol=function(){return hoplon.reveal.hlclj.call(null,'(defprotocol Rentable\n  (calculate-rent [this num-like-locations] [this num-like-locations die-roll]\n    "Calculates the rent on this location.")\n  (readable-rent [this]))')};simplicity_deck.sample_code.rentable_property=function(){return hoplon.reveal.hlclj.call(null,'(defrecord Property [name base-rent num-in-group]\n  Rentable\n  (calculate-rent [_ num-like-locations]\n    (if (\x3d (inc num-like-locations) num-in-group)\n      (* base-rent 2)\n      base-rent))\n  (calculate-rent [property num-like-locations _]\n    (calculate-rent property num-like-locations))\n  (readable-rent [_]\n    (str "$" base-rent ", $" (* 2 base-rent) " if monopoly")))')};
simplicity_deck.sample_code.rentable_utility=function(){return hoplon.reveal.hlclj.call(null,'(defrecord Utility [name]\n  Rentable\n  (calculate-rent [utility num-like-locations]\n    (calculate-rent utility num-like-locations (+ (rand-int 6) (rand-int 6) 2)))\n  (calculate-rent [_ num-like-locations die-roll]\n    (if (zero? num-like-locations)\n      (* 4 die-roll)\n      (* 10 die-roll)))\n  (readable-rent [_]\n    (str "$4 * dice roll, $10 * dice roll if you own both")))')};
simplicity_deck.sample_code.rentable_railroad=function(){return hoplon.reveal.hlclj.call(null,'(defrecord Railroad [name]\n  Rentable\n  (calculate-rent [_ num-like-locations]\n    (* 25\n       (Math/pow 2 num-like-locations)))\n  (calculate-rent [railroad num-like-locations _]\n    (calculate-rent railroad num-like-locations))\n  (readable-rent [_]\n    (str "$25 if you own 1, $50 if 2, $100 if 3, $200 if 4")))')};
simplicity_deck.sample_code.rentable_locations=function(){return hoplon.reveal.hlclj.call(null,'(def park-place (-\x3eProperty "Park Place" 35 2))\n(def electric-company (-\x3eUtility "Electric Company"))\n(def short-line (-\x3eRailroad "Short Line"))\n\n(calculate-rent electric-company 0 7)\n;\x3d\x3e 28\n\n(readable-rent park-place)\n;\x3d\x3e "$35, $70 if monopoly"')};simplicity_deck.collections={};
simplicity_deck.collections.slides=function(){return hoplon.reveal.chapter.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Collections",hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Simple Collections",tailrecursion.hoplon.ul.call(null,tailrecursion.hoplon.li.call(null,"Immutability"),tailrecursion.hoplon.li.call(null,"Heterogeneous"),tailrecursion.hoplon.li.call(null,"Persistent"))),hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,
"title","title",1124275658),"Collection types in Clojure",tailrecursion.hoplon.ul.call(null,tailrecursion.hoplon.li.call(null,"Vectors"),tailrecursion.hoplon.li.call(null,"Lists"),tailrecursion.hoplon.li.call(null,"Maps"),tailrecursion.hoplon.li.call(null,"Sets")),hoplon.reveal.notes.call(null,"Just 4 main collection types cover all of your needs.")),hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Vectors",tailrecursion.hoplon.ul.call(null,tailrecursion.hoplon.li.call(null,
"Expandable, indexed list"),tailrecursion.hoplon.li.call(null,"Fast insert and indexed lookup operations"),tailrecursion.hoplon.li.call(null,"Syntax:")),simplicity_deck.sample_code.show_vectors.call(null),hoplon.reveal.notes.call(null,"AKA arrays.")),hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Vectors",simplicity_deck.sample_code.show_more_vectors.call(null),hoplon.reveal.notes.call(null,"Conj does not change the vector - it is immutable.","Predicate functions (asscociative? etc) will start to look familiar")),
hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Lists",tailrecursion.hoplon.ul.call(null,tailrecursion.hoplon.li.call(null,"Linked list"),tailrecursion.hoplon.li.call(null,"Fast insert and remove (at end) operations"),tailrecursion.hoplon.li.call(null,"Syntax:")),simplicity_deck.sample_code.show_lists.call(null),hoplon.reveal.notes.call(null,"Linked list literals are not typical, so you probably don't have one in your language","Lisp does, though.","Vectors much more commonly used in Clojure, unlike in Lisps where list is one of the basic building blocks.")),
hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Lists",simplicity_deck.sample_code.show_more_lists.call(null),hoplon.reveal.notes.call(null,"Compare conj to conj with vectors.","Note repeating predictate functions.")),hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Maps",tailrecursion.hoplon.ul.call(null,tailrecursion.hoplon.li.call(null,"Associative key-value map"),tailrecursion.hoplon.li.call(null,"Fast insert and find operations"),
tailrecursion.hoplon.li.call(null,"Syntax:")),simplicity_deck.sample_code.show_maps.call(null),hoplon.reveal.notes.call(null,"AKA hashes, dictionaries, associative arrays.","Useful to have keywords as keys, although not necessary.")),hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Maps",simplicity_deck.sample_code.show_more_maps.call(null),hoplon.reveal.notes.call(null,"Note the predicate functions.")),hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,
"title","title",1124275658),"Maps",simplicity_deck.sample_code.maps_as_functions.call(null),hoplon.reveal.notes.call(null,"Keywords are good as map keys because you can use them as a function with a map argument to access the value.")),hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Sets",tailrecursion.hoplon.ul.call(null,tailrecursion.hoplon.li.call(null,"No duplicates"),tailrecursion.hoplon.li.call(null,"Fast insert and contains operations"),tailrecursion.hoplon.li.call(null,
"Syntax:")),simplicity_deck.sample_code.show_sets.call(null)),hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Sets",simplicity_deck.sample_code.show_more_sets.call(null),hoplon.reveal.notes.call(null,"Again, note the familiar predicate functions.")),hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Who killed Mr. Boddy?",tailrecursion.hoplon.p.call(null,"Choose and create the proper collection of suspects from the Clue board game. Then use nth to determine who goes third."),
tailrecursion.hoplon.p.call(null,"Bonus: Invite the third player to play by their first name.")),hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Sequences",tailrecursion.hoplon.ul.call(null,tailrecursion.hoplon.li.call(null,"A logical list abstraction"),tailrecursion.hoplon.li.call(null,"Applies to all collections"),tailrecursion.hoplon.li.call(null,"Immutable"),tailrecursion.hoplon.li.call(null,"Often lazy"),tailrecursion.hoplon.li.call(null,tailrecursion.hoplon.code.call(null,
"first, rest")),tailrecursion.hoplon.li.call(null,tailrecursion.hoplon.code.call(null,"seq"))),hoplon.reveal.notes.call(null,"Remember those functions that were called on each collection?","Those are from an abstraction called sequence, or seq in Clojure.","The sequence abstraction provides a common interface to all of the collection types.")))};simplicity_deck.flow={};
simplicity_deck.flow.slides=function(){return hoplon.reveal.chapter.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Flow Control",hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Truthiness",simplicity_deck.sample_code.truthiness.call(null),hoplon.reveal.notes.call(null,"Everything is true unless it's nil or false")),hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"cond",simplicity_deck.sample_code.show_cond.call(null)),hoplon.reveal.slide.call(null,
new cljs.core.Keyword(null,"title","title",1124275658),"if",simplicity_deck.sample_code.show_if.call(null)),hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"loop",simplicity_deck.sample_code.show_loop.call(null)),hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"doseq",simplicity_deck.sample_code.show_doseq.call(null),hoplon.reveal.notes.call(null,"For side effects")))};simplicity_deck.overview={};
simplicity_deck.overview.slides=function(){return hoplon.reveal.chapter.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Overview",hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Agenda",tailrecursion.hoplon.p.call(null,tailrecursion.hoplon.b.call(null,"9:00 am")),tailrecursion.hoplon.ul.call(null,tailrecursion.hoplon.li.call(null,"Clojure Overview"),tailrecursion.hoplon.li.call(null,"Collections"),tailrecursion.hoplon.li.call(null,"Sequences"),
tailrecursion.hoplon.li.call(null,"Modeling")),tailrecursion.hoplon.p.call(null,tailrecursion.hoplon.b.call(null,"10:30 am")),tailrecursion.hoplon.p.call(null,"Break"),tailrecursion.hoplon.p.call(null,tailrecursion.hoplon.b.call(null,"11:00 am")),tailrecursion.hoplon.ul.call(null,tailrecursion.hoplon.li.call(null,"Functions"),tailrecursion.hoplon.li.call(null,"Flow Control"),tailrecursion.hoplon.li.call(null,"Polymorphism"),tailrecursion.hoplon.li.call(null,"State"),tailrecursion.hoplon.li.call(null,
"Clojure Libraries"))),hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Why Clojure?",tailrecursion.hoplon.ul.call(null,tailrecursion.hoplon.li.call(null,"Simple"),tailrecursion.hoplon.li.call(null,"Immutable"),tailrecursion.hoplon.li.call(null,"Robust"))),hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Light Table Walkthrough"),hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Syntax - Literals",
tailrecursion.hoplon.ul.call(null,tailrecursion.hoplon.li.call(null,tailrecursion.hoplon.code.call(null,"1 2.7 22/7")),tailrecursion.hoplon.li.call(null,tailrecursion.hoplon.code.call(null,"false true")),tailrecursion.hoplon.li.call(null,tailrecursion.hoplon.code.call(null,"\\z")),tailrecursion.hoplon.li.call(null,tailrecursion.hoplon.code.call(null,'"Monopoly"')),tailrecursion.hoplon.li.call(null,tailrecursion.hoplon.code.call(null,"nil")),tailrecursion.hoplon.li.call(null,tailrecursion.hoplon.code.call(null,
"board")),tailrecursion.hoplon.li.call(null,tailrecursion.hoplon.code.call(null,":player1")),tailrecursion.hoplon.li.call(null,tailrecursion.hoplon.code.call(null,'#"[0-9+]"')))),hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Calling Functions",simplicity_deck.sample_code.call_a_function.call(null)))};simplicity_deck.polymorphism={};
simplicity_deck.polymorphism.slides=function(){return hoplon.reveal.chapter.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Polymorphism",hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Using Control Flow"),hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Monopoly locations",simplicity_deck.sample_code.monopoly_maps.call(null)),hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),
"Calculating Monopoly rent",simplicity_deck.sample_code.monopoly_rent_cond.call(null)),hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Using multimethods",simplicity_deck.sample_code.monopoly_rent_multimethods.call(null)),hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Protocols and records",tailrecursion.hoplon.ul.call(null,tailrecursion.hoplon.li.call(null,"Records are associative, like maps"),tailrecursion.hoplon.li.call(null,
"They actually create Java classes"),tailrecursion.hoplon.li.call(null,"Protocols are similar to interfaces"),tailrecursion.hoplon.li.call(null,"And create Java interfaces"),tailrecursion.hoplon.li.call(null,"But can be applied to any current or future type"))),hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Rentable protocol",simplicity_deck.sample_code.rentable_protocol.call(null)),hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),
"Property",simplicity_deck.sample_code.rentable_property.call(null)),hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Utility",simplicity_deck.sample_code.rentable_utility.call(null)),hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Railroad",simplicity_deck.sample_code.rentable_railroad.call(null)),hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Some locations",simplicity_deck.sample_code.rentable_locations.call(null)),
hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Chess pieces",tailrecursion.hoplon.p.call(null,"Make a protocol Piece that has two methods: ",tailrecursion.hoplon.code.call(null,"possible-moves")," and ",tailrecursion.hoplon.code.call(null,"can-move"),"?"),tailrecursion.hoplon.p.call(null,"Then make records for Kings and Knights and implement the Piece protocol."),tailrecursion.hoplon.p.call(null,"Kings and Knights should know their current location."),tailrecursion.hoplon.p.call(null,
"Chess locations are on a board with one axis being a-h and the other being 1-8.")))};simplicity_deck.examples={};
simplicity_deck.examples.slides=function(){return hoplon.reveal.chapter.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Simple Examples",hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"core.matrix",tailrecursion.hoplon.ul.call(null,tailrecursion.hoplon.li.call(null,"Want logic programming?  ",tailrecursion.hoplon.b.call(null,"core.logic")),tailrecursion.hoplon.li.call(null,"Want CSP?  ",tailrecursion.hoplon.b.call(null,"core.async")),tailrecursion.hoplon.li.call(null,
"Want numerical computing?  ",tailrecursion.hoplon.b.call(null,"core.matrix")),tailrecursion.hoplon.li.call(null,"Source Code: ",tailrecursion.hoplon.a.call(null,new cljs.core.Keyword(null,"href","href",1017115293),"https://github.com/mikera/core.matrix/blob/develop/src/main/clojure/clojure/core/matrix.clj","https://github.com/mikera/core.matrix")),tailrecursion.hoplon.li.call(null,"Clojure/conj 2013 talk: ",tailrecursion.hoplon.a.call(null,new cljs.core.Keyword(null,"href","href",1017115293),"https://www.youtube.com/watch?v\x3d_h9TLJtjSJo",
"https://www.youtube.com/watch?v\x3d_h9TLJtjSJo")))),hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Javelin \x26 Hoplon",tailrecursion.hoplon.ul.call(null,tailrecursion.hoplon.li.call(null,"Reactive programming in Clojure"),tailrecursion.hoplon.li.call(null,"Treat your data like a spreadsheet"),tailrecursion.hoplon.li.call(null,"Web data binding"),tailrecursion.hoplon.li.call(null,"Source Code: ",tailrecursion.hoplon.a.call(null,new cljs.core.Keyword(null,"href",
"href",1017115293),"https://github.com/tailrecursion/javelin","github.com/tailrecursion/javelin")),tailrecursion.hoplon.li.call(null,"More info: ",tailrecursion.hoplon.a.call(null,new cljs.core.Keyword(null,"href","href",1017115293),"https://hoplon.io","hoplon.io")))))};simplicity_deck.functions={};
simplicity_deck.functions.slides=function(){return hoplon.reveal.chapter.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Functions",hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Simple Functions",simplicity_deck.sample_code.call_a_function.call(null)),hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Assignment with let",simplicity_deck.sample_code.use_let.call(null)),hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,
"title","title",1124275658),"Define with defn",simplicity_deck.sample_code.define_with_defn.call(null)),hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Family Game Night",tailrecursion.hoplon.p.call(null,"Write a function that takes a board game (using the maps ","we previously used) and the age of your youngest player ","and lets you know if that game can be played by your family.")),hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),
"Higher order functions - map",simplicity_deck.sample_code.show_map.call(null)),hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Higher order functions - reduce",simplicity_deck.sample_code.show_reduce.call(null)),hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Higher order functions - implementing max with reduce",simplicity_deck.sample_code.show_reduce_max.call(null)),hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,
"title","title",1124275658),"Higher order functions - filter and function literals",simplicity_deck.sample_code.show_filter.call(null)),hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Family Game Night Redux",tailrecursion.hoplon.p.call(null,"Write a function that takes two collections: your set of board ","games and the ages of all people playing. Find all games that ","your group can play, considering both ages and the total number ","of people.")),hoplon.reveal.slide.call(null,
new cljs.core.Keyword(null,"title","title",1124275658),"Functional programming",tailrecursion.hoplon.ul.call(null,tailrecursion.hoplon.li.call(null,"Functions as primary units of computation"),tailrecursion.hoplon.li.call(null,"Avoiding state"),tailrecursion.hoplon.li.call(null,"Preferring immutability"),tailrecursion.hoplon.li.call(null,"Repeatable functions lacking side effects - ",tailrecursion.hoplon.i.call(null,"idempotent under sequential composition")))),hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,
"title","title",1124275658),"Side effects",tailrecursion.hoplon.p.call(null,"A side effect is any change in state or interaction that happens ","with the outside world during the evaluation of a function."),tailrecursion.hoplon.ul.call(null,tailrecursion.hoplon.li.call(null,"updating a global variable"),tailrecursion.hoplon.li.call(null,"input and output"))),hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"How to deal with side effects",tailrecursion.hoplon.ul.call(null,
tailrecursion.hoplon.li.call(null,"Put them at the edges of your code"),tailrecursion.hoplon.li.call(null,"Eliminate them from the majority of your functions"),tailrecursion.hoplon.li.call(null,"Use features like atoms and refs, which allow state to be updated through applying pure functions"),tailrecursion.hoplon.li.call(null,"Remember that most sequences are lazy!"))),hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Side effect in a map fn",simplicity_deck.sample_code.show_map_with_side_effect.call(null)))};simplicity_deck.sequences={};
simplicity_deck.sequences.code_table=function(a){return tailrecursion.hoplon.table.call(null,cljs.core.apply.call(null,tailrecursion.hoplon.tr,cljs.core.map.call(null,tailrecursion.hoplon.th,cljs.core.first.call(null,a))),function(){return function c(a){return new cljs.core.LazySeq(null,function(){for(;;){var e=cljs.core.seq.call(null,a);if(e){if(cljs.core.chunked_seq_QMARK_.call(null,e)){var f=cljs.core.chunk_first.call(null,e),g=cljs.core.count.call(null,f),h=cljs.core.chunk_buffer.call(null,g);
a:{for(var k=0;;)if(k<g){var l=cljs.core._nth.call(null,f,k);cljs.core.chunk_append.call(null,h,cljs.core.apply.call(null,tailrecursion.hoplon.tr,cljs.core.map.call(null,cljs.core.comp.call(null,tailrecursion.hoplon.td,tailrecursion.hoplon.code),l)));k+=1}else{f=!0;break a}f=void 0}return f?cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,h),c.call(null,cljs.core.chunk_rest.call(null,e))):cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,h),null)}h=cljs.core.first.call(null,e);return cljs.core.cons.call(null,
cljs.core.apply.call(null,tailrecursion.hoplon.tr,cljs.core.map.call(null,cljs.core.comp.call(null,tailrecursion.hoplon.td,tailrecursion.hoplon.code),h)),c.call(null,cljs.core.rest.call(null,e)))}return null}},null,null)}.call(null,cljs.core.rest.call(null,a))}())};
simplicity_deck.sequences.slides=function(){return hoplon.reveal.chapter.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Sequences",hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Simple Sequences",tailrecursion.hoplon.ul.call(null,tailrecursion.hoplon.li.call(null,"Logical list abstraction"),tailrecursion.hoplon.li.call(null,"Applies to all collections"),tailrecursion.hoplon.li.call(null,tailrecursion.hoplon.code.call(null,"first, rest")," - first and rest of the logical list"),
tailrecursion.hoplon.li.call(null,tailrecursion.hoplon.code.call(null,"seq")," - either a sequence with values, or nil"),tailrecursion.hoplon.li.call(null,"Can be lazy")),hoplon.reveal.notes.call(null,"Remember in the collections how we saw a number of the same ","functions on each collection? That is because we have a ","sequence (or seq) abstraction that gives an interface to "," all of the collection types and other types of sequences ","(e.g. strings).")),hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,
"title","title",1124275658),"first and rest",tailrecursion.hoplon.center.call(null,simplicity_deck.sequences.code_table.call(null,new cljs.core.PersistentVector(null,5,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,["list","first","rest"],null),new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,["(1 2 3)","1","(2 3)"],null),new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,
["(2 3)","2","(3)"],null),new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,["(3)","3","()"],null),new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,["()","nil","()"],null)],null))),hoplon.reveal.notes.call(null,"Two operations in lists: first and rest. If you know of Lisp, ","this will look familiar to you. You can also apply ","these to vectors, maps, and sets.")),hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),
"first and rest for all seqs",tailrecursion.hoplon.center.call(null,simplicity_deck.sequences.code_table.call(null,new cljs.core.PersistentVector(null,5,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,["seq","first","rest (seq, not list)"],null),new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,["(1 2 3)","1","(2 3)"],null),new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,
["[1 2 3]","1","(2 3)"],null),new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,["{:a 1 :b 2 :c 3}","[:a 1]","([:c 3] [:b 2])"],null),new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,["#{3 1 2}","1","(2 3)"],null)],null)))),hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"What else can be a sequence?",tailrecursion.hoplon.ul.call(null,tailrecursion.hoplon.li.call(null,"Collections"),tailrecursion.hoplon.li.call(null,
"Strings"),tailrecursion.hoplon.li.call(null,"Arrays"),tailrecursion.hoplon.li.call(null,"file-seq"),tailrecursion.hoplon.li.call(null,"line-seq"),tailrecursion.hoplon.li.call(null,"resultset-seq"),tailrecursion.hoplon.li.call(null,"xml-seq"),tailrecursion.hoplon.li.call(null,"tree-seq"),tailrecursion.hoplon.li.call(null,"re-seq"),tailrecursion.hoplon.li.call(null,"iterator-seq"),tailrecursion.hoplon.li.call(null,"enumeration-seq"),tailrecursion.hoplon.li.call(null,"... or whatever you want to make a seq")),
hoplon.reveal.notes.call(null,"Then you can use the SAME function over them.")),hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Sequence Functions",tailrecursion.hoplon.ul.call(null,tailrecursion.hoplon.li.call(null,tailrecursion.hoplon.b.call(null,"Create seq:")," seq, vals, keys, rseq, subseq, rsubseq, lazy-seq, repeatedly, iterate, repeat, range, keep, keep-indexed"),tailrecursion.hoplon.li.call(null,tailrecursion.hoplon.b.call(null,"Content tests:")," seq?, distinct?, every?, not-every?, not-any?, empty?, not-empty, some"),
tailrecursion.hoplon.li.call(null,tailrecursion.hoplon.b.call(null,"Get shorter:")," distinct, filter, remove, take-nth, for"),tailrecursion.hoplon.li.call(null,tailrecursion.hoplon.b.call(null,"Get longer:")," cons, conj, concat, lazy-cat, mapcat, cycle, interleave, interpose"),tailrecursion.hoplon.li.call(null,tailrecursion.hoplon.b.call(null,"Pull out members:")," first, ffirst, nfirst, second, nth, when-first, last, rand-nth"),tailrecursion.hoplon.li.call(null,tailrecursion.hoplon.b.call(null,
"Get changed:")," conj, concat, distinct, flatten, group- by, partition, partition-all, partition-by, split- at, split-with, filter, remove, replace, shuffle"))),hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"More Sequence Functions",tailrecursion.hoplon.ul.call(null,tailrecursion.hoplon.li.call(null,tailrecursion.hoplon.b.call(null,"Head-items:")," take, take-while, butlast, drop-last"),tailrecursion.hoplon.li.call(null,tailrecursion.hoplon.b.call(null,"Tail-items:"),
" rest, nthrest, next, fnext, nnext, drop, drop-while, take-last, nthnext"),tailrecursion.hoplon.li.call(null,tailrecursion.hoplon.b.call(null,"Rearrange:")," reverse, sort, sort-by, compare"),tailrecursion.hoplon.li.call(null,tailrecursion.hoplon.b.call(null,"Process items:")," map, pmap, map-indexed, mapcat, for, replace, seque"),tailrecursion.hoplon.li.call(null,tailrecursion.hoplon.b.call(null,"Construct collection:")," zipmap, into, reduce, reductions, set, vec, into-array, to-array-2d, frequencies"),
tailrecursion.hoplon.li.call(null,tailrecursion.hoplon.b.call(null,"Force evaluation:")," doseq, dorun, doall, realized?"))),hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Sequences: Code + Data",tailrecursion.hoplon.h2.call(null,"All of those sequences can be used with all of those functions!!")),hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Lazy sequences",tailrecursion.hoplon.p.call(null,"Sequences in Clojure are lazy, which delays evaluation until necessary."),
simplicity_deck.sample_code.infinite_seq.call(null)),hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"What do we have for game night?",tailrecursion.hoplon.p.call(null,"Your friends have brought over a bunch of games for game night. They are in three collections. Find out what the distinct games they have brought are, with no overlap."),tailrecursion.hoplon.ul.call(null,tailrecursion.hoplon.li.call(null,tailrecursion.hoplon.code.call(null,'("Clue" "Monopoly" "Catan")')),
tailrecursion.hoplon.li.call(null,tailrecursion.hoplon.code.call(null,'["Catan" "7 Wonders" "Pandemic" "Risk"]')),tailrecursion.hoplon.li.call(null,tailrecursion.hoplon.code.call(null,'#{"7 Wonders" "Robot Turtles" "Clue"}'))),tailrecursion.hoplon.p.call(null,"Bonus: Make a function that can take a collection of collections of games and return the distinct games in the collection.")))};simplicity_deck.extras={};
simplicity_deck.extras.slides=function(){return hoplon.reveal.chapter.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Extras",hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Concurrency",tailrecursion.hoplon.ul.call(null,tailrecursion.hoplon.li.call(null,"Futures"),tailrecursion.hoplon.li.call(null,"Promises"))),hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Program Organization - Leiningen",tailrecursion.hoplon.ul.call(null,
tailrecursion.hoplon.li.call(null,"Automates Clojure projects. Like Make for Clojure.",tailrecursion.hoplon.li.call(null,"Common commands",tailrecursion.hoplon.ul.call(null,tailrecursion.hoplon.li.call(null,"lein new app my-app"),tailrecursion.hoplon.li.call(null,"lein repl"),tailrecursion.hoplon.li.call(null,"lein test"),tailrecursion.hoplon.li.call(null,"lein run"),tailrecursion.hoplon.li.call(null,"lein uberjar")))))),hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),
"Program Organization - Namespaces",tailrecursion.hoplon.ul.call(null,tailrecursion.hoplon.li.call(null,tailrecursion.hoplon.code.call(null,"ns")," creates namespace and loads, aliases what you need"),tailrecursion.hoplon.li.call(null,"At top of file"),tailrecursion.hoplon.li.call(null,"Refers all of ",tailrecursion.hoplon.code.call(null,"clojure.core")),tailrecursion.hoplon.li.call(null,"Imports all of ",tailrecursion.hoplon.code.call(null,"java.lang"))),simplicity_deck.sample_code.show_namespaces.call(null)),
hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Program Organization - Namespaces",simplicity_deck.sample_code.show_require.call(null)),hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Thank you for attending!",tailrecursion.hoplon.p.call(null,"Clinton Dreisbach @cndreisbach"),tailrecursion.hoplon.p.call(null,"Bridget Hillyer @BridgetHillyer")),hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),
"References",tailrecursion.hoplon.ul.call(null,tailrecursion.hoplon.li.call(null,"Rich Hickey - Simple Made Easy: ",tailrecursion.hoplon.a.call(null,new cljs.core.Keyword(null,"href","href",1017115293),"http://www.infoq.com/presentations/Simple-Made-Easy","http://www.infoq.com/presentations/Simple-Made-Easy")),tailrecursion.hoplon.li.call(null,"Stuart Halloway - Simplicity Ain't Easy: ",tailrecursion.hoplon.a.call(null,new cljs.core.Keyword(null,"href","href",1017115293),"https://www.youtube.com/watch?v\x3dcidchWg74Y4",
"https://www.youtube.com/watch?v\x3dcidchWg74Y4")),tailrecursion.hoplon.li.call(null,'Alex Miller @puredanger - Thanks for inspiration from CodeMash "Thinking in Data" talk'),tailrecursion.hoplon.li.call(null,"Board game info from: ",tailrecursion.hoplon.a.call(null,new cljs.core.Keyword(null,"href","href",1017115293),"http://boardgamegeek.com/","http://boardgamegeek.com/")))))};simplicity_deck.model={};
simplicity_deck.model.slides=function(){return hoplon.reveal.chapter.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Modeling Data",hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Modeling Board Games",hoplon.reveal.notes.call(null,"Let's model some well-known board games. ","We won't use classes and objects. Instead we'll use collections.")),hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Clue",simplicity_deck.sample_code.clue_model.call(null),
hoplon.reveal.notes.call(null,"Map with keywords and values.\n","http://boardgamegeek.com/")),hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Monopoly",simplicity_deck.sample_code.monopoly_model.call(null)),hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Candy Land",simplicity_deck.sample_code.candy_land_model.call(null)),hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Settlers of Catan",
simplicity_deck.sample_code.catan_model.call(null)),hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Diplomacy",simplicity_deck.sample_code.diplomacy_model.call(null)),hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Board Games",simplicity_deck.sample_code.board_games_model.call(null),hoplon.reveal.notes.call(null,"Use a set to hold the board games. Why? What about ordering?\n",";; comment")),hoplon.reveal.slide.call(null,
new cljs.core.Keyword(null,"title","title",1124275658),"Board Game Modeling",tailrecursion.hoplon.p.call(null,"Create a model for your favorite board game."),tailrecursion.hoplon.p.call(null,"Define vars for each game and add to the board-games set."),tailrecursion.hoplon.p.call(null,"Bonus: Model a game player.")),hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Where is my object?",simplicity_deck.sample_code.player_model.call(null),hoplon.reveal.notes.call(null,
"Just add :type")),hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Who else likes games?",simplicity_deck.sample_code.more_models.call(null)),hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Access",simplicity_deck.sample_code.access_model.call(null),hoplon.reveal.notes.call(null,"Can get or use keyword as function to access fields. In ","object-oriented world, need interfaces for that.")),hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,
"title","title",1124275658),"Records",simplicity_deck.sample_code.player_record.call(null)))};simplicity_deck.state={};
simplicity_deck.state.slides=function(){return hoplon.reveal.chapter.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"State",hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Simplifying State",tailrecursion.hoplon.ul.call(null,tailrecursion.hoplon.li.call(null,"There is state in Clojure."),tailrecursion.hoplon.li.call(null,"It is just managed in a sane way"))),hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),
"Clojure Reference Types",tailrecursion.hoplon.ul.call(null,tailrecursion.hoplon.li.call(null,"Refs - coordinated, synchronous"),tailrecursion.hoplon.li.call(null,"Atoms - uncoordinated, synchronous"),tailrecursion.hoplon.li.call(null,"Agents - asynchronous"),tailrecursion.hoplon.li.call(null,"Vars - named and interned in a namespace"))),hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Monopoly Refs",simplicity_deck.sample_code.ref_example.call(null)),hoplon.reveal.slide.call(null,
new cljs.core.Keyword(null,"title","title",1124275658),"Atoms of Catan",simplicity_deck.sample_code.atom_example.call(null)),hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Diplomacy Agents",simplicity_deck.sample_code.agent_example.call(null)),hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title","title",1124275658),"Board Game Vars",simplicity_deck.sample_code.var_example.call(null)),hoplon.reveal.slide.call(null,new cljs.core.Keyword(null,"title",
"title",1124275658),"Shall we play a game?",tailrecursion.hoplon.p.call(null,"Demonstrate the gameplay of Go Fish using the Clojure ref ","reference type."),tailrecursion.hoplon.p.call(null,"BONUS: Implement the gameplay of your favorite game ","using the appropriate Clojure reference type.")))};tailrecursion.hoplon.app_pages={};tailrecursion.hoplon.app_pages._index_DOT_html={};
tailrecursion.hoplon.app_pages._index_DOT_html.hoploninit=function(){tailrecursion.hoplon.reload.reload_all.call(null);tailrecursion.hoplon.html.call(null,tailrecursion.hoplon.html_head.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null,4,5,cljs.core.PersistentVector.EMPTY_NODE,[tailrecursion.hoplon.link.call(null,new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet",new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,
"href","href",1017115293),window._hoplon_main_css),tailrecursion.hoplon.link.call(null,new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet",new cljs.core.Keyword(null,"href","href",1017115293),"http://fonts.googleapis.com/css?family\x3dRoboto:400,700,900,700italic,900italic,400italic"),tailrecursion.hoplon.link.call(null,new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet",new cljs.core.Keyword(null,"href","href",1017115293),"http://fonts.googleapis.com/css?family\x3dInconsolata:400,700"),
tailrecursion.hoplon.link.call(null,new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet",new cljs.core.Keyword(null,"href","href",1017115293),"style.css")],null)),tailrecursion.hoplon.html_body.call(null,cljs.core.PersistentArrayMap.EMPTY,function(){var a=hoplon.reveal.bullet.call(null,"Bridget Hillyer"),b=hoplon.reveal.bullet.call(null,"Clinton N. Dreisbach"),c=hoplon.reveal.bullet.call(null,"OSCON 2014"),a=hoplon.reveal.intro.call(null,new cljs.core.Keyword(null,"title","title",1124275658),
"The Simplicity of Clojure",new cljs.core.Keyword(null,"data-state","data-state",1202115616),"title-slide",a,b,c),b=simplicity_deck.overview.slides.call(null),c=simplicity_deck.collections.slides.call(null),d=simplicity_deck.sequences.slides.call(null),e=simplicity_deck.model.slides.call(null),f=simplicity_deck.functions.slides.call(null),g=simplicity_deck.flow.slides.call(null),h=simplicity_deck.polymorphism.slides.call(null),k=simplicity_deck.state.slides.call(null),l=simplicity_deck.examples.slides.call(null),
m=simplicity_deck.extras.slides.call(null);return hoplon.reveal.slideshow.call(null,new cljs.core.Keyword(null,"theme","theme",1124231483),"simple",a,b,c,d,e,f,g,h,k,l,m)}()));return tailrecursion.hoplon.init.call(null)};goog.exportSymbol("tailrecursion.hoplon.app_pages._index_DOT_html.hoploninit",tailrecursion.hoplon.app_pages._index_DOT_html.hoploninit);tailrecursion.hoplon.app_pages._charsheet_DOT_html={};
tailrecursion.hoplon.app_pages._charsheet_DOT_html.hoploninit=function(){tailrecursion.hoplon.reload.reload_all.call(null);tailrecursion.hoplon.app_pages._charsheet_DOT_html.classes=new cljs.core.PersistentArrayMap(null,4,["fighter",new cljs.core.PersistentArrayMap(null,3,[new cljs.core.Keyword(null,"thac0","thac0",1124227276),new cljs.core.PersistentVector(null,20,5,cljs.core.PersistentVector.EMPTY_NODE,[0,1,1,2,3,4,5,6,6,7,8,8,9,10,11,12,13,14,15,16],null),new cljs.core.Keyword(null,"weapons","weapons",
2237232457),new cljs.core.PersistentVector(null,7,5,cljs.core.PersistentVector.EMPTY_NODE,"fists dagger hand-axe mace sword warhammer greatsword".split(" "),null),new cljs.core.Keyword(null,"armor","armor",1106990257),new cljs.core.PersistentVector(null,5,5,cljs.core.PersistentVector.EMPTY_NODE,["none","leather","scale","chain","plate"],null)],null),"cleric",new cljs.core.PersistentArrayMap(null,3,[new cljs.core.Keyword(null,"thac0","thac0",1124227276),new cljs.core.PersistentVector(null,22,5,cljs.core.PersistentVector.EMPTY_NODE,
[0,1,1,1,2,2,3,3,3,4,4,5,6,7,7,8,8,9,9,10,10,11],null),new cljs.core.Keyword(null,"weapons","weapons",2237232457),new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,["fists","mace","warhammer"],null),new cljs.core.Keyword(null,"armor","armor",1106990257),new cljs.core.PersistentVector(null,5,5,cljs.core.PersistentVector.EMPTY_NODE,["none","leather","scale","chain","plate"],null)],null),"magic-user",new cljs.core.PersistentArrayMap(null,3,[new cljs.core.Keyword(null,"thac0",
"thac0",1124227276),new cljs.core.PersistentVector(null,25,5,cljs.core.PersistentVector.EMPTY_NODE,[0,1,1,1,2,2,2,2,3,3,3,4,4,5,6,6,7,7,7,8,8,9,9,9,8],null),new cljs.core.Keyword(null,"weapons","weapons",2237232457),new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,["fists","dagger"],null),new cljs.core.Keyword(null,"armor","armor",1106990257),new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,["none"],null)],null),"thief",new cljs.core.PersistentArrayMap(null,
3,[new cljs.core.Keyword(null,"thac0","thac0",1124227276),new cljs.core.PersistentVector(null,22,5,cljs.core.PersistentVector.EMPTY_NODE,[0,1,1,1,2,2,3,3,3,4,4,5,6,7,7,8,8,9,9,10,10,11],null),new cljs.core.Keyword(null,"weapons","weapons",2237232457),new cljs.core.PersistentVector(null,5,5,cljs.core.PersistentVector.EMPTY_NODE,["fists","dagger","hand-axe","mace","sword"],null),new cljs.core.Keyword(null,"armor","armor",1106990257),new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,
["none","leather"],null)],null)],null);tailrecursion.hoplon.app_pages._charsheet_DOT_html.armors=new cljs.core.PersistentArrayMap(null,5,["none",9,"leather",7,"scale",6,"chain",5,"plate",3],null);tailrecursion.hoplon.app_pages._charsheet_DOT_html.weapons=new cljs.core.PersistentArrayMap(null,7,["fists",3,"dagger",4,"hand-axe",6,"mace",6,"sword",8,"warhammer",8,"greatsword",10],null);tailrecursion.hoplon.app_pages._charsheet_DOT_html.attr_bonus=function(a){return 3>=a?-3:5>=a?-2:8>=a?-1:12>=a?0:15>=
a?1:17>=a?2:new cljs.core.Keyword(null,"else","else",1017020587)?3:null};tailrecursion.hoplon.app_pages._charsheet_DOT_html.format_bonus=function(a){return 0<=a?"+"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a):""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)};tailrecursion.hoplon.app_pages._charsheet_DOT_html.format_weapon_damage=function(a,b){return"1d"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(0<b?" + "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b):
0>b?" - "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(0-b):new cljs.core.Keyword(null,"else","else",1017020587)?"":null)};tailrecursion.hoplon.app_pages._charsheet_DOT_html.level=tailrecursion.javelin.cell.call(null,1);tailrecursion.hoplon.app_pages._charsheet_DOT_html.class$=tailrecursion.javelin.cell.call(null,"fighter");tailrecursion.hoplon.app_pages._charsheet_DOT_html.weapon=tailrecursion.javelin.cell.call(null,"fists");tailrecursion.hoplon.app_pages._charsheet_DOT_html.armor=tailrecursion.javelin.cell.call(null,
"none");tailrecursion.hoplon.app_pages._charsheet_DOT_html.attrs=tailrecursion.javelin.cell.call(null,new cljs.core.PersistentArrayMap(null,6,[new cljs.core.Keyword(null,"str","str",1014018467),10,new cljs.core.Keyword(null,"dex","dex",1014003593),10,new cljs.core.Keyword(null,"con","con",1014002932),10,new cljs.core.Keyword(null,"int","int",1014008673),10,new cljs.core.Keyword(null,"wis","wis",1014021971),10,new cljs.core.Keyword(null,"cha","cha",1014002702),10],null));tailrecursion.hoplon.app_pages._charsheet_DOT_html.attr_bonuses=
tailrecursion.javelin.lift.call(null,function(a,b,c,d){return d.call(null,cljs.core.PersistentArrayMap.EMPTY,c.call(null,function(a){var c=cljs.core.nth.call(null,a,0,null);a=cljs.core.nth.call(null,a,1,null);return new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[c,b.call(null,a)],null)},a))}).call(null,tailrecursion.hoplon.app_pages._charsheet_DOT_html.attrs,tailrecursion.hoplon.app_pages._charsheet_DOT_html.attr_bonus,cljs.core.map,cljs.core.into);tailrecursion.hoplon.app_pages._charsheet_DOT_html.thac0=
tailrecursion.javelin.lift.call(null,function(a,b,c,d,e,f){a=b.call(null,a,new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[d,new cljs.core.Keyword(null,"thac0","thac0",1124227276)],null));return 20-e.call(null,a,f,c.call(null,a))}).call(null,tailrecursion.hoplon.app_pages._charsheet_DOT_html.classes,cljs.core.get_in,cljs.core.last,tailrecursion.hoplon.app_pages._charsheet_DOT_html.class$,cljs.core.get,tailrecursion.hoplon.app_pages._charsheet_DOT_html.level);tailrecursion.hoplon.app_pages._charsheet_DOT_html.armor_class=
tailrecursion.javelin.lift.call(null,function(a,b,c,d){return d.call(null,a,c)-(new cljs.core.Keyword(null,"dex","dex",1014003593)).cljs$core$IFn$_invoke$arity$1(b)}).call(null,tailrecursion.hoplon.app_pages._charsheet_DOT_html.armors,tailrecursion.hoplon.app_pages._charsheet_DOT_html.attr_bonuses,tailrecursion.hoplon.app_pages._charsheet_DOT_html.armor,cljs.core.get);tailrecursion.hoplon.app_pages._charsheet_DOT_html.weapon_damage=tailrecursion.javelin.lift.call(null,function(a,b,c){return a.call(null,
b,c)}).call(null,cljs.core.get,tailrecursion.hoplon.app_pages._charsheet_DOT_html.weapons,tailrecursion.hoplon.app_pages._charsheet_DOT_html.weapon);tailrecursion.hoplon.app_pages._charsheet_DOT_html.weapon_damage_text=tailrecursion.javelin.lift.call(null,function(a,b,c){return c.call(null,a,b.call(null,new cljs.core.Keyword(null,"str","str",1014018467)))}).call(null,tailrecursion.hoplon.app_pages._charsheet_DOT_html.weapon_damage,tailrecursion.hoplon.app_pages._charsheet_DOT_html.attr_bonuses,tailrecursion.hoplon.app_pages._charsheet_DOT_html.format_weapon_damage);
tailrecursion.hoplon.app_pages._charsheet_DOT_html.attr_input=function(a){return new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[tailrecursion.hoplon.td.call(null,tailrecursion.hoplon.input.call(null,new cljs.core.Keyword(null,"id","id",1013907597),""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"value","value",1125876963),a.call(null,cljs.core.deref.call(null,tailrecursion.hoplon.app_pages._charsheet_DOT_html.attrs)),
new cljs.core.Keyword(null,"on-change","on-change",606853840),function(){return cljs.core.swap_BANG_.call(null,tailrecursion.hoplon.app_pages._charsheet_DOT_html.attrs,cljs.core.assoc,a,tailrecursion.hoplon.val_id.call(null,""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a))|0)})),tailrecursion.hoplon.td.call(null,tailrecursion.hoplon.span.call(null,new cljs.core.Keyword(null,"class","class",1108647146),"bonus",function(){var b=document.createTextNode("");tailrecursion.javelin.lift.call(null,function(a){return function(b,
e,f,g,h){return g.nodeValue=""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,b.call(null,function(a){return function(a,b,c){return a.call(null,c.call(null,b))}}(a)).call(null,e,f,h)))}}(b)).call(null,tailrecursion.javelin.lift,tailrecursion.hoplon.app_pages._charsheet_DOT_html.format_bonus,a,b,tailrecursion.hoplon.app_pages._charsheet_DOT_html.attr_bonuses);return b}()))],null)};tailrecursion.hoplon.html.call(null,tailrecursion.hoplon.html_head.call(null,cljs.core.PersistentArrayMap.EMPTY,
new cljs.core.PersistentVector(null,5,5,cljs.core.PersistentVector.EMPTY_NODE,[tailrecursion.hoplon.link.call(null,new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet",new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),window._hoplon_main_css),tailrecursion.hoplon.link.call(null,new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet",new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,
"href","href",1017115293),"normalize.css"),tailrecursion.hoplon.link.call(null,new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet",new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),"foundation.min.css"),tailrecursion.hoplon.link.call(null,new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet",new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),"charsheet.css"),
tailrecursion.hoplon.link.call(null,new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet",new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),"http://fonts.googleapis.com/css?family\x3dPT+Serif:400,700|Germania+One")],null)),tailrecursion.hoplon.html_body.call(null,cljs.core.PersistentArrayMap.EMPTY,function(){var a=tailrecursion.hoplon.h1.call(null,new cljs.core.Keyword(null,"class","class",1108647146),"large-12 columns text-center",
"Dungeons \x26 Dragons"),b=tailrecursion.hoplon.label.call(null,new cljs.core.Keyword(null,"for","for",1014005819),"level",new cljs.core.Keyword(null,"class","class",1108647146),"inline right","Level"),c=tailrecursion.hoplon.th.call(null,b),d=tailrecursion.hoplon.input.call(null,new cljs.core.Keyword(null,"id","id",1013907597),"level",new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"do-value","do-value",4625191201),tailrecursion.hoplon.app_pages._charsheet_DOT_html.level,
new cljs.core.Keyword(null,"on-change","on-change",606853840),function(a,b,c){return function(){return cljs.core.reset_BANG_.call(null,tailrecursion.hoplon.app_pages._charsheet_DOT_html.level,tailrecursion.hoplon.val_id.call(null,"level")|0)}}(a,b,c)),e=tailrecursion.hoplon.td.call(null,d),f=tailrecursion.hoplon.label.call(null,new cljs.core.Keyword(null,"for","for",1014005819),"class",new cljs.core.Keyword(null,"class","class",1108647146),"inline right","Class"),g=tailrecursion.hoplon.th.call(null,
f),h=tailrecursion.hoplon.option.call(null,new cljs.core.Keyword(null,"value","value",1125876963),"fighter","Fighter"),k=tailrecursion.hoplon.option.call(null,new cljs.core.Keyword(null,"value","value",1125876963),"cleric","Cleric"),l=tailrecursion.hoplon.option.call(null,new cljs.core.Keyword(null,"value","value",1125876963),"magic-user","Magic-User"),m=tailrecursion.hoplon.option.call(null,new cljs.core.Keyword(null,"value","value",1125876963),"thief","Thief"),b=tailrecursion.hoplon.select.call(null,
new cljs.core.Keyword(null,"id","id",1013907597),"class",new cljs.core.Keyword(null,"do-value","do-value",4625191201),tailrecursion.hoplon.app_pages._charsheet_DOT_html.class$,new cljs.core.Keyword(null,"on-change","on-change",606853840),function(a,b,c,d,e,f,g,h,k,l,m){return function(){return cljs.core.reset_BANG_.call(null,tailrecursion.hoplon.app_pages._charsheet_DOT_html.class$,tailrecursion.hoplon.val_id.call(null,"class"))}}(a,b,c,d,e,f,g,h,k,l,m),h,k,l,m),b=tailrecursion.hoplon.td.call(null,
b),c=tailrecursion.hoplon.tr.call(null,c,e,g,b),c=tailrecursion.hoplon.table.call(null,new cljs.core.Keyword(null,"class","class",1108647146),"large-12 columns",c),c=tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",1108647146),"large-12 columns",c);return tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",1108647146),"row",new cljs.core.Keyword(null,"style","style",1123684643),"margin-top: 30px",a,c)}(),function(){var a=tailrecursion.hoplon.label.call(null,
new cljs.core.Keyword(null,"for","for",1014005819),"str",new cljs.core.Keyword(null,"class","class",1108647146),"inline right","Str"),b=tailrecursion.hoplon.th.call(null,a),c=tailrecursion.hoplon.app_pages._charsheet_DOT_html.attr_input.call(null,new cljs.core.Keyword(null,"str","str",1014018467)),d=tailrecursion.hoplon.tr.call(null,b,c),e=tailrecursion.hoplon.label.call(null,new cljs.core.Keyword(null,"for","for",1014005819),"dex",new cljs.core.Keyword(null,"class","class",1108647146),"inline right",
"Dex"),f=tailrecursion.hoplon.th.call(null,e),g=tailrecursion.hoplon.app_pages._charsheet_DOT_html.attr_input.call(null,new cljs.core.Keyword(null,"dex","dex",1014003593)),h=tailrecursion.hoplon.tr.call(null,f,g),k=tailrecursion.hoplon.label.call(null,new cljs.core.Keyword(null,"for","for",1014005819),"con",new cljs.core.Keyword(null,"class","class",1108647146),"inline right","Con"),l=tailrecursion.hoplon.th.call(null,k),m=tailrecursion.hoplon.app_pages._charsheet_DOT_html.attr_input.call(null,new cljs.core.Keyword(null,
"con","con",1014002932)),n=tailrecursion.hoplon.tr.call(null,l,m),p=tailrecursion.hoplon.label.call(null,new cljs.core.Keyword(null,"for","for",1014005819),"int",new cljs.core.Keyword(null,"class","class",1108647146),"inline right","Int"),q=tailrecursion.hoplon.th.call(null,p),r=tailrecursion.hoplon.app_pages._charsheet_DOT_html.attr_input.call(null,new cljs.core.Keyword(null,"int","int",1014008673)),s=tailrecursion.hoplon.tr.call(null,q,r),t=tailrecursion.hoplon.label.call(null,new cljs.core.Keyword(null,
"for","for",1014005819),"wis",new cljs.core.Keyword(null,"class","class",1108647146),"inline right","Wis"),v=tailrecursion.hoplon.th.call(null,t),y=tailrecursion.hoplon.app_pages._charsheet_DOT_html.attr_input.call(null,new cljs.core.Keyword(null,"wis","wis",1014021971)),z=tailrecursion.hoplon.tr.call(null,v,y),A=tailrecursion.hoplon.label.call(null,new cljs.core.Keyword(null,"for","for",1014005819),"cha",new cljs.core.Keyword(null,"class","class",1108647146),"inline right","Cha"),B=tailrecursion.hoplon.th.call(null,
A),D=tailrecursion.hoplon.app_pages._charsheet_DOT_html.attr_input.call(null,new cljs.core.Keyword(null,"cha","cha",1014002702)),u=tailrecursion.hoplon.tr.call(null,B,D),w=tailrecursion.hoplon.table.call(null,new cljs.core.Keyword(null,"class","class",1108647146),"large-12 columns",d,h,n,s,z,u),x=tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",1108647146),"large-6 columns",w),F=tailrecursion.hoplon.label.call(null,new cljs.core.Keyword(null,"for","for",1014005819),"weapon",
new cljs.core.Keyword(null,"class","class",1108647146),"inline right","Weapon"),C=tailrecursion.hoplon.th.call(null,F),E=tailrecursion.hoplon.select.call(null,new cljs.core.Keyword(null,"id","id",1013907597),"weapon",new cljs.core.Keyword(null,"do-value","do-value",4625191201),tailrecursion.hoplon.app_pages._charsheet_DOT_html.weapon,new cljs.core.Keyword(null,"on-change","on-change",606853840),function(a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,F){return function(){return cljs.core.reset_BANG_.call(null,
tailrecursion.hoplon.app_pages._charsheet_DOT_html.weapon,tailrecursion.hoplon.val_id.call(null,"weapon"))}}(a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v,y,z,A,B,D,u,w,x,F,C),tailrecursion.hoplon.loop_tpl_STAR_.call(null,tailrecursion.javelin.lift.call(null,function(a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,F){return function(a,b,c){return b.call(null,a,new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[c,new cljs.core.Keyword(null,"weapons","weapons",2237232457)],null))}}(a,
b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v,y,z,A,B,D,u,w,x,F,C)).call(null,tailrecursion.hoplon.app_pages._charsheet_DOT_html.classes,cljs.core.get_in,tailrecursion.hoplon.app_pages._charsheet_DOT_html.class$),null,function(a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,F){return function(E){E=tailrecursion.javelin.cell_map.call(null,cljs.core.identity,tailrecursion.javelin.lift.call(null,function(a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E){return function(a){return new cljs.core.PersistentVector(null,
1,5,cljs.core.PersistentVector.EMPTY_NODE,[a],null)}}(a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,F)).call(null,E));E=cljs.core.nth.call(null,E,0,null);return tailrecursion.hoplon.option.call(null,E)}}(a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v,y,z,A,B,D,u,w,x,F,C))),G=tailrecursion.hoplon.td.call(null,E),H=tailrecursion.hoplon.tr.call(null,C,G),I=tailrecursion.hoplon.label.call(null,new cljs.core.Keyword(null,"for","for",1014005819),"armor",new cljs.core.Keyword(null,"class","class",1108647146),
"inline right","Armor"),J=tailrecursion.hoplon.th.call(null,I),K=tailrecursion.hoplon.select.call(null,new cljs.core.Keyword(null,"id","id",1013907597),"armor",new cljs.core.Keyword(null,"do-value","do-value",4625191201),tailrecursion.hoplon.app_pages._charsheet_DOT_html.armor,new cljs.core.Keyword(null,"on-change","on-change",606853840),function(a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J){return function(){return cljs.core.reset_BANG_.call(null,tailrecursion.hoplon.app_pages._charsheet_DOT_html.armor,
tailrecursion.hoplon.val_id.call(null,"armor"))}}(a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v,y,z,A,B,D,u,w,x,F,C,E,G,H,I,J),tailrecursion.hoplon.loop_tpl_STAR_.call(null,tailrecursion.javelin.lift.call(null,function(a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J){return function(a,b,c){return b.call(null,a,new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[c,new cljs.core.Keyword(null,"armor","armor",1106990257)],null))}}(a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v,
y,z,A,B,D,u,w,x,F,C,E,G,H,I,J)).call(null,tailrecursion.hoplon.app_pages._charsheet_DOT_html.classes,cljs.core.get_in,tailrecursion.hoplon.app_pages._charsheet_DOT_html.class$),null,function(a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J){return function(K){K=tailrecursion.javelin.cell_map.call(null,cljs.core.identity,tailrecursion.javelin.lift.call(null,function(a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J){return function(a){return new cljs.core.PersistentVector(null,
1,5,cljs.core.PersistentVector.EMPTY_NODE,[a],null)}}(a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J)).call(null,K));K=cljs.core.nth.call(null,K,0,null);return tailrecursion.hoplon.option.call(null,K)}}(a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v,y,z,A,B,D,u,w,x,F,C,E,G,H,I,J))),M=tailrecursion.hoplon.td.call(null,K),N=tailrecursion.hoplon.tr.call(null,J,M),O=tailrecursion.hoplon.span.call(null,new cljs.core.Keyword(null,"class","class",1108647146),"right","THAC0 (melee)"),P=tailrecursion.hoplon.td.call(null,
O),Q=tailrecursion.hoplon.td.call(null,function(){var L=document.createTextNode("");tailrecursion.javelin.lift.call(null,function(a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P){return function(Q,R,S,T){return R.nodeValue=""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,Q.call(null,function(a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P){return function(a,b){return b-a.call(null,new cljs.core.Keyword(null,"str",
"str",1014018467))}}(a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P)).call(null,S,T)))}}(L,a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v,y,z,A,B,D,u,w,x,F,C,E,G,H,I,J,K,M,N,O,P)).call(null,tailrecursion.javelin.lift,L,tailrecursion.hoplon.app_pages._charsheet_DOT_html.attr_bonuses,tailrecursion.hoplon.app_pages._charsheet_DOT_html.thac0);return L}()),R=tailrecursion.hoplon.tr.call(null,P,Q),S=tailrecursion.hoplon.span.call(null,new cljs.core.Keyword(null,"class","class",1108647146),
"right","THAC0 (missile)"),T=tailrecursion.hoplon.td.call(null,S),V=tailrecursion.hoplon.td.call(null,function(){var L=document.createTextNode("");tailrecursion.javelin.lift.call(null,function(a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T){return function(U,V,da,ea){return V.nodeValue=""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,U.call(null,function(a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,
S,T){return function(a,b){return b-a.call(null,new cljs.core.Keyword(null,"dex","dex",1014003593))}}(a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T)).call(null,da,ea)))}}(L,a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v,y,z,A,B,D,u,w,x,F,C,E,G,H,I,J,K,M,N,O,P,Q,R,S,T)).call(null,tailrecursion.javelin.lift,L,tailrecursion.hoplon.app_pages._charsheet_DOT_html.attr_bonuses,tailrecursion.hoplon.app_pages._charsheet_DOT_html.thac0);return L}()),W=tailrecursion.hoplon.tr.call(null,
T,V),X=tailrecursion.hoplon.span.call(null,new cljs.core.Keyword(null,"class","class",1108647146),"right","Armor Class"),Y=tailrecursion.hoplon.td.call(null,X),Z=tailrecursion.hoplon.td.call(null,function(){var L=document.createTextNode("");tailrecursion.javelin.lift.call(null,function(a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,da,ea){return function(W,X,fa){return X.nodeValue=""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,W.call(null,
function(a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X){return function(a){return a}}(a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,da,ea)).call(null,fa)))}}(L,a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v,y,z,A,B,D,u,w,x,F,C,E,G,H,I,J,K,M,N,O,P,Q,R,S,T,V,W,X,Y)).call(null,tailrecursion.javelin.lift,L,tailrecursion.hoplon.app_pages._charsheet_DOT_html.armor_class);return L}()),aa=tailrecursion.hoplon.tr.call(null,Y,
Z),ba=tailrecursion.hoplon.span.call(null,new cljs.core.Keyword(null,"class","class",1108647146),"right",function(){var L=document.createTextNode("");tailrecursion.javelin.lift.call(null,function(a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z){return function(a,b){return a.nodeValue="Damage ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)+")"}}(L,a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v,y,z,A,B,D,u,w,x,F,C,E,G,H,I,J,K,M,N,O,P,Q,R,S,T,V,W,X,Y,Z,aa)).call(null,
L,tailrecursion.hoplon.app_pages._charsheet_DOT_html.weapon);return L}()),ca=tailrecursion.hoplon.td.call(null,ba),U=tailrecursion.hoplon.td.call(null,function(){var L=document.createTextNode("");tailrecursion.javelin.lift.call(null,function(a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,aa,ba){return function(ca,ga,ha){return ha.nodeValue=""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ca.call(null,function(a,b,c,d,e,f,g,
h,k,l,m,n,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,aa,ba){return function(a){return a}}(a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,aa,ba)).call(null,ga)))}}(L,a,b,c,d,e,f,g,h,k,l,m,n,p,q,r,s,t,v,y,z,A,B,D,u,w,x,F,C,E,G,H,I,J,K,M,N,O,P,Q,R,S,T,V,W,X,Y,Z,aa,ba,ca)).call(null,tailrecursion.javelin.lift,tailrecursion.hoplon.app_pages._charsheet_DOT_html.weapon_damage_text,L);return L}()),U=tailrecursion.hoplon.tr.call(null,
ca,U),U=tailrecursion.hoplon.table.call(null,new cljs.core.Keyword(null,"class","class",1108647146),"large-12 columns",H,N,R,W,aa,U),U=tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",1108647146),"large-6 columns",U);return tailrecursion.hoplon.div.call(null,new cljs.core.Keyword(null,"class","class",1108647146),"row",x,U)}()));return tailrecursion.hoplon.init.call(null)};goog.exportSymbol("tailrecursion.hoplon.app_pages._charsheet_DOT_html.hoploninit",tailrecursion.hoplon.app_pages._charsheet_DOT_html.hoploninit);