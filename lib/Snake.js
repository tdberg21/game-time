const Block = require('./Block.js');

class Snake extends Block {
  constructor(height, width, x, y) {
    super(height, width, x, y);
    this.body = [];
    this.speed = 1;
  }

  draw(ctx) {
    ctx.fillStyle = 'black';
    ctx.fillRect(this.x, this.y, this.height, this.height);
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

  died() {

  }

  grow() {

  }

}

module.exports = Snake;
