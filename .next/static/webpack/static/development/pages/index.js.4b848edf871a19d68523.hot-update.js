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

  console.log(matrix);

  var editbutton = __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 5
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }
  }, "12 months"), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }
  }, matrix["12months"].lite), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }
  }, matrix["12months"].standard), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }
  }, matrix["12months"].unlimited), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }
  }, __jsx("button", {
    onClick: edit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 12
    }
  }, " Edit")));

  var editdetailbutton = __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 5
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }
  }, __jsx("input", {
    type: "text",
    defaultValue: "12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 11
    }
  }), " months"), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }
  }, __jsx("input", {
    type: "number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 11
    }
  })), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }
  }, __jsx("input", {
    value: matrix["12months"].standard,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 11
    }
  })), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }
  }, __jsx("input", {
    value: matrix["12months"].unlimited,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 11
    }
  })), __jsx("td", {
    className: "performance",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }
  }, __jsx("button", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }
  }, "OK"), __jsx("button", {
    onClick: cancel,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  }, "Cancel")));

  return __jsx("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    className: "jsx-3682736813" + " " + (props && props.className != null && props.className || classnames__WEBPACK_IMPORTED_MODULE_5___default()(['container', className]) || ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 5
    }
  }), __jsx("button", {
    onClick: save,
    className: "jsx-3682736813" + " " + "btn btn-success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }
  }, "Save"), __jsx("table", {
    id: "customers",
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 7
    }
  }, __jsx("tr", {
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 9
    }
  }, __jsx("th", {
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 11
    }
  }, "months"), __jsx("th", {
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 11
    }
  }, "lite"), __jsx("th", {
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 11
    }
  }, "standard"), __jsx("th", {
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 11
    }
  }, "unlimited"), __jsx("th", {
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 11
    }
  }, "performance")), flag ? editbutton : editdetailbutton, __jsx("tr", {
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 9
    }
  }, __jsx("td", {
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 11
    }
  }, "24months"), __jsx("td", {
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 11
    }
  }, matrix["24months"].lite), __jsx("td", {
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 11
    }
  }, matrix["24months"].standard), __jsx("td", {
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 11
    }
  }, matrix["24months"].unlimited), __jsx("td", {
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 11
    }
  }, __jsx("button", {
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 13
    }
  }, "OK"), __jsx("button", {
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 13
    }
  }, "Cancel"))), __jsx("tr", {
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 9
    }
  }, __jsx("td", {
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 11
    }
  }, "36months"), __jsx("td", {
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 11
    }
  }, matrix["36months"].lite), __jsx("td", {
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 11
    }
  }, matrix["36months"].standard), __jsx("td", {
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 11
    }
  }, matrix["36months"].unlimited), __jsx("td", {
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 11
    }
  }, __jsx("button", {
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 13
    }
  }, "OK"), __jsx("button", {
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 13
    }
  }, "Cancel"))), __jsx("tr", {
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 9
    }
  }, __jsx("td", {
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 11
    }
  }, "mtm"), __jsx("td", {
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 11
    }
  }, matrix.mtm.lite), __jsx("td", {
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 11
    }
  }, matrix.mtm.standard), __jsx("td", {
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 11
    }
  }, matrix.mtm.unlimited), __jsx("td", {
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 11
    }
  }, __jsx("button", {
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 13
    }
  }, "OK"), __jsx("button", {
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 13
    }
  }, "Cancel")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "3682736813",
    __self: _this
  }, ".container.jsx-3682736813{margin:0;width:100%;}#customers.jsx-3682736813{font-family:\"Trebuchet MS\",Arial,Helvetica,sans-serif;border-collapse:collapse;width:100%;}#customers.jsx-3682736813 td.jsx-3682736813,#customers.jsx-3682736813 th.jsx-3682736813{border:1px solid #ddd;padding:8px;}#customers.jsx-3682736813 tr.jsx-3682736813:nth-child(even){background-color:#f2f2f2;}#customers.jsx-3682736813 tr.jsx-3682736813:hover{background-color:#ddd;}#customers.jsx-3682736813 th.jsx-3682736813{padding-top:12px;padding-bottom:12px;text-align:left;background-color:#4CAF50;color:white;}.performance.jsx-3682736813{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxpbnRlcnZpZXdcXGludGVydmlldy1mdWxsc3RhY2stbWFzdGVyXFxjb21wb25lbnRzXFxNYXRyaXhUYWJsZVxcaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThLa0IsQUFHbUIsQUFJaUQsQUFNbkMsQUFJOEIsQUFFWixBQUd2QixBQU9MLFNBeEJmLFFBa0J1QixHQWxCdEIsRUFTYyxBQUs2QixHQUZZLFNBRnZELEdBU2tCLGdCQUNTLENBakJBLG9CQXNCM0IsSUFKYyxDQWpCRCxXQUNiLEFBaUJBIiwiZmlsZSI6IkQ6XFxpbnRlcnZpZXdcXGludGVydmlldy1mdWxsc3RhY2stbWFzdGVyXFxjb21wb25lbnRzXFxNYXRyaXhUYWJsZVxcaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE1hdHJpeFRhYmxlQ29udGV4dCwgTWF0cml4VGFibGVDb250ZXh0UHJvdmlkZXIgfSBmcm9tICcuL2NvbnRleHQnXG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gJy4uLy4uL3BhZ2VzL3N0b3JlJztcblxuICB0eXBlIFByb3BzID0ge1xuICAgIGluaXRpYWxNYXRyaXg/OiBpbXBvcnQoJy4uLy4uL3R5cGVzJykuTWF0cml4XG4gIH0gJiBpbXBvcnQoJ3JlYWN0JykuSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+XG5cbiAgLyoqXG4gICAqIEFkZCA0IGJ1dHRvbnM6IFxuICAgKiAtIENhbmNlbCB0byByZXNldCB0aGUgbWF0cml4IHRvIGhvdyBpdCB3YXMgYmVmb3JlIGNoYW5naW5nIHRoZSB2YWx1ZXMgKG9ubHkgd2hlbiBpbiBlZGl0IG1vZGUpXG4gICAqIC0gRWRpdCB0byBtYWtlIHRoZSBmaWVsZHMgZWRpdGFibGUgKG9ubHkgd2hlbiBub3QgaW4gZWRpdCBtb2RlKVxuICAgKiAtIENsZWFyIHRvIGNvbXBsZXRlbHkgY2xlYXIgdGhlIHRhYmxlXG4gICAqIC0gU2F2ZSB0byBzYXZlIHRoZSB0YWJsZVxuICAgKiBAcGFyYW0gcGFyYW0wIFxuICAgKi9cbiAgY29uc3QgTWF0cml4VGFibGU6IGltcG9ydCgncmVhY3QnKS5GQzxPbWl0PFByb3BzLCAnaW5pdGlhbE1hdHJpeCc+PiA9ICh7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IHtcbiAgLy8gU3RhdGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuICBjb25zdCBbeyBtYXRyaXggfSwgZGlzcGF0Y2hdID0gdXNlQ29udGV4dChNYXRyaXhUYWJsZUNvbnRleHQpXG4gIGNvbnN0IFsgbWF0cml4RGF0YSwgc2V0TWF0cml4RGF0YV0gID0gdXNlU3RhdGUobWF0cml4KTtcbiAgY29uc3QgWyBmbGFnLCBzZXRGbGFnIF0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgXG4gIC8vIEhhbmRsZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcHJpY2luZycsIHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgYWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICB9KVxuICAgIC50aGVuKHJlcyA9PiBcbiAgICAgIHJlcy5qc29uKClcbiAgICApXG4gICAgLnRoZW4oZGF0YT0+IHtcbiAgICAgIHNldE1hdHJpeERhdGEoZGF0YSk7XG4gICAgICBkaXNwYXRjaCh7dHlwZTogJ0dFVF9BTExfREFUQScsIHBheWxvYWQ6IGRhdGEgfSk7XG5cbiAgICB9KVxuICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coJy0tLWVycm9yJywgZXJyKSk7XG4gIH0sW10pXG5cbiAgLy8gWW91IGNhbiBzYXZlICh0byBhcGkpIHRoZSBtYXRyaXggaGVyZS4gUmVtZW1iZXIgdG8gdXBkYXRlIG9yaWdpbmFsTWF0cml4IHdoZW4gZG9uZS5cbiAgY29uc3Qgc2F2ZSA9IGFzeW5jICgpID0+IHtcbiAgICBkaXNwYXRjaCh7dHlwZTogJ1NBVkVfSlNPTid9KTtcbiAgfVxuICAvLyBFZmZlY3RzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4gIC8vIFJlbmRlcmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbiAgXG4gICAgXG4gIC8vIGNvbnN0IHVwZGF0ZW1hdHJpeHRhYmxlID0gXG4gIC8vICAgPHRhYmxlIGlkPVwiY3VzdG9tZXJzXCI+XG4gIC8vICAgICAgIDx0cj5cbiAgLy8gICAgICAgICA8dGg+bW9udGhzPC90aD5cbiAgLy8gICAgICAgICA8dGg+bGl0ZTwvdGg+XG4gIC8vICAgICAgICAgPHRoPnN0YW5kYXJkPC90aD5cbiAgLy8gICAgICAgICA8dGg+dW5saW1pdGVkPC90aD5cbiAgLy8gICAgICAgICA8dGg+cGVyZm9ybWFuY2U8L3RoPlxuICAvLyAgICAgICA8L3RyPlxuICAvLyAgICAgICA8dHI+XG4gIC8vICAgICAgICAgPHRkPjEybW9udGhzPC90ZD5cbiAgLy8gICAgICAgICA8dGQ+e21hdHJpeERhdGFbXCIxMm1vbnRoc1wiXS5saXRlfTwvdGQ+XG4gIC8vICAgICAgICAgPHRkPnttYXRyaXhEYXRhW1wiMTJtb250aHNcIl0uc3RhbmRhcmR9PC90ZD5cbiAgLy8gICAgICAgICA8dGQ+e21hdHJpeERhdGFbXCIxMm1vbnRoc1wiXS51bmxpbWl0ZWR9PC90ZD5cbiAgLy8gICAgICAgPC90cj5cbiAgLy8gICAgICAgPHRyPlxuICAvLyAgICAgICAgIDx0ZD4yNG1vbnRoczwvdGQ+XG4gIC8vICAgICAgICAgPHRkPnttYXRyaXhEYXRhW1wiMjRtb250aHNcIl0ubGl0ZX08L3RkPlxuICAvLyAgICAgICAgIDx0ZD57bWF0cml4RGF0YVtcIjI0bW9udGhzXCJdLnN0YW5kYXJkfTwvdGQ+XG4gIC8vICAgICAgICAgPHRkPnttYXRyaXhEYXRhW1wiMjRtb250aHNcIl0udW5saW1pdGVkfTwvdGQ+XG4gIC8vICAgICAgIDwvdHI+XG4gIC8vICAgICAgIDx0cj5cbiAgLy8gICAgICAgICA8dGQ+MzZtb250aHM8L3RkPlxuICAvLyAgICAgICAgIDx0ZD57bWF0cml4RGF0YVtcIjM2bW9udGhzXCJdLmxpdGV9PC90ZD5cbiAgLy8gICAgICAgICA8dGQ+e21hdHJpeERhdGFbXCIzNm1vbnRoc1wiXS5zdGFuZGFyZH08L3RkPlxuICAvLyAgICAgICAgIDx0ZD57bWF0cml4RGF0YVtcIjM2bW9udGhzXCJdLnVubGltaXRlZH08L3RkPlxuICAvLyAgICAgICA8L3RyPlxuICAvLyAgICAgICA8dHI+XG4gIC8vICAgICAgICAgPHRkPm10bTwvdGQ+XG4gIC8vICAgICAgICAgPHRkPnttYXRyaXhEYXRhLm10bS5saXRlfTwvdGQ+XG4gIC8vICAgICAgICAgPHRkPnttYXRyaXhEYXRhLm10bS5zdGFuZGFyZH08L3RkPlxuICAvLyAgICAgICAgIDx0ZD57bWF0cml4RGF0YS5tdG0udW5saW1pdGVkfTwvdGQ+XG4gIC8vICAgICAgIDwvdHI+XG4gIC8vICAgICA8L3RhYmxlPlxuICBjb25zdCBlZGl0ID0gKCk9PntcbiAgICBjb25zb2xlLmxvZyhcImVkaXRidXR0b25cIik7XG4gICAgc2V0RmxhZyhmYWxzZSk7XG4gIH1cblxuICBjb25zdCBjYW5jZWwgPSAoKT0+e1xuICAgIGNvbnNvbGUubG9nKFwiY2FuY2VsYnV0dG9uXCIpO1xuICAgIHNldEZsYWcodHJ1ZSk7XG4gIH1cblxuICBjb25zb2xlLmxvZyhtYXRyaXgpXG4gIGNvbnN0IGVkaXRidXR0b24gPSBcbiAgICA8dHI+XG4gICAgICA8dGQ+MTIgbW9udGhzPC90ZD5cbiAgICAgIDx0ZD57bWF0cml4W1wiMTJtb250aHNcIl0ubGl0ZX08L3RkPlxuICAgICAgPHRkPnttYXRyaXhbXCIxMm1vbnRoc1wiXS5zdGFuZGFyZH08L3RkPlxuICAgICAgPHRkPnttYXRyaXhbXCIxMm1vbnRoc1wiXS51bmxpbWl0ZWR9PC90ZD5cbiAgICAgIDx0ZCA+PGJ1dHRvbiBvbkNsaWNrPXtlZGl0fT4gRWRpdDwvYnV0dG9uPjwvdGQ+XG4gICAgXG4gICAgPC90cj5cblxuICBjb25zdCBlZGl0ZGV0YWlsYnV0dG9uPVxuICAgIDx0cj5cbiAgICAgIDx0ZD48aW5wdXQgdHlwZT0ndGV4dCcgZGVmYXVsdFZhbHVlPScxMicvPiBtb250aHM8L3RkPlxuICAgICAgPHRkPjxpbnB1dCB0eXBlPSdudW1iZXInICAvPjwvdGQ+XG4gICAgICA8dGQ+PGlucHV0IHZhbHVlPXttYXRyaXhbXCIxMm1vbnRoc1wiXS5zdGFuZGFyZH0+PC9pbnB1dD48L3RkPlxuICAgICAgPHRkPjxpbnB1dCB2YWx1ZT17bWF0cml4W1wiMTJtb250aHNcIl0udW5saW1pdGVkfT48L2lucHV0PjwvdGQ+XG4gICAgICA8dGQgY2xhc3NOYW1lPVwicGVyZm9ybWFuY2VcIiA+XG4gICAgICAgIDxidXR0b24gPk9LPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17Y2FuY2VsfT5DYW5jZWw8L2J1dHRvbj5cbiAgICAgIDwvdGQ+XG4gICAgPC90cj5cbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoWydjb250YWluZXInLCBjbGFzc05hbWVdKX0gey4uLnByb3BzfT5cbiAgICAgIDxidXR0b24gb25DbGljaz17c2F2ZX0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCI+U2F2ZTwvYnV0dG9uPlxuICAgICAgey8qIDxiciAvPlxuICAgICAgPGJyIC8+XG5cbiAgICAgIDM2bW9udGhzIGxpdGU6XG4gICAgICA8aW5wdXQgXG4gICAgICAgIHZhbHVlPXttYXRyaXhbXCIzNm1vbnRoc1wiXS5saXRlIHx8ICcnfSBcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogJ1NPTUVfQUNUSU9OJyxcbiAgICAgICAgICBwYXlsb2FkOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICB9KX0gLz4gKi99XG4gICAgICA8dGFibGUgaWQ9XCJjdXN0b21lcnNcIj5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0aD5tb250aHM8L3RoPlxuICAgICAgICAgIDx0aD5saXRlPC90aD5cbiAgICAgICAgICA8dGg+c3RhbmRhcmQ8L3RoPlxuICAgICAgICAgIDx0aD51bmxpbWl0ZWQ8L3RoPlxuICAgICAgICAgIDx0aD5wZXJmb3JtYW5jZTwvdGg+XG4gICAgICAgIDwvdHI+XG4gICAgICBcbiAgICAgICAge2ZsYWc/IGVkaXRidXR0b246IGVkaXRkZXRhaWxidXR0b259XG5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0ZD4yNG1vbnRoczwvdGQ+XG4gICAgICAgICAgPHRkPnttYXRyaXhbXCIyNG1vbnRoc1wiXS5saXRlfTwvdGQ+XG4gICAgICAgICAgPHRkPnttYXRyaXhbXCIyNG1vbnRoc1wiXS5zdGFuZGFyZH08L3RkPlxuICAgICAgICAgIDx0ZD57bWF0cml4W1wiMjRtb250aHNcIl0udW5saW1pdGVkfTwvdGQ+XG4gICAgICAgICAgPHRkPlxuICAgICAgICAgICAgPGJ1dHRvbj5PSzwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICA8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRkPjM2bW9udGhzPC90ZD5cbiAgICAgICAgICA8dGQ+e21hdHJpeFtcIjM2bW9udGhzXCJdLmxpdGV9PC90ZD5cbiAgICAgICAgICA8dGQ+e21hdHJpeFtcIjM2bW9udGhzXCJdLnN0YW5kYXJkfTwvdGQ+XG4gICAgICAgICAgPHRkPnttYXRyaXhbXCIzNm1vbnRoc1wiXS51bmxpbWl0ZWR9PC90ZD5cbiAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICA8YnV0dG9uPk9LPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGQ+bXRtPC90ZD5cbiAgICAgICAgICA8dGQ+e21hdHJpeC5tdG0ubGl0ZX08L3RkPlxuICAgICAgICAgIDx0ZD57bWF0cml4Lm10bS5zdGFuZGFyZH08L3RkPlxuICAgICAgICAgIDx0ZD57bWF0cml4Lm10bS51bmxpbWl0ZWR9PC90ZD5cbiAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICA8YnV0dG9uPk9LPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICA8L3RhYmxlPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIG1hcmdpbjowO1xuICAgICAgICAgIHdpZHRoOjEwMCVcbiAgICAgICAgfVxuICAgICAgICAjY3VzdG9tZXJzIHtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAjY3VzdG9tZXJzIHRkLCAjY3VzdG9tZXJzIHRoIHtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgI2N1c3RvbWVycyB0cjpudGgtY2hpbGQoZXZlbil7YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjt9XG4gICAgICAgIFxuICAgICAgICAjY3VzdG9tZXJzIHRyOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO31cbiAgICAgICAgXG4gICAgICAgICNjdXN0b21lcnMgdGgge1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAxMnB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgICAgLnBlcmZvcm1hbmNlIHtcbiAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBNYXRyaXhUYWJsZVdpdGhDb250ZXh0OiBpbXBvcnQoJ3JlYWN0JykuRkM8UHJvcHM+ID0gKHsgaW5pdGlhbE1hdHJpeCwgLi4ucHJvcHMgfSkgPT4ge1xuICAvLyBZb3UgY2FuIGZldGNoIHRoZSBwcmljaW5nIGhlcmUgb3IgaW4gcGFnZXMvaW5kZXgudHNcbiAgLy8gUmVtZW1iZXIgdGhhdCB5b3Ugc2hvdWxkIHRyeSB0byByZWZsZWN0IHRoZSBzdGF0ZSBvZiBwcmljaW5nIGluIG9yaWdpbmFsTWF0cml4LlxuICAvLyBtYXRyaXggd2lsbCBob2xkIHRoZSBsYXRlc3QgdmFsdWUgKGVkaXRlZCBvciBzYW1lIGFzIG9yaWdpbmFsTWF0cml4KVxuXG4gIHJldHVybiAoXG4gICAgPE1hdHJpeFRhYmxlQ29udGV4dFByb3ZpZGVyIGluaXRpYWxNYXRyaXg9e2luaXRpYWxNYXRyaXh9PlxuICAgICAgPE1hdHJpeFRhYmxlIHsuLi5wcm9wc30gLz5cbiAgICA8L01hdHJpeFRhYmxlQ29udGV4dFByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hdHJpeFRhYmxlV2l0aENvbnRleHRcbiJdfQ== */\n/*@ sourceURL=D:\\\\interview\\\\interview-fullstack-master\\\\components\\\\MatrixTable\\\\index.tsx */"));
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
      lineNumber: 216,
      columnNumber: 5
    }
  }, __jsx(MatrixTable, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01hdHJpeFRhYmxlL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJNYXRyaXhUYWJsZSIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwicHJvcHMiLCJ1c2VDb250ZXh0IiwiTWF0cml4VGFibGVDb250ZXh0IiwibWF0cml4IiwiZGlzcGF0Y2giLCJ1c2VTdGF0ZSIsIm1hdHJpeERhdGEiLCJzZXRNYXRyaXhEYXRhIiwiZmxhZyIsInNldEZsYWciLCJ1c2VFZmZlY3QiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJhY2NlcHQiLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJ0eXBlIiwicGF5bG9hZCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJzYXZlIiwiZWRpdCIsImNhbmNlbCIsImVkaXRidXR0b24iLCJsaXRlIiwic3RhbmRhcmQiLCJ1bmxpbWl0ZWQiLCJlZGl0ZGV0YWlsYnV0dG9uIiwiY2xhc3NuYW1lcyIsIm10bSIsIk1hdHJpeFRhYmxlV2l0aENvbnRleHQiLCJpbml0aWFsTWF0cml4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQU9FOzs7Ozs7OztBQVFBLElBQU1BLFdBQTZELEdBQUcsU0FBaEVBLFdBQWdFLE9BQXVDO0FBQUE7O0FBQUEsTUFBcENDLFNBQW9DLFFBQXBDQSxTQUFvQztBQUFBLE1BQXpCQyxRQUF5QixRQUF6QkEsUUFBeUI7QUFBQSxNQUFaQyxLQUFZOztBQUM3RztBQUQ2RyxvQkFFOUVDLHdEQUFVLENBQUNDLDJEQUFELENBRm9FO0FBQUEsTUFFcEdDLE1BRm9HLGtCQUVwR0EsTUFGb0c7QUFBQSxNQUUxRkMsUUFGMEY7O0FBQUEsa0JBR3ZFQyxzREFBUSxDQUFDRixNQUFELENBSCtEO0FBQUEsTUFHckdHLFVBSHFHO0FBQUEsTUFHekZDLGFBSHlGOztBQUFBLG1CQUluRkYsc0RBQVEsQ0FBQyxJQUFELENBSjJF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RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixDQUxGLENBL0JGLENBWkY7QUFBQTtBQUFBO0FBQUEsMDBVQURGO0FBeUZELENBOUxDOztHQUFNakMsVzs7S0FBQUEsVzs7QUFnTVIsSUFBTXFDLHNCQUFpRCxHQUFHLFNBQXBEQSxzQkFBb0QsUUFBaUM7QUFBQSxNQUE5QkMsYUFBOEIsU0FBOUJBLGFBQThCO0FBQUEsTUFBWm5DLEtBQVk7O0FBQ3pGO0FBQ0E7QUFDQTtBQUVBLFNBQ0UsTUFBQyxtRUFBRDtBQUE0QixpQkFBYSxFQUFFbUMsYUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsV0FBRCx5RkFBaUJuQyxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREYsQ0FERjtBQUtELENBVkQ7O01BQU1rQyxzQjtBQVlTQSxxRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuNGI4NDhlZGY4NzFhMTlkNjg1MjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBNYXRyaXhUYWJsZUNvbnRleHQsIE1hdHJpeFRhYmxlQ29udGV4dFByb3ZpZGVyIH0gZnJvbSAnLi9jb250ZXh0J1xuaW1wb3J0IHsgc3RvcmUgfSBmcm9tICcuLi8uLi9wYWdlcy9zdG9yZSc7XG5cbiAgdHlwZSBQcm9wcyA9IHtcbiAgICBpbml0aWFsTWF0cml4PzogaW1wb3J0KCcuLi8uLi90eXBlcycpLk1hdHJpeFxuICB9ICYgaW1wb3J0KCdyZWFjdCcpLkhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PlxuXG4gIC8qKlxuICAgKiBBZGQgNCBidXR0b25zOiBcbiAgICogLSBDYW5jZWwgdG8gcmVzZXQgdGhlIG1hdHJpeCB0byBob3cgaXQgd2FzIGJlZm9yZSBjaGFuZ2luZyB0aGUgdmFsdWVzIChvbmx5IHdoZW4gaW4gZWRpdCBtb2RlKVxuICAgKiAtIEVkaXQgdG8gbWFrZSB0aGUgZmllbGRzIGVkaXRhYmxlIChvbmx5IHdoZW4gbm90IGluIGVkaXQgbW9kZSlcbiAgICogLSBDbGVhciB0byBjb21wbGV0ZWx5IGNsZWFyIHRoZSB0YWJsZVxuICAgKiAtIFNhdmUgdG8gc2F2ZSB0aGUgdGFibGVcbiAgICogQHBhcmFtIHBhcmFtMCBcbiAgICovXG4gIGNvbnN0IE1hdHJpeFRhYmxlOiBpbXBvcnQoJ3JlYWN0JykuRkM8T21pdDxQcm9wcywgJ2luaXRpYWxNYXRyaXgnPj4gPSAoeyBjbGFzc05hbWUsIGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiB7XG4gIC8vIFN0YXRlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbiAgY29uc3QgW3sgbWF0cml4IH0sIGRpc3BhdGNoXSA9IHVzZUNvbnRleHQoTWF0cml4VGFibGVDb250ZXh0KVxuICBjb25zdCBbIG1hdHJpeERhdGEsIHNldE1hdHJpeERhdGFdICA9IHVzZVN0YXRlKG1hdHJpeCk7XG4gIGNvbnN0IFsgZmxhZywgc2V0RmxhZyBdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIFxuICAvLyBIYW5kbGVycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3ByaWNpbmcnLCB7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIGFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0sXG4gICAgfSlcbiAgICAudGhlbihyZXMgPT4gXG4gICAgICByZXMuanNvbigpXG4gICAgKVxuICAgIC50aGVuKGRhdGE9PiB7XG4gICAgICBzZXRNYXRyaXhEYXRhKGRhdGEpO1xuICAgICAgZGlzcGF0Y2goe3R5cGU6ICdHRVRfQUxMX0RBVEEnLCBwYXlsb2FkOiBkYXRhIH0pO1xuXG4gICAgfSlcbiAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKCctLS1lcnJvcicsIGVycikpO1xuICB9LFtdKVxuXG4gIC8vIFlvdSBjYW4gc2F2ZSAodG8gYXBpKSB0aGUgbWF0cml4IGhlcmUuIFJlbWVtYmVyIHRvIHVwZGF0ZSBvcmlnaW5hbE1hdHJpeCB3aGVuIGRvbmUuXG4gIGNvbnN0IHNhdmUgPSBhc3luYyAoKSA9PiB7XG4gICAgZGlzcGF0Y2goe3R5cGU6ICdTQVZFX0pTT04nfSk7XG4gIH1cbiAgLy8gRWZmZWN0cyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuICAvLyBSZW5kZXJpbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4gIFxuICAgIFxuICAvLyBjb25zdCB1cGRhdGVtYXRyaXh0YWJsZSA9IFxuICAvLyAgIDx0YWJsZSBpZD1cImN1c3RvbWVyc1wiPlxuICAvLyAgICAgICA8dHI+XG4gIC8vICAgICAgICAgPHRoPm1vbnRoczwvdGg+XG4gIC8vICAgICAgICAgPHRoPmxpdGU8L3RoPlxuICAvLyAgICAgICAgIDx0aD5zdGFuZGFyZDwvdGg+XG4gIC8vICAgICAgICAgPHRoPnVubGltaXRlZDwvdGg+XG4gIC8vICAgICAgICAgPHRoPnBlcmZvcm1hbmNlPC90aD5cbiAgLy8gICAgICAgPC90cj5cbiAgLy8gICAgICAgPHRyPlxuICAvLyAgICAgICAgIDx0ZD4xMm1vbnRoczwvdGQ+XG4gIC8vICAgICAgICAgPHRkPnttYXRyaXhEYXRhW1wiMTJtb250aHNcIl0ubGl0ZX08L3RkPlxuICAvLyAgICAgICAgIDx0ZD57bWF0cml4RGF0YVtcIjEybW9udGhzXCJdLnN0YW5kYXJkfTwvdGQ+XG4gIC8vICAgICAgICAgPHRkPnttYXRyaXhEYXRhW1wiMTJtb250aHNcIl0udW5saW1pdGVkfTwvdGQ+XG4gIC8vICAgICAgIDwvdHI+XG4gIC8vICAgICAgIDx0cj5cbiAgLy8gICAgICAgICA8dGQ+MjRtb250aHM8L3RkPlxuICAvLyAgICAgICAgIDx0ZD57bWF0cml4RGF0YVtcIjI0bW9udGhzXCJdLmxpdGV9PC90ZD5cbiAgLy8gICAgICAgICA8dGQ+e21hdHJpeERhdGFbXCIyNG1vbnRoc1wiXS5zdGFuZGFyZH08L3RkPlxuICAvLyAgICAgICAgIDx0ZD57bWF0cml4RGF0YVtcIjI0bW9udGhzXCJdLnVubGltaXRlZH08L3RkPlxuICAvLyAgICAgICA8L3RyPlxuICAvLyAgICAgICA8dHI+XG4gIC8vICAgICAgICAgPHRkPjM2bW9udGhzPC90ZD5cbiAgLy8gICAgICAgICA8dGQ+e21hdHJpeERhdGFbXCIzNm1vbnRoc1wiXS5saXRlfTwvdGQ+XG4gIC8vICAgICAgICAgPHRkPnttYXRyaXhEYXRhW1wiMzZtb250aHNcIl0uc3RhbmRhcmR9PC90ZD5cbiAgLy8gICAgICAgICA8dGQ+e21hdHJpeERhdGFbXCIzNm1vbnRoc1wiXS51bmxpbWl0ZWR9PC90ZD5cbiAgLy8gICAgICAgPC90cj5cbiAgLy8gICAgICAgPHRyPlxuICAvLyAgICAgICAgIDx0ZD5tdG08L3RkPlxuICAvLyAgICAgICAgIDx0ZD57bWF0cml4RGF0YS5tdG0ubGl0ZX08L3RkPlxuICAvLyAgICAgICAgIDx0ZD57bWF0cml4RGF0YS5tdG0uc3RhbmRhcmR9PC90ZD5cbiAgLy8gICAgICAgICA8dGQ+e21hdHJpeERhdGEubXRtLnVubGltaXRlZH08L3RkPlxuICAvLyAgICAgICA8L3RyPlxuICAvLyAgICAgPC90YWJsZT5cbiAgY29uc3QgZWRpdCA9ICgpPT57XG4gICAgY29uc29sZS5sb2coXCJlZGl0YnV0dG9uXCIpO1xuICAgIHNldEZsYWcoZmFsc2UpO1xuICB9XG5cbiAgY29uc3QgY2FuY2VsID0gKCk9PntcbiAgICBjb25zb2xlLmxvZyhcImNhbmNlbGJ1dHRvblwiKTtcbiAgICBzZXRGbGFnKHRydWUpO1xuICB9XG5cbiAgY29uc29sZS5sb2cobWF0cml4KVxuICBjb25zdCBlZGl0YnV0dG9uID0gXG4gICAgPHRyPlxuICAgICAgPHRkPjEyIG1vbnRoczwvdGQ+XG4gICAgICA8dGQ+e21hdHJpeFtcIjEybW9udGhzXCJdLmxpdGV9PC90ZD5cbiAgICAgIDx0ZD57bWF0cml4W1wiMTJtb250aHNcIl0uc3RhbmRhcmR9PC90ZD5cbiAgICAgIDx0ZD57bWF0cml4W1wiMTJtb250aHNcIl0udW5saW1pdGVkfTwvdGQ+XG4gICAgICA8dGQgPjxidXR0b24gb25DbGljaz17ZWRpdH0+IEVkaXQ8L2J1dHRvbj48L3RkPlxuICAgIFxuICAgIDwvdHI+XG5cbiAgY29uc3QgZWRpdGRldGFpbGJ1dHRvbj1cbiAgICA8dHI+XG4gICAgICA8dGQ+PGlucHV0IHR5cGU9J3RleHQnIGRlZmF1bHRWYWx1ZT0nMTInLz4gbW9udGhzPC90ZD5cbiAgICAgIDx0ZD48aW5wdXQgdHlwZT0nbnVtYmVyJyAgLz48L3RkPlxuICAgICAgPHRkPjxpbnB1dCB2YWx1ZT17bWF0cml4W1wiMTJtb250aHNcIl0uc3RhbmRhcmR9PjwvaW5wdXQ+PC90ZD5cbiAgICAgIDx0ZD48aW5wdXQgdmFsdWU9e21hdHJpeFtcIjEybW9udGhzXCJdLnVubGltaXRlZH0+PC9pbnB1dD48L3RkPlxuICAgICAgPHRkIGNsYXNzTmFtZT1cInBlcmZvcm1hbmNlXCIgPlxuICAgICAgICA8YnV0dG9uID5PSzwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2NhbmNlbH0+Q2FuY2VsPC9idXR0b24+XG4gICAgICA8L3RkPlxuICAgIDwvdHI+XG4gIFxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFsnY29udGFpbmVyJywgY2xhc3NOYW1lXSl9IHsuLi5wcm9wc30+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NhdmV9IGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiPlNhdmU8L2J1dHRvbj5cbiAgICAgIHsvKiA8YnIgLz5cbiAgICAgIDxiciAvPlxuXG4gICAgICAzNm1vbnRocyBsaXRlOlxuICAgICAgPGlucHV0IFxuICAgICAgICB2YWx1ZT17bWF0cml4W1wiMzZtb250aHNcIl0ubGl0ZSB8fCAnJ30gXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6ICdTT01FX0FDVElPTicsXG4gICAgICAgICAgcGF5bG9hZDogZS50YXJnZXQudmFsdWVcbiAgICAgICAgfSl9IC8+ICovfVxuICAgICAgPHRhYmxlIGlkPVwiY3VzdG9tZXJzXCI+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGg+bW9udGhzPC90aD5cbiAgICAgICAgICA8dGg+bGl0ZTwvdGg+XG4gICAgICAgICAgPHRoPnN0YW5kYXJkPC90aD5cbiAgICAgICAgICA8dGg+dW5saW1pdGVkPC90aD5cbiAgICAgICAgICA8dGg+cGVyZm9ybWFuY2U8L3RoPlxuICAgICAgICA8L3RyPlxuICAgICAgXG4gICAgICAgIHtmbGFnPyBlZGl0YnV0dG9uOiBlZGl0ZGV0YWlsYnV0dG9ufVxuXG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGQ+MjRtb250aHM8L3RkPlxuICAgICAgICAgIDx0ZD57bWF0cml4W1wiMjRtb250aHNcIl0ubGl0ZX08L3RkPlxuICAgICAgICAgIDx0ZD57bWF0cml4W1wiMjRtb250aHNcIl0uc3RhbmRhcmR9PC90ZD5cbiAgICAgICAgICA8dGQ+e21hdHJpeFtcIjI0bW9udGhzXCJdLnVubGltaXRlZH08L3RkPlxuICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgIDxidXR0b24+T0s8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0ZD4zNm1vbnRoczwvdGQ+XG4gICAgICAgICAgPHRkPnttYXRyaXhbXCIzNm1vbnRoc1wiXS5saXRlfTwvdGQ+XG4gICAgICAgICAgPHRkPnttYXRyaXhbXCIzNm1vbnRoc1wiXS5zdGFuZGFyZH08L3RkPlxuICAgICAgICAgIDx0ZD57bWF0cml4W1wiMzZtb250aHNcIl0udW5saW1pdGVkfTwvdGQ+XG4gICAgICAgICAgPHRkPlxuICAgICAgICAgICAgPGJ1dHRvbj5PSzwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICA8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRkPm10bTwvdGQ+XG4gICAgICAgICAgPHRkPnttYXRyaXgubXRtLmxpdGV9PC90ZD5cbiAgICAgICAgICA8dGQ+e21hdHJpeC5tdG0uc3RhbmRhcmR9PC90ZD5cbiAgICAgICAgICA8dGQ+e21hdHJpeC5tdG0udW5saW1pdGVkfTwvdGQ+XG4gICAgICAgICAgPHRkPlxuICAgICAgICAgICAgPGJ1dHRvbj5PSzwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICA8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgPC90YWJsZT5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgICB3aWR0aDoxMDAlXG4gICAgICAgIH1cbiAgICAgICAgI2N1c3RvbWVycyB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiVHJlYnVjaGV0IE1TXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgI2N1c3RvbWVycyB0ZCwgI2N1c3RvbWVycyB0aCB7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICNjdXN0b21lcnMgdHI6bnRoLWNoaWxkKGV2ZW4pe2JhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7fVxuICAgICAgICBcbiAgICAgICAgI2N1c3RvbWVycyB0cjpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogI2RkZDt9XG4gICAgICAgIFxuICAgICAgICAjY3VzdG9tZXJzIHRoIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTJweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICAgIC5wZXJmb3JtYW5jZSB7XG4gICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgTWF0cml4VGFibGVXaXRoQ29udGV4dDogaW1wb3J0KCdyZWFjdCcpLkZDPFByb3BzPiA9ICh7IGluaXRpYWxNYXRyaXgsIC4uLnByb3BzIH0pID0+IHtcbiAgLy8gWW91IGNhbiBmZXRjaCB0aGUgcHJpY2luZyBoZXJlIG9yIGluIHBhZ2VzL2luZGV4LnRzXG4gIC8vIFJlbWVtYmVyIHRoYXQgeW91IHNob3VsZCB0cnkgdG8gcmVmbGVjdCB0aGUgc3RhdGUgb2YgcHJpY2luZyBpbiBvcmlnaW5hbE1hdHJpeC5cbiAgLy8gbWF0cml4IHdpbGwgaG9sZCB0aGUgbGF0ZXN0IHZhbHVlIChlZGl0ZWQgb3Igc2FtZSBhcyBvcmlnaW5hbE1hdHJpeClcblxuICByZXR1cm4gKFxuICAgIDxNYXRyaXhUYWJsZUNvbnRleHRQcm92aWRlciBpbml0aWFsTWF0cml4PXtpbml0aWFsTWF0cml4fT5cbiAgICAgIDxNYXRyaXhUYWJsZSB7Li4ucHJvcHN9IC8+XG4gICAgPC9NYXRyaXhUYWJsZUNvbnRleHRQcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXRyaXhUYWJsZVdpdGhDb250ZXh0XG4iXSwic291cmNlUm9vdCI6IiJ9