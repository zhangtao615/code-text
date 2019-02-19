<template>
    <div>
       <div class="picture"><img src="" alt=""></div>
       <div class="information">
       </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            movieInfo:{}
        }
    },
    created(){
        this.getDetail()
    },
    methods:{
        getDetail(){
            let proxy = 'https://bird.ioliu.cn/v2?url='
            let url = `https://api.douban.com/v2/movie/subject/${this.$route.params.movieId}`
            axios.get(proxy+url)
            .then((res) =>{
                console.log(res.data);
                this.movieInfo = res.data;
            })
        }
    }
}
</script>