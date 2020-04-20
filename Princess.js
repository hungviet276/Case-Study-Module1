let Princess =function (x,y) {
    this.x = x;
    this.y = y;
    this.left = x + 50;
    this.top = y;

    this.image = new Image();
    this.image.src = "./image/jail.png";
    this.draw = function () {
        ctx.drawImage(this.image,this.x,this.y);

    }


}