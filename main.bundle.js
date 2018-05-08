/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/Block.js":
/*!**********************!*\
  !*** ./lib/Block.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Block = function () {
  function Block(x, y) {
    var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
    var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 10;

    _classCallCheck(this, Block);

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  _createClass(Block, [{
    key: 'draw',
    value: function draw(ctx) {
      ctx.fillStyle = '#224633';
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }]);

  return Block;
}();

module.exports = Block;

/***/ }),

/***/ "./lib/Food.js":
/*!*********************!*\
  !*** ./lib/Food.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Food = function () {
  function Food() {
    var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
    var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

    _classCallCheck(this, Food);

    this.x = Math.floor(Math.random() * 58) * 10 + 10;
    this.y = Math.floor(Math.random() * 58) * 10 + 10;
    this.width = width;
    this.height = height;
    this.color = '#F1C624';
  }

  _createClass(Food, [{
    key: 'drawFirstFood',
    value: function drawFirstFood(ctx) {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }]);

  return Food;
}();

module.exports = Food;

/***/ }),

/***/ "./lib/Game.js":
/*!*********************!*\
  !*** ./lib/Game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Snake = __webpack_require__(/*! ./Snake.js */ "./lib/Snake.js");
var Food = __webpack_require__(/*! ./Food.js */ "./lib/Food.js");

var Game = function () {
  function Game(height, width) {
    _classCallCheck(this, Game);

    this.height = height;
    this.width = width;
    this.currentFood = new Food();
    this.direction = 'right';
    this.gameSnake = new Snake();
    this.stopGame = false;
    this.lives = 3;
    this.score = 0;
    this.highScore = localStorage.getItem("highscore");
    this.gameOver = false;
    this.eatFood = this.eatFood.bind(this);
  }

  _createClass(Game, [{
    key: 'keepSnakeMoving',
    value: function keepSnakeMoving() {
      this.gameSnake.moveS(this.direction);
    }
  }, {
    key: 'eatFood',
    value: function eatFood(ctx) {
      if (this.gameSnake.head.x === this.currentFood.x && this.gameSnake.head.y === this.currentFood.y) {
        this.score++;
        this.currentFood = new Food();
        if (ctx !== undefined) {
          this.currentFood.drawFirstFood(ctx);
        }
        this.gameSnake.grow(this.direction);
      }
    }
  }, {
    key: 'newLife',
    value: function newLife(ctx) {
      if (this.gameSnake.die) {
        this.gameSnake = new Snake();
        this.direction = 'right';
        this.lives--;
        if (this.lives === 0) {
          this.gameOver = true;
          if (ctx !== undefined) {
            ctx.clearRect(0, 0, this.width, this.height);
          }
          if (this.highScore > 0 || this.highScore !== null) {
            if (this.score > this.highScore) {
              this.highScore = this.score;
              localStorage.setItem("highScore", JSON.stringify(this.highScore));
            }
          } else {
            this.highScore = this.score;
            localStorage.setItem("highScore", JSON.stringify(this.highScore));
          }
          this.stopGame = true;
        }
      }
    }
  }]);

  return Game;
}();

module.exports = Game;

/***/ }),

/***/ "./lib/Snake.js":
/*!**********************!*\
  !*** ./lib/Snake.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Block = __webpack_require__(/*! ./Block.js */ "./lib/Block.js");

