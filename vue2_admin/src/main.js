import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control


// 运行mock
import './mockServer'
// 引入自定义的过滤器
import './filters'
// 引入CommonCard组件,设为全局组件
import CommonCard from '@/views/dashboard/components/CommonCard.vue'

// 引入按钮级别权限控制的工具函数
import { hasBtnPermission } from './utils/permission'
// 引入包含所有接口请求函数模块的API对象
import * as API from '@/api'
import './plugins/elements'
// 后加的
Vue.component(CommonCard.name,CommonCard)


// 挂载到Vue原型对象上, 以便组件中直接可见
Vue.prototype.$hasBP = hasBtnPermission
Vue.prototype.$API = API
Vue.prototype.$BASE_API = process.env.VUE_APP_BASE_API

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
// if (process.env.NODE_ENV === 'production') {
//   const { mockXHR } = require('../mock')
//   mockXHR()
// }

// set ElementUI lang to EN
// Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
