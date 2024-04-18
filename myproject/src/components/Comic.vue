<template>
  <div>
    <h3>图片</h3>
    <router-link to="/Comic/AddComic">上传图片</router-link>
    <router-link to="/Comic/Carousel">轮播图</router-link>
    <router-link to="/Comic/DownloadFile">下载</router-link><br>

<!--<img src="http://localhost:8083/2023/05/20/bbd35b2d-e7c7-4074-bee1-519f7b8d1dc3.jpg">-->
    <p  class="headItem" v-for="imgurl in imgList" :key="imgurl.imgname">
      <el-image
        class="headImg"
        style="width: 100px; height: 100px"
        :src="imgurl.imgname"
        :preview-src-list="fileurllist">
        </el-image>
    </p>

  </div>
</template>

<script>
  import axios from "axios";

  export default {

    data() {
      return {
        imgList: [
          'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg'
        ],
        fileurllist:[]
      }
    },
    mounted() {
      this.getData();
    },
    methods: {
      getData() {
        axios.get('/Comic/all').then(response => {
          console.log(response.data);
          this.imgList=response.data;
          this.url=response.data[0].imgname;
          console.log(this.url);
          console.log(this.imgList.length);
          console.log(this.imgList);
          for(let i=0 ;i<=this.imgList.length;i++){
            this.fileurllist.push(response.data[i].imgname)
            // console.log(response.data[i].imgname);
          }
          // console.log(this.fileurllist);
        }, response => {
          console.log("error");
        });
      },

    }
  }
</script>

<style>
  body{
    background-color: aliceblue;
    /*background:url('../../img/littleDog.jpg');*/
  }


  .headImg{
    /*position: absolute;*/
    /*left: 10rem;*/
  }

  .headItem{
    /*background-color: #FFFFFF;*/
    /*width: 1000rem;*/
    /*position: relative;*/
    display: flex;
    align-items: center
  }

</style>
