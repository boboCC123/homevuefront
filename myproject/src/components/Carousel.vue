<template>
    <div>
      <h3>轮播图Carousel</h3>
      <el-carousel :interval="5000" arrow="always" >
        <el-carousel-item v-for="imgurl in imgList" :key="imgurl.imgname">
          <!-- fit可选择：fill / contain / cover / none / scale-down -->
          <el-image
            style="width: 100%; height: 100%"
          fit="scale-down"
            :src="imgurl.imgname"
          >
          </el-image>
        </el-carousel-item>
      </el-carousel>
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

  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 1500px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
