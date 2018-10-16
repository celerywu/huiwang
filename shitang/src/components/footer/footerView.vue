<template>
  <div class="footer">
    <footer class="fixBottomBox">
      <ul>
        <li @click="$router.push('/category')">
          <span :class="['tab-item-icon',navIndex == '1' ? 'mall-select-icon' : 'mall-icon']"></span>
          <a href="javascript:;" :class="['tab-item-link',navIndex == '1' ? 'active' : '']">商城</a>
        </li>
        <li class="l2" @click="$router.push('/cart')">
          <span :class="['tab-item-icon',navIndex == '2' ? 'cart-select-icon' : 'cart-icon']"></span>
          <a href="javascript:;" :class="['tab-item-link',navIndex == '2' ? 'active' : '']" >购物车</a>
          <span v-if="num > 0" class="num" id="id">{{num}}</span>
        </li>
        <li @click="$router.push('/orderList/0')">
          <span :class="['tab-item-icon',navIndex == '3' ? 'order-select-icon' : 'order-icon']"></span>
          <a href="javascript:;" :class="['tab-item-link',navIndex == '3' ? 'active' : '']" >订单</a>
        </li>
      </ul>
    </footer>
  </div>
</template>
<script>
  export default {
    name: '',
    props: ['navIndex','num'],
    data () {
      return {

      }
    },
    components:{
    },
    mounted () {

    },
    methods: {

    }
  }
</script>
<style lang="scss">
  $borderColor:#eee;
  $padding15:15px;
  $margin15:15px;
  *,
  ::before,
  ::after {
    padding: 0;
    margin: 0;
    /*去掉chorm浏览器中默认点击的颜色*/
    -webkit-tap-highlight-color: transparent;
    -webkit-box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .l2{
    position: relative;
    .num{
      position: absolute;
      top: -10px;
      right: -10px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: #00cd00;
      color: #fff;
      font-size: 20px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  input,
  textarea {
    border: none;
    resize: none;
    outline: none;
    /*清除移动设备中表单的默认样式*/
    -webkit-appearance: none;
  }

  .clearfix::before,
  .clearfix::after {
    content: '.';
    height: 0;
    line-height: 0;
    clear: both;
    display: block;
    visibility: hidden;
  }
  .footer{
    position: fixed;
    bottom: 0;
    height: 120px;
    width: 100%;
    bottom: 0;
    /*background-color: #f00;*/
  }
  .fixBottomBox {
    width: 100%;
    height: 120px;
    padding-top: 20px;
    border-top: 1px solid $borderColor;/*no*/
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #fff;
  }

  .fixBottomBox ul {
    display: flex;
    justify-content: space-around;
  }

  .fixBottomBox .tabItem {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }


  .tab-item-link{
    padding-top:10px;
  }
  .tab-item-icon {
    display: inline-flex;
    width: 43px;
    height: 43px;

  }
  .mall-select-icon{
    background: url('../../assets/img/navbottom/mall-select.png') no-repeat;
    background-size: contain;
  }


  .mall-icon{
    background: url('../../assets/img/navbottom/mall.png') no-repeat;
    background-size: contain;
  }


  .cart-select-icon{
    background: url('../../assets/img/navbottom/cart-select.png') no-repeat;
    background-size: contain;
  }
  .cart-icon{
    background: url('../../assets/img/navbottom/cart.png') no-repeat;
    background-size: contain;
  }


  .order-icon{
    background: url('../../assets/img/navbottom/order.png') no-repeat;
    background-size: contain;
  }
  .order-select-icon{
    background: url('../../assets/img/navbottom/order-select.png') no-repeat;
    background-size: contain;
  }
  .active{
    color: #ce182e;
  }

</style>
