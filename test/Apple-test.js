const chai = require('chai');
const assert = chai.assert;
const Apple = require('../lib/Apple.js')

describe('Apple', () => {
  it('should have default values', ()  => {
    const apple = new Apple();

    assert.equal(apple.width, 10);
    assert.equal(apple.height, 10);
    assert.equal(apple.color, 'rgba(255, 0, 0, 1)');
  });
});