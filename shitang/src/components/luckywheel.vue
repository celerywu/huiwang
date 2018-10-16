<template>
    <div class="container" style="background-color: #fccf85" id="activity">
        <div class="lucky-wheel">
            <div class="lucky-title"></div>
            <div class="wheel-main">
                <div class="wheel-pointer-box">
                     <div class="wheel-pointer" @click="rotate_handle()" :style="{transform:rotate_angle_pointer,transition:rotate_transition_pointer}"></div>
                </div>
                <div class="wheel-bg" :style="{transform:rotate_angle,transition:rotate_transition}">
                    <div class="prize-list">
                        <div class="prize-item" v-for="(item,index) in prize_list" :key="index">
                            <!--<div class="prize-pic">-->
                                <!--<img :src="item.icon">-->
                            <!--</div>-->
                            <!--<div class="prize-count" v-if="item.count">-->
                                <!--{{item.count}}-->
                            <!--</div>-->
                            <div class="prize-type">
                                {{item.prizeName}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="main" style="border: none;">
          <div class="lottery_ticket" >当前积分：{{integral}}，抽奖一次消耗10积分。</div>
           <!-- <div class="tip">
                <div class="tip-title">活动规则</div>
                <div class="tip-content">
                    <p> 1.抽奖一次消耗10积分</p>
                </div>
            </div>-->
        </div>
        <div class="toast" v-show="toast_control">
            <div class="toast-container">
                <!--<img :src="toast_pictrue" class="toast-picture">-->
                <div class="close" @click="close_toast()"></div>
                <div class="toast-title">
                  {{prizeContent}}
                </div>
                <div class="toast-btn" v-if="prizeType == 1">
                    <div class="toast-cancel"  @click="prize()">去领奖</div>
                </div>
            </div>
        </div>
        <div class="toast-mask" v-show="toast_control"></div>
    </div>
</template>
<script>
  import {Toast} from 'vant'
export default {
  data() {
    return {
      prizeContent:'',
      prizeType:'',
      easejoy_bean: 0, //金豆
      lottery_ticket: '', //抽奖次数
      prize_list: [], //奖品列表
      toast_control: false, //抽奖结果弹出框控制器
      hasPrize: false, //是否中奖
      start_rotating_degree: 0, //初始旋转角度
      rotate_angle: 0, //将要旋转的角度
      start_rotating_degree_pointer: 0, //指针初始旋转角度
      rotate_angle_pointer: 0, //指针将要旋转的度数
      rotate_transition: "transform 6s ease-in-out", //初始化选中的过度属性控制
      rotate_transition_pointer: "transform 12s ease-in-out", //初始化指针过度属性控制
      click_flag: true, //是否可以旋转抽奖
      i: 0, //测试使用
      newi:0,
      activitiyInfo:'',
      prizeIndex:'',
      prizeInfo:'',
      integral:''
    };
  },
  beforeRouteEnter (to, from, next) {
    window.document.title = to.meta.title
    next()
  },
  created() {
    this.init_prize_list();
  },
  computed: {
    toast_title() {
      return this.hasPrize
//        ? "恭喜您，获得" +this.prize_list[this.newi].count + ' ' + this.prize_list[this.newi].prizeName
        ? "恭喜您，获得"  + this.prize_list[this.newi].prizeName
        : "未中奖";
    },
    toast_pictrue() {
      return this.hasPrize
        ? require("../assets/img/activity/congratulation.png")
        : require("../assets/img/activity/sorry.png");
    }
  },
  methods: {
    //此方法为处理奖品数据
    init_prize_list(list) {},
    rotate_handle() {
      this.rotating();
      this.i = this.i + 2;
    },
    rotating(index) {
//      Consume
      this.$store.dispatch('Consume', {activId:this.activitiyInfo.activId}).then(res=>{
          if(res.returnCode == '000000'){
//            this.integral = (parseFloat(this.integral) - parseFloat(10)).toFixed(2)
            var _this = this
            this.$store.dispatch('GetUserInfo', {}).then(res=>{
              _this.integral = res.returnObject.integral
              _this.lottery_ticket =  parseInt(_this.integral/10)
            })
          }else{
            Toast.fail('出错了')
            return false
          }

      })
      if(this.lottery_ticket <=0){
        Toast.fail('今日无抽奖次数可用')
      }else{
        if (!this.click_flag) return;
        this.lottery_ticket = this.lottery_ticket - 1;
//        $(".wheel-bg").addClass(".wheel-bg-reset")
        var type = 0; // 默认为 0  转盘转动 1 箭头和转盘都转动(暂且遗留)
        var during_time = 5; // 默认为1s
        var random = Math.floor(Math.random() * 7);
        var result_index = index || random; // 最终要旋转到哪一块，对应prize_list的下标
        console.log('选择的奖品' +   result_index)
        var result_angle = [337.5, 292.5, 247.5, 202.5, 157.5, 112.5, 67.5, 22.5]; //最终会旋转到下标的位置所需要的度数
        var rand_circle = 6; // 附加多转几圈，2-3
        this.click_flag = false; // 旋转结束前，不允许再次触发
        if (type == 0) {
          // 转动盘子
          var rotate_angle =
            this.start_rotating_degree +
            rand_circle * 360 +
            result_angle[result_index] -
            this.start_rotating_degree % 360;
          this.start_rotating_degree = rotate_angle;
          this.rotate_angle = "rotate(" + rotate_angle + "deg)";
          for(var i =0;i<result_angle.length;i++){
            if((rotate_angle -rand_circle * 360)== result_angle[i]){
              this.newi = i
              console.log("重新赋值的i" + i)
            }
          }
          // // //转动指针
          // this.rotate_angle_pointer = "rotate("+this.start_rotating_degree_pointer + 360*rand_circle+"deg)";
          // this.start_rotating_degree_pointer =360*rand_circle;
          var that = this;
          // 旋转结束后，允许再次触发
          setTimeout(function() {
            that.click_flag = true;
//          that.game_over(this.i);
            this.newi = result_index
            that.game_over(result_index);
          }, during_time * 1000 + 1500); // 延时，保证转盘转完
        } else {
          //
        }
      }

    },
    game_over(index) {
      this.toast_control = true;
      this.hasPrize = this.prize_list[index].isPrize

      this.prizeContent = '恭喜您获得' + this.prize_list[index].prizeName
      this.prizeInfo = this.prize_list[index]
      this.prizeType = this.prizeInfo.prizeType
      if(this.prizeType == '0'){
        let params = {
          activId:this.activitiyInfo.activId,
          prizeId:this.prizeInfo.prizeId,
          prizeType:this.prizeInfo.prizeType,
          integral:10
        };
        this.$store.dispatch('UploadAwardInfo',params).then(response=>{
          Toast.success('提交成功')
          var _this = this
          this.$store.dispatch('GetUserInfo', {}).then(res=>{
            _this.integral = res.returnObject.integral
            _this.lottery_ticket =  parseInt(_this.integral/10)
          })
        })
      }
      console.log(this.prizeType)
    },
    //关闭弹窗
    close_toast() {
      this.toast_control = false;
    },
    prize(){
        this.$router.push({path:'/activityAdr',query:{prizeInfo:JSON.stringify(this.prizeInfo),activId:this.activitiyInfo.activId}})
    }
  },
  mounted: function () {
    document.getElementById("activity").style.minHeight = document.documentElement.clientHeight + 'px'

    if(this.$route.query.token !=null){
      window.sessionStorage.setItem('MemberToken',this.$route.query.token)
    }
    this.$store.dispatch('GetUserInfo', {}).then(res=>{
      this.integral = res.returnObject.integral
      this.lottery_ticket =  parseInt(this.integral/10)
    })

    this.$store.dispatch('GetActivityList', {pageNum:1}).then(res=>{
        if(res.returnCode == '000000'){
            for(var i=0;i<res.returnObject.length;i++){
                if(res.returnObject[i].activType == 0){
                  this.activitiyInfo = res.returnObject[i]
                }
            }
          var _this = this
          this.$store.dispatch('GetPrizeList', {activId:this.activitiyInfo.activId,pageNum:1}).then(res=>{
            this.prize_list = res.returnObject
            for(var i =0;i<this.prize_list.length;i++){
              this.prize_list[i].isPrize = 1
            }
            _this.prize_list.push({
              activId: '',
              chance: '',
              content:'',
              createTime:'',
              createUser:'',
              images:'',
              prizeDesc:'',
              prizeId:'',
              prizeIntegral:'',
              prizeNum:'',
              prizeType:'',
              prizeName: "下次再努力",
              isPrize: 0
            })
            console.log(_this.prize_list)
          })




        }
    })
  }
};
</script>
<style scoped>
.container {
  width: 100%;
}
.lucky-wheel {
  width: 100%;
  /*height: 31.5625rem;*/
  background: rgb(252, 207, 133) url("../assets/img/activity/color_pillar.png") no-repeat
    center bottom;
  background-size: 100%;
  /*padding-top: 1.5625rem;*/
}
.lucky-title {
  width: 100%;
  height: 230px;
  background: url("../assets/img/activity/lucky_title.png") no-repeat center top;
  background-size: 100%;
  margin-bottom: 50px;
}
.wheel-main {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.wheel-bg {
  width: 590px;
  height: 590px;
  background: url("../assets/img/activity/draw_wheel.png") no-repeat center top;
  background-size: 100%;
  color: #fff;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  transition: transform 3s ease;
}
.wheel-bg-reset{
  /*transition: transform 6s ease-in-out; */
  transform: rotate(0deg);
}
.wheel-pointer-box {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 100;
  transform: translate(-50%, -60%);
  width: 170px;
  height: 170px;
}
.wheel-pointer {
  width: 170px;
  height: 170px;
  background: url("../assets/img/activity/draw_btn.png") no-repeat center top;
  background-size: 100%;
  transform-origin: center 60%;
}
.wheel-bg div {
  text-align: center;
}
.prize-list {
  width: 100%;
  height: 100%;
  position: relative;
}
.prize-list .prize-item {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
}
.prize-list .prize-item:first-child {
  top: 60px;
  left: 3rem;
  transform: rotate(20deg);
}
.prize-list .prize-item:nth-child(2) {
  top: 1.8rem;
  left: 4rem;
  transform: rotate(67deg);
}
.prize-list .prize-item:nth-child(3) {
  top: 3.4rem;
  left: 4rem;
  transform: rotate(-250deg);
}
.prize-list .prize-item:nth-child(4) {
  top: 5rem;
  left: 3rem;
  transform: rotate(-210deg);
}
.prize-list .prize-item:nth-child(5) {
  top: 5.2125rem;
  left: 1.4rem;
  transform: rotate(-160deg);
}
.prize-list .prize-item:nth-child(6) {
  top: 3.7rem;
  left: 0.1rem;
  transform: rotate(-111deg);
}
.prize-list .prize-item:nth-child(7) {
  top: 2.1rem;
  left: 0.3rem;
  transform: rotate(-69deg);
}
.prize-list .prize-item:nth-child(8) {
  top: 0.8rem;
  left: 1.4rem;
  transform: rotate(-20deg);
}
.prize-item {
  width: 250px;
  height: 150px;
}
.prize-pic img {
  width: 130px;
  height: 80px;
}
.prize-count {
  font-size: 20px;
}
.prize-type {
  font-size: 18px;
}
.main {


}
.main-bg {

}
.bg-p {
  width: 100%;
  height: 2.95rem;
  background: rgb(252, 207, 133);
}
.content {
  width: 100%;
  height: 250px;
  font-size: 28px;
  color: #ffeb39;
  margin-top: 170px;
}
.content div {
  text-align: center;
  padding-top: 20px;
  font-size: 30px;
}
.tip {
  position: relative;
  margin: 2.5rem auto 0;
  /*border: 1px solid #fbc27f;*/
}
.tip-title {
  position: absolute;
  top: -1rem;
  left: 50%;
  transform: translate(-50%, 0);
  font-size: 28px;
  color: #fccc6e;
  background: rgb(243, 109, 86);
  padding: 0.3125rem 0.625rem;
}
.tip-content {
  padding: 30px;
  font-size: 28px;
  color: #fff8c5;
  line-height: 1.5;
}
.toast-mask {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 10000;
  width: 100%;
  height: 100%;
}
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 20000;
  transform: translate(-50%, -50%);
  width: 80%;
  background: #fff;
  border-radius: 10px;
  background-color: rgb(252, 244, 224);
  margin:0 auto;
}
.toast-container {
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px dotted #fccc6e;
}
.toast-picture {
  position: absolute;
  top: -6.5rem;
  left: -1.5rem;
  width: 18.75rem;
  height: 8.5625rem;
}
.toast-pictrue-change {
  position: absolute;
  top: -1.5rem;
  left: -1.375rem;
  width: 17.5rem;
  height: 3.125rem;
}
.toast-title {
  padding: 50px 0;
  font-size: 18px;
  color: #fc7939;
  text-align: center;
}
.toast-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.9375rem;
}
.toast-btn div {
  background-image: -moz-linear-gradient(
    -18deg,
    rgb(242, 148, 85) 0%,
    rgb(252, 124, 88) 51%,
    rgb(252, 124, 88) 99%
  );

  background-image: -ms-linear-gradient(
    -18deg,
    rgb(242, 148, 85) 0%,
    rgb(252, 124, 88) 51%,
    rgb(252, 124, 88) 99%
  );
  background-image: -webkit-linear-gradient(
    -18deg,
    rgb(242, 148, 85) 0%,
    rgb(252, 124, 88) 51%,
    rgb(252, 124, 88) 99%
  );
  box-shadow: 0px 4px 0px 0px rgba(174, 34, 5, 0.7);
  width: 200px;
  height: 100px;
  border-radius: 8px;
  text-align: center;
  line-height: 100px;
  color: #fff;
}
.close {
  position: absolute;
  top: -45px;
  right: -45px;
  width: 90px;
  height: 90px;
  background: url("../assets/img/activity/close_store.png") no-repeat center top;
  background-size: 100%;
}
  .lottery_ticket{
    display: flex;
    justify-content: center;
    padding-top: 30px;
    color: #fff;
    font-size: 28px;
  }
</style>

