<!-- cart -->
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';

  /* 购物车列表 */

  .Section {
    font-size: 28px;
    .login-info {
      margin-top: 40px;
      position: relative;
      z-index: 1;
      background: #fff;
      padding: $padding 25px;
      border-top: 1px solid #eee;
      @include flexbox(flex-start, center, row, nowrap);
      .login {
        border: 1px solid #999;
        color: #999;
        background: transparent;
        width: 60px;
        height: 20px;
        @include flexbox(center, center, row, nowrap);
        flex: initial;
        margin-right: 10px;
        border-radius: 2px;
      }
      span {
        color: #999;
      }
    }
    .goods {
      padding-bottom: 240px;
      @include flexbox(flex-start, space-between, column, wrap);
      .store {
        @include flexbox(flex-start, center, row, nowrap);
        flex: initial;
        padding: 10px;
        span {
          margin-left: 10px;
        }
      }
      .store-pd {
        @include flexbox(flex-start, space-between, column, wrap);
        background: #fff;
        flex: initial;
        .store-pd-item {
          @include flexbox(flex-start, center, row, nowrap);
          padding: 20px;
          border-bottom: 1px solid #eee;
          .select-default-icon{
            display: inline-block;
            width: 40px;
            height: 40px;
            background: url('~jd/images/unselect.png') no-repeat;
            background-size: contain;
          }
          .select-icon{
            background: url('~jd/images/select.png') no-repeat;
            background-size: contain;
          }
          &:last-child {
            border-bottom: none;
          }
          .pd-images {
            border: 1px solid #eee;
            margin: 0 15px 0 20px;
            img {
              display: inline-block;
              width: 150px;
              height: 150px;
            }
          }
          .pd-info {
            @include flexbox(flex-start, space-between, column, wrap);
            width: 60%;
            flex: initial;
            .pd-title {
              font-size: 28px;
              @include textoverflow(2); // width: 90%;
              color: #333;
            }
            .pd-sku {
              @include textoverflow(1);
              padding: 5px 0;
              line-height: 1.5;
              color: #999;
              font-size: 28px;
            }
            .pd-price {
              margin-top: 10px;
              @include flexbox(space-between, center, row, nowrap);
              flex: initial;
              font-size: 28px;
              .left {
                color: #e93b3d;
                span {

                }
                strong {

                  font-weight: normal;
                }
              }
              .right {
                @include flexbox(space-between, center, row, nowrap);
                flex: initial;
                border-radius: 2px;
                width: 2rem;
                .cut {
                  padding: 2px 0;
                  width: 40px;
                  height: 40px;
                  background: url('~jd/images/cut.png') no-repeat;
                  background-size: contain;
                  position: relative;
                }
                .add {
                  padding: 2px 0;
                  width: 40px;
                  height: 40px;
                  background: url('~jd/images/add.png') no-repeat;
                  background-size: contain;
                  position: relative;
                }
                .num-inp {
                  border: none;
                  outline: none;
                  text-align: center;
                  padding: 0 5px;
                  width: 40%;
                }
              }
            }
          }
        }
      }
    }
  }

  /* 购物车列表 */

  /* 底部计算栏 */

  .section-bar {
    background-color: #fff;
    position: fixed;
    border-top: 1px solid #eee; /*no*/
    bottom: 120px;
    width: 100%;
    height: 110px;
    @include flexbox(space-between, center, row, nowrap);
    .left {
      background: #fff;

      height: 100%;
      width: 30%;
      @include flexbox(flex-start, center, row, nowrap);
      flex: initial;

      .select-default-icon{
        margin-left: 24px;
        display: inline-block;
        width: 40px;
        height: 40px;
        background: url('~jd/images/unselect.png') no-repeat;
        background-size: contain;
      }
      .select-icon{
        background: url('~jd/images/select.png') no-repeat;
        background-size: contain;
      }
      i {
        vertical-align: text-top;
        margin-right: 5px;
      }
    }
    .right {
      width: 70%;
      height: 110px;
      color: #fff;
      line-height: 110px;
      @include flexbox(space-around, center, row, nowrap);
      .total{
        margin-left: 10px;
        font-weight: normal;
        .txt1{
          font-size: 32px;
          color: #666;
        }
        .txt2{
          color: #ce182e;
          font-size: 38px;
        }
        @include textoverflow(1);
      }
      .pay {
        height: 70px;
        line-height: 70px;
        background: #e4393c;
        font-size: 32px;
        font-weight: normal;
        padding: 0 30px;
        border-radius: 50px;
      }
    }
  }

  /* 底部计算栏 */
</style>

