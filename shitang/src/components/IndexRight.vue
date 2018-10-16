<template>
  <div class="index-right">
    <div class="item">
      <div class="item-left">
        <img src="https://image8.wbiao.co/mall/e85078b36b744ef581e219a1b7c67a6a.jpg" alt="">
      </div>
      <div class="item-right">
        <div class="txt1">讯飞语记</div>
        <div class="txt2">语音转文字</div>
        <div class="txt3">
          ¥ 159
          <span class="cart"></span>
        </div>
      </div>
    </div>

    <div class="item">
      <div class="item-left">
        <img src="https://image8.wbiao.co/mall/e85078b36b744ef581e219a1b7c67a6a.jpg" alt="">
      </div>
      <div class="item-right">
        <div class="txt1">讯飞语记</div>
        <div class="txt2">语音转文字</div>
        <div class="txt3">
          ¥ 159
          <span class="cart"></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default{
	data(){
		return{

		}
	},
  mounted(){
	    console.log(this.$route.params)
    this.fetchData(this.$route.params.id);
  },
  watch:{
    $route(to){
      console.log(to);
      var reg=/catgory\/\d+/;
      if(reg.test(to.path)){
        var categotyId=this.$route.params.id || 0;
        this.fetchData(categotyId);
      }
    }
  },
	methods:{
    fetchData(id){
      this._data.leftDatas = [
        {

        }
      ]
    }
	}
}
</script>
<style lang="scss">
.index-right{
  vertical-align: top;
  display: inline-block;
  width: 550px;
  .item{
    padding-left: 15px;
    padding-top: 15px;
    font-size: 0;
    .item-left{
      display: inline-block;
      padding-left: 12px;
      img{
        width: 150px;
        height: 150px;
      }
    }
    .item-right{
      display: inline-block;
      vertical-align: top;
      padding-left: 12px;
      width: 60%;
      .txt1{
        font-size: 30px;
        color: #212121;
        padding-bottom: 12px;
      }
      .txt2{
        font-size: 24px;
        color: #888;
        padding-bottom: 21px;
      }
      .txt3{
        font-size: 30px;
        color: #ce281e;
        .cart{
          float: right;
          width: 44px;
          height: 44px;
          display: inline-block;
          background: url('../assets/img/mall/cart.png') no-repeat;
          background-size: contain;
        }
      }
    }
  }
}

</style>