var Snake = function () {
  function Snake() {
    _classCallCheck(this, Snake);

    this.speed = 10;
    this.snakeBody = [new Block(10, 10, 10, 10), new Block(20, 10, 10, 10), new Block(30, 10, 10, 10), new Block(40, 10, 10, 10)];
    this.head = this.snakeBody[this.snakeBody.length - 1];
    this.tail = this.snakeBody[0];
    this.die = false;
    this.moveS = this.moveS.bind(this);
  }

  _createClass(Snake, [{
    key: 'drawSnake',
    value: function drawSnake(ctx) {
      this.snakeBody.forEach(function (block) {
        return block.draw(ctx);
      });
    }
  }, {
    key: 'moveS',
    value: function moveS(direction) {
      this.head = this.snakeBody[this.snakeBody.length - 1];
      this.tail = this.snakeBody.shift();
      this.killSelf();

      if (this.head.x === 600 || this.head.x === -10 || this.head.y === 600 || this.head.y === -10) {
        this.die = true;
      } else if (direction === 'right') {
        this.tail.x = this.head.x + this.speed;
        this.tail.y = this.head.y;
      } else if (direction === 'left') {
        this.tail.x = this.head.x - this.speed;
        this.tail.y = this.head.y;
      } else if (direction === 'down') {
        this.tail.y = this.head.y + this.speed;
        this.tail.x = this.head.x;
      } else if (direction === 'up') {
        this.tail.y = this.head.y - this.speed;
        this.tail.x = this.head.x;
      }
      this.snakeBody.push(this.tail);
    }
  }, {
    key: 'grow',
    value: function grow(direction) {
      var currentTail = this.snakeBody[0];
      var x = void 0;
      var y = void 0;

      if (direction === 'right') {
        x = currentTail.x - this.speed;
        y = currentTail.y;
      } else if (direction === 'left') {
        x = currentTail.x + this.speed;
        y = currentTail.y;
      } else if (direction === 'up') {
        y = currentTail.y + this.speed;
        x = currentTail.x;
      } else if (direction === 'down') {
        y = currentTail.y - this.speed;
        x = currentTail.x;
      }
      var newTail = new Block(x, y);

      this.snakeBody.unshift(newTail);
    }
  }, {
    key: 'killSelf',
    value: function killSelf() {
      for (var i = 0; i < this.snakeBody.length - 1; i++) {
        if (this.head.x === this.snakeBody[i].x && this.head.y === this.snakeBody[i].y) {
          this.die = true;
        }
      }
    }
  }]);

  return Snake;
}();

module.exports = Snake;

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var Game = __webpack_require__(/*! ./Game.js */ "./lib/Game.js");
var game = new Game(canvas.height, canvas.width);
var showHighScore = document.getElementById('high-number');
var scoreContainer = document.querySelector('.game-over-container');
var loseScreen = document.querySelector('.game-over-container');

showHighScore.innerText = localStorage.getItem("highScore");

window.addEventListener('keydown', getKeyCode);
scoreContainer.addEventListener('blur', addName);

var startGame = function startGame() {
  gameloop(ctx);
};

var pauseGame = function pauseGame() {
  game.stopGame = true;
};

function addName(e) {
  e.preventDefault();
  alert('it works');
}

