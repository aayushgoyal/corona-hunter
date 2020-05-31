(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "H3Kh":
/*!******************************!*\
  !*** ./src/assets/virus.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"cac6cdae6e065e7cdc46c798f8d15c81.png\");\n\n//# sourceURL=webpack:///./src/assets/virus.png?");

/***/ }),

/***/ "HDMi":
/*!************************************!*\
  !*** ./src/js/constants/levels.js ***!
  \************************************/
/*! exports provided: levels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"levels\", function() { return levels; });\nconst levels = {\n    1: {\n        viruses: 6,\n        speed: {\n            maxVx: 4,\n            maxVy: 4,\n        }\n    },\n    2: {\n        viruses: 10,\n        speed: {\n            maxVx: 5,\n            maxVy: 5,\n        }\n    },\n    3: {\n        viruses: 14,\n        speed: {\n            maxVx: 6,\n            maxVy: 6,\n        }\n    }\n}\n\n//# sourceURL=webpack:///./src/js/constants/levels.js?");

/***/ }),

/***/ "LHBC":
/*!**************************************!*\
  !*** ./src/js/constants/constant.js ***!
  \**************************************/
/*! exports provided: virusDimension */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"virusDimension\", function() { return virusDimension; });\nconst virusDimension = 50;\n\n//# sourceURL=webpack:///./src/js/constants/constant.js?");

/***/ }),

/***/ "e6Wu":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _virus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./virus */ \"h1vG\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"mUSF\");\n/* harmony import */ var _constants_levels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/levels */ \"HDMi\");\n/* harmony import */ var _constants_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants/constant */ \"LHBC\");\n\n\n\n\n\nlet currentLevel = 1;\nlet currentLevelConfig = _constants_levels__WEBPACK_IMPORTED_MODULE_2__[\"levels\"][currentLevel];\n\nconst canvas = document.querySelector('#gameCanvas');\nconst ctx = canvas.getContext(\"2d\");\n\n// Canvas Width\nconst W = canvas.width;\n\n// Canvas Height\nconst H = canvas.height; \n\n// Canvas boundary position from left\nconst canvasLeft = canvas.offsetLeft;\n\n// Canvas boundary position from top\nconst canvasTop = canvas.offsetTop;\n\nlet activeViruses = [];\n\n\n/**\n * Initializes the game\n * @method initializeGame\n */\nfunction initializeGame() {\n    setup();\n    addSanitizerSprayEvent();\n}\n\n/**\n * Draw the corona viruses on drawing board\n * @method setup\n */\nfunction setup() {\n    for(let i=0; i< currentLevelConfig.viruses; i++) {\n        const xPos = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"getRandomNumber\"])(2 * _constants_constant__WEBPACK_IMPORTED_MODULE_3__[\"virusDimension\"], W - 2 * _constants_constant__WEBPACK_IMPORTED_MODULE_3__[\"virusDimension\"]);\n        const yPos = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"getRandomNumber\"])(2 * _constants_constant__WEBPACK_IMPORTED_MODULE_3__[\"virusDimension\"], H - 2 * _constants_constant__WEBPACK_IMPORTED_MODULE_3__[\"virusDimension\"]);\n        const velocityY = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"getRandomNumber\"])(1, currentLevelConfig.speed.maxVx);\n        const velocityX = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"getRandomNumber\"])(1, currentLevelConfig.speed.maxVy);\n\n        activeViruses.push(new _virus__WEBPACK_IMPORTED_MODULE_0__[\"Virus\"](xPos, yPos, velocityY, velocityX, Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"getRandomColors\"])()));\n    }\n}\n\n/**\n * Add click event listener to drawing board to detect if sanitizer spray\n * @method addSanitizerSprayEvent\n */\nfunction addSanitizerSprayEvent() {\n    canvas.addEventListener('click', function(event) {\n        const X = event.pageX - canvasLeft;\n        const Y = event.pageY-canvasTop;\n\n        activeViruses.forEach((virus, index) => {\n            if(isKilledBySanitizer(X, Y, virus.xPos, virus.yPos)) {\n                activeViruses.splice(index, 1);\n            }\n        });\n\n        if(activeViruses.length === 0) {\n            updateGameLevel();\n        }\n    \n    });\n}\n\n/**\n * Detect if sanitizer has hit the virus\n * \n * @method isKilledBySanitizer\n * @param {Number} Xcord \n * @param {Number} Ycord \n * @param {Number} virusX \n * @param {Number} virusY \n * \n */\nfunction isKilledBySanitizer(Xcord, Ycord, virusX, virusY) {\n    if(Xcord >= virusX && Xcord <=  virusX + _constants_constant__WEBPACK_IMPORTED_MODULE_3__[\"virusDimension\"] && Ycord >= virusY && Ycord<= virusY + _constants_constant__WEBPACK_IMPORTED_MODULE_3__[\"virusDimension\"]) {\n        return true;\n    }\n    return false;\n}\n\n/**\n * Clear drawing board\n * @method clearDrawingBoard\n */\nfunction clearDrawingBoard() {\n    ctx.clearRect(0, 0, W, H);\n}\n\n/**\n * Update the game level and initialize the game setup\n * @method updateGameLevel\n */\nfunction updateGameLevel() {\n    if(Object.keys(_constants_levels__WEBPACK_IMPORTED_MODULE_2__[\"levels\"]).length >=  currentLevel + 1) {\n        currentLevel = currentLevel + 1;\n        currentLevelConfig = _constants_levels__WEBPACK_IMPORTED_MODULE_2__[\"levels\"][currentLevel];\n        initializeGame();\n    }\n}\n\n(function drawScene() {\n    clearDrawingBoard();\n\n    activeViruses.forEach(virus => {\n        virus.drawVirus(ctx);\n        virus.updatePosition(W, H);\n    });\n\n    requestAnimationFrame(drawScene);\n})();\n\ninitializeGame();\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "h1vG":
/*!*************************!*\
  !*** ./src/js/virus.js ***!
  \*************************/
