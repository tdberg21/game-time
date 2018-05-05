const Block = require('./Block.js');

class Snake extends Block {
  constructor(x, y, width, height, snakeBody) {
    super(x, y, width, height, snakeBody);
    // this.snakeBody = [];
    this.speed = 10;
    this.addBody = new Block(x, y, 10, 10);
    this.head = null;
  }
  
  buildSnake(ctx) {
    if (this.snakeBody.length < 4) {
      for (let x = 10; x < 100; x += 10) {
        let block = new Block(x, 10, 10, 10);

        this.snakeBody.push(block);
      }
    }

    this.snakeBody.forEach(block => block.draw(ctx))
  }

  moveS(direction) {
    let tail = this.snakeBody.shift();

    console.log(this.snakeBody)
    this.head = this.snakeBody[this.snakeBody.length - 1];
    if (this.head.x === 595 ) {
      console.log('died')
    } else if (direction === 'right') {
      tail.x = this.head.x + this.speed;
      tail.y = this.head.y;
    } else if (direction === 'left') {
      tail.x = this.head.x - this.speed;
      tail.y = this.head.y;
    } else if (direction === 'down') {
      tail.y = this.head.y + this.speed;
      tail.x = this.head.x
    } else if (direction === 'up') {
      tail.y = this.head.y - this.speed;
      tail.x = this.head.x;
    } 
    this.snakeBody.push(tail)
  }

  died() {
    // Check # of lives left
    // If lives left = 0, end game
    // If lives left > 0, reset snake to starting position
  }

  grow(direction) {
    let currentTail = this.snakeBody[0];
    let x;
    let y;

    if (direction === 'right') {
      x = currentTail.x - 10;
      y = currentTail.y;
    } else if (direction === 'left') {
      x = currentTail.x + 10;
      y = currentTail.y;
    } else if (direction === 'up') {
      x = currentTail.x;
      y = currentTail.y + 10;
    } else if (direction === 'down') {
      x = currentTail.x;
      y = currentTail.y - 10;
    } 
    let newTail = new Block(x, y, 10, 10);

    this.snakeBody.unshift(newTail);
  }

}

module.exports = Snake;
