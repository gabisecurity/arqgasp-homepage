"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/logo */ \"./components/logo.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n\n\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nvar LinkItem = function(param) {\n    var href = param.href, path = param.path, children = param.children;\n    _s();\n    var active = path === href;\n    var inactiveColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue)(\"gray200\", \"whiteAlpha.900\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: href,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Link, {\n            p: 2,\n            bg: active ? \"glassTeal\" : undefinied,\n            color: active ? \"#202023\" : inactiveColor,\n            children: children\n        }, void 0, false, {\n            fileName: \"/Users/gabis/Desktop/arqgasp-homepage/components/navbar.js\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/gabis/Desktop/arqgasp-homepage/components/navbar.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, _this);\n};\n_s(LinkItem, \"dl0xx8ZlQuUn9JhHFu16yTlHTaE=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue\n    ];\n});\n_c = LinkItem;\nvar Navbar = function(props) {\n    _s1();\n    var path = props.path;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n        position: \"fixed\",\n        as: \"nav\",\n        w: \"100%\",\n        bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue)(\"#ffffff40\", \"#20202380\"),\n        style: {\n            backdropFilter: \"blur(10px\"\n        },\n        zIndex: 1\n    }, props), {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Container, {\n            display: \"flex\",\n            p: 2,\n            maxW: \"container.md\",\n            wrap: \"wrap\",\n            align: \"center\",\n            justify: \"space-between\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n                    align: \"center\",\n                    mr: 5,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                        as: \"h1\",\n                        size: \"lg\",\n                        letterSpacing: \"tighter\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_logo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/gabis/Desktop/arqgasp-homepage/components/navbar.js\",\n                            lineNumber: 53,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/gabis/Desktop/arqgasp-homepage/components/navbar.js\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/gabis/Desktop/arqgasp-homepage/components/navbar.js\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Stack, {\n                    direction: {\n                        base: \"column\",\n                        md: \"row\"\n                    },\n                    display: {\n                        base: \"none\",\n                        md: \"flex\"\n                    },\n                    width: {\n                        base: \"full\",\n                        md: \"auto\"\n                    },\n                    alignItems: \"center\",\n                    flexGrow: 1,\n                    mt: {\n                        base: 4\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/gabis/Desktop/arqgasp-homepage/components/navbar.js\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/gabis/Desktop/arqgasp-homepage/components/navbar.js\",\n            lineNumber: 48,\n            columnNumber: 7\n        }, _this)\n    }), void 0, false, {\n        fileName: \"/Users/gabis/Desktop/arqgasp-homepage/components/navbar.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, _this);\n};\n_s1(Navbar, \"3skuTHwppfEdh6aKNlffDjyTB8U=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue\n    ];\n});\n_c1 = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c, _c1;\n$RefreshReg$(_c, \"LinkItem\");\n$RefreshReg$(_c1, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdmJhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztBQUFxQztBQUNMO0FBY1A7QUFDd0I7O0FBRWpELElBQU1lLFFBQVEsR0FBRyxnQkFBOEI7UUFBM0JDLElBQUksU0FBSkEsSUFBSSxFQUFFQyxJQUFJLFNBQUpBLElBQUksRUFBRUMsUUFBUSxTQUFSQSxRQUFROztJQUN0QyxJQUFNQyxNQUFNLEdBQUdGLElBQUksS0FBS0QsSUFBSTtJQUM1QixJQUFNSSxhQUFhLEdBQUdQLG1FQUFpQixDQUFDLFNBQVMsRUFBRSxnQkFBZ0IsQ0FBQztJQUNwRSxxQkFDRSw4REFBQ1osa0RBQVE7UUFBQ2UsSUFBSSxFQUFFQSxJQUFJO2tCQUNsQiw0RUFBQ1osa0RBQUk7WUFDSGlCLENBQUMsRUFBRSxDQUFDO1lBQ0pDLEVBQUUsRUFBRUgsTUFBTSxHQUFHLFdBQVcsR0FBR0ksVUFBVTtZQUNyQ0MsS0FBSyxFQUFFTCxNQUFNLEdBQUcsU0FBUyxHQUFHQyxhQUFhO3NCQUV4Q0YsUUFBUTs7Ozs7aUJBQ0o7Ozs7O2FBQ0UsQ0FDWjtDQUNGO0dBZEtILFFBQVE7O1FBRVVGLCtEQUFpQjs7O0FBRm5DRSxLQUFBQSxRQUFRO0FBZ0JkLElBQU1VLE1BQU0sR0FBR0MsU0FBQUEsS0FBSyxFQUFJOztJQUN0QixJQUFNLElBQU0sR0FBS0EsS0FBSyxDQUFkVCxJQUFJO0lBRVoscUJBQ0UsOERBQUNkLGlEQUFHO1FBQ0Z3QixRQUFRLEVBQUMsT0FBTztRQUNoQkMsRUFBRSxFQUFDLEtBQUs7UUFDUkMsQ0FBQyxFQUFDLE1BQU07UUFDUlAsRUFBRSxFQUFFVCxtRUFBaUIsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDO1FBQy9DaUIsS0FBSyxFQUFFO1lBQUVDLGNBQWMsRUFBRSxXQUFXO1NBQUU7UUFDdENDLE1BQU0sRUFBRSxDQUFDO09BQ0xOLEtBQUs7a0JBRVQsNEVBQUN4Qix1REFBUztZQUFDK0IsT0FBTyxFQUFDLE1BQU07WUFBQ1osQ0FBQyxFQUFFLENBQUM7WUFBRWEsSUFBSSxFQUFDLGNBQWM7WUFDakRDLElBQUksRUFBQyxNQUFNO1lBQUNDLEtBQUssRUFBQyxRQUFRO1lBQUNDLE9BQU8sRUFBQyxlQUFlOzs4QkFFbEQsOERBQUM5QixrREFBSTtvQkFBQzZCLEtBQUssRUFBQyxRQUFRO29CQUFDRSxFQUFFLEVBQUUsQ0FBQzs4QkFDeEIsNEVBQUNoQyxxREFBTzt3QkFBQ3NCLEVBQUUsRUFBQyxJQUFJO3dCQUFDVyxJQUFJLEVBQUMsSUFBSTt3QkFBQ0MsYUFBYSxFQUFFLFNBQVM7a0NBQ2pELDRFQUFDeEMsd0RBQUk7Ozs7aUNBQUc7Ozs7OzZCQUNBOzs7Ozt5QkFDTDs4QkFFUCw4REFBQ0ssbURBQUs7b0JBQ0pvQyxTQUFTLEVBQUU7d0JBQUVDLElBQUksRUFBRSxRQUFRO3dCQUFFQyxFQUFFLEVBQUUsS0FBSztxQkFBRTtvQkFDeENWLE9BQU8sRUFBRTt3QkFBRVMsSUFBSSxFQUFFLE1BQU07d0JBQUVDLEVBQUUsRUFBRSxNQUFNO3FCQUFFO29CQUNyQ0MsS0FBSyxFQUFFO3dCQUFFRixJQUFJLEVBQUUsTUFBTTt3QkFBRUMsRUFBRSxFQUFFLE1BQU07cUJBQUU7b0JBQ25DRSxVQUFVLEVBQUMsUUFBUTtvQkFDbkJDLFFBQVEsRUFBRSxDQUFDO29CQUNYQyxFQUFFLEVBQUc7d0JBQUVMLElBQUksRUFBRSxDQUFDO3FCQUFDOzs7Ozt5QkFHUDs7Ozs7O2lCQUVBOzs7OzthQUVSLENBQ1A7Q0FDRjtJQXJDS2pCLE1BQU07O1FBUUZaLCtEQUFpQjs7O0FBUnJCWSxNQUFBQSxNQUFNO0FBdUNaLCtEQUFlQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbmF2YmFyLmpzPzViNWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExvZ28gZnJvbSAnLi4vY29tcG9uZW50cy9sb2dvJ1xuaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7XG4gIENvbnRhaW5lcixcbiAgQm94LFxuICBMaW5rLFxuICBTdGFjayxcbiAgSGVhZGluZyxcbiAgRmxleCxcbiAgTWVudSxcbiAgTWVudUl0ZW0sXG4gIE1lbnVMaXN0LFxuICBNZW51QnV0dG9uLFxuICBJY29uQnV0dG9uLFxuICB1c2VDb2xvck1vZGVWYWx1ZVxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgSHVtYnVyZ3Vlckljb24gfSBmcm9tICdAY2hha3JhLXVpL2ljb25zJ1xuXG5jb25zdCBMaW5rSXRlbSA9ICh7IGhyZWYsIHBhdGgsIGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgYWN0aXZlID0gcGF0aCA9PT0gaHJlZlxuICBjb25zdCBpbmFjdGl2ZUNvbG9yID0gdXNlQ29sb3JNb2RlVmFsdWUoJ2dyYXkyMDAnLCAnd2hpdGVBbHBoYS45MDAnKVxuICByZXR1cm4gKFxuICAgIDxOZXh0TGluayBocmVmPXtocmVmfT5cbiAgICAgIDxMaW5rXG4gICAgICAgIHA9ezJ9XG4gICAgICAgIGJnPXthY3RpdmUgPyAnZ2xhc3NUZWFsJyA6IHVuZGVmaW5pZWR9XG4gICAgICAgIGNvbG9yPXthY3RpdmUgPyAnIzIwMjAyMycgOiBpbmFjdGl2ZUNvbG9yfVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L0xpbms+XG4gICAgPC9OZXh0TGluaz5cbiAgKVxufVxuXG5jb25zdCBOYXZiYXIgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHsgcGF0aCB9ID0gcHJvcHNcblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHBvc2l0aW9uPVwiZml4ZWRcIlxuICAgICAgYXM9XCJuYXZcIlxuICAgICAgdz1cIjEwMCVcIlxuICAgICAgYmc9e3VzZUNvbG9yTW9kZVZhbHVlKCcjZmZmZmZmNDAnLCAnIzIwMjAyMzgwJyl9XG4gICAgICBzdHlsZT17eyBiYWNrZHJvcEZpbHRlcjogJ2JsdXIoMTBweCcgfX1cbiAgICAgIHpJbmRleD17MX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8Q29udGFpbmVyIGRpc3BsYXk9XCJmbGV4XCIgcD17Mn0gbWF4Vz1cImNvbnRhaW5lci5tZFwiXG4gICAgICAgIHdyYXA9XCJ3cmFwXCIgYWxpZ249XCJjZW50ZXJcIiBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiPlxuXG4gICAgICAgIDxGbGV4IGFsaWduPVwiY2VudGVyXCIgbXI9ezV9PlxuICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDFcIiBzaXplPVwibGdcIiBsZXR0ZXJTcGFjaW5nPXsndGlnaHRlcid9PlxuICAgICAgICAgICAgPExvZ28gLz5cbiAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgIDwvRmxleD5cblxuICAgICAgICA8U3RhY2tcbiAgICAgICAgICBkaXJlY3Rpb249e3sgYmFzZTogJ2NvbHVtbicsIG1kOiAncm93JyB9fVxuICAgICAgICAgIGRpc3BsYXk9e3sgYmFzZTogJ25vbmUnLCBtZDogJ2ZsZXgnIH19XG4gICAgICAgICAgd2lkdGg9e3sgYmFzZTogJ2Z1bGwnLCBtZDogJ2F1dG8nIH19XG4gICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgZmxleEdyb3c9ezF9XG4gICAgICAgICAgbXQ9eyB7IGJhc2U6IDR9fVxuICAgICAgICAgID5cblxuICAgICAgICAgIDwvU3RhY2s+XG5cbiAgICAgIDwvQ29udGFpbmVyPlxuXG4gICAgPC9Cb3g+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyIl0sIm5hbWVzIjpbIkxvZ28iLCJOZXh0TGluayIsIkNvbnRhaW5lciIsIkJveCIsIkxpbmsiLCJTdGFjayIsIkhlYWRpbmciLCJGbGV4IiwiTWVudSIsIk1lbnVJdGVtIiwiTWVudUxpc3QiLCJNZW51QnV0dG9uIiwiSWNvbkJ1dHRvbiIsInVzZUNvbG9yTW9kZVZhbHVlIiwiSHVtYnVyZ3Vlckljb24iLCJMaW5rSXRlbSIsImhyZWYiLCJwYXRoIiwiY2hpbGRyZW4iLCJhY3RpdmUiLCJpbmFjdGl2ZUNvbG9yIiwicCIsImJnIiwidW5kZWZpbmllZCIsImNvbG9yIiwiTmF2YmFyIiwicHJvcHMiLCJwb3NpdGlvbiIsImFzIiwidyIsInN0eWxlIiwiYmFja2Ryb3BGaWx0ZXIiLCJ6SW5kZXgiLCJkaXNwbGF5IiwibWF4VyIsIndyYXAiLCJhbGlnbiIsImp1c3RpZnkiLCJtciIsInNpemUiLCJsZXR0ZXJTcGFjaW5nIiwiZGlyZWN0aW9uIiwiYmFzZSIsIm1kIiwid2lkdGgiLCJhbGlnbkl0ZW1zIiwiZmxleEdyb3ciLCJtdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/navbar.js\n"));

/***/ })

});