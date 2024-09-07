"use strict";
self["webpackHotUpdateredux"](0,{

/***/ 40:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchForm": () => (/* binding */ SearchForm)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);


var SearchForm = function SearchForm(_ref) {
  var onSearch = _ref.onSearch;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
    userMovieName = _useState2[0],
    setUserMovieName = _useState2[1];
  var handleInputChange = function handleInputChange(e) {
    setUserMovieName(e.target.value);
  };
  var handleFormSubmit = function handleFormSubmit(e) {
    e.preventDefault();
    if (userMovieName.trim()) {
      onSearch(userMovieName);
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("form", {
    onSubmit: handleFormSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", {
    type: "text",
    value: userMovieName,
    onChange: handleInputChange,
    placeholder: "search a movie..."
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
    type: "submit"
  }, "Search")));
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("78c6dcd7ae0f3e9e643c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lZjE2NjAwMzFmY2UwOWMyYzc1Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFFL0IsSUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUFDLElBQUEsRUFBb0I7RUFBQSxJQUFkQyxRQUFRLEdBQUFELElBQUEsQ0FBUkMsUUFBUTtFQUVqQyxJQUFBQyxTQUFBLEdBQTBDSiwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBSyxVQUFBLEdBQUFDLGdGQUFBLENBQUFGLFNBQUE7SUFBL0NHLGFBQWEsR0FBQUYsVUFBQTtJQUFFRyxnQkFBZ0IsR0FBQUgsVUFBQTtFQUN0QyxJQUFNSSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQWlCQSxDQUFJQyxDQUFDLEVBQUs7SUFDN0JGLGdCQUFnQixDQUFDRSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO0VBQ3BDLENBQUM7RUFDRCxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQWdCQSxDQUFJSCxDQUFDLEVBQUk7SUFDM0JBLENBQUMsQ0FBQ0ksY0FBYyxDQUFDLENBQUM7SUFDbEIsSUFBSVAsYUFBYSxDQUFDUSxJQUFJLENBQUMsQ0FBQyxFQUFFO01BQ3RCWixRQUFRLENBQUNJLGFBQWEsQ0FBQztJQUMzQjtFQUNKLENBQUM7RUFFRCxvQkFDSVIsZ0RBQUEsMkJBQ0lBLGdEQUFBO0lBQU1rQixRQUFRLEVBQUVKO0VBQWlCLGdCQUNqQ2QsZ0RBQUE7SUFBT21CLElBQUksRUFBQyxNQUFNO0lBQUNOLEtBQUssRUFBRUwsYUFBYztJQUFDWSxRQUFRLEVBQUVWLGlCQUFrQjtJQUFDVyxXQUFXLEVBQUM7RUFBbUIsQ0FBRSxDQUFDLGVBQ3BHckIsZ0RBQUE7SUFBUW1CLElBQUksRUFBQztFQUFRLEdBQUMsUUFBYyxDQUNsQyxDQUNMLENBQUM7QUFFZCxDQUFDOzs7Ozs7OztVQ3ZCRCIsInNvdXJjZXMiOlsid2VicGFjazovL3JlZHV4Ly4vanMvY29tcG9uZW50cy9TZWFyY2hGb3JtLmpzIiwid2VicGFjazovL3JlZHV4L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBTZWFyY2hGb3JtID0gKHsgb25TZWFyY2h9KSA9PiB7XG5cbiAgICBjb25zdCBbdXNlck1vdmllTmFtZSwgc2V0VXNlck1vdmllTmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIHNldFVzZXJNb3ZpZU5hbWUoZS50YXJnZXQudmFsdWUpO1xuICAgIH1cbiAgICBjb25zdCBoYW5kbGVGb3JtU3VibWl0ID0gKGUpID0+e1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgaWYgKHVzZXJNb3ZpZU5hbWUudHJpbSgpKSB7XG4gICAgICAgICAgICBvblNlYXJjaCh1c2VyTW92aWVOYW1lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVGb3JtU3VibWl0fT5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt1c2VyTW92aWVOYW1lfSBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IHBsYWNlaG9sZGVyPVwic2VhcmNoIGEgbW92aWUuLi5cIiAvPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlNlYXJjaDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNzhjNmRjZDdhZTBmM2U5ZTY0M2NcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlNlYXJjaEZvcm0iLCJfcmVmIiwib25TZWFyY2giLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJ1c2VyTW92aWVOYW1lIiwic2V0VXNlck1vdmllTmFtZSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlRm9ybVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwidHJpbSIsImNyZWF0ZUVsZW1lbnQiLCJvblN1Ym1pdCIsInR5cGUiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==