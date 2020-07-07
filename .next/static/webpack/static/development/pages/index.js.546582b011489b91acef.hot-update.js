webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/MatrixTable/index.tsx":
/*!******************************************!*\
  !*** ./components/MatrixTable/index.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./context */ "./components/MatrixTable/context.tsx");





var _this = undefined,
    _jsxFileName = "D:\\interview\\interview-fullstack-master\\components\\MatrixTable\\index.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;




/**
 * Add 4 buttons: 
 * - Cancel to reset the matrix to how it was before changing the values (only when in edit mode)
 * - Edit to make the fields editable (only when not in edit mode)
 * - Clear to completely clear the table
 * - Save to save the table
 * @param param0 
 */
var MatrixTable = function MatrixTable(_ref) {
  _s();

  var className = _ref.className,
      children = _ref.children,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, ["className", "children"]);

  // State ------------------------------------------------------------------- //
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_6__["MatrixTableContext"]),
      matrix = _useContext[0].matrix,
      dispatch = _useContext[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(matrix),
      matrixData = _useState[0],
      setMatrixData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(true),
      enableEdit = _useState2[0],
      setEnableEdit = _useState2[1]; // Handlers ---------------------------------------------------------------- //


  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    fetch('http://localhost:3000/api/pricing', {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json'
      }
    }).then(function (res) {
      return res.json();
    }).then(function (data) {
      setMatrixData(data);
      dispatch({
        type: 'GET_ALL_DATA',
        payload: data
      });
    })["catch"](function (err) {
      return console.log('---error', err);
    });
  }, []); // You can save (to api) the matrix here. Remember to update originalMatrix when done.

  var save = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dispatch({
                type: 'SAVE_JSON'
              });

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function save() {
      return _ref2.apply(this, arguments);
    };
  }(); // Effects ----------------------------------------------------------------- //
  // Rendering --------------------------------------------------------------- //
  // const updatematrixtable = 
  //   <table id="customers">
  //       <tr>
  //         <th>months</th>
  //         <th>lite</th>
  //         <th>standard</th>
  //         <th>unlimited</th>
  //         <th>performance</th>
  //       </tr>
  //       <tr>
  //         <td>12months</td>
  //         <td>{matrixData["12months"].lite}</td>
  //         <td>{matrixData["12months"].standard}</td>
  //         <td>{matrixData["12months"].unlimited}</td>
  //       </tr>
  //       <tr>
  //         <td>24months</td>
  //         <td>{matrixData["24months"].lite}</td>
  //         <td>{matrixData["24months"].standard}</td>
  //         <td>{matrixData["24months"].unlimited}</td>
  //       </tr>
  //       <tr>
  //         <td>36months</td>
  //         <td>{matrixData["36months"].lite}</td>
  //         <td>{matrixData["36months"].standard}</td>
  //         <td>{matrixData["36months"].unlimited}</td>
  //       </tr>
  //       <tr>
  //         <td>mtm</td>
  //         <td>{matrixData.mtm.lite}</td>
  //         <td>{matrixData.mtm.standard}</td>
  //         <td>{matrixData.mtm.unlimited}</td>
  //       </tr>
  //     </table>


  var edit = function edit() {
    console.log("editbutton");
    setEnableEdit(false);
  };

  var cancel = function cancel() {
    console.log("cancelbutton");
    setEnableEdit(true);
  };

  var clear = function clear() {
    console.log('clear');
    dispatch({
      type: 'CLEAR_PRICING'
    });
  };

  return __jsx("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(['container', className])
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 5
    }
  }), __jsx("table", {
    id: "customers",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }
  }, __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }, __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 11
    }
  }, "months"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }
  }, "lite"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 11
    }
  }, "standard"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 11
    }
  }, "unlimited")), Object.keys(matrix).map(function (keyName, i) {
    return __jsx("tr", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 11
      }
    }, __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 13
      }
    }, keyName), enableEdit ? __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 17
      }
    }, matrix[keyName].lite), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 17
      }
    }, matrix[keyName].standard), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 17
      }
    }, matrix[keyName].unlimited)) : __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 17
      }
    }, __jsx("input", {
      type: "number",
      defaultValue: matrix[keyName].lite,
      onChange: function onChange(event) {
        return dispatch({
          type: 'EDIT_ACTION',
          payload: {
            keyName: keyName,
            fieldName: 'lite',
            value: event.target.value
          }
        });
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 21
      }
    })), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 17
      }
    }, __jsx("input", {
      type: "number",
      defaultValue: matrix[keyName].standard,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 21
      }
    })), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 17
      }
    }, __jsx("input", {
      type: "number",
      defaultValue: matrix[keyName].unlimited,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 21
      }
    }))));
  })), __jsx("div", {
    id: "buttonGroup",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }
  }, __jsx("button", {
    onClick: save,
    className: "btn btn-success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 9
    }
  }, "Save"), __jsx("button", {
    onClick: clear,
    className: "btn btn-success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 9
    }
  }, "Clear"), enableEdit ? __jsx("button", {
    onClick: edit,
    className: "btn btn-success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 23
    }
  }, "Edit") : __jsx("button", {
    onClick: cancel,
    className: "btn btn-success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 90
    }
  }, "Show")), __jsx("style", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 7
    }
  }, "\n        .container {\n          margin:0;\n          width:100%\n        }\n        #customers {\n          font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\n          border-collapse: collapse;\n          width: 100%;\n        }\n        \n        #customers td, #customers th {\n          width: 250px;\n          border: 1px solid #ddd;\n          padding: 8px;\n        }\n        \n        #customers tr:nth-child(even){background-color: #f2f2f2;}\n        \n        #customers tr:hover {background-color: #ddd;}\n        \n        #customers th {\n          padding-top: 12px;\n          padding-bottom: 12px;\n          text-align: left;\n          background-color: #4CAF50;\n          color: white;\n        }\n        #buttonGroup button {\n          padding-top: 20px;\n        }\n      "));
};

