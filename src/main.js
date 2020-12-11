import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TypeNav from './components/TypeNav'

Vue.config.productionTip = false
//注册全局路由组件
Vue.component('TypeNav',TypeNav)

new Vue({
  render: h => h(App),
  router, //注册路由器
  store //配置store => $store
}).$mount('#app')
