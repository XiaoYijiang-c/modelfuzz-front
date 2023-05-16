<template>
    <el-scrollbar>
    <div class="userhub">
        <div class="userhub--projectlist">
            <div style="height: 10rem;"></div>
            <div class="chart-card" style="height:50rem">
                <div class="chart-card__rainbow_2"></div>
                <div class="chart-card--list-title">{{ props.userMessage.projects_length }} </div>
                <div class="chart-card--list-tools"><el-icon @click="add_project=true"><CirclePlus /></el-icon></div>
                <div class="chart-card--list-box" ref="ref_4">
                    <el-scrollbar>
                        <ul class="project-list"> 
                            <li class="project-list--item" v-for="item in props.userMessage.projects" :key="item.id">
                                <span class="project-list--item--icon">
                                    <el-icon v-if="item.type === 'cv' "><Picture /></el-icon>
                                    <el-icon v-else-if="item.type === 'mal' "><Platform /></el-icon>
                                </span>
                                <!-- <span class="project-list--item--gap"></span> -->
                                <span class="project-list--item--name">{{ item.name }}</span>
                                <!-- <span class="project-list--item--gap"></span> -->
                                <div class="project-list--item--icon-box">
                                    <span class="project-list--item--delete" @click="open(item)">
                                        <el-icon> <Delete /></el-icon>
                                    </span>
                                    <span class="project-list--item--point">
                                        <el-icon><MoreFilled /></el-icon>
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </el-scrollbar>
                </div>  
            </div>
        </div>
        <el-dialog v-model="add_project" title="Shipping address" :modal="false" center>
            <el-form>
                <el-form-item label="project name" >
                    <el-input v-model="add_form.name" placeholder="Please input" />
                </el-form-item>
                <el-form-item label="project type" >
                    <el-cascader v-model="add_form.type" :options="options"  @change="handleChange"/>
                </el-form-item>
            </el-form>
        <template #footer>
        <span class="dialog-footer">
            <el-button @click="add_project = false">Cancel</el-button>
            <el-button type="primary" @click="send_add_project">
            Confirm
            </el-button>
        </span>
        </template>
    </el-dialog>
    </div>
    </el-scrollbar>
    
</template>

<script lang="ts" setup>
import { ref,Ref,reactive } from 'vue'
import axios from "axios"
import Cookies from 'js-cookie'
import { ElMessage, ElMessageBox } from 'element-plus'
import type { Action } from 'element-plus'
const emits = defineEmits(["set_projects"]);
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
interface AddProjectForm {
    name: string;
    type: string;
}
const props = defineProps<{
    userMessage: LoginMessage,
}>();
const add_project = ref(false)
const add_form:AddProjectForm = reactive({
    name: '',
    type:''
})
const options = [{
    value: 'cv',
    label: 'computer vision',
},{
    value: 'mal',
    label: 'mal',
    }]
const handleChange = (value:string) => {
  console.log(value)
}
async function send_add_project() {
    let formDataObject = new FormData();
    let userID: any = Cookies.get('userID')
    if (userID) {
        formDataObject.append('userID', userID);
    } else { return }
    formDataObject.append('project_name', add_form.name);
    formDataObject.append('project_type', add_form.type);
    await axios.post('http://43.138.12.254:9000/add_project', formDataObject).then((res) => {
        console.log(res.data)
        if (res.data.flag == true) {
            emits('set_projects',res.data.projects)
        }
    }).catch((err) => {
        console.warn(err);
    });
}
async function send_delete_project(item:Project) {
    let formDataObject = new FormData();
    let userID: any = Cookies.get('userID')
    if (userID) {
        formDataObject.append('userID', userID);
    } else { return }
    formDataObject.append('project_name', item.name);
    await axios.post('http://43.138.12.254:9000/delete_project', formDataObject).then((res) => {
        console.log(res.data)
        emits('set_projects',res.data.projects)
    }).catch((err) => {
        console.warn(err);
    });
}
const open = (item:Project) => {
  ElMessageBox.alert('是否确认删除项目:'+item.name, '警告', {
    // if you want to disable its autofocus
    // autofocus: false,
    confirmButtonText: 'OK',
    callback: (action: Action) => {
        if (action == 'confirm') {
            send_delete_project(item);
      }
    },
  })
}
</script>

<style src="../style/skeleton.scss" lang="scss">

</style>