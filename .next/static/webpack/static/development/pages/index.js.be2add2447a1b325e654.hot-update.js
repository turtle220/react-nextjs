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
      state.matrix = emptyMatrix;
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
      lineNumber: 157,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01hdHJpeFRhYmxlL2NvbnRleHQudHN4Il0sIm5hbWVzIjpbImVtcHR5TWF0cml4IiwiZGVmYXVsdFN0YXRlIiwibWF0cml4Iiwib3JpZ2luYWxNYXRyaXgiLCJzYXZlSnNvbiIsInZhbCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImFjY2VwdCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlcyIsImpzb24iLCJlcnIiLCJjb25zb2xlIiwibG9nIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJrZXlOYW1lIiwiZmllbGROYW1lIiwidmFsdWUiLCJNYXRyaXhUYWJsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiTWF0cml4VGFibGVDb250ZXh0UHJvdmlkZXIiLCJpbml0aWFsTWF0cml4IiwiY2hpbGRyZW4iLCJ1c2VSZWR1Y2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBaUVBLElBQU1BLFdBQVcsR0FBRztBQUNsQixjQUFZO0FBQ1IsWUFBUSxDQURBO0FBRVIsZ0JBQVksQ0FGSjtBQUdSLGlCQUFhO0FBSEwsR0FETTtBQU1sQixjQUFZO0FBQ1IsWUFBUSxDQURBO0FBRVIsZ0JBQVksQ0FGSjtBQUdSLGlCQUFhO0FBSEwsR0FOTTtBQVdsQixjQUFZO0FBQ1IsWUFBUSxDQURBO0FBRVIsZ0JBQVksQ0FGSjtBQUdSLGlCQUFhO0FBSEwsR0FYTTtBQWdCbEIsU0FBTztBQUNILFlBQVEsQ0FETDtBQUVILGdCQUFZLENBRlQ7QUFHSCxpQkFBYTtBQUhWO0FBaEJXLENBQXBCO0FBdUJBLElBQU1DLFlBQThCLEdBQUc7QUFDckNDLFFBQU0sRUFBRUYsV0FENkI7QUFFckNHLGdCQUFjLEVBQUVIO0FBRnFCLENBQXZDOztBQUtBLElBQU1JLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEdBQUQsRUFBUztBQUN4QkMsT0FBSyxDQUFDLHdDQUFELEVBQTJDO0FBQzVDQyxVQUFNLEVBQUUsTUFEb0M7QUFFNUNDLFdBQU8sRUFBRTtBQUNMQyxZQUFNLEVBQUUsa0JBREg7QUFFTCxzQkFBZ0I7QUFGWCxLQUZtQztBQU0xQ0MsUUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVAsR0FBZjtBQU5vQyxHQUEzQyxDQUFMLENBUUtRLElBUkwsQ0FRVSxVQUFBQyxHQUFHO0FBQUEsV0FDUEEsR0FBRyxDQUFDQyxJQUFKLEVBRE87QUFBQSxHQVJiLFdBV1csVUFBQUMsR0FBRztBQUFBLFdBQUlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVosRUFBd0JGLEdBQXhCLENBQUo7QUFBQSxHQVhkO0FBWUQsQ0FiRCxDLENBY0E7OztBQUdBLElBQU1HLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBMEJDLE1BQTFCLEVBQXFFO0FBRW5GLFVBQU9BLE1BQU0sQ0FBQ0MsSUFBZDtBQUNFLFNBQUssY0FBTDtBQUNFRixXQUFLLENBQUNsQixNQUFOLEdBQWVtQixNQUFNLENBQUNFLE9BQXRCO0FBQ0EsK0JBQ0tILEtBREw7O0FBSUYsU0FBSyxZQUFMO0FBQ0UsK0JBQ0tBLEtBREw7O0FBR0YsU0FBSyxXQUFMO0FBQ0VoQixjQUFRLENBQUNnQixLQUFLLENBQUNsQixNQUFQLENBQVI7QUFDQSwrQkFDS2tCLEtBREw7O0FBR0YsU0FBSyxhQUFMO0FBQ0VILGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVosRUFBeUJHLE1BQU0sQ0FBQ0UsT0FBaEM7QUFDQU4sYUFBTyxDQUFDQyxHQUFSLENBQVlFLEtBQUssQ0FBQ2xCLE1BQU4sQ0FBYW1CLE1BQU0sQ0FBQ0UsT0FBUCxDQUFlQyxPQUE1QixFQUFxQ0gsTUFBTSxDQUFDRSxPQUFQLENBQWVFLFNBQXBELENBQVo7QUFDQUwsV0FBSyxDQUFDbEIsTUFBTixDQUFhbUIsTUFBTSxDQUFDRSxPQUFQLENBQWVDLE9BQTVCLEVBQXFDSCxNQUFNLENBQUNFLE9BQVAsQ0FBZUUsU0FBcEQsSUFBaUVKLE1BQU0sQ0FBQ0UsT0FBUCxDQUFlRyxLQUFoRjtBQUNBLCtCQUNLTixLQURMOztBQUdGLFNBQUssZUFBTDtBQUNFSCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaO0FBQ0FFLFdBQUssQ0FBQ2xCLE1BQU4sR0FBZUYsV0FBZjtBQUNBLCtCQUNLb0IsS0FETDs7QUFHRjtBQUNFLGFBQU9BLEtBQVA7QUE5Qko7QUFnQ0QsQ0FsQ0Q7O0FBb0NPLElBQU1PLGtCQUFrQixHQUFHQywyREFBYSxDQUE2RCxDQUFDM0IsWUFBRCxFQUFlLFlBQU0sQ0FBRSxDQUF2QixDQUE3RCxDQUF4QztBQUVQOzs7OztBQUlPLElBQU00QiwwQkFBNkQsR0FBRyxTQUFoRUEsMEJBQWdFLE9BQWlDO0FBQUE7O0FBQUEsTUFBOUJDLGFBQThCLFFBQTlCQSxhQUE4QjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUM1RyxNQUFNWCxLQUFLLEdBQUdZLHdEQUFVLENBQUNiLE9BQUQsRUFBVTtBQUFFakIsVUFBTSxFQUFFNEIsYUFBYSxJQUFJOUIsV0FBM0I7QUFBd0NHLGtCQUFjLEVBQUUyQixhQUFhLElBQUk5QjtBQUF6RSxHQUFWLENBQXhCO0FBRUEsU0FDRSxNQUFDLGtCQUFELENBQW9CLFFBQXBCO0FBQTZCLFNBQUssRUFBRW9CLEtBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1csUUFESCxDQURGO0FBS0QsQ0FSTTs7R0FBTUYsMEI7O0tBQUFBLDBCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5iZTJhZGQyNDQ3YTFiMzI1ZTY1NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlUmVkdWNlciwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG4vKipcbiAqIFRoaXMgaXMgdGhlIFxuICovXG5pbnRlcmZhY2UgTWF0cml4VGFibGVTdGF0ZSB7XG4gIC8qKlxuICAgKiBUaGlzIGlzIHRoZSBwcmljZSBtYXRyaXggdGhhdCBjb250YWlucyB0aGUgbGF0ZXN0IHZhbHVlXG4gICAqL1xuICBtYXRyaXg6IGltcG9ydCgnLi4vLi4vdHlwZXMnKS5NYXRyaXhcbiAgLyoqXG4gICAqIFdlIHdpbGwgdXNlIG9yaWdpbmFsIG1hdHJpeCB0byBoZWxwIHVzIFwicmVzZXRcIiB0aGUgdGFibGUgd2hlbiB3ZSB3YW50IHRvIGNhbmNlbCBlZGl0aW5nIGl0LlxuICAgKiBSZW1lbWJlciB0aGF0ICoqd2hlbmV2ZXIqKiB5b3UgZ2V0IHRoZSBtYXRyaXggZnJvbSB0aGUgc2VydmVyLCB5b3UgbXVzdCBzZXQgb3JpZ2luYWxNYXRyaXhcbiAgICogdG8gdGhhdCB2YWx1ZTsgb3JpZ2luYWxNYXRyaXggc2hvdWxkIHRyeSB0byBtaXJyb3IgdGhlIG1hdHJpeCBpbiBvdXIgZGF0YWJhc2UuXG4gICAqL1xuICBvcmlnaW5hbE1hdHJpeDogaW1wb3J0KCcuLi8uLi90eXBlcycpLk1hdHJpeFxufVxuXG4vKipcbiAqIFRoZXNlIGFyZSB0aGUgYWN0aW9ucyB5b3UgY2FuIGRpc3BhdGNoLiBBZGQgYWN0aW9ucyB5b3Ugd2FudCB0byBoZWxwIHlvdVxuICogdHlwZSB0aGUgZGlzcGF0Y2ggZnVuY3Rpb25cbiAqL1xudHlwZSBNYXRyaXhBY3Rpb24gPSB7XG4gIHR5cGU6ICdTRVRfTUFUUklYJyxcbiAgLyoqXG4gICAqIFdoZW4gcGF5bG9hZCBpcyBlbXB0eSwgd2Ugd2lsbCBuZWVkIHRvIHNldCB0aGUgdmFsdWVzIGZyb20gb3JpZ2luYWxNYXRyaXhcbiAgICovIFxuICBwYXlsb2FkPzogaW1wb3J0KCcuLi8uLi90eXBlcycpLk1hdHJpeFxuICBtZXRhZGF0YT86IHtcbiAgICAvKipcbiAgICAgKiBJZiB0aGlzIGlzIHNldCB0byB0cnVlLCB0aGVuIGluc3RlYWQgb2YgcmVzZXR0aW5nIHRvIHRoZSBvcmlnaW5hbE1hdHJpeCxcbiAgICAgKiB3ZSByZXNldCB0byB0aGUgZW1wdHlNYXRyaXhcbiAgICAgKi9cbiAgICByZXNldFRvRW1wdHk/OiBib29sZWFuXG4gIH1cbn0gfCB7XG4gIHR5cGU6ICdTRVRfT1JJR0lOQUxfTUFUUklYJyxcbiAgLyoqXG4gICAqIFdoZW4gZW1wdHksIHNldCB0aGUgdmFsdWUgZnJvbSBlbXB0eU1hdHJpeFxuICAgKi9cbiAgcGF5bG9hZD86IGltcG9ydCgnLi4vLi4vdHlwZXMnKS5NYXRyaXhcbn0gfCB7XG4gIHR5cGU6ICdTT01FX0FDVElPTicsXG4gIHBheWxvYWQ6IGFueVxufSB8IHtcbiAgdHlwZTogJ0dFVF9BTExfREFUQScsXG4gIHBheWxvYWQ/OiBpbXBvcnQoJy4uLy4uL3R5cGVzJykuTWF0cml4XG59IHwge1xuICB0eXBlOiAnU0FWRV9KU09OJyxcbiAgcGF5bG9hZDogYW55XG59IHwge1xuICB0eXBlOiAnRURJVF9BQ1RJT04nLFxuICBwYXlsb2FkOiBhbnlcbn0gfCB7XG4gIHR5cGU6ICdDTEVBUl9QUklDSU5HJyxcbn0vLyBIZXJlIHlvdSB3aWxsIG5lZWQgdG8gYWRkIHlvdXIgb3RoZXIgYWN0aW9uKHMpIGluIG9yZGVyIHRvIGVkaXQgdGhlIHByaWNpbmcgKHJlbW92ZSBTT01FX0FDVElPTilcblxuLyoqXG4gKiBUaGlzIGlzIGZvciB0aGUgUHJvdmlkZXIgY29tcG9uZW50XG4gKi9cbnR5cGUgUHJvdmlkZXJQcm9wcyA9IHtcbiAgaW5pdGlhbE1hdHJpeD86IGltcG9ydCgnLi4vLi4vdHlwZXMnKS5NYXRyaXhcbn1cblxuY29uc3QgZW1wdHlNYXRyaXggPSB7XG4gIFwiMzZtb250aHNcIjoge1xuICAgICAgXCJsaXRlXCI6IDAsXG4gICAgICBcInN0YW5kYXJkXCI6IDAsXG4gICAgICBcInVubGltaXRlZFwiOiAwLFxuICB9LFxuICBcIjI0bW9udGhzXCI6IHtcbiAgICAgIFwibGl0ZVwiOiAwLFxuICAgICAgXCJzdGFuZGFyZFwiOiAwLFxuICAgICAgXCJ1bmxpbWl0ZWRcIjogMFxuICB9LFxuICBcIjEybW9udGhzXCI6IHtcbiAgICAgIFwibGl0ZVwiOiAwLFxuICAgICAgXCJzdGFuZGFyZFwiOiAwLFxuICAgICAgXCJ1bmxpbWl0ZWRcIjogMFxuICB9LFxuICBcIm10bVwiOiB7XG4gICAgICBcImxpdGVcIjogMCxcbiAgICAgIFwic3RhbmRhcmRcIjogMCxcbiAgICAgIFwidW5saW1pdGVkXCI6IDBcbiAgfVxufVxuXG5jb25zdCBkZWZhdWx0U3RhdGU6IE1hdHJpeFRhYmxlU3RhdGUgPSB7XG4gIG1hdHJpeDogZW1wdHlNYXRyaXgsXG4gIG9yaWdpbmFsTWF0cml4OiBlbXB0eU1hdHJpeCxcbn1cblxuY29uc3Qgc2F2ZUpzb24gPSAodmFsKSA9PiB7XG4gIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3NhdmUtcHJpY2luZycsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIGFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHZhbClcbiAgICAgIH0pXG4gICAgICAudGhlbihyZXMgPT4gXG4gICAgICAgIHJlcy5qc29uKClcbiAgICAgIClcbiAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coJy0tLWVycm9yJywgZXJyKSlcbn1cbi8vIGltcG9ydCBmcyBmcm9tICdmcy1leHRyYSc7XG5cblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZTogTWF0cml4VGFibGVTdGF0ZSwgYWN0aW9uOiBNYXRyaXhBY3Rpb24pOiBNYXRyaXhUYWJsZVN0YXRlID0+IHtcblxuICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdHRVRfQUxMX0RBVEEnOlxuICAgICAgc3RhdGUubWF0cml4ID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgIH1cbiAgICAgIFxuICAgIGNhc2UgJ1NFVF9NQVRSSVgnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICB9XG4gICAgY2FzZSAnU0FWRV9KU09OJzpcbiAgICAgIHNhdmVKc29uKHN0YXRlLm1hdHJpeCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZVxuICAgICAgfVxuICAgIGNhc2UgJ0VESVRfQUNUSU9OJzpcbiAgICAgIGNvbnNvbGUubG9nKCctLS1lZGl0OiAnLCBhY3Rpb24ucGF5bG9hZClcbiAgICAgIGNvbnNvbGUubG9nKHN0YXRlLm1hdHJpeFthY3Rpb24ucGF5bG9hZC5rZXlOYW1lXVthY3Rpb24ucGF5bG9hZC5maWVsZE5hbWVdKVxuICAgICAgc3RhdGUubWF0cml4W2FjdGlvbi5wYXlsb2FkLmtleU5hbWVdW2FjdGlvbi5wYXlsb2FkLmZpZWxkTmFtZV0gPSBhY3Rpb24ucGF5bG9hZC52YWx1ZTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlXG4gICAgICB9XG4gICAgY2FzZSAnQ0xFQVJfUFJJQ0lORyc6XG4gICAgICBjb25zb2xlLmxvZygnLS0tLWNsZWFyJylcbiAgICAgIHN0YXRlLm1hdHJpeCA9IGVtcHR5TWF0cml4O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGVcbiAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IE1hdHJpeFRhYmxlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8W01hdHJpeFRhYmxlU3RhdGUsIGltcG9ydCgncmVhY3QnKS5EaXNwYXRjaDxNYXRyaXhBY3Rpb24+XT4oW2RlZmF1bHRTdGF0ZSwgKCkgPT4ge31dKVxuXG4vKipcbiAqIFRoaXMgaXMgdGhlIHByb3ZpZGVyIHRoYXQgaG9zdHMgdGhlIHN0YXRlXG4gKiBAcGFyYW0gcGFyYW0wIFxuICovXG5leHBvcnQgY29uc3QgTWF0cml4VGFibGVDb250ZXh0UHJvdmlkZXI6IGltcG9ydCgncmVhY3QnKS5GQzxQcm92aWRlclByb3BzPiA9ICh7IGluaXRpYWxNYXRyaXgsIGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3Qgc3RhdGUgPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIHsgbWF0cml4OiBpbml0aWFsTWF0cml4IHx8IGVtcHR5TWF0cml4LCBvcmlnaW5hbE1hdHJpeDogaW5pdGlhbE1hdHJpeCB8fCBlbXB0eU1hdHJpeCB9KVxuXG4gIHJldHVybiAoXG4gICAgPE1hdHJpeFRhYmxlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RhdGV9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvTWF0cml4VGFibGVDb250ZXh0LlByb3ZpZGVyPlxuICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==