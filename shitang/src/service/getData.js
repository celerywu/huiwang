import Http from '@/utils/axios';
if(process.env.NODE_ENV == 'development'){
  var apiUrl = '/huiwang'
  // var apiUrl = 'http://39.104.99.124:8080'
}else{
  var apiUrl = 'http://39.104.99.124'
}
var token = 'QSyC1LMtaxNzKaKRujZWthQrvwVQyTZAffM%2FAZA5RhGzDv3ybM%2BFrQZy94BdsXoG'
// var token = window.sessionStorage.getItem('MemberToken')
console.log(token)
//member
// export const login = (params) => new Http().require({api: apiUrl + '/canteenService/user/passwdLogin.do?telNo=18911111111&passwd=123456',param:params}); //登录
// export const login = (params) => new Http().require({api: apiUrl + '/canteenService/user/passwdLogin.do?telNo=13661111111&passwd=123456',param:params}); //登录
// export const login = (params) => new Http().require({api: apiUrl + '/canteenService/user/passwdLogin.do?telNo=13661924910&passwd=123456',param:params}); //登录
// export const login = (params) => new Http().require({api: apiUrl + '/canteenService/user/passwdLogin.do?telNo=18255031260&passwd=123456',param:params}); //登录
export const login = (params) => new Http().require({api: apiUrl + '/canteenService/user/passwdLogin.do?telNo=13795287901&passwd=123456',param:params}); //登录

export const getUserInfo = (params) => new Http().require({api:apiUrl +  '/canteenService/user/getUserInfo.do?token=' + window.sessionStorage.getItem('MemberToken'),param:params}); //获取个人信息

export const sendPhoneMessage = (params) => new Http().require({api: '/api/member/SendPhoneMessage',param: params}); //获取短信验证码

export const registered = (params) => new Http().require({api: '/api/member/Registered',param: params}); //注册账号

export const editUserInfo = (params) => new Http().require({api: '/api/member/EditUserInfo',param: params}); //编辑用户信息

export const setPassword = (params) => new Http().require({api: '/api/member/SetPassword',param: params}); //设置密码


export const getDefaultAddress = (params) => new Http().require({api: '/api/member/GetDefaultAddress',param: params}); //获取默认地址信息

export const removeAddress = (params) => new Http().require({api: '/api/member/RemoveAddress',param: params}); //删除地址

export const payByWallet = (params) => new Http().require({api: '/api/member/PayByWallet',param: params}); //余额支付

export const shopFavorite = (params) => new Http().require({api: '/api/member/ShopFavorite',param: params}); //收藏店铺

export const getMyShopFavorite = (params) => new Http().require({api: '/api/member/GetMyShopFavorite',param: params}); //获取我收藏的店铺


//shop
// export const getCategoryList = (params) => new Http().require({api: apiUrl + '/canteenService/product/getList.do?pageNum=1&token=' + token,param:params}); //hw-获取分类列表
export const getCategoryList = (params) => new Http().require({api: apiUrl + '/canteenService/product/getProTypeList.do?token=' + window.sessionStorage.getItem('MemberToken'),param:params}); //hw-获取分类列表
export const getCategoryListInfo = (params) => new Http().require({api: apiUrl + '/canteenService/product/getInfo.do?proId=' + params.proId + '&token=' + window.sessionStorage.getItem('MemberToken'),param:params}); //hw-获取分类列表下的商品信息
export const getListByType = (params) => new Http().require({api: apiUrl + '/canteenService/product/getListByType.do?proType=' + params.proType + '&pageNum=' + params.pageNum +'&token=' + window.sessionStorage.getItem('MemberToken'),param:params}); //hw-按分类获取商品列表

