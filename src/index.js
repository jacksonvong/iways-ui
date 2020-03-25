import Tag from '../packages/tag'
import Icon from '../packages/icon'
import Input from '../packages/input'
import Empty from '../packages/empty'
import Button from '../packages/button'
import Select from '../packages/select'
import Loading from '../packages/loading'
import Popover from '../packages/popover'
import Dialog from '../packages/dialog'
import Scrollbar from '../packages/scrollbar'
import Table from '../packages/table'
import TableColumn from '../packages/table-column'

import Favorite from '../packages/favorite'
import Submodel from '../packages/submodel'
import Version from '../packages/version'
import Manfbrand from '../packages/manfbrand'
import Cascader from '../packages/cascader'
import CascaderTable from '../packages/cascader-table'
import DatePicker from '../packages/date-picker'

import locale from './locale'
import * as filters from './utils/filters'

var components = [
  Tag,
  Icon,
  Input,
  Empty,
  Button,
  Select,
  Popover,
  Dialog,
  Scrollbar,
  Table,
  TableColumn,
  Favorite,
  Submodel,
  Version,
  Manfbrand,
  Cascader,
  CascaderTable,
  DatePicker
]

var install = (Vue, opts = {}) => {
  locale.use(opts.locale)
  locale.i18n(opts.i18n)

  components.map(component => {
    Vue.component(component.name, component)
  })
  Vue.use(Loading.directive)

  Vue.prototype.$IWAYS = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
  }

  // 注册全局过滤器
  Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
  })
}

// if (window && typeof window !== undefined && window.Vue) {
//   install(window.Vue)
// }

export {
  install,
  Tag,
  Icon,
  Input,
  Empty,
  Button,
  Select,
  Loading,
  Popover,
  Dialog,
  Scrollbar,
  Table,
  TableColumn,
  Favorite,
  Submodel,
  Version,
  Manfbrand,
  Cascader,
  CascaderTable,
  DatePicker
}

export default {
  locale: locale.use,
  i18n: locale.i18n,
  install,
  Tag,
  Icon,
  Input,
  Empty,
  Button,
  Select,
  Loading,
  Popover,
  Dialog,
  Scrollbar,
  Table,
  TableColumn,
  Favorite,
  Submodel,
  Version,
  Manfbrand,
  Cascader,
  CascaderTable,
  DatePicker
}
