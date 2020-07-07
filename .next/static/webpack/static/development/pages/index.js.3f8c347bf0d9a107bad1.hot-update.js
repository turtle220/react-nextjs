webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/MatrixTable/context.tsx":
/*!********************************************!*\
  !*** ./components/MatrixTable/context.tsx ***!
  \********************************************/
/*! exports provided: MatrixTableContext, MatrixTableContextProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatrixTableContext", function() { return MatrixTableContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatrixTableContextProvider", function() { return MatrixTableContextProvider; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _this = undefined,
    _jsxFileName = "D:\\interview\\interview-fullstack-master\\components\\MatrixTable\\context.tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var emptyMatrix = {
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
var defaultState = {
  matrix: emptyMatrix,
  originalMatrix: emptyMatrix
};

var saveJson = function saveJson(val) {
  fetch('http://localhost:3000/api/save-pricing', {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json'
    },
    body: JSON.stringify(val)
  }).then(function (res) {
    return res.json();
  })["catch"](function (err) {
    return console.log('---error', err);
  });
}; // import fs from 'fs-extra';


var reducer = function reducer(state, action) {
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
      console.log('---edit: ', action.payload);
      console.log(state.matrix[action.payload.keyName][action.payload.fieldName]);
      state.matrix[action.payload.keyName][action.payload.fieldName] = action.payload.value;
      return _objectSpread({}, state);

    case 'CLEAR_PRICING':
      console.log('----clear');
      return _objectSpread({}, state);

    default:
      return state;
  }
};

var MatrixTableContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])([defaultState, function () {}]);
/**
 * This is the provider that hosts the state
 * @param param0 
 */

var MatrixTableContextProvider = function MatrixTableContextProvider(_ref) {
  _s();

  var initialMatrix = _ref.initialMatrix,
      children = _ref.children;
  var state = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(reducer, {
    matrix: initialMatrix || emptyMatrix,
    originalMatrix: initialMatrix || emptyMatrix
  });
  return __jsx(MatrixTableContext.Provider, {
    value: state,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 5
    }
  }, children);
};

_s(MatrixTableContextProvider, "Z3G2CrHQvAFidmS+kdGEoh0tzZs=");

_c = MatrixTableContextProvider;

var _c;

