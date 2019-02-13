<template>
  <div id="app" class="clearfixed">
    <router-view/>
    <div id="nav">
      <router-link to="/">电影</router-link> 
      <router-link to="/music">音乐</router-link>
      <router-link to="/chat">智能闲聊</router-link>
      <router-link to="/book">图书</router-link>
    </div>
    
  </div>
</template>

<style>

*{
  text-decoration: none;
  margin: 0;
  padding: 0;
}
  @media(max-width:640px){
    #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale; 
    }
    #nav{
      position: fixed;
      bottom: 40px;
      background-color:red; 
    }
    #nav a{
      margin:0 20px 0 20px;  
    }
    .clearfixed::after{
      content:'',
      display：block,
      clear：both;
    }   
}

</style>