/*! exports provided: Virus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Virus\", function() { return Virus; });\n/* harmony import */ var _assets_virus_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/virus.png */ \"H3Kh\");\n/* harmony import */ var _constants_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/constant */ \"LHBC\");\n\n\n\nconst virus = new Image();\nvirus.src = _assets_virus_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\nclass Virus {\n\n    constructor(xPos, yPos, vx, vy, color) {\n        this.xPos = xPos;\n        this.yPos = yPos;\n        this.vx = vx;\n        this.vy = vy;\n        this.color = color;\n    }\n\n    drawVirus(ctx) {\n        ctx.fillStyle = this.color;\n        ctx.beginPath();\n        ctx.drawImage(virus, this.xPos, this.yPos, _constants_constant__WEBPACK_IMPORTED_MODULE_1__[\"virusDimension\"], _constants_constant__WEBPACK_IMPORTED_MODULE_1__[\"virusDimension\"]);\n        ctx.closePath();\n        ctx.fill();\n    } \n\n    updatePosition(canvasWidth, canvasHeight) {\n        if(this.xPos + _constants_constant__WEBPACK_IMPORTED_MODULE_1__[\"virusDimension\"] + this.vx > canvasWidth || this.xPos + this.vx <= 0) {\n            this.vx = -this.vx;\n        }\n\n        if(this.yPos + _constants_constant__WEBPACK_IMPORTED_MODULE_1__[\"virusDimension\"] + this.vy > canvasHeight || this.yPos + this.vy <= 0) {\n            this.vy = -this.vy;\n        }\n\n        this.xPos += this.vx;\n        this.yPos += this.vy;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/js/virus.js?");

/***/ }),

/***/ "mUSF":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! exports provided: getRandomNumber, getRandomColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandomNumber\", function() { return getRandomNumber; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandomColors\", function() { return getRandomColors; });\nconst colors = ['#7920a7', '#bcf6a8', '#f3b365', '#db8d87', '#8796c5', '#e66eba', '#ee014e', '#7f2235', '#26ae00', '#1669e2'];\n\nfunction getRandomNumber(min, max) {\n    return Math.floor(Math.random() * (max - min)) + min;\n}\n\nfunction getRandomColors() {\n    return colors[getRandomNumber(0, colors.length - 1)];\n}\n\n\n//# sourceURL=webpack:///./src/js/utils.js?");

/***/ })

},[["e6Wu","runtime"]]]);