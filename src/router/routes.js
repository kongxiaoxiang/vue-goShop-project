/*
routes数组模块
*/
import Home from '@/pages/Home'  //@ src绝对路径
import Search from '@/pages/Search'
import Register from '@/pages/Register'
import Login from '@/pages/Login'

export default [
  {
    path:'/',
    component:Home
  },
  {
    path:'/search',
    component:Search
  },
  {
    path:'/register',
    component:Register
  },
  {
    path:'/login',
    component:Login
  },
]