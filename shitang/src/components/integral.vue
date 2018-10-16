<template>
  <div class="integral">
      如何获得积分?
  </div>
</template>

<script>

export default {
  name: '',
  data () {
    return {

    }
  },
  components:{

  },
  beforeRouteEnter (to, from, next) {
    window.document.title = to.meta.title
    next()
  },
  mounted(){

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
 .integral{
   font-size: 36px;
   display: flex;
   justify-content: center;
   margin-top: 100px;
 }
</style>
