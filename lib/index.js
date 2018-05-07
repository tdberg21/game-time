const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const Game = require('./Game.js');
const game = new Game(ctx, canvas.height, canvas.width);
const showHighScore = document.getElementById('high-number');
const scoreContainer = document.querySelector('.game-over-container');

showHighScore.innerText = localStorage.getItem("highScore");
window.addEventListener('keydown', getKeyCode);
scoreContainer.addEventListener('blur', addName);

const startGame = () => {
  game.gameloop();
}

const pauseGame = () => {
  game.stopGame = true;
}

function addName(e) {
  e.preventDefault()
  console.log('it works!!!!')
}

function getKeyCode(event) {
  event.preventDefault();
  if (event.keyCode === 39) {
    game.direction = 'right'
  } else if (event.keyCode === 37) {
    game.direction = 'left'
  } else if (event.keyCode === 38) {
    game.direction = 'up'
  } else if (event.keyCode === 40) {
    game.direction = 'down'
  } else if (event.keyCode === 83) {
    startGame();
    game.gameSnake.buildSnake(ctx)
  } else if (event.keyCode === 80) {
    pauseGame();
  } else if (event.keyCode === 82) {
    game.resetLives();
  }
}
