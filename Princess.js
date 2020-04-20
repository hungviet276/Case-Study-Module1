let Princess =function (x,y) {
    this.x = x;
    this.y = y;
    this.left =
    this.image = new Image();
    this.image.src = "./image/jail.png";
    this.draw = function () {
        ctx.drawImage(this.image,this.x,this.y);

    }


}