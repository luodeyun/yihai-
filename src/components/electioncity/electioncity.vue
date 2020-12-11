<template>
    <div id = 'app' >
       <div class='iconHeader'>
            <van-icon name="arrow-left" class='arrow-left' @click='goback' /> 
            <van-search  v-model="searchvalue" placeholder="搜索城市或景点"     class="icon"  background="#bfa" />
        </div>
       
 <van-index-bar :index-list="indexList" class='Main'>
  <van-index-anchor index="1">标题1</van-index-anchor>
  <van-cell title="文本" />
  <van-cell title="文本" />
  <van-cell title="文本" />
  <van-index-anchor index="2">标题2</van-index-anchor>
  <van-cell title="文本" />
  <van-cell title="文本" />
  <van-cell title="文本" />
  <van-index-anchor index="3">标题3</van-index-anchor>
  <van-cell title="文本" />
  <van-cell title="文本" />
  <van-cell title="文本" />

  <van-index-anchor index="4">标题4</van-index-anchor>
  <van-cell title="文本" />
  <van-cell title="文本" />
  <van-cell title="文本" />
  <van-index-anchor index="5">标题5</van-index-anchor>
  <van-cell title="文本" />
  <van-cell title="文本" />
  <van-cell title="文本" />

  <van-index-anchor index="6">标题2</van-index-anchor>
  <van-cell title="文本" />
  <van-cell title="文本" />
  <van-cell title="文本" />
  <van-index-anchor index="7">标题1</van-index-anchor>
  <van-cell title="文本" />
  <van-cell title="文本" />
  <van-cell title="文本" />

  <van-index-anchor index="8">标题2</van-index-anchor>
  <van-cell title="文本" />
  <van-cell title="文本" />
  <van-cell title="文本" />
</van-index-bar>
     </div>
</template>;

<script>
export default {
  components: {},
  data() {
    return {
      indexList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,1, 2, 3, 4, 5, 6, 7, 8, 9, 10,1, 2, 3, 4, 5, 6, 7, 8, 9, 10,1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      searchvalue: ""
    };
  },
  methods: {
      goback(){
          this.$router.go(-1)
      }
  }
};
</script>
 <style scoped>
 .icon{
 width:320px;
padding: 0;
margin-right: 5px
 }
 .arrow-left{
     width:30px;
     height: 30px;
     float: left;
     text-align: center;
     line-height: 30px
 }
 .iconHeader{
     position: fixed ;
     top:0;
     left:0;
     width:100%;
     height: 40px;
     position: fixed;
     top:0px;
     left:0;
     z-index:999;
     padding-top:5px;
     background-color: #fff;
 }
.Main{
    margin-top:40px; 
    
}
</style>