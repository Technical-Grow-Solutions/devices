let websock,WWWMenu=!1,settings={admin:!1,awesome:!1,fullscreen:!1,lefthand:!1,internetaccess:!1};function myWindow(){}function fcheckFormInput(){}function Init(e){fprocessDisplayJson(jsonDoc1),clock_Init(),setInterval(fisBrowserOnline,3e3)}function fprocessDisplayJson(e){e.hasOwnProperty("settings")&&e.settings.forEach((e=>{e.hasOwnProperty("admin")&&(settings.admin=e.admin),e.hasOwnProperty("awesome")&&(settings.awesome=e.awesome),e.hasOwnProperty("fullscreen")&&(settings.fullscreen=e.fullscreen),e.hasOwnProperty("lefthand")&&(settings.lefthand=e.lefthand),e.hasOwnProperty("internetaccess")&&(settings.internetaccess=e.internetaccess)})),e.hasOwnProperty("items")&&e.items.forEach((e=>{let t=document.querySelector("."+e.item);e.hasOwnProperty("props")&&e.props.forEach((e=>{e.hasOwnProperty("active")&&(e.active?t.classList.add("active"):t.classList.remove("active")),e.hasOwnProperty("show")&&(e.show?t.classList.add("show"):t.classList.remove("show")),e.hasOwnProperty("awesome")&&(e.awesome?t.classList.add("awesome"):t.classList.remove("awesome")),e.hasOwnProperty("ani")&&(e.ani?t.classList.add("ani"):t.classList.remove("ani"))})),e.hasOwnProperty("items")&&e.items.forEach((e=>{e.hasOwnProperty("id")&&(t=document.getElementById(e.id)),e.hasOwnProperty("props")&&e.props.forEach((e=>{e.hasOwnProperty("show")&&(e.show?t.classList.add("show"):t.classList.remove("show"))}))}))})),e.hasOwnProperty("inits")&&e.inits.forEach((e=>{e.hasOwnProperty("company")&&finitHeader(e.company),e.hasOwnProperty("author")&&(document.querySelector("#footer-author-alias").innerHTML=e.author)}))}function finitHeader(e){let t=document.getElementById("logo-list");for(;t.firstChild;)t.firstChild.remove();let s,n=document.createElement("li");n.innerHTML=e[0],t.appendChild(n),s=e[0];let o="ghost";for(let a=1;a<e.length;a++)" "==e[a]?(o="spaced",s+=e[a+1],a++):o="ghost",n=document.createElement("li"),n.innerHTML=e[a],t.appendChild(n),n.setAttribute("class",o);document.getElementById("footer-company").innerText=s}function fexpandLogo(){document.getElementById("logo").classList.remove("hidden")}function fcollapseLogo(){document.getElementById("logo").classList.add("hidden")}function fchangeChapter(e){let t=document.querySelector(".chapter");0==!t.childElementCount?(fAnimateText(t,!0),ereaseAnimatie(t),createAnimatie(t,e)):createAnimatie(t,e)}function ereaseAnimatie(e){for(;e.firstChild;)e.removeChild(e.firstChild)}function createAnimatie(e,t){for(let s=0;s<t.length;s++)" "==t.slice(s,s+1)?Span.insertAdjacentText("afterend","&nbsp;"):(Span=document.createElement("span"),Span.innerHTML=t.toUpperCase().slice(s,s+1),e.appendChild(Span));fAnimateText(e)}function fAnimateText(e,t=!1){let s=e.querySelectorAll("span"),n=0;s.forEach((e=>{settings.awesome?(n+=.05,e.style.transform="translate(-150px, -50px) rotate(-180deg) scale(3)",e.style.animation=t?"revolveScale .3s reverse":"revolveScale .3s forwards",e.style.animationDelay=n+"s"):e.style.opacity=1}))}function fshowMenuButton(e=-1,t=!1,s=!0){let n=document.querySelector(".menu"),o=n.querySelectorAll(".rbut");s?n.classList.contains("show")||n.classList.add("show"):(o.forEach((e=>{t?e.classList.contains("show")||e.classList.add("show"):e.classList.contains("show")&&e.classList.remove("show")})),setTimeout((()=>{n.classList.contains("show")&&n.classList.remove("show")}),2500)),-1==e?o.forEach((e=>{ftoggleMenuButton(e,t)})):ftoggleMenuButton(o[e],t)}function ftoggleMenuButton(e,t){t?settings.awesome?e.classList.contains("ani")||e.classList.add("ani"):e.classList.contains("show")||e.classList.add("show"):settings.awesome?e.classList.contains("ani")&&e.classList.remove("ani"):e.classList.contains("show")&&e.classList.remove("show")}function faddUIContent(e,t,s=!0){const n=document.querySelector(".ui");document.querySelector(".loader").classList.add("show"),settings.awesome?n.classList.contains("awesome")&&(n.classList.contains("ani")&&n.classList.remove("ani"),fremoveUIContent(),s&&WWWMenu&&ftoggleWWWMenu(),fchangeChapter(t),setTimeout((()=>{fgetUIData(e),n.classList.add("ani")}),200)):(n.classList.contains("show")&&(fremoveUIContent(),s&&WWWMenu&&ftoggleWWWMenu()),fchangeChapter(t),fgetUIData(e),n.classList.add("show"))}function fremoveUIContent(){const e=document.querySelector(".ui-content");for(;e.firstChild;)e.removeChild(e.firstChild)}async function fgetUIData(e){const t=await fetch(e);if(e.includes(".json")){fprocessUIJson(await t.json()),document.querySelector(".loader").classList.remove("show")}else if(e.includes(".html")){const e=await t.text();let s=document.querySelector(".ui-content"),n=document.createElement("div");n.setAttribute("class","content"),n.setAttribute("translate","yes"),s.appendChild(n),n.innerHTML=e,document.querySelector(".loader").classList.remove("show")}}function fprocessUIJson(e){let t,s,n,o,a=document.querySelector(".ui-content"),i=e.type;switch(i){case"accordion":let c=document.createElement("div");c.setAttribute("class",i),c.setAttribute("id",e.id),a.appendChild(c),e.hasOwnProperty("translate")&&(e.translate||c.setAttribute("translate","no")),e.items.forEach((e=>{t=fcreateACCItem(c,e),e.hasOwnProperty("items")&&e.items.forEach((e=>{s=fcreateACCItem(t,e),e.hasOwnProperty("items")&&e.items.forEach((e=>{n=fcreateACCItem(s,e),e.hasOwnProperty("items")&&e.items.forEach((e=>{o=fcreateACCItem(n,e)}))}))}))})),acc_Init();break}}function fcreateACCItem(e,t){let s,n,o,a,i;return i=t.item,s=document.createElement("div"),s.setAttribute("class","acc_item"),s.setAttribute("id",i),e.appendChild(s),n=document.createElement("div"),n.setAttribute("class","acc_item_header"),t.hasOwnProperty("translate")&&(t.translate?n.setAttribute("translate","yes"):n.setAttribute("translate","no")),n.innerText=i.charAt(0).toUpperCase()+i.slice(1),s.appendChild(n),o=document.createElement("div"),o.setAttribute("class","acc_item_body"),a=document.createElement("div"),a.setAttribute("class","acc_item_body_content"),o.appendChild(a),s.appendChild(o),a}function ftoggleShowPsw(){var e=document.getElementById("PSWInput");"password"===e.type?e.type="text":e.type="password"}function ws_Init(){"WebSocket"in window?(websock=new WebSocket("ws://"+window.location.hostname+":81/ws"),websock.onopen=ws_Open,websock.onclose=ws_Close,websock.onmessage=ws_Message,websock.onerror=ws_Error):alert("WebSocket NOT supported by your Browser!")}function ws_Open(e){}function ws_Message(e){let t=JSON.parse(e.data);t.id;switch(t.id){case"display":fprocessDisplayJson(t);break;case"config":break;default:}}function ws_Close(e){e.wasClean,websock.close()}function ws_Error(e){}function ws_rx_Snackbar(){switch(element=document.getElementById("snackbar"),element.innerText=jsonDoc.message,jsonDoc.color){case 1:element.style.backgroundColor=getComputedStyle(element).getPropertyValue("--color-ui-background");break;case 2:element.style.backgroundColor="rgba(255, 0, 0, 0.674)";break;case 3:element.style.backgroundColor="rgba(251, 255, 0, 0.966)";break;default:}element.className="show",setTimeout((function(){element.className=element.className.replace("show","")}),jsonDoc.timems)}function ws_tx_Text(){websock.send(document.getElementById("txBar").value),document.getElementById("txBar").value=""}function ws_tx_Brightness(){websock.send("#"+document.getElementById("brightness").value)}function ftoggleWWWMenu(){WWWMenu?(WWWMenu=!1,fshowMenuButton(4,!1),fshowMenuButton(5,!1),fshowMenuButton(6,!1),fshowMenuButton(7,!1)):(WWWMenu=!0,fshowMenuButton(4,!0),fshowMenuButton(5,!0),fshowMenuButton(6,!0),fshowMenuButton(7,!0)),fremoveUIContent(),fchangeChapter("")}function fisFullScreen(){return document.fullscreenElement}function fFullScreen(){let e=document.getElementsByClassName(".ui");if(settings.fullscreen){let t=document.documentElement;t.requestFullscreen?t.requestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.msRequestFullscreen&&(t=window.top.document.body,t.msRequestFullscreen()),e.height=e.height-50,document.querySelector(".clock").classList.add("show")}else document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&window.top.document.msExitFullscreen(),e.height=e.height+50,document.querySelector(".clock").classList.remove("show")}function ftoggleFullScreen(){settings.fullscreen=!0^settings.fullscreen,fFullScreen()}function fAweSomeMode(){let e,t=document.querySelector("body"),s=document.querySelector(".bgimage"),n=document.querySelectorAll(".rbut"),o=document.querySelectorAll("div");settings.awesome?(t.classList.add("awesome"),o.forEach((t=>{"BODY"==t.parentElement.nodeName&&"menu"!==t.classList[0]&&(e=t.classList,"bgimage"===t.classList[0]&&(s.classList.add("awesome"),s.classList.add("ani"),setTimeout((()=>{s.classList.add("ani")}),2e3)),"clock"===t.classList[0]?(t.querySelector(".time").classList.add("awesome"),t.querySelector(".date").classList.add("awesome")):(e.contains("show")&&(e.remove("show"),e.add("ani")),e.add("awesome")))})),n.forEach((t=>{e=t.classList,e.add("awesome"),e.contains("show")&&(e.remove("show"),e.add("ani"))}))):(o.forEach((s=>{"BODY"==s.parentElement.nodeName&&"menu"!==s.classList[0]&&("bgimage"===s.classList[0]&&(s.classList.remove("ani"),setTimeout((()=>{t.classList.remove("awesome")}),2e3)),"clock"===s.classList[0]&&(s.querySelector(".time").classList.remove("awesome"),s.querySelector(".date").classList.remove("awesome")),"loader"===s.classList[0]?s.classList.remove("awesome"):(e=s.classList,e.contains("ani")&&(e.add("show"),e.remove("awesome"),e.remove("ani"))))})),setTimeout((()=>{s.classList.remove("awesome")}),2e3),n.forEach((t=>{e=t.classList,e.contains("ani")&&(e.add("show"),e.remove("awesome"),e.remove("ani")),e.remove("awesome")})))}function ftoggleAweSomeMode(){settings.awesome=!0^settings.awesome,fAweSomeMode()}function fLeftHand(){let e=document.querySelector("body").classList,t=document.querySelector(".rbut").classList,s=document.querySelector(".clock").classList;settings.lefthand?(e.add("left"),t.add("left"),s.add("left")):(e.remove("left"),t.remove("left"),s.remove("left"))}function ftoggleLeftHand(){settings.lefthand=!0^settings.lefthand,fLeftHand()}function fisBrowserOnline(){settings.internetaccess&&navigator.onLine?fshowMenuButton(2,!0):fshowMenuButton(2,!1)}function fInternetAccess(){settings.internetaccess?fshowMenuButton(2,!0):(fshowMenuButton(2,!1),fshowMenuButton(4,!1),fshowMenuButton(5,!1),fshowMenuButton(6,!1),fshowMenuButton(7,!1))}function ftoggleInternetAccess(){settings.internetaccess=!0^settings.internetaccess,fInternetAccess()}window.addEventListener("load",Init);
