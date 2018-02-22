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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var cardJSON = __webpack_require__(1)
console.log(cardJSON)
var app = new Vue({
    el: '#app',
    data: {
        cards: cardJSON,
        msg: "hello"
    }
})

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {"disorders":[{"name":"Aichmophobia","desc":"You cannot activate or <b>depart</b> with axes, swords, spears, daggers, scythes, or katars in your gear grid."},{"name":"Anxiety","desc":"At the start of each showdown, gain the <b>priority target</b> token unless you have <b>stinky</b> gear in your gear grid."},{"name":"Apathetic","desc":"You cannot use or gain survival. You cannot gain courage. Cure this disorder if you have 8+ understanding."},{"name":"Binge Eating","desc":"You cannot <b>depart</b> unless you have <b>consumable</b> gear in your gear grid. You must <b>consume</b> if a choice to <b>consume</b> arises."},{"name":"Coprolalia","desc":"All your gear is <b>noisy</b>. You are always a threat unless you are knocked down, even if an effect says otherwise."},{"name":"Fear of the Dark","desc":"You retire.<br/>If you gain this disorder during a hunt or showdown, you put on a brave face until you return to the settlement, vowing never to leave the Lantern Hoard again."},{"name":"Hemophobia","desc":"During the showdown, whenever a survivor (including you) gains a bleeding token, you are knocked down."},{"name":"Hoarder","desc":"Whenever you are a <b>returning</b> survivor, archive 1 resource gained from the last showdown and gain +1 courage."},{"name":"Honorable","desc":"You cannot attack a monster from its blind spot or if it is knocked down."},{"name":"Hyperactive","desc":"During the showdown, you must move at least 1 space every round."},{"name":"Immortal","desc":"While you are insane, convert all damage dealt to your hit locations to brain damage.<br/>You are so busy reveling in your own glory that you cannot spend survival while insane."},{"name":"Indecision","desc":"If you are the event revealer of hunt events that call on you to make a roll, roll twice and use the lower result."},{"name":"Monster Panic","desc":"Whenever you suffer brain damage from an <b>Intimidate</b> action, suffer 1 additional brain damage."},{"name":"Post-Traumatic Stress","desc":"Next settlement phase, you do not contribute or participate in any endeavors. Skip the next hunt to recover."},{"name":"Prey","desc":"You may not spend survival unless you are insane."},{"name":"Quixotic","desc":"If you are insane when you <b>depart</b>, gain +1 survival and +1 Strength token."},{"name":"Rageholic","desc":"Whenever you suffer a severe injury, also suffer the <b>frenzy</b> brain trauma."},{"name":"Secretive","desc":"When you are a <b>returning survivor</b>, you quickly become preoccuiped with your own affairs. You must skip the next hunt to deal with them."},{"name":"Seizures","desc":"During the showdown, whenever you suffer damage to your head location, you are knocked down."},{"name":"Squeamish","desc":"You cannot <b>depart</b> with any <b>stinky</b> gear in your gear grid. If a status or effect would cause you to become stinky, lose all your survival."},{"name":"Traumatized","desc":"Whenever you end your act adjacent to a monster, you are knocked down."},{"name":"Vestiphobia","desc":"You cannot wear armor at the body location. If you are wearing armor at the body location when you gain this disorder, archive it as you tear it off your person!"},{"name":"Weak Spot","desc":"When you gain this disorder, roll a random hit location and record it. You cannot <b>depart</b> unless you have armor at this hit location."}],"fa":[{"desc":"All melee weapons in your gear grid gain <b>paired</b>. Ambidexterous cannot be used if there are any shields, two-handed or heavy gear in your gear grid.","name":"Ambidexterous"},{"desc":"Once per showdown, you may spend <font class='kdm_font'>a</font> to suffer <b>bash</b> and the <b>frenzy</b> brain trauma.","name":"Berserker"},{"desc":"While you have 3 or more bleeding tokens, gain +1 strength and +1 accuracy.","name":"Clutch Fighter"},{"desc":"On a <b>perfect hit</b>, make 1 additional attack roll.","name":"Combo Master"},{"desc":"On a <b>Perfect hit</b>, gain +1 insanity.","name":"Crazed"},{"desc":"Whenever you are hit, after hit locations are rolled, you may change 1 result to the arms hit location.","name":"Crossarm Block"},{"desc":"During your act, once per round, you may spend <font class='kdm_font'>a</font> to gain <font class='kdm_font'>c</font>.","name":"Double Dash"},{"desc":"You may <b>dodge</b> 1 additional time per round.","name":"Extra Sense"},{"desc":"While you are the only survivor on the showdown board, you may not gain bleeding tokens or be knocked down.","name":"Last Man Standing"},{"desc":"<b>Encourage</b> a survivor, they gain +1 speed token until end of the round.<br/>Once per hunt phase another survivor can use your understanding and courage to resolve a hunt or story event.","name":"Leader"},{"desc":"On a <b>Perfect hit</b>, gain +2 Strength until the end of the attack.","name":"Mighty Strike"},{"desc":"Your <b>Fist & Tooth</b> attacks gain +1 Accuracy, +1 Strength and <b>Savage</b>.","name":"Monster Claw Style"},{"desc":"Once per showdown, you may spend <font class='kdm_font'>a</font> to have all non-deaf survivors gain +2 insanity.<br/>When you die, you <b>encourage</b> all survivors with your last words.","name":"Orator of Death"},{"desc":"On <b>Arrival</b>, gain +1 evasion token. When you are knocked down, if you don't have an instrument in your gear grid, remove all your +1 evasion tokens.<br/>Rhythm Chaser cannot be used if there is any heavy gear in your grid.","name":"Rhythm Chaser"},{"desc":"During the showdown setup, after placing terrain, you may add a <b>Giant Stone Face</b> or a <b>Toppled Pillar</b> terrain card to the showdown board.","name":"Strategist"},{"desc":"Whenever you gain survival during the showdown phase, gain 1 additional survival.","name":"Thrill Seeker"},{"desc":"Your attack roll is a <b>perfect hit</b> on a result of a 9 or 10.<br/>You cannot use Timeless Eye if you have the <b>blind</b> severe head injury.","name":"Timeless Eye"},{"desc":"When rolling on a severe injury table, unless you roll a 1, add +1 to the result. (This does not include brain trauma. The result total cannot exceed 10.)","name":"Tough"},{"desc":"When something would <b>collide</b> with you, roll 1d10. On a result of 6+, you successfully tumble out of harm's way. Instead, place your survivor standing on the closest free space outside of the collision path.","name":"Tumble"},{"desc":"It takes 7 bleeding tokens to kill you.","name":"Unconscious Fighter"}]}

/***/ })
/******/ ]);