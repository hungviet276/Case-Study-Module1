let Princess =function (x,y) {
    this.x = x;
    this.y = y;
    this.image = new Image();
    this.image.src = "./image/princess.png";
    this.draw = function () {
        ctx.drawImage(this.image,this.x,this.y);

    }


}