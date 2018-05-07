class Food {
  constructor(width = 10, height = 10) {
    this.x = (Math.floor(Math.random() * 58) * 10) + 10;
    this.y = (Math.floor(Math.random() * 58) * 10) + 10;
    this.width = width;
    this.height = height;
    this.color = '#F1C624';
  }

  drawFirstFood(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

module.exports = Food;
