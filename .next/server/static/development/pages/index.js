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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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

      if (action.payload.fieldName == "lite") {
        state.matrix[action.payload.keyName].standard = action.payload.value * 2;
        state.matrix[action.payload.keyName].unlimited = action.payload.value * 3;
      }

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
      lineNumber: 155,
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
    setEnableEdit(true);
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
      lineNumber: 65,
      columnNumber: 5
    }
  }), __jsx("table", {
    id: "customers",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, __jsx("tr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, __jsx("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }, "months"), __jsx("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }, "lite"), __jsx("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, "standard"), __jsx("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, "unlimited")), Object.keys(matrix).map((keyName, i) => __jsx("tr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, keyName), enableEdit ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }, matrix[keyName].lite), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    }
  }, matrix[keyName].standard), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }, matrix[keyName].unlimited)) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
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
    defaultValue: matrix[keyName].standard,
    onChange: event => dispatch({
      type: 'EDIT_ACTION',
      payload: {
        keyName,
        fieldName: 'standard',
        value: event.target.value
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  })), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  }, __jsx("input", {
    type: "number",
    defaultValue: matrix[keyName].unlimited,
    onChange: event => dispatch({
      type: 'EDIT_ACTION',
      payload: {
        keyName,
        fieldName: 'unlimited',
        value: event.target.value
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 21
    }
  })))))), __jsx("div", {
    className: "buttonGroup",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }
  }, __jsx("button", {
    onClick: save,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, "Save"), __jsx("button", {
    onClick: clear,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }, "Clear"), enableEdit ? __jsx("button", {
    onClick: edit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 23
    }
  }, "Edit") : __jsx("button", {
    onClick: cancel,
    className: "btn btn-success",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 63
    }
  }, "Show")), __jsx("style", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
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
      lineNumber: 146,
      columnNumber: 5
    }
  }, __jsx(MatrixTable, _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
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

/***/ 3:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NYXRyaXhUYWJsZS9jb250ZXh0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01hdHJpeFRhYmxlL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2xhc3NuYW1lc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zdHlsZVwiIl0sIm5hbWVzIjpbImVtcHR5TWF0cml4IiwiZGVmYXVsdFN0YXRlIiwibWF0cml4Iiwib3JpZ2luYWxNYXRyaXgiLCJzYXZlSnNvbiIsInZhbCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImFjY2VwdCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlcyIsImpzb24iLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCIsImtleU5hbWUiLCJmaWVsZE5hbWUiLCJ2YWx1ZSIsInN0YW5kYXJkIiwidW5saW1pdGVkIiwiTWF0cml4VGFibGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIk1hdHJpeFRhYmxlQ29udGV4dFByb3ZpZGVyIiwiaW5pdGlhbE1hdHJpeCIsImNoaWxkcmVuIiwidXNlUmVkdWNlciIsIk1hdHJpeFRhYmxlIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJkaXNwYXRjaCIsInVzZUNvbnRleHQiLCJtYXRyaXhEYXRhIiwic2V0TWF0cml4RGF0YSIsInVzZVN0YXRlIiwiZW5hYmxlRWRpdCIsInNldEVuYWJsZUVkaXQiLCJ1c2VFZmZlY3QiLCJkYXRhIiwic2F2ZSIsImVkaXQiLCJjYW5jZWwiLCJjbGVhciIsImNsYXNzbmFtZXMiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiaSIsImxpdGUiLCJldmVudCIsInRhcmdldCIsIk1hdHJpeFRhYmxlV2l0aENvbnRleHQiLCJIb21lIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBRUE7Ozs7QUE2REEsTUFBTUEsV0FBVyxHQUFHO0FBQ2xCLGNBQVk7QUFDUixZQUFRLENBREE7QUFFUixnQkFBWSxDQUZKO0FBR1IsaUJBQWE7QUFITCxHQURNO0FBTWxCLGNBQVk7QUFDUixZQUFRLENBREE7QUFFUixnQkFBWSxDQUZKO0FBR1IsaUJBQWE7QUFITCxHQU5NO0FBV2xCLGNBQVk7QUFDUixZQUFRLENBREE7QUFFUixnQkFBWSxDQUZKO0FBR1IsaUJBQWE7QUFITCxHQVhNO0FBZ0JsQixTQUFPO0FBQ0gsWUFB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cyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbiIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCdcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGlzIHRoZSBcclxuICovXHJcbmludGVyZmFjZSBNYXRyaXhUYWJsZVN0YXRlIHtcclxuICAvKipcclxuICAgKiBUaGlzIGlzIHRoZSBwcmljZSBtYXRyaXggdGhhdCBjb250YWlucyB0aGUgbGF0ZXN0IHZhbHVlXHJcbiAgICovXHJcbiAgbWF0cml4OiBpbXBvcnQoJy4uLy4uL3R5cGVzJykuTWF0cml4XHJcbiAgLyoqXHJcbiAgICogV2Ugd2lsbCB1c2Ugb3JpZ2luYWwgbWF0cml4IHRvIGhlbHAgdXMgXCJyZXNldFwiIHRoZSB0YWJsZSB3aGVuIHdlIHdhbnQgdG8gY2FuY2VsIGVkaXRpbmcgaXQuXHJcbiAgICogUmVtZW1iZXIgdGhhdCAqKndoZW5ldmVyKiogeW91IGdldCB0aGUgbWF0cml4IGZyb20gdGhlIHNlcnZlciwgeW91IG11c3Qgc2V0IG9yaWdpbmFsTWF0cml4XHJcbiAgICogdG8gdGhhdCB2YWx1ZTsgb3JpZ2luYWxNYXRyaXggc2hvdWxkIHRyeSB0byBtaXJyb3IgdGhlIG1hdHJpeCBpbiBvdXIgZGF0YWJhc2UuXHJcbiAgICovXHJcbiAgb3JpZ2luYWxNYXRyaXg6IGltcG9ydCgnLi4vLi4vdHlwZXMnKS5NYXRyaXhcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZXNlIGFyZSB0aGUgYWN0aW9ucyB5b3UgY2FuIGRpc3BhdGNoLiBBZGQgYWN0aW9ucyB5b3Ugd2FudCB0byBoZWxwIHlvdVxyXG4gKiB0eXBlIHRoZSBkaXNwYXRjaCBmdW5jdGlvblxyXG4gKi9cclxudHlwZSBNYXRyaXhBY3Rpb24gPSB7XHJcbiAgdHlwZTogJ1NFVF9NQVRSSVgnLFxyXG4gIC8qKlxyXG4gICAqIFdoZW4gcGF5bG9hZCBpcyBlbXB0eSwgd2Ugd2lsbCBuZWVkIHRvIHNldCB0aGUgdmFsdWVzIGZyb20gb3JpZ2luYWxNYXRyaXhcclxuICAgKi8gXHJcbiAgcGF5bG9hZD86IGltcG9ydCgnLi4vLi4vdHlwZXMnKS5NYXRyaXhcclxuICBtZXRhZGF0YT86IHtcclxuICAgIC8qKlxyXG4gICAgICogSWYgdGhpcyBpcyBzZXQgdG8gdHJ1ZSwgdGhlbiBpbnN0ZWFkIG9mIHJlc2V0dGluZyB0byB0aGUgb3JpZ2luYWxNYXRyaXgsXHJcbiAgICAgKiB3ZSByZXNldCB0byB0aGUgZW1wdHlNYXRyaXhcclxuICAgICAqL1xyXG4gICAgcmVzZXRUb0VtcHR5PzogYm9vbGVhblxyXG4gIH1cclxufSB8IHtcclxuICB0eXBlOiAnU0VUX09SSUdJTkFMX01BVFJJWCcsXHJcbiAgLyoqXHJcbiAgICogV2hlbiBlbXB0eSwgc2V0IHRoZSB2YWx1ZSBmcm9tIGVtcHR5TWF0cml4XHJcbiAgICovXHJcbiAgcGF5bG9hZD86IGltcG9ydCgnLi4vLi4vdHlwZXMnKS5NYXRyaXhcclxufSB8IHtcclxuICB0eXBlOiAnU09NRV9BQ1RJT04nLFxyXG4gIHBheWxvYWQ6IGFueVxyXG59IHwge1xyXG4gIHR5cGU6ICdHRVRfQUxMX0RBVEEnLFxyXG4gIHBheWxvYWQ/OiBpbXBvcnQoJy4uLy4uL3R5cGVzJykuTWF0cml4XHJcbn0gfCB7XHJcbiAgdHlwZTogJ1NBVkVfSlNPTicsXHJcbn0gfCB7XHJcbiAgdHlwZTogJ0VESVRfQUNUSU9OJyxcclxuICBwYXlsb2FkOiBhbnlcclxufSB8IHtcclxuICB0eXBlOiAnQ0xFQVJfUFJJQ0lORycsXHJcbn0vLyBIZXJlIHlvdSB3aWxsIG5lZWQgdG8gYWRkIHlvdXIgb3RoZXIgYWN0aW9uKHMpIGluIG9yZGVyIHRvIGVkaXQgdGhlIHByaWNpbmcgKHJlbW92ZSBTT01FX0FDVElPTilcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGlzIGZvciB0aGUgUHJvdmlkZXIgY29tcG9uZW50XHJcbiAqL1xyXG50eXBlIFByb3ZpZGVyUHJvcHMgPSB7XHJcbiAgaW5pdGlhbE1hdHJpeD86IGltcG9ydCgnLi4vLi4vdHlwZXMnKS5NYXRyaXhcclxufVxyXG5cclxuY29uc3QgZW1wdHlNYXRyaXggPSB7XHJcbiAgXCIzNm1vbnRoc1wiOiB7XHJcbiAgICAgIFwibGl0ZVwiOiAwLFxyXG4gICAgICBcInN0YW5kYXJkXCI6IDAsXHJcbiAgICAgIFwidW5saW1pdGVkXCI6IDAsXHJcbiAgfSxcclxuICBcIjI0bW9udGhzXCI6IHtcclxuICAgICAgXCJsaXRlXCI6IDAsXHJcbiAgICAgIFwic3RhbmRhcmRcIjogMCxcclxuICAgICAgXCJ1bmxpbWl0ZWRcIjogMFxyXG4gIH0sXHJcbiAgXCIxMm1vbnRoc1wiOiB7XHJcbiAgICAgIFwibGl0ZVwiOiAwLFxyXG4gICAgICBcInN0YW5kYXJkXCI6IDAsXHJcbiAgICAgIFwidW5saW1pdGVkXCI6IDBcclxuICB9LFxyXG4gIFwibXRtXCI6IHtcclxuICAgICAgXCJsaXRlXCI6IDAsXHJcbiAgICAgIFwic3RhbmRhcmRcIjogMCxcclxuICAgICAgXCJ1bmxpbWl0ZWRcIjogMFxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgZGVmYXVsdFN0YXRlOiBNYXRyaXhUYWJsZVN0YXRlID0ge1xyXG4gIG1hdHJpeDogZW1wdHlNYXRyaXgsXHJcbiAgb3JpZ2luYWxNYXRyaXg6IGVtcHR5TWF0cml4LFxyXG59XHJcblxyXG5jb25zdCBzYXZlSnNvbiA9ICh2YWwpID0+IHtcclxuICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9zYXZlLXByaWNpbmcnLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBhY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh2YWwpXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKHJlcyA9PiBcclxuICAgICAgICByZXMuanNvbigpXHJcbiAgICAgIClcclxuICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG59XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlOiBNYXRyaXhUYWJsZVN0YXRlLCBhY3Rpb246IE1hdHJpeEFjdGlvbik6IE1hdHJpeFRhYmxlU3RhdGUgPT4ge1xyXG5cclxuICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgJ0dFVF9BTExfREFUQSc6XHJcbiAgICAgIHN0YXRlLm1hdHJpeCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgY2FzZSAnU0VUX01BVFJJWCc6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgJ1NBVkVfSlNPTic6XHJcbiAgICAgIHNhdmVKc29uKHN0YXRlLm1hdHJpeCk7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGVcclxuICAgICAgfVxyXG4gICAgY2FzZSAnRURJVF9BQ1RJT04nOlxyXG4gICAgICBzdGF0ZS5tYXRyaXhbYWN0aW9uLnBheWxvYWQua2V5TmFtZV1bYWN0aW9uLnBheWxvYWQuZmllbGROYW1lXSA9IGFjdGlvbi5wYXlsb2FkLnZhbHVlO1xyXG4gICAgXHJcbiAgICAgIGlmKGFjdGlvbi5wYXlsb2FkLmZpZWxkTmFtZSA9PSBcImxpdGVcIil7XHJcbiAgICAgICAgc3RhdGUubWF0cml4W2FjdGlvbi5wYXlsb2FkLmtleU5hbWVdLnN0YW5kYXJkID0gYWN0aW9uLnBheWxvYWQudmFsdWUgKiAyO1xyXG4gICAgICAgIHN0YXRlLm1hdHJpeFthY3Rpb24ucGF5bG9hZC5rZXlOYW1lXS51bmxpbWl0ZWQgPSBhY3Rpb24ucGF5bG9hZC52YWx1ZSAqIDM7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZVxyXG4gICAgICB9XHJcbiAgICBjYXNlICdDTEVBUl9QUklDSU5HJzpcclxuICAgICAgc3RhdGUubWF0cml4ID0gZW1wdHlNYXRyaXg7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGVcclxuICAgICAgfVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTWF0cml4VGFibGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxbTWF0cml4VGFibGVTdGF0ZSwgaW1wb3J0KCdyZWFjdCcpLkRpc3BhdGNoPE1hdHJpeEFjdGlvbj5dPihbZGVmYXVsdFN0YXRlLCAoKSA9PiB7fV0pXHJcblxyXG4vKipcclxuICogVGhpcyBpcyB0aGUgcHJvdmlkZXIgdGhhdCBob3N0cyB0aGUgc3RhdGVcclxuICogQHBhcmFtIHBhcmFtMCBcclxuICovXHJcbmV4cG9ydCBjb25zdCBNYXRyaXhUYWJsZUNvbnRleHRQcm92aWRlcjogaW1wb3J0KCdyZWFjdCcpLkZDPFByb3ZpZGVyUHJvcHM+ID0gKHsgaW5pdGlhbE1hdHJpeCwgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IHN0YXRlID0gdXNlUmVkdWNlcihyZWR1Y2VyLCB7IG1hdHJpeDogaW5pdGlhbE1hdHJpeCB8fCBlbXB0eU1hdHJpeCwgb3JpZ2luYWxNYXRyaXg6IGluaXRpYWxNYXRyaXggfHwgZW1wdHlNYXRyaXggfSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxNYXRyaXhUYWJsZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0YXRlfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9NYXRyaXhUYWJsZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKVxyXG59IiwiaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCx1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBNYXRyaXhUYWJsZUNvbnRleHQsIE1hdHJpeFRhYmxlQ29udGV4dFByb3ZpZGVyIH0gZnJvbSAnLi9jb250ZXh0J1xyXG5cclxuICB0eXBlIFByb3BzID0ge1xyXG4gICAgaW5pdGlhbE1hdHJpeD86IGltcG9ydCgnLi4vLi4vdHlwZXMnKS5NYXRyaXhcclxuICB9ICYgaW1wb3J0KCdyZWFjdCcpLkhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PlxyXG5cclxuICAvKipcclxuICAgKiBBZGQgNCBidXR0b25zOiBcclxuICAgKiAtIENhbmNlbCB0byByZXNldCB0aGUgbWF0cml4IHRvIGhvdyBpdCB3YXMgYmVmb3JlIGNoYW5naW5nIHRoZSB2YWx1ZXMgKG9ubHkgd2hlbiBpbiBlZGl0IG1vZGUpXHJcbiAgICogLSBFZGl0IHRvIG1ha2UgdGhlIGZpZWxkcyBlZGl0YWJsZSAob25seSB3aGVuIG5vdCBpbiBlZGl0IG1vZGUpXHJcbiAgICogLSBDbGVhciB0byBjb21wbGV0ZWx5IGNsZWFyIHRoZSB0YWJsZVxyXG4gICAqIC0gU2F2ZSB0byBzYXZlIHRoZSB0YWJsZVxyXG4gICAqIEBwYXJhbSBwYXJhbTAgXHJcbiAgICovXHJcbiAgY29uc3QgTWF0cml4VGFibGU6IGltcG9ydCgncmVhY3QnKS5GQzxPbWl0PFByb3BzLCAnaW5pdGlhbE1hdHJpeCc+PiA9ICh7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IHtcclxuICAvLyBTdGF0ZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXHJcbiAgY29uc3QgW3sgbWF0cml4IH0sIGRpc3BhdGNoXSA9IHVzZUNvbnRleHQoTWF0cml4VGFibGVDb250ZXh0KVxyXG4gIGNvbnN0IFsgbWF0cml4RGF0YSwgc2V0TWF0cml4RGF0YV0gID0gdXNlU3RhdGUobWF0cml4KTtcclxuICBjb25zdCBbIGVuYWJsZUVkaXQsIHNldEVuYWJsZUVkaXQgXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIFxyXG4gIC8vIEhhbmRsZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cclxuICB1c2VFZmZlY3QoKCk9PntcclxuICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3ByaWNpbmcnLCB7XHJcbiAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIGFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgIC50aGVuKHJlcyA9PiBcclxuICAgICAgcmVzLmpzb24oKVxyXG4gICAgKVxyXG4gICAgLnRoZW4oZGF0YT0+IHtcclxuICAgICAgc2V0TWF0cml4RGF0YShkYXRhKTtcclxuICAgICAgZGlzcGF0Y2goe3R5cGU6ICdHRVRfQUxMX0RBVEEnLCBwYXlsb2FkOiBkYXRhIH0pO1xyXG5cclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKCctLS1lcnJvcicsIGVycikpO1xyXG4gIH0sW10pXHJcblxyXG4gIC8vIFlvdSBjYW4gc2F2ZSAodG8gYXBpKSB0aGUgbWF0cml4IGhlcmUuIFJlbWVtYmVyIHRvIHVwZGF0ZSBvcmlnaW5hbE1hdHJpeCB3aGVuIGRvbmUuXHJcbiAgY29uc3Qgc2F2ZSA9IGFzeW5jICgpID0+IHtcclxuICAgIHNldEVuYWJsZUVkaXQodHJ1ZSk7XHJcbiAgICBkaXNwYXRjaCh7dHlwZTogJ1NBVkVfSlNPTid9KTtcclxuICB9XHJcbiAgXHJcbiAgY29uc3QgZWRpdCA9ICgpPT57XHJcbiAgICBjb25zb2xlLmxvZyhcImVkaXRidXR0b25cIik7XHJcbiAgICBzZXRFbmFibGVFZGl0KGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNhbmNlbCA9ICgpPT57XHJcbiAgICBjb25zb2xlLmxvZyhcImNhbmNlbGJ1dHRvblwiKTtcclxuICAgIHNldEVuYWJsZUVkaXQodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjbGVhciA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdjbGVhcicpXHJcbiAgICBkaXNwYXRjaCh7dHlwZTogJ0NMRUFSX1BSSUNJTkcnfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoWydjb250YWluZXInLCBjbGFzc05hbWVdKX0gey4uLnByb3BzfT5cclxuICAgICAgPHRhYmxlIGlkPVwiY3VzdG9tZXJzXCI+XHJcbiAgICAgICAgPHRyPlxyXG4gICAgICAgICAgPHRoPm1vbnRoczwvdGg+XHJcbiAgICAgICAgICA8dGg+bGl0ZTwvdGg+XHJcbiAgICAgICAgICA8dGg+c3RhbmRhcmQ8L3RoPlxyXG4gICAgICAgICAgPHRoPnVubGltaXRlZDwvdGg+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgXHJcbiAgICAgICAge09iamVjdC5rZXlzKG1hdHJpeCkubWFwKChrZXlOYW1lLCBpKSA9PiBcclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRkPntrZXlOYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgIHtlbmFibGVFZGl0ID8gKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e21hdHJpeFtrZXlOYW1lXS5saXRlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e21hdHJpeFtrZXlOYW1lXS5zdGFuZGFyZH08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPnttYXRyaXhba2V5TmFtZV0udW5saW1pdGVkfTwvdGQ+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDx0ZD48aW5wdXQgdHlwZT0nbnVtYmVyJyBkZWZhdWx0VmFsdWU9e21hdHJpeFtrZXlOYW1lXS5saXRlfSBvbkNoYW5nZT17ZXZlbnQgPT4gZGlzcGF0Y2goe3R5cGU6ICdFRElUX0FDVElPTicsIHBheWxvYWQ6IHtrZXlOYW1lLCBmaWVsZE5hbWU6ICdsaXRlJywgdmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZX19KX0gLz48L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPjxpbnB1dCB0eXBlPSdudW1iZXInIGRlZmF1bHRWYWx1ZT17bWF0cml4W2tleU5hbWVdLnN0YW5kYXJkfSAgb25DaGFuZ2U9e2V2ZW50ID0+IGRpc3BhdGNoKHt0eXBlOiAnRURJVF9BQ1RJT04nLCBwYXlsb2FkOiB7a2V5TmFtZSwgZmllbGROYW1lOiAnc3RhbmRhcmQnLCB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlfX0pfS8+PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD48aW5wdXQgdHlwZT0nbnVtYmVyJyBkZWZhdWx0VmFsdWU9e21hdHJpeFtrZXlOYW1lXS51bmxpbWl0ZWR9ICBvbkNoYW5nZT17ZXZlbnQgPT4gZGlzcGF0Y2goe3R5cGU6ICdFRElUX0FDVElPTicsIHBheWxvYWQ6IHtrZXlOYW1lLCBmaWVsZE5hbWU6ICd1bmxpbWl0ZWQnLCB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlfX0pfSAvPjwvdGQ+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0b25Hcm91cCc+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzYXZlfSA+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17Y2xlYXJ9ID5DbGVhcjwvYnV0dG9uPlxyXG4gICAgICAgIHtlbmFibGVFZGl0ID8gPGJ1dHRvbiBvbkNsaWNrPXtlZGl0fSA+RWRpdDwvYnV0dG9uPiA6IDxidXR0b24gb25DbGljaz17Y2FuY2VsfSBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIj5TaG93PC9idXR0b24+fVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxzdHlsZT57YFxyXG4gICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgICB3aWR0aDoxMDAlXHJcbiAgICAgICAgfVxyXG4gICAgICAgICNjdXN0b21lcnMge1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiVHJlYnVjaGV0IE1TXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICNjdXN0b21lcnMgdGQsICNjdXN0b21lcnMgdGgge1xyXG4gICAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgI2N1c3RvbWVycyB0cjpudGgtY2hpbGQoZXZlbil7YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjt9XHJcbiAgICAgICAgXHJcbiAgICAgICAgI2N1c3RvbWVycyB0cjpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogI2RkZDt9XHJcbiAgICAgICAgXHJcbiAgICAgICAgI2N1c3RvbWVycyB0aCB7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTJweDtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idXR0b25Hcm91cCB7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ1dHRvbkdyb3VwIGJ1dHRvbiB7XHJcbiAgICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBNYXRyaXhUYWJsZVdpdGhDb250ZXh0OiBpbXBvcnQoJ3JlYWN0JykuRkM8UHJvcHM+ID0gKHsgaW5pdGlhbE1hdHJpeCwgLi4ucHJvcHMgfSkgPT4ge1xyXG4gIC8vIFlvdSBjYW4gZmV0Y2ggdGhlIHByaWNpbmcgaGVyZSBvciBpbiBwYWdlcy9pbmRleC50c1xyXG4gIC8vIFJlbWVtYmVyIHRoYXQgeW91IHNob3VsZCB0cnkgdG8gcmVmbGVjdCB0aGUgc3RhdGUgb2YgcHJpY2luZyBpbiBvcmlnaW5hbE1hdHJpeC5cclxuICAvLyBtYXRyaXggd2lsbCBob2xkIHRoZSBsYXRlc3QgdmFsdWUgKGVkaXRlZCBvciBzYW1lIGFzIG9yaWdpbmFsTWF0cml4KVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE1hdHJpeFRhYmxlQ29udGV4dFByb3ZpZGVyIGluaXRpYWxNYXRyaXg9e2luaXRpYWxNYXRyaXh9PlxyXG4gICAgICA8TWF0cml4VGFibGUgey4uLnByb3BzfSAvPlxyXG4gICAgPC9NYXRyaXhUYWJsZUNvbnRleHRQcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hdHJpeFRhYmxlV2l0aENvbnRleHRcclxuIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IE1hdHJpeFRhYmxlIGZyb20gJy4uL2NvbXBvbmVudHMvTWF0cml4VGFibGUnXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgLy8gWW91IGNhbiBlaXRoZXIgZmV0Y2ggdGhlIHByaWNpbmcgaGVyZSBhbmQgcGFzcyBpdCB0byBNYXRyaXhUYWJsZVxuICAvLyBvciwgeW91IGNhbiBsZXQgTWF0cml4VGFibGUgaGFuZGxlIHRoZSBmZXRjaGluZ1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+TWF0cml4IENhbGN1bGF0aW9uPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbj5cbiAgICAgICAgPE1hdHJpeFRhYmxlIC8+XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxmb290ZXI+XG4gICAgICAgIEdvb2QgTHVjayAtIEZsdXhcbiAgICAgIDwvZm9vdGVyPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIHBhZGRpbmc6IDAgMC41cmVtO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgbWFpbiB7XG4gICAgICAgICAgcGFkZGluZzogNXJlbSAwO1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBmb290ZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlYWVhZWE7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9vdGVyIGltZyB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvb3RlciBhIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBhIHtcbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUgYSB7XG4gICAgICAgICAgY29sb3I6ICMwMDcwZjM7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpdGxlIGE6aG92ZXIsXG4gICAgICAgIC50aXRsZSBhOmZvY3VzLFxuICAgICAgICAudGl0bGUgYTphY3RpdmUge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTU7XG4gICAgICAgICAgZm9udC1zaXplOiA0cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpdGxlLFxuICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvZGUge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIHBhZGRpbmc6IDAuNzVyZW07XG4gICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgICAgZm9udC1mYW1pbHk6IE1lbmxvLCBNb25hY28sIEx1Y2lkYSBDb25zb2xlLCBMaWJlcmF0aW9uIE1vbm8sXG4gICAgICAgICAgICBEZWphVnUgU2FucyBNb25vLCBCaXRzdHJlYW0gVmVyYSBTYW5zIE1vbm8sIENvdXJpZXIgTmV3LCBtb25vc3BhY2U7XG4gICAgICAgIH1cblxuICAgICAgICAuZ3JpZCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgICAgICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkIHtcbiAgICAgICAgICBtYXJnaW46IDFyZW07XG4gICAgICAgICAgZmxleC1iYXNpczogNDUlO1xuICAgICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWFlYWVhO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZSwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2U7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZDpob3ZlcixcbiAgICAgICAgLmNhcmQ6Zm9jdXMsXG4gICAgICAgIC5jYXJkOmFjdGl2ZSB7XG4gICAgICAgICAgY29sb3I6ICMwMDcwZjM7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDA3MGYzO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQgaDMge1xuICAgICAgICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkIHAge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2dvIHtcbiAgICAgICAgICBoZWlnaHQ6IDFlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgIC5ncmlkIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgaHRtbCxcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90byxcbiAgICAgICAgICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsXG4gICAgICAgICAgICBzYW5zLXNlcmlmO1xuICAgICAgICB9XG5cbiAgICAgICAgKiB7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=