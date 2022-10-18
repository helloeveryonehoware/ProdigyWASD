// @ts-expect-error
const extension : boolean = window.ProdigyWASDextension;

console.log("ProdigyWASD Running " + (extension ? "extension" : "bookmarklet") + ".");


async function ProdigyWASD (game : () => any) {


    async function ChangeX (x : number) {
        for (let i = 0; i < 100; i++) {
            await new Promise(r => setTimeout(r, 2));
            game().user.source._playerContainer.x -= x/100;;
        }
    }

    async function ChangeY (y : number) {
        for (let i = 0; i < 100; i++) {
            await new Promise(r => setTimeout(r, 2));
            game().user.source._playerContainer.y -= y/100;;
        }
    }


    window.addEventListener("keydown", (event) => {


        console.log(event)

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

};




if (extension) {

    window.ProdigyWASD = ProdigyWASD;
    
    document.getElementById("gameFile")!.setAttribute("onload", `ProdigyWASD(window.Boot.prototype.game._state._current)`)
    document.getElementById("gameFile")!.dispatchEvent(new CustomEvent("load"));
} else {
    // @ts-expect-error
    ProdigyWASD(() => window.Boot.prototype.game._state._current);
}
