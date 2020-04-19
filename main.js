    const GAMEBOARD_WIDTH = 1200;
    const GAMEBOARD_HEIGHT = 540;
    const ORIENTATION_LEFT = "left";
    const ORIENTATION_RIGHT = "right";
    const ORIENTATION_DOWN = "down";
    const ORIENTATION_UP = "up";
    const ORIENTATION_CENTER = "center";
    const MAN_WIDTH = 256;
    const MAN_HEIGHT = 256;
    const DEFAULT_MAN_X_POSITION = 0;
    const DEFAULT_MAN_Y_POSITION = 0;
    const DEFAULT_MAN_ORIENTATION = ORIENTATION_CENTER;
    const DEFAULT_MAN_SPEED = 30;


    let canvas = document.getElementById('myCanvas');
    let ctx = canvas.getContext("2d");
    interval =setInterval(update,20);
    function clear(){
        ctx.clearRect(0,0,GAMEBOARD_WIDTH,GAMEBOARD_HEIGHT);
    }
    //Nhạc nền game
    let snd = new Audio("./audio/game.mp3");
    snd.play();
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

    //RANDOM vị trí x ,y
    function myRandom(number){
        return Math.floor(Math.random() * (number));
    }
    //Tạo Virut và Coin
    let virusSrc = "./image/virus.png";
    let coinSrc = "./image/coin.png";
    let arrVirus = [];
    let arrVirus2 = [];
    let arrCoin = [];
    function createObj(level,arr,src){
        let x= 80;
        let y;
        for (let i=0;i<level;i++){
            y  = myRandom(400);
            arr.push(new Object(x,y,src));
            x+=50;
        }
    }
    createObj(8,arrVirus,virusSrc);
    createObj(5,arrCoin,coinSrc);
    createObj(5,arrVirus2,virusSrc);


    //Tao Princess
    let princess = new Princess(1000,450);


    //Update Game
    function update() {
        clear();
        man.drawMan();
        princess.draw();
        for (let i =0; i <8;i++){
            arrVirus[i].update();
            arrVirus[i].move();
        }
        for (let j = 0; j <5; j++){
            arrCoin[j].update();
            arrCoin[j].moveEclipse();
            arrVirus2[j].update();
            arrVirus2[j].moveEclipse();
        }
    }



