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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n  font-family: sans-serif;\n  margin: 0;\n  padding: 1rem;\n  background: #f5f5f5;\n}\n\nnav {\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n  background: #222;\n  padding: 1rem;\n}\n\nbutton {\n  padding: 0.5rem 1.5rem;\n  background: #fff;\n  border: none;\n  cursor: pointer;\n  font-size: 1rem;\n  transition: background 0.3s;\n}\n\nbutton:hover {\n  background: #ddd;\n}\n\n#content {\n  background: white;\n  padding: 1rem;\n  border-radius: 8px;\n  max-width: 800px;\n  margin: 2rem auto;\n}\n\n.menu-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 1rem;\n  margin-top: 1rem;\n}\n\n.menu-card {\n  background: #fff3e0;\n  border: 1px solid #ffc107;\n  border-radius: 8px;\n  padding: 1rem;\n  text-align: center;\n  box-shadow: 0 2px 5px rgba(0,0,0,0.1);\n  transition: transform 0.2s ease;\n}\n\n.menu-card:hover {\n  transform: scale(1.03);\n}\n\n.menu-image {\n  width: 100%;\n  height: 140px;\n  object-fit: cover;\n  border-radius: 6px;\n  margin-bottom: 0.5rem;\n}\n\n.menu-emoji {\n  font-size: 1.5rem;\n  margin-bottom: 0.25rem;\n}\n\n.menu-name {\n  font-weight: bold;\n  font-size: 1.1rem;\n}\n\n.menu-desc {\n  font-size: 0.9rem;\n  color: #555;\n  margin: 0.5rem 0;\n}\n\n.menu-price {\n  margin-top: 0.5rem;\n  font-weight: bold;\n  color: #d32f2f;\n  font-size: 1rem;\n}\n\n.contact-form {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  margin-top: 1.5rem;\n}\n\n.contact-form input,\n.contact-form textarea {\n  padding: 0.75rem;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  font-family: inherit;\n  font-size: 1rem;\n}\n\n.contact-form button {\n  padding: 0.75rem;\n  background: #2196f3;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-weight: bold;\n  transition: background 0.3s;\n}\n\n.contact-form button:hover {\n  background: #1976d2;\n}\n\n.contact-map {\n  width: 100%;\n  height: 300px;\n  border: 0;\n  margin-top: 2rem;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n}\n\n.fade-out {\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n\n.fade-in {\n  opacity: 1;\n  transition: opacity 0.3s ease;\n}\n\n.menu-image {\n  width: 100%;\n  height: 160px;\n  object-fit: cover;\n  border-radius: 6px;\n  margin-bottom: 0.5rem;\n}\n\n.home-section {\n  text-align: center;\n  padding: 2rem;\n}\n\n.home-heading {\n  font-size: 2.5rem;\n  margin-bottom: 1rem;\n  color: #d35400;\n}\n\n.home-subheading {\n  font-size: 1.2rem;\n  color: #555;\n  margin-bottom: 2rem;\n}\n\n.home-image {\n  max-width: 90%;\n  height: auto;\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0,0,0,0.15);\n  transition: transform 0.3s ease;\n}\n\n.home-image:hover {\n  transform: scale(1.02);\n}\n\n.review-section {\n  margin-top: 2rem;\n  padding: 1rem;\n  background: #fefefe;\n  border-radius: 8px;\n  max-width: 600px;\n  margin-left: auto;\n  margin-right: auto;\n  box-shadow: 0 2px 10px rgba(0,0,0,0.1);\n}\n\n.review-section h2 {\n  color: #333;\n  margin-bottom: 1rem;\n}\n\n.review-form {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n.review-form input,\n.review-form textarea {\n  padding: 0.75rem;\n  border-radius: 4px;\n  border: 1px solid #ccc;\n  font-family: inherit;\n  resize: vertical;\n}\n\n.review-form button {\n  padding: 0.6rem 1rem;\n  background: #d35400;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n.review-form button:hover {\n  background: #b84300;\n}\n\n.review-entry {\n  margin-bottom: 1rem;\n  padding: 0.5rem;\n  background: #fffaf5;\n  border-left: 4px solid #d35400;\n  border-radius: 4px;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadContact)\n/* harmony export */ });\nfunction loadContact() {\n  const content = document.getElementById(\"content\");\n  content.innerHTML = '';\n\n  const title = document.createElement(\"h1\");\n  title.textContent = \"Связаться с нами\";\n\n  const contacts = [\n    {\n      icon: \"📞\",\n      label: \"Телефон\",\n      value: \"8 929 892 04 03\"\n    },\n    {\n      icon: \"🏠\",\n      label: \"Адрес\",\n      value: \"г. Грозный, пр. Хусейна Исаева, 100\"\n    },\n    {\n      icon: \"📧\",\n      label: \"Email\",\n      value: \"hamzat0403@mail.ru\"\n    }\n  ];\n\n  const container = document.createElement(\"div\");\n  container.classList.add(\"contact-grid\");\n\n  contacts.forEach(c => {\n    const card = document.createElement(\"div\");\n    card.classList.add(\"contact-card\");\n\n    const icon = document.createElement(\"div\");\n    icon.classList.add(\"contact-icon\");\n    icon.textContent = c.icon;\n\n    const label = document.createElement(\"div\");\n    label.classList.add(\"contact-label\");\n    label.textContent = c.label;\n\n    const value = document.createElement(\"div\");\n    value.classList.add(\"contact-value\");\n    value.textContent = c.value;\n\n    card.appendChild(icon);\n    card.appendChild(label);\n    card.appendChild(value);\n    container.appendChild(card);\n  });\n\n  const formTitle = document.createElement(\"h2\");\n  formTitle.textContent = \"Обратная связь\";\n\n  const form = document.createElement(\"form\");\n  form.classList.add(\"contact-form\");\n\n  form.innerHTML = `\n    <input type=\"text\" placeholder=\"Ваше имя\" required />\n    <input type=\"email\" placeholder=\"Ваш email\" required />\n    <textarea placeholder=\"Ваше сообщение\" required></textarea>\n    <button type=\"submit\">Отправить</button>\n  `;\n\n  form.addEventListener(\"submit\", e => {\n    e.preventDefault();\n    alert(\"Спасибо за сообщение!\");\n    form.reset();\n  });\n\n  const map = document.createElement(\"iframe\");\n  map.classList.add(\"contact-map\");\n  map.src = \"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2980.353382021598!2d45.69975401542604!3d43.31244737913562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404e81c9f06bffff%3A0x6b9a74de06b97e71!2z0YPQuy4g0JPQvtGA0L7QstCwINCc0LjQu9C-0LLQsCwgMTAwLCDQkdC10LvQtdC90LjRhtC60L7Qs9C-LCDQkNC70LDQstC-0LzRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwgMzY0MDAw!5e0!3m2!1sru!2sru!4v1714661145680!5m2!1sru!2sru\";\n  map.allowFullscreen = \"\";\n  map.loading = \"lazy\";\n  map.referrerPolicy = \"no-referrer-when-downgrade\";\n\n  content.appendChild(title);\n  content.appendChild(container);\n  content.appendChild(formTitle);\n  content.appendChild(form);\n  content.appendChild(map);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHome)\n/* harmony export */ });\nfunction loadHome() {\n  const content = document.getElementById(\"content\");\n  content.innerHTML = '';\n\n  const section = document.createElement(\"section\");\n  section.classList.add(\"home-section\");\n\n  const heading = document.createElement(\"h1\");\n  heading.textContent = \"Добро пожаловать в Тёплую Тарелку!\";\n  heading.classList.add(\"home-heading\");\n\n  const subheading = document.createElement(\"p\");\n  subheading.textContent = \"Насладитесь вкусом традиционной и комфортной еды.\";\n  subheading.classList.add(\"home-subheading\");\n\n  const image = document.createElement(\"img\");\n  image.src = \"./assets/home.jpg\";\n  image.alt = \"Главное фото ресторана\";\n  image.classList.add(\"home-image\");\n\n  const reviewSection = document.createElement(\"div\");\n  reviewSection.classList.add(\"review-section\");\n\n  const reviewTitle = document.createElement(\"h2\");\n  reviewTitle.textContent = \"Отзывы наших гостей\";\n\n  const reviewList = document.createElement(\"div\");\n  reviewList.classList.add(\"review-list\");\n\n  const reviewForm = document.createElement(\"form\");\n  reviewForm.classList.add(\"review-form\");\n\n  reviewForm.innerHTML = `\n    <input type=\"text\" name=\"name\" placeholder=\"Ваше имя\" required />\n    <textarea name=\"review\" placeholder=\"Ваш отзыв...\" required></textarea>\n    <button type=\"submit\">Оставить отзыв</button>\n  `;\n\n  reviewForm.addEventListener(\"submit\", (e) => {\n    e.preventDefault();\n    const name = reviewForm.name.value.trim();\n    const review = reviewForm.review.value.trim();\n\n    if (name && review) {\n      const entry = document.createElement(\"div\");\n      entry.classList.add(\"review-entry\");\n      entry.innerHTML = `<strong>${name}</strong><p>${review}</p>`;\n      reviewList.prepend(entry);\n      reviewForm.reset();\n    }\n  });\n\n  reviewSection.appendChild(reviewTitle);\n  reviewSection.appendChild(reviewList);\n  reviewSection.appendChild(reviewForm);\n\n  section.appendChild(heading);\n  section.appendChild(subheading);\n  section.appendChild(image);\n  section.appendChild(reviewSection);\n  content.appendChild(section);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\nfunction fadeTransition(callback) {\n  const content = document.getElementById('content');\n  content.classList.add('fade-out');\n  setTimeout(() => {\n    callback();\n    content.classList.remove('fade-out');\n    content.classList.add('fade-in');\n    setTimeout(() => content.classList.remove('fade-in'), 300);\n  }, 200);\n}\n\nfunction init() {\n  const homeBtn = document.getElementById('home-btn');\n  const menuBtn = document.getElementById('menu-btn');\n  const contactBtn = document.getElementById('contact-btn');\n\n  homeBtn.addEventListener('click', () => fadeTransition(_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));\n  menuBtn.addEventListener('click', () => fadeTransition(_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"]));\n  contactBtn.addEventListener('click', () => fadeTransition(_contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"]));\n\n  (0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n}\n\ndocument.addEventListener('DOMContentLoaded', init);\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenu)\n/* harmony export */ });\nfunction loadMenu() {\n  const content = document.getElementById(\"content\");\n  content.innerHTML = '';\n\n  const title = document.createElement(\"h1\");\n  title.textContent = \"Меню\";\n\n  const dishes = [\n    {\n      name: \"Спагетти Болоньезе\",\n      emoji: \"🍝\",\n      description: \"Классическая паста с мясным соусом и итальянскими травами.\",\n      price: \"450 ₽\",\n      image: \"./assets/spaghetti.jpg\"\n    },\n    {\n      name: \"Салат Цезарь\",\n      emoji: \"🥗\",\n      description: \"Салат с курицей, листьями романо, сухариками и сыром пармезан.\",\n      price: \"400 ₽\",\n      image: \"./assets/salad.jpg\"\n    },\n    {\n      name: \"Пицца Маргарита\",\n      emoji: \"🍕\",\n      description: \"Пицца с томатным соусом, сыром моцарелла и базиликом.\",\n      price: \"600 ₽\",\n      image: \"./assets/pizza.webp\"\n    },\n    {\n      name: \"Чизкейк\",\n      emoji: \"🍰\",\n      description: \"Нежный шоколадный чизкейк с хрустящей основой.\",\n      price: \"300 ₽\",\n      image: \"./assets/cheesecake.jpg\"\n    },\n  ];\n\n  const grid = document.createElement(\"div\");\n  grid.classList.add(\"menu-grid\");\n\n  dishes.forEach(dish => {\n    const card = document.createElement(\"div\");\n    card.classList.add(\"menu-card\");\n\n    const img = document.createElement(\"img\");\n    img.src = dish.image;\n    img.alt = dish.name;\n    img.classList.add(\"menu-image\");\n\n    const name = document.createElement(\"h3\");\n    name.textContent = `${dish.emoji} ${dish.name}`;\n\n    const desc = document.createElement(\"p\");\n    desc.textContent = dish.description;\n\n    const price = document.createElement(\"p\");\n    price.classList.add(\"menu-price\");\n    price.textContent = dish.price;\n\n    card.appendChild(img);\n    card.appendChild(name);\n    card.appendChild(desc);\n    card.appendChild(price);\n\n    grid.appendChild(card);\n  });\n\n  content.appendChild(title);\n  content.appendChild(grid);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;