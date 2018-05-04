const Snake = require('./Snake.js');
// const Block = require('./Block.js');
const Apple = require('./Apple.js');
let randomX = Math.floor(Math.random() * 58) * 10;
let randomY = Math.floor(Math.random() * 58) * 10;


class Game {
  constructor(ctx, height, width) {
    this.ctx = ctx;
    this.height = height;
    this.width = width;
    this.currentApple = new Apple(randomX, randomY, 18, 18);
    this.direction = 'right';
    this.gameloop = this.gameloop.bind(this);
    this.gameSnake = new Snake(0, 0, 20, 20);
    this.stopGame = false;
  }
 
  drawSnake() {
    this.gameSnake.buildSnake(this.ctx);
  }

  keepSnakeMoving() {
    this.gameSnake.moveS(this.direction);
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
