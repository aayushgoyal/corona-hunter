(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "e6Wu":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _virus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./virus.js */ \"h1vG\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ \"mUSF\");\n\n\n\nconst canvas = document.querySelector('#gameCanvas');\nconst ctx = canvas.getContext(\"2d\");\n\nconst ballRadius = 16;\nconst W = canvas.width;\nconst H = canvas.height;\n\nconst v1 = new _virus_js__WEBPACK_IMPORTED_MODULE_0__[\"Virus\"](ballRadius, 20, 20, 5, 5, Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"getRandomColors\"])());\n\n(function draw(){\n    ctx.clearRect(0, 0, W, H);\n    \n    v1.drawVirus(ctx);\n    v1.updatePosition(W, H);\n    requestAnimationFrame(draw);\n})();\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "h1vG":
/*!*************************!*\
  !*** ./src/js/virus.js ***!
  \*************************/
/*! exports provided: Virus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Virus\", function() { return Virus; });\nclass Virus {\n\n    constructor(radius, xPos, yPos, vx, vy, color) {\n        this.radius = radius;\n        this.xPos = xPos;\n        this.yPos = yPos;\n        this.vx = vx;\n        this.vy = vy;\n        this.color = color;\n    }\n\n    drawVirus(ctx) {\n        ctx.fillStyle = this.color;\n        ctx.beginPath();\n        ctx.arc(this.xPos, this.yPos, this.radius, 0, Math.PI * 2, false);\n        ctx.closePath();\n        ctx.fill();\n    } \n\n    updatePosition(canvasWidth, canvasHeight) {\n        if(this.xPos + this.radius + this.vx > canvasWidth || this.xPos - this.radius + this.vx <= 0) {\n            this.vx = -this.vx;\n        }\n\n        if(this.yPos + this.radius + this.vy > canvasHeight || this.yPos - this.radius + this.vy <= 0) {\n            this.vy = -this.vy;\n        }\n\n        this.xPos += this.vx;\n        this.yPos += this.vy;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/js/virus.js?");

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