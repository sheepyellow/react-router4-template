(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"2kvu":function(e,n,t){"use strict";t.r(n);var r=t("Yz+Y"),a=t.n(r),o=t("iCc5"),u=t.n(o),i=t("V7oC"),c=t.n(i),s=t("FYw3"),l=t.n(s),p=t("mRg0"),m=t.n(p),h=t("q1tI"),f=t.n(h),d=t("/MKj"),v=t("ANjH"),b=t("2iEm"),E=t("QbLZ"),g=t.n(E),C=function(e){function n(e){u()(this,n);var t=l()(this,(n.__proto__||a()(n)).call(this,e));return t.handleClick=function(){var e=t.props;(0,e.postNewInfo)(e.inputInfo).then(function(e){return console.log("success return ",e)}).catch(function(e){return console.error(e)})},t}return m()(n,e),c()(n,[{key:"handleChange",value:function(e,n){var t=this.props,r=t.changeInputInfo,a=t.inputInfo,o=g()({},a);o[e]=n.target.value,r(o)}},{key:"render",value:function(){var e=this.props.inputInfo,n=e.name,t=e.tel;return f.a.createElement("div",{className:"new-member"},f.a.createElement("p",null,"姓名：",f.a.createElement("input",{type:"text",value:n,onChange:this.handleChange.bind(this,"name")})),f.a.createElement("p",null,"电话：",f.a.createElement("input",{type:"tel",value:t,onChange:this.handleChange.bind(this,"tel")})),f.a.createElement("button",{onClick:this.handleClick},"提交"))}}]),n}(h.PureComponent),I=function(e){function n(e){return u()(this,n),l()(this,(n.__proto__||a()(n)).call(this,e))}return m()(n,e),c()(n,[{key:"render",value:function(){return this.props.memberList.map(function(e,n){return f.a.createElement("li",{key:n},f.a.createElement("p",null,"name:",f.a.createElement("span",null,e.name)),f.a.createElement("p",null,"tel:",f.a.createElement("span",null,e.tel)))})}}]),n}(h.PureComponent),w=function(e){var n=e.memberList;return f.a.createElement("div",{className:"member-list-wrap"},f.a.createElement("ul",{className:"member-list"},f.a.createElement(I,{memberList:n})))},k=(t("RIAK"),function(e){function n(e){return u()(this,n),l()(this,(n.__proto__||a()(n)).call(this,e))}return m()(n,e),c()(n,[{key:"componentWillMount",value:function(){this.props.getMemberList()}},{key:"render",value:function(){var e=this.props,n=e.homeState,t=e.changeInputInfo,r=e.postNewInfo,a=n.memberList,o=n.inputInfo;return f.a.createElement("div",{id:"home-container"},f.a.createElement(C,{inputInfo:o,changeInputInfo:t,postNewInfo:r}),f.a.createElement(w,{memberList:a}),f.a.createElement(b.a,{to:{pathname:"/test",search:"?name=homename",state:{mold:"add"}},className:"home-link"},"点击跳转到 test page sasas"))}}]),n}(h.Component)),_=t("14Xm"),y=t.n(_),N=t("D3Ub"),j=t.n(N),L=t("0RRa"),O=t("4d7F"),T=t.n(O),A=t("P2sY"),M=t.n(A),P=t("sk9p"),x=t.n(P),R=t("vDqi"),Y=t.n(R),q="http://192.168.199.203:3167";function D(e){return e.replace(/\/$/,"")}function G(e){return/^\//.test(e)?e:"/"+e}function S(e){var n=e.method,t=e.url,r=e.data,a=void 0===r?{}:r,o=e.host,u=e.headers;n=n&&n.toUpperCase()||"GET";var i=function(e){var n=e.split("?"),t=x()(n,2),r=t[0],a=void 0===r?"":r,o=t[1],u={};return(void 0===o?"":o).split("&").forEach(function(e){var n=e.split("="),t=x()(n,2),r=t[0],a=t[1];u[r]=a}),{path:a,params:u}}(t),c=i.path,s=i.params;return t=o?""+D(o)+G(c):""+D(q)+G(c),Y()({url:t,method:n,headers:u,data:"GET"===n?void 0:a,params:M()("GET"===n?a:{},s)}).catch(function(e){return console.log("request error, HTTP CODE: ",e.response.status),T.a.reject(e)})}console.log(q);var F=function(e,n){return S({url:e,data:n})},H=function(e,n){return S({method:"POST",url:e,data:n})};function J(){return F("/list").then(function(e){return e.data})}function K(e){return e.name?H("/list",e).then(function(e){return e.data}):T.a.reject("name is wrong")}function U(){return function(e){J().then(function(n){return e({type:L.b,msg:n})}).catch(function(e){return console.log("error ",e)})}}function z(e){return{type:L.a,msg:e}}function Q(e){var n=this;return console.log("newMember",e),function(){var t=j()(y.a.mark(function t(r){var a;return y.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,K(e);case 2:return n.next=4,J();case 4:return a=n.sent,r({type:L.b,msg:a}),n.abrupt("return","success");case 7:case"end":return n.stop()}},t,n)}));return function(e){return t.apply(this,arguments)}}()}var V=function(e){function n(e){return u()(this,n),l()(this,(n.__proto__||a()(n)).call(this,e))}return m()(n,e),c()(n,[{key:"render",value:function(){return f.a.createElement(k,this.props)}}]),n}(h.Component);n.default=Object(d.connect)(function(e){return{homeState:e.home}},function(e){return{getMemberList:Object(v.bindActionCreators)(U,e),changeInputInfo:Object(v.bindActionCreators)(z,e),postNewInfo:Object(v.bindActionCreators)(Q,e)}})(V)}}]);