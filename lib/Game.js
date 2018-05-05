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
    this.gameSnake = new Snake();
    this.stopGame = false;
    this.lives = 3;
    this.score = 0;
  }

  keepSnakeMoving() {
    this.gameSnake.moveS(this.direction);
  }

  eatApple() {
    if (this.gameSnake.head.x === this.currentApple.x && this.gameSnake.head.y === this.currentApple.y) {
      this.score++;
      this.currentApple = new Apple();
      this.currentApple.drawFirstApple(this.ctx);
      this.gameSnake.grow(this.direction);
      document.getElementById('score-number').innerText = this.score;

    }
  }

  resetGame() {
    this.gameSnake = new Snake();
    this.gameSnake.snakeBody = [];
    this.gameSnake.buildSnake(this.ctx);
    this.direction = 'right'
  }

  gameloop() {
    window.setTimeout(() => {
      this.ctx.clearRect(0, 0, this.width, this.height);
      this.currentApple.drawFirstApple(this.ctx);
      this.gameSnake.draw(this.ctx);
      this.keepSnakeMoving();
      this.eatApple();
      if (this.gameSnake.die) {
        this.resetGame();
      }
      if (this.stopGame) {
        cancelAnimationFrame(this.gameloop);
        this.stopGame = false;
      } else {
        requestAnimationFrame(this.gameloop);
      }
    }, 70)
  }
}

module.exports = Game;
