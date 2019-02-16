<template>
  <div>
    <ul class="movieList clearfix">
      <li v-for="(item,index) in movieList" :key="index" class="movieList clearfix">
        <div class="movieList-left">
          <img :src="item.cover.url" alt>
        </div>
        <div class="movieList-right">
          <div class="movie-title">{{item.title}}</div>
          <span v-for="(item,index) in item.actors" :key="index" class="movie-actors">{{item}}/</span>
          <div class="movie-year">年份：{{item.year}}年</div>
        </div>
      </li>
    </ul>
    <div class="loading" v-show="!isLoading">
      <div class="loading-content">
        <img src="../../assets/imgs/loading.gif" alt>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      movieList: [],
      listStart: 0,
      isLoading: true
    };
  },
  mounted() {
    window.onscroll = () => {
      let clientHeight = document.documentElement.clientHeight;
      let scrollTop = document.documentElement.scrollTop;
      let scrollHeight = document.documentElement.scrollHeight;
      if (
        clientHeight + scrollTop >= scrollHeight - 10 &&
        this.isloading &&
        this.movieList.length != 25
      ) {
        this.liatStart += 10;
        this.getData();
      }
    };
  },
  created() {
    let obj = {
      title: "电影",
      className: "movie"
    };
    this.$emit("changeNav", obj);
    this.getData();
  },
  methods: {
    getData() {
      let proxy = "https://bird.ioliu.cn/v2?url=";
      let url = `https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items?star=${
        this.movueStart
      }&count=10`;
      this.isLoading = false;
      axios
        .get(proxy + url)
        .then(res => {
          this.movieList = this.movieList.concat(
            res.data.subject_collection_items
          );
          this.isLoading = true;
        })
        .catch(res => {
          console.log("错误");
        });
    }
  }
};
</script>
<style scoped>
.movieList {
  border-bottom: 1px #000000 solid;
}
.movieList-left {
  float: left;
  width: 40%;
}
.movieList-right {
  float: right;
  width: 50%;
  margin-top: 10%;
  margin-left: 5%;
}
.movieList-right .movie-title {
  font-size: 18px;
  font-weight: bolder;
}
.movieList-right .movie-actors,
.movie-year {
  font-size: 12px;
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
