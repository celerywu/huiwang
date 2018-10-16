<!-- orderList -->
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
  .paymentLoading {
    position: fixed;
    @include flexbox(center,
    center,
    row,
    nowrap);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    img {
      background: rgba(0, 0, 0, .6);
      width: 3rem;
    }
  }

  .paymentContainer {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, .4);
    @include flexbox(center,
    center,
    row,
    nowrap);
    .content {
      width: 85%;
      background: #fff;
      border-radius: 10px;
      >button {
        width: 60%;
        margin: 20px auto;
        background: $red;
      }
      >a {
        margin: 5px 0;
        padding: 0 15px;
      }
      .title {
        @include flexbox(center,
        center,
        row,
        nowrap);
        position: relative;
        padding: 15px;
        border-bottom: 1px solid #eee;
        strong {
          font-size: 20px;
        }
        .closeIcon {
          display: block;
          background: url('~jd/images/product-detail-sprites-mjs.png') no-repeat;
          width: 25px;
          height: 25px;
          background-position: -38px -19px;
          background-size: 150px;
          vertical-align: -8px;
          position: absolute;
          left: 10px;
        }
      }
      .paymentInfo {
        padding: 15px;
        border-bottom: 1px solid #eee;
        @include flexbox(flex-start,
        center,
        column,
        wrap);
        font-size: 20px;
        span {}
        strong {
          font-size: 40px;
          font-weight: 400;
          margin: 10px 0 0;
        }
      }
    }
  }

  .my-order {
     background-color: #eee;
    .my-header {
      padding: $padding;
      background: #fff;
      position: relative;
      z-index: 1;
      @include flexbox(space-between,
      center,
      row,
      nowrap);
      border-bottom: 1px solid #eee;
      .back {
        display: block;
        width: .65rem;
        height: .65rem;
        background: url('~jd/images/arrow-left.png') no-repeat;
        background-size: 100%;
      }
      strong {
        font-size: 18px;
        font-weight: normal;
        color: #333;
      }
      .myMsg {
        display: block;
        background: url('~jd/images/searchIcon.png') no-repeat;
        background-size: 600% 100%;
        height: .65rem;
        width: .65rem;
        background-position: -2.6rem 0;
      }
    }
    .topnav {
      display: flex;
      flex: 1;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
      flex-wrap: nowrap;
      margin: 0;
      z-index: 111;
      position: relative;
      #loadingbar {
        position: absolute;
        transition: .4s;
        width: calc((100%/6));
        background: red;
        bottom: 0;
        height: 3px;
      }
      >span {
        width: 17%;
        padding: 25px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 28px;
        background: #fff;
      }
      .active {
        color: red;
      }
    }
    .order-container {
      height: auto;
      padding-bottom: 120px;
      .order-nomore-tip {
        margin-top: 50px;
        @include flexbox(space-between,
        center,
        column,
        wrap);
        i {
          display: block;
          width: 60px;
          height: 60px;
          background: url('~jd/images/order.png') no-repeat;
          background-size: 100%;
        }
        span {
          font-size: 17px;
          font-weight: normal;
          padding: 30px 0;
          color: $gray;
        }
      }
      .all-order {
        background: #f5f5f5;
      }
      .order-list {
        background: #fff;
        margin-top: $margin;
        .order-item {
          margin-top: 10px;
          .order-top {
            padding: $padding;
            @include flexbox(space-between,
            center,
            row,
            nowrap);
            .left {
              text-align: left;
              img {
                width: 15px;
                height: 15px;
                vertical-align: bottom;
              }
              span {
                font-size: $subtitle;
                color: #333;
                margin-left: 5px;
              }
            }
            .right {
              .order-status {
                color: $red;
                font-size: $subtitle;
              }
            }
          }
          .order-product-list {
            @include flexbox(flex-start,
            flex-start,
            column,
            wrap);
            .order-product-item {
              padding: $padding;
              width: 100%;
              >div {
                @include flexbox(flex-start,
                flex-start,
                row,
                nowrap);
                width: 100%;
                img {
                  max-width: 80px;
                  max-height: 80px;
                  border: 1px solid #eee;
                }
                .product-info {
                  margin-left: $margin;
                  .prod-price {
                    font-size: 14px;
                    strong {
                      font-size: 15px;
                      color: $red;
                    }
                    @include flexbox(space-between,
                    center,
                    row,
                    nowrap);
                  }
                  p {
                    @include textoverflow(3);
                    font-size: $subtitle;
                    margin: $margin 0;
                    color: #333;
                  }
                }
              }
            }
          }
          .order-sku {
            background: #fff;
            padding: 8px $padding;
            text-align: right;
            font-size: $subtitle;
            border-bottom: 1px solid #eee;
            color: #333;
            strong {
              font-size: 17px;
              color: $red;
            }
          }
          .order-btn-group {
            @include flexbox(flex-end,
            center,
            row,
            nowrap);
            padding: 5px $padding;
            >span {
              padding: 5px 20px;
              color: $red;
              font-size: $subtitle;
              border: 1px solid $red;
              border-radius: 2px;
            }
          }
        }
      }
    }
  }

  .block{
    .item{
      background-color: #fff;
      margin-top: 30px;
      .title{
        height: 80px;
        line-height: 80px;
        font-size: 28px;
        border: 1px solid #f1f1f1;/*no*/
        .title-inner{
          width: 92%;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
        }
      }
      .sub-item{
        width: 92%;
        margin: 0 auto;
        padding: 30px 0;
        border-radius: 5px;
        .inner-item{
          margin-bottom: 24px;
          &:last-child {
            margin-bottom: 0;
          }
          .inner-sub-item{
            border-radius: 6px;
            padding: 30px;
            background-color: #f6f6f6;
            display: flex;
            .left{
              img{
                width: 140px;
                height: 140px;
                border-radius: 5px;
                margin-right: 20px;
                display: inline-block;
              }
            }
            .right{
              position: relative;
              width: 100%;
              .txt1{
                display: flex;
                justify-content: space-between;
                font-size: 30px;
              }
              .txt2{
                position: absolute;
                bottom: 0;
                display: flex;
                justify-content:space-between;
                font-size: 28px;
                color: #666;
                width: 100%;
                .guige{

                }
              }
            }
          }
        }
      }
      .total{
        .total-inner{
          font-size: 26px;
          width: 92%;
          margin: 0 auto;
          span{
            color: #cc1c33;
          }
          .row{
            border-top: 1px solid #f1f1f1;/*no*/
          }
          .row1{
            display: flex;
            height: 100px;
            line-height: 100px;
            align-items: center;
            justify-content: flex-end;
          }
          .row2{
            font-size: 30px;
            height: 100px;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            .s1{
              color: #ce182e;
              margin-right: 70px;
            }
            .s2{
              display: inline-block;
              background-color: #ce182e;
              color: #fff;
              height:70px;
              line-height: 70px;
              border-radius: 40px;
              padding: 0 30px;
            }
          }
        }
      }
    }
    .more{
      display: flex;
      font-size: 28px;
      justify-content: center;
      padding: 40px 0;
      background-color: #eee;
    }
  }
