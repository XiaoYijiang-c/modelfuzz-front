<template>
    <div class="left_img">
      <img src="../img/face_login_0.png" alt="face" class="left_img--img" >
    </div>
    <section>
    <span class="backward" @click="emits('switchPage', 0)"><el-icon size="5rem" ><Back /></el-icon></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <div class="signin" v-show="loginInOrUp">
      <div class="content" >
        <div class="head">
          <img src="../img/user2.png" alt="logo" class="head__head" >
        </div>
        <h1>NEURAL SENTINEL</h1>
        <!-- <h2>登录</h2> -->
        <div class="form">
          <div class="input-box">
            <input type="text"  v-model="username" required>
            <i>用户名</i>
          </div>
          <div class="input-box">
            <input type="password"  v-model="password" required>
            <i>密码</i>
          </div>
          <div class="links">
            <a href="#">忘记密码</a>
            <a @click="loginInOrUp=!loginInOrUp">注册账号</a>
          </div>
          <div class="input-box">
            <input type="submit" value="确认" @click="sendAxios('http://43.138.12.254:9000/login',consoleLogData)">
          </div>
        </div>
      </div>
      
    </div>
    <div class="signin" v-show="!loginInOrUp">
      <div class="content" style="gap:3rem">
        <div class="head">
          <img src="../img/user2.png" alt="logo" class="head__head" >
        </div>
        <h2>注册</h2>
        <div class="form">
          <div class="input-box">
            <input type="text" required v-model="usernameSignup">
            <i>用户名</i>
          </div>
          <div class="input-box">
            <input type="password" required v-model="passwordSignup">
            <i>密码</i>
          </div>

          <div class="input-box">
            <input type="password" required  v-model="passwordSignupTwice">
            <i>确认密码</i>
          </div>
          <div class="links">
            <a @click="loginInOrUp=!loginInOrUp">登录</a>
          </div>
          <div class="input-box">
            <input type="submit" value="确认" @click="sendAxios('http://43.138.12.254:9000/register',consoleLogData)">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import axios from "axios"
import { ElMessage } from "element-plus"
import Cookies from "js-cookie"

const username = ref('')
const password = ref('')
const usernameSignup = ref('')
const passwordSignup = ref('')
const passwordSignupTwice = ref('')
const loginInOrUp = ref(true)
const emits = defineEmits(["switchPage","setLogin"]);
// 提交axios信息
const sendAxios = (url: string,  callback:Function) => {
  let formDataObject = new FormData();
  if (loginInOrUp.value) {
    formDataObject.append('username',username.value)
    formDataObject.append('password',password.value)
  } else {
    formDataObject.append('username',usernameSignup.value)
    formDataObject.append('password',passwordSignup.value)
  } 
  axios.post(url, formDataObject).then((response) => {
    callback(response.data)
  }).catch((err) => {
    console.warn(err);
  });
}
let loginMessage = {}
const consoleLogData = (data: any) => {
  if (data.flag) {
    ElMessage({
      message: data.message,
      type:"success"
    })
    if (data.message == 'Registration success')
    {
      loginInOrUp.value = !loginInOrUp.value
      usernameSignup.value = ''
      passwordSignup.value = ''
      passwordSignupTwice.value = ''
    }
    else {
      loginMessage = {
        username: data.userName,
        userID: data.userID,
        loginState: true,
        projects: data.projects,
        projects_length: data.projects_length
      }
      Cookies.set('username', data.userName, { expires: 7 })
      Cookies.set('userID', data.userID, { expires: 7 })
      emits('setLogin', loginMessage)
      emits('switchPage', 0)
    }
   
  }
  else {
    ElMessage({
      message: data.message,
      type:"warning"
    })
  }
}
</script>

<style src="../style/login.scss" lang="scss">

</style>