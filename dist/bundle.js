/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --beige: #efe6d5;
    --blue: #9dbeb7;
    --red: #e73213;
    --shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

* {
    padding: 0;
    margin: 0;
    font-weight: 700;
    color: var(--beige);
}

ul {
    list-style-type: none;
}

html {
    height: 100%;
}

body {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: var(--beige);
}

button {
    border: 2px solid var(--red);
    padding: 5px;
    border-radius: 10px;
    background-color: var(--red);
    color: var(--beige);
    transition: 0.2s;
}

button:hover {
    background-color: var(--beige);
    color: var(--red);
    transition: 0.2s;
}

header {
    background-color: var(--blue);
    color: var(--beige);
    display: flex;
    justify-content: center;
    padding: 10px 0 10px 0;
    box-shadow: var(--shadow);
}

.projectTaskContainer {
    display: flex;
    padding: 30px;
    height: 100%;
    gap: 10px;
}

#projectForm,
#taskForm {
    position: fixed;
    width: 100vw;
    height: 100vh;
    display: none;
    align-items: center;
    justify-content: center;
    background-color: rgba(46, 46, 46, 0.7);
}

.formWrapper {
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 15px;
    gap: 15px;
    background-color: var(--blue);
    color: var(--red);
}

input,
select {
    border: none;
    border-radius: 5px;
    color: var(--red);
    padding: 5px;
}

textarea {
    border: none;
    padding: 5px;
    border-radius: 5px;
    color: var(--red);
}

label {
    color: var(--red);

}

.projectsContainer {
    background-color: var(--blue);
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    padding: 10px;
    box-shadow: var(--shadow);
}

.projectsContainer button {
    width: 100%;
    margin-bottom: 8px;
}

#tasksContainer {
    width: 100%;
    background-color: var(--blue);
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    padding: 10px;
    box-shadow: var(--shadow);
}

.task button {
    margin-right: 10px;
}

.task,
.project {
    border: 2px solid var(--beige);
    border-radius: 10px;
    color: var(--beige);
    padding: 10px;
    box-shadow: var(--shadow);
}

