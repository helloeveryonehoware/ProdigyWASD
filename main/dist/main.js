(()=>{"use strict";const e=window.ProdigyWASDextension;async function o(){let e=()=>window.Boot.prototype.game._state._current.user.source._playerContainer;async function o(o){for(let n=0;n<100;n++)await new Promise((e=>setTimeout(e,2))),e().x-=o/100}async function n(o){for(let n=0;n<100;n++)await new Promise((e=>setTimeout(e,2))),e().y-=o/100}window.addEventListener("keydown",(e=>{switch(console.log(e),e.key){case"w":n(40);break;case"s":n(-40);break;case"a":o(40);break;case"d":o(-40)}}))}console.log("ProdigyWASD Running "+(e?"extension":"bookmarklet")+"."),e?window.SW.Load.onGameLoad=o:o()})();