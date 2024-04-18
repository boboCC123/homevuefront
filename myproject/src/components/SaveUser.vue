<template>
<div>

  <h3>保存用户</h3>

  <el-form ref="form" :model="form" label-width="80px" action = 'http://www.baidu.com'>
    <el-form-item label="用户名">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="密码">
        <el-input v-model="form.pass"></el-input>
      </el-form-item>
    </el-form>
    <el-form-item>
      <el-button type="primary" >立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>

</div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          pass: '',
          webSite:'webSite',
          url:'http://www.baidu.com'
        }
      }
    },
    methods: {
      onSubmit() {
        console.log("用户名："+this.form.name+"密码："+this.form.pass);

      }
    }
  }
</script>

<style scoped>

</style>
