const Block = require('./Block.js');

class Snake extends Block {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.snakeBody = [];
    this.speed = 5;
    this.addBody = new Block(x, y, 20, 20);
    this.x = 20;
  }
  
  buildSnake(ctx) {
    if (this.snakeBody.length < 4) {
      this.snakeBody.push(this.addBody)
    }
    this.snakeBody.forEach(block => block.draw(ctx))
    let head = this.snakeBody[2];
  }



  died() {
    // Check # of lives left
    // If lives left = 0, end game
    // If lives left > 0, reset snake to starting position

  }

  grow() {
    console.log('grow')
    this.snakeBody.push(this.addBody)
    console.log(this.snakeBody)
    // Add block to end of snake
    // Remove original apple
    // Generate new apple in random locaation

  }

}

module.exports = Snake;
