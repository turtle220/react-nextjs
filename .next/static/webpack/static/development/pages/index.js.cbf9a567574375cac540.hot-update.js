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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./context */ "./components/MatrixTable/context.tsx");





var _this = undefined,
    _jsxFileName = "D:\\interview\\interview-fullstack-master\\components\\MatrixTable\\index.tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;




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
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_6__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_7__["MatrixTableContext"]),
      matrix = _useContext[0].matrix,
      dispatch = _useContext[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(matrix),
      matrixData = _useState[0],
      setMatrixData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(true),
      flag = _useState2[0],
      setFlag = _useState2[1]; // Handlers ---------------------------------------------------------------- //


  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
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
    setFlag(false);
  };

  var cancel = function cancel() {
    console.log("cancelbutton");
    setFlag(true);
  };

  var update = function update() {
    console.log('update');
  };

  var clear = function clear() {
    console.log('clear');
  };

  return __jsx("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    className: "jsx-3682736813" + " " + (props && props.className != null && props.className || classnames__WEBPACK_IMPORTED_MODULE_5___default()(['container', className]) || ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 5
    }
  }), __jsx("table", {
    id: "customers",
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }
  }, __jsx("tr", {
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 9
    }
  }, __jsx("th", {
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 11
    }
  }, "months"), __jsx("th", {
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 11
    }
  }, "lite"), __jsx("th", {
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 11
    }
  }, "standard"), __jsx("th", {
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 11
    }
  }, "unlimited")), Object.keys(matrix).map(function (keyName, i) {
    return __jsx("tr", {
      className: "jsx-3682736813",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 11
      }
    }, __jsx("td", {
      className: "jsx-3682736813",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 13
      }
    }, keyName), flag ? __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx("td", {
      className: "jsx-3682736813",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 17
      }
    }, matrix[keyName].lite), __jsx("td", {
      className: "jsx-3682736813",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 17
      }
    }, matrix[keyName].standard), __jsx("td", {
      className: "jsx-3682736813",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 17
      }
    }, matrix[keyName].unlimited)) : __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx("td", {
      className: "jsx-3682736813",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 17
      }
    }, __jsx("input", {
      type: "text",
      defaultValue: matrix[keyName].lite,
      className: "jsx-3682736813",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 21
      }
    })), __jsx("td", {
      className: "jsx-3682736813",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 17
      }
    }, __jsx("input", {
      type: "text",
      defaultValue: matrix[keyName].standard,
      className: "jsx-3682736813",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 21
      }
    })), __jsx("td", {
      className: "jsx-3682736813",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 17
      }
    }, __jsx("input", {
      type: "text",
      defaultValue: matrix[keyName].unlimited,
      className: "jsx-3682736813",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 21
      }
    }))));
  })), __jsx("button", {
    onClick: save,
    className: "jsx-3682736813" + " " + "btn btn-success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 7
    }
  }, "Save"), __jsx("button", {
    onClick: clear,
    className: "jsx-3682736813" + " " + "btn btn-success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 7
    }
  }, "Clear"), __jsx("button", {
    onClick: edit,
    className: "jsx-3682736813" + " " + "btn btn-success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 7
    }
  }, "Edit"), __jsx("button", {
    onClick: update,
    className: "jsx-3682736813" + " " + "btn btn-success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 7
    }
  }, "OK"), __jsx("button", {
    onClick: cancel,
    className: "jsx-3682736813" + " " + "btn btn-success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 7
    }
  }, "Cancel"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "3682736813",
    __self: _this
  }, ".container.jsx-3682736813{margin:0;width:100%;}#customers.jsx-3682736813{font-family:\"Trebuchet MS\",Arial,Helvetica,sans-serif;border-collapse:collapse;width:100%;}#customers.jsx-3682736813 td.jsx-3682736813,#customers.jsx-3682736813 th.jsx-3682736813{border:1px solid #ddd;padding:8px;}#customers.jsx-3682736813 tr.jsx-3682736813:nth-child(even){background-color:#f2f2f2;}#customers.jsx-3682736813 tr.jsx-3682736813:hover{background-color:#ddd;}#customers.jsx-3682736813 th.jsx-3682736813{padding-top:12px;padding-bottom:12px;text-align:left;background-color:#4CAF50;color:white;}.performance.jsx-3682736813{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxpbnRlcnZpZXdcXGludGVydmlldy1mdWxsc3RhY2stbWFzdGVyXFxjb21wb25lbnRzXFxNYXRyaXhUYWJsZVxcaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFKa0IsQUFHbUIsQUFJaUQsQUFNbkMsQUFJOEIsQUFFWixBQUd2QixBQU9MLFNBeEJmLFFBa0J1QixHQWxCdEIsRUFTYyxBQUs2QixHQUZZLFNBRnZELEdBU2tCLGdCQUNTLENBakJBLG9CQXNCM0IsSUFKYyxDQWpCRCxXQUNiLEFBaUJBIiwiZmlsZSI6IkQ6XFxpbnRlcnZpZXdcXGludGVydmlldy1mdWxsc3RhY2stbWFzdGVyXFxjb21wb25lbnRzXFxNYXRyaXhUYWJsZVxcaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE1hdHJpeFRhYmxlQ29udGV4dCwgTWF0cml4VGFibGVDb250ZXh0UHJvdmlkZXIgfSBmcm9tICcuL2NvbnRleHQnXG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gJy4uLy4uL3BhZ2VzL3N0b3JlJztcblxuICB0eXBlIFByb3BzID0ge1xuICAgIGluaXRpYWxNYXRyaXg/OiBpbXBvcnQoJy4uLy4uL3R5cGVzJykuTWF0cml4XG4gIH0gJiBpbXBvcnQoJ3JlYWN0JykuSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+XG5cbiAgLyoqXG4gICAqIEFkZCA0IGJ1dHRvbnM6IFxuICAgKiAtIENhbmNlbCB0byByZXNldCB0aGUgbWF0cml4IHRvIGhvdyBpdCB3YXMgYmVmb3JlIGNoYW5naW5nIHRoZSB2YWx1ZXMgKG9ubHkgd2hlbiBpbiBlZGl0IG1vZGUpXG4gICAqIC0gRWRpdCB0byBtYWtlIHRoZSBmaWVsZHMgZWRpdGFibGUgKG9ubHkgd2hlbiBub3QgaW4gZWRpdCBtb2RlKVxuICAgKiAtIENsZWFyIHRvIGNvbXBsZXRlbHkgY2xlYXIgdGhlIHRhYmxlXG4gICAqIC0gU2F2ZSB0byBzYXZlIHRoZSB0YWJsZVxuICAgKiBAcGFyYW0gcGFyYW0wIFxuICAgKi9cbiAgY29uc3QgTWF0cml4VGFibGU6IGltcG9ydCgncmVhY3QnKS5GQzxPbWl0PFByb3BzLCAnaW5pdGlhbE1hdHJpeCc+PiA9ICh7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IHtcbiAgLy8gU3RhdGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuICBjb25zdCBbeyBtYXRyaXggfSwgZGlzcGF0Y2hdID0gdXNlQ29udGV4dChNYXRyaXhUYWJsZUNvbnRleHQpXG4gIGNvbnN0IFsgbWF0cml4RGF0YSwgc2V0TWF0cml4RGF0YV0gID0gdXNlU3RhdGUobWF0cml4KTtcbiAgY29uc3QgWyBmbGFnLCBzZXRGbGFnIF0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgXG4gIC8vIEhhbmRsZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcHJpY2luZycsIHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgYWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICB9KVxuICAgIC50aGVuKHJlcyA9PiBcbiAgICAgIHJlcy5qc29uKClcbiAgICApXG4gICAgLnRoZW4oZGF0YT0+IHtcbiAgICAgIHNldE1hdHJpeERhdGEoZGF0YSk7XG4gICAgICBkaXNwYXRjaCh7dHlwZTogJ0dFVF9BTExfREFUQScsIHBheWxvYWQ6IGRhdGEgfSk7XG5cbiAgICB9KVxuICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coJy0tLWVycm9yJywgZXJyKSk7XG4gIH0sW10pXG5cbiAgLy8gWW91IGNhbiBzYXZlICh0byBhcGkpIHRoZSBtYXRyaXggaGVyZS4gUmVtZW1iZXIgdG8gdXBkYXRlIG9yaWdpbmFsTWF0cml4IHdoZW4gZG9uZS5cbiAgY29uc3Qgc2F2ZSA9IGFzeW5jICgpID0+IHtcbiAgICBkaXNwYXRjaCh7dHlwZTogJ1NBVkVfSlNPTid9KTtcbiAgfVxuICAvLyBFZmZlY3RzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4gIC8vIFJlbmRlcmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbiAgXG4gICAgXG4gIC8vIGNvbnN0IHVwZGF0ZW1hdHJpeHRhYmxlID0gXG4gIC8vICAgPHRhYmxlIGlkPVwiY3VzdG9tZXJzXCI+XG4gIC8vICAgICAgIDx0cj5cbiAgLy8gICAgICAgICA8dGg+bW9udGhzPC90aD5cbiAgLy8gICAgICAgICA8dGg+bGl0ZTwvdGg+XG4gIC8vICAgICAgICAgPHRoPnN0YW5kYXJkPC90aD5cbiAgLy8gICAgICAgICA8dGg+dW5saW1pdGVkPC90aD5cbiAgLy8gICAgICAgICA8dGg+cGVyZm9ybWFuY2U8L3RoPlxuICAvLyAgICAgICA8L3RyPlxuICAvLyAgICAgICA8dHI+XG4gIC8vICAgICAgICAgPHRkPjEybW9udGhzPC90ZD5cbiAgLy8gICAgICAgICA8dGQ+e21hdHJpeERhdGFbXCIxMm1vbnRoc1wiXS5saXRlfTwvdGQ+XG4gIC8vICAgICAgICAgPHRkPnttYXRyaXhEYXRhW1wiMTJtb250aHNcIl0uc3RhbmRhcmR9PC90ZD5cbiAgLy8gICAgICAgICA8dGQ+e21hdHJpeERhdGFbXCIxMm1vbnRoc1wiXS51bmxpbWl0ZWR9PC90ZD5cbiAgLy8gICAgICAgPC90cj5cbiAgLy8gICAgICAgPHRyPlxuICAvLyAgICAgICAgIDx0ZD4yNG1vbnRoczwvdGQ+XG4gIC8vICAgICAgICAgPHRkPnttYXRyaXhEYXRhW1wiMjRtb250aHNcIl0ubGl0ZX08L3RkPlxuICAvLyAgICAgICAgIDx0ZD57bWF0cml4RGF0YVtcIjI0bW9udGhzXCJdLnN0YW5kYXJkfTwvdGQ+XG4gIC8vICAgICAgICAgPHRkPnttYXRyaXhEYXRhW1wiMjRtb250aHNcIl0udW5saW1pdGVkfTwvdGQ+XG4gIC8vICAgICAgIDwvdHI+XG4gIC8vICAgICAgIDx0cj5cbiAgLy8gICAgICAgICA8dGQ+MzZtb250aHM8L3RkPlxuICAvLyAgICAgICAgIDx0ZD57bWF0cml4RGF0YVtcIjM2bW9udGhzXCJdLmxpdGV9PC90ZD5cbiAgLy8gICAgICAgICA8dGQ+e21hdHJpeERhdGFbXCIzNm1vbnRoc1wiXS5zdGFuZGFyZH08L3RkPlxuICAvLyAgICAgICAgIDx0ZD57bWF0cml4RGF0YVtcIjM2bW9udGhzXCJdLnVubGltaXRlZH08L3RkPlxuICAvLyAgICAgICA8L3RyPlxuICAvLyAgICAgICA8dHI+XG4gIC8vICAgICAgICAgPHRkPm10bTwvdGQ+XG4gIC8vICAgICAgICAgPHRkPnttYXRyaXhEYXRhLm10bS5saXRlfTwvdGQ+XG4gIC8vICAgICAgICAgPHRkPnttYXRyaXhEYXRhLm10bS5zdGFuZGFyZH08L3RkPlxuICAvLyAgICAgICAgIDx0ZD57bWF0cml4RGF0YS5tdG0udW5saW1pdGVkfTwvdGQ+XG4gIC8vICAgICAgIDwvdHI+XG4gIC8vICAgICA8L3RhYmxlPlxuICBjb25zdCBlZGl0ID0gKCk9PntcbiAgICBjb25zb2xlLmxvZyhcImVkaXRidXR0b25cIik7XG4gICAgc2V0RmxhZyhmYWxzZSk7XG4gIH1cblxuICBjb25zdCBjYW5jZWwgPSAoKT0+e1xuICAgIGNvbnNvbGUubG9nKFwiY2FuY2VsYnV0dG9uXCIpO1xuICAgIHNldEZsYWcodHJ1ZSk7XG4gIH1cblxuICBjb25zdCB1cGRhdGUgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3VwZGF0ZScpXG4gIH1cblxuICBjb25zdCBjbGVhciA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnY2xlYXInKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhbJ2NvbnRhaW5lcicsIGNsYXNzTmFtZV0pfSB7Li4ucHJvcHN9PlxuICAgICAgey8qIDxiciAvPlxuICAgICAgPGJyIC8+XG5cbiAgICAgIDM2bW9udGhzIGxpdGU6XG4gICAgICA8aW5wdXQgXG4gICAgICAgIHZhbHVlPXttYXRyaXhbXCIzNm1vbnRoc1wiXS5saXRlIHx8ICcnfSBcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogJ1NPTUVfQUNUSU9OJyxcbiAgICAgICAgICBwYXlsb2FkOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICB9KX0gLz4gKi99XG4gICAgICA8dGFibGUgaWQ9XCJjdXN0b21lcnNcIj5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0aD5tb250aHM8L3RoPlxuICAgICAgICAgIDx0aD5saXRlPC90aD5cbiAgICAgICAgICA8dGg+c3RhbmRhcmQ8L3RoPlxuICAgICAgICAgIDx0aD51bmxpbWl0ZWQ8L3RoPlxuICAgICAgICA8L3RyPlxuICAgICAgXG4gICAgICAgIHtPYmplY3Qua2V5cyhtYXRyaXgpLm1hcCgoa2V5TmFtZSwgaSkgPT4gXG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPntrZXlOYW1lfTwvdGQ+XG4gICAgICAgICAgICB7ZmxhZyA/IChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8dGQ+e21hdHJpeFtrZXlOYW1lXS5saXRlfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPnttYXRyaXhba2V5TmFtZV0uc3RhbmRhcmR9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e21hdHJpeFtrZXlOYW1lXS51bmxpbWl0ZWR9PC90ZD5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDx0ZD48aW5wdXQgdHlwZT0ndGV4dCcgZGVmYXVsdFZhbHVlPXttYXRyaXhba2V5TmFtZV0ubGl0ZX0gLz48L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD48aW5wdXQgdHlwZT0ndGV4dCcgZGVmYXVsdFZhbHVlPXttYXRyaXhba2V5TmFtZV0uc3RhbmRhcmR9IC8+PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+PGlucHV0IHR5cGU9J3RleHQnIGRlZmF1bHRWYWx1ZT17bWF0cml4W2tleU5hbWVdLnVubGltaXRlZH0gLz48L3RkPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgKX1cbiAgICAgIDwvdGFibGU+XG4gICAgICBcbiAgICAgIDxidXR0b24gb25DbGljaz17c2F2ZX0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCI+U2F2ZTwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjbGVhcn0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCI+Q2xlYXI8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gb25DbGljaz17ZWRpdH0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCI+RWRpdDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt1cGRhdGV9IGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiPk9LPC9idXR0b24+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2NhbmNlbH0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCI+Q2FuY2VsPC9idXR0b24+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgICAgd2lkdGg6MTAwJVxuICAgICAgICB9XG4gICAgICAgICNjdXN0b21lcnMge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICNjdXN0b21lcnMgdGQsICNjdXN0b21lcnMgdGgge1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAjY3VzdG9tZXJzIHRyOm50aC1jaGlsZChldmVuKXtiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO31cbiAgICAgICAgXG4gICAgICAgICNjdXN0b21lcnMgdHI6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNkZGQ7fVxuICAgICAgICBcbiAgICAgICAgI2N1c3RvbWVycyB0aCB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDEycHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICAucGVyZm9ybWFuY2Uge1xuICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IE1hdHJpeFRhYmxlV2l0aENvbnRleHQ6IGltcG9ydCgncmVhY3QnKS5GQzxQcm9wcz4gPSAoeyBpbml0aWFsTWF0cml4LCAuLi5wcm9wcyB9KSA9PiB7XG4gIC8vIFlvdSBjYW4gZmV0Y2ggdGhlIHByaWNpbmcgaGVyZSBvciBpbiBwYWdlcy9pbmRleC50c1xuICAvLyBSZW1lbWJlciB0aGF0IHlvdSBzaG91bGQgdHJ5IHRvIHJlZmxlY3QgdGhlIHN0YXRlIG9mIHByaWNpbmcgaW4gb3JpZ2luYWxNYXRyaXguXG4gIC8vIG1hdHJpeCB3aWxsIGhvbGQgdGhlIGxhdGVzdCB2YWx1ZSAoZWRpdGVkIG9yIHNhbWUgYXMgb3JpZ2luYWxNYXRyaXgpXG5cbiAgcmV0dXJuIChcbiAgICA8TWF0cml4VGFibGVDb250ZXh0UHJvdmlkZXIgaW5pdGlhbE1hdHJpeD17aW5pdGlhbE1hdHJpeH0+XG4gICAgICA8TWF0cml4VGFibGUgey4uLnByb3BzfSAvPlxuICAgIDwvTWF0cml4VGFibGVDb250ZXh0UHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWF0cml4VGFibGVXaXRoQ29udGV4dFxuIl19 */\n/*@ sourceURL=D:\\\\interview\\\\interview-fullstack-master\\\\components\\\\MatrixTable\\\\index.tsx */"));
};

