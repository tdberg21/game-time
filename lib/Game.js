const Snake = require('./Snake.js');
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

  resetLives() {
    this.lives = 4;
    let gameOverText = document.querySelector('h3');
    let gameOverImage = document.querySelector('.game-over-image');

    gameOverText.classList.add('game-over-display');
    gameOverImage.classList.add('game-over-display');
  }

  eatApple() {
    if (this.gameSnake.head.x === this.currentApple.x 
      && this.gameSnake.head.y === this.currentApple.y) {
      this.score++;
      this.currentApple = new Apple();
      this.currentApple.drawFirstApple(this.ctx);
      this.gameSnake.grow(this.direction);
    }
  }
  
  updateScoreAndLives() {
    document.getElementById('score-number').innerText = this.score;
    document.getElementById('lives-number').innerText = this.lives;
  }

  newLife() {
    if (this.gameSnake.die) {
      this.gameSnake = new Snake();
      this.gameSnake.buildSnake(this.ctx);
      this.direction = 'right';
      this.lives--;
      if (this.lives === 0) {
        let gameOverText = document.querySelector('h3');
        let gameOverImage = document.querySelector('.game-over-image');

  
        gameOverText.classList.remove('game-over-display');
        gameOverImage.classList.remove('game-over-display');
        this.stopGame = true;
        this.ctx.clearRect(0, 0, this.width, this.height);
      }
    }
  }

  gameloop() {
    window.setTimeout(() => {
      this.ctx.clearRect(0, 0, this.width, this.height);
      this.currentApple.drawFirstApple(this.ctx);
      this.gameSnake.draw(this.ctx);
      this.keepSnakeMoving();
      this.eatApple();
      this.newLife();
      this.updateScoreAndLives();
     
      if (this.stopGame) {
        cancelAnimationFrame(this.gameloop);
        this.stopGame = false;
      } else {
        requestAnimationFrame(this.gameloop);
      }
    }, 60)
  }
}

module.exports = Game;
