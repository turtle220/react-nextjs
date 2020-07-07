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
    method: 'get',
    // body: val,
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
      console.log('----save:', state);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01hdHJpeFRhYmxlL2NvbnRleHQudHN4Il0sIm5hbWVzIjpbImVtcHR5TWF0cml4IiwiZGVmYXVsdFN0YXRlIiwibWF0cml4Iiwib3JpZ2luYWxNYXRyaXgiLCJzYXZlSnNvbiIsInZhbCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImFjY2VwdCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIiwiTWF0cml4VGFibGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIk1hdHJpeFRhYmxlQ29udGV4dFByb3ZpZGVyIiwiaW5pdGlhbE1hdHJpeCIsImNoaWxkcmVuIiwidXNlUmVkdWNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQTREQSxJQUFNQSxXQUFXLEdBQUc7QUFDbEIsY0FBWTtBQUNSLFlBQVEsQ0FEQTtBQUVSLGdCQUFZLENBRko7QUFHUixpQkFBYTtBQUhMLEdBRE07QUFNbEIsY0FBWTtBQUNSLFlBQVEsQ0FEQTtBQUVSLGdCQUFZLENBRko7QUFHUixpQkFBYTtBQUhMLEdBTk07QUFXbEIsY0FBWTtBQUNSLFlBQVEsQ0FEQTtBQUVSLGdCQUFZLENBRko7QUFHUixpQkFBYTtBQUhMLEdBWE07QUFnQmxCLFNBQU87QUFDSCxZQUFRLENBREw7QUFFSCxnQkFBWSxDQUZUO0FBR0gsaUJBQWE7QUFIVjtBQWhCVyxDQUFwQjtBQXVCQSxJQUFNQyxZQUE4QixHQUFHO0FBQ3JDQyxRQUFNLEVBQUVGLFdBRDZCO0FBRXJDRyxnQkFBYyxFQUFFSDtBQUZxQixDQUF2Qzs7QUFLQSxJQUFNSSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxHQUFELEVBQVM7QUFDeEJDLE9BQUssQ0FBQyx3Q0FBRCxFQUEyQztBQUM1Q0MsVUFBTSxFQUFFLEtBRG9DO0FBRTVDO0FBQ0FDLFdBQU8sRUFBRTtBQUNMQyxZQUFNLEVBQUUsa0JBREg7QUFFTCxzQkFBZ0I7QUFGWCxLQUhtQyxDQU8xQzs7QUFQMEMsR0FBM0MsQ0FBTCxDQVNLQyxJQVRMLENBU1UsVUFBQUMsR0FBRztBQUFBLFdBQ1BBLEdBQUcsQ0FBQ0MsSUFBSixFQURPO0FBQUEsR0FUYixXQVlXLFVBQUFDLEdBQUc7QUFBQSxXQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCRixHQUF4QixDQUFKO0FBQUEsR0FaZDtBQWFELENBZEQsQyxDQWVBOzs7QUFHQSxJQUFNRyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQTBCQyxNQUExQixFQUFxRTtBQUVuRixVQUFPQSxNQUFNLENBQUNDLElBQWQ7QUFDRSxTQUFLLGNBQUw7QUFDRSw2Q0FDS0YsS0FETCxHQUVLQyxNQUFNLENBQUNFLE9BRlo7O0FBS0YsU0FBSyxZQUFMO0FBQ0UsK0JBQ0tILEtBREw7O0FBR0YsU0FBSyxXQUFMO0FBQ0VILGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVosRUFBeUJFLEtBQXpCO0FBQ0FiLGNBQVEsQ0FBQ2EsS0FBSyxDQUFDZixNQUFQLENBQVI7QUFDQSwrQkFDS2UsS0FETDs7QUFHRjtBQUNFLGFBQU9BLEtBQVA7QUFsQko7QUFvQkQsQ0F0QkQ7O0FBd0JPLElBQU1JLGtCQUFrQixHQUFHQywyREFBYSxDQUE2RCxDQUFDckIsWUFBRCxFQUFlLFlBQU0sQ0FBRSxDQUF2QixDQUE3RCxDQUF4QztBQUVQOzs7OztBQUlPLElBQU1zQiwwQkFBNkQsR0FBRyxTQUFoRUEsMEJBQWdFLE9BQWlDO0FBQUE7O0FBQUEsTUFBOUJDLGFBQThCLFFBQTlCQSxhQUE4QjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUM1RyxNQUFNUixLQUFLLEdBQUdTLHdEQUFVLENBQUNWLE9BQUQsRUFBVTtBQUFFZCxVQUFNLEVBQUVzQixhQUFhLElBQUl4QixXQUEzQjtBQUF3Q0csa0JBQWMsRUFBRXFCLGFBQWEsSUFBSXhCO0FBQXpFLEdBQVYsQ0FBeEI7QUFFQSxTQUNFLE1BQUMsa0JBQUQsQ0FBb0IsUUFBcEI7QUFBNkIsU0FBSyxFQUFFaUIsS0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHUSxRQURILENBREY7QUFLRCxDQVJNOztHQUFNRiwwQjs7S0FBQUEsMEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjdlODE0YmZlYzJmYTNiNmVhNjA5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VSZWR1Y2VyLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbi8qKlxuICogVGhpcyBpcyB0aGUgXG4gKi9cbmludGVyZmFjZSBNYXRyaXhUYWJsZVN0YXRlIHtcbiAgLyoqXG4gICAqIFRoaXMgaXMgdGhlIHByaWNlIG1hdHJpeCB0aGF0IGNvbnRhaW5zIHRoZSBsYXRlc3QgdmFsdWVcbiAgICovXG4gIG1hdHJpeDogaW1wb3J0KCcuLi8uLi90eXBlcycpLk1hdHJpeFxuICAvKipcbiAgICogV2Ugd2lsbCB1c2Ugb3JpZ2luYWwgbWF0cml4IHRvIGhlbHAgdXMgXCJyZXNldFwiIHRoZSB0YWJsZSB3aGVuIHdlIHdhbnQgdG8gY2FuY2VsIGVkaXRpbmcgaXQuXG4gICAqIFJlbWVtYmVyIHRoYXQgKip3aGVuZXZlcioqIHlvdSBnZXQgdGhlIG1hdHJpeCBmcm9tIHRoZSBzZXJ2ZXIsIHlvdSBtdXN0IHNldCBvcmlnaW5hbE1hdHJpeFxuICAgKiB0byB0aGF0IHZhbHVlOyBvcmlnaW5hbE1hdHJpeCBzaG91bGQgdHJ5IHRvIG1pcnJvciB0aGUgbWF0cml4IGluIG91ciBkYXRhYmFzZS5cbiAgICovXG4gIG9yaWdpbmFsTWF0cml4OiBpbXBvcnQoJy4uLy4uL3R5cGVzJykuTWF0cml4XG59XG5cbi8qKlxuICogVGhlc2UgYXJlIHRoZSBhY3Rpb25zIHlvdSBjYW4gZGlzcGF0Y2guIEFkZCBhY3Rpb25zIHlvdSB3YW50IHRvIGhlbHAgeW91XG4gKiB0eXBlIHRoZSBkaXNwYXRjaCBmdW5jdGlvblxuICovXG50eXBlIE1hdHJpeEFjdGlvbiA9IHtcbiAgdHlwZTogJ1NFVF9NQVRSSVgnLFxuICAvKipcbiAgICogV2hlbiBwYXlsb2FkIGlzIGVtcHR5LCB3ZSB3aWxsIG5lZWQgdG8gc2V0IHRoZSB2YWx1ZXMgZnJvbSBvcmlnaW5hbE1hdHJpeFxuICAgKi8gXG4gIHBheWxvYWQ/OiBpbXBvcnQoJy4uLy4uL3R5cGVzJykuTWF0cml4XG4gIG1ldGFkYXRhPzoge1xuICAgIC8qKlxuICAgICAqIElmIHRoaXMgaXMgc2V0IHRvIHRydWUsIHRoZW4gaW5zdGVhZCBvZiByZXNldHRpbmcgdG8gdGhlIG9yaWdpbmFsTWF0cml4LFxuICAgICAqIHdlIHJlc2V0IHRvIHRoZSBlbXB0eU1hdHJpeFxuICAgICAqL1xuICAgIHJlc2V0VG9FbXB0eT86IGJvb2xlYW5cbiAgfVxufSB8IHtcbiAgdHlwZTogJ1NFVF9PUklHSU5BTF9NQVRSSVgnLFxuICAvKipcbiAgICogV2hlbiBlbXB0eSwgc2V0IHRoZSB2YWx1ZSBmcm9tIGVtcHR5TWF0cml4XG4gICAqL1xuICBwYXlsb2FkPzogaW1wb3J0KCcuLi8uLi90eXBlcycpLk1hdHJpeFxufSB8IHtcbiAgdHlwZTogJ1NPTUVfQUNUSU9OJyxcbiAgcGF5bG9hZDogYW55XG59IHwge1xuICB0eXBlOiAnR0VUX0FMTF9EQVRBJyxcbiAgcGF5bG9hZDogYW55XG59IHwge1xuICB0eXBlOiAnU0FWRV9KU09OJyxcbiAgcGF5bG9hZDogYW55XG59Ly8gSGVyZSB5b3Ugd2lsbCBuZWVkIHRvIGFkZCB5b3VyIG90aGVyIGFjdGlvbihzKSBpbiBvcmRlciB0byBlZGl0IHRoZSBwcmljaW5nIChyZW1vdmUgU09NRV9BQ1RJT04pXG5cbi8qKlxuICogVGhpcyBpcyBmb3IgdGhlIFByb3ZpZGVyIGNvbXBvbmVudFxuICovXG50eXBlIFByb3ZpZGVyUHJvcHMgPSB7XG4gIGluaXRpYWxNYXRyaXg/OiBpbXBvcnQoJy4uLy4uL3R5cGVzJykuTWF0cml4XG59XG5cbmNvbnN0IGVtcHR5TWF0cml4ID0ge1xuICBcIjM2bW9udGhzXCI6IHtcbiAgICAgIFwibGl0ZVwiOiAwLFxuICAgICAgXCJzdGFuZGFyZFwiOiAwLFxuICAgICAgXCJ1bmxpbWl0ZWRcIjogMCxcbiAgfSxcbiAgXCIyNG1vbnRoc1wiOiB7XG4gICAgICBcImxpdGVcIjogMCxcbiAgICAgIFwic3RhbmRhcmRcIjogMCxcbiAgICAgIFwidW5saW1pdGVkXCI6IDBcbiAgfSxcbiAgXCIxMm1vbnRoc1wiOiB7XG4gICAgICBcImxpdGVcIjogMCxcbiAgICAgIFwic3RhbmRhcmRcIjogMCxcbiAgICAgIFwidW5saW1pdGVkXCI6IDBcbiAgfSxcbiAgXCJtdG1cIjoge1xuICAgICAgXCJsaXRlXCI6IDAsXG4gICAgICBcInN0YW5kYXJkXCI6IDAsXG4gICAgICBcInVubGltaXRlZFwiOiAwXG4gIH1cbn1cblxuY29uc3QgZGVmYXVsdFN0YXRlOiBNYXRyaXhUYWJsZVN0YXRlID0ge1xuICBtYXRyaXg6IGVtcHR5TWF0cml4LFxuICBvcmlnaW5hbE1hdHJpeDogZW1wdHlNYXRyaXgsXG59XG5cbmNvbnN0IHNhdmVKc29uID0gKHZhbCkgPT4ge1xuICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9zYXZlLXByaWNpbmcnLCB7XG4gICAgICBtZXRob2Q6ICdnZXQnLFxuICAgICAgLy8gYm9keTogdmFsLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIGFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0sXG4gICAgICAgIC8vIGJvZHk6IEpTT04uc3RyaW5naWZ5KFwiZGZkZmRcIilcbiAgICAgIH0pXG4gICAgICAudGhlbihyZXMgPT4gXG4gICAgICAgIHJlcy5qc29uKClcbiAgICAgIClcbiAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coJy0tLWVycm9yJywgZXJyKSlcbn1cbi8vIGltcG9ydCBmcyBmcm9tICdmcy1leHRyYSc7XG5cblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZTogTWF0cml4VGFibGVTdGF0ZSwgYWN0aW9uOiBNYXRyaXhBY3Rpb24pOiBNYXRyaXhUYWJsZVN0YXRlID0+IHtcblxuICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdHRVRfQUxMX0RBVEEnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLFxuICAgICAgfVxuICAgICAgXG4gICAgY2FzZSAnU0VUX01BVFJJWCc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgIH1cbiAgICBjYXNlICdTQVZFX0pTT04nOlxuICAgICAgY29uc29sZS5sb2coJy0tLS1zYXZlOicsIHN0YXRlKVxuICAgICAgc2F2ZUpzb24oc3RhdGUubWF0cml4KTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlXG4gICAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBNYXRyaXhUYWJsZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0PFtNYXRyaXhUYWJsZVN0YXRlLCBpbXBvcnQoJ3JlYWN0JykuRGlzcGF0Y2g8TWF0cml4QWN0aW9uPl0+KFtkZWZhdWx0U3RhdGUsICgpID0+IHt9XSlcblxuLyoqXG4gKiBUaGlzIGlzIHRoZSBwcm92aWRlciB0aGF0IGhvc3RzIHRoZSBzdGF0ZVxuICogQHBhcmFtIHBhcmFtMCBcbiAqL1xuZXhwb3J0IGNvbnN0IE1hdHJpeFRhYmxlQ29udGV4dFByb3ZpZGVyOiBpbXBvcnQoJ3JlYWN0JykuRkM8UHJvdmlkZXJQcm9wcz4gPSAoeyBpbml0aWFsTWF0cml4LCBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IHN0YXRlID0gdXNlUmVkdWNlcihyZWR1Y2VyLCB7IG1hdHJpeDogaW5pdGlhbE1hdHJpeCB8fCBlbXB0eU1hdHJpeCwgb3JpZ2luYWxNYXRyaXg6IGluaXRpYWxNYXRyaXggfHwgZW1wdHlNYXRyaXggfSlcblxuICByZXR1cm4gKFxuICAgIDxNYXRyaXhUYWJsZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0YXRlfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L01hdHJpeFRhYmxlQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=