</style>

<template>
  <div class="my-order" id="myOrder" style="min-height: 100%;">
    <div class="topnav">
      <span @click.stop.prevent="switchTabs(0)" :class="{'active':active===0}">全部</span>
      <span @click.stop.prevent="switchTabs(1)" :class="{'active':active===1}">待支付</span>
      <span @click.stop.prevent="switchTabs(2)" :class="{'active':active===2}">待收货</span>
      <span @click.stop.prevent="switchTabs(3)" :class="{'active':active===3}">待使用</span>
      <span @click.stop.prevent="switchTabs(4)" :class="{'active':active===4}">已完成</span>
      <span @click.stop.prevent="switchTabs(5)" :class="{'active':active===5}">已取消</span>
      <div id="loadingbar" :style="active===0 ? 'left:0%' : active===1 ?  'left:16.5%' : active===2 ?'left:33%' : active===3 ? 'left:49.5%' : active===4 ? 'left:66%' : 'left: 83%'"></div>
    </div>
    <div class="order-container" >
        <!-- 全部订单 -->
        <div class="all-order" v-if="orderList!=''">
          <div class="block">
            <div class="item"  v-for="(item,index) in orderList" :key="index" @click.stop="orderDetail(item)">
              <div class="title" style="border: none;">
                <div class="title-inner">
                  <div class="left">订单号:{{item.orderNo}}</div>
                  <div v-if="item.status == 0" class="right">待支付</div>
                  <div v-if="item.status == 4" class="right">待收货</div>
                  <div v-if="item.status == 3" class="right">待使用</div>
                  <div v-if="item.status == 1" class="right">已完成</div>
                  <div v-if="item.status == 2" class="right">已取消</div>
                </div>
              </div>
              <div class="sub-item">
                <div class="inner-item" v-for="subitem in item.detailList">
                  <div class="inner-sub-item"  @click="$router.push({path: '/orderListInfo',query: {orderNo:item.orderNo}})">
                    <div class="left">
                      <img v-bind:src="subitem.images" alt="">
                    </div>
                    <div class="right">
                      <div class="txt1">
                        <span>{{subitem.proName}}</span>
                        <span><span class="yen">&yen;</span>{{subitem.relAmount}}</span>
                      </div>
                      <div class="txt2">
                        <span class="guige">{{subitem.proSpec}}</span>
                        <span><span class="yen">*</span>{{subitem.proNum}}</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>


              <div class="total">
                <div class="total-inner" v-if="item.status == 0">
                  <div class="row row1">共{{item.totalProNum}}件商品，合计：<span><span class="yen">&yen;</span>{{item.totalProPrice}}</span></div>
                  <div class="row row2">
                    <span class="s1" @click.stop="cancelOrder(item.orderNo)">取消订单</span>
                    <span class="s2 nopay" @click.stop="toPay(item.orderNo)" :data-orderNo="item.orderNo">立即支付</span>
                  </div>
                </div>

                <div class="total-inner" v-if="item.status == 4">
                  <div class="row row1">共{{item.totalProNum}}件商品，合计：<span><span class="yen">&yen;</span>{{item.totalProPrice}}</span></div>
                  <div class="row row2">
                    <span class="s1">查看物流</span>
                    <span class="s2 nopay" @click.stop="confirmOrder(item.orderNo)" :data-orderNo="item.orderNo">确认收货</span>
                  </div>
                </div>

                <div class="total-inner" v-if="item.status == 3">
                  <div class="row row1">共{{item.totalProNum}}件商品，合计：<span><span class="yen">&yen;</span>{{item.totalProPrice}}</span></div>
                </div>


                <div class="total-inner" v-if="item.status == 1">
                  <div class="row row1">共{{item.totalProNum}}件商品，合计：<span><span class="yen">&yen;</span>{{item.totalProPrice}}</span></div>
                </div>

              </div>
            </div>
            <div class="more"  @click="moreOrder">{{moreText}}</div>
          </div>
        </div>




      <!-- 全部订单 -->

        <!-- 没有订单 -->
        <div class="order-nomore-tip" v-if="orderList==''">
          该状态下没有订单~
          <!--<i></i>-->
        </div>
        <!-- 没有订单 -->

      <div class="paymentLoading" v-if="visiblePopup.paymentLoadingVisible">
        <img src="~jd/images/paymentloading.gif" />
      </div>
      <div class="paymentContainer" v-if="visiblePopup.paymentContainerVisible">
        <div class="content">
          <div class="title">
            <i class="closeIcon" @click="()=>visiblePopup.paymentContainerVisible=false"></i>
            <strong>请输入支付密码</strong>
          </div>
          <div class="paymentInfo">
            <span>订单付款</span>
            <strong>&yen;{{currentOrder.orderInfo.total_fee}}</strong>
          </div>
          <mt-field placeholder="请输入支付密码" type="password" v-model="paymentPassword"></mt-field>
          <mt-button size="large" type="primary" @click="payByWallet">确认支付</mt-button>
        </div>
      </div>
    </div>

    <PayPopup :isShow="isShowPayPopup" @onPay="onPay"></PayPopup>
    <FooterView :nav-index="3" :num="num"></FooterView>
  </div>
