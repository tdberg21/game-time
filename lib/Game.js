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
  }

  drawSnake() {
    console.log('drawSnake')
    this.gameSnake.draw(this.ctx);
  }

  checkKeyStroke(keyCode) {
    if (keyCode === 39) {
      this.gameSnake.moveRight();
    } else if (keyCode === 37) {
      this.gameSnake.moveLeft();
    } else if (keyCode === 38) {
      this.gameSnake.moveUp();
    } else if (keyCode === 40) {
      this.gameSnake.moveDown();
    }
  }

  gameloop() {
    this.ctx.clearRect(0,0, 600, 600)
    this.drawSnake();
    // window.requestAnimationFrame(this.gameLoop);
  } 
}

module.exports = Game;
