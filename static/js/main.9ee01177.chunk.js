(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.39cac033.png"},,function(e,t,a){e.exports=a(61)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,,,,,,,,,,,,,,function(e,t,a){var n={"./assasinsCreed.jpg":49,"./destiny.jpg":50,"./godOfWar.jpg":51,"./luigi.png":52,"./mario.jpg":53,"./massEffect.jpg":54,"./masterChief.jpg":55,"./megaMan.jpg":56,"./nathanDrake.png":57,"./redDead.jpg":58,"./sonic.png":59,"./zelda.jpg":60};function i(e){var t=c(e);return a(t)}function c(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}i.keys=function(){return Object.keys(n)},i.resolve=c,e.exports=i,i.id=48},function(e,t,a){e.exports=a.p+"static/media/assasinsCreed.5b76da46.jpg"},function(e,t,a){e.exports=a.p+"static/media/destiny.a8f9c6d7.jpg"},function(e,t,a){e.exports=a.p+"static/media/godOfWar.21c9e3e4.jpg"},function(e,t,a){e.exports=a.p+"static/media/luigi.6c2cfaeb.png"},function(e,t,a){e.exports=a.p+"static/media/mario.e9c222f9.jpg"},function(e,t,a){e.exports=a.p+"static/media/massEffect.322dc94e.jpg"},function(e,t,a){e.exports=a.p+"static/media/masterChief.26073be8.jpg"},function(e,t,a){e.exports=a.p+"static/media/megaMan.b465a2ec.jpg"},function(e,t,a){e.exports=a.p+"static/media/nathanDrake.d65d5d83.png"},function(e,t,a){e.exports=a.p+"static/media/redDead.1fb079c5.jpg"},function(e,t,a){e.exports=a.p+"static/media/sonic.53696294.png"},function(e,t,a){e.exports=a.p+"static/media/zelda.150b52e8.jpg"},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(14),r=a.n(c),o=(a(23),a(2)),s=a(3),l=a(5),m=a(4),d=a(6),p=(a(24),function(e){return i.a.createElement("div",{className:"mainHeader center-align gray-text"},i.a.createElement("h1",null,e.mainText),e.detailText.trim().length>0&&i.a.createElement("h3",null,e.detailText))}),u=(a(25),function(e){return i.a.createElement("div",{className:"reactCard col s12 m6 l3"},i.a.createElement("div",{className:"card hoverable waves-effect waves-dark",onClick:function(){return e.onClickMethod(e.imageUrl)}},i.a.createElement("div",{className:"card-image"},i.a.createElement("img",{className:"reactCardImage",src:e.imageUrl,alt:e.imageText}))))}),g=(a(26),a(15)),f=a.n(g),h=function(e){return i.a.createElement("div",{className:"navbar-fixed"},i.a.createElement("nav",null,i.a.createElement("div",{className:"nav-wrapper black"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col s12 m6 left-align myNavItem"},i.a.createElement("img",{className:"vgmNavLogo",src:f.a,alt:"logo"})," VGM"),i.a.createElement("div",{className:"col s12 m6 right-align myNavItem"},i.a.createElement("span",null,"Score: ",e.score,", "),i.a.createElement("span",null,"Top Score: ",e.topScore))))))},v=(a(27),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=document.getElementById(this.props.id);window.M.Modal.init(e,{endingTop:20}),this.modalInstance=window.M.Modal.getInstance(e)}},{key:"displayModal",value:function(){this.modalInstance.open()}},{key:"render",value:function(){return i.a.createElement("div",{id:this.props.id,className:"reactModal modal"},i.a.createElement("div",{className:"modal-content"},i.a.createElement("h4",null,this.props.header),i.a.createElement("img",{src:this.props.imageUrl,alt:this.props.imageAlt})))}}]),t}(i.a.Component)),E=(a(28),a(16)),w=a.n(E),x={getRandomPicture:function(e){return w.a.get("".concat("https://api.giphy.com/v1/gifs","/random?api_key=").concat("BhEB2InhZbmP96xsZoWBz15voVYxA47a","&tag=").concat(e))}},j=function(e){function t(){var e,n;Object(o.a)(this,t);for(var i=arguments.length,c=new Array(i),r=0;r<i;r++)c[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={score:0,topScore:0,winGif:"",winGifText:""},n.imagesSelected=[],n.requireAll=function(e){return e.keys().map(e)},n.images=n.requireAll(a(48)),n.handleOnCardClick=function(e){var t="";n.imagesSelected.includes(e)?(n.imagesSelected=[],t="You guessed incorrectly!",n.setState(function(e){return{topScore:e.score>e.topScore?e.score:e.topScore,score:0}})):(n.imagesSelected.push(e),n.imagesSelected.length===n.images.length?(n.imagesSelected=[],t="You won!",n.setState({topScore:n.images.length,score:0}),x.getRandomPicture("winning").then(function(e){n.setState({winGif:e.data.data.image_url,winGifText:e.data.data.title},function(){n.winModal.displayModal()})})):(t="You guessed correctly!",n.setState(function(e){return{score:e.score+1}})));var a=t.includes("incorrectly")?"incorrectToast":t.includes("won")?"wonToast":"correctToast";window.M.toast({html:t,classes:a}),n.images=n.images.sort(function(){return Math.random()-.5})},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"App"},i.a.createElement(h,{score:this.state.score,topScore:this.state.topScore}),i.a.createElement(p,{mainText:"Video Game Memory",detailText:"Click on a video game image to earn points, but don't click on any more than once!"}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},this.images.map(function(t){return i.a.createElement(u,{key:t,imageUrl:t,imageText:"test",onClickMethod:e.handleOnCardClick})}))),i.a.createElement(v,{id:"winModal",header:"You Won!",imageUrl:this.state.winGif,imageText:this.state.winGifText,ref:function(t){e.winModal=t}}))}}]),t}(n.Component);r.a.render(i.a.createElement(j,null),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.9ee01177.chunk.js.map