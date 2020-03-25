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
/******/ 	return __webpack_require__(__webpack_require__.s = 41);
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

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return orderBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getColumnById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getColumnByKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getColumnByCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getRowIdentity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getKeysMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return mergeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return parseWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return parseMinWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return parseHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return toggleRowStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return walkTreeNode; });
/* harmony import */ var _iways_ui_src_utils_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };



var getCell = function getCell(event) {
  var cell = event.target;

  while (cell && cell.tagName.toUpperCase() !== 'HTML') {
    if (cell.tagName.toUpperCase() === 'TD') {
      return cell;
    }
    cell = cell.parentNode;
  }

  return null;
};

var isObject = function isObject(obj) {
  return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
};

var orderBy = function orderBy(array, sortKey, reverse, sortMethod, sortBy) {
  if (!sortKey && !sortMethod && (!sortBy || Array.isArray(sortBy) && !sortBy.length)) {
    return array;
  }
  if (typeof reverse === 'string') {
    reverse = reverse === 'descending' ? -1 : 1;
  } else {
    reverse = reverse && reverse < 0 ? -1 : 1;
  }
  var getKey = sortMethod ? null : function (value, index) {
    if (sortBy) {
      if (!Array.isArray(sortBy)) {
        sortBy = [sortBy];
      }
      return sortBy.map(function (by) {
        if (typeof by === 'string') {
          return Object(_iways_ui_src_utils_util__WEBPACK_IMPORTED_MODULE_0__[/* getValueByPath */ "k"])(value, by);
        } else {
          return by(value, index, array);
        }
      });
    }
    if (sortKey !== '$key') {
      if (isObject(value) && '$value' in value) value = value.$value;
    }
    return [isObject(value) ? Object(_iways_ui_src_utils_util__WEBPACK_IMPORTED_MODULE_0__[/* getValueByPath */ "k"])(value, sortKey) : value];
  };
  var compare = function compare(a, b) {
    if (sortMethod) {
      return sortMethod(a.value, b.value);
    }
    for (var i = 0, len = a.key.length; i < len; i++) {
      if (a.key[i] < b.key[i]) {
        return -1;
      }
      if (a.key[i] > b.key[i]) {
        return 1;
      }
    }
    return 0;
  };
  return array.map(function (value, index) {
    return {
      value: value,
      index: index,
      key: getKey ? getKey(value, index) : null
    };
  }).sort(function (a, b) {
    var order = compare(a, b);
    if (!order) {
      // make stable https://en.wikipedia.org/wiki/Sorting_algorithm#Stability
      order = a.index - b.index;
    }
    return order * reverse;
  }).map(function (item) {
    return item.value;
  });
};

var getColumnById = function getColumnById(table, columnId) {
  var column = null;
  table.columns.forEach(function (item) {
    if (item.id === columnId) {
      column = item;
    }
  });
  return column;
};

var getColumnByKey = function getColumnByKey(table, columnKey) {
  var column = null;
  for (var i = 0; i < table.columns.length; i++) {
    var item = table.columns[i];
    if (item.columnKey === columnKey) {
      column = item;
      break;
    }
  }
  return column;
};

var getColumnByCell = function getColumnByCell(table, cell) {
  var matches = (cell.className || '').match(/iw-table_[^\s]+/gm);
  if (matches) {
    return getColumnById(table, matches[0]);
  }
  return null;
};

var getRowIdentity = function getRowIdentity(row, rowKey) {
  if (!row) throw new Error('row is required when get row identity');
  if (typeof rowKey === 'string') {
    if (rowKey.indexOf('.') < 0) {
      return row[rowKey];
    }
    var key = rowKey.split('.');
    var current = row;
    for (var i = 0; i < key.length; i++) {
      current = current[key[i]];
    }
    return current;
  } else if (typeof rowKey === 'function') {
    return rowKey.call(null, row);
  }
};

var getKeysMap = function getKeysMap(array, rowKey) {
  var arrayMap = {};
  (array || []).forEach(function (row, index) {
    arrayMap[getRowIdentity(row, rowKey)] = { row: row, index: index };
  });
  return arrayMap;
};

function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

