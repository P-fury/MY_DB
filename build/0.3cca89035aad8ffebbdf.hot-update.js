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
/******/ 	__webpack_require__.h = () => ("e81b6644137081a232aa")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zY2NhODkwMzVhYWQ4ZmZlYmJkZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFFL0IsSUFBTUUsYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFBLEVBQVM7RUFFL0IsSUFBQUMsU0FBQSxHQUEwQ0YsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQUcsVUFBQSxHQUFBQyxnRkFBQSxDQUFBRixTQUFBO0lBQS9DRyxhQUFhLEdBQUFGLFVBQUE7SUFBRUcsZ0JBQWdCLEdBQUFILFVBQUE7RUFDdEMsSUFBTUksaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFpQkEsQ0FBSUMsQ0FBQyxFQUFLO0lBQzdCRixnQkFBZ0IsQ0FBQ0UsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUssQ0FBQztFQUNwQyxDQUFDO0VBQ0QsSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQkEsQ0FBSUgsQ0FBQyxFQUFJO0lBQzNCQSxDQUFDLENBQUNJLGNBQWMsQ0FBQyxDQUFDO0lBQ2xCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1QsYUFBYSxDQUFDO0VBRTlCLENBQUM7RUFJRCxvQkFDSU4sZ0RBQUEsMkJBQ0lBLGdEQUFBO0lBQU1pQixRQUFRLEVBQUVMO0VBQWlCLGdCQUNqQ1osZ0RBQUE7SUFBT2tCLElBQUksRUFBQyxNQUFNO0lBQUNDLFFBQVEsRUFBRVgsaUJBQWtCO0lBQUNZLFdBQVcsRUFBQztFQUFtQixDQUFFLENBQUMsZUFDOUVwQixnREFBQTtJQUFRa0IsSUFBSSxFQUFDO0VBQVEsR0FBQyxRQUFjLENBQ2xDLENBQ0wsQ0FBQztBQUVkLENBQUM7Ozs7Ozs7O1VDeEJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVkdXgvLi9qcy9jb21wb25lbnRzL3NlYXJjaF9lbmdpbmdlLmpzIiwid2VicGFjazovL3JlZHV4L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBTZWFyY2hFbmdpbmdlID0gKCkgPT4ge1xuXG4gICAgY29uc3QgW3VzZXJNb3ZpZU5hbWUsIHNldFVzZXJNb3ZpZU5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBzZXRVc2VyTW92aWVOYW1lKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9XG4gICAgY29uc3QgaGFuZGxlRm9ybVN1Ym1pdCA9IChlKSA9PntcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJNb3ZpZU5hbWUpO1xuXG4gICAgfVxuXG5cblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVGb3JtU3VibWl0fT5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gcGxhY2Vob2xkZXI9XCJzZWFyY2ggYSBtb3ZpZS4uLlwiIC8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2VhcmNoPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJlODFiNjY0NDEzNzA4MWEyMzJhYVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiU2VhcmNoRW5naW5nZSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInVzZXJNb3ZpZU5hbWUiLCJzZXRVc2VyTW92aWVOYW1lIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVGb3JtU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlRWxlbWVudCIsIm9uU3VibWl0IiwidHlwZSIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiXSwic291cmNlUm9vdCI6IiJ9