
let GameBoard = function () {
    this.start = function () {
        createObj(8,arrVirus,virusSrc,speedDefault);
        createObj(7,arrCoin,coinSrc,speedDefault);
        createObj(7,arrVirus2,virusSrc,speedDefault);
       interval = setInterval(update,20);
    }
    this.difficult = function (number) {
        speedDefault = Number(number);
    }
    this.reset = function () {
        clearInterval(interval);
        clear();


    }

    }
    let gameBoard = new GameBoard();
    function playGame(){
        gameBoard.start()
        snd.play();
    }
    function speed(number) {
        gameBoard.difficult(number);

    }
    function reset() {
        gameBoard.reset();

    }
