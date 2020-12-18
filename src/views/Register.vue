<template>
  <div class="container" > 		
<!-- 在页面内添加对应的节点 -->
<van-notify id="van-notify" />
  <van-nav-bar style="background-color: #FB5430;">	
			<template #left>
				<van-icon  color="white" name="arrow-left" />
			</template>	
			<template #title>
				<span style="color: white;">注册</span>
			</template>

		</van-nav-bar>
    	<div class='imgsty'>
        <img src="@/assets/img/yihailog.png" class='img1' alt="">
      </div>
    <div class="content" >
      <van-field
        label = '昵 称'
        v-model="nick_name"
        name='nick_name'
        clearable
        placeholder="请输入昵称"
        
        @blur='filedPassword'
      />
      <van-field
        label='手   机   号 '
        name='phone'
        v-model="username"
        placeholder="请输入手机号"
        clearable
         @blur='filedPassword'
      />
      <van-field
        label = '密    码'
        v-model="password"
        name='password'
        type="password"
        clearable
        placeholder="请输入密码"  
        :error-message="passwordmsg"
        @blur='filedPassword'
      /> 
        <van-field
        label = '重复密码'
        v-model="re_password"
        name='re_password'
        type="password"
        clearable
        placeholder="请输入密码"  
        :error-message="passwordmsg"
        @blur='filedPassword'
      /> 
      
      <van-field
        label = '验证码'
        v-model="code"
        name='code'
        center
        clearable
        placeholder="请输入验证码"
        @blur='filedPassword'
      >
        <van-toast id="van-toast" />
            <van-button slot="button"  @click.native.prevent='captcha' style='width:80px' ><div v-html='svg' style='height:60px,width:50px'>{{svg}}</div></van-button>
        </van-field>
       <div style="margin:0 2vw;margin-top:8vw">
		    <van-button  round block color='#FB5430' type="info" native-type="submit" @click='registerup' :disabled='loginbtn'>
		      登录
		    </van-button>
        <van-notify id="van-notify"  />
		  </div>
    </div>
  </div>
</template>
<script>
import { login, registerdown } from "@/network/ReqLogin.js";
export default {
  data() {
    return {
      username: "", //手机号
      password: "", //密码
      code: "", //验证码
      username1: "ss",
      svg: "",
      nick_name: "", //昵称
      re_password: "", //重复密码
      loginbtn: true //true 为禁用
      //  登录按钮
    };
  },
  mounted() {
    login().then(res => {
      this.svg = res;
    });
  },
  methods: {
    captcha() {
      login().then(res => {
        this.svg = res;
      });
    },
    registerup() {
     let nick_name = this.nick_name; //昵称
      let username = this.username; //手机号
      let password = this.password; //密码
      let code = this.code; //验证码
  
      let re_password=this.re_password
      registerdown(nick_name,username, password, re_password, code).then(res => {
        if (res == "注册成功了") {                               
          this.$router.push({ name: "homemain" });
          this.$notify({ type: "success", message: "欢迎您来到一嗨租车" });
        } else if (res == "验证码不正确") {
          this.code = "";
          this.$notify({ type: "danger", message: "验证码错误，请重新输入" });
        } else if (res == "手机号输入不合法") {
          this.$notify({ type: "danger", message: "手机号输入不合法" });
        } else if (res == "昵称输入不合法，昵称应为中文") {
          this.$notify({
            type: "danger",
            message: "昵称输入不合法，昵称应为中文"
          });
        } else if (password !== re_password) {
          this.$notify({ type: "danger", message: "两次输入密码不一致" });
        } else if (res == `注册失败，${phone}邮箱已经被注册了`) {
          this.$notify({
            type: "danger",
            message: `注册失败，${phone}邮箱已经被注册了`
          })
        }
      }).catch((err)=>{
           this.$notify({ type: "danger", message: '网络错误' });
      });
    },
    filedPassword() {
      if (this.username1 == "" && this.password !== "") {
        //密码不为空且帐号为h
        return (this.loginbtn = false);
      } else {
        this.loginbtn = true;
      }
    }
  },
  computed: {
    usernamemsg() {
      if (this.username === "") {
        return "";
      } else if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(this.username)) {
        return "手机号码格式错误";
      } else {
        this.username1 = "";
        return "";
      }
    },
    passwordmsg() {
      if (this.password === "") {
        return "";
      } else if (!/^[a-zA-Z]\w{5,17}$/.test(this.password)) {
        return "密码小于六位且需以字母开头";
      } else {
        this.username1 = "";
        return "";
      }
    }
  }
};
</script>
<style scoped lang='less'>
#pgn {
  width: 60px !important;
  height: 60px !important;
}
.contianer {
  width: 100vw;
  height: 100vh;
}
.imgsty {
  width: 100vw;
  height: 130px;
  overflow: hidden;
  img {
    margin-top: 7.5vh;
    margin-left: 30vw;
  }
}
</style>
