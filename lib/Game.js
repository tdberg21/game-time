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
    this.lives = 3;
    this.score = 0;
  }
 
  drawSnake() {
    this.gameSnake.buildSnake(this.ctx);
  }

  randomNumber() {
    let randomX = Math.floor(Math.random() * 58) * 10;
    // let randomY = Math.floor(Math.random() * 58) * 10;

    return randomX;
  }

  keepSnakeMoving() {
    this.gameSnake.moveS(this.direction);
  }

  eatApple() {
    if (this.gameSnake.head.x === this.currentApple.x && this.gameSnake.head.y === this.currentApple.y) {
      this.score++;
      console.log(randomX, randomY)

      this.currentApple = new Apple(this.randomNumber, this.randomNumber, 18, 18);
      this.currentApple.drawFirstApple(this.ctx);
      this.gameSnake.grow();
    }
  }

  gameloop() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.drawSnake();
    this.keepSnakeMoving();
    this.currentApple.drawFirstApple(this.ctx);
    // this.gameSnake.grow(this.currentApple);
    this.eatApple();

    if (this.stopGame) {
      cancelAnimationFrame(this.gameloop);
      this.stopGame = false;
    } else {
      requestAnimationFrame(this.gameloop);
    }
  }
}

module.exports = Game;
