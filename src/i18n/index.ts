import { createI18n } from 'vue-i18n'
import zh_CN from './langs/zh-CN.json'
import zn_TW from './langs/zh-TW.json'
import en from './langs/en.json'

const i18n = createI18n({
  legacy: false,
  locale: 'zh-CN',
  messages: {
    'zh-CN': zh_CN,
    'zh-TW': zn_TW,
    en
  }
})

export default i18n
