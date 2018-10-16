<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
  .cat-body{
    height: 100%;
  }
  .categoryBody {
    height: 100%;
    overflow: hidden;
    display: flex;
    flex: 1;
    flex-direction: row;
    flex-wrap: nowrap;
    .rootList{
      background-color: #f7f7f7;
      position: fixed;
      top:0;
      height: 100%;
    }
    .rootListcontent {
      list-style: none;
      min-height: 85vh;
      li {
        height: 120px;
        line-height: 120px;
        width: 200px;
        text-align: center;
        font-size: 28px;
        color: #333;
        background: #f7f7f7;
        border-bottom: 1px solid #fff; /*no*/
        &:last-child {
          border: none;
        }
        &.active {
          background: #fff;
          color: #ce182e;
        }
      }
    }
    .jd-categoryContent {
      padding-bottom: 100px;
      .categoryContentBox {
        .nodata{
          display: flex;
          justify-content: center;
          margin-top: 100px;
        }
      }
      .categorytItem {
        display: flex;
        background: #fff;
        color: #999;
        margin-left: 30px;
        padding-top: 30px;
        .left{
          img{
            display: inline-block;
            width: 150px;
            height: 150px;
          }
        }
        .right{
          margin-left: 24px;
          width: 100%;
          .txt1{
            font-size: 30px;
            color: #212121;
            word-break: break-all;
            text-overflow: ellipsis;
            display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
            -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
            -webkit-line-clamp: 1; /** 显示的行数 **/
            overflow: hidden;  /** 隐藏超出的内容 **/
          }
          .txt2{
            padding-top: 15px;
            font-size: 24px;
            color: #888;
            word-break: break-all;
            text-overflow: ellipsis;
            display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
            -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
            -webkit-line-clamp: 2; /** 显示的行数 **/
            overflow: hidden;  /** 隐藏超出的内容 **/
          }
          .txt3{
            padding-top: 20px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .price{
              font-size: 30px;
              color: #ce281e;
            }
            .proPrice{
              font-size: 30px;
              color: #999;
              text-decoration: line-through;
            }
            .icon{
              display: inline-block;
              width: 60px;
              height: 60px;
              background: url("~assets/img/mall/cart.png") no-repeat;
              background-size: contain;
              margin-right: 30px;
            }
          }
        }
      }
    }
  }
  .jd-category-content{
    width: 100%;height: 100%;overflow: scroll;
    margin-left: 200px;
    margin-bottom: 120px;
  }
  .loadmore-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f8f8f8;
    padding: 0.2rem 0;
  }
</style>

<!-- category -->
<template>
  <div style="height: 100%">
    <div class="categoryBody">
      <!-- 分类列表 -->
      <div class="rootList">
        <!--<load-more ref="rootScroll" style="height:85%;">-->
          <ul class="rootListcontent">
            <li :class="selectedRoot === item.proType ? 'active' : ''" @click="rootScrollTo(item,1)" v-for="(item,index) in categoryBody.categoryRoot"
              v-if="categoryBody.categoryRoot!=null">{{item.typeDesc}}</li>
          </ul>
        <!--</load-more>-->
      </div>
      <!-- 分类列表 -->

      <!-- 分类下的产品目录 -->
      <div class="jd-category-content" @scroll="contentScroll()">
        <!--<load-more  :loadMoreIconVisible="false" ref="loadMore" style="width: 100%;height:85%;left:initial;right:0;">-->
          <div class="jd-categoryContent">
            <div class="categoryContentBox" v-if="categoryBody.categoryListInfo!=null && categoryBody.categoryListInfo.length>0">

            <div class="categorytItem" v-for="(item,index) in categoryBody.categoryListInfo" :key="index" @click="$router.push({path: '/product',query: {proId:item.proId}})">
                  <div class="left">
                    <!--<img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1532406581&di=4c65eccf8729e38d6aaf3abe1f6f18e1&src=http://img06.tooopen.com/images/20170221/tooopen_sy_199252314897.jpg" alt="">-->
                    <img v-bind:src="item.images" alt="">
                  </div>
                  <div class="right">
                    <div class="txt1">{{item.proName}}</div>
                    <div class="txt2">{{item.proSpec}}</div>
                    <div class="txt3">
                      <div class="price" v-if="item.relAmount < item.proAmount"><span class="yen">&yen;</span>{{item.relAmount}} <span class="proPrice"><span class="" style="text-decoration: line-through">&yen;</span>{{item.proAmount}}</span></div>
                      <div class="price" v-else>&yen;{{item.relAmount}}</div>
                      <div class="icon" v-on:click.stop="addCart(item)"></div>
                    </div>
                  </div>
                </div>




              <!--<div class="loading" v-show="showlaoding">
                <i class="fa fa-spinner fa-spin fa-3x fa-fw margin-bottom"></i>
              </div>-->

            </div>
            <div class="categoryContentBox" v-else>
              <p class="nodata">暂无数据</p>
            </div>
          </div>
        <!--</load-more>-->
      </div>
      <!-- 分类下的产品目录 -->
    </div>
    <van-popup  v-model="show">{{popContent}}</van-popup>
    <FooterView :nav-index="1" :num="num"/>

  </div>
