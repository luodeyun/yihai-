<template>
  <div class="container" >
    		
<!-- 在页面内添加对应的节点 -->
<van-notify id="van-notify" />
  <van-nav-bar style="background-color: #FB5430;">	
			<template #left>
				<van-icon  color="white" name="arrow-left" @click="back" />
			</template>	
			<template #title>
				<span style="color: white;">登录</span>
			</template>

		</van-nav-bar>
    	<div class='imgsty'>
        <img src="@/assets/img/yihailog.png" class='img1' alt="">
      </div>
    <div class="content" >
      <van-field
        label='手   机   号 '
        name='username'
        v-model="username"
        placeholder="请输入手机号"
        clearable
        :error-message="usernamemsg"
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
        <span class='zuce' @click='zuce'>注册</span>
       <div style="margin:0 2vw;margin-top:8vw">
         
		    <van-button  round block color='#FB5430' type="info" native-type="submit" @click='signup' :disabled='loginbtn'>
		      登录
		    </van-button>
        <van-notify id="van-notify"  />
		  </div>
    </div>
  </div>
</template>
<script>
import { login, signdown } from "@/network/ReqLogin.js";
export default {
  data() {
    return {
      username: "",    //手机号
      password: "",         //密码
      code: "",          //验证码
      username1: "ss",
      svg: "",
      loginbtn: true   //true 为禁用
       //  登录按钮
    };
  },
  mounted() {
    login().then(res => {
      this.svg = res;
    });
  },
  methods: {
    back(){
      this.$router.go(-1)
    },
    zuce(){
      this.$router.replace({name:'register'})
    }
    ,
    captcha() {
      login().then(res => {
        this.svg = res;
      });
    },
    signup() {
      let username = this.username;
      let password = this.password;
      let code = this.code;
      signdown(username, password, code).then(res => {
        if (res.success) {
          console.log(res);
          let {phone,name} = res
          this.$store.commit('setPhone',phone)
          this.$store.commit('setName',name)
          this.$router.push({name:'homemain'});
          this.$notify({ type: "success", message: "欢迎您来到一嗨租车" });
        }else if(res=='验证码不正确'){
          this.code=''
          this.$notify({type:'danger',message:'验证码错误，请重新输入'})
        }
      });
    },
    filedPassword() {
      if ( this.username1 == ""&&this.password!=='' ) //密码不为空且帐号为h
       {
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
      if (this.password=== "") {
        return "";
      } else if ( !/^\w{6,17}$/.test(this.password)) {
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
.zuce{
  float: right;
  width: 10vw;
  height: 3vh;
  text-align: center; 
  border: 1px solid orange;
  line-height: 3vh;
  border-radius: 5px;
  font-size: 12px;
}
</style>
