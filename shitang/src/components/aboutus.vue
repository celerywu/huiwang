<template>
  <div class="aboutus">
      关于我们
  </div>
</template>

<script>

export default {
  name: '',
  data () {
    return {

    }
  },
  beforeRouteEnter (to, from, next) {
    window.document.title = to.meta.title
    next()
  },
  components:{

  },
  mounted(){

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
 .aboutus{
   font-size: 36px;
   display: flex;
   justify-content: center;
   margin-top: 100px;
 }
</style>