.project {
    margin-bottom: 8px;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;IAChB,eAAe;IACf,cAAc;IACd,yCAAyC;AAC7C;;AAEA;IACI,UAAU;IACV,SAAS;IACT,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,8BAA8B;AAClC;;AAEA;IACI,4BAA4B;IAC5B,YAAY;IACZ,mBAAmB;IACnB,4BAA4B;IAC5B,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,8BAA8B;IAC9B,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,6BAA6B;IAC7B,mBAAmB;IACnB,aAAa;IACb,uBAAuB;IACvB,sBAAsB;IACtB,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,aAAa;IACb,YAAY;IACZ,SAAS;AACb;;AAEA;;IAEI,eAAe;IACf,YAAY;IACZ,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,uCAAuC;AAC3C;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,6BAA6B;IAC7B,iBAAiB;AACrB;;AAEA;;IAEI,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;IACjB,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;;AAErB;;AAEA;IACI,6BAA6B;IAC7B,4BAA4B;IAC5B,+BAA+B;IAC/B,aAAa;IACb,yBAAyB;AAC7B;;AAEA;IACI,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,6BAA6B;IAC7B,6BAA6B;IAC7B,gCAAgC;IAChC,aAAa;IACb,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;;IAEI,8BAA8B;IAC9B,mBAAmB;IACnB,mBAAmB;IACnB,aAAa;IACb,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;AACtB","sourcesContent":[":root {\n    --beige: #efe6d5;\n    --blue: #9dbeb7;\n    --red: #e73213;\n    --shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n}\n\n* {\n    padding: 0;\n    margin: 0;\n    font-weight: 700;\n    color: var(--beige);\n}\n\nul {\n    list-style-type: none;\n}\n\nhtml {\n    height: 100%;\n}\n\nbody {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    background-color: var(--beige);\n}\n\nbutton {\n    border: 2px solid var(--red);\n    padding: 5px;\n    border-radius: 10px;\n    background-color: var(--red);\n    color: var(--beige);\n    transition: 0.2s;\n}\n\nbutton:hover {\n    background-color: var(--beige);\n    color: var(--red);\n    transition: 0.2s;\n}\n\nheader {\n    background-color: var(--blue);\n    color: var(--beige);\n    display: flex;\n    justify-content: center;\n    padding: 10px 0 10px 0;\n    box-shadow: var(--shadow);\n}\n\n.projectTaskContainer {\n    display: flex;\n    padding: 30px;\n    height: 100%;\n    gap: 10px;\n}\n\n#projectForm,\n#taskForm {\n    position: fixed;\n    width: 100vw;\n    height: 100vh;\n    display: none;\n    align-items: center;\n    justify-content: center;\n    background-color: rgba(46, 46, 46, 0.7);\n}\n\n.formWrapper {\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    border-radius: 15px;\n    gap: 15px;\n    background-color: var(--blue);\n    color: var(--red);\n}\n\ninput,\nselect {\n    border: none;\n    border-radius: 5px;\n    color: var(--red);\n    padding: 5px;\n}\n\ntextarea {\n    border: none;\n    padding: 5px;\n    border-radius: 5px;\n    color: var(--red);\n}\n\nlabel {\n    color: var(--red);\n\n}\n\n.projectsContainer {\n    background-color: var(--blue);\n    border-top-left-radius: 15px;\n    border-bottom-left-radius: 15px;\n    padding: 10px;\n    box-shadow: var(--shadow);\n}\n\n.projectsContainer button {\n    width: 100%;\n    margin-bottom: 8px;\n}\n\n#tasksContainer {\n    width: 100%;\n    background-color: var(--blue);\n    border-top-right-radius: 15px;\n    border-bottom-right-radius: 15px;\n    padding: 10px;\n    box-shadow: var(--shadow);\n}\n\n.task button {\n    margin-right: 10px;\n}\n\n.task,\n.project {\n    border: 2px solid var(--beige);\n    border-radius: 10px;\n    color: var(--beige);\n    padding: 10px;\n    box-shadow: var(--shadow);\n}\n\n.project {\n    margin-bottom: 8px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _renderContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderContent */ "./src/renderContent.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");
/* harmony import */ var _manageForms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manageForms */ "./src/manageForms.js");







const projectManager = (function () {
    let projects = [];

    const getProjects = () => {
        return projects;
    }

    const addProject = (name, tasks) => {
        let project = (0,_project__WEBPACK_IMPORTED_MODULE_2__["default"])(name);

        if (tasks !== undefined && tasks.length > 0) {
            tasks.forEach(element => {
                project.setTask(element['name'], element['description'], element['dueDate'], element['finished']);
            })
        }

        projects.push(project);

        (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.saveProjects)(projects);
        renderProjects();
    }

    const checkLocalStorage = () => {
        if ((0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.loadProjects)()) {
            let obj = (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.loadProjects)();

            for (const property in obj) {
                addProject(obj[property]['name'], obj[property]['tasks']);
            }

            renderProjects();
        }
    }

    const deleteProject = (name) => {
        projects.forEach(project => {
            if (project.name === name) {
                projects = projects.filter(project => project.name !== name);
            }
        })

        ;(0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.saveProjects)(projects);
        renderProjects();
        _renderContent__WEBPACK_IMPORTED_MODULE_1__["default"].tasksAfterDeletingProject(name);
    }

    const deleteTask = (name, project) => {
        projects.forEach(element => {
            if (element.name === project.name) {
                element.tasks = element.tasks.filter(task => task.name !== name);
                (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.saveProjects)(projects);
            }

        })
    }

    const changeTaskStatus = (project, name) => {
        projects.forEach(element => {
            if (element.name === project.name) {
                element.tasks.forEach(entry => {
                    if (entry.name === name) {
                        entry.changeStatus();
                        entry.finished = (entry.finished === false) ? true : false;
                        (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.saveProjects)(projects);
                    }
                })
            }
        })
    }

    const renderProjects = () => {
        _renderContent__WEBPACK_IMPORTED_MODULE_1__["default"].renderProject(projects);
    }

    const addProjectButton = document.getElementById('newProjectBtn');
    addProjectButton.addEventListener('click', () => {
        (0,_manageForms__WEBPACK_IMPORTED_MODULE_4__.displayProjectForm)();
    })

    const handleAddTask = () => {
        let newTaskBtn = document.getElementById('newTaskBtn');
        newTaskBtn.addEventListener('click', () => {
            (0,_manageForms__WEBPACK_IMPORTED_MODULE_4__.displayTaskForm)();
            (0,_manageForms__WEBPACK_IMPORTED_MODULE_4__.insertProjectOptions)(projects)
        });
    }

    const findProjectByName = (name) => {
        return projects.find(element => element.name === name);
    }

    return {
        addProject,
        renderProjects,
        deleteProject,
        deleteTask,
        getProjects,
        checkLocalStorage,
        changeTaskStatus,
        handleAddTask,
        findProjectByName
    }
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectManager);

projectManager.checkLocalStorage();
projectManager.handleAddTask();


/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearStorage: () => (/* binding */ clearStorage),
/* harmony export */   loadProjects: () => (/* binding */ loadProjects),
/* harmony export */   saveProjects: () => (/* binding */ saveProjects)
/* harmony export */ });
// export function saveTasks(tasksArray) {
//     if (tasksArray !== null) {
//         localStorage.setItem('tasks', JSON.stringify(tasksArray));
//     }
// }

