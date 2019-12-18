<template>
  <div id="app">
      <navigate :navVal="activeNav"/>
      <router-view @changeNav="change"/>
    </div>
    
</template>
<script>
import navigate from './components/Navigator.vue'
export default {
  data() {
    return {
      activeNav:{
        title:"电影",
        className:"movie"
    }
  } 
},
methods: {
  change(obj){
    this.activeNav.title = obj.title;
    this.activeNav.className = obj.className;
}
},  
components:{
    navigate
  }
}
</script>
<style>
#app {
  color: #2c3e50;
  padding: 1rem 0;
}
</style>
