<template>
  <div id="app">
    <div>
      <span v-for="item in itemList">{{item}}</span>
      <h2 :data="getData()"></h2>
      <h2 v-text="msg"></h2>
    </div>
  </div>
</template>
<script>
  import axios from "axios";
  export default {
    name: "app",
    data() {
      return {
        itemList: ['a','b','c'],
        msg:'hello'
      }
    },
    mounted() {
      this.getData();
    },
    methods: {
      getData() {
        axios.get('/User/all').then(response => {
          console.log(response.data);
        }, response => {
          console.log("error");
        });
      }
    }
  }
</script>


