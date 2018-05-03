const Snake = require('./Snake.js');
// const Block = require('./Block.js');
const Apple = require('./Apple.js');

class Game {
  constructor(ctx, height, width) {
    this.ctx = ctx;
    this.height = height;
    this.width = width;
    this.currentApple = new Apple(10, 10, 400, 200);
    this.direction = 'right';
    this.gameloop = this.gameloop.bind(this);
    this.gameSnake = new Snake(10, 10, 20, 20);
    this.stopGame = false;
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

  gameloop() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.drawSnake();
    this.keepSnakeMoving();
    this.currentApple.drawFirstApple(this.ctx);

    if (this.stopGame) {
      cancelAnimationFrame(this.gameloop);
      this.stopGame = false;
    } else {
      requestAnimationFrame(this.gameloop);
    }
  }
}

module.exports = Game;
