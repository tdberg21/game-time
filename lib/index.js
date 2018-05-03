const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const Game = require('./Game.js');
// const button = document.getElementById('start-btn');

const game = new Game(ctx, canvas.height, canvas.width);

window.addEventListener('keydown', getKeyCode);
// button.addEventListener('click', (event) => {
//   event.preventDefault();
//   game.gameloop();
// })

const startGame = () => {
  game.gameloop();
}

const pauseGame = () => {
  game.stopGame = true;
  // window.cancelAnimationFrame(game.gameloop());
}


function getKeyCode(event) {
  event.preventDefault();
  let keyCode = event.keyCode;

  if (keyCode === 39) {
    game.direction = 'right'
    game.gameSnake.moveRight();
  } else if (keyCode === 37) {
    game.direction = 'left'
    game.gameSnake.moveLeft();
  } else if (keyCode === 38) {
    game.direction = 'up'
    game.gameSnake.moveUp();
  } else if (keyCode === 40) {
    game.direction = 'down'
    game.gameSnake.moveDown();
  } else if (keyCode === 83) {
    startGame();
  } else if (keyCode === 80) {
    pauseGame();
  }
  // game.checkKeyStroke(keyCode)
}