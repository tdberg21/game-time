const Block = require('./Block.js')

class Snake extends Block {
  constructor(height, width, x, y ) {
    super(height, width, x, y );
    this.body = [];
  }

  moveRight() {
    this.x += 1;
    console.log(this.x)
  }

  moveLeft() {
    this.x -= 1;
    console.log(this.x)
  }

  moveUp() {
    this.y -= 1;
    console.log(this.y)
  }

  moveDown() {
    this.y += 1;
    console.log('this', this)
    console.log(this.y)
  }

  move() {
    console.log('moving')
  }

}

module.exports = Snake;
