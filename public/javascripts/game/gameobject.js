function GameObject(_sprite, _speed) {
	this.sprite = _sprite;
	this.speed = _speed;

	this.dir = new Vec2(0, 0);

    this.update = function(_deltaTime) {
        this.sprite.pos.add(new Vec2(this.dir.x * this.speed * _deltaTime, this.dir.y * this.speed * _deltaTime));
    }

    this.draw = function(_context) {
    	this.sprite.draw(_context);
    }
}