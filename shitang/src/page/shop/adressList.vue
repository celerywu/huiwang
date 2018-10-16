<!-- orderList -->
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
  .item{
   border-bottom: 1px solid #f1f1f1; /*no*/
    .item-inner{
      padding: 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .left{
        .txt1{
          font-size: 28px;
          padding-bottom: 26px;
          .s1{
            display: inline-block;
            margin-right: 20px;
          }
        }
        .txt2{
          font-size: 26px;
          color: #666;
        }

      }
      .right{
        i{
          width: 12px;
          height: 21px;
          display: inline-block;
          background: url('../../assets/jd/images/more.png');
          background-size: contain;
        }

      }
    }
  }

</style>

<template>
<div>
  <div class="item" v-for="item in addressData" @click="">
    <div class="item-inner">
      <div class="left">
        <div class="txt1"><span class="s1">{{item.recName}}</span>{{item.recTel}}</div>
        <div class="txt2">{{item.recAddr}}</div>
      </div>
      <div class="right">
        <i class=""></i>
      </div>
    </div>
  </div>
</div>
</template>

<script>

  export default {
    data() {
      return {
        addressData:[]
      };
    },
    beforeRouteEnter (to, from, next) {
      window.document.title = to.meta.title
      next()
    },
    watch: {},

    components: {

    },

    computed: {},

    methods: {
      async initData() {
        let addressData = await this.$store.dispatch('GetAddressList',{pageSize:100,pageIndex:1});
        this.addressData = Data.returnObject;
      },

    },
    mounted: function () {
      this.initData()
    }
  }

</script>

