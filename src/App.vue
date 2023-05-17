<!-- <script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import skeleton from "./components/skeleton.vue";

</script> -->

<template>
  <div class="app" :class="{'u-background-color-white':switchPageArray[0],'u-background-color-black':switchPageArray[2],'u-padding-zero':switchPageArray[1]}">
    <!-- <FirstPage v-if="switchPageArray[0]" @switchPage="switchPage" :loginMessage="loginMessage"  @setLogin="setLogin"/>
    <skeleton v-else-if="switchPageArray[2]" @switchPage="switchPage" :loginMessage="loginMessage"/>
    <LoginPage v-else-if="switchPageArray[1]" style="background-color: #000;padding: 0;"  @switchPage="switchPage" @setLogin="setLogin"></LoginPage> -->
    <router-view></router-view>
    </div>
</template>

<script lang="ts" setup>
import { ref,reactive } from 'vue'
import type { Ref } from 'vue'
import { onMounted } from 'vue'
// import LoginPage from './components/loginPage.vue';


interface Project {
    type: number;
    name: string;
    ID:string
}
interface LoginMessage {
  username: string;
  userID: string;
  loginState: boolean;
  projects: Array<Project>;
  projects_length: number;
}
const loginMessage:LoginMessage = reactive({
  username: '',
  userID: '',
  loginState: false,
  projects: [],
  projects_length : 0,
})
function setLogin(data: LoginMessage) {
  loginMessage.loginState = data.loginState
  loginMessage.username = data.username
  loginMessage.userID = data.userID
  loginMessage.projects = data.projects
  loginMessage.projects_length = data.projects_length
}

const switchPageArray:Ref<boolean[]> = ref([true,false,false])
const switchPage = (ID: number) => {
  for (let index in switchPageArray.value) switchPageArray.value[index] = false;
  switchPageArray.value[ID] = true;
  console.log(switchPageArray.value)
}


 
onMounted(() => {
  document.body.style.setProperty('--el-color-primary', '#4B4D52');
  document.body.style.setProperty('--el-menu-active-color', '#4B4D52');
  document.body.style.setProperty('--el-border-color-light', '#E1DaD9');//--el-menu-active-color
  document.body.style.setProperty('--el-bg-color-overlay', '#1F1E23');//--el-menu-active-color
  document.body.style.setProperty('--el-border-color-light', '#1F1E23');//--el-menu-active-color
  // document.body.style.setProperty('--el-text-color-primary', '#f2f2f2');//--el-menu-active-color
  document.body.style.setProperty('--el-color-success', '#6e5e8d');//--el-menu-active-color
  // document.body.style.setProperty('--el-text-color-regular', '#f2f2f2');//--el-menu-active-color
  
})


</script>
<style scoped>
.app {
  height: 100vh;
  width: 100vw;
  font-family: italic Georgia, serif;
  font-weight: 400;
  line-height: 1.7;
  color:#777;
  background-color: #273655;
  overflow: hidden
  /* padding: 3rem; */
}

.u-background-color-white{
  background-color: #273655 !important;
}
.u-background-color-black{
  background-color: #000;
}
.u-padding-zero{
  padding: 0rem;
}
</style>
