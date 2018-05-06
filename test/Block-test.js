const chai = require('chai');
const assert = chai.assert;
const Block = require('../lib/Block.js')

describe('Block', () => {
  it('should have default values', () => {
    const block = new Block();

    assert.equal(block.width, 10);
    assert.equal(block.height, 10);
    assert.deepEqual(block.snakeBody, []);
  });
});