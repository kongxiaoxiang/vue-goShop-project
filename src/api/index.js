/**
 * 包含所有请求接口的函数
 */
import request from './ajax'

//获取三级分类列表
export const reqBaseCategoryList = ()=> request('/product/getBaseCategoryList')
//获取登录接口
export const reqLogin = (mobile,password)=> request.post('/user/passport/login',{mobile,password})