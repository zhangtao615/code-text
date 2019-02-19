<template>
    <div>
        <swipe class="my-swipe">
            <swipe-item class="slide1"><img src="../../assets/imgs/1.jpg" alt=""></swipe-item>
            <swipe-item class="slide2"><img src="../../assets/imgs/2.png" alt=""></swipe-item>
            <swipe-item class="slide3"><img src="../../assets/imgs/3.jpg" alt=""></swipe-item>
        </swipe>
    </div>
</template>
<script>
require('vue-swipe/dist/vue-swipe.css');
import { Swipe, SwipeItem } from 'vue-swipe';
export default {
    components:{
    'swipe':Swipe,
    'swipe-item': SwipeItem
    },
    created(){
        let obj = {
            title:"书籍",
            className:"book"
        }
    this.$emit("changeNav",obj)
  }
}
</script>
<style scoped>
    .my-swipe {
        height: 200px;
        color: #fff;
        font-size: 30px;
        text-align: center;
    }

.slide1 img{
    height: 200px;
}

.slide2 img{
  height: 200px;
}

.slide3 img{
  height: 200px;
}
</style>
