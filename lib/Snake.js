const Block = require('./Block.js')

class Snake extends Block {
  constructor(height, width, x, y ) {
    super(height, width, x, y );
    this.body = [];
    this.speed = 1;
  }

  moveRight() {
    this.x += this.speed;
  }

  moveLeft() {
    this.x -= this.speed;
  }

  moveUp() {
    this.y -= this.speed;
  }

  moveDown() {
    this.y += this.speed;
  }

}

module.exports = Snake;
