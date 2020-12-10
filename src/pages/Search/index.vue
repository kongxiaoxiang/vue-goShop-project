<template>
  <div>
    <h2>search</h2>
    <p>query:{{$route.query.keyword}}</p>
    <p>params:{{$route.params.keyword}}</p>
    <!-- <p>{{keyword}}</p> 映射 -->
  </div>
</template>

<script>
  export default {
    // props:['keyword'], 映射
    name:'Search'
  }
</script>

<style lang="less" scoped>

</style>