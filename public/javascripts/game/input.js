// Keys to use
const LEFT_ARROW = 0;
const RIGHT_ARROW = 1;
const UP_ARROW = 2;
const DOWN_ARROW = 3;
const keyCodeArr = [37, 39, 38, 40];    // Keycodes in order

var keys = new Array();

function initInput() {
    keyCodeArr.forEach(function (entry) {
        keys.push(new Key(entry));
    });
}

function onKeyDown(event) {
    keys.forEach(function (key) {
        if (key.keyCode === event.keyCode) {
            key.isPressed = true;
        }
    });
}

function onKeyUp(event) {
    keys.forEach(function (key) {
        if (key.keyCode === event.keyCode) {
            key.isPressed = false;
        }
    });
}

function onKeyPress(event) {
}

function getKeyDown(keyCode) {
    return keys[keyCode].isPressed;
}

function Key(keyCode) {
    this.keyCode = keyCode;
    this.isPressed = false;
}