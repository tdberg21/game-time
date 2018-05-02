const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const Game = require('./Game.js');

const game = new Game(ctx, canvas.height, canvas.width);

window.addEventListener('keydown', game.gameloop())
