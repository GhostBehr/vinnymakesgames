function Vec2(_x, _y) {
    this.x = _x;
    this.y = _y;

    this.set = function(_x, _y) {
        this.x = _x;
        this.y = _y;
    }

    this.add = function(_vec2) {
        this.x += _vec2.x;
        this.y += _vec2.y;
    }

    this.copy = function() {
        return new Vec2(this.x, this.y);
    }
}

function Sprite(_color, _pos, _rot, _size) {
    this.color = _color;
    this.pos = _pos;    // center
    this.rot = _rot;    // in rads
    this.size = _size;

    this.draw = function(_context) {
        var oldStyle = _context.fillStyle;
        _context.fillStyle = this.color;

        _context.translate(this.pos.x, this.pos.y);
        _context.rotate(this.rot);
        _context.translate(-this.size.x / 2, -this.size.y / 2);

        _context.fillRect(0, 0, this.size.x, this.size.y);

        _context.translate(this.size.x / 2, this.size.y / 2);
        _context.rotate(-this.rot);
        _context.translate(-this.pos.x, -this.pos.y);

        _context.fillStyle = oldStyle;
    }
}