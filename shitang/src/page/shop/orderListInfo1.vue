<!-- order -->
<style lang='scss' scoped>
  .top{
    width: 100%;
    background-color: #cc1c33;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    .bar{
      display: flex;
      padding: 0 30px;
      .left{
        width: 40%;
        i{
          display: inline-block;
          width: 18px;
          height: 30px;
          background: url('~jd/images/back.png') no-repeat;
          background-size: contain;
        }
      }

      color: #fff;
    }
    .status{
      display: flex;
      justify-content: center;
      .i1{
         width: 44px;
         height: 41px;
         background: url('~jd/images/pending-recevied.png') no-repeat;
         background-size: contain;
         margin-right: 20px;
       }
      .i2{
        width: 40px;
        height: 39px;
        background: url('../../assets/img/shop/cancel.png') no-repeat;
        background-size: contain;
        margin-right: 20px;
      }
      .i3{
        width: 40px;
        height: 41px;
        background: url('../../assets/img/shop/finished.png') no-repeat;
        background-size: contain;
        margin-right: 20px;
      }
      .i4{
        width: 47px;
        height: 41px;
        background: url('../../assets/img/shop/topay.png') no-repeat;
        background-size: contain;
        margin-right: 20px;
      }
      span{
        font-size: 30px;
        color: #fff;
      }
    }
  }
  .address{
    background-color: #fff;
    .main{
      .main-inner{
        width: 92%;
        margin: 0 auto;
        padding: 20px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .left{
          .txt1{
            font-size: 24px;
            font-weight: bold;
            span{
              font-weight: 200;
              font-size: 24px;
              color: #fff;
              padding: 0 10px;
              background-color: #fa5d3d;
              border-radius: 4px;
            }
          }
          .txt2{
            padding-top: 10px;
            font-size: 24px;
            color: #ccc;
          }
        }
        .right{
          i{
            display: inline-block;
            width: 12px;
            height: 21px;
            background: url('~jd/images/more.png') no-repeat;
            background-size: contain;
          }
        }

      }
    }
    .border{
      width: 100%;
      height: 10px;
      background: url('../../assets/img/common/addressbg.png') repeat-x;
      background-size: contain;
    }
  }
  .block{
    background-color: #fff;
    .item{
      border-bottom: 1px solid #f1f1f1;
      padding: 20px 0;
      .sub-item{
        width: 92%;
        margin: 0 auto;
        display: flex;
        .left{
          img{
            display: inline-block;
            width: 140px;
            height: 140px;
            border-radius: 5px;
            margin-right: 20px;
          }
        }
        .right{
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .txt1{
            font-size: 30px;
          }
          .txt2{
            .guige{
              color: #333333;
            }
          }
          .txt3{
            width: 100%;
            display: flex;
            .s1{
              font-size: 28px;
              color: #999999;
              margin-right: 10px;
            }
            .s2{
              font-size: 30px;
            }
          }
        }
      }
    }
  }
  .block-use{
    background-color: #fff;
    .item{
      border-bottom: 1px solid #f1f1f1;
      padding: 20px 0;
      .sub-item{
        width: 92%;
        margin: 0 auto;
        display: flex;
        .left{
          img{
            display: inline-block;
            width: 140px;
            height: 140px;
            border-radius: 5px;
            margin-right: 20px;
          }
        }
        .right{
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .txt1{
            font-size: 30px;
          }
          .txt2{
            font-size: 28px;
            color: #999999;
            margin-top: 30px;
            .s1{
              margin-right: 30px;
            }
          }
          .txt3{
            width: 100%;
            display: flex;
            align-items: center;
            margin-top: 30px;
            .s1{
              font-size: 28px;
              color: #999999;
              margin-right: 10px;
            }
            .s2{
              display: inline-block;
              width: 416px;
              height: 60px;
              line-height: 60px;
              background-color: #f6f6f6;
              font-size: 30px;
              color: #000;
              font-weight: bold;
              text-align: center;
            }
          }
          .txt4{
            width: 100%;
            display: flex;
            font-size: 28px;
            color: #999999;
            padding-top: 36px;
            .s1{
              margin-right: 24px;
            }
            img{
              display: inline-block;
              width: 150px;
              height: 150px;
            }
          }
        }
      }
    }
  }
  .info{
    background-color: #fff;
    .freight{
      margin-left: 30px;
      height: 100px;
      line-height: 100px;
      .freight-inner{
        border-bottom: 1px solid #f1f1f1; /*no*/
        display: flex;
        justify-content: space-between;
        font-size: 30px;
        padding-right: 30px;
        .left{

        }
        .right{
          i{
            display: inline-block;
            width: 12px;
            height: 21px;
            background: url('~jd/images/more.png') no-repeat;
            background-size: contain;
          }
        }
      }

    }
    .remarks{
      font-size: 30px;
      border-bottom: 1px solid #f1f1f1; /*no*/
      height: 100px;
      line-height: 100px;
      .remarks-inner{
        padding: 0 30px;
        span{
          color: #666;
          padding-left: 40px;
        }
      }
    }
    .total{
      border-bottom: 1px solid #f1f1f1;/*no*/
      height: 100px;
      line-height: 100px;
      .total-inner{
        display: flex;
        justify-content: flex-end;
        font-size: 30px;
        width: 92%;
        margin: 0 auto;
        span{
          color: #cc1c33;
        }
      }
    }
  }

  .order-info{
    background-color: #fff;
    margin-top: 30px;
    margin-bottom: 50px;
    .order-info-inner{
      padding: 20px 0;
      font-size: 28px;
      width: 92%;
      margin: 0 auto;
      div{
        line-height: 50px;
      }
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
    display: flex;
    background-color: #fff;
    .left{
      color: #cc1c33;
      text-align: right;
      width: 70%;
    }
    .right{
      color: #fff;
      background-color: #cc1c33;
      width: 30%;
    }
  }

</style>
<template>
  <div style="background-color: #eee;height: 100%" id="orderDetail">
    <div class="top">
      <div class="status">
        <i v-if="status == 0" class="i4"></i>
        <i v-if="status == 1" class="i3"></i>
        <i v-if="status == 2" class="i2"></i>
        <i v-if="status == 3" class="i1"></i>
        <i v-if="status == 4" class="i1"></i>

        <span v-if="status == 0">待付款</span>
        <span v-if="status == 1">已完成</span>
        <span v-if="status == 2">已取消</span>
        <span v-if="status == 3">待使用</span>
        <span v-if="status == 4">待收货</span>
      </div>


    </div>

    <div class="address" v-if="status != 3">
      <div class="main">
        <div class="main-inner">
          <div class="left">
            <div class="txt1">
              <span>配送上门</span>
              {{info.recName}} {{info.recTel}}
            </div>
            <div class="txt2">收货地址：{{info.recAddr}}</div>
          </div>
          <div class="right">
            <i></i>
          </div>

        </div>
      </div>
      <div class="border"></div>
    </div>


    <div v-if="status == 3" class="block-use">
      <div class="item" v-for="item in info.detailList">
        <div class="sub-item">
          <div class="left">
            <img v-bind:src="item.images" alt="">
          </div>
          <div class="right">
            <div class="txt1">
              <span>{{item.proName}}</span>
              <span><span>&yen;</span>{{item.relAmount}}</span>
            </div>
            <div class="txt2">
              <span class="s1">数量：<span class="yen">×</span>{{item.proNum}}</span>
            </div>
            <div class="txt3">
              <span class="s1">兑换码</span>
              <span class="s2">{{item.transSerial}}</span>
            </div>
            <div class="txt4">
              <span>二维码</span>
              <img src="" alt="">
            </div>
            <div id="qrcode" style="width:100px; height:100px; margin-top:15px;"></div>
            <canvas id="qrccode-canvas"></canvas>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="block">
      <div class="item" v-for="item in info.detailList">
        <div class="sub-item">
          <div class="left">
            <img v-bind:src="item.images" alt="">
          </div>
          <div class="right">
            <div class="txt1">
              <span>{{item.proName}}</span>
            </div>
            <div class="txt2">
              <span class="guige">{{item.proSpec}}</span>
            </div>
            <div class="txt3">
              <span class="s1">数量：<span class="yen">×</span>{{item.proNum}}</span>
              <span class="s2"><span class="yen">&yen;</span>{{item.proNum * item.relAmount}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="info">
      <div class="freight">
        <div class="freight-inner">
          <div class="left">运费</div>
          <div class="right">
            <span> <span class="yen">+</span>{{info.freight}}</span>
            <i></i>
           </div>
        </div>
      </div>

      <div v-if="status == 0" class="remarks">
        <div class="remarks-inner">
          备注
          <span>备注说明</span>
        </div>
      </div>

      <div class="total">
        <div class="total-inner">
          共{{totalProNum}}件商品，小计：<span><span class="yen">&yen;</span>{{totalProPrice}}</span>
        </div>
      </div>

    </div>

    <div class="order-info">
      <div class="order-info-inner">
        <div>订单编号：{{info.orderNo}}</div>
        <div>创建时间：{{info.createTime}}</div>
      </div>
    </div>
    <!--0 未支付 1 已完成 2 已取消 3 待使用 4 待收货-->
    <div class="bottom" v-if="status == 0 || status == 3">
      <div class="left" @click="cancelOrder">取消订单&nbsp;&nbsp;&nbsp;</div>
      <div class="right" @click="toPay">立即支付</div>
    </div>

    <div class="bottom" v-else-if="status == 4">
      <div class="left">查看物流&nbsp;&nbsp;&nbsp;</div>
      <div class="right">立即收货</div>
    </div>

    <PayPopup :isShow="isShowPayPopup" @onPay="onPay"></PayPopup>
  </div>
</template>

<script>
  import PayPopup from 'common/payPopup';
  import { Toast } from 'vant';
  var QRCode = require('qrcode')
  var canvas = ''
  export default {
  data () {
    return {
      status:'',
      info:'',
      isShowPayPopup:false,
      orderNo:'',
      totalProNum:'',
      totalProPrice:''
    };
  },
  beforeRouteEnter (to, from, next) {
    window.document.title = to.meta.title
    next()
  },
  watch: {},
  created(){
    document.body.setAttribute("class","body");
  },
  components: {
    PayPopup
  },
  computed: {},

  methods: {
    async initData() {
      var item = JSON.parse(this.$route.query.item)
      console.log(item)
      this.status = item.status
      this.totalProNum = item.totalProNum
      this.totalProPrice = parseInt(item.totalProPrice)

      let res = await this.$store.dispatch('GetOrderInfo',{orderNo:item.orderNo});
      var Data = res.returnObject
      this.info = Data
      this.orderNo = Data.orderNo
      console.log(this.orderNo)

    },
    toPay(){
      this.isShowPayPopup = !this.isShowPayPopup
    },
    onPay(res){
      if(res == '' || res == null){
        Toast.fail('密码不能为空')
        return false
      }
      var orderNo = this.orderNo
      var pwd = res
      this.$store.dispatch('OrderPay',{
        orderNo:this.orderNo,
        passwd:res
      }).then((res)=>{
        if(res.returnCode == '000000'){
          Toast.success('支付成功');
          this.$router.push('/orderList/0')
        }
      })
    },
    cancelOrder() { //取消订单
      this.$store.dispatch('CancelOrder', {
        orderNo: this.orderNo
      }).then(response => {
        Toast.success('取消成功');
        setTimeout(()=>{
          this.$router.push('/orderList/5')
        },1000)

      })
    },
  },

    mounted () {
//    document.getElementById("orderDetail").style.minHeight = document.documentElement.clientHeight + 'px'
//    this.initData()
    canvas = document.getElementById('qrccode-canvas')
    console.log(document.getElementById('qrccode-canvas'))
    QRCode.toCanvas(canvas,'dudu', (error) => {
      if (error) {
        console.log(error)
      } else {
        console.log('success')
      }
    })
  }
}

</script>

