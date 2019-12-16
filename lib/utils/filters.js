'use strict';

exports.__esModule = true;
exports.toThousand = toThousand;
exports.toPercent = toPercent;
function toThousand(num) {
  var decimal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var preffix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  if (num === undefined || num === null || num === 'null' || num === '-' || num === '') return '-';
  return preffix + Number(+num || 0).toFixed(decimal).replace(/^-?\d+/g, function (m) {
    return m.replace(/(?=(?!\b)(\d{3})+$)/g, ',');
  });
}

function toPercent(num) {
  var decimal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var preffix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var suffix = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '%';

  if (num === undefined || num === null || num === 'null' || num === '-' || num === '') return '-';
  var str = Number(num * 100).toFixed(decimal);
  if (preffix) {
    var preffixChar = Number(str) === 0 ? '' : Number(str) >= 0 ? '+' : '-';
    str = preffixChar + str.replace(preffixChar, '');
  }
  return str + suffix;
}