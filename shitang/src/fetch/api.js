import async from './fetch'
let apiUrl
let apiUrl2
if(process.env.NODE_ENV == 'development'){
  console.log(process.env.NODE_ENV)
  apiUrl = '/huiwang'
}else{
  apiUrl = ''
}

export default {
  getList(){ //获取轮播图
    return async(apiUrl + '/canteenService/product/getList.do?pageNum=1',{},'get')
  }
}

