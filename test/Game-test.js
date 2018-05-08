const localStorage = require('mock-local-storage');
const chai = require('chai');
const assert = chai.assert;
const Game = require('../lib/Game.js')

describe('Game', () => {

  let game;

  global.window = {}
  window.localStorage = global.localStorage;

  beforeEach(() => {
    game = new Game();
  })

  it('should have default values', () => {
    assert.equal(game.direction, 'right');
    assert.equal(game.stopGame, false);
    assert.equal(game.lives, 3);
    assert.equal(game.score, 0);
  });

  it('should keep the snake moving', () => {
    game.gameSnake.head.x = 100;
    game.keepSnakeMoving();

    assert.equal(game.gameSnake.tail.x, 110)
  });

  it.only('should lose a life if the snake dies and reset to a new snake going right', () => {
    game.gameSnake.die = true;
    game.newLife();

    assert.equal(game.lives, 2);
    assert.equal(game.direction, 'right');
  });

  it('should increase the score when it eats an apple', () => {
    game.gameSnake.head.x = 100;
    game.currentFood.x = 100;
    game.gameSnake.head.y = 100;
    game.currentFood.y = 100;
    game.score = 0;
    game.eatFood();

    assert.equal(game.score, 1);
  });

  it('should grow when it eats an apple', () => {
    game.gameSnake.head.x = 100;
    game.currentFood.x = 100;
    game.gameSnake.head.y = 100;
    game.currentFood.y = 100;
    game.score = 0;
    game.eatFood();

    assert.equal(game.gameSnake.snakeBody.length, 5);
  });

  it('should get game over if your lives equal 0', () => {
    game.gameSnake.die = true;
    game.newLife();
    game.gameSnake.die = true;
    game.newLife();
    game.gameSnake.die = true;
    game.newLife();

    assert.equal(game.gameOver, true);
    assert.equal(game.stopGame, true);
  });

  it('should check for high score if you lose', () => {
    game.highScore = 5;
    for (let i = 0; i < 6; i++) {
      game.gameSnake.head.x = 100;
      game.currentFood.x = 100;
      game.gameSnake.head.y = 100;
      game.currentFood.y = 100;
      game.eatFood();
    }

    game.gameSnake.die = true;
    game.newLife();
    game.gameSnake.die = true;
    game.newLife();
    game.gameSnake.die = true;
    game.newLife();

    assert.equal(game.highScore, 6);
  });
});
