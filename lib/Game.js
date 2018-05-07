const Snake = require('./Snake.js');
const Apple = require('./Apple.js');

class Game {
  constructor(height, width) {
    // this.ctx = ctx;
    this.height = height;
    this.width = width;
    this.currentApple = new Apple();
    this.direction = 'right';
    // this.gameloop = this.gameloop.bind(this);
    this.gameSnake = new Snake();
    this.stopGame = false;
    this.lives = 3;
    this.score = 0;
    this.highScore = localStorage.getItem("highscore");
    this.gameOver = false;
    this.eatApple = this.eatApple.bind(this);
    this.foodEaten = false;
  }

  keepSnakeMoving() {
    // window.setTimeout(() => {
      this.gameSnake.moveS(this.direction);
    // }, 60)
  }

  resetLives() {
    this.lives = 3;
    this.score = 0;
    // let gameOverText = document.querySelector('h3');
    // let resetGameText = document.querySelector('.reset-game-paragraph');
    // let gameOverImage = document.querySelector('.game-over-image');

    // gameOverText.classList.add('game-over-display');
    // gameOverImage.classList.add('game-over-display');
    // resetGameText.classList.add('game-over-display');
    // cancelAnimationFrame(this.gameloop);
    // requestAnimationFrame(this.gameloop);
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

  updateScoreAndLives() {
    // document.getElementById('score-number').innerText = this.score;
    // document.getElementById('lives-number').innerText = this.lives;
  }

  newLife(ctx) {
    if (this.gameSnake.die) {
      this.gameSnake = new Snake();
      this.direction = 'right';
      this.lives--;
      if (this.lives === 0) {
        this.gameOver = true;
        // const gameOverText = document.querySelector('h3');
        // const resetGameText = document.querySelector('.reset-game-paragraph');
        // const gameOverImage = document.querySelector('.game-over-image');
        // const highScoreDisplay = document.getElementById('high-number');
        // const highScoreName = document.querySelector('.high-score-name');

        // gameOverText.classList.remove('game-over-display');
        // gameOverImage.classList.remove('game-over-display');
        // resetGameText.classList.remove('game-over-display');
        ctx.clearRect(0, 0, this.width, this.height);

       
        if (this.highScore > 0) {
          if (this.score > this.highScore) {
            this.highScore = this.score;
            // highScoreName.classList.remove('game-over-display');
            localStorage.setItem("highScore", JSON.stringify(this.highScore));
          }
        } else {
          this.highScore = this.score;
          // highScoreName.classList.remove('game-over-display');                
          localStorage.setItem("highScore", JSON.stringify(this.highScore));
        }
        // highScoreDisplay.innerText = this.highScore;
        this.stopGame = true;
      }
    }
  }

  // gameloop(ctx) {
  //   window.setTimeout(() => {
  //     // debugger;
  //     ctx.clearRect(0, 0, this.width, this.height);
  //     this.currentApple.drawFirstApple(ctx);
  //     this.keepSnakeMoving();
  //     this.gameSnake.drawSnake(ctx);
  //     this.eatApple();
  //     this.newLife(ctx);
  //     this.updateScoreAndLives();

  //     if (this.stopGame) {
  //       cancelAnimationFrame(() => this.gameloop(ctx));
  //       this.stopGame = false;
  //     } else {
  //       requestAnimationFrame(() => this.gameloop(ctx));
  //     }
  //   }, 60)
  // }
}

module.exports = Game;
