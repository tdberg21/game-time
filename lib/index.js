const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const Game = require('./Game.js');
const Apple = require('./Apple.js');
const game = new Game(canvas.height, canvas.width);
const showHighScore = document.getElementById('high-number');
const scoreContainer = document.querySelector('.game-over-container');

showHighScore.innerText = localStorage.getItem("highScore");

window.addEventListener('keydown', getKeyCode);
scoreContainer.addEventListener('blur', addName);

const startGame = () => {
  gameloop(ctx);
}

const pauseGame = () => {
  game.stopGame = true;
}

function addName(e) {
  e.preventDefault();
  alert('it works');
}

function getKeyCode(e) {
  e.preventDefault();
  if (event.keyCode === 39) {
    game.direction = 'right';
  } else if (event.keyCode === 37) {
    game.direction = 'left';
  } else if (event.keyCode === 38) {
    game.direction = 'up';
  } else if (event.keyCode === 40) {
    game.direction = 'down';
  } else if (event.keyCode === 83) {
    // startGame(ctx);
    window.requestAnimationFrame(startGame)
    playMusic();
  } else if (event.keyCode === 80) {
    pauseGame();
    pauseMusic();
  } else if (event.keyCode === 82) {
    game.resetLives();
  }

  function playMusic() {
    document.getElementById('theme-song').play();
  }

  function pauseMusic() {
    document.getElementById('theme-song').pause();
  }
}

function updateScoreAndLives() {
  document.getElementById('score-number').innerText = game.score;
  document.getElementById('lives-number').innerText = game.lives;
}



function gameloop(ctx) {
  window.setTimeout(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.currentApple.drawFirstApple(ctx);
    game.keepSnakeMoving();
    game.gameSnake.drawSnake(ctx);
    game.eatApple(ctx);
    game.newLife(ctx);
    updateScoreAndLives();

    if (game.stopGame) {
      cancelAnimationFrame(() => gameloop(ctx));
      game.stopGame = false;
    } else {
      requestAnimationFrame(() => gameloop(ctx));
    }
  }, 60)
}