function getKeyCode(event) {
  if (event.keyCode === 39) {
    game.direction = 'right';
  } else if (event.keyCode === 37) {
    game.direction = 'left';
  } else if (event.keyCode === 38) {
    game.direction = 'up';
  } else if (event.keyCode === 40) {
    game.direction = 'down';
  } else if (event.keyCode === 83) {
    window.requestAnimationFrame(startGame);
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
  document.getElementById('theme-song').play();
}

function pauseMusic() {
  document.getElementById('theme-song').pause();
}

function resetLives() {
  game.lives = 3;
  game.score = 0;

  loseScreen.classList.add('game-over-display');
  cancelAnimationFrame(function () {
    return gameloop(ctx);
  });
  requestAnimationFrame(function () {
    return gameloop(ctx);
  });
}

function updateScoreAndLives() {
  document.getElementById('score-number').innerText = game.score;
  document.getElementById('lives-number').innerText = game.lives;
}

function displayGameOver() {
  if (game.lives === 0) {
    loseScreen.classList.remove('game-over-display');
    pauseMusic();
  }
}

function gameloop(ctx) {
  window.setTimeout(function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.currentFood.drawFirstFood(ctx);
    game.keepSnakeMoving();
    game.gameSnake.drawSnake(ctx);
    game.eatFood(ctx);
    game.newLife(ctx);
    updateScoreAndLives();
    displayGameOver();

    if (game.stopGame) {
      cancelAnimationFrame(function () {
        return gameloop(ctx);
      });
      game.stopGame = false;
    } else {
      requestAnimationFrame(function () {
        return gameloop(ctx);
      });
    }
  }, 60);
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0Jsb2NrLmpzIiwid2VicGFjazovLy8uL2xpYi9Gb29kLmpzIiwid2VicGFjazovLy8uL2xpYi9HYW1lLmpzIiwid2VicGFjazovLy8uL2xpYi9TbmFrZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaW5kZXguanMiXSwibmFtZXMiOlsiQmxvY2siLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwiY3R4IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJtb2R1bGUiLCJleHBvcnRzIiwiRm9vZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImNvbG9yIiwiU25ha2UiLCJyZXF1aXJlIiwiR2FtZSIsImN1cnJlbnRGb29kIiwiZGlyZWN0aW9uIiwiZ2FtZVNuYWtlIiwic3RvcEdhbWUiLCJsaXZlcyIsInNjb3JlIiwiaGlnaFNjb3JlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImdhbWVPdmVyIiwiZWF0Rm9vZCIsImJpbmQiLCJtb3ZlUyIsImhlYWQiLCJ1bmRlZmluZWQiLCJkcmF3Rmlyc3RGb29kIiwiZ3JvdyIsImRpZSIsImNsZWFyUmVjdCIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5Iiwic3BlZWQiLCJzbmFrZUJvZHkiLCJsZW5ndGgiLCJ0YWlsIiwiZm9yRWFjaCIsImJsb2NrIiwiZHJhdyIsInNoaWZ0Iiwia2lsbFNlbGYiLCJwdXNoIiwiY3VycmVudFRhaWwiLCJuZXdUYWlsIiwidW5zaGlmdCIsImkiLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZ2V0Q29udGV4dCIsImdhbWUiLCJzaG93SGlnaFNjb3JlIiwic2NvcmVDb250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwibG9zZVNjcmVlbiIsImlubmVyVGV4dCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJnZXRLZXlDb2RlIiwiYWRkTmFtZSIsInN0YXJ0R2FtZSIsImdhbWVsb29wIiwicGF1c2VHYW1lIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYWxlcnQiLCJldmVudCIsImtleUNvZGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJwbGF5TXVzaWMiLCJwYXVzZU11c2ljIiwicmVzZXRMaXZlcyIsInBsYXkiLCJwYXVzZSIsImNsYXNzTGlzdCIsImFkZCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwidXBkYXRlU2NvcmVBbmRMaXZlcyIsImRpc3BsYXlHYW1lT3ZlciIsInJlbW92ZSIsInNldFRpbWVvdXQiLCJrZWVwU25ha2VNb3ZpbmciLCJkcmF3U25ha2UiLCJuZXdMaWZlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ25FTUEsSztBQUNKLGlCQUFZQyxDQUFaLEVBQWVDLENBQWYsRUFBMkM7QUFBQSxRQUF6QkMsS0FBeUIsdUVBQWpCLEVBQWlCO0FBQUEsUUFBYkMsTUFBYSx1RUFBSixFQUFJOztBQUFBOztBQUN6QyxTQUFLSCxDQUFMLEdBQVNBLENBQVQ7QUFDQSxTQUFLQyxDQUFMLEdBQVNBLENBQVQ7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDRDs7Ozt5QkFFSUMsRyxFQUFL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O0FBQ0Q7QUFDRjs7QUFHRCxTQUFTVCxRQUFULENBQWtCaEUsR0FBbEIsRUFBdUI7QUFDckIyRCxTQUFPd0IsVUFBUCxDQUFrQixZQUFNO0FBQ3RCbkYsUUFBSStCLFNBQUosQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9Ca0IsT0FBT25ELEtBQTNCLEVBQWtDbUQsT0FBT2xELE1BQXpDO0FBQ0FzRCxTQUFLeEMsV0FBTCxDQUFpQmUsYUFBakIsQ0FBK0I1QixHQUEvQjtBQUNBcUQsU0FBSytCLGVBQUw7QUFDQS9CLFNBQUt0QyxTQUFMLENBQWVzRSxTQUFmLENBQXlCckYsR0FBekI7QUFDQXFELFNBQUs5QixPQUFMLENBQWF2QixHQUFiO0FBQ0FxRCxTQUFLaUMsT0FBTCxDQUFhdEYsR0FBYjtBQUNBZ0Y7QUFDQUM7O0FBRUEsUUFBSTVCLEtBQUtyQyxRQUFULEVBQW1CO0FBQ2pCK0QsMkJBQXFCO0FBQUEsZUFBTWYsU0FBU2hFLEdBQVQsQ0FBTjtBQUFBLE9BQXJCO0FBQ0FxRCxXQUFLckMsUUFBTCxHQUFnQixLQUFoQjtBQUNELEtBSEQsTUFHTztBQUNMdUQsNEJBQXNCO0FBQUEsZUFBTVAsU0FBU2hFLEdBQVQsQ0FBTjtBQUFBLE9BQXRCO0FBQ0Q7QUFDRixHQWhCRCxFQWdCRyxFQWhCSDtBQWlCRCxDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbGliL2luZGV4LmpzXCIpO1xuIiwiY2xhc3MgQmxvY2sge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCA9IDEwLCBoZWlnaHQgPSAxMCkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cblxuICBkcmF3KGN0eCkge1xuICAgIGN0eC5maWxsU3R5bGUgPSAnIzIyNDYzMyc7XG4gICAgY3R4LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCbG9jaztcbiIsImNsYXNzIEZvb2Qge1xuICBjb25zdHJ1Y3Rvcih3aWR0aCA9IDEwLCBoZWlnaHQgPSAxMCkge1xuICAgIHRoaXMueCA9IChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1OCkgKiAxMCkgKyAxMDtcbiAgICB0aGlzLnkgPSAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNTgpICogMTApICsgMTA7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMuY29sb3IgPSAnI0YxQzYyNCc7XG4gIH1cblxuICBkcmF3Rmlyc3RGb29kKGN0eCkge1xuICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgIGN0eC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRm9vZDtcbiIsImNvbnN0IFNuYWtlID0gcmVxdWlyZSgnLi9TbmFrZS5qcycpO1xuY29uc3QgRm9vZCA9IHJlcXVpcmUoJy4vRm9vZC5qcycpO1xuXG5jbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoaGVpZ2h0LCB3aWR0aCkge1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB0aGlzLmN1cnJlbnRGb29kID0gbmV3IEZvb2QoKTtcbiAgICB0aGlzLmRpcmVjdGlvbiA9ICdyaWdodCc7XG4gICAgdGhpcy5nYW1lU25ha2UgPSBuZXcgU25ha2UoKTtcbiAgICB0aGlzLnN0b3BHYW1lID0gZmFsc2U7XG4gICAgdGhpcy5saXZlcyA9IDM7XG4gICAgdGhpcy5zY29yZSA9IDA7XG4gICAgdGhpcy5oaWdoU2NvcmUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImhpZ2hzY29yZVwiKTtcbiAgICB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XG4gICAgdGhpcy5lYXRGb29kID0gdGhpcy5lYXRGb29kLmJpbmQodGhpcyk7XG4gIH1cblxuICBrZWVwU25ha2VNb3ZpbmcoKSB7XG4gICAgdGhpcy5nYW1lU25ha2UubW92ZVModGhpcy5kaXJlY3Rpb24pO1xuICB9XG5cbiAgZWF0Rm9vZChjdHgpIHtcbiAgICBpZiAodGhpcy5nYW1lU25ha2UuaGVhZC54ID09PSB0aGlzLmN1cnJlbnRGb29kLnhcbiAgICAgICYmIHRoaXMuZ2FtZVNuYWtlLmhlYWQueSA9PT0gdGhpcy5jdXJyZW50Rm9vZC55KSB7XG4gICAgICB0aGlzLnNjb3JlKys7XG4gICAgICB0aGlzLmN1cnJlbnRGb29kID0gbmV3IEZvb2QoKTtcbiAgICAgIGlmIChjdHggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRGb29kLmRyYXdGaXJzdEZvb2QoY3R4KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZ2FtZVNuYWtlLmdyb3codGhpcy5kaXJlY3Rpb24pO1xuICAgIH1cbiAgfVxuXG4gIG5ld0xpZmUoY3R4KSB7XG4gICAgaWYgKHRoaXMuZ2FtZVNuYWtlLmRpZSkge1xuICAgICAgdGhpcy5nYW1lU25ha2UgPSBuZXcgU25ha2UoKTtcbiAgICAgIHRoaXMuZGlyZWN0aW9uID0gJ3JpZ2h0JztcbiAgICAgIHRoaXMubGl2ZXMtLTtcbiAgICAgIGlmICh0aGlzLmxpdmVzID09PSAwKSB7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xuICAgICAgICBpZiAoY3R4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5oaWdoU2NvcmUgPiAwIHx8IHRoaXMuaGlnaFNjb3JlICE9PSBudWxsKSB7XG4gICAgICAgICAgaWYgKHRoaXMuc2NvcmUgPiB0aGlzLmhpZ2hTY29yZSkge1xuICAgICAgICAgICAgdGhpcy5oaWdoU2NvcmUgPSB0aGlzLnNjb3JlO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJoaWdoU2NvcmVcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5oaWdoU2NvcmUpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5oaWdoU2NvcmUgPSB0aGlzLnNjb3JlO1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaGlnaFNjb3JlXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuaGlnaFNjb3JlKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdG9wR2FtZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZTtcbiIsImNvbnN0IEJsb2NrID0gcmVxdWlyZSgnLi9CbG9jay5qcycpO1xuXG5jbGFzcyBTbmFrZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc3BlZWQgPSAxMDtcbiAgICB0aGlzLnNuYWtlQm9keSA9IFtcbiAgICAgIG5ldyBCbG9jaygxMCwgMTAsIDEwLCAxMCksIFxuICAgICAgbmV3IEJsb2NrKDIwLCAxMCwgMTAsIDEwKSwgXG4gICAgICBuZXcgQmxvY2soMzAsIDEwLCAxMCwgMTApLCBcbiAgICAgIG5ldyBCbG9jayg0MCwgMTAsIDEwLCAxMCldO1xuICAgIHRoaXMuaGVhZCA9IHRoaXMuc25ha2VCb2R5W3RoaXMuc25ha2VCb2R5Lmxlbmd0aCAtIDFdO1xuICAgIHRoaXMudGFpbCA9ICB0aGlzLnNuYWtlQm9keVswXTtcbiAgICB0aGlzLmRpZSA9IGZhbHNlO1xuICAgIHRoaXMubW92ZVMgPSB0aGlzLm1vdmVTLmJpbmQodGhpcyk7XG4gIH1cblxuICBkcmF3U25ha2UoY3R4KSB7XG4gICAgdGhpcy5zbmFrZUJvZHkuZm9yRWFjaChibG9jayA9PiBibG9jay5kcmF3KGN0eCkpXG4gIH1cblxuICBtb3ZlUyhkaXJlY3Rpb24pIHtcbiAgICB0aGlzLmhlYWQgPSB0aGlzLnNuYWtlQm9keVt0aGlzLnNuYWtlQm9keS5sZW5ndGggLSAxXTtcbiAgICB0aGlzLnRhaWwgPSB0aGlzLnNuYWtlQm9keS5zaGlmdCgpO1xuICAgIHRoaXMua2lsbFNlbGYoKTtcbiAgICBcbiAgICBpZiAodGhpcy5oZWFkLnggPT09IDYwMFxuICAgICAgfHwgdGhpcy5oZWFkLnggPT09IC0xMFxuICAgICAgfHwgdGhpcy5oZWFkLnkgPT09IDYwMFxuICAgICAgfHwgdGhpcy5oZWFkLnkgPT09IC0xMCkge1xuICAgICAgdGhpcy5kaWUgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICB0aGlzLnRhaWwueCA9IHRoaXMuaGVhZC54ICsgdGhpcy5zcGVlZDtcbiAgICAgIHRoaXMudGFpbC55ID0gdGhpcy5oZWFkLnk7XG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xuICAgICAgdGhpcy50YWlsLnggPSB0aGlzLmhlYWQueCAtIHRoaXMuc3BlZWQ7XG4gICAgICB0aGlzLnRhaWwueSA9IHRoaXMuaGVhZC55O1xuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnZG93bicpIHtcbiAgICAgIHRoaXMudGFpbC55ID0gdGhpcy5oZWFkLnkgKyB0aGlzLnNwZWVkO1xuICAgICAgdGhpcy50YWlsLnggPSB0aGlzLmhlYWQueFxuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAndXAnKSB7XG4gICAgICB0aGlzLnRhaWwueSA9IHRoaXMuaGVhZC55IC0gdGhpcy5zcGVlZDtcbiAgICAgIHRoaXMudGFpbC54ID0gdGhpcy5oZWFkLng7XG4gICAgfVxuICAgIHRoaXMuc25ha2VCb2R5LnB1c2godGhpcy50YWlsKVxuICB9XG5cbiAgZ3JvdyhkaXJlY3Rpb24pIHtcbiAgICBsZXQgY3VycmVudFRhaWwgPSB0aGlzLnNuYWtlQm9keVswXTtcbiAgICBsZXQgeDtcbiAgICBsZXQgeTtcblxuICAgIGlmIChkaXJlY3Rpb24gPT09ICdyaWdodCcpIHtcbiAgICAgIHggPSBjdXJyZW50VGFpbC54IC0gdGhpcy5zcGVlZDtcbiAgICAgIHkgPSBjdXJyZW50VGFpbC55O1xuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnbGVmdCcpIHtcbiAgICAgIHggPSBjdXJyZW50VGFpbC54ICsgdGhpcy5zcGVlZDtcbiAgICAgIHkgPSBjdXJyZW50VGFpbC55O1xuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAndXAnKSB7XG4gICAgICB5ID0gY3VycmVudFRhaWwueSArIHRoaXMuc3BlZWQ7XG4gICAgICB4ID0gY3VycmVudFRhaWwueDtcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ2Rvd24nKSB7XG4gICAgICB5ID0gY3VycmVudFRhaWwueSAtIHRoaXMuc3BlZWQ7XG4gICAgICB4ID0gY3VycmVudFRhaWwueDtcbiAgICB9XG4gICAgbGV0IG5ld1RhaWwgPSBuZXcgQmxvY2soeCwgeSk7XG5cbiAgICB0aGlzLnNuYWtlQm9keS51bnNoaWZ0KG5ld1RhaWwpO1xuICB9XG5cbiAga2lsbFNlbGYoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNuYWtlQm9keS5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLmhlYWQueCA9PT0gdGhpcy5zbmFrZUJvZHlbaV0ueCBcbiAgICAgICAgJiYgdGhpcy5oZWFkLnkgPT09IHRoaXMuc25ha2VCb2R5W2ldLnkpIHtcbiAgICAgICAgdGhpcy5kaWUgPSB0cnVlO1xuICAgICAgfSBcbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTbmFrZTtcbiIsImNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuY29uc3QgR2FtZSA9IHJlcXVpcmUoJy4vR2FtZS5qcycpO1xuY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGNhbnZhcy5oZWlnaHQsIGNhbnZhcy53aWR0aCk7XG5jb25zdCBzaG93SGlnaFNjb3JlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hpZ2gtbnVtYmVyJyk7XG5jb25zdCBzY29yZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLW92ZXItY29udGFpbmVyJyk7XG5jb25zdCBsb3NlU2NyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtb3Zlci1jb250YWluZXInKTtcblxuc2hvd0hpZ2hTY29yZS5pbm5lclRleHQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImhpZ2hTY29yZVwiKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBnZXRLZXlDb2RlKTtcbnNjb3JlQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBhZGROYW1lKTtcblxuY29uc3Qgc3RhcnRHYW1lID0gKCkgPT4ge1xuICBnYW1lbG9vcChjdHgpO1xufVxuXG5jb25zdCBwYXVzZUdhbWUgPSAoKSA9PiB7XG4gIGdhbWUuc3RvcEdhbWUgPSB0cnVlO1xufVxuXG5mdW5jdGlvbiBhZGROYW1lKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBhbGVydCgnaXQgd29ya3MnKTtcbn1cblxuZnVuY3Rpb24gZ2V0S2V5Q29kZShldmVudCkge1xuICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzkpIHtcbiAgICBnYW1lLmRpcmVjdGlvbiA9ICdyaWdodCc7XG4gIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzcpIHtcbiAgICBnYW1lLmRpcmVjdGlvbiA9ICdsZWZ0JztcbiAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSAzOCkge1xuICAgIGdhbWUuZGlyZWN0aW9uID0gJ3VwJztcbiAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSA0MCkge1xuICAgIGdhbWUuZGlyZWN0aW9uID0gJ2Rvd24nO1xuICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IDgzKSB7XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShzdGFydEdhbWUpXG4gICAgcGxheU11c2ljKCk7XG4gIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gODApIHtcbiAgICBwYXVzZUdhbWUoKTtcbiAgICBwYXVzZU11c2ljKCk7XG4gIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gODIpIHtcbiAgICByZXNldExpdmVzKCk7XG4gICAgcGxheU11c2ljKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGxheU11c2ljKCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGhlbWUtc29uZycpLnBsYXkoKTtcbn1cblxuZnVuY3Rpb24gcGF1c2VNdXNpYygpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoZW1lLXNvbmcnKS5wYXVzZSgpO1xufVxuXG5mdW5jdGlvbiByZXNldExpdmVzKCkge1xuICBnYW1lLmxpdmVzID0gMztcbiAgZ2FtZS5zY29yZSA9IDA7XG4gIFxuICBsb3NlU2NyZWVuLmNsYXNzTGlzdC5hZGQoJ2dhbWUtb3Zlci1kaXNwbGF5Jyk7XG4gIGNhbmNlbEFuaW1hdGlvbkZyYW1lKCgpID0+IGdhbWVsb29wKGN0eCkpO1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gZ2FtZWxvb3AoY3R4KSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVNjb3JlQW5kTGl2ZXMoKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY29yZS1udW1iZXInKS5pbm5lclRleHQgPSBnYW1lLnNjb3JlO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGl2ZXMtbnVtYmVyJykuaW5uZXJUZXh0ID0gZ2FtZS5saXZlcztcbn1cblxuZnVuY3Rpb24gZGlzcGxheUdhbWVPdmVyKCkge1xuICBpZiAoZ2FtZS5saXZlcyA9PT0gMCkge1xuICAgIGxvc2VTY3JlZW4uY2xhc3NMaXN0LnJlbW92ZSgnZ2FtZS1vdmVyLWRpc3BsYXknKTtcbiAgICBwYXVzZU11c2ljKCk7XG4gIH1cbn1cblxuXG5mdW5jdGlvbiBnYW1lbG9vcChjdHgpIHtcbiAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICBnYW1lLmN1cnJlbnRGb29kLmRyYXdGaXJzdEZvb2QoY3R4KTtcbiAgICBnYW1lLmtlZXBTbmFrZU1vdmluZygpO1xuICAgIGdhbWUuZ2FtZVNuYWtlLmRyYXdTbmFrZShjdHgpO1xuICAgIGdhbWUuZWF0Rm9vZChjdHgpO1xuICAgIGdhbWUubmV3TGlmZShjdHgpO1xuICAgIHVwZGF0ZVNjb3JlQW5kTGl2ZXMoKTtcbiAgICBkaXNwbGF5R2FtZU92ZXIoKVxuXG4gICAgaWYgKGdhbWUuc3RvcEdhbWUpIHtcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKCgpID0+IGdhbWVsb29wKGN0eCkpO1xuICAgICAgZ2FtZS5zdG9wR2FtZSA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gZ2FtZWxvb3AoY3R4KSk7XG4gICAgfVxuICB9LCA2MClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=