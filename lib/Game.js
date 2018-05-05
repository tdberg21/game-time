const Snake = require('./Snake.js');
// const Block = require('./Block.js');
const Apple = require('./Apple.js');


class Game {
  constructor(ctx, height, width) {
    this.ctx = ctx;
    this.height = height;
    this.width = width;
    this.currentApple = new Apple();
    this.direction = 'right';
    this.gameloop = this.gameloop.bind(this);
    this.gameSnake = new Snake(0, 0, 10, 10);
    this.stopGame = false;
    this.lives = 3;
    this.score = 0;
  }
 
  drawSnake() {
    this.gameSnake.buildSnake(this.ctx);
  }

  keepSnakeMoving() {
    this.gameSnake.moveS(this.direction);
  }

  eatApple() {
    if (this.gameSnake.head.x === this.currentApple.x && this.gameSnake.head.y === this.currentApple.y) {
      this.score++;
      this.currentApple = new Apple();
      this.currentApple.drawFirstApple(this.ctx);
      this.gameSnake.grow();
    }
  }

  gameloop() {
    window.setTimeout(() => {

      this.ctx.clearRect(0, 0, this.width, this.height);
      this.currentApple.drawFirstApple(this.ctx);
      this.drawSnake();
      this.keepSnakeMoving();
      this.eatApple();
      
      
      if (this.stopGame) {
        cancelAnimationFrame(this.gameloop);
        this.stopGame = false;
      } else {
        requestAnimationFrame(this.gameloop);
      }
    }, 100)
  }
}

module.exports = Game;
