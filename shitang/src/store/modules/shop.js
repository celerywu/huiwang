import {
  getCategoryList,
  getCategoryListInfo,
  getSelectedProductList,
  getListByType,
  searchGoods,
  getProduct,
  getProductList,
  selectProduct,
  removeSelectedProduct,
  confirmSelectProduct,
  finishOrder,
  cancelOrder,
  getConfirmSelectedProductList,
  createOrder,
  getOrderList,
  getOrderInfo,
  getCommentList,
  commitMessage,
  getShopInfo,
  getOrderDetailList,
  getOrderListByType,
  orderPay,
  getAddressList,
  getAddress,
  saveAddress,
  shoppingCartOrder,
  getAccountDetail,
  getWinAccTransJnl,
  getSettleList,
  confirmOrder,
  transBack,
  getActivityList,
  getPrizeList,
  uploadAwardInfo,
  consume
} from '@/service/getData';
const shop = {
  state: {
    categoryData: null, //商品分类数据
    cartProductData: null, //加入的购物车数据
    selectAddressList:null
  },
  mutations: {
    SET_CATEGORY_DATA(state, categoryData) {
      state.categoryData = categoryData
    },
    SET_CARTPRODUCT_DATA(state, cartProductData) {
      state.cartProductData = cartProductData
    },
    SET_SELECT_ADRESS_LIST_DATA(state, selectAddressList) {
      state.selectAddressList = selectAddressList
    }

  },
  actions: {
    GetCategoryList({ //hw-获取商品分类
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        getCategoryList(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    GetCategoryListInfo({ //hw-获取商品分类下的商品信息
                      commit,
                      state
                    }, parameterData) {
      return new Promise((resolve, reject) => {
        getCategoryListInfo(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    GetListByType({ //hw-获取商品分类下的商品信息
                      commit,
                      state
                    }, parameterData) {
      return new Promise((resolve, reject) => {
        getListByType(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    GetOrderListByType({ //hw-获取商品分类下的商品信息
                    commit,
                    state
                  }, parameterData) {
      return new Promise((resolve, reject) => {
        getOrderListByType(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    SelectProduct({ // hw-加入购物车
                    commit,
                    state
                  }, parameterData) {
      return new Promise((resolve, reject) => {
        selectProduct(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    OrderPay({ // hw-加入购物车
                    commit,
                    state
                  }, parameterData) {
      return new Promise((resolve, reject) => {
        orderPay(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    RemoveSelectedProduct({ // 从购物车中移除
                            commit,
                            state
                          }, parameterData) {
      return new Promise((resolve, reject) => {
        removeSelectedProduct(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    ConfirmSelectProduct({ //确认订单的商品
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        confirmSelectProduct(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    GetConfirmSelectedProductList({ //获取确认订单的商品
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        getConfirmSelectedProductList(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    GetCommentList({ //获取商品留言
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        getCommentList(parameterData).then(response => {
          commit('SET_CARTPRODUCT_DATA', response);
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    CommitMessage({ //评价
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        commitMessage(parameterData).then(response => {
          commit('SET_CARTPRODUCT_DATA', response);
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    GetSelectedProductList({ //获取购物车信息
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        getSelectedProductList(parameterData).then(response => {
          commit('SET_CARTPRODUCT_DATA', response);
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    SearchGoods({ // 搜索商品
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        searchGoods(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    GetProduct({ // 获取商品详情
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        getProduct(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    GetProductList({ // 获取商品列表
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        getProductList(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },

    ConfirmSelectProduct({ // 确认下单商品
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        confirmSelectProduct(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    GetConfirmSelectedProductList({ // 获取确认下单商品
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        getConfirmSelectedProductList(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    CreateOrder({ // 创建订单
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        createOrder(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    FinishOrder({ // 确认收货
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        finishOrder(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    CancelOrder({ // 取消订单
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        cancelOrder(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    GetOrderList({ // 获取订单列表信息
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        getOrderList(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    GetOrderInfo({ // 获取订单详情
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        getOrderInfo(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    GetOrderDetailList({ // 获取订单明细列表
                   commit,
                   state
                 }, parameterData) {
      return new Promise((resolve, reject) => {
        getOrderDetailList(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    GetShopInfo({ // 获取店铺信息
      commit,
      state
    }, parameterData) {
      return new Promise((resolve, reject) => {
        getShopInfo(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    //新增
    GetAddressList({ //HW-获取用户地址信息
                     commit,
                     state
                   }, parameterData) {
      return new Promise((resolve, reject) => {
        getAddressList(parameterData).then(response => {
          commit('SET_ADDRESSLIST_DATA', response)
          resolve(response);
        }, err => {
          reject(err)
        })
      })
    },
    SaveAddress({ //新增地址
                  commit,
                  state
                }, parameterData) {
      return new Promise((resolve, reject) => {
        saveAddress(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    GetAddress({ //获取地址详情
                 commit,
                 state
               }, parameterData) {
      return new Promise((resolve, reject) => {
        getAddress(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    ShoppingCartOrder({ //获取地址详情
                 commit,
                 state
               }, parameterData) {
      return new Promise((resolve, reject) => {
        shoppingCartOrder(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    GetAccountDetail({ //获取账户余额
                 commit,
                 state
               }, parameterData) {
      return new Promise((resolve, reject) => {
        getAccountDetail(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    GetWinAccTransJnl({ //获取账户余额
                 commit,
                 state
               }, parameterData) {
      return new Promise((resolve, reject) => {
        getWinAccTransJnl(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    GetSettleList({ //获取账户余额
                 commit,
                 state
               }, parameterData) {
      return new Promise((resolve, reject) => {
        getSettleList(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    ConfirmOrder({
                 commit,
                 state
               }, parameterData) {
      return new Promise((resolve, reject) => {
        confirmOrder(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    TransBack({
                 commit,
                 state
               }, parameterData) {
      return new Promise((resolve, reject) => {
        transBack(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    GetActivityList({
                 commit,
                 state
               }, parameterData) {
      return new Promise((resolve, reject) => {
        getActivityList(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    GetPrizeList({
                 commit,
                 state
               }, parameterData) {
      return new Promise((resolve, reject) => {
        getPrizeList(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    UploadAwardInfo({
                 commit,
                 state
               }, parameterData) {
      return new Promise((resolve, reject) => {
        uploadAwardInfo(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
    Consume({
                 commit,
                 state
               }, parameterData) {
      return new Promise((resolve, reject) => {
        consume(parameterData).then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
      })
    },
  },


}

export default shop
