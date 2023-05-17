<template>
    
    <el-scrollbar>
    <div class="userhub">
        <router-view></router-view>

        <div class="userhub--header_image"></div>
        <div class="userhub--head_sculpture">
            <div class="userhub--head_sculpture--image">
                <img src="../img/rainbow.jpeg" alt="hello" />
            </div>
            <div class="userhub--head_sculpture--tools">
                <span class="userhub--head_sculpture--tools__uptool">
                    <span class="userhub--head_sculpture--tools__name">{{ name }} </span>
                </span>
                <div class="userhub--head_sculpture--tools__message" @click="toPagePath('/testnnsvg')">当前项目
                    <span class="userhub--head_sculpture--tools__name btn" style="width: 20rem;" @click="emits('show','projectshub')">点击查看</span>
                    <span class="userhub--head_sculpture--tools__name btn" style="width: 20rem;" @click="logout">登出</span>
                </div>
                <!-- <ul class="userhub--head_sculpture--tools__button_list">
                    <li class="btn" style="background-color: navy;">New Project</li>
                    <li class="btn" style="background-color: navy;">setting</li>
                </ul> -->
            </div>
            <!-- <div class="userhub--head_sculpture--background-color-block"></div> -->
        </div>
        
    </div>
    <nnsvg></nnsvg>
    </el-scrollbar>
</template>

<script lang="ts" setup>
import { ElMessageBox } from 'element-plus';
import { ref, Ref, onMounted } from 'vue'
import type { Action } from 'element-plus'
import axios from 'axios';
import Cookies from 'js-cookie'
import { useRouter } from "vue-router";
const router = useRouter();
const toPagePath = (url: string) => {
    router.push({
        path: url,
    });
}
const emits = defineEmits(["show",'switchPage']);
const name:Ref<string> = ref('肆夕')
const titleList:Ref<string[]> = ref(['Student','SCU'])
    
interface Project {
    type: string;
    name: string;
    id:string
}
interface ProjectList {
    project: Project[];
    length: number;
}
interface LoginMessage {
  username: string;
  userID: string;
  loginState: boolean;
  projects: Array<Project>;
  projects_length: number;
}
const props = defineProps<{
    userMessage: LoginMessage,
}>();
console.log(props.userMessage)
function logout() {
    ElMessageBox.alert('是否确认登出:'+name.value, '警告', {
    // if you want to disable its autofocus
    // autofocus: false,
    confirmButtonText: 'OK',
    callback: (action: Action) => {
        if (action == 'confirm') {
           Cookies.remove('username')
            Cookies.remove('userID')
           emits('switchPage')
        }
    },
  })
}
const projectLength = ref(0)
// onMounted(() => {
//     projectLength.value = props.userMessage.projects.length
// })
</script>

<style src="../style/skeleton.scss" lang="scss">

</style>