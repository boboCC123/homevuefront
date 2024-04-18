<template>
  <div>
    <h3>小说</h3>
    <p2>这是小说</p2><br/>
    {{novel}}
    <el-form   class="loginContainer">
      <el-input type="text"  placeholder="请输入用户名" v-model="novel" ></el-input>
    <el-button type="primary" style="width:100%" @click="confirm">按钮</el-button>
    </el-form>
  </div>
</template>

<script>
    export default {
        name: "Novel",
      data() {
          return {
            novel:null
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
    font-size: 40px;
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

