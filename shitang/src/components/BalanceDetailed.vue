<template>
  <div class="content" style="width: 100%;">
    <div v-if="list != ''">
      <div class="item" v-for="item in list">
        <div class="item-left">
          <div class="txt1" v-if="item.transType == 0">消费</div>
          <div class="txt1" v-else>充值</div>
          <div class="txt2">{{item.create_time}}</div>
        </div>
        <div class="item-right">
          <div class="txt3 green-txt3"  v-if="item.transType == 1" >+{{item.amount}}</div>
          <div class="txt3 red-txt3" v-else >-{{item.amount}}</div>
          <div class="txt4">余额：{{item.balance}}</div>
        </div>
      </div>
    </div>
    <div v-else class="no-more">暂无数据~</div>
  </div>
</template>

<script>
  import { List } from 'vant';
  export default {
    name: '',
    data () {
      return {
        list:[],
        pageNum:1,
        end: false
      }
    },
    beforeRouteEnter (to, from, next) {
      window.document.title = to.meta.title
      next()
    },
    components: {

    },
    methods:{
      initData(pageNum){
        this.$store.dispatch('GetAccountDetail', {
          pageNum:pageNum
        }).then(res=>{
//          this.list.push(res.returnObject)
          res.returnObject.map(n => this.list.push(n))
          if(res.returnObject.length == 0){
            this.end = true
          }
        }).catch(()=>{

        })
      },
    },
    mounted:function () {
      if(this.$route.query.token !=null){
        window.sessionStorage.setItem('MemberToken',this.$route.query.token)
      }
      this.initData(this.pageNum)
      window.addEventListener('scroll', () => {
//        console.info('可视区域大小' + document.documentElement.clientHeight + '........' + window.innerHeight)
        //console.info('滚动高度' + document.body.scrollTop) //原生的方法存在的兼容性问题 mac上面就计算出来是0
        var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;

//        console.info('文档高度' + document.body.offsetHeight)

        //判断是否滚动到底部
        if (scrollTop + window.innerHeight + 0>= document.body.offsetHeight) { //0 表示距离底部多少的距离的开始触发loadmore效果
          if (!this.showlaoding) { //防止多次加载
            if(!this.end){
              this.initData(this.pageNum += 1)
            }
          }
        }
      })
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
      .red-txt3{
        font-size: 30px;
        color:  $redcolor;
        padding-bottom: 24px;
      }
      .green-txt3{
        font-size: 30px;
        color:  $greencolor;
        padding-bottom: 24px;
      }
      .txt4{
        font-size: 24px;
        color: #888;
      }
    }
  }
  .no-more{
    font-size: 28px;
    display: flex;
    justify-content: center;
    padding: 100px 0;
  }
</style>
