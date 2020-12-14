<template>
    <div id = 'details'>
        <div v-for='(item,index) of arr' :key='index' @click='chakan(item.operationId)'>
       <div class='details-header' >
          <img src="@/assets/img/face.png" alt="" class='details-header-img'>
          <span class='details-header-title'>
              <div class='title-head'>大熊</div>
              <div class='title-time'>{{item.result.timeTips}}</div>
          </span>
       </div>
       <div class='details-contain'>
           <img :src="`http://localhost:3000/discover/${item.result.imgUrl}.jpg`" alt="" style='borderRadius:8px' class='details-contain-img' >
        <span class='backicon'><p><img src="@/assets/img/eye.png" alt="">{{item.result.pageViewCount}}</p><p>|</p><p><img src="@/assets/img/love.png" alt="">{{item.result.praiseCount}}</p></span>
        <p  class='details-contain-content'>{{item.result.content}}</p> 
        <p class='suppermore'>更多...</p>
        </div> 
        </div>
        <a class='fanhui'  @click='back'  v-show='btnfanhui' ><img src="@/assets/img/fanhuidingbu.png" alt=""></a>
       
     </div>
</template>;

<script>
import { reqdiscover } from "@/network/Reqdiscover.js";
export default {
  name:'das',
  components: {},
  data() {
    return {
      arr: [],
      btnfanhui: false
    };
  },
  created() {
    reqdiscover().then(res => {
      res.forEach(item => {
        this.arr.push(item);
      });
    });
  },
  mounted() {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop >= 800) {
        this.btnfanhui = true;
      } else {
        this.btnfanhui = false;
      }
    });
  },
  methods: {
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
    chakan(operationId) {
        this.$router.push({
            name:'saypage',
            params:{id:operationId}
        })
    }
  },
  
  beforeRouteLeave (to, from, next) {
      if(to.name!=='saypage'){
        this.$route.meta.keepAlive = false
          next()
      }
     else(to.name=='saypage')
     {
       this.$route.meta.keepAlive=true
       next()
     }
  }

};
</script>
 <style scoped lang='less'>
#details {
  width: 94vw;

  //  background-color: #bfa;
}
.details-header {
  margin-top: 2vh;
}
.details-header-img {
  display: inline-block;
  width: 30px;
  height: 30px;
}
.details-header-title {
  display: inline-block;
  margin-left: 10px;
  font-size: 14px;
  width: 78px;
  height: 40px;
  .title-head {
    margin: 3px;
    font-weight: bold;
  }
  .title-time {
    margin: 3px;
    font-size: 12px;
  }
}
.details-contain {
  width: 94vw;
  position: relative;
  background-color:#F5F5F9;
  .details-contain-img {
    display: inline-block;
    width: 94vw;
    height: 180px;
    border-radius: 8px;
  }
  .details-contain-content {
    display: inline-block;
    width: 94vw;
    margin-top: 2vh;
    font-size: 14px;
    max-height: 95px;
    text-overflow: ellipsis;
    overflow: hidden;
    word-wrap: break-word;
    letter-spacing: 1px;
    line-height: normal;
  }
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
.backicon {
  position: absolute;
  right: 2vw;
  top: 23vh;
  display: inline-block;
  height: 20px;
  color: #fff;
  font-size: 12px;
  background-color: rgba(93, 95, 75, 0.81);
  border-radius: 5px;
  display: flex;
  margin: 0;
  padding: 0;
  vertical-align: center;
  justify-content: space-between;
  p {
    display: flex;
    vertical-align: center;
    justify-content: space-between;
    padding: 4px;
    text-align: center;
    img {
      margin-right: 5px;
      width: 18px;
      height: 14px;
    }
  }
}
.suppermore {
  color: #23b7b7;
  font-size: 12px;
}
</style>