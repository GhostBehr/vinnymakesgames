function Player() {
    this.go = new GameObject(new Sprite("red", new Vec2(300, 100), 0, new Vec2(20, 20)), new Vec2(0, 0), 200);

    this.gun = new Sprite("green", this.go.getPos(), 0, new Vec2(5, 8));
    this.gunOffset = new Vec2(this.go.getSize().x / 2, this.go.getSize().y / 2);
    this.bullets = new Array();
    this.canFire = true;
    this.fireRate = 0.2;
    this.fireTimer = 0;

    this.facing = "";
    this.inputQueue = new Array();
    this.facingInputs = [input.LEFT_ARROW, input.RIGHT_ARROW, input.UP_ARROW, input.DOWN_ARROW, input.W, input.A, input.S, input.D];

    this.update = function(_deltaTime) {
        // INPUT
        this.go.dir.set(0, 0);
        this.facing = "";
        var facingSetByGun = false;

        for (var i = this.facingInputs.length - 1; i >= 0; --i) {
            if (input.getUncheckedDown(this.facingInputs[i])) {
                this.inputQueue.push(this.facingInputs[i]);
            }
        }
        
        
        if (this.inputQueue.length == 0) {
            this.facing = "d";
        }
        for (var i = this.inputQueue.length - 1; i >= 0; --i) {
            if (input.getUncheckedUp(this.inputQueue[i])) {
                this.inputQueue.splice(i, 1);
                continue;
            }

            switch(this.inputQueue[i]) {
                // Shoot
                case input.LEFT_ARROW:
                    if (!input.getKeyDown(input.RIGHT_ARROW)) {
                        this.tryShot(new Vec2(-1, 0));
                        if (!facingSetByGun) {
                            this.facing = "l";
                            facingSetByGun = true;
                        }
                    }
                    break;

                case input.RIGHT_ARROW:
                    if (!input.getKeyDown(input.LEFT_ARROW)) {
                        this.tryShot(new Vec2(1, 0));
                        if (!facingSetByGun) {
                            this.facing = "r";
                            facingSetByGun = true;
                        }
                    }
                    break;

                case input.UP_ARROW:
                    if (!input.getKeyDown(input.DOWN_ARROW)) {
                        this.tryShot(new Vec2(0, -1));
                        if (!facingSetByGun) {
                            this.facing = "u";
                            facingSetByGun = true;
                        }
                    }
                    break;

                case input.DOWN_ARROW:
                    if (!input.getKeyDown(input.UP_ARROW)) {
                        this.tryShot(new Vec2(0, 1));
                        if (!facingSetByGun) {
                            this.facing = "d";
                            facingSetByGun = true;
                        }
                    }
                    break;

                // Move
                case input.A:
                    if (!input.getKeyDown(input.D)) {
                        this.go.dir.add(new Vec2(-1, 0));
                        if (!facingSetByGun && this.facing == "") {
                            this.facing = "l";
                        }
                    }
                    break;

                case input.D:
                    if (!input.getKeyDown(input.A)) {
                        this.go.dir.add(new Vec2(1, 0));
                        if (!facingSetByGun && this.facing == "") {
                            this.facing = "r";
                        }
                    }
                    break;

                case input.W:
                    if (!input.getKeyDown(input.S)) {
                        this.go.dir.add(new Vec2(0, -1));
                        if (!facingSetByGun && this.facing == "") {
                            this.facing = "u";
                        }
                    }
                    break;

                case input.S:
                    if (!input.getKeyDown(input.W)) {
                        this.go.dir.add(new Vec2(0, 1));
                        if (!facingSetByGun && this.facing == "") {
                            this.facing = "d";
                        }
                    }
                    break;
            }

        }

        if (!this.canFire) {
            this.fireTimer += _deltaTime;
            if (this.fireTimer >= this.fireRate) {
                this.canFire = true;
                this.fireTimer = 0;
            }
        }


        //  // Move
        // if (input.getKeyDown(input.A)) {
        //     this.go.dir.add(new Vec2(-1, 0));
        //     // this.facing = "l";
        // }
        // if (input.getKeyDown(input.D)) {
        //     this.go.dir.add(new Vec2(1, 0));
        //     // this.facing = "r";
        // }
        // if (input.getKeyDown(input.W)) {
        //     this.go.dir.add(new Vec2(0, -1));
        //     // this.facing = "u";
        // }
        // if (input.getKeyDown(input.S)) {
        //     this.go.dir.add(new Vec2(0, 1));
        //     // this.facing = "d";
        // }

        // // Shoot
        // // LEFT
        // if (input.getKeyDown(input.LEFT_ARROW)) {
        //     if (!input.getKeyDown(input.RIGHT_ARROW)) {
        //         // this.facing = "l";
        //         this.tryShot(new Vec2(-1, 0));
        //     }
        // }
        // // RIGHT
        // else if (input.getKeyDown(input.RIGHT_ARROW)) {
        //     // this.facing = "r";
        //     this.tryShot(new Vec2(1, 0));
        // }

        // // UP
        // if (input.getKeyDown(input.UP_ARROW)) {
        //     if (!input.getKeyDown(input.DOWN_ARROW)) {
        //         // this.facing = "u";
        //         this.tryShot(new Vec2(0, -1));
        //     }
        // }
        // // DOWN
        // else if (input.getKeyDown(input.DOWN_ARROW)) {
        //     // this.facing = "d";
        //     this.tryShot(new Vec2(0, 1));
        // }

        // if (!this.canFire) {
        //     this.fireTimer += _deltaTime;
        //     if (this.fireTimer >= this.fireRate) {
        //         this.canFire = true;
        //         this.fireTimer = 0;
        //     }
        // }

        // // Facing
        // if (input.getKeyDownOnce(input.LEFT_ARROW)) {
        //     this.facing = "l";
        // }
        // else if (input.getKeyDownOnce(input.RIGHT_ARROW)) {
        //     this.facing = "r";
        // }
        // else if (input.getKeyDownOnce(input.UP_ARROW)) {
        //     this.facing = "u";
        // }
        // else if (input.getKeyDownOnce(input.DOWN_ARROW)) {
        //     this.facing = "d";
        // }
        // else if (input.getKeyDownOnce(input.A)) {
        //     this.facing = "l";
        // }
        // else if (input.getKeyDownOnce(input.D)) {
        //     this.facing = "r";
        // }
        // else if (input.getKeyDownOnce(input.W)) {
        //     this.facing = "u";
        // }
        // else if (input.getKeyDownOnce(input.S)) {
        //     this.facing = "d";
        // }

        // Update
        this.go.update(_deltaTime);

        switch(this.facing) {
            case "l":
                this.go.setRot(-1.57);
                this.gun.pos = new Vec2(this.go.getPos().x - this.gunOffset.x, this.go.getPos().y);
                break;

            case "r":
                this.go.setRot(1.57);
                this.gun.pos = new Vec2(this.go.getPos().x + this.gunOffset.x, this.go.getPos().y);
                break;

            case "u":
                this.go.setRot(3.14);
                this.gun.pos = new Vec2(this.go.getPos().x, this.go.getPos().y - this.gunOffset.y);
                break;

            case "d":
                this.go.setRot(0);
                this.gun.pos = new Vec2(this.go.getPos().x, this.go.getPos().y + this.gunOffset.y);
                break;
        }

        // gun
        this.gun.rot = this.go.getRot();

        for (var i = this.bullets.length - 1; i >= 0; --i) {
            this.bullets[i].update(_deltaTime);
        }
    };

    this.draw = function(_context) {
        this.go.draw(context);
        this.gun.draw(_context);

        for (var i = this.bullets.length - 1; i >= 0; --i) {
            this.bullets[i].draw(_context);
        }
    };


    // HELPERS
    /////////////////////////////////
    this.updateInputQueue = function() {

    }

    this.tryShot = function(_shotDir) {
        if (this.canFire) {
            this.bullets.push(new Bullet(this.go.getPos(), _shotDir, this.bullets));
            this.canFire = false;
        }
    }
}