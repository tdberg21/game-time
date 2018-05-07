const Snake = require('./Snake.js');
const Apple = require('./Apple.js');

class Game {
  constructor(height, width) {
    this.height = height;
    this.width = width;
    this.currentApple = new Apple();
    this.direction = 'right';
    this.gameSnake = new Snake();
    this.stopGame = false;
    this.lives = 3;
    this.score = 0;
    this.highScore = localStorage.getItem("highscore");
    this.gameOver = false;
    this.eatApple = this.eatApple.bind(this);
  }

  keepSnakeMoving() {
    this.gameSnake.moveS(this.direction);
  }

  eatApple(ctx) {
    if (this.gameSnake.head.x === this.currentApple.x
      && this.gameSnake.head.y === this.currentApple.y) {
      this.score++;
      this.currentApple = new Apple();
      this.currentApple.drawFirstApple(ctx);
      this.gameSnake.grow(this.direction);
    }
  }

  newLife(ctx) {
    if (this.gameSnake.die) {
      this.gameSnake = new Snake();
      this.direction = 'right';
      this.lives--;
      if (this.lives === 0) {
        this.gameOver = true;
        ctx.clearRect(0, 0, this.width, this.height);
        if (this.highScore > 0) {
          if (this.score > this.highScore) {
            this.highScore = this.score;
            localStorage.setItem("highScore", JSON.stringify(this.highScore));
          }
        } else {
          this.highScore = this.score;
          localStorage.setItem("highScore", JSON.stringify(this.highScore));
        }
        this.stopGame = true;
      }
    }
  }
}

module.exports = Game;
