<template>
  <div class="content" style="width: 100%;">
    <div class="">
      <!--<div class="date">2019-09-09 11:09</div>-->
      <!--<div class="info">-->
        <!--<div class="info-left">-->
          <!--<div class="txt1">收款笔数</div>-->
          <!--<div class="txt2">合计金额</div>-->
        <!--</div>-->
        <!--<div class="info-right">-->
          <!--<div class="txt3">4</div>-->
          <!--<div class="txt4">¥ 50.00</div>-->
        <!--</div>-->
      <!--</div>-->
      <div v-if="list != ''">
        <div class="person-info" v-for="item in list" @click="$router.push({'path':'/recDetail',query:{item:JSON.stringify(item)}})">
          <div class="person-info-item">
            <div class="item-left">
              <div class="item-img">
                <img class="img" v-bind:src="item.image">
              </div>
              <div class="item-txt">
                <div class="txt1">{{item.userName}}</div>
                <div class="txt2">{{item.updateTime}}</div>
              </div>
            </div>
            <div class="item-right">
              <div class="txt3">¥{{item.amount}}</div>
              <div class="txt4" v-if="item.status == 1">已退款</div>
            </div>
          </div>
        </div>
      </div>
      <div class="no-more" v-else>
        暂无数据~
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    data () {
      return {
        list:[],
        end:false,
        pageNum:1,
        showlaoding:false,
        end:false
      }
    },
    beforeRouteEnter (to, from, next) {
      window.document.title = to.meta.title
      next()
    },
    components: {

    },
    methods:{
      rootScrollTo(pageNum){
        this.$store.dispatch('GetWinAccTransJnl', {
          pageNum:pageNum
        }).then(res=>{
          this.showlaoding = false
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
      this.rootScrollTo(this.pageNum)
      window.addEventListener('scroll', () => {
        var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        //判断是否滚动到底部
        if (scrollTop + window.innerHeight + 0>= document.body.offsetHeight) { //0 表示距离底部多少的距离的开始触发loadmore效果
          if (!this.showlaoding) { //防止多次加载
            if(!this.end){
              this.showlaoding = true
              this.rootScrollTo(this.pageNum += 1)
            }
          }
        }
      })
    }
  };
</script>

<style lang="scss">
  @import '../common/css/common.scss';
  $redcolor:#ce281e;
  $greencolor:#62be3f;
  .item{
    .date{
      padding: $padding15;
      font-size: 24px;
      color: #666;
      background-color: #f6f6f6;
    }
    .info{
      font-size: 0;
      padding:$padding15;
      border-bottom: 1px solid $borderColor;
      .info-left{
        display: inline-block;
        width: 60%;
        .item-img{
          img{
            display: inline-block;
            width: 160px;
            height: 160px;
          }
        }
        .txt1{
          font-size: 24px;
          color: #888;
          padding-bottom: 12px;
        }
        .txt2{
          font-size: 24px;
          color: #888;
        }
      }
      .info-right{
        display: inline-block;
        width: 40%;
        text-align: right;
        .txt3{
          font-size: 30px;
          color:$redcolor;
          padding-bottom: 12px;
        }
        .txt4{
          font-size: 30px;
          color:$redcolor;
        }
      }
    }

  }
  .person-info{
    margin-left: $margin15;
    .person-info-item{
      padding: 12px 0;
      font-size: 0;
      border-bottom: 1px solid $borderColor;
      display: flex;
      justify-content: space-between;
      .item-left{
        display: inline-block;
        width: 60%;
        display: flex;
        align-items: center;
        .item-img{
          display: inline-block;
          .img{
            width: 40px;
            height: 40px;
            border-radius: 5px;
            position: relative;
            top:-8px;
          }
        }
        .item-txt{
          display: inline-block;
          padding-left: 11px;
          .txt1{
            font-size: 28px;
            color: #000;
            padding-bottom: 10px;
          }
          .txt2{
            font-size: 24px;
            color: #888;
          }
        }

      }
      .item-right{
        margin-right: 30px;
        display: inline-block;
        width: 40%;
        text-align: right;
        .txt3{
          font-size: 28px;
          color: #000;
          padding-right: $padding15;
          padding-bottom: 10px;
        }
        .txt4{
          font-size: 24px;
          color: #ce182e;
          padding-right: $padding15;
        }
      }
    }
  }
  .no-more{
    font-size: 28px;
    color: #333333;
    display: flex;
    justify-content: center;
    padding-top: 30px;
  }
</style>
