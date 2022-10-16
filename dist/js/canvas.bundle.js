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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./img/background.png":
/*!****************************!*\
  !*** ./img/background.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "072d51bcc9c09311d4c2a6708b05bddc.png");

/***/ }),

/***/ "./img/hills.png":
/*!***********************!*\
  !*** ./img/hills.png ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cfffe4c371f5e11d372b398a87c51dd0.png");

/***/ }),

/***/ "./img/platform.png":
/*!**************************!*\
  !*** ./img/platform.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ffab39d3487de561be1a081fcfb3806d.png");

/***/ }),

/***/ "./img/platformSmallTall.png":
/*!***********************************!*\
  !*** ./img/platformSmallTall.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0587f9be8e442eb74b2fe283bbf1a947.png");

/***/ }),

/***/ "./img/spriteRunLeft.png":
/*!*******************************!*\
  !*** ./img/spriteRunLeft.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c67ea51444aafa9bdcd5bdfd4f4a55bb.png");

/***/ }),

/***/ "./img/spriteRunRight.png":
/*!********************************!*\
  !*** ./img/spriteRunRight.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a2f75989924952a7e49ce0405d487c93.png");

/***/ }),

/***/ "./img/spriteStandLeft.png":
/*!*********************************!*\
  !*** ./img/spriteStandLeft.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "11514f48f22f6d8e3cf748e45e3e1ffb.png");

/***/ }),

/***/ "./img/spriteStandRight.png":
/*!**********************************!*\
  !*** ./img/spriteStandRight.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "01e8f15e899155c68950c40e0a6b8df0.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_platform_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../img/platform.png */ "./img/platform.png");
/* harmony import */ var _img_hills_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/hills.png */ "./img/hills.png");
/* harmony import */ var _img_background_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../img/background.png */ "./img/background.png");
/* harmony import */ var _img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../img/platformSmallTall.png */ "./img/platformSmallTall.png");
/* harmony import */ var _img_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../img/spriteRunLeft.png */ "./img/spriteRunLeft.png");
/* harmony import */ var _img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../img/spriteRunRight.png */ "./img/spriteRunRight.png");
/* harmony import */ var _img_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../img/spriteStandLeft.png */ "./img/spriteStandLeft.png");
/* harmony import */ var _img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../img/spriteStandRight.png */ "./img/spriteStandRight.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }








var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 576;
var gravity = 0.67;
var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);
    this.position = {
      x: 100,
      y: 100
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.width = 66;
    this.height = 150;
    this.playerSpeed = 10;
    this.image = createImage(_img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_7__["default"]);
    this.frames = 0;
    this.sprites = {
      stand: {
        right: {
          sprite: createImage(_img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_7__["default"]),
          cropWidth: 177,
          width: 66
        },
        left: {
          sprite: createImage(_img_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_6__["default"]),
          cropWidth: 177,
          width: 66
        }
      },
      run: {
        right: {
          sprite: createImage(_img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_5__["default"]),
          cropWidth: 341,
          width: 127.875
        },
        left: {
          sprite: createImage(_img_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_4__["default"]),
          cropWidth: 341,
          width: 127.875
        }
      }
    };
    this.currentSprite = this.sprites.stand.right;
  }
  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      // c.fillStyle = 'red'
      // c.fillRect(this.position.x, this.position.y, this.width, this.height)
      c.drawImage(this.currentSprite.sprite, this.currentSprite.cropWidth * this.frames, 0, this.currentSprite.cropWidth, 400, this.position.x, this.position.y, this.currentSprite.width, this.height); // (src, crop dimensions, cd, cd, cd, starting positions and width and height)
    }
  }, {
    key: "update",
    value: function update() {
      // function used to animate
      this.frames++;
      if (this.frames > 59 && (this.currentSprite == this.sprites.stand.right || this.currentSprite == this.sprites.stand.left)) {
        this.frames = 0;
      } else if (this.frames > 29 && (this.currentSprite == this.sprites.run.right || this.currentSprite == this.sprites.run.left)) {
        this.frames = 0;
      }
      this.draw();
      this.position.y += this.velocity.y;
      this.position.x += this.velocity.x;
      if (this.position.y + this.height + this.velocity.y <= canvas.height) {
        this.velocity.y += gravity;
      } // check if player is above bottom of screen
      // else this.velocity.y = 0; // turn gravity off when you're on the ground
    }
  }]);
  return Player;
}();
var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
      y = _ref.y,
      image = _ref.image;
    _classCallCheck(this, Platform);
    this.position = {
      x: x,
      y: y,
      image: ''
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }
  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);
  return Platform;
}();
var GenericObject = /*#__PURE__*/function () {
  function GenericObject(_ref2) {
    var x = _ref2.x,
      y = _ref2.y,
      image = _ref2.image;
    _classCallCheck(this, GenericObject);
    this.position = {
      x: x,
      y: y,
      image: ''
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }
  _createClass(GenericObject, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);
  return GenericObject;
}();
function createImage(imageSource) {
  var image = new Image();
  image.src = imageSource;
  return image;
}
var player = new Player();
var platformImage = createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
var platformSmallTallImage = createImage(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
var platforms = [];
var genericObjects = [];
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
};
player.update();
var scrollOffset = 0; // tracks player position on overall map.

function init() {
  player = new Player();
  platforms = [new Platform({
    x: platformImage.width * 4 - 2 + platformImage.width,
    y: 270,
    image: platformSmallTallImage
  }), new Platform({
    x: 0,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width - 2,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 2 + 100,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 3 + 300,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 4 + 300 - 2,
    y: 470,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 5 + 800 - 2,
    y: 470,
    image: platformImage
  })];
  genericObjects = [new GenericObject({
    x: 0,
    y: 0,
    image: createImage(_img_background_png__WEBPACK_IMPORTED_MODULE_2__["default"])
  }), new GenericObject({
    x: 0,
    y: 0,
    image: createImage(_img_hills_png__WEBPACK_IMPORTED_MODULE_1__["default"])
  })];
  scrollOffset = 0; // tracks player position on overall map.
}

function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = 'white';
  c.fillRect(0, 0, canvas.width, canvas.height); //erases previous rectangle on the screen

  genericObjects.forEach(function (genericObject) {
    genericObject.draw();
  });
  platforms.forEach(function (platform) {
    platform.draw();
  });
  player.update();
  if (keys.right.pressed && player.position.x <= canvas.width / 3) {
    // keeps player in front third of screen
    player.velocity.x = player.playerSpeed;
  } else if (keys.left.pressed && player.position.x >= 100 || keys.left.pressed && scrollOffset === 0 && player.position.x > 0) {
    // keeps player from exiting screen on the left
    player.velocity.x = -player.playerSpeed;
  } else {
    player.velocity.x = 0;
    if (keys.right.pressed) {
      // move platform code
      scrollOffset += player.playerSpeed;
      platforms.forEach(function (platform) {
        platform.position.x -= player.playerSpeed;
      });
      genericObjects.forEach(function (genericObject) {
        genericObject.position.x -= player.playerSpeed * 0.66;
      });
    } else if (keys.left.pressed && scrollOffset > 0) {
      scrollOffset -= player.playerSpeed;
      platforms.forEach(function (platform) {
        platform.position.x += player.playerSpeed;
      });
      genericObjects.forEach(function (genericObject) {
        genericObject.position.x += player.playerSpeed * 0.66;
      });
    }
    // console.log(scrollOffset)
  }

  //detect platform collision from above
  platforms.forEach(function (platform) {
    var aboveAndTouchingPlatform = player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y;
    var withinPlatformWidth = player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width;
    if (aboveAndTouchingPlatform && withinPlatformWidth) {
      player.velocity.y = 0;
    }
  });
  if (scrollOffset > platformImage.width * 5 + 400 - 2) {
    // position of last platform
    console.log('You Win!!!');
  }
  if (player.position.y > canvas.height) {
    init();
  }
}
init();
animate();
window.addEventListener('keydown', function (_ref3) {
  var key = _ref3.key;
  switch (key) {
    case 'a':
      console.log('left');
      keys.left.pressed = true;
      player.currentSprite = player.sprites.run.left;
      break;
    case 'd':
      console.log('right');
      keys.right.pressed = true;
      player.currentSprite = player.sprites.run.right;
      break;
    case 'w':
      console.log('up');
      player.velocity.y -= 25;
      break;
    case 's':
      console.log('down');
      break;
  }
});
window.addEventListener('keyup', function (_ref4) {
  var key = _ref4.key;
  switch (key) {
    case 'a':
      console.log('left');
      keys.left.pressed = false;
      player.currentSprite = player.sprites.stand.right;
      break;
    case 'd':
      console.log('right');
      keys.right.pressed = false;
      player.currentSprite = player.sprites.stand.right;
      break;
    case 'w':
      console.log('up');
      player.velocity.y = 0;
      break;
    case 's':
      console.log('down');
      break;
  }
});

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map