export const getSelectedProductList = (params) => new Http().require({api: apiUrl + '/canteenService/shoppCart/getList.do?pageNum=1&token=' + window.sessionStorage.getItem('MemberToken'),param:params}); //获取购物车列表
export const getOrderList = (params) => new Http().require({api: apiUrl + '/canteenService/order/getList.do?pageNum='+ params.pageNum + '&token=' + window.sessionStorage.getItem('MemberToken'),param:params}); //hw-获取个人订单列表
export const getOrderInfo = (params) => new Http().require({api: apiUrl + '/canteenService/order/getInfo.do?orderNo=' + params.orderNo + '&token=' + window.sessionStorage.getItem('MemberToken'),param:params}); //hw-获取个人订单列表
export const getOrderDetailList = (params) => new Http().require({api: apiUrl + '/canteenService/order/getDetailList.do?orderNo='+ params.orderNo + '&token=' + window.sessionStorage.getItem('MemberToken'),param:params}); //hw-获取个人订单列表
export const orderPay = (params) => new Http().require({api: apiUrl + '/canteenService/order/orderPay.do?orderNo='+ params.orderNo + '&passwd=' + params.passwd + '&token=' + window.sessionStorage.getItem('MemberToken'),param:params}); //hw-订单支付
export const shoppingCartOrder = (params) => new Http().require({api: apiUrl + '/canteenService/order/shoppingCartOrder.do?addrId='+ params.addrId + '&remark=' + params.remark + '&cartId=' + params.cartId + '&token=' + window.sessionStorage.getItem('MemberToken'),param:params}); //hw-订单支付
export const consume = (params) => new Http().require({api: apiUrl + '/canteenService/activity/consume.do?activId='+ params.activId + '&token=' + window.sessionStorage.getItem('MemberToken') + '&integral=10',param:params}); //hw-订单支付


export const searchGoods = (params) => new Http().require({api: '/api/shop/SearchGoods',param:params}); //获取购物车列表

export const getProduct = (params) => new Http().require({api: apiUrl + '/canteenService/product/getInfo.do?proId=' + params.proId + '&token=' + window.sessionStorage.getItem('MemberToken'),param:params}); //hw-获取商品详情


export const getProductList = (params) => new Http().require({api: '/api/shop/GetProductList',param: params}); //获取

export const selectProduct = (params) => new Http().require({api: apiUrl + '/canteenService/shoppCart/addCart.do?proId=' + params.proId + '&proNum=' + params.proNum + '&token=' + window.sessionStorage.getItem('MemberToken'),param:params}); //hw-添加到购物车

export const getOrderListByType = (params) => new Http().require({api: apiUrl + '/canteenService/order/getListByType.do?status=' + params.status + '&pageNum=' + params.pageNum + '&token=' + window.sessionStorage.getItem('MemberToken'),param:params}); //hw-按类别获取订单列表

export const removeSelectedProduct = (params) => new Http().require({api: '/api/shop/RemoveSelectedProduct',param: params}); //获取

export const confirmSelectProduct = (params) => new Http().require({api: '/api/shop/ConfirmSelectProduct',param: params}); //获取

export const getConfirmSelectedProductList = (params) => new Http().require({api: '/api/shop/GetConfirmSelectedProductList',param: params}); //获取

export const createOrder = (params) => new Http().require({api: '/api/shop/CreateOrder',param: params}); //获取

export const finishOrder = (params) => new Http().require({api: '/api/shop/FinishOrder',param: params}); //确认收货

export const cancelOrder = (params) => new Http().require({api:apiUrl + '/canteenService/order/cancelOrder.do?orderNo=' + params.orderNo + '&token=' + window.sessionStorage.getItem('MemberToken'),param: params}); //取消订单

// export const getOrderList = (params) => new Http().require({api: '/api/shop/GetOrderList',param: params}); //获取

export const getOrder = (params) => new Http().require({api: '/api/shop/GetOrder',param: params}); //获取

export const getShopInfo = (params) => new Http().require({api: '/api/shop/GetShopInfo',param: params}); //获取

export const getCommentList = (params) => new Http().require({api: '/api/shop/GetCommentList',param: params}); //获取

export const commitMessage = (params) => new Http().require({api: '/api/shop/CommitMessage',param: params}); //获取

