/*
路由器的对象模块
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes.js'

//声明使用VueRouter
Vue.use(VueRouter)

export default new VueRouter({
  // mode:'hash', //带#
  mode:'history', //不带#
  routes
})