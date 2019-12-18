<template>
<div :class="{activeClass}">
    <header>
        <h1>{{activeTitle}}</h1>
        <span @click='routerPush(navList[0])'>首页</span>
    </header>
    <nav>
        <ul>
           <li :class="{'active':item.className==activeClass}"  v-for="(item,index) in navList" :key="index" @click="routerPush(item)">{{item.name}}</li>
        </ul>
    </nav>
</div>   
</template>
<script>
export default {
    name:'navigate',
    created () {
        this.activeClass = this.navVal.className;
        this.activeTitle = this.navVal.title
    },
    data() {
        return {
            activeTitle:'电影',
            activeClass:'movie',
            navList:[
                {
                    name:'电影',
                    routerPath:'/',
                    className:'movie'
                },
                {
                    name:'音乐',
                    routerPath:'/music',
                    className:'music'
                },
                {
                    name:'智能聊天',
                    routerPath:'/chat',
                    className:'chat'
                },
                {
                    name:'书籍',
                    routerPath:'/book',
                    className:'book'
                },
            ]
        }
    },
    props: ['navVal'],
    methods: {
        routerPush(obj){
            this.$router.push(obj.routerPath);
            this.activeTitle = obj.name;
           this.activeClass = obj.className;
        }
    },
    computed: {
        propsVal(){
            return this.navVal.title
        }
    },
    watch: {
         propsVal(val){
             this.activeClass = this.navVal.className;
             this.activeTitle = this.navVal.title
         }
    },
}
</script>
<style scoped>
    header,nav{
        position: fixed;
        background-color:rgb(33, 150, 243);
        color: #ffffff;
        text-align: center;
    }
    header{
        top: 0;
        width: 100%;
        height: 1rem;
        line-height: 1rem;
    }
    header span{
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%)
    }
    nav{
        bottom: 0;
        height: 1rem;
        width: 100%;
    }

    nav li{
        float: left;
        width: 25%;
        line-height: 1rem;
    }
    nav li.active{
        font-size: 16px;
        color: aliceblue;
        font-weight: bolder;
    }
    .movie header,.movie nav{
    background-color: rgb(33, 150, 243);
  }
  .music header,.music nav{
    background-color: rgb(0, 150, 136);
  }
  .book header,.book nav{
    background-color: rgb(121, 85, 72);
  }
  .talk header,.talk nav{
    background-color: rgb(63, 81, 181);
  }
</style>