function mergeOptions(defaults, config) {
  var options = {};
  var key = void 0;
  for (key in defaults) {
    options[key] = defaults[key];
  }
  for (key in config) {
    if (hasOwn(config, key)) {
      var value = config[key];
      if (typeof value !== 'undefined') {
        options[key] = value;
      }
    }
  }
  return options;
}

function parseWidth(width) {
  if (width !== undefined) {
    width = parseInt(width, 10);
    if (isNaN(width)) {
      width = null;
    }
  }
  return width;
}

function parseMinWidth(minWidth) {
  if (typeof minWidth !== 'undefined') {
    minWidth = parseWidth(minWidth);
    if (isNaN(minWidth)) {
      minWidth = 80;
    }
  }
  return minWidth;
};

function parseHeight(height) {
  if (typeof height === 'number') {
    return height;
  }
  if (typeof height === 'string') {
    if (/^\d+(?:px)?$/.test(height)) {
      return parseInt(height, 10);
    } else {
      return height;
    }
  }
  return null;
}

// https://github.com/reduxjs/redux/blob/master/src/compose.js
function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}

function toggleRowStatus(statusArr, row, newVal) {
  var changed = false;
  var index = statusArr.indexOf(row);
  var included = index !== -1;

  var addRow = function addRow() {
    statusArr.push(row);
    changed = true;
  };
  var removeRow = function removeRow() {
    statusArr.splice(index, 1);
    changed = true;
  };

  if (typeof newVal === 'boolean') {
    if (newVal && !included) {
      addRow();
    } else if (!newVal && included) {
      removeRow();
    }
  } else {
    if (included) {
      removeRow();
    } else {
      addRow();
    }
  }
  return changed;
}

function walkTreeNode(root, cb) {
  var childrenKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'children';
  var lazyKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'hasChildren';

  var isNil = function isNil(array) {
    return !(Array.isArray(array) && array.length);
  };

  function _walker(parent, children, level) {
    cb(parent, children, level);
    children.forEach(function (item) {
      if (item[lazyKey]) {
        cb(item, null, level + 1);
        return;
      }
      var children = item[childrenKey];
      if (!isNil(children)) {
        _walker(item, children, level + 1);
      }
    });
  }

  root.forEach(function (item) {
    if (item[lazyKey]) {
      cb(item, null, 0);
      return;
    }
    var children = item[childrenKey];
    if (!isNil(children)) {
      _walker(item, children, 0);
    }
  });
}

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/utils/util.js
var util = __webpack_require__(1);

// CONCATENATED MODULE: ./packages/table/src/config.js


var cellStarts = {
  default: {
    order: ''
  },
  selection: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: '',
    className: 'iw-table-column--selection'
  },
  expand: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: ''
  },
  index: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: ''
  }
};

// 这些选项不应该被覆盖
var cellForced = {
  selection: {
    renderHeader: function renderHeader(h, _ref) {
      // return <iw-checkbox
      //   disabled={ store.states.data && store.states.data.length === 0 }
      //   indeterminate={ store.states.selection.length > 0 && !this.isAllSelected }
      //   nativeOn-click={ this.toggleAllSelection }
      //   value={ this.isAllSelected } />;

      var store = _ref.store;
    },
    renderCell: function renderCell(h, _ref2) {
      // return <iw-checkbox
      //   nativeOn-click={ (event) => event.stopPropagation() }
      //   value={ store.isSelected(row) }
      //   disabled={ column.selectable ? !column.selectable.call(null, row, $index) : false }
      //   on-input={ () => { store.commit('rowSelectedChanged', row); } } />;

      var row = _ref2.row,
          column = _ref2.column,
          store = _ref2.store,
          $index = _ref2.$index;
    },
    sortable: false,
    resizable: false
  },
  index: {
    renderHeader: function renderHeader(h, _ref3) {
      var column = _ref3.column;

      return column.label || '#';
    },
    renderCell: function renderCell(h, _ref4) {
      var $index = _ref4.$index,
          column = _ref4.column;

      var i = $index + 1;
      var index = column.index;

      if (typeof index === 'number') {
        i = $index + index;
      } else if (typeof index === 'function') {
        i = index($index);
      }

      return h('div', [i]);
    },
    sortable: false
  },
  expand: {
    renderHeader: function renderHeader(h, _ref5) {
      var column = _ref5.column;

      return column.label || '';
    },
    renderCell: function renderCell(h, _ref6) {
      var row = _ref6.row,
          store = _ref6.store;

      var classes = ['iw-table__expand-icon'];
      if (store.states.expandRows.indexOf(row) > -1) {
        classes.push('iw-table__expand-icon--expanded');
      }
      var callback = function callback(e) {
        e.stopPropagation();
        store.toggleRowExpansion(row);
      };
      return h(
        'div',
        { 'class': classes,
          on: {
            'click': callback
          }
        },
        [h('i', { 'class': 'iw-icon iw-icon-arrow-right' })]
      );
    },
    sortable: false,
    resizable: false,
    className: 'iw-table__expand-column'
  }
};

