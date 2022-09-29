"use strict";
const extension = window.ProdigyWASDextension;
console.log("ProdigyWASD Running " + (extension ? "extension" : "bookmarklet") + ".");
async function ProdigyWASD() {
    let player = () => window.Boot.prototype.game._state._current.user.source._playerContainer;
    async function ChangeX(x) {
        for (let i = 0; i < 100; i++) {
            await new Promise(r => setTimeout(r, 2));
            player().x -= x / 100;
            ;
        }
    }
    async function ChangeY(y) {
        for (let i = 0; i < 100; i++) {
            await new Promise(r => setTimeout(r, 2));
            player().y -= y / 100;
            ;
        }
    }
    window.addEventListener("keydown", event => {
        console.log(event);
        switch (event.key) {
            case "w" || "ArrowUp":
                ChangeY(40);
                break;
            case "s" || "ArrowDown":
                ChangeY(-40);
                break;
            case "a" || "ArrowLeft":
                ChangeX(40);
                break;
            case "d" || "ArrowRight":
                ChangeX(-40);
                break;
        }
    });
}
;
if (extension) {
    window.SW.Load.onGameLoad = ProdigyWASD;
}
else {
    ProdigyWASD();
}
