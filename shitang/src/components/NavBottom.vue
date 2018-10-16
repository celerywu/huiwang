<template>
  <div class="footer">
  	<footer class="fixBottomBox">
        <ul>
            <router-link tag="li" to="/index" class="tabItem">
                <span class="tab-item-icon mall-select-icon"></span>
                <a href="javascript:;" class="tab-item-link">首页</a>
            </router-link>
            <router-link tag="li" to="/cart" class="tabItem">
              <span class="tab-item-icon cart-icon"></span>
              <a href="javascript:;" class="tab-item-link">购物车</a>
              <span class="num">12</span>
            </router-link>
            <router-link tag="li" to="/order" class="tabItem">
              <span class="tab-item-icon order-icon"></span>
              <a href="javascript:;" class="tab-item-link">订单</a>
            </router-link>
        </ul>
    </footer>
  </div>
</template>
<!--
<template>
  <div class="footer_bar">
    <ul class="footer_menu_lists" id="footerMenuList">
      <li class="footer_menu_item">
        <router-link class="footer_menu_item_link footer_menu_home" to="/home">首页a</router-link>
      </li>
      <li class="footer_menu_item">
        <router-link class="footer_menu_item_link footer_menu_cart" to="/cart">购物车</router-link>
      </li>
      <li class="footer_menu_item">
        <router-link class="footer_menu_item_link footer_menu_order" to="/brand">订单</router-link>
      </li>
    </ul>
    <div class="footer_blank"></div>
  </div>
</template>

<script>
  export default {
    name: 'footer_bar',
    data() {
      return {

      }
    },
    computed: {

    },
    components: {

    }
  }
</script>

<style scoped>

  .footer_blank {
    height: 1.4rem;
  }

  .footer_menu_lists {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1.4rem;
    display: flex;
    background: #191919;
    color: #fff;
  }

  [data-dpr="2"] .footer_menu_lists {
    font-size: 18px;
  }

  [data-dpr="3"] .footer_menu_lists {
    font-size: 27px;
  }

  .footer_menu_item {
    flex: 1;
    text-align: center;
    font-size:8px;
  }

  .footer_menu_item_link {
    display: block;
    position: relative;
    width: 43px;
    height: 43px;
    background: url('../assets/img/navbottom/mall.png') center 0.2rem no-repeat;
    background-size: contain;
    padding-top: 1rem;
  }

  .footer_menu_home {
    background-image: url('../assets/img/navbottom/mall.png')
  }

  .footer_menu_home.router-link-active {
    background-image: url('../assets/img/navbottom/mall-select.png')
  }

  .footer_menu_cart {
    background-image: url('../assets/img/navbottom/cart.png')
  }

  .footer_menu_cart.router-link-active {
    background-image: url('../assets/img/navbottom/mall-select.png')
  }

  .footer_menu_order {
    background-image: url('../assets/img/navbottom/order.png');
  }

  .footer_menu_order.router-link-active {
    background-image: url('../assets/img/navbottom/mall-select.png');
  }


  .router-link-active {
    color: #ef8200;
  }
</style>
-->

