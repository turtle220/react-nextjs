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
    method: 'post',
    body: val,
    headers: {
      accept: 'application/json',
      'content-type': 'application/json'
    } // body: JSON.stringify("dfdfd")

  }).then(function (res) {
    return res.json();
  })["catch"](function (err) {
    return console.log('---error', err);
  });
}; // import fs from 'fs-extra';


var reducer = function reducer(state, action) {
  switch (action.type) {
    case 'GET_ALL_DATA':
      return _objectSpread(_objectSpread({}, state), action.payload);

    case 'SET_MATRIX':
      return _objectSpread({}, state);

    case 'SAVE_JSON':
      console.log('----save:'); // saveJson();

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
      lineNumber: 141,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01hdHJpeFRhYmxlL2NvbnRleHQudHN4Il0sIm5hbWVzIjpbImVtcHR5TWF0cml4IiwiZGVmYXVsdFN0YXRlIiwibWF0cml4Iiwib3JpZ2luYWxNYXRyaXgiLCJzYXZlSnNvbiIsInZhbCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsImhlYWRlcnMiLCJhY2NlcHQiLCJ0aGVuIiwicmVzIiwianNvbiIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCIsIk1hdHJpeFRhYmxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJNYXRyaXhUYWJsZUNvbnRleHRQcm92aWRlciIsImluaXRpYWxNYXRyaXgiLCJjaGlsZHJlbiIsInVzZVJlZHVjZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUE0REEsSUFBTUEsV0FBVyxHQUFHO0FBQ2xCLGNBQVk7QUFDUixZQUFRLENBREE7QUFFUixnQkFBWSxDQUZKO0FBR1IsaUJBQWE7QUFITCxHQURNO0FBTWxCLGNBQVk7QUFDUixZQUFRLENBREE7QUFFUixnQkFBWSxDQUZKO0FBR1IsaUJBQWE7QUFITCxHQU5NO0FBV2xCLGNBQVk7QUFDUixZQUFRLENBREE7QUFFUixnQkFBWSxDQUZKO0FBR1IsaUJBQWE7QUFITCxHQVhNO0FBZ0JsQixTQUFPO0FBQ0gsWUFBUSxDQURMO0FBRUgsZ0JBQVksQ0FGVDtBQUdILGlCQUFhO0FBSFY7QUFoQlcsQ0FBcEI7QUF1QkEsSUFBTUMsWUFBOEIsR0FBRztBQUNyQ0MsUUFBTSxFQUFFRixXQUQ2QjtBQUVyQ0csZ0JBQWMsRUFBRUg7QUFGcUIsQ0FBdkM7O0FBS0EsSUFBTUksUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsR0FBRCxFQUFTO0FBQ3hCQyxPQUFLLENBQUMsd0NBQUQsRUFBMkM7QUFDNUNDLFVBQU0sRUFBRSxNQURvQztBQUU1Q0MsUUFBSSxFQUFFSCxHQUZzQztBQUc1Q0ksV0FBTyxFQUFFO0FBQ0xDLFlBQU0sRUFBRSxrQkFESDtBQUVMLHNCQUFnQjtBQUZYLEtBSG1DLENBTzFDOztBQVAwQyxHQUEzQyxDQUFMLENBU0tDLElBVEwsQ0FTVSxVQUFBQyxHQUFHO0FBQUEsV0FDUEEsR0FBRyxDQUFDQyxJQUFKLEVBRE87QUFBQSxHQVRiLFdBWVcsVUFBQUMsR0FBRztBQUFBLFdBQUlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVosRUFBd0JGLEdBQXhCLENBQUo7QUFBQSxHQVpkO0FBYUQsQ0FkRCxDLENBZUE7OztBQUdBLElBQU1HLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBMEJDLE1BQTFCLEVBQXFFO0FBRW5GLFVBQU9BLE1BQU0sQ0FBQ0MsSUFBZDtBQUNFLFNBQUssY0FBTDtBQUNFLDZDQUNLRixLQURMLEdBRUtDLE1BQU0sQ0FBQ0UsT0FGWjs7QUFLRixTQUFLLFlBQUw7QUFDRSwrQkFDS0gsS0FETDs7QUFHRixTQUFLLFdBQUw7QUFDRUgsYUFBTyxDQUFDQyxHQUFSLENBQVksV0FBWixFQURGLENBRUU7O0FBQ0EsK0JBQ0tFLEtBREw7O0FBR0Y7QUFDRSxhQUFPQSxLQUFQO0FBbEJKO0FBb0JELENBdEJEOztBQXdCTyxJQUFNSSxrQkFBa0IsR0FBR0MsMkRBQWEsQ0FBNkQsQ0FBQ3RCLFlBQUQsRUFBZSxZQUFNLENBQUUsQ0FBdkIsQ0FBN0QsQ0FBeEM7QUFFUDs7Ozs7QUFJTyxJQUFNdUIsMEJBQTZELEdBQUcsU0FBaEVBLDBCQUFnRSxPQUFpQztBQUFBOztBQUFBLE1BQTlCQyxhQUE4QixRQUE5QkEsYUFBOEI7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDNUcsTUFBTVIsS0FBSyxHQUFHUyx3REFBVSxDQUFDVixPQUFELEVBQVU7QUFBRWYsVUFBTSxFQUFFdUIsYUFBYSxJQUFJekIsV0FBM0I7QUFBd0NHLGtCQUFjLEVBQUVzQixhQUFhLElBQUl6QjtBQUF6RSxHQUFWLENBQXhCO0FBRUEsU0FDRSxNQUFDLGtCQUFELENBQW9CLFFBQXBCO0FBQTZCLFNBQUssRUFBRWtCLEtBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1EsUUFESCxDQURGO0FBS0QsQ0FSTTs7R0FBTUYsMEI7O0tBQUFBLDBCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5kZjUwNThmZGFiYzg3NGI0MDkzMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlUmVkdWNlciwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG4vKipcbiAqIFRoaXMgaXMgdGhlIFxuICovXG5pbnRlcmZhY2UgTWF0cml4VGFibGVTdGF0ZSB7XG4gIC8qKlxuICAgKiBUaGlzIGlzIHRoZSBwcmljZSBtYXRyaXggdGhhdCBjb250YWlucyB0aGUgbGF0ZXN0IHZhbHVlXG4gICAqL1xuICBtYXRyaXg6IGltcG9ydCgnLi4vLi4vdHlwZXMnKS5NYXRyaXhcbiAgLyoqXG4gICAqIFdlIHdpbGwgdXNlIG9yaWdpbmFsIG1hdHJpeCB0byBoZWxwIHVzIFwicmVzZXRcIiB0aGUgdGFibGUgd2hlbiB3ZSB3YW50IHRvIGNhbmNlbCBlZGl0aW5nIGl0LlxuICAgKiBSZW1lbWJlciB0aGF0ICoqd2hlbmV2ZXIqKiB5b3UgZ2V0IHRoZSBtYXRyaXggZnJvbSB0aGUgc2VydmVyLCB5b3UgbXVzdCBzZXQgb3JpZ2luYWxNYXRyaXhcbiAgICogdG8gdGhhdCB2YWx1ZTsgb3JpZ2luYWxNYXRyaXggc2hvdWxkIHRyeSB0byBtaXJyb3IgdGhlIG1hdHJpeCBpbiBvdXIgZGF0YWJhc2UuXG4gICAqL1xuICBvcmlnaW5hbE1hdHJpeDogaW1wb3J0KCcuLi8uLi90eXBlcycpLk1hdHJpeFxufVxuXG4vKipcbiAqIFRoZXNlIGFyZSB0aGUgYWN0aW9ucyB5b3UgY2FuIGRpc3BhdGNoLiBBZGQgYWN0aW9ucyB5b3Ugd2FudCB0byBoZWxwIHlvdVxuICogdHlwZSB0aGUgZGlzcGF0Y2ggZnVuY3Rpb25cbiAqL1xudHlwZSBNYXRyaXhBY3Rpb24gPSB7XG4gIHR5cGU6ICdTRVRfTUFUUklYJyxcbiAgLyoqXG4gICAqIFdoZW4gcGF5bG9hZCBpcyBlbXB0eSwgd2Ugd2lsbCBuZWVkIHRvIHNldCB0aGUgdmFsdWVzIGZyb20gb3JpZ2luYWxNYXRyaXhcbiAgICovIFxuICBwYXlsb2FkPzogaW1wb3J0KCcuLi8uLi90eXBlcycpLk1hdHJpeFxuICBtZXRhZGF0YT86IHtcbiAgICAvKipcbiAgICAgKiBJZiB0aGlzIGlzIHNldCB0byB0cnVlLCB0aGVuIGluc3RlYWQgb2YgcmVzZXR0aW5nIHRvIHRoZSBvcmlnaW5hbE1hdHJpeCxcbiAgICAgKiB3ZSByZXNldCB0byB0aGUgZW1wdHlNYXRyaXhcbiAgICAgKi9cbiAgICByZXNldFRvRW1wdHk/OiBib29sZWFuXG4gIH1cbn0gfCB7XG4gIHR5cGU6ICdTRVRfT1JJR0lOQUxfTUFUUklYJyxcbiAgLyoqXG4gICAqIFdoZW4gZW1wdHksIHNldCB0aGUgdmFsdWUgZnJvbSBlbXB0eU1hdHJpeFxuICAgKi9cbiAgcGF5bG9hZD86IGltcG9ydCgnLi4vLi4vdHlwZXMnKS5NYXRyaXhcbn0gfCB7XG4gIHR5cGU6ICdTT01FX0FDVElPTicsXG4gIHBheWxvYWQ6IGFueVxufSB8IHtcbiAgdHlwZTogJ0dFVF9BTExfREFUQScsXG4gIHBheWxvYWQ6IGFueVxufSB8IHtcbiAgdHlwZTogJ1NBVkVfSlNPTicsXG4gIHBheWxvYWQ6IGFueVxufS8vIEhlcmUgeW91IHdpbGwgbmVlZCB0byBhZGQgeW91ciBvdGhlciBhY3Rpb24ocykgaW4gb3JkZXIgdG8gZWRpdCB0aGUgcHJpY2luZyAocmVtb3ZlIFNPTUVfQUNUSU9OKVxuXG4vKipcbiAqIFRoaXMgaXMgZm9yIHRoZSBQcm92aWRlciBjb21wb25lbnRcbiAqL1xudHlwZSBQcm92aWRlclByb3BzID0ge1xuICBpbml0aWFsTWF0cml4PzogaW1wb3J0KCcuLi8uLi90eXBlcycpLk1hdHJpeFxufVxuXG5jb25zdCBlbXB0eU1hdHJpeCA9IHtcbiAgXCIzNm1vbnRoc1wiOiB7XG4gICAgICBcImxpdGVcIjogMCxcbiAgICAgIFwic3RhbmRhcmRcIjogMCxcbiAgICAgIFwidW5saW1pdGVkXCI6IDAsXG4gIH0sXG4gIFwiMjRtb250aHNcIjoge1xuICAgICAgXCJsaXRlXCI6IDAsXG4gICAgICBcInN0YW5kYXJkXCI6IDAsXG4gICAgICBcInVubGltaXRlZFwiOiAwXG4gIH0sXG4gIFwiMTJtb250aHNcIjoge1xuICAgICAgXCJsaXRlXCI6IDAsXG4gICAgICBcInN0YW5kYXJkXCI6IDAsXG4gICAgICBcInVubGltaXRlZFwiOiAwXG4gIH0sXG4gIFwibXRtXCI6IHtcbiAgICAgIFwibGl0ZVwiOiAwLFxuICAgICAgXCJzdGFuZGFyZFwiOiAwLFxuICAgICAgXCJ1bmxpbWl0ZWRcIjogMFxuICB9XG59XG5cbmNvbnN0IGRlZmF1bHRTdGF0ZTogTWF0cml4VGFibGVTdGF0ZSA9IHtcbiAgbWF0cml4OiBlbXB0eU1hdHJpeCxcbiAgb3JpZ2luYWxNYXRyaXg6IGVtcHR5TWF0cml4LFxufVxuXG5jb25zdCBzYXZlSnNvbiA9ICh2YWwpID0+IHtcbiAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvc2F2ZS1wcmljaW5nJywge1xuICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICBib2R5OiB2YWwsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgYWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICAgICAgLy8gYm9keTogSlNPTi5zdHJpbmdpZnkoXCJkZmRmZFwiKVxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlcyA9PiBcbiAgICAgICAgcmVzLmpzb24oKVxuICAgICAgKVxuICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZygnLS0tZXJyb3InLCBlcnIpKVxufVxuLy8gaW1wb3J0IGZzIGZyb20gJ2ZzLWV4dHJhJztcblxuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlOiBNYXRyaXhUYWJsZVN0YXRlLCBhY3Rpb246IE1hdHJpeEFjdGlvbik6IE1hdHJpeFRhYmxlU3RhdGUgPT4ge1xuXG4gIHN3aXRjaChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ0dFVF9BTExfREFUQSc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQsXG4gICAgICB9XG4gICAgICBcbiAgICBjYXNlICdTRVRfTUFUUklYJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgfVxuICAgIGNhc2UgJ1NBVkVfSlNPTic6XG4gICAgICBjb25zb2xlLmxvZygnLS0tLXNhdmU6JylcbiAgICAgIC8vIHNhdmVKc29uKCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZVxuICAgICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgTWF0cml4VGFibGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxbTWF0cml4VGFibGVTdGF0ZSwgaW1wb3J0KCdyZWFjdCcpLkRpc3BhdGNoPE1hdHJpeEFjdGlvbj5dPihbZGVmYXVsdFN0YXRlLCAoKSA9PiB7fV0pXG5cbi8qKlxuICogVGhpcyBpcyB0aGUgcHJvdmlkZXIgdGhhdCBob3N0cyB0aGUgc3RhdGVcbiAqIEBwYXJhbSBwYXJhbTAgXG4gKi9cbmV4cG9ydCBjb25zdCBNYXRyaXhUYWJsZUNvbnRleHRQcm92aWRlcjogaW1wb3J0KCdyZWFjdCcpLkZDPFByb3ZpZGVyUHJvcHM+ID0gKHsgaW5pdGlhbE1hdHJpeCwgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBzdGF0ZSA9IHVzZVJlZHVjZXIocmVkdWNlciwgeyBtYXRyaXg6IGluaXRpYWxNYXRyaXggfHwgZW1wdHlNYXRyaXgsIG9yaWdpbmFsTWF0cml4OiBpbml0aWFsTWF0cml4IHx8IGVtcHR5TWF0cml4IH0pXG5cbiAgcmV0dXJuIChcbiAgICA8TWF0cml4VGFibGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzdGF0ZX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9NYXRyaXhUYWJsZUNvbnRleHQuUHJvdmlkZXI+XG4gIClcbn0iXSwic291cmNlUm9vdCI6IiJ9