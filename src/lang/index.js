import Vue from 'vue'
import VueI18n from 'vue-i18n'
import iwaysUiZhLocale from '@iways-ui/src/locale/lang/zh-CN'// ant-design-vue lang
import iwaysUiEnLocale from '@iways-ui/src/locale/lang/en'// ant-design-vue lang
import zhLocale from './zh'
import enLocale from './en'

Vue.use(VueI18n)

const messages = {
  zh: {
    ...zhLocale,
    ...iwaysUiZhLocale
  },
  en: {
    ...enLocale,
    ...iwaysUiEnLocale
  }
}

export default messages
