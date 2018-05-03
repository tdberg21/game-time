class Block {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  draw(ctx) {
    ctx.fillStyle = 'green';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  moveRight() {
    if (this.x === 600) {
      this.died();
    } else {
      this.x += this.speed;
    }
  }

  moveLeft() {
    if (this.x === 0) {
      this.died();
    } else {
      this.x -= this.speed;
    }
  }

  moveUp() {
    if (this.y === 0) {
      this.died();
    } else {
      this.y -= this.speed;
    }
  }

  moveDown() {
    if (this.y === 600) {
      this.died();
    } else {
      this.y += this.speed;
    }
  }
  
}

module.exports = Block;
