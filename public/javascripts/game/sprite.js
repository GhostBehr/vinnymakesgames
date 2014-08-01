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

    this.subtract = function(_vec2) {
        this.x -= _vec2.x;
        this.y -= _vec2.y;
    }

    this.copy = function() {
        return new Vec2(this.x, this.y);
    }
}

function Rect(_pos, _size) {
    this.pos = new Vec2(_pos.x - _size.x / 2, _pos.y - _size.y / 2);
    this.size = _size.copy();

    this.intersects = function(_rect) {
        if (_rect.pos.x < this.pos.x + this.size.x
            && this.pos.x < _rect.pos.x + _rect.size.x
            && _rect.pos.y < this.pos.y + this.size.y
            && this.pos.y < _rect.pos.y + _rect.size.y) {
            return true;
        }
        return false;
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

    this.getBounds = function() {
        return new Rect(this.pos, this.size);
    }
}