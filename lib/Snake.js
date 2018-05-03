const Block = require('./Block.js')

class Snake extends Block {
  constructor(height, width, x, y ) {
    super(height, width, x, y );
    this.body = [];
    this.speed = 1;
  }

  moveRight() {
    if (this.x === 590) {
      this.died();
    } else {
      this.x += this.speed;
    }
  }

  moveLeft() {
    if (this.x === 10) {
      this.died();
    } else {
      this.x -= this.speed;
    }
  }

  moveUp() {
    if (this.y === 10) {
      this.died();
    } else {
      this.y -= this.speed;
    }
  }

  moveDown() {
    if (this.y === 590) {
      this.died();
    } else {
      this.y += this.speed;
    }
  }

  died() {
    console.log('dies')
  }

}

module.exports = Snake;
