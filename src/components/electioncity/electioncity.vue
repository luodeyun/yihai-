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
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    getCity(val) {
      this.$router.push({ name: "homemain" });
      this.$store.commit("setVla", val);
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