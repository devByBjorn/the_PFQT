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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/favoriteQoute.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/actions/removeQoutes.js":
/*!****************************************!*\
  !*** ./src/js/actions/removeQoutes.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Remove qoutes \nvar removeQoutes = function removeQoutes(storageQoutes, id) {\n  var storageIndex = storageQoutes.findIndex(function (storageQoute) {\n    return storageQoute.id === id;\n  });\n\n  if (storageIndex > -1) {\n    storageQoutes.splice(storageIndex, 1);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (removeQoutes);\n\n//# sourceURL=webpack:///./src/js/actions/removeQoutes.js?");

/***/ }),

/***/ "./src/js/actions/renderQoutes.js":
/*!****************************************!*\
  !*** ./src/js/actions/renderQoutes.js ***!
  \****************************************/
/*! exports provided: renderQoutes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderQoutes\", function() { return renderQoutes; });\n// render qoutes\nvar renderQoutes = function renderQoutes(storageQoutes, currentQouteDOM, id) {\n  document.getElementById(id).innerHTML = '';\n  return storageQoutes.map(function (qoute) {\n    var qoutes = currentQouteDOM(qoute);\n    document.getElementById(id).appendChild(qoutes);\n  });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderQoutes);\n\n//# sourceURL=webpack:///./src/js/actions/renderQoutes.js?");

/***/ }),

/***/ "./src/js/actions/storageActions.js":
/*!******************************************!*\
  !*** ./src/js/actions/storageActions.js ***!
  \******************************************/
/*! exports provided: getQoutes, favoriteQoutes, createdQoutes, saveQoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getQoutes\", function() { return getQoutes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"favoriteQoutes\", function() { return favoriteQoutes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createdQoutes\", function() { return createdQoutes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saveQoutes\", function() { return saveQoutes; });\n // get qoutes from localStorage if any\n\nvar getQoutes = function getQoutes(item) {\n  var qoutesJSON = localStorage.getItem(item);\n\n  try {\n    return qoutesJSON ? JSON.parse(qoutesJSON) : [];\n  } catch (e) {\n    return [];\n  }\n};\nvar favoriteQoutes = getQoutes('favoriteQoutes');\nvar createdQoutes = getQoutes('createdQoutes'); // Save qoute \n\nvar saveQoutes = function saveQoutes(storageQoutes, item) {\n  return localStorage.setItem(item, JSON.stringify(storageQoutes));\n};\n\n//# sourceURL=webpack:///./src/js/actions/storageActions.js?");

/***/ }),

/***/ "./src/js/favoriteQoute.js":
/*!*********************************!*\
  !*** ./src/js/favoriteQoute.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions_storageActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions/storageActions */ \"./src/js/actions/storageActions.js\");\n/* harmony import */ var _actions_removeQoutes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions/removeQoutes */ \"./src/js/actions/removeQoutes.js\");\n/* harmony import */ var _actions_renderQoutes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions/renderQoutes */ \"./src/js/actions/renderQoutes.js\");\n\n\n\n\n\n\nvar favoriteQouteDOM = function favoriteQouteDOM(qoute) {\n  // Container div\n  var qouteEl = document.createElement('div');\n  qouteEl.setAttribute('class', 'qoute-container');\n  qouteEl.setAttribute('id', qoute.id); // Qoute Text\n\n  var qouteText = document.createElement('h3');\n  qouteText.innerHTML = qoute.qouteText;\n  qouteText.setAttribute('class', 'favorite-qoute');\n  qouteEl.appendChild(qouteText); // Button container div\n\n  var buttonContainer = document.createElement('div');\n  buttonContainer.setAttribute('class', 'button-container');\n  qouteEl.appendChild(buttonContainer); // Remove button\n\n  var removeButton = document.createElement('button');\n  removeButton.innerHTML = '<span>&times;</span>';\n  removeButton.setAttribute('class', 'delete');\n  qouteEl.appendChild(removeButton);\n  removeButton.addEventListener('click', function () {\n    Object(_actions_removeQoutes__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_actions_storageActions__WEBPACK_IMPORTED_MODULE_0__[\"favoriteQoutes\"], qoute.id);\n    Object(_actions_storageActions__WEBPACK_IMPORTED_MODULE_0__[\"saveQoutes\"])(_actions_storageActions__WEBPACK_IMPORTED_MODULE_0__[\"favoriteQoutes\"], 'favoriteQoutes');\n    Object(_actions_renderQoutes__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_actions_storageActions__WEBPACK_IMPORTED_MODULE_0__[\"favoriteQoutes\"], favoriteQouteDOM, 'favorite-qoutes');\n  });\n  return qouteEl;\n};\n\nwindow.addEventListener('storage', function (e) {\n  if (e.key === 'favoriteQoutes') {\n    favoriteQoutes = JSON.parse(e.newValue);\n    Object(_actions_renderQoutes__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(favoriteQoutes, favoriteQouteDOM, 'favorite-qoutes');\n  }\n});\nwindow.addEventListener('load', function () {\n  Object(_actions_renderQoutes__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_actions_storageActions__WEBPACK_IMPORTED_MODULE_0__[\"favoriteQoutes\"], favoriteQouteDOM, 'favorite-qoutes');\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (favoriteQouteDOM);\n\n//# sourceURL=webpack:///./src/js/favoriteQoute.js?");

/***/ })

/******/ });