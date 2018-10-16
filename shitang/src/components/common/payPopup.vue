<template>
  <div class="dialog" v-if="isShow">
    <!--外层的遮罩 点击事件用来关闭弹窗，isShow控制弹窗显示 隐藏的props-->
    <div class="dialog-cover back"   @click="closeMyself"></div>
    <!-- transition 这里可以加一些简单的动画效果 -->
    <transition name="drop">
      <!--style 通过props 控制内容的样式  -->
      <div class="dialog-content" :style="{top:topDistance+'%',width:widNum+'%',left:leftSite+'%'}"  v-if="isShow">
        <div class="dialog_head back">
          <!--弹窗头部 title-->
          <slot name="header">请输入密码</slot>
        </div>
        <div class="dialog_main">
          <!--弹窗的内容-->
          <slot name="main">
            <div class="container">
              <!--<div class="item" v-for="i in 6">{{numbers[i-1]}}</div>-->
              <div class="item" v-for="i in 6" style="border: none;position: relative;border-right: 1px solid #f1f1f1;">
                <input type="password" class="password" value="" v-model="numbers[i-1]" style="width: 10px;position: absolute;top:0;">
              </div>

              <input class="input-num" v-model="numbers" maxlength="6" type="tel" autofocus="autofocus"/>
            </div>
            <div class="forget"></div>
          </slot>
        </div>
        <div class="pay-btn" @click="pay">
          确定
        </div>
        <!--弹窗关闭按钮-->
        <div  class="foot_close" @click="closeMyself">
          <div class="close_img"></div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        numbers: ''
      }
    },
    props: {
      isShow: {
        //弹窗组件是否显示 默认不显示
//        type: Boolean,
        default: false,
//        required:true, //必须
      },
      //下面这些属性会绑定到div上面 详情参照上面的html结构
      // 如： :style="{top:topDistance+'%',width:widNum+'%'}"
      widNum:{
        //内容宽度
        type: Number,
        default:86.5
      },
      leftSite:{
        // 左定位
        type: Number,
        default:6.5
      },
      topDistance: {
        //top上边距
        type: Number,
        default:10
      },
      pdt:{
        //上padding
        type: Number,
        default:22
      },
      pdb:{
        //下padding
        type: Number,
        default:47
      },
      orderNo:{
        type: Number
      }
    },
    methods: {
      closeMyself() {
          this.isShow = false
//        this.$emit("on-close");
        //如果需要传参的话，可以在"on-close"后面再加参数，然后在父组件的函数里接收就可以了。
      },
      pay(){
        this.$emit("onPay",this.numbers);
      }
    }
  }
</script>
<style lang="scss" scoped>
  // 最外层 设置position定位
  .dialog {
    position: relative;
    color: #2e2c2d;
    font-size: 16px;
  }
  // 遮罩 设置背景层，z-index值要足够大确保能覆盖，高度 宽度设置满 做到全屏遮罩
  .dialog-cover {
    background: rgba(0,0,0, 0.8);
    position: fixed;
    z-index: 200;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  // 内容层 z-index要比遮罩大，否则会被遮盖，
  .dialog-content{
    background-color: #fff;
    position: fixed;
    top: 35%;
    // 移动端使用felx布局
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 300;
    border-radius: 6px;
    .dialog_head{
      font-size: 30px;
      margin-top: 40px;
    }
    .dialog_main{
      margin-top: 90px;
      .container{
        position: relative;
        margin: auto;
        height: 80px;
        width: 524px;
        display: flex;
        border: 1px solid #f1f1f1;/*no*/
        border-radius: 4px;
        .item {
          flex-basis: 25%;
          font-size: 40px;
          text-align: center;
          line-height: 80px;
        }
        .password{
          height: 60px;
        }
        .item:not(:last-of-type) {
          border-right: 1px solid #f1f1f1;
        }
        .input-num {
          position: absolute;
          height: 80px;
          opacity: 0;
          left: 0;
          width: 524px;
        }
      }
      .forget{
        display: flex;
        justify-content: flex-end;
        padding: 60px 0 70px 0;
        font-size: 30px;
        color: #ce182e;
      }
    }
    .pay-btn{
      width: 524px;
      margin: 0 auto;
      height: 88px;
      line-height: 88px;
      background-color: #ce182e;
      color: #fff;
      text-align: center;
      border-radius: 6px;
      font-size: 34px;
      margin-bottom: 60px;
    }

  }
  .foot_close{
    position: relative;
    top:150px;
    .close_img{
      width: 48px;
      height: 48px;
      display: inline-block;
      background: url('../../assets/jd/images/close-white.png') no-repeat;
      background-size: contain;
    }
  }
</style>
