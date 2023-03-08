/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cart */ \"./js/modules/cart.js\");\n/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/form */ \"./js/modules/form.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/products */ \"./js/modules/products.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ \"./js/modules/slider.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tabs */ \"./js/modules/tabs.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n\t(0,_modules_cart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\t(0,_modules_form__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\t(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n\t(0,_modules_products__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n\t(0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n\t(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n});\n\n//# sourceURL=webpack://pizza/./js/main.js?");

/***/ }),

/***/ "./js/modules/cart.js":
/*!****************************!*\
  !*** ./js/modules/cart.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Cart = () => {\r\n\tconst btnOpenCart = document.querySelector('[data-cart]'),\r\n\t\twindowCart = document.querySelector('.cart'),\r\n\t\tbtnClose = document.querySelectorAll('[data-close]'),\r\n\t\tcartWrapper = document.querySelector('.cart_wrapper');\r\n\r\n\tfunction openCart() {\r\n\t\twindowCart.style.left = 30 + 'px';\r\n\t\twindowCart.style.opacity = 100 + '%';\r\n\t}\r\n\r\n\tfunction closeCart() {\r\n\t\twindowCart.style.left = -570 + 'px';\r\n\t\twindowCart.style.opacity = 0 + '%';\r\n\t}\r\n\r\n\tfunction toggleCartStatus() {\r\n\t\tconst cartWrapper = document.querySelector('.cart_wrapper'),\r\n\t\t\ttitlePrice = document.querySelector('[data-cart-empty]'),\r\n\t\t\tblockPrice = document.querySelector('[data-cart-full]');\r\n\r\n\t\tif (cartWrapper.children.length > 0) {\r\n\t\t\ttitlePrice.style.display = 'none';\r\n\t\t\tblockPrice.style.display = 'flex';\r\n\t\t} else {\r\n\t\t\ttitlePrice.style.display = 'block';\r\n\t\t\tblockPrice.style.display = 'none';\r\n\t\t\tcloseCart();\r\n\t\t}\r\n\t}\r\n\r\n\tfunction calcCartPrice() {\r\n\t\tconst itemsCart = document.querySelectorAll('.product');\r\n\r\n\t\tlet counterTotalPrice = document.querySelector('.current_price'),\r\n\t\t\ttotalPrice = 0;\r\n\r\n\t\titemsCart.forEach(item => {\r\n\t\t\tconst amountEl = item.querySelector('[data-counter]').innerText,\r\n\t\t\t\tpriceEl = item.querySelector('[data-price]').innerText;\r\n\r\n\t\t\tconst currentPrice = +amountEl * +priceEl;\r\n\r\n\t\t\ttotalPrice += currentPrice;\r\n\t\t});\r\n\r\n\t\tcounterTotalPrice.innerText = Number(totalPrice).toFixed(2);\r\n\t}\r\n\r\n\tbtnClose.forEach(item => {\r\n\t\titem.addEventListener('click', (e) => {\r\n\t\t\te.preventDefault();\r\n\t\t\tcloseCart();\r\n\t\t});\r\n\t});\r\n\r\n\tbtnOpenCart.addEventListener('click', e => {\r\n\t\te.preventDefault();\r\n\t\topenCart();\r\n\t});\r\n\r\n\twindow.addEventListener('click', (e) => {\r\n\t\tlet counter;\r\n\r\n\t\tif (e.target.dataset.action === 'plus' || e.target.dataset.action === 'minus') {\r\n\t\t\tconst counterWrapper = e.target.closest('.block-btns_counter');\r\n\t\t\tcounter = counterWrapper.querySelector('[data-counter]');\r\n\t\t}\r\n\r\n\t\tif (e.target.dataset.action === 'plus' && counter.innerText < 10) {\r\n\t\t\tcounter.innerText = ++counter.innerText;\r\n\t\t\tcalcCartPrice();\r\n\t\t}\r\n\r\n\t\tif (e.target.dataset.action === 'minus') {\r\n\r\n\t\t\tcounter.innerText = --counter.innerText;\r\n\r\n\t\t\tif (e.target.closest('.product') && parseInt(counter.innerText) === 0) {\r\n\t\t\t\tlet answer = confirm('Are you sure, that you wanna delete this pizza from your cart?');\r\n\t\t\t\tif (answer === true) {\r\n\t\t\t\t\te.target.closest('.product').remove();\r\n\t\t\t\t\ttoggleCartStatus();\r\n\t\t\t\t} else {\r\n\t\t\t\t\tcounter.innerText = 1;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\tcalcCartPrice();\r\n\t\t}\r\n\r\n\t\tif (e.target.hasAttribute('data-add')) {\r\n\r\n\t\t\tconst card = e.target.closest('.tiles');\r\n\r\n\t\t\tconst tileInfo = {\r\n\t\t\t\tid: card.dataset.id,\r\n\t\t\t\timgSrc: card.querySelector('.tile_img').getAttribute('src'),\r\n\t\t\t\ttitle: card.querySelector('.tile_text').innerText,\r\n\t\t\t\tprice: card.querySelector('[data-price]').innerText,\r\n\t\t\t};\r\n\r\n\t\t\tconst itemInCart = cartWrapper.querySelector(`[data-id='${tileInfo.id}']`);\r\n\r\n\t\t\tif (itemInCart) {\r\n\t\t\t\tconst counterElement = itemInCart.querySelector('[data-counter]');\r\n\t\t\t\tcounterElement.innerText++;\r\n\t\t\t} else {\r\n\t\t\t\tlet cardItemHtml = `\r\n\t\t\t\t<div data-id=\"${tileInfo.id}\" class=\"product\">\r\n\t\t\t\t\t<img class=\"product_img\" src=\"${tileInfo.imgSrc}\" alt=\"product\" class=\"product_img\">\r\n\t\t\t\t\t<div class=\"block-name_btns\">\r\n\t\t\t\t\t\t<p class=\"product_name\">${tileInfo.title}</p>\r\n\t\t\t\t\t<div class=\"block-btns_counter\">\r\n\t\t\t\t\t\t<button data-action=\"minus\" class=\"current_btns\">-</button>\r\n\t\t\t\t\t\t<div data-counter class=\"product_counter\">1</div>\r\n\t\t\t\t\t\t<button data-action=\"plus\" class=\"current_btns\">+</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"block-cart_price\">\r\n\t\t\t\t\t\t<p class=\"price\"><span data-price>${tileInfo.price}</span>$</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t`;\r\n\r\n\t\t\t\tcartWrapper.insertAdjacentHTML('beforeend', cardItemHtml);\r\n\t\t\t\topenCart();\r\n\t\t\t}\r\n\t\t\ttoggleCartStatus();\r\n\t\t\tcalcCartPrice();\r\n\t\t}\r\n\t});\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cart);\n\n//# sourceURL=webpack://pizza/./js/modules/cart.js?");

/***/ }),

