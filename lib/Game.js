const Snake = require('./Snake.js');
const Block = require('./Block.js');
const Apple = require('./Apple.js');

class Game {
  constructor(ctx, height, width) {
    this.ctx = ctx;
    this.height = height;
    this.width = width;
    this.gameSnake = new Snake(10, 10, 10, 10);
    this.gameloop = this.gameloop.bind(this);
    this.direction = 'right';
  }

  drawSnake() {
    this.gameSnake.draw(this.ctx);
  }

  keepSnakeMoving() {
    if (this.direction === 'right') {
      this.gameSnake.moveRight();
    } else if (this.direction === 'left') {
      this.gameSnake.moveLeft();
    } else if (this.direction === 'up') {
      this.gameSnake.moveUp();
    } else if (this.direction === 'down') {
      this.gameSnake.moveDown();
    }
  }

  checkKeyStroke(keyCode) {
    if (keyCode === 39) {
      this.direction = 'right'
      this.gameSnake.moveRight();
    } else if (keyCode === 37) {
      this.direction = 'left'
      this.gameSnake.moveLeft();
    } else if (keyCode === 38) {
      this.direction = 'up'
      this.gameSnake.moveUp();
    } else if (keyCode === 40) {
      this.direction = 'down'
      this.gameSnake.moveDown();
    }
  }

  gameloop() {
    this.ctx.clearRect(0, 0, 600, 600)
    this.drawSnake();
    this.keepSnakeMoving();
    requestAnimationFrame(this.gameloop);
  } 
}

module.exports = Game;
