<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/mine">Mine</router-link>|
      <router-link to="/pack">Pack</router-link>|
      <router-link :to="{name:'pack1',params:{name:'pack1'}}">子路由测试1</router-link>|
      <router-link to="/pack/pack2">子路由测试2</router-link>|
       <router-link to="/home">返回首页</router-link>|
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
