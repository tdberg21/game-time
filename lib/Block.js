class Block {
  constructor(x, y, width = 10, height = 10) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  draw(ctx) {
    ctx.fillStyle = '#224633';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

module.exports = Block;
