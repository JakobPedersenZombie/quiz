(function(){"use strict";var e={3375:function(e,t,r){r(7658);var s=r(6369),n=r(2631),i=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"background"},[t("div",{staticClass:"question-container"},[t("div",{staticClass:"quiz-grid"},[t("div",{staticClass:"quiz-container"},[t("h1",[e._v(e._s(e.question.title))]),t("div",{staticClass:"answers-wrapper"},e._l(e.question.answers,(function(r){return t("div",{key:r.id},[t("button",{on:{click:function(t){return e.checkAnswer(r.id,e.name)}}},[e._v(e._s(r.text))])])})),0),e.showAnswer?t("p",[e._v(e._s(e.answerMessage))]):e._e(),e.correctAnswerSelected?t("div",[e.answered?t("button",{on:{click:e.nextQuestion}},[e._v("Next")]):e._e()]):e._e(),t("div",[t("div",[e._v("Correct Answers: "+e._s(e.correctAnswers))]),t("div",[e._v("Incorrect Answers: "+e._s(e.incorrectAnswers))])]),t("chat-component")],1)])])])])},o=[],a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"chat-container"},[t("div",{staticClass:"messages"},e._l(e.messages,(function(r){return t("div",{key:r.id,staticClass:"message"},[t("p",{staticClass:"message-text"},[e._v(e._s(r.text))])])})),0),t("div",{staticClass:"input-container"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.newMessage,expression:"newMessage"}],attrs:{placeholder:"Type your message here..."},domProps:{value:e.newMessage},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.sendMessage.apply(null,arguments)},input:function(t){t.target.composing||(e.newMessage=t.target.value)}}}),t("button",{on:{click:e.sendMessage}},[e._v("Send")])])])},d=[],c={data(){return{messages:[],newMessage:""}},methods:{sendMessage(){this.newMessage&&(this.messages.push({id:Date.now(),text:this.newMessage}),this.newMessage="")}}},l=c,u=r(1001),h=(0,u.Z)(l,a,d,!1,null,null,null),w=h.exports,p=r(3822);s.ZP.use(p.ZP);var m=new p.ZP.Store({state:{correctAnswers:0,incorrectAnswers:0,randomUser:{}},mutations:{updateCorrectAnswers(e,t){e.correctAnswers=t},updateRandomUser(e,t){e.randomUser=t},updateinCorrectAnswers(e,t){e.incorrectAnswers=t}}}),f={data(){return{usedQuestions:[],answeredCorrectly:!1,correctAnswers:0,incorrectAnswers:0,randomUser:{},questions:[{id:1,title:"What is the capital of France?",answers:[{id:1,text:"Paris",correct:!0},{id:2,text:"London"},{id:3,text:"Berlin"}],answered:!1},{id:2,title:"What is the largest planet in our solar system?",answers:[{id:4,text:"Jupiter",correct:!0},{id:5,text:"Saturn"},{id:6,text:"Earth"}],answered:!1},{id:3,title:"what duck has the most superpowers?",answers:[{id:7,text:"regular duck",correct:!0},{id:8,text:"Superduck"},{id:9,text:"bird"}],answered:!1},{id:4,title:"What is the meaning of life?",answers:[{id:1,text:"43",correct:!0},{id:2,text:"42"},{id:3,text:"41"}],answered:!1},{id:5,title:"What color is a banana?",answers:[{id:4,text:"Yellow",correct:!0},{id:5,text:"Green"},{id:6,text:"Blue"}],answered:!1},{id:6,title:"What color isn't a banana?",answers:[{id:7,text:"red",correct:!0},{id:8,text:"Yellow"},{id:9,text:"brown"}],answered:!1},{id:7,title:"Who would win in a fight, 3 trillion lions or the sun?",answers:[{id:1,text:"Lions",correct:!0},{id:2,text:"The sun"},{id:3,text:"This question is stupid"}],answered:!1},{id:8,title:"What tastes the best?",answers:[{id:4,text:"Flavor",correct:!0},{id:5,text:"Falvor"},{id:6,text:"Palfor"}],answered:!1},{id:9,title:"What year did Doom 1 release?",answers:[{id:7,text:"1993",correct:!0},{id:8,text:"1994"},{id:9,text:"1992"}],answered:!1},{id:10,title:"What year did 9/11 happen",answers:[{id:1,text:"2001",correct:!0},{id:2,text:"2002"},{id:3,text:"2003"}],answered:!1},{id:11,title:"How many bowling pins are there in bowling?",answers:[{id:4,text:"10",correct:!0},{id:5,text:"12"},{id:6,text:"9"}],answered:!1},{id:12,title:"What is the difference between a duck?",answers:[{id:7,text:"?",correct:!0},{id:8,text:"?"},{id:9,text:"?"}],answered:!1},{id:13,title:"What bullets does a glock19 use?",answers:[{id:1,text:"9mm",correct:!0},{id:2,text:".357 MAG"},{id:3,text:"10mm"}],answered:!1},{id:14,title:"What year was the internet developed?",answers:[{id:4,text:"1983",correct:!0},{id:5,text:"1984"},{id:6,text:"1985"}],answered:!1},{id:15,title:"What year was the first computer made?",answers:[{id:7,text:"1936",correct:!0},{id:8,text:"1935"},{id:9,text:"1934"}],answered:!1},{id:16,title:"What is SASS?",answers:[{id:1,text:"CSS-preprocessor",correct:!0},{id:2,text:"Compiler"},{id:3,text:"Package manager"}],answered:!1},{id:17,title:"What does HTML stand for?",answers:[{id:4,text:"HyperText Markup Language",correct:!0},{id:5,text:"HyperText Maker Language"},{id:6,text:"HyperText Machine Language"}],answered:!1},{id:18,title:"What does CSS stand for?",answers:[{id:7,text:"Cascading Style Sheet",correct:!0},{id:8,text:"Creative Style Sheet"},{id:9,text:"Create Style, Sheet"}],answered:!1},{id:19,title:"What is Madness Combat?",answers:[{id:1,text:"Animation",correct:!0},{id:2,text:"A fightning style"},{id:3,text:"A Medical condition"}],answered:!1},{id:20,title:"What is biggest?",answers:[{id:4,text:"House cat",correct:!0},{id:5,text:"Lion"},{id:6,text:"Elephant"}]},{id:21,title:"Who would win in a fight",answers:[{id:7,text:"Superman",correct:!0},{id:8,text:"Batman"},{id:9,text:"Frodo but he only has one arm"}],answered:!1},{id:22,title:"What is best?",answers:[{id:1,text:"Mathilde Kakaomælk",correct:!0},{id:2,text:"Budget Kakaomælk"},{id:3,text:"Chocomel"}],answered:!1},{id:23,title:"How many terminator films was arnold the bad guy?",answers:[{id:4,text:"2",correct:!0},{id:5,text:"1"},{id:6,text:"3"}],answered:!1},{id:24,title:"How many layers of hell is there?",answers:[{id:7,text:"9",correct:!0},{id:8,text:"7"},{id:9,text:"6"}],answered:!1}],question:{},showAnswer:!1,answerMessage:"",correctAnswerSelected:!1}},components:{ChatComponent:w},computed:{...(0,p.rn)(["correctAnswers"])},store:m,buttonClicked:!1,mounted(){this.question=this.questions[Math.floor(Math.random()*this.questions.length)]},created(){},methods:{checkAnswer(e){const t=this.question.answers.find((t=>t.id===e));this.showAnswer=!0,t.correct&&!this.question.answeredCorrectly?(this.answerMessage="Correct!",this.question.answeredCorrectly=!0,this.correctAnswerSelected=!0,this.correctAnswers++,this.$store.commit("updateCorrectAnswers",this.correctAnswers),24===this.correctAnswers&&this.$router.push("/FinalScore")):t.correct?(this.answerMessage="You already answered this question correctly. Next question.",this.correctAnswerSelected=!0):(this.incorrectAnswers++,this.$store.commit("updateinCorrectAnswers",this.incorrectAnswers),this.answerMessage="Nah man that ain't correct, you should know this, try again",this.correctAnswerSelected=!1),this.answered=!0},nextQuestion(){new Promise((e=>setTimeout(e,100))).then((()=>{let e=this.questions.filter((e=>!this.usedQuestions.includes(e)));0===e.length&&(this.usedQuestions=[],e=this.questions),this.question=e[Math.floor(Math.random()*e.length)],this.usedQuestions.push(this.question),this.buttonClicked=!1,this.showAnswer=!1,this.correctAnswerSelected=!1}))}}},v=f,x=(0,u.Z)(v,i,o,!1,null,null,null),g=x.exports,y=r(7795),_=(r(6696),function(){var e=this,t=e._self._c;return t("div",{staticClass:"grid"},[t("div",[t("div",[t("h1",[e._v("Welcome to your bad or good score I dont know")]),t("div",[e._v("Correct Answers: "+e._s(e.correctAnswers))]),t("div",[e._v("Incorrect Answers: "+e._s(e.incorrectAnswers))])])])])}),A=[],b={computed:{...(0,p.rn)(["correctAnswers"]),...(0,p.rn)(["incorrectAnswers"])}},C=b,k=(0,u.Z)(C,_,A,!1,null,null,null),M=k.exports,S=r(6943),q=function(){var e=this,t=e._self._c;return t("div",[t("form",{on:{submit:function(t){return t.preventDefault(),e.getRandomProfile.apply(null,arguments)}}},[t("button",{attrs:{type:"submit"}},[e._v("Get Random Profile")])]),e.profile?t("div",{staticClass:"container"},[t("div",{staticClass:"element"},[t("p",[e._v("Name: "+e._s(e.profile.name.first)+" "+e._s(e.profile.name.last))]),t("p",[e._v("Email: "+e._s(e.profile.email))]),t("p",[e._v("Location: "+e._s(e.profile.location.city)+", "+e._s(e.profile.location.state)+", "+e._s(e.profile.location.country))])])]):e._e()])},P=[],W={data(){return{profile:null}},methods:{...(0,p.nv)(["setGeneratedProfile"]),async getRandomProfile(){try{const e=await S.Z.get("https://randomuser.me/api/");this.profile=e.data.results[0]}catch(e){console.error(e),this.$store.commit("setGeneratedProfile",this.profile)}}}},Z=W,L=(0,u.Z)(Z,q,P,!1,null,null,null),O=L.exports,T=function(){var e=this,t=e._self._c;return t("div",[t("router-view")],1)},z=[],$={name:"App"},G=$,H=(0,u.Z)(G,T,z,!1,null,null,null),I=H.exports,N=function(){var e=this,t=e._self._c;return t("div",[t("div",[t("h1",[e._v("Welcome to the Quiz App")]),t("LoginForm"),t("RandomUserGenerator")],1)])},R=[],U=function(){var e=this,t=e._self._c;return t("div",[t("form",{on:{submit:function(t){return t.preventDefault(),e.login.apply(null,arguments)}}},[t("label",[e._v(" Email: "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),t("br"),t("label",[e._v(" Password: "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),t("br"),t("button",{attrs:{type:"submit"}},[e._v("Login")])]),e.errorMessage?t("p",{staticStyle:{color:"red"}},[e._v(e._s(e.errorMessage))]):e._e()])},E=[],F={data(){return{email:"",password:"",errorMessage:""}},methods:{async login(){try{await y["default"].auth().signInWithEmailAndPassword(this.email,this.password),this.$router.push("/home")}catch(e){this.$router.push("/home")}}}},j=F,B=(0,u.Z)(j,U,E,!1,null,null,null),Q=B.exports,D={name:"StartPage",components:{LoginForm:Q,RandomUserGenerator:O},created(){this.$store.commit("updateRandomUser",null)}},Y=D,K=(0,u.Z)(Y,N,R,!1,null,null,null),J=K.exports;const X={apiKey:"AIzaSyCNCE5iXAu8JpR8NSKT64r6kc4urYytLUk",authDomain:"quiz-4c5de.firebaseapp.com",projectId:"quiz-4c5de",storageBucket:"quiz-4c5de.appspot.com",messagingSenderId:"627092607715",appId:"1:627092607715:web:821f5342cf4ab7875aabd6",measurementId:"G-29BCY7HZBM"};var V=X;s.ZP.prototype.$http=S.Z,s.ZP.component("RandomUserGenerator",O),s.ZP.use(n.Z);const ee=new n.Z({routes:[{path:"/",component:J},{path:"/home",component:g},{path:"/finalscore",component:M}],mode:"history"});new s.ZP({store:m,router:ee,el:"#app",render:e=>e(I),created(){y["default"].initializeApp(V),y["default"].auth().onAuthStateChanged((e=>{e?this.$router.push("/home"):this.$router.push("/start")}))}})}},t={};function r(s){var n=t[s];if(void 0!==n)return n.exports;var i=t[s]={exports:{}};return e[s](i,i.exports,r),i.exports}r.m=e,function(){var e=[];r.O=function(t,s,n,i){if(!s){var o=1/0;for(l=0;l<e.length;l++){s=e[l][0],n=e[l][1],i=e[l][2];for(var a=!0,d=0;d<s.length;d++)(!1&i||o>=i)&&Object.keys(r.O).every((function(e){return r.O[e](s[d])}))?s.splice(d--,1):(a=!1,i<o&&(o=i));if(a){e.splice(l--,1);var c=n();void 0!==c&&(t=c)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[s,n,i]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,s){var n,i,o=s[0],a=s[1],d=s[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(n in a)r.o(a,n)&&(r.m[n]=a[n]);if(d)var l=d(r)}for(t&&t(s);c<o.length;c++)i=o[c],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(l)},s=self["webpackChunkquiz"]=self["webpackChunkquiz"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=r.O(void 0,[998],(function(){return r(3375)}));s=r.O(s)})();
//# sourceMappingURL=app.6d10135b.js.map