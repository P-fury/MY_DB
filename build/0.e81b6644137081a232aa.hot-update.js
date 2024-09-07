"use strict";
self["webpackHotUpdateredux"](0,{

/***/ 40:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchEnginge": () => (/* binding */ SearchEnginge)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);


var SearchEnginge = function SearchEnginge() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
    userMovieName = _useState2[0],
    setUserMovieName = _useState2[1];
  var handleInputChange = function handleInputChange(e) {
    setUserMovieName(e.target.value);
  };
  var handleFormSubmit = function handleFormSubmit(e) {
    e.preventDefault();
    console.log(userMovieName);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("form", {
    onSubmit: handleFormSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", {
    type: "text",
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
/******/ 	__webpack_require__.h = () => ("957a3fe578fa7823bb69")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lODFiNjY0NDEzNzA4MWEyMzJhYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFFL0IsSUFBTUUsYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFBLEVBQVM7RUFFL0IsSUFBQUMsU0FBQSxHQUEwQ0YsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQUcsVUFBQSxHQUFBQyxnRkFBQSxDQUFBRixTQUFBO0lBQS9DRyxhQUFhLEdBQUFGLFVBQUE7SUFBRUcsZ0JBQWdCLEdBQUFILFVBQUE7RUFDdEMsSUFBTUksaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFpQkEsQ0FBSUMsQ0FBQyxFQUFLO0lBQzdCRixnQkFBZ0IsQ0FBQ0UsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUssQ0FBQztFQUNwQyxDQUFDO0VBQ0QsSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQkEsQ0FBSUgsQ0FBQyxFQUFJO0lBQzNCQSxDQUFDLENBQUNJLGNBQWMsQ0FBQyxDQUFDO0lBQ2xCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1QsYUFBYSxDQUFDO0VBRTlCLENBQUM7RUFFRCxvQkFDSU4sZ0RBQUEsMkJBQ0lBLGdEQUFBO0lBQU1pQixRQUFRLEVBQUVMO0VBQWlCLGdCQUNqQ1osZ0RBQUE7SUFBT2tCLElBQUksRUFBQyxNQUFNO0lBQUNDLFFBQVEsRUFBRVgsaUJBQWtCO0lBQUNZLFdBQVcsRUFBQztFQUFtQixDQUFFLENBQUMsZUFDOUVwQixnREFBQTtJQUFRa0IsSUFBSSxFQUFDO0VBQVEsR0FBQyxRQUFjLENBQ2xDLENBQ0wsQ0FBQztBQUVkLENBQUM7Ozs7Ozs7O1VDdEJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVkdXgvLi9qcy9jb21wb25lbnRzL3NlYXJjaF9lbmdpbmdlLmpzIiwid2VicGFjazovL3JlZHV4L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBTZWFyY2hFbmdpbmdlID0gKCkgPT4ge1xuXG4gICAgY29uc3QgW3VzZXJNb3ZpZU5hbWUsIHNldFVzZXJNb3ZpZU5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBzZXRVc2VyTW92aWVOYW1lKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9XG4gICAgY29uc3QgaGFuZGxlRm9ybVN1Ym1pdCA9IChlKSA9PntcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJNb3ZpZU5hbWUpO1xuXG4gICAgfVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZUZvcm1TdWJtaXR9PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSBwbGFjZWhvbGRlcj1cInNlYXJjaCBhIG1vdmllLi4uXCIgLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TZWFyY2g8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjk1N2EzZmU1NzhmYTc4MjNiYjY5XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJTZWFyY2hFbmdpbmdlIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwidXNlck1vdmllTmFtZSIsInNldFVzZXJNb3ZpZU5hbWUiLCJoYW5kbGVJbnB1dENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUZvcm1TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVFbGVtZW50Iiwib25TdWJtaXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciJdLCJzb3VyY2VSb290IjoiIn0=