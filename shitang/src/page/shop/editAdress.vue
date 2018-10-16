<!-- orderList -->
<style lang="scss" scoped>
  @import '~assets/common/css/mixin.scss';
  .item{
    border-bottom: 1px solid #f1f1f1;/*no*/
    .item-inner{
      height: 70px;
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
  .btn{
    position: static;
    margin-top: 30px;
    height: 100px;
    line-height: 100px;
    width: 80%;
    font-size: 36px;
    color: #fff;
    text-align: center;
    margin-left: 10%;
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

  div.v-region select{
    width: 60px;
  }
  .weui-picker-modal .picker-items{
    font-size: 16px;
  }
</style>

<template>
  <div>

    <div class="item">
      <div class="item-inner">
        <div class="left">联系人</div>
        <div class="right">
          <input type="text" placeholder="名字" id="recName" v-focus >
        </div>
      </div>
    </div>
    <div class="item">
      <div class="item-inner">
        <div class="left">手机号码</div>
        <div class="right">
          <input type="text" placeholder="11位手机号码" id="recTel">
        </div>
      </div>
    </div>

    <div class="item">
      <div class="item-inner">
        <div class="left">选择地区</div>
        <div class="right">
          <input type="text" placeholder="请选择" @onChange="onChangeArea" id='city-picker'/>
        </div>
      </div>
    </div>
    <div class="item ">
      <div class="item-inner item-inner-address">
        <div class="left">详细地址</div>
        <div class="right">
          <textarea id="address" placeholder="详细地址"></textarea>
        </div>
      </div>
    </div>
    <div class="item">
      <div class="item-inner">
        <div class="left">邮政编码</div>
        <div class="right">
          <input type="text" placeholder="邮政编码" id="postCode">
        </div>
      </div>
    </div>


    <div class="btn" @click="saveAddress">保存</div>


  </div>
</template>

<script>
  import VDistpicker from 'v-distpicker'
  import {Toast} from 'vant';
  import {Area} from 'vant';
  Vue.use(Area);
  import province_list from '../../assets/common/js/area'
  var str = ''
  export default {
    data(){
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
          selected:true,
        },
        recAddr:'',
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

      },
      checked(){
        this.addressForm.selected = !this.addressForm.selected;
        if(this.addressForm.selected){
          this.flag = '1'
        }else{
          this.flag = '0'
        }

      },
      onSelected(data) {
        this.addressVisible = false;
        this.addressForm.province = data.province.value;
        this.addressForm.city = data.city.value;
        this.addressForm.area = data.area.value;
      },
      regionChange(data){

      },
      saveAddress(){
        var recAddr = this.recAddr + $("#address").val()
        console.log('recAddr' + this.recAddr)
        let params = {
          recName:encodeURI(encodeURI($("#recName").val())),
          recAddr: encodeURI(encodeURI(recAddr)),
          recTel:encodeURI(encodeURI($("#recTel").val())),
          postCode:encodeURI(encodeURI($("#postCode").val())),
          flag:this.addressForm.flag,
        };
        if($("#recName").val() == ''){
            Toast.fail('姓名不可以为空')
          return false
        }
        if($("#recTel").val() == ''){
          Toast.fail('电话不可以为空')
          return false
        }
        if(this.recAddr == ''){
          Toast.fail('请选择地区')
          return false
        }
        if($("#address").val() == ''){
          Toast.fail('地址不可以为空')
          return false
        }
        if(this.$route.params.Id){ //有传Id则是编辑模式 没传是新增
          params.Id = this.$route.params.Id
        }
        this.$store.dispatch('SaveAddress',params).then(response=>{
          Toast.success('添加成功')
          setTimeout(()=>{
            window.history.go(-1)
          },1000)
        })

      },

    },
    mounted: function () {
      var _this = this
      $("#city-picker").cityPicker({
        title: "请选择",
        onChange:function (res1,res2,res3) {
            var str = ''
          for(var i in res3){
                str = str + res3[i]
          }
          console.log('str' + str)
          console.log(res1 + res2 + res3)
          _this.recAddr = str

        }
      });
    }
  }

</script>

