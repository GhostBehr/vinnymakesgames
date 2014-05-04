function GameObject(_sprite, _dir, _speed) {
	this.sprite = _sprite;
	this.speed = _speed;
	this.dir = _dir;

    this.update = function(_deltaTime) {
        this.getPos().add(new Vec2(this.dir.x * this.speed * _deltaTime, this.dir.y * this.speed * _deltaTime));
    }

    this.draw = function(_context) {
    	this.sprite.draw(_context);
    }


    // Helpers
    ///////////////////////////////////////////////
    this.getPos = function() {
        return this.sprite.pos;
    };
    this.setPos = function(_pos) {
        this.sprite.pos = _pos;
    };

    this.getRot = function() {
        return this.sprite.rot;
    };
    this.setRot = function(_rot) {
        this.sprite.rot = _rot;
    };

    this.getSize = function() {
        return this.sprite.size;
    };
    this.setSize = function(_size) {
        this.sprite.size = _size;
    };
}