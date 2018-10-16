import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name:'Login',
      meta: {
        title: '登录'
      },
      component: resolve => require(['@/components/Login'], resolve)
    },

    {
      path: '/category',
      name: 'Category',
      meta: {
        title: '商城'
      },
      component: resolve => require(['@/page/shop/category'], resolve)
    },
    { //商品详情
      path: '/product',
      name: 'product',
      meta: { title: '商品详情' },
      component: resolve => require(['@/page/shop/product'], resolve),
    },
    {
      path: '/bandetail',
      name: 'bandetail',
      meta: {
        title: '余额明细'
      },
      component: resolve => require(['@/components/BalanceDetailed'], resolve)
    },
    {
      path: '/drawdetail',
      name: 'drawdetail',
      meta: {
        title: '提现明细'
      },
      component: resolve => require(['@/components/WithdrawDetailed'], resolve)
    },
    {
        path: '/recrecord',
      name: 'recrecord',
      meta: {
        title: '收款记录'
      },
      component: resolve => require(['@/components/ReceiptsRecord'], resolve)
    },
    {
        path: '/recDetail',
      name: 'recDetail',
      meta: {
        title: '详情'
      },
      component: resolve => require(['@/components/recDetail'], resolve)
    },
    {
      path: '/cart',
      name: 'cart',
      meta: {
        title: '购物车'
      },
      component: resolve => require(['@/page/shop/cart'], resolve)
    },
    {
      path: '/orderList/:tab?',
      name: 'orderList',
      component: resolve => require(['@/page/shop/orderList'], resolve),
      meta: { title: '订单' }
    },
    {
      path: '/orderListInfo',
      name: 'orderListInfo',
      component: resolve => require(['@/page/shop/orderListInfo'], resolve),
      meta: { title: '订单详情' }
    },

    {
      path: '/pay',
      name: 'pay',
      component: resolve => require(['@/components/common/pay'], resolve),
      meta: { title: '支付密码' }
    },
    {
      path: '/createOrder',
      name: 'createOrder',
      component: resolve => require(['@/page/shop/createOrder'], resolve),
      meta: { title: '确认订单' }
    },
    {
      path: '/adressList',
      name: 'adressList',
      component: resolve => require(['@/page/shop/adressList'], resolve),
      meta: { title: '地址管理' }
    },
    {
      path: '/selectAdress',
      name: 'selectAdress',
      component: resolve => require(['@/page/shop/selectAdress'], resolve),
      meta: { title: '选择收货地址' }
    },
    {
      path: '/editAdress',
      name: 'editAdress',
      component: resolve => require(['@/page/shop/editAdress'], resolve),
      meta: { title: '编辑地址' }
    },

    {
      path: '/activity',
      name: 'activity',
      component: resolve => require(['@/components/luckywheel'], resolve),
      meta: { title: '活动' }
    },
    {
      path: '/activityAdr',
      name: 'activity',
      component: resolve => require(['@/components/activityAdress'], resolve),
      meta: { title: '收货地址' }
    },
    {
      path: '/integral',
      name: 'integral',
      component: resolve => require(['@/components/integral'], resolve),
      meta: { title: '如何获得积分' }
    },
    {
      path: '/rule',
      name: 'rule',
      component: resolve => require(['@/components/rule'], resolve),
      meta: { title: '积分使用规则' }
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: resolve => require(['@/components/aboutus'], resolve),
      meta: { title: '关于我们' }
    },
    {
      path: '/test',
      name: 'test',
      component: resolve => require(['@/components/test'], resolve),
      meta: { title: '测试' }
    }
  ]

})
