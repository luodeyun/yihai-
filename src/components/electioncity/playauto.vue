<template>
    <div id = 'palyauto'>
        <van-nav-bar class='navbar'
             title="车型视频"
             left-text="返回"
             left-arrow
             @click-left="back"/> 
           <video :src="url" class='video' controls='controls'></video>
           <span class='title'>{{title}}</span>
     </div>
</template>;

<script>
    export default{ 
          components:{

          },
          data(){
              return {
                  url:'',
                  title:''
              }
          },
          methods: {
              back(){
                  this.$router.go(-1)
              }
          },
          mounted() {
           this.url=this.$route.query.id;
           this.title=this.$route.query.title;
              
          },
     }
 </script>
 <style scoped lang='less'>
 #palyauto{
     width:100vw;
     height: 100vh;
     background-color: rgb(14, 13, 13);
 }
 .video{
     position: absolute;
     top:22vh;
     width: 100vw;
     height: 40vh;;
 } 
 .navbar {
  background-color: #29b7b7;
  color: #fff;
  position: fixed;
  width: 100vw;
  left: 0;
  top: 0;
}
 .title{
     position: absolute;
     top:90vh;
     left: 35vw;
     color: #fff;
     display: inline-block;
     width:30vw;
     height: 10vh;
     text-align: center
 }
</style>