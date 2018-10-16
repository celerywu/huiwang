
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
  p{
    margin: 0;
    padding: 0;
  }
  .pagePay {
    .border{
      width: 100%;
      height: 2px;
      background: url('../../assets/img/common/addressbg.png') repeat-x;
      background-size: contain;
    }
    .payContainer {
      .addressContainer {
        .item{
          padding: 40px 0;
          font-size: 28px;
          color: #666;
          text-align: center;
        }
      }
      .addressContainer1{
        .item{
          /*border-bottom: 1px solid #f1f1f1; !*no*!*/
          .item-inner{
            padding: 30px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .left{
              .txt1{
                font-size: 28px;
                padding-bottom: 26px;
                color: #333;
                .icon{
                  font-weight: 200;
                  font-size: 24px;
                  color: #fff;
                  padding: 0 10px;
                  background-color: #fa5d3d;
                  border-radius: 4px;
                  margin-right: 10px;
                }
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
      }
    }
    .orderList{
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
                color: #333;
              }
              .txt2{
                .guige{
                  /*background-color: #f1f1f1;*/
                  color: #333333;
                  padding: 0 10px;
                  border-radius: 4px;
                }
              }
              .txt3{
                width: 100%;
                display: flex;
                justify-content: space-between;
                .s1{
                  font-size: 28px;
                  color: #999999;
                }
                .s2{
                  font-size: 30px;
                  color: #333;
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
            color: #333;
            .left{
              color: #333;
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
            color: #333;
            padding-left: 40px;
            input{
              width: 80%;
              border: none;
              height: 100%;
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
            color: #333;
            span{
              color: #cc1c33;
            }
          }
        }
      }
    }
    .bottom{
      background-color: #fff;
      width: 100%;
      justify-content: flex-end;
      position: fixed;
      bottom: 0;
      height: 100px;
      line-height: 100px;
      display: flex;
      font-size: 26px;
      color: #333;
      .s2{
        font-size: 34px;
        color:  #ce182e;
        margin-right: 40px;
      }
      .btn{
        text-align: center;
        display: inline-block;
        width: 240px;
        height: 100px;
        font-size: 34px;
        background-color:  #ce182e;
        color: #fff;
      }

    }
  }
</style>

<template>
  <div class="pagePay" style="margin-bottom: 140px">
    <div class="payContainer" v-if="addressData">
      <div class="addressContainer1" @click="addAdress">
        <div class="item" style="border-bottom: none;">
          <div class="item-inner">
            <div class="left">
              <div class="txt1"> <span class="icon">配送上门</span><span class="s1">{{addressData.recName}}</span>{{addressData.recTel}}</div>
              <div class="txt2">收货地址：{{addressData.recAddr}}</div>
            </div>
            <div class="right">
              <i class=""></i>
            </div>
          </div>
        </div>
        <div class="border"></div>
      </div>
    </div>
    <div class="payContainer" v-else="addressData">
      <div class="addressContainer">
        <div class="item" @click="addAdress">+添加收货地址</div>
        <div class="border"></div>
      </div>
    </div>
    <!--<div class="payContainer">
      <div class="addressContainer1">

        <div class="border"></div>
      </div>
    </div>-->
    <div class="orderList">
      <div class="block">
        <div class="item" v-for="item in data">
          <div class="sub-item">
            <div class="left">
              <img v-bind:src="item.images" alt="">
            </div>
            <div class="right">
              <div class="txt1">
                <span>{{item.proName}}</span>
                <span><span class="yen">&yen;</span>{{item.relAmount}}</span>
              </div>
              <div class="txt2">
                <span class="guige">{{item.proSpec}}</span>
              </div>
              <div class="txt3">
                <span class="s1">数量：<span class="yen">×</span>{{item.proNum}}</span>
                <span class="s2"><span class="yen">&yen;</span>{{item.relAmount * item.proNum}}</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="info">
        <div v-if="isFreight" class="freight">
          <div class="freight-inner">
            <div class="left">运费</div>
            <div class="right">
              <span><span class="&yen;">+</span>10</span>
              <i></i>
            </div>
          </div>
        </div>

        <div class="remarks">
          <div class="remarks-inner">
            备注
            <input type="text" placeholder="选填，有什么想对商家说的" v-model="remark">
          </div>
        </div>

        <div class="total">
          <div class="total-inner">
            共{{selectedCounter}}件商品，小计：<span><span class="yen">&yen;</span>{{totalFee}}</span>
          </div>
        </div>

      </div>
    </div>
    <div class="bottom">
      <span>共</span><span>{{selectedCounter}}</span> <span>件，合计：<span class="yen">&yen;</span></span> <span class="s2">{{totalFee}}</span><span class="btn" style="position: static;" @click="toPay">立即支付</span>
    </div>
    <!--<Toast :isShowToast="isShowToast" :opicon="opicon" :toastText="toastText"></Toast>-->
    <PayPopup :isShow="isShowPayPopup" @onPay="onPay"></PayPopup>
  </div>
</template>

<script>
  import {
    Field,
    Button,
    Popup
  } from 'mint-ui';
  import {
    mapGetters
  } from 'vuex'
  import PayPopup from '../../components/common/payPopup'
//  import Toast from '../../components/common/toast';
  import { Toast,Loading } from 'vant';
  export default {
    data() {
      return {
        defaultAddress: null,
        totalFee: 0.00,
        paymentPassword: null,
        PaymentNo: null,
        confirmSelectedProduct: null,
        addressData: null,
        visiblePopup: {
          paymentContainerVisible: false,
          paymentLoadingVisible: false,
          selectedAdressVisible: false
        },
        cartList:[{

        }],
        data:'',
        selectedCounter:'',
        totalFee:'',
        DiscountAmount:'',
        Amount:'',
        PayAmount:'',
        QBAmount:'',
        createOrder0:'',
        shopId:'',
        ShopAmount:'',
        isShowPayPopup:false,
        remark:'',
        opicon :'sucess',
        toastText : '添加成功',
        isShowToast : false,
        cartId:[],
        orderNo:'',
        isFreight:true
      };
    },
    beforeRouteEnter (to, from, next) {
      window.document.title = to.meta.title
      next()
    },
    watch: {},

    components: {
      PayPopup
    },

    computed: {
      ...mapGetters([
        'addressList'
      ])
    },

    methods: {
      addAdress(){
        this.$router.push({path:'/selectAdress',query:{
          item: this.$route.query.item,
          selectedCounter:this.$route.query.selectedCounter,
          totalFee:this.$route.query.totalFee
        }})
      },
      selectedAddress(item){
        this.visiblePopup.selectedAdressVisible = false;
        this.addressData.map(item=>item.Selected=9);
        item.Selected = 1;
        this.defaultAddress = item;
      },
      async initData() {
        let defaultAddress = await this.$store.dispatch('GetDefaultAddress', {})
        let confirmSelectedData = await this.$store.dispatch('GetConfirmSelectedProductList', {})
        if(!this.addressList){
          let addressData = await this.$store.dispatch('GetAddressList',{pageSize:100,pageIndex:1});
          this.addressData = addressData.Data;
        }else{
          this.addressData = this.addressList.Data;
        }
        this.defaultAddress = defaultAddress.Data;
        if(confirmSelectedData.Data==''){
          Toast({
            message: '暂无订单信息'
          })
          return this.$router.go(-1);
        }
        confirmSelectedData.Data.map(item => {
          if (item.status === 9) {
            this.totalFee += item.counter * item.product.price;
          }
        })
        this.totalFee = this.totalFee.toFixed(2);
        this.confirmSelectedProduct = confirmSelectedData.Data;
      },
      async submitOrder() {
        this.$store.dispatch('CreateOrder', {
          AddressId: this.defaultAddress._id
        }).then(response => {
          this.visiblePopup.paymentLoadingVisible = true;
          setTimeout(() => {
            this.PaymentNo = response.Data.PaymentNo;
            this.visiblePopup.paymentLoadingVisible = false;
            this.visiblePopup.paymentContainerVisible = true;
          }, 2000)
        })
      },
      payByWallet() {
        this.$store.dispatch('PayByWallet', {
          PaymentNo: this.PaymentNo,
          PaymentPassword: this.paymentPassword
        }).then(response => {
          if (response.Code === 0) {
            Toast({
              message: response.Message
            });
            this.visiblePopup.paymentContainerVisible = false;
            this.visiblePopup.paymentLoadingVisible = false;
            setTimeout(() => {
              this.$router.push('/orderList/2')
            }, 1000)
          }
        })
      },
      toPay(){

        if(this.addressData == null){
          Toast.fail("请选择地址")
          return false
        }

        this.$store.dispatch('ShoppingCartOrder', {
          addrId:this.addressData.addrId,
          remark:this.remark,
          cartId:this.cartId
        }).then(res=>{
          if(res.returnCode == '000000'){
            this.orderNo = res.returnObject
            this.isShowPayPopup = !this.isShowPayPopup
          }
        })
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
            setTimeout(()=>{
              location.href = '/#/orderList/0'
            },1500)
          }
        })
      },

    },

    mounted: function () {
        if (this.$route.query.item !=null){
          this.data = JSON.parse(this.$route.query.item)
          this.selectedCounter = this.$route.query.selectedCounter

          for(var i = 0;i< this.data.length;i++){
            this.cartId.push(this.data[i].cartId)
            if(this.data[i].proType == '01'){
                this.isFreight = false
            }
          }
          if(this.isFreight ){
            this.totalFee = parseFloat(this.$route.query.totalFee) + parseInt(10)
          }else{
            this.totalFee = this.$route.query.totalFee
          }
          this.cartId = this.cartId.join()
          console.log(this.data)
        }
        //地址默认填写第一个

        this.$store.dispatch('GetAddressList',{pageSize:100,pageIndex:1}).then((res)=>{
          for(var i = 0;i<res.returnObject.length;i++){
            this.addressData =  res.returnObject[0]
          }
          if(this.$route.query.selectAddressList !=null){
            this.addressData = JSON.parse(this.$route.query.selectAddressList)
          }
        });
    }
  }

</script>

