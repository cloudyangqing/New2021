// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {i18n} from './i18n/i18nconfig'
import 'font-awesome/css/font-awesome.min.css'
import 'font-awesome/css/font-awesome.css'
import VueResource from 'vue-resource'
import LuckDraw from 'vue-luck-draw'

Vue.use(VueResource)

Vue.use(LuckDraw)

Vue.config.productionTip = false

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
