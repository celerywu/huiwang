<!-- orderList -->
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
  .item{
    border-bottom: 1px solid #f1f1f1;/*no*/
    .item-inner{
      height: 100px;
      font-size: 30px;
      padding: 0 30px;
      display:flex;
      align-items: center;
      .left{
        width: 270px;
      }
      .right{
        width: 100%;
        input{
          color: #888;
          width: 100%;
        }
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
      }
    }
    .item-inner-address{
      padding-top: 30px;
      align-items: flex-start;
      height: 300px;
      .right{
        height: 100%;
      }
      textarea{
        width: 100%;
        height: 90%;
        color: #888;
      }
    }

  }
  .form-control{
    width: 60px;
  }
  .btn{
    height: 100px;
    line-height: 100px;
    width: 80%;
    font-size: 36px;
    color: #fff;
    text-align: center;
    margin: 50px auto;
    background-color: #ce182e;
    border-radius: 6px;
  }
  .address-pricker {
    @include wh(100%, 70%);
    .address-picker-header {
      position: relative;
      p {
        padding: $padding 0;
        font-size: 15px;
        color: #333;
        text-align: center;
      }
      .picker-close {
        position: absolute;
        right: 10px;
        bottom: 7px;
        font-weight: normal;
        font-size: 25px;
        color: #999;
        opacity: .7;
      }
    }
  }
</style>

<template>
  <div>

    <div class="item">
      <div class="item-inner">
        <div class="left">联系人</div>
        <div class="right">
          <input type="text" placeholder="名字" v-focus v-model="addressForm.nickName">
        </div>
      </div>
    </div>
    <div class="item">
      <div class="item-inner">
        <div class="left">手机号码</div>
        <div class="right">
          <input type="text" placeholder="11位手机号码" v-model="addressForm.phone">
        </div>
      </div>
    </div>
    <div class="item ">
      <div class="item-inner item-inner-address">
        <div class="left">详细地址</div>
        <div class="right">
          <textarea name="" id="" placeholder="详细地址" v-model="addressForm.address"></textarea>
        </div>
      </div>
    </div>

    <div class="btn" style="position: static;" @click="saveAddress">提交</div>


  </div>
</template>

<script>
  import {
    Switch,
//    Toast
  } from 'mint-ui'
  import VDistpicker from 'v-distpicker'
  import { Toast} from 'vant';
  export default {
    data() {
      return {
        addressForm: {
          nickName: '',
          phone: '',
          address: '',
          activId:'',
          prizeId:'',
          prizeType:'',
          integrals:'10',

        },
        addressVisible: false,
      };
    },
    beforeRouteEnter (to, from, next) {
      window.document.title = to.meta.title
      next()
    },
    computed: {},

    methods: {
      saveAddress(){
        let params = {
          activId:this.activId,
          prizeId:this.prizeId,
          prizeType:this.prizeType,
          integral:10,
          recName:encodeURI(encodeURI(this.addressForm.nickName)),
          recAddr: encodeURI(encodeURI(this.addressForm.address)),
          recTel:encodeURI(encodeURI(this.addressForm.phone)),
        };
        this.$store.dispatch('UploadAwardInfo',params).then(response=>{
          Toast.success('提交成功')
          setTimeout(()=>{
            this.$router.push({path:'/activity'})
          },3000)
        })

      },

    },
    mounted: function () {
      this.activId = JSON.parse(this.$route.query.prizeInfo).activId
      this.prizeId = JSON.parse(this.$route.query.prizeInfo).prizeId
      this.prizeType = JSON.parse(this.$route.query.prizeInfo).prizeType
//      this.integral = JSON.parse(this.$route.query.prizeInfo).integral
    }
  }

</script>

