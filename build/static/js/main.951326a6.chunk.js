(this.webpackJsonphashlips_nft_minting_dapp=this.webpackJsonphashlips_nft_minting_dapp||[]).push([[0],{358:function(n,e){},360:function(n,e){},362:function(n,e){},366:function(n,e){},367:function(n,e){},392:function(n,e){},394:function(n,e){},404:function(n,e){},406:function(n,e){},416:function(n,e){},418:function(n,e){},433:function(n,e){},466:function(n,e){},467:function(n,e){},536:function(n,e){},538:function(n,e){},543:function(n,e){},545:function(n,e){},552:function(n,e){},564:function(n,e){},567:function(n,e){},572:function(n,e){},656:function(n,e){},688:function(n,e){},760:function(n,e){},766:function(n,e){},779:function(n,e){},785:function(n,e,t){},786:function(n,e,t){"use strict";t.r(e);var c,r,o,a,i,s,l,d,u,x,p,b,j,h,f,g,O=t(3),m=t(126),y=t.n(m),v=t(0),C=t.n(v),w=t(4),A=t(108),E=t(25),S=t(84),T=t(101),N=t.n(T),_=t(180),k=t.n(_),I=t(323),M=t.n(I),D=t(336),L=t(109),R=t(332),K=t(32),P={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},U=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CONNECTION_REQUEST":return Object(K.a)(Object(K.a)({},P),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(K.a)(Object(K.a)({},n),{},{loading:!1,account:e.payload.account,smartContract:e.payload.smartContract,web3:e.payload.web3});case"CONNECTION_FAILED":return Object(K.a)(Object(K.a)({},P),{},{loading:!1,errorMsg:e.payload});case"UPDATE_ACCOUNT":return Object(K.a)(Object(K.a)({},n),{},{account:e.payload.account});default:return n}},F={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},W=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CHECK_DATA_REQUEST":return Object(K.a)(Object(K.a)({},n),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(K.a)(Object(K.a)({},n),{},{loading:!1,totalSupply:e.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(K.a)(Object(K.a)({},F),{},{loading:!1,error:!0,errorMsg:e.payload});default:return n}},z=Object(L.b)({blockchain:U,data:W}),Y=[R.a],H=Object(L.c)(L.a.apply(void 0,Y)),B=Object(L.d)(z,H),G=function(n){return{type:"CHECK_DATA_FAILED",payload:n}},Q=function(){return function(){var n=Object(w.a)(C.a.mark((function n(e){var t;return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e({type:"CHECK_DATA_REQUEST"}),n.prev=1,n.next=4,B.getState().blockchain.smartContract.methods.totalSupply().call();case 4:t=n.sent,e({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:t}}),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0),e(G("Could not load data from contract."));case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}()},X={Walletconnect:{Package:D.a,Options:{infuraId:"dd180a507dde4ee39ebdd330fce06ff6",rpc:{4:"https://rinkeby.infura.io/v3/dd180a507dde4ee39ebdd330fce06ff6"}}}},q=function(n){return{type:"CONNECTION_FAILED",payload:n}},J=function(n){return function(){var e=Object(w.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"UPDATE_ACCOUNT",payload:{account:n}}),t(Q());case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},V=t(26),Z=V.a.div(c||(c=Object(E.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(n){var e=n.image;return e?"url(".concat(e,")"):"none"})),$=V.a.div(r||(r=Object(E.a)(["\n  height: 8px;\n  width: 8px;\n"]))),nn=V.a.div(o||(o=Object(E.a)(["\n  height: 16px;\n  width: 16px;\n"]))),en=V.a.div(a||(a=Object(E.a)(["\n  height: 24px;\n  width: 24px;\n"]))),tn=V.a.div(i||(i=Object(E.a)(["\n  height: 32px;\n  width: 32px;\n"]))),cn=V.a.div(s||(s=Object(E.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(n){var e=n.flex;return e||0}),(function(n){var e=n.fd;return e||"column"}),(function(n){var e=n.jc;return e||"flex-start"}),(function(n){var e=n.ai;return e||"flex-start"}),(function(n){return n.test?"pink":"none"}),(function(n){var e=n.image;return e?"url(".concat(e,")"):"none"})),rn=V.a.p(l||(l=Object(E.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),on=(V.a.p(d||(d=Object(E.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),V.a.p(u||(u=Object(E.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"])))),an=(V.a.div(x||(x=Object(E.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),t(6)),sn=V.a.button(p||(p=Object(E.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: var(--secondary);\n  padding: 10px;\n  font-weight: bold;\n  color: var(--secondary-text);\n  width: 100px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),ln=V.a.button(b||(b=Object(E.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--primary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),dn=V.a.div(j||(j=Object(E.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),un=V.a.img(h||(h=Object(E.a)(["\n  width: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),xn=V.a.img(f||(f=Object(E.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  border: 4px dashed var(--secondary);\n  background-color: var(--accent);\n  border-radius: 100%;\n  width: 200px;\n  @media (min-width: 900px) {\n    width: 250px;\n  }\n  @media (min-width: 1000px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n"]))),pn=V.a.a(g||(g=Object(E.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"])));var bn=function(){var n,e,t=Object(S.b)(),c=Object(S.c)((function(n){return n.blockchain})),r=Object(S.c)((function(n){return n.data})),o=Object(O.useState)(!1),a=Object(A.a)(o,2),i=a[0],s=a[1],l=Object(O.useState)("Click buy to mint your NFT."),d=Object(A.a)(l,2),u=d[0],x=d[1],p=Object(O.useState)(1),b=Object(A.a)(p,2),j=b[0],h=b[1],f=Object(O.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),g=Object(A.a)(f,2),m=g[0],y=g[1],v=function(){""!==c.account&&null!==c.smartContract&&t(Q(c.account))},E=function(){var n=Object(w.a)(C.a.mark((function n(){var e,t;return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return e=n.sent,n.next=5,e.json();case 5:t=n.sent,y(t);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(O.useEffect)((function(){E()}),[]),Object(O.useEffect)((function(){v()}),[c.account]),Object(an.jsx)(Z,{children:Object(an.jsxs)(cn,{flex:1,ai:"center",style:{padding:24,backgroundColor:"var(--primary)"},image:m.SHOW_BACKGROUND?"/config/images/bg.png":null,children:[Object(an.jsx)(un,{alt:"logo",src:"/config/images/logo.png"}),Object(an.jsx)(nn,{}),Object(an.jsxs)(dn,{flex:1,style:{padding:24},test:!0,children:[Object(an.jsx)(cn,{flex:1,jc:"center",ai:"center",children:Object(an.jsx)(xn,{alt:"example",src:"/config/images/example.gif"})}),Object(an.jsx)(tn,{}),Object(an.jsxs)(cn,{flex:2,jc:"center",ai:"center",style:{backgroundColor:"var(--accent)",padding:24,borderRadius:24,border:"4px dashed var(--secondary)",boxShadow:"0px 5px 11px 2px rgba(0,0,0,0.7)"},children:[Object(an.jsxs)(rn,{style:{textAlign:"center",fontSize:50,fontWeight:"bold",color:"var(--accent-text)"},children:[r.totalSupply," / ",m.MAX_SUPPLY]}),Object(an.jsx)(on,{style:{textAlign:"center",color:"var(--primary-text)"},children:Object(an.jsx)(pn,{target:"_blank",href:m.SCAN_LINK,children:(n=m.CONTRACT_ADDRESS,e=15,n.length>e?"".concat(n.substring(0,e),"..."):n)})}),Object(an.jsx)(nn,{}),Number(r.totalSupply)>=m.MAX_SUPPLY?Object(an.jsxs)(an.Fragment,{children:[Object(an.jsx)(rn,{style:{textAlign:"center",color:"var(--accent-text)"},children:"The sale has ended."}),Object(an.jsxs)(on,{style:{textAlign:"center",color:"var(--accent-text)"},children:["You can still find ",m.NFT_NAME," on"]}),Object(an.jsx)(nn,{}),Object(an.jsx)(pn,{target:"_blank",href:m.MARKETPLACE_LINK,children:m.MARKETPLACE})]}):Object(an.jsxs)(an.Fragment,{children:[Object(an.jsxs)(rn,{style:{textAlign:"center",color:"var(--accent-text)"},children:["1 ",m.SYMBOL," costs ",m.DISPLAY_COST," ",m.NETWORK.SYMBOL,"."]}),Object(an.jsx)($,{}),Object(an.jsx)(on,{style:{textAlign:"center",color:"var(--accent-text)"},children:"Excluding gas fees."}),Object(an.jsx)(nn,{}),""===c.account||null===c.smartContract?Object(an.jsxs)(cn,{ai:"center",jc:"center",children:[Object(an.jsxs)(on,{style:{textAlign:"center",color:"var(--accent-text)"},children:["Connect to the ",m.NETWORK.NAME," network"]}),Object(an.jsx)(nn,{}),Object(an.jsx)(sn,{onClick:function(n){n.preventDefault(),t(function(){var n=window.ethereum;return function(){var e=Object(w.a)(C.a.mark((function e(t){var c,r,o,a,i,s,l,d,u,x;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CONNECTION_REQUEST"}),e.prev=1,e.next=4,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 4:return c=e.sent,e.next=7,c.json();case 7:return r=e.sent,e.next=10,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 10:return o=e.sent,e.next=13,o.json();case 13:return a=e.sent,localStorage.removeItem("walletconnect"),localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE"),i=new M.a({network:"mainnet",cacheProvider:!1,providerOptions:X}),e.next=19,i.connect();case 19:return s=e.sent,l=new k.a(s),console.log("web",l),N.a.setProvider(s),e.next=25,l.eth.getAccounts();case 25:return d=e.sent,e.next=28,s.request({method:"net_version"});case 28:if(u=e.sent,console.log("networkId",u),u==a.NETWORK.ID){e.next=33;break}return e.next=33,n.request({method:"wallet_switchEthereumChain",params:[{chainId:k.a.utils.toHex(a.NETWORK.ID)}]});case 33:u==a.NETWORK.ID?(x=new N.a(r,a.CONTRACT_ADDRESS),t({type:"CONNECTION_SUCCESS",payload:{account:d[0],smartContract:x,web3:l}}),s.on("accountsChanged",(function(n){t(J(n[0]))})),s.on("chainChanged",(function(){window.location.reload()}))):t(q("Change network to ".concat(a.NETWORK.NAME,"."))),e.next=40;break;case 36:e.prev=36,e.t0=e.catch(1),console.log("error",e.t0," message",e.t0.message),e.t0.message.includes("User Rejected")?t(q("User rejected the request")):("string"===typeof e.t0||e.t0 instanceof String)&&e.t0.includes("Modal closed by user")?t(q("Modal closed by user")):t(q("Something went wrong."));case 40:case"end":return e.stop()}}),e,null,[[1,36]])})));return function(n){return e.apply(this,arguments)}}()}()),v()},children:"CONNECT"}),""!==c.errorMsg?Object(an.jsxs)(an.Fragment,{children:[Object(an.jsx)(nn,{}),Object(an.jsx)(on,{style:{textAlign:"center",color:"var(--accent-text)"},children:c.errorMsg})]}):null]}):Object(an.jsxs)(an.Fragment,{children:[Object(an.jsx)(on,{style:{textAlign:"center",color:"var(--accent-text)"},children:u}),Object(an.jsx)(en,{}),Object(an.jsxs)(cn,{ai:"center",jc:"center",fd:"row",children:[Object(an.jsx)(ln,{style:{lineHeight:.4},disabled:i?1:0,onClick:function(n){n.preventDefault(),function(){var n=j-1;n<1&&(n=1),h(n)}()},children:"-"}),Object(an.jsx)(en,{}),Object(an.jsx)(on,{style:{textAlign:"center",color:"var(--accent-text)"},children:j}),Object(an.jsx)(en,{}),Object(an.jsx)(ln,{disabled:i?1:0,onClick:function(n){n.preventDefault(),function(){var n=j+1;n>50&&(n=50),h(n)}()},children:"+"})]}),Object(an.jsx)(nn,{}),Object(an.jsx)(cn,{ai:"center",jc:"center",fd:"row",children:Object(an.jsx)(sn,{disabled:i?1:0,onClick:function(n){n.preventDefault(),function(){var n=m.WEI_COST,e=m.GAS_LIMIT,r=String(n*j),o=String(e*j);console.log("Cost: ",r),console.log("Gas limit: ",o),x("Minting your ".concat(m.NFT_NAME,"...")),s(!0),c.smartContract.methods.mint(j).send({gasLimit:String(o),to:m.CONTRACT_ADDRESS,from:c.account,value:r}).once("error",(function(n){console.log(n),x("Sorry, something went wrong please try again later."),s(!1)})).then((function(n){console.log(n),x("WOW, the ".concat(m.NFT_NAME," is yours! go visit NFTKey.app to view it.")),s(!1),t(Q(c.account))}))}(),v()},children:i?"BUSY":"BUY"})})]})]}),Object(an.jsx)(nn,{}),Object(an.jsx)(sn,{children:Object(an.jsx)("a",{href:"https://nftkey.app/collections/zionlions/",children:"NFTKEY"})}),Object(an.jsx)($,{}),Object(an.jsx)(sn,{children:Object(an.jsx)("a",{href:"https://www.zionlabs.info//",children:"HOME"})}),Object(an.jsx)(nn,{}),Object(an.jsxs)(on,{style:{textAlign:"center",color:"var(--primary-text)"},children:["Please make sure you are connected to the right network (",m.NETWORK.NAME," Mainnet) and the correct address. ",Object(an.jsx)("br",{}),"Please note: Once you mint, this action cannot be undone."]}),Object(an.jsx)(nn,{}),Object(an.jsxs)(on,{style:{textAlign:"center",color:"var(--primary-text)"},children:["We have set the gas limit to ",m.GAS_LIMIT," for the contract to successfully mint your NFT. We recommend that you don't lower the gas limit."]})]}),Object(an.jsx)(tn,{}),Object(an.jsx)(cn,{flex:1,jc:"center",ai:"center",children:Object(an.jsx)(xn,{alt:"example",src:"/config/images/example.gif",style:{transform:"scaleX(-1)"}})})]}),Object(an.jsx)(en,{}),Object(an.jsx)(cn,{jc:"center",ai:"center",style:{width:"70%"}})]})})},jn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,792)).then((function(e){var t=e.getCLS,c=e.getFID,r=e.getFCP,o=e.getLCP,a=e.getTTFB;t(n),c(n),r(n),o(n),a(n)}))};t(785);y.a.render(Object(an.jsx)(S.a,{store:B,children:Object(an.jsx)(bn,{})}),document.getElementById("root")),jn()}},[[786,1,2]]]);
//# sourceMappingURL=main.951326a6.chunk.js.map