webpackHotUpdate_N_E("pages/Profile",{

/***/ "./components/NicknameEditForm.js":
/*!****************************************!*\
  !*** ./components/NicknameEditForm.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ \"./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var antd_lib_table_hooks_useSelection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/table/hooks/useSelection */ \"./node_modules/antd/lib/table/hooks/useSelection.js\");\n/* harmony import */ var antd_lib_table_hooks_useSelection__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_table_hooks_useSelection__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/honest/Downloads/\\u1100\\u1162\\u1107\\u1161\\u11AF/7. react-nodebird/prepare/front/components/NicknameEditForm.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\n\nvar NicknameEditForm = function NicknameEditForm(_ref) {\n  _s();\n\n  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref);\n\n  var _useSelection = antd_lib_table_hooks_useSelection__WEBPACK_IMPORTED_MODULE_6___default()(function (state) {\n    state.user;\n  }),\n      me = _useSelection.me;\n\n  var _useInput = useInput((me === null || me === void 0 ? void 0 : me.nickname) || ''),\n      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useInput, 2),\n      nickname = _useInput2[0],\n      onChangeNickname = _useInput2[1];\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__[\"useDispatch\"])();\n  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    dispatch({\n      type: _reducers_user__WEBPACK_IMPORTED_MODULE_8__[\"CHANGE_NICKNAME_REQUEST\"],\n      data: nickname\n    });\n  });\n  return __jsx(antd__WEBPACK_IMPORTED_MODULE_4__[\"Form\"], {\n    style: {\n      marginBottom: '20px',\n      border: '1px solid #d9d9d9',\n      padding: '20px'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__[\"Input\"].Search, {\n    value: nickname,\n    onChange: onChangeNickname,\n    addonBefore: \"\\uB2C9\\uB124\\uC784\",\n    enterButton: \"\\uC218\\uC815\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }\n  }));\n};\n\n_s(NicknameEditForm, \"KsZZmE5cJgSg6S/IJsfT45vaz/M=\", true, function () {\n  return [antd_lib_table_hooks_useSelection__WEBPACK_IMPORTED_MODULE_6___default.a, react_redux__WEBPACK_IMPORTED_MODULE_7__[\"useDispatch\"]];\n});\n\n_c = NicknameEditForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NicknameEditForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"NicknameEditForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OaWNrbmFtZUVkaXRGb3JtLmpzPzE3YTkiXSwibmFtZXMiOlsiTmlja25hbWVFZGl0Rm9ybSIsInVzZVNlbGVjdGlvbiIsInN0YXRlIiwidXNlciIsIm1lIiwidXNlSW5wdXQiLCJuaWNrbmFtZSIsIm9uQ2hhbmdlTmlja25hbWUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwib25TdWJtaXQiLCJ1c2VDYWxsYmFjayIsInR5cGUiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsImRhdGEiLCJtYXJnaW5Cb3R0b20iLCJib3JkZXIiLCJwYWRkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLE9BQVE7QUFBQTs7QUFBQTs7QUFDN0Isc0JBQWVDLHdFQUFZLENBQUMsVUFBQ0MsS0FBRCxFQUFXO0FBQUNBLFNBQUssQ0FBQ0MsSUFBTjtBQUFXLEdBQXhCLENBQTNCO0FBQUEsTUFBUUMsRUFBUixpQkFBUUEsRUFBUjs7QUFDQSxrQkFBcUNDLFFBQVEsQ0FBQyxDQUFBRCxFQUFFLFNBQUYsSUFBQUEsRUFBRSxXQUFGLFlBQUFBLEVBQUUsQ0FBRUUsUUFBSixLQUFnQixFQUFqQixDQUE3QztBQUFBO0FBQUEsTUFBT0EsUUFBUDtBQUFBLE1BQWlCQyxnQkFBakI7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUVBLE1BQU1DLFFBQVEsR0FBR0MseURBQVcsQ0FBQyxZQUFNO0FBQy9CSCxZQUFRLENBQUM7QUFDTEksVUFBSSxFQUFFQyxzRUFERDtBQUVMQyxVQUFJLEVBQUVSO0FBRkQsS0FBRCxDQUFSO0FBSUgsR0FMMkIsQ0FBNUI7QUFPQSxTQUNJLE1BQUMseUNBQUQ7QUFBTSxTQUFLLEVBQUU7QUFBRVMsa0JBQVksRUFBRSxNQUFoQjtBQUF3QkMsWUFBTSxFQUFFLG1CQUFoQztBQUFxREMsYUFBTyxFQUFFO0FBQTlELEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsMENBQUQsQ0FBTyxNQUFQO0FBQ0UsU0FBSyxFQUFFWCxRQURUO0FBRUUsWUFBUSxFQUFFQyxnQkFGWjtBQUdFLGVBQVcsRUFBQyxvQkFIZDtBQUlFLGVBQVcsRUFBQyxjQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKO0FBVUgsQ0F0QkQ7O0dBQU1QLGdCO1VBQ2FDLHdFLEVBRUVRLHVEOzs7S0FIZlQsZ0I7QUF3QlNBLCtFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9OaWNrbmFtZUVkaXRGb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgTWVudSwgSW5wdXQsIFJvdywgQ29sLCBCdXR0b24sIEZvcm0gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHVzZVNlbGVjdGlvbiBmcm9tICdhbnRkL2xpYi90YWJsZS9ob29rcy91c2VTZWxlY3Rpb24nO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcbmNvbnN0IE5pY2tuYW1lRWRpdEZvcm0gPSAoe30pID0+IHtcclxuICAgIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdGlvbigoc3RhdGUpID0+IHtzdGF0ZS51c2VyfSk7XHJcbiAgICBjb25zdCBbbmlja25hbWUsIG9uQ2hhbmdlTmlja25hbWVdID0gdXNlSW5wdXQobWU/Lm5pY2tuYW1lIHx8ICcnKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICBjb25zdCBvblN1Ym1pdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IENIQU5HRV9OSUNLTkFNRV9SRVFVRVNULFxyXG4gICAgICAgICAgICBkYXRhOiBuaWNrbmFtZSxcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGb3JtIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzIwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI2Q5ZDlkOScsIHBhZGRpbmc6ICcyMHB4J319PlxyXG4gICAgICAgICAgICA8SW5wdXQuU2VhcmNoIFxyXG4gICAgICAgICAgICAgIHZhbHVlPXtuaWNrbmFtZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VOaWNrbmFtZX1cclxuICAgICAgICAgICAgICBhZGRvbkJlZm9yZT1cIuuLieuEpOyehFwiIFxyXG4gICAgICAgICAgICAgIGVudGVyQnV0dG9uPVwi7IiY7KCVXCIgLz5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICApO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmlja25hbWVFZGl0Rm9ybTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/NicknameEditForm.js\n");

/***/ })

})