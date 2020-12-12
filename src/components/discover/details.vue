<template>
    <div id = 'details'>
        <div v-for='item of arr' :key='item.id'>
       <div class='details-header' >
          <img src="@/assets/img/face.png" alt="" class='details-header-img'>
          <span class='details-header-title'>
              <div class='title-head'>大熊</div>
              <div class='title-time'>{{item.timeTips}}</div>
          </span>
       </div>
       <div class='details-contain'>
           <img :src="`http://localhost:3000/discover/${item.imgUrl}.jpg`" alt="" style='borderRadius:5px' class='details-contain-img' >
        <p  class='details-contain-content'>{{item.content}}</p> 
        </div> </div>
     </div>
</template>;

<script>
import {reqdiscover}from '@/network/Reqdiscover.js'
    export default{ 
          components:{
          },
          data () {
              return {
                  arr:[]
              }
          },
         created () {
                 reqdiscover().then((res)=>{
                 res.forEach((item) => {
                   console.log(item.result);
                   
                 this.arr.push(item.result);
                 });
                 setTimeout(()=>{console.log(this.arr);
                 },1500)
                 
        })
    
          }
     }
 </script>
 <style scoped lang='less'>
 #details{
     width: 96vw;
     height:800px;
    //  background-color: #bfa;
 }
 .details-header{
     margin-top: 2vh
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
    width:78px;height:40px;
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
    
    // background-color: aqua;
    .details-contain-img{
    display: inline-block;
    width:96vw;
    height:180px;
    border-radius: 8px;
    }
    .details-contain-content{
        display: inline-block;
        width:96vw;
        margin-top:2vh; 
        font-size: 14px;
        word-wrap: break-word;
    }
}
</style>