/***/ "./js/modules/form.js":
/*!****************************!*\
  !*** ./js/modules/form.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ \"./js/modules/modal.js\");\n\r\n\r\nconst Form = () => {\r\n\tconst form = document.querySelector('form');\r\n\r\n\tconst message = {\r\n\t\tloading: 'img/form/spinner.svg',\r\n\t\tsuccess: \"Thanks for sign in!\",\r\n\t\terror: 'Something went wrong...'\r\n\t};\r\n\r\n\tbindPostData(form);\r\n\r\n\tconst postData = async (url, data) => {\r\n\t\tconst res = await fetch(url, {\r\n\t\t\tmethod: 'POST',\r\n\t\t\theaders: {\r\n\t\t\t\t'Content-type': 'application/json'\r\n\t\t\t},\r\n\t\t\tbody: data\r\n\t\t});\r\n\r\n\t\treturn await res.json();\r\n\t};\r\n\r\n\tfunction bindPostData(form) {\r\n\t\tform.addEventListener('submit', (e) => {\r\n\t\t\te.preventDefault();\r\n\r\n\t\t\tconst statusMessage = document.createElement('img');\r\n\t\t\tstatusMessage.src = message.loading;\r\n\t\t\tstatusMessage.style.cssText = `\r\n\t\t\t\tdisplay: block;\r\n\t\t\t\tmargin: 0 auto;\r\n\t\t\t`;\r\n\t\t\tform.append(statusMessage);\r\n\r\n\t\t\tconst formData = new FormData(form);\r\n\r\n\t\t\tconst json = JSON.stringify(Object.fromEntries(formData.entries()));\r\n\r\n\t\t\tpostData('http://localhost:3000/requests', json)\r\n\t\t\t\t.then(() => {\r\n\t\t\t\t\tshowThanksModal(message.success);\r\n\t\t\t\t\tstatusMessage.remove();\r\n\t\t\t\t})\r\n\t\t\t\t.catch(() => {\r\n\t\t\t\t\tshowThanksModal(message.error);\r\n\t\t\t\t})\r\n\t\t\t\t.finally(() => {\r\n\t\t\t\t\tform.reset();\r\n\t\t\t\t});\r\n\t\t});\r\n\t}\r\n\r\n\tfunction showThanksModal(message) {\r\n\t\tconst prevModalDialog = document.querySelector('.modal_dialog');\r\n\r\n\t\tprevModalDialog.style.display = 'none';\r\n\t\t(0,_modal__WEBPACK_IMPORTED_MODULE_0__.openModal)();\r\n\r\n\t\tconst thanksModal = document.createElement('div');\r\n\t\tthanksModal.classList.add('modal_dialog');\r\n\t\tthanksModal.innerHTML = `\r\n\t\t\t<div class=\"modal__dinamic_content\">\r\n\t\t\t\t<h1 class=\"modal_title\">${message}</h1>\r\n\t\t\t</div>\r\n\t\t`;\r\n\r\n\t\tdocument.querySelector('.modal').append(thanksModal);\r\n\t\tsetTimeout(() => {\r\n\t\t\tthanksModal.remove();\r\n\t\t\tprevModalDialog.style.display = 'block';\r\n\t\t\t(0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)();\r\n\t\t}, 3000);\r\n\t}\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);\n\n//# sourceURL=webpack://pizza/./js/modules/form.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closeModal\": () => (/* binding */ closeModal),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"openModal\": () => (/* binding */ openModal)\n/* harmony export */ });\nconst btnOpenModal = document.querySelector('[data-modal]'),\r\n\tinputs = document.querySelectorAll('.inputs_modal'),\r\n\tmodal = document.querySelector('.modal'),\r\n\tbtnClose = document.querySelectorAll('[data-close]'),\r\n\tmodalContent = document.querySelector('.modal_content');\r\n\r\nfunction openModal() {\r\n\tmodal.style.cssText = `\r\n\t\topacity: 1;\r\n\t\tpointer-events: visible;\r\n\t`;\r\n\r\n\tmodalContent.style.cssText = `\r\n\t\ttransform: scale(1);\r\n\t`;\r\n\r\n\tdocument.body.style.overflow = 'hidden';\r\n}\r\n\r\nfunction closeModal() {\r\n\tmodal.style.cssText = `\r\n\t\topacity: 0;\r\n\t\tpointer-events: none;\r\n\t`;\r\n\r\n\tmodalContent.style.cssText = `\r\n\t\ttranform: scale(0);\r\n\t`;\r\n\r\n\tdocument.body.style.overflow = '';\r\n}\r\n\r\nfunction clearInputs() {\r\n\tinputs.forEach(item => {\r\n\t\titem.value = '';\r\n\t});\r\n}\r\n\r\nconst Modal = () => {\r\n\tbtnClose.forEach(item => {\r\n\t\titem.addEventListener('click', (e) => {\r\n\t\t\te.preventDefault();\r\n\t\t\tcloseModal();\r\n\t\t\tclearInputs();\r\n\t\t});\r\n\t});\r\n\r\n\tbtnOpenModal.addEventListener('click', e => {\r\n\t\te.preventDefault();\r\n\t\topenModal();\r\n\t});\r\n\r\n\twindow.addEventListener('click', (e) => {\r\n\t\tif (e.target === modal) {\r\n\t\t\tcloseModal();\r\n\t\t\tclearInputs();\r\n\t\t}\r\n\t});\r\n\r\n\tdocument.addEventListener('keydown', (e) => {\r\n\t\tif (e.code === 'Escape') {\r\n\t\t\tcloseModal();\r\n\t\t\tclearInputs();\r\n\t\t}\r\n\t});\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);\r\n\r\n\n\n//# sourceURL=webpack://pizza/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/products.js":
