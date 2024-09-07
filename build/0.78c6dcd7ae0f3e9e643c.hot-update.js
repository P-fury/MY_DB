self["webpackHotUpdateredux"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31);
/* harmony import */ var _components_SearchEngine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47);



var Main = function Main() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_SearchEngine__WEBPACK_IMPORTED_MODULE_2__.SearchEngine, null);
};
react_dom__WEBPACK_IMPORTED_MODULE_1__.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Main, null), document.getElementById("app"));

/***/ }),

/***/ 52:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MovieDetails": () => (/* binding */ MovieDetails)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);

var MovieDetails = function MovieDetails(_ref) {
  var movieData = _ref.movieData,
    isLoading = _ref.isLoading,
    error = _ref.error;
  if (isLoading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "szukam...");
  }
  if (error) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "B\u0142\u0105d: ", error);
  }
  if (movieData) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, movieData.Title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Rok wydania: ", movieData.Year), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Re\u017Cyser: ", movieData.Director), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Opis: ", movieData.Plot));
  }
  return null;
};

/***/ }),

/***/ 47:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchEngine": () => (/* binding */ SearchEngine)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24);
/* harmony import */ var _SearchForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40);
/* harmony import */ var _MovieDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52);






var SearchEngine = function SearchEngine() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
    movieData = _useState2[0],
    setMovieData = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
    _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
    isLoading = _useState4[0],
    setIsLoading = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),
    _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
    error = _useState6[0],
    setError = _useState6[1];
  var fetchMovies = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(movieName) {
      var response, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            setIsLoading(true);
            setError(null);
            _context.prev = 2;
            _context.next = 5;
            return fetch("http://www.omdbapi.com/?t=".concat(movieName, "&apikey=d0361b28"));
          case 5:
            response = _context.sent;
            _context.next = 8;
            return response.json();
          case 8:
            data = _context.sent;
            if (!(data.Response === "False")) {
              _context.next = 11;
              break;
            }
            throw new Error("Film nie został znaleziony");
          case 11:
            setMovieData(data);
            _context.next = 17;
            break;
          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](2);
            setError(_context.t0.message);
          case 17:
            _context.prev = 17;
            setIsLoading(false);
            return _context.finish(17);
          case 20:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[2, 14, 17, 20]]);
    }));
    return function fetchMovies(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_SearchForm__WEBPACK_IMPORTED_MODULE_4__.SearchForm, {
    onSearch: fetchMovies
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_MovieDetails__WEBPACK_IMPORTED_MODULE_5__.MovieDetails, {
    movieData: movieData,
    isLoading: isLoading,
    error: error
  }));
};

/***/ }),

