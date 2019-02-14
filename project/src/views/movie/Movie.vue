<template>
  <div class="movie">
   <h1>Movie</h1>
  </div>
</template>

<script>
export default {
created(){
    let obj = {
      title:"电影",
      className:"movie"
    }
    this.$emit("changeNav",obj)
  }
}
</script>