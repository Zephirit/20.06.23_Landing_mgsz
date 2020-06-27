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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

window.onload = () => {
  const _listeners = () => {
    const forActive = document.querySelectorAll('.for-active');
    forActive.forEach(item => {
      item.onclick = e => {
        // e.preventDefault()
        item.classList.toggle('selected');
      };
    });
  };

  const _burgersListener = () => {
    const brgs = document.querySelectorAll('.brg');
    brgs.forEach(brg => {
      brg.onclick = e => {
        // e.preventDefault()
        brgs.classList.remove('selected');
        brg.classList.add('selected');
      };
    });
  };

  const _tabsListener = () => {
    const tabs = document.querySelectorAll('.tabs');
    tabs.forEach(tabItems => {
      const trgs = tabItems.querySelectorAll('.tbs-trg');
      const itms = tabItems.querySelectorAll('.tbs-itm');
      console.log(trgs, itms);
      trgs.forEach((trg, i) => {
        trg.onclick = () => {
          trgs.forEach(itm => itm.classList.remove('selected'));
          trg.classList.add('selected');
          itms.forEach(itm => itm.classList.remove('selected'));
          itms[i].classList.add('selected');
        };
      });
    });
  };

  const _glide = () => {
    if (document.querySelector('.glide')) {
      new Glide('.glide', {
        type: 'carousel',
        perView: 2,
        gap: 15,
        autoplay: 3000,
        breakpoints: {
          768: {
            perView: 1
          }
        }
      }).mount();
    }

    if (document.querySelector('.clislider')) {
      new Glide('.clislider', {
        type: 'carousel',
        perView: 4,
        gap: 15 // autoplay: 3000,

      }).mount();
    }

    if (document.querySelector('.stockSlider')) {
      new Glide('.stockSlider', {
        type: 'carousel',
        perView: 2,
        gap: 15 // autoplay: 3000,

      }).mount();
    }

    if (document.querySelector('.pdf__2')) {
      new Glide('.pdf__2', {
        perView: 1 // autoplay: 3000,

      }).mount();
    }

    if (document.querySelector('.glide')) {
      new Glide('.pdf--1', {
        type: 'carousel',
        perView: 1,
        gap: 15 // autoplay: 3000,

      }).mount();
    }
  };

  const init = () => {
    _tabsListener();

    _listeners();

    _glide();
  };

  init();
};

/***/ })
/******/ ]);