//新增address/getList
export const getAddressList = (params) => new Http().require({api: apiUrl + '/canteenService/address/getList.do?&token=' + window.sessionStorage.getItem('MemberToken'),param:params}); //hw-获取地址
export const saveAddress = (params) => new Http().require({api: apiUrl + '/canteenService/address/addAddr.do?recName=' + params.recName + '&recAddr=' + params.recAddr + '&recTel=' + params.recTel + '&postCode=' + params.postCode + '&flag=' + params.flag + '&token=' + window.sessionStorage.getItem('MemberToken'),param: params}); //hw-新建地址
export const getAddress = (params) => new Http().require({api: apiUrl + '/canteenService/address/addAddr.do?addrId' + params.addrId + '&token=' + window.sessionStorage.getItem('MemberToken'),param: params}); //hw-获取地址详细信息

export const getAccountDetail = (params) => new Http().require({api: apiUrl + '/canteenService/account/accountDetail.do?pageNum=' + params.pageNum + '&token=' + window.sessionStorage.getItem('MemberToken'),param: params}); //余额明细
export const getWinAccTransJnl = (params) => new Http().require({api: apiUrl + '/canteenService/window/getWinAccTransJnl.do?pageNum=' + params.pageNum + '&token=' + window.sessionStorage.getItem('MemberToken'),param: params}); //余额明细
export const getSettleList = (params) => new Http().require({api: apiUrl + '/canteenService/window/getSettleList.do?token=' + window.sessionStorage.getItem('MemberToken'),param: params}); //余额明细
export const confirmOrder = (params) => new Http().require({api: apiUrl + '/canteenService/order/confirmOrder.do?orderNo=' + params.orderNo + '&token=' + window.sessionStorage.getItem('MemberToken'),param: params}); //确认订单
export const transBack = (params) => new Http().require({api: apiUrl + '/canteenService/window/transBack.do?passwd=' + params.passwd + '&transSerial=' + params.transSerial + '&token=' + window.sessionStorage.getItem('MemberToken'),param: params}); //确认订单
export const getActivityList = (params) => new Http().require({api: apiUrl + '/canteenService/activity/getList.do?pageNum=' + params.pageNum + '&token=' + window.sessionStorage.getItem('MemberToken'),param: params}); //确认订单
export const getPrizeList = (params) => new Http().require({api: apiUrl + '/canteenService/activity/getPrizeList.do?pageNum=' + params.pageNum + '&token=' + window.sessionStorage.getItem('MemberToken') + '&activId=' + params.activId,param: params}); //确认订单
export const uploadAwardInfo = (params) => new Http().require({api: apiUrl + '/canteenService/activity/uploadAwardInfo.do?activId=' + params.activId + '&token=' + window.sessionStorage.getItem('MemberToken') + '&prizeId=' + params.prizeId + '&prizeType=' + params.prizeType + '&integral=' + params.integral + '&recName=' + params.recName + '&recAddr=' + params.recAddr + '&recTel=' + params.recTel,param: params}); //确认订单


//cms
export const getArticle = (params) => new Http().require({api: '/api/cms/GetArticle',param:params}); //获取文章信息

export const getArticleList = (params) => new Http().require({api: '/api/cms/GetArticleList',param:params}); //获取文章列表

export const getGoodsCategoryList = (params) => new Http().require({api: '/api/cms/GetGoodsCategoryList',param:params}); //获取咨询分类列表

export const getGoodsCategory = (params) => new Http().require({api: '/api/cms/GetGoodsCategory',param:params}); //获取咨询分类信息

export const getRecommend = (params) => new Http().require({api: '/api/cms/GetRecommend',param:params}); //获取咨询分类信息

export const getIndexCmsData = (params) => new Http().require({api: '/api/cms/GetIndexCmsData',param:params}); //获取首页的全部资讯

export const getShop = (params) => new Http().require({api: '/system/GetShop',param:params}); //获取购物车列表


