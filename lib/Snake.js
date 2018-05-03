const Block = require('./Block.js')

class Snake extends Block {
  constructor(height, width, x, y ) {
    super(height, width, x, y );
    this.body = [];
  }

  moveRight() {
    this.x += 1;
  }

  moveLeft() {
    this.x -= 1;
  }

  moveUp() {
    this.y -= 1;
  }

  moveDown() {
    this.y += 1;
  }

}

module.exports = Snake;
