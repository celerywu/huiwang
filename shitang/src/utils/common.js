var num = '0'
this.$store.dispatch('GetSelectedProductList').then((res)=>{
  for(var i=0;i< res.returnObject.length;i++){
    res.returnObject[i].checked = false
    num = parseInt(num) + parseInt(res.returnObject[i].proNum)
  }
  if(parseInt(num) > 0){
    $(".num").text(num)
  }else{
    $(".num").hide()
  }
});
