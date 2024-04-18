<template>
  <div>
    <h2>欢迎登录</h2>
    <router-link to="/Version">版本</router-link>
    <router-link to="/Novel">小说</router-link>
    <router-link to="/Comic">漫画</router-link>
    <router-link to="/Video">视频</router-link>
    <el-link type="info" href="http://wwww.baidu.com">帆软</el-link>

    <router-link :to="'/User'+123">用户</router-link>
    <router-link :to="{
      query:{id:18,name:'tom',height:18.6},
       path:'/Profile'+123
    }">档案</router-link><br/>
    <router-view/>
<!--&lt;!&ndash;  <div><img src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"/></div>&ndash;&gt;-->
    <el-image
      style="width: 100px; height: 100px"
      :src="url"></el-image>

<!--    <img src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"/>-->
  </div>
</template>

<script>
  // import axios from "axios";
    export default {
        name: "Index",
      data() {
        return {
          fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
          url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        }
      }
    }
</script>

<style scoped>

</style>
