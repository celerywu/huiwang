const getters = {
    // cms
    indexCmsData: state => state.cms.indexCmsData,

    // shop
    categoryData: state => state.shop.categoryData,
    cartProductData: state => state.shop.cartProductData,

    // user
    userInfo: state => state.user.userInfo,
    addressList: state => state.user.addressList,


  //麦宝新增
  selectAddressList: state => state.shop.selectAddressList
}
export default getters
