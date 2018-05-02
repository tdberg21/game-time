const Block = require('./Block.js')

class Snake extends Block {
  constructor() {
    super(...arguments);
    this.body = [];

  }
}

module.exports = Snake;