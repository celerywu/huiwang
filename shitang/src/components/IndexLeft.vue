<template>

<div class="index-left">
  <ul class="childbox">
      <li class="" v-for="item in leftDatas">
        <router-link :to="'/index/'+item.category_id">
        {{item.category_id}} -- {{item.category_name}}
        </router-link>
      </li>
  </ul>
</div>

</template>
<script>
export default{
	data(){
		return{
			leftDatas:[
				{
				    category_id:'1',
            category_name:'111'
				},
				{
            category_id:'2',
            category_name:'2222'
				}
			]
		}
	},
	mounted(){
//		this.getLeftDatas();
	},
	methods:{
//		getLeftDatas(){
//			let _this = this;
//			_this.$http.get('/category').then((res)=>{
//				_this.leftDatas = res.data;
//			},(err)=>{
//				console.log(err);
//			})
//		},
	}
}
</script>
<style lang="scss">
.index-left{
  height: 100%;
  display: inline-block;
  .childbox{
    li{
      width: 200px;
      height: 110px;
      line-height: 110px;
      font-size: 28px;
      color: #333;
      background-color: #f7f7f7;
      text-align: center;
      margin-bottom: 2px;
    }
    .select{
      color: #ce182e;
      background-color: #fff;
    }
  }
}

</style>
