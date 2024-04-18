<template>
    <div>
      <h3>下载</h3>
<!--     <form method="post" action="" >-->
<!--       First name: <input type="text" name="fname"><br>-->
<!--       Last name: <input type="text" name="lname"><br>-->
<!--       <input type="submit" value="提交">-->
<!--     </form>-->
      First name: <input type="text" name="fname" v-model="rfile_name"><br>
      <p>{{this.rfile_name }}  {{this.rpath}}</p>
      <input type="button"  v-on:click="download_file('',rfile_name)"  value="下载">
    </div>
</template>

<script>
  import axios from "axios";
    export default {
        name: "DownloadFile",

      data() {
        return {
          rpath:'E:\\zai\\',
          rfile_name:'111.jpg'
        }
        },
      methods:{

        download_file(path,file_name){
          console.log("aaaa")
          var url = "https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg"
          axios.get(url,{params:{'file_name':file_name}, responseType:'blob'},).then((res)=>{
            let blob = new Blob([res.data], { type: `text/plain;charset=utf-8` });
            // 获取heads中的filename文件名
            let downloadElement = document.createElement("a");
            // 创建下载的链接
            let href = window.URL.createObjectURL(blob);
            downloadElement.href = href;
            // 下载后文件名
            downloadElement.download = file_name;
            document.body.appendChild(downloadElement);
            // 点击下载
            downloadElement.click();         // 下载完成移除元素
            document.body.removeChild(downloadElement);
            // 释放掉blob对象
          })
        }
      }

    }
</script>

<style scoped>

</style>
