const Snake = require('./Snake.js');
const Block = require('./Block.js');
const Apple = require('./Apple.js');

class Game {
  constructor(ctx, height, width) {
    this.ctx = ctx;
    this.height = height;
    this.width = width;
    this.gameSnake = new Snake();
  }
  drawSnake() {
    this.gameSnake.draw(this.ctx);
  }
  gameloop() {
    this.drawSnake(this.ctx);
  } 
}

module.exports = Game;