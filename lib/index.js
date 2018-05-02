const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const Game = require('./Game.js');

const game = new Game(ctx, canvas.height, canvas.width);

game.gameloop();

window.addEventListener('keydown', getKeyCode)


function getKeyCode(event) {
  event.preventDefault();
  let keyCode = event.keyCode;
  
  game.checkKeyStroke(keyCode)
}