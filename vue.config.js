module.exports = {
  devServer: {
    proxy: {
      '/api': { //只处理/api开头路径的请求
        target: 'http://182.92.128.115', //转发目标地址
        changeOrigin: true //支持跨域
      }
    }
  }
}
