<template>
  <div>
    <h3>上传图片</h3>

    <input type="file"  v-on:change="update" nullmsg="新闻图片不能为空">


  </div>
</template>

<script>
  import axios from "axios";

  export default {

    data() {
      return {

        dialogImageUrl: '',
        dialogVisible: false,
        disabled: false
      }
    },
    methods: {
      update (e) {  // 上传照片
        let file = e.target.files[0]
        console.log({data:file})

        let param = new FormData() // 创建form对象
//注意files是对应后台的参数名哦
        param.append('file', file) // 通过append向form对象添加数据
        //console.log(param);                                 // 添加form表单中其他数据
        console.log(param.get('file')) // FormData私有类对象，访问不到，可以通过get判断值是否传进去
        // 添加请求头
        axios.post('/upload',param,{
          'Content-type' : 'multipart/form-data'
        })
          .then(response => {
            console.log(response.data)
            if (response.data.code === 0) {
              console.log(response.data)
            }

          })


      }
      //图片
    }


  }
</script>

<style>
  body{
    background-color: aliceblue;
    /*background:url('../../img/littleDog.jpg');*/
  }
</style>
