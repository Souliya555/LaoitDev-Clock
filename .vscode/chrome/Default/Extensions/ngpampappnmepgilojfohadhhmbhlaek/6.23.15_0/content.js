var m;
if(!window.a){var t=function(){var b=window.self===window.top;this.k=(this.G=b)?0:null;this.s=this.d=!1;this.j=this.i=-1;this.F=1;this.c={};this.q=[];var c=chrome.extension.connect({name:b?"top":"sub"});this.a=c;this.r=c.a||Math.ceil(975*Math.random());c.onMessage.addListener(this.onMessage.bind(this));c.onDisconnect.addListener(this.v.bind(this));this.b(window,"scroll",this.O,!0);this.b(window,"keydown",this.u,!0);this.b(window,"keyup",this.u,!0);this.b(window,"mousedown",this.L,!0);this.b(window,"mouseup",
this.M,!0);this.b(window,"blur",this.K,!0);this.b(document,"beforeload",this.I,!0);this.b(document,"DOMContentLoaded",this.J);b&&this.b(window,"resize",this.N)};window.a=!0;var x={16:!0,17:!0,18:!0,45:!0,46:!0},C=["VIDEO","AUDIO","OBJECT","EMBED"],D=new RegExp(atob("eXRwbGF5ZXJcLmNvbmZpZ1xzKj1ccypcew=="));m=t.prototype;m.A=function(b,c,e,f){try{var d=document.activeElement,n=d&&0<=C.indexOf(d.tagName)?d:null;n||(n=(d=document.elementFromPoint(this.i,this.j))&&0<=C.indexOf(d.tagName)?d:null);for(var k=
0,p,q,r,h,l=0;l<C.length;l++){for(var g=document.getElementsByTagName(C[l]),w=0;w<g.length;w++)if(d=g[w],3!=l||"application/x-shockwave-flash"==d.type.toLowerCase()){var s=d.src||d.data;if(s&&(s==b||s==c)){p=d;break}if(!n&&!q)if(!s||s!=e&&s!=f){var u=d.clientWidth,v=d.clientHeight;if(u&&v){var y=d.getBoundingClientRect();if(!(0>=y.right+window.scrollX||0>=y.bottom+window.scrollY)){var z=window.getComputedStyle(d);if(!z||"hidden"!=z.visibility){var A=u*v;A>k&&1.35*u>v&&u<3*v&&(k=A,r=d);h||(h=d)}}}}else q=
d}if(p)break}b=p||n||q||r||h;if(!b)return null;if("EMBED"==b.tagName&&!b.clientWidth&&!b.clientHeight){var B=b.parentElement;"OBJECT"==B.tagName&&(b=B)}return this.g(b)}catch(E){}};m.w=function(b,c,e){try{for(var f=[],d,f=Array.prototype.concat.apply(f,document.getElementsByTagName("FRAME")),f=Array.prototype.concat.apply(f,document.getElementsByTagName("IFRAME")),n=0;n<f.length;n++){var k=f[n];if(parseInt(k.getAttribute("__idm_frm__"))==b){d=k;break}if(!d){var p=k.src;!p||p!=c&&p!=e||(d=k)}}return this.g(d)}catch(q){}};
m.p=function(){var b=window.devicePixelRatio,c=document.width,e=document.body.scrollWidth;c&&e&&(b=c==e?0:c/e);return b};m.n=function(b){try{var c=b.getBoundingClientRect(),e=Math.round(c.width),f=Math.round(c.height);if(15>e||15>f)return null;var d=document.documentElement,n=d.scrollHeight||d.clientHeight,k=Math.round(c.left)+b.clientLeft,p=Math.round(c.top)+b.clientTop;return k>=(d.scrollWidth||d.clientWidth)||p>=n?null:{left:k,top:p,right:k+e,bottom:p+f,zoom:this.p()}}catch(q){}};m.o=function(){this.a.postMessage([21,
window.location.href])};m.f=function(b){if(b){if(!this.H){this.H=!0;this.b(window,"message",this.P);var c=document.createElement("script");c.src=chrome.extension.getURL("document.js");c.onload=function(){c.parentNode.removeChild(c)};document.documentElement.appendChild(c)}window.setTimeout(function(){window.postMessage([1],"/")},3E3)}else if("loading"==document.readyState)this.t=!0;else{this.t=!1;b=document.getElementsByTagName("SCRIPT");for(var e=0;e<b.length;e++)if(c=b[e],!c.src&&D.test(c.innerText)){b=
this.h();this.a.postMessage([34,b,-1,c.outerHTML]);break}}};m.P=function(b){var c=b.data;c instanceof Array&&b.origin==(document.origin||location.origin)&&2==c[0]&&this.a.postMessage([34,c[1],-1,c[2]])};m.D=function(b){var c=b[2]||this.w(b[3],b[4],b[5]),e=c&&this.c[c],e=e&&this.n(e);this.a.postMessage([22,b[1],b[3],c,e])};m.C=function(b){var c=!b[2],e=b[2]||this.A(b[3],b[4],b[5],b[6]);b=[23,b[1],e,!1];var f=e&&this.c[e];if(f){var d=this.n(f);d&&(b[4]=d);c?(b[5]=f.tagName,b[6]=f.src||f.data,b[7]=this.h()):
d||document.contains(f)||(b[3]=!0,delete this.c[e])}this.a.postMessage(b)};m.g=function(b){try{var c=parseInt(b.getAttribute("__idm_id__"));c||(c=this.r<<10|this.F++,b.setAttribute("__idm_id__",c));this.c[c]=b;return c}catch(e){}};m.h=function(b){var c;try{c=window.top.document.title}catch(e){}if(c)if(c=c.replace(/[ \t\r\n\u25B6]+/g," ").trim(),b)this.a.postMessage([24,b,c]);else return c};m.e=function(b){if(!this.l){var c="\\b\\w+://(?:[%T]*(?::[%T]*)?@)?[%H.]+\\.[%H]+(?::\\d+)?(?:/(?:(?: +(?!\\w+:))?[%T/~;])*)?(?:\\?[%Q]*)?(?:#[%T]*)?".replace(/%\w/g,
function(b){return this[b]}.bind({"%H":"\\w\\-\u00a0-\ufeff","%T":"\\w\\-.+*()$!,%\u00a0-\ufeff","%Q":"^\\s\\[\\]{}()"}));this.l=new RegExp(c,"gi")}for(var e=[];c=this.l.exec(b);)e.push(c.shift());return e};m.m=function(b,c,e){var f=[],d={},n="",k="",p=!e,q;if(e&&(q=b.getSelection(),!q||q.isCollapsed))return f;var r=b.getElementsByTagName("A");if(r)for(var h=0;h<r.length;h++){var l=r[h];if(l&&(p||q.containsNode(l,!0))){var g=l.href;g&&!d[g]&&c.test(g)&&(d[g]=f.push([g,2,l.innerText||l.title]));e&&
d[g]&&(n+=l.innerText,n+="\n")}}if(r=b.getElementsByTagName("AREA"))for(h=0;h<r.length;h++)(l=r[h])&&(p||q.containsNode(l,!0))&&(g=l.href)&&!d[g]&&c.test(g)&&(d[g]=f.push([g,2,l.alt]));if(r=p&&b.getElementsByTagName("IFRAME"))for(h=0;h<r.length;h++)(l=r[h])&&(p||q.containsNode(l,!0))&&(g=l.src)&&!d[g]&&c.test(g)&&(d[g]=f.push([g,4]));if(h=e&&q.toString())for(l=this.e(h),n=this.e(n),h=0;h<l.length;h++)(g=l[h])&&!d[g]&&c.test(g)&&0>n.indexOf(g)&&(d[g]=f.push([g,1]));if(n=(p||!f.length)&&b.getElementsByTagName("IMG"))for(h=
0;h<n.length;h++)(l=n[h])&&(p||q.containsNode(l,!0))&&((g=l.src)&&!d[g]&&c.test(g)&&(d[g]=f.push([g,3,"<<<=IDMTRANSMITIMGPREFIX=>>>"+l.alt])),p&&l.onclick&&(k+=l.onclick,k+="\n"));if(b=p&&b.getElementsByTagName("SCRIPT")){for(h=0;h<b.length;h++)k+=b[h].innerText,k+="\n";for(k=this.e(k);k.length;)(g=k.shift())&&!d[g]&&c.test(g)&&(d[g]=f.push([g,5]))}return f};m.B=function(b,c){for(var e=this.m(document,b,c),f=document.getElementsByTagName("IFRAME"),d=Array.prototype.push,n=0;n<f.length;n++)try{var k=
f[n],p=k.contentDocument;p&&!k.src&&d.apply(e,this.m(p,b,c))}catch(q){}return e};m.u=function(b){x[b.keyCode]&&this.a.postMessage([31,b.keyCode,"keydown"==b.type])};m.L=function(b){this.s&&this.a.postMessage([28]);if(0==b.button){var c=b.view.getSelection();this.d=c&&c.isCollapsed;this.a.postMessage([32,b.button,!0])}};m.M=function(b){if(0==b.button&&(this.i=b.clientX,this.j=b.clientY,this.a.postMessage([32,b.button,!1]),this.d)){this.d=!1;var c=b.view.getSelection();c&&!c.isCollapsed&&this.a.postMessage([26,
b.clientX,b.clientY,this.p()])}};m.K=function(){this.d=!1;this.a.postMessage([33])};m.O=function(){this.a.postMessage([29])};m.N=function(b){b=b.target;this.a.postMessage([30,b.innerWidth,b.innerHeight])};m.I=function(b){var c=b.target,e=c.tagName;0<=C.indexOf(e)&&b.url&&(c=this.g(c),this.a.postMessage([25,c,e,b.url]))};m.J=function(){this.t&&this.f()};m.onMessage=function(b){switch(b[0]){case 11:var c=b[2];if(c){this.k=c;try{window.frameElement&&window.frameElement.setAttribute("__idm_frm__",c)}catch(e){}}b[3]&&
this.o();b[4]&&this.f();break;case 17:b[1]&&this.o();b[2]&&this.f(!0);break;case 12:var c=this.B(b[4]?new RegExp(b[4],"i"):null,b[2]),f=[27,b[1],this.k,c.length];b[3]||(f[4]=c,f[5]=window.location.href,this.G&&(f[6]=window.location.href,f[7]=document.title));this.a.postMessage(f);break;case 13:this.s=b[1];break;case 14:this.h(b[1]);break;case 15:this.C(b);break;case 16:this.D(b)}};m.b=function(b){var c=Array.prototype.slice.call(arguments);c[2]=c[2].bind(this);this.q.push(c);b.addEventListener.apply(b,
c.slice(1))};m.v=function(){for(var b;b=this.q.shift();){var c=b.shift();c.removeEventListener.apply(c,b)}this.a=this.r=null;window.a=!1};new t};
