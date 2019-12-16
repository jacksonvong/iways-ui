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
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return hasOwn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return toObject; });
/* unused harmony export getValueByPath */
/* unused harmony export getPropByPath */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return generateId; });
/* unused harmony export valueEquals */
/* unused harmony export escapeRegexpString */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return arrayFindIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return arrayFind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return coerceTruthyValueToArray; });
/* unused harmony export isIE */
/* unused harmony export isEdge */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return chunk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return substr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return arr2table; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return findInArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return treeDeep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return recursiveLoop; });
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

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/select/src/select.vue?vue&type=template&id=0e4aade6&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "iw-popover",
    {
      attrs: {
        trigger: _vm.trigger,
        placement: _vm.placement,
        "append-to-body": _vm.appendToBody,
        "popper-class":
          "iw-select iw-select--" +
          _vm.iwSize +
          (_vm.disabled ? " iw-select--disabled" : "") +
          (_vm.className ? " " + _vm.className : ""),
        disabled: _vm.disabled,
        width: null
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
          staticClass: "iw-select-reference",
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
              _c("div", { staticClass: "iw-input__inner" }, [
                _vm.triggerText
                  ? _c(
                      "span",
                      { staticClass: "iw-input__value" },
                      [_c("font", [_vm._v(_vm._s(_vm.triggerText))])],
                      1
                    )
                  : _vm.showSearch
                  ? _c("span", { staticClass: "iw-input__value" }, [
                      _vm.visible
                        ? _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.keyword,
                                expression: "keyword"
                              }
                            ],
                            ref: "input",
                            style: "width:" + (_vm.referenceWidth - 36) + "px",
                            attrs: {
                              disabled: _vm.disabled,
                              unselectable: !_vm.visible ? "off" : "on",
                              placeholder: _vm.placeholderText
                            },
                            domProps: { value: _vm.keyword },
                            on: {
                              input: [
                                function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.keyword = $event.target.value
                                },
                                _vm.handleSearchChange
                              ],
                              focus: _vm.handleSearchFocus,
                              blur: _vm.handleSearchBlur
                            }
                          })
                        : _vm.valueText
                        ? _c("input", {
                            ref: "input",
                            style: "width:" + (_vm.referenceWidth - 36) + "px",
                            attrs: {
                              disabled: _vm.disabled,
                              unselectable: "on",
                              readonly: ""
                            },
                            domProps: { value: _vm.valueText }
                          })
                        : _c("input", {
                            staticClass: "iw-input__placeholder",
                            style: "width:" + (_vm.referenceWidth - 36) + "px",
                            attrs: {
                              disabled: _vm.disabled,
                              unselectable: "on",
                              readonly: ""
                            },
                            domProps: {
                              value:
                                _vm.placeholder ||
                                _vm.t("iw.select.placeholder")
                            }
                          })
                    ])
                  : _vm.valueText && !_vm.showSearch
                  ? _c("span", { staticClass: "iw-input__value" }, [
                      _c("input", {
                        ref: "input",
                        style: "width:" + (_vm.referenceWidth - 36) + "px",
                        attrs: {
                          disabled: _vm.disabled,
                          unselectable: "on",
                          readonly: ""
                        },
                        domProps: { value: _vm.valueText }
                      })
                    ])
                  : _c("span", { staticClass: "iw-input__value" }, [
                      _c("input", {
                        staticClass: "iw-input__placeholder",
                        style: "width:" + (_vm.referenceWidth - 36) + "px",
                        attrs: {
                          disabled: _vm.disabled,
                          unselectable: "on",
                          readonly: ""
                        },
                        domProps: {
                          value:
                            _vm.placeholder || _vm.t("iw.select.placeholder")
                        }
                      })
                    ]),
                _c(
                  "span",
                  { staticClass: "iw-input__suffix" },
                  [
                    _vm._t("default", [
                      _c("i", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: !_vm.showClose,
                            expression: "!showClose"
                          }
                        ],
                        class: ["iw-input__icon", "iw-icon-" + _vm.iconClass]
                      }),
                      _vm.showClose
                        ? _c("i", {
                            staticClass: "iw-input__icon iw-icon-circle-close"
                          })
                        : _vm._e()
                    ])
                  ],
                  2
                )
              ])
            ]
          )
        ]
      ),
      !_vm.disabled
        ? _c(
            "div",
            {
              style: "min-width:" + (_vm.referenceWidth - 2) + "px",
              attrs: { id: "iw-select__popover--" + _vm.id }
            },
            [
              _c(
                "div",
                { staticClass: "iw-select__body" },
                [
                  _c(
                    "iw-scrollbar",
                    {
                      ref: "scrollbarRight__KEY",
                      attrs: { "wrap-class": "iw-select__wrap" }
                    },
                    [
                      _vm.showCheckAll &&
                      _vm.multiple &&
                      _vm.datas &&
                      _vm.datas.filter(function(item) {
                        return item.visible !== false
                      }).length
                        ? _c("ul", { staticClass: "iw-select__group" }, [
                            _c(
                              "li",
                              {
                                staticClass: "iw-select__group-item",
                                class: "iw-select__group-item--" + _vm.iwSize,
                                on: {
                                  click: function($event) {
                                    _vm.handleCheckAllChange()
                                  }
                                }
                              },
                              [
                                _c("span", {
                                  class: [
                                    "iw-checkbox",
                                    _vm.isCheckAllChecked()
                                      ? "iw-checkbox--checked"
                                      : "",
                                    _vm.isCheckAllIndeterminate()
                                      ? "iw-checkbox--indeterminate"
                                      : ""
                                  ]
                                }),
                                _c(
                                  "span",
                                  { class: [_vm.multiple ? "iw-text" : ""] },
                                  [_vm._v(_vm._s(_vm.t("iw.select.checkAll")))]
                                )
                              ]
                            )
                          ])
                        : _vm._e(),
                      _vm.datas &&
                      _vm.datas.filter(function(item) {
                        return item.visible !== false
                      }).length
                        ? _c(
                            "ul",
                            { staticClass: "iw-select__group" },
                            [
                              _vm._l(_vm.datas, function(item, key) {
                                return [
                                  item.visible !== false
                                    ? _c(
                                        "li",
                                        {
                                          key: key,
                                          staticClass: "iw-select__group-item",
                                          class: [
                                            { on: item.selected },
                                            "iw-select__group-item--" +
                                              _vm.iwSize
                                          ],
                                          attrs: {
                                            "scroll-key":
                                              item[_vm.optionProps.value] +
                                              "_" +
                                              "SELECT"
                                          },
                                          on: {
                                            click: function($event) {
                                              _vm.handleItemChange(item)
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "span",
                                            {
                                              attrs: {
                                                title:
                                                  item[_vm.optionProps.label]
                                              }
                                            },
                                            [
                                              _c("span", {
                                                class: [
                                                  _vm.multiple
                                                    ? "iw-checkbox"
                                                    : "",
                                                  _vm.multiple && item.selected
                                                    ? "iw-checkbox--checked"
                                                    : ""
                                                ]
                                              }),
                                              _c(
                                                "em",
                                                {
                                                  class: [
                                                    _vm.multiple
                                                      ? "iw-text"
                                                      : ""
                                                  ],
                                                  attrs: { title: item.value }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                  " +
                                                      _vm._s(item.value)
                                                  ),
                                                  _c(
                                                    "abbr",
                                                    {
                                                      staticClass: "font-gray"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          item.date
                                                            ? "(" +
                                                                item.date +
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
                                                  "iw-select__item-icon"
                                              })
                                            ]
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ]
                              })
                            ],
                            2
                          )
                        : _c("ul", { staticClass: "iw-select__group" }, [
                            _c(
                              "li",
                              {
                                staticClass: "iw-select__group-item",
                                class: "iw-select__group-item--" + _vm.iwSize,
                                on: {
                                  click: function($event) {
                                    _vm.visible = false
                                  }
                                }
                              },
                              [
                                _c(
                                  "em",
                                  { staticClass: "iw-select__placeholder" },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm.placeholder ||
                                          _vm.t("iw.select.placeholder")
                                      )
                                    )
                                  ]
                                )
                              ]
                            )
                          ])
                    ]
                  )
                ],
                1
              ),
              _vm.multiple &&
              _vm.datas &&
              _vm.datas.filter(function(item) {
                return item.visible !== false
              }).length
                ? _c(
                    "div",
                    { staticClass: "iw-select__footer" },
                    [
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
                            "\n        " +
                              _vm._s(_vm.t("iw.common.reset")) +
                              "\n      "
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
                            "\n        " +
                              _vm._s(_vm.t("iw.common.confirm")) +
                              "\n      "
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
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/select/src/select.vue?vue&type=template&id=0e4aade6&

// EXTERNAL MODULE: ./src/utils/util.js
var util = __webpack_require__(1);

// EXTERNAL MODULE: ./src/mixins/locale.js
var locale = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/select/src/select.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var selectvue_type_script_lang_js_ = ({
  name: 'IwSelect',
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
        return [];
      }
    },
    id: {
      type: Number,
      default: function _default() {
        return parseInt(Math.random() * 10000);
      }
    },
    multiple: {
      // 是否多选模式
      type: Boolean,
      default: false
    },
    showCheckAll: {
      // 当此项为 true 时，显示顶部全选功能
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    showSearch: {
      // 显示搜索框
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    status: {
      type: [Number, String],
      default: 0
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
    triggerText: {
      type: [String, Boolean],
      default: function _default() {
        return false;
      }
    },
    width: {
      type: [String, Number],
      default: function _default() {
        return null;
      }
    },
    placeholder: {
      type: String,
      default: ''
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
      default: 'bottom'
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
    }
  },
  data: function data() {
    return {
      visible: false, // 弹出层状态
      referenceWidth: null,
      datas: [],
      selectValues: [], // 多选状态下的选中值
      selectTexts: [], // 多选状态下的选中值名称
      checkedOptions: [],
      keyword: this.valueText, // 查询值
      lastSearch: undefined,
      placeholderText: this.placeholder
    };
  },

  computed: {
    iwSize: function iwSize() {
      return this.size || (this.$IWAYS || {}).size;
    },
    showClose: function showClose() {
      var hasValue = this.multiple ? Array.isArray(this.value) && this.value.length > 0 : this.value !== undefined && this.value !== null && this.value !== '';
      return this.clearable && !this.disabled && hasValue;
    },
    iconClass: function iconClass() {
      return this.visible && !this.disabled ? 'arrow-up is-reverse' : 'arrow-up';
    },
    valueText: function valueText() {
      if (this.multiple && this.checkedOptions && this.checkedOptions.length > 0) {
        if (this.checkedOptions.length > 1) {
          return '已选(' + this.checkedOptions.length + ')';
        } else {
          return this.checkedOptions[0][this.optionProps.label];
        }
      } else if (!this.multiple && this.checkedOptions && this.checkedOptions.length) {
        return this.checkedOptions[this.checkedOptions.length - 1][this.optionProps.label];
      } else {
        return '';
      }
    }
  },
  watch: {
    value: function value() {
      this.initData();
      this.initValue();
      this.initStatus();
    },
    data: function data() {
      this.initData();
      this.initValue();
      this.referenceWidth = this.$el.offsetWidth;
    },
    visible: function visible() {
      this.initData();
      this.initValue();
      this.initStatus();
    }
  },
  mounted: function mounted() {
    this.initData();
    this.initValue();
    this.initStatus();
    this.referenceWidth = this.$el.offsetWidth;
  },

  methods: {
    initValue: function initValue() {
      var _this = this;

      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.value;

      if (typeof value === 'number' || typeof value === 'string') {
        this.selectValues = [value];
      } else if (value instanceof Array) {
        this.selectValues = this.multiple ? Object(util["f" /* deepClone */])(value) : [value[0]];
      } else {
        this.selectValues = [];
      }
      var selectTexts = this.datas.filter(function (item) {
        var selected = _this.selectValues.includes(item[_this.optionProps.value]);
        _this.$set(item, 'selected', selected);
        return selected;
      });
      this.selectTexts = Object(util["f" /* deepClone */])(selectTexts);
      this.checkedOptions = Object(util["f" /* deepClone */])(selectTexts);
      this.placeholderText = this.valueText || this.placeholder;
    },
    initData: function initData() {
      var _this2 = this;

      var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (this.showSearch && !input) {
        this.keyword = this.visible ? undefined : this.valueText;
      }
      this.datas = this.data.map(function (item) {
        var visible = true;
        if (_this2.showSearch && _this2.keyword !== '' && _this2.keyword !== undefined && item[_this2.optionProps.label].indexOf(_this2.keyword) === -1) {
          visible = false;
        }
        item.visible = visible;
        return item;
      });
    },
    initStatus: function initStatus() {
      var _this3 = this;

      if (this.selectValues.length) {
        var key = this.selectValues[0];
        this.$nextTick(function () {
          _this3.scrollTop(key);
        });
      }
      if (this.showSearch && this.$refs.input) {
        this.$refs.input.focus();
      }
    },
    scrollTop: function scrollTop(key) {
      var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'SELECT';

      var obj = document.querySelector('#iw-select__popover--' + this.id + ' [scroll-key="' + key + '_' + target + '"]');
      if (obj) {
        var scrollTop = parseInt(obj['offsetTop']);
        document.querySelector('#iw-select__popover--' + this.id + ' .iw-select__wrap').scrollTop = scrollTop;
      }
    },

    /**
     * 查询关键字，过滤数据源
     */
    handleSearchChange: function handleSearchChange(event) {
      var _this4 = this;

      this.lastSearch = event.timeStamp;
      setTimeout(function () {
        if (_this4.lastSearch === event.timeStamp) {
          _this4.initData(true);
        }
      }, 400);
    },
    handleSearchFocus: function handleSearchFocus() {
      this.placeholderText = this.valueText || this.placeholder;
    },
    handleSearchBlur: function handleSearchBlur() {
      this.placeholderText = this.valueText || this.placeholder;
    },
    handleItemChange: function handleItemChange(item, selected) {
      var _this5 = this;

      if (this.multiple) {
        selected = selected === undefined ? !item.selected : selected;
        this.$set(item, 'selected', selected);
      } else {
        this.datas.map(function (element) {
          _this5.$set(element, 'selected', item[_this5.optionProps.value] === element[_this5.optionProps.value]);
        });
      }
      this.selectTexts = this.datas.filter(function (item) {
        return item.selected;
      });
      this.selectValues = this.selectTexts.map(function (item) {
        return item[_this5.optionProps.value];
      });
      if (this.showSearch && this.$refs.input) {
        this.$refs.input.focus();
      }
      this.multiple || this.submit();
    },
    handleCheckAllChange: function handleCheckAllChange() {
      var _this6 = this;

      var selected = this.isCheckAllChecked();
      this.datas.map(function (item) {
        _this6.$set(item, 'selected', !selected);
        return item;
      });
      this.selectTexts = this.datas.filter(function (item) {
        return !!item.selected;
      });
      this.selectValues = this.datas.filter(function (item) {
        return !!item.selected;
      }).map(function (item) {
        return item[_this6.optionProps.value];
      });
      if (this.showSearch && this.$refs.input) {
        this.$refs.input.focus();
      }
    },
    isCheckAllChecked: function isCheckAllChecked() {
      return this.selectValues.length === this.data.length;
    },
    isCheckAllIndeterminate: function isCheckAllIndeterminate() {
      return this.selectValues.length > 0 && this.selectValues.length !== this.datas.length;
    },
    reset: function reset() {
      var submit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      this.initValue(this.defaultValue);
      if (submit === true) {
        this.checkedOptions = Object(util["f" /* deepClone */])(this.selectTexts);
      }
    },
    submit: function submit() {
      var visible = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var value = this.multiple ? this.selectValues : this.selectValues[0];
      this.checkedOptions = Object(util["f" /* deepClone */])(this.selectTexts);
      this.$emit('input', value);
      this.$emit('change', value);
      this.keyword = this.valueText;
      this.placeholderText = this.valueText || this.placeholder;
      this.visible = visible;
    },
    substr: function substr(str, len) {
      return Object(util["l" /* substr */])(str, len);
    }
  }
});
// CONCATENATED MODULE: ./packages/select/src/select.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_selectvue_type_script_lang_js_ = (selectvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./packages/select/src/select.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_selectvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/select/src/select.vue"
/* harmony default export */ var src_select = (component.exports);
// CONCATENATED MODULE: ./packages/select/index.js
/* concated harmony reexport default */__webpack_require__.d(__webpack_exports__, "default", function() { return src_select; });


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

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _iways_ui_src_locale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);


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

/***/ 5:
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
      placeholder: '请选择',
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
      saveFirst: '请先保存'
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
var external_deepmerge_ = __webpack_require__(6);
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
        result = Object(util["j" /* hasOwn */])(args, i) ? args[i] : null;
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

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("deepmerge");

/***/ })

/******/ });