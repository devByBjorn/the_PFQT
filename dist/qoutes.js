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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/qoutes.js");
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

/***/ "./src/js/actions/pushQoutes.js":
/*!**************************************!*\
  !*** ./src/js/actions/pushQoutes.js ***!
  \**************************************/
/*! exports provided: vincent, jules, mia, butch, theWolf, marcellusWallace, jimmie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"vincent\", function() { return vincent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"jules\", function() { return jules; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mia\", function() { return mia; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"butch\", function() { return butch; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"theWolf\", function() { return theWolf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"marcellusWallace\", function() { return marcellusWallace; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"jimmie\", function() { return jimmie; });\n\n\nvar PulpFiction = function PulpFiction(name) {\n  this.name = name;\n  this.qoute = [];\n\n  this.pushQoute = function (qoute) {\n    return this.qoute.push(\"<span>\\\"\".concat(qoute, \"\\\"</span><span>-\").concat(this.name, \"</span>\"));\n  };\n}; // Push qoutes for each movie character. I need to learn how to create a database, this is time consuming. \n\n\nvar vincent = new PulpFiction('vincent');\nvincent.pushQoute('Aw, man. I shot Marvin in the face.');\nvincent.pushQoute('Marvin, what do you make of all of this?');\nvincent.pushQoute('Jules, did you ever hear the philosophy that once a man admits that he\\'s wrong that he is immediately forgiven for all wrongdoings? Have you ever heard that?');\nvincent.pushQoute('That\\'s a pretty fucking good milkshake.');\nvincent.pushQoute('I was washing \\'em. But this shit\\'s hard to get off. Maybe if I had lathered or something, I coulda done a better job.');\nvincent.pushQoute('Well I didn\\'t mean to do it, it was an accident!');\nvincent.pushQoute('Just chill out, man! I told you it was an accident! You probably, you went over a bump or something...');\nvincent.pushQoute('Would you give a guy a foot massage?');\nvincent.pushQoute('So you mean I gotta stab her in te heart tree times?');\nvincent.pushQoute('All right, it was a miracle. Can we go now?');\nvincent.pushQoute('I don\\'t watch TV.');\nvincent.pushQoute('Now, if you\\'ll excuse me, I\\'m going to go home and have a heart attack.');\nvincent.pushQoute('It\\'s not the same, it\\'s the same ballpark.');\nvincent.pushQoute('I think it looks like a wax museum with a pulse.');\nvincent.pushQoute('And how long do you intend to \\'walk the earth\\'?');\nvincent.pushQoute('You\\'re really thinking about quitting?');\nvincent.pushQoute('You know what they put on French fries in Holland instead of ketchup?');\nvincent.pushQoute('I\\'ve seen \\'em do it, man. They fuckin\\' drown \\'em in that shit.');\nvincent.pushQoute('Bacon tastes good; pork chops taste good.');\nvincent.pushQoute('We should have fucking shotguns.');\nvincent.pushQoute('Ain\\'t hungry.');\nvincent.pushQoute('And in Paris, you can buy a beer at McDonald\\'s.');\nvincent.pushQoute('And you know what they call a Quarter Pounder with Cheese in Paris?');\nvincent.pushQoute('Nah, man, they got the metric system. They wouldn\\'t know what the fuck a Quarter Pounder is.');\nvincent.pushQoute('They call it a \\'Royale with cheese.\\'');\nvincent.pushQoute('I don\\'t know, I didn\\'t go in a Burger King.');\nvincent.pushQoute('Yeah baby, you\\'d dig it the most.');\nvincent.pushQoute('I ain\\'t saying it\\'s right. But you\\'re saying a foot massage don\\'t mean nothing, and I\\'m saying it does.');\nvincent.pushQoute('That\\'s a bold statement.');\nvincent.pushQoute('Are you Jewish?');\nvincent.pushQoute('Yeah, but do you consider a dog to be a filthy animal?');\nvar jules = new PulpFiction('jules');\njules.pushQoute('Does he look like a bitch?');\njules.pushQoute('Why the fuck did you do that?');\njules.pushQoute('English, motherfucker! Do you speak it!');\njules.pushQoute('Shut the fuck up, fatman! This ain\\'t none of your goddamn business!');\njules.pushQoute('What does Marcellus Wallace look like?');\njules.pushQoute('\\'What\\' ain\\'t no country I ever heard of, do they speak English in \\'What\\'?');\njules.pushQoute('English, mother fucker, do you speak it?');\njules.pushQoute('You ever read the Bible, Brett?');\njules.pushQoute('Oh, man, I will never forgive your ass for this shit. This is some fucked-up repugnant shit');\njules.pushQoute('Get the fuck out my face with that shit! The motherfucker that said that shit never had to pick up itty-bitty pieces of skull on account of your dumb ass.');\njules.pushQoute('Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I\\'m in a transitional period so I don\\'t wanna kill you, I wanna help you.');\njules.pushQoute('Say \\'what\\' again. Say \\'what\\' again, I dare you, I double dare you motherfucker, say what one more Goddamn time!');\njules.pushQoute('Oh I\\'m sorry, did I break your concentration');\njules.pushQoute('If my answers frighten you then you should cease asking scary questions.');\njules.pushQoute('You read the bible, Ringo?');\njules.pushQoute('God came down from heaven, and stopped these mother fucking bullets.');\njules.pushQoute('I used the same fuckin\\' soap you did and when I got finished, the towel didn\\'t look like no goddamn Maxi-Pad!');\njules.pushQoute('Ah man, I\\'ve seen some crazy-ass shit in my time but this...');\njules.pushQoute('Go on!');\njules.pushQoute('Look I\\'m starting to get a little pissed off here.');\njules.pushQoute('Fuck you.');\njules.pushQoute('Sewer rat might taste like pumpkin pie but I\\'d never know cuz I wouldn\\'t eat te filthy motherfucker.');\njules.pushQoute('What happened here was a miracle, and I want you to fucking acknowledge it!');\njules.pushQoute('It\\'s the one that says Bad Motherfucker');\njules.pushQoute('Yeah, but, you are aware that there\\'s an invention called television, and on this invention they show shows, right?');\njules.pushQoute('Say bitch be cool! Tell that fuckin\\' bitch to chill!');\njules.pushQoute('Chill that fuckin\\' bitch out!');\njules.pushQoute('In fact what the fuck am I doing in the back!? You\\'re the motherfucker that should be on brain detail!');\njules.pushQoute('Ain\\'t no fuckin\\' ballpark, neither.');\njules.pushQoute('Now look, maybe your method of massage differs from mine, but you know, touchin\\' his wife\\'s feet and stickin\\' yer tongue in the holiest of holies ain\\'t the same fuckin\\' ballpark. It ain\\'t the same league, it ain\\'t even the same fuckin\\' sport.');\njules.pushQoute('Then why you tryin to fuck him like a bitch?');\njules.pushQoute('Motherfucker do that shit to me, he better paralyze my ass, \\'cause I\\'ll kill the motherfucker, know what I\\'m sayin\\'?');\njules.pushQoute('We should have shotguns for this kind of deal.');\njules.pushQoute('Looks like Vincent and I caught you boys at breakfast. Sorry about that. Whatcha havin\\'');\njules.pushQoute('Hamburgers! The cornerstone of any nutricious breakfast!');\njules.pushQoute('Big Kahuna Burger. That\\'s the Hawaiian burger joint.');\njules.pushQoute('This is a tasty burger!');\njules.pushQoute('They don\\'t call it a Quarter Pounder with Cheese?');\njules.pushQoute('\\'Le Big Mac!\\' What do they call a Whopper?');\njules.pushQoute('I don\\'t wanna hear about no motherfuckin\\' ifs. All I wanna hear from your ass is, You ain\\'t got no problem, Jules. I\\'m on the motherfucker. Go back in there, chill them niggers out and wait for the calvary which should be coming directly.');\njules.pushQoute('Check out the big brain on Brett! You\\'re a smart motherfuckerer.');\njules.pushQoute('You, Flock-of-Seagulls, know why we\\'re here?');\njules.pushQoute('I don\\'t remember asking you a god damn thing!');\njules.pushQoute('My name is Pitt, and your ass ain\\'t talking your way outta this shit.');\njules.pushQoute('You sending the Wolf?');\njules.pushQoute('I wouldn\\'t go so far as to call a dog filthy, but they\\'re definitely dirty. A dog\\'s got personality. Personality goes a long way.');\njules.pushQoute('What is a miracle, Vincent?');\njules.pushQoute('I wouldn\\'t go so far as to call the brother fat. He\\'s got a weight problem.  What\\'s the nigger gonna do, he\\'s Samoan.');\njules.pushQoute('Don\\'t be tellin\\' me about foot massages – I\\'m the foot fuckin\\' master.');\nvar mia = new PulpFiction('mia');\nmia.pushQoute('Why do we feel it\\'s necessary to yak about bullshit in order to be comfortable?');\nmia.pushQoute('That\\'s when you know you found somebody special. When you can just shut the fuck up for a minute, and comfortably share silence.');\nvar butch = new PulpFiction('butch');\nbutch.pushQoute('That\\'s how you\\'re gonna beat \\'em, Butch. They keep underestimating you.');\nbutch.pushQoute('Zed\\'s dead, baby. Zed\\'s dead.');\nbutch.pushQoute('It\\'s a Chopper baby.');\nbutch.pushQoute('I meant, what now between me and you');\nbutch.pushQoute('So we cool?');\nbutch.pushQoute('Sorry, baby. I had to crash that Honda.');\nbutch.pushQoute('I\\'m American, honey. Our names don\\'t mean shit.');\nbutch.pushQoute('I didn\\'t call you a mongoloid, I called you a retard.');\nbutch.pushQoute('You were looking in the mirror and you decided you want some pot?');\nvar theWolf = new PulpFiction('the wolf');\ntheWolf.pushQoute('Because you are a character doesn\\'t mean the you have character.');\ntheWolf.pushQoute('Now let\\'s not start sucking each others dicks just yet.');\ntheWolf.pushQoute('Toluca Lake. That\\'s thirty minutes away. I\\'ll be there in ten.');\ntheWolf.pushQoute('I\\'m Winston Wolfe. I solve problems.');\ntheWolf.pushQoute('Rather you than me, gentlemen. Rather you than me.');\ntheWolf.pushQoute('Pretty please, with sugar on top; clean the fucking car!');\ntheWolf.pushQoute('How about you, Jimmy? Are you an oak man?');\ntheWolf.pushQoute(' I think fast, I talk fast, and I need you two guys to act fast if you want to get out of this.');\nvar marcellusWallace = new PulpFiction('marcellus wallace');\nmarcellusWallace.pushQoute(' You see, this profession is filled to the brim with unrealistic motherfuckers. Motherfuckers who thought their ass would age like wine. If you mean it turns to vinegar, it does. If you mean it gets better with age, it don\\'t.');\nmarcellusWallace.pushQoute('Motherfucker!');\nmarcellusWallace.pushQoute('I\\'m gonna get medevil on your ass!');\nmarcellusWallace.pushQoute('Fuck pride! Pride only hurts, it never helps. You fight through that shit');\nmarcellusWallace.pushQoute('You hear me talkin\\', hillbilly boy? I ain\\'t through with you by a damn sight. I\\'ma get medieval on your ass.');\nmarcellusWallace.pushQoute('Nah, man. I\\'m pretty fuckin\\' far from okay.');\nmarcellusWallace.pushQoute('What now? I\\'ll tell you what now. I\\'m gonna call a couple of hard-pipe hittin\\' niggas to go to work on the homes here with a pair of pliers and a blow-torch.');\nmarcellusWallace.pushQoute('Oh, that \\'what now\\'. I tell you what now between me and you. There is no \\'me and you\\'. Not no more.');\nmarcellusWallace.pushQoute('Two things: one, don\\'t tell nobody about this. This shit is between me, you, and Mr. soon-to-be-living-the-rest-of-his-short-ass-life-in-agonizing-pain rapist here. It ain\\'t nobody else\\'s business. Two, you leave town tonight, right now, and when you gone, you stay gone, or you be gone.');\nmarcellusWallace.pushQoute('You lost all your L.A. privileges.');\nmarcellusWallace.pushQoute('Yeah, we cool.');\nmarcellusWallace.pushQoute(' You ain\\'t got no problem, Jules. I\\'m on the motherfucker. Go back in there, chill them niggers out and wait for the Wolf who should be coming directly.');\nvar jimmie = new PulpFiction('jimmie');\njimmie.pushQoute('You don\\'t have to tell me how good my coffee is okay, I\\'m the one who buys it, I know how good it is..');\njimmie.pushQoute('Oak\\'s nice.');\njimmie.pushQoute('There\\'s nothing that you\\'re gonna say that\\'s gonna make me forget that I love my wife, is there?! ');\n\n//# sourceURL=webpack:///./src/js/actions/pushQoutes.js?");

/***/ }),

