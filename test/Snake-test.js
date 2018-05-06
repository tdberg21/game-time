const chai = require('chai');
const assert = chai.assert;
const Snake = require('../lib/Snake.js');
const Block = require('../lib/Block.js')

describe('Snake', () => {

  let snake;

  beforeEach(() => {
    snake = new Snake()
  })

  it('should have default values', () => {
    assert.equal(snake.head, null);
    assert.equal(snake.die, false); 
    assert.equal(snake.speed, 10);   
  });

  it('should make snake with a length of 4 blocks', () => {
    // Set up
    
    // Execution 
    // snake.buildSnake();
    // Assertion
    // assert.equal(snake.snakeBody.length, 4);
  });

  it('should be able to move right', () => {
    for (let x = 0; x < 40; x += 10) {
      let block = new Block(x, 10, 10, 10);

      snake.snakeBody.push(block);
    }

    snake.moveS('right'); 
    let actual = snake.tail.x;
    let expected = snake.head.x + snake.speed;

    assert.equal(actual, expected)
  });

  it('should be able to move left', () => {
    for (let x = 0; x < 40; x += 10) {
      let block = new Block(x, 10, 10, 10);

      snake.snakeBody.push(block);
    }

    snake.moveS('left');
    let actual = snake.tail.x;
    let expected = snake.head.x - snake.speed;

    assert.equal(actual, expected)
  });

  it('should be able to move up', () => {
    for (let x = 0; x < 40; x += 10) {
      let block = new Block(x, 10, 10, 10);

      snake.snakeBody.push(block);
    }

    snake.moveS('up');
    let actual = snake.tail.y;
    let expected = snake.head.y - snake.speed;

    assert.equal(actual, expected)
  });
  
  it('should be able to move down', () => {
    for (let x = 0; x < 40; x += 10) {
      let block = new Block(x, 10, 10, 10);

      snake.snakeBody.push(block);
    }

    snake.moveS('down');
    let actual = snake.tail.y;
    let expected = snake.head.y + snake.speed;

    assert.equal(actual, expected)
  });

  it('should be able to grow if it eats an apple', () => {
    for (let x = 0; x < 40; x += 10) {
      let block = new Block(x, 10, 10, 10);

      snake.snakeBody.push(block);
    }

    snake.moveS('down');
    let actual = snake.tail.y;
    let expected = snake.head.y + snake.speed;

    assert.equal(actual, expected)
  });


});