</template>

<script>
  import {
    getOrderList
  } from '@/service/getData';
  import LoadMore from 'common/loadMore';
  import PayPopup from 'common/payPopup';
  import FooterView from 'component/footer/footerView';
  import { Toast } from 'vant';
  import PullTo from 'vue-pull-to'
  export default {
    data() {
      return {
        commad: getOrderList,
        visiblePopup: {
          paymentLoadingVisible: false,
          paymentContainerVisible: false
        },
        num:'',
        paymentPassword: null, //支付密码
        currentOrder: {}, //当前订单
        params: {
          pageSize: 10,
          pageIndex: 1,
          cancel_status: null,
          confirm_status: null,
          pay_status: null,
          finish_status: null
        },
        orderList: [],
        active: null,
        status:{
          isShowPublish:false,
          topNum:10
        },
        orderNo:'',
        isShowPayPopup:false,
        end:false,
        pageNum:1,
        curId:'',
        showlaoding: true, //是否显示loading效果
        moreText:'查看更多',
      };
    },
    beforeRouteEnter (to, from, next) {
      window.document.title = to.meta.title
      next()
    },
    watch: {},

    components: {
      LoadMore,
      PayPopup,
      FooterView,
    },

    computed: {},

    methods: {
      payment(item) {
        this.visiblePopup.paymentLoadingVisible = true;
        setTimeout(() => {
          this.visiblePopup.paymentLoadingVisible = false;
          this.visiblePopup.paymentContainerVisible = true;
          this.currentOrder = item;
        }, 2000)
      },
      finishOrder(item) { //确认收货
        this.$store.dispatch('FinishOrder', {
          OrderNo: item.orderInfo.OrdertNo
        }).then(response => {
          Toast({
            message: response.Message
          })
          this.onRefreshCallback()
        })
      },
      commitMessage(item) { //评论
        this.$router.push(`/review/${item.orderInfo.OrdertNo}`)
      },
      cancelOrder(ordertNo) { //取消订单
        this.$store.dispatch('CancelOrder', {
          orderNo: ordertNo
        }).then(response => {
          Toast.success('取消成功');
          setTimeout(()=>{
            window.location.reload()
          },1500)
        })
      },
      async onRefreshCallback() { //下拉刷新
        this.params.pageSize = 10;
        this.params.pageIndex = 1;
        this.orderList = [];
        this.$refs.orderLoadmore.onTopLoaded(this.$refs.orderLoadmore.uuid);
      },
      switchTabs(Id) {
        this.curId = Id
        this.pageNum = 1
        this.moreText = '查看更多'
        this.end = false
        this.orderList = []
        console.log("--" + this.curId)
        if (this.active === Number(Id)) return;
        this.active = Id;
        switch (Number(this.active)) {
          case 0: //全部订单
//            this.getOrderList('0')
            this.getAllOrderList()
            this.params.cancel_status = null;
            this.params.confirm_status = null;
            this.params.pay_status = null;
            this.params.finish_status = null;
            break;
          case 1: //待支付
            this.getOrderList('0')
            this.params.cancel_status = 0;
            this.params.confirm_status = null;
            this.params.pay_status = 0;
            this.params.finish_status = 0;
            break;
          case 2: //待收货
            this.getOrderList('4')
            this.params.cancel_status = 0;
            this.params.covarnfirm_status = 1;
            this.params.pay_status = 1;
            this.params.finish_status = 0;
            break;
          case 3: //待使用
            this.getOrderList('3')
            this.params.cancel_status = 0;
            this.params.confirm_status = null;
            this.params.pay_status = null;
            this.params.finish_status = 1;
            break;
          case 4: //已完成
            this.getOrderList('1')
            this.params.cancel_status = 1;
            this.params.confirm_status = null;
            this.params.finish_status = null;
            this.params.pay_status = null;
            break;
          case 5: //已取消
            this.getOrderList('2')
            this.params.cancel_status = 1;
            this.params.confirm_status = null;
            this.params.finish_status = null;
            this.params.pay_status = null;
            break;
          default: //其他
            throw new Error('未知TabId')
            break
        }
      },
      payByWallet() {
        this.$store.dispatch('PayByWallet', {
          PaymentNo: this.currentOrder.orderInfo.OrdertNo,
          PaymentPassword: this.paymentPassword
        }).then(response => {
          if (response.Code === 0) {
            Toast({
              message: response.Message
            });
            this.visiblePopup.paymentContainerVisible = false;
            this.visiblePopup.paymentLoadingVisible = false;
            setTimeout(() => {
              this.onRefreshCallback();
            }, 1000)
          }
        })
      },
      async infiniteCallback(response) { //加载更多订单
        if (response.Data.length > 0) {
          response.Data.map(i => {
            i.orderInfo.total_fee = i.orderInfo.total_fee.toFixed(2)
            this.orderList.push(i)
          })
        }
      },
      getAllOrderList(pageNum){

        if(pageNum == undefined){
          pageNum = 1
        }
        this.showlaoding = true
        var res = this.$store.dispatch('GetOrderList',{pageNum:pageNum}).then(res =>{
//          this.orderList = res.returnObject
          if(this.end){
              return false
          }else{
            if(res.returnObject.length == 0){
              this.end = true
              this.moreText = '没有更多数据了'
            }else{
              for(var i=0;i< res.returnObject.length;i++){
                var totalProNum = 0
                var totalProPrice = 0
                for(var j=0;j< res.returnObject[i].detailList.length;j++){
                  totalProNum = parseInt(totalProNum) + parseInt(res.returnObject[i].detailList[j].proNum)
                  totalProPrice = totalProPrice + res.returnObject[i].detailList[j].proNum *  res.returnObject[i].detailList[j].relAmount
                }
                res.returnObject[i].totalProNum = totalProNum

                res.returnObject[i].totalProPrice = totalProPrice + res.returnObject[i].freight
              }

              res.returnObject.map(n => {

                this.orderList.push(n)}
              )


//            this.orderList = res.returnObject
              this.showlaoding = true
            }
          }

          console.log(this.orderList)

        });
      },
      getOrderList(type,pageNum){
          if(pageNum == undefined){
              pageNum = 1
          }
        var res = this.$store.dispatch('GetOrderListByType',{status:type,pageNum:pageNum}).then(res =>{
          if(this.end){
            return false
          }else{
            if(res.returnObject.length == 0){
              this.end = true
              this.moreText = '没有更多数据了'
            }else {
              for (var i = 0; i < res.returnObject.length; i++) {
                var totalProNum = 0
                var totalProPrice = 0
                for (var j = 0; j < res.returnObject[i].detailList.length; j++) {
                  totalProNum = parseInt(totalProNum) + parseInt(res.returnObject[i].detailList[j].proNum)
                  totalProPrice = totalProPrice + res.returnObject[i].detailList[j].proNum * res.returnObject[i].detailList[j].relAmount
                }
                res.returnObject[i].totalProNum = totalProNum

                res.returnObject[i].totalProPrice = totalProPrice + res.returnObject[i].freight


              }
              res.returnObject.map(n => {
                  this.orderList.push(n)
                }
              )
            }
          }

        });
      },
      closeDialog(){
         this.status.isShowPublish=false;
      },
      toPay(orderNo){
        this.isShowPayPopup = !this.isShowPayPopup
        this.orderNo = orderNo
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
              window.location.reload()
            },1500)
          }

        })
      },
      orderDetail(item){  //0 未支付 1 已完成 2 已取消 3 待使用 4 待收货
        this.$router.push({path: '/orderListInfo',query: {item:JSON.stringify(item)}})
      },
      confirmOrder(orderNo){
        this.$store.dispatch('ConfirmOrder',{
          orderNo:orderNo
        }).then((res)=>{
          if(res.returnCode == '000000'){
            Toast.success('确认成功');
            setTimeout(()=>{
              window.location.reload()
            },1500)
          }

        })
      },
      moreOrder(){

        this.pageNum = this.pageNum + 1

        if(this.curId == 0){
            if(!this.end){
              this.getAllOrderList(this.pageNum)
            }
        }else{
          if(!this.end){
            this.getOrderList(this.curId,this.pageNum)
          }
        }

      }

    },
    mounted: function () {
      document.getElementById("myOrder").style.minHeight = document.documentElement.clientHeight + 'px'
      if(this.$route.query.token !=null){
          console.log('有token')
        window.sessionStorage.setItem('MemberToken',this.$route.query.token)
      }
      var num = '0'
      this.$store.dispatch('GetSelectedProductList').then((res)=>{
        for(var i=0;i< res.returnObject.length;i++){
          res.returnObject[i].checked = false
          num = parseInt(num) + parseInt(res.returnObject[i].proNum)
        }
        this.num = num
      });
      if (this.$route.params.tab != null) return this.switchTabs(Number(this.$route.params.tab))
      this.switchTabs(0)
      this.curId = this.$route.params.tab
      console.log(this.curId)


      window.addEventListener('scroll', () => {
        console.info('可视区域大小' + document.documentElement.clientHeight + '........' + window.innerHeight)
        console.info('滚动高度' + document.body.scrollTop) //原生的方法存在的兼容性问题 mac上面就计算出来是0
        var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        if (scrollTop + window.innerHeight + 0>= document.body.offsetHeight) { //0 表示距离底部多少的距离的开始触发loadmore效果

          if (!this.showlaoding) { //防止多次加载
            if(!this.end){
                if(this.curId == 0){
                  this.getAllOrderList(this.pageNum += 1)
                }else if(this.curId == 1){
                this.getOrderList('0',this.pageNum += 1)
              }else if(this.curId == 2){
                  this.getOrderList('4',this.pageNum += 1)
              }else if(this.curId == 3){
                  this.getOrderList('3',this.pageNum += 1)
                }else if(this.curId == 4){
                  this.getOrderList('1',this.pageNum += 1)
                }else if(this.curId == 5){
                  this.getOrderList('2',this.pageNum += 1)
                }

            }
          }
        }
      })
    }
  }

</script>
