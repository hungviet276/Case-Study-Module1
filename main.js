    const GAMEBOARD_WIDTH = 1050;
    const GAMEBOARD_HEIGHT = 570;
    const ORIENTATION_LEFT = "left";
    const ORIENTATION_RIGHT = "right";
    const ORIENTATION_DOWN = "down";
    const ORIENTATION_UP = "up";
    const ORIENTATION_CENTER = "center";
    const DEFAULT_MAN_ORIENTATION = ORIENTATION_CENTER;
    const DEFAULT_MAN_SPEED = 30;
    let speedDefault =1;
    let interval;

    //Tạo canvas
    let canvas = document.getElementById('myCanvas');
    canvas.style.background = "url('./image/background.jpg')";
    let ctx = canvas.getContext("2d");
    function clear(){
        ctx.clearRect(0,0,GAMEBOARD_WIDTH,GAMEBOARD_HEIGHT);
    }

    //Nhạc nền game
    let snd = new Audio("./audio/game.mp3");


    // Tính điểm
    let point =0;
    function displayPoint() {
    document.getElementById('point').innerHTML = point;
    }



    // Tạo nhân vật Horse
    let horse = new Horse(100,100,0,0);

    //Tao Princess
    let princess = new Princess(970,410);

    // Hàm dịch chuyển Horse
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
            if (horse.orientation != orientation) {
                horse.orientation = orientation;
            } else {
                horse.move();
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
    function createObj(level,arr,src,speed){
        let x= 100;
        let y;
        for (let i=0;i<level;i++){
            y  = myRandom(445);
            arr.push(new Object(x,y,src,speed));
            x+=105;
        }
    }

    //Test va chạm
    function testCrack(arr) {
        for (let i= 0; i < arr.length ;i++){
            if (arr[i].left > horse.left && arr[i].left < horse.right && arr[i].top > horse.top && arr[i].top<horse.bottom ){
               if (arr==arrVirus || arr== arrVirus2){alert("GAME OVER");}
               if (arr== arrCoin){point++;arr[i].destroy();}
            }
        }

    }

    //Update Game
    function update() {
        clear();
        horse.drawMan();
        princess.draw();
        for (let i =0; i <8;i++){
            arrVirus[i].update();
            arrVirus[i].move();
        }
        for (let j = 0; j <7; j++){
            arrCoin[j].update();
            arrCoin[j].moveEclipse();
            arrVirus2[j].update();
            arrVirus2[j].moveEclipse();
        }
        testCrack(arrVirus);
        testCrack(arrVirus2);
        testCrack(arrCoin);
        displayPoint();
    }



