<template>
    <div id = 'electioncar'>
        <van-nav-bar
             title="请选择您的车型"
             left-text="返回"
  
             left-arrow
             @click-left="onClickLeft"/>       
     
         <van-sidebar v-model="activeKey" >
            <van-sidebar-item title="推荐"  />
            <van-sidebar-item title="经济型" />
            <van-sidebar-item title="舒适性" />
            <van-sidebar-item title="精英型" />
            <van-sidebar-item title="SUV" />
            <van-sidebar-item title="5-15座商务" />
            <van-sidebar-item title="舒适性" />
            <van-sidebar-item title="舒适性" />
            <van-sidebar-item title="舒适性" />
         </van-sidebar>
           <div id='container' v-if='activeKey==0'>
       <p>0</p>
       <p>0
       <p>0</p>
       <p>0</p>
       <p>0</p>
       <p>0</p>
       <p>0</p>
       <p>0</p>
       <p>0</p>
       <p>0</p>
       <p>0</p>
    </div>
    <div id='container' v-if='activeKey==1'>
       <p>1</p>
       <p>1</p>
       <p>1</p>
       <p>1</p>
       <p>1</p>
       <p>1</p>
       <p>1</p>
       <p>1</p>
       <p>1</p>
       <p>1</p>
       <p>1</p>
    </div>
      <div id='container' v-if='activeKey==2'>
       <p>2</p>
       <p>2</p>
       <p>2</p>
       <p>2</p>
       <p>2</p>
       <p>2</p>
       <p>2</p>
       <p>2</p>
       <p>2</p>
       <p>2</p>
       <p>2</p>
    </div>
      <div id='container' v-if='activeKey==3'>
       <p>2</p>
       <p>2</p>
       <p>2</p>
       <p>2</p>
       <p>2</p>
       <p>2</p>
       <p>2</p>
       <p>2</p>
       <p>2</p>
       <p>2</p>
       <p>2</p>
    </div>

     </div>
</template>;

<script>
export default {
  components: {},
  data() {
    return {
     activeKey: 0,
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>
 <style scoped lang='less'>
 #container{
     position: absolute;
     top:7vh;
     left:80px
 }
</style>