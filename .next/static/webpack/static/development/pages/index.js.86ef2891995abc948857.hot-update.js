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
    "standard": 456,
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
  console.log('---value: ', val);
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
      console.log('---action: ', action.payload);
      return _objectSpread({
        savedata: action.payload
      }, state);

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
      lineNumber: 142,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01hdHJpeFRhYmxlL2NvbnRleHQudHN4Il0sIm5hbWVzIjpbImVtcHR5TWF0cml4IiwiZGVmYXVsdFN0YXRlIiwibWF0cml4Iiwib3JpZ2luYWxNYXRyaXgiLCJzYXZlSnNvbiIsInZhbCIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJhY2NlcHQiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXMiLCJqc29uIiwiZXJyIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJzYXZlZGF0YSIsIk1hdHJpeFRhYmxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJNYXRyaXhUYWJsZUNvbnRleHRQcm92aWRlciIsImluaXRpYWxNYXRyaXgiLCJjaGlsZHJlbiIsInVzZVJlZHVjZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUE0REEsSUFBTUEsV0FBVyxHQUFHO0FBQ2xCLGNBQVk7QUFDUixZQUFRLENBREE7QUFFUixnQkFBWSxDQUZKO0FBR1IsaUJBQWE7QUFITCxHQURNO0FBTWxCLGNBQVk7QUFDUixZQUFRLENBREE7QUFFUixnQkFBWSxHQUZKO0FBR1IsaUJBQWE7QUFITCxHQU5NO0FBV2xCLGNBQVk7QUFDUixZQUFRLENBREE7QUFFUixnQkFBWSxDQUZKO0FBR1IsaUJBQWE7QUFITCxHQVhNO0FBZ0JsQixTQUFPO0FBQ0gsWUFBUSxDQURMO0FBRUgsZ0JBQVksQ0FGVDtBQUdILGlCQUFhO0FBSFY7QUFoQlcsQ0FBcEI7QUF1QkEsSUFBTUMsWUFBOEIsR0FBRztBQUNyQ0MsUUFBTSxFQUFFRixXQUQ2QjtBQUVyQ0csZ0JBQWMsRUFBRUg7QUFGcUIsQ0FBdkM7O0FBS0EsSUFBTUksUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsR0FBRCxFQUFTO0FBQ3hCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCRixHQUExQjtBQUNBRyxPQUFLLENBQUMsd0NBQUQsRUFBMkM7QUFDNUNDLFVBQU0sRUFBRSxNQURvQztBQUU1Q0MsV0FBTyxFQUFFO0FBQ0xDLFlBQU0sRUFBRSxrQkFESDtBQUVMLHNCQUFnQjtBQUZYLEtBRm1DO0FBTTFDQyxRQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlVCxHQUFmO0FBTm9DLEdBQTNDLENBQUwsQ0FRS1UsSUFSTCxDQVFVLFVBQUFDLEdBQUc7QUFBQSxXQUNQQSxHQUFHLENBQUNDLElBQUosRUFETztBQUFBLEdBUmIsV0FXVyxVQUFBQyxHQUFHO0FBQUEsV0FBSVosT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF3QlcsR0FBeEIsQ0FBSjtBQUFBLEdBWGQ7QUFZRCxDQWRELEMsQ0FlQTs7O0FBR0EsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUEwQkMsTUFBMUIsRUFBcUU7QUFFbkYsVUFBT0EsTUFBTSxDQUFDQyxJQUFkO0FBQ0UsU0FBSyxjQUFMO0FBQ0VoQixhQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaLEVBQTJCYyxNQUFNLENBQUNFLE9BQWxDO0FBQ0E7QUFDRUMsZ0JBQVEsRUFBRUgsTUFBTSxDQUFDRTtBQURuQixTQUVLSCxLQUZMOztBQUtGLFNBQUssWUFBTDtBQUNFLCtCQUNLQSxLQURMOztBQUdGLFNBQUssV0FBTDtBQUNFZCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaLEVBQXlCYSxLQUF6QjtBQUNBaEIsY0FBUSxDQUFDZ0IsS0FBSyxDQUFDbEIsTUFBUCxDQUFSO0FBQ0EsK0JBQ0trQixLQURMOztBQUdGO0FBQ0UsYUFBT0EsS0FBUDtBQW5CSjtBQXFCRCxDQXZCRDs7QUF5Qk8sSUFBTUssa0JBQWtCLEdBQUdDLDJEQUFhLENBQTZELENBQUN6QixZQUFELEVBQWUsWUFBTSxDQUFFLENBQXZCLENBQTdELENBQXhDO0FBRVA7Ozs7O0FBSU8sSUFBTTBCLDBCQUE2RCxHQUFHLFNBQWhFQSwwQkFBZ0UsT0FBaUM7QUFBQTs7QUFBQSxNQUE5QkMsYUFBOEIsUUFBOUJBLGFBQThCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQzVHLE1BQU1ULEtBQUssR0FBR1Usd0RBQVUsQ0FBQ1gsT0FBRCxFQUFVO0FBQUVqQixVQUFNLEVBQUUwQixhQUFhLElBQUk1QixXQUEzQjtBQUF3Q0csa0JBQWMsRUFBRXlCLGFBQWEsSUFBSTVCO0FBQXpFLEdBQVYsQ0FBeEI7QUFFQSxTQUNFLE1BQUMsa0JBQUQsQ0FBb0IsUUFBcEI7QUFBNkIsU0FBSyxFQUFFb0IsS0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHUyxRQURILENBREY7QUFLRCxDQVJNOztHQUFNRiwwQjs7S0FBQUEsMEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjg2ZWYyODkxOTk1YWJjOTQ4ODU3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VSZWR1Y2VyLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbi8qKlxuICogVGhpcyBpcyB0aGUgXG4gKi9cbmludGVyZmFjZSBNYXRyaXhUYWJsZVN0YXRlIHtcbiAgLyoqXG4gICAqIFRoaXMgaXMgdGhlIHByaWNlIG1hdHJpeCB0aGF0IGNvbnRhaW5zIHRoZSBsYXRlc3QgdmFsdWVcbiAgICovXG4gIG1hdHJpeDogaW1wb3J0KCcuLi8uLi90eXBlcycpLk1hdHJpeFxuICAvKipcbiAgICogV2Ugd2lsbCB1c2Ugb3JpZ2luYWwgbWF0cml4IHRvIGhlbHAgdXMgXCJyZXNldFwiIHRoZSB0YWJsZSB3aGVuIHdlIHdhbnQgdG8gY2FuY2VsIGVkaXRpbmcgaXQuXG4gICAqIFJlbWVtYmVyIHRoYXQgKip3aGVuZXZlcioqIHlvdSBnZXQgdGhlIG1hdHJpeCBmcm9tIHRoZSBzZXJ2ZXIsIHlvdSBtdXN0IHNldCBvcmlnaW5hbE1hdHJpeFxuICAgKiB0byB0aGF0IHZhbHVlOyBvcmlnaW5hbE1hdHJpeCBzaG91bGQgdHJ5IHRvIG1pcnJvciB0aGUgbWF0cml4IGluIG91ciBkYXRhYmFzZS5cbiAgICovXG4gIG9yaWdpbmFsTWF0cml4OiBpbXBvcnQoJy4uLy4uL3R5cGVzJykuTWF0cml4XG59XG5cbi8qKlxuICogVGhlc2UgYXJlIHRoZSBhY3Rpb25zIHlvdSBjYW4gZGlzcGF0Y2guIEFkZCBhY3Rpb25zIHlvdSB3YW50IHRvIGhlbHAgeW91XG4gKiB0eXBlIHRoZSBkaXNwYXRjaCBmdW5jdGlvblxuICovXG50eXBlIE1hdHJpeEFjdGlvbiA9IHtcbiAgdHlwZTogJ1NFVF9NQVRSSVgnLFxuICAvKipcbiAgICogV2hlbiBwYXlsb2FkIGlzIGVtcHR5LCB3ZSB3aWxsIG5lZWQgdG8gc2V0IHRoZSB2YWx1ZXMgZnJvbSBvcmlnaW5hbE1hdHJpeFxuICAgKi8gXG4gIHBheWxvYWQ/OiBpbXBvcnQoJy4uLy4uL3R5cGVzJykuTWF0cml4XG4gIG1ldGFkYXRhPzoge1xuICAgIC8qKlxuICAgICAqIElmIHRoaXMgaXMgc2V0IHRvIHRydWUsIHRoZW4gaW5zdGVhZCBvZiByZXNldHRpbmcgdG8gdGhlIG9yaWdpbmFsTWF0cml4LFxuICAgICAqIHdlIHJlc2V0IHRvIHRoZSBlbXB0eU1hdHJpeFxuICAgICAqL1xuICAgIHJlc2V0VG9FbXB0eT86IGJvb2xlYW5cbiAgfVxufSB8IHtcbiAgdHlwZTogJ1NFVF9PUklHSU5BTF9NQVRSSVgnLFxuICAvKipcbiAgICogV2hlbiBlbXB0eSwgc2V0IHRoZSB2YWx1ZSBmcm9tIGVtcHR5TWF0cml4XG4gICAqL1xuICBwYXlsb2FkPzogaW1wb3J0KCcuLi8uLi90eXBlcycpLk1hdHJpeFxufSB8IHtcbiAgdHlwZTogJ1NPTUVfQUNUSU9OJyxcbiAgcGF5bG9hZDogYW55XG59IHwge1xuICB0eXBlOiAnR0VUX0FMTF9EQVRBJyxcbiAgcGF5bG9hZDogYW55XG59IHwge1xuICB0eXBlOiAnU0FWRV9KU09OJyxcbiAgcGF5bG9hZDogYW55XG59Ly8gSGVyZSB5b3Ugd2lsbCBuZWVkIHRvIGFkZCB5b3VyIG90aGVyIGFjdGlvbihzKSBpbiBvcmRlciB0byBlZGl0IHRoZSBwcmljaW5nIChyZW1vdmUgU09NRV9BQ1RJT04pXG5cbi8qKlxuICogVGhpcyBpcyBmb3IgdGhlIFByb3ZpZGVyIGNvbXBvbmVudFxuICovXG50eXBlIFByb3ZpZGVyUHJvcHMgPSB7XG4gIGluaXRpYWxNYXRyaXg/OiBpbXBvcnQoJy4uLy4uL3R5cGVzJykuTWF0cml4XG59XG5cbmNvbnN0IGVtcHR5TWF0cml4ID0ge1xuICBcIjM2bW9udGhzXCI6IHtcbiAgICAgIFwibGl0ZVwiOiAwLFxuICAgICAgXCJzdGFuZGFyZFwiOiAwLFxuICAgICAgXCJ1bmxpbWl0ZWRcIjogMCxcbiAgfSxcbiAgXCIyNG1vbnRoc1wiOiB7XG4gICAgICBcImxpdGVcIjogMCxcbiAgICAgIFwic3RhbmRhcmRcIjogNDU2LFxuICAgICAgXCJ1bmxpbWl0ZWRcIjogMFxuICB9LFxuICBcIjEybW9udGhzXCI6IHtcbiAgICAgIFwibGl0ZVwiOiAwLFxuICAgICAgXCJzdGFuZGFyZFwiOiAwLFxuICAgICAgXCJ1bmxpbWl0ZWRcIjogMFxuICB9LFxuICBcIm10bVwiOiB7XG4gICAgICBcImxpdGVcIjogMCxcbiAgICAgIFwic3RhbmRhcmRcIjogMCxcbiAgICAgIFwidW5saW1pdGVkXCI6IDBcbiAgfVxufVxuXG5jb25zdCBkZWZhdWx0U3RhdGU6IE1hdHJpeFRhYmxlU3RhdGUgPSB7XG4gIG1hdHJpeDogZW1wdHlNYXRyaXgsXG4gIG9yaWdpbmFsTWF0cml4OiBlbXB0eU1hdHJpeCxcbn1cblxuY29uc3Qgc2F2ZUpzb24gPSAodmFsKSA9PiB7XG4gIGNvbnNvbGUubG9nKCctLS12YWx1ZTogJywgdmFsKVxuICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9zYXZlLXByaWNpbmcnLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBhY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh2YWwpXG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzID0+IFxuICAgICAgICByZXMuanNvbigpXG4gICAgICApXG4gICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKCctLS1lcnJvcicsIGVycikpXG59XG4vLyBpbXBvcnQgZnMgZnJvbSAnZnMtZXh0cmEnO1xuXG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGU6IE1hdHJpeFRhYmxlU3RhdGUsIGFjdGlvbjogTWF0cml4QWN0aW9uKTogTWF0cml4VGFibGVTdGF0ZSA9PiB7XG5cbiAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnR0VUX0FMTF9EQVRBJzpcbiAgICAgIGNvbnNvbGUubG9nKCctLS1hY3Rpb246ICcsIGFjdGlvbi5wYXlsb2FkKVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc2F2ZWRhdGE6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgIH1cbiAgICAgIFxuICAgIGNhc2UgJ1NFVF9NQVRSSVgnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICB9XG4gICAgY2FzZSAnU0FWRV9KU09OJzpcbiAgICAgIGNvbnNvbGUubG9nKCctLS0tc2F2ZTonLCBzdGF0ZSlcbiAgICAgIHNhdmVKc29uKHN0YXRlLm1hdHJpeCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZVxuICAgICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgTWF0cml4VGFibGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxbTWF0cml4VGFibGVTdGF0ZSwgaW1wb3J0KCdyZWFjdCcpLkRpc3BhdGNoPE1hdHJpeEFjdGlvbj5dPihbZGVmYXVsdFN0YXRlLCAoKSA9PiB7fV0pXG5cbi8qKlxuICogVGhpcyBpcyB0aGUgcHJvdmlkZXIgdGhhdCBob3N0cyB0aGUgc3RhdGVcbiAqIEBwYXJhbSBwYXJhbTAgXG4gKi9cbmV4cG9ydCBjb25zdCBNYXRyaXhUYWJsZUNvbnRleHRQcm92aWRlcjogaW1wb3J0KCdyZWFjdCcpLkZDPFByb3ZpZGVyUHJvcHM+ID0gKHsgaW5pdGlhbE1hdHJpeCwgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBzdGF0ZSA9IHVzZVJlZHVjZXIocmVkdWNlciwgeyBtYXRyaXg6IGluaXRpYWxNYXRyaXggfHwgZW1wdHlNYXRyaXgsIG9yaWdpbmFsTWF0cml4OiBpbml0aWFsTWF0cml4IHx8IGVtcHR5TWF0cml4IH0pXG5cbiAgcmV0dXJuIChcbiAgICA8TWF0cml4VGFibGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzdGF0ZX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9NYXRyaXhUYWJsZUNvbnRleHQuUHJvdmlkZXI+XG4gIClcbn0iXSwic291cmNlUm9vdCI6IiJ9