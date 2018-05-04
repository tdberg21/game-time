const Block = require('./Block.js');

class Snake extends Block {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.snakeBody = [];
    this.speed = 5;
    this.addBody = new Block(x, y, 20, 20);
    // this.x = 20;
    this.head = null;
    // this.tail = null;
  }
  
  buildSnake(ctx) {
    // if (this.snakeBody.length < 4) {
    //   this.snakeBody.push(this.addBody)
    // }
    for (let x = 10; x < 80; x += 15) {
      let block = new Block(x, 10, 20, 20);

      this.snakeBody.push(block);
    }

    this.snakeBody.forEach(block => block.draw(ctx))
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

  moveRight() {
    let tail = this.snakeBody.shift();

    this.head = this.snakeBody[this.snakeBody.length - 1];
    console.log('tail', tail, 'head', this.head)
    if (this.x === 600) {
      this.died();
    } else {
      console.log('after','tail', tail, 'head', this.head)
      
      tail.x = this.head.x += this.speed;
      tail.y += this.head.y;

      this.snakeBody.push(tail)

    }
  }

  moveLeft() {
    this.tail = this.snakeBody.shift();
    this.head = this.snakeBody[this.snakeBody.length - 1];
    if (this.x === 0) {
      this.died();
    } else {
      this.tail.x = this.head.x;
      this.tail.x -= this.speed;
      // this.x -= this.speed;
    }
  }

  moveUp() {
    this.tail = this.snakeBody.shift();
    this.head = this.snakeBody[this.snakeBody.length - 1];
    if (this.y === 0) {
      this.died();
    } else {
      this.tail.y = this.head.y;
      this.tail.y -= this.speed;
      // this.y -= this.speed;
    }
  }

  moveDown() {
    this.tail = this.snakeBody.shift();
    this.head = this.snakeBody[this.snakeBody.length - 1];
    if (this.y === 600) {
      this.died();
    } else {
      this.tail.y = this.head.y;
      this.tail.y += this.speed;
      // this.y += this.speed;
    }
  }

}

module.exports = Snake;
