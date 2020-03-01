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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/createdQoutes.js");
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

/***/ "./src/js/createdQoutes.js":
/*!*********************************!*\
  !*** ./src/js/createdQoutes.js ***!
  \*********************************/
/*! exports provided: createdQouteDOM, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createdQouteDOM\", function() { return createdQouteDOM; });\n/* harmony import */ var _actions_storageActions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions/storageActions.js */ \"./src/js/actions/storageActions.js\");\n/* harmony import */ var _actions_removeQoutes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions/removeQoutes */ \"./src/js/actions/removeQoutes.js\");\n/* harmony import */ var _actions_renderQoutes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions/renderQoutes */ \"./src/js/actions/renderQoutes.js\");\n\n\n\n\n // DOM structure of qoute container\n\nvar createdQouteDOM = function createdQouteDOM(qoute) {\n  // Container div\n  var qouteEl = document.createElement('div');\n  qouteEl.setAttribute('class', 'qoute-container');\n  qouteEl.setAttribute('id', qoute.id); // Qoute Text\n\n  var qouteText = document.createElement('h3');\n  qouteText.setAttribute('class', 'created-qoute');\n  qouteText.setAttribute('contenteditable', 'true');\n  qouteEl.appendChild(qouteText); // Signature text\n\n  var nameSignature = document.createElement('p');\n  nameSignature.setAttribute('class', 'signature');\n  nameSignature.setAttribute('contenteditable', 'true');\n  qouteEl.appendChild(nameSignature); // Remove button\n\n  var removeButton = document.createElement('button');\n  removeButton.innerHTML = '<span>&times;</span>';\n  removeButton.setAttribute('class', 'delete');\n  qouteEl.appendChild(removeButton);\n  removeButton.addEventListener('click', function () {\n    Object(_actions_removeQoutes__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_actions_storageActions_js__WEBPACK_IMPORTED_MODULE_0__[\"createdQoutes\"], qoute.id);\n    Object(_actions_storageActions_js__WEBPACK_IMPORTED_MODULE_0__[\"saveQoutes\"])(_actions_storageActions_js__WEBPACK_IMPORTED_MODULE_0__[\"createdQoutes\"], 'createdQoutes');\n    Object(_actions_renderQoutes__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_actions_storageActions_js__WEBPACK_IMPORTED_MODULE_0__[\"createdQoutes\"], createdQouteDOM, 'created-qoutes');\n  }); // Save button\n\n  var saveEditButton = document.createElement('button');\n  saveEditButton.setAttribute('class', 'save-edit');\n  saveEditButton.textContent = 'save edit';\n  qouteEl.appendChild(saveEditButton); // save and render contenteditable on save button click\n\n  saveEditButton.addEventListener('click', function (e) {\n    saveEdited(qouteEl, qoute);\n    Object(_actions_storageActions_js__WEBPACK_IMPORTED_MODULE_0__[\"saveQoutes\"])(_actions_storageActions_js__WEBPACK_IMPORTED_MODULE_0__[\"createdQoutes\"], 'createdQoutes');\n    Object(_actions_renderQoutes__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_actions_storageActions_js__WEBPACK_IMPORTED_MODULE_0__[\"createdQoutes\"], createdQouteDOM, 'created-qoutes');\n  }); // Default text for qoute if no value\n\n  qoute.qouteText === \"\\\"\\\"\" ? qouteText.textContent = '\"Click to edit\"' : qouteText.textContent = \"\".concat(qoute.qouteText); // Default text for signature if no value\n\n  qoute.signature === '-' ? nameSignature.textContent = '- Signature' : nameSignature.textContent = qoute.signature;\n  return qouteEl;\n}; // Saving edited qoutes\n\nvar saveEdited = function saveEdited(element, qoute) {\n  var editEl = document.getElementById(\"\".concat(element.id));\n  var textEdit = editEl.childNodes[0].textContent;\n  var signEdit = editEl.childNodes[1].textContent;\n  qoute.qouteText = \"\".concat(textEdit);\n  qoute.signature = signEdit;\n}; //Make sure changes happen simultaneous on multiple windows\n\n\nwindow.addEventListener('storage', function (e) {\n  if (e.key === 'createdQoutes') {\n    createdQoutes = JSON.parse(e.newValue);\n    Object(_actions_renderQoutes__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(createdQoutes, createdQouteDOM, 'created-qoutes');\n  }\n});\nwindow.addEventListener('load', function () {\n  Object(_actions_renderQoutes__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_actions_storageActions_js__WEBPACK_IMPORTED_MODULE_0__[\"createdQoutes\"], createdQouteDOM, 'created-qoutes');\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (createdQouteDOM);\n\n//# sourceURL=webpack:///./src/js/createdQoutes.js?");

/***/ })

/******/ });