const chai = require('chai');
const assert = chai.assert;
const Food = require('../lib/Food.js')

describe('Food', () => {
  it('should have default values', ()  => {
    const food = new Food();

    assert.equal(food.width, 10);
    assert.equal(food.height, 10);
    assert.equal(food.color, '#F1C624');
  });
});