/***/ "./src/js/actions/qouteObj.js":
/*!************************************!*\
  !*** ./src/js/actions/qouteObj.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pushQoutes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pushQoutes */ \"./src/js/actions/pushQoutes.js\");\n\n\n // Add each name in format name.qoute to the allQoutes property, after pushing qoutes for that name. Like vincent.qoute\n\nvar qouteObj = {\n  allQoutes: [_pushQoutes__WEBPACK_IMPORTED_MODULE_0__[\"jules\"].qoute.concat(_pushQoutes__WEBPACK_IMPORTED_MODULE_0__[\"vincent\"].qoute, _pushQoutes__WEBPACK_IMPORTED_MODULE_0__[\"mia\"].qoute, _pushQoutes__WEBPACK_IMPORTED_MODULE_0__[\"theWolf\"].qoute, _pushQoutes__WEBPACK_IMPORTED_MODULE_0__[\"butch\"].qoute, _pushQoutes__WEBPACK_IMPORTED_MODULE_0__[\"marcellusWallace\"].qoute, _pushQoutes__WEBPACK_IMPORTED_MODULE_0__[\"jimmie\"].qoute)],\n  randomqoute: [],\n  getShuffle: function getShuffle() {\n    var arrQoutes = this.allQoutes[0];\n    var num = Math.floor(Math.random() * arrQoutes.length - 5);\n    var qoute = arrQoutes.splice(num, 1);\n    arrQoutes.push(qoute);\n  },\n  getRandomQoute: function getRandomQoute() {\n    this.getShuffle();\n    return this.allQoutes[Math.floor(this.allQoutes.length - 1)];\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (qouteObj);\n\n//# sourceURL=webpack:///./src/js/actions/qouteObj.js?");

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

