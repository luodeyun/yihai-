<template>
    <div id = 'details'>
       <div class='details-header' style='overflow:hidden'>
          <img src="@/assets/img/face.png" alt="" class='details-header-img'>
          <span class='details-header-title'>
              <div class='title-head'>大熊</div>
              <div class='title-time'>2020-00-12</div>
          </span>
       </div>
       <div class='details-contain'>
           <img src="" alt="" style='borderRadius:5px' class='details-contain-img' >
        <p  class='details-contain-content'>1s544444444444444444444444444444444444444444444444444444444</p> 
        </div> 
     </div>
</template>;

<script>
    export default{ 
          components:{
          }
     }
 </script>
 <style scoped lang='less'>
 #details{
     width: 96vw;
     height:800px;
     background-color: #bfa;
 }
 .details-header-img{
     display: inline-block;
     width:30px;
     height:30px;
     }
.details-header-title{
    display: inline-block;
    margin-left:10px; 
    font-size: 14px;
    width:78px;height:70px;
    .title-head{
        margin:3px;
        font-weight: bold;
    };
    .title-time{
        margin:3px;
        font-size:12px;
    }
}
.details-contain{
    width:96vw;
    height:300px;
    background-color: aqua;
    .details-contain-img{
    display: inline-block;
    width:96vw;
    height:180px;
    border-radius: 8px;
    }
    .details-contain-content{
        display: inline-block;
        width:96vw;
        height:120px;
        margin-top:2vh; 
        word-wrap: break-word;
    }
}
</style>