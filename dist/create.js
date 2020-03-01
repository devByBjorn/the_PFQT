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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/createQoute.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/actions/animation.js":
/*!*************************************!*\
  !*** ./src/js/actions/animation.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n\nvar animation = function animation(el, _animation, duration) {\n  var element = document.querySelector(el);\n\n  if (!element.style.animation) {\n    element.style.animation = \"\".concat(_animation, \" \").concat(duration);\n  } else {\n    element.removeAttribute('style');\n    setTimeout(function () {\n      element.style.animation = \"\".concat(_animation, \" \").concat(duration);\n    }, 30);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (animation);\n\n//# sourceURL=webpack:///./src/js/actions/animation.js?");

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

/***/ "./src/js/createQoute.js":
/*!*******************************!*\
  !*** ./src/js/createQoute.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions/animation */ \"./src/js/actions/animation.js\");\n/* harmony import */ var _actions_storageActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions/storageActions */ \"./src/js/actions/storageActions.js\");\n/* harmony import */ var _uuidv4_uuidv4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../uuidv4/uuidv4 */ \"./src/uuidv4/uuidv4.js\");\n/* harmony import */ var _uuidv4_uuidv4__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_uuidv4_uuidv4__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n //Pushing data to createdQoutes and displaying created qoute to screen\n\ndocument.querySelector('#add-created').addEventListener('click', function (e) {\n  e.preventDefault();\n  var text = document.querySelector('#qoute-text');\n  var sign = document.querySelector('#signature');\n\n  if (text.value === \"\") {\n    Object(_actions_animation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('#qoute-text', 'shake', '1.5s');\n    return;\n  } else if (sign.value === \"\") {\n    Object(_actions_animation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('#signature', 'shake', '1.5s');\n    return;\n  } else {\n    var qouteId = _uuidv4_uuidv4__WEBPACK_IMPORTED_MODULE_2___default()();\n    _actions_storageActions__WEBPACK_IMPORTED_MODULE_1__[\"createdQoutes\"].unshift({\n      qouteText: \"\\\"\".concat(text.value, \"\\\"\"),\n      signature: \"-\".concat(sign.value),\n      id: qouteId\n    });\n    text.value = \"\";\n    sign.value = \"\";\n    Object(_actions_storageActions__WEBPACK_IMPORTED_MODULE_1__[\"saveQoutes\"])(_actions_storageActions__WEBPACK_IMPORTED_MODULE_1__[\"createdQoutes\"], 'createdQoutes');\n    Object(_actions_animation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('#qoute-text', 'bump', '1s');\n    Object(_actions_animation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('.blink', 'blink', '2s');\n  }\n});\n\n//# sourceURL=webpack:///./src/js/createQoute.js?");

/***/ }),

/***/ "./src/uuidv4/uuidv4.js":
/*!******************************!*\
  !*** ./src/uuidv4/uuidv4.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;function _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n!function (r) {\n  if (\"object\" == ( false ? undefined : _typeof(exports)) && \"undefined\" != typeof module) module.exports = r();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (r),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else { var e; }\n}(function () {\n  return function r(e, n, t) {\n    function o(f, u) {\n      if (!n[f]) {\n        if (!e[f]) {\n          var a = \"function\" == typeof require && require;\n          if (!u && a) return require(f, !0);\n          if (i) return i(f, !0);\n          var d = new Error(\"Cannot find module '\" + f + \"'\");\n          throw d.code = \"MODULE_NOT_FOUND\", d;\n        }\n\n        var p = n[f] = {\n          exports: {}\n        };\n        e[f][0].call(p.exports, function (r) {\n          var n = e[f][1][r];\n          return o(n ? n : r);\n        }, p, p.exports, r, e, n, t);\n      }\n\n      return n[f].exports;\n    }\n\n    for (var i = \"function\" == typeof require && require, f = 0; f < t.length; f++) {\n      o(t[f]);\n    }\n\n    return o;\n  }({\n    1: [function (r, e, n) {\n      function t(r, e) {\n        var n = e || 0,\n            t = o;\n        return t[r[n++]] + t[r[n++]] + t[r[n++]] + t[r[n++]] + \"-\" + t[r[n++]] + t[r[n++]] + \"-\" + t[r[n++]] + t[r[n++]] + \"-\" + t[r[n++]] + t[r[n++]] + \"-\" + t[r[n++]] + t[r[n++]] + t[r[n++]] + t[r[n++]] + t[r[n++]] + t[r[n++]];\n      }\n\n      for (var o = [], i = 0; i < 256; ++i) {\n        o[i] = (i + 256).toString(16).substr(1);\n      }\n\n      e.exports = t;\n    }, {}],\n    2: [function (r, e, n) {\n      var t = \"undefined\" != typeof crypto && crypto.getRandomValues.bind(crypto) || \"undefined\" != typeof msCrypto && msCrypto.getRandomValues.bind(msCrypto);\n\n      if (t) {\n        var o = new Uint8Array(16);\n\n        e.exports = function () {\n          return t(o), o;\n        };\n      } else {\n        var i = new Array(16);\n\n        e.exports = function () {\n          for (var r, e = 0; e < 16; e++) {\n            0 === (3 & e) && (r = 4294967296 * Math.random()), i[e] = r >>> ((3 & e) << 3) & 255;\n          }\n\n          return i;\n        };\n      }\n    }, {}],\n    3: [function (r, e, n) {\n      function t(r, e, n) {\n        var t = e && n || 0;\n        \"string\" == typeof r && (e = \"binary\" === r ? new Array(16) : null, r = null), r = r || {};\n        var f = r.random || (r.rng || o)();\n        if (f[6] = 15 & f[6] | 64, f[8] = 63 & f[8] | 128, e) for (var u = 0; u < 16; ++u) {\n          e[t + u] = f[u];\n        }\n        return e || i(f);\n      }\n\n      var o = r(\"./lib/rng\"),\n          i = r(\"./lib/bytesToUuid\");\n      e.exports = t;\n    }, {\n      \"./lib/bytesToUuid\": 1,\n      \"./lib/rng\": 2\n    }]\n  }, {}, [3])(3);\n});\n\n//# sourceURL=webpack:///./src/uuidv4/uuidv4.js?");

/***/ })

/******/ });