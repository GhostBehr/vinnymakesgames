function Input() {
    // Keys to use
    this.LEFT_ARROW = 0;
    this.RIGHT_ARROW = 1;
    this.UP_ARROW = 2;
    this.DOWN_ARROW = 3;
    this.W = 4;
    this.A = 5;
    this.S = 6;
    this.D = 7;

    this.keys = [
        new Key(37),
        new Key(39),
        new Key(38),
        new Key(40),
        new Key(87),
        new Key(65),
        new Key(83),
        new Key(68)
    ];

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
                if (!key.isPressed) {
                    key.uncheckedDown = true;
                }
                key.isPressed = true;
                key.uncheckedUp = false;
            }
        });
    };

    this.onKeyUp = function(_event, _keys) {
        this.keys.forEach(function (key) {
            if (key.keyCode === _event.keyCode) {
                key.isPressed = false;
                key.uncheckedDown = false;
                key.uncheckedUp = true;
            }
        });
    };

    this.onKeyPress = function(_event, _keys) {
    };

    this.getKeyDown = function(_keyCode) {
        return this.keys[_keyCode].isPressed;
    };

    this.getUncheckedDown = function(_keyCode) {
        if (this.keys[_keyCode].uncheckedDown) {
            this.keys[_keyCode].uncheckedDown = false;
            return true;
        }
        return false;
    }

    this.getUncheckedUp = function(_keyCode) {
        if (this.keys[_keyCode].uncheckedUp) {
            this.keys[_keyCode].uncheckedUp = false;
            return true;
        }
        return false;
    }

    function Key(_keyCode) {
        this.keyCode = _keyCode;
        this.isPressed = false;
        this.uncheckedDown = false;
        this.uncheckedUp = false;
    }
}

// TODO: This setup explodes with modifier keys (ctrl, etc)