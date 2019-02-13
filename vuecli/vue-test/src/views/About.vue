<template>
  <div class="about">
    <h1>useless page</h1>                            
    <h2>{{count}}</h2>
    <h2>{{count1}}</h2>
    <button @click="add(10)">add</button>
    <br>
    <button @click="addAction">addAction</button>
  </div>
</template>
<script>
import {mapState,mapMutations,mapGetters, mapActions} from 'vuex';
export default {
  // methods: {
  //   add(){
  //     this.$store.commit("add")
  //   }
  // },
  // computed:{
  //   computedCount(){
  //     return this.$store.state.count;
  //   }
  // }
  // computed:mapState({
  //   computedCount:state => state.count
  // })
  // computed: mapState(["count"]),
  // methods: mapMutations(['add']),
  computed: {
    ...mapState(['count']),
    ...mapGetters(['count1'])
  },
  methods: {
    ...mapMutations(['add']),
    ...mapActions(['addAction'])
  },




















  // beforeRouteEnter (to, from, next) {
  // next();
  // },
  // beforeRouteLeave (to, from, next) {
 //  next();
  // }
}
</script>