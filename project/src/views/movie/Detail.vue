<template>
    <div>
       <div class="picture clearfix"><img :src="movieInfo.images.small" alt=""></div>
       <div class="information clearfix">
           <h4>{{movieInfo.title}}</h4>
           <h5>{{movieInfo.aka}}</h5>
           <div>评分：{{movieInfo.rating.average}}分</div>
       </div>
       <div class="summary">{{movieInfo.summary}}</div>
       <div class="loading" v-show="!isLoading">
            <div class="loading-content">
                <img src="../../assets/imgs/loading.gif" alt>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            movieInfo:{},
            isLoading: true
        }
    },
    created(){
        this.getDetail()
    },
    methods:{
        getDetail(){
            let proxy = 'https://bird.ioliu.cn/v2?url='
            let url = `https://api.douban.com/v2/movie/subject/${this.$route.params.movieId}`
            this.isLoading = false;
            axios.get(proxy+url)
                .then((res) =>{
                    console.log(res);
                    this.movieInfo = res.data;
                    this.isLoading = true;
                })
        }
    }
}
</script>
<style scoped>
.picture,.information{
    float: left;
}
.picture img{
    width: 2.5rem;
}
.information{
    margin-left: 20px;
}
.loading {
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.loading-content {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -75px;
  margin-top: -75px;
  width: 150px;
  height: 150px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
