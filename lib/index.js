const Game = require('./Game.js');

const canvas = document.getElementById('canvas');
const showHighScore = document.getElementById('high-number');
const loseScreen = document.querySelector('.game-over-container');
const themeSong = document.getElementById('theme-song');

const ctx = canvas.getContext('2d');
const snakeGame = new Game(canvas.height, canvas.width);

showHighScore.innerText = localStorage.getItem("highScore");

window.addEventListener('keydown', getKeyCode);

const startGame = () => {
  gameloop(ctx);
}

const pauseGame = () => {
  snakeGame.stopGame = true;
}

function getKeyCode(event) {
  if (event.keyCode === 39) {
    snakeGame.direction = 'right';
  } else if (event.keyCode === 37) {
    snakeGame.direction = 'left';
  } else if (event.keyCode === 38) {
    snakeGame.direction = 'up';
  } else if (event.keyCode === 40) {
    snakeGame.direction = 'down';
  } else if (event.keyCode === 83) {
    window.requestAnimationFrame(startGame)
    playMusic();
  } else if (event.keyCode === 80) {
    pauseGame();
    pauseMusic();
  } else if (event.keyCode === 82) {
    resetLives();
    playMusic();
  }
}

function playMusic() {
  themeSong.play();
}

function pauseMusic() {
  themeSong.pause();
}

function resetLives() {
  snakeGame.lives = 3;
  snakeGame.score = 0;
  
  loseScreen.classList.add('game-over-display');
  cancelAnimationFrame(() => gameloop(ctx));
  requestAnimationFrame(() => gameloop(ctx));
}

function updateScoreAndLives() {
  document.getElementById('score-number').innerText = snakeGame.score;
  document.getElementById('lives-number').innerText = snakeGame.lives;
}

function displayGameOver() {
  if (snakeGame.lives === 0) {
    loseScreen.classList.remove('game-over-display');
    pauseMusic();
  }
}


function gameloop(ctx) {
  window.setTimeout(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snakeGame.currentFood.drawFirstFood(ctx);
    snakeGame.keepSnakeMoving();
    snakeGame.gameSnake.drawSnake(ctx);
    snakeGame.eatFood(ctx);
    snakeGame.newLife(ctx);
    updateScoreAndLives();
    displayGameOver()

    if (snakeGame.stopGame) {
      cancelAnimationFrame(() => gameloop(ctx));
      snakeGame.stopGame = false;
    } else {
      requestAnimationFrame(() => gameloop(ctx));
    }
  }, 60)
}
