<template>
  <div id="app">
    <el-row>
<!--      <el-button type="primary">默认按钮</el-button>-->
<!--      <el-button type="success">成功按钮</el-button>-->
<!--      <el-button round>圆角按钮</el-button>-->

<!--      <el-button icon="el-icon-search" circle></el-button>-->
<!--      <el-button type="primary" icon="el-icon-edit" circle></el-button>-->
<!--      <el-button type="success" icon="el-icon-check" circle></el-button>-->
<!--      <el-button type="info" icon="el-icon-message" circle></el-button>-->
<!--      <el-button type="warning" icon="el-icon-star-off" circle></el-button>-->
<!--      <el-button type="danger" icon="el-icon-delete" circle></el-button>-->

{{username}}  {{password}}
    </el-row>

    <el-input v-model="username" placeholder="请输入用户名"></el-input><br>
    <el-input placeholder="请输入密码" v-model="password" show-password></el-input>

    <el-button type="primary">登录</el-button>
<!--    <ul>-->
<!--      <li v-for="user in user0">{{user.name}} {{user.id}}</li>-->
<!--    </ul>-->

  </div>
</template>

<script>
  import axios from "axios";

  export default {
    name: "app",
    data() {
      return {
        itemList: ['a','b','c'],
        msg:'hello',
        usrs:[],
        user0:{},
        username:"",
        password:""

      }
    },
    // mounted() {
    //   this.getData();
    // },
    methods: {
      getData() {
        axios.get('/User/all').then(response => {
          console.log(response.data);
          this.user0=response.data;
        }, response => {
          console.log("error");
        });
      }
    }
  }
</script>
