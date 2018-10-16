<template>
  <div class="index">
    <main class="content">
      <IndexLeftView></IndexLeftView>
      <IndexRightView></IndexRightView>
    </main>
    <NavBottomView></NavBottomView>
  </div>
</template>

<script>
import IndexLeftView from './IndexLeft.vue';
import IndexRightView from './IndexRight.vue';
import NavBottomView from './NavBottom.vue';
export default {
  name: 'index',
  data () {
    return {

    }
  },
  components:{
    IndexLeftView,
    IndexRightView,
    NavBottomView
  },
  mounted(){
    console.log("index page" + this.$route.params)
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  $redcolor:#fd5c34;
  html,body{
    height: 100%;
  }
  .index{
    height: 100%;
  }
  .content{
    height: 100%;
    margin-bottom: 90px;
    font-size: 0;
  }
</style>
