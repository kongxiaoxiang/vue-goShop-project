/**
 * 使用ajax请求与后台进行交互
 */
import axios from 'axios'
import NProgress from 'nprogress' 
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false }); //配置进度条加载时右上角旋转按钮关闭

//创建一个axios实例对象
const request = axios.create({
  baseURL:'/api',
  timeout:20000
})

//添加请求拦截器
request.interceptors.request.use( config =>{
  NProgress.start()
  return config
})
//添加响应拦截器
request.interceptors.response.use(
  response => {
    NProgress.done()
    return response.data
  },
  error =>{
    alert('请求错误' + error.message || '未知错误')
    return Promise.reject(error)
  }
)

//暴露instance
export default request
