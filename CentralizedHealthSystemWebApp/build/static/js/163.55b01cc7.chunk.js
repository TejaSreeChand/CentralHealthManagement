"use strict";(self.webpackChunkchswebapp=self.webpackChunkchswebapp||[]).push([[163],{6163:function(e,n,r){r.r(n),r.d(n,{default:function(){return P}});var t=r(9439),o=r(403),a=r(3746),i=r(165),s=r(8870),l=r(1889),c=r(890),u=r(3044),d=r(8096),p=r(4430),f=r(3466),v=r(3400),m=r(6151),h=r(533),Z=r(2739),g=r(3239),x=r(1243),b=r(2791),y=r(7689),w=r(4910),j=r(380),S=r(184);function P(){var e=b.useState(null),n=(0,t.Z)(e,2),r=n[0],P=n[1],k=b.useState(null),z=(0,t.Z)(k,2),C=z[0],R=z[1],M=b.useState(!1),A=(0,t.Z)(M,2),T=A[0],L=A[1],D=b.useState(!0),E=(0,t.Z)(D,2),I=E[0],N=E[1],F=b.useState(!0),V=(0,t.Z)(F,2),W=V[0],H=V[1],O=b.useState(null),B=(0,t.Z)(O,2),q=B[0],U=B[1],G=(0,y.TH)(),J=(0,y.s0)(),K=b.useState(""),Q=(0,t.Z)(K,2),X=Q[0],Y=Q[1],$=b.useState(""),_=(0,t.Z)($,2),ee=_[0],ne=_[1],re=b.useState(!1),te=(0,t.Z)(re,2),oe=te[0],ae=te[1],ie=b.useState(!1),se=(0,t.Z)(ie,2),le=se[0],ce=se[1],ue={alertMessage:X,alertType:ee},de=function(){ae(!0)},pe=function(e){"Password"===e.target.id&&P(e.target.value),"ConfirmPassword"===e.target.id&&R(e.target.value)};return(0,b.useEffect)((function(){var e=new URLSearchParams(G.search);U(e.get("token"))}),[]),(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(s.Z,{children:(0,S.jsxs)(l.ZP,{container:!0,spacing:0,sx:{height:"100vh"},children:[(0,S.jsx)(l.ZP,{item:!0,md:7,display:{xs:"none",md:"block"},sx:{backgroundImage:"url(".concat(w,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"}}),(0,S.jsx)(l.ZP,{item:!0,xs:12,md:5,children:(0,S.jsxs)(s.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},style:{marginTop:100},children:[(0,S.jsx)(c.Z,{component:"h1",variant:"h4",children:"Centralized Health System"}),(0,S.jsx)(u.Z,{sx:{m:1,bgcolor:"primary.main"},style:{marginTop:100},children:(0,S.jsx)(o.Z,{})}),(0,S.jsx)(c.Z,{component:"h1",variant:"h5",children:"Reset Password"}),(0,S.jsxs)("div",{style:{paddingLeft:125,paddingRight:125},children:[(0,S.jsx)(d.Z,{variant:"standard",fullWidth:!0,style:{marginTop:10},children:(0,S.jsx)(p.Z,{id:"Password",label:"Password",type:T?"text":"password",fullWidth:!0,InputProps:{endAdornment:(0,S.jsx)(f.Z,{position:"end",children:(0,S.jsx)(v.Z,{"aria-label":"toggle password visibility",onClick:function(){L(!T)},children:T?(0,S.jsx)(i.Z,{}):(0,S.jsx)(a.Z,{})})})},onChange:function(e){N(!0),pe(e)},error:!I,helperText:I?"":"Please Enter your Password!!"})}),(0,S.jsx)(d.Z,{variant:"standard",fullWidth:!0,style:{marginTop:10},children:(0,S.jsx)(p.Z,{id:"ConfirmPassword",label:"Confirm Password",type:T?"text":"password",fullWidth:!0,InputProps:{endAdornment:(0,S.jsx)(f.Z,{position:"end",children:(0,S.jsx)(v.Z,{"aria-label":"toggle password visibility",onClick:function(){L(!T)},children:T?(0,S.jsx)(i.Z,{}):(0,S.jsx)(a.Z,{})})})},onChange:function(e){H(!0),pe(e)},error:!W,helperText:W?"":"Please Enter Password same as above!!"})}),(0,S.jsx)(d.Z,{fullWidth:!0,children:(0,S.jsx)(m.Z,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,style:{marginTop:10,alignSelf:"center"},onClick:function(){!function(){if(ce(!0),ce(!0),null!==r&&""!==r&&r===C){var e={password:r,token:q};x.Z.post("users/reset-password",e).then((function(e){204===e.status?(console.log(e.data),ce(!1),Y("Password reset successful!!!"),ne("success"),de(),setTimeout((function(){J("/Login")}),2e3)):401!==e.response.status&&404!==e.response.status&&500!==e.response.status||(ce(!1),Y(e.response.data.message),ne("error"),de())})).catch((function(e){console.log(e.config),console.log(e.message),console.log(e.response),ce(!1),Y("Password reset unsuccessful!!! please try again"),ne("error"),de()}))}else null!==r&&""!==r||N(!1),r!==C&&H(!1),ce(!1)}()},children:"Reset Password"})}),(0,S.jsxs)(c.Z,{style:{marginTop:10},children:["Already have an account?"," ",(0,S.jsx)(h.Z,{onClick:function(){window.location.href="/login"},children:"Login"})]})]})]})})]})}),oe&&(0,S.jsx)(j.p,{alertObj:ue,snackbar:oe,snackbarClose:function(){ae(!1)}}),(0,S.jsx)(Z.Z,{sx:{color:"#fff",zIndex:function(e){return e.zIndex.drawer+1}},open:le,children:(0,S.jsx)(g.Z,{color:"inherit"})})]})}},403:function(e,n,r){var t=r(4836);n.Z=void 0;var o=t(r(5649)),a=r(184),i=(0,o.default)((0,a.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"LockOutlined");n.Z=i},165:function(e,n,r){var t=r(4836);n.Z=void 0;var o=t(r(5649)),a=r(184),i=(0,o.default)((0,a.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff");n.Z=i},3044:function(e,n,r){r.d(n,{Z:function(){return y}});var t=r(9439),o=r(3366),a=r(7462),i=r(2791),s=r(8182),l=r(4419),c=r(6934),u=r(1402),d=r(9201),p=r(184),f=(0,d.Z)((0,p.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),v=r(5878),m=r(1217);function h(e){return(0,m.Z)("MuiAvatar",e)}(0,v.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var Z=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],g=(0,c.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(e,n){var r=e.ownerState;return[n.root,n[r.variant],r.colorDefault&&n.colorDefault]}})((function(e){var n=e.theme,r=e.ownerState;return(0,a.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:n.typography.fontFamily,fontSize:n.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===r.variant&&{borderRadius:(n.vars||n).shape.borderRadius},"square"===r.variant&&{borderRadius:0},r.colorDefault&&(0,a.Z)({color:(n.vars||n).palette.background.default},n.vars?{backgroundColor:n.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===n.palette.mode?n.palette.grey[400]:n.palette.grey[600]}))})),x=(0,c.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(e,n){return n.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),b=(0,c.ZP)(f,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(e,n){return n.fallback}})({width:"75%",height:"75%"});var y=i.forwardRef((function(e,n){var r=(0,u.Z)({props:e,name:"MuiAvatar"}),c=r.alt,d=r.children,f=r.className,v=r.component,m=void 0===v?"div":v,y=r.imgProps,w=r.sizes,j=r.src,S=r.srcSet,P=r.variant,k=void 0===P?"circular":P,z=(0,o.Z)(r,Z),C=null,R=function(e){var n=e.crossOrigin,r=e.referrerPolicy,o=e.src,a=e.srcSet,s=i.useState(!1),l=(0,t.Z)(s,2),c=l[0],u=l[1];return i.useEffect((function(){if(o||a){u(!1);var e=!0,t=new Image;return t.onload=function(){e&&u("loaded")},t.onerror=function(){e&&u("error")},t.crossOrigin=n,t.referrerPolicy=r,t.src=o,a&&(t.srcset=a),function(){e=!1}}}),[n,r,o,a]),c}((0,a.Z)({},y,{src:j,srcSet:S})),M=j||S,A=M&&"error"!==R,T=(0,a.Z)({},r,{colorDefault:!A,component:m,variant:k}),L=function(e){var n=e.classes,r={root:["root",e.variant,e.colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,l.Z)(r,h,n)}(T);return C=A?(0,p.jsx)(x,(0,a.Z)({alt:c,src:j,srcSet:S,sizes:w,ownerState:T,className:L.img},y)):null!=d?d:M&&c?c[0]:(0,p.jsx)(b,{ownerState:T,className:L.fallback}),(0,p.jsx)(g,(0,a.Z)({as:m,ownerState:T,className:(0,s.Z)(L.root,f),ref:n},z,{children:C}))}))},3466:function(e,n,r){r.d(n,{Z:function(){return j}});var t=r(4942),o=r(3366),a=r(7462),i=r(2791),s=r(8182),l=r(4419),c=r(4036),u=r(890),d=r(3840),p=r(2930),f=r(6934),v=r(5878),m=r(1217);function h(e){return(0,m.Z)("MuiInputAdornment",e)}var Z,g=(0,v.Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),x=r(1402),b=r(184),y=["children","className","component","disablePointerEvents","disableTypography","position","variant"],w=(0,f.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:function(e,n){var r=e.ownerState;return[n.root,n["position".concat((0,c.Z)(r.position))],!0===r.disablePointerEvents&&n.disablePointerEvents,n[r.variant]]}})((function(e){var n=e.theme,r=e.ownerState;return(0,a.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(n.vars||n).palette.action.active},"filled"===r.variant&&(0,t.Z)({},"&.".concat(g.positionStart,"&:not(.").concat(g.hiddenLabel,")"),{marginTop:16}),"start"===r.position&&{marginRight:8},"end"===r.position&&{marginLeft:8},!0===r.disablePointerEvents&&{pointerEvents:"none"})})),j=i.forwardRef((function(e,n){var r=(0,x.Z)({props:e,name:"MuiInputAdornment"}),t=r.children,f=r.className,v=r.component,m=void 0===v?"div":v,g=r.disablePointerEvents,j=void 0!==g&&g,S=r.disableTypography,P=void 0!==S&&S,k=r.position,z=r.variant,C=(0,o.Z)(r,y),R=(0,p.Z)()||{},M=z;z&&R.variant,R&&!M&&(M=R.variant);var A=(0,a.Z)({},r,{hiddenLabel:R.hiddenLabel,size:R.size,disablePointerEvents:j,position:k,variant:M}),T=function(e){var n=e.classes,r=e.disablePointerEvents,t=e.hiddenLabel,o=e.position,a=e.size,i=e.variant,s={root:["root",r&&"disablePointerEvents",o&&"position".concat((0,c.Z)(o)),i,t&&"hiddenLabel",a&&"size".concat((0,c.Z)(a))]};return(0,l.Z)(s,h,n)}(A);return(0,b.jsx)(d.Z.Provider,{value:null,children:(0,b.jsx)(w,(0,a.Z)({as:m,ownerState:A,className:(0,s.Z)(T.root,f),ref:n},C,{children:"string"!==typeof t||P?(0,b.jsxs)(i.Fragment,{children:["start"===k?Z||(Z=(0,b.jsx)("span",{className:"notranslate",children:"\u200b"})):null,t]}):(0,b.jsx)(u.Z,{color:"text.secondary",children:t})}))})}))},533:function(e,n,r){r.d(n,{Z:function(){return C}});var t=r(3433),o=r(9439),a=r(4942),i=r(3366),s=r(7462),l=r(2791),c=r(8182),u=r(4419),d=r(4036),p=r(6934),f=r(1402),v=r(3031),m=r(2071),h=r(890),Z=r(5878),g=r(1217);function x(e){return(0,g.Z)("MuiLink",e)}var b=(0,Z.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),y=r(8529),w=r(2065),j={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},S=function(e){var n=e.theme,r=e.ownerState,t=function(e){return j[e]||e}(r.color),o=(0,y.DW)(n,"palette.".concat(t),!1)||r.color,a=(0,y.DW)(n,"palette.".concat(t,"Channel"));return"vars"in n&&a?"rgba(".concat(a," / 0.4)"):(0,w.Fq)(o,.4)},P=r(184),k=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],z=(0,p.ZP)(h.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(e,n){var r=e.ownerState;return[n.root,n["underline".concat((0,d.Z)(r.underline))],"button"===r.component&&n.button]}})((function(e){var n=e.theme,r=e.ownerState;return(0,s.Z)({},"none"===r.underline&&{textDecoration:"none"},"hover"===r.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===r.underline&&(0,s.Z)({textDecoration:"underline"},"inherit"!==r.color&&{textDecorationColor:S({theme:n,ownerState:r})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===r.component&&(0,a.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(b.focusVisible),{outline:"auto"}))})),C=l.forwardRef((function(e,n){var r=(0,f.Z)({props:e,name:"MuiLink"}),a=r.className,p=r.color,h=void 0===p?"primary":p,Z=r.component,g=void 0===Z?"a":Z,b=r.onBlur,y=r.onFocus,w=r.TypographyClasses,S=r.underline,C=void 0===S?"always":S,R=r.variant,M=void 0===R?"inherit":R,A=r.sx,T=(0,i.Z)(r,k),L=(0,v.Z)(),D=L.isFocusVisibleRef,E=L.onBlur,I=L.onFocus,N=L.ref,F=l.useState(!1),V=(0,o.Z)(F,2),W=V[0],H=V[1],O=(0,m.Z)(n,N),B=(0,s.Z)({},r,{color:h,component:g,focusVisible:W,underline:C,variant:M}),q=function(e){var n=e.classes,r=e.component,t=e.focusVisible,o=e.underline,a={root:["root","underline".concat((0,d.Z)(o)),"button"===r&&"button",t&&"focusVisible"]};return(0,u.Z)(a,x,n)}(B);return(0,P.jsx)(z,(0,s.Z)({color:h,className:(0,c.Z)(q.root,a),classes:w,component:g,onBlur:function(e){E(e),!1===D.current&&H(!1),b&&b(e)},onFocus:function(e){I(e),!0===D.current&&H(!0),y&&y(e)},ref:O,ownerState:B,variant:M,sx:[].concat((0,t.Z)(Object.keys(j).includes(h)?[]:[{color:h}]),(0,t.Z)(Array.isArray(A)?A:[A]))},T))}))},4910:function(e,n,r){e.exports=r.p+"static/media/login.f6aa25bff17bd5aa00f3.jpg"}}]);
//# sourceMappingURL=163.55b01cc7.chunk.js.map