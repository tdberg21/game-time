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
    window.requestAnimationFrame(startGame)
    playMusic();
  } else if (event.keyCode === 80) {
    pauseGame();
    pauseMusic();
  } else if (event.keyCode === 82) {
    resetLives();
  }

  function playMusic() {
    document.getElementById('theme-song').play();
  }

  function pauseMusic() {
    document.getElementById('theme-song').pause();
  }
}

function resetLives() {
  game.lives = 3;
  game.score = 0;
  let gameOverText = document.querySelector('h3');
  let resetGameText = document.querySelector('.reset-game-paragraph');
  let gameOverImage = document.querySelector('.game-over-image');

  gameOverText.classList.add('game-over-display');
  gameOverImage.classList.add('game-over-display');
  resetGameText.classList.add('game-over-display');
  cancelAnimationFrame(() => gameloop(ctx));
  requestAnimationFrame(() => gameloop(ctx));
}

function updateScoreAndLives() {
  document.getElementById('score-number').innerText = game.score;
  document.getElementById('lives-number').innerText = game.lives;
}

function displayGameOver() {
  if (game.lives === 0) {
    const gameOverText = document.querySelector('h3');
    const resetGameText = document.querySelector('.reset-game-paragraph');
    const gameOverImage = document.querySelector('.game-over-image');

    gameOverText.classList.remove('game-over-display');
    gameOverImage.classList.remove('game-over-display');
    resetGameText.classList.remove('game-over-display');
  }
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
    displayGameOver()

    if (game.stopGame) {
      cancelAnimationFrame(() => gameloop(ctx));
      game.stopGame = false;
    } else {
      requestAnimationFrame(() => gameloop(ctx));
    }
  }, 60)
}
