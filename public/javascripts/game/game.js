var initialized = false;
var canvas;
var context;

var fps = 30;
var frameInterval = 1000 / fps;
var lastTime = (new Date()).getTime();

var input;
var player;

window.addEventListener('mousedown', init, false);

function init() {
    if (!initialized) {     // change to remove listener
        console.log("init game");
        initialized = true;

        input = new Input();

        document.addEventListener('keydown', input.onKey, false);
        document.addEventListener('keyup', input.onKey, false);
        document.addEventListener('keypress', input.onKey, false);

        canvas = document.getElementById("canvas");
        // canvas.width = window.innerWidth;        // do later
        // canvas.height = window.innerHeight;      // do later
        canvas.width = "1600";
        canvas.height = "600";

        // Game stuff
        ///////////////////////////////
        player = new GameObject(new Sprite("red", new Vec2(200, 100), 3.14159, new Vec2(20, 20)), 20);

        if (typeof (canvas.getContext) !== undefined) {
            context = canvas.getContext('2d');

            // Begin loops
            setTimeout(update, frameInterval);
            requestAnimationFrame(draw);
        }
    }
}

function update() {
    var currTime = (new Date()).getTime();
    var deltaTime = (currTime - lastTime) / 1000;
    lastTime = currTime;

    // INPUT - move to player?
    //////////////////////////////////
    player.dir.set(0, 0);

    if (input.getKeyDown(input.LEFT_ARROW)) {
        player.dir.add(new Vec2(-player.speed, 0));
    }
    if (input.getKeyDown(input.RIGHT_ARROW)) {
        player.dir.add(new Vec2(player.speed, 0));
    }
    if (input.getKeyDown(input.UP_ARROW)) {
        player.dir.add(new Vec2(0, -player.speed));
    }
    if (input.getKeyDown(input.DOWN_ARROW)) {
        player.dir.add(new Vec2(0, player.speed));
    }

    // UPDATE
    //////////////////////////////////
    player.update(deltaTime);


    // Loop
    setTimeout(update, frameInterval);
}

function draw() {
    // Clear
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Draw
    player.draw(context);

    // Loop
    requestAnimationFrame(draw);
}