<template>
  <div>
    <!-- 购物车列表 -->
    <div class="Section">
        <div class="goods">
          <div class="store-pd" v-if="cartList">
            <div class="store-pd-item" v-for="(item,index) in cartList" :key="index">
              <i :class="['select-default-icon',item.checked ? 'select-icon' : '']" @click="checked(item)"></i>
              <div class="pd-images">
                <img v-bind:src = "item.images" alt="">
              </div>
              <div class="pd-info">
                <div class="pd-title">
                  <p>{{item.proName}}</p>
                </div>
                <div class="pd-sku">
                  <p class="sku-info">{{item.proSpec}}</p>
                </div>
                <div class="pd-price">
                  <div class="left">
                    <span>&yen;</span>
                    <strong>{{item.relAmount}}</strong>
                  </div>
                  <div class="right">
                    <div class="cut" @click="editProductNum(item,'cut')"></div>
                    {{item.proNum}}
                    <!--<input type="text" v-model="counter" class="num-inp" @change="editProductNum({item:item,counter:item.proNum})"></input>-->
                    <div class="add" @click="editProductNum(item,'add')"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p v-if="!cartList || cartList == ''" style="margin-top:50px;padding: 15px 0;text-align:center;font-size:16px;color:#999;">购物车是空的</p>
    </div>
    <!-- 购物车列表 -->
    <!-- 底部价格计算 -->
    <div class="section-bar">
      <div class="left">
        <i :class="['select-default-icon',selectedAll ? 'select-icon' : '']" @click="selectedAllGoods"></i>
      </div>
      <div class="right" >
        <strong class="total"><span class="txt1">合计：</span><span class="txt2">&yen;{{totalFee}}</span></strong>
        <strong class="pay" @click="confirmOrder">去结算</strong>
      </div>
    </div>
    <!-- 底部价格计算 -->
    <FooterView :nav-index="2" :num="num"/>
  </div>
</template>

<script>
  import FooterView from 'component/footer/footerView';
  import {Toast} from 'vant'
  export default {
    data() {
      return {
        num:'',
        cartList: null,
        totalFee: 0,
        selectedCounter: 0,
        selectedAll: false,
        isLogin: false,
        counter:1,
        opicon:'sucess',
        toastText:'操作成功',
        isShowToast:false
      };
    },
    beforeRouteEnter (to, from, next) {
      window.document.title = to.meta.title
      next()
    },
    watch: {},

    components: {
      FooterView,
    },

    methods:{
      selectedAllGoods() {
        this.cartList.map(item => {
          item.checked = !this.selectedAll
        })
        console.log('qian' + this.selectedAll)
        this.selectedAll = !this.selectedAll;
        this.$forceUpdate();
        console.log('hou' + this.selectedAll)
        this.computedTotalFee();
      },
      confirmOrder() {  //去结算
        let SelectedList = [];
        this.cartList.map(item => {
          if (item.checked) {
            SelectedList.push(item)
          }
        })
        for(var i in SelectedList){
            console.log(SelectedList)
            if(SelectedList[i].proType == '01' && SelectedList.length > 1){
              if(SelectedList[i].proNum > 1){
                Toast.fail('一次只能提交一个虚拟商品')
                return false
              }
              Toast.fail('实物商品和虚拟商品不能同时提交')
              return false
            }
        }
        if (SelectedList == '') {
          Toast.fail('请选择商品')
          return false
        }
        var data = {
          item: JSON.stringify(SelectedList),
          selectedCounter:this.selectedCounter,
          totalFee:this.totalFee
        }
        this.$store.commit('SET_CARTPRODUCT_DATA', data)
        this.$router.push({path: '/createOrder'})
        this.$router.push({path: '/createOrder',query: {
          item: JSON.stringify(SelectedList),
          selectedCounter:this.selectedCounter,
          totalFee:this.totalFee}})
      },
      editProductNum(item,opera){
        if(opera == 'add'){
          item.proNum++

        }else if(opera == 'cut'){
          if(item.proNum == 0){
            return false
          }
          item.proNum--
        }

        this.computedTotalFee()

      },
      async initData() {
        var num = '0'
        var Data = await this.$store.dispatch('GetSelectedProductList');
        for(var i=0;i< Data.returnObject.length;i++){
          Data.returnObject[i].checked = false
          num = parseInt(num) + parseInt(Data.returnObject[i].proNum)
        }
        this.num = num
        var newData = Data.returnObject
        this.cartList = newData;
      },
      checked(item) {
        item.checked = !item.checked;
        this.$forceUpdate();
        this.computedTotalFee()
        /*let count = 0;
         this.cartList.map(item => {
         if (item.status === 1 && item.checked) return count++;
         })
         if (count === this.cartList.length) return this.selectedAllGoods();
         this.computedTotalFee();*/
      },
      computedTotalFee() {
        var computedFee = 0
        var selectedCounter = 0
        this.cartList.map(item => {
          let computedFee = 0,
            selectedCounter = 0;
          this.cartList.map(item => {
            if (item.checked) {
              computedFee += parseFloat(item.proNum * item.relAmount)
              selectedCounter = selectedCounter + item.proNum
            }
          })
          this.selectedCounter = selectedCounter;
          this.totalFee = computedFee;
        })
      }
    },
    mounted: function () {
      this.initData();
    }




  }
</script>
