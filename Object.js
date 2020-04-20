    let Object = function (x, y, src) {
    this.x = x;
    this.y = y;
    this.left = x +24;
    this.top = y +24;
    this.angle =0;
    this.moveAngle = 0.5;
    this.speed = 1;
    this.update =function () {
        let image = new Image();
        image.src =src;
        ctx.drawImage(image,this.x,this.y);

    }
        this.moveEclipse = function() {
           this.angle += this.moveAngle * Math.PI / 180;
            this.x += this.speed * Math.sin(this.angle);
            this.y -= this.speed * Math.cos(this.angle);
            this.left = this.x +24;
            this.top = this.y +24;
    }


        this.move = function () {
        this.y += 1;
        if (this.y >450){this.y = 2;}
        this.left = this.x +24;
        this.top = this.y +24;

        }
        this.destroy = function () {
        this.x =1500;
        this.y =1500;

        }


    }



