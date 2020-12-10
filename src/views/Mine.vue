<template>
    <div id = 'mine'>
            <div class='mine-header'>头部</div>
             <div class='mine-contain'>
                 <div class='mine-contain-first'>
                      我的订单
                 </div>
                 <div class='mine-contain-sconed'>
                   <span class="mine-contain-sconed-c">1</span>
                   <span class="mine-contain-sconed-c">1</span>
                   <span class="mine-contain-sconed-c">1</span>
                   <span class="mine-contain-sconed-c">1</span>
                   <span class="mine-contain-sconed-c">1</span>
                 </div>
             </div>
               <div class='mine-contain'>
                 <div class='mine-contain-first'>
                      我的订单
                 </div>
                 <div class='mine-contain-sconed'>
                   <span class="mine-contain-sconed-c">1</span>
                   <span class="mine-contain-sconed-c">1</span>
                   <span class="mine-contain-sconed-c">1</span>
                   <span class="mine-contain-sconed-c">1</span>
                   <span class="mine-contain-sconed-c">1</span>
                 </div>
             </div>
               <div class='mine-contain'>
                 <div class='mine-contain-first'>
                      我的订单
                 </div>
                 <div class='mine-contain-sconed'>
                   <span class="mine-contain-sconed-c">1</span>
                   <span class="mine-contain-sconed-c">1</span>
                   <span class="mine-contain-sconed-c">1</span>
                   <span class="mine-contain-sconed-c">1</span>
                   <span class="mine-contain-sconed-c">1</span>
                 </div>
             </div>
     </div>
</template>;

<script>
export default {

  components: {},
  data() {
    return {
    };
  }
};
</script>
 <style lang='less' scoped>
 #mine{
   padding: 0;
   margin: 0;
   width:100vw;
   background-color: pink
   
 }
 .mine-header{
   width:100vw;
   height:22vh;
   background-color: #bfa;
 }
 .mine-contain{
   width:96vw;
   height:16vh;
   background-color: green;
   margin:1vh auto; 
 }
 .mine-contain-first{
   font-size:14px  ;
   line-height: 3vh;
   height: 3vh;
   border-bottom:1px solid gray
 }
 .mine-contain-sconed{
   display: flex;
   justify-content: space-around;
   font-size:12px;
   height:13vh;
   .mine-contain-sconed-c{

     height: 9vh;
     width:10vw;
     margin-top:2vh;
     background-color: #fff;
   }
 }
</style>