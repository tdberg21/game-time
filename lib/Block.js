class Block {
  constructor(x, y, width = 10, height = 10) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.snakeBody = [];
  }

  draw(ctx) {
    ctx.fillStyle = '#224633';
    ctx.fillRect(this.x, this.y, this.width, this.height);
    this.snakeBody.forEach(block => {
      block.draw(ctx)
    })
  }
}

module.exports = Block;
