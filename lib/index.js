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
  } else if (event.keyCode === 37) {
    game.direction = 'left'
  } else if (event.keyCode === 38) {
    game.direction = 'up'
  } else if (event.keyCode === 40) {
    game.direction = 'down'
  } else if (event.keyCode === 83) {
    startGame();
    playMusic();
    game.gameSnake.buildSnake(ctx)
  } else if (event.keyCode === 80) {
    pauseGame();
    pauseMusic();
  } else if (event.keyCode === 82) {
    game.resetLives();
  }

  function playMusic() {
    var themeSong = document.getElementById('theme-song');

    themeSong.play();
  }

  function pauseMusic() {
    var themeSong = document.getElementById('theme-song');

    themeSong.pause();
  }
}
