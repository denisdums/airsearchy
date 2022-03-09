/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Results.js":
/*!***********************************!*\
  !*** ./src/components/Results.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Results": function() { return /* binding */ Results; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Thumbnail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Thumbnail */ "./src/components/Thumbnail.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/dist/index.mjs");
/* harmony import */ var react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-loading-skeleton/dist/skeleton.css */ "./node_modules/react-loading-skeleton/dist/skeleton.css");

const {
  Component
} = wp.element;



class Results extends Component {
  render() {
    if (this.props.search !== '' && this.props.results.length > 0) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
        className: "air-searchy-results"
      }, this.props.results.map(result => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
        key: result.id
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
        href: result.url,
        className: "air-searchy-result"
      }, result.thumbnail ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Thumbnail__WEBPACK_IMPORTED_MODULE_1__.Thumbnail, {
        thumbnail: result.thumbnail
      }) : '', (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "air-searchy-result-text"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, result.title), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("small", null, result.typeLabel))))));
    } else if (this.props.search !== '' && !this.props.loading) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
        className: "air-searchy-no-results-container"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
        className: "air-searchy-no-results-wrapper"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "Pas de r\xE9sultat trouv\xE9 pour \"", this.props.search, "\"")));
    }

    if (this.props.loading) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
        className: "air-searchy-results"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "air-searchy-result"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "air-searchy-result-thumbnail-skeleton air-searchy-thumbnail-container"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3__["default"], null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "air-searchy-result-text air-searchy-result-text-skeleton"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3__["default"], null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("small", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3__["default"], null))))));
    } else return '';
  }

}

/***/ }),

/***/ "./src/components/Searchbar.js":
/*!*************************************!*\
  !*** ./src/components/Searchbar.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Searchbar": function() { return /* binding */ Searchbar; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/search.service */ "./src/services/search.service.js");
/* harmony import */ var _Results__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Results */ "./src/components/Results.js");


const {
  Component
} = wp.element;

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      search: '',
      loading: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "air-searchy-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      placeholder: "Recherche...",
      type: "search",
      className: "air-searchy-input",
      onChange: this.handleChange
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Results__WEBPACK_IMPORTED_MODULE_2__.Results, {
      results: this.state.results,
      search: this.state.search,
      loading: this.state.loading
    }));
  }

  handleChange(_ref) {
    let {
      target
    } = _ref;

    if (target.value === '') {
      this.setState({
        search: target.value
      });
      this.setState({
        results: []
      });
      this.setState({
        loading: false
      });
      return;
    }

    let tempSearch = target.value;
    this.setState({
      search: target.value
    });
    this.setState({
      loading: true
    });
    setTimeout(async () => {
      if (tempSearch !== this.state.search) {
        return;
      }

      const results = await _services_search_service__WEBPACK_IMPORTED_MODULE_1__["default"].getSearchResultsBySearch(this.state.search);
      this.setState({
        results: results
      });
    }, 500);
  }

}

/***/ }),

/***/ "./src/components/Thumbnail.js":
/*!*************************************!*\
  !*** ./src/components/Thumbnail.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Thumbnail": function() { return /* binding */ Thumbnail; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const {
  Component
} = wp.element;
class Thumbnail extends Component {
  render() {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "air-searchy-thumbnail-container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "air-searchy-thumbnail-wrapper"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "air-searchy-thumbnail-image",
      src: this.props.thumbnail
    })));
  }

}

/***/ }),

/***/ "./src/config/api.config.js":
/*!**********************************!*\
  !*** ./src/config/api.config.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const config = {
  apiEndpoint: '/wp-json/react/v1/search/?s='
};
/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ }),

/***/ "./src/factories/result.factory.js":
/*!*****************************************!*\
  !*** ./src/factories/result.factory.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const resultsFactory = {
  RawSearchResultToSearchResult(RawSearchResult) {
    return {
      id: RawSearchResult.id,
      url: RawSearchResult.url,
      thumbnail: RawSearchResult.thumbnail,
      title: RawSearchResult.title,
      type: RawSearchResult.type,
      typeLabel: RawSearchResult.type_label
    };
  }

};
/* harmony default export */ __webpack_exports__["default"] = (resultsFactory);

/***/ }),

/***/ "./src/factories/results.factory.js":
/*!******************************************!*\
  !*** ./src/factories/results.factory.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _result_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./result.factory */ "./src/factories/result.factory.js");

const resultsFactory = {
  RawSearchDataToSearchResults(RawSearchData) {
    return RawSearchData.map(RawSearchResult => {
      return _result_factory__WEBPACK_IMPORTED_MODULE_0__["default"].RawSearchResultToSearchResult(RawSearchResult);
    });
  }

};
/* harmony default export */ __webpack_exports__["default"] = (resultsFactory);

/***/ }),

/***/ "./src/repositories/search.repository.js":
/*!***********************************************!*\
  !*** ./src/repositories/search.repository.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/api.config */ "./src/config/api.config.js");

const postRepository = {
  async getSearchResultsBySearch(search) {
    try {
      const response = await fetch(`${_config_api_config__WEBPACK_IMPORTED_MODULE_0__["default"].apiEndpoint}${search}`);
      return await response.json();
    } catch (err) {
      console.error("error : ", err);
    }
  }

};
/* harmony default export */ __webpack_exports__["default"] = (postRepository);

