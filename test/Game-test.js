import localStorage from 'mock-local-storage';
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

  it('should lose a life if the snake dies', () => {
    game.gameSnake.die = true;
    game.newLife();
    assert.equal(game.lives, 2)
  });
  // test for win 
  
  // 
});