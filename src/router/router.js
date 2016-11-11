/**
 * Created by roy on 2016/11/3.
 */
'use strict'
import Index from '../pages/index/index.vue'
import Mail from '../pages/email/index.vue'
import Sales from '../pages/sales/index.vue'
import Demo from '../pages/demo/index.vue'
export default {
  mode: 'history',
  routes: [
    {path: '/', component: Index},
    {path: '/index', component: Index},
    {path: '/demo', component: Demo},
    {path: '/sales', component: Sales},
    {path: '/email', component: Mail}
  ]
}
