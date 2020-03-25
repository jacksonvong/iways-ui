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
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
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

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/cascader/src/cascader.vue?vue&type=template&id=032537a6&
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
              ? "iw-cascader iw-cascader--" +
                _vm.iwSize +
                (_vm.disabled ? " iw-cascader--disabled" : "")
              : "",
          attrs: {
            visible: _vm.visible,
            trigger: _vm.trigger,
            placement: _vm.placement,
            "append-to-body":
              _vm.popover === "IwPopover" ? _vm.appendToBody : true,
            "popper-class":
              _vm.popover === "IwPopover"
                ? "iw-cascader iw-cascader--" +
                  _vm.iwSize +
                  (_vm.disabled ? " iw-cascader--disabled" : "")
                : "",
            disabled: _vm.disabled,
            width:
              _vm.popover === "IwPopover" ? null : _vm.deep * _vm.width + "px",
            title: _vm.popover === "IwPopover" ? null : false
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
              staticClass: "iw-cascader-reference",
              attrs: { slot: "reference" },
              slot: "reference"
            },
            [
              _vm._t("reference", [
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
                          _vm.multiple &&
                          _vm.checkedOptions &&
                          _vm.checkedOptions.length > 0
                            ? _c("span", { staticClass: "iw-input__value" }, [
                                _vm.checkedOptions.length > 1
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
                                          _vm.t("iw.common.selected") +
                                          "(" +
                                          _vm.checkedOptions.length +
                                          ")"
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
                                        value:
                                          _vm.checkedOptions[0][
                                            _vm.optionProps.label
                                          ]
                                      }
                                    })
                              ])
                            : !_vm.multiple &&
                              _vm.checkedOptions &&
                              _vm.checkedOptions.length
                            ? _c("span", { staticClass: "iw-input__value" }, [
                                _c("input", {
                                  style:
                                    "width:" + (_vm.referenceWidth - 36) + "px",
                                  attrs: {
                                    disabled: _vm.disabled,
                                    unselectable: "on",
                                    readonly: ""
                                  },
                                  domProps: {
                                    value:
                                      _vm.checkedOptions[
                                        _vm.checkedOptions.length - 1
                                      ][_vm.optionProps.label]
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
              ])
            ],
            2
          ),
          !_vm.disabled
            ? _c(
                "div",
                {
                  style: {
                    width: _vm.deep * _vm.width + "px",
                    minWidth: (_vm.deep * 100 || 400) + "px"
                  },
                  attrs: { id: "iw-cascader__popover--" + _vm.id }
                },
                [
                  _vm.title
                    ? _c("div", { staticClass: "iw-cascader__title" }, [
                        _vm.title
                          ? _c("div", { staticClass: "iw-cascader__inner" }, [
                              _vm._v(_vm._s(_vm.title))
                            ])
                          : _vm._e(),
                        _vm.showSearch && _vm.data.length
                          ? _c(
                              "div",
                              {
                                staticClass: "iw-cascader__search",
                                class: "iw-cascader__search--" + _vm.iwSize
                              },
                              [
                                _c("iw-input", {
                                  staticStyle: { width: "120px" },
                                  attrs: {
                                    size: _vm.iwSize,
                                    placeholder: _vm.t("iw.common.search"),
                                    "prefix-icon": "iw-icon-search"
                                  },
                                  nativeOn: {
                                    keyup: function($event) {
                                      return _vm.handleSearchChange($event)
                                    }
                                  },
                                  model: {
                                    value: _vm.keyword,
                                    callback: function($$v) {
                                      _vm.keyword = $$v
                                    },
                                    expression: "keyword"
                                  }
                                })
                              ],
                              1
                            )
                          : _vm._e(),
                        _vm.error
                          ? _c("div", { staticClass: "iw-cascader__error" }, [
                              _vm._v(_vm._s(_vm.error))
                            ])
                          : _vm._e(),
                        _c(
                          "div",
                          {
                            staticClass: "iw-cascader__close",
                            on: {
                              click: function($event) {
                                _vm.visible = false
                              }
                            }
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
                      staticClass: "iw-cascader__body"
                    },
                    [
                      _vm._t("filters-select"),
                      _vm.data && _vm.data.length
                        ? _c(
                            "div",
                            _vm._l(_vm.deep, function(group, index) {
                              return _c(
                                "div",
                                {
                                  key: index,
                                  staticClass: "iw-cascader__group",
                                  style: { width: _vm.width + "px" },
                                  attrs: { id: "iw-cascader__group--" + index }
                                },
                                [
                                  _vm.multiple &&
                                  _vm.listData[index] &&
                                  _vm.listData[index].length
                                    ? _c(
                                        "div",
                                        {
                                          staticClass:
                                            "iw-cascader__group-title",
                                          on: {
                                            click: function($event) {
                                              _vm.handleCheckColumnChange(
                                                _vm.listData[index] || [],
                                                _vm.isCheckColumnChecked(
                                                  _vm.listData[index] || []
                                                )
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _c("span", {
                                            class: [
                                              _vm.multiple
                                                ? "iw-checkbox"
                                                : "iw-radio",
                                              _vm.multiple &&
                                              (_vm.listData[index].length &&
                                                _vm.isCheckColumnChecked(
                                                  _vm.listData[index]
                                                ))
                                                ? "iw-checkbox--checked"
                                                : "",
                                              _vm.multiple &&
                                              (_vm.listData[index].length &&
                                                _vm.isCheckColumnIndeterminate(
                                                  _vm.listData[index]
                                                ))
                                                ? "iw-checkbox--indeterminate"
                                                : ""
                                            ]
                                          }),
                                          _c(
                                            "span",
                                            { staticClass: "iw-text" },
                                            [
                                              _c("em", [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.columnName[index]
                                                  ) +
                                                    "(" +
                                                    _vm._s(
                                                      _vm.t(
                                                        "iw.common.checkColumnAll"
                                                      )
                                                    ) +
                                                    ")"
                                                )
                                              ])
                                            ]
                                          )
                                        ]
                                      )
                                    : _c(
                                        "div",
                                        {
                                          staticClass:
                                            "iw-cascader__group-title"
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(_vm.columnName[index] || " ")
                                          )
                                        ]
                                      ),
                                  _c(
                                    "iw-scrollbar",
                                    {
                                      ref: "scrollbarRight__KEY",
                                      refInFor: true,
                                      attrs: {
                                        "wrap-style":
                                          "height:" + (_vm.height + 16) + "px;",
                                        "wrap-class": "iw-cascader__wrap"
                                      }
                                    },
                                    [
                                      _c("div", [
                                        _vm.listData[index] &&
                                        _vm.listData[index].length
                                          ? _c(
                                              "ul",
                                              _vm._l(
                                                _vm.listData[index],
                                                function(row) {
                                                  return _c(
                                                    "li",
                                                    {
                                                      key: row.key,
                                                      staticClass:
                                                        "iw-cascader__item",
                                                      class: {
                                                        on:
                                                          _vm.activeItemKey[
                                                            index
                                                          ] !== undefined &&
                                                          row.key ===
                                                            _vm.activeItemKey[
                                                              index
                                                            ] &&
                                                          row.children,
                                                        "has-checkbox":
                                                          row.children
                                                      },
                                                      attrs: {
                                                        "scroll-key":
                                                          row.key + "_" + index
                                                      },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          _vm.handleSelectChange(
                                                            row
                                                          )
                                                        }
                                                      }
                                                    },
                                                    [
                                                      row.children &&
                                                      row.children.length
                                                        ? [
                                                            _c("span", {
                                                              class: [
                                                                _vm.multiple
                                                                  ? "iw-checkbox"
                                                                  : "",
                                                                _vm.multiple &&
                                                                (_vm.selectOnLeaf &&
                                                                  _vm.isItemIndeterminate(
                                                                    row
                                                                  ))
                                                                  ? "iw-checkbox--indeterminate"
                                                                  : "",
                                                                _vm.multiple &&
                                                                ((!_vm.selectOnLeaf &&
                                                                  row.selected) ||
                                                                  (_vm.selectOnLeaf &&
                                                                    _vm.isItemChecked(
                                                                      row
                                                                    )))
                                                                  ? "iw-checkbox--checked"
                                                                  : "",
                                                                !_vm.multiple &&
                                                                !_vm.selectOnLeaf
                                                                  ? "iw-radio"
                                                                  : "",
                                                                !_vm.multiple &&
                                                                !_vm.selectOnLeaf &&
                                                                row.selected
                                                                  ? "iw-radio--checked"
                                                                  : ""
                                                              ],
                                                              on: {
                                                                click: function(
                                                                  $event
                                                                ) {
                                                                  _vm.handleItemChange(
                                                                    row
                                                                  )
                                                                }
                                                              }
                                                            }),
                                                            _c(
                                                              "span",
                                                              {
                                                                staticClass:
                                                                  "iw-text"
                                                              },
                                                              [
                                                                _c(
                                                                  "em",
                                                                  {
                                                                    style: {
                                                                      color: row.disabled
                                                                        ? "#c0c4cc"
                                                                        : ""
                                                                    },
                                                                    attrs: {
                                                                      title:
                                                                        row.value
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        row[
                                                                          _vm
                                                                            .optionProps
                                                                            .label
                                                                        ]
                                                                      )
                                                                    )
                                                                  ]
                                                                ),
                                                                _c("i", {
                                                                  staticClass:
                                                                    "iw-cascader__item-icon iw-icon-arrow-right"
                                                                })
                                                              ]
                                                            )
                                                          ]
                                                        : [
                                                            _c(
                                                              "span",
                                                              {
                                                                staticClass:
                                                                  "iw-text",
                                                                attrs: {
                                                                  title:
                                                                    row[
                                                                      _vm
                                                                        .optionProps
                                                                        .label
                                                                    ]
                                                                },
                                                                on: {
                                                                  click: function(
                                                                    $event
                                                                  ) {
                                                                    _vm.handleItemChange(
                                                                      row
                                                                    )
                                                                  }
                                                                }
                                                              },
                                                              [
                                                                _c("span", {
                                                                  class: [
                                                                    _vm.multiple
                                                                      ? "iw-checkbox"
                                                                      : "iw-radio",
                                                                    _vm.multiple &&
                                                                    row.selected
                                                                      ? "iw-checkbox--checked"
                                                                      : "",
                                                                    !_vm.multiple &&
                                                                    row.selected
                                                                      ? "iw-radio--checked"
                                                                      : ""
                                                                  ]
                                                                }),
                                                                _c(
                                                                  "em",
                                                                  {
                                                                    class: {
                                                                      "font-orange":
                                                                        row.remark ==
                                                                        "进口"
                                                                    },
                                                                    style: {
                                                                      color: row.disabled
                                                                        ? "#c0c4cc"
                                                                        : ""
                                                                    },
                                                                    attrs: {
                                                                      title:
                                                                        row.value
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "\n                          " +
                                                                        _vm._s(
                                                                          row[
                                                                            _vm
                                                                              .optionProps
                                                                              .label
                                                                          ]
                                                                        )
                                                                    ),
                                                                    _c(
                                                                      "abbr",
                                                                      {
                                                                        staticClass:
                                                                          "font-gray"
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          _vm._s(
                                                                            row.date
                                                                              ? "(" +
                                                                                  row.date +
                                                                                  ")"
                                                                              : ""
                                                                          )
                                                                        )
                                                                      ]
                                                                    )
                                                                  ]
                                                                ),
                                                                _c("i", {
                                                                  staticClass:
                                                                    "iw-cascader__item-icon"
                                                                })
                                                              ]
                                                            )
                                                          ]
                                                    ],
                                                    2
                                                  )
                                                }
                                              ),
                                              0
                                            )
                                          : _vm._e()
                                      ])
                                    ]
                                  )
                                ],
                                1
                              )
                            }),
                            0
                          )
                        : _c("iw-empty", {
                            staticStyle: { height: "160px" },
                            attrs: { status: _vm.status }
                          })
                    ],
                    2
                  ),
                  _vm.datas.length
                    ? _c(
                        "div",
                        { staticClass: "iw-cascader__footer" },
                        [
                          (_vm.showSelected || _vm.multiple) &&
                          _vm.selectTextsTag &&
                          _vm.selectTextsTag.length
                            ? _c(
                                "span",
                                { staticClass: "iw-cascader__footer-selected" },
                                [
                                  _c("label", [
                                    _vm._v(
                                      _vm._s(_vm.t("iw.common.selected")) + "："
                                    )
                                  ]),
                                  _c(
                                    "div",
                                    [
                                      _c(
                                        "iw-scrollbar",
                                        {
                                          attrs: {
                                            "wrap-class":
                                              "iw-cascader__footer-scroll iw-cascader__footer-scroll--" +
                                              _vm.iwSize
                                          }
                                        },
                                        _vm._l(_vm.selectTextsTag, function(
                                          item
                                        ) {
                                          return _c(
                                            "iw-tag",
                                            {
                                              key:
                                                item[_vm.optionProps.value] +
                                                "_" +
                                                item["level"],
                                              attrs: {
                                                title:
                                                  item[_vm.optionProps.label],
                                                size: _vm.iwSize,
                                                type: "pink",
                                                closable: ""
                                              },
                                              on: {
                                                click: function($event) {
                                                  _vm.handleTagClose(item)
                                                },
                                                close: function($event) {
                                                  _vm.handleTagClose(item)
                                                }
                                              }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  item[_vm.optionProps.label]
                                                )
                                              )
                                            ]
                                          )
                                        }),
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm.showCheckAll && _vm.multiple && _vm.datas.length
                            ? _c(
                                "span",
                                {
                                  staticClass: "iw-cascader__footer-checkall",
                                  on: {
                                    click: function($event) {
                                      _vm.handleCheckAllChange(
                                        _vm.datas,
                                        !_vm.isCheckAllChecked(_vm.datas)
                                      )
                                    }
                                  }
                                },
                                [
                                  _c("span", {
                                    class: [
                                      "iw-checkbox",
                                      _vm.data.length &&
                                      _vm.isCheckAllChecked(_vm.datas)
                                        ? "iw-checkbox--checked"
                                        : "",
                                      _vm.data.length &&
                                      _vm.isCheckAllIndeterminate(_vm.datas)
                                        ? "iw-checkbox--indeterminate"
                                        : ""
                                    ]
                                  }),
                                  _c("span", { staticClass: "iw-text" }, [
                                    _vm._v(_vm._s(_vm.t("iw.common.checkAll")))
                                  ])
                                ]
                              )
                            : _vm._e(),
                          _c(
                            "iw-button",
                            {
                              attrs: { size: _vm.iwSize },
                              on: {
                                click: function($event) {
                                  _vm.reset()
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n          " +
                                  _vm._s(_vm.t("iw.common.reset")) +
                                  "\n        "
                              )
                            ]
                          ),
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
                                "\n          " +
                                  _vm._s(_vm.t("iw.common.confirm")) +
                                  "\n        "
                              )
                            ]
                          )
                        ],
                        1
                      )
                    : _vm._e()
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


// CONCATENATED MODULE: ./packages/cascader/src/cascader.vue?vue&type=template&id=032537a6&

// EXTERNAL MODULE: ./src/utils/util.js
var util = __webpack_require__(1);

// EXTERNAL MODULE: ./src/mixins/locale.js
var locale = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/cascader/src/cascader.vue?vue&type=script&lang=js&
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



/* harmony default export */ var cascadervue_type_script_lang_js_ = ({
  name: 'IwCascader',
  mixins: [locale["a" /* default */]],
  props: {
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    value: {
      type: [Array, String, Number],
      default: function _default() {
        return [];
      }
    },
    defaultValue: {
      type: Array,
      default: function _default() {
        return undefined;
      }
    },
    texts: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    defaultTexts: {
      type: Array,
      default: function _default() {
        return undefined;
      }
    },
    id: {
      type: Number,
      default: function _default() {
        return parseInt(Math.random() * 10000);
      }
    },
    title: {
      // 标题： 为空就不显示
      type: [Boolean, String],
      default: false
    },
    multiple: {
      // 是否多选模式
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    columnName: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showLetter: {
      // 是否需要快速字母选择器
      type: Boolean,
      default: true
    },
    showSearch: {
      // 显示搜索框
      type: Boolean,
      default: true
    },
    showSelected: {
      // 是否显示已选项
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    status: {
      type: [Number, String],
      default: 200
    },
    width: {
      // 单列宽度
      type: [Number, String],
      default: 180
    },
    height: {
      type: [Number, String],
      default: 320
    },
    selectOnLeaf: {
      // 当此项为 false 时，每级节点均可选, true 时只有叶节点可选
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    exclusion: {
      // 当此项为 true 时，同级节点互斥
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    showCheckAll: {
      // 当此项为 true 时，显示顶部全选功能
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    require: {
      // 当此项为 true 时，必须选择
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    min: {
      type: Number,
      default: function _default() {
        return 0;
      }
    },
    max: {
      type: Number,
      default: function _default() {
        return 0;
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
    disabledSelect: {
      tips: '禁止选择',
      type: Array,
      default: function _default() {
        return [];
      }
    },
    /**
     * Popover的属性
     */
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
    className: {
      type: String,
      default: ''
    },
    size: {
      // 组件尺寸
      type: String,
      default: '' // 可选: medium || small || mini
    },
    show: {
      // 展示控件
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      visible: false,
      popover: 'IwPopover',
      referenceWidth: null,
      datas: [], // 数据源
      listData: [], // 内容列表，[0 => [], 1, []]
      activeItemKey: [], // 激活的选项key
      checkedOptions: [], // 已选项(选择框显示)
      selectTextsTag: [], // 已选项(已选栏显示)
      selectValues: [], // 已选项的ID
      selectTexts: [], // 已选项(内部存储，单选存所有节点项，复选根据selectOnLeaf存所有节点项或叶子节点项)
      keyword: undefined, // 查询值
      selectedKey: undefined, // 快速定位(showLetter=true)
      selectedTrack: undefined, // 快速定位(showLetter=false)
      lastSearch: undefined,
      error: '', // 错误信息
      firstLoad: true,
      scrollOptions: { // 滚动条配置
        bar: {
          showDelay: 500,
          onlyShowBarOnScroll: false,
          background: '#c1c1c1',
          opacity: 1,
          size: '10px'
        },
        rail: {
          size: '10px'
        }
      }
    };
  },

  computed: {
    iwSize: function iwSize() {
      return this.size || (this.$IWAYS || {}).size;
    },
    iconClass: function iconClass() {
      return this.visible && !this.disabled ? 'arrow-up is-reverse' : 'arrow-up';
    },
    deep: function deep() {
      return this.data.length ? Object(util["p" /* treeDeep */])(this.data) : 0;
    }
  },
  watch: {
    value: function value() {
      this.initValue();
      this.initData();
    },
    data: function data() {
      if (this.firstLoad) {
        this.initData();
        this.firstLoad = false;
      } else {
        this.initData(this.data, false);
      }
    },
    visible: function visible() {
      this.keyword = '';
      if (this.visible) {
        this.initValue();
        this.initData();
      } else {
        this.$emit('close');
      }
    },
    show: function show() {
      this.referenceWidth = this.$el.offsetWidth;
    }
  },
  mounted: function mounted() {
    this.popover = this.isModal ? 'IwDialog' : 'IwPopover';
    this.referenceWidth = this.$el.offsetWidth;
    this.initValue();
    this.initData();
  },

  methods: {
    initValue: function initValue() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.value;
      var texts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.texts;
      var reset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (value !== null && value !== undefined && (value instanceof String || value instanceof Number)) {
        value = [value];
      }
      if (value instanceof Array) {
        this.selectValues = Object(util["f" /* deepClone */])(value);
      }
      if (texts !== null && texts !== undefined && (texts instanceof String || texts instanceof Number)) {
        texts = [texts];
      }
      if (texts instanceof Array) {
        this.selectTexts = Object(util["f" /* deepClone */])(texts);
        this.selectTextsTag = Object(util["f" /* deepClone */])(texts);
        this.activeItemKey = [];
        if (!reset) this.checkedOptions = Object(util["f" /* deepClone */])(texts);
      } else {
        this.selectTexts = [];
        this.selectTextsTag = [];
        this.activeItemKey = [];
        if (!reset) this.checkedOptions = [];
      }
    },
    initData: function initData() {
      var _this = this;

      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.data;
      var submit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (!data || data.length === 0) return;
      this.datas = Object(util["j" /* getTree */])(data, {
        son: this.optionProps.children,
        key: this.optionProps.value,
        selected: this.selectTexts && this.selectTexts.length ? this.selectTexts : this.selectValues,
        keyword: (this.keyword || '').trim(),
        multiple: this.multiple,
        leaf: this.selectOnLeaf,
        disabledSelect: this.disabledSelect
      });

      // 初始化activeItemKey
      var selectTexts = Object(util["a" /* arr2table */])(this.datas, this.optionProps.children, false).filter(function (item) {
        return item.selected === true;
      });
      if (selectTexts && selectTexts.length) {
        this.activeItemKey = Object(util["m" /* recursiveLoop */])(this.multiple ? selectTexts[0] : selectTexts.slice(-1), 'parent').reverse();
      }
      // 初始化列表数组
      var datas = this.datas;
      var length = this.deep;
      this.listData = [datas];

      var _loop = function _loop(index) {
        _this.activeItemKey[index] = _this.activeItemKey[index] || datas && datas[0] && datas[0][_this.optionProps.value];
        var activeItem = datas.find(function (item) {
          return item[_this.optionProps.value] === _this.activeItemKey[index] && item['level'] === index;
        });
        if (activeItem) {
          var nlevel = activeItem.level + 1;
          _this.listData[nlevel] = datas = activeItem[_this.optionProps.children] || [];
          _this.$nextTick(function () {
            _this.selectLetter(_this.activeItemKey[index], index);
          });
        }
      };

      for (var index = 0; index < length; index++) {
        _loop(index);
      }

      if (!this.multiple) {
        if (selectTexts.length) {
          this.selectTexts = selectTexts;
          this.selectValues = selectTexts.map(function (item) {
            return item.key;
          });
        }
        // 把selectTexts的最后一个设置为已选项
        this.selectTextsTag = this.selectTexts.length === 0 ? [] : this.selectTexts.slice(-1);
      } else {
        // 取出数据源已选项selectTexts，重新赋值已选栏的selectTextsTag，实现原型链绑定
        var _selectTexts = Object(util["a" /* arr2table */])(this.datas, this.optionProps.children, this.selectOnLeaf).filter(function (item) {
          return item.selected === true;
        });
        _selectTexts.forEach(function (item) {
          var key = _this.optionProps.value;
          var index = _this.selectTextsTag.findIndex(function (row) {
            return row[key] === item[key] && row['value'] === item['value'];
          });
          if (index > -1) {
            _this.$set(_this.selectTextsTag, index, item);
          } else {
            _this.selectTextsTag.push(item);
          }
        });
      }
      // 未设置属性texts值时，设置已选项
      if (submit) {
        this.checkedOptions = Object(util["f" /* deepClone */])(this.selectTextsTag);
      }
    },

    /**
     * 重置
     * 1.重置已选项，有默认值重置为默认值，无默认值重置为初始值
     * 2.重置内容区选中项
     */
    reset: function reset() {
      this.keyword = '';
      this.initValue(this.defaultValue, this.defaultTexts, true);
      this.initData(this.data, false);
    },

    /**
     * 提交，触发回调
     */
    submit: function submit() {
      var _this2 = this;

      var visible = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      // 验证
      if (this.require && this.selectTextsTag.length <= 0) {
        this.error = this.t('iw.common.placeholder');
        return;
      }
      if (this.multiple) {
        if (this.min && this.selectTextsTag.length < this.min) {
          this.error = this.t('iw.common.atLeast', { count: this.min });
          return;
        }
        if (this.max && this.selectTextsTag.length > this.max) {
          this.error = this.t('iw.common.atMost', { count: this.max });
          return;
        }
      }
      this.keyword = '';
      this.error = '';
      this.checkedOptions = Object(util["f" /* deepClone */])(this.selectTextsTag);
      this.$emit('change', this.checkedOptions.map(function (item) {
        return item[_this2.optionProps.value];
      }), this.checkedOptions);
      this.visible = visible;
    },

    /**
     * 查询关键字，过滤数据源
     */
    handleSearchChange: function handleSearchChange(event) {
      var _this3 = this;

      this.lastSearch = event.timeStamp;
      setTimeout(function () {
        if (_this3.lastSearch === event.timeStamp) {
          _this3.activeItemKey = [];
          _this3.initData();
        }
      }, 500);
    },

    /**
     * 删除已选项
     * 1.设置已选项selected=false，由原型链绑定实现去除内容区已选
     * 2.过滤已选项
     */
    handleTagClose: function handleTagClose(item) {
      var _this4 = this;

      this.$set(item, 'selected', false);
      this.selectTextsTag = this.selectTextsTag.filter(function (child) {
        return child.selected === true;
      });
      this.selectTexts = this.selectTextsTag.map(function (child) {
        return child;
      });
      this.selectValues = this.selectTextsTag.map(function (child) {
        return child[_this4.optionProps.value];
      });
    },

    /**
     * 单/复选方法，设置selected
     * 1.先设置子节点，后设置父节点
     */
    handleItemChange: function handleItemChange(item, selected) {
      var _this5 = this;

      var up = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      if (item.disabled) return;
      this.error = '';
      if (this.multiple) {
        selected = selected === undefined ? !item.selected : selected;
        this.$set(item, 'selected', selected);
        if (this.selectOnLeaf) {
          item[this.optionProps.children] && item[this.optionProps.children].forEach(function (row) {
            _this5.handleItemChange(row, selected, false);
          });
          if (up) {
            this.handleParentChange(item);
          }
        } else if (this.exclusion) {
          this.handleExclusionChange(item, !item.selected);
        }
        if (up) {
          this.handleMultipleChange(item);
        }
      } else {
        this.selectTexts.forEach(function (row) {
          _this5.$set(row, 'selected', false);
        });
        if (up) {
          this.$set(item, 'selected', true);
          this.selectTexts = [item];
          this.selectValues = [item[this.optionProps.value]];
          this.selectTextsTag = [item];
        }
      }
    },

    /**
     * 复选方法，递归设置父级selected
     */
    handleParentChange: function handleParentChange(item) {
      if (item.parent) {
        var parent = Object(util["g" /* findInArray */])('key', item.parent[this.optionProps.value], this.datas, this.optionProps.children, item.parent.level);
        if (parent) {
          parent.selected = parent.children.length === parent.children.filter(function (item) {
            return item.selected === true;
          }).length;
        }
        if (parent && parent.parent) {
          this.handleParentChange(parent);
        }
      }
    },
    handleMultipleChange: function handleMultipleChange(item) {
      var _this6 = this;

      var tableDatas = Object(util["a" /* arr2table */])(this.datas, this.optionProps.children, this.selectOnLeaf);
      var selectTexts = tableDatas.filter(function (item) {
        return item.selected;
      });
      var unselectTexts = tableDatas.filter(function (item) {
        return item.selected === false;
      });
      if (!this.exclusion) {
        if (item.selected) {
          selectTexts.forEach(function (item) {
            var index = _this6.selectTextsTag.findIndex(function (child, key) {
              return child.key === item.key && child.value === item.value;
            });
            if (index === -1) _this6.selectTextsTag.push(item);else _this6.selectTextsTag[index] = item;
          });
        } else {
          unselectTexts.forEach(function (item) {
            var index = _this6.selectTextsTag.findIndex(function (child, key) {
              return child.key === item.key && child.value === item.value;
            });
            if (index !== -1) _this6.selectTextsTag.splice(index, 1);
          });
        }
      } else {
        this.selectTextsTag = selectTexts;
      }
      this.selectTexts = Object(util["f" /* deepClone */])(this.selectTextsTag);
      this.selectValues = this.selectTexts.map(function (item) {
        return item[_this6.optionProps.value];
      });
    },
    handleExclusionChange: function handleExclusionChange(item, selected) {
      var _this7 = this;

      var first = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      // 选中值
      if (!selected) {
        // 清除所有子节点
        item.children && item.children.forEach(function (row) {
          row.selected = false;
          _this7.handleExclusionChange(row, false, false);
        });
        if (first) {
          // 清除所有父节点
          this.handleParentExclusionChange(item, false);
        }
      }
    },
    handleParentExclusionChange: function handleParentExclusionChange(item, selected) {
      if (!selected) {
        if (item.parent) {
          var data = this.listData[item.parent.level];
          var parent = data.find(function (child) {
            return child.key === item.parent.key;
          });
          if (parent) {
            parent.selected = false;
          }
          if (parent && parent.parent) {
            this.handleParentExclusionChange(parent, false);
          }
        }
      }
    },

    /**
     * 单选事件
     * @param {Number} index 节点层级
     * @param {Object} item 节点对象
     */
    handleSelectChange: function handleSelectChange(item, clear) {
      var _this8 = this;

      var submit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      if (!item) return;
      if (!item.children || !item.children.length) return;
      var index = Number(item.level);
      var nIndex = index + 1;
      this.$set(this.activeItemKey, index, item.key);

      if (item.children && item.children.length) {
        this.$set(this.listData, nIndex, item.children);
        this.listData = this.listData.map(function (item, key) {
          return key <= nIndex && key < _this8.deep ? item : [];
        });
        this.activeItemKey = this.activeItemKey.filter(function (item, key) {
          return key < nIndex && key < _this8.deep;
        });
      }
    },
    isItemChecked: function isItemChecked(data) {
      var _selected = data[this.optionProps.children].filter(function (item) {
        return item.selected === true;
      });
      var _children = data[this.optionProps.children];
      data.selected = _selected.length === _children.length;
      return data.selected;
    },
    isItemIndeterminate: function isItemIndeterminate(data) {
      var _selected = data[this.optionProps.children].filter(function (item) {
        return item.selected === true;
      });
      var _indeterminate = data[this.optionProps.children].filter(function (item) {
        return item.indeterminate === true;
      });
      var _children = data[this.optionProps.children];
      data.indeterminate = _selected.length > 0 && _children.length > _selected.length || _indeterminate.length > 0;
      return data.indeterminate;
    },
    handleCheckColumnChange: function handleCheckColumnChange(data) {
      var _this9 = this;

      var checked = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      data.forEach(function (group, key) {
        _this9.handleItemChange(group, !checked, false);
      });
      if (data[0]) {
        this.handleMultipleChange(data[0]);
      }
    },
    isCheckColumnChecked: function isCheckColumnChecked(data) {
      return data.every(function (group) {
        return group.selected === true;
      });
    },
    isCheckColumnIndeterminate: function isCheckColumnIndeterminate(data) {
      var _selected = data.filter(function (group) {
        return group.selected === true;
      });
      var _indeterminate = data.filter(function (group) {
        return group.indeterminate === true;
      });
      return data.length !== _selected.length && _selected.length > 0 || _indeterminate.length > 0;
    },
    handleCheckAllChange: function handleCheckAllChange(data) {
      var _this10 = this;

      var selected = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var go = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      if (data instanceof Array) {
        data.forEach(function (item) {
          _this10.handleCheckAllChange(item, selected, false);
        });
      } else if (data instanceof Object) {
        this.$set(data, 'selected', selected);
        var children = data[this.optionProps.children];
        if (children && children.length > 0) {
          this.handleCheckAllChange(children, selected, false);
        }
      }
      if (go && data[0]) {
        this.handleMultipleChange(data[0]);
      }
    },
    isCheckAllChecked: function isCheckAllChecked(data) {
      if (data instanceof Array) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            if (!this.isCheckAllChecked(item)) {
              return false;
            }
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
      } else if (data instanceof Object) {
        if (!data.selected) return false;
        var children = data[this.optionProps.children];
        if (children && children.length > 0) {
          if (!this.isCheckAllChecked(children)) {
            return false;
          }
        }
      }
      return true;
    },
    isCheckAllIndeterminate: function isCheckAllIndeterminate(data) {
      if (data instanceof Array) {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = data[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var item = _step2.value;

            if (this.isCheckAllIndeterminate(item)) return true;
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      } else if (data instanceof Object) {
        if (data.selected) return false;
        var children = data[this.optionProps.children];
        if (children && children.length > 0) {
          if (this.isCheckAllIndeterminate(children)) return true;
        }
      }
      return false;
    },
    getCheckedKeys: function getCheckedKeys() {
      var _this11 = this;

      return this.checkedOptions.map(function (item) {
        return item[_this11.optionProps.value];
      });
    },
    selectLetter: function selectLetter(key) {
      var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'KEY';
      var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      this.selectedKey = key;
      var obj = document.querySelector('#iw-cascader__popover--' + this.id + ' #iw-cascader__group--' + target + ' [scroll-key="' + key + '_' + target + '"]');
      if (obj) {
        var scrollTop = parseInt(obj['offsetTop']);
        document.querySelector('#iw-cascader__popover--' + this.id + ' #iw-cascader__group--' + target + ' .iw-cascader__wrap').scrollTop = scrollTop;
      }
    },
    substr: function substr(str, len) {
      return Object(util["n" /* substr */])(str, len);
    }
  }
});
// CONCATENATED MODULE: ./packages/cascader/src/cascader.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_cascadervue_type_script_lang_js_ = (cascadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./packages/cascader/src/cascader.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_cascadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/cascader/src/cascader.vue"
/* harmony default export */ var cascader = (component.exports);
// CONCATENATED MODULE: ./packages/cascader/index.js
/* concated harmony reexport default */__webpack_require__.d(__webpack_exports__, "default", function() { return cascader; });


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