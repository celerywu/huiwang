<template>
  <div id="app">
    <div class="top">
      <!--<img src="../assets/img/photo.jpg" alt="">-->
    </div>
    <div class="content">
      <h1>现在</h1>
      <h1>让我们开启旅程吧...</h1>
      <div class="input-wrap">
        <input type="text" class="tel" v-model="tel" placeholder="请填写手机号">
      </div>
      <div class="input-wrap">
        <input type="text" class="pwd"  v-model="pwd" placeholder="请填写手机验证码">
        <div class="vercode">获取验证码</div>
      </div>
      <div class="tips">{{tips}}</div>
      <div class="btn" @click="login">登&nbsp;录</div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import {
    setSessionStorage,
    getSessionStorage,
    removeSessionStorage
  } from '@/utils/mixin';
  import {
    mapGetters,
    mapMutations
  } from 'vuex';
  export default {
    name: '',
    data () {
      return {
        tel:'',
        pwd:'',
        tips:''
      }
    },
    components: {

    },
    methods:{
      async login(){
        let res = await this.$store.dispatch('Login');
        window.sessionStorage.setItem('MemberToken',res.returnObject.token)
        console.log('-----'+res.returnObject.token)
        if(res.returnCode === '000000'){
          this.$router.push('/category')
        }
      },
      /*login(){
        var tel = this._data.tel
        var pwd = this._data.pwd
        console.log(this.$router)
        this.$router.push({path:'/index'})
        return false
        if(tel == '' || pwd == ''){
          this._data.tips = '手机号或验证码不能为空'
          return false
        }
        var myreg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
        if (!myreg.test(tel)) {
          this._data.tips = '请输入正确的手机号'
          return false
        }else{
          return true;
        }
      }*/
    }
  };
</script>

<style lang="scss">
  $redcolor:#fd5c34;
  body {
    margin: 0;
    padding: 0;
  }
  .top {
    margin: 102px auto 118px auto;
    text-align: center;
    img{
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }
  }
  .content{
    width: 82%;
    margin: 0 auto;
    h1{
      font-size: 48px;
    }
    .input-wrap{
      width: 100%;
      border: none;
      border-radius: 0;
      border-bottom: 1px solid #c9c9c9;
      input{
        display: inline-block;
        width: 65%;
        border: none;
        border-radius: 0;
        height: 60px;
        line-height: 60px;
        font-size: 28px;
        color: #666;
        margin: 20px 0;
      }
      .vercode{
        display: inline-block;
        height: 60px;
        line-height: 60px;
        width: 30%;
        font-size: 28px;
        color: $redcolor;
        text-align: right;
      }
    }
    .tips{
      font-size: 28px;
      color: $redcolor;
      height: 60px;
      line-height: 60px;
    }

    .btn{
      width: 100%;
      height: 100px;
      line-height: 100px;
      text-align: center;
      color: #fff;
      font-size: 30px;
      background-color: $redcolor;
      border-radius: 5px;
    }
  }
  .bottom{

    text-align: center;
    .bottom-inner{
      display: inline-block;
      margin: 0 auto;
      background: url('https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=1276637436,84110235&fm=202&mola=new&crop=v1') no-repeat;
      background-size: contain;
      text-indent: 70px;
    }
  }
</style>