function defaultRenderCell(h, _ref7) {
  var row = _ref7.row,
      column = _ref7.column,
      $index = _ref7.$index;

  var property = column.property;
  var value = property && Object(util["i" /* getPropByPath */])(row, property).v;
  if (column && column.formatter) {
    return column.formatter(row, column, value, $index);
  }
  return value;
}

function treeCellPrefix(h, _ref8) {
  var row = _ref8.row,
      treeNode = _ref8.treeNode,
      store = _ref8.store;

  if (!treeNode) return null;
  var ele = [];
  var callback = function callback(e) {
    e.stopPropagation();
    store.loadOrToggle(row);
  };
  if (treeNode.indent) {
    ele.push(h('span', { 'class': 'iw-table__indent', style: { 'padding-left': treeNode.indent + 'px' } }));
  }
  if (typeof treeNode.expanded === 'boolean' && !treeNode.noLazyChildren) {
    var expandClasses = ['iw-table__expand-icon', treeNode.expanded ? 'iw-table__expand-icon--expanded' : ''];
    var iconClasses = ['iw-icon-arrow-right'];
    if (treeNode.loading) {
      iconClasses = ['iw-icon-loading'];
    }
    ele.push(h(
      'div',
      { 'class': expandClasses,
        on: {
          'click': callback
        }
      },
      [h('i', { 'class': iconClasses })]
    ));
  } else {
    ele.push(h('span', { 'class': 'iw-table__placeholder' }));
  }
  return ele;
}
// EXTERNAL MODULE: ./packages/table/src/util.js
var src_util = __webpack_require__(4);

// CONCATENATED MODULE: ./packages/table/src/table-column.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



// import IwCheckbox from '@iways-ui/packages/checkbox';

var columnIdSeed = 1;

