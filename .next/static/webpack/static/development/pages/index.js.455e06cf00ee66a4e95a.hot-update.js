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
      return _objectSpread({
        matrix: action.payload
      }, state);

    case 'SET_MATRIX':
      return _objectSpread({}, state);

    case 'SAVE_JSON':
      console.log('----state: ', state);
      saveJson(state.savedata);
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
      lineNumber: 140,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01hdHJpeFRhYmxlL2NvbnRleHQudHN4Il0sIm5hbWVzIjpbImVtcHR5TWF0cml4IiwiZGVmYXVsdFN0YXRlIiwibWF0cml4Iiwib3JpZ2luYWxNYXRyaXgiLCJzYXZlSnNvbiIsInZhbCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImFjY2VwdCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlcyIsImpzb24iLCJlcnIiLCJjb25zb2xlIiwibG9nIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJzYXZlZGF0YSIsIk1hdHJpeFRhYmxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJNYXRyaXhUYWJsZUNvbnRleHRQcm92aWRlciIsImluaXRpYWxNYXRyaXgiLCJjaGlsZHJlbiIsInVzZVJlZHVjZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUE0REEsSUFBTUEsV0FBVyxHQUFHO0FBQ2xCLGNBQVk7QUFDUixZQUFRLENBREE7QUFFUixnQkFBWSxDQUZKO0FBR1IsaUJBQWE7QUFITCxHQURNO0FBTWxCLGNBQVk7QUFDUixZQUFRLENBREE7QUFFUixnQkFBWSxDQUZKO0FBR1IsaUJBQWE7QUFITCxHQU5NO0FBV2xCLGNBQVk7QUFDUixZQUFRLENBREE7QUFFUixnQkFBWSxDQUZKO0FBR1IsaUJBQWE7QUFITCxHQVhNO0FBZ0JsQixTQUFPO0FBQ0gsWUFBUSxDQURMO0FBRUgsZ0JBQVksQ0FGVDtBQUdILGlCQUFhO0FBSFY7QUFoQlcsQ0FBcEI7QUF1QkEsSUFBTUMsWUFBOEIsR0FBRztBQUNyQ0MsUUFBTSxFQUFFRixXQUQ2QjtBQUVyQ0csZ0JBQWMsRUFBRUg7QUFGcUIsQ0FBdkM7O0FBS0EsSUFBTUksUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsR0FBRCxFQUFTO0FBQ3hCQyxPQUFLLENBQUMsd0NBQUQsRUFBMkM7QUFDNUNDLFVBQU0sRUFBRSxNQURvQztBQUU1Q0MsV0FBTyxFQUFFO0FBQ0xDLFlBQU0sRUFBRSxrQkFESDtBQUVMLHNCQUFnQjtBQUZYLEtBRm1DO0FBTTFDQyxRQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlUCxHQUFmO0FBTm9DLEdBQTNDLENBQUwsQ0FRS1EsSUFSTCxDQVFVLFVBQUFDLEdBQUc7QUFBQSxXQUNQQSxHQUFHLENBQUNDLElBQUosRUFETztBQUFBLEdBUmIsV0FXVyxVQUFBQyxHQUFHO0FBQUEsV0FBSUMsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF3QkYsR0FBeEIsQ0FBSjtBQUFBLEdBWGQ7QUFZRCxDQWJELEMsQ0FjQTs7O0FBR0EsSUFBTUcsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUEwQkMsTUFBMUIsRUFBcUU7QUFFbkYsVUFBT0EsTUFBTSxDQUFDQyxJQUFkO0FBQ0UsU0FBSyxjQUFMO0FBQ0U7QUFDRXBCLGNBQU0sRUFBRW1CLE1BQU0sQ0FBQ0U7QUFEakIsU0FFS0gsS0FGTDs7QUFLRixTQUFLLFlBQUw7QUFDRSwrQkFDS0EsS0FETDs7QUFHRixTQUFLLFdBQUw7QUFDRUgsYUFBTyxDQUFDQyxHQUFSLENBQVksYUFBWixFQUEyQkUsS0FBM0I7QUFDQWhCLGNBQVEsQ0FBQ2dCLEtBQUssQ0FBQ0ksUUFBUCxDQUFSO0FBQ0EsK0JBQ0tKLEtBREw7O0FBR0Y7QUFDRSxhQUFPQSxLQUFQO0FBbEJKO0FBb0JELENBdEJEOztBQXdCTyxJQUFNSyxrQkFBa0IsR0FBR0MsMkRBQWEsQ0FBNkQsQ0FBQ3pCLFlBQUQsRUFBZSxZQUFNLENBQUUsQ0FBdkIsQ0FBN0QsQ0FBeEM7QUFFUDs7Ozs7QUFJTyxJQUFNMEIsMEJBQTZELEdBQUcsU0FBaEVBLDBCQUFnRSxPQUFpQztBQUFBOztBQUFBLE1BQTlCQyxhQUE4QixRQUE5QkEsYUFBOEI7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDNUcsTUFBTVQsS0FBSyxHQUFHVSx3REFBVSxDQUFDWCxPQUFELEVBQVU7QUFBRWpCLFVBQU0sRUFBRTBCLGFBQWEsSUFBSTVCLFdBQTNCO0FBQXdDRyxrQkFBYyxFQUFFeUIsYUFBYSxJQUFJNUI7QUFBekUsR0FBVixDQUF4QjtBQUVBLFNBQ0UsTUFBQyxrQkFBRCxDQUFvQixRQUFwQjtBQUE2QixTQUFLLEVBQUVvQixLQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dTLFFBREgsQ0FERjtBQUtELENBUk07O0dBQU1GLDBCOztLQUFBQSwwQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuNDU1ZTA2Y2YwMGVlNjZhNGU5NWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVJlZHVjZXIsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcblxuLyoqXG4gKiBUaGlzIGlzIHRoZSBcbiAqL1xuaW50ZXJmYWNlIE1hdHJpeFRhYmxlU3RhdGUge1xuICAvKipcbiAgICogVGhpcyBpcyB0aGUgcHJpY2UgbWF0cml4IHRoYXQgY29udGFpbnMgdGhlIGxhdGVzdCB2YWx1ZVxuICAgKi9cbiAgbWF0cml4OiBpbXBvcnQoJy4uLy4uL3R5cGVzJykuTWF0cml4XG4gIC8qKlxuICAgKiBXZSB3aWxsIHVzZSBvcmlnaW5hbCBtYXRyaXggdG8gaGVscCB1cyBcInJlc2V0XCIgdGhlIHRhYmxlIHdoZW4gd2Ugd2FudCB0byBjYW5jZWwgZWRpdGluZyBpdC5cbiAgICogUmVtZW1iZXIgdGhhdCAqKndoZW5ldmVyKiogeW91IGdldCB0aGUgbWF0cml4IGZyb20gdGhlIHNlcnZlciwgeW91IG11c3Qgc2V0IG9yaWdpbmFsTWF0cml4XG4gICAqIHRvIHRoYXQgdmFsdWU7IG9yaWdpbmFsTWF0cml4IHNob3VsZCB0cnkgdG8gbWlycm9yIHRoZSBtYXRyaXggaW4gb3VyIGRhdGFiYXNlLlxuICAgKi9cbiAgb3JpZ2luYWxNYXRyaXg6IGltcG9ydCgnLi4vLi4vdHlwZXMnKS5NYXRyaXhcbn1cblxuLyoqXG4gKiBUaGVzZSBhcmUgdGhlIGFjdGlvbnMgeW91IGNhbiBkaXNwYXRjaC4gQWRkIGFjdGlvbnMgeW91IHdhbnQgdG8gaGVscCB5b3VcbiAqIHR5cGUgdGhlIGRpc3BhdGNoIGZ1bmN0aW9uXG4gKi9cbnR5cGUgTWF0cml4QWN0aW9uID0ge1xuICB0eXBlOiAnU0VUX01BVFJJWCcsXG4gIC8qKlxuICAgKiBXaGVuIHBheWxvYWQgaXMgZW1wdHksIHdlIHdpbGwgbmVlZCB0byBzZXQgdGhlIHZhbHVlcyBmcm9tIG9yaWdpbmFsTWF0cml4XG4gICAqLyBcbiAgcGF5bG9hZD86IGltcG9ydCgnLi4vLi4vdHlwZXMnKS5NYXRyaXhcbiAgbWV0YWRhdGE/OiB7XG4gICAgLyoqXG4gICAgICogSWYgdGhpcyBpcyBzZXQgdG8gdHJ1ZSwgdGhlbiBpbnN0ZWFkIG9mIHJlc2V0dGluZyB0byB0aGUgb3JpZ2luYWxNYXRyaXgsXG4gICAgICogd2UgcmVzZXQgdG8gdGhlIGVtcHR5TWF0cml4XG4gICAgICovXG4gICAgcmVzZXRUb0VtcHR5PzogYm9vbGVhblxuICB9XG59IHwge1xuICB0eXBlOiAnU0VUX09SSUdJTkFMX01BVFJJWCcsXG4gIC8qKlxuICAgKiBXaGVuIGVtcHR5LCBzZXQgdGhlIHZhbHVlIGZyb20gZW1wdHlNYXRyaXhcbiAgICovXG4gIHBheWxvYWQ/OiBpbXBvcnQoJy4uLy4uL3R5cGVzJykuTWF0cml4XG59IHwge1xuICB0eXBlOiAnU09NRV9BQ1RJT04nLFxuICBwYXlsb2FkOiBhbnlcbn0gfCB7XG4gIHR5cGU6ICdHRVRfQUxMX0RBVEEnLFxuICBwYXlsb2FkOiBhbnlcbn0gfCB7XG4gIHR5cGU6ICdTQVZFX0pTT04nLFxuICBwYXlsb2FkOiBhbnlcbn0vLyBIZXJlIHlvdSB3aWxsIG5lZWQgdG8gYWRkIHlvdXIgb3RoZXIgYWN0aW9uKHMpIGluIG9yZGVyIHRvIGVkaXQgdGhlIHByaWNpbmcgKHJlbW92ZSBTT01FX0FDVElPTilcblxuLyoqXG4gKiBUaGlzIGlzIGZvciB0aGUgUHJvdmlkZXIgY29tcG9uZW50XG4gKi9cbnR5cGUgUHJvdmlkZXJQcm9wcyA9IHtcbiAgaW5pdGlhbE1hdHJpeD86IGltcG9ydCgnLi4vLi4vdHlwZXMnKS5NYXRyaXhcbn1cblxuY29uc3QgZW1wdHlNYXRyaXggPSB7XG4gIFwiMzZtb250aHNcIjoge1xuICAgICAgXCJsaXRlXCI6IDAsXG4gICAgICBcInN0YW5kYXJkXCI6IDAsXG4gICAgICBcInVubGltaXRlZFwiOiAwLFxuICB9LFxuICBcIjI0bW9udGhzXCI6IHtcbiAgICAgIFwibGl0ZVwiOiAwLFxuICAgICAgXCJzdGFuZGFyZFwiOiAwLFxuICAgICAgXCJ1bmxpbWl0ZWRcIjogMFxuICB9LFxuICBcIjEybW9udGhzXCI6IHtcbiAgICAgIFwibGl0ZVwiOiAwLFxuICAgICAgXCJzdGFuZGFyZFwiOiAwLFxuICAgICAgXCJ1bmxpbWl0ZWRcIjogMFxuICB9LFxuICBcIm10bVwiOiB7XG4gICAgICBcImxpdGVcIjogMCxcbiAgICAgIFwic3RhbmRhcmRcIjogMCxcbiAgICAgIFwidW5saW1pdGVkXCI6IDBcbiAgfVxufVxuXG5jb25zdCBkZWZhdWx0U3RhdGU6IE1hdHJpeFRhYmxlU3RhdGUgPSB7XG4gIG1hdHJpeDogZW1wdHlNYXRyaXgsXG4gIG9yaWdpbmFsTWF0cml4OiBlbXB0eU1hdHJpeCxcbn1cblxuY29uc3Qgc2F2ZUpzb24gPSAodmFsKSA9PiB7XG4gIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3NhdmUtcHJpY2luZycsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIGFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHZhbClcbiAgICAgIH0pXG4gICAgICAudGhlbihyZXMgPT4gXG4gICAgICAgIHJlcy5qc29uKClcbiAgICAgIClcbiAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coJy0tLWVycm9yJywgZXJyKSlcbn1cbi8vIGltcG9ydCBmcyBmcm9tICdmcy1leHRyYSc7XG5cblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZTogTWF0cml4VGFibGVTdGF0ZSwgYWN0aW9uOiBNYXRyaXhBY3Rpb24pOiBNYXRyaXhUYWJsZVN0YXRlID0+IHtcblxuICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdHRVRfQUxMX0RBVEEnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbWF0cml4OiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICB9XG4gICAgICBcbiAgICBjYXNlICdTRVRfTUFUUklYJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgfVxuICAgIGNhc2UgJ1NBVkVfSlNPTic6XG4gICAgICBjb25zb2xlLmxvZygnLS0tLXN0YXRlOiAnLCBzdGF0ZSlcbiAgICAgIHNhdmVKc29uKHN0YXRlLnNhdmVkYXRhKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlXG4gICAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBNYXRyaXhUYWJsZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0PFtNYXRyaXhUYWJsZVN0YXRlLCBpbXBvcnQoJ3JlYWN0JykuRGlzcGF0Y2g8TWF0cml4QWN0aW9uPl0+KFtkZWZhdWx0U3RhdGUsICgpID0+IHt9XSlcblxuLyoqXG4gKiBUaGlzIGlzIHRoZSBwcm92aWRlciB0aGF0IGhvc3RzIHRoZSBzdGF0ZVxuICogQHBhcmFtIHBhcmFtMCBcbiAqL1xuZXhwb3J0IGNvbnN0IE1hdHJpeFRhYmxlQ29udGV4dFByb3ZpZGVyOiBpbXBvcnQoJ3JlYWN0JykuRkM8UHJvdmlkZXJQcm9wcz4gPSAoeyBpbml0aWFsTWF0cml4LCBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IHN0YXRlID0gdXNlUmVkdWNlcihyZWR1Y2VyLCB7IG1hdHJpeDogaW5pdGlhbE1hdHJpeCB8fCBlbXB0eU1hdHJpeCwgb3JpZ2luYWxNYXRyaXg6IGluaXRpYWxNYXRyaXggfHwgZW1wdHlNYXRyaXggfSlcblxuICByZXR1cm4gKFxuICAgIDxNYXRyaXhUYWJsZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0YXRlfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L01hdHJpeFRhYmxlQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=