$RefreshReg$(_c, "MatrixTableContextProvider");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01hdHJpeFRhYmxlL2NvbnRleHQudHN4Il0sIm5hbWVzIjpbImVtcHR5TWF0cml4IiwiZGVmYXVsdFN0YXRlIiwibWF0cml4Iiwib3JpZ2luYWxNYXRyaXgiLCJzYXZlSnNvbiIsInZhbCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImFjY2VwdCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlcyIsImpzb24iLCJlcnIiLCJjb25zb2xlIiwibG9nIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJrZXlOYW1lIiwiZmllbGROYW1lIiwidmFsdWUiLCJNYXRyaXhUYWJsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiTWF0cml4VGFibGVDb250ZXh0UHJvdmlkZXIiLCJpbml0aWFsTWF0cml4IiwiY2hpbGRyZW4iLCJ1c2VSZWR1Y2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBaUVBLElBQU1BLFdBQVcsR0FBRztBQUNsQixjQUFZO0FBQ1IsWUFBUSxDQURBO0FBRVIsZ0JBQVksQ0FGSjtBQUdSLGlCQUFhO0FBSEwsR0FETTtBQU1sQixjQUFZO0FBQ1IsWUFBUSxDQURBO0FBRVIsZ0JBQVksQ0FGSjtBQUdSLGlCQUFhO0FBSEwsR0FOTTtBQVdsQixjQUFZO0FBQ1IsWUFBUSxDQURBO0FBRVIsZ0JBQVksQ0FGSjtBQUdSLGlCQUFhO0FBSEwsR0FYTTtBQWdCbEIsU0FBTztBQUNILFlBQVEsQ0FETDtBQUVILGdCQUFZLENBRlQ7QUFHSCxpQkFBYTtBQUhWO0FBaEJXLENBQXBCO0FBdUJBLElBQU1DLFlBQThCLEdBQUc7QUFDckNDLFFBQU0sRUFBRUYsV0FENkI7QUFFckNHLGdCQUFjLEVBQUVIO0FBRnFCLENBQXZDOztBQUtBLElBQU1JLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEdBQUQsRUFBUztBQUN4QkMsT0FBSyxDQUFDLHdDQUFELEVBQTJDO0FBQzVDQyxVQUFNLEVBQUUsTUFEb0M7QUFFNUNDLFdBQU8sRUFBRTtBQUNMQyxZQUFNLEVBQUUsa0JBREg7QUFFTCxzQkFBZ0I7QUFGWCxLQUZtQztBQU0xQ0MsUUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVAsR0FBZjtBQU5vQyxHQUEzQyxDQUFMLENBUUtRLElBUkwsQ0FRVSxVQUFBQyxHQUFHO0FBQUEsV0FDUEEsR0FBRyxDQUFDQyxJQUFKLEVBRE87QUFBQSxHQVJiLFdBV1csVUFBQUMsR0FBRztBQUFBLFdBQUlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVosRUFBd0JGLEdBQXhCLENBQUo7QUFBQSxHQVhkO0FBWUQsQ0FiRCxDLENBY0E7OztBQUdBLElBQU1HLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBMEJDLE1BQTFCLEVBQXFFO0FBRW5GLFVBQU9BLE1BQU0sQ0FBQ0MsSUFBZDtBQUNFLFNBQUssY0FBTDtBQUNFRixXQUFLLENBQUNsQixNQUFOLEdBQWVtQixNQUFNLENBQUNFLE9BQXRCO0FBQ0EsK0JBQ0tILEtBREw7O0FBSUYsU0FBSyxZQUFMO0FBQ0UsK0JBQ0tBLEtBREw7O0FBR0YsU0FBSyxXQUFMO0FBQ0VoQixjQUFRLENBQUNnQixLQUFLLENBQUNsQixNQUFQLENBQVI7QUFDQSwrQkFDS2tCLEtBREw7O0FBR0YsU0FBSyxhQUFMO0FBQ0VILGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVosRUFBeUJHLE1BQU0sQ0FBQ0UsT0FBaEM7QUFDQU4sYUFBTyxDQUFDQyxHQUFSLENBQVlFLEtBQUssQ0FBQ2xCLE1BQU4sQ0FBYW1CLE1BQU0sQ0FBQ0UsT0FBUCxDQUFlQyxPQUE1QixFQUFxQ0gsTUFBTSxDQUFDRSxPQUFQLENBQWVFLFNBQXBELENBQVo7QUFDQUwsV0FBSyxDQUFDbEIsTUFBTixDQUFhbUIsTUFBTSxDQUFDRSxPQUFQLENBQWVDLE9BQTVCLEVBQXFDSCxNQUFNLENBQUNFLE9BQVAsQ0FBZUUsU0FBcEQsSUFBaUVKLE1BQU0sQ0FBQ0UsT0FBUCxDQUFlRyxLQUFoRjtBQUNBLCtCQUNLTixLQURMOztBQUdGLFNBQUssZUFBTDtBQUNFSCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaO0FBQ0EsK0JBQ0tFLEtBREw7O0FBR0Y7QUFDRSxhQUFPQSxLQUFQO0FBN0JKO0FBK0JELENBakNEOztBQW1DTyxJQUFNTyxrQkFBa0IsR0FBR0MsMkRBQWEsQ0FBNkQsQ0FBQzNCLFlBQUQsRUFBZSxZQUFNLENBQUUsQ0FBdkIsQ0FBN0QsQ0FBeEM7QUFFUDs7Ozs7QUFJTyxJQUFNNEIsMEJBQTZELEdBQUcsU0FBaEVBLDBCQUFnRSxPQUFpQztBQUFBOztBQUFBLE1BQTlCQyxhQUE4QixRQUE5QkEsYUFBOEI7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDNUcsTUFBTVgsS0FBSyxHQUFHWSx3REFBVSxDQUFDYixPQUFELEVBQVU7QUFBRWpCLFVBQU0sRUFBRTRCLGFBQWEsSUFBSTlCLFdBQTNCO0FBQXdDRyxrQkFBYyxFQUFFMkIsYUFBYSxJQUFJOUI7QUFBekUsR0FBVixDQUF4QjtBQUVBLFNBQ0UsTUFBQyxrQkFBRCxDQUFvQixRQUFwQjtBQUE2QixTQUFLLEVBQUVvQixLQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dXLFFBREgsQ0FERjtBQUtELENBUk07O0dBQU1GLDBCOztLQUFBQSwwQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuM2Y4YzM0N2JmMGQ5YTEwN2JhZDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVJlZHVjZXIsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcblxuLyoqXG4gKiBUaGlzIGlzIHRoZSBcbiAqL1xuaW50ZXJmYWNlIE1hdHJpeFRhYmxlU3RhdGUge1xuICAvKipcbiAgICogVGhpcyBpcyB0aGUgcHJpY2UgbWF0cml4IHRoYXQgY29udGFpbnMgdGhlIGxhdGVzdCB2YWx1ZVxuICAgKi9cbiAgbWF0cml4OiBpbXBvcnQoJy4uLy4uL3R5cGVzJykuTWF0cml4XG4gIC8qKlxuICAgKiBXZSB3aWxsIHVzZSBvcmlnaW5hbCBtYXRyaXggdG8gaGVscCB1cyBcInJlc2V0XCIgdGhlIHRhYmxlIHdoZW4gd2Ugd2FudCB0byBjYW5jZWwgZWRpdGluZyBpdC5cbiAgICogUmVtZW1iZXIgdGhhdCAqKndoZW5ldmVyKiogeW91IGdldCB0aGUgbWF0cml4IGZyb20gdGhlIHNlcnZlciwgeW91IG11c3Qgc2V0IG9yaWdpbmFsTWF0cml4XG4gICAqIHRvIHRoYXQgdmFsdWU7IG9yaWdpbmFsTWF0cml4IHNob3VsZCB0cnkgdG8gbWlycm9yIHRoZSBtYXRyaXggaW4gb3VyIGRhdGFiYXNlLlxuICAgKi9cbiAgb3JpZ2luYWxNYXRyaXg6IGltcG9ydCgnLi4vLi4vdHlwZXMnKS5NYXRyaXhcbn1cblxuLyoqXG4gKiBUaGVzZSBhcmUgdGhlIGFjdGlvbnMgeW91IGNhbiBkaXNwYXRjaC4gQWRkIGFjdGlvbnMgeW91IHdhbnQgdG8gaGVscCB5b3VcbiAqIHR5cGUgdGhlIGRpc3BhdGNoIGZ1bmN0aW9uXG4gKi9cbnR5cGUgTWF0cml4QWN0aW9uID0ge1xuICB0eXBlOiAnU0VUX01BVFJJWCcsXG4gIC8qKlxuICAgKiBXaGVuIHBheWxvYWQgaXMgZW1wdHksIHdlIHdpbGwgbmVlZCB0byBzZXQgdGhlIHZhbHVlcyBmcm9tIG9yaWdpbmFsTWF0cml4XG4gICAqLyBcbiAgcGF5bG9hZD86IGltcG9ydCgnLi4vLi4vdHlwZXMnKS5NYXRyaXhcbiAgbWV0YWRhdGE/OiB7XG4gICAgLyoqXG4gICAgICogSWYgdGhpcyBpcyBzZXQgdG8gdHJ1ZSwgdGhlbiBpbnN0ZWFkIG9mIHJlc2V0dGluZyB0byB0aGUgb3JpZ2luYWxNYXRyaXgsXG4gICAgICogd2UgcmVzZXQgdG8gdGhlIGVtcHR5TWF0cml4XG4gICAgICovXG4gICAgcmVzZXRUb0VtcHR5PzogYm9vbGVhblxuICB9XG59IHwge1xuICB0eXBlOiAnU0VUX09SSUdJTkFMX01BVFJJWCcsXG4gIC8qKlxuICAgKiBXaGVuIGVtcHR5LCBzZXQgdGhlIHZhbHVlIGZyb20gZW1wdHlNYXRyaXhcbiAgICovXG4gIHBheWxvYWQ/OiBpbXBvcnQoJy4uLy4uL3R5cGVzJykuTWF0cml4XG59IHwge1xuICB0eXBlOiAnU09NRV9BQ1RJT04nLFxuICBwYXlsb2FkOiBhbnlcbn0gfCB7XG4gIHR5cGU6ICdHRVRfQUxMX0RBVEEnLFxuICBwYXlsb2FkPzogaW1wb3J0KCcuLi8uLi90eXBlcycpLk1hdHJpeFxufSB8IHtcbiAgdHlwZTogJ1NBVkVfSlNPTicsXG4gIHBheWxvYWQ6IGFueVxufSB8IHtcbiAgdHlwZTogJ0VESVRfQUNUSU9OJyxcbiAgcGF5bG9hZDogYW55XG59IHwge1xuICB0eXBlOiAnQ0xFQVJfUFJJQ0lORycsXG59Ly8gSGVyZSB5b3Ugd2lsbCBuZWVkIHRvIGFkZCB5b3VyIG90aGVyIGFjdGlvbihzKSBpbiBvcmRlciB0byBlZGl0IHRoZSBwcmljaW5nIChyZW1vdmUgU09NRV9BQ1RJT04pXG5cbi8qKlxuICogVGhpcyBpcyBmb3IgdGhlIFByb3ZpZGVyIGNvbXBvbmVudFxuICovXG50eXBlIFByb3ZpZGVyUHJvcHMgPSB7XG4gIGluaXRpYWxNYXRyaXg/OiBpbXBvcnQoJy4uLy4uL3R5cGVzJykuTWF0cml4XG59XG5cbmNvbnN0IGVtcHR5TWF0cml4ID0ge1xuICBcIjM2bW9udGhzXCI6IHtcbiAgICAgIFwibGl0ZVwiOiAwLFxuICAgICAgXCJzdGFuZGFyZFwiOiAwLFxuICAgICAgXCJ1bmxpbWl0ZWRcIjogMCxcbiAgfSxcbiAgXCIyNG1vbnRoc1wiOiB7XG4gICAgICBcImxpdGVcIjogMCxcbiAgICAgIFwic3RhbmRhcmRcIjogMCxcbiAgICAgIFwidW5saW1pdGVkXCI6IDBcbiAgfSxcbiAgXCIxMm1vbnRoc1wiOiB7XG4gICAgICBcImxpdGVcIjogMCxcbiAgICAgIFwic3RhbmRhcmRcIjogMCxcbiAgICAgIFwidW5saW1pdGVkXCI6IDBcbiAgfSxcbiAgXCJtdG1cIjoge1xuICAgICAgXCJsaXRlXCI6IDAsXG4gICAgICBcInN0YW5kYXJkXCI6IDAsXG4gICAgICBcInVubGltaXRlZFwiOiAwXG4gIH1cbn1cblxuY29uc3QgZGVmYXVsdFN0YXRlOiBNYXRyaXhUYWJsZVN0YXRlID0ge1xuICBtYXRyaXg6IGVtcHR5TWF0cml4LFxuICBvcmlnaW5hbE1hdHJpeDogZW1wdHlNYXRyaXgsXG59XG5cbmNvbnN0IHNhdmVKc29uID0gKHZhbCkgPT4ge1xuICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9zYXZlLXByaWNpbmcnLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBhY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh2YWwpXG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzID0+IFxuICAgICAgICByZXMuanNvbigpXG4gICAgICApXG4gICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKCctLS1lcnJvcicsIGVycikpXG59XG4vLyBpbXBvcnQgZnMgZnJvbSAnZnMtZXh0cmEnO1xuXG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGU6IE1hdHJpeFRhYmxlU3RhdGUsIGFjdGlvbjogTWF0cml4QWN0aW9uKTogTWF0cml4VGFibGVTdGF0ZSA9PiB7XG5cbiAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnR0VUX0FMTF9EQVRBJzpcbiAgICAgIHN0YXRlLm1hdHJpeCA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICB9XG4gICAgICBcbiAgICBjYXNlICdTRVRfTUFUUklYJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgfVxuICAgIGNhc2UgJ1NBVkVfSlNPTic6XG4gICAgICBzYXZlSnNvbihzdGF0ZS5tYXRyaXgpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGVcbiAgICAgIH1cbiAgICBjYXNlICdFRElUX0FDVElPTic6XG4gICAgICBjb25zb2xlLmxvZygnLS0tZWRpdDogJywgYWN0aW9uLnBheWxvYWQpXG4gICAgICBjb25zb2xlLmxvZyhzdGF0ZS5tYXRyaXhbYWN0aW9uLnBheWxvYWQua2V5TmFtZV1bYWN0aW9uLnBheWxvYWQuZmllbGROYW1lXSlcbiAgICAgIHN0YXRlLm1hdHJpeFthY3Rpb24ucGF5bG9hZC5rZXlOYW1lXVthY3Rpb24ucGF5bG9hZC5maWVsZE5hbWVdID0gYWN0aW9uLnBheWxvYWQudmFsdWU7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZVxuICAgICAgfVxuICAgIGNhc2UgJ0NMRUFSX1BSSUNJTkcnOlxuICAgICAgY29uc29sZS5sb2coJy0tLS1jbGVhcicpXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZVxuICAgICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgTWF0cml4VGFibGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxbTWF0cml4VGFibGVTdGF0ZSwgaW1wb3J0KCdyZWFjdCcpLkRpc3BhdGNoPE1hdHJpeEFjdGlvbj5dPihbZGVmYXVsdFN0YXRlLCAoKSA9PiB7fV0pXG5cbi8qKlxuICogVGhpcyBpcyB0aGUgcHJvdmlkZXIgdGhhdCBob3N0cyB0aGUgc3RhdGVcbiAqIEBwYXJhbSBwYXJhbTAgXG4gKi9cbmV4cG9ydCBjb25zdCBNYXRyaXhUYWJsZUNvbnRleHRQcm92aWRlcjogaW1wb3J0KCdyZWFjdCcpLkZDPFByb3ZpZGVyUHJvcHM+ID0gKHsgaW5pdGlhbE1hdHJpeCwgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBzdGF0ZSA9IHVzZVJlZHVjZXIocmVkdWNlciwgeyBtYXRyaXg6IGluaXRpYWxNYXRyaXggfHwgZW1wdHlNYXRyaXgsIG9yaWdpbmFsTWF0cml4OiBpbml0aWFsTWF0cml4IHx8IGVtcHR5TWF0cml4IH0pXG5cbiAgcmV0dXJuIChcbiAgICA8TWF0cml4VGFibGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzdGF0ZX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9NYXRyaXhUYWJsZUNvbnRleHQuUHJvdmlkZXI+XG4gIClcbn0iXSwic291cmNlUm9vdCI6IiJ9