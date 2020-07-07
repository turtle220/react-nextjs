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
      saveJson(state.matrix);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01hdHJpeFRhYmxlL2NvbnRleHQudHN4Il0sIm5hbWVzIjpbImVtcHR5TWF0cml4IiwiZGVmYXVsdFN0YXRlIiwibWF0cml4Iiwib3JpZ2luYWxNYXRyaXgiLCJzYXZlSnNvbiIsInZhbCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImFjY2VwdCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlcyIsImpzb24iLCJlcnIiLCJjb25zb2xlIiwibG9nIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJrZXlOYW1lIiwiZmllbGROYW1lIiwidmFsdWUiLCJNYXRyaXhUYWJsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiTWF0cml4VGFibGVDb250ZXh0UHJvdmlkZXIiLCJpbml0aWFsTWF0cml4IiwiY2hpbGRyZW4iLCJ1c2VSZWR1Y2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBaUVBLElBQU1BLFdBQVcsR0FBRztBQUNsQixjQUFZO0FBQ1IsWUFBUSxDQURBO0FBRVIsZ0JBQVksQ0FGSjtBQUdSLGlCQUFhO0FBSEwsR0FETTtBQU1sQixjQUFZO0FBQ1IsWUFBUSxDQURBO0FBRVIsZ0JBQVksQ0FGSjtBQUdSLGlCQUFhO0FBSEwsR0FOTTtBQVdsQixjQUFZO0FBQ1IsWUFBUSxDQURBO0FBRVIsZ0JBQVksQ0FGSjtBQUdSLGlCQUFhO0FBSEwsR0FYTTtBQWdCbEIsU0FBTztBQUNILFlBQVEsQ0FETDtBQUVILGdCQUFZLENBRlQ7QUFHSCxpQkFBYTtBQUhWO0FBaEJXLENBQXBCO0FBdUJBLElBQU1DLFlBQThCLEdBQUc7QUFDckNDLFFBQU0sRUFBRUYsV0FENkI7QUFFckNHLGdCQUFjLEVBQUVIO0FBRnFCLENBQXZDOztBQUtBLElBQU1JLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEdBQUQsRUFBUztBQUN4QkMsT0FBSyxDQUFDLHdDQUFELEVBQTJDO0FBQzVDQyxVQUFNLEVBQUUsTUFEb0M7QUFFNUNDLFdBQU8sRUFBRTtBQUNMQyxZQUFNLEVBQUUsa0JBREg7QUFFTCxzQkFBZ0I7QUFGWCxLQUZtQztBQU0xQ0MsUUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVAsR0FBZjtBQU5vQyxHQUEzQyxDQUFMLENBUUtRLElBUkwsQ0FRVSxVQUFBQyxHQUFHO0FBQUEsV0FDUEEsR0FBRyxDQUFDQyxJQUFKLEVBRE87QUFBQSxHQVJiLFdBV1csVUFBQUMsR0FBRztBQUFBLFdBQUlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVosRUFBd0JGLEdBQXhCLENBQUo7QUFBQSxHQVhkO0FBWUQsQ0FiRCxDLENBY0E7OztBQUdBLElBQU1HLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBMEJDLE1BQTFCLEVBQXFFO0FBRW5GLFVBQU9BLE1BQU0sQ0FBQ0MsSUFBZDtBQUNFLFNBQUssY0FBTDtBQUNFRixXQUFLLENBQUNsQixNQUFOLEdBQWVtQixNQUFNLENBQUNFLE9BQXRCO0FBQ0EsK0JBQ0tILEtBREw7O0FBSUYsU0FBSyxZQUFMO0FBQ0UsK0JBQ0tBLEtBREw7O0FBR0YsU0FBSyxXQUFMO0FBQ0VoQixjQUFRLENBQUNnQixLQUFLLENBQUNsQixNQUFQLENBQVI7QUFDQSwrQkFDS2tCLEtBREw7O0FBR0YsU0FBSyxhQUFMO0FBQ0VILGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVosRUFBeUJHLE1BQU0sQ0FBQ0UsT0FBaEM7QUFDQU4sYUFBTyxDQUFDQyxHQUFSLENBQVlFLEtBQUssQ0FBQ2xCLE1BQU4sQ0FBYW1CLE1BQU0sQ0FBQ0UsT0FBUCxDQUFlQyxPQUE1QixFQUFxQ0gsTUFBTSxDQUFDRSxPQUFQLENBQWVFLFNBQXBELENBQVo7QUFDQUwsV0FBSyxDQUFDbEIsTUFBTixDQUFhbUIsTUFBTSxDQUFDRSxPQUFQLENBQWVDLE9BQTVCLEVBQXFDSCxNQUFNLENBQUNFLE9BQVAsQ0FBZUUsU0FBcEQsSUFBaUVKLE1BQU0sQ0FBQ0UsT0FBUCxDQUFlRyxLQUFoRjtBQUNBLCtCQUNLTixLQURMOztBQUdGLFNBQUssZUFBTDtBQUNFaEIsY0FBUSxDQUFDZ0IsS0FBSyxDQUFDbEIsTUFBUCxDQUFSO0FBQ0EsK0JBQ0trQixLQURMOztBQUdGO0FBQ0UsYUFBT0EsS0FBUDtBQTdCSjtBQStCRCxDQWpDRDs7QUFtQ08sSUFBTU8sa0JBQWtCLEdBQUdDLDJEQUFhLENBQTZELENBQUMzQixZQUFELEVBQWUsWUFBTSxDQUFFLENBQXZCLENBQTdELENBQXhDO0FBRVA7Ozs7O0FBSU8sSUFBTTRCLDBCQUE2RCxHQUFHLFNBQWhFQSwwQkFBZ0UsT0FBaUM7QUFBQTs7QUFBQSxNQUE5QkMsYUFBOEIsUUFBOUJBLGFBQThCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQzVHLE1BQU1YLEtBQUssR0FBR1ksd0RBQVUsQ0FBQ2IsT0FBRCxFQUFVO0FBQUVqQixVQUFNLEVBQUU0QixhQUFhLElBQUk5QixXQUEzQjtBQUF3Q0csa0JBQWMsRUFBRTJCLGFBQWEsSUFBSTlCO0FBQXpFLEdBQVYsQ0FBeEI7QUFFQSxTQUNFLE1BQUMsa0JBQUQsQ0FBb0IsUUFBcEI7QUFBNkIsU0FBSyxFQUFFb0IsS0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHVyxRQURILENBREY7QUFLRCxDQVJNOztHQUFNRiwwQjs7S0FBQUEsMEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmE0NDdmMjQ0ZWRiMWVmMjQzYzgyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VSZWR1Y2VyLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbi8qKlxuICogVGhpcyBpcyB0aGUgXG4gKi9cbmludGVyZmFjZSBNYXRyaXhUYWJsZVN0YXRlIHtcbiAgLyoqXG4gICAqIFRoaXMgaXMgdGhlIHByaWNlIG1hdHJpeCB0aGF0IGNvbnRhaW5zIHRoZSBsYXRlc3QgdmFsdWVcbiAgICovXG4gIG1hdHJpeDogaW1wb3J0KCcuLi8uLi90eXBlcycpLk1hdHJpeFxuICAvKipcbiAgICogV2Ugd2lsbCB1c2Ugb3JpZ2luYWwgbWF0cml4IHRvIGhlbHAgdXMgXCJyZXNldFwiIHRoZSB0YWJsZSB3aGVuIHdlIHdhbnQgdG8gY2FuY2VsIGVkaXRpbmcgaXQuXG4gICAqIFJlbWVtYmVyIHRoYXQgKip3aGVuZXZlcioqIHlvdSBnZXQgdGhlIG1hdHJpeCBmcm9tIHRoZSBzZXJ2ZXIsIHlvdSBtdXN0IHNldCBvcmlnaW5hbE1hdHJpeFxuICAgKiB0byB0aGF0IHZhbHVlOyBvcmlnaW5hbE1hdHJpeCBzaG91bGQgdHJ5IHRvIG1pcnJvciB0aGUgbWF0cml4IGluIG91ciBkYXRhYmFzZS5cbiAgICovXG4gIG9yaWdpbmFsTWF0cml4OiBpbXBvcnQoJy4uLy4uL3R5cGVzJykuTWF0cml4XG59XG5cbi8qKlxuICogVGhlc2UgYXJlIHRoZSBhY3Rpb25zIHlvdSBjYW4gZGlzcGF0Y2guIEFkZCBhY3Rpb25zIHlvdSB3YW50IHRvIGhlbHAgeW91XG4gKiB0eXBlIHRoZSBkaXNwYXRjaCBmdW5jdGlvblxuICovXG50eXBlIE1hdHJpeEFjdGlvbiA9IHtcbiAgdHlwZTogJ1NFVF9NQVRSSVgnLFxuICAvKipcbiAgICogV2hlbiBwYXlsb2FkIGlzIGVtcHR5LCB3ZSB3aWxsIG5lZWQgdG8gc2V0IHRoZSB2YWx1ZXMgZnJvbSBvcmlnaW5hbE1hdHJpeFxuICAgKi8gXG4gIHBheWxvYWQ/OiBpbXBvcnQoJy4uLy4uL3R5cGVzJykuTWF0cml4XG4gIG1ldGFkYXRhPzoge1xuICAgIC8qKlxuICAgICAqIElmIHRoaXMgaXMgc2V0IHRvIHRydWUsIHRoZW4gaW5zdGVhZCBvZiByZXNldHRpbmcgdG8gdGhlIG9yaWdpbmFsTWF0cml4LFxuICAgICAqIHdlIHJlc2V0IHRvIHRoZSBlbXB0eU1hdHJpeFxuICAgICAqL1xuICAgIHJlc2V0VG9FbXB0eT86IGJvb2xlYW5cbiAgfVxufSB8IHtcbiAgdHlwZTogJ1NFVF9PUklHSU5BTF9NQVRSSVgnLFxuICAvKipcbiAgICogV2hlbiBlbXB0eSwgc2V0IHRoZSB2YWx1ZSBmcm9tIGVtcHR5TWF0cml4XG4gICAqL1xuICBwYXlsb2FkPzogaW1wb3J0KCcuLi8uLi90eXBlcycpLk1hdHJpeFxufSB8IHtcbiAgdHlwZTogJ1NPTUVfQUNUSU9OJyxcbiAgcGF5bG9hZDogYW55XG59IHwge1xuICB0eXBlOiAnR0VUX0FMTF9EQVRBJyxcbiAgcGF5bG9hZD86IGltcG9ydCgnLi4vLi4vdHlwZXMnKS5NYXRyaXhcbn0gfCB7XG4gIHR5cGU6ICdTQVZFX0pTT04nLFxuICBwYXlsb2FkOiBhbnlcbn0gfCB7XG4gIHR5cGU6ICdFRElUX0FDVElPTicsXG4gIHBheWxvYWQ6IGFueVxufSB8IHtcbiAgdHlwZTogJ0NMRUFSX1BSSUNJTkcnLFxufS8vIEhlcmUgeW91IHdpbGwgbmVlZCB0byBhZGQgeW91ciBvdGhlciBhY3Rpb24ocykgaW4gb3JkZXIgdG8gZWRpdCB0aGUgcHJpY2luZyAocmVtb3ZlIFNPTUVfQUNUSU9OKVxuXG4vKipcbiAqIFRoaXMgaXMgZm9yIHRoZSBQcm92aWRlciBjb21wb25lbnRcbiAqL1xudHlwZSBQcm92aWRlclByb3BzID0ge1xuICBpbml0aWFsTWF0cml4PzogaW1wb3J0KCcuLi8uLi90eXBlcycpLk1hdHJpeFxufVxuXG5jb25zdCBlbXB0eU1hdHJpeCA9IHtcbiAgXCIzNm1vbnRoc1wiOiB7XG4gICAgICBcImxpdGVcIjogMCxcbiAgICAgIFwic3RhbmRhcmRcIjogMCxcbiAgICAgIFwidW5saW1pdGVkXCI6IDAsXG4gIH0sXG4gIFwiMjRtb250aHNcIjoge1xuICAgICAgXCJsaXRlXCI6IDAsXG4gICAgICBcInN0YW5kYXJkXCI6IDAsXG4gICAgICBcInVubGltaXRlZFwiOiAwXG4gIH0sXG4gIFwiMTJtb250aHNcIjoge1xuICAgICAgXCJsaXRlXCI6IDAsXG4gICAgICBcInN0YW5kYXJkXCI6IDAsXG4gICAgICBcInVubGltaXRlZFwiOiAwXG4gIH0sXG4gIFwibXRtXCI6IHtcbiAgICAgIFwibGl0ZVwiOiAwLFxuICAgICAgXCJzdGFuZGFyZFwiOiAwLFxuICAgICAgXCJ1bmxpbWl0ZWRcIjogMFxuICB9XG59XG5cbmNvbnN0IGRlZmF1bHRTdGF0ZTogTWF0cml4VGFibGVTdGF0ZSA9IHtcbiAgbWF0cml4OiBlbXB0eU1hdHJpeCxcbiAgb3JpZ2luYWxNYXRyaXg6IGVtcHR5TWF0cml4LFxufVxuXG5jb25zdCBzYXZlSnNvbiA9ICh2YWwpID0+IHtcbiAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvc2F2ZS1wcmljaW5nJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgYWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodmFsKVxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlcyA9PiBcbiAgICAgICAgcmVzLmpzb24oKVxuICAgICAgKVxuICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZygnLS0tZXJyb3InLCBlcnIpKVxufVxuLy8gaW1wb3J0IGZzIGZyb20gJ2ZzLWV4dHJhJztcblxuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlOiBNYXRyaXhUYWJsZVN0YXRlLCBhY3Rpb246IE1hdHJpeEFjdGlvbik6IE1hdHJpeFRhYmxlU3RhdGUgPT4ge1xuXG4gIHN3aXRjaChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ0dFVF9BTExfREFUQSc6XG4gICAgICBzdGF0ZS5tYXRyaXggPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgfVxuICAgICAgXG4gICAgY2FzZSAnU0VUX01BVFJJWCc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgIH1cbiAgICBjYXNlICdTQVZFX0pTT04nOlxuICAgICAgc2F2ZUpzb24oc3RhdGUubWF0cml4KTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlXG4gICAgICB9XG4gICAgY2FzZSAnRURJVF9BQ1RJT04nOlxuICAgICAgY29uc29sZS5sb2coJy0tLWVkaXQ6ICcsIGFjdGlvbi5wYXlsb2FkKVxuICAgICAgY29uc29sZS5sb2coc3RhdGUubWF0cml4W2FjdGlvbi5wYXlsb2FkLmtleU5hbWVdW2FjdGlvbi5wYXlsb2FkLmZpZWxkTmFtZV0pXG4gICAgICBzdGF0ZS5tYXRyaXhbYWN0aW9uLnBheWxvYWQua2V5TmFtZV1bYWN0aW9uLnBheWxvYWQuZmllbGROYW1lXSA9IGFjdGlvbi5wYXlsb2FkLnZhbHVlO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGVcbiAgICAgIH1cbiAgICBjYXNlICdDTEVBUl9QUklDSU5HJzpcbiAgICAgIHNhdmVKc29uKHN0YXRlLm1hdHJpeCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZVxuICAgICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgTWF0cml4VGFibGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxbTWF0cml4VGFibGVTdGF0ZSwgaW1wb3J0KCdyZWFjdCcpLkRpc3BhdGNoPE1hdHJpeEFjdGlvbj5dPihbZGVmYXVsdFN0YXRlLCAoKSA9PiB7fV0pXG5cbi8qKlxuICogVGhpcyBpcyB0aGUgcHJvdmlkZXIgdGhhdCBob3N0cyB0aGUgc3RhdGVcbiAqIEBwYXJhbSBwYXJhbTAgXG4gKi9cbmV4cG9ydCBjb25zdCBNYXRyaXhUYWJsZUNvbnRleHRQcm92aWRlcjogaW1wb3J0KCdyZWFjdCcpLkZDPFByb3ZpZGVyUHJvcHM+ID0gKHsgaW5pdGlhbE1hdHJpeCwgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBzdGF0ZSA9IHVzZVJlZHVjZXIocmVkdWNlciwgeyBtYXRyaXg6IGluaXRpYWxNYXRyaXggfHwgZW1wdHlNYXRyaXgsIG9yaWdpbmFsTWF0cml4OiBpbml0aWFsTWF0cml4IHx8IGVtcHR5TWF0cml4IH0pXG5cbiAgcmV0dXJuIChcbiAgICA8TWF0cml4VGFibGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzdGF0ZX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9NYXRyaXhUYWJsZUNvbnRleHQuUHJvdmlkZXI+XG4gIClcbn0iXSwic291cmNlUm9vdCI6IiJ9