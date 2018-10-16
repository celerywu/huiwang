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
  .item:last-child{
    border-bottom: none;
  }

  .nodata{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 120px;
    i{
      display: block;
      width: 149px;
      height: 128px;
      background: url('../../assets/img/common/nodata.png') no-repeat;
      background-size: contain;
    }
    .txt{
      margin-top: 20px;
      color: #999999;
      font-size: 30px;
    }
  }

  .bottom{
    position:fixed;
    width: 100%;
    bottom: 0;
    border-top: 1px solid #f1f1f1;/*no*/
    height:100px;
    line-height: 100px;
    text-align: center;
    color: #333333;
    font-size: 30px;
    background-color: #fff;
  }

</style>

<template>
  <div style="margin-bottom: 100px;">
    <div v-if="addressData != null">
      <div class="item" v-for="item in addressData" @click="selectAdress(item)">
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
    <div class="nodata" v-else>
      <!--<i></i>-->
      <div class="txt">暂无数据</div>
    </div>
    <div class="bottom" @click="addAdress">
      添加收货地址
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        addressData:null,
        page:1,
        pageSize:10,
        selectAdr:''
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
      selectAdress(item){
        this.selectAdr = JSON.stringify(item)
        this.$store.commit('SET_SELECT_ADRESS_LIST_DATA',  this.selectAdr)
        this.$router.push({path:'./createOrder',query:{
          item: this.$route.query.item,
          selectedCounter:this.$route.query.selectedCounter,
          totalFee:this.$route.query.totalFee,
          selectAddressList:this.selectAdr
        }})
      },
      async initData() {
        let addressData = await this.$store.dispatch('GetAddressList',{pageSize:100,pageIndex:1});
        this.addressData = addressData.returnObject;
        for(var i = 0;i<this.addressData.length;i++){
          this.addressData[i].recAddr = decodeURI(this.addressData[i].recAddr)
        }
      },
      addAdress(){
        this.$router.push('./editAdress')
      }
    },
    mounted: function () {
      this.initData()
    }
  }

</script>

