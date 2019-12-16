'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // ant-design-vue lang
// ant-design-vue lang


var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vueI18n = require('vue-i18n');

var _vueI18n2 = _interopRequireDefault(_vueI18n);

var _zhCN = require('@iways-ui/src/locale/lang/zh-CN');

var _zhCN2 = _interopRequireDefault(_zhCN);

var _en = require('@iways-ui/src/locale/lang/en');

var _en2 = _interopRequireDefault(_en);

var _zh = require('./zh');

var _zh2 = _interopRequireDefault(_zh);

var _en3 = require('./en');

var _en4 = _interopRequireDefault(_en3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueI18n2.default);

var messages = {
  zh: _extends({}, _zh2.default, _zhCN2.default),
  en: _extends({}, _en4.default, _en2.default)
};

exports.default = messages;