webpackJsonp([19],{1002:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(140),a=t.n(r),s=t(56),u=(t.n(s),t(1744)),o=t(40),i=t.n(o);n.default={namespace:"login",state:{loggedIn:!1,message:"",user:{}},subscriptions:{setup:function(e){var n=e.history;e.dispatch;return n.listen(function(e){-1!==e.pathname.indexOf("/sign/login")&&i.a.removeStore("user")})}},effects:{login:a.a.mark(function e(n,t){var r,o,c,f,p=n.payload,l=t.call,g=t.put;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(u.a,p);case 2:if(r=e.sent,o=r.status,c=r.message,f=r.data,!o){e.next=12;break}return i.a.setStore("user",f),e.next=10,g(s.routerRedux.replace("/"));case 10:e.next=14;break;case 12:return e.next=14,g({type:"loginError",payload:{message:c}});case 14:case"end":return e.stop()}},e,this)}),logout:a.a.mark(function e(n,t){t.put;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e,this)})},reducers:{loginSuccess:function(e,n){var t=n.payload;return Object.assign({},e,{loggedIn:!0,message:"",user:t})},loginError:function(e,n){var t=n.payload;return Object.assign({},e,{loggedIn:!1,message:t.message})}}}},1744:function(e,n,t){"use strict";function r(e){return function(){var n=e.apply(this,arguments);return new Promise(function(e,t){function r(a,s){try{var u=n[a](s),o=u.value}catch(e){return void t(e)}if(!u.done)return Promise.resolve(o).then(function(e){r("next",e)},function(e){r("throw",e)});e(o)}return r("next")})}}t.d(n,"a",function(){return i});var a=t(140),s=t.n(a),u=t(40),o=t.n(u),i=function(){var e=r(s.a.mark(function e(n){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.a.post("/user/login",n));case 1:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}()}});
//# sourceMappingURL=19.16680e10.chunk.js.map