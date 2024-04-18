<template>
    <div>
      <h2>创建用户</h2><br>
      <form action="/AddSuccess">
        用户名：<input type="text" v-model="user.name"><br>
        密    码：<input type="password" v-model="user.password"><br>
        <button  v-on:click="adU">提交</button>
      </form>
    </div>
</template>

<script>
  import axios from "axios";
    export default {
      // mounted() {
      //   this.getData();
      // },
      data() {
        return {

          user:{
            name: 'wang',
            password: '000',
            id:'110'
          },
            name: 'wang',
            pass: '123',
            webSite:'webSite',
            url:'http://www.baidu.com',
            flag:5

        }
      },
      methods: {
        handleClick() {
          console.log("click点击");
          alert("gggg"+this.name);


        },
        getData() {
          let datata = this.user;
          console.log("通了");
          axios.post('/QueryStringTest2',datata
          ).then(function(response){
            console.log(response.data);
          });
        },
        adU(){
          let datata = this.user;
          console.log("通了");
           axios.post('/AddUser/create',datata
          ).then(function(response){
              console.log(response.data);
             // this.flag = 1;
             // alert(response.data);
           });
          console.log(this.flag);
        }
      }
    }
</script>


