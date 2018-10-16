<template>
  <div class="index">
    order page
    <NavBottomView></NavBottomView>
  </div>
</template>

<script>
import NavBottomView from './NavBottom.vue';
export default {
  name: 'index',
  data () {
    return {

    }
  },
  components:{
    NavBottomView
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  $redcolor:#fd5c34;

</style>
