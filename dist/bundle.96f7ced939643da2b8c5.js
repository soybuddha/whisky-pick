!function(e){function t(t){for(var n,o,c=t[0],s=t[1],l=t[2],u=0,d=[];u<c.length;u++)o=c[u],i[o]&&d.push(i[o][0]),i[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(p&&p(t);d.length;)d.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,c=1;c<r.length;c++){var s=r[c];0!==i[s]&&(n=!1)}n&&(a.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},i={0:0},a=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],r=i[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise(function(t,n){r=i[e]=[t,n]});t.push(r[2]=n);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=function(e){return o.p+""+({}[e]||e)+"."+{4:"59273dfbf46b572aa771",5:"58d6fe86e7941ee4c9ad",6:"bb1b2886d49431a64d90",7:"1980191d97dd51117444",8:"01e17a848f31aeaf2c83",9:"25ae416987bd8e114676"}[e]+".js"}(e),a=function(t){c.onerror=c.onload=null,clearTimeout(s);var r=i[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+n+": "+a+")");o.type=n,o.request=a,r[1](o)}i[e]=void 0}};var s=setTimeout(function(){a({type:"timeout",target:c})},12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var p=s;a.push([396,2]),r()}({108:function(e,t,r){"use strict";var n=r(1),i=r.n(n),a=i.a.memo(function(){return i.a.createElement("div",{className:"loading"},"Loading...")});t.a=a},114:function(e,t,r){"use strict";var n=r(159),i=r.n(n),a=r(60);function o(e,t,r,n,i,a,o){try{var c=e[a](o),s=c.value}catch(e){return void r(e)}c.done?t(s):Promise.resolve(s).then(n,i)}function c(e){return function(){var t=this,r=arguments;return new Promise(function(n,i){var a=e.apply(t,r);function c(e){o(a,n,i,c,s,"next",e)}function s(e){o(a,n,i,c,s,"throw",e)}c(void 0)})}}var s="/src/assets/data/whiskies.json",l="/src/assets/data/tasters.json",p="/src/assets/data/types.json";function u(e){return i.a.get(e)}function d(){return(d=c(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u(s);case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}},e,this,[[0,7]])}))).apply(this,arguments)}function f(){return(f=c(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u(l);case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}},e,this,[[0,7]])}))).apply(this,arguments)}function m(){return h.apply(this,arguments)}function h(){return(h=c(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u(p);case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}},e,this,[[0,7]])}))).apply(this,arguments)}function g(){return(g=c(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m();case 3:return r=e.sent,n={},r.forEach(function(e){var r=t.filter(function(t){return t.type===e});n[e]={id:Object(a.a)(e),name:e,whiskies:r.sort(function(e,t){return t.average_rating-e.average_rating}),average_age:Math.round(r.reduce(function(e,t){return e+t.age},0)/r.length),average_price:Math.round(r.reduce(function(e,t){return e+t.price},0)/r.length),average_rating:Math.round(r.reduce(function(e,t){return e+t.average_rating},0)/r.length)}}),e.abrupt("return",n);case 9:return e.prev=9,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}},e,this,[[0,9]])}))).apply(this,arguments)}function b(){return(b=c(regeneratorRuntime.mark(function e(t,r){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.filter(function(e){return t.includes(e.type)});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function y(){return(y=c(regeneratorRuntime.mark(function e(t,r){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.filter(function(e){return e.profiles.map(function(e){return e}).some(function(e){return t.includes(e)})});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function x(){return(x=c(regeneratorRuntime.mark(function e(t,r){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.find(function(e){return e.id===t});case 3:return n=e.sent,e.abrupt("return",n);case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}},e,this,[[0,7]])}))).apply(this,arguments)}function v(){return(v=c(regeneratorRuntime.mark(function e(t,r,n){var i,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.find(function(e){return e.id===t});case 3:return i=e.sent,(o=n.filter(function(e){return e.ratings.map(function(e){return Object(a.a)(e.name)}).includes(t)})).forEach(function(e){var t=e.ratings.find(function(e){return Object(a.a)(e.name)===i.id});e.taster_rating=t.score}),o.sort(function(e,t){return t.taster_rating-e.taster_rating}),e.next=9,o;case 9:return i.whiskies=e.sent,e.abrupt("return",i);case 13:return e.prev=13,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",e.t0);case 17:case"end":return e.stop()}},e,this,[[0,13]])}))).apply(this,arguments)}t.a={getWhiskies:function(){return d.apply(this,arguments)},getTasters:function(){return f.apply(this,arguments)},getFavoriteWhiskies:function(e){return g.apply(this,arguments)},filterWhiskiesByType:function(e,t){return b.apply(this,arguments)},filterWhiskiesByProfile:function(e,t){return y.apply(this,arguments)},getWhiskyById:function(e,t){return x.apply(this,arguments)},getTasterById:function(e,t,r){return v.apply(this,arguments)},formatRatingsForChart:function(e){return{labels:e.map(function(e){return e.name}),series:[e.map(function(e){return e.score})]}}}},189:function(e,t,r){var n=r(190);"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};r(194)(n,i);n.locals&&(e.exports=n.locals)},190:function(e,t,r){(t=e.exports=r(191)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css?family=Montserrat:400,900|Roboto|Material+Icons);",""]);var n=r(192)(r(193));t.push([e.i,'html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{border:0;margin:0;padding:0;font:inherit;font-size:100%;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:\'\';content:none}table{border-collapse:collapse;border-spacing:0}@keyframes spinLoader{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes animateList{0%{transform:translateY(100%);opacity:0}100%{transform:translateY(0);opacity:1}}@keyframes fadeUp{0%{transform:translateY(100%);opacity:0}100%{transform:translateY(0);opacity:1}}@keyframes slideRight{0%{transform:translateX(100%);opacity:0}100%{transform:translateX(0);opacity:1}}@keyframes growRight{0%{width:0;opacity:0}100%{width:100%;opacity:1}}*{box-sizing:border-box}body{font-size:62.5%;position:relative;font-family:"Roboto",Helvetica,Arial,sans-serif}body a{text-decoration:none}.header{position:fixed;top:0;left:0;height:100px;width:100%;background:linear-gradient(30deg, #FCFCFC 0, #EDEDED 35%);z-index:1}.header a{color:#454545;transition:all 0.25s cubic-bezier(0.4, 0, 0.2, 1)}.header a .material-icons{font-size:1em;margin-right:6px;vertical-align:middle}.header a:hover{color:#888}.header h1{font-size:2em;font-family:"Montserrat",Helvetica,Arial,sans-serif;margin-left:3%}.header h1 a{display:block;width:140px;height:100px;line-height:100px}.header .navigation{position:absolute;right:3%;top:0;height:100px;font-size:1.4em}.header .navigation a{display:block;float:left;line-height:100px;padding:0 26px}.loading{border-radius:50%;width:50px;height:50px;border:6px solid #FFBE00;border-top-color:transparent;text-indent:-999em;position:absolute;left:50%;top:400px;margin:-28px 0 0 -28px;animation-name:spinLoader;animation-iteration-count:infinite;animation-timing-function:linear;animation-duration:1s}.container{margin:100px auto;overflow:hidden}.hero{width:100%;height:420px;margin-bottom:40px;background:linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),url('+n+') no-repeat center center fixed;background-size:cover;color:#FCFCFC;text-align:center;position:relative}.hero h2,.hero p{margin-left:25%;margin-right:25%;opacity:0;animation:fadeUp 0.35s cubic-bezier(0.4, 0, 0.2, 1) 0.25s forwards}.hero h2{font-family:"Montserrat",Helvetica,Arial,sans-serif;font-size:4em;padding-top:6%;margin-bottom:35px}.hero h2 .material-icons{color:red;font-size:100%;vertical-align:bottom}.hero p{font-size:2.2em;line-height:1.9;margin-bottom:10px}.hero .attr{position:absolute;right:16px;bottom:11px;font-size:1.2em;margin:0;padding:0}.hero .attr a{color:#FCFCFC}.featured{margin-bottom:30px;overflow:hidden}.featured>h2{text-align:center;font-family:"Montserrat",Helvetica,Arial,sans-serif;font-size:3.6em;margin-bottom:10px;opacity:0;animation:fadeUp 0.35s cubic-bezier(0.4, 0, 0.2, 1) 0.25s forwards}.featured .favorite-list-item{width:17%;margin:1.5%;float:left;opacity:0;animation:animateList 0.35s cubic-bezier(0.4, 0, 0.2, 1) 0.35s forwards;transition:all 0.35s cubic-bezier(0.4, 0, 0.2, 1)}.featured .favorite-list-item>h3{font-family:"Montserrat",Helvetica,Arial,sans-serif;font-size:1.8em;font-weight:900;text-transform:uppercase;margin-bottom:10px;text-align:center}.featured .favorite-list-item .container-list-item{width:100%}.featured .favorite-list-item:nth-child(1){animation-delay:.15s}.featured .favorite-list-item:nth-child(2){animation-delay:.3s}.featured .favorite-list-item:nth-child(3){animation-delay:.45s}.featured .favorite-list-item:nth-child(4){animation-delay:.6s}.featured .favorite-list-item:nth-child(5){animation-delay:.75s}.featured .favorite-list-item:nth-child(6){animation-delay:.9s}.featured .favorite-list-item:nth-child(7){animation-delay:1.05s}.featured .favorite-list-item:nth-child(8){animation-delay:1.2s}.featured .favorite-list-item:nth-child(9){animation-delay:1.35s}.featured.rating-comparison h2{margin-bottom:30px}.featured .rating-comparison-item{padding:0 3.2%;margin:15px 0;overflow:hidden;height:60px}.featured .rating-comparison-item h3{width:120px;font-family:"Montserrat",Helvetica,Arial,sans-serif;font-size:1.8em;font-weight:900;text-transform:uppercase;text-align:right;float:left;height:60px;line-height:60px}.featured .rating-comparison-item .comparison-bar{position:relative;width:calc(100% - 130px);float:right;height:60px}.featured .rating-comparison-item .comparison-bar .comparison-outer,.featured .rating-comparison-item .comparison-bar .comparison-inner{height:60px;position:absolute;left:0;top:0}.featured .rating-comparison-item .comparison-bar .comparison-outer{width:100%;background:#EDEDED;opacity:0;animation:growRight 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.35s forwards;transition:all 0.7s cubic-bezier(0.4, 0, 0.2, 1)}.featured .rating-comparison-item .comparison-bar .comparison-inner{width:50%;background:linear-gradient(30deg, #FCD263 0, #FFBE00 35%, #EDAE00 95%)}.featured .rating-comparison-item .comparison-bar p{margin-left:-50px;height:60px;line-height:60px;font-family:"Montserrat",Helvetica,Arial,sans-serif;font-size:1.6em;font-weight:900;text-transform:uppercase;position:absolute;color:#FCFCFC}.featured.age-price-comparison{padding:1.5%}.featured.age-price-comparison .age-price-comparison-item{width:17%;margin:1.5%;float:left;opacity:0;animation:animateList 0.35s cubic-bezier(0.4, 0, 0.2, 1) 0.35s forwards;transition:all 0.35s cubic-bezier(0.4, 0, 0.2, 1)}.featured.age-price-comparison .age-price-comparison-item>h3{font-family:"Montserrat",Helvetica,Arial,sans-serif;font-size:1.8em;font-weight:900;text-transform:uppercase;margin-bottom:10px;text-align:center}.featured.age-price-comparison .age-price-comparison-item .age-price-comparison-detail{background:linear-gradient(30deg, #FCD263 0, #FFBE00 35%, #EDAE00 95%);padding:20px;text-align:center;color:#FCFCFC}.featured.age-price-comparison .age-price-comparison-item .age-price-comparison-detail h4{font-family:"Montserrat",Helvetica,Arial,sans-serif;font-weight:900;font-size:3.6em;margin:30px auto 10px}.featured.age-price-comparison .age-price-comparison-item .age-price-comparison-detail p{font-size:1.4em;margin-bottom:30px}.featured.age-price-comparison .age-price-comparison-item .age-price-comparison-detail .price-comparison-detail-card{border-bottom:1px solid #FCFCFC}.featured.age-price-comparison .age-price-comparison-item:nth-child(1){animation-delay:.15s}.featured.age-price-comparison .age-price-comparison-item:nth-child(2){animation-delay:.3s}.featured.age-price-comparison .age-price-comparison-item:nth-child(3){animation-delay:.45s}.featured.age-price-comparison .age-price-comparison-item:nth-child(4){animation-delay:.6s}.featured.age-price-comparison .age-price-comparison-item:nth-child(5){animation-delay:.75s}.featured.age-price-comparison .age-price-comparison-item:nth-child(6){animation-delay:.9s}.featured.age-price-comparison .age-price-comparison-item:nth-child(7){animation-delay:1.05s}.featured.age-price-comparison .age-price-comparison-item:nth-child(8){animation-delay:1.2s}.featured.age-price-comparison .age-price-comparison-item:nth-child(9){animation-delay:1.35s}.container-list{padding:1.5%;opacity:0;animation:fadeUp 0.35s cubic-bezier(0.4, 0, 0.2, 1) 0.25s forwards}.container-list .container-list-item{width:17%;margin:1.5%;float:left;overflow:hidden;color:#121212;transition:all 250ms cubic-bezier(0.4, 0, 0.2, 1)}.container-list .container-list-item:hover{box-shadow:rgba(0,0,0,0.3) 0 4px 10px}.container-list .container-list-item .container-image{width:100%;vertical-align:middle}.container-list .container-list-item .container-detail{height:80px;font-family:"Montserrat",Helvetica,Arial,sans-serif;background:linear-gradient(30deg, #FCD263 0, #FFBE00 35%, #EDAE00 95%);position:relative}.container-list .container-list-item .container-detail h2{font-size:1.8em;padding:20px 0 0 15px;margin:0 10px 4px 75px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;height:45px}.container-list .container-list-item .container-detail h3{font-size:1.4em;padding-left:15px;margin:0 10px 0 75px;font-family:"Roboto",Helvetica,Arial,sans-serif;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;height:25px}.container-list .container-list-item .container-detail h4{position:absolute;left:0;top:0;height:80px;line-height:80px;width:75px;background:rgba(0,0,0,0.1);font-size:1.8em;font-weight:900;text-align:center}.container-list .container-list-item .container-detail h4 span{font-size:70%}.taster-list .taster-list-item .container-detail h2,.taster-list .taster-list-item .container-detail h3{padding-left:0;margin-left:0;text-align:center}.detail .back-btn{position:absolute;right:1.5%;color:#FCFCFC;font-size:3.6em;width:50px;height:50px;line-height:50px;border-radius:50%;background:#454545;text-align:center;cursor:pointer;transition:all 0.25s cubic-bezier(0.4, 0, 0.2, 1)}.detail .back-btn:hover{opacity:0.7}.whisky-detail{position:absolute;top:calc(50% + 90px);margin:0 3%;width:94%;opacity:0;animation:slideRight 0.35s cubic-bezier(0.4, 0, 0.2, 1) 0.25s forwards;background:linear-gradient(30deg, #454545 0, #121212 95%);overflow:hidden}.whisky-detail .whisky-detail-image{width:460px;height:460px;float:left}.whisky-detail .whisky-detail-content{width:calc(100% - 460px);height:460px;float:right;color:#FCFCFC}.whisky-detail .whisky-detail-content h2,.whisky-detail .whisky-detail-content h3,.whisky-detail .whisky-detail-content p{padding-left:40px;padding-right:40px}.whisky-detail .whisky-detail-content h2{font-size:4.2em;font-family:"Montserrat",Helvetica,Arial,sans-serif;padding-top:40px;padding-bottom:15px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;height:105px}.whisky-detail .whisky-detail-content h3{font-size:2.4em;padding-bottom:15px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;height:47px}.whisky-detail .whisky-detail-content p{font-size:1.4em;padding-bottom:15px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;height:31px;border-bottom:1px solid #454545}.whisky-detail .whisky-detail-content .back-btn{top:67px}.whisky-detail .whisky-detail-content .ratings-chart{height:276px;width:100%}.whisky-detail h4{float:left;width:460px;height:120px;line-height:120px;color:#FCFCFC;background:linear-gradient(30deg, #FCD263 0, #FFBE00 35%, #EDAE00 95%);text-align:center;font-family:"Montserrat",Helvetica,Arial,sans-serif;font-weight:900;font-size:3.6em}.whisky-detail .attributes{height:120px;width:calc(100% - 460px);line-height:120px;background:#121212;color:#888;position:absolute;right:0;bottom:0}.whisky-detail .attributes .attribute{padding:0 2.5%;float:left;width:25%}.whisky-detail .attributes .attribute .attribute-key{line-height:120px;font-size:2.2em;margin:0 .3em;float:left}.whisky-detail .attributes .attribute .attribute-value{line-height:120px;font-size:1.4em;float:left}.taster-detail{opacity:0;animation:slideRight 0.35s cubic-bezier(0.4, 0, 0.2, 1) 0.25s forwards}.taster-detail .taster-detail-content{background:linear-gradient(30deg, #454545 0, #121212 95%);color:#FCFCFC;overflow:hidden;position:relative}.taster-detail .taster-detail-content .taster-detail-image{width:140px;height:140px;float:left}.taster-detail .taster-detail-content .name,.taster-detail .taster-detail-content p{margin-left:calc(140px + 1.5%)}.taster-detail .taster-detail-content .name{margin-top:35px;margin-bottom:10px;height:30px}.taster-detail .taster-detail-content .name h2{font-family:"Montserrat",Helvetica,Arial,sans-serif;font-size:2.8em;float:left;margin-right:20px}.taster-detail .taster-detail-content .name .material-icons,.taster-detail .taster-detail-content .name .pro{font-size:1.4em;line-height:30px;margin-right:6px;vertical-align:bottom}.taster-detail .taster-detail-content .name .pro{text-transform:uppercase}.taster-detail .taster-detail-content p{font-size:1.4em}.taster-detail .taster-detail-content .back-btn{top:50%;margin-top:-25px}.taster-detail>h3{text-align:center;font-family:"Montserrat",Helvetica,Arial,sans-serif;font-size:3.6em;margin:40px auto 0}.footer{background:linear-gradient(30deg, #FCFCFC 0, #EDEDED 35%);color:#888;padding:20px 0;width:100%;text-align:center;position:fixed;bottom:0}.footer p{font-size:1.2em}.footer p .material-icons{color:red;font-size:100%;vertical-align:bottom}.footer p a{color:#454545;transition:all 0.25s cubic-bezier(0.4, 0, 0.2, 1)}.footer p a:hover{color:#121212}@media only screen and (max-width: 600px){.hero h2,.hero p{margin-left:10%;margin-right:10%}.hero h2{font-size:2em;padding-top:18%}.hero p{font-size:1.6em}.hero .attr{right:0;width:100%}.featured>h2{font-size:1.8em}.featured .rating-comparison-item h3{width:80px;font-size:1.2em}.featured .rating-comparison-item .comparison-bar{width:calc(100% - 90px)}.featured .favorite-list-item{width:97%}.featured .favorite-list-item>h3{font-size:1.2em}.featured.age-price-comparison .age-price-comparison-item{width:97%}.featured.age-price-comparison .age-price-comparison-item>h3{font-size:1.2em}.featured.age-price-comparison .age-price-comparison-item .age-price-comparison-detail{padding:20px 10px;float:left;width:100%}.featured.age-price-comparison .age-price-comparison-item .age-price-comparison-detail .price-comparison-detail-card{border-bottom-color:transparent;border-right:1px solid #FCFCFC}.featured.age-price-comparison .age-price-comparison-item .age-price-comparison-detail .price-comparison-detail-card,.featured.age-price-comparison .age-price-comparison-item .age-price-comparison-detail .age-comparison-detail-card{width:50%;float:left}.featured.age-price-comparison .age-price-comparison-item .age-price-comparison-detail h4{font-size:2.6em;margin:0 auto 10px}.featured.age-price-comparison .age-price-comparison-item .age-price-comparison-detail p{margin-bottom:0}.container{margin:100px auto 52px}.container-list .container-list-item{margin:0 auto 1.5%;width:100%}.container-list .container-list-item .container-image{width:100px}.container-list .container-list-item .container-detail{height:100px;width:calc(100% - 100px);float:right}.container-list .container-list-item .container-detail h2,.container-list .container-list-item .container-detail h3{margin-left:0}.container-list .container-list-item .container-detail h2{padding:25px 0 0 15px;height:50px}.container-list .container-list-item .container-detail h4{left:auto;right:0;height:100px;line-height:100px}.taster-list .taster-list-item .container-detail h2,.taster-list .taster-list-item .container-detail h3{text-align:left;margin-left:15px;padding-left:0}.taster-detail .taster-detail-content .taster-detail-image{width:100px;height:100px}.taster-detail .taster-detail-content .name{margin-left:115px;margin-top:25px;margin-bottom:10px;height:30px}.taster-detail .taster-detail-content .name h2{font-size:1.8em;margin-right:10px}.taster-detail .taster-detail-content .name .pro,.taster-detail .taster-detail-content .name .material-icons{font-size:1.2em;line-height:20px}.taster-detail .taster-detail-content p{margin-left:115px;font-size:1.2em}.taster-detail .back-btn{top:50%;margin-top:-18px;width:36px;height:36px;line-height:36px}.taster-detail h3{font-size:1.8em;margin:30px auto 10px}}\n',""])},193:function(e,t,r){e.exports=r.p+"src/assets/images/hero-banner.jpg"},35:function(e,t,r){"use strict";r.d(t,"d",function(){return n}),r.d(t,"k",function(){return i}),r.d(t,"e",function(){return a}),r.d(t,"l",function(){return o}),r.d(t,"a",function(){return c}),r.d(t,"h",function(){return s}),r.d(t,"g",function(){return l}),r.d(t,"f",function(){return p}),r.d(t,"b",function(){return u}),r.d(t,"j",function(){return d}),r.d(t,"c",function(){return f}),r.d(t,"i",function(){return m});var n="FETCH_WHISKIES";function i(){return function(e,t,r){return r.getWhiskies().then(function(t){return e({type:n,payload:t}),t}).catch(function(e){throw new Error(e)})}}var a="FETCH_WHISKY_BY_ID";function o(e,t){return function(r,n,i){return i.getWhiskyById(e,t).then(function(e){return r({type:a,payload:e}),e}).catch(function(e){throw new Error(e)})}}var c="FETCH_FAVORITE_WHISKIES";function s(e){return function(t,r,n){return n.getFavoriteWhiskies(e).then(function(e){return t({type:c,payload:e}),e}).catch(function(e){throw new Error(e)})}}var l="FILTER_WHISKIES_BY_TYPE";var p="FILTER_WHISKIES_BY_PROFILE";var u="FETCH_TASTERS";function d(){return function(e,t,r){return r.getTasters().then(function(t){return e({type:u,payload:t}),t}).catch(function(e){throw new Error(e)})}}var f="FETCH_TASTER_BY_ID";function m(e,t,r){return function(n,i,a){return a.getTasterById(e,t,r).then(function(e){return n({type:f,payload:e}),e}).catch(function(e){throw new Error(e)})}}},396:function(e,t,r){"use strict";r.r(t);var n=r(1),i=r.n(n),a=r(156),o=r.n(a),c=r(111),s=r(39),l=r(158),p=r(114),u=r(35);function d(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){m(e,t,r[t])})}return e}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var h={all:[],favorites:{},transduced:[],selected:{}};function g(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){y(e,t,r[t])})}return e}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var x={all:[],selected:{}},v=Object(s.c)({whiskies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u.d:return f({},e,{all:d(t.payload),transduced:d(t.payload)});case u.a:return f({},e,{favorites:t.payload});case u.e:return f({},e,{selected:t.payload});case u.g:case u.f:return f({},e,{transduced:d(t.payload)});default:return f({},e)}},tasters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u.b:return b({},e,{all:g(t.payload)});case u.c:return b({},e,{selected:t.payload});default:return b({},e)}}}),w=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,k=Object(s.e)(v,w(Object(s.a)(l.a.withExtraArgument(p.a)))),E=r(400),z=r(401),F=r(398),C=r(2),O=r(397),_=i.a.memo(function(){return i.a.createElement("div",{className:"navigation"},i.a.createElement(O.a,{to:"/whiskies"},i.a.createElement("i",{className:"material-icons"},"local_bar"),"Whiskies"),i.a.createElement(O.a,{to:"/tasters"},i.a.createElement("i",{className:"material-icons"},"people"),"Tasters"))}),j=i.a.memo(function(){return i.a.createElement("header",{className:"header"},i.a.createElement("h1",null,i.a.createElement(O.a,{to:"/"},"whiskypick")),i.a.createElement(_,null))}),A=i.a.memo(function(){return i.a.createElement("footer",{className:"footer"},i.a.createElement("p",null,"Made with ",i.a.createElement("i",{className:"material-icons"},"favorite")," by ",i.a.createElement("a",{href:"https://kevinnayar.github.io/",target:"_blank",rel:"noopener noreferrer"},"Kevin Nayar")))}),R=function(e){var t=e.children;return i.a.createElement("section",{className:"app"},i.a.createElement(j,null),i.a.createElement("div",{className:"container"},t),i.a.createElement(A,null))};R.propTypes={children:C.node.isRequired};var S=R,I=r(108),T=i.a.lazy(function(){return r.e(6).then(r.bind(null,516))}),H=i.a.lazy(function(){return r.e(5).then(r.bind(null,515))}),M=i.a.lazy(function(){return Promise.all([r.e(9),r.e(7)]).then(r.bind(null,517))}),D=i.a.lazy(function(){return r.e(8).then(r.bind(null,519))}),P=i.a.lazy(function(){return r.e(4).then(r.bind(null,518))});var B=function(){return i.a.createElement(E.a,null,i.a.createElement(S,null,i.a.createElement(n.Suspense,{fallback:i.a.createElement(I.a,null)},i.a.createElement(z.a,null,i.a.createElement(F.a,{path:"/",exact:!0,render:function(e){return i.a.createElement(T,e)}}),i.a.createElement(F.a,{path:"/whiskies",exact:!0,render:function(e){return i.a.createElement(H,e)}}),i.a.createElement(F.a,{path:"/whiskies/:distilleryId/:whiskyId",exact:!0,render:function(e){return i.a.createElement(M,e)}}),i.a.createElement(F.a,{path:"/tasters",exact:!0,render:function(e){return i.a.createElement(D,e)}}),i.a.createElement(F.a,{path:"/tasters/:tasterId",exact:!0,render:function(e){return i.a.createElement(P,e)}})))))};r(189);o.a.render(i.a.createElement(function(){return i.a.createElement(c.a,{store:k},i.a.createElement(B,null))},null),document.getElementById("root"))},60:function(e,t,r){"use strict";r.d(t,"a",function(){return a});var n=function(e){return e.replace(/[^a-zA-Z0-9 ]/g,"")},i=function(e){return e.replace("â","a").replace("é","e")};function a(e){return n(i(e).toLowerCase()).replace(/ /g,"-")}}});