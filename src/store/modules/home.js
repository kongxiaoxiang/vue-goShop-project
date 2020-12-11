import {reqBaseCategoryList} from '@/api'
const state = {
  baseCategoryList:[] //所有三级分类的数组
}
const mutations = {
  //接收category更新baseCategoryList
  RECEIVE_BASECATEGORYLIST(state,category){
    state.baseCategoryList = category
  }
}
const actions = {
  //发送ajax异步请求获取数据
  async getBaseCategoryList({commit}){
    const result = await reqBaseCategoryList()
    //commit给mutations更新状态
    if(result.code === 200){
      const category = result.data
      commit('RECEIVE_BASECATEGORYLIST',category)
    }
  }
  
}
const getters = {}

export default{
  state,
  mutations,
  actions,
  getters
}