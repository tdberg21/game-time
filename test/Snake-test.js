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
    assert.deepEqual(snake.snakeBody, [
      new Block(10, 10, 10, 10),
      new Block(20, 10, 10, 10),
      new Block(30, 10, 10, 10),
      new Block(40, 10, 10, 10)])
    assert.equal(snake.head, snake.snakeBody[snake.snakeBody.length - 1]);
    assert.equal(snake.die, false); 
    assert.equal(snake.speed, 10);
    assert.equal(snake.tail, snake.snakeBody[0])
  });

  it('should be able to move right', () => {
    snake.moveS('right'); 
    let actual = snake.tail.x;
    let expected = snake.head.x + snake.speed;

    assert.equal(actual, expected)
  });

  it('should be able to move left', () => {
    snake.moveS('left');
    let actual = snake.tail.x;
    let expected = snake.head.x - snake.speed;

    assert.equal(actual, expected)
  });

  it('should be able to move up', () => {
    snake.moveS('up');
    let actual = snake.tail.y;
    let expected = snake.head.y - snake.speed;

    assert.equal(actual, expected)
  });
  
  it('should be able to move down', () => {
    snake.moveS('down');
    let actual = snake.tail.y;
    let expected = snake.head.y + snake.speed;

    assert.equal(actual, expected)
  });

  it('should be able to grow if it eats an apple', () => {
    let oldSnakeLength = snake.snakeBody.length;

    snake.grow();
    let newSnakeLength = snake.snakeBody.length;

    assert.isAbove(newSnakeLength, oldSnakeLength);
  });

  it('should die if it hits itself', () => {
    snake.head = snake.snakeBody.shift();
    snake.snakeBody[0].x = snake.head.x;
    snake.killSelf();

    assert.equal(snake.die, true)
  });

  it('should die if it hits the wall', () => {
    snake.head = snake.snakeBody.pop();
    for (let i = 0; i < 600; i += 10) {
      snake.moveS('right');
    }

    assert.equal(snake.die, true)
  });
});
