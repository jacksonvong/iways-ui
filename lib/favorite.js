module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ 1:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export noop */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return hasOwn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return toObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getValueByPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getPropByPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return generateId; });
/* unused harmony export valueEquals */
/* unused harmony export escapeRegexpString */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return arrayFindIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return arrayFind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return coerceTruthyValueToArray; });
/* unused harmony export isIE */
/* unused harmony export isEdge */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return chunk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return substr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return arr2table; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return findInArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return treeDeep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return recursiveLoop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return deepClone; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };



var hasOwnProperty = Object.prototype.hasOwnProperty;

function noop() {}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function extend(to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to;
}

function toObject(arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res;
}

var getValueByPath = function getValueByPath(object, prop) {
  prop = prop || '';
  var paths = prop.split('.');
  var current = object;
  var result = null;
  for (var i = 0, j = paths.length; i < j; i++) {
    var path = paths[i];
    if (!current) break;

    if (i === j - 1) {
      result = current[path];
      break;
    }
    current = current[path];
  }
  return result;
};

function getPropByPath(obj, path, strict) {
  var tempObj = obj;
  path = path.replace(/\[(\w+)\]/g, '.$1');
  path = path.replace(/^\./, '');

  var keyArr = path.split('.');
  var i = 0;
  for (var len = keyArr.length; i < len - 1; ++i) {
    if (!tempObj && !strict) break;
    var key = keyArr[i];
    if (key in tempObj) {
      tempObj = tempObj[key];
    } else {
      if (strict) {
        throw new Error('please transfer a valid prop path to form item!');
      }
      break;
    }
  }
  return {
    o: tempObj,
    k: keyArr[i],
    v: tempObj ? tempObj[keyArr[i]] : null
  };
}

var generateId = function generateId() {
  return Math.floor(Math.random() * 10000);
};

var valueEquals = function valueEquals(a, b) {
  // see: https://stackoverflow.com/questions/3115982/how-to-check-if-two-arrays-are-equal-with-javascript
  if (a === b) return true;
  if (!(a instanceof Array)) return false;
  if (!(b instanceof Array)) return false;
  if (a.length !== b.length) return false;
  for (var i = 0; i !== a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};

var escapeRegexpString = function escapeRegexpString() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return String(value).replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
};

// TODO: use native Array.find, Array.findIndex when IE support is dropped
var arrayFindIndex = function arrayFindIndex(arr, pred) {
  for (var i = 0; i !== arr.length; ++i) {
    if (pred(arr[i])) {
      return i;
    }
  }
  return -1;
};

var arrayFind = function arrayFind(arr, pred) {
  var idx = arrayFindIndex(arr, pred);
  return idx !== -1 ? arr[idx] : undefined;
};

// coerce truthy value to array
var coerceTruthyValueToArray = function coerceTruthyValueToArray(val) {
  if (Array.isArray(val)) {
    return val;
  } else if (val) {
    return [val];
  } else {
    return [];
  }
};

var isIE = function isIE() {
  return !vue__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.$isServer && !isNaN(Number(document.documentMode));
};

var isEdge = function isEdge() {
  return !vue__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.$isServer && navigator.userAgent.indexOf('Edge') > -1;
};

var chunk = function chunk(data, count) {
  var result = [];
  if (!(data instanceof Array)) return data;
  data.forEach(function (item, index) {
    var temp = Math.floor(index / count);
    if (!(result[temp] instanceof Array)) {
      result[temp] = [];
    }
    result[temp].push(item);
  });
  return result;
};

function strlen(str) {
  var strlen = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 128) {
      strlen += 2;
    } else {
      strlen++;
    }
  }
  return strlen;
}

var substr = function substr(str, len) {
  var strlength = 0;
  var s = '';
  var plen = 0;
  if (strlen(str) <= len) {
    return str;
  }
  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 128) {
      strlength += 2;
      plen = 2;
    } else {
      strlength++;
      plen = 1;
    }
    s += str.charAt(i);
    if (strlength >= len - plen) {
      return s + '...';
    }
  }
  return s;
};

/**
 * 重构树数组
 * @param {Array} _array_tree 树的数组
 * @param {String} son 子节点键
 * @param {Number} level 层级默认值
 */