_s(MatrixTable, "jfepvZES36c3AqhGbJ+hw1gSr2E=");

_c = MatrixTable;

var MatrixTableWithContext = function MatrixTableWithContext(_ref3) {
  var initialMatrix = _ref3.initialMatrix,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref3, ["initialMatrix"]);

  // You can fetch the pricing here or in pages/index.ts
  // Remember that you should try to reflect the state of pricing in originalMatrix.
  // matrix will hold the latest value (edited or same as originalMatrix)
  return __jsx(_context__WEBPACK_IMPORTED_MODULE_7__["MatrixTableContextProvider"], {
    initialMatrix: initialMatrix,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 5
    }
  }, __jsx(MatrixTable, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01hdHJpeFRhYmxlL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJNYXRyaXhUYWJsZSIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwicHJvcHMiLCJ1c2VDb250ZXh0IiwiTWF0cml4VGFibGVDb250ZXh0IiwibWF0cml4IiwiZGlzcGF0Y2giLCJ1c2VTdGF0ZSIsIm1hdHJpeERhdGEiLCJzZXRNYXRyaXhEYXRhIiwiZmxhZyIsInNldEZsYWciLCJ1c2VFZmZlY3QiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJhY2NlcHQiLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJ0eXBlIiwicGF5bG9hZCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJzYXZlIiwiZWRpdCIsImNhbmNlbCIsInVwZGF0ZSIsImNsZWFyIiwiY2xhc3NuYW1lcyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXlOYW1lIiwiaSIsImxpdGUiLCJzdGFuZGFyZCIsInVubGltaXRlZCIsIk1hdHJpeFRhYmxlV2l0aENvbnRleHQiLCJpbml0aWFsTWF0cml4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQU9FOzs7Ozs7OztBQVFBLElBQU1BLFdBQTZELEdBQUcsU0FBaEVBLFdBQWdFLE9BQXVDO0FBQUE7O0FBQUEsTUFBcENDLFNBQW9DLFFBQXBDQSxTQUFvQztBQUFBLE1BQXpCQyxRQUF5QixRQUF6QkEsUUFBeUI7QUFBQSxNQUFaQyxLQUFZOztBQUM3RztBQUQ2RyxvQkFFOUVDLHdEQUFVLENBQUNDLDJEQUFELENBRm9FO0FBQUEsTUFFcEdDLE1BRm9HLGtCQUVwR0EsTUFGb0c7QUFBQSxNQUUxRkMsUUFGMEY7O0FBQUEsa0JBR3ZFQyxzREFBUSxDQUFDRixNQUFELENBSCtEO0FBQUEsTUFHckdHLFVBSHFHO0FBQUEsTUFHekZDLGFBSHlGOztBQUFBLG1CQUluRkYsc0RBQVEs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ZW50XFxwYWdlc1xcaW5kZXguanMuY2JmOWE1Njc1NzQzNzVjYWM1NDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBNYXRyaXhUYWJsZUNvbnRleHQsIE1hdHJpeFRhYmxlQ29udGV4dFByb3ZpZGVyIH0gZnJvbSAnLi9jb250ZXh0J1xuaW1wb3J0IHsgc3RvcmUgfSBmcm9tICcuLi8uLi9wYWdlcy9zdG9yZSc7XG5cbiAgdHlwZSBQcm9wcyA9IHtcbiAgICBpbml0aWFsTWF0cml4PzogaW1wb3J0KCcuLi8uLi90eXBlcycpLk1hdHJpeFxuICB9ICYgaW1wb3J0KCdyZWFjdCcpLkhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PlxuXG4gIC8qKlxuICAgKiBBZGQgNCBidXR0b25zOiBcbiAgICogLSBDYW5jZWwgdG8gcmVzZXQgdGhlIG1hdHJpeCB0byBob3cgaXQgd2FzIGJlZm9yZSBjaGFuZ2luZyB0aGUgdmFsdWVzIChvbmx5IHdoZW4gaW4gZWRpdCBtb2RlKVxuICAgKiAtIEVkaXQgdG8gbWFrZSB0aGUgZmllbGRzIGVkaXRhYmxlIChvbmx5IHdoZW4gbm90IGluIGVkaXQgbW9kZSlcbiAgICogLSBDbGVhciB0byBjb21wbGV0ZWx5IGNsZWFyIHRoZSB0YWJsZVxuICAgKiAtIFNhdmUgdG8gc2F2ZSB0aGUgdGFibGVcbiAgICogQHBhcmFtIHBhcmFtMCBcbiAgICovXG4gIGNvbnN0IE1hdHJpeFRhYmxlOiBpbXBvcnQoJ3JlYWN0JykuRkM8T21pdDxQcm9wcywgJ2luaXRpYWxNYXRyaXgnPj4gPSAoeyBjbGFzc05hbWUsIGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiB7XG4gIC8vIFN0YXRlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbiAgY29uc3QgW3sgbWF0cml4IH0sIGRpc3BhdGNoXSA9IHVzZUNvbnRleHQoTWF0cml4VGFibGVDb250ZXh0KVxuICBjb25zdCBbIG1hdHJpeERhdGEsIHNldE1hdHJpeERhdGFdICA9IHVzZVN0YXRlKG1hdHJpeCk7XG4gIGNvbnN0IFsgZmxhZywgc2V0RmxhZyBdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIFxuICAvLyBIYW5kbGVycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3ByaWNpbmcnLCB7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIGFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0sXG4gICAgfSlcbiAgICAudGhlbihyZXMgPT4gXG4gICAgICByZXMuanNvbigpXG4gICAgKVxuICAgIC50aGVuKGRhdGE9PiB7XG4gICAgICBzZXRNYXRyaXhEYXRhKGRhdGEpO1xuICAgICAgZGlzcGF0Y2goe3R5cGU6ICdHRVRfQUxMX0RBVEEnLCBwYXlsb2FkOiBkYXRhIH0pO1xuXG4gICAgfSlcbiAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKCctLS1lcnJvcicsIGVycikpO1xuICB9LFtdKVxuXG4gIC8vIFlvdSBjYW4gc2F2ZSAodG8gYXBpKSB0aGUgbWF0cml4IGhlcmUuIFJlbWVtYmVyIHRvIHVwZGF0ZSBvcmlnaW5hbE1hdHJpeCB3aGVuIGRvbmUuXG4gIGNvbnN0IHNhdmUgPSBhc3luYyAoKSA9PiB7XG4gICAgZGlzcGF0Y2goe3R5cGU6ICdTQVZFX0pTT04nfSk7XG4gIH1cbiAgLy8gRWZmZWN0cyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuICAvLyBSZW5kZXJpbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4gIFxuICAgIFxuICAvLyBjb25zdCB1cGRhdGVtYXRyaXh0YWJsZSA9IFxuICAvLyAgIDx0YWJsZSBpZD1cImN1c3RvbWVyc1wiPlxuICAvLyAgICAgICA8dHI+XG4gIC8vICAgICAgICAgPHRoPm1vbnRoczwvdGg+XG4gIC8vICAgICAgICAgPHRoPmxpdGU8L3RoPlxuICAvLyAgICAgICAgIDx0aD5zdGFuZGFyZDwvdGg+XG4gIC8vICAgICAgICAgPHRoPnVubGltaXRlZDwvdGg+XG4gIC8vICAgICAgICAgPHRoPnBlcmZvcm1hbmNlPC90aD5cbiAgLy8gICAgICAgPC90cj5cbiAgLy8gICAgICAgPHRyPlxuICAvLyAgICAgICAgIDx0ZD4xMm1vbnRoczwvdGQ+XG4gIC8vICAgICAgICAgPHRkPnttYXRyaXhEYXRhW1wiMTJtb250aHNcIl0ubGl0ZX08L3RkPlxuICAvLyAgICAgICAgIDx0ZD57bWF0cml4RGF0YVtcIjEybW9udGhzXCJdLnN0YW5kYXJkfTwvdGQ+XG4gIC8vICAgICAgICAgPHRkPnttYXRyaXhEYXRhW1wiMTJtb250aHNcIl0udW5saW1pdGVkfTwvdGQ+XG4gIC8vICAgICAgIDwvdHI+XG4gIC8vICAgICAgIDx0cj5cbiAgLy8gICAgICAgICA8dGQ+MjRtb250aHM8L3RkPlxuICAvLyAgICAgICAgIDx0ZD57bWF0cml4RGF0YVtcIjI0bW9udGhzXCJdLmxpdGV9PC90ZD5cbiAgLy8gICAgICAgICA8dGQ+e21hdHJpeERhdGFbXCIyNG1vbnRoc1wiXS5zdGFuZGFyZH08L3RkPlxuICAvLyAgICAgICAgIDx0ZD57bWF0cml4RGF0YVtcIjI0bW9udGhzXCJdLnVubGltaXRlZH08L3RkPlxuICAvLyAgICAgICA8L3RyPlxuICAvLyAgICAgICA8dHI+XG4gIC8vICAgICAgICAgPHRkPjM2bW9udGhzPC90ZD5cbiAgLy8gICAgICAgICA8dGQ+e21hdHJpeERhdGFbXCIzNm1vbnRoc1wiXS5saXRlfTwvdGQ+XG4gIC8vICAgICAgICAgPHRkPnttYXRyaXhEYXRhW1wiMzZtb250aHNcIl0uc3RhbmRhcmR9PC90ZD5cbiAgLy8gICAgICAgICA8dGQ+e21hdHJpeERhdGFbXCIzNm1vbnRoc1wiXS51bmxpbWl0ZWR9PC90ZD5cbiAgLy8gICAgICAgPC90cj5cbiAgLy8gICAgICAgPHRyPlxuICAvLyAgICAgICAgIDx0ZD5tdG08L3RkPlxuICAvLyAgICAgICAgIDx0ZD57bWF0cml4RGF0YS5tdG0ubGl0ZX08L3RkPlxuICAvLyAgICAgICAgIDx0ZD57bWF0cml4RGF0YS5tdG0uc3RhbmRhcmR9PC90ZD5cbiAgLy8gICAgICAgICA8dGQ+e21hdHJpeERhdGEubXRtLnVubGltaXRlZH08L3RkPlxuICAvLyAgICAgICA8L3RyPlxuICAvLyAgICAgPC90YWJsZT5cbiAgY29uc3QgZWRpdCA9ICgpPT57XG4gICAgY29uc29sZS5sb2coXCJlZGl0YnV0dG9uXCIpO1xuICAgIHNldEZsYWcoZmFsc2UpO1xuICB9XG5cbiAgY29uc3QgY2FuY2VsID0gKCk9PntcbiAgICBjb25zb2xlLmxvZyhcImNhbmNlbGJ1dHRvblwiKTtcbiAgICBzZXRGbGFnKHRydWUpO1xuICB9XG5cbiAgY29uc3QgdXBkYXRlID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCd1cGRhdGUnKVxuICB9XG5cbiAgY29uc3QgY2xlYXIgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2NsZWFyJylcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoWydjb250YWluZXInLCBjbGFzc05hbWVdKX0gey4uLnByb3BzfT5cbiAgICAgIHsvKiA8YnIgLz5cbiAgICAgIDxiciAvPlxuXG4gICAgICAzNm1vbnRocyBsaXRlOlxuICAgICAgPGlucHV0IFxuICAgICAgICB2YWx1ZT17bWF0cml4W1wiMzZtb250aHNcIl0ubGl0ZSB8fCAnJ30gXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6ICdTT01FX0FDVElPTicsXG4gICAgICAgICAgcGF5bG9hZDogZS50YXJnZXQudmFsdWVcbiAgICAgICAgfSl9IC8+ICovfVxuICAgICAgPHRhYmxlIGlkPVwiY3VzdG9tZXJzXCI+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGg+bW9udGhzPC90aD5cbiAgICAgICAgICA8dGg+bGl0ZTwvdGg+XG4gICAgICAgICAgPHRoPnN0YW5kYXJkPC90aD5cbiAgICAgICAgICA8dGg+dW5saW1pdGVkPC90aD5cbiAgICAgICAgPC90cj5cbiAgICAgIFxuICAgICAgICB7T2JqZWN0LmtleXMobWF0cml4KS5tYXAoKGtleU5hbWUsIGkpID0+IFxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD57a2V5TmFtZX08L3RkPlxuICAgICAgICAgICAge2ZsYWcgPyAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPHRkPnttYXRyaXhba2V5TmFtZV0ubGl0ZX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57bWF0cml4W2tleU5hbWVdLnN0YW5kYXJkfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPnttYXRyaXhba2V5TmFtZV0udW5saW1pdGVkfTwvdGQ+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8dGQ+PGlucHV0IHR5cGU9J3RleHQnIGRlZmF1bHRWYWx1ZT17bWF0cml4W2tleU5hbWVdLmxpdGV9IC8+PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+PGlucHV0IHR5cGU9J3RleHQnIGRlZmF1bHRWYWx1ZT17bWF0cml4W2tleU5hbWVdLnN0YW5kYXJkfSAvPjwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPjxpbnB1dCB0eXBlPSd0ZXh0JyBkZWZhdWx0VmFsdWU9e21hdHJpeFtrZXlOYW1lXS51bmxpbWl0ZWR9IC8+PC90ZD5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICl9XG4gICAgICA8L3RhYmxlPlxuICAgICAgXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NhdmV9IGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiPlNhdmU8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gb25DbGljaz17Y2xlYXJ9IGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiPkNsZWFyPC9idXR0b24+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2VkaXR9IGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiPkVkaXQ8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gb25DbGljaz17dXBkYXRlfSBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIj5PSzwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjYW5jZWx9IGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiPkNhbmNlbDwvYnV0dG9uPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIG1hcmdpbjowO1xuICAgICAgICAgIHdpZHRoOjEwMCVcbiAgICAgICAgfVxuICAgICAgICAjY3VzdG9tZXJzIHtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAjY3VzdG9tZXJzIHRkLCAjY3VzdG9tZXJzIHRoIHtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgI2N1c3RvbWVycyB0cjpudGgtY2hpbGQoZXZlbil7YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjt9XG4gICAgICAgIFxuICAgICAgICAjY3VzdG9tZXJzIHRyOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO31cbiAgICAgICAgXG4gICAgICAgICNjdXN0b21lcnMgdGgge1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAxMnB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgICAgLnBlcmZvcm1hbmNlIHtcbiAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBNYXRyaXhUYWJsZVdpdGhDb250ZXh0OiBpbXBvcnQoJ3JlYWN0JykuRkM8UHJvcHM+ID0gKHsgaW5pdGlhbE1hdHJpeCwgLi4ucHJvcHMgfSkgPT4ge1xuICAvLyBZb3UgY2FuIGZldGNoIHRoZSBwcmljaW5nIGhlcmUgb3IgaW4gcGFnZXMvaW5kZXgudHNcbiAgLy8gUmVtZW1iZXIgdGhhdCB5b3Ugc2hvdWxkIHRyeSB0byByZWZsZWN0IHRoZSBzdGF0ZSBvZiBwcmljaW5nIGluIG9yaWdpbmFsTWF0cml4LlxuICAvLyBtYXRyaXggd2lsbCBob2xkIHRoZSBsYXRlc3QgdmFsdWUgKGVkaXRlZCBvciBzYW1lIGFzIG9yaWdpbmFsTWF0cml4KVxuXG4gIHJldHVybiAoXG4gICAgPE1hdHJpeFRhYmxlQ29udGV4dFByb3ZpZGVyIGluaXRpYWxNYXRyaXg9e2luaXRpYWxNYXRyaXh9PlxuICAgICAgPE1hdHJpeFRhYmxlIHsuLi5wcm9wc30gLz5cbiAgICA8L01hdHJpeFRhYmxlQ29udGV4dFByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hdHJpeFRhYmxlV2l0aENvbnRleHRcbiJdLCJzb3VyY2VSb290IjoiIn0=