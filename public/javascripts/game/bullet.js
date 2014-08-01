function Bullet(_pos, _dir, _list) {
    this.go = new GameObject(new Sprite("white", _pos.copy(), 0, new Vec2(5, 5)), _dir.copy(), 500);
    this.list = _list;

    this.update = function(_deltaTime) {
        // BASE
        this.go.update(_deltaTime);

        if (this.go.sprite.pos.x < 0 || this.go.sprite.pos.x > 2000
            || this.go.sprite.pos.y < 0 || this.go.sprite.pos.y > 2000) {
            this.remove();
        }

        for (var i = 0; i < walls.length; ++i) {
            if(this.go.getBounds().intersects(walls[i].getBounds())) {
                this.remove();
            }
        }
    };

    this.draw = function(_context) {
        this.go.draw(context);
    };

    this.remove = function() {
        this.list.splice(this.list.indexOf(this), 1);
    }
}