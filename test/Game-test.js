const chai = require('chai');
const assert = chai.assert;
const Game = require('../lib/Game.js')

describe('Game', function () {

  let game;

  beforeEach('game', () => {
    game = new Game();
  });

  it('should have default values', () => { 

    assert.equal(game.direction, 'right');
    assert.equal(game.stopGame, false);
  });
  // test for win condiction
  // gamesnake moves the x or y 
  // 
});