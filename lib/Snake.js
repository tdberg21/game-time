const Block = require('./Block.js');

class Snake extends Block {
  constructor(x, y, width, height, snakeBody) {
    super(x, y, width, height, snakeBody);
    this.speed = 10;
    this.head = null;
    this.die = false;
  }

  buildSnake(ctx) {
    if (this.snakeBody.length < 4) {
      for (let x = 10; x < 40; x += 10) {
        let block = new Block(x, 10, 10, 10);

        this.snakeBody.push(block);
      }
    }
    this.snakeBody.forEach(block => block.draw(ctx))
  }

  moveS(direction) {
    let tail = this.snakeBody.shift();
    
    this.head = this.snakeBody[this.snakeBody.length - 1];
    this.killSelf();
    if (this.head.x === 590
      || this.head.x === 0
      || this.head.y === 590
      || this.head.y === 0) {
      this.die = true;
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

  grow(direction) {
    let currentTail = this.snakeBody[0];
    let x;
    let y;

    if (direction === 'right') {
      x = currentTail.x - this.speed;
      y = currentTail.y;
    } else if (direction === 'left') {
      x = currentTail.x + this.speed;
      y = currentTail.y;
    } else if (direction === 'up') {
      y = currentTail.y + this.speed;
      x = currentTail.x;
    } else if (direction === 'down') {
      y = currentTail.y - this.speed;
      x = currentTail.x;
    }
    let newTail = new Block(x, y, 10, 10);

    this.snakeBody.unshift(newTail);
  }

  killSelf() {
    for (let i = 0; i < this.snakeBody.length - 2; i++) {
      if (this.head.x === this.snakeBody[i].x 
        && this.head.y === this.snakeBody[i].y) {
        this.die = true;
      } 
    }
  }

}

module.exports = Snake;
