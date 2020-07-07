module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/MatrixTable/context.tsx":
/*!********************************************!*\
  !*** ./components/MatrixTable/context.tsx ***!
  \********************************************/
/*! exports provided: MatrixTableContext, MatrixTableContextProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatrixTableContext", function() { return MatrixTableContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatrixTableContextProvider", function() { return MatrixTableContextProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\interview\\interview-fullstack-master\\components\\MatrixTable\\context.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/**
 * This is the 
 */

const emptyMatrix = {
  "36months": {
    "lite": 0,
    "standard": 0,
    "unlimited": 0
  },
  "24months": {
    "lite": 0,
    "standard": 0,
    "unlimited": 0
  },
  "12months": {
    "lite": 0,
    "standard": 0,
    "unlimited": 0
  },
  "mtm": {
    "lite": 0,
    "standard": 0,
    "unlimited": 0
  }
};
const defaultState = {
  matrix: emptyMatrix,
  originalMatrix: emptyMatrix
};

const saveJson = val => {
  fetch('http://localhost:3000/api/save-pricing', {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json'
    },
    body: JSON.stringify(val)
  }).then(res => res.json()).catch(err => console.log(err));
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_ALL_DATA':
      state.matrix = action.payload;
      return _objectSpread({}, state);

    case 'SET_MATRIX':
      return _objectSpread({}, state);

    case 'SAVE_JSON':
      saveJson(state.matrix);
      return _objectSpread({}, state);

    case 'EDIT_ACTION':
      state.matrix[action.payload.keyName][action.payload.fieldName] = action.payload.value;
      return _objectSpread({}, state);

    case 'CLEAR_PRICING':
      state.matrix = emptyMatrix;
      return _objectSpread({}, state);

    default:
      return state;
  }
};

const MatrixTableContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])([defaultState, () => {}]);
/**
 * This is the provider that hosts the state
 * @param param0 
 */

const MatrixTableContextProvider = ({
  initialMatrix,
  children
}) => {
  const state = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(reducer, {
    matrix: initialMatrix || emptyMatrix,
    originalMatrix: initialMatrix || emptyMatrix
  });
  return __jsx(MatrixTableContext.Provider, {
    value: state,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 5
    }
  }, children);
};

/***/ }),

/***/ "./components/MatrixTable/index.tsx":
/*!******************************************!*\
  !*** ./components/MatrixTable/index.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context */ "./components/MatrixTable/context.tsx");
var _jsxFileName = "D:\\interview\\interview-fullstack-master\\components\\MatrixTable\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





/**
 * Add 4 buttons: 
 * - Cancel to reset the matrix to how it was before changing the values (only when in edit mode)
 * - Edit to make the fields editable (only when not in edit mode)
 * - Clear to completely clear the table
 * - Save to save the table
 * @param param0 
 */
const MatrixTable = (_ref) => {
  let {
    className,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "children"]);

  // State ------------------------------------------------------------------- //
  const {
    0: {
      matrix
    },
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_2__["MatrixTableContext"]);
  const {
    0: matrixData,
    1: setMatrixData
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(matrix);
  const {
    0: enableEdit,
    1: setEnableEdit
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true); // Handlers ---------------------------------------------------------------- //

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    fetch('http://localhost:3000/api/pricing', {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json'
      }
    }).then(res => res.json()).then(data => {
      setMatrixData(data);
      dispatch({
        type: 'GET_ALL_DATA',
        payload: data
      });
    }).catch(err => console.log('---error', err));
  }, []); // You can save (to api) the matrix here. Remember to update originalMatrix when done.

  const save = async () => {
    dispatch({
      type: 'SAVE_JSON'
    });
  };

  const edit = () => {
    console.log("editbutton");
    setEnableEdit(false);
  };

  const cancel = () => {
    console.log("cancelbutton");
    setEnableEdit(true);
  };

  const clear = () => {
    console.log('clear');
    dispatch({
      type: 'CLEAR_PRICING'
    });
  };

  return __jsx("div", _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(['container', className])
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 5
    }
  }), __jsx("table", {
    id: "customers",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }, __jsx("tr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, __jsx("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }, "months"), __jsx("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }, "lite"), __jsx("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }, "standard"), __jsx("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, "unlimited")), Object.keys(matrix).map((keyName, i) => __jsx("tr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }, __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, keyName), enableEdit ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }, matrix[keyName].lite), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }, matrix[keyName].standard), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    }
  }, matrix[keyName].unlimited)) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  }, __jsx("input", {
    type: "number",
    defaultValue: matrix[keyName].lite,
    onChange: event => dispatch({
      type: 'EDIT_ACTION',
      payload: {
        keyName,
        fieldName: 'lite',
        value: event.target.value
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 21
    }
  })), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 17
    }
  }, __jsx("input", {
    type: "number",
    defaultValue: matrix[keyName].standard,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 21
    }
  })), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  }, __jsx("input", {
    type: "number",
    defaultValue: matrix[keyName].unlimited,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  })))))), __jsx("div", {
    className: "buttonGroup",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }
  }, __jsx("button", {
    onClick: save,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, "Save"), __jsx("button", {
    onClick: clear,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, "Clear"), enableEdit ? __jsx("button", {
    onClick: edit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 23
    }
  }, "Edit") : __jsx("button", {
    onClick: cancel,
    className: "btn btn-success",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 63
    }
  }, "Show")), __jsx("style", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }
  }, `
        .container {
          margin:0;
          width:100%
        }
        #customers {
          font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
          border-collapse: collapse;
          width: 100%;
        }
        
        #customers td, #customers th {
          width: 250px;
          border: 1px solid #ddd;
          padding: 8px;
        }
        
        #customers tr:nth-child(even){background-color: #f2f2f2;}
        
        #customers tr:hover {background-color: #ddd;}
        
        #customers th {
          padding-top: 12px;
          padding-bottom: 12px;
          text-align: left;
          background-color: #4CAF50;
          color: white;
        }
        .buttonGroup {
          padding-top: 20px;
        }
        .buttonGroup button {
          width: 60px;
          height: 25px;
          margin-left: 10px;
        }
      `));
};

