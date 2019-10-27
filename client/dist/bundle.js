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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/js/classes/StateMachine.js":
/*!****************************************!*\
  !*** ./app/js/classes/StateMachine.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return StateMachine; });\n// StateMachine.js\n\nclass StateMachine {\n\tconstructor(states) {\n\t\tthis.states = states || {};\n\t\tthis.currentState = null;\n\t}\n\n\tdraw() {\n\t\tif (this.currentState) {\n\t\t\tthis.currentState.draw();\n\t\t}\n\t}\n\n\tupdate() {\n\t\tif (this.currentState) {\n\t\t\tthis.currentState.update();\n\t\t}\n\t}\n\n\tchange(stateName, params) {\n\t\tconsole.assert(this.states[stateName], \"Attempted changing to an invalid state.\");\n\t\tif (this.currentState) this.currentState.stop();\n\t\tthis.currentState = this.states[stateName];\n\t\tthis.currentState.start(params);\n\t}\n}\n\n//# sourceURL=webpack:///./app/js/classes/StateMachine.js?");

/***/ }),

/***/ "./app/js/main.js":
/*!************************!*\
  !*** ./app/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_StateMachine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/StateMachine */ \"./app/js/classes/StateMachine.js\");\n\n\nconst GAME_WIDTH = 23;\nconst GAME_HEIGHT = 23;\n\nvar titleState = new TitleState();\nvar gStateMachine = new _classes_StateMachine__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\"title\": titleState});\n\n//TODO: socket.io integration\n//var socket = io();\n\nvar game_display = new ROT.Display({\n\twidth: GAME_WIDTH, \n\theight: GAME_HEIGHT,\n\tforceSquareRatio: true,\n\tbg: '#111'\n});\n\nvar game_console = new ROT.Display({\n\twidth: 40,\n\theight: 8,\n\tbg: '#151515'\n});\n\n\t// *** Program Start *** //\nwindow.addEventListener('load', function () {\n\tdocument.getElementById('game_display').appendChild(game_display.getContainer());\n\tdocument.getElementById('game_console').appendChild(game_console.getContainer());\n\n\tgStateMachine.change('title');\n\tconsole.log('Game initialized');\n});\n\n// update interface on keydown/keypress\nwindow.addEventListener(\"keydown\", function(e) {\n\tgStateMachine.update(e.keyCode);\n});\n\n//TODO: update game on socket message from server\n\n//# sourceURL=webpack:///./app/js/main.js?");

/***/ })

/******/ });