/***/ 50:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(51)["default"]);
function _regeneratorRuntime() {
  "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 51:
/***/ ((module) => {

function _typeof(o) {
  "@babel/helpers - typeof";

  return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 49:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(50)();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ 48:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("90594ef7b65484a21147")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43OGM2ZGNkN2FlMGYzZTllNjQzYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFDTztBQUV1QjtBQUV4RCxJQUFNRyxJQUFJLEdBQUcsU0FBUEEsSUFBSUEsQ0FBQSxFQUFTO0VBQ2Ysb0JBQU9ILGdEQUFBLENBQUNFLGtFQUFZLE1BQUUsQ0FBQztBQUMzQixDQUFDO0FBRURELDZDQUFlLGNBQUNELGdEQUFBLENBQUNHLElBQUksTUFBRSxDQUFDLEVBQUVHLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7O0FDVC9CO0FBRW5CLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFBQyxJQUFBLEVBQXdDO0VBQUEsSUFBbENDLFNBQVMsR0FBQUQsSUFBQSxDQUFUQyxTQUFTO0lBQUVDLFNBQVMsR0FBQUYsSUFBQSxDQUFURSxTQUFTO0lBQUVDLEtBQUssR0FBQUgsSUFBQSxDQUFMRyxLQUFLO0VBQ3RELElBQUlELFNBQVMsRUFBRTtJQUNYLG9CQUFPWCxnREFBQSxhQUFJLFdBQWEsQ0FBQztFQUM3QjtFQUVBLElBQUlZLEtBQUssRUFBRTtJQUNQLG9CQUFPWixnREFBQSxhQUFJLGtCQUFNLEVBQUNZLEtBQVUsQ0FBQztFQUNqQztFQUVBLElBQUlGLFNBQVMsRUFBRTtJQUNYLG9CQUNJVixnREFBQSwyQkFDSUEsZ0RBQUEsYUFBS1UsU0FBUyxDQUFDRyxLQUFVLENBQUMsZUFDMUJiLGdEQUFBLFlBQUcsZUFBYSxFQUFDVSxTQUFTLENBQUNJLElBQVEsQ0FBQyxlQUNwQ2QsZ0RBQUEsWUFBRyxnQkFBUyxFQUFDVSxTQUFTLENBQUNLLFFBQVksQ0FBQyxlQUNwQ2YsZ0RBQUEsWUFBRyxRQUFNLEVBQUNVLFNBQVMsQ0FBQ00sSUFBUSxDQUMzQixDQUFDO0VBRWQ7RUFFQSxPQUFPLElBQUk7QUFDZixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJ1QztBQUNFO0FBQ0k7QUFFdkMsSUFB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QUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsYUFBYTtBQUNiLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQ7QUFDMUQ7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixlQUFlO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0Esc0NBQXNDLHlCQUF5QixTQUFTLHlCQUF5Qjs7Ozs7OztBQy9Takc7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsR0FBRyxFQUFFLHlCQUF5QixTQUFTLHlCQUF5QjtBQUNoRTtBQUNBLDBCQUEwQix5QkFBeUIsU0FBUyx5QkFBeUI7Ozs7Ozs7QUNUckY7O0FBRUEsY0FBYyxtQkFBTyxDQUFDLEVBQStCO0FBQ3JEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7O1VDeEJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVkdXgvLi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vcmVkdXgvLi9qcy9jb21wb25lbnRzL01vdmllRGV0YWlscy5qcyIsIndlYnBhY2s6Ly9yZWR1eC8uL2pzL2NvbXBvbmVudHMvU2VhcmNoRW5naW5lLmpzIiwid2VicGFjazovL3JlZHV4Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcmVnZW5lcmF0b3JSdW50aW1lLmpzIiwid2VicGFjazovL3JlZHV4Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL3JlZHV4Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovL3JlZHV4Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vcmVkdXgvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5cbmltcG9ydCB7IFNlYXJjaEVuZ2luZX0gZnJvbSBcIi4vY29tcG9uZW50cy9TZWFyY2hFbmdpbmVcIjtcblxuY29uc3QgTWFpbiA9ICgpID0+IHtcbiAgICByZXR1cm4gPFNlYXJjaEVuZ2luZSAvPjtcbn07XG5cblJlYWN0RE9NLnJlbmRlcig8TWFpbiAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikpO1xuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBNb3ZpZURldGFpbHMgPSAoeyBtb3ZpZURhdGEsIGlzTG9hZGluZywgZXJyb3IgfSkgPT4ge1xuICAgIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgICAgcmV0dXJuIDxoND5zenVrYW0uLi48L2g0PjtcbiAgICB9XG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIDxoND5CxYLEhWQ6IHtlcnJvcn08L2g0PjtcbiAgICB9XG5cbiAgICBpZiAobW92aWVEYXRhKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMj57bW92aWVEYXRhLlRpdGxlfTwvaDI+XG4gICAgICAgICAgICAgICAgPHA+Um9rIHd5ZGFuaWE6IHttb3ZpZURhdGEuWWVhcn08L3A+XG4gICAgICAgICAgICAgICAgPHA+UmXFvHlzZXI6IHttb3ZpZURhdGEuRGlyZWN0b3J9PC9wPlxuICAgICAgICAgICAgICAgIDxwPk9waXM6IHttb3ZpZURhdGEuUGxvdH08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFNlYXJjaEZvcm0gfSBmcm9tIFwiLi9TZWFyY2hGb3JtXCI7XG5pbXBvcnQgeyBNb3ZpZURldGFpbHMgfSBmcm9tIFwiLi9Nb3ZpZURldGFpbHNcIjtcblxuZXhwb3J0IGNvbnN0IFNlYXJjaEVuZ2luZSA9ICgpID0+IHtcbiAgICBjb25zdCBbbW92aWVEYXRhLCBzZXRNb3ZpZURhdGFdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgY29uc3QgZmV0Y2hNb3ZpZXMgPSBhc3luYyAobW92aWVOYW1lKSA9PiB7XG4gICAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICAgICAgc2V0RXJyb3IobnVsbCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vd3d3Lm9tZGJhcGkuY29tLz90PSR7bW92aWVOYW1lfSZhcGlrZXk9ZDAzNjFiMjhgKTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgICAgIGlmIChkYXRhLlJlc3BvbnNlID09PSBcIkZhbHNlXCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGaWxtIG5pZSB6b3N0YcWCIHpuYWxlemlvbnlcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNldE1vdmllRGF0YShkYXRhKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBzZXRFcnJvcihlcnIubWVzc2FnZSk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8U2VhcmNoRm9ybSBvblNlYXJjaD17ZmV0Y2hNb3ZpZXN9IC8+XG4gICAgICAgICAgICA8TW92aWVEZXRhaWxzIG1vdmllRGF0YT17bW92aWVEYXRhfSBpc0xvYWRpbmc9e2lzTG9hZGluZ30gZXJyb3I9e2Vycm9yfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcbiIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4vdHlwZW9mLmpzXCIpW1wiZGVmYXVsdFwiXTtcbmZ1bmN0aW9uIF9yZWdlbmVyYXRvclJ1bnRpbWUoKSB7XG4gIFwidXNlIHN0cmljdFwiOyAvKiEgcmVnZW5lcmF0b3ItcnVudGltZSAtLSBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy4gLS0gbGljZW5zZSAoTUlUKTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2Jsb2IvbWFpbi9MSUNFTlNFICovXG4gIG1vZHVsZS5leHBvcnRzID0gX3JlZ2VuZXJhdG9yUnVudGltZSA9IGZ1bmN0aW9uIF9yZWdlbmVyYXRvclJ1bnRpbWUoKSB7XG4gICAgcmV0dXJuIGU7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgdmFyIHQsXG4gICAgZSA9IHt9LFxuICAgIHIgPSBPYmplY3QucHJvdG90eXBlLFxuICAgIG4gPSByLmhhc093blByb3BlcnR5LFxuICAgIG8gPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgfHwgZnVuY3Rpb24gKHQsIGUsIHIpIHtcbiAgICAgIHRbZV0gPSByLnZhbHVlO1xuICAgIH0sXG4gICAgaSA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sID8gU3ltYm9sIDoge30sXG4gICAgYSA9IGkuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCIsXG4gICAgYyA9IGkuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiLFxuICAgIHUgPSBpLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuICBmdW5jdGlvbiBkZWZpbmUodCwgZSwgcikge1xuICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgZSwge1xuICAgICAgdmFsdWU6IHIsXG4gICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgIGNvbmZpZ3VyYWJsZTogITAsXG4gICAgICB3cml0YWJsZTogITBcbiAgICB9KSwgdFtlXTtcbiAgfVxuICB0cnkge1xuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKHQpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbiBkZWZpbmUodCwgZSwgcikge1xuICAgICAgcmV0dXJuIHRbZV0gPSByO1xuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gd3JhcCh0LCBlLCByLCBuKSB7XG4gICAgdmFyIGkgPSBlICYmIGUucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gZSA6IEdlbmVyYXRvcixcbiAgICAgIGEgPSBPYmplY3QuY3JlYXRlKGkucHJvdG90eXBlKSxcbiAgICAgIGMgPSBuZXcgQ29udGV4dChuIHx8IFtdKTtcbiAgICByZXR1cm4gbyhhLCBcIl9pbnZva2VcIiwge1xuICAgICAgdmFsdWU6IG1ha2VJbnZva2VNZXRob2QodCwgciwgYylcbiAgICB9KSwgYTtcbiAgfVxuICBmdW5jdGlvbiB0cnlDYXRjaCh0LCBlLCByKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFwibm9ybWFsXCIsXG4gICAgICAgIGFyZzogdC5jYWxsKGUsIHIpXG4gICAgICB9O1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFwidGhyb3dcIixcbiAgICAgICAgYXJnOiB0XG4gICAgICB9O1xuICAgIH1cbiAgfVxuICBlLndyYXAgPSB3cmFwO1xuICB2YXIgaCA9IFwic3VzcGVuZGVkU3RhcnRcIixcbiAgICBsID0gXCJzdXNwZW5kZWRZaWVsZFwiLFxuICAgIGYgPSBcImV4ZWN1dGluZ1wiLFxuICAgIHMgPSBcImNvbXBsZXRlZFwiLFxuICAgIHkgPSB7fTtcbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG4gIHZhciBwID0ge307XG4gIGRlZmluZShwLCBhLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuICB2YXIgZCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZixcbiAgICB2ID0gZCAmJiBkKGQodmFsdWVzKFtdKSkpO1xuICB2ICYmIHYgIT09IHIgJiYgbi5jYWxsKHYsIGEpICYmIChwID0gdik7XG4gIHZhciBnID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID0gR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUocCk7XG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyh0KSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIGRlZmluZSh0LCBlLCBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKGUsIHQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcih0LCBlKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKHIsIG8sIGksIGEpIHtcbiAgICAgIHZhciBjID0gdHJ5Q2F0Y2godFtyXSwgdCwgbyk7XG4gICAgICBpZiAoXCJ0aHJvd1wiICE9PSBjLnR5cGUpIHtcbiAgICAgICAgdmFyIHUgPSBjLmFyZyxcbiAgICAgICAgICBoID0gdS52YWx1ZTtcbiAgICAgICAgcmV0dXJuIGggJiYgXCJvYmplY3RcIiA9PSBfdHlwZW9mKGgpICYmIG4uY2FsbChoLCBcIl9fYXdhaXRcIikgPyBlLnJlc29sdmUoaC5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB0LCBpLCBhKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCB0LCBpLCBhKTtcbiAgICAgICAgfSkgOiBlLnJlc29sdmUoaCkudGhlbihmdW5jdGlvbiAodCkge1xuICAgICAgICAgIHUudmFsdWUgPSB0LCBpKHUpO1xuICAgICAgICB9LCBmdW5jdGlvbiAodCkge1xuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCB0LCBpLCBhKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBhKGMuYXJnKTtcbiAgICB9XG4gICAgdmFyIHI7XG4gICAgbyh0aGlzLCBcIl9pbnZva2VcIiwge1xuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKHQsIG4pIHtcbiAgICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBlKGZ1bmN0aW9uIChlLCByKSB7XG4gICAgICAgICAgICBpbnZva2UodCwgbiwgZSwgcik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHIgPSByID8gci50aGVuKGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLCBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZykgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoZSwgciwgbikge1xuICAgIHZhciBvID0gaDtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGksIGEpIHtcbiAgICAgIGlmIChvID09PSBmKSB0aHJvdyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICBpZiAobyA9PT0gcykge1xuICAgICAgICBpZiAoXCJ0aHJvd1wiID09PSBpKSB0aHJvdyBhO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHZhbHVlOiB0LFxuICAgICAgICAgIGRvbmU6ICEwXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBmb3IgKG4ubWV0aG9kID0gaSwgbi5hcmcgPSBhOzspIHtcbiAgICAgICAgdmFyIGMgPSBuLmRlbGVnYXRlO1xuICAgICAgICBpZiAoYykge1xuICAgICAgICAgIHZhciB1ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShjLCBuKTtcbiAgICAgICAgICBpZiAodSkge1xuICAgICAgICAgICAgaWYgKHUgPT09IHkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIHU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChcIm5leHRcIiA9PT0gbi5tZXRob2QpIG4uc2VudCA9IG4uX3NlbnQgPSBuLmFyZztlbHNlIGlmIChcInRocm93XCIgPT09IG4ubWV0aG9kKSB7XG4gICAgICAgICAgaWYgKG8gPT09IGgpIHRocm93IG8gPSBzLCBuLmFyZztcbiAgICAgICAgICBuLmRpc3BhdGNoRXhjZXB0aW9uKG4uYXJnKTtcbiAgICAgICAgfSBlbHNlIFwicmV0dXJuXCIgPT09IG4ubWV0aG9kICYmIG4uYWJydXB0KFwicmV0dXJuXCIsIG4uYXJnKTtcbiAgICAgICAgbyA9IGY7XG4gICAgICAgIHZhciBwID0gdHJ5Q2F0Y2goZSwgciwgbik7XG4gICAgICAgIGlmIChcIm5vcm1hbFwiID09PSBwLnR5cGUpIHtcbiAgICAgICAgICBpZiAobyA9IG4uZG9uZSA/IHMgOiBsLCBwLmFyZyA9PT0geSkgY29udGludWU7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiBwLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IG4uZG9uZVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgXCJ0aHJvd1wiID09PSBwLnR5cGUgJiYgKG8gPSBzLCBuLm1ldGhvZCA9IFwidGhyb3dcIiwgbi5hcmcgPSBwLmFyZyk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGUsIHIpIHtcbiAgICB2YXIgbiA9IHIubWV0aG9kLFxuICAgICAgbyA9IGUuaXRlcmF0b3Jbbl07XG4gICAgaWYgKG8gPT09IHQpIHJldHVybiByLmRlbGVnYXRlID0gbnVsbCwgXCJ0aHJvd1wiID09PSBuICYmIGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0gJiYgKHIubWV0aG9kID0gXCJyZXR1cm5cIiwgci5hcmcgPSB0LCBtYXliZUludm9rZURlbGVnYXRlKGUsIHIpLCBcInRocm93XCIgPT09IHIubWV0aG9kKSB8fCBcInJldHVyblwiICE9PSBuICYmIChyLm1ldGhvZCA9IFwidGhyb3dcIiwgci5hcmcgPSBuZXcgVHlwZUVycm9yKFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAnXCIgKyBuICsgXCInIG1ldGhvZFwiKSksIHk7XG4gICAgdmFyIGkgPSB0cnlDYXRjaChvLCBlLml0ZXJhdG9yLCByLmFyZyk7XG4gICAgaWYgKFwidGhyb3dcIiA9PT0gaS50eXBlKSByZXR1cm4gci5tZXRob2QgPSBcInRocm93XCIsIHIuYXJnID0gaS5hcmcsIHIuZGVsZWdhdGUgPSBudWxsLCB5O1xuICAgIHZhciBhID0gaS5hcmc7XG4gICAgcmV0dXJuIGEgPyBhLmRvbmUgPyAocltlLnJlc3VsdE5hbWVdID0gYS52YWx1ZSwgci5uZXh0ID0gZS5uZXh0TG9jLCBcInJldHVyblwiICE9PSByLm1ldGhvZCAmJiAoci5tZXRob2QgPSBcIm5leHRcIiwgci5hcmcgPSB0KSwgci5kZWxlZ2F0ZSA9IG51bGwsIHkpIDogYSA6IChyLm1ldGhvZCA9IFwidGhyb3dcIiwgci5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIiksIHIuZGVsZWdhdGUgPSBudWxsLCB5KTtcbiAgfVxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkodCkge1xuICAgIHZhciBlID0ge1xuICAgICAgdHJ5TG9jOiB0WzBdXG4gICAgfTtcbiAgICAxIGluIHQgJiYgKGUuY2F0Y2hMb2MgPSB0WzFdKSwgMiBpbiB0ICYmIChlLmZpbmFsbHlMb2MgPSB0WzJdLCBlLmFmdGVyTG9jID0gdFszXSksIHRoaXMudHJ5RW50cmllcy5wdXNoKGUpO1xuICB9XG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkodCkge1xuICAgIHZhciBlID0gdC5jb21wbGV0aW9uIHx8IHt9O1xuICAgIGUudHlwZSA9IFwibm9ybWFsXCIsIGRlbGV0ZSBlLmFyZywgdC5jb21wbGV0aW9uID0gZTtcbiAgfVxuICBmdW5jdGlvbiBDb250ZXh0KHQpIHtcbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbe1xuICAgICAgdHJ5TG9jOiBcInJvb3RcIlxuICAgIH1dLCB0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKSwgdGhpcy5yZXNldCghMCk7XG4gIH1cbiAgZnVuY3Rpb24gdmFsdWVzKGUpIHtcbiAgICBpZiAoZSB8fCBcIlwiID09PSBlKSB7XG4gICAgICB2YXIgciA9IGVbYV07XG4gICAgICBpZiAocikgcmV0dXJuIHIuY2FsbChlKTtcbiAgICAgIGlmIChcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGUubmV4dCkgcmV0dXJuIGU7XG4gICAgICBpZiAoIWlzTmFOKGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgbyA9IC0xLFxuICAgICAgICAgIGkgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgICAgZm9yICg7ICsrbyA8IGUubGVuZ3RoOykgaWYgKG4uY2FsbChlLCBvKSkgcmV0dXJuIG5leHQudmFsdWUgPSBlW29dLCBuZXh0LmRvbmUgPSAhMSwgbmV4dDtcbiAgICAgICAgICAgIHJldHVybiBuZXh0LnZhbHVlID0gdCwgbmV4dC5kb25lID0gITAsIG5leHQ7XG4gICAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGkubmV4dCA9IGk7XG4gICAgICB9XG4gICAgfVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoX3R5cGVvZihlKSArIFwiIGlzIG5vdCBpdGVyYWJsZVwiKTtcbiAgfVxuICByZXR1cm4gR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIG8oZywgXCJjb25zdHJ1Y3RvclwiLCB7XG4gICAgdmFsdWU6IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIGNvbmZpZ3VyYWJsZTogITBcbiAgfSksIG8oR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIFwiY29uc3RydWN0b3JcIiwge1xuICAgIHZhbHVlOiBHZW5lcmF0b3JGdW5jdGlvbixcbiAgICBjb25maWd1cmFibGU6ICEwXG4gIH0pLCBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgdSwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKSwgZS5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24gKHQpIHtcbiAgICB2YXIgZSA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgdCAmJiB0LmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiAhIWUgJiYgKGUgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8IFwiR2VuZXJhdG9yRnVuY3Rpb25cIiA9PT0gKGUuZGlzcGxheU5hbWUgfHwgZS5uYW1lKSk7XG4gIH0sIGUubWFyayA9IGZ1bmN0aW9uICh0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZih0LCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSkgOiAodC5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgZGVmaW5lKHQsIHUsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIikpLCB0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoZyksIHQ7XG4gIH0sIGUuYXdyYXAgPSBmdW5jdGlvbiAodCkge1xuICAgIHJldHVybiB7XG4gICAgICBfX2F3YWl0OiB0XG4gICAgfTtcbiAgfSwgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKSwgZGVmaW5lKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlLCBjLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pLCBlLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yLCBlLmFzeW5jID0gZnVuY3Rpb24gKHQsIHIsIG4sIG8sIGkpIHtcbiAgICB2b2lkIDAgPT09IGkgJiYgKGkgPSBQcm9taXNlKTtcbiAgICB2YXIgYSA9IG5ldyBBc3luY0l0ZXJhdG9yKHdyYXAodCwgciwgbiwgbyksIGkpO1xuICAgIHJldHVybiBlLmlzR2VuZXJhdG9yRnVuY3Rpb24ocikgPyBhIDogYS5uZXh0KCkudGhlbihmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIHQuZG9uZSA/IHQudmFsdWUgOiBhLm5leHQoKTtcbiAgICB9KTtcbiAgfSwgZGVmaW5lSXRlcmF0b3JNZXRob2RzKGcpLCBkZWZpbmUoZywgdSwgXCJHZW5lcmF0b3JcIiksIGRlZmluZShnLCBhLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pLCBkZWZpbmUoZywgXCJ0b1N0cmluZ1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH0pLCBlLmtleXMgPSBmdW5jdGlvbiAodCkge1xuICAgIHZhciBlID0gT2JqZWN0KHQpLFxuICAgICAgciA9IFtdO1xuICAgIGZvciAodmFyIG4gaW4gZSkgci5wdXNoKG4pO1xuICAgIHJldHVybiByLnJldmVyc2UoKSwgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIGZvciAoOyByLmxlbmd0aDspIHtcbiAgICAgICAgdmFyIHQgPSByLnBvcCgpO1xuICAgICAgICBpZiAodCBpbiBlKSByZXR1cm4gbmV4dC52YWx1ZSA9IHQsIG5leHQuZG9uZSA9ICExLCBuZXh0O1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5leHQuZG9uZSA9ICEwLCBuZXh0O1xuICAgIH07XG4gIH0sIGUudmFsdWVzID0gdmFsdWVzLCBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcbiAgICByZXNldDogZnVuY3Rpb24gcmVzZXQoZSkge1xuICAgICAgaWYgKHRoaXMucHJldiA9IDAsIHRoaXMubmV4dCA9IDAsIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB0LCB0aGlzLmRvbmUgPSAhMSwgdGhpcy5kZWxlZ2F0ZSA9IG51bGwsIHRoaXMubWV0aG9kID0gXCJuZXh0XCIsIHRoaXMuYXJnID0gdCwgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSksICFlKSBmb3IgKHZhciByIGluIHRoaXMpIFwidFwiID09PSByLmNoYXJBdCgwKSAmJiBuLmNhbGwodGhpcywgcikgJiYgIWlzTmFOKCtyLnNsaWNlKDEpKSAmJiAodGhpc1tyXSA9IHQpO1xuICAgIH0sXG4gICAgc3RvcDogZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgIHRoaXMuZG9uZSA9ICEwO1xuICAgICAgdmFyIHQgPSB0aGlzLnRyeUVudHJpZXNbMF0uY29tcGxldGlvbjtcbiAgICAgIGlmIChcInRocm93XCIgPT09IHQudHlwZSkgdGhyb3cgdC5hcmc7XG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uIGRpc3BhdGNoRXhjZXB0aW9uKGUpIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHRocm93IGU7XG4gICAgICB2YXIgciA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobiwgbykge1xuICAgICAgICByZXR1cm4gYS50eXBlID0gXCJ0aHJvd1wiLCBhLmFyZyA9IGUsIHIubmV4dCA9IG4sIG8gJiYgKHIubWV0aG9kID0gXCJuZXh0XCIsIHIuYXJnID0gdCksICEhbztcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIG8gPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgbyA+PSAwOyAtLW8pIHtcbiAgICAgICAgdmFyIGkgPSB0aGlzLnRyeUVudHJpZXNbb10sXG4gICAgICAgICAgYSA9IGkuY29tcGxldGlvbjtcbiAgICAgICAgaWYgKFwicm9vdFwiID09PSBpLnRyeUxvYykgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgaWYgKGkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBjID0gbi5jYWxsKGksIFwiY2F0Y2hMb2NcIiksXG4gICAgICAgICAgICB1ID0gbi5jYWxsKGksIFwiZmluYWxseUxvY1wiKTtcbiAgICAgICAgICBpZiAoYyAmJiB1KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgaS5jYXRjaExvYykgcmV0dXJuIGhhbmRsZShpLmNhdGNoTG9jLCAhMCk7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgaS5maW5hbGx5TG9jKSByZXR1cm4gaGFuZGxlKGkuZmluYWxseUxvYyk7XG4gICAgICAgICAgfSBlbHNlIGlmIChjKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgaS5jYXRjaExvYykgcmV0dXJuIGhhbmRsZShpLmNhdGNoTG9jLCAhMCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghdSkgdGhyb3cgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBpLmZpbmFsbHlMb2MpIHJldHVybiBoYW5kbGUoaS5maW5hbGx5TG9jKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGFicnVwdDogZnVuY3Rpb24gYWJydXB0KHQsIGUpIHtcbiAgICAgIGZvciAodmFyIHIgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgciA+PSAwOyAtLXIpIHtcbiAgICAgICAgdmFyIG8gPSB0aGlzLnRyeUVudHJpZXNbcl07XG4gICAgICAgIGlmIChvLnRyeUxvYyA8PSB0aGlzLnByZXYgJiYgbi5jYWxsKG8sIFwiZmluYWxseUxvY1wiKSAmJiB0aGlzLnByZXYgPCBvLmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgaSA9IG87XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGkgJiYgKFwiYnJlYWtcIiA9PT0gdCB8fCBcImNvbnRpbnVlXCIgPT09IHQpICYmIGkudHJ5TG9jIDw9IGUgJiYgZSA8PSBpLmZpbmFsbHlMb2MgJiYgKGkgPSBudWxsKTtcbiAgICAgIHZhciBhID0gaSA/IGkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmV0dXJuIGEudHlwZSA9IHQsIGEuYXJnID0gZSwgaSA/ICh0aGlzLm1ldGhvZCA9IFwibmV4dFwiLCB0aGlzLm5leHQgPSBpLmZpbmFsbHlMb2MsIHkpIDogdGhpcy5jb21wbGV0ZShhKTtcbiAgICB9LFxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbiBjb21wbGV0ZSh0LCBlKSB7XG4gICAgICBpZiAoXCJ0aHJvd1wiID09PSB0LnR5cGUpIHRocm93IHQuYXJnO1xuICAgICAgcmV0dXJuIFwiYnJlYWtcIiA9PT0gdC50eXBlIHx8IFwiY29udGludWVcIiA9PT0gdC50eXBlID8gdGhpcy5uZXh0ID0gdC5hcmcgOiBcInJldHVyblwiID09PSB0LnR5cGUgPyAodGhpcy5ydmFsID0gdGhpcy5hcmcgPSB0LmFyZywgdGhpcy5tZXRob2QgPSBcInJldHVyblwiLCB0aGlzLm5leHQgPSBcImVuZFwiKSA6IFwibm9ybWFsXCIgPT09IHQudHlwZSAmJiBlICYmICh0aGlzLm5leHQgPSBlKSwgeTtcbiAgICB9LFxuICAgIGZpbmlzaDogZnVuY3Rpb24gZmluaXNoKHQpIHtcbiAgICAgIGZvciAodmFyIGUgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgZSA+PSAwOyAtLWUpIHtcbiAgICAgICAgdmFyIHIgPSB0aGlzLnRyeUVudHJpZXNbZV07XG4gICAgICAgIGlmIChyLmZpbmFsbHlMb2MgPT09IHQpIHJldHVybiB0aGlzLmNvbXBsZXRlKHIuY29tcGxldGlvbiwgci5hZnRlckxvYyksIHJlc2V0VHJ5RW50cnkociksIHk7XG4gICAgICB9XG4gICAgfSxcbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uIF9jYXRjaCh0KSB7XG4gICAgICBmb3IgKHZhciBlID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGUgPj0gMDsgLS1lKSB7XG4gICAgICAgIHZhciByID0gdGhpcy50cnlFbnRyaWVzW2VdO1xuICAgICAgICBpZiAoci50cnlMb2MgPT09IHQpIHtcbiAgICAgICAgICB2YXIgbiA9IHIuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAoXCJ0aHJvd1wiID09PSBuLnR5cGUpIHtcbiAgICAgICAgICAgIHZhciBvID0gbi5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KHIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhyb3cgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbiBkZWxlZ2F0ZVlpZWxkKGUsIHIsIG4pIHtcbiAgICAgIHJldHVybiB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGUpLFxuICAgICAgICByZXN1bHROYW1lOiByLFxuICAgICAgICBuZXh0TG9jOiBuXG4gICAgICB9LCBcIm5leHRcIiA9PT0gdGhpcy5tZXRob2QgJiYgKHRoaXMuYXJnID0gdCksIHk7XG4gICAgfVxuICB9LCBlO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfcmVnZW5lcmF0b3JSdW50aW1lLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX3R5cGVvZihvKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gdHlwZW9mIG87XG4gIH0gOiBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIF90eXBlb2Yobyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCIvLyBUT0RPKEJhYmVsIDgpOiBSZW1vdmUgdGhpcyBmaWxlLlxuXG52YXIgcnVudGltZSA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3JlZ2VuZXJhdG9yUnVudGltZVwiKSgpO1xubW9kdWxlLmV4cG9ydHMgPSBydW50aW1lO1xuXG4vLyBDb3BpZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvYmxvYi9tYWluL3BhY2thZ2VzL3J1bnRpbWUvcnVudGltZS5qcyNMNzM2PVxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gXCJvYmplY3RcIikge1xuICAgIGdsb2JhbFRoaXMucmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbiAgfSBlbHNlIHtcbiAgICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xuICB9XG59XG4iLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAobiwgdCwgZSwgciwgbywgYSwgYykge1xuICB0cnkge1xuICAgIHZhciBpID0gblthXShjKSxcbiAgICAgIHUgPSBpLnZhbHVlO1xuICB9IGNhdGNoIChuKSB7XG4gICAgcmV0dXJuIHZvaWQgZShuKTtcbiAgfVxuICBpLmRvbmUgPyB0KHUpIDogUHJvbWlzZS5yZXNvbHZlKHUpLnRoZW4ociwgbyk7XG59XG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHQgPSB0aGlzLFxuICAgICAgZSA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHIsIG8pIHtcbiAgICAgIHZhciBhID0gbi5hcHBseSh0LCBlKTtcbiAgICAgIGZ1bmN0aW9uIF9uZXh0KG4pIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGEsIHIsIG8sIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCBuKTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhuKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChhLCByLCBvLCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIG4pO1xuICAgICAgfVxuICAgICAgX25leHQodm9pZCAwKTtcbiAgICB9KTtcbiAgfTtcbn1cbmV4cG9ydCB7IF9hc3luY1RvR2VuZXJhdG9yIGFzIGRlZmF1bHQgfTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI5MDU5NGVmN2I2NTQ4NGEyMTE0N1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIlJlYWN0RE9NIiwiU2VhcmNoRW5naW5lIiwiTWFpbiIsImNyZWF0ZUVsZW1lbnQiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiTW92aWVEZXRhaWxzIiwiX3JlZiIsIm1vdmllRGF0YSIsImlzTG9hZGluZyIsImVycm9yIiwiVGl0bGUiLCJZZWFyIiwiRGlyZWN0b3IiLCJQbG90IiwidXNlU3RhdGUiLCJTZWFyY2hGb3JtIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwic2V0TW92aWVEYXRhIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJzZXRJc0xvYWRpbmciLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsInNldEVycm9yIiwiZmV0Y2hNb3ZpZXMiLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJtYXJrIiwiX2NhbGxlZSIsIm1vdmllTmFtZSIsInJlc3BvbnNlIiwiZGF0YSIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJmZXRjaCIsImNvbmNhdCIsInNlbnQiLCJqc29uIiwiUmVzcG9uc2UiLCJFcnJvciIsInQwIiwibWVzc2FnZSIsImZpbmlzaCIsInN0b3AiLCJfeCIsImFwcGx5IiwiYXJndW1lbnRzIiwib25TZWFyY2giXSwic291cmNlUm9vdCI6IiJ9