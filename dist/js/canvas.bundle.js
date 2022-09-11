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

/***/ "./src/imgs/background.png":
/*!*********************************!*\
  !*** ./src/imgs/background.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "072d51bcc9c09311d4c2a6708b05bddc.png");

/***/ }),

/***/ "./src/imgs/background2.png":
/*!**********************************!*\
  !*** ./src/imgs/background2.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "63457f6944131637753c2e7a526c76a8.png");

/***/ }),

/***/ "./src/imgs/hills.png":
/*!****************************!*\
  !*** ./src/imgs/hills.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cfffe4c371f5e11d372b398a87c51dd0.png");

/***/ }),

/***/ "./src/imgs/hills2.png":
/*!*****************************!*\
  !*** ./src/imgs/hills2.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "999495708c183d194ad9b064e1539a43.png");

/***/ }),

/***/ "./src/imgs/hills4.png":
/*!*****************************!*\
  !*** ./src/imgs/hills4.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "9d3e1dfec6cfa0950562c5f27b41af68.png");

/***/ }),

/***/ "./src/imgs/platform.png":
/*!*******************************!*\
  !*** ./src/imgs/platform.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ffab39d3487de561be1a081fcfb3806d.png");

/***/ }),

/***/ "./src/imgs/platform2.png":
/*!********************************!*\
  !*** ./src/imgs/platform2.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "86c9a58eaac45334904327ca648a048a.png");

/***/ }),

/***/ "./src/imgs/platformSmallTall.png":
/*!****************************************!*\
  !*** ./src/imgs/platformSmallTall.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0587f9be8e442eb74b2fe283bbf1a947.png");

/***/ }),

/***/ "./src/imgs/platformSmallTall2.png":
/*!*****************************************!*\
  !*** ./src/imgs/platformSmallTall2.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "6a97442c6bf2e6d18b907b66555aaaba.png");

/***/ }),

/***/ "./src/imgs/spriteRunLeft.png":
/*!************************************!*\
  !*** ./src/imgs/spriteRunLeft.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c67ea51444aafa9bdcd5bdfd4f4a55bb.png");

/***/ }),

/***/ "./src/imgs/spriteRunLeft2.png":
/*!*************************************!*\
  !*** ./src/imgs/spriteRunLeft2.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cffa54db93b887053959d645ab80e461.png");

/***/ }),

/***/ "./src/imgs/spriteRunRight.png":
/*!*************************************!*\
  !*** ./src/imgs/spriteRunRight.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a2f75989924952a7e49ce0405d487c93.png");

/***/ }),

/***/ "./src/imgs/spriteRunRight2.png":
/*!**************************************!*\
  !*** ./src/imgs/spriteRunRight2.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "21a3bed2b607e529cdb213148da963ef.png");

/***/ }),

/***/ "./src/imgs/spriteStandLeft.png":
/*!**************************************!*\
  !*** ./src/imgs/spriteStandLeft.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "11514f48f22f6d8e3cf748e45e3e1ffb.png");

/***/ }),

/***/ "./src/imgs/spriteStandLeft2.png":
/*!***************************************!*\
  !*** ./src/imgs/spriteStandLeft2.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "884e9170d028ae40f1075c4666561795.png");

/***/ }),

/***/ "./src/imgs/spriteStandRight.png":
/*!***************************************!*\
  !*** ./src/imgs/spriteStandRight.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "01e8f15e899155c68950c40e0a6b8df0.png");

/***/ }),

/***/ "./src/imgs/spriteStandRight2.png":
/*!****************************************!*\
  !*** ./src/imgs/spriteStandRight2.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "3c65193ea11a698ef8876c25e3ed874d.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _imgs_platform_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../imgs/platform.png */ "./src/imgs/platform.png");
/* harmony import */ var _imgs_platform2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../imgs/platform2.png */ "./src/imgs/platform2.png");
/* harmony import */ var _imgs_hills_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../imgs/hills.png */ "./src/imgs/hills.png");
/* harmony import */ var _imgs_hills2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../imgs/hills2.png */ "./src/imgs/hills2.png");
/* harmony import */ var _imgs_hills4_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../imgs/hills4.png */ "./src/imgs/hills4.png");
/* harmony import */ var _imgs_background_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../imgs/background.png */ "./src/imgs/background.png");
/* harmony import */ var _imgs_background2_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../imgs/background2.png */ "./src/imgs/background2.png");
/* harmony import */ var _imgs_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../imgs/spriteStandLeft.png */ "./src/imgs/spriteStandLeft.png");
/* harmony import */ var _imgs_spriteStandLeft2_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../imgs/spriteStandLeft2.png */ "./src/imgs/spriteStandLeft2.png");
/* harmony import */ var _imgs_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../imgs/spriteStandRight.png */ "./src/imgs/spriteStandRight.png");
/* harmony import */ var _imgs_spriteStandRight2_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../imgs/spriteStandRight2.png */ "./src/imgs/spriteStandRight2.png");
/* harmony import */ var _imgs_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../imgs/spriteRunLeft.png */ "./src/imgs/spriteRunLeft.png");
/* harmony import */ var _imgs_spriteRunLeft2_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../imgs/spriteRunLeft2.png */ "./src/imgs/spriteRunLeft2.png");
/* harmony import */ var _imgs_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../imgs/spriteRunRight.png */ "./src/imgs/spriteRunRight.png");
/* harmony import */ var _imgs_spriteRunRight2_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../imgs/spriteRunRight2.png */ "./src/imgs/spriteRunRight2.png");
/* harmony import */ var _imgs_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../imgs/platformSmallTall.png */ "./src/imgs/platformSmallTall.png");
/* harmony import */ var _imgs_platformSmallTall2_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../imgs/platformSmallTall2.png */ "./src/imgs/platformSmallTall2.png");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


















