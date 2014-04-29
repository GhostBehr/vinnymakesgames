function Input() {
    // Keys to use
    this.LEFT_ARROW = 0;
    this.RIGHT_ARROW = 1;
    this.UP_ARROW = 2;
    this.DOWN_ARROW = 3;
    this.keys = [new Key(37), new Key(39), new Key(38), new Key(40)];

    this.onKey = function(_event) {
        switch(_event.type) {
            case "keydown":
                input.onKeyDown(_event, input.keys);
                break;

            case "keyup":
                input.onKeyUp(_event, input.keys);
                break;

            case "keypress":
                input.onKeyPress(_event, input.keys);
                break;
        }
    };

    this.onKeyDown = function(_event, _keys) {
        _keys.forEach(function (key) {
            if (key.keyCode === _event.keyCode) {
                key.isPressed = true;
            }
        });
    };

    this.onKeyUp = function(_event, _keys) {
        this.keys.forEach(function (key) {
            if (key.keyCode === _event.keyCode) {
                key.isPressed = false;
            }
        });
    };

    this.onKeyPress = function(_event, _keys) {
    };

    this.getKeyDown = function(_keyCode) {
        return this.keys[_keyCode].isPressed;
    };

    function Key(_keyCode) {
        this.keyCode = _keyCode;
        this.isPressed = false;
    }
}