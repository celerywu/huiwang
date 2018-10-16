<!-- product -->
<style lang="scss">
  @import '~assets/common/css/mixin.scss';
  $redcolor:#ce182e;
  .top{
    width: 100%;
    border-bottom: 1px solid #f1f1f1;
    .banner{
      width: 100%;
      .banner-inner{
        img{
          width: 100%;
          height: 500px;
          display: inline-block;
          object-fit: cover;
        }
        section{
          height: 500px;
        }
      }
    }
  }
  .main{
    width: 86%;
    margin: 0 auto;
    .info{
      .txt1{
        font-size: 32px;
        padding-top: 46px;
        color: #333;
      }
      .txt2{
        font-size: 24px;
        color: $redcolor;
        padding-top: 30px;
      }
      .txt3{
        display: flex;
        align-items: center;
        padding-top: 30px;
        padding-bottom: 30px;
        justify-content: space-between;
        .left{
          font-size: 36px;
          color: $redcolor;
          span{
            font-size: 26px;
            color: #666;
            text-decoration: line-through;
            padding-left: 15px;
          }

        }
        .right{
          span{
            display: inline-block;
            background-color: #22be4b;
            font-size: 24px;
            color: #fff;
            height: 40px;
            line-height: 40px;
            padding: 0 10px;
            border-radius: 4px;
          }
        }

      }
      .warp{
        border-top: 1px solid #f1f1f1;/*no*/
        padding-top: 30px;
        .txt4{
          font-size: 26px;
          padding-bottom: 30px;
          .s1{
            color: #999;
          }
          .s2{
            color: #333;
          }
        }
        .txt5{
          padding-bottom: 30px;
          font-size: 26px;
          .s1{
            color: #999;
          }
          .s2{
            color: #333;
          }
        }
      }
    }
  }
  .details{
    /*margin-top: 54px;*/
    padding-bottom: 100px;
    .title{
      font-size: 32px;
      text-align: center;
      padding: 35px 0;
      border-top:1px solid #f1f1f1;/*no*/
      border-bottom:1px solid #f1f1f1;/*no*/
    }
    .detail{
      font-size: 30px;
      width: 92%;
      margin: 0 auto;
      padding: 35px 0;
      color: #666;
      p{
        padding: 0;
        margin: 0;
      }
      img{
        width: 100%;
      }
    }

  }
  /* 底部导航栏 */
  $height:100px;
  .cart-concern-fixed {
    position: fixed;
    bottom: -1px;
    left: 0;
    right: 0;
    width: 100%;
    height: $height;
    background: #fff;
    border-top: 1px solid $border;
    @include flexbox(space-between,
    center,
    row,
    nowrap);
    .left {
      width: 40%;
      height: 100%;
      display: flex;
      justify-content: space-around;
      >div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        span{
          font-size: 32px;
          color: #ccc;
        }
      }
      .share-icon {
        i {
          display: inline-block;
          width: 43px;
          height: 38px;
          background: url('~jd/images/share.png') no-repeat;
          background-size: contain;
        }
      }
      .shopping-cart {
        i {
          display: inline-block;
          width: 43px;
          height: 40px;
          background: url('~jd/images/cart.png') no-repeat;
          background-size: contain;
        }
        span{
          font-size: 20px;
          padding-top: 6px;
        }
      }
    }
    .right {
      width: 60%;
      height: 100%;
      color: #fff;
      font-size: 32px;
      .buynow{
        width: 50%;
        background-color: #2acd8e;
        height: 100%;
        line-height: $height;
        text-align: center;
      }
      .add{
        width: 50%;
        background: $red;
        height: 100%;
        line-height: $height;
        text-align: center;
      }
      @include flexbox(center,
      center,
      row,
      nowrap);
      flex: initial;
    }
  }
  /* 底部导航栏 */
</style>


<template>
  <div>
    <!-- 内容区 -->
    <div class="top" style="padding: 0;margin: 0;">
      <div class="banner">
        <div class="banner-inner">
          <img style="padding: 0;margin: 0;" v-bind:src="productInfo.images">
        </div>
      </div>
    </div>
    <div class="main">
      <div class="info">
        <div class="txt1">{{productInfo.proName}}</div>
        <!--<div class="txt2">{{productInfo.proName}}</div>-->
        <div class="txt3">
          <div class="left" v-if="productInfo.relAmount < productInfo.proAmount"><span class="yen">&yen;</span>{{productInfo.relAmount}}<span class="proPrice" style="color: #666"><span class="">&yen;</span>{{productInfo.proAmount}}</span></div>
          <div class="left" v-else>&yen;{{productInfo.relAmount}}</div>
        </div>
        <div class="warp">
          <!--<div class="txt4"><span class="s1">运费：</span><span class="s2">元</span></div>-->
          <div class="txt5"><span class="s1">规格：</span><span class="s2">{{productInfo.proSpec}}</span></div>
        </div>

      </div>
    </div>
    <div class="details">
      <div class="title">商品详情</div>
      <div class="detail" v-html = "productInfo.proDetail"></div>
    </div>

    <!-- 内容区 -->

    <!-- 底部导航栏 -->
    <div class="cart-concern-fixed">
      <div class="left">
        <div class="shopping-cart" @click="$router.push('/cart')">
          <i></i>
          <span>购物车</span>
        </div>
        <!--<div class="share-icon">-->
          <!--<i></i>-->
          <!--<span>分享</span>-->
        <!--</div>-->
      </div>
      <div class="right">
        <div class="buynow" @click="toPay">
          立即购买
        </div>
       <div class="add" @click="addShopCart">
         加入购物车
       </div>
      </div>
    </div>
    <!-- 底部导航栏 -->

  </div>
</template>

<script>
//  import { Toast } from 'mint-ui';
import { Toast } from 'vant';
  import {
    getProduct,
  } from '@/service/getData'

  export default {
    data() {
      return {
        productInfo: {},
      }
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
      async addShopCart() { //加入购物车
        var proId = this.$route.params.id
        this.$store.dispatch('SelectProduct', {
          proId: this.$route.query.proId,
          proNum: 1
        }).then(response => {
          Toast.success('加入购物车成功')
        })

      },
      async initData() {
        let res = await getProduct({
          proId: this.$route.query.proId
        });
        var Data = res.returnObject
        this.productInfo = Data
      },
      toPay(){
        var proId = this.$route.params.id
        this.$store.dispatch('SelectProduct', {
          proId: this.$route.query.proId,
          proNum: 1
        }).then(response => {
            this.$router.push('/cart')
        })
      },
      onPay(data){
        console.log(data)
      },
    },

    mounted: function () {
      this.initData();
    }
  }

</script>
