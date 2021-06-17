import Vue from 'vue'
import VueI18n from 'vue-i18n'
import {messages} from './i18ndata'
//Vue.use(VueI18n)
Vue.use(VueI18n, {
  i18n: function(path, options) {
    let value = i18n.t(path, options)
    if (value !== null && value !== undefined) {
      return value
    }
    return ''
  }
})

const lan = 'EN' // 默认为中文
export const i18n = new VueI18n({
  locale: lan, // set locale
  messages // set locale messages
})
if (window.localStorage.getItem('lan') === null) {
  i18n.locale = lan
} else { // 根据用户上次的选择的语言来显示语言
  i18n.locale = window.localStorage.getItem('lan')
}
