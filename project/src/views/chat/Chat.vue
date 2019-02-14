<template>
    <div>
        <h1>Chat</h1>
    </div>
</template>
<script>
export default {
created(){
    let obj = {
      title:"智能聊天",
      className:"chat"
    }
    this.$emit("changeNav",obj)
  }
}
</script>