var canvas = document.querySelector("canvas");
canvas.width = 1350;
canvas.height = 660;
var c = canvas.getContext("2d");
var gravity = 1;

var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    this.speed = 15;
    this.width = 65;
    this.height = 150;
    this.color = "red";
    this.position = {
      x: 100,
      y: 100
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.image = createImage(_imgs_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_9__["default"]);
    this.frames = 0;
    this.sprites = {
      stand: {
        right: createImage(_imgs_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_9__["default"]),
        left: createImage(_imgs_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_7__["default"]),
        cropWidth: 177,
        width: this.width
      },
      run: {
        right: createImage(_imgs_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_13__["default"]),
        left: createImage(_imgs_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_11__["default"]),
        cropWidth: 341,
        width: 127.875
      }
    };
    this.currentSprite = this.sprites.stand.right;
    this.currentCropWidth = this.sprites.stand.cropWidth;
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      // c.fillStyle = this.color;
      c.drawImage(this.currentSprite, this.currentCropWidth * this.frames, 0, this.currentCropWidth, 400, this.position.x, this.position.y, this.width, this.height); // c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.frames++;

      if (this.frames > 59 && this.currentSprite === player.sprites.stand.right) {
        this.frames = 0;
      } else if (this.frames > 29 && this.currentSprite === player.sprites.run.right) {
        this.frames = 0;
      }

      if (this.frames > 59 && this.currentSprite === player.sprites.stand.left) {
        this.frames = 0;
      } else if (this.frames > 29 && this.currentSprite === player.sprites.run.left) {
        this.frames = 0;
      }

      this.draw();
      this.position.y += this.velocity.y;
      this.position.x += this.velocity.x;

      if (this.position.y + this.height + this.velocity.y <= canvas.height) {
        this.velocity.y += gravity;
      }
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
      y: y
    };
    this.width = image.width;
    this.height = image.height;
    this.color = "blue"; // this.draw();

    this.image = image;
    console.log(image);
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      // c.fillStyle = this.color;
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
      y: y
    };
    this.width = image.width;
    this.height = image.height;
    console.log(this.width, this.height);
    this.color = "blue"; // this.draw();

    this.image = image;
  }

  _createClass(GenericObject, [{
    key: "draw",
    value: function draw() {
      // c.fillStyle = this.color;
      c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
  }]);

  return GenericObject;
}();

function createImage(imageSrc) {
  var image = new Image();

  if (imageSrc == _imgs_hills2_png__WEBPACK_IMPORTED_MODULE_3__["default"]) {
    image.width = 7545;
    image.height = 592;
  }

  if (imageSrc == _imgs_background2_png__WEBPACK_IMPORTED_MODULE_6__["default"]) {
    image.width = 11643;
    image.height = 732;
  }

  image.src = imageSrc;
  return image;
}

function platformSmallTallImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
}

var platformImage = createImage(_imgs_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
var player = new Player();
var platforms = [];
var genericObjects = [];
var lastKey;
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
};
var scrollOffset = 0;

