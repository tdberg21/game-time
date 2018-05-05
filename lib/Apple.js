class Apple {
  constructor(width = 10, height = 10) {
    this.x = Math.floor(Math.random() * 58) * 10;
    this.y = Math.floor(Math.random() * 58) * 10;
    this.width = width;
    this.height = height;
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