</template>

<script>
  import FooterView from 'component/footer/footerView';
//  import Toast from 'component/common/toast';
//  import SearchBar from 'page/shop/searchBar';
//  import LoadMore from 'common/loadMore';
  import api from '../../fetch/api'
  import ErrorImage from 'assets/common/images/404.png';

  import { Toast,Loading,Popup } from 'vant';
  import {
    mapGetters,
    mapMutations
  } from 'vuex';
  export default {
    data() {
      return {
        num:'',
        selectedRoot: '00',
        ErrorImage,
        categoryBody: {
          categoryRoot: null,
          categoryList: null,
          categoryListInfo:[]
        },
        pageNum: 1,//页码
        showlaoding: true, //是否显示loading效果
        end:false,
        item:{
          proType:'00'
        },
        opicon:'sucess',
        toastText:'操作成功',
        isShowToast:false,
        loading: false,
        finished: false,
        show: false,
        popContent:''
      };
    },
    beforeRouteEnter (to, from, next) {
      window.document.title = to.meta.title
      next()
    },
    watch: {},

    components: {
      FooterView,
//      SearchBar,
//      LoadMore
    },

    computed: {
      ...mapGetters([
        'categoryData'
      ])
    },
    created(){
      document.body.setAttribute("class","cat-body");
    },
    methods: {
      ...mapMutations([
        'SET_CATEGORY_DATA'
      ]),
      contentScroll(){
//        console.info('可视区域大小' + document.documentElement.clientHeight + '........' + window.innerHeight)
        //console.info('滚动高度' + document.body.scrollTop) //原生的方法存在的兼容性问题 mac上面就计算出来是0
        var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;

//        console.info('文档高度' + document.body.offsetHeight)

        //判断是否滚动到底部
        if (scrollTop + window.innerHeight + 0>= document.body.offsetHeight) { //0 表示距离底部多少的距离的开始触发loadmore效果
          if (!this.showlaoding) { //防止多次加载
            var item = {
              proType:'00'
            }
            if(!this.end){
              this.rootScrollTo(item,this.pageNum += 1)
            }
          }
        }
      },
      async addCart(item){
        var proId = item.proId
        let res = await this.$store.dispatch('SelectProduct', {proId:proId,proNum:1})
        if(res.returnCode == '000000' ){
          Toast.success('添加成功')
        }
        var num = '0'
        this.$store.dispatch('GetSelectedProductList').then((res)=>{
          for(var i=0;i< res.returnObject.length;i++){
            res.returnObject[i].checked = false
            num = parseInt(num) + parseInt(res.returnObject[i].proNum)
          }
          this.num = num
          console.log('-----' + num)
        });
      },
      async rootScrollTo(item,pageNum) {
        this.showlaoding = true
        this.selectedRoot = item.proType;
//         Toast.loading({
//           mask: false,
//           message: '加载中...'
//         });
        let res = await this.$store.dispatch('GetListByType',{proType: item.proType,pageNum:pageNum});

        var Data = res.returnObject
        if(Data.length == 0){
            this.end = true
        }
        if(pageNum == 1){
          this.categoryBody.categoryListInfo = []
        }
//        this.categoryBody.categoryListInfo = Data;
        Data.map(n => this.categoryBody.categoryListInfo.push(n))
        this.showlaoding = false
      },
      async initData(){
//        if(!this.categoryData){
          let res = await this.$store.dispatch('GetCategoryList',{RootId: "00"});
          this.SET_CATEGORY_DATA(res)
          this.selectedRoot = res.returnObject[0].proType;
          this.categoryBody.categoryRoot = res.returnObject;
          this.rootScrollTo(res.returnObject[0],this.pageNum);
//        }else{
//          this.selectedRoot = this.categoryData.Data[0].proType;
//          this.categoryBody.categoryRoot = this.categoryData.Data;
//        }
      },
    },
    mounted: function () {


      if(this.$route.query.token !=null){
        window.sessionStorage.setItem('MemberToken',this.$route.query.token)
//        this.popContent = this.$route.query.token
      }else {
//        this.popContent = '没有token'
      }

      this.initData();
      var num = '0'
      this.$store.dispatch('GetSelectedProductList').then((res)=>{
        for(var i=0;i< res.returnObject.length;i++){
          res.returnObject[i].checked = false
          num = parseInt(num) + parseInt(res.returnObject[i].proNum)
        }
        this.num = num
      });


      // 注册scroll事件并监听
      window.addEventListener('scroll', () => {
//        console.info('可视区域大小' + document.documentElement.clientHeight + '........' + window.innerHeight)
        //console.info('滚动高度' + document.body.scrollTop) //原生的方法存在的兼容性问题 mac上面就计算出来是0
        var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
//        console.info('文档高度' + document.body.offsetHeight)
        //判断是否滚动到底部
        if (scrollTop + window.innerHeight + 0>= document.body.offsetHeight) { //0 表示距离底部多少的距离的开始触发loadmore效果
          if (!this.showlaoding) { //防止多次加载
            if(!this.end){
              this.rootScrollTo(this.item,this.pageNum += 1)
            }
          }
        }
      })

    }
  }

</script>

