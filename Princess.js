let Princess = function (x, y) {
    this.x = x;
    this.y = y;
    this.left = x;
    this.right = x + 80;
    this.top = y + 10;
    this.bottom = y + 100;
    this.image = new Image();
    this.image.src = "./image/jail.png";
    this.draw = function () {
        ctx.drawImage(this.image, this.x, this.y);
    }
};