<template>
    <div class = 'content' >
   
     <!-- <van-sticky>
         <van-nav-bar title='选择城市'
         left-arrow>
            <van-search  placeholder="请输入搜索关键词"></van-search>
         </van-nav-bar>
     </van-sticky> -->
      <van-index-bar  @index-bar-sidebar-z-index='999'  >
          <van-index-anchor index="A">标题1</van-index-anchor>
               <van-cell title="文本" />
               <van-cell title="文本" />
               <van-cell title="文本" />

           <van-index-anchor index="B">标题2</van-index-anchor>
                <van-cell title="文本" />
                <van-cell title="文本" />
                <van-cell title="文本" />
            <van-index-anchor index="C">标题c</van-index-anchor>
                <van-cell title="文本" />
                <van-cell title="文本" />
                <van-cell title="文本" />
            <van-index-anchor index="D">标题d</van-index-anchor>
                <van-cell title="文本" />
                <van-cell title="文本" />
                <van-cell title="文本" />

            <van-index-anchor index="E">标题e</van-index-anchor>
                <van-cell title="文本" />
                <van-cell title="文本" />
                <van-cell title="文本" />
             <van-index-anchor index="F">标题f</van-index-anchor>
               <van-cell title="文本" />
               <van-cell title="文本" />
               <van-cell title="文本" />

           <van-index-anchor index="G">标题g</van-index-anchor>
                <van-cell title="文本" />
                <van-cell title="文本" />
                <van-cell title="文本" />
            <van-index-anchor index="H">标题h</van-index-anchor>
                <van-cell title="文本" />
                <van-cell title="文本" />
                <van-cell title="文本" />
            <van-index-anchor index="I">标i</van-index-anchor>
                <van-cell title="文本" />
                <van-cell title="文本" />
                <van-cell title="文本" />

            <van-index-anchor index="J">标题j</van-index-anchor>
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
      searchvalue: ""
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    }
  }
};
</script>
 <style scoped lang='less'>
.content{
background: #eee;
}
</style>