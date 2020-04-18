    let Virus = function (x, y) {
    this.x = x;
    this.y = y;
    this.left = x + 25;
    this.top = y +25;
    this.angle =0;
    this.moveAngle = 1;
    this.speed = 1;
    this.update =function () {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        let image = new Image();
        image.src ="./image/virus.png";
        ctx.drawImage(image,this.x,this.y);
        ctx.restore();
    }
        this.newVirus = function() {
            this.angle += this.moveAngle * Math.PI / 180;
            this.x += this.speed * Math.sin(this.angle);
            this.y -= this.speed * Math.cos(this.angle);
        }


    }
    let virus = new Virus(200,200);
