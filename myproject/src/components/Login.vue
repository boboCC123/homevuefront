<template>
  <div>
<!--        <ul>-->
<!--          <li v-for="user in user0">{{user.name}} {{user.id}}</li>-->
<!--        </ul>-->

<!--    {{imgObj}}-->
    <el-form :rules="rules" ref="loginForm" :model="loginForm" class="loginContainer">
      <h3 class="loginTitle">
        系统登录
      </h3>
      <el-form-item prop="username">
        <el-input type="text" v-model="loginForm.username" placeholder="请输入用户名" >
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="loginForm.password" placeholder="请输入密码" >
        </el-input>
      </el-form-item>
      <el-checkbox v-model="checked" class="loginRemember">记住我</el-checkbox>
      <br/>
      <el-button type="primary" style="width:40%" @click="confirm">登录</el-button>
      <el-button type="primary" style="width:40%" @click="create">创建</el-button>
    </el-form>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    name: "Login",
    data(){
      return{
        captchaUrl: "",
        loginForm:{
          username:"cap",
          password:"",
          code:''
        },
        usrs:[],
        user0:[],
        //username:"",
        //password:"",
        checked: true,
        rules:{
          username:[{required:true,message:"请输入用户名",trigger:"blur"},{  trigger: 'blur' }
          ],
          password:[{required:true,message:"请输入密码",trigger:"blur"},{ min: 2,  message: '密码长度要大于2', trigger: 'blur' }],
          code:[{required:true,message:"请输入验证码",trigger:"blur"}],
        }

      }
    },
    mounted() {
      this.getData();
    },

    // computed: {
    //   imgObj() {
    //     return this.user0[0].name|| [];
    //   }
    // },
      methods:{
      submitLogin(){
        this.$refs.loginForm.validate((valid) => {
          if (valid) {
            alert('提交成功');
            alert(valid);
          } else {
            this.$message.error('登录出错请重新输入');
            return false;
          }
        });
      },
      getData() {
        axios.get('/User/all').then(response => {
          console.log(response.data);
          this.user0=response.data;
        }, response => {
          console.log("error");
        });
      },
      confirm(){
        // this.$router.replace('/Index');
        for(let i=0;i<this.user0.length;i++){
        if(this.user0[i].name===this.loginForm.username && this.user0[i].password === this.loginForm.password){
          this.$router.push({path:'/Index'});
          break;
        }else{
          // this.$router.push({path:'/Err'})
          // this.$router.push({path:'/Err'}).catch(err => {
          //   console.log('报错',err)
          // })
          this.$router.push({
            name: 'Err',
          }, () => {})

        }
        }
      },
        create(){
          this.$router.push({
            name: 'SU',
          }, () => {})
        }
    }
  }
</script>

<style lang="less" scoped>
  .loginContainer{
    border-radius: 15px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 15px 35px 15px 35px;
    background: aliceblue;
    border:1px solid blueviolet;
    box-shadow: 0 0 25px #f885ff;
  }
  .loginTitle{
    margin: 0px auto 48px auto;
    text-align: center;
    font-size: 30px;
  }
  .loginRemember{
    text-align: left;
    margin: 0px 0px 15px 0px;
  }
  body{
    background-image: url("../assets/tanke.png") ;
    background-size:100%;
    background-color: #8cc5ff;
  }
</style>

