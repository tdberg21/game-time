const Block = require('./Block.js');

class Apple extends Block {
  constructor(height, width, x, y) {
    super(height, width, x, y);
    this.color = 'rgba(255, 0, 0, 1)';
  }

  drawFirstApple(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  eaten() {

  }
}

module.exports = Apple;
