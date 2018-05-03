class Block {
  constructor(height, width, x, y) {
    this.height = height;
    this.width = width;
    this.x = x;
    this.y = y;
  }

  draw(ctx) {
    ctx.fillRect(this.x, this.y, this.height, this.height);
  }
}

module.exports = Block;
