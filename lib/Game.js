const Snake = require('./Snake.js');
const Block = require('./Block.js');
const Apple = require('./Apple.js');

class Game {
  constructor(ctx, height, width) {
    this.ctx = ctx;
    this.height = height;
    this.width = width;
    this.gameSnake = new Snake();
    this.gameloop = this.gameloop.bind(this);
  }

  drawSnake() {
    console.log('drawSnake')
    this.gameSnake.draw(this.ctx);
  }

  gameloop() {
    this.ctx.clearRect(0,0, 600, 600)
    this.drawSnake();
    // window.requestAnimationFrame(this.gameLoop);
  } 
}

module.exports = Game;
