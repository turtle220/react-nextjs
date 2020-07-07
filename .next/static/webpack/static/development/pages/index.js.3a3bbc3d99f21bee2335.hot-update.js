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
      lineNumber: 148,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01hdHJpeFRhYmxlL2NvbnRleHQudHN4Il0sIm5hbWVzIjpbImVtcHR5TWF0cml4IiwiZGVmYXVsdFN0YXRlIiwibWF0cml4Iiwib3JpZ2luYWxNYXRyaXgiLCJzYXZlSnNvbiIsInZhbCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImFjY2VwdCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlcyIsImpzb24iLCJlcnIiLCJjb25zb2xlIiwibG9nIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJrZXlOYW1lIiwiZmllbGROYW1lIiwiTWF0cml4VGFibGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIk1hdHJpeFRhYmxlQ29udGV4dFByb3ZpZGVyIiwiaW5pdGlhbE1hdHJpeCIsImNoaWxkcmVuIiwidXNlUmVkdWNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQStEQSxJQUFNQSxXQUFXLEdBQUc7QUFDbEIsY0FBWTtBQUNSLFlBQVEsQ0FEQTtBQUVSLGdCQUFZLENBRko7QUFHUixpQkFBYTtBQUhMLEdBRE07QUFNbEIsY0FBWTtBQUNSLFlBQVEsQ0FEQTtBQUVSLGdCQUFZLENBRko7QUFHUixpQkFBYTtBQUhMLEdBTk07QUFXbEIsY0FBWTtBQUNSLFlBQVEsQ0FEQTtBQUVSLGdCQUFZLENBRko7QUFHUixpQkFBYTtBQUhMLEdBWE07QUFnQmxCLFNBQU87QUFDSCxZQUFRLENBREw7QUFFSCxnQkFBWSxDQUZUO0FBR0gsaUJBQWE7QUFIVjtBQWhCVyxDQUFwQjtBQXVCQSxJQUFNQyxZQUE4QixHQUFHO0FBQ3JDQyxRQUFNLEVBQUVGLFdBRDZCO0FBRXJDRyxnQkFBYyxFQUFFSDtBQUZxQixDQUF2Qzs7QUFLQSxJQUFNSSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxHQUFELEVBQVM7QUFDeEJDLE9BQUssQ0FBQyx3Q0FBRCxFQUEyQztBQUM1Q0MsVUFBTSxFQUFFLE1BRG9DO0FBRTVDQyxXQUFPLEVBQUU7QUFDTEMsWUFBTSxFQUFFLGtCQURIO0FBRUwsc0JBQWdCO0FBRlgsS0FGbUM7QUFNMUNDLFFBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVQLEdBQWY7QUFOb0MsR0FBM0MsQ0FBTCxDQVFLUSxJQVJMLENBUVUsVUFBQUMsR0FBRztBQUFBLFdBQ1BBLEdBQUcsQ0FBQ0MsSUFBSixFQURPO0FBQUEsR0FSYixXQVdXLFVBQUFDLEdBQUc7QUFBQSxXQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCRixHQUF4QixDQUFKO0FBQUEsR0FYZDtBQVlELENBYkQsQyxDQWNBOzs7QUFHQSxJQUFNRyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQTBCQyxNQUExQixFQUFxRTtBQUVuRixVQUFPQSxNQUFNLENBQUNDLElBQWQ7QUFDRSxTQUFLLGNBQUw7QUFDRUYsV0FBSyxDQUFDbEIsTUFBTixHQUFlbUIsTUFBTSxDQUFDRSxPQUF0QjtBQUNBLCtCQUNLSCxLQURMOztBQUlGLFNBQUssWUFBTDtBQUNFLCtCQUNLQSxLQURMOztBQUdGLFNBQUssV0FBTDtBQUNFaEIsY0FBUSxDQUFDZ0IsS0FBSyxDQUFDbEIsTUFBUCxDQUFSO0FBQ0EsK0JBQ0trQixLQURMOztBQUdGLFNBQUssYUFBTDtBQUNFSCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaLEVBQXlCRyxNQUFNLENBQUNFLE9BQWhDO0FBQ0FOLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRSxLQUFLLENBQUNsQixNQUFOLENBQWFtQixNQUFNLENBQUNFLE9BQVAsQ0FBZUMsT0FBNUIsRUFBcUNILE1BQU0sQ0FBQ0UsT0FBUCxDQUFlRSxTQUFwRCxDQUFaO0FBQ0EsK0JBQ0tMLEtBREw7O0FBR0Y7QUFDRSxhQUFPQSxLQUFQO0FBdkJKO0FBeUJELENBM0JEOztBQTZCTyxJQUFNTSxrQkFBa0IsR0FBR0MsMkRBQWEsQ0FBNkQsQ0FBQzFCLFlBQUQsRUFBZSxZQUFNLENBQUUsQ0FBdkIsQ0FBN0QsQ0FBeEM7QUFFUDs7Ozs7QUFJTyxJQUFNMkIsMEJBQTZELEdBQUcsU0FBaEVBLDBCQUFnRSxPQUFpQztBQUFBOztBQUFBLE1BQTlCQyxhQUE4QixRQUE5QkEsYUFBOEI7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDNUcsTUFBTVYsS0FBSyxHQUFHVyx3REFBVSxDQUFDWixPQUFELEVBQVU7QUFBRWpCLFVBQU0sRUFBRTJCLGFBQWEsSUFBSTdCLFdBQTNCO0FBQXdDRyxrQkFBYyxFQUFFMEIsYUFBYSxJQUFJN0I7QUFBekUsR0FBVixDQUF4QjtBQUVBLFNBQ0UsTUFBQyxrQkFBRCxDQUFvQixRQUFwQjtBQUE2QixTQUFLLEVBQUVvQixLQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dVLFFBREgsQ0FERjtBQUtELENBUk07O0dBQU1GLDBCOztLQUFBQSwwQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuM2EzYmJjM2Q5OWYyMWJlZTIzMzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVJlZHVjZXIsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcblxuLyoqXG4gKiBUaGlzIGlzIHRoZSBcbiAqL1xuaW50ZXJmYWNlIE1hdHJpeFRhYmxlU3RhdGUge1xuICAvKipcbiAgICogVGhpcyBpcyB0aGUgcHJpY2UgbWF0cml4IHRoYXQgY29udGFpbnMgdGhlIGxhdGVzdCB2YWx1ZVxuICAgKi9cbiAgbWF0cml4OiBpbXBvcnQoJy4uLy4uL3R5cGVzJykuTWF0cml4XG4gIC8qKlxuICAgKiBXZSB3aWxsIHVzZSBvcmlnaW5hbCBtYXRyaXggdG8gaGVscCB1cyBcInJlc2V0XCIgdGhlIHRhYmxlIHdoZW4gd2Ugd2FudCB0byBjYW5jZWwgZWRpdGluZyBpdC5cbiAgICogUmVtZW1iZXIgdGhhdCAqKndoZW5ldmVyKiogeW91IGdldCB0aGUgbWF0cml4IGZyb20gdGhlIHNlcnZlciwgeW91IG11c3Qgc2V0IG9yaWdpbmFsTWF0cml4XG4gICAqIHRvIHRoYXQgdmFsdWU7IG9yaWdpbmFsTWF0cml4IHNob3VsZCB0cnkgdG8gbWlycm9yIHRoZSBtYXRyaXggaW4gb3VyIGRhdGFiYXNlLlxuICAgKi9cbiAgb3JpZ2luYWxNYXRyaXg6IGltcG9ydCgnLi4vLi4vdHlwZXMnKS5NYXRyaXhcbn1cblxuLyoqXG4gKiBUaGVzZSBhcmUgdGhlIGFjdGlvbnMgeW91IGNhbiBkaXNwYXRjaC4gQWRkIGFjdGlvbnMgeW91IHdhbnQgdG8gaGVscCB5b3VcbiAqIHR5cGUgdGhlIGRpc3BhdGNoIGZ1bmN0aW9uXG4gKi9cbnR5cGUgTWF0cml4QWN0aW9uID0ge1xuICB0eXBlOiAnU0VUX01BVFJJWCcsXG4gIC8qKlxuICAgKiBXaGVuIHBheWxvYWQgaXMgZW1wdHksIHdlIHdpbGwgbmVlZCB0byBzZXQgdGhlIHZhbHVlcyBmcm9tIG9yaWdpbmFsTWF0cml4XG4gICAqLyBcbiAgcGF5bG9hZD86IGltcG9ydCgnLi4vLi4vdHlwZXMnKS5NYXRyaXhcbiAgbWV0YWRhdGE/OiB7XG4gICAgLyoqXG4gICAgICogSWYgdGhpcyBpcyBzZXQgdG8gdHJ1ZSwgdGhlbiBpbnN0ZWFkIG9mIHJlc2V0dGluZyB0byB0aGUgb3JpZ2luYWxNYXRyaXgsXG4gICAgICogd2UgcmVzZXQgdG8gdGhlIGVtcHR5TWF0cml4XG4gICAgICovXG4gICAgcmVzZXRUb0VtcHR5PzogYm9vbGVhblxuICB9XG59IHwge1xuICB0eXBlOiAnU0VUX09SSUdJTkFMX01BVFJJWCcsXG4gIC8qKlxuICAgKiBXaGVuIGVtcHR5LCBzZXQgdGhlIHZhbHVlIGZyb20gZW1wdHlNYXRyaXhcbiAgICovXG4gIHBheWxvYWQ/OiBpbXBvcnQoJy4uLy4uL3R5cGVzJykuTWF0cml4XG59IHwge1xuICB0eXBlOiAnU09NRV9BQ1RJT04nLFxuICBwYXlsb2FkOiBhbnlcbn0gfCB7XG4gIHR5cGU6ICdHRVRfQUxMX0RBVEEnLFxuICBwYXlsb2FkPzogaW1wb3J0KCcuLi8uLi90eXBlcycpLk1hdHJpeFxufSB8IHtcbiAgdHlwZTogJ1NBVkVfSlNPTicsXG4gIHBheWxvYWQ6IGFueVxufSAgfCB7XG4gIHR5cGU6ICdFRElUX0FDVElPTicsXG4gIHBheWxvYWQ6IGFueVxufS8vIEhlcmUgeW91IHdpbGwgbmVlZCB0byBhZGQgeW91ciBvdGhlciBhY3Rpb24ocykgaW4gb3JkZXIgdG8gZWRpdCB0aGUgcHJpY2luZyAocmVtb3ZlIFNPTUVfQUNUSU9OKVxuXG4vKipcbiAqIFRoaXMgaXMgZm9yIHRoZSBQcm92aWRlciBjb21wb25lbnRcbiAqL1xudHlwZSBQcm92aWRlclByb3BzID0ge1xuICBpbml0aWFsTWF0cml4PzogaW1wb3J0KCcuLi8uLi90eXBlcycpLk1hdHJpeFxufVxuXG5jb25zdCBlbXB0eU1hdHJpeCA9IHtcbiAgXCIzNm1vbnRoc1wiOiB7XG4gICAgICBcImxpdGVcIjogMCxcbiAgICAgIFwic3RhbmRhcmRcIjogMCxcbiAgICAgIFwidW5saW1pdGVkXCI6IDAsXG4gIH0sXG4gIFwiMjRtb250aHNcIjoge1xuICAgICAgXCJsaXRlXCI6IDAsXG4gICAgICBcInN0YW5kYXJkXCI6IDAsXG4gICAgICBcInVubGltaXRlZFwiOiAwXG4gIH0sXG4gIFwiMTJtb250aHNcIjoge1xuICAgICAgXCJsaXRlXCI6IDAsXG4gICAgICBcInN0YW5kYXJkXCI6IDAsXG4gICAgICBcInVubGltaXRlZFwiOiAwXG4gIH0sXG4gIFwibXRtXCI6IHtcbiAgICAgIFwibGl0ZVwiOiAwLFxuICAgICAgXCJzdGFuZGFyZFwiOiAwLFxuICAgICAgXCJ1bmxpbWl0ZWRcIjogMFxuICB9XG59XG5cbmNvbnN0IGRlZmF1bHRTdGF0ZTogTWF0cml4VGFibGVTdGF0ZSA9IHtcbiAgbWF0cml4OiBlbXB0eU1hdHJpeCxcbiAgb3JpZ2luYWxNYXRyaXg6IGVtcHR5TWF0cml4LFxufVxuXG5jb25zdCBzYXZlSnNvbiA9ICh2YWwpID0+IHtcbiAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvc2F2ZS1wcmljaW5nJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgYWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodmFsKVxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlcyA9PiBcbiAgICAgICAgcmVzLmpzb24oKVxuICAgICAgKVxuICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZygnLS0tZXJyb3InLCBlcnIpKVxufVxuLy8gaW1wb3J0IGZzIGZyb20gJ2ZzLWV4dHJhJztcblxuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlOiBNYXRyaXhUYWJsZVN0YXRlLCBhY3Rpb246IE1hdHJpeEFjdGlvbik6IE1hdHJpeFRhYmxlU3RhdGUgPT4ge1xuXG4gIHN3aXRjaChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ0dFVF9BTExfREFUQSc6XG4gICAgICBzdGF0ZS5tYXRyaXggPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgfVxuICAgICAgXG4gICAgY2FzZSAnU0VUX01BVFJJWCc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgIH1cbiAgICBjYXNlICdTQVZFX0pTT04nOlxuICAgICAgc2F2ZUpzb24oc3RhdGUubWF0cml4KTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlXG4gICAgICB9XG4gICAgY2FzZSAnRURJVF9BQ1RJT04nOlxuICAgICAgY29uc29sZS5sb2coJy0tLWVkaXQ6ICcsIGFjdGlvbi5wYXlsb2FkKVxuICAgICAgY29uc29sZS5sb2coc3RhdGUubWF0cml4W2FjdGlvbi5wYXlsb2FkLmtleU5hbWVdW2FjdGlvbi5wYXlsb2FkLmZpZWxkTmFtZV0pXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZVxuICAgICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgTWF0cml4VGFibGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxbTWF0cml4VGFibGVTdGF0ZSwgaW1wb3J0KCdyZWFjdCcpLkRpc3BhdGNoPE1hdHJpeEFjdGlvbj5dPihbZGVmYXVsdFN0YXRlLCAoKSA9PiB7fV0pXG5cbi8qKlxuICogVGhpcyBpcyB0aGUgcHJvdmlkZXIgdGhhdCBob3N0cyB0aGUgc3RhdGVcbiAqIEBwYXJhbSBwYXJhbTAgXG4gKi9cbmV4cG9ydCBjb25zdCBNYXRyaXhUYWJsZUNvbnRleHRQcm92aWRlcjogaW1wb3J0KCdyZWFjdCcpLkZDPFByb3ZpZGVyUHJvcHM+ID0gKHsgaW5pdGlhbE1hdHJpeCwgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBzdGF0ZSA9IHVzZVJlZHVjZXIocmVkdWNlciwgeyBtYXRyaXg6IGluaXRpYWxNYXRyaXggfHwgZW1wdHlNYXRyaXgsIG9yaWdpbmFsTWF0cml4OiBpbml0aWFsTWF0cml4IHx8IGVtcHR5TWF0cml4IH0pXG5cbiAgcmV0dXJuIChcbiAgICA8TWF0cml4VGFibGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzdGF0ZX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9NYXRyaXhUYWJsZUNvbnRleHQuUHJvdmlkZXI+XG4gIClcbn0iXSwic291cmNlUm9vdCI6IiJ9