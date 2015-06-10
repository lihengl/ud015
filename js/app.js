// Enemies our player must avoid
var Enemy = function (randomSeed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.speed = 25 * randomSeed;
    this.x = -100 - (10 * randomSeed);
    this.y = 60 + (83 * (randomSeed % 3));
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    var canvasW = 505, canvasH = 606;
    var enemyWidth = 100;
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = (this.x > canvasW) ? -enemyWidth : this.x;
    this.x += ((this.speed * dt) % canvasW);
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function () {
    this.sprite = 'images/char-boy.png';
    this.x = 202;
    this.y = 405;
};

Player.prototype.update = function () {
    return;
};

Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function (direction) {
    var stepX = 101, stepY = 83;

    if (direction === 'right') {
        this.x += stepX;
    } else if (direction === 'left') {
        this.x -= stepX;
    } else if (direction === 'down') {
        this.y += stepY;
    } else if (direction === 'up') {
        this.y -= stepY;
    } else {
        console.error('Unknown direction: ' + direction);
    }

    return;
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [], enemyCount = 5, index = 0;

for (index = 0; index < enemyCount; index += 1) {
    allEnemies.push(new Enemy(Math.floor(Math.random() * 10)));
}

var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (evt) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[evt.keyCode]);
});
