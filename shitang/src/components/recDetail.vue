<style lang="scss">
  @import '../common/css/common.scss';
  $redcolor:#ce281e;
  $greencolor:#62be3f;
  .top{
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    img{
      width: 80px;
      height: 80px;
      border-radius: 4px;
      margin-top: 60px;
    }
    .txt1{
      font-size: 24px;
      color: #666;
      padding: 20px 0 44px 0;
    }
    .txt2{
      font-size: 32px;
      padding-bottom: 60px;
    }
  }

  .main{
    margin: 0 50px;
    border-top: 1px solid #f1f1f1;/*no*/
    .rec-item{
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100px;
      .rec-item-left{
        font-size: 28px;
        color: #666;
      }
      .rec-item-right{
        font-size: 28px;
      }
    }
  }

  .btn{
    position: fixed;
    bottom: 100px;
    .btn-inner{
      width: 320px;
      height: 80px;
      background-color: $redcolor;
      color: #fff;
      text-align: center;
      line-height: 80px;
      font-size: 28px;
      border-radius: 4px;
      display: flex;
      justify-content: center;
      margin-left: 215px;
    }

  }

</style>
<template>
  <div>
    <div class="top">
      <img v-bind:src="item.image" alt="">
      <div class="txt1">{{item.userName}}</div>
      <div class="txt2">&yen;{{item.amount}}</div>
    </div>

    <div class="main">
      <div class="rec-item">
        <div class="item-left">交易状态</div>
        <div class="rec-item-right" v-if="item.status == 0">交易成功</div>
        <div class="rec-item-right" v-else>已退款</div>
      </div>
      <div class="rec-item">
        <div class="rec-item-left">交易时间</div>
        <div class="rec-item-right">{{item.updateTime}}</div>
      </div>
      <div class="rec-item">
        <div class="rec-item-left">交易单号</div>
        <div class="rec-item-right">{{item.transSerial}}</div>
      </div>
    </div>

    <div v-if="item.status == 0" class="btn">
    <div class="btn-inner" @click="transBack">退款</div>
    </div>

    <PayPopup :isShow="isShowPayPopup" @onPay="onPay"></PayPopup>
  </div>
</template>

<script>
  import PayPopup from 'common/payPopup';
  import {Toast } from 'vant';
  export default {
    name: '',
    data () {
      return {
        item:'',
        isShowPayPopup:false,
      }
    },
    beforeRouteEnter (to, from, next) {
      window.document.title = to.meta.title
      next()
    },
    components: {
      PayPopup,
    },
    methods:{
      onPay(res){
        if(res == '' || res == null){
          Toast.fail('密码不能为空')
          return false
        }
        var pwd = res
        this.$store.dispatch('TransBack', {
          passwd:res,
          transSerial:this.item.transSerial
        }).then(res=>{
          if(res.returnCode == '000000'){
            Toast.success('操作成功');
            setTimeout(()=>{
              window.location.reload()
            },1500)
          }else{
            Toast.fail('操作失败')
          }
        }).catch(()=>{

        })
      },
      transBack(){
        this.isShowPayPopup = !this.isShowPayPopup

      }
    },
    mounted:function () {
      this.item = JSON.parse(this.$route.query.item)
    }
  };
</script>


