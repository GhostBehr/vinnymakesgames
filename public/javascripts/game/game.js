var initialized = false;
var canvas;
var context;

var fps = 30;
var frameInterval = 1000 / fps;
var lastTime = (new Date()).getTime();

var input;
var player;
var walls;

window.addEventListener('mousedown', init, false);

function init() {
    if (!initialized) {     // change to remove listener
        console.log("init game");
        initialized = true;

        canvas = document.getElementById("canvas");
        canvas.setAttribute("tabindex", "1");

        resize();
        $(window).resize(resize);

        input = new Input();
        canvas.addEventListener('keydown', input.onEvent, false);
        canvas.addEventListener('keyup', input.onEvent, false);
        canvas.addEventListener('keypress', input.onEvent, false);
        canvas.addEventListener('blur', input.onEvent, false);

        canvas.focus();

        player = new Player();

        if (typeof (canvas.getContext) !== undefined) {
            context = canvas.getContext('2d');

            // Begin loops
            setTimeout(update, frameInterval);
            requestAnimationFrame(draw);
        }
    }
}

// For now, resizes canvas and creates new walls
function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    walls = new Array();

    $(".obstacle").each(function() {
        var wallPos = new Vec2($(this).offset().left + $(this).outerWidth() / 2, $(this).offset().top + $(this).outerHeight() / 2);
        var wallSize = new Vec2($(this).outerWidth(), $(this).outerHeight());

        walls.push(new Sprite("#303030", wallPos, 0, wallSize));
    });
}

function update() {
    var currTime = (new Date()).getTime();
    var deltaTime = (currTime - lastTime) / 1000;
    lastTime = currTime;

    player.update(deltaTime);

    // Loop
    setTimeout(update, frameInterval);
}

function draw() {
    // Clear
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Draw
    for (var i = 0; i < walls.length; ++i) {
        walls[i].draw(context);
    }
    player.draw(context);

    // Loop
    requestAnimationFrame(draw);
}