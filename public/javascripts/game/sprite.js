function Vec2(x, y) {
    this.x = x;
    this.y = y;

    this.set = function(newX, newY) {
        this.x = newX;
        this.y = newY;
    }

    this.add = function (vec2) {
        this.x += vec2.x;
        this.y += vec2.y;
    }
}

function Sprite(element, pos, speed, color) {
    this.element = element;
    this.pos = pos;
    this.color = color;
    this.speed = speed;

    this.vel = new Vec2(0, 0);

    this.update = function() {
        this.pos.add(this.vel);
        // set element to position
        this.element.style.left = this.pos.x + "px";
        this.element.style.top = this.pos.y + "px";
    }
}