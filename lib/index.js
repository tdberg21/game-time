const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const Game = require('./Game.js');
const button = document.getElementById('start-btn');

const game = new Game(ctx, canvas.height, canvas.width);

window.addEventListener('keydown', getKeyCode);
button.addEventListener('click', (event) => {
  event.preventDefault();
  game.gameloop();
})


function getKeyCode(event) {
  event.preventDefault();
  let keyCode = event.keyCode;

  game.checkKeyStroke(keyCode)
}