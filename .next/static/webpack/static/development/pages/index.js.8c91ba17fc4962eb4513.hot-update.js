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


  var editPricing = function editPricing() {
    console.log("editbutton");
    setFlag(false);
  };

  var cancel = function cancel() {
    console.log("cancelbutton");
    setFlag(true);
  };

  var editbutton = __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 5
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }
  }, "12 months"), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }
  }, matrix["12months"].lite), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }
  }, matrix["12months"].standard), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }
  }, matrix["12months"].unlimited), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }
  }, __jsx("button", {
    onClick: edit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 12
    }
  }, " Edit")));

  var editdetailbutton = __jsx("tr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 5
    }
  }, __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }
  }, __jsx("input", {
    type: "text",
    defaultValue: "12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 11
    }
  }), " months"), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }
  }, __jsx("input", {
    type: "number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 11
    }
  })), __jsx("td", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }
  }, __jsx("input", {
    value: matrix["12months"].standard,
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
    value: matrix["12months"].unlimited,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 11
    }
  })), __jsx("td", {
    className: "performance",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }
  }, __jsx("button", {
    onClick: editPricing,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  }, "OK"), __jsx("button", {
    onClick: cancel,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }
  }, "Cancel")));

  return __jsx("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    className: "jsx-3682736813" + " " + (props && props.className != null && props.className || classnames__WEBPACK_IMPORTED_MODULE_5___default()(['container', className]) || ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 5
    }
  }), __jsx("button", {
    onClick: save,
    className: "jsx-3682736813" + " " + "btn btn-success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }
  }, "Save"), __jsx("table", {
    id: "customers",
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }
  }, __jsx("tr", {
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 9
    }
  }, __jsx("th", {
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 11
    }
  }, "months"), __jsx("th", {
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 11
    }
  }, "lite"), __jsx("th", {
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 11
    }
  }, "standard"), __jsx("th", {
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 11
    }
  }, "unlimited"), __jsx("th", {
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 11
    }
  }, "performance")), flag ? editbutton : editdetailbutton, __jsx("tr", {
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 9
    }
  }, __jsx("td", {
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 11
    }
  }, "24months"), __jsx("td", {
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 11
    }
  }, matrix["24months"].lite), __jsx("td", {
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 11
    }
  }, matrix["24months"].standard), __jsx("td", {
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 11
    }
  }, matrix["24months"].unlimited), __jsx("td", {
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 11
    }
  }, __jsx("button", {
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 13
    }
  }, "OK"), __jsx("button", {
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 13
    }
  }, "Cancel"))), __jsx("tr", {
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 9
    }
  }, __jsx("td", {
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 11
    }
  }, "36months"), __jsx("td", {
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 11
    }
  }, matrix["36months"].lite), __jsx("td", {
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 11
    }
  }, matrix["36months"].standard), __jsx("td", {
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 11
    }
  }, matrix["36months"].unlimited), __jsx("td", {
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 11
    }
  }, __jsx("button", {
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 13
    }
  }, "OK"), __jsx("button", {
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 13
    }
  }, "Cancel"))), __jsx("tr", {
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 9
    }
  }, __jsx("td", {
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 11
    }
  }, "mtm"), __jsx("td", {
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 11
    }
  }, matrix.mtm.lite), __jsx("td", {
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 11
    }
  }, matrix.mtm.standard), __jsx("td", {
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 11
    }
  }, matrix.mtm.unlimited), __jsx("td", {
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 11
    }
  }, __jsx("button", {
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 13
    }
  }, "OK"), __jsx("button", {
    className: "jsx-3682736813",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 13
    }
  }, "Cancel")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "3682736813",
    __self: _this
  }, ".container.jsx-3682736813{margin:0;width:100%;}#customers.jsx-3682736813{font-family:\"Trebuchet MS\",Arial,Helvetica,sans-serif;border-collapse:collapse;width:100%;}#customers.jsx-3682736813 td.jsx-3682736813,#customers.jsx-3682736813 th.jsx-3682736813{border:1px solid #ddd;padding:8px;}#customers.jsx-3682736813 tr.jsx-3682736813:nth-child(even){background-color:#f2f2f2;}#customers.jsx-3682736813 tr.jsx-3682736813:hover{background-color:#ddd;}#customers.jsx-3682736813 th.jsx-3682736813{padding-top:12px;padding-bottom:12px;text-align:left;background-color:#4CAF50;color:white;}.performance.jsx-3682736813{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxpbnRlcnZpZXdcXGludGVydmlldy1mdWxsc3RhY2stbWFzdGVyXFxjb21wb25lbnRzXFxNYXRyaXhUYWJsZVxcaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZLa0IsQUFHbUIsQUFJaUQsQUFNbkMsQUFJOEIsQUFFWixBQUd2QixBQU9MLFNBeEJmLFFBa0J1QixHQWxCdEIsRUFTYyxBQUs2QixHQUZZLFNBRnZELEdBU2tCLGdCQUNTLENBakJBLG9CQXNCM0IsSUFKYyxDQWpCRCxXQUNiLEFBaUJBIiwiZmlsZSI6IkQ6XFxpbnRlcnZpZXdcXGludGVydmlldy1mdWxsc3RhY2stbWFzdGVyXFxjb21wb25lbnRzXFxNYXRyaXhUYWJsZVxcaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE1hdHJpeFRhYmxlQ29udGV4dCwgTWF0cml4VGFibGVDb250ZXh0UHJvdmlkZXIgfSBmcm9tICcuL2NvbnRleHQnXG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gJy4uLy4uL3BhZ2VzL3N0b3JlJztcblxuICB0eXBlIFByb3BzID0ge1xuICAgIGluaXRpYWxNYXRyaXg/OiBpbXBvcnQoJy4uLy4uL3R5cGVzJykuTWF0cml4XG4gIH0gJiBpbXBvcnQoJ3JlYWN0JykuSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+XG5cbiAgLyoqXG4gICAqIEFkZCA0IGJ1dHRvbnM6IFxuICAgKiAtIENhbmNlbCB0byByZXNldCB0aGUgbWF0cml4IHRvIGhvdyBpdCB3YXMgYmVmb3JlIGNoYW5naW5nIHRoZSB2YWx1ZXMgKG9ubHkgd2hlbiBpbiBlZGl0IG1vZGUpXG4gICAqIC0gRWRpdCB0byBtYWtlIHRoZSBmaWVsZHMgZWRpdGFibGUgKG9ubHkgd2hlbiBub3QgaW4gZWRpdCBtb2RlKVxuICAgKiAtIENsZWFyIHRvIGNvbXBsZXRlbHkgY2xlYXIgdGhlIHRhYmxlXG4gICAqIC0gU2F2ZSB0byBzYXZlIHRoZSB0YWJsZVxuICAgKiBAcGFyYW0gcGFyYW0wIFxuICAgKi9cbiAgY29uc3QgTWF0cml4VGFibGU6IGltcG9ydCgncmVhY3QnKS5GQzxPbWl0PFByb3BzLCAnaW5pdGlhbE1hdHJpeCc+PiA9ICh7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IHtcbiAgLy8gU3RhdGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuICBjb25zdCBbeyBtYXRyaXggfSwgZGlzcGF0Y2hdID0gdXNlQ29udGV4dChNYXRyaXhUYWJsZUNvbnRleHQpXG4gIGNvbnN0IFsgbWF0cml4RGF0YSwgc2V0TWF0cml4RGF0YV0gID0gdXNlU3RhdGUobWF0cml4KTtcbiAgY29uc3QgWyBmbGFnLCBzZXRGbGFnIF0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgXG4gIC8vIEhhbmRsZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcHJpY2luZycsIHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgYWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICB9KVxuICAgIC50aGVuKHJlcyA9PiBcbiAgICAgIHJlcy5qc29uKClcbiAgICApXG4gICAgLnRoZW4oZGF0YT0+IHtcbiAgICAgIHNldE1hdHJpeERhdGEoZGF0YSk7XG4gICAgICBkaXNwYXRjaCh7dHlwZTogJ0dFVF9BTExfREFUQScsIHBheWxvYWQ6IGRhdGEgfSk7XG5cbiAgICB9KVxuICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coJy0tLWVycm9yJywgZXJyKSk7XG4gIH0sW10pXG5cbiAgLy8gWW91IGNhbiBzYXZlICh0byBhcGkpIHRoZSBtYXRyaXggaGVyZS4gUmVtZW1iZXIgdG8gdXBkYXRlIG9yaWdpbmFsTWF0cml4IHdoZW4gZG9uZS5cbiAgY29uc3Qgc2F2ZSA9IGFzeW5jICgpID0+IHtcbiAgICBkaXNwYXRjaCh7dHlwZTogJ1NBVkVfSlNPTid9KTtcbiAgfVxuICAvLyBFZmZlY3RzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4gIC8vIFJlbmRlcmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbiAgXG4gICAgXG4gIC8vIGNvbnN0IHVwZGF0ZW1hdHJpeHRhYmxlID0gXG4gIC8vICAgPHRhYmxlIGlkPVwiY3VzdG9tZXJzXCI+XG4gIC8vICAgICAgIDx0cj5cbiAgLy8gICAgICAgICA8dGg+bW9udGhzPC90aD5cbiAgLy8gICAgICAgICA8dGg+bGl0ZTwvdGg+XG4gIC8vICAgICAgICAgPHRoPnN0YW5kYXJkPC90aD5cbiAgLy8gICAgICAgICA8dGg+dW5saW1pdGVkPC90aD5cbiAgLy8gICAgICAgICA8dGg+cGVyZm9ybWFuY2U8L3RoPlxuICAvLyAgICAgICA8L3RyPlxuICAvLyAgICAgICA8dHI+XG4gIC8vICAgICAgICAgPHRkPjEybW9udGhzPC90ZD5cbiAgLy8gICAgICAgICA8dGQ+e21hdHJpeERhdGFbXCIxMm1vbnRoc1wiXS5saXRlfTwvdGQ+XG4gIC8vICAgICAgICAgPHRkPnttYXRyaXhEYXRhW1wiMTJtb250aHNcIl0uc3RhbmRhcmR9PC90ZD5cbiAgLy8gICAgICAgICA8dGQ+e21hdHJpeERhdGFbXCIxMm1vbnRoc1wiXS51bmxpbWl0ZWR9PC90ZD5cbiAgLy8gICAgICAgPC90cj5cbiAgLy8gICAgICAgPHRyPlxuICAvLyAgICAgICAgIDx0ZD4yNG1vbnRoczwvdGQ+XG4gIC8vICAgICAgICAgPHRkPnttYXRyaXhEYXRhW1wiMjRtb250aHNcIl0ubGl0ZX08L3RkPlxuICAvLyAgICAgICAgIDx0ZD57bWF0cml4RGF0YVtcIjI0bW9udGhzXCJdLnN0YW5kYXJkfTwvdGQ+XG4gIC8vICAgICAgICAgPHRkPnttYXRyaXhEYXRhW1wiMjRtb250aHNcIl0udW5saW1pdGVkfTwvdGQ+XG4gIC8vICAgICAgIDwvdHI+XG4gIC8vICAgICAgIDx0cj5cbiAgLy8gICAgICAgICA8dGQ+MzZtb250aHM8L3RkPlxuICAvLyAgICAgICAgIDx0ZD57bWF0cml4RGF0YVtcIjM2bW9udGhzXCJdLmxpdGV9PC90ZD5cbiAgLy8gICAgICAgICA8dGQ+e21hdHJpeERhdGFbXCIzNm1vbnRoc1wiXS5zdGFuZGFyZH08L3RkPlxuICAvLyAgICAgICAgIDx0ZD57bWF0cml4RGF0YVtcIjM2bW9udGhzXCJdLnVubGltaXRlZH08L3RkPlxuICAvLyAgICAgICA8L3RyPlxuICAvLyAgICAgICA8dHI+XG4gIC8vICAgICAgICAgPHRkPm10bTwvdGQ+XG4gIC8vICAgICAgICAgPHRkPnttYXRyaXhEYXRhLm10bS5saXRlfTwvdGQ+XG4gIC8vICAgICAgICAgPHRkPnttYXRyaXhEYXRhLm10bS5zdGFuZGFyZH08L3RkPlxuICAvLyAgICAgICAgIDx0ZD57bWF0cml4RGF0YS5tdG0udW5saW1pdGVkfTwvdGQ+XG4gIC8vICAgICAgIDwvdHI+XG4gIC8vICAgICA8L3RhYmxlPlxuICBjb25zdCBlZGl0UHJpY2luZyA9ICgpPT57XG4gICAgY29uc29sZS5sb2coXCJlZGl0YnV0dG9uXCIpO1xuICAgIHNldEZsYWcoZmFsc2UpO1xuICB9XG5cbiAgY29uc3QgY2FuY2VsID0gKCk9PntcbiAgICBjb25zb2xlLmxvZyhcImNhbmNlbGJ1dHRvblwiKTtcbiAgICBzZXRGbGFnKHRydWUpO1xuICB9XG5cbiAgY29uc3QgZWRpdGJ1dHRvbiA9IFxuICAgIDx0cj5cbiAgICAgIDx0ZD4xMiBtb250aHM8L3RkPlxuICAgICAgPHRkPnttYXRyaXhbXCIxMm1vbnRoc1wiXS5saXRlfTwvdGQ+XG4gICAgICA8dGQ+e21hdHJpeFtcIjEybW9udGhzXCJdLnN0YW5kYXJkfTwvdGQ+XG4gICAgICA8dGQ+e21hdHJpeFtcIjEybW9udGhzXCJdLnVubGltaXRlZH08L3RkPlxuICAgICAgPHRkID48YnV0dG9uIG9uQ2xpY2s9e2VkaXR9PiBFZGl0PC9idXR0b24+PC90ZD5cbiAgICBcbiAgICA8L3RyPlxuXG4gIGNvbnN0IGVkaXRkZXRhaWxidXR0b249XG4gICAgPHRyPlxuICAgICAgPHRkPjxpbnB1dCB0eXBlPSd0ZXh0JyBkZWZhdWx0VmFsdWU9JzEyJy8+IG1vbnRoczwvdGQ+XG4gICAgICA8dGQ+PGlucHV0IHR5cGU9J251bWJlcicgIC8+PC90ZD5cbiAgICAgIDx0ZD48aW5wdXQgdmFsdWU9e21hdHJpeFtcIjEybW9udGhzXCJdLnN0YW5kYXJkfT48L2lucHV0PjwvdGQ+XG4gICAgICA8dGQ+PGlucHV0IHZhbHVlPXttYXRyaXhbXCIxMm1vbnRoc1wiXS51bmxpbWl0ZWR9PjwvaW5wdXQ+PC90ZD5cbiAgICAgIDx0ZCBjbGFzc05hbWU9XCJwZXJmb3JtYW5jZVwiID5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtlZGl0UHJpY2luZ30+T0s8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjYW5jZWx9PkNhbmNlbDwvYnV0dG9uPlxuICAgICAgPC90ZD5cbiAgICA8L3RyPlxuICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhbJ2NvbnRhaW5lcicsIGNsYXNzTmFtZV0pfSB7Li4ucHJvcHN9PlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzYXZlfSBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIj5TYXZlPC9idXR0b24+XG4gICAgICB7LyogPGJyIC8+XG4gICAgICA8YnIgLz5cblxuICAgICAgMzZtb250aHMgbGl0ZTpcbiAgICAgIDxpbnB1dCBcbiAgICAgICAgdmFsdWU9e21hdHJpeFtcIjM2bW9udGhzXCJdLmxpdGUgfHwgJyd9IFxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiAnU09NRV9BQ1RJT04nLFxuICAgICAgICAgIHBheWxvYWQ6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pfSAvPiAqL31cbiAgICAgIDx0YWJsZSBpZD1cImN1c3RvbWVyc1wiPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRoPm1vbnRoczwvdGg+XG4gICAgICAgICAgPHRoPmxpdGU8L3RoPlxuICAgICAgICAgIDx0aD5zdGFuZGFyZDwvdGg+XG4gICAgICAgICAgPHRoPnVubGltaXRlZDwvdGg+XG4gICAgICAgICAgPHRoPnBlcmZvcm1hbmNlPC90aD5cbiAgICAgICAgPC90cj5cbiAgICAgIFxuICAgICAgICB7ZmxhZz8gZWRpdGJ1dHRvbjogZWRpdGRldGFpbGJ1dHRvbn1cblxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRkPjI0bW9udGhzPC90ZD5cbiAgICAgICAgICA8dGQ+e21hdHJpeFtcIjI0bW9udGhzXCJdLmxpdGV9PC90ZD5cbiAgICAgICAgICA8dGQ+e21hdHJpeFtcIjI0bW9udGhzXCJdLnN0YW5kYXJkfTwvdGQ+XG4gICAgICAgICAgPHRkPnttYXRyaXhbXCIyNG1vbnRoc1wiXS51bmxpbWl0ZWR9PC90ZD5cbiAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICA8YnV0dG9uPk9LPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGQ+MzZtb250aHM8L3RkPlxuICAgICAgICAgIDx0ZD57bWF0cml4W1wiMzZtb250aHNcIl0ubGl0ZX08L3RkPlxuICAgICAgICAgIDx0ZD57bWF0cml4W1wiMzZtb250aHNcIl0uc3RhbmRhcmR9PC90ZD5cbiAgICAgICAgICA8dGQ+e21hdHJpeFtcIjM2bW9udGhzXCJdLnVubGltaXRlZH08L3RkPlxuICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgIDxidXR0b24+T0s8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0ZD5tdG08L3RkPlxuICAgICAgICAgIDx0ZD57bWF0cml4Lm10bS5saXRlfTwvdGQ+XG4gICAgICAgICAgPHRkPnttYXRyaXgubXRtLnN0YW5kYXJkfTwvdGQ+XG4gICAgICAgICAgPHRkPnttYXRyaXgubXRtLnVubGltaXRlZH08L3RkPlxuICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgIDxidXR0b24+T0s8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGFibGU+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgICAgd2lkdGg6MTAwJVxuICAgICAgICB9XG4gICAgICAgICNjdXN0b21lcnMge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICNjdXN0b21lcnMgdGQsICNjdXN0b21lcnMgdGgge1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAjY3VzdG9tZXJzIHRyOm50aC1jaGlsZChldmVuKXtiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO31cbiAgICAgICAgXG4gICAgICAgICNjdXN0b21lcnMgdHI6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNkZGQ7fVxuICAgICAgICBcbiAgICAgICAgI2N1c3RvbWVycyB0aCB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDEycHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICAucGVyZm9ybWFuY2Uge1xuICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IE1hdHJpeFRhYmxlV2l0aENvbnRleHQ6IGltcG9ydCgncmVhY3QnKS5GQzxQcm9wcz4gPSAoeyBpbml0aWFsTWF0cml4LCAuLi5wcm9wcyB9KSA9PiB7XG4gIC8vIFlvdSBjYW4gZmV0Y2ggdGhlIHByaWNpbmcgaGVyZSBvciBpbiBwYWdlcy9pbmRleC50c1xuICAvLyBSZW1lbWJlciB0aGF0IHlvdSBzaG91bGQgdHJ5IHRvIHJlZmxlY3QgdGhlIHN0YXRlIG9mIHByaWNpbmcgaW4gb3JpZ2luYWxNYXRyaXguXG4gIC8vIG1hdHJpeCB3aWxsIGhvbGQgdGhlIGxhdGVzdCB2YWx1ZSAoZWRpdGVkIG9yIHNhbWUgYXMgb3JpZ2luYWxNYXRyaXgpXG5cbiAgcmV0dXJuIChcbiAgICA8TWF0cml4VGFibGVDb250ZXh0UHJvdmlkZXIgaW5pdGlhbE1hdHJpeD17aW5pdGlhbE1hdHJpeH0+XG4gICAgICA8TWF0cml4VGFibGUgey4uLnByb3BzfSAvPlxuICAgIDwvTWF0cml4VGFibGVDb250ZXh0UHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWF0cml4VGFibGVXaXRoQ29udGV4dFxuIl19 */\n/*@ sourceURL=D:\\\\interview\\\\interview-fullstack-master\\\\components\\\\MatrixTable\\\\index.tsx */"));
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
      lineNumber: 215,
      columnNumber: 5
    }
  }, __jsx(MatrixTable, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01hdHJpeFRhYmxlL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJNYXRyaXhUYWJsZSIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwicHJvcHMiLCJ1c2VDb250ZXh0IiwiTWF0cml4VGFibGVDb250ZXh0IiwibWF0cml4IiwiZGlzcGF0Y2giLCJ1c2VTdGF0ZSIsIm1hdHJpeERhdGEiLCJzZXRNYXRyaXhEYXRhIiwiZmxhZyIsInNldEZsYWciLCJ1c2VFZmZlY3QiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJhY2NlcHQiLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJ0eXBlIiwicGF5bG9hZCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJzYXZlIiwiZWRpdFByaWNpbmciLCJjYW5jZWwiLCJlZGl0YnV0dG9uIiwibGl0ZSIsInN0YW5kYXJkIiwidW5saW1pdGVkIiwiZWRpdCIsImVkaXRkZXRhaWxidXR0b24iLCJjbGFzc25hbWVzIiwibXRtIiwiTWF0cml4VGFibGVXaXRoQ29udGV4dCIsImluaXRpYWxNYXRyaXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBT0U7Ozs7Ozs7O0FBUUEsSUFBTUEsV0FBNkQsR0FBRyxTQUFoRUEsV0FBZ0UsT0FBdUM7QUFBQTs7QUFBQSxNQUFwQ0MsU0FBb0MsUUFBcENBLFNBQW9DO0FBQUEsTUFBekJDLFFBQXlCLFFBQXpCQSxRQUF5QjtBQUFBLE1BQVpDLEtBQVk7O0FBQzdHO0FBRDZHLG9CQUU5RUMsd0RBQVUsQ0FBQ0MsMkRBQUQsQ0FGb0U7QUFBQSxNQUVwR0MsTUFGb0csa0JBRXBHQSxNQUZvRztBQUFBLE1BRTFGQyxRQUYwRjs7QUFBQSxrQkFHdkVDLHNEQUFRLENBQUNGLE1BQUQsQ0FIK0Q7QUFBQSxNQUdyR0csVUFIcUc7QUFBQSxNQUd6RkMsYUFIeUY7O0FBQUEsbUJBSW5GRixzREFBUSxDQUFDLElBQUQsQ0FKMkU7QUFBQSxNQUlyR0csSUFKcUc7QUFBQSxNQUkvRkMsT0FKK0Ysa0JBTTdHOzs7QUFDQUMseURBQVMsQ0FBQyxZQUFJO0FBQ1pDLFNBQUssQ0FBQyxtQ0FBRCxFQUFzQztBQUN6Q0MsWUFBTSxFQUFFLEtBRGlDO0FBRXpDQyxhQUFPLEVBQUU7QUFDTEMsY0FBTSxFQUFFLGtCQURIO0FBRUwsd0JBQWdCO0FBRlg7QUFGZ0MsS0FBdEMsQ0FBTCxDQU9DQyxJQVBELENBT00sVUFBQUMsR0FBRztBQUFBLGFBQ1BBLEdBQUcsQ0FBQ0MsSUFBSixFQURPO0FBQUEsS0FQVCxFQVVDRixJQVZELENBVU0sVUFBQUcsSUFBSSxFQUFHO0FBQ1hYLG1CQUFhLENBQUNXLElBQUQsQ0FBYjtBQUNBZCxjQUFRLENBQUM7QUFBQ2UsWUFBSSxFQUFFLGNBQVA7QUFBdUJDLGVBQU8sRUFBRUY7QUFBaEMsT0FBRCxDQUFSO0FBRUQsS0FkRCxXQWVPLFVBQUFHLEdBQUc7QUFBQSxhQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCRixHQUF4QixDQUFKO0FBQUEsS0FmVjtBQWdCRCxHQWpCUSxFQWlCUCxFQWpCTyxDQUFULENBUDZHLENBMEI3Rzs7QUFDQSxNQUFNRyxJQUFJO0FBQUEsaU1BQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNYcEIsc0JBQVEsQ0FBQztBQUFDZSxvQkFBSSxFQUFFO0FBQVAsZUFBRCxDQUFSOztBQURXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQUpLLElBQUk7QUFBQTtBQUFBO0FBQUEsS0FBVixDQTNCNkcsQ0E4QjdHO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBSTtBQUN0QkgsV0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWjtBQUNBZCxXQUFPLENBQUMsS0FBRCxDQUFQO0FBQ0QsR0FIRDs7QUFLQSxNQUFNaUIsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBSTtBQUNqQkosV0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWjtBQUNBZCxXQUFPLENBQUMsSUFBRCxDQUFQO0FBQ0QsR0FIRDs7QUFLQSxNQUFNa0IsVUFBVSxHQUNkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLeEIsTUFBTSxDQUFDLFVBQUQsQ0FBTixDQUFtQnlCLElBQXhCLENBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUt6QixNQUFNLENBQUMsVUFBRCxDQUFOLENBQW1CMEIsUUFBeEIsQ0FIRixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSzFCLE1BQU0sQ0FBQyxVQUFELENBQU4sQ0FBbUIyQixTQUF4QixDQUpGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLO0FBQVEsV0FBTyxFQUFFQyxJQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQUwsQ0FMRixDQURGOztBQVVBLE1BQU1DLGdCQUFnQixHQUNwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsZ0JBQVksRUFBQyxJQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQUosWUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSTtBQUFPLFFBQUksRUFBQyxRQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBSixDQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJO0FBQU8sU0FBSyxFQUFFN0IsTUFBTSxDQUFDLFVBQUQsQ0FBTixDQUFtQjBCLFFBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBSixDQUhGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJO0FBQU8sU0FBSyxFQUFFMUIsTUFBTSxDQUFDLFVBQUQsQ0FBTixDQUFtQjJCLFNBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBSixDQUpGLEVBS0U7QUFBSSxhQUFTLEVBQUMsYUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxXQUFPLEVBQUVMLFdBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERixFQUVFO0FBQVEsV0FBTyxFQUFFQyxNQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsQ0FMRixDQURGOztBQVlBLFNBQ0Usb0dBQTBEMUIsS0FBMUQ7QUFBQSxnR0FBZ0JpQyxpREFBVSxDQUFDLENBQUMsV0FBRCxFQUFjbkMsU0FBZCxDQUFELENBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFDRTtBQUFRLFdBQU8sRUFBRTBCLElBQWpCO0FBQUEsd0NBQWlDLGlCQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFZRTtBQUFPLE1BQUUsRUFBQyxXQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkYsRUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEYsQ0FERixFQVNHaEIsSUFBSSxHQUFFbUIsVUFBRixHQUFjSyxnQkFUckIsRUFXRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSzdCLE1BQU0sQ0FBQyxVQUFELENBQU4sQ0FBbUJ5QixJQUF4QixDQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUt6QixNQUFNLENBQUMsVUFBRCxDQUFOLENBQW1CMEIsUUFBeEIsQ0FIRixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLMUIsTUFBTSxDQUFDLFVBQUQsQ0FBTixDQUFtQjJCLFNBQXhCLENBSkYsRUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLENBTEYsQ0FYRixFQXFCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSzNCLE1BQU0sQ0FBQyxVQUFELENBQU4sQ0FBbUJ5QixJQUF4QixDQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUt6QixNQUFNLENBQUMsVUFBRCxDQUFOLENBQW1CMEIsUUFBeEIsQ0FIRixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLMUIsTUFBTSxDQUFDLFVBQUQsQ0FBTixDQUFtQjJCLFNBQXhCLENBSkYsRUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLENBTEYsQ0FyQkYsRUErQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSzNCLE1BQU0sQ0FBQytCLEdBQVAsQ0FBV04sSUFBaEIsQ0FGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLekIsTUFBTSxDQUFDK0IsR0FBUCxDQUFXTCxRQUFoQixDQUhGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUsxQixNQUFNLENBQUMrQixHQUFQLENBQVdKLFNBQWhCLENBSkYsRUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLENBTEYsQ0EvQkYsQ0FaRjtBQUFBO0FBQUE7QUFBQSw4MFVBREY7QUF5RkQsQ0E3TEM7O0dBQU1qQyxXOztLQUFBQSxXOztBQStMUixJQUFNc0Msc0JBQWlELEdBQUcsU0FBcERBLHNCQUFvRCxRQUFpQztBQUFBLE1BQTlCQyxhQUE4QixTQUE5QkEsYUFBOEI7QUFBQSxNQUFacEMsS0FBWTs7QUFDekY7QUFDQTtBQUNBO0FBRUEsU0FDRSxNQUFDLG1FQUFEO0FBQTRCLGlCQUFhLEVBQUVvQyxhQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxXQUFELHlGQUFpQnBDLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERixDQURGO0FBS0QsQ0FWRDs7TUFBTW1DLHNCO0FBWVNBLHFGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy44YzkxYmExN2ZjNDk2MmViNDUxMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE1hdHJpeFRhYmxlQ29udGV4dCwgTWF0cml4VGFibGVDb250ZXh0UHJvdmlkZXIgfSBmcm9tICcuL2NvbnRleHQnXG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gJy4uLy4uL3BhZ2VzL3N0b3JlJztcblxuICB0eXBlIFByb3BzID0ge1xuICAgIGluaXRpYWxNYXRyaXg/OiBpbXBvcnQoJy4uLy4uL3R5cGVzJykuTWF0cml4XG4gIH0gJiBpbXBvcnQoJ3JlYWN0JykuSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+XG5cbiAgLyoqXG4gICAqIEFkZCA0IGJ1dHRvbnM6IFxuICAgKiAtIENhbmNlbCB0byByZXNldCB0aGUgbWF0cml4IHRvIGhvdyBpdCB3YXMgYmVmb3JlIGNoYW5naW5nIHRoZSB2YWx1ZXMgKG9ubHkgd2hlbiBpbiBlZGl0IG1vZGUpXG4gICAqIC0gRWRpdCB0byBtYWtlIHRoZSBmaWVsZHMgZWRpdGFibGUgKG9ubHkgd2hlbiBub3QgaW4gZWRpdCBtb2RlKVxuICAgKiAtIENsZWFyIHRvIGNvbXBsZXRlbHkgY2xlYXIgdGhlIHRhYmxlXG4gICAqIC0gU2F2ZSB0byBzYXZlIHRoZSB0YWJsZVxuICAgKiBAcGFyYW0gcGFyYW0wIFxuICAgKi9cbiAgY29uc3QgTWF0cml4VGFibGU6IGltcG9ydCgncmVhY3QnKS5GQzxPbWl0PFByb3BzLCAnaW5pdGlhbE1hdHJpeCc+PiA9ICh7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IHtcbiAgLy8gU3RhdGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuICBjb25zdCBbeyBtYXRyaXggfSwgZGlzcGF0Y2hdID0gdXNlQ29udGV4dChNYXRyaXhUYWJsZUNvbnRleHQpXG4gIGNvbnN0IFsgbWF0cml4RGF0YSwgc2V0TWF0cml4RGF0YV0gID0gdXNlU3RhdGUobWF0cml4KTtcbiAgY29uc3QgWyBmbGFnLCBzZXRGbGFnIF0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgXG4gIC8vIEhhbmRsZXJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcHJpY2luZycsIHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgYWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICB9KVxuICAgIC50aGVuKHJlcyA9PiBcbiAgICAgIHJlcy5qc29uKClcbiAgICApXG4gICAgLnRoZW4oZGF0YT0+IHtcbiAgICAgIHNldE1hdHJpeERhdGEoZGF0YSk7XG4gICAgICBkaXNwYXRjaCh7dHlwZTogJ0dFVF9BTExfREFUQScsIHBheWxvYWQ6IGRhdGEgfSk7XG5cbiAgICB9KVxuICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coJy0tLWVycm9yJywgZXJyKSk7XG4gIH0sW10pXG5cbiAgLy8gWW91IGNhbiBzYXZlICh0byBhcGkpIHRoZSBtYXRyaXggaGVyZS4gUmVtZW1iZXIgdG8gdXBkYXRlIG9yaWdpbmFsTWF0cml4IHdoZW4gZG9uZS5cbiAgY29uc3Qgc2F2ZSA9IGFzeW5jICgpID0+IHtcbiAgICBkaXNwYXRjaCh7dHlwZTogJ1NBVkVfSlNPTid9KTtcbiAgfVxuICAvLyBFZmZlY3RzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG4gIC8vIFJlbmRlcmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cbiAgXG4gICAgXG4gIC8vIGNvbnN0IHVwZGF0ZW1hdHJpeHRhYmxlID0gXG4gIC8vICAgPHRhYmxlIGlkPVwiY3VzdG9tZXJzXCI+XG4gIC8vICAgICAgIDx0cj5cbiAgLy8gICAgICAgICA8dGg+bW9udGhzPC90aD5cbiAgLy8gICAgICAgICA8dGg+bGl0ZTwvdGg+XG4gIC8vICAgICAgICAgPHRoPnN0YW5kYXJkPC90aD5cbiAgLy8gICAgICAgICA8dGg+dW5saW1pdGVkPC90aD5cbiAgLy8gICAgICAgICA8dGg+cGVyZm9ybWFuY2U8L3RoPlxuICAvLyAgICAgICA8L3RyPlxuICAvLyAgICAgICA8dHI+XG4gIC8vICAgICAgICAgPHRkPjEybW9udGhzPC90ZD5cbiAgLy8gICAgICAgICA8dGQ+e21hdHJpeERhdGFbXCIxMm1vbnRoc1wiXS5saXRlfTwvdGQ+XG4gIC8vICAgICAgICAgPHRkPnttYXRyaXhEYXRhW1wiMTJtb250aHNcIl0uc3RhbmRhcmR9PC90ZD5cbiAgLy8gICAgICAgICA8dGQ+e21hdHJpeERhdGFbXCIxMm1vbnRoc1wiXS51bmxpbWl0ZWR9PC90ZD5cbiAgLy8gICAgICAgPC90cj5cbiAgLy8gICAgICAgPHRyPlxuICAvLyAgICAgICAgIDx0ZD4yNG1vbnRoczwvdGQ+XG4gIC8vICAgICAgICAgPHRkPnttYXRyaXhEYXRhW1wiMjRtb250aHNcIl0ubGl0ZX08L3RkPlxuICAvLyAgICAgICAgIDx0ZD57bWF0cml4RGF0YVtcIjI0bW9udGhzXCJdLnN0YW5kYXJkfTwvdGQ+XG4gIC8vICAgICAgICAgPHRkPnttYXRyaXhEYXRhW1wiMjRtb250aHNcIl0udW5saW1pdGVkfTwvdGQ+XG4gIC8vICAgICAgIDwvdHI+XG4gIC8vICAgICAgIDx0cj5cbiAgLy8gICAgICAgICA8dGQ+MzZtb250aHM8L3RkPlxuICAvLyAgICAgICAgIDx0ZD57bWF0cml4RGF0YVtcIjM2bW9udGhzXCJdLmxpdGV9PC90ZD5cbiAgLy8gICAgICAgICA8dGQ+e21hdHJpeERhdGFbXCIzNm1vbnRoc1wiXS5zdGFuZGFyZH08L3RkPlxuICAvLyAgICAgICAgIDx0ZD57bWF0cml4RGF0YVtcIjM2bW9udGhzXCJdLnVubGltaXRlZH08L3RkPlxuICAvLyAgICAgICA8L3RyPlxuICAvLyAgICAgICA8dHI+XG4gIC8vICAgICAgICAgPHRkPm10bTwvdGQ+XG4gIC8vICAgICAgICAgPHRkPnttYXRyaXhEYXRhLm10bS5saXRlfTwvdGQ+XG4gIC8vICAgICAgICAgPHRkPnttYXRyaXhEYXRhLm10bS5zdGFuZGFyZH08L3RkPlxuICAvLyAgICAgICAgIDx0ZD57bWF0cml4RGF0YS5tdG0udW5saW1pdGVkfTwvdGQ+XG4gIC8vICAgICAgIDwvdHI+XG4gIC8vICAgICA8L3RhYmxlPlxuICBjb25zdCBlZGl0UHJpY2luZyA9ICgpPT57XG4gICAgY29uc29sZS5sb2coXCJlZGl0YnV0dG9uXCIpO1xuICAgIHNldEZsYWcoZmFsc2UpO1xuICB9XG5cbiAgY29uc3QgY2FuY2VsID0gKCk9PntcbiAgICBjb25zb2xlLmxvZyhcImNhbmNlbGJ1dHRvblwiKTtcbiAgICBzZXRGbGFnKHRydWUpO1xuICB9XG5cbiAgY29uc3QgZWRpdGJ1dHRvbiA9IFxuICAgIDx0cj5cbiAgICAgIDx0ZD4xMiBtb250aHM8L3RkPlxuICAgICAgPHRkPnttYXRyaXhbXCIxMm1vbnRoc1wiXS5saXRlfTwvdGQ+XG4gICAgICA8dGQ+e21hdHJpeFtcIjEybW9udGhzXCJdLnN0YW5kYXJkfTwvdGQ+XG4gICAgICA8dGQ+e21hdHJpeFtcIjEybW9udGhzXCJdLnVubGltaXRlZH08L3RkPlxuICAgICAgPHRkID48YnV0dG9uIG9uQ2xpY2s9e2VkaXR9PiBFZGl0PC9idXR0b24+PC90ZD5cbiAgICBcbiAgICA8L3RyPlxuXG4gIGNvbnN0IGVkaXRkZXRhaWxidXR0b249XG4gICAgPHRyPlxuICAgICAgPHRkPjxpbnB1dCB0eXBlPSd0ZXh0JyBkZWZhdWx0VmFsdWU9JzEyJy8+IG1vbnRoczwvdGQ+XG4gICAgICA8dGQ+PGlucHV0IHR5cGU9J251bWJlcicgIC8+PC90ZD5cbiAgICAgIDx0ZD48aW5wdXQgdmFsdWU9e21hdHJpeFtcIjEybW9udGhzXCJdLnN0YW5kYXJkfT48L2lucHV0PjwvdGQ+XG4gICAgICA8dGQ+PGlucHV0IHZhbHVlPXttYXRyaXhbXCIxMm1vbnRoc1wiXS51bmxpbWl0ZWR9PjwvaW5wdXQ+PC90ZD5cbiAgICAgIDx0ZCBjbGFzc05hbWU9XCJwZXJmb3JtYW5jZVwiID5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtlZGl0UHJpY2luZ30+T0s8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjYW5jZWx9PkNhbmNlbDwvYnV0dG9uPlxuICAgICAgPC90ZD5cbiAgICA8L3RyPlxuICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhbJ2NvbnRhaW5lcicsIGNsYXNzTmFtZV0pfSB7Li4ucHJvcHN9PlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzYXZlfSBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIj5TYXZlPC9idXR0b24+XG4gICAgICB7LyogPGJyIC8+XG4gICAgICA8YnIgLz5cblxuICAgICAgMzZtb250aHMgbGl0ZTpcbiAgICAgIDxpbnB1dCBcbiAgICAgICAgdmFsdWU9e21hdHJpeFtcIjM2bW9udGhzXCJdLmxpdGUgfHwgJyd9IFxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiAnU09NRV9BQ1RJT04nLFxuICAgICAgICAgIHBheWxvYWQ6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pfSAvPiAqL31cbiAgICAgIDx0YWJsZSBpZD1cImN1c3RvbWVyc1wiPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRoPm1vbnRoczwvdGg+XG4gICAgICAgICAgPHRoPmxpdGU8L3RoPlxuICAgICAgICAgIDx0aD5zdGFuZGFyZDwvdGg+XG4gICAgICAgICAgPHRoPnVubGltaXRlZDwvdGg+XG4gICAgICAgICAgPHRoPnBlcmZvcm1hbmNlPC90aD5cbiAgICAgICAgPC90cj5cbiAgICAgIFxuICAgICAgICB7ZmxhZz8gZWRpdGJ1dHRvbjogZWRpdGRldGFpbGJ1dHRvbn1cblxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRkPjI0bW9udGhzPC90ZD5cbiAgICAgICAgICA8dGQ+e21hdHJpeFtcIjI0bW9udGhzXCJdLmxpdGV9PC90ZD5cbiAgICAgICAgICA8dGQ+e21hdHJpeFtcIjI0bW9udGhzXCJdLnN0YW5kYXJkfTwvdGQ+XG4gICAgICAgICAgPHRkPnttYXRyaXhbXCIyNG1vbnRoc1wiXS51bmxpbWl0ZWR9PC90ZD5cbiAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICA8YnV0dG9uPk9LPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGQ+MzZtb250aHM8L3RkPlxuICAgICAgICAgIDx0ZD57bWF0cml4W1wiMzZtb250aHNcIl0ubGl0ZX08L3RkPlxuICAgICAgICAgIDx0ZD57bWF0cml4W1wiMzZtb250aHNcIl0uc3RhbmRhcmR9PC90ZD5cbiAgICAgICAgICA8dGQ+e21hdHJpeFtcIjM2bW9udGhzXCJdLnVubGltaXRlZH08L3RkPlxuICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgIDxidXR0b24+T0s8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0ZD5tdG08L3RkPlxuICAgICAgICAgIDx0ZD57bWF0cml4Lm10bS5saXRlfTwvdGQ+XG4gICAgICAgICAgPHRkPnttYXRyaXgubXRtLnN0YW5kYXJkfTwvdGQ+XG4gICAgICAgICAgPHRkPnttYXRyaXgubXRtLnVubGltaXRlZH08L3RkPlxuICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgIDxidXR0b24+T0s8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGFibGU+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgICAgd2lkdGg6MTAwJVxuICAgICAgICB9XG4gICAgICAgICNjdXN0b21lcnMge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICNjdXN0b21lcnMgdGQsICNjdXN0b21lcnMgdGgge1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAjY3VzdG9tZXJzIHRyOm50aC1jaGlsZChldmVuKXtiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO31cbiAgICAgICAgXG4gICAgICAgICNjdXN0b21lcnMgdHI6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNkZGQ7fVxuICAgICAgICBcbiAgICAgICAgI2N1c3RvbWVycyB0aCB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDEycHg7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICAucGVyZm9ybWFuY2Uge1xuICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IE1hdHJpeFRhYmxlV2l0aENvbnRleHQ6IGltcG9ydCgncmVhY3QnKS5GQzxQcm9wcz4gPSAoeyBpbml0aWFsTWF0cml4LCAuLi5wcm9wcyB9KSA9PiB7XG4gIC8vIFlvdSBjYW4gZmV0Y2ggdGhlIHByaWNpbmcgaGVyZSBvciBpbiBwYWdlcy9pbmRleC50c1xuICAvLyBSZW1lbWJlciB0aGF0IHlvdSBzaG91bGQgdHJ5IHRvIHJlZmxlY3QgdGhlIHN0YXRlIG9mIHByaWNpbmcgaW4gb3JpZ2luYWxNYXRyaXguXG4gIC8vIG1hdHJpeCB3aWxsIGhvbGQgdGhlIGxhdGVzdCB2YWx1ZSAoZWRpdGVkIG9yIHNhbWUgYXMgb3JpZ2luYWxNYXRyaXgpXG5cbiAgcmV0dXJuIChcbiAgICA8TWF0cml4VGFibGVDb250ZXh0UHJvdmlkZXIgaW5pdGlhbE1hdHJpeD17aW5pdGlhbE1hdHJpeH0+XG4gICAgICA8TWF0cml4VGFibGUgey4uLnByb3BzfSAvPlxuICAgIDwvTWF0cml4VGFibGVDb250ZXh0UHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWF0cml4VGFibGVXaXRoQ29udGV4dFxuIl0sInNvdXJjZVJvb3QiOiIifQ==