// export function loadTasks() {
//     return JSON.parse(localStorage.getItem('tasks'));
// }

function saveProjects(projectsArray) {
    if (projectsArray !== null) {
        localStorage.setItem('projects', JSON.stringify(projectsArray));
    }
}

function loadProjects() {
    return JSON.parse(localStorage.getItem('projects'));
}

function clearStorage() {
    localStorage.clear();
    location.reload();
}

//For testing
const clearStorageBtn = document.getElementById('clearStorage');

clearStorageBtn.addEventListener('click', clearStorage);

/***/ }),

/***/ "./src/manageForms.js":
/*!****************************!*\
  !*** ./src/manageForms.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayProjectForm: () => (/* binding */ displayProjectForm),
/* harmony export */   displayTaskForm: () => (/* binding */ displayTaskForm),
/* harmony export */   getProjectFormData: () => (/* binding */ getProjectFormData),
/* harmony export */   getTaskFormData: () => (/* binding */ getTaskFormData),
/* harmony export */   insertProjectOptions: () => (/* binding */ insertProjectOptions)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");


function displayProjectForm() {
    let form = document.getElementById('projectForm');
    form.style.display = (getComputedStyle(form).display === 'none') ? 'flex' : 'none';
}
function getProjectFormData() {
    let title = document.getElementById('projectName').value;

    document.getElementById('projectName').value = '';
    return {
        title
    }
}
const AddNewProjectBtn = document.getElementById('addProject');

AddNewProjectBtn.addEventListener('click', () => {
    let obj = getProjectFormData();

    if (obj.title) {
        ___WEBPACK_IMPORTED_MODULE_0__["default"].addProject(obj.title);
        ___WEBPACK_IMPORTED_MODULE_0__["default"].renderProjects();

        displayProjectForm();
    }
})

function displayTaskForm() {
    let form = document.getElementById('taskForm');
    form.style.display = (getComputedStyle(form).display === 'none') ? 'flex' : 'none';
}
function getTaskFormData() {
    let title = document.getElementById('taskName').value;
    let dueDate = document.getElementById('dueDate').value;
    let description = document.getElementById('taskDescription').value;
    let project = document.getElementById('projectInput').value;

    document.getElementById('taskName').value = '';
    document.getElementById('dueDate').value = '';
    document.getElementById('taskDescription').value = '';

    return {
        title,
        description,
        dueDate,
        project
    }
}

const addTaskBtn = document.getElementById('addTask');
addTaskBtn.addEventListener('click', () => {
    let { title, dueDate, description, project } = getTaskFormData();
    let obj = ___WEBPACK_IMPORTED_MODULE_0__["default"].findProjectByName(project);

    if (title && dueDate && description) {
        obj.setTask(title, description, dueDate);
        obj.refreshTasks();

        displayTaskForm();
    }
})

function insertProjectOptions(projects) {
    let container = document.getElementById('projectInput');
    container.innerHTML = '';

    projects.forEach(element => {
        let option = document.createElement('option');
        option.setAttribute('value', element.name);
        option.innerHTML = element.name;

        container.appendChild(option);
    });
}


/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _renderContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderContent */ "./src/renderContent.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");





