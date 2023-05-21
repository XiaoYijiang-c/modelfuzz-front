<template>
    <el-scrollbar>
    <div class="userhub">
        <span class="userhub--title">
            <h2>项目列表</h2>
        </span>
        <div class="userhub--projectlist">
            <span class="userhub--projectlist--item" v-for="item in currentprojectlist" :key="item.name">
                <span class="userhub--projectlist--item--icon"><el-icon v-if="item.type =='cv'"><Picture /></el-icon></span>
                <span class="userhub--projectlist--item--text">
                    {{ item.name }}
                    <span class="userhub--projectlist--item--text--icon-box">
                        <el-icon class="userhub--projectlist--item--text--icon-box__icon"><DeleteFilled /></el-icon>
                        <el-icon class="userhub--projectlist--item--text--icon-box__icon" style="transform: rotate(90deg);"><MoreFilled /></el-icon>
                    </span>
                </span>

            </span>
            
            <!-- <span class="userhub--projectlist--item">
                <span class="userhub--projectlist--item--icon"><el-icon><Picture /></el-icon></span>
                <span class="userhub--projectlist--item--text">new-projects</span>
            </span>
            <span class="userhub--projectlist--item">
                <span class="userhub--projectlist--item--icon"><el-icon><Picture /></el-icon></span>
                <span class="userhub--projectlist--item--text">new-projects</span>
            </span> -->
        </div>
        <div class="userhub--footer">
            <span class="userhub--footer__left" @click="testlastpage">上一页</span>
            <span class="userhub--footer__mid">{{currentpage}}/{{ totalPage }}</span>
            <span class="userhub--footer__right"  @click="testnextpage">下一页</span>
        </div>
        <!-- <div class="userhub--projectlist">
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
                                
                                <span class="project-list--item--name">{{ item.name }}</span>
                                
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
        </div> -->
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
const titleList: Ref<string[]> = ref(['Student', 'SCU'])
const testprojectlist = [{
    name: 'new-project', type: 'cv'
},{
    name: 'new-project', type: 'cv'
},{
    name: 'new-project', type: 'cv'
},{
    name: 'new-project', type: 'cv'
},{
    name: 'new-project', type: 'cv'
},{
    name: 'new-project', type: 'cv'
},{
    name: 'new-project', type: 'cv'
},{
    name: 'new-project', type: 'cv'
},{
    name: 'new-project', type: 'cv'
},{
    name: 'new-project', type: 'cv'
},{
    name: 'new-project', type: 'cv'
},{
    name: 'new-project', type: 'cv'
},{
    name: 'new-project', type: 'cv'
},{
    name: 'new-project', type: 'cv'
},{
    name: 'new-project', type: 'cv'
},{
    name: 'new-project', type: 'cv'
},{
    name: 'new-project', type: 'cv'
},{
    name: 'new-project', type: 'cv'
},{
    name: 'new-project', type: 'cv'
},{
    name: 'new-project', type: 'cv'
},{
    name: 'new-project', type: 'cv'
    }]
let currentprojectlist:Ref<testProject[]> = ref([])
const currentpage:Ref<number> = ref(1)
const testcursor = ref(11)
const totalPage:Ref<number> = ref(Math.ceil(testprojectlist.length / 12));
totalPage.value = totalPage.value == 0 ? 1 : totalPage.value;
console.log(totalPage)
function getCurrentPageData() {
    let begin = (currentpage.value - 1) * 12;
    let end = currentpage.value * 12;
    currentprojectlist.value = testprojectlist.slice(
        begin,
        end
    );
}
getCurrentPageData()
function testnextpage() {
    if (currentpage.value === totalPage.value) {
        alert('已经是最后一页了')
        return false
      } else {
        currentpage.value++
        getCurrentPageData()
      }
}
function testlastpage() {
    if (currentpage.value === 1) {
        alert('已经是第一页了')
        return false
      } else {
        currentpage.value--
        getCurrentPageData()
      }
}
interface testProject {
    type: string;
    name: string;
}
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