/* harmony default export */ var table_column = ({
  name: 'IwTableColumn',

  props: {
    type: {
      type: String,
      default: 'default'
    },
    label: String,
    className: String,
    labelClassName: String,
    property: String,
    prop: String,
    width: {},
    minWidth: {},
    renderHeader: Function,
    sortable: {
      type: [Boolean, String],
      default: false
    },
    sortMethod: Function,
    sortBy: [String, Function, Array],
    resizable: {
      type: Boolean,
      default: true
    },
    columnKey: String,
    align: String,
    headerAlign: String,
    showTooltipWhenOverflow: Boolean,
    showOverflowTooltip: Boolean,
    fixed: [Boolean, String],
    formatter: Function,
    selectable: Function,
    reserveSelection: Boolean,
    filterMethod: Function,
    filteredValue: Array,
    filters: Array,
    filterPlacement: String,
    filterMultiple: {
      type: Boolean,
      default: true
    },
    index: [Number, Function],
    sortOrders: {
      type: Array,
      default: function _default() {
        return ['ascending', 'descending', null];
      },
      validator: function validator(val) {
        return val.every(function (order) {
          return ['ascending', 'descending', null].indexOf(order) > -1;
        });
      }
    }
  },

  data: function data() {
    return {
      isSubColumn: false,
      columns: []
    };
  },


  computed: {
    owner: function owner() {
      var parent = this.$parent;
      while (parent && !parent.tableId) {
        parent = parent.$parent;
      }
      return parent;
    },
    columnOrTableParent: function columnOrTableParent() {
      var parent = this.$parent;
      while (parent && !parent.tableId && !parent.columnId) {
        parent = parent.$parent;
      }
      return parent;
    },
    realWidth: function realWidth() {
      return Object(src_util["l" /* parseWidth */])(this.width);
    },
    realMinWidth: function realMinWidth() {
      return Object(src_util["k" /* parseMinWidth */])(this.minWidth);
    },
    realAlign: function realAlign() {
      return this.align ? 'is-' + this.align : null;
    },
    realHeaderAlign: function realHeaderAlign() {
      return this.headerAlign ? 'is-' + this.headerAlign : this.realAlign;
    }
  },

  methods: {
    getPropsData: function getPropsData() {
      var _this = this;

      for (var _len = arguments.length, props = Array(_len), _key = 0; _key < _len; _key++) {
        props[_key] = arguments[_key];
      }

      return props.reduce(function (prev, cur) {
        if (Array.isArray(cur)) {
          cur.forEach(function (key) {
            prev[key] = _this[key];
          });
        }
        return prev;
      }, {});
    },
    getColumnElIndex: function getColumnElIndex(children, child) {
      return [].indexOf.call(children, child);
    },
    setColumnWidth: function setColumnWidth(column) {
      if (this.realWidth) {
        column.width = this.realWidth;
      }
      if (this.realMinWidth) {
        column.minWidth = this.realMinWidth;
      }
      if (!column.minWidth) {
        column.minWidth = 80;
      }
      column.realWidth = column.width === undefined ? column.minWidth : column.width;
      return column;
    },
    setColumnForcedProps: function setColumnForcedProps(column) {
      // 对于特定类型的 column，某些属性不允许设置
      var type = column.type;
      var source = cellForced[type] || {};
      Object.keys(source).forEach(function (prop) {
        var value = source[prop];
        if (value !== undefined) {
          column[prop] = prop === 'className' ? column[prop] + ' ' + value : value;
        }
      });
      return column;
    },
    setColumnRenders: function setColumnRenders(column) {
      var _this2 = this;

      var h = this.$createElement;

      // renderHeader 属性不推荐使用。
      if (this.renderHeader) {
        console.warn('[Element Warn][TableColumn]Comparing to render-header, scoped-slot header is easier to use. We recommend users to use scoped-slot header.');
      } else if (column.type !== 'selection') {
        column.renderHeader = function (h, scope) {
          var renderHeader = _this2.$scopedSlots.header;
          return renderHeader ? renderHeader(scope) : column.label;
        };
      }

      var originRenderCell = column.renderCell;
      // TODO: 这里的实现调整
      if (column.type === 'expand') {
        // 对于展开行，renderCell 不允许配置的。在上一步中已经设置过，这里需要简单封装一下。
        column.renderCell = function (h, data) {
          return h(
            'div',
            { 'class': 'cell' },
            [originRenderCell(h, data)]
          );
        };
        this.owner.renderExpanded = function (h, data) {
          return _this2.$scopedSlots.default ? _this2.$scopedSlots.default(data) : _this2.$slots.default;
        };
      } else {
        originRenderCell = originRenderCell || defaultRenderCell;
        // 对 renderCell 进行包装
        column.renderCell = function (h, data) {
          var children = null;
          if (_this2.$scopedSlots.default) {
            children = _this2.$scopedSlots.default(data);
          } else {
            children = originRenderCell(h, data);
          }
          var prefix = treeCellPrefix(h, data);
          var props = {
            class: 'cell',
            style: {}
          };
          if (column.showOverflowTooltip) {
            props.class += ' iw-tooltip';
            props.style = { width: (data.column.realWidth || data.column.width) - 1 + 'px' };
          }
          return h(
            'div',
            props,
            [prefix, children]
          );
        };
      }
      return column;
    },
    registerNormalWatchers: function registerNormalWatchers() {
      var _this3 = this;

      var props = ['label', 'property', 'filters', 'filterMultiple', 'sortable', 'index', 'formatter', 'className', 'labelClassName', 'showOverflowTooltip'];
      // 一些属性具有别名
      var aliases = {
        prop: 'property',
        realAlign: 'align',
        realHeaderAlign: 'headerAlign',
        realWidth: 'width'
      };
      var allAliases = props.reduce(function (prev, cur) {
        prev[cur] = cur;
        return prev;
      }, aliases);

      Object.keys(allAliases).forEach(function (key) {
        var columnKey = aliases[key];

        _this3.$watch(key, function (newVal) {
          _this3.columnConfig[columnKey] = newVal;
        });
      });
    },
    registerComplexWatchers: function registerComplexWatchers() {
      var _this4 = this;

      var props = ['fixed'];
      var aliases = {
        realWidth: 'width',
        realMinWidth: 'minWidth'
      };
      var allAliases = props.reduce(function (prev, cur) {
        prev[cur] = cur;
        return prev;
      }, aliases);

      Object.keys(allAliases).forEach(function (key) {
        var columnKey = aliases[key];

        _this4.$watch(key, function (newVal) {
          _this4.columnConfig[columnKey] = newVal;
          var updateColumns = columnKey === 'fixed';
          _this4.owner.store.scheduleLayout(updateColumns);
        });
      });
    }
  },

  components: {
    // IwCheckbox
  },

  beforeCreate: function beforeCreate() {
    this.row = {};
    this.column = {};
    this.$index = 0;
    this.columnId = '';
  },
  created: function created() {
    var parent = this.columnOrTableParent;
    this.isSubColumn = this.owner !== parent;
    this.columnId = (parent.tableId || parent.columnId) + '_column_' + columnIdSeed++;

    var type = this.type || 'default';
    var sortable = this.sortable === '' ? true : this.sortable;
    var defaults = _extends({}, cellStarts[type], {
      id: this.columnId,
      type: type,
      property: this.prop || this.property,
      align: this.realAlign,
      headerAlign: this.realHeaderAlign,
      showOverflowTooltip: this.showOverflowTooltip || this.showTooltipWhenOverflow,
      // filter 相关属性
      filterable: this.filters || this.filterMethod,
      filteredValue: [],
      filterPlacement: '',
      isColumnGroup: false,
      filterOpened: false,
      // sort 相关属性
      sortable: sortable,
      // index 列
      index: this.index
    });

    var basicProps = ['columnKey', 'label', 'className', 'labelClassName', 'type', 'renderHeader', 'formatter', 'fixed', 'resizable'];
    var sortProps = ['sortMethod', 'sortBy', 'sortOrders'];
    var selectProps = ['selectable', 'reserveSelection'];
    var filterProps = ['filterMethod', 'filters', 'filterMultiple', 'filterOpened', 'filteredValue', 'filterPlacement'];

    var column = this.getPropsData(basicProps, sortProps, selectProps, filterProps);
    column = Object(src_util["h" /* mergeOptions */])(defaults, column);

    // 注意 compose 中函数执行的顺序是从右到左
    var chains = Object(src_util["a" /* compose */])(this.setColumnRenders, this.setColumnWidth, this.setColumnForcedProps);
    column = chains(column);

    this.columnConfig = column;

    // 注册 watcher
    this.registerNormalWatchers();
    this.registerComplexWatchers();
  },
  mounted: function mounted() {
    var owner = this.owner;
    var parent = this.columnOrTableParent;
    var children = this.isSubColumn ? parent.$el.children : parent.$refs.hiddenColumns.children;
    var columnIndex = this.getColumnElIndex(children, this.$el);

    owner.store.commit('insertColumn', this.columnConfig, columnIndex, this.isSubColumn ? parent.columnConfig : null);
  },
  destroyed: function destroyed() {
    if (!this.$parent) return;
    var parent = this.$parent;
    this.owner.store.commit('removeColumn', this.columnConfig, this.isSubColumn ? parent.columnConfig : null);
  },
  render: function render(h) {
    // slots 也要渲染，需要计算合并表头
    return h('div', this.$slots.default);
  }
});
// CONCATENATED MODULE: ./packages/table-column/index.js
/* concated harmony reexport default */__webpack_require__.d(__webpack_exports__, "default", function() { return table_column; });


/***/ })

/******/ });