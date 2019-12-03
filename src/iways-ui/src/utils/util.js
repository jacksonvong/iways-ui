import Vue from 'vue'

const hasOwnProperty = Object.prototype.hasOwnProperty

export function noop() {}

export function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key)
}

function extend(to, _from) {
  for (const key in _from) {
    to[key] = _from[key]
  }
  return to
}

export function toObject(arr) {
  var res = {}
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i])
    }
  }
  return res
}

export const getValueByPath = function(object, prop) {
  prop = prop || ''
  const paths = prop.split('.')
  let current = object
  let result = null
  for (let i = 0, j = paths.length; i < j; i++) {
    const path = paths[i]
    if (!current) break

    if (i === j - 1) {
      result = current[path]
      break
    }
    current = current[path]
  }
  return result
}

export function getPropByPath(obj, path, strict) {
  let tempObj = obj
  path = path.replace(/\[(\w+)\]/g, '.$1')
  path = path.replace(/^\./, '')

  const keyArr = path.split('.')
  let i = 0
  for (let len = keyArr.length; i < len - 1; ++i) {
    if (!tempObj && !strict) break
    const key = keyArr[i]
    if (key in tempObj) {
      tempObj = tempObj[key]
    } else {
      if (strict) {
        throw new Error('please transfer a valid prop path to form item!')
      }
      break
    }
  }
  return {
    o: tempObj,
    k: keyArr[i],
    v: tempObj ? tempObj[keyArr[i]] : null
  }
}

export const generateId = function() {
  return Math.floor(Math.random() * 10000)
}

export const valueEquals = (a, b) => {
  // see: https://stackoverflow.com/questions/3115982/how-to-check-if-two-arrays-are-equal-with-javascript
  if (a === b) return true
  if (!(a instanceof Array)) return false
  if (!(b instanceof Array)) return false
  if (a.length !== b.length) return false
  for (let i = 0; i !== a.length; ++i) {
    if (a[i] !== b[i]) return false
  }
  return true
}

export const escapeRegexpString = (value = '') => String(value).replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')

// TODO: use native Array.find, Array.findIndex when IE support is dropped
export const arrayFindIndex = function(arr, pred) {
  for (let i = 0; i !== arr.length; ++i) {
    if (pred(arr[i])) {
      return i
    }
  }
  return -1
}

export const arrayFind = function(arr, pred) {
  const idx = arrayFindIndex(arr, pred)
  return idx !== -1 ? arr[idx] : undefined
}

// coerce truthy value to array
export const coerceTruthyValueToArray = function(val) {
  if (Array.isArray(val)) {
    return val
  } else if (val) {
    return [val]
  } else {
    return []
  }
}

export const isIE = function() {
  return !Vue.prototype.$isServer && !isNaN(Number(document.documentMode))
}

export const isEdge = function() {
  return !Vue.prototype.$isServer && navigator.userAgent.indexOf('Edge') > -1
}

export const chunk = function(data, count) {
  const result = []
  if (!(data instanceof Array)) return data
  data.forEach((item, index) => {
    const temp = Math.floor(index / count)
    if (!(result[temp] instanceof Array)) {
      result[temp] = []
    }
    result[temp].push(item)
  })
  return result
}

function strlen(str) {
  var strlen = 0
  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 128) {
      strlen += 2
    } else {
      strlen++
    }
  }
  return strlen
}

export const substr = function(str, len) {
  var strlength = 0
  var s = ''
  var plen = 0
  if (strlen(str) <= len) {
    return str
  }
  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 128) {
      strlength += 2
      plen = 2
    } else {
      strlength++
      plen = 1
    }
    s += str.charAt(i)
    if (strlength >= len - plen) {
      return s + '...'
    }
  }
  return s
}

/**
 * 重构树数组
 * @param {Array} _array_tree 树的数组
 * @param {String} son 子节点键
 * @param {Number} level 层级默认值
 */
