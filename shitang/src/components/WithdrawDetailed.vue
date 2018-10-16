<template>
  <div class="content" style="width: 100%;">
    <div v-if="list !=''">
      <div class="item" v-for="item in list">
        <div class="item-left">
          <div class="txt1">提现</div>
          <div class="txt2">{{item.createTime}}</div>
        </div>
        <div class="item-right">
          <div class="txt3">-{{item.amount}}</div>
        </div>
      </div>
    </div>
    <div class="no-data" v-else>
      暂无数据~
    </div>

  </div>
</template>

<script>
  export default {
    name: '',
    data () {
      return {
        list:'',
      }
    },
    beforeRouteEnter (to, from, next) {
      window.document.title = to.meta.title
      next()
    },
    components: {

    },
    methods:{
      initData(){
        this.$store.dispatch('GetSettleList', {

        }).then(res=>{
          this.list = res.returnObject
        }).catch(()=>{

        })
      }

    },
    mounted:function () {
      if(this.$route.query.token !=null){
        window.sessionStorage.setItem('MemberToken',this.$route.query.token)
      }
      this.initData()
    }
  };
</script>

<style lang="scss">
  @import '../common/css/common.scss';
  $redcolor:#fd5c34;
  $greencolor:#62be3f;
  .item{
    padding: 30px;
    font-size: 0;
    border-bottom: 1px solid $borderColor;
    .item-left{
      display: inline-block;
      width: 60%;
      .txt1{
        font-size: 30px;
        color: #000;
        padding-bottom: 24px;
      }
      .txt2{
        font-size: 24px;
        color: #888;
      }
    }
    .item-right{
      display: inline-block;
      width: 40%;
      text-align: right;
      .txt3{
        position: relative;
        top:-30px;
        font-size: 30px;
        color:  $redcolor;
        vertical-align: middle;
      }
    }
  }
  .no-data{
    display: flex;
    justify-content: center;
    padding-top: 100px;
  }
</style>
