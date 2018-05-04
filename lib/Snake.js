const Block = require('./Block.js');

class Snake extends Block {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.snakeBody = [];
    this.speed = 5;
    this.addBody = new Block(x, y, 20, 20);
    this.head = null;
  }
  
  buildSnake(ctx) {
    if (this.snakeBody.length <= 4) {
      for (let x = 10; x < 80; x += 20) {
        let block = new Block(x, 10, 20, 20);

        this.snakeBody.push(block);
      }
    }
    this.snakeBody.forEach(block => block.draw(ctx))
  }

  moveS(direction) {
    let tail = this.snakeBody.shift();

    this.head = this.snakeBody[this.snakeBody.length - 1];
    // if (tail.x === 600 || tail.x === 0 || tail.y === 600 || tail.y === 0) {
    //   console.log('died')
    // } else 
    if (direction === 'right') {
      tail.y = this.head.y;
      tail.x = this.head.x + this.speed;
    } else if (direction === 'left') {
      tail.y = this.head.y;
      tail.x = this.head.x - this.speed;
    } else if (direction === 'down') {
      tail.y = this.head.y + this.speed;
      tail.x = this.head.x
    } else if (direction === 'up') {
      tail.x = this.head.x;
      tail.y = this.head.y - this.speed;
    } 
    this.snakeBody.push(tail)
  }

  died() {
    // Check # of lives left
    // If lives left = 0, end game
    // If lives left > 0, reset snake to starting position
  }

  grow() {
    // console.log('grow')
    this.snakeBody.push(this.addBody)
    // console.log(this.snakeBody)
    // Add block to end of snake
    // Remove original apple
    // Generate new apple in random locaation
  }

}

module.exports = Snake;
