let Object = function (x, y, src, speed) {
    this.x = x;
    this.y = y;
    this.left = x + 24;
    this.top = y + 24;
    this.angle = 0;
    this.moveAngle = 1;
    this.speed = speed;
    this.update = function () {
        let image = new Image();
        image.src = src;
        ctx.drawImage(image, this.x, this.y);

    };
    // Di chuyển vòng tròn
    this.moveEclipse = function () {
        this.angle += this.moveAngle * Math.PI / 180;
        this.x += this.speed * Math.sin(this.angle);
        this.y -= this.speed * Math.cos(this.angle);
        this.left = this.x + 24;
        this.top = this.y + 24;
    };
    //Di chuyển thẳng
    this.move = function () {
        this.y += this.speed;
        if (this.y > 490) {
            this.y = 2;
        }
        this.left = this.x + 24;
        this.top = this.y + 24;

    };
    // hủy Coin
    this.destroy = function () {
        this.x = 1500;
        this.y = 1500;

    }


};