export function getTree(_array_tree, options = {}, level = 0, parent) {
  var { key, value, son, pKey, selected, multiple, leaf, disabledSelect, keyword, appendPKey } = Object.assign({
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
  }, options)
  const tree = []
  for (const i in _array_tree) {
    const _tree = {}
    let sub = null
    for (const key in _array_tree[i]) {
      if (key === son) {
        sub = _array_tree[i][son]
      } else {
        _tree[key] = _array_tree[i][key]
      }
    }
    _tree['level'] = level
    // 不输出禁选
    if (disabledSelect.length > 0) {
      if (disabledSelect && disabledSelect[0] && typeof disabledSelect[0] === 'object') {
        if (disabledSelect.find(item => item && item[key] && item[key] === _tree[key] && item[value] === _tree[value])) continue
      } else {
        if (disabledSelect.includes(_tree[key])) continue
      }
    }
    if (parent && parent['level'] >= 0) {
      _tree[pKey] = {
        key: parent[key],
        value: parent[value],
        level: parseInt(parent['level'])
      }
      if (parent.parent) {
        _tree['parent'].parent = parent.parent
      }
      if (appendPKey) {
        _tree[key] = [parent[key], _tree[key]].join('-')
      }
    }
    if (!_tree['disabled']) {
      if (selected && selected[0] && typeof selected[0] === 'object') {
        _tree['selected'] = !!selected.find(item => item && item[key] !== undefined && item[key] === _tree[key] && item[value] === _tree[value])
      } else {
        _tree['selected'] = selected.includes(_tree[key])
      }
    }
    if (sub) {
      const sub_array = getTree(sub, options, level + 1, _tree)
      if (sub_array && sub_array.length) {
        _tree[son] = sub_array
        if (leaf) {
          const _count = sub_array.filter(item => item.selected).length
          if (multiple) {
            _tree['selected'] = sub_array.length === _count
            _tree['indeterminate'] = sub_array.length > _count && _count > 0
          } else {
            _tree['selected'] = _count > 0
          }
        }
      } else if (sub_array.length === 0 && leaf) {
        continue
      } else if (keyword && _tree[value].indexOf(keyword) === -1) {
        continue
      }
    } else {
      if (keyword && _tree[value].indexOf(keyword) === -1) {
        continue
      }
    }
    tree.push(_tree)
  }
  return tree
}
/**
 * 树数组转成一维数组
 * @param {Array} _array_tree 树的数组
 * @param {String} son 子节点键
 * @param {Boolean} leaf 是否只取叶节点
 * @param {Number} level 层级默认值
 */
export function arr2table(_array_tree, son = 'children', leaf = false, level = 0, parent) {
  let tree = []
  for (const i in _array_tree) {
    const _tree = _array_tree[i]
    const sub = _tree[son]
    _tree['level'] = level
    if (leaf && (!sub || !sub.length)) {
      tree.push(_tree)
    } else if (!leaf) {
      tree.push(_tree)
    }
    if (sub) {
      const sub_array = arr2table(sub, son, leaf, level + 1, _tree)
      tree = tree.concat(sub_array)
    }
  }
  return tree
}
export function findInArray(key, value, arr, sub = 'sub', level, output = []) {
  if (typeof key !== 'string' || value === undefined || typeof arr !== 'object') return {}
  for (var i in arr) {
    var item = arr[i]
    if (item[key] !== undefined && item[key] === value && item['level'] === level) {
      output.push(item)
    } else if (item.hasOwnProperty(sub) && typeof item[sub] === 'object') {
      findInArray(key, value, item[sub], sub, level, output)
    }
  }
  return output.length > 0 ? output[0] : {}
}
export function treeDeep(jsonData) {
  let num = 0
  function recursion(data, k) {
    num = Math.max(num, k)
    for (const x in data) {
      const obj = data[x]
      if (obj.children) {
        recursion(obj.children, k + 1)
      }
    }
  }
  recursion(jsonData, 1)
  return num
}
export function recursiveLoop(data, loopKey = 'parent', key = 'key', output = []) {
  if (typeof data !== 'object' || data === null) {
    output.push(data)
  } else if (!(data instanceof Array)) {
    output.push(data[key] !== undefined ? data[key] : data)
    if (data.hasOwnProperty(loopKey)) {
      const item = data[loopKey]
      recursiveLoop(item, loopKey, key, output)
    }
  } else {
    for (var item of data) {
      recursiveLoop(item, loopKey, key, output)
    }
  }
  return output
}
export function deepClone(source) {
  var sourceCopy = source instanceof Array ? [] : {}
  for (var item in source) {
    sourceCopy[item] = typeof source[item] === 'object' ? deepClone(source[item]) : source[item]
  }
  return sourceCopy
}
