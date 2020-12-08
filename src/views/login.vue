<template>
    <div id = 'login'>
    <van-cell @touchstart.native.stop="show = true" >
        <van-field v-model="tel" type="tel" label="手机号" />
        <van-field v-model="number" type="number" label="账户" />        
        <van-field v-model="password" type="password" label="密码" />
    </van-cell>
<van-number-keyboard
  :show="show"
  @blur="show = false"
  @input="onInput"
  @delete="onDelete"
/>
     </div>
</template>;

<script>
export default {
  components: {},
  data() {
    return {
      tel: "",
      text: "",
      digit: "",
      number: "",
      password: "",
      show: true,
    }
  },
    methods: {
    onInput(value) {
        this.tel+=value
        
     
    },
    onDelete() {
      this
    },
  },
};
</script>
 <style>
</style>