<template>
    <div id ='recommendxq'>
          <header v-if='obj.element'> 
              <span class='icon' @click='backgo'><van-icon name="arrow-left" /></span>
              <span><img :src="obj.element.headImgUrl" alt=""></span>
              <span class='title'>{{obj.element.gigi}}</span>
          </header>
          <img :src="obj.imgUrl" alt="" class='topimg'>
         <div class='contain'>
              <p class='contain-title'>{{obj.summary}}</p>
           <div v-html='obj.content'></div>
               <p class='bottomtime'>发布于2020-12-17</p>
               <p class='bottomend'>——The End——</p>
         </div>
           <a class='fanhui'  @click='back'  v-show='btnfanhui' ><img src="@/assets/img/fanhuidingbu.png" alt=""></a>
     </div>
</template>;

<script>
import    {recommendxq }from  '@/network/ReqImg'
export default {
  components: {},
  data () {
      return {
         obj:{}      ,
        btnfanhui : false
         
      }
  },
  methods: {
      backgo(){
this.$router.go(-1)
      },
        back() {
      let timer;
      timer = setInterval(function() {
        var scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        var ispeed = Math.floor(scrollTop / 6);
        if (scrollTop === 5) {
          clearInterval(timer);
        }
        document.documentElement.scrollTop = document.body.scrollTop =
          scrollTop - ispeed;
      }, 30);
    },
  },
  mounted () {
      let id =this.$route.query.id
      console.log(this.$route);
      
      recommendxq(id).then(res=>{
       this.obj = res
      }),
       window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop >= 800) {
        this.btnfanhui = true;
      } else {
        this.btnfanhui = false;
      }
       
    });
  }
};
</script>
 <style scoped lang='less'>
header {
  width: 100vw;
  height: 5vh;
  padding: 2vw;
  position: fixed;
  left: 0;
  top: 0;

  background-color: #fff;
  img {
    width: 7vw;
    height: 4vh;
    vertical-align: middle;
  }
  .icon {
    display: inline-block;
    line-height: 4vh;
    height: 4vh;
    margin-right: 1vh;
  }
  .title {
    margin-left: 1vh;
    font-size: 13px;
  }
  //头部
}
.contain {
  width: 96vw;
  margin: 0 2vw;
}
.topimg {
  margin-top: 5vh;
  width: 100vw;
  height: 30vh;
}
.contain-title {
  height: 6vh;
  line-height: 6vh;
  font-size: 14px;
  font-weight: 700;
  border-bottom: 1px solid seashell;
}
.bottomtime{
    margin:2vh 0;
    font-size: 14px;
    color: #A59999;
 }
 .bottomend{
     display: flex;
     justify-content: center;
     align-items: center;
     font-size: 12px;
     color: #A59999;
     margin-bottom: 2vh;
 }
 .fanhui {
  position: fixed;
  left: 85vw;
  bottom: 20vh;

  display: inline-block;
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 20px;
  border: 1px solid gray;
  text-align: center;
  img {
    margin-top: 2px;
    width: 40px;
    height: 35px;
  }
}
</style>