export function toThousand(num, decimal = 0, preffix = '') {
  if (num === undefined || num === null || num === 'null' || num === '-' || num === '') return '-'
  return preffix + Number(+num || 0).toFixed(decimal).replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
}

export function toPercent(num, decimal = 0, preffix = false, suffix = '%') {
  if (num === undefined || num === null || num === 'null' || num === '-' || num === '') return '-'
  var str = Number(num * 100).toFixed(decimal)
  if (preffix) {
    const preffixChar = Number(str) === 0 ? '' : (Number(str) >= 0 ? '+' : '-')
    str = preffixChar + str.replace(preffixChar, '')
  }
  return str + suffix
}
