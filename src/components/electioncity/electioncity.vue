<template>
  <div id="app">
    <best-city ref="vuecity" @closeChooseCity="getCity"></best-city>
  </div>
</template>;

<script>
export default {
  components: {},
  data() {
    return {
      searchvalue: "",
    };
  },
  mounted() {
    this.showCity();
   console.log(this.$route.params.id);
   
    
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    getCity(val) {
      if(this.$route.params.id==1)
      {this.$store.commit("initVla", val);}
      else(this.$route.params.id==2)
      {
        this.$store.commit('endVla',val)
      }
      this.$router.push({ name: "homemain" });
    },
    showCity() {
      this.$refs.vuecity.show();
    },
  },
 
};
</script>
 <style scoped lang='less'>
.content {
  background: #eee;
}
</style>