/*!********************************!*\
  !*** ./js/modules/products.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ \"./js/services/services.js\");\n\r\n\r\nconst Products = () => {\r\n\tclass Product {\r\n\t\tconstructor(src, alt, name, price, id, parentSelector, ...classes) {\r\n\t\t\tthis.src = src;\r\n\t\t\tthis.alt = alt;\r\n\t\t\tthis.name = name;\r\n\t\t\tthis.price = price;\r\n\t\t\tthis.id = id;\r\n\t\t\tthis.classes = classes;\r\n\t\t\tthis.parent = document.querySelector(parentSelector);\r\n\t\t\tthis.transfer = 27;\r\n\t\t}\r\n\r\n\t\trender() {\r\n\t\t\tconst element = document.createElement('div');\r\n\r\n\t\t\telement.innerHTML = `\r\n\t\t\t\t<div data-id=\"${this.id}\" class=\"tiles\">\r\n\t\t\t\t\t<img class=\"tile_img\" src=\"${this.src}\" alt=\"${this.alt}\">\r\n\t\t\t\t\t<p class=\"tile_text\">${this.name}</p>\r\n\t\t\t\t\t<p class=\"price\"><span data-price>${this.price}</span>$</p>\r\n\t\t\t\t\t<button data-add class=\"tile_add\">Add to cart</button>\r\n\t\t\t\t</div>\r\n\t\t\t `;\r\n\r\n\t\t\tthis.parent.append(element);\r\n\t\t}\r\n\t}\r\n\r\n\t(0,_services_services__WEBPACK_IMPORTED_MODULE_0__.getResource)('http://localhost:3000/products')\r\n\t\t.then(data => {\r\n\t\t\tdata.forEach(({ img, altimg, name, price, id }) => {\r\n\t\t\t\tnew Product(img, altimg, name, price, id, '.block_tiles').render();\r\n\t\t\t});\r\n\t\t});\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Products);\n\n//# sourceURL=webpack://pizza/./js/modules/products.js?");

/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Slider = () => {\r\n\tconst slideNext = document.querySelector('[data-next]'),\r\n\t\tslidePrev = document.querySelector('[data-prev]'),\r\n\t\tsliderLine = document.querySelector('.slider-line');\r\n\r\n\tfunction slider(next, prev, line) {\r\n\r\n\t\tlet offset = 0;\r\n\r\n\t\tfunction slideLeft() {\r\n\t\t\toffset += 935.17;\r\n\t\t\tif (offset > 2805.51) {\r\n\t\t\t\toffset = 0;\r\n\t\t\t}\r\n\t\t\tline.style.left = -offset + 'px';\r\n\t\t}\r\n\r\n\t\tfunction slideRight() {\r\n\t\t\toffset -= 935.17;\r\n\t\t\tif (offset < 0) {\r\n\t\t\t\toffset = 2805.51;\r\n\t\t\t}\r\n\t\t\tline.style.left = -offset + 'px';\r\n\t\t}\r\n\r\n\t\tnext.addEventListener('click', () => {\r\n\t\t\tslideLeft();\r\n\t\t});\r\n\r\n\t\tprev.addEventListener('click', () => {\r\n\t\t\tslideRight();\r\n\t\t});\r\n\t}\r\n\r\n\tslider(slideNext, slidePrev, sliderLine);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slider);\n\n//# sourceURL=webpack://pizza/./js/modules/slider.js?");

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Tabs = () => {\r\n\tconst tabs = document.querySelectorAll('.text__options-tabs'),\r\n\t\tpictureTabs = document.querySelectorAll('.pictures_tabs'),\r\n\t\ttabsParent = document.querySelector('.tabs-parent');\r\n\r\n\tfunction hideTabs() {\r\n\t\tpictureTabs.forEach(item => item.style.display = 'none');\r\n\t\ttabs.forEach(item => item.classList.remove('text__options_tabs-active'));\r\n\t}\r\n\r\n\tfunction showTabs(i = 0) {\r\n\t\tpictureTabs[i].style.display = 'block';\r\n\t\ttabs[i].classList.add('text__options_tabs-active');\r\n\t}\r\n\r\n\ttabsParent.addEventListener('click', (e) => {\r\n\r\n\t\tconst target = e.target;\r\n\r\n\t\tif (target && target.classList.contains('text__options-tabs')) {\r\n\t\t\ttabs.forEach((item, i) => {\r\n\t\t\t\tif (target == item) {\r\n\t\t\t\t\thideTabs();\r\n\t\t\t\t\tshowTabs(i);\r\n\t\t\t\t}\r\n\t\t\t});\r\n\t\t}\r\n\t});\r\n\r\n\thideTabs();\r\n\tshowTabs();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tabs);\n\n//# sourceURL=webpack://pizza/./js/modules/tabs.js?");

/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getResource\": () => (/* binding */ getResource),\n/* harmony export */   \"postData\": () => (/* binding */ postData)\n/* harmony export */ });\nconst postData = async (url, data) => {\r\n\tconst res = await fetch(url, {\r\n\t\tmethod: 'POST',\r\n\t\theaders: { 'Content-type': 'application/json' },\r\n\t\tbody: data\r\n\t});\r\n\r\n\treturn await res.json();\r\n};\r\n\r\nconst getResource = async (url) => {\r\n\tconst res = await fetch(url);\r\n\r\n\tif (!res.ok) {\r\n\t\tthrow new Error(`Couldn't fetch ${url}, status: ${res.status}`);\r\n\t}\r\n\r\n\treturn await res.json();\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://pizza/./js/services/services.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/main.js");
/******/ 	
/******/ })()
;