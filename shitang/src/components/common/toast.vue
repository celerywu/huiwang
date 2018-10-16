<template>
  <div>
    <div class="toast" v-show="isShowToast">
      <div class="toast-inner">
        <div :class="['icon',opicon]"></div>
      <div class="txt" style="font-size: 0.28rem;color: #fff;">{{toastText}}</div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    props: ['opicon','toastText','isShowToast'],
    data() {
      return {

      }
    },

    methods: {

    },
    mounted () {
//      setTimeout(()=>{
//          this.isShowToast = false
//      },1500)
    },

  }
</script>
<style lang="scss" >
  .toast{
    position: fixed;
    left: 50%;
    top: 40%;
    width: 200px;
    background-color: rgba(0,0,0,0.6);
    z-index: 999;
    margin-left: -100px;
    border-radius: 4px;
    color: #fff;
    text-align: center;
    font-size: 30px;
  .toast-inner{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 30px;
  .icon{
    width: 78px;
    height: 50px;
    margin-bottom: 40px;
  }
  .sucess{
    background: url('../../assets/jd/images/sucess.svg') center center no-repeat;
    background-size: contain;
  }
  .fail{
    background: url('../../assets/jd/images/fail.svg') center center no-repeat;
    background-size: contain;
  }
  }
  }
</style>
