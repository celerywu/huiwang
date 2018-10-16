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
  .distpicker-address-wrapper{
    position: fixed;
    bottom: 0;
    width: 100%;
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
    <!--<div class="item" @click="()=>addressVisible=true">-->
    <div class="item">
      <div class="item-inner">
        <div class="left">选择地区</div>
        <div class="right">
          <!--<van-area :area-list="areaList"  @confirm="confirmArea" />-->
          <!--<input type="text" :value="addressForm.province + addressForm.city + addressForm.area" placeholder="">-->
          <!--<v-region @values="regionChange" class="form-control"></v-region>-->
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
    <div class="item">
      <div class="item-inner">
        <div class="left">邮政编码</div>
        <div class="right">
          <input type="text" placeholder="邮政编码" v-model="addressForm.postcode">
        </div>
      </div>
    </div>

    <!--<div class="item">
      <div class="item-inner">
        <div class="left">设为默认地址</div>
        <div class="right">
         <i :class="['select-default-icon',addressForm.selected ? 'select-icon' : '']" @click="checked()"></i>
        </div>
      </div>
    </div>-->

    <div class="btn" @click="saveAddress">保存</div>

    <van-area :area-list="areaList"  @confirm="confirmArea" />

    <!--<mt-popup v-model="addressVisible" position="bottom" class="address-pricker">-->
      <!--<div class="address-picker-header">-->
        <!--<p>配送至</p>-->
        <!--<span class="picker-close">&times;</span>-->
      <!--</div>-->
      <!--<v-distpicker :placeholders="{ province: '请选择', city: '请选择', area: '请选择' }" wrapper="address-pricker-wrapper" type="mobile"-->
                    <!--@selected="onSelected"></v-distpicker>-->
    <!--</mt-popup>-->
  </div>
</template>

<script>
  import VDistpicker from 'v-distpicker'
  import {Toast} from 'vant';
  import {Area} from 'vant';
  Vue.use(Area);
  import province_list from '../../assets/common/js/area'
  export default {
    data() {
      return {
        addressForm: {
          areaList:'',
          nickName: '',
          phone: '',
          province: '',
          city: '',
          area: '',
          address: '',
          postcode:'',
          flag: '0',
          selected:true
        },
        addressVisible: false,
      };
    },
    beforeRouteEnter (to, from, next) {
      window.document.title = to.meta.title
      next()
    },
    watch: {},

    components: {
      VDistpicker
    },

    computed: {},

    methods: {
      confirmArea:function (res) {
        console.log(res)
      },
      checked(){
        this.addressForm.selected = !this.addressForm.selected;
        if(this.addressForm.selected){
            this.flag = '1'
        }else{
          this.flag = '0'
        }
        console.log(this.flag)
      },
      onSelected(data) {
        this.addressVisible = false;
        this.addressForm.province = data.province.value;
        this.addressForm.city = data.city.value;
        this.addressForm.area = data.area.value;
      },
      regionChange(data){
        console.log(data);
      },
      async saveAddress(){
        var recAddr = this.addressForm.province + this.addressForm.city + this.addressForm.area + this.addressForm.address;
        let params = {
          recName:encodeURI(encodeURI(this.addressForm.nickName)),
          recAddr: encodeURI(encodeURI(recAddr)),
          recTel:encodeURI(encodeURI(this.addressForm.phone)),
          postCode:encodeURI(encodeURI(this.addressForm.postcode)),
          flag:this.addressForm.flag,
        };
        if(this.$route.params.Id){ //有传Id则是编辑模式 没传是新增
          params.Id = this.$route.params.Id
        }
        this.$store.dispatch('SaveAddress',params).then(response=>{
          Toast.success('添加成功')
        })

      },

    },
    mounted: function () {
      this.areaList = province_list
      console.log(this.areaList)
    }
  }

</script>

