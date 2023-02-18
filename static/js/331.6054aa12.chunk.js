/*! For license information please see 331.6054aa12.chunk.js.LICENSE.txt */
(self.webpackChunknetwork_yarn=self.webpackChunknetwork_yarn||[]).push([[331],{8331:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return Z}});var t=n(5671),s=n(3144),u=n(136),o=n(516),i=n(8687),a=n(5987),c=n(2791),l=n(4942),g=n(9439),h="Paginator_paginator__Q7U7k",d="Paginator_pageNumber__psdT0",X="Paginator_selectPage__6JEsS",f=n(1694),p=n.n(f),x=n(184),w=function(e){for(var r=e.currentPage,n=e.totalItemsCount,t=e.pageSize,s=e.onPageChanged,u=e.portionSize,o=void 0===u?10:u,i=Math.ceil(n/t),a=[],f=1;f<=i;f++)a.push(f);var w=Math.ceil(i/o),v=(0,c.useState)(1),C=(0,g.Z)(v,2),m=C[0],b=C[1],T=(m-1)*o+1,P=m*o;return(0,x.jsx)("div",{children:(0,x.jsxs)("div",{className:h,children:[m>1&&(0,x.jsx)("button",{onClick:function(){b(m-1)},children:"PREV"}),a.filter((function(e){return e>=T&&e<=P})).map((function(e){return(0,x.jsx)("span",{className:p()((0,l.Z)({},X,r===e),d),onClick:function(){s(e)},children:e},e)})),w>m&&(0,x.jsx)("button",{onClick:function(){b(m+1)},children:"NEXT"})]})})},v="Users_user__zQ4Uu",C="Users_photoFollow__YhsEy",m="Users_userPhoto__ZTsyz",b="Users_aboutUser__xHRez",T="Users_location__nynXn",P=n(6755),z=n(1087),y=function(e){var r=e.user,n=e.followingInProgress,t=e.unfollowThunkCreator,s=e.followThunkCreator;return(0,x.jsxs)("div",{className:v,children:[(0,x.jsxs)("span",{className:C,children:[(0,x.jsx)("div",{children:(0,x.jsx)(z.OL,{to:"/profile/"+r.id,children:(0,x.jsx)("img",{src:null!=r.photos.small?r.photos.small:P,alt:"avatar",className:m})})}),(0,x.jsx)("div",{children:r.followed?(0,x.jsx)("button",{disabled:n.includes(r.id),onClick:function(){t(r.id)},children:" Unfollow "}):(0,x.jsx)("button",{disabled:n.includes(r.id),onClick:function(){s(r.id)},children:"Follow"})})]}),(0,x.jsxs)("span",{className:b,children:[(0,x.jsxs)("span",{children:[(0,x.jsx)("div",{children:r.name}),(0,x.jsx)("div",{children:r.id}),(0,x.jsx)("div",{children:"user.status"})]}),(0,x.jsxs)("span",{className:T,children:[(0,x.jsx)("div",{children:"user.location.city"}),(0,x.jsx)("div",{children:"user.location.country"})]})]})]},r.id)},S=["users","totalUsersCount","pageSize","currentPage","onPageChanged"],G=function(e){var r=e.users,n=e.totalUsersCount,t=e.pageSize,s=e.currentPage,u=e.onPageChanged,o=(0,a.Z)(e,S);return(0,x.jsxs)("div",{children:[(0,x.jsx)(w,{totalItemsCount:n,pageSize:t,currentPage:s,onPageChanged:u}),r.map((function(e){return(0,x.jsx)(y,{user:e,followingInProgress:o.followingInProgress,followThunkCreator:o.followThunkCreator,unfollowThunkCreator:o.unfollowThunkCreator},e.id)}))]})},H=n(2338),k=n(9828),j=n(7781),N=function(e){return e.usersPage.users},B=function(e){return e.usersPage.pageSize},D=function(e){return e.usersPage.totalUsersCount},L=function(e){return e.usersPage.currentPage},U=function(e){return e.usersPage.isFetching},A=function(e){return e.usersPage.followingInProgress},M=function(e){(0,u.Z)(n,e);var r=(0,o.Z)(n);function n(){var e;(0,t.Z)(this,n);for(var s=arguments.length,u=new Array(s),o=0;o<s;o++)u[o]=arguments[o];return(e=r.call.apply(r,[this].concat(u))).onPageChanged=function(r){var n=e.props.pageSize;e.props.setCurrentPage(r),e.props.getUserThunkCreator(r,n)},e}return(0,s.Z)(n,[{key:"componentDidMount",value:function(){var e=this.props,r=e.currentPage,n=e.pageSize;this.props.getUserThunkCreator(r,n)}},{key:"render",value:function(){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("div",{children:this.props.isFetching?(0,x.jsx)(k.Z,{}):null}),(0,x.jsx)(G,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,followingInProgress:this.props.followingInProgress,unfollowThunkCreator:this.props.unfollowThunkCreator,followThunkCreator:this.props.followThunkCreator})]})}}]),n}(c.Component),Z=(0,j.qC)((0,i.$j)((function(e){return{users:N(e),pageSize:B(e),totalUsersCount:D(e),currentPage:L(e),isFetching:U(e),followingInProgress:A(e)}}),{setCurrentPage:H.D4,toggleFollowingProgress:H.ZH,getUserThunkCreator:H.C4,unfollowThunkCreator:H.Ow,followThunkCreator:H.AC}))(M)},1694:function(e,r){var n;!function(){"use strict";var t={}.hasOwnProperty;function s(){for(var e=[],r=0;r<arguments.length;r++){var n=arguments[r];if(n){var u=typeof n;if("string"===u||"number"===u)e.push(n);else if(Array.isArray(n)){if(n.length){var o=s.apply(null,n);o&&e.push(o)}}else if("object"===u){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var i in n)t.call(n,i)&&n[i]&&e.push(i)}}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(n=function(){return s}.apply(r,[]))||(e.exports=n)}()},6755:function(e){"use strict";e.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=331.6054aa12.chunk.js.map