function Project(name) {
    let tasks = [];

    const setTask = (name, description, dueDate, finished) => {
        let temp = (0,_tasks__WEBPACK_IMPORTED_MODULE_2__["default"])(name, description, dueDate, finished);
        tasks.push(temp);

        (0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.saveProjects)(___WEBPACK_IMPORTED_MODULE_0__["default"].getProjects());
    }

    const getTasks = () => {
        return tasks;
    }

    const getName = () => {
        return name;
    }

    function deleteTask(name) {
        tasks.forEach(task => {
            if (task.name === name) {
                tasks = tasks.filter(task => task.name !== name);
                ___WEBPACK_IMPORTED_MODULE_0__["default"].deleteTask(name, this);
            }
        })

        refreshTasks(this);
    }

    function refreshTasks(project = this) {
        _renderContent__WEBPACK_IMPORTED_MODULE_1__["default"].renderTasks(tasks, project);
    }
    return {
        name,
        tasks,
        getName,
        setTask,
        getTasks,
        refreshTasks,
        deleteTask
    }
}

/***/ }),

/***/ "./src/renderContent.js":
/*!******************************!*\
  !*** ./src/renderContent.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");


let renderContent = (function () {
    const renderProject = (array) => {
        let container = document.getElementById('projectsList');
        container.innerHTML = '';

        array.forEach(element => {
            let projectContainer = document.createElement('div');
            projectContainer.classList.add('project');

            let title = document.createElement('p');
            title.innerHTML = "Title: " + element.name;
            title.addEventListener('click', () => {
                renderTasks(element.getTasks(), element);
            })

            let delBtn = document.createElement('button');
            delBtn.innerHTML = 'Delete project';
            delBtn.addEventListener('click', () => {
                ___WEBPACK_IMPORTED_MODULE_0__["default"].deleteProject(element.name);
            })

            projectContainer.appendChild(title)
            projectContainer.appendChild(delBtn);

            container.appendChild(projectContainer);
        })

    }

    const renderTasks = (array, project) => {

        let container = document.getElementById('tasksContainer');
        container.innerHTML = '';

        let tasksContainer = document.createElement('ul');
        tasksContainer.id = 'tasksList';

        if (array.length != 0) {
            array.forEach(element => {
                let task = document.createElement('li');
                task.classList.add('task');

                let title = document.createElement('p');
                title.innerHTML = "Title: " + element.name;

                let description = document.createElement('p');
                description.innerHTML = "Description: " + element.description;
                console.log(element.description);

                let dueDate = document.createElement('p');
                dueDate.innerHTML = "Due date: " + element.dueDate;
                console.log(element.dueDate);

                let status = document.createElement('p');
                status.innerHTML = "Status: " + ((element.getStatus() === true) ? 'finished' : 'not finished');

                let statusChange = document.createElement('button');
                statusChange.innerHTML = 'Change status';
                statusChange.addEventListener('click', () => {
                    ___WEBPACK_IMPORTED_MODULE_0__["default"].changeTaskStatus(project, element.name);
                    status.innerHTML = "Status: " + ((element.getStatus() === true) ? 'finished' : 'not finished');
                });

                let delBtn = document.createElement('button');
                delBtn.innerHTML = 'Delete Task';
                delBtn.addEventListener('click', () => {
                    project.deleteTask(element.name);

                })

                task.appendChild(title);
                task.appendChild(description);
                task.appendChild(dueDate);
                task.appendChild(status);
                task.appendChild(statusChange);
                task.appendChild(delBtn);

                tasksContainer.appendChild(task);
            });

        }

        else {
            let p = document.createElement('p');
            p.innerHTML = 'No tasks found. Click "Add new task".';

            tasksContainer.appendChild(p);
        }

        container.appendChild(tasksContainer);
    }

    const tasksAfterDeletingProject = (name) => {
        let container = document.getElementById('tasksContainer');
        container.innerHTML = '';

        let p = document.createElement('p');
        p.innerHTML = `Project ${name} deleted. Select another to make changes or view tasks.`;

        container.appendChild(p);
    }

    return {
        renderProject,
        renderTasks,
        tasksAfterDeletingProject
    }
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderContent);

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ task)
/* harmony export */ });
function task(name, description, dueDate, finished = false) {
    const getTaskInfo = () => {
        return {
            name, description, dueDate
        }
    }

    const getStatus = () => {
        return finished;
    }

    const changeStatus = () => {
        console.log("Before change: ", finished);
        finished = !finished;
        console.log("After change: ", finished);

    }

    return {
        name,
        description,
        dueDate,
        finished,
        getTaskInfo,
        getStatus,
        changeStatus
    }
}

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map