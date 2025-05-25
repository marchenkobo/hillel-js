/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getSliderElements: () => (/* binding */ getSliderElements)\n/* harmony export */ });\nfunction getSliderElements() {\n  return {\n    images: document.querySelectorAll('.slider__image'),\n    prevButton: document.getElementById('prevButton'),\n    nextButton: document.getElementById('nextButton'),\n    sliderPagination: document.getElementById('sliderPagination')\n  };\n}\n\n//# sourceURL=webpack:///./src/dom.js?");

/***/ }),

/***/ "./src/img sync \\.(png%7Cjpe?g%7Cgif%7Csvg)$":
/*!*****************************************************************!*\
  !*** ./src/img/ sync nonrecursive \.(png%7Cjpe?g%7Cgif%7Csvg)$ ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./1.jpg\": \"./src/img/1.jpg\",\n\t\"./2.jpg\": \"./src/img/2.jpg\",\n\t\"./3.jpg\": \"./src/img/3.jpg\",\n\t\"./4.jpg\": \"./src/img/4.jpg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/img sync \\\\.(png%7Cjpe?g%7Cgif%7Csvg)$\";\n\n//# sourceURL=webpack:///./src/img/_sync_nonrecursive_\\.(png%257Cjpe?");

/***/ }),

/***/ "./src/img/1.jpg":
/*!***********************!*\
  !*** ./src/img/1.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/17357fe6f7390ddc80e07.jpg\";\n\n//# sourceURL=webpack:///./src/img/1.jpg?");

/***/ }),

/***/ "./src/img/2.jpg":
/*!***********************!*\
  !*** ./src/img/2.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/2624245e73c5b9e1110c2.jpg\";\n\n//# sourceURL=webpack:///./src/img/2.jpg?");

/***/ }),

/***/ "./src/img/3.jpg":
/*!***********************!*\
  !*** ./src/img/3.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/301b07195245500040d8c.jpg\";\n\n//# sourceURL=webpack:///./src/img/3.jpg?");

/***/ }),

/***/ "./src/img/4.jpg":
/*!***********************!*\
  !*** ./src/img/4.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/4e537d5d47301756b654c.jpg\";\n\n//# sourceURL=webpack:///./src/img/4.jpg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ \"./src/styles.scss\");\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider */ \"./src/slider.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n// Імпортуємо всі картинки з папки img\nfunction importAllImages(r) {\n  return r.keys().map(r);\n}\n\n// Створюємо контекст для всіх файлів із розширеннями png|jpg|jpeg|gif|svg в папці ./img\nvar images = importAllImages(__webpack_require__(\"./src/img sync \\\\.(png%7Cjpe?g%7Cgif%7Csvg)$\"));\n\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var _getSliderElements = (0,_dom__WEBPACK_IMPORTED_MODULE_2__.getSliderElements)(),\n    imageElements = _getSliderElements.images,\n    prevButton = _getSliderElements.prevButton,\n    nextButton = _getSliderElements.nextButton,\n    sliderPagination = _getSliderElements.sliderPagination;\n\n  // Присвоюємо src кожному тегу img з масиву імпортованих картинок\n  images.forEach(function (src, index) {\n    if (imageElements[index]) {\n      imageElements[index].src = src;\n    }\n  });\n  var slider = new _slider__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n    images: imageElements,\n    prevButton: prevButton,\n    nextButton: nextButton,\n    sliderPagination: sliderPagination\n  });\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/slider.js":
/*!***********************!*\
  !*** ./src/slider.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Slider)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar Slider = /*#__PURE__*/function () {\n  function Slider(_ref) {\n    var images = _ref.images,\n      prevButton = _ref.prevButton,\n      nextButton = _ref.nextButton,\n      sliderPagination = _ref.sliderPagination;\n    _classCallCheck(this, Slider);\n    this.images = images;\n    this.prevButton = prevButton;\n    this.nextButton = nextButton;\n    this.sliderPagination = sliderPagination;\n    this.currentSlideIndex = 0;\n    this.sliderPaginationItems = [];\n    this.init();\n  }\n  return _createClass(Slider, [{\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n      this.images[this.currentSlideIndex].classList.add('is-active');\n      this.switchStateForSliderButtons();\n      for (var i = 0; i < this.images.length; i++) {\n        this.createSliderPaginationItem(i);\n      }\n      this.sliderPaginationItems = this.sliderPagination.querySelectorAll('.slider__pagination-item');\n      this.sliderPaginationItems[this.currentSlideIndex].classList.add('is-active');\n      this.prevButton.addEventListener('click', function () {\n        return _this.switchSliderImages('previous');\n      });\n      this.nextButton.addEventListener('click', function () {\n        return _this.switchSliderImages('next');\n      });\n      this.sliderPagination.addEventListener('click', function (e) {\n        return _this.onPaginationClick(e);\n      });\n    }\n  }, {\n    key: \"switchSliderImages\",\n    value: function switchSliderImages(direction) {\n      this.images[this.currentSlideIndex].classList.remove('is-active');\n      if (direction === 'previous' && this.currentSlideIndex > 0) {\n        this.currentSlideIndex--;\n      } else if (direction === 'next' && this.currentSlideIndex < this.images.length - 1) {\n        this.currentSlideIndex++;\n      }\n      this.images[this.currentSlideIndex].classList.add('is-active');\n      this.switchStateForSliderButtons();\n      this.setCurrentPagination();\n    }\n  }, {\n    key: \"switchStateForSliderButtons\",\n    value: function switchStateForSliderButtons() {\n      this.prevButton.classList.toggle('is-disabled', this.currentSlideIndex === 0);\n      this.nextButton.classList.toggle('is-disabled', this.currentSlideIndex === this.images.length - 1);\n    }\n  }, {\n    key: \"createSliderPaginationItem\",\n    value: function createSliderPaginationItem(index) {\n      var item = document.createElement('div');\n      item.classList.add('slider__pagination-item');\n      item.setAttribute('data-target-index', index);\n      this.sliderPagination.append(item);\n    }\n  }, {\n    key: \"setCurrentPagination\",\n    value: function setCurrentPagination() {\n      this.sliderPaginationItems.forEach(function (item) {\n        return item.classList.remove('is-active');\n      });\n      this.sliderPaginationItems[this.currentSlideIndex].classList.add('is-active');\n    }\n  }, {\n    key: \"onPaginationClick\",\n    value: function onPaginationClick(e) {\n      var target = e.target;\n      if (target.classList.contains('slider__pagination-item')) {\n        var targetIndex = +target.getAttribute('data-target-index');\n        if (targetIndex !== this.currentSlideIndex) {\n          this.images[this.currentSlideIndex].classList.remove('is-active');\n          this.currentSlideIndex = targetIndex;\n          this.images[this.currentSlideIndex].classList.add('is-active');\n          this.setCurrentPagination();\n          this.switchStateForSliderButtons();\n        }\n      }\n    }\n  }]);\n}();\n\n\n//# sourceURL=webpack:///./src/slider.js?");

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/styles.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;