function getTree(_array_tree) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var parent = arguments[3];

  var _Object$assign = Object.assign({
    key: 'key',
    value: 'value',
    son: 'children',
    pKey: 'parent',
    appendPKey: false,
    selected: [],
    multiple: true,
    leaf: false,
    disabledSelect: [],
    keyword: ''
  }, options),
      key = _Object$assign.key,
      value = _Object$assign.value,
      son = _Object$assign.son,
      pKey = _Object$assign.pKey,
      selected = _Object$assign.selected,
      multiple = _Object$assign.multiple,
      leaf = _Object$assign.leaf,
      disabledSelect = _Object$assign.disabledSelect,
      keyword = _Object$assign.keyword,
      appendPKey = _Object$assign.appendPKey;

  var tree = [];

  var _loop = function _loop(i) {
    var _tree = {};
    var sub = null;
    for (var _key in _array_tree[i]) {
      if (_key === son) {
        sub = _array_tree[i][son];
      } else {
        _tree[_key] = _array_tree[i][_key];
      }
    }
    _tree['level'] = level;
    // 不输出禁选
    if (disabledSelect.length > 0) {
      if (disabledSelect && disabledSelect[0] && _typeof(disabledSelect[0]) === 'object') {
        if (disabledSelect.find(function (item) {
          return item && item[key] && item[key] === _tree[key] && item[value] === _tree[value];
        })) return 'continue';
      } else {
        if (disabledSelect.includes(_tree[key])) return 'continue';
      }
    }
    if (parent && parent['level'] >= 0) {
      _tree[pKey] = {
        key: parent[key],
        value: parent[value],
        level: parseInt(parent['level'])
      };
      if (parent.parent) {
        _tree['parent'].parent = parent.parent;
      }
      if (appendPKey) {
        _tree[key] = [parent[key], _tree[key]].join('-');
      }
    }
    if (!_tree['disabled']) {
      if (selected && selected[0] && _typeof(selected[0]) === 'object') {
        _tree['selected'] = !!selected.find(function (item) {
          return item && item[key] !== undefined && item[key] === _tree[key] && item[value] === _tree[value];
        });
      } else {
        _tree['selected'] = selected.includes(_tree[key]);
      }
    }
    if (sub) {
      var sub_array = getTree(sub, options, level + 1, _tree);
      if (sub_array && sub_array.length) {
        _tree[son] = sub_array;
        if (leaf) {
          var _count = sub_array.filter(function (item) {
            return item.selected;
          }).length;
          if (multiple) {
            _tree['selected'] = sub_array.length === _count;
            _tree['indeterminate'] = sub_array.length > _count && _count > 0;
          } else {
            _tree['selected'] = _count > 0;
          }
        }
      } else if (sub_array.length === 0 && leaf) {
        return 'continue';
      } else if (keyword && _tree[value].indexOf(keyword) === -1) {
        return 'continue';
      }
    } else {
      if (keyword && _tree[value].indexOf(keyword) === -1) {
        return 'continue';
      }
    }
    tree.push(_tree);
  };

  for (var i in _array_tree) {
    var _ret = _loop(i);

    if (_ret === 'continue') continue;
  }
  return tree;
}
/**
 * 树数组转成一维数组
 * @param {Array} _array_tree 树的数组
 * @param {String} son 子节点键
 * @param {Boolean} leaf 是否只取叶节点
 * @param {Number} level 层级默认值
 */
function arr2table(_array_tree) {
  var son = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'children';
  var leaf = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var level = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var parent = arguments[4];

  var tree = [];
  for (var i in _array_tree) {
    var _tree2 = _array_tree[i];
    var _sub = _tree2[son];
    _tree2['level'] = level;
    if (leaf && (!_sub || !_sub.length)) {
      tree.push(_tree2);
    } else if (!leaf) {
      tree.push(_tree2);
    }
    if (_sub) {
      var sub_array = arr2table(_sub, son, leaf, level + 1, _tree2);
      tree = tree.concat(sub_array);
    }
  }
  return tree;
}
function findInArray(key, value, arr) {
  var sub = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'sub';
  var level = arguments[4];
  var output = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];

  if (typeof key !== 'string' || value === undefined || (typeof arr === 'undefined' ? 'undefined' : _typeof(arr)) !== 'object') return {};
  for (var i in arr) {
    var item = arr[i];
    if (item[key] !== undefined && item[key] === value && item['level'] === level) {
      output.push(item);
    } else if (item.hasOwnProperty(sub) && _typeof(item[sub]) === 'object') {
      findInArray(key, value, item[sub], sub, level, output);
    }
  }
  return output.length > 0 ? output[0] : {};
}
function treeDeep(jsonData) {
  var num = 0;
  function recursion(data, k) {
    num = Math.max(num, k);
    for (var x in data) {
      var obj = data[x];
      if (obj.children) {
        recursion(obj.children, k + 1);
      }
    }
  }
  recursion(jsonData, 1);
  return num;
}
function recursiveLoop(data) {
  var loopKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'parent';
  var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'key';
  var output = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

  if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) !== 'object' || data === null) {
    output.push(data);
  } else if (!(data instanceof Array)) {
    output.push(data[key] !== undefined ? data[key] : data);
    if (data.hasOwnProperty(loopKey)) {
      var _item = data[loopKey];
      recursiveLoop(_item, loopKey, key, output);
    }
  } else {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;

        recursiveLoop(item, loopKey, key, output);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }
  return output;
}
function deepClone(source) {
  var sourceCopy = source instanceof Array ? [] : {};
  for (var item in source) {
    sourceCopy[item] = _typeof(source[item]) === 'object' ? deepClone(source[item]) : source[item];
  }
  return sourceCopy;
}

