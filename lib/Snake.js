const Block = require('./Block.js')

class Snake extends Block {
  constructor(height, width, x, y ) {
    super(height, width, x, y );
    this.body = [];
  }

  moveRight() {
    this.x++;
    console.log(this.x)
  }

  moveLeft() {
    this.x--;
  }

  moveUp() {
    this.y--;
  }

  moveDown() {
    this.y++;
  }

}

module.exports = Snake;
