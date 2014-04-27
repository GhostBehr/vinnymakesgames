var initialized = false;
var player;

function init() {
    if (!initialized) {
        console.log("init game");
        initialized = true;

        initInput();

        document.addEventListener('keydown', onKeyDown, false);
        document.addEventListener('keyup', onKeyUp, false);
        document.addEventListener('keypress', onKeyPress, false);

        player = new Sprite(document.getElementById("player"), new Vec2(10, 10), 10, "red");

        window.setInterval(run, 200);
    }
}



function run() {
    // timer.tick
    // if key
    // player.update
    // enemies.update

    // INPUT - move to player
    //////////////////////////////////
    player.vel.set(0, 0);

    if (getKeyDown(LEFT_ARROW)) {
        player.vel.add(new Vec2(-player.speed, 0));
    }
    if (getKeyDown(RIGHT_ARROW)) {
        player.vel.add(new Vec2(player.speed, 0));
    }
    if (getKeyDown(UP_ARROW)) {
        player.vel.add(new Vec2(0, -player.speed));
    }
    if (getKeyDown(DOWN_ARROW)) {
        player.vel.add(new Vec2(0, player.speed));
    }

    // UPDATE
    //////////////////////////////////
    player.update();
}
