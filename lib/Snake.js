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
    console.log(this.x)
  }

  moveUp() {
    this.y--;
    console.log(this.y)
  }

  moveDown() {
    this.y++;
    console.log('this', this)
    console.log(this.y)
  }

}

module.exports = Snake;
