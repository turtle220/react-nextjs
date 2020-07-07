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

  matrix.map(function (item) {
    console.log(item);
  });

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
  }, ".container.jsx-3682736813{margin:0;width:100%;}#customers.jsx-3682736813{font-family:\"Trebuchet MS\",Arial,Helvetica,sans-serif;border-collapse:collapse;width:100%;}#customers.jsx-3682736813 td.jsx-3682736813,#customers.jsx-3682736813 th.jsx-3682736813{border:1px solid #ddd;padding:8px;}#customers.jsx-3682736813 tr.jsx-3682736813:nth-child(even){background-color:#f2f2f2;}#customers.jsx-3682736813 tr.jsx-3682736813:hover{background-color:#ddd;}#customers.jsx-3682736813 th.jsx-3682736813{padding-top:12px;padding-bottom:12px;text-align:left;background-color:#4CAF50;color:white;}.performance.jsx-3682736813{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxpbnRlcnZpZXdcXGludGVydmlldy1mdWxsc3RhY2stbWFzdGVyXFxjb21wb25lbnRzXFxNYXRyaXhUYWJsZVxcaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThLa0IsQUFHbUIsQUFJaUQsQUFNbkMsQUFJOEIsQUFFWixBQUd2QixBQU9MLFNBeEJmLFFBa0J1QixHQWxCdEIsRUFTYyxBQUs2QixHQUZZLFNBRnZELEdBU2tCLGdCQUNTLENBakJBLG9CQXNCM0IsSUFKYyxDQWpCRCxXQUNiLEFBaUJBIiwiZmlsZSI6IkQ6XFxpbnRlcnZpZXdcXGludGVydmlldy1mdWxsc3RhY2stbWFzdGVyXFxjb21wb25lbnRzXFxNYXRyaXhUYWJsZVxcaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE1hdHJpeFRhYmxlQ29udGV4dCwgTWF0cml4VGFibGVDb250ZXh0UHJvdmlkZXIgfSBmcm9tICcuL2NvbnRleHQnXG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gJy4uLy4uL3BhZ2VzL3N0b3JlJztcblxuICB0eXBlIFByb3BzID0ge1xuICAgIGluaXRpYWxNYXRyaXg/OiBpbXBvcnQoJy4uLy4uL3R5cGVzJykuTWF0cml4XG4gIH0gJiBpbXBvcnQoJ3JlYWN0JykuSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+XG5cbiAgLyoqXG4gICAqIEFkZCA0IGJ1dHRvbnM6IFxuICAgKiAtIENhbmNlbCB0byByZXNldCB0aGUgbWF0cml4IHRvIGhvdyBpdCB3YXMgYmVmb3JlIGNoYW5naW5nIHRoZSB2YWx1ZXMgKG9ubHkgd2hlbiBpbiBlZGl0IG1vZGUpXG4gICAqIC0gRWRpdCB0byBtYWtlIHRoZSBmaWVsZHMgZWRpdGFibGUgKG9ubHkgd2hlbiBub3QgaW4gZWRpdCBtb2RlKVxuICAgKiAtIENsZWFyIHRvIGNvbXBsZXRlbHkgY2xlYXIgdGhlIHRhYmxlXG4gICAqIC0gU2F2ZSB0byBzYXZlIHRoZSB0YWJsZVxuICAgKiBAcGFyYW0gcGFyYW0wIFxuICAgKi9cbiAgY29uc3QgTWF0cml4VGFibGU6IGltcG9ydCgncmVhY3QnKS5GQzxPbWl0PFByb3BzLCAnaW5pdGlhbE1hdHJpeCc+PiA9ICh7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IHtcbiAgLy8gU3RhdGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuICBjb25zdCBbeyBtYXRyaXggfSwgZGlzcGF0Y2hdID0gdXNlQ29udGV4dChNYXRyaXhUYWJsZUNvbnRleHQpXG4gIGNvbnN0IFsgbWF0cml4RGF0YSwgc2V0TWF0cml4RGF0YV0gID0gdXNlU3RhdGUobWF0cml4KTtcbiAgY29uc3QgWyBmbGFnLCBzZXRGbGFnIF0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgXG4gIC8vIEhhbmRsZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcHJpY2luZycsIHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgYWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICB9KVxuICAgIC50aGVuKHJlcyA9PiBcbiAgICAgIHJlcy5qc29uKClcbiAgICApXG4gICAgLnRoZW4oZGF0YT0+IHtcbiAgICAgIHNldE1hdHJpeERhdGEoZGF0YSk7XG4gICAgICBkaXNwYXRjaCh7dHlwZTogJ0dFVF9BTExfREFUQScsIHBheWxvYWQ6IGRhdGEgfSk7XG5cbiAgICB9KVxuICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coJy0tLWVycm9yJywgZXJyKSk7XG4gIH0sW10pXG5cbiAgLy8gWW91IGNhbiBzYXZlICh0byBhcGkpIHRoZSBtYXRyaXggaGVyZS4gUmVtZW1iZXIgdG8gdXBkYXRlIG9yaWdpbmFsTWF0cml4IHdoZW4gZG9uZS5cbiAgY29uc3Qgc2F2ZSA9IGFzeW5jICgpID0+IHtcbiAgICBkaXNwYXRjaCh7dHlwZTogJ1NBVkVfSlNPTid9KTtcbiAgfVxuICAvLyBFZmZlY3RzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4gIC8vIFJlbmRlcmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbiAgXG4gICAgXG4gIC8vIGNvbnN0IHVwZGF0ZW1hdHJpeHRhYmxlID0gXG4gIC8vICAgPHRhYmxlIGlkPVwiY3VzdG9tZXJzXCI+XG4gIC8vICAgICAgIDx0cj5cbiAgLy8gICAgICAgICA8dGg+bW9udGhzPC90aD5cbiAgLy8gICAgICAgICA8dGg+bGl0ZTwvdGg+XG4gIC8vICAgICAgICAgPHRoPnN0YW5kYXJkPC90aD5cbiAgLy8gICAgICAgICA8dGg+dW5saW1pdGVkPC90aD5cbiAgLy8gICAgICAgICA8dGg+cGVyZm9ybWFuY2U8L3RoPlxuICAvLyAgICAgICA8L3RyPlxuICAvLyAgICAgICA8dHI+XG4gIC8vICAgICAgICAgPHRkPjEybW9udGhzPC90ZD5cbiAgLy8gICAgICAgICA8dGQ+e21hdHJpeERhdGFbXCIxMm1vbnRoc1wiXS5saXRlfTwvdGQ+XG4gIC8vICAgICAgICAgPHRkPnttYXRyaXhEYXRhW1wiMTJtb250aHNcIl0uc3RhbmRhcmR9PC90ZD5cbiAgLy8gICAgICAgICA8dGQ+e21hdHJpeERhdGFbXCIxMm1vbnRoc1wiXS51bmxpbWl0ZWR9PC90ZD5cbiAgLy8gICAgICAgPC90cj5cbiAgLy8gICAgICAgPHRyPlxuICAvLyAgICAgICAgIDx0ZD4yNG1vbnRoczwvdGQ+XG4gIC8vICAgICAgICAgPHRkPnttYXRyaXhEYXRhW1wiMjRtb250aHNcIl0ubGl0ZX08L3RkPlxuICAvLyAgICAgICAgIDx0ZD57bWF0cml4RGF0YVtcIjI0bW9udGhzXCJdLnN0YW5kYXJkfTwvdGQ+XG4gIC8vICAgICAgICAgPHRkPnttYXRyaXhEYXRhW1wiMjRtb250aHNcIl0udW5saW1pdGVkfTwvdGQ+XG4gIC8vICAgICAgIDwvdHI+XG4gIC8vICAgICAgIDx0cj5cbiAgLy8gICAgICAgICA8dGQ+MzZtb250aHM8L3RkPlxuICAvLyAgICAgICAgIDx0ZD57bWF0cml4RGF0YVtcIjM2bW9udGhzXCJdLmxpdGV9PC90ZD5cbiAgLy8gICAgICAgICA8dGQ+e21hdHJpeERhdGFbXCIzNm1vbnRoc1wiXS5zdGFuZGFyZH08L3RkPlxuICAvLyAgICAgICAgIDx0ZD57bWF0cml4RGF0YVtcIjM2bW9udGhzXCJdLnVubGltaXRlZH08L3RkPlxuICAvLyAgICAgICA8L3RyPlxuICAvLyAgICAgICA8dHI+XG4gIC8vICAgICAgICAgPHRkPm10bTwvdGQ+XG4gIC8vICAgICAgICAgPHRkPnttYXRyaXhEYXRhLm10bS5saXRlfTwvdGQ+XG4gIC8vICAgICAgICAgPHRkPnttYXRyaXhEYXRhLm10bS5zdGFuZGFyZH08L3RkPlxuICAvLyAgICAgICAgIDx0ZD57bWF0cml4RGF0YS5tdG0udW5saW1pdGVkfTwvdGQ+XG4gIC8vICAgICAgIDwvdHI+XG4gIC8vICAgICA8L3RhYmxlPlxuICBjb25zdCBlZGl0ID0gKCk9PntcbiAgICBjb25zb2xlLmxvZyhcImVkaXRidXR0b25cIik7XG4gICAgc2V0RmxhZyhmYWxzZSk7XG4gIH1cblxuICBjb25zdCBjYW5jZWwgPSAoKT0+e1xuICAgIGNvbnNvbGUubG9nKFwiY2FuY2VsYnV0dG9uXCIpO1xuICAgIHNldEZsYWcodHJ1ZSk7XG4gIH1cblxuICBtYXRyaXgubWFwKGl0ZW0gPT4ge2NvbnNvbGUubG9nKGl0ZW0pfSk7XG4gIGNvbnN0IGVkaXRidXR0b24gPSBcbiAgICA8dHI+XG4gICAgICA8dGQ+MTIgbW9udGhzPC90ZD5cbiAgICAgIDx0ZD57bWF0cml4W1wiMTJtb250aHNcIl0ubGl0ZX08L3RkPlxuICAgICAgPHRkPnttYXRyaXhbXCIxMm1vbnRoc1wiXS5zdGFuZGFyZH08L3RkPlxuICAgICAgPHRkPnttYXRyaXhbXCIxMm1vbnRoc1wiXS51bmxpbWl0ZWR9PC90ZD5cbiAgICAgIDx0ZCA+PGJ1dHRvbiBvbkNsaWNrPXtlZGl0fT4gRWRpdDwvYnV0dG9uPjwvdGQ+XG4gICAgXG4gICAgPC90cj5cblxuICBjb25zdCBlZGl0ZGV0YWlsYnV0dG9uPVxuICAgIDx0cj5cbiAgICAgIDx0ZD48aW5wdXQgdHlwZT0ndGV4dCcgZGVmYXVsdFZhbHVlPScxMicvPiBtb250aHM8L3RkPlxuICAgICAgPHRkPjxpbnB1dCB0eXBlPSdudW1iZXInICAvPjwvdGQ+XG4gICAgICA8dGQ+PGlucHV0IHZhbHVlPXttYXRyaXhbXCIxMm1vbnRoc1wiXS5zdGFuZGFyZH0+PC9pbnB1dD48L3RkPlxuICAgICAgPHRkPjxpbnB1dCB2YWx1ZT17bWF0cml4W1wiMTJtb250aHNcIl0udW5saW1pdGVkfT48L2lucHV0PjwvdGQ+XG4gICAgICA8dGQgY2xhc3NOYW1lPVwicGVyZm9ybWFuY2VcIiA+XG4gICAgICAgIDxidXR0b24gPk9LPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17Y2FuY2VsfT5DYW5jZWw8L2J1dHRvbj5cbiAgICAgIDwvdGQ+XG4gICAgPC90cj5cbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoWydjb250YWluZXInLCBjbGFzc05hbWVdKX0gey4uLnByb3BzfT5cbiAgICAgIDxidXR0b24gb25DbGljaz17c2F2ZX0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCI+U2F2ZTwvYnV0dG9uPlxuICAgICAgey8qIDxiciAvPlxuICAgICAgPGJyIC8+XG5cbiAgICAgIDM2bW9udGhzIGxpdGU6XG4gICAgICA8aW5wdXQgXG4gICAgICAgIHZhbHVlPXttYXRyaXhbXCIzNm1vbnRoc1wiXS5saXRlIHx8ICcnfSBcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogJ1NPTUVfQUNUSU9OJyxcbiAgICAgICAgICBwYXlsb2FkOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICB9KX0gLz4gKi99XG4gICAgICA8dGFibGUgaWQ9XCJjdXN0b21lcnNcIj5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0aD5tb250aHM8L3RoPlxuICAgICAgICAgIDx0aD5saXRlPC90aD5cbiAgICAgICAgICA8dGg+c3RhbmRhcmQ8L3RoPlxuICAgICAgICAgIDx0aD51bmxpbWl0ZWQ8L3RoPlxuICAgICAgICAgIDx0aD5wZXJmb3JtYW5jZTwvdGg+XG4gICAgICAgIDwvdHI+XG4gICAgICBcbiAgICAgICAge2ZsYWc/IGVkaXRidXR0b246IGVkaXRkZXRhaWxidXR0b259XG5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0ZD4yNG1vbnRoczwvdGQ+XG4gICAgICAgICAgPHRkPnttYXRyaXhbXCIyNG1vbnRoc1wiXS5saXRlfTwvdGQ+XG4gICAgICAgICAgPHRkPnttYXRyaXhbXCIyNG1vbnRoc1wiXS5zdGFuZGFyZH08L3RkPlxuICAgICAgICAgIDx0ZD57bWF0cml4W1wiMjRtb250aHNcIl0udW5saW1pdGVkfTwvdGQ+XG4gICAgICAgICAgPHRkPlxuICAgICAgICAgICAgPGJ1dHRvbj5PSzwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICA8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRkPjM2bW9udGhzPC90ZD5cbiAgICAgICAgICA8dGQ+e21hdHJpeFtcIjM2bW9udGhzXCJdLmxpdGV9PC90ZD5cbiAgICAgICAgICA8dGQ+e21hdHJpeFtcIjM2bW9udGhzXCJdLnN0YW5kYXJkfTwvdGQ+XG4gICAgICAgICAgPHRkPnttYXRyaXhbXCIzNm1vbnRoc1wiXS51bmxpbWl0ZWR9PC90ZD5cbiAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICA8YnV0dG9uPk9LPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGQ+bXRtPC90ZD5cbiAgICAgICAgICA8dGQ+e21hdHJpeC5tdG0ubGl0ZX08L3RkPlxuICAgICAgICAgIDx0ZD57bWF0cml4Lm10bS5zdGFuZGFyZH08L3RkPlxuICAgICAgICAgIDx0ZD57bWF0cml4Lm10bS51bmxpbWl0ZWR9PC90ZD5cbiAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICA8YnV0dG9uPk9LPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICA8L3RhYmxlPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIG1hcmdpbjowO1xuICAgICAgICAgIHdpZHRoOjEwMCVcbiAgICAgICAgfVxuICAgICAgICAjY3VzdG9tZXJzIHtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAjY3VzdG9tZXJzIHRkLCAjY3VzdG9tZXJzIHRoIHtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgI2N1c3RvbWVycyB0cjpudGgtY2hpbGQoZXZlbil7YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjt9XG4gICAgICAgIFxuICAgICAgICAjY3VzdG9tZXJzIHRyOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO31cbiAgICAgICAgXG4gICAgICAgICNjdXN0b21lcnMgdGgge1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAxMnB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgICAgLnBlcmZvcm1hbmNlIHtcbiAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBNYXRyaXhUYWJsZVdpdGhDb250ZXh0OiBpbXBvcnQoJ3JlYWN0JykuRkM8UHJvcHM+ID0gKHsgaW5pdGlhbE1hdHJpeCwgLi4ucHJvcHMgfSkgPT4ge1xuICAvLyBZb3UgY2FuIGZldGNoIHRoZSBwcmljaW5nIGhlcmUgb3IgaW4gcGFnZXMvaW5kZXgudHNcbiAgLy8gUmVtZW1iZXIgdGhhdCB5b3Ugc2hvdWxkIHRyeSB0byByZWZsZWN0IHRoZSBzdGF0ZSBvZiBwcmljaW5nIGluIG9yaWdpbmFsTWF0cml4LlxuICAvLyBtYXRyaXggd2lsbCBob2xkIHRoZSBsYXRlc3QgdmFsdWUgKGVkaXRlZCBvciBzYW1lIGFzIG9yaWdpbmFsTWF0cml4KVxuXG4gIHJldHVybiAoXG4gICAgPE1hdHJpeFRhYmxlQ29udGV4dFByb3ZpZGVyIGluaXRpYWxNYXRyaXg9e2luaXRpYWxNYXRyaXh9PlxuICAgICAgPE1hdHJpeFRhYmxlIHsuLi5wcm9wc30gLz5cbiAgICA8L01hdHJpeFRhYmxlQ29udGV4dFByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hdHJpeFRhYmxlV2l0aENvbnRleHRcbiJdfQ== */\n/*@ sourceURL=D:\\\\interview\\\\interview-fullstack-master\\\\components\\\\MatrixTable\\\\index.tsx */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01hdHJpeFRhYmxlL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJNYXRyaXhUYWJsZSIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwicHJvcHMiLCJ1c2VDb250ZXh0IiwiTWF0cml4VGFibGVDb250ZXh0IiwibWF0cml4IiwiZGlzcGF0Y2giLCJ1c2VTdGF0ZSIsIm1hdHJpeERhdGEiLCJzZXRNYXRyaXhEYXRhIiwiZmxhZyIsInNldEZsYWciLCJ1c2VFZmZlY3QiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJhY2NlcHQiLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJ0eXBlIiwicGF5bG9hZCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJzYXZlIiwiZWRpdCIsImNhbmNlbCIsIm1hcCIsIml0ZW0iLCJlZGl0YnV0dG9uIiwibGl0ZSIsInN0YW5kYXJkIiwidW5saW1pdGVkIiwiZWRpdGRldGFpbGJ1dHRvbiIsImNsYXNzbmFtZXMiLCJtdG0iLCJNYXRyaXhUYWJsZVdpdGhDb250ZXh0IiwiaW5pdGlhbE1hdHJpeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFPRTs7Ozs7Ozs7QUFRQSxJQUFNQSxXQUE2RCxHQUFHLFNBQWhFQSxXQUFnRSxPQUF1QztBQUFBOztBQUFBLE1BQXBDQyxTQUFvQyxRQUFwQ0EsU0FBb0M7QUFBQSxNQUF6QkMsUUFBeUIsUUFBekJBLFFBQXlCO0FBQUEsTUFBWkMsS0FBWTs7QUFDN0c7QUFENkcsb0JBRTlFQyx3REFBVSxDQUFDQywyREFBRCxDQUZvRTtBQUFBLE1BRXBHQyxNQUZvRyxrQkFFcEdBLE1BRm9HO0FBQUEsTUFFMUZDLFFBRjBGOztBQUFBLGtCQUd2RUMsc0RBQVEsQ0FBQ0YsTUFBRCxDQUgrRDtBQUFBLE1BR3JHRyxVQUhxRztBQUFBLE1BR3pGQyxhQUh5Rjs7QUFBQSxtQkFJbkZGLHNEQUFRLENB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QUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsQ0FMRixDQS9CRixDQVpGO0FBQUE7QUFBQTtBQUFBLHMyVUFERjtBQXlGRCxDQTlMQzs7R0FBTW5DLFc7O0tBQUFBLFc7O0FBZ01SLElBQU11QyxzQkFBaUQsR0FBRyxTQUFwREEsc0JBQW9ELFFBQWlDO0FBQUEsTUFBOUJDLGFBQThCLFNBQTlCQSxhQUE4QjtBQUFBLE1BQVpyQyxLQUFZOztBQUN6RjtBQUNBO0FBQ0E7QUFFQSxTQUNFLE1BQUMsbUVBQUQ7QUFBNEIsaUJBQWEsRUFBRXFDLGFBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFdBQUQseUZBQWlCckMsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGLENBREY7QUFLRCxDQVZEOztNQUFNb0Msc0I7QUFZU0EscUZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmVhMGE4NGVhZjFmM2NkYzlmNzQwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCx1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTWF0cml4VGFibGVDb250ZXh0LCBNYXRyaXhUYWJsZUNvbnRleHRQcm92aWRlciB9IGZyb20gJy4vY29udGV4dCdcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSAnLi4vLi4vcGFnZXMvc3RvcmUnO1xuXG4gIHR5cGUgUHJvcHMgPSB7XG4gICAgaW5pdGlhbE1hdHJpeD86IGltcG9ydCgnLi4vLi4vdHlwZXMnKS5NYXRyaXhcbiAgfSAmIGltcG9ydCgncmVhY3QnKS5IVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD5cblxuICAvKipcbiAgICogQWRkIDQgYnV0dG9uczogXG4gICAqIC0gQ2FuY2VsIHRvIHJlc2V0IHRoZSBtYXRyaXggdG8gaG93IGl0IHdhcyBiZWZvcmUgY2hhbmdpbmcgdGhlIHZhbHVlcyAob25seSB3aGVuIGluIGVkaXQgbW9kZSlcbiAgICogLSBFZGl0IHRvIG1ha2UgdGhlIGZpZWxkcyBlZGl0YWJsZSAob25seSB3aGVuIG5vdCBpbiBlZGl0IG1vZGUpXG4gICAqIC0gQ2xlYXIgdG8gY29tcGxldGVseSBjbGVhciB0aGUgdGFibGVcbiAgICogLSBTYXZlIHRvIHNhdmUgdGhlIHRhYmxlXG4gICAqIEBwYXJhbSBwYXJhbTAgXG4gICAqL1xuICBjb25zdCBNYXRyaXhUYWJsZTogaW1wb3J0KCdyZWFjdCcpLkZDPE9taXQ8UHJvcHMsICdpbml0aWFsTWF0cml4Jz4+ID0gKHsgY2xhc3NOYW1lLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4ge1xuICAvLyBTdGF0ZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4gIGNvbnN0IFt7IG1hdHJpeCB9LCBkaXNwYXRjaF0gPSB1c2VDb250ZXh0KE1hdHJpeFRhYmxlQ29udGV4dClcbiAgY29uc3QgWyBtYXRyaXhEYXRhLCBzZXRNYXRyaXhEYXRhXSAgPSB1c2VTdGF0ZShtYXRyaXgpO1xuICBjb25zdCBbIGZsYWcsIHNldEZsYWcgXSA9IHVzZVN0YXRlKHRydWUpO1xuICBcbiAgLy8gSGFuZGxlcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuICB1c2VFZmZlY3QoKCk9PntcbiAgICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9wcmljaW5nJywge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBhY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9LFxuICAgIH0pXG4gICAgLnRoZW4ocmVzID0+IFxuICAgICAgcmVzLmpzb24oKVxuICAgIClcbiAgICAudGhlbihkYXRhPT4ge1xuICAgICAgc2V0TWF0cml4RGF0YShkYXRhKTtcbiAgICAgIGRpc3BhdGNoKHt0eXBlOiAnR0VUX0FMTF9EQVRBJywgcGF5bG9hZDogZGF0YSB9KTtcblxuICAgIH0pXG4gICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZygnLS0tZXJyb3InLCBlcnIpKTtcbiAgfSxbXSlcblxuICAvLyBZb3UgY2FuIHNhdmUgKHRvIGFwaSkgdGhlIG1hdHJpeCBoZXJlLiBSZW1lbWJlciB0byB1cGRhdGUgb3JpZ2luYWxNYXRyaXggd2hlbiBkb25lLlxuICBjb25zdCBzYXZlID0gYXN5bmMgKCkgPT4ge1xuICAgIGRpc3BhdGNoKHt0eXBlOiAnU0FWRV9KU09OJ30pO1xuICB9XG4gIC8vIEVmZmVjdHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbiAgLy8gUmVuZGVyaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuICBcbiAgICBcbiAgLy8gY29uc3QgdXBkYXRlbWF0cml4dGFibGUgPSBcbiAgLy8gICA8dGFibGUgaWQ9XCJjdXN0b21lcnNcIj5cbiAgLy8gICAgICAgPHRyPlxuICAvLyAgICAgICAgIDx0aD5tb250aHM8L3RoPlxuICAvLyAgICAgICAgIDx0aD5saXRlPC90aD5cbiAgLy8gICAgICAgICA8dGg+c3RhbmRhcmQ8L3RoPlxuICAvLyAgICAgICAgIDx0aD51bmxpbWl0ZWQ8L3RoPlxuICAvLyAgICAgICAgIDx0aD5wZXJmb3JtYW5jZTwvdGg+XG4gIC8vICAgICAgIDwvdHI+XG4gIC8vICAgICAgIDx0cj5cbiAgLy8gICAgICAgICA8dGQ+MTJtb250aHM8L3RkPlxuICAvLyAgICAgICAgIDx0ZD57bWF0cml4RGF0YVtcIjEybW9udGhzXCJdLmxpdGV9PC90ZD5cbiAgLy8gICAgICAgICA8dGQ+e21hdHJpeERhdGFbXCIxMm1vbnRoc1wiXS5zdGFuZGFyZH08L3RkPlxuICAvLyAgICAgICAgIDx0ZD57bWF0cml4RGF0YVtcIjEybW9udGhzXCJdLnVubGltaXRlZH08L3RkPlxuICAvLyAgICAgICA8L3RyPlxuICAvLyAgICAgICA8dHI+XG4gIC8vICAgICAgICAgPHRkPjI0bW9udGhzPC90ZD5cbiAgLy8gICAgICAgICA8dGQ+e21hdHJpeERhdGFbXCIyNG1vbnRoc1wiXS5saXRlfTwvdGQ+XG4gIC8vICAgICAgICAgPHRkPnttYXRyaXhEYXRhW1wiMjRtb250aHNcIl0uc3RhbmRhcmR9PC90ZD5cbiAgLy8gICAgICAgICA8dGQ+e21hdHJpeERhdGFbXCIyNG1vbnRoc1wiXS51bmxpbWl0ZWR9PC90ZD5cbiAgLy8gICAgICAgPC90cj5cbiAgLy8gICAgICAgPHRyPlxuICAvLyAgICAgICAgIDx0ZD4zNm1vbnRoczwvdGQ+XG4gIC8vICAgICAgICAgPHRkPnttYXRyaXhEYXRhW1wiMzZtb250aHNcIl0ubGl0ZX08L3RkPlxuICAvLyAgICAgICAgIDx0ZD57bWF0cml4RGF0YVtcIjM2bW9udGhzXCJdLnN0YW5kYXJkfTwvdGQ+XG4gIC8vICAgICAgICAgPHRkPnttYXRyaXhEYXRhW1wiMzZtb250aHNcIl0udW5saW1pdGVkfTwvdGQ+XG4gIC8vICAgICAgIDwvdHI+XG4gIC8vICAgICAgIDx0cj5cbiAgLy8gICAgICAgICA8dGQ+bXRtPC90ZD5cbiAgLy8gICAgICAgICA8dGQ+e21hdHJpeERhdGEubXRtLmxpdGV9PC90ZD5cbiAgLy8gICAgICAgICA8dGQ+e21hdHJpeERhdGEubXRtLnN0YW5kYXJkfTwvdGQ+XG4gIC8vICAgICAgICAgPHRkPnttYXRyaXhEYXRhLm10bS51bmxpbWl0ZWR9PC90ZD5cbiAgLy8gICAgICAgPC90cj5cbiAgLy8gICAgIDwvdGFibGU+XG4gIGNvbnN0IGVkaXQgPSAoKT0+e1xuICAgIGNvbnNvbGUubG9nKFwiZWRpdGJ1dHRvblwiKTtcbiAgICBzZXRGbGFnKGZhbHNlKTtcbiAgfVxuXG4gIGNvbnN0IGNhbmNlbCA9ICgpPT57XG4gICAgY29uc29sZS5sb2coXCJjYW5jZWxidXR0b25cIik7XG4gICAgc2V0RmxhZyh0cnVlKTtcbiAgfVxuXG4gIG1hdHJpeC5tYXAoaXRlbSA9PiB7Y29uc29sZS5sb2coaXRlbSl9KTtcbiAgY29uc3QgZWRpdGJ1dHRvbiA9IFxuICAgIDx0cj5cbiAgICAgIDx0ZD4xMiBtb250aHM8L3RkPlxuICAgICAgPHRkPnttYXRyaXhbXCIxMm1vbnRoc1wiXS5saXRlfTwvdGQ+XG4gICAgICA8dGQ+e21hdHJpeFtcIjEybW9udGhzXCJdLnN0YW5kYXJkfTwvdGQ+XG4gICAgICA8dGQ+e21hdHJpeFtcIjEybW9udGhzXCJdLnVubGltaXRlZH08L3RkPlxuICAgICAgPHRkID48YnV0dG9uIG9uQ2xpY2s9e2VkaXR9PiBFZGl0PC9idXR0b24+PC90ZD5cbiAgICBcbiAgICA8L3RyPlxuXG4gIGNvbnN0IGVkaXRkZXRhaWxidXR0b249XG4gICAgPHRyPlxuICAgICAgPHRkPjxpbnB1dCB0eXBlPSd0ZXh0JyBkZWZhdWx0VmFsdWU9JzEyJy8+IG1vbnRoczwvdGQ+XG4gICAgICA8dGQ+PGlucHV0IHR5cGU9J251bWJlcicgIC8+PC90ZD5cbiAgICAgIDx0ZD48aW5wdXQgdmFsdWU9e21hdHJpeFtcIjEybW9udGhzXCJdLnN0YW5kYXJkfT48L2lucHV0PjwvdGQ+XG4gICAgICA8dGQ+PGlucHV0IHZhbHVlPXttYXRyaXhbXCIxMm1vbnRoc1wiXS51bmxpbWl0ZWR9PjwvaW5wdXQ+PC90ZD5cbiAgICAgIDx0ZCBjbGFzc05hbWU9XCJwZXJmb3JtYW5jZVwiID5cbiAgICAgICAgPGJ1dHRvbiA+T0s8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjYW5jZWx9PkNhbmNlbDwvYnV0dG9uPlxuICAgICAgPC90ZD5cbiAgICA8L3RyPlxuICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhbJ2NvbnRhaW5lcicsIGNsYXNzTmFtZV0pfSB7Li4ucHJvcHN9PlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzYXZlfSBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIj5TYXZlPC9idXR0b24+XG4gICAgICB7LyogPGJyIC8+XG4gICAgICA8YnIgLz5cblxuICAgICAgMzZtb250aHMgbGl0ZTpcbiAgICAgIDxpbnB1dCBcbiAgICAgICAgdmFsdWU9e21hdHJpeFtcIjM2bW9udGhzXCJdLmxpdGUgfHwgJyd9IFxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiAnU09NRV9BQ1RJT04nLFxuICAgICAgICAgIHBheWxvYWQ6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pfSAvPiAqL31cbiAgICAgIDx0YWJsZSBpZD1cImN1c3RvbWVyc1wiPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRoPm1vbnRoczwvdGg+XG4gICAgICAgICAgPHRoPmxpdGU8L3RoPlxuICAgICAgICAgIDx0aD5zdGFuZGFyZDwvdGg+XG4gICAgICAgICAgPHRoPnVubGltaXRlZDwvdGg+XG4gICAgICAgICAgPHRoPnBlcmZvcm1hbmNlPC90aD5cbiAgICAgICAgPC90cj5cbiAgICAgIFxuICAgICAgICB7ZmxhZz8gZWRpdGJ1dHRvbjogZWRpdGRldGFpbGJ1dHRvbn1cblxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRkPjI0bW9udGhzPC90ZD5cbiAgICAgICAgICA8dGQ+e21hdHJpeFtcIjI0bW9udGhzXCJdLmxpdGV9PC90ZD5cbiAgICAgICAgICA8dGQ+e21hdHJpeFtcIjI0bW9udGhzXCJdLnN0YW5kYXJkfTwvdGQ+XG4gICAgICAgICAgPHRkPnttYXRyaXhbXCIyNG1vbnRoc1wiXS51bmxpbWl0ZWR9PC90ZD5cbiAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICA8YnV0dG9uPk9LPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGQ+MzZtb250aHM8L3RkPlxuICAgICAgICAgIDx0ZD57bWF0cml4W1wiMzZtb250aHNcIl0ubGl0ZX08L3RkPlxuICAgICAgICAgIDx0ZD57bWF0cml4W1wiMzZtb250aHNcIl0uc3RhbmRhcmR9PC90ZD5cbiAgICAgICAgICA8dGQ+e21hdHJpeFtcIjM2bW9udGhzXCJdLnVubGltaXRlZH08L3RkPlxuICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgIDxidXR0b24+T0s8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0ZD5tdG08L3RkPlxuICAgICAgICAgIDx0ZD57bWF0cml4Lm10bS5saXRlfTwvdGQ+XG4gICAgICAgICAgPHRkPnttYXRyaXgubXRtLnN0YW5kYXJkfTwvdGQ+XG4gICAgICAgICAgPHRkPnttYXRyaXgubXRtLnVubGltaXRlZH08L3RkPlxuICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgIDxidXR0b24+T0s8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGFibGU+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgICAgd2lkdGg6MTAwJVxuICAgICAgICB9XG4gICAgICAgICNjdXN0b21lcnMge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICNjdXN0b21lcnMgdGQsICNjdXN0b21lcnMgdGgge1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAjY3VzdG9tZXJzIHRyOm50aC1jaGlsZChldmVuKXtiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO31cbiAgICAgICAgXG4gICAgICAgICNjdXN0b21lcnMgdHI6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNkZGQ7fVxuICAgICAgICBcbiAgICAgICAgI2N1c3RvbWVycyB0aCB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDEycHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICAucGVyZm9ybWFuY2Uge1xuICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IE1hdHJpeFRhYmxlV2l0aENvbnRleHQ6IGltcG9ydCgncmVhY3QnKS5GQzxQcm9wcz4gPSAoeyBpbml0aWFsTWF0cml4LCAuLi5wcm9wcyB9KSA9PiB7XG4gIC8vIFlvdSBjYW4gZmV0Y2ggdGhlIHByaWNpbmcgaGVyZSBvciBpbiBwYWdlcy9pbmRleC50c1xuICAvLyBSZW1lbWJlciB0aGF0IHlvdSBzaG91bGQgdHJ5IHRvIHJlZmxlY3QgdGhlIHN0YXRlIG9mIHByaWNpbmcgaW4gb3JpZ2luYWxNYXRyaXguXG4gIC8vIG1hdHJpeCB3aWxsIGhvbGQgdGhlIGxhdGVzdCB2YWx1ZSAoZWRpdGVkIG9yIHNhbWUgYXMgb3JpZ2luYWxNYXRyaXgpXG5cbiAgcmV0dXJuIChcbiAgICA8TWF0cml4VGFibGVDb250ZXh0UHJvdmlkZXIgaW5pdGlhbE1hdHJpeD17aW5pdGlhbE1hdHJpeH0+XG4gICAgICA8TWF0cml4VGFibGUgey4uLnByb3BzfSAvPlxuICAgIDwvTWF0cml4VGFibGVDb250ZXh0UHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWF0cml4VGFibGVXaXRoQ29udGV4dFxuIl0sInNvdXJjZVJvb3QiOiIifQ==