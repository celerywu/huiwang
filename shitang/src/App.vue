<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
  }
</script>

<style>
  body,html{
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: Helvetica, Arial, "PingFang SC","PingFang SC", "Microsoft YaHei", "WenQuanYi Micro Hei", "tohoma,sans-serif";
    color: #333;
  }
#app{
  margin: 0;
  padding: 0;
 /* height: 100%;*/
  /*margin-bottom: 120px;*/
}
  .yen{
    display: inline-block;
    margin-right: 4px;
  }
  input{
    font-size: 28px;
  }
</style>
