const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const Game = require('./Game.js');
const game = new Game(ctx, canvas.height, canvas.width);

window.addEventListener('keydown', getKeyCode);

const startGame = () => {
  game.gameloop();
}

const pauseGame = () => {
  game.stopGame = true;
}

function getKeyCode(event) {
  event.preventDefault();

  if (event.keyCode === 39) {
    game.direction = 'right'
    game.gameSnake.moveRight();
  } else if (event.keyCode === 37) {
    game.direction = 'left'
    game.gameSnake.moveLeft();
  } else if (event.keyCode === 38) {
    game.direction = 'up'
    game.gameSnake.moveUp();
  } else if (event.keyCode === 40) {
    game.direction = 'down'
    game.gameSnake.moveDown();
  } else if (event.keyCode === 83) {
    startGame();
  } else if (event.keyCode === 80) {
    pauseGame();
  }
}