function init() {
  platformImage = createImage(_imgs_platform2_png__WEBPACK_IMPORTED_MODULE_1__["default"]);
  player = new Player();
  platforms = [new Platform({
    x: platformImage.width * 4 + 7 + platformImage.width,
    y: 350,
    image: platformSmallTallImage(_imgs_platformSmallTall2_png__WEBPACK_IMPORTED_MODULE_16__["default"])
  }), new Platform({
    x: platformImage.width * 7 + 500 + platformImage.width,
    y: 350,
    image: platformSmallTallImage(_imgs_platformSmallTall2_png__WEBPACK_IMPORTED_MODULE_16__["default"])
  }), new Platform({
    x: platformImage.width * 10 + 7 + platformImage.width,
    y: 350,
    image: platformSmallTallImage(_imgs_platformSmallTall2_png__WEBPACK_IMPORTED_MODULE_16__["default"])
  }), new Platform({
    x: platformImage.width * 13 + 7 + platformImage.width,
    y: 350,
    image: platformSmallTallImage(_imgs_platformSmallTall2_png__WEBPACK_IMPORTED_MODULE_16__["default"])
  }), new Platform({
    x: -1,
    y: 535,
    image: platformImage
  }), new Platform({
    x: platformImage.width - 3,
    y: 535,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 2 + 100,
    y: 535,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 3 + 300,
    y: 535,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 4 + 300 - 2,
    y: 535,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 5 + 650,
    y: 535,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 6 + 850,
    y: 535,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 7 + 1050,
    y: 535,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 8 + 1250,
    y: 535,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 9 + 1650,
    y: 535,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 10 + 1950,
    y: 535,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 11 + 2050,
    y: 535,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 12 + 2300,
    y: 535,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 13 + 2600,
    y: 535,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 14 + 3000,
    y: 535,
    image: platformImage
  })];
  genericObjects = [new GenericObject({
    x: -1,
    y: -1,
    image: createImage(_imgs_background_png__WEBPACK_IMPORTED_MODULE_5__["default"])
  }), new GenericObject({
    x: 0,
    y: 0,
    image: createImage(_imgs_hills2_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  })];
  scrollOffset = 0;
}

var animate = function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = "white";
  c.fillRect(0, 0, canvas.width, canvas.height);
  genericObjects.forEach(function (object) {
    object.draw();
  });
  platforms.forEach(function (platform) {
    platform.draw();
  });
  player.update();

  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = player.speed;
  } else if (keys.left.pressed && player.position.x > 100 || keys.left.pressed && scrollOffset === 0 && player.position.x > 0) {
    player.velocity.x = -player.speed;
  } else {
    player.velocity.x = 0;

    if (keys.right.pressed) {
      scrollOffset += player.speed;
      platforms.forEach(function (platform) {
        platform.position.x -= player.speed;
      });
      genericObjects.forEach(function (genericObject) {
        genericObject.position.x -= player.speed * 0.66;
      });
    } else if (keys.left.pressed && scrollOffset > 0) {
      scrollOffset -= player.speed;
      platforms.forEach(function (platform) {
        platform.position.x += player.speed;
      });
      genericObjects.forEach(function (genericObject) {
        genericObject.position.x += player.speed * 0.66;
      });
    }
  }

  platforms.forEach(function (platform) {
    if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
      player.velocity.y = 0;
    }
  }); //sprite switching condition

  if (keys.right.pressed && lastKey === "right" && player.currentSprite !== player.sprites.run.right) {
    player.frames = 1;
    player.currentSprite = player.sprites.run.right;
    player.currentCropWidth = player.sprites.run.cropWidth;
    player.width = player.sprites.run.width;
  } else if (keys.left.pressed && lastKey === "left" && player.currentSprite !== player.sprites.run.left) {
    player.currentSprite = player.sprites.run.left;
    player.currentCropWidth = player.sprites.run.cropWidth;
    player.width = player.sprites.run.width;
  } else if (!keys.right.pressed && lastKey === "right" && player.currentSprite !== player.sprites.stand.right) {
    player.currentSprite = player.sprites.stand.right;
    player.currentCropWidth = player.sprites.stand.cropWidth;
    player.width = player.sprites.stand.width;
  } else if (!keys.left.pressed && lastKey === "left" && player.currentSprite !== player.sprites.stand.left) {
    player.currentSprite = player.sprites.stand.left;
    player.currentCropWidth = player.sprites.stand.cropWidth;
    player.width = player.sprites.stand.width;
  }

  if (scrollOffset > platformImage.width * 5 + 250) {
    console.log("you win");
  }

  if (player.position.y > canvas.height) {
    console.log("you lose");
    init();
  }
};

init();
animate();
addEventListener("keydown", function (_ref3) {
  var keyCode = _ref3.keyCode;

  switch (keyCode) {
    case 65:
      keys.left.pressed = true;
      lastKey = "left";
      break;

    case 68:
      keys.right.pressed = true;
      lastKey = "right";
      break;

    case 87:
      player.velocity.y = -25;
      break;

    case 83:
      player.velocity.y += 0;
      break;
  }
});
addEventListener("keyup", function (_ref4) {
  var keyCode = _ref4.keyCode;

  switch (keyCode) {
    case 65:
      keys.left.pressed = false;
      break;

    case 68:
      keys.right.pressed = false;
      break;

    case 87:
      player.velocity.y = 0;
      break;

    case 83:
      player.velocity.y += 0;
      break;
  }
}); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/*
import utils from './utils'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
}

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']

// Event Listeners
addEventListener('mousemove', (event) => {
  mouse.x = event.clientX
  mouse.y = event.clientY
})

addEventListener('resize', () => {
  canvas.width = innerWidth
  canvas.height = innerHeight

  init()
})

// Objects
class Object {
  constructor(x, y, radius, color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
  }

  draw() {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
    c.closePath()
  }

  update() {
    this.draw()
  }
}

// Implementation
let objects
function init() {
  objects = []

  for (let i = 0; i < 400; i++) {
    // objects.push()
  }
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, canvas.width, canvas.height)

  c.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y)
  // objects.forEach(object => {
  //  object.update()
  // })
}

init()
animate()
*/

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map