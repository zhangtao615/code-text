<template>
  <div>
    <div class="talk-bar">
      <ul>
        <li v-for="(item,index) in talkList" :key="index" class="trans">
          <div class="right">
            <span>{{item.question}}</span>
          </div>
          <div class="left">
            <span>{{item.answer}}</span>
          </div>
        </li>
      </ul>
    </div>
      <div class="talk-form">
          <input type="text" v-model="msg">
          <button @click="send">发送</button>
      </div>
      <div class="occupy"></div>
   
  </div>
</template>
<script>
import md5 from 'js-md5';
export default {
  data() {
    return {
      msg:'',
      talkList:[],
    }
  },
  created(){
    let obj = {
      title:"聊天",
      className:"talk"
    }
    this.$emit("changeNav",obj);
  },
  methods: {
    getTimeStamp(){
      let dateStr = Date.parse(new Date())
      dateStr = dateStr.toString().substr(0,10);
      return dateStr;
    },
    getNonceStr(){
      let str = Math.random().toString(36).substr(2);
      return str;
    },
    getReqSign(params,appkey){
      let arr = [];
      let obj = {};
      let str = ""
      arr = Object.keys(params).sort();
      arr.forEach((item,index,arr)=>{
        obj[item]= params[item]
      })
      for(let item in obj){
        if(obj[item]!=""){
          str+=item+"="+encodeURI(obj[item])+"&"
        }
      }
      str += 'app_key='+appkey;
      str = md5(str).toUpperCase();
      return str
    },
    send(){
      let API_PROXY = 'https://bird.ioliu.cn/v2?url=';
      let url = 'https://api.ai.qq.com/fcgi-bin/nlp/nlp_textchat';
      let params = {
        app_id:"2111939678",
        time_stamp:this.getTimeStamp(),
        nonce_str:this.getNonceStr(),
        session:"10000",
        question:this.msg,
        sign:""
      }
      let appkey = 'OhsxH5r2TVotMyID';
      params.sign = this.getReqSign(params,appkey);
      axios({
        url:API_PROXY+url,
        method: 'post',
        data: {...params},
      }).then((res)=>{
        let obj = {
          question:this.msg,
          answer:res.data.data.answer
        }
        this.talkList.push(obj)
        console.log(this);
      })
    }
    
  }
}
</script>
<style scoped>
.talk-form{
    width: 100%;
    height: 1rem;
    background-color: #ddd;
    text-align: center;
    position: fixed;
    bottom: 1rem;
  }
  .talk-form input,button{
    transform: translateY(50%)
  }
  .talk-bar span{
    padding:5px 10px;
    background-color: rgb(195, 240, 195);
    border-radius: 5px;
  }
  .talk-bar .left{
    text-align:left;
  }
  .talk-bar .right{
    text-align: right
  }
  .occupy{
    width: 100%;
    height: 1rem;
  }
</style>
