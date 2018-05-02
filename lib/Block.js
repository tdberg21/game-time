const Game = require('./Game.js')

class Block {
  constructor(height = 10, width = 10, x = 20, y = 20) {
    this.height = height;
    this.width = width;
    this.x = x;
    this.y = y;
  }

  draw(ctx) {
    ctx.fillRect(20, 20, 10, 10);
    return this;
  }
}

module.exports = Block;
