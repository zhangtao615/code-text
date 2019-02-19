<template>
  <div class="music">
    <aplayer v-if="isShow" autoplay :music='musicList[0]' :list='musicList' :showLrc='true'/>
  </div>
</template>
<script>
import Aplayer from 'vue-aplayer'
import Axios from 'axios'
export default {
  components: {
    Aplayer
  },
  data() {
    return {
      musicList:[],
      isShow:false
    }
  },
  created(){
    let obj = {
      title:"音乐",
      className:"music"
    }
    this.$emit("changeNav",obj)
    this.getData()
  },
  methods: {
    getData(){
      Axios.get('./data/musicdata.json')
      .then((res) => {
        let arr = res.data.musicData;
        arr.forEach((element,index)=> {
          arr[index].lrc = location.origin+'/'+element.lrc
        });
        this.musicList = arr;
        console.log(arr);
        this.isShow =true
      })
    },
  },
}
</script>