class Apple {
  constructor(width = 10, height = 10) {
    this.x = (Math.floor(Math.random() * 58) * 10) + 10;
    this.y = (Math.floor(Math.random() * 58) * 10) + 10;
    this.width = width;
    this.height = height;
    // this.color = 'rgba(255, 0, 0, 1)';
    this.color = '#F1C624';
    this.drawFirstApple = this.drawFirstApple.bind(this);
  }

  drawFirstApple(ctx) {
    console.log(ctx);
    // debugger;
    ctx.fillStyle = '#F1C624';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

module.exports = Apple;