/***/ "./src/js/qoutes.js":
/*!**************************!*\
  !*** ./src/js/qoutes.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions/animation */ \"./src/js/actions/animation.js\");\n/* harmony import */ var _actions_storageActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions/storageActions */ \"./src/js/actions/storageActions.js\");\n/* harmony import */ var _actions_qouteObj__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions/qouteObj */ \"./src/js/actions/qouteObj.js\");\n/* harmony import */ var _uuidv4_uuidv4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../uuidv4/uuidv4 */ \"./src/uuidv4/uuidv4.js\");\n/* harmony import */ var _uuidv4_uuidv4__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_uuidv4_uuidv4__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n // Generate new qoute on click\n\nvar generateQoute = function generateQoute() {\n  var qoute = document.querySelector('#the-qoute');\n  qoute.innerHTML = _actions_qouteObj__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getRandomQoute().slice(-1)[0];\n};\n\ndocument.querySelector('#qoute-button').addEventListener('click', generateQoute); // Generate new qoute on load\n\nwindow.addEventListener('load', generateQoute); // Save favorite to local storage\n\ndocument.querySelector('#like-button').addEventListener('click', function () {\n  var favorite = document.querySelector('#the-qoute').innerHTML;\n  var favoriteId = _uuidv4_uuidv4__WEBPACK_IMPORTED_MODULE_3___default()();\n  var json = localStorage.getItem('favoriteQoutes');\n  var qoutes = JSON.parse(json);\n\n  if (qoutes) {\n    var duplicate = qoutes.find(function (qoute) {\n      return qoute.qouteText === favorite;\n    });\n\n    if (duplicate) {\n      Object(_actions_animation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('#qoute-button', 'shake', '1s');\n      return;\n    }\n  }\n\n  _actions_storageActions__WEBPACK_IMPORTED_MODULE_1__[\"favoriteQoutes\"].unshift({\n    qouteText: favorite,\n    id: favoriteId\n  });\n  Object(_actions_animation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('#the-qoute', 'bump', '1s');\n  Object(_actions_animation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('.blink', 'blink', '2s');\n  Object(_actions_storageActions__WEBPACK_IMPORTED_MODULE_1__[\"saveQoutes\"])(_actions_storageActions__WEBPACK_IMPORTED_MODULE_1__[\"favoriteQoutes\"], 'favoriteQoutes');\n});\n\n//# sourceURL=webpack:///./src/js/qoutes.js?");

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