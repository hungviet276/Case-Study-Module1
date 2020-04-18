    const GAMEBOARD_WIDTH = 1200;
    const GAMEBOARD_HEIGHT = 540;
    const ORIENTATION_LEFT = "left";
    const ORIENTATION_RIGHT = "right";
    const ORIENTATION_DOWN = "down";
    const ORIENTATION_UP = "up";
    const MAN_WIDTH = 256;
    const MAN_HEIGHT = 256;
    const DEFAULT_MAN_X_POSITION = 0;
    const DEFAULT_MAN_Y_POSITION = 0;
    const DEFAULT_MAN_ORIENTATION = ORIENTATION_RIGHT;
    const DEFAULT_MAN_SPEED = 20;

    let canvas = document.getElementById('myCanvas');
    let ctx = canvas.getContext("2d");
    interval =setInterval(update,20);
    function clear(){
        ctx.clearRect(0,0,GAMEBOARD_WIDTH,GAMEBOARD_HEIGHT);
    }
    // Tạo nhân vật Man
    let man = new Man(100,100,0,0);


    function moveMan(event) {
        let orientation = 0;
        switch (event.which) {
            case 37:
                orientation = ORIENTATION_LEFT;
                break;
            case 38 :
                orientation = ORIENTATION_UP;
                break;
            case 39:
                orientation = ORIENTATION_RIGHT;
                break;
            case 40 :
                orientation = ORIENTATION_DOWN;
                break;
        }
        if (orientation) {
            if (man.orientation != orientation) {
                man.orientation = orientation;
            } else {
                man.move();
            }
        }
    }

    //Update Game
    function update() {
        clear();
        man.drawMan();
    }



