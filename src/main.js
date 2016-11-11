/**
 * @author roy
 * @time 2016.11.03
 *
 */

'use strict'
import 'win-ui/lib/theme-default/index.css'

import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import Resource from 'vue-resource'

import WinUI from 'win-ui'
//import Element from 'element-ui'
import App from './App'
import routers from './router/router'

Vue.use(Vuex)
Vue.use(Router)
Vue.use(Resource)
Vue.use(WinUI)
//Vue.use(Element)

const router = new Router(routers)

new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
