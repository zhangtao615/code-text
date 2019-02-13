<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{count}}</h2>
    <button @click="add">add</button>
  </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'
export default {
  methods: {
    add(){
      this.$store.commit('add',10)
    }
  },
  //state访问状态对象开始
  
  // computed: {
  //   count(){
  //     return this.$store.state.count
  //   }
  // },//通过computed的计算属性直接赋值
  // computed:mapState({
  //   count:state => state.count 
  // })   //通过mapState的对象来赋值
  // computed:mapState(['count'])//通过mapState的数组来赋值
  
  //state访问状态对象结束
 
 //mutations修改状态--传值 开始
  //methods:mapMutations(['add'])
}
</script>