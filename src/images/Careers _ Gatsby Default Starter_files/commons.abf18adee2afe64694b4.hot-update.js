webpackHotUpdate("commons",{

/***/ "./src/pages/careers.js":
/*!******************************!*\
  !*** ./src/pages/careers.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/seo */ "./src/components/seo.js");
/* harmony import */ var _components_JobCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/JobCard */ "./src/components/JobCard.js");




var _this = undefined,
    _jsxFileName = "/Users/joshua/thecareerguys/thecareerguys/src/pages/careers.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};






var Search = function Search(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, "Try searching.. "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    value: value,
    onChange: onChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }));
};

var CareersPage = function CareersPage() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      searchTerm = _useState[0],
      setSearchTerm = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      results = _useState2[0],
      setResults = _useState2[1];

  var handleNewSearch = function handleNewSearch(e) {
    var value = e.target.value;
    setSearchTerm(value);
    console.log(searchTerm);
    fetchData();
  }; // Client-side Runtime Data Fetching


  function fetchData() {
    return _fetchData.apply(this, arguments);
  }

  function _fetchData() {
    _fetchData = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // get data from GitHub api
              fetch("http://api.lmiforall.org.uk/api/v1/soc/search?q=" + searchTerm).then(function (response) {
                return response.json();
              }) // parse JSON from request
              .then(function (resultData) {
                setResults(resultData);
              }); // set data for the number of stars

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _fetchData.apply(this, arguments);
  }

  var resultsFiltered = results.filter(function (result, idx) {
    return idx < 10;
  });
  var len = resultsFiltered.length;
  console.log('Results:', resultsFiltered);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_seo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Careers",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, "Popular Careers"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Search, {
    value: searchTerm,
    onChange: handleNewSearch,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }), resultsFiltered && len > 0 ? resultsFiltered.map(function (result) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_JobCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: result.title,
      soc: result.soc,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 13
      }
    });
  }) : 'No results found');
};

__signature__(CareersPage, "useState{[ searchTerm, setSearchTerm ]('')}\nuseState{[ results, setResults ]([])}");

var _default = CareersPage;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Search, "Search", "/Users/joshua/thecareerguys/thecareerguys/src/pages/careers.js");
  reactHotLoader.register(CareersPage, "CareersPage", "/Users/joshua/thecareerguys/thecareerguys/src/pages/careers.js");
  reactHotLoader.register(_default, "default", "/Users/joshua/thecareerguys/thecareerguys/src/pages/careers.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=commons.abf18adee2afe64694b4.hot-update.js.map