/***/ }),

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/favorite/src/favorite.vue?vue&type=template&id=18ef8066&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticStyle: { display: "inline-block" } },
    [
      _vm.popover === "IwDialog"
        ? _c(
            "div",
            {
              on: {
                click: function($event) {
                  _vm.visible = true
                }
              }
            },
            [
              _vm._t("reference", [
                _vm._v(
                  _vm._s(_vm.placeholder || _vm.t("iw.common.placeholder"))
                )
              ])
            ],
            2
          )
        : _vm._e(),
      _c(
        _vm.popover,
        {
          tag: "component",
          class:
            _vm.popover !== "IwPopover"
              ? "iw-favorite iw-favorite--" +
                _vm.iwSize +
                (_vm.disabled ? " iw-favorite--disabled" : "")
              : "",
          attrs: {
            visible: _vm.visible,
            trigger: _vm.trigger,
            placement: _vm.placement,
            "append-to-body":
              _vm.popover === "IwPopover" ? _vm.appendToBody : true,
            "popper-class":
              _vm.popover === "IwPopover"
                ? "iw-favorite iw-favorite--" +
                  _vm.iwSize +
                  (_vm.disabled ? " iw-favorite--disabled" : "")
                : "",
            disabled: _vm.disabled,
            width: _vm.popover === "IwPopover" ? null : "650px",
            title: _vm.popover === "IwPopover" ? null : false,
            "before-close": _vm.beforeClose
          },
          on: {
            "update:visible": function($event) {
              _vm.visible = $event
            }
          },
          model: {
            value: _vm.visible,
            callback: function($$v) {
              _vm.visible = $$v
            },
            expression: "visible"
          }
        },
        [
          _c(
            "div",
            {
              staticClass: "iw-favorite-reference",
              attrs: { slot: "reference" },
              slot: "reference"
            },
            [
              _c(
                "div",
                {
                  class: [
                    {
                      "is-focus": !_vm.disabled && _vm.visible,
                      "is-disabled": _vm.disabled
                    },
                    "iw-input",
                    "iw-input--" + _vm.iwSize
                  ],
                  style: _vm.referenceWidth
                    ? "width:" + _vm.referenceWidth + "px"
                    : ""
                },
                [
                  _vm.popover === "IwPopover"
                    ? _c("div", { staticClass: "iw-input__inner" }, [
                        _vm.checkedOption[_vm.optionProps.value]
                          ? _c("span", { staticClass: "iw-input__value" }, [
                              _vm.showFolder
                                ? _c("input", {
                                    style:
                                      "width:" +
                                      (_vm.referenceWidth - 36) +
                                      "px",
                                    attrs: {
                                      disabled: _vm.disabled,
                                      unselectable: "on",
                                      readonly: ""
                                    },
                                    domProps: {
                                      value:
                                        _vm.checkedOption[_vm.optionProps.label]
                                    }
                                  })
                                : _c("input", {
                                    style:
                                      "width:" +
                                      (_vm.referenceWidth - 36) +
                                      "px",
                                    attrs: {
                                      disabled: _vm.disabled,
                                      unselectable: "on",
                                      readonly: ""
                                    },
                                    domProps: {
                                      value: _vm.checkedOption.children
                                        .map(function(item) {
                                          return item[_vm.optionProps.label]
                                        })
                                        .join(", ")
                                    }
                                  })
                            ])
                          : _c("span", { staticClass: "iw-input__value" }, [
                              _c("input", {
                                staticClass: "iw-input__placeholder",
                                style:
                                  "width:" + (_vm.referenceWidth - 36) + "px",
                                attrs: {
                                  disabled: _vm.disabled,
                                  unselectable: "on",
                                  readonly: ""
                                },
                                domProps: {
                                  value:
                                    _vm.placeholder ||
                                    _vm.t("iw.common.placeholder")
                                }
                              })
                            ]),
                        _c(
                          "span",
                          { staticClass: "iw-input__suffix" },
                          [
                            _vm._t("default", [
                              _c("i", {
                                class: [
                                  "iw-input__icon",
                                  "iw-icon-" + _vm.iconClass
                                ]
                              })
                            ])
                          ],
                          2
                        )
                      ])
                    : _vm._e()
                ]
              )
            ]
          ),
          !_vm.disabled
            ? _c(
                "div",
                {
                  style: { width: "650px", minWidth: "400px" },
                  attrs: { id: "iw-favorite__popover--" + _vm.id }
                },
                [
                  _vm.title
                    ? _c("div", { staticClass: "iw-favorite__title" }, [
                        _vm.title
                          ? _c("div", { staticClass: "iw-favorite__inner" }, [
                              _vm._v(_vm._s(_vm.title))
                            ])
                          : _vm._e(),
                        _vm.error
                          ? _c(
                              "div",
                              {
                                class: [
                                  "iw-favorite__error",
                                  "iw-favorite__error--" + _vm.size
                                ]
                              },
                              [_vm._v(_vm._s(_vm.error))]
                            )
                          : _vm._e(),
                        _c(
                          "div",
                          {
                            staticClass: "iw-favorite__close",
                            on: { click: _vm.close }
                          },
                          [_c("i", { staticClass: "iw-icon-close" })]
                        )
                      ])
                    : _vm._e(),
                  _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "loading",
                          rawName: "v-loading",
                          value: _vm.loading,
                          expression: "loading"
                        }
                      ],
                      staticClass: "iw-favorite__body"
                    },
                    [
                      _vm.tableList.length
                        ? _c("div", [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "iw-favorite__body-header iw-favorite__wrap"
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "iw-favorite__group" },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass: "iw-favorite__group_table"
                                      },
                                      [
                                        _c("div", [
                                          _c("dl", [
                                            _c("dt", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.t("iw.favorite.folder")
                                                )
                                              )
                                            ]),
                                            _c(
                                              "dt",
                                              {
                                                style: {
                                                  width:
                                                    (_vm.mode === "edit"
                                                      ? 385
                                                      : 490) + "px"
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.subType ||
                                                      _vm.titles[_vm.type]
                                                  )
                                                )
                                              ]
                                            ),
                                            _vm.mode === "edit"
                                              ? _c("dt", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.t(
                                                        "iw.favorite.operation"
                                                      )
                                                    )
                                                  )
                                                ])
                                              : _vm._e()
                                          ])
                                        ])
                                      ]
                                    )
                                  ]
                                )
                              ]
                            ),
                            _c("div", { staticClass: "iw-favorite__wrap" }, [
                              _c("div", { staticClass: "iw-favorite__group" }, [
                                _c(
                                  "div",
                                  { staticClass: "iw-favorite__group_table" },
                                  [
                                    _c(
                                      "div",
                                      _vm._l(_vm.tableList, function(
                                        row,
                                        index
                                      ) {
                                        return _c(
                                          "dl",
                                          { key: row[_vm.optionProps.value] },
                                          [
                                            _c("dt", [
                                              _c("div", [
                                                _vm.mode !== "edit"
                                                  ? _c("span", {
                                                      class: [
                                                        "iw-radio",
                                                        row.key ===
                                                        _vm.checkedValue
                                                          ? "iw-radio--checked"
                                                          : ""
                                                      ],
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          _vm.handleRadioClick(
                                                            row,
                                                            index
                                                          )
                                                        }
                                                      }
                                                    })
                                                  : _vm._e(),
                                                _vm.mode !== "edit"
                                                  ? _c(
                                                      "span",
                                                      {
                                                        staticClass: "iw-text"
                                                      },
                                                      [
                                                        _c(
                                                          "label",
                                                          {
                                                            attrs: {
                                                              title:
                                                                row["value"]
                                                            },
                                                            on: {
                                                              click: function(
                                                                $event
                                                              ) {
                                                                _vm.handleRadioClick(
                                                                  row,
                                                                  index
                                                                )
                                                              }
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(
                                                                row["value"]
                                                              )
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    )
                                                  : _vm._e(),
                                                _vm.mode === "edit"
                                                  ? _c(
                                                      "span",
                                                      {
                                                        staticClass: "iw-text"
                                                      },
                                                      [
                                                        _c("iw-input", {
                                                          staticStyle: {
                                                            width: "146px"
                                                          },
                                                          attrs: {
                                                            disabled:
                                                              _vm.mode !==
                                                              "edit",
                                                            size: _vm.iwSize,
                                                            placeholder: _vm.t(
                                                              "iw.favorite.placeholder"
                                                            )
                                                          },
                                                          model: {
                                                            value: row["value"],
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                row,
                                                                "value",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "row['value']"
                                                          }
                                                        })
                                                      ],
                                                      1
                                                    )
                                                  : _vm._e()
                                              ])
                                            ]),
                                            _c(
                                              "dt",
                                              {
                                                style: {
                                                  width:
                                                    (_vm.mode === "edit"
                                                      ? 385
                                                      : 490) + "px",
                                                  maxHeight: "48px"
                                                }
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    class: {
                                                      "children--model-edit":
                                                        _vm.mode === "edit"
                                                    }
                                                  },
                                                  [
                                                    row.children &&
                                                    row.children.length
                                                      ? _c("span", {
                                                          staticClass:
                                                            "iw-favorite__item iw-favorite__item--text",
                                                          domProps: {
                                                            innerHTML: _vm._s(
                                                              row.children
                                                                .map(function(
                                                                  item
                                                                ) {
                                                                  return (
                                                                    "<em title=" +
                                                                    item.value +
                                                                    " class=" +
                                                                    (item.remark ==
                                                                    "进口"
                                                                      ? "font-orange"
                                                                      : "font-blue") +
                                                                    ">" +
                                                                    item.value +
                                                                    "</em>"
                                                                  )
                                                                })
                                                                .join(" , ")
                                                            )
                                                          }
                                                        })
                                                      : _vm._e(),
                                                    _vm.mode === "edit"
                                                      ? _c(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "iw-favorite__item iw-favorite__item--select"
                                                          },
                                                          [
                                                            _c(
                                                              _vm.componentName,
                                                              {
                                                                tag:
                                                                  "component",
                                                                attrs: {
                                                                  "disabled-select":
                                                                    _vm
                                                                      .dataForm[
                                                                      _vm.type +
                                                                        "Disabled"
                                                                    ][index],
                                                                  data:
                                                                    _vm
                                                                      .searchFormData[
                                                                      _vm.type
                                                                    ],
                                                                  "show-search": true,
                                                                  "show-selected":
                                                                    _vm.showSelected,
                                                                  "show-letter":
                                                                    _vm.showLetter,
                                                                  filters:
                                                                    _vm.filters,
                                                                  "selected-filter":
                                                                    _vm.selectedFilter,
                                                                  title:
                                                                    _vm.titles[
                                                                      _vm.type
                                                                    ],
                                                                  "append-to-body": false,
                                                                  "select-on-leaf":
                                                                    "",
                                                                  multiple: "",
                                                                  size: "mini",
                                                                  placement:
                                                                    "bottom-start"
                                                                },
                                                                on: {
                                                                  filterChange: function(
                                                                    value,
                                                                    text
                                                                  ) {
                                                                    return _vm.handleFilterChange(
                                                                      value,
                                                                      text,
                                                                      index
                                                                    )
                                                                  },
                                                                  change: function(
                                                                    value,
                                                                    text
                                                                  ) {
                                                                    return _vm.handleChange(
                                                                      value,
                                                                      text,
                                                                      index
                                                                    )
                                                                  }
                                                                },
                                                                model: {
                                                                  value:
                                                                    _vm
                                                                      .dataForm[
                                                                      _vm.type
                                                                    ][index],
                                                                  callback: function(
                                                                    $$v
                                                                  ) {
                                                                    _vm.$set(
                                                                      _vm
                                                                        .dataForm[
                                                                        _vm.type
                                                                      ],
                                                                      index,
                                                                      $$v
                                                                    )
                                                                  },
                                                                  expression:
                                                                    "dataForm[type][index]"
                                                                }
                                                              },
                                                              [
                                                                _c(
                                                                  "span",
                                                                  {
                                                                    staticClass:
                                                                      "iw-favorite__button--select",
                                                                    attrs: {
                                                                      slot:
                                                                        "reference"
                                                                    },
                                                                    slot:
                                                                      "reference"
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        _vm.t(
                                                                          "iw.favorite.select"
                                                                        )
                                                                      )
                                                                    )
                                                                  ]
                                                                )
                                                              ]
                                                            )
                                                          ],
                                                          1
                                                        )
                                                      : _vm._e()
                                                  ]
                                                )
                                              ]
                                            ),
                                            _vm.mode === "edit"
                                              ? _c("dt", [
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "iw-favorite__button iw-favorite__button--del",
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          _vm.del(index)
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.t(
                                                            "iw.favorite.del"
                                                          )
                                                        )
                                                      )
                                                    ]
                                                  ),
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "iw-favorite__button iw-favorite__button--copy",
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          _vm.copy(index)
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.t(
                                                            "iw.favorite.copy"
                                                          )
                                                        )
                                                      )
                                                    ]
                                                  )
                                                ])
                                              : _vm._e()
                                          ]
                                        )
                                      }),
                                      0
                                    )
                                  ]
                                )
                              ])
                            ])
                          ])
                        : _c("iw-empty", {
                            style: { height: "150px" },
                            attrs: { status: _vm.status }
                          })
                    ],
                    1
                  ),
                  _c(
                    "div",
                    { staticClass: "iw-favorite__footer" },
                    [
                      _vm._t("desc"),
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.mode === "view",
                              expression: "mode==='view'"
                            }
                          ]
                        },
                        [
                          _vm.editable
                            ? _c(
                                "iw-button",
                                {
                                  attrs: { size: _vm.iwSize },
                                  on: {
                                    click: function($event) {
                                      _vm.edit()
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n            " +
                                      _vm._s(_vm.t("iw.favorite.edit")) +
                                      "\n          "
                                  )
                                ]
                              )
                            : _vm._e(),
                          _c(
                            "iw-button",
                            {
                              attrs: { size: _vm.iwSize, type: "primary" },
                              on: {
                                click: function($event) {
                                  _vm.submit(false)
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n            " +
                                  _vm._s(_vm.t("iw.favorite.confirm")) +
                                  "\n          "
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.mode === "edit",
                              expression: "mode==='edit'"
                            }
                          ]
                        },
                        [
                          _c(
                            "iw-button",
                            {
                              attrs: { size: _vm.iwSize },
                              on: {
                                click: function($event) {
                                  _vm.create()
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n            " +
                                  _vm._s(_vm.t("iw.favorite.create")) +
                                  "\n          "
                              )
                            ]
                          ),
                          _c(
                            "iw-button",
                            {
                              attrs: { size: _vm.iwSize },
                              on: {
                                click: function($event) {
                                  _vm.cancel()
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n            " +
                                  _vm._s(_vm.t("iw.favorite.cancel")) +
                                  "\n          "
                              )
                            ]
                          ),
                          _c(
                            "iw-button",
                            {
                              attrs: { size: _vm.iwSize, type: "primary" },
                              on: {
                                click: function($event) {
                                  _vm.save()
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n            " +
                                  _vm._s(_vm.t("iw.favorite.save")) +
                                  "\n          "
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ],
                    2
                  )
                ]
              )
            : _vm._e()
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/favorite/src/favorite.vue?vue&type=template&id=18ef8066&

// EXTERNAL MODULE: ./src/utils/util.js
var util = __webpack_require__(1);

// EXTERNAL MODULE: ./src/mixins/locale.js
var locale = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/favorite/src/favorite.vue?vue&type=script&lang=js&
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var favoritevue_type_script_lang_js_ = ({
  name: 'IwFavorite',
  mixins: [locale["a" /* default */]],
  props: {
    value: {
      type: [String, Number],
      default: function _default() {
        return;
      }
    },
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    id: {
      type: Number,
      default: function _default() {
        return parseInt(Math.random() * 10000);
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    editable: {
      type: Boolean,
      default: true
    },
    showFolder: {
      // 默认显示文件夹名称，false表示显示具体收藏项目
      type: Boolean,
      default: true
    },
    trigger: {
      // 触发方式， 可选：hover/focus/click/contextmenu
      type: String,
      default: 'click'
    },
    placement: {
      // 气泡框位置， 可选：top left right bottom topLeft topRight bottomLeft bottomRight leftTop leftBottom rightTop rightBottom
      type: String,
      default: ''
    },
    appendToBody: {
      // 是否插入至body下, 默认true
      type: Boolean,
      default: true
    },
    size: {
      // 组件尺寸
      type: String,
      default: '' // 可选: large || default || small
    },
    showIcon: {
      type: Boolean,
      default: true
    },
    title: {
      // 标题： 为空就不显示
      type: [Boolean, String],
      default: false
    },
    selectTitle: {
      // 选择器标题 20191111 远杰
      type: [Boolean, String],
      default: false
    },
    type: {
      type: String,
      default: function _default() {
        return 'subModel'; // ['manfBrand', 'subModel', 'segment']
      }
    },
    subType: {
      type: String,
      default: undefined // ['生产商品牌', '厂商', '品牌', '生产商集团']
    },
    typeData: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    require: {
      // 当此项为 true 时，必须选择
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    optionProps: {
      type: Object,
      default: function _default() {
        return {
          label: 'value',
          value: 'key',
          children: 'children'
        };
      }
    },
    isModal: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    placeholder: {
      type: String,
      default: ''
    },
    loading: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    status: {
      type: [Number, String],
      default: 200
    },
    showSelected: {
      // 是否显示已选项
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      visible: false,
      popover: 'IwPopover',
      referenceWidth: null,
      error: '', // 错误信息
      checkedValue: undefined,
      checkedOption: {},
      mode: 'view', // ['view', 'edit']
      maxLength: 10,
      propsOptions: {
        title: this.title
      },
      tableList: [],
      titles: {
        subModel: this.selectTitle || this.t('iw.favorite.subModel'),
        manfBrand: this.selectTitle || this.t('iw.favorite.manfBrand'),
        segment: this.selectTitle || this.t('iw.favorite.segment')
      },
      // 编辑状态
      dataForm: {
        manfBrand: [],
        manfBrandText: [],
        manfBrandDisabled: [],
        subModel: [],
        subModelText: [],
        subModelDisabled: [],
        segment: [],
        segmentText: [],
        segmentDisabled: []
      },
      searchFormData: {
        manfBrand: [], // 产商品牌
        subModel: [], // 子车型
        segment: [] // 子车型
      },
      segmentSubModel: [],
      brandSubModel: [],
      showLetter: false,
      filters: [],
      selectedFilter: 1
    };
  },

  computed: {
    iwSize: function iwSize() {
      return this.size || (this.$IWAYS || {}).size;
    },
    iconClass: function iconClass() {
      return this.visible && !this.disabled ? 'arrow-up is-reverse' : 'arrow-up';
    },
    componentName: function componentName() {
      var type = ['segment', 'region'].includes(this.type) ? 'cascader' : this.type;
      return 'iw-' + type.toLowerCase();
    }
  },
  watch: {
    data: function data() {
      this.init();
    },
    typeData: function typeData() {
      this.init();
    },
    visible: function visible() {
      this.mode = 'view';
      this.init();
    },

    // 选择器标题发生变化 20191111 远杰
    selectTitle: function selectTitle() {
      switch (this.type) {
        case 'subModel':
          this.$set(this.titles, 'subModel', this.selectTitle || this.t('iw.favorite.subModel'));
          break;
        case 'manfBrand':
          this.$set(this.titles, 'manfBrand', this.selectTitle || this.t('iw.favorite.manfBrand'));
          break;
        case 'segment':
          this.$set(this.titles, 'segment', this.selectTitle || this.t('iw.favorite.segment'));
          break;
      }
    }
  },
  mounted: function mounted() {
    this.popover = this.isModal ? 'IwDialog' : 'IwPopover';
    this.referenceWidth = this.$el.offsetWidth || 100;
    this.init();
  },

  methods: {
    init: function init() {
      this.error = '';
      this.initValue();
      this.initData();
    },
    initValue: function initValue() {
      var _this = this;

      this.checkedValue = this.value;
      this.checkedOption = this.data.find(function (item) {
        return item.key === _this.checkedValue;
      }) || {};
    },
    initData: function initData() {
      var _this2 = this;

      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.data;

      this.tableList = Object(util["f" /* deepClone */])(data).map(function (row, index) {
        row.key = row.key;
        if (_this2.checkedValue) {
          row.selected = _this2.checkedValue === row.key;
        } else if (row.selected) _this2.checkedValue = row.key;
        _this2.checkedOption = _this2.data.find(function (item) {
          return item.key === _this2.checkedValue;
        }) || {};
        if (_this2.type === 'manfBrand') {
          _this2.$set(_this2.dataForm[_this2.type], index, [row.children.map(function (item) {
            return item.key;
          })]);
          _this2.$set(_this2.dataForm[_this2.type + 'Disabled'], index, [row.disabledChildren]);
          _this2.$set(_this2.dataForm[_this2.type + 'Text'], index, [row.children.map(function (item) {
            item.selected = true;
            return item;
          })]);
        } else {
          _this2.$set(_this2.dataForm[_this2.type], index, row.children.map(function (item) {
            return item.key;
          }));
          _this2.$set(_this2.dataForm[_this2.type + 'Disabled'], index, row.disabledChildren);
          _this2.$set(_this2.dataForm[_this2.type + 'Text'], index, row.children.map(function (item) {
            item.selected = true;
            return item;
          }));
        }
        return row;
      });
      // 编辑状态
      if (this.type === 'manfBrand') {
        this.$set(this.searchFormData, 'manfBrand', Object(util["f" /* deepClone */])(this.typeData));
        this.showLetter = true;
        this.filters = [];
      }
      if (this.type === 'subModel') {
        var _data = Object(util["f" /* deepClone */])(this.typeData);
        this.segmentSubModel = _data[0];
        this.brandSubModel = _data[1];
        this.$set(this.searchFormData, 'subModel', this.segmentSubModel);
        this.showLetter = false;
        this.selectedFilter = 1;
        this.filters = [{ key: 1, value: this.t('iw.favorite.segment') }, { key: 2, value: this.t('iw.favorite.manfBrand') }];
      }
      if (this.type === 'segment') {
        this.$set(this.searchFormData, 'segment', Object(util["f" /* deepClone */])(this.typeData));
        this.showLetter = false;
        this.filters = [];
      }
    },
    handleRadioClick: function handleRadioClick(item, index) {
      this.checkedValue = item.key;
      this.$set(this.tableList[index], 'selected', true);
    },
    beforeClose: function beforeClose(done) {
      if (this.mode === 'view') {
        done();
      } else {
        this.error = this.t('iw.favorite.saveFirst');
      }
    },
    close: function close() {
      if (this.mode === 'view') {
        this.visible = false;
      } else {
        this.error = this.t('iw.favorite.saveFirst');
      }
    },
    edit: function edit() {
      this.mode = 'edit';
    },
    cancel: function cancel() {
      this.mode = 'view';
      this.error = '';
      this.init();
    },
    submit: function submit() {
      var _this3 = this;

      if (this.require && !this.checkedValue) {
        this.error = this.t('iw.common.placeholder');
        return;
      }
      this.checkedOption = this.tableList.find(function (item) {
        return item.key === _this3.checkedValue;
      });
      this.$emit('change', this.checkedValue, this.checkedOption);
      this.visible = false;
    },
    del: function del(index) {
      var _this4 = this;

      this.error = '';
      setTimeout(function () {
        _this4.tableList.splice(index, 1);
        if (_this4.type === 'manfBrand') {
          _this4.dataForm.manfBrand = _this4.tableList.map(function (row) {
            return row.children.map(function (item) {
              return item.key;
            });
          });
          _this4.dataForm.manfBrandText = _this4.tableList.map(function (row) {
            return row.children.map(function (item) {
              return item;
            });
          });
        }
        if (_this4.type === 'subModel') {
          _this4.dataForm.subModel = _this4.tableList.map(function (row) {
            return row.children.map(function (item) {
              return item.key;
            });
          });
          _this4.dataForm.subModelText = _this4.tableList.map(function (row) {
            return row.children.map(function (item) {
              return item;
            });
          });
        }
        _this4.initData(_this4.tableList);
      }, 0);
    },
    copy: function copy(index) {
      this.create(index, true);
    },
    create: function create() {
      var _this5 = this;

      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var isCopy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (this.tableList.length >= this.maxLength) {
        this.error = this.t('iw.favorite.maxFolders', { maxLength: this.maxLength });
        return false;
      }
      var indexData = Object(util["f" /* deepClone */])(this.tableList[index]);
      indexData['key'] = parseInt(Math.random() * 1000000);
      indexData['value'] = this.t('iw.favorite.customFolder') + (this.tableList.length + 1);
      indexData['children'] = isCopy ? indexData['children'] : [];
      indexData['selected'] = 0;
      setTimeout(function () {
        _this5.tableList.push(indexData);
        _this5.initData(_this5.tableList);
      }, 0);
    },
    save: function save() {
      if (!this.tableList.length) {
        this.error = this.t('iw.favorite.placeholder');
        return;
      }
      if (this.tableList.filter(function (item) {
        return !!item.value;
      }).length !== this.tableList.length) {
        this.error = this.t('iw.favorite.placeholder');
        return;
      }
      if (this.tableList.length !== this.tableList.filter(function (item) {
        return item.value.length <= 50;
      }).length) {
        this.error = this.t('iw.favorite.maxFolderName', { maxLength: 50 });
        return;
      }
      if (this.tableList.length !== this.tableList.filter(function (item) {
        return item.children.length > 0;
      }).length) {
        this.error = this.t('iw.common.placeholder');
        return;
      }
      var names = this.tableList.map(function (item) {
        return item.value;
      });
      if ([].concat(_toConsumableArray(new Set(names))).length !== this.tableList.length) {
        this.error = this.t('iw.favorite.nameExist');
        return;
      }
      if (!this.tableList.every(function (item) {
        return item.children.length < 1000;
      })) {
        this.error = this.t('iw.favorite.outOfRange');
        return;
      }
      this.mode = 'view';
      this.error = '';
      this.$emit('save', this.tableList);
    },
    handleFilterChange: function handleFilterChange(value, text, index) {
      this.selectedFilter = value;
      if (value === 1) {
        this.searchFormData.subModel = this.segmentSubModel;
        this.$set(this.dataForm.subModel, index, this.dataForm.subModel[index]);
        this.showLetter = false;
      } else if (value === 2) {
        this.searchFormData.subModel = this.brandSubModel;
        this.$set(this.dataForm.subModel, index, this.dataForm.subModel[index]);
        this.showLetter = true;
      }
    },
    handleChange: function handleChange(value, text, index) {
      var _this6 = this;

      var tmpText = this.type === 'manfBrand' ? text[0] : text;
      this.$set(this.dataForm[this.type], index, value);
      this.$set(this.tableList[index], 'children', tmpText.map(function (item) {
        var child = {
          key: item.key,
          value: item.value
        };
        if (_this6.type === 'subModel') {
          child['remark'] = item.remark;
        }
        return child;
      }));
      this.initData(this.tableList);
    }
  }
});
// CONCATENATED MODULE: ./packages/favorite/src/favorite.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_favoritevue_type_script_lang_js_ = (favoritevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./packages/favorite/src/favorite.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_favoritevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/favorite/src/favorite.vue"
/* harmony default export */ var favorite = (component.exports);
// CONCATENATED MODULE: ./packages/favorite/index.js
/* concated harmony reexport default */__webpack_require__.d(__webpack_exports__, "default", function() { return favorite; });


/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _iways_ui_src_locale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);


/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    t: function t() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _iways_ui_src_locale__WEBPACK_IMPORTED_MODULE_0__[/* t */ "a"].apply(this, args);
    }
  }
});

/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./src/locale/lang/zh-CN.js
/* harmony default export */ var zh_CN = ({
  iw: {
    colorpicker: {
      confirm: '确定',
      clear: '清空'
    },
    datepicker: {
      now: '此刻',
      today: '今天',
      cancel: '取消',
      clear: '清空',
      confirm: '确定',
      selectDate: '选择日期',
      selectTime: '选择时间',
      startDate: '开始日期',
      startTime: '开始时间',
      endDate: '结束日期',
      endTime: '结束时间',
      prevYear: '前一年',
      nextYear: '后一年',
      prevMonth: '上个月',
      nextMonth: '下个月',
      year: '年',
      month1: '1 月',
      month2: '2 月',
      month3: '3 月',
      month4: '4 月',
      month5: '5 月',
      month6: '6 月',
      month7: '7 月',
      month8: '8 月',
      month9: '9 月',
      month10: '10 月',
      month11: '11 月',
      month12: '12 月',
      // week: '周次',
      weeks: {
        sun: '日',
        mon: '一',
        tue: '二',
        wed: '三',
        thu: '四',
        fri: '五',
        sat: '六'
      },
      months: {
        jan: '1月',
        feb: '2月',
        mar: '3月',
        apr: '4月',
        may: '5月',
        jun: '6月',
        jul: '7月',
        aug: '8月',
        sep: '9月',
        oct: '10月',
        nov: '11月',
        dec: '12月'
      },
      quarters: {
        Q1: 'Q1',
        Q2: 'Q2',
        Q3: 'Q3',
        Q4: 'Q4'
      }
    },
    common: {
      noMatch: '无匹配数据',
      loading: '加载中',
      placeholder: '请选择',
      search: '搜索',
      selected: '已选',
      checkColumnAll: '全选',
      reset: '重置',
      confirm: '确定',
      checkAll: '全选所有',
      noData: '暂无数据',
      atLeast: '最少选择{count}项',
      atMost: '最多选择{count}项'
    },
    empty: {
      wait: '等待请求',
      exception: '网络异常',
      unknow: '未知错误'
    },
    select: {
      loading: '加载中',
      noMatch: '无匹配数据',
      noData: '无数据',
      placeholder: '请选择',
      checkAll: '全选'
    },
    manfbrand: {
      quickppositioning: '快速定位'
    },
    submodel: {
      quickppositioning: '快速定位',
      local: '国产',
      import: '进口'
    },
    version: {
      submodel: '车型',
      version: '型号',
      msrp: 'MSRP',
      hot: '热度',
      dataSource: '数据源'
    },
    favorite: {
      subModel: '车型',
      manfBrand: '厂商品牌',
      segment: '细分市场',
      placeholder: '请输入',
      folder: '收藏夹',
      operation: '操作',
      select: '选择',
      del: '删除',
      copy: '复制',
      edit: '编辑',
      confirm: '确定',
      create: '新建',
      cancel: '取消',
      save: '保存',
      saveFirst: '请先保存',
      customFolder: '自定义文件夹',
      maxFolders: '最多不能超过{maxLength}个',
      maxFolderName: '名称不能超过{maxLength}个字',
      nameExist: '名称已重复',
      outOfRange: '超过范围'
    },
    pagination: {
      goto: '前往',
      pagesize: '条/页',
      total: '共 {total} 条',
      pageClassifier: '页'
    },
    messagebox: {
      title: '提示',
      confirm: '确定',
      cancel: '取消',
      error: '输入的数据不合法!'
    },
    upload: {
      deleteTip: '按 delete 键可删除',
      delete: '删除',
      preview: '查看图片',
      continue: '继续上传'
    },
    table: {
      emptyText: '暂无数据',
      confirmFilter: '筛选',
      resetFilter: '重置',
      clearFilter: '全部',
      sumText: '合计'
    },
    tree: {
      emptyText: '暂无数据'
    },
    transfer: {
      noMatch: '无匹配数据',
      noData: '无数据',
      titles: ['列表 1', '列表 2'],
      filterPlaceholder: '请输入搜索内容',
      noCheckedFormat: '共 {total} 项',
      hasCheckedFormat: '已选 {checked}/{total} 项'
    },
    image: {
      error: '加载失败'
    },
    pageHeader: {
      title: '返回'
    }
  }
});
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "deepmerge"
var external_deepmerge_ = __webpack_require__(7);
var external_deepmerge_default = /*#__PURE__*/__webpack_require__.n(external_deepmerge_);

// EXTERNAL MODULE: ./src/utils/util.js
var util = __webpack_require__(1);

// CONCATENATED MODULE: ./src/locale/format.js
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };



var RE_NARGS = /(%|)\{([0-9a-zA-Z_]+)\}/g;
/**
 *  String format template
 *  - Inspired:
 *    https://github.com/Matt-Esch/string-template/index.js
 */
/* harmony default export */ var format = (function (Vue) {
  /**
   * template
   *
   * @param {String} string
   * @param {Array} ...args
   * @return {String}
   */

  function template(string) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (args.length === 1 && _typeof(args[0]) === 'object') {
      args = args[0];
    }

    if (!args || !args.hasOwnProperty) {
      args = {};
    }

    return string.replace(RE_NARGS, function (match, prefix, i, index) {
      var result = void 0;

      if (string[index - 1] === '{' && string[index + match.length] === '}') {
        return i;
      } else {
        result = Object(util["l" /* hasOwn */])(args, i) ? args[i] : null;
        if (result === null || result === undefined) {
          return '';
        }

        return result;
      }
    });
  }

  return template;
});
// CONCATENATED MODULE: ./src/locale/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return t; });
/* unused harmony export use */
/* unused harmony export i18n */





var locale_format = format(external_vue_default.a);
var lang = zh_CN;
var merged = false;
var locale_i18nHandler = function i18nHandler() {
  var vuei18n = Object.getPrototypeOf(this || external_vue_default.a).$t;
  if (typeof vuei18n === 'function' && !!external_vue_default.a.locale) {
    if (!merged) {
      merged = true;
      external_vue_default.a.locale(external_vue_default.a.config.lang, external_deepmerge_default()(lang, external_vue_default.a.locale(external_vue_default.a.config.lang) || {}, { clone: true }));
    }
    return vuei18n.apply(this, arguments);
  }
};

var t = function t(path, options) {
  var value = locale_i18nHandler.apply(this, arguments);
  if (value !== null && value !== undefined) return value;

  var array = path.split('.');
  var current = lang;

  for (var i = 0, j = array.length; i < j; i++) {
    var property = array[i];
    value = current[property];
    if (i === j - 1) return locale_format(value, options);
    if (!value) return '';
    current = value;
  }
  return '';
};

var use = function use(l) {
  lang = l || lang;
};

var i18n = function i18n(fn) {
  locale_i18nHandler = fn || locale_i18nHandler;
};

/* harmony default export */ var locale = ({ use: use, t: t, i18n: i18n });

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = require("deepmerge");

/***/ })

/******/ });