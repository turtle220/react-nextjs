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
  }();

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
      lineNumber: 64,
      columnNumber: 5
    }
  }), __jsx("table", {
    id: "customers",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }, __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }, "months"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }, "lite"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }, "standard"), __jsx("th", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, "unlimited")), Object.keys(matrixData).map(function (keyName, i) {
    return __jsx("tr", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 11
      }
    }, __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 13
      }
    }, keyName), enableEdit ? __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }
    }, matrixData[keyName].lite), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }
    }, matrixData[keyName].standard), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }
    }, matrixData[keyName].unlimited)) : __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }
    }, __jsx("input", {
      type: "number",
      defaultValue: matrixData[keyName].lite,
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
        lineNumber: 84,
        columnNumber: 21
      }
    })), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 17
      }
    }, __jsx("input", {
      type: "number",
      defaultValue: matrixData[keyName].standard,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 21
      }
    })), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 17
      }
    }, __jsx("input", {
      type: "number",
      defaultValue: matrixData[keyName].unlimited,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 21
      }
    }))));
  })), __jsx("div", {
    className: "buttonGroup",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }
  }, __jsx("button", {
    onClick: save,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, "Save"), __jsx("button", {
    onClick: clear,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, "Clear"), enableEdit ? __jsx("button", {
    onClick: edit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 23
    }
  }, "Edit") : __jsx("button", {
    onClick: cancel,
    className: "btn btn-success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 63
    }
  }, "Show")), __jsx("style", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }
  }, "\n        .container {\n          margin:0;\n          width:100%\n        }\n        #customers {\n          font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\n          border-collapse: collapse;\n          width: 100%;\n        }\n        \n        #customers td, #customers th {\n          width: 250px;\n          border: 1px solid #ddd;\n          padding: 8px;\n        }\n        \n        #customers tr:nth-child(even){background-color: #f2f2f2;}\n        \n        #customers tr:hover {background-color: #ddd;}\n        \n        #customers th {\n          padding-top: 12px;\n          padding-bottom: 12px;\n          text-align: left;\n          background-color: #4CAF50;\n          color: white;\n        }\n        .buttonGroup {\n          padding-top: 20px;\n        }\n        .buttonGroup button {\n          width: 60px;\n          height: 25px;\n          margin-left: 10px;\n        }\n      "));
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
      lineNumber: 145,
      columnNumber: 5
    }
  }, __jsx(MatrixTable, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01hdHJpeFRhYmxlL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJNYXRyaXhUYWJsZSIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwicHJvcHMiLCJ1c2VDb250ZXh0IiwiTWF0cml4VGFibGVDb250ZXh0IiwibWF0cml4IiwiZGlzcGF0Y2giLCJ1c2VTdGF0ZSIsIm1hdHJpeERhdGEiLCJzZXRNYXRyaXhEYXRhIiwiZW5hYmxlRWRpdCIsInNldEVuYWJsZUVkaXQiLCJ1c2VFZmZlY3QiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJhY2NlcHQiLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJ0eXBlIiwicGF5bG9hZCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJzYXZlIiwiZWRpdCIsImNhbmNlbCIsImNsZWFyIiwiY2xhc3NuYW1lcyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXlOYW1lIiwiaSIsImxpdGUiLCJzdGFuZGFyZCIsInVubGltaXRlZCIsImV2ZW50IiwiZmllbGROYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJNYXRyaXhUYWJsZVdpdGhDb250ZXh0IiwiaW5pdGlhbE1hdHJpeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFNRTs7Ozs7Ozs7QUFRQSxJQUFNQSxXQUE2RCxHQUFHLFNBQWhFQSxXQUFnRSxPQUF1QztBQUFBOztBQUFBLE1BQXBDQyxTQUFvQyxRQUFwQ0EsU0FBb0M7QUFBQSxNQUF6QkMsUUFBeUIsUUFBekJBLFFBQXlCO0FBQUEsTUFBWkMsS0FBWTs7QUFDN0c7QUFENkcsb0JBRTlFQyx3REFBVSxDQUFDQywyREFBRCxDQUZvRTtBQUFBLE1BRXBHQyxNQUZvRyxrQkFFcEdBLE1BRm9HO0FBQUEsTUFFMUZDLFFBRjBGOztBQUFBLGtCQUd2RUMsc0RBQVEsQ0FBQ0YsTUFBRCxDQUgrRDtBQUFBLE1BR3JHRyxVQUhxRztB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SCxDQURGLEVBNEJFO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsV0FBTyxFQUFFWixJQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFFRTtBQUFRLFdBQU8sRUFBRUcsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLEVBR0duQixVQUFVLEdBQUc7QUFBUSxXQUFPLEVBQUVpQixJQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQUgsR0FBMkM7QUFBUSxXQUFPLEVBQUVDLE1BQWpCO0FBQXlCLGFBQVMsRUFBQyxpQkFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUh4RCxDQTVCRixFQWtDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHM2QkFsQ0YsQ0FERjtBQTBFRCxDQXhIQzs7R0FBTTdCLFc7O0tBQUFBLFc7O0FBMEhSLElBQU00QyxzQkFBaUQsR0FBRyxTQUFwREEsc0JBQW9ELFFBQWlDO0FBQUEsTUFBOUJDLGFBQThCLFNBQTlCQSxhQUE4QjtBQUFBLE1BQVoxQyxLQUFZOztBQUN6RjtBQUNBO0FBQ0E7QUFFQSxTQUNFLE1BQUMsbUVBQUQ7QUFBNEIsaUJBQWEsRUFBRTBDLGFBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFdBQUQseUZBQWlCMUMsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGLENBREY7QUFLRCxDQVZEOztNQUFNeUMsc0I7QUFZU0EscUZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmE3Y2I1ODY1YWIzNjhkOTE1ZmJhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCx1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTWF0cml4VGFibGVDb250ZXh0LCBNYXRyaXhUYWJsZUNvbnRleHRQcm92aWRlciB9IGZyb20gJy4vY29udGV4dCdcblxuICB0eXBlIFByb3BzID0ge1xuICAgIGluaXRpYWxNYXRyaXg/OiBpbXBvcnQoJy4uLy4uL3R5cGVzJykuTWF0cml4XG4gIH0gJiBpbXBvcnQoJ3JlYWN0JykuSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+XG5cbiAgLyoqXG4gICAqIEFkZCA0IGJ1dHRvbnM6IFxuICAgKiAtIENhbmNlbCB0byByZXNldCB0aGUgbWF0cml4IHRvIGhvdyBpdCB3YXMgYmVmb3JlIGNoYW5naW5nIHRoZSB2YWx1ZXMgKG9ubHkgd2hlbiBpbiBlZGl0IG1vZGUpXG4gICAqIC0gRWRpdCB0byBtYWtlIHRoZSBmaWVsZHMgZWRpdGFibGUgKG9ubHkgd2hlbiBub3QgaW4gZWRpdCBtb2RlKVxuICAgKiAtIENsZWFyIHRvIGNvbXBsZXRlbHkgY2xlYXIgdGhlIHRhYmxlXG4gICAqIC0gU2F2ZSB0byBzYXZlIHRoZSB0YWJsZVxuICAgKiBAcGFyYW0gcGFyYW0wIFxuICAgKi9cbiAgY29uc3QgTWF0cml4VGFibGU6IGltcG9ydCgncmVhY3QnKS5GQzxPbWl0PFByb3BzLCAnaW5pdGlhbE1hdHJpeCc+PiA9ICh7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IHtcbiAgLy8gU3RhdGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuICBjb25zdCBbeyBtYXRyaXggfSwgZGlzcGF0Y2hdID0gdXNlQ29udGV4dChNYXRyaXhUYWJsZUNvbnRleHQpXG4gIGNvbnN0IFsgbWF0cml4RGF0YSwgc2V0TWF0cml4RGF0YV0gID0gdXNlU3RhdGUobWF0cml4KTtcbiAgY29uc3QgWyBlbmFibGVFZGl0LCBzZXRFbmFibGVFZGl0IF0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgXG4gIC8vIEhhbmRsZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcHJpY2luZycsIHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgYWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICB9KVxuICAgIC50aGVuKHJlcyA9PiBcbiAgICAgIHJlcy5qc29uKClcbiAgICApXG4gICAgLnRoZW4oZGF0YT0+IHtcbiAgICAgIHNldE1hdHJpeERhdGEoZGF0YSk7XG4gICAgICBkaXNwYXRjaCh7dHlwZTogJ0dFVF9BTExfREFUQScsIHBheWxvYWQ6IGRhdGEgfSk7XG5cbiAgICB9KVxuICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coJy0tLWVycm9yJywgZXJyKSk7XG4gIH0sW10pXG5cbiAgLy8gWW91IGNhbiBzYXZlICh0byBhcGkpIHRoZSBtYXRyaXggaGVyZS4gUmVtZW1iZXIgdG8gdXBkYXRlIG9yaWdpbmFsTWF0cml4IHdoZW4gZG9uZS5cbiAgY29uc3Qgc2F2ZSA9IGFzeW5jICgpID0+IHtcbiAgICBkaXNwYXRjaCh7dHlwZTogJ1NBVkVfSlNPTid9KTtcbiAgfVxuICBcbiAgY29uc3QgZWRpdCA9ICgpPT57XG4gICAgY29uc29sZS5sb2coXCJlZGl0YnV0dG9uXCIpO1xuICAgIHNldEVuYWJsZUVkaXQoZmFsc2UpO1xuICB9XG5cbiAgY29uc3QgY2FuY2VsID0gKCk9PntcbiAgICBjb25zb2xlLmxvZyhcImNhbmNlbGJ1dHRvblwiKTtcbiAgICBzZXRFbmFibGVFZGl0KHRydWUpO1xuICB9XG5cbiAgY29uc3QgY2xlYXIgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2NsZWFyJylcbiAgICBkaXNwYXRjaCh7dHlwZTogJ0NMRUFSX1BSSUNJTkcnfSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFsnY29udGFpbmVyJywgY2xhc3NOYW1lXSl9IHsuLi5wcm9wc30+XG4gICAgICA8dGFibGUgaWQ9XCJjdXN0b21lcnNcIj5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0aD5tb250aHM8L3RoPlxuICAgICAgICAgIDx0aD5saXRlPC90aD5cbiAgICAgICAgICA8dGg+c3RhbmRhcmQ8L3RoPlxuICAgICAgICAgIDx0aD51bmxpbWl0ZWQ8L3RoPlxuICAgICAgICA8L3RyPlxuICAgICAgXG4gICAgICAgIHtPYmplY3Qua2V5cyhtYXRyaXhEYXRhKS5tYXAoKGtleU5hbWUsIGkpID0+IFxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD57a2V5TmFtZX08L3RkPlxuICAgICAgICAgICAge2VuYWJsZUVkaXQgPyAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPHRkPnttYXRyaXhEYXRhW2tleU5hbWVdLmxpdGV9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e21hdHJpeERhdGFba2V5TmFtZV0uc3RhbmRhcmR9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e21hdHJpeERhdGFba2V5TmFtZV0udW5saW1pdGVkfTwvdGQ+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8dGQ+PGlucHV0IHR5cGU9J251bWJlcicgZGVmYXVsdFZhbHVlPXttYXRyaXhEYXRhW2tleU5hbWVdLmxpdGV9IG9uQ2hhbmdlPXtldmVudCA9PiBkaXNwYXRjaCh7dHlwZTogJ0VESVRfQUNUSU9OJywgcGF5bG9hZDoge2tleU5hbWUsIGZpZWxkTmFtZTogJ2xpdGUnLCB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlfX0pfSAvPjwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPjxpbnB1dCB0eXBlPSdudW1iZXInIGRlZmF1bHRWYWx1ZT17bWF0cml4RGF0YVtrZXlOYW1lXS5zdGFuZGFyZH0gLz48L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD48aW5wdXQgdHlwZT0nbnVtYmVyJyBkZWZhdWx0VmFsdWU9e21hdHJpeERhdGFba2V5TmFtZV0udW5saW1pdGVkfSAvPjwvdGQ+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L3RyPlxuICAgICAgICApfVxuICAgICAgPC90YWJsZT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0b25Hcm91cCc+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17c2F2ZX0gPlNhdmU8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjbGVhcn0gPkNsZWFyPC9idXR0b24+XG4gICAgICAgIHtlbmFibGVFZGl0ID8gPGJ1dHRvbiBvbkNsaWNrPXtlZGl0fSA+RWRpdDwvYnV0dG9uPiA6IDxidXR0b24gb25DbGljaz17Y2FuY2VsfSBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIj5TaG93PC9idXR0b24+fVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZT57YFxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgICB3aWR0aDoxMDAlXG4gICAgICAgIH1cbiAgICAgICAgI2N1c3RvbWVycyB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiVHJlYnVjaGV0IE1TXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgI2N1c3RvbWVycyB0ZCwgI2N1c3RvbWVycyB0aCB7XG4gICAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAjY3VzdG9tZXJzIHRyOm50aC1jaGlsZChldmVuKXtiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO31cbiAgICAgICAgXG4gICAgICAgICNjdXN0b21lcnMgdHI6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNkZGQ7fVxuICAgICAgICBcbiAgICAgICAgI2N1c3RvbWVycyB0aCB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDEycHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICAuYnV0dG9uR3JvdXAge1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5idXR0b25Hcm91cCBidXR0b24ge1xuICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IE1hdHJpeFRhYmxlV2l0aENvbnRleHQ6IGltcG9ydCgncmVhY3QnKS5GQzxQcm9wcz4gPSAoeyBpbml0aWFsTWF0cml4LCAuLi5wcm9wcyB9KSA9PiB7XG4gIC8vIFlvdSBjYW4gZmV0Y2ggdGhlIHByaWNpbmcgaGVyZSBvciBpbiBwYWdlcy9pbmRleC50c1xuICAvLyBSZW1lbWJlciB0aGF0IHlvdSBzaG91bGQgdHJ5IHRvIHJlZmxlY3QgdGhlIHN0YXRlIG9mIHByaWNpbmcgaW4gb3JpZ2luYWxNYXRyaXguXG4gIC8vIG1hdHJpeCB3aWxsIGhvbGQgdGhlIGxhdGVzdCB2YWx1ZSAoZWRpdGVkIG9yIHNhbWUgYXMgb3JpZ2luYWxNYXRyaXgpXG5cbiAgcmV0dXJuIChcbiAgICA8TWF0cml4VGFibGVDb250ZXh0UHJvdmlkZXIgaW5pdGlhbE1hdHJpeD17aW5pdGlhbE1hdHJpeH0+XG4gICAgICA8TWF0cml4VGFibGUgey4uLnByb3BzfSAvPlxuICAgIDwvTWF0cml4VGFibGVDb250ZXh0UHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWF0cml4VGFibGVXaXRoQ29udGV4dFxuIl0sInNvdXJjZVJvb3QiOiIifQ==