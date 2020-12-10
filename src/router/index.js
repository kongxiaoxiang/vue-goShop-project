/*
路由器的对象模块
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes.js'

//修改vue原型上push方法 去解决NavigationDuplicated
const originPush = VueRouter.prototype.push
VueRouter.prototype.push = function(location,onComplete = ()=>{},onAbort){
  return originPush.call(this,location,onComplete,onAbort)
}
const originReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function(location,onComplete,onAbort){
  return originReplace.call(this,location,onComplete,onAbort).catch(()=>{})
}

//声明使用VueRouter
Vue.use(VueRouter)

export default new VueRouter({
  // mode:'hash', //带#
  mode:'history', //不带#
  routes
})