const MatrixTableWithContext = (_ref2) => {
  let {
    initialMatrix
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["initialMatrix"]);

  // You can fetch the pricing here or in pages/index.ts
  // Remember that you should try to reflect the state of pricing in originalMatrix.
  // matrix will hold the latest value (edited or same as originalMatrix)
  return __jsx(_context__WEBPACK_IMPORTED_MODULE_2__["MatrixTableContextProvider"], {
    initialMatrix: initialMatrix,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 5
    }
  }, __jsx(MatrixTable, _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 7
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (MatrixTableWithContext);

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_MatrixTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MatrixTable */ "./components/MatrixTable/index.tsx");
var _jsxFileName = "D:\\interview\\interview-fullstack-master\\pages\\index.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Home() {
  // You can either fetch the pricing here and pass it to MatrixTable
  // or, you can let MatrixTable handle the fetching
  return __jsx("div", {
    className: "jsx-1799183244" + " " + "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("title", {
    className: "jsx-1799183244",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, "Matrix Calculation"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-1799183244",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  })), __jsx("main", {
    className: "jsx-1799183244",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx(_components_MatrixTable__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  })), __jsx("footer", {
    className: "jsx-1799183244",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, "Good Luck - Flux"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3345803726",
    __self: this
  }, ".container.jsx-1799183244{min-height:100vh;padding:0 0.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}main.jsx-1799183244{padding:5rem 0;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}footer.jsx-1799183244{width:100%;height:100px;border-top:1px solid #eaeaea;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}footer.jsx-1799183244 img.jsx-1799183244{margin-left:0.5rem;}footer.jsx-1799183244 a.jsx-1799183244{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}a.jsx-1799183244{color:inherit;-webkit-text-decoration:none;text-decoration:none;}.title.jsx-1799183244 a.jsx-1799183244{color:#0070f3;-webkit-text-decoration:none;text-decoration:none;}.title.jsx-1799183244 a.jsx-1799183244:hover,.title.jsx-1799183244 a.jsx-1799183244:focus,.title.jsx-1799183244 a.jsx-1799183244:active{-webkit-text-decoration:underline;text-decoration:underline;}.title.jsx-1799183244{margin:0;line-height:1.15;font-size:4rem;}.title.jsx-1799183244,.description.jsx-1799183244{text-align:center;}.description.jsx-1799183244{line-height:1.5;font-size:1.5rem;}code.jsx-1799183244{background:#fafafa;border-radius:5px;padding:0.75rem;font-size:1.1rem;font-family:Menlo,Monaco,Lucida Console,Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace;}.grid.jsx-1799183244{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:800px;margin-top:3rem;}.card.jsx-1799183244{margin:1rem;-webkit-flex-basis:45%;-ms-flex-preferred-size:45%;flex-basis:45%;padding:1.5rem;text-align:left;color:inherit;-webkit-text-decoration:none;text-decoration:none;border:1px solid #eaeaea;border-radius:10px;-webkit-transition:color 0.15s ease,border-color 0.15s ease;transition:color 0.15s ease,border-color 0.15s ease;}.card.jsx-1799183244:hover,.card.jsx-1799183244:focus,.card.jsx-1799183244:active{color:#0070f3;border-color:#0070f3;}.card.jsx-1799183244 h3.jsx-1799183244{margin:0 0 1rem 0;font-size:1.5rem;}.card.jsx-1799183244 p.jsx-1799183244{margin:0;font-size:1.25rem;line-height:1.5;}.logo.jsx-1799183244{height:1em;}@media (max-width:600px){.grid.jsx-1799183244{width:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxpbnRlcnZpZXdcXGludGVydmlldy1mdWxsc3RhY2stbWFzdGVyXFxwYWdlc1xcaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCa0IsQUFHNEIsQUFTRixBQVNKLEFBU1EsQUFJTixBQU1DLEFBS0EsQUFPWSxBQUlqQixBQU9TLEFBSUYsQUFLRyxBQVNOLEFBVUQsQUFjRSxBQUtJLEFBS1QsQUFNRSxBQUtFLFNBckVJLEFBMkRDLEVBOUZMLEFBb0dmLEFBSzBCLENBbkNULEVBbkRNLEFBS0EsQUE0REEsQ0E3RmQsQ0F1RFUsQ0FoRUEsQ0E0RG5CLEFBK0NtQixDQWhGbkIsQUEwQ29CLEtBbERXLEVBbUNkLENBMkRDLE1BaERsQixDQWhFZSxDQXNHZixBQUtBLEVBdENrQixJQWZsQixFQTJEQSxLQXhHZSxLQVVBLEFBbURJLE9BdEJuQixJQVhBLEFBS0EsTUE4QnNFLElBMUM3QyxBQStDSixJQVdKLFdBbUNmLElBbENnQixlQXhGTSxDQXlGUixhQWhGUSxDQWlGRCxJQXZFRSx3Q0EwREEsTUEvQ0osQUE2RE0sYUExRkYsS0F1RXpCLE9Bb0JxQixFQWxGSSxpQkFtRjhCLFNBekVsQyx3Q0FXckIsQUErQ2lCLG1CQTVFSSxjQVNBLG9CQVVyQixJQTJEa0IsTUFjbEIsVUFia0IsZ0JBQ2xCLHVCQS9FQSxjQVNBIiwiZmlsZSI6IkQ6XFxpbnRlcnZpZXdcXGludGVydmlldy1mdWxsc3RhY2stbWFzdGVyXFxwYWdlc1xcaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IE1hdHJpeFRhYmxlIGZyb20gJy4uL2NvbXBvbmVudHMvTWF0cml4VGFibGUnXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgLy8gWW91IGNhbiBlaXRoZXIgZmV0Y2ggdGhlIHByaWNpbmcgaGVyZSBhbmQgcGFzcyBpdCB0byBNYXRyaXhUYWJsZVxuICAvLyBvciwgeW91IGNhbiBsZXQgTWF0cml4VGFibGUgaGFuZGxlIHRoZSBmZXRjaGluZ1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+TWF0cml4IENhbGN1bGF0aW9uPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbj5cbiAgICAgICAgPE1hdHJpeFRhYmxlIC8+XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxmb290ZXI+XG4gICAgICAgIEdvb2QgTHVjayAtIEZsdXhcbiAgICAgIDwvZm9vdGVyPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIHBhZGRpbmc6IDAgMC41cmVtO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgbWFpbiB7XG4gICAgICAgICAgcGFkZGluZzogNXJlbSAwO1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBmb290ZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlYWVhZWE7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9vdGVyIGltZyB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvb3RlciBhIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBhIHtcbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUgYSB7XG4gICAgICAgICAgY29sb3I6ICMwMDcwZjM7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpdGxlIGE6aG92ZXIsXG4gICAgICAgIC50aXRsZSBhOmZvY3VzLFxuICAgICAgICAudGl0bGUgYTphY3RpdmUge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTU7XG4gICAgICAgICAgZm9udC1zaXplOiA0cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpdGxlLFxuICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvZGUge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIHBhZGRpbmc6IDAuNzVyZW07XG4gICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgICAgZm9udC1mYW1pbHk6IE1lbmxvLCBNb25hY28sIEx1Y2lkYSBDb25zb2xlLCBMaWJlcmF0aW9uIE1vbm8sXG4gICAgICAgICAgICBEZWphVnUgU2FucyBNb25vLCBCaXRzdHJlYW0gVmVyYSBTYW5zIE1vbm8sIENvdXJpZXIgTmV3LCBtb25vc3BhY2U7XG4gICAgICAgIH1cblxuICAgICAgICAuZ3JpZCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgICAgICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkIHtcbiAgICAgICAgICBtYXJnaW46IDFyZW07XG4gICAgICAgICAgZmxleC1iYXNpczogNDUlO1xuICAgICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWFlYWVhO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZSwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2U7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZDpob3ZlcixcbiAgICAgICAgLmNhcmQ6Zm9jdXMsXG4gICAgICAgIC5jYXJkOmFjdGl2ZSB7XG4gICAgICAgICAgY29sb3I6ICMwMDcwZjM7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDA3MGYzO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQgaDMge1xuICAgICAgICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkIHAge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2dvIHtcbiAgICAgICAgICBoZWlnaHQ6IDFlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgIC5ncmlkIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgaHRtbCxcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90byxcbiAgICAgICAgICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsXG4gICAgICAgICAgICBzYW5zLXNlcmlmO1xuICAgICAgICB9XG5cbiAgICAgICAgKiB7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG4iXX0= */\n/*@ sourceURL=D:\\\\interview\\\\interview-fullstack-master\\\\pages\\\\index.tsx */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3379920139",
    __self: this
  }, "html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;}*{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxpbnRlcnZpZXdcXGludGVydmlldy1mdWxsc3RhY2stbWFzdGVyXFxwYWdlc1xcaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBKeUIsQUFJcUIsQUFRWSxVQVBiLFNBR0csR0FLZCxtSUFKQSIsImZpbGUiOiJEOlxcaW50ZXJ2aWV3XFxpbnRlcnZpZXctZnVsbHN0YWNrLW1hc3RlclxccGFnZXNcXGluZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBNYXRyaXhUYWJsZSBmcm9tICcuLi9jb21wb25lbnRzL01hdHJpeFRhYmxlJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIC8vIFlvdSBjYW4gZWl0aGVyIGZldGNoIHRoZSBwcmljaW5nIGhlcmUgYW5kIHBhc3MgaXQgdG8gTWF0cml4VGFibGVcbiAgLy8gb3IsIHlvdSBjYW4gbGV0IE1hdHJpeFRhYmxlIGhhbmRsZSB0aGUgZmV0Y2hpbmdcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk1hdHJpeCBDYWxjdWxhdGlvbjwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4+XG4gICAgICAgIDxNYXRyaXhUYWJsZSAvPlxuICAgICAgPC9tYWluPlxuXG4gICAgICA8Zm9vdGVyPlxuICAgICAgICBHb29kIEx1Y2sgLSBGbHV4XG4gICAgICA8L2Zvb3Rlcj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICBwYWRkaW5nOiAwIDAuNXJlbTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIG1haW4ge1xuICAgICAgICAgIHBhZGRpbmc6IDVyZW0gMDtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9vdGVyIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWFlYWVhO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvb3RlciBpbWcge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gICAgICAgIH1cblxuICAgICAgICBmb290ZXIgYSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpdGxlIGEge1xuICAgICAgICAgIGNvbG9yOiAjMDA3MGYzO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aXRsZSBhOmhvdmVyLFxuICAgICAgICAudGl0bGUgYTpmb2N1cyxcbiAgICAgICAgLnRpdGxlIGE6YWN0aXZlIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICAgICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aXRsZSxcbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgIH1cblxuICAgICAgICBjb2RlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICBwYWRkaW5nOiAwLjc1cmVtO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBNZW5sbywgTW9uYWNvLCBMdWNpZGEgQ29uc29sZSwgTGliZXJhdGlvbiBNb25vLFxuICAgICAgICAgICAgRGVqYVZ1IFNhbnMgTW9ubywgQml0c3RyZWFtIFZlcmEgU2FucyBNb25vLCBDb3VyaWVyIE5ldywgbW9ub3NwYWNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmdyaWQge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgbWFyZ2luOiAxcmVtO1xuICAgICAgICAgIGZsZXgtYmFzaXM6IDQ1JTtcbiAgICAgICAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VhZWFlYTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQ6aG92ZXIsXG4gICAgICAgIC5jYXJkOmZvY3VzLFxuICAgICAgICAuY2FyZDphY3RpdmUge1xuICAgICAgICAgIGNvbG9yOiAjMDA3MGYzO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogIzAwNzBmMztcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkIGgzIHtcbiAgICAgICAgICBtYXJnaW46IDAgMCAxcmVtIDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZCBwIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIH1cblxuICAgICAgICAubG9nbyB7XG4gICAgICAgICAgaGVpZ2h0OiAxZW07XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICAuZ3JpZCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGh0bWwsXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sXG4gICAgICAgICAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLFxuICAgICAgICAgICAgc2Fucy1zZXJpZjtcbiAgICAgICAgfVxuXG4gICAgICAgICoge1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl19 */\n/*@ sourceURL=D:\\\\interview\\\\interview-fullstack-master\\\\pages\\\\index.tsx */"));
}

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\interview\interview-fullstack-master\pages\index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NYXRyaXhUYWJsZS9jb250ZXh0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01hdHJpeFRhYmxlL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2xhc3NuYW1lc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zdHlsZVwiIl0sIm5hbWVzIjpbImVtcHR5TWF0cml4IiwiZGVmYXVsdFN0YXRlIiwibWF0cml4Iiwib3JpZ2luYWxNYXRyaXgiLCJzYXZlSnNvbiIsInZhbCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImFjY2VwdCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlcyIsImpzb24iLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCIsImtleU5hbWUiLCJmaWVsZE5hbWUiLCJ2YWx1ZSIsIk1hdHJpeFRhYmxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJNYXRyaXhUYWJsZUNvbnRleHRQcm92aWRlciIsImluaXRpYWxNYXRyaXgiLCJjaGlsZHJlbiIsInVzZVJlZHVjZXIiLCJNYXRyaXhUYWJsZSIsImNsYXNzTmFtZSIsInByb3BzIiwiZGlzcGF0Y2giLCJ1c2VDb250ZXh0IiwibWF0cml4RGF0YSIsInNldE1hdHJpeERhdGEiLCJ1c2VTdGF0ZSIsImVuYWJsZUVkaXQiLCJzZXRFbmFibGVFZGl0IiwidXNlRWZmZWN0IiwiZGF0YSIsInNhdmUiLCJlZGl0IiwiY2FuY2VsIiwiY2xlYXIiLCJjbGFzc25hbWVzIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImkiLCJsaXRlIiwic3RhbmRhcmQiLCJ1bmxpbWl0ZWQiLCJldmVudCIsInRhcmdldCIsIk1hdHJpeFRhYmxlV2l0aENvbnRleHQiLCJIb21lIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBRUE7Ozs7QUE4REEsTUFBTUEsV0FBVyxHQUFHO0FBQ2xCLGNBQVk7QUFDUixZQUFRLENBREE7QUFFUixnQkFBWSxDQUZKO0FBR1IsaUJBQWE7QUFITCxHQURNO0FBTWxCLGNBQVk7QUFDUixZQUFRLENBREE7QUFFUixnQkFBWSxDQUZKO0FBR1IsaUJBQWE7QUFITCxHQU5NO0FBV2xCLGNBQVk7QUFDUixZQUFRLENBREE7QUFFUixnQkFBWSxDQUZKO0FBR1IsaUJBQWE7QUFITCxHQVhNO0FBZ0JsQixTQUFPO0FBQ0gsWUFB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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxb0xBREY7QUFrS0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxS0QsdUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNkMiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQpO1xuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0J1xuXG4vKipcbiAqIFRoaXMgaXMgdGhlIFxuICovXG5pbnRlcmZhY2UgTWF0cml4VGFibGVTdGF0ZSB7XG4gIC8qKlxuICAgKiBUaGlzIGlzIHRoZSBwcmljZSBtYXRyaXggdGhhdCBjb250YWlucyB0aGUgbGF0ZXN0IHZhbHVlXG4gICAqL1xuICBtYXRyaXg6IGltcG9ydCgnLi4vLi4vdHlwZXMnKS5NYXRyaXhcbiAgLyoqXG4gICAqIFdlIHdpbGwgdXNlIG9yaWdpbmFsIG1hdHJpeCB0byBoZWxwIHVzIFwicmVzZXRcIiB0aGUgdGFibGUgd2hlbiB3ZSB3YW50IHRvIGNhbmNlbCBlZGl0aW5nIGl0LlxuICAgKiBSZW1lbWJlciB0aGF0ICoqd2hlbmV2ZXIqKiB5b3UgZ2V0IHRoZSBtYXRyaXggZnJvbSB0aGUgc2VydmVyLCB5b3UgbXVzdCBzZXQgb3JpZ2luYWxNYXRyaXhcbiAgICogdG8gdGhhdCB2YWx1ZTsgb3JpZ2luYWxNYXRyaXggc2hvdWxkIHRyeSB0byBtaXJyb3IgdGhlIG1hdHJpeCBpbiBvdXIgZGF0YWJhc2UuXG4gICAqL1xuICBvcmlnaW5hbE1hdHJpeDogaW1wb3J0KCcuLi8uLi90eXBlcycpLk1hdHJpeFxufVxuXG4vKipcbiAqIFRoZXNlIGFyZSB0aGUgYWN0aW9ucyB5b3UgY2FuIGRpc3BhdGNoLiBBZGQgYWN0aW9ucyB5b3Ugd2FudCB0byBoZWxwIHlvdVxuICogdHlwZSB0aGUgZGlzcGF0Y2ggZnVuY3Rpb25cbiAqL1xudHlwZSBNYXRyaXhBY3Rpb24gPSB7XG4gIHR5cGU6ICdTRVRfTUFUUklYJyxcbiAgLyoqXG4gICAqIFdoZW4gcGF5bG9hZCBpcyBlbXB0eSwgd2Ugd2lsbCBuZWVkIHRvIHNldCB0aGUgdmFsdWVzIGZyb20gb3JpZ2luYWxNYXRyaXhcbiAgICovIFxuICBwYXlsb2FkPzogaW1wb3J0KCcuLi8uLi90eXBlcycpLk1hdHJpeFxuICBtZXRhZGF0YT86IHtcbiAgICAvKipcbiAgICAgKiBJZiB0aGlzIGlzIHNldCB0byB0cnVlLCB0aGVuIGluc3RlYWQgb2YgcmVzZXR0aW5nIHRvIHRoZSBvcmlnaW5hbE1hdHJpeCxcbiAgICAgKiB3ZSByZXNldCB0byB0aGUgZW1wdHlNYXRyaXhcbiAgICAgKi9cbiAgICByZXNldFRvRW1wdHk/OiBib29sZWFuXG4gIH1cbn0gfCB7XG4gIHR5cGU6ICdTRVRfT1JJR0lOQUxfTUFUUklYJyxcbiAgLyoqXG4gICAqIFdoZW4gZW1wdHksIHNldCB0aGUgdmFsdWUgZnJvbSBlbXB0eU1hdHJpeFxuICAgKi9cbiAgcGF5bG9hZD86IGltcG9ydCgnLi4vLi4vdHlwZXMnKS5NYXRyaXhcbn0gfCB7XG4gIHR5cGU6ICdTT01FX0FDVElPTicsXG4gIHBheWxvYWQ6IGFueVxufSB8IHtcbiAgdHlwZTogJ0dFVF9BTExfREFUQScsXG4gIHBheWxvYWQ/OiBpbXBvcnQoJy4uLy4uL3R5cGVzJykuTWF0cml4XG59IHwge1xuICB0eXBlOiAnU0FWRV9KU09OJyxcbiAgcGF5bG9hZDogYW55XG59IHwge1xuICB0eXBlOiAnRURJVF9BQ1RJT04nLFxuICBwYXlsb2FkOiBhbnlcbn0gfCB7XG4gIHR5cGU6ICdDTEVBUl9QUklDSU5HJyxcbn0vLyBIZXJlIHlvdSB3aWxsIG5lZWQgdG8gYWRkIHlvdXIgb3RoZXIgYWN0aW9uKHMpIGluIG9yZGVyIHRvIGVkaXQgdGhlIHByaWNpbmcgKHJlbW92ZSBTT01FX0FDVElPTilcblxuLyoqXG4gKiBUaGlzIGlzIGZvciB0aGUgUHJvdmlkZXIgY29tcG9uZW50XG4gKi9cbnR5cGUgUHJvdmlkZXJQcm9wcyA9IHtcbiAgaW5pdGlhbE1hdHJpeD86IGltcG9ydCgnLi4vLi4vdHlwZXMnKS5NYXRyaXhcbn1cblxuY29uc3QgZW1wdHlNYXRyaXggPSB7XG4gIFwiMzZtb250aHNcIjoge1xuICAgICAgXCJsaXRlXCI6IDAsXG4gICAgICBcInN0YW5kYXJkXCI6IDAsXG4gICAgICBcInVubGltaXRlZFwiOiAwLFxuICB9LFxuICBcIjI0bW9udGhzXCI6IHtcbiAgICAgIFwibGl0ZVwiOiAwLFxuICAgICAgXCJzdGFuZGFyZFwiOiAwLFxuICAgICAgXCJ1bmxpbWl0ZWRcIjogMFxuICB9LFxuICBcIjEybW9udGhzXCI6IHtcbiAgICAgIFwibGl0ZVwiOiAwLFxuICAgICAgXCJzdGFuZGFyZFwiOiAwLFxuICAgICAgXCJ1bmxpbWl0ZWRcIjogMFxuICB9LFxuICBcIm10bVwiOiB7XG4gICAgICBcImxpdGVcIjogMCxcbiAgICAgIFwic3RhbmRhcmRcIjogMCxcbiAgICAgIFwidW5saW1pdGVkXCI6IDBcbiAgfVxufVxuXG5jb25zdCBkZWZhdWx0U3RhdGU6IE1hdHJpeFRhYmxlU3RhdGUgPSB7XG4gIG1hdHJpeDogZW1wdHlNYXRyaXgsXG4gIG9yaWdpbmFsTWF0cml4OiBlbXB0eU1hdHJpeCxcbn1cblxuY29uc3Qgc2F2ZUpzb24gPSAodmFsKSA9PiB7XG4gIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3NhdmUtcHJpY2luZycsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIGFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHZhbClcbiAgICAgIH0pXG4gICAgICAudGhlbihyZXMgPT4gXG4gICAgICAgIHJlcy5qc29uKClcbiAgICAgIClcbiAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcbn1cblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZTogTWF0cml4VGFibGVTdGF0ZSwgYWN0aW9uOiBNYXRyaXhBY3Rpb24pOiBNYXRyaXhUYWJsZVN0YXRlID0+IHtcblxuICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdHRVRfQUxMX0RBVEEnOlxuICAgICAgc3RhdGUubWF0cml4ID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgIH1cbiAgICAgIFxuICAgIGNhc2UgJ1NFVF9NQVRSSVgnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICB9XG4gICAgY2FzZSAnU0FWRV9KU09OJzpcbiAgICAgIHNhdmVKc29uKHN0YXRlLm1hdHJpeCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZVxuICAgICAgfVxuICAgIGNhc2UgJ0VESVRfQUNUSU9OJzpcbiAgICAgIHN0YXRlLm1hdHJpeFthY3Rpb24ucGF5bG9hZC5rZXlOYW1lXVthY3Rpb24ucGF5bG9hZC5maWVsZE5hbWVdID0gYWN0aW9uLnBheWxvYWQudmFsdWU7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZVxuICAgICAgfVxuICAgIGNhc2UgJ0NMRUFSX1BSSUNJTkcnOlxuICAgICAgc3RhdGUubWF0cml4ID0gZW1wdHlNYXRyaXg7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZVxuICAgICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgTWF0cml4VGFibGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxbTWF0cml4VGFibGVTdGF0ZSwgaW1wb3J0KCdyZWFjdCcpLkRpc3BhdGNoPE1hdHJpeEFjdGlvbj5dPihbZGVmYXVsdFN0YXRlLCAoKSA9PiB7fV0pXG5cbi8qKlxuICogVGhpcyBpcyB0aGUgcHJvdmlkZXIgdGhhdCBob3N0cyB0aGUgc3RhdGVcbiAqIEBwYXJhbSBwYXJhbTAgXG4gKi9cbmV4cG9ydCBjb25zdCBNYXRyaXhUYWJsZUNvbnRleHRQcm92aWRlcjogaW1wb3J0KCdyZWFjdCcpLkZDPFByb3ZpZGVyUHJvcHM+ID0gKHsgaW5pdGlhbE1hdHJpeCwgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBzdGF0ZSA9IHVzZVJlZHVjZXIocmVkdWNlciwgeyBtYXRyaXg6IGluaXRpYWxNYXRyaXggfHwgZW1wdHlNYXRyaXgsIG9yaWdpbmFsTWF0cml4OiBpbml0aWFsTWF0cml4IHx8IGVtcHR5TWF0cml4IH0pXG5cbiAgcmV0dXJuIChcbiAgICA8TWF0cml4VGFibGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzdGF0ZX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9NYXRyaXhUYWJsZUNvbnRleHQuUHJvdmlkZXI+XG4gIClcbn0iLCJpbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCx1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTWF0cml4VGFibGVDb250ZXh0LCBNYXRyaXhUYWJsZUNvbnRleHRQcm92aWRlciB9IGZyb20gJy4vY29udGV4dCdcblxuICB0eXBlIFByb3BzID0ge1xuICAgIGluaXRpYWxNYXRyaXg/OiBpbXBvcnQoJy4uLy4uL3R5cGVzJykuTWF0cml4XG4gIH0gJiBpbXBvcnQoJ3JlYWN0JykuSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+XG5cbiAgLyoqXG4gICAqIEFkZCA0IGJ1dHRvbnM6IFxuICAgKiAtIENhbmNlbCB0byByZXNldCB0aGUgbWF0cml4IHRvIGhvdyBpdCB3YXMgYmVmb3JlIGNoYW5naW5nIHRoZSB2YWx1ZXMgKG9ubHkgd2hlbiBpbiBlZGl0IG1vZGUpXG4gICAqIC0gRWRpdCB0byBtYWtlIHRoZSBmaWVsZHMgZWRpdGFibGUgKG9ubHkgd2hlbiBub3QgaW4gZWRpdCBtb2RlKVxuICAgKiAtIENsZWFyIHRvIGNvbXBsZXRlbHkgY2xlYXIgdGhlIHRhYmxlXG4gICAqIC0gU2F2ZSB0byBzYXZlIHRoZSB0YWJsZVxuICAgKiBAcGFyYW0gcGFyYW0wIFxuICAgKi9cbiAgY29uc3QgTWF0cml4VGFibGU6IGltcG9ydCgncmVhY3QnKS5GQzxPbWl0PFByb3BzLCAnaW5pdGlhbE1hdHJpeCc+PiA9ICh7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IHtcbiAgLy8gU3RhdGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuICBjb25zdCBbeyBtYXRyaXggfSwgZGlzcGF0Y2hdID0gdXNlQ29udGV4dChNYXRyaXhUYWJsZUNvbnRleHQpXG4gIGNvbnN0IFsgbWF0cml4RGF0YSwgc2V0TWF0cml4RGF0YV0gID0gdXNlU3RhdGUobWF0cml4KTtcbiAgY29uc3QgWyBlbmFibGVFZGl0LCBzZXRFbmFibGVFZGl0IF0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgXG4gIC8vIEhhbmRsZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcHJpY2luZycsIHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgYWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICB9KVxuICAgIC50aGVuKHJlcyA9PiBcbiAgICAgIHJlcy5qc29uKClcbiAgICApXG4gICAgLnRoZW4oZGF0YT0+IHtcbiAgICAgIHNldE1hdHJpeERhdGEoZGF0YSk7XG4gICAgICBkaXNwYXRjaCh7dHlwZTogJ0dFVF9BTExfREFUQScsIHBheWxvYWQ6IGRhdGEgfSk7XG5cbiAgICB9KVxuICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coJy0tLWVycm9yJywgZXJyKSk7XG4gIH0sW10pXG5cbiAgLy8gWW91IGNhbiBzYXZlICh0byBhcGkpIHRoZSBtYXRyaXggaGVyZS4gUmVtZW1iZXIgdG8gdXBkYXRlIG9yaWdpbmFsTWF0cml4IHdoZW4gZG9uZS5cbiAgY29uc3Qgc2F2ZSA9IGFzeW5jICgpID0+IHtcbiAgICBkaXNwYXRjaCh7dHlwZTogJ1NBVkVfSlNPTid9KTtcbiAgfVxuICBcbiAgY29uc3QgZWRpdCA9ICgpPT57XG4gICAgY29uc29sZS5sb2coXCJlZGl0YnV0dG9uXCIpO1xuICAgIHNldEVuYWJsZUVkaXQoZmFsc2UpO1xuICB9XG5cbiAgY29uc3QgY2FuY2VsID0gKCk9PntcbiAgICBjb25zb2xlLmxvZyhcImNhbmNlbGJ1dHRvblwiKTtcbiAgICBzZXRFbmFibGVFZGl0KHRydWUpO1xuICB9XG5cbiAgY29uc3QgY2xlYXIgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2NsZWFyJylcbiAgICBkaXNwYXRjaCh7dHlwZTogJ0NMRUFSX1BSSUNJTkcnfSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFsnY29udGFpbmVyJywgY2xhc3NOYW1lXSl9IHsuLi5wcm9wc30+XG4gICAgICA8dGFibGUgaWQ9XCJjdXN0b21lcnNcIj5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0aD5tb250aHM8L3RoPlxuICAgICAgICAgIDx0aD5saXRlPC90aD5cbiAgICAgICAgICA8dGg+c3RhbmRhcmQ8L3RoPlxuICAgICAgICAgIDx0aD51bmxpbWl0ZWQ8L3RoPlxuICAgICAgICA8L3RyPlxuICAgICAgXG4gICAgICAgIHtPYmplY3Qua2V5cyhtYXRyaXgpLm1hcCgoa2V5TmFtZSwgaSkgPT4gXG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPntrZXlOYW1lfTwvdGQ+XG4gICAgICAgICAgICB7ZW5hYmxlRWRpdCA/IChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8dGQ+e21hdHJpeFtrZXlOYW1lXS5saXRlfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPnttYXRyaXhba2V5TmFtZV0uc3RhbmRhcmR9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e21hdHJpeFtrZXlOYW1lXS51bmxpbWl0ZWR9PC90ZD5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDx0ZD48aW5wdXQgdHlwZT0nbnVtYmVyJyBkZWZhdWx0VmFsdWU9e21hdHJpeFtrZXlOYW1lXS5saXRlfSBvbkNoYW5nZT17ZXZlbnQgPT4gZGlzcGF0Y2goe3R5cGU6ICdFRElUX0FDVElPTicsIHBheWxvYWQ6IHtrZXlOYW1lLCBmaWVsZE5hbWU6ICdsaXRlJywgdmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZX19KX0gLz48L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD48aW5wdXQgdHlwZT0nbnVtYmVyJyBkZWZhdWx0VmFsdWU9e21hdHJpeFtrZXlOYW1lXS5zdGFuZGFyZH0gLz48L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD48aW5wdXQgdHlwZT0nbnVtYmVyJyBkZWZhdWx0VmFsdWU9e21hdHJpeFtrZXlOYW1lXS51bmxpbWl0ZWR9IC8+PC90ZD5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICl9XG4gICAgICA8L3RhYmxlPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2J1dHRvbkdyb3VwJz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzYXZlfSA+U2F2ZTwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2NsZWFyfSA+Q2xlYXI8L2J1dHRvbj5cbiAgICAgICAge2VuYWJsZUVkaXQgPyA8YnV0dG9uIG9uQ2xpY2s9e2VkaXR9ID5FZGl0PC9idXR0b24+IDogPGJ1dHRvbiBvbkNsaWNrPXtjYW5jZWx9IGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiPlNob3c8L2J1dHRvbj59XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlPntgXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIG1hcmdpbjowO1xuICAgICAgICAgIHdpZHRoOjEwMCVcbiAgICAgICAgfVxuICAgICAgICAjY3VzdG9tZXJzIHtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAjY3VzdG9tZXJzIHRkLCAjY3VzdG9tZXJzIHRoIHtcbiAgICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICNjdXN0b21lcnMgdHI6bnRoLWNoaWxkKGV2ZW4pe2JhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7fVxuICAgICAgICBcbiAgICAgICAgI2N1c3RvbWVycyB0cjpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogI2RkZDt9XG4gICAgICAgIFxuICAgICAgICAjY3VzdG9tZXJzIHRoIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTJweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICAgIC5idXR0b25Hcm91cCB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmJ1dHRvbkdyb3VwIGJ1dHRvbiB7XG4gICAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgTWF0cml4VGFibGVXaXRoQ29udGV4dDogaW1wb3J0KCdyZWFjdCcpLkZDPFByb3BzPiA9ICh7IGluaXRpYWxNYXRyaXgsIC4uLnByb3BzIH0pID0+IHtcbiAgLy8gWW91IGNhbiBmZXRjaCB0aGUgcHJpY2luZyBoZXJlIG9yIGluIHBhZ2VzL2luZGV4LnRzXG4gIC8vIFJlbWVtYmVyIHRoYXQgeW91IHNob3VsZCB0cnkgdG8gcmVmbGVjdCB0aGUgc3RhdGUgb2YgcHJpY2luZyBpbiBvcmlnaW5hbE1hdHJpeC5cbiAgLy8gbWF0cml4IHdpbGwgaG9sZCB0aGUgbGF0ZXN0IHZhbHVlIChlZGl0ZWQgb3Igc2FtZSBhcyBvcmlnaW5hbE1hdHJpeClcblxuICByZXR1cm4gKFxuICAgIDxNYXRyaXhUYWJsZUNvbnRleHRQcm92aWRlciBpbml0aWFsTWF0cml4PXtpbml0aWFsTWF0cml4fT5cbiAgICAgIDxNYXRyaXhUYWJsZSB7Li4ucHJvcHN9IC8+XG4gICAgPC9NYXRyaXhUYWJsZUNvbnRleHRQcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXRyaXhUYWJsZVdpdGhDb250ZXh0XG4iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTWF0cml4VGFibGUgZnJvbSAnLi4vY29tcG9uZW50cy9NYXRyaXhUYWJsZSdcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAvLyBZb3UgY2FuIGVpdGhlciBmZXRjaCB0aGUgcHJpY2luZyBoZXJlIGFuZCBwYXNzIGl0IHRvIE1hdHJpeFRhYmxlXG4gIC8vIG9yLCB5b3UgY2FuIGxldCBNYXRyaXhUYWJsZSBoYW5kbGUgdGhlIGZldGNoaW5nXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5NYXRyaXggQ2FsY3VsYXRpb248L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluPlxuICAgICAgICA8TWF0cml4VGFibGUgLz5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPGZvb3Rlcj5cbiAgICAgICAgR29vZCBMdWNrIC0gRmx1eFxuICAgICAgPC9mb290ZXI+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgICAgcGFkZGluZzogMCAwLjVyZW07XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBtYWluIHtcbiAgICAgICAgICBwYWRkaW5nOiA1cmVtIDA7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvb3RlciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VhZWFlYTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBmb290ZXIgaW1nIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9vdGVyIGEge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aXRsZSBhIHtcbiAgICAgICAgICBjb2xvcjogIzAwNzBmMztcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUgYTpob3ZlcixcbiAgICAgICAgLnRpdGxlIGE6Zm9jdXMsXG4gICAgICAgIC50aXRsZSBhOmFjdGl2ZSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4xNTtcbiAgICAgICAgICBmb250LXNpemU6IDRyZW07XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUsXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgY29kZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgcGFkZGluZzogMC43NXJlbTtcbiAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgICBmb250LWZhbWlseTogTWVubG8sIE1vbmFjbywgTHVjaWRhIENvbnNvbGUsIExpYmVyYXRpb24gTW9ubyxcbiAgICAgICAgICAgIERlamFWdSBTYW5zIE1vbm8sIEJpdHN0cmVhbSBWZXJhIFNhbnMgTW9ubywgQ291cmllciBOZXcsIG1vbm9zcGFjZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ncmlkIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQge1xuICAgICAgICAgIG1hcmdpbjogMXJlbTtcbiAgICAgICAgICBmbGV4LWJhc2lzOiA0NSU7XG4gICAgICAgICAgcGFkZGluZzogMS41cmVtO1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYWVhZWE7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLCBib3JkZXItY29sb3IgMC4xNXMgZWFzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkOmhvdmVyLFxuICAgICAgICAuY2FyZDpmb2N1cyxcbiAgICAgICAgLmNhcmQ6YWN0aXZlIHtcbiAgICAgICAgICBjb2xvcjogIzAwNzBmMztcbiAgICAgICAgICBib3JkZXItY29sb3I6ICMwMDcwZjM7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZCBoMyB7XG4gICAgICAgICAgbWFyZ2luOiAwIDAgMXJlbSAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQgcCB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICB9XG5cbiAgICAgICAgLmxvZ28ge1xuICAgICAgICAgIGhlaWdodDogMWVtO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgLmdyaWQge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBodG1sLFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLFxuICAgICAgICAgICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSxcbiAgICAgICAgICAgIHNhbnMtc2VyaWY7XG4gICAgICAgIH1cblxuICAgICAgICAqIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzbmFtZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc3R5bGVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==