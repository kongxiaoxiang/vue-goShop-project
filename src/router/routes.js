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
    name:'search', //params携带参数声明name
    path:'/search/:keyword?', //?声明当params携带参数为空串时
    component:Search,
    //将query/params参数映射成props传参
    // props: (route) => ({ keyword: route.params.keyword }) 
  },
  {
    path:'/register',
    component:Register,
    meta:{
      isHideFooter:true //控制Footer组件是否隐藏
    }
  },
  {
    path:'/login',
    component:Login,
    meta:{
      isHideFooter:true //控制Footer组件是否隐藏
    }
  },
]