_s(MatrixTable, "Oc/QBUTC46dxMz6yRX74/E/jIi0=");

_c = MatrixTable;

var MatrixTableWithContext = function MatrixTableWithContext(_ref3) {
  var initialMatrix = _ref3.initialMatrix,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref3, ["initialMatrix"]);

  // You can fetch the pricing here or in pages/index.ts
  // Remember that you should try to reflect the state of pricing in originalMatrix.
  // matrix will hold the latest value (edited or same as originalMatrix)
  return __jsx(_context__WEBPACK_IMPORTED_MODULE_6__["MatrixTableContextProvider"], {
    initialMatrix: initialMatrix,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 5
    }
  }, __jsx(MatrixTable, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 7
    }
  })));
};

_c2 = MatrixTableWithContext;
/* harmony default export */ __webpack_exports__["default"] = (MatrixTableWithContext);

var _c, _c2;

$RefreshReg$(_c, "MatrixTable");
$RefreshReg$(_c2, "MatrixTableWithContext");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01hdHJpeFRhYmxlL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJNYXRyaXhUYWJsZSIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwicHJvcHMiLCJ1c2VDb250ZXh0IiwiTWF0cml4VGFibGVDb250ZXh0IiwibWF0cml4IiwiZGlzcGF0Y2giLCJ1c2VTdGF0ZSIsIm1hdHJpeERhdGEiLCJzZXRNYXRyaXhEYXRhIiwiZW5hYmxlRWRpdCIsInNldEVuYWJsZUVkaXQiLCJ1c2VFZmZlY3QiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJhY2NlcHQiLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJ0eXBlIiwicGF5bG9hZCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJzYXZlIiwiZWRpdCIsImNhbmNlbCIsImNsZWFyIiwiY2xhc3NuYW1lcyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXlOYW1lIiwiaSIsImxpdGUiLCJzdGFuZGFyZCIsInVubGltaXRlZCIsImV2ZW50IiwiZmllbGROYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJNYXRyaXhUYWJsZVdpdGhDb250ZXh0IiwiaW5pdGlhbE1hdHJpeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFPRTs7Ozs7Ozs7QUFRQSxJQUFNQSxXQUE2RCxHQUFHLFNBQWhFQSxXQUFnRSxPQUF1QztBQUFBOztBQUFBLE1BQXBDQyxTQUFvQyxRQUFwQ0EsU0FBb0M7QUFBQSxNQUF6QkMsUUFBeUIsUUFBekJBLFFBQXlCO0FBQUEsTUFBWkMsS0FBWTs7QUFDN0c7QUFENkcsb0JBRTlFQyx3REFBVSxDQUFDQywyREFBRCxDQUZvRTtBQUFBLE1BRXBHQyxNQUZvRyxrQkFFcEdBLE1BRm9HO0FBQUEsTUFFMUZDLFFBRjBGOztBQUFBLGtCQUd2RUMsc0RBQVEsQ0FBQ0YsTUFBRCxDQUgrRDtBQUFBLE1BR3JHRyxVQUhxRztB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O0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxXQUFELHlGQUFpQjFDLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERixDQURGO0FBS0QsQ0FWRDs7TUFBTXlDLHNCO0FBWVNBLHFGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy41NDY1ODJiMDExNDg5YjkxYWNlZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE1hdHJpeFRhYmxlQ29udGV4dCwgTWF0cml4VGFibGVDb250ZXh0UHJvdmlkZXIgfSBmcm9tICcuL2NvbnRleHQnXG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gJy4uLy4uL3BhZ2VzL3N0b3JlJztcblxuICB0eXBlIFByb3BzID0ge1xuICAgIGluaXRpYWxNYXRyaXg/OiBpbXBvcnQoJy4uLy4uL3R5cGVzJykuTWF0cml4XG4gIH0gJiBpbXBvcnQoJ3JlYWN0JykuSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+XG5cbiAgLyoqXG4gICAqIEFkZCA0IGJ1dHRvbnM6IFxuICAgKiAtIENhbmNlbCB0byByZXNldCB0aGUgbWF0cml4IHRvIGhvdyBpdCB3YXMgYmVmb3JlIGNoYW5naW5nIHRoZSB2YWx1ZXMgKG9ubHkgd2hlbiBpbiBlZGl0IG1vZGUpXG4gICAqIC0gRWRpdCB0byBtYWtlIHRoZSBmaWVsZHMgZWRpdGFibGUgKG9ubHkgd2hlbiBub3QgaW4gZWRpdCBtb2RlKVxuICAgKiAtIENsZWFyIHRvIGNvbXBsZXRlbHkgY2xlYXIgdGhlIHRhYmxlXG4gICAqIC0gU2F2ZSB0byBzYXZlIHRoZSB0YWJsZVxuICAgKiBAcGFyYW0gcGFyYW0wIFxuICAgKi9cbiAgY29uc3QgTWF0cml4VGFibGU6IGltcG9ydCgncmVhY3QnKS5GQzxPbWl0PFByb3BzLCAnaW5pdGlhbE1hdHJpeCc+PiA9ICh7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IHtcbiAgLy8gU3RhdGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuICBjb25zdCBbeyBtYXRyaXggfSwgZGlzcGF0Y2hdID0gdXNlQ29udGV4dChNYXRyaXhUYWJsZUNvbnRleHQpXG4gIGNvbnN0IFsgbWF0cml4RGF0YSwgc2V0TWF0cml4RGF0YV0gID0gdXNlU3RhdGUobWF0cml4KTtcbiAgY29uc3QgWyBlbmFibGVFZGl0LCBzZXRFbmFibGVFZGl0IF0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgXG4gIC8vIEhhbmRsZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcHJpY2luZycsIHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgYWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICB9KVxuICAgIC50aGVuKHJlcyA9PiBcbiAgICAgIHJlcy5qc29uKClcbiAgICApXG4gICAgLnRoZW4oZGF0YT0+IHtcbiAgICAgIHNldE1hdHJpeERhdGEoZGF0YSk7XG4gICAgICBkaXNwYXRjaCh7dHlwZTogJ0dFVF9BTExfREFUQScsIHBheWxvYWQ6IGRhdGEgfSk7XG5cbiAgICB9KVxuICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coJy0tLWVycm9yJywgZXJyKSk7XG4gIH0sW10pXG5cbiAgLy8gWW91IGNhbiBzYXZlICh0byBhcGkpIHRoZSBtYXRyaXggaGVyZS4gUmVtZW1iZXIgdG8gdXBkYXRlIG9yaWdpbmFsTWF0cml4IHdoZW4gZG9uZS5cbiAgY29uc3Qgc2F2ZSA9IGFzeW5jICgpID0+IHtcbiAgICBkaXNwYXRjaCh7dHlwZTogJ1NBVkVfSlNPTid9KTtcbiAgfVxuICAvLyBFZmZlY3RzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4gIC8vIFJlbmRlcmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbiAgXG4gICAgXG4gIC8vIGNvbnN0IHVwZGF0ZW1hdHJpeHRhYmxlID0gXG4gIC8vICAgPHRhYmxlIGlkPVwiY3VzdG9tZXJzXCI+XG4gIC8vICAgICAgIDx0cj5cbiAgLy8gICAgICAgICA8dGg+bW9udGhzPC90aD5cbiAgLy8gICAgICAgICA8dGg+bGl0ZTwvdGg+XG4gIC8vICAgICAgICAgPHRoPnN0YW5kYXJkPC90aD5cbiAgLy8gICAgICAgICA8dGg+dW5saW1pdGVkPC90aD5cbiAgLy8gICAgICAgICA8dGg+cGVyZm9ybWFuY2U8L3RoPlxuICAvLyAgICAgICA8L3RyPlxuICAvLyAgICAgICA8dHI+XG4gIC8vICAgICAgICAgPHRkPjEybW9udGhzPC90ZD5cbiAgLy8gICAgICAgICA8dGQ+e21hdHJpeERhdGFbXCIxMm1vbnRoc1wiXS5saXRlfTwvdGQ+XG4gIC8vICAgICAgICAgPHRkPnttYXRyaXhEYXRhW1wiMTJtb250aHNcIl0uc3RhbmRhcmR9PC90ZD5cbiAgLy8gICAgICAgICA8dGQ+e21hdHJpeERhdGFbXCIxMm1vbnRoc1wiXS51bmxpbWl0ZWR9PC90ZD5cbiAgLy8gICAgICAgPC90cj5cbiAgLy8gICAgICAgPHRyPlxuICAvLyAgICAgICAgIDx0ZD4yNG1vbnRoczwvdGQ+XG4gIC8vICAgICAgICAgPHRkPnttYXRyaXhEYXRhW1wiMjRtb250aHNcIl0ubGl0ZX08L3RkPlxuICAvLyAgICAgICAgIDx0ZD57bWF0cml4RGF0YVtcIjI0bW9udGhzXCJdLnN0YW5kYXJkfTwvdGQ+XG4gIC8vICAgICAgICAgPHRkPnttYXRyaXhEYXRhW1wiMjRtb250aHNcIl0udW5saW1pdGVkfTwvdGQ+XG4gIC8vICAgICAgIDwvdHI+XG4gIC8vICAgICAgIDx0cj5cbiAgLy8gICAgICAgICA8dGQ+MzZtb250aHM8L3RkPlxuICAvLyAgICAgICAgIDx0ZD57bWF0cml4RGF0YVtcIjM2bW9udGhzXCJdLmxpdGV9PC90ZD5cbiAgLy8gICAgICAgICA8dGQ+e21hdHJpeERhdGFbXCIzNm1vbnRoc1wiXS5zdGFuZGFyZH08L3RkPlxuICAvLyAgICAgICAgIDx0ZD57bWF0cml4RGF0YVtcIjM2bW9udGhzXCJdLnVubGltaXRlZH08L3RkPlxuICAvLyAgICAgICA8L3RyPlxuICAvLyAgICAgICA8dHI+XG4gIC8vICAgICAgICAgPHRkPm10bTwvdGQ+XG4gIC8vICAgICAgICAgPHRkPnttYXRyaXhEYXRhLm10bS5saXRlfTwvdGQ+XG4gIC8vICAgICAgICAgPHRkPnttYXRyaXhEYXRhLm10bS5zdGFuZGFyZH08L3RkPlxuICAvLyAgICAgICAgIDx0ZD57bWF0cml4RGF0YS5tdG0udW5saW1pdGVkfTwvdGQ+XG4gIC8vICAgICAgIDwvdHI+XG4gIC8vICAgICA8L3RhYmxlPlxuICBjb25zdCBlZGl0ID0gKCk9PntcbiAgICBjb25zb2xlLmxvZyhcImVkaXRidXR0b25cIik7XG4gICAgc2V0RW5hYmxlRWRpdChmYWxzZSk7XG4gIH1cblxuICBjb25zdCBjYW5jZWwgPSAoKT0+e1xuICAgIGNvbnNvbGUubG9nKFwiY2FuY2VsYnV0dG9uXCIpO1xuICAgIHNldEVuYWJsZUVkaXQodHJ1ZSk7XG4gIH1cblxuICBjb25zdCBjbGVhciA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnY2xlYXInKVxuICAgIGRpc3BhdGNoKHt0eXBlOiAnQ0xFQVJfUFJJQ0lORyd9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoWydjb250YWluZXInLCBjbGFzc05hbWVdKX0gey4uLnByb3BzfT5cbiAgICAgIDx0YWJsZSBpZD1cImN1c3RvbWVyc1wiPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRoPm1vbnRoczwvdGg+XG4gICAgICAgICAgPHRoPmxpdGU8L3RoPlxuICAgICAgICAgIDx0aD5zdGFuZGFyZDwvdGg+XG4gICAgICAgICAgPHRoPnVubGltaXRlZDwvdGg+XG4gICAgICAgIDwvdHI+XG4gICAgICBcbiAgICAgICAge09iamVjdC5rZXlzKG1hdHJpeCkubWFwKChrZXlOYW1lLCBpKSA9PiBcbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+e2tleU5hbWV9PC90ZD5cbiAgICAgICAgICAgIHtlbmFibGVFZGl0ID8gKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDx0ZD57bWF0cml4W2tleU5hbWVdLmxpdGV9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e21hdHJpeFtrZXlOYW1lXS5zdGFuZGFyZH08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57bWF0cml4W2tleU5hbWVdLnVubGltaXRlZH08L3RkPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPHRkPjxpbnB1dCB0eXBlPSdudW1iZXInIGRlZmF1bHRWYWx1ZT17bWF0cml4W2tleU5hbWVdLmxpdGV9IG9uQ2hhbmdlPXtldmVudCA9PiBkaXNwYXRjaCh7dHlwZTogJ0VESVRfQUNUSU9OJywgcGF5bG9hZDoge2tleU5hbWUsIGZpZWxkTmFtZTogJ2xpdGUnLCB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlfX0pfSAvPjwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPjxpbnB1dCB0eXBlPSdudW1iZXInIGRlZmF1bHRWYWx1ZT17bWF0cml4W2tleU5hbWVdLnN0YW5kYXJkfSAvPjwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPjxpbnB1dCB0eXBlPSdudW1iZXInIGRlZmF1bHRWYWx1ZT17bWF0cml4W2tleU5hbWVdLnVubGltaXRlZH0gLz48L3RkPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgKX1cbiAgICAgIDwvdGFibGU+XG4gICAgICA8ZGl2IGlkPSdidXR0b25Hcm91cCc+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17c2F2ZX0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCI+U2F2ZTwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2NsZWFyfSBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIj5DbGVhcjwvYnV0dG9uPlxuICAgICAgICB7ZW5hYmxlRWRpdCA/IDxidXR0b24gb25DbGljaz17ZWRpdH0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCI+RWRpdDwvYnV0dG9uPiA6IDxidXR0b24gb25DbGljaz17Y2FuY2VsfSBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIj5TaG93PC9idXR0b24+fVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZT57YFxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgICB3aWR0aDoxMDAlXG4gICAgICAgIH1cbiAgICAgICAgI2N1c3RvbWVycyB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiVHJlYnVjaGV0IE1TXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgI2N1c3RvbWVycyB0ZCwgI2N1c3RvbWVycyB0aCB7XG4gICAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAjY3VzdG9tZXJzIHRyOm50aC1jaGlsZChldmVuKXtiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO31cbiAgICAgICAgXG4gICAgICAgICNjdXN0b21lcnMgdHI6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNkZGQ7fVxuICAgICAgICBcbiAgICAgICAgI2N1c3RvbWVycyB0aCB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDEycHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICAjYnV0dG9uR3JvdXAgYnV0dG9uIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IE1hdHJpeFRhYmxlV2l0aENvbnRleHQ6IGltcG9ydCgncmVhY3QnKS5GQzxQcm9wcz4gPSAoeyBpbml0aWFsTWF0cml4LCAuLi5wcm9wcyB9KSA9PiB7XG4gIC8vIFlvdSBjYW4gZmV0Y2ggdGhlIHByaWNpbmcgaGVyZSBvciBpbiBwYWdlcy9pbmRleC50c1xuICAvLyBSZW1lbWJlciB0aGF0IHlvdSBzaG91bGQgdHJ5IHRvIHJlZmxlY3QgdGhlIHN0YXRlIG9mIHByaWNpbmcgaW4gb3JpZ2luYWxNYXRyaXguXG4gIC8vIG1hdHJpeCB3aWxsIGhvbGQgdGhlIGxhdGVzdCB2YWx1ZSAoZWRpdGVkIG9yIHNhbWUgYXMgb3JpZ2luYWxNYXRyaXgpXG5cbiAgcmV0dXJuIChcbiAgICA8TWF0cml4VGFibGVDb250ZXh0UHJvdmlkZXIgaW5pdGlhbE1hdHJpeD17aW5pdGlhbE1hdHJpeH0+XG4gICAgICA8TWF0cml4VGFibGUgey4uLnByb3BzfSAvPlxuICAgIDwvTWF0cml4VGFibGVDb250ZXh0UHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWF0cml4VGFibGVXaXRoQ29udGV4dFxuIl0sInNvdXJjZVJvb3QiOiIifQ==