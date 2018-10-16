<template>
  <div>
    <van-area :area-list="areaList"  @confirm="confirmArea" />
    <!--<input type="text" id='city-picker'/>-->
  </div>
</template>

<script>
  import { Area } from 'vant';
  Vue.use(Area);
  import province_list from '../assets/common/js/area'
  export default {
    data() {
      return {
        areaList:''
      }
    },
    created() {

    },
    methods: {
      confirmArea:function (res) {
        console.log(res)
      }
    },
    mounted() {
        this.areaList = province_list

    }
  }

</script>


