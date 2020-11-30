webpackHotUpdate("commons",{

/***/ "./src/components/ArgsJobCard.js":
false,

/***/ "./src/components/JobCard.js":
/*!***********************************!*\
  !*** ./src/components/JobCard.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteralLoose */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteralLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var animate_css_styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! animate-css-styled-components */ "./node_modules/animate-css-styled-components/lib/index.js");
/* harmony import */ var animate_css_styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(animate_css_styled_components__WEBPACK_IMPORTED_MODULE_4__);


var _this = undefined,
    _jsxFileName = "/Users/joshua/thecareerguys/thecareerguys/src/components/JobCard.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background: white;\n  border: 1px solid black;\n  border-radius: 3px;\n  padding: 1%;\n  margin: 5px;\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 45%;\n  flex-wrap: wrap;\n\n  .title {\n    font-family: 'Raleway';\n    font-weight: 600;\n  }\n\n  a {\n    display: block;\n    padding: 8px;\n    border: 1px solid black;\n    border-radius: 1px;\n    width: 100%;\n    margin: auto;\n\n    font-family: 'Raleway';\n    font-weight: 700;\n    text-decoration: none;\n    background-color: #448aff;\n    color: #fff;\n    text-align: center;\n\n    box-shadow: 0 1px 1px rgba(0,0,0,0.25), \n              0 2px 2px rgba(0,0,0,0.20), \n              0 4px 4px rgba(0,0,0,0.15), \n              0 8px 8px rgba(0,0,0,0.10),\n              0 16px 16px rgba(0,0,0,0.05);\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-wrap: wrap;\n  flex: 1 1 45%;\n\n  margin: 5px auto;\n\n  @media screen and (max-width: 800px) {\n    flex-basis: 100%;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};





var StyledFadeIn = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(animate_css_styled_components__WEBPACK_IMPORTED_MODULE_4__["FadeIn"])(_templateObject());
var StyledJobCard = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject2());

var JobCard = function JobCard(_ref) {
  var soc = _ref.soc,
      title = _ref.title;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledFadeIn, {
    duration: "0.8s",
    delay: "0s",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledJobCard, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    class: "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    class: "salary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, "Average UK Salary: \xA345,000"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/job?soc=" + soc,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, "Learn More")));
};

var _default = JobCard;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(StyledFadeIn, "StyledFadeIn", "/Users/joshua/thecareerguys/thecareerguys/src/components/JobCard.js");
  reactHotLoader.register(StyledJobCard, "StyledJobCard", "/Users/joshua/thecareerguys/thecareerguys/src/components/JobCard.js");
  reactHotLoader.register(JobCard, "JobCard", "/Users/joshua/thecareerguys/thecareerguys/src/components/JobCard.js");
  reactHotLoader.register(_default, "default", "/Users/joshua/thecareerguys/thecareerguys/src/components/JobCard.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/JobCardContainer.js":
/*!********************************************!*\
  !*** ./src/components/JobCardContainer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return JobCardContainer; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteralLoose */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteralLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _JobCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./JobCard */ "./src/components/JobCard.js");
/* harmony import */ var _MoreButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MoreButton */ "./src/components/MoreButton.js");

var _jsxFileName = "/Users/joshua/thecareerguys/thecareerguys/src/components/JobCardContainer.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-wrap: wrap;\n\n  .jobcard {\n    flex: 1 1 40%;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};





var StyledJobCardContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
function JobCardContainer() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      showAll = _useState[0],
      setShowAll = _useState[1];

  var handleClick = function handleClick(e) {
    e.preventDefault();
    setShowAll(true);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledJobCardContainer, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_JobCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    class: "jobcard",
    title: 'Design and development engineers',
    soc: 2126,
    salary: 0,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_JobCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    class: "jobcard",
    title: 'Architects',
    soc: 2431,
    salary: 0,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_JobCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    class: "jobcard",
    title: 'Graphic designers',
    soc: 3421,
    salary: 0,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_JobCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    class: "jobcard",
    title: 'Dancers and choreographers',
    soc: 3414,
    salary: 0,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }), showAll ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_JobCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    class: "jobcard",
    title: 'Programmers and software development professionals',
    soc: 2136,
    salary: 0,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_JobCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    class: "jobcard",
    title: 'Chefs',
    soc: 5434,
    salary: 0,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_JobCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    class: "jobcard",
    title: 'Web design and development professionals',
    soc: 2137,
    salary: 0,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_JobCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    class: "jobcard",
    title: 'Dental practitioners',
    soc: 2215,
    salary: 0,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MoreButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "Show more",
    onClick: handleClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  })));
}

__signature__(JobCardContainer, "useState{[ showAll, setShowAll ](false)}");

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(StyledJobCardContainer, "StyledJobCardContainer", "/Users/joshua/thecareerguys/thecareerguys/src/components/JobCardContainer.js");
  reactHotLoader.register(JobCardContainer, "JobCardContainer", "/Users/joshua/thecareerguys/thecareerguys/src/components/JobCardContainer.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

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
//# sourceMappingURL=commons.80841fceebd1dffa82af.hot-update.js.map