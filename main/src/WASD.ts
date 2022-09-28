(async function () : Promise<void> {

    // @ts-expect-error
    let player = () => window.Boot.prototype.game._state._current.user.source;
    


    async function ChangeX (x : number) {
        for (let i = 0; i < 100; i++) {
            await new Promise(r => setTimeout(r, 2));
            player()._playerContainer.x -= x/100;;
        }
    }

    async function ChangeY (y : number) {
        for (let i = 0; i < 100; i++) {
            await new Promise(r => setTimeout(r, 2));
            player()._playerContainer.y -= y/100;;
        }
    }


    window.addEventListener("keydown", event => {

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


})();
