(function(e){function t(t){for(var a,r,s=t[0],c=t[1],l=t[2],d=0,m=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&m.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(m.length)m.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(a=!1)}a&&(i.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},o={app:0},i=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"05e7":function(e,t,n){"use strict";n("752f")},"13f5":function(e,t,n){e.exports=n.p+"img/sample.4d383e9d.png"},"1f28":function(e,t,n){},3205:function(e,t,n){"use strict";n("1f28")},"38b3":function(e,t,n){e.exports=n.p+"img/homebg3.e4aabb02.jpg"},"3c21":function(e,t,n){"use strict";n("6245")},"444b":function(e,t,n){e.exports=n.p+"img/homebg1.5bc6e986.jpg"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-div",attrs:{id:"app"}},[e.isLoggedIn?n("NavProfile"):e._e(),n("router-view")],1)},i=[],r=(n("d3b7"),n("260b"));n("ea7b"),n("e71f");r["a"].initializeApp({apiKey:"AIzaSyCVukmRyawQSF2v8PVXB4L-hAaBuf4Ka5A",authDomain:"depixion-crowd.firebaseapp.com",projectId:"depixion-crowd",storageBucket:"depixion-crowd.appspot.com",messagingSenderId:"810480073996",appId:"1:810480073996:web:f88c3a83c905f535b35d29"}),r["a"].getCurrentUser=function(){return new Promise((function(e,t){var n=r["a"].auth().onAuthStateChanged((function(t){n(),e(t)}),t)}))};var s=r["a"].firestore(),c=r["a"].auth(),l=s.collection("users"),u=(s.collection("paintings"),s.collection("responses"),s.collection("evaluations")),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-navbar",{staticClass:"d-sm-none p-3",attrs:{toggleable:"lg",id:"nav-sm"}},[n("h2",{staticClass:"nav-sm-title"},[n("b",[e._v("DepiXion")])]),n("b-navbar-toggle",{staticClass:"nav-sm-title",attrs:{target:"nav-collapse"}}),n("b-collapse",{staticClass:"mt-3",attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",[n("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.us-modal",modifiers:{"us-modal":!0}}],staticClass:"my-2",attrs:{variant:"secondary"}},[e._v("About the Study")]),n("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.dp-modal",modifiers:{"dp-modal":!0}}],staticClass:"my-2",attrs:{variant:"success"}},[e._v("View Data Privacy")])],1)],1)],1),n("div",{staticClass:"p-3 d-none d-sm-flex flex-sm-row justify-content-sm-between",attrs:{id:"nav"}},[e._m(0),n("b-button-toolbar",[n("b-button-group",{staticClass:"mx-1"},[n("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.us-modal",modifiers:{"us-modal":!0}}],staticClass:"nav-btn",attrs:{variant:"link"}},[e._v("About the Study")]),n("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.dp-modal",modifiers:{"dp-modal":!0}}],staticClass:"nav-btn",attrs:{variant:"link"}},[e._v("Data Privacy")])],1)],1),n("b-modal",{attrs:{id:"dp-modal",size:"xl",centered:"","hide-header-close":"","ok-only":"","ok-variant":"success"},scopedSlots:e._u([{key:"modal-header",fn:function(){return[n("div",[n("h2",[n("b",[e._v("DepiXion")])]),n("h4",[e._v("Generating Abstract Art Based on a User-Specified Emotion Spectrum")])])]},proxy:!0}])},[n("h4",[n("sub",[e._v("Data Privacy Statement")])]),n("br"),n("p",[e._v(" In compliance with the Philippine Data Privacy Act (DPA) of 2012, and its Implementing Rules and Regulations (IRR) effective since September 9, 2016, I am hereby giving consent to the proponents of this research to do the following: "),n("ol",{staticClass:"my-4"},[n("li",[e._v(" Collection of my personal data which includes, but is not limited to, my name, contact number, email address, and educational background for the purpose of the research at hand with provisions for accessibility, updates, and corrections on my end; ")]),n("li",[e._v(" Minimal processing of any given information for non-commercial information dissemination given that it does not alter the meaning, essence and the origin of anything given; ")]),n("li",[e._v(" Storage of files within the premises of De La Salle University as well as official electronic storage locations such as on-premise storage servers or DLSU subscribed cloud storage services with access to the information limited to the researchers and their thesis adviser; ")]),n("li",[e._v(" Disposal of any and all collected media files and personal data, and scrubbing of any storage devices containing said data including the social media page/s (if any) at the end of AY 2021 - 2021, on November 1, 2022, or upon my submission of a written cancellation, whichever comes first. ")]),n("li",[e._v(" The researchers must notify me within a period of twenty four (24) hours after they suspect or become aware of any unauthorized access and security breach of my personal information; and promptly take all reasonable steps, at their own expense, to prevent or stop, any unauthorized access and security breach and comply with the Data Privacy Act of 2012 in the event of a breach. ")])]),e._v(" For any concern regarding the information collected, shared and stored by the researchers, I may reach them through their email addresses or privacy.officer@dlsu.edu.ph. By continuing with this form, I understand and am assured that necessary precautions will be taken by De La Salle University and the researchers to protect my personal information and recognize that improper use of the information (online, offline, or printed) will be subjected to appropriate actions under the Data Privacy Act of 2012 and the institution’s Student Handbook. ")])]),n("b-modal",{attrs:{id:"us-modal",size:"xl",title:"DepiXion",centered:"","hide-header-close":"","ok-only":"","ok-variant":"success"},scopedSlots:e._u([{key:"modal-header",fn:function(){return[n("div",[n("h2",[n("b",[e._v("DepiXion")])]),n("h4",[e._v("Generating Abstract Art Based on a User-Specified Emotion Spectrum")])])]},proxy:!0}])},[n("h4",[n("sub",[e._v("About the Study")])]),n("br"),n("p",[e._v(" Hello! "),n("br"),n("br"),e._v(' We are Keith, Mats, and Byron, senior students from the College of Computer Studies of De La Salle University - Manila taking up BS Computer Science with specializations in Software Technology. We are currently working on our thesis project entitled "Generating Abstract Art Based on a User-Specified Emotion Spectrum". Our goal is to build a software that can create abstract paintings through emotions, and we need your help! '),n("br"),n("br"),e._v(" In answering the survey in this website, you will be shown 10 abstract paintings, and you will tell us the emotions that you feel from them. You will be allowed to answer the survey again if you wish to do so. "),n("br"),n("br"),e._v(" For any concerns or questions regarding this website or our project, in general, you may reach us through "),n("a",{attrs:{href:"mailto: depixion.2022@gmail.com"}},[e._v("depixion.2022@gmail.com")]),e._v(". "),n("br"),n("br"),e._v(" Thank you very much for your interest in our study! ")])])],1)],1)},m=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h2",{staticClass:"m-0",attrs:{id:"nav-title"}},[n("b",[e._v("DepiXion")])])}],h={name:"NavProfile"},p=h,f=(n("946a"),n("2877")),v=Object(f["a"])(p,d,m,!1,null,"2f8e48c4",null),b=v.exports,g=n("9e21"),y=n.n(g);a["default"].use(y.a,{configuration:{cloudName:"kbadulis"}});var w={name:"App",created:function(){var e=this;c.onAuthStateChanged((function(t){e.isLoggedIn=null!==t,e.setUser(t)}))},data:function(){return{user:null,isLoggedIn:!1}},components:{NavProfile:b},methods:{setUser:function(e){this.user=e},logout:function(){this.$router.push("/"),c.signOut().catch((function(e){return console.log(e)}))}}},x=w,_=(n("034f"),Object(f["a"])(x,o,i,!1,null,null,null)),k=_.exports,C=n("2b27"),S=n.n(C),j=n("1da1"),A=(n("96cf"),n("b0c0"),n("caad"),n("2532"),n("8c4f")),D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"d-flex main-div",attrs:{id:"home"}},[n("Primer",{directives:[{name:"show",rawName:"v-show",value:!e.user,expression:"!user"}],on:{enter:e.enterSurvey}})],1)},L=[],I=(n("159b"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row gx-0"},[n("img",{staticClass:"col-xl-8 px-0",attrs:{src:e.background,id:"bg-image"}}),n("div",{staticClass:"ml-auto col-xl p-5",style:{backgroundColor:e.backgroundColor},attrs:{id:"primer"}},[n("h2",{style:{color:e.color}},[n("b",[e._v("DepiXion")])]),n("h4",{style:{color:e.color}},[e._v("Generating Abstract Art Based on a User-Specified Emotion Spectrum")]),n("br"),n("p",{style:{color:e.color}},[e._v(" Hello! "),n("br"),n("br"),e._v(' We are Keith, Mats, and Byron, senior students from the College of Computer Studies of De La Salle University - Manila taking up BS Computer Science with specializations in Software Technology. We are currently working on our thesis project entitled "Generating Abstract Art Based on a User-Specified Emotion Spectrum". Our goal is to build a software that can create abstract paintings through emotions, and we need your help! '),n("br"),n("br"),e._v(" In answering the survey in this website, you will be shown 10 abstract paintings, and you will tell us the emotions that you feel from them. You will be allowed to answer the survey again if you wish to do so. "),n("br"),n("br"),e._v(" For any concerns or questions regarding this website or our project, in general, you may reach us through "),n("a",{style:{color:e.color},attrs:{href:"mailto: depixion.2022@gmail.com"}},[e._v("depixion.2022@gmail.com")]),e._v(". "),n("br"),n("br"),e._v(" Thank you very much for your interest in our study! Please click the button below to proceed with the survey. ")]),n("div",{staticClass:"d-flex justify-content-center"},[n("b-button",{staticClass:"w-100",attrs:{variant:"success"},on:{click:e.login}},[e._v("Enter Survey")])],1),n("br"),n("small",{style:{color:e.color}},[n("p",[e._v("Notice: ")]),e._v(" This website utilizes cookies to take note of the paintings that you have already evaluated. Should you wish to evaluate more paintings, you may enter this website again and proceed with the survey. "),n("hr"),e._v(" For more information, you can view our data privacy statement "),n("a",{directives:[{name:"b-modal",rawName:"v-b-modal.dp-modal",modifiers:{"dp-modal":!0}}],style:{color:e.color},attrs:{href:"#"}},[e._v("here")]),e._v(". ")]),n("b-modal",{attrs:{id:"dp-modal",size:"xl",centered:"","hide-header-close":"","ok-only":""},scopedSlots:e._u([{key:"modal-header",fn:function(){return[n("div",[n("h2",[n("b",[e._v("DepiXion")])]),n("h4",[e._v("Generating Abstract Art Based on a User-Specified Emotion Spectrum")])])]},proxy:!0}])},[n("h4",[n("sub",[e._v("Data Privacy Statement")])]),n("br"),n("p",[e._v(" In compliance with the Philippine Data Privacy Act (DPA) of 2012, and its Implementing Rules and Regulations (IRR) effective since September 9, 2016, I am hereby giving consent to the proponents of this research to do the following: "),n("ol",{staticClass:"my-4"},[n("li",[e._v(" Collection of my personal data which includes, but is not limited to, my name, contact number, email address, and educational background for the purpose of the research at hand with provisions for accessibility, updates, and corrections on my end; ")]),n("li",[e._v(" Minimal processing of any given information for non-commercial information dissemination given that it does not alter the meaning, essence and the origin of anything given; ")]),n("li",[e._v(" Storage of files within the premises of De La Salle University as well as official electronic storage locations such as on-premise storage servers or DLSU subscribed cloud storage services with access to the information limited to the researchers and their thesis adviser; ")]),n("li",[e._v(" Disposal of any and all collected media files and personal data, and scrubbing of any storage devices containing said data including the social media page/s (if any) at the end of AY 2021 - 2021, on November 1, 2022, or upon my submission of a written cancellation, whichever comes first. ")]),n("li",[e._v(" The researchers must notify me within a period of twenty four (24) hours after they suspect or become aware of any unauthorized access and security breach of my personal information; and promptly take all reasonable steps, at their own expense, to prevent or stop, any unauthorized access and security breach and comply with the Data Privacy Act of 2012 in the event of a breach. ")])]),e._v(" For any concern regarding the information collected, shared and stored by the researchers, I may reach them through their email addresses or privacy.officer@dlsu.edu.ph. By continuing with this form, I understand and am assured that necessary precautions will be taken by De La Salle University and the researchers to protect my personal information and recognize that improper use of the information (online, offline, or printed) will be subjected to appropriate actions under the Data Privacy Act of 2012 and the institution’s Student Handbook. ")])])],1)])}),P=[],O={name:"Primer",data:function(){return{background:"",backgroundColor:"",color:""}},created:function(){var e=Math.floor(5*Math.random())+1;this.background=n("d1e7e")("./homebg"+e+".jpg"),e=Math.floor(2*Math.random()),this.backgroundColor=0===e?"#e6e6e6":"#333333",this.color=0===e?"#333333":"#e6e6e6"},methods:{login:function(){this.$emit("enter")}}},R=O,U=(n("3c21"),Object(f["a"])(R,I,P,!1,null,"5f9f1dc4",null)),T=U.exports,N={name:"Home",methods:{enterSurvey:function(){this.$router.push("/survey")},setUser:function(e){this.user=e}},components:{Primer:T},created:function(){var e=this;document.title="DepiXion | Login",c.onAuthStateChanged((function(t){e.setUser(t)}))},mounted:function(){var e=this;u.get().then((function(t){var n,a;t.forEach((function(t){n=t.data(),a={user:n.user,painting:n.painting,joy:n.labels[0].value,trust:n.labels[1].value,fear:n.labels[2].value,surprise:n.labels[3].value,sadness:n.labels[4].value,disgust:n.labels[5].value,anger:n.labels[6].value,anticipation:n.labels[7].value},e.docs.push(a)}))}))},data:function(){return{user:null,docs:[]}}},E=N,B=(n("05e7"),Object(f["a"])(E,D,L,!1,null,"19d37619",null)),M=B.exports,z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.user?n("div",{staticClass:"px-md-4 pt-4 main-div"},[e.completed?n("div",{staticClass:"col-lg-10 mx-auto"},[n("b-card",{staticClass:"form-card p-4 text-center"},[n("h3",{staticClass:"display-5 fw-bold mb-4"},[e._v("Thank you!")]),n("p",{staticClass:"col-lg-8 mx-auto"},[e._v(" We truly appreciate your contribution to our study. If you have any questions, feel free to reach out to us. Our contact details are available on the "),n("i",[e._v("About the Study")]),e._v(" page. If you want to contribute more and earn more points, you can click the button below and label a new set of paintings. ")]),n("b-button",{staticClass:"mt-2",attrs:{variant:"success"},on:{click:e.startNewSurvey}},[e._v(" Label more paintings ")])],1)],1):e.tutored?n("div",{staticClass:"col-lg-10 mx-auto"},[n("b-card",{staticClass:"p-lg-4"},[n("b-container",[n("div",{staticClass:"\n                            mb-4\n                            d-flex\n                            justify-content-between\n                            align-items-center\n                            flex-wrap"},[n("h3",{staticClass:"fw-bold"},[e._v(" How does this painting make you feel? ")])]),n("b-row",[n("b-col",{staticClass:"mb-4 d-flex justify-content-center",attrs:{lg:"9",sm:"12"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.isLoaded,expression:"isLoaded"}],staticClass:"form-img-container"},[n("b-img",{staticClass:"form-img mx-auto",attrs:{src:e.imgSrc,"fluid-grow":"",alt:"Abstract Painting"},on:{load:e.onLoaded}}),n("p",[e._v("Source: WikiArt")])],1),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.isLoaded,expression:"!isLoaded"}],staticClass:"loading-wrapper mx-auto flex-column"},[n("b-spinner",{staticClass:"mb-2",attrs:{variant:"success"}}),n("span",{staticClass:"text-muted"},[e._v("Loading image...")])],1)]),n("b-col",{staticClass:"my-auto"},[e._l(e.emotionLabels,(function(t){return n("b-container",{key:t.emotion},[n("div",{staticClass:"\n                                        row\n                                        mb-2\n                                        label-row\n                                        align-items-center\n                                    "},[n("b-form-checkbox",{attrs:{value:"1","unchecked-value":"0"},model:{value:t.value,callback:function(n){e.$set(t,"value",n)},expression:"lbl.value"}},[n("div",[e._v(e._s(t.emotion))])])],1)])})),n("b-container",{staticClass:"\n                                    d-flex\n                                    flex-column\n                                    align-items-center\n                                    my-4\n                                "},[n("b-button",{staticClass:"button-submit",class:e.isDisabled,attrs:{variant:"success"},on:{click:e.nextPage}},[this.page<10?n("span",[e._v(" Next ")]):n("span",[e._v(" Finish ")])])],1),n("p",{staticClass:"text-center",class:e.textColor},[e._v(" Please select at least one emotion label ")])],2)],1)],1),n("br"),n("div",{staticClass:"\n                        container\n                        d-flex\n                        justify-content-between\n                        align-items-end\n                    "},[n("div",{staticClass:"col mr-4"},[n("b-progress",{staticClass:"mr-3",attrs:{value:e.page,max:10,"show-value":"",variant:"success"}})],1)])],1)],1):n("div",{staticClass:"col-lg-10 mx-auto"},[n("b-card",{staticClass:"p-2 d-flex flex-column align-items-center text-center"},[n("h3",{staticClass:"fw-bold mb-4"},[e._v("Emotion Labeling Reminders")]),n("b-img",{staticClass:"tut-img mb-4",attrs:{fluid:"",src:e.tutImg}}),n("p",{staticClass:"col-lg-6 mx-auto"},[e._v(" Ten different images of abstract paintings will be displayed. For each image, you will be tasked to label them based on the emotions you feel. If you feel that the painting evokes that emotion in you, simply click or tap on the checkbox next to it. You can remove the label by clicking on the checkbox again. ")]),n("p",{staticClass:"col-lg-6 mx-auto"},[n("b",[e._v("Note:")]),e._v(" You cannot go back to the previous image when proceeding to the next. ")]),n("b-form-checkbox",{attrs:{value:!0,"unchecked-value":!1},model:{value:e.dontShowTutorial,callback:function(t){e.dontShowTutorial=t},expression:"dontShowTutorial"}},[e._v(" Don't show me this again. ")]),n("b-button",{staticClass:"mt-2",attrs:{variant:"success"},on:{click:function(t){e.tutored=!0}}},[e._v(" Begin answering ")])],1)],1)]):n("div",{staticClass:"h-100 d-flex justify-content-center align-items-center"},[n("b-spinner",{attrs:{variant:"success"}})],1)},F=[],$=(n("99af"),n("ac1f"),n("1276"),n("d81d"),{created:function(){document.title="DepiXion | Survey",this.tutImg=n("13f5")},mounted:function(){var e=this;this.tutored=Boolean(this.$cookies.get("showTutorial")),r["a"].auth().onAuthStateChanged(function(){var t=Object(j["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n?(console.log("Auth state changed: uid is",n.uid),e.user=n.uid,l.doc(n.uid).get().then((function(t){t.exists||l.doc(e.user).set({points:0,paintingsAnnotated:[]}),e.fetchImages().then((function(){e.fetchFormInfo()}))}))):r["a"].auth().signInAnonymously();case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},data:function(){return{user:null,loaded:!1,userAnnotated:[],imageList:[],emotionLabels:[{emotion:"Joy",value:0},{emotion:"Trust",value:0},{emotion:"Fear",value:0},{emotion:"Surprise",value:0},{emotion:"Sadness",value:0},{emotion:"Disgust",value:0},{emotion:"Anger",value:0},{emotion:"Anticipation",value:0}],points:null,page:null,dontShowTutorial:!1,tutored:!1,tutImg:"",textColor:"text-white"}},watch:{dontShowTutorial:function(e,t){t!=e&&this.$cookies.set("showTutorial",t)}},computed:{completed:function(){return 11==this.page},imgSrc:function(){return this.imageList[this.page-1]?this.imageList[this.page-1].url:""},isLoaded:function(){return this.imageList[this.page-1]&&this.loaded},isDisabled:function(){return{disabled:!this.loaded}}},methods:{onSubmit:function(e){e.preventDefault()},onLoaded:function(){this.loaded=!0},startNewSurvey:function(){this.page=0},fetchImages:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){var n,a,o,i,r,s,c,u,d,m,h,p,f;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l.doc(e.user).get();case 2:return n=t.sent,a=n.data(),e.userAnnotated=a.paintingsAnnotated,e.imageList=[],t.next=8,fetch("https://res.cloudinary.com/kbadulis/image/list/pool.json");case 8:return o=t.sent,t.next=11,o.json();case 11:return i=t.sent,t.next=14,fetch("https://res.cloudinary.com/kbadulis/image/list/pool-two.json");case 14:return r=t.sent,t.next=17,r.json();case 17:for(s=t.sent,c=i.resources.concat(s.resources),u="https://res.cloudinary.com/kbadulis/image/upload/v1628054226/images/",d=0;d<10;d++){m=void 0,h=void 0,p=void 0,f=void 0;do{m=Math.floor(Math.random()*c.length),f=c[m].public_id.split("/")[1],h="".concat(f.split("_")[0],".jpg"),p="".concat(u).concat(f,".jpg")}while(e.userAnnotated.includes(h));e.imageList.push({url:p,img:h})}case 21:case"end":return t.stop()}}),t)})))()},fetchFormInfo:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=l.doc(e.user),t.next=3,n.get().then((function(t){return e.points=t.data().points}));case 3:e.page=e.points/10%10+1;case 4:case"end":return t.stop()}}),t)})))()},nextPage:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.emotionLabels.some((function(e){return e.value>0})),!n){t.next=14;break}return a=e.imageList[e.page-1].img,t.next=5,e.saveResponse(a);case 5:return t.next=7,e.writeImageToUser(a);case 7:e.loaded&&e.page++,e.loaded=!1,e.textColor="text-white",e.emotionLabels.map((function(e){return e.value=0})),window.scrollTo(0,0),t.next=15;break;case 14:e.textColor="text-danger";case 15:case"end":return t.stop()}}),t)})))()},saveResponse:function(e){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function n(){var a,o,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:for(a=[],o=0;o<8;o++)i="1"===t.emotionLabels[o].value,a.push({emotion:t.emotionLabels[o].emotion,value:i});return n.next=4,u.doc().set({user:t.user,painting:e,labels:a});case 4:case"end":return n.stop()}}),n)})))()},writeImageToUser:function(e){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function n(){var a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=l.doc(t.user),n.next=3,a.get();case 3:return o=n.sent.data().points,n.next=6,a.update({paintingsAnnotated:r["a"].firestore.FieldValue.arrayUnion(e),points:o+10});case 6:t.points=o+10;case 7:case"end":return n.stop()}}),n)})))()}}}),X=$,H=(n("3205"),Object(f["a"])(X,z,F,!1,null,null,null)),G=H.exports,W=n("2591");a["default"].use(A["a"]);var Y=new A["a"]({mode:"history",routes:[{path:"/",name:"Home",component:M},{path:"/survey",name:"Survey",component:G}]});Y.beforeEach(function(){var e=Object(j["a"])(regeneratorRuntime.mark((function e(t,n,a){var o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=["Home","Survey"],e.next=3,W["a"].getCurrentUser();case 3:i=e.sent,"Home"!==t.name&&o.includes(t.name)?a():i?a({path:"/survey"}):a();case 5:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}());var K=Y,V=n("5f5b"),q=n("b1e0"),J=n("ecee"),Q=n("c074");n("f9e3"),n("2dd8");J["a"].add(Q["b"]),J["a"].add(Q["a"]),a["default"].use(V["a"]),a["default"].use(q["a"]),a["default"].use(S.a,{expire:"7d",secure:"true"}),a["default"].config.productionTip=!1,new a["default"]({render:function(e){return e(k)},router:K}).$mount("#app")},6245:function(e,t,n){},"73fa":function(e,t,n){},"752f":function(e,t,n){},"840e":function(e,t,n){e.exports=n.p+"img/homebg2.f860f165.jpg"},"85ec":function(e,t,n){},"8a15":function(e,t,n){e.exports=n.p+"img/homebg5.fa3c01f5.jpg"},"946a":function(e,t,n){"use strict";n("73fa")},d1e7e:function(e,t,n){var a={"./homebg1-small.jpg":"d874","./homebg1.jpg":"444b","./homebg2.jpg":"840e","./homebg3.jpg":"38b3","./homebg4.jpg":"fc32","./homebg5.jpg":"8a15"};function o(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=i,e.exports=o,o.id="d1e7e"},d874:function(e,t,n){e.exports=n.p+"img/homebg1-small.ffc3b355.jpg"},fc32:function(e,t,n){e.exports=n.p+"img/homebg4.f2965beb.jpg"}});
//# sourceMappingURL=app.99d1c9f9.js.map