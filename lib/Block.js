const Game = require('./Game.js')

class Block {
  constructor(height, width, x=20, y=20) {
    this.height = 10;
    this.width = 10;
    this.x = x;
    this.y = y;
  }
  draw(ctx) {
    ctx.fillRect(20, 20, this.height, this.width);
    return this;
  }
}

module.exports = Block;
