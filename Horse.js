
    let Horse = function (width, height, x, y) {
        this.speed = DEFAULT_MAN_SPEED;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y =y;
        this.left = x;
        this.right = y +70;
        this.top = x;
        this.bottom = y +50;
        this.orientation = DEFAULT_MAN_ORIENTATION;
        this.image = new Image();
        this.drawMan = function () {
            this.image.src = "./image/" + this.orientation +".png";
            ctx.drawImage(this.image,this.x,this.y);
        }
        this.move = function () {
            switch (this.orientation) {
                case ORIENTATION_UP:
                    this.y -= this.speed;
                    break;
                case ORIENTATION_DOWN :
                    this.y += this.speed;
                    break;
                case ORIENTATION_LEFT :
                    this.x -= this.speed;
                    break;
                case  ORIENTATION_RIGHT :
                    this.x += this.speed;
                    break;

            }
            this.left = this.x;
            this.right = this.x + 70;
            this.top = this.y;
            this.bottom = this.y+ 60;

        }



    }