/***/ }),

/***/ "./src/services/search.service.js":
/*!****************************************!*\
  !*** ./src/services/search.service.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _repositories_search_repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../repositories/search.repository */ "./src/repositories/search.repository.js");
/* harmony import */ var _factories_results_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../factories/results.factory */ "./src/factories/results.factory.js");


const searchService = {
  async getSearchResultsBySearch(search) {
    const RawSearchData = await _repositories_search_repository__WEBPACK_IMPORTED_MODULE_0__["default"].getSearchResultsBySearch(search);
    const SearchResults = _factories_results_factory__WEBPACK_IMPORTED_MODULE_1__["default"].RawSearchDataToSearchResults(RawSearchData);
    return SearchResults;
  }

};
/* harmony default export */ __webpack_exports__["default"] = (searchService);

/***/ }),

/***/ "./node_modules/react-loading-skeleton/dist/skeleton.css":
/*!***************************************************************!*\
  !*** ./node_modules/react-loading-skeleton/dist/skeleton.css ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/style/app.css":
/*!**********************************!*\
  !*** ./src/assets/style/app.css ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "./node_modules/react-loading-skeleton/dist/index.mjs":
/*!************************************************************!*\
  !*** ./node_modules/react-loading-skeleton/dist/index.mjs ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkeletonTheme": function() { return /* binding */ SkeletonTheme; },
/* harmony export */   "default": function() { return /* binding */ Skeleton; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


/**
 * @internal
 */
const SkeletonThemeContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext({});

/* eslint-disable react/no-array-index-key */
const defaultEnableAnimation = true;
// For performance & cleanliness, don't add any inline styles unless we have to
function styleOptionsToCssProperties({ baseColor, highlightColor, width, height, borderRadius, circle, direction, duration, enableAnimation = defaultEnableAnimation, }) {
    const style = {};
    if (direction === 'rtl')
        style['--animation-direction'] = 'reverse';
    if (typeof duration === 'number')
        style['--animation-duration'] = `${duration}s`;
    if (!enableAnimation)
        style['--pseudo-element-display'] = 'none';
    if (typeof width === 'string' || typeof width === 'number')
        style.width = width;
    if (typeof height === 'string' || typeof height === 'number')
        style.height = height;
    if (typeof borderRadius === 'string' || typeof borderRadius === 'number')
        style.borderRadius = borderRadius;
    if (circle)
        style.borderRadius = '50%';
    if (typeof baseColor !== 'undefined')
        style['--base-color'] = baseColor;
    if (typeof highlightColor !== 'undefined')
        style['--highlight-color'] = highlightColor;
    return style;
}
function Skeleton({ count = 1, wrapper: Wrapper, className: customClassName, containerClassName, containerTestId, circle = false, style: styleProp, ...originalPropsStyleOptions }) {
    var _a, _b;
    const contextStyleOptions = react__WEBPACK_IMPORTED_MODULE_0__.useContext(SkeletonThemeContext);
    const propsStyleOptions = { ...originalPropsStyleOptions };
    // DO NOT overwrite style options from the context if `propsStyleOptions`
    // has properties explicity set to undefined
    for (const [key, value] of Object.entries(originalPropsStyleOptions)) {
        if (typeof value === 'undefined') {
            delete propsStyleOptions[key];
        }
    }
    // Props take priority over context
    const styleOptions = {
        ...contextStyleOptions,
        ...propsStyleOptions,
        circle,
    };
    // `styleProp` has the least priority out of everything
    const style = {
        ...styleProp,
        ...styleOptionsToCssProperties(styleOptions),
    };
    let className = 'react-loading-skeleton';
    if (customClassName)
        className += ` ${customClassName}`;
    const inline = (_a = styleOptions.inline) !== null && _a !== void 0 ? _a : false;
    const elements = [];
    // Without the <br />, the skeleton lines will all run together if
    // `width` is specified
    for (let i = 0; i < count; i++) {
        const skeletonSpan = (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: className, style: style, key: i }, "\u200C"));
        if (inline) {
            elements.push(skeletonSpan);
        }
        else {
            elements.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: i },
                skeletonSpan,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null)));
        }
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: containerClassName, "data-testid": containerTestId, "aria-live": "polite", "aria-busy": (_b = styleOptions.enableAnimation) !== null && _b !== void 0 ? _b : defaultEnableAnimation }, Wrapper
        ? elements.map((el, i) => react__WEBPACK_IMPORTED_MODULE_0__.createElement(Wrapper, { key: i }, el))
        : elements));
}

function SkeletonTheme({ children, ...styleOptions }) {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(SkeletonThemeContext.Provider, { value: styleOptions }, children));
}




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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Searchbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Searchbar */ "./src/components/Searchbar.js");
/* harmony import */ var _assets_style_app_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/style/app.css */ "./src/assets/style/app.css");



const {
  render
} = wp.element;
const root = document.getElementById('air-searchy');
render((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Searchbar__WEBPACK_IMPORTED_MODULE_1__.Searchbar, null), root);
}();
/******/ })()
;
//# sourceMappingURL=index.js.map