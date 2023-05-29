<template>
    <el-scrollbar>
    <div class="userhub">
        <span class="userhub--title">
            <h2>{{ $t('Projectshub.project_list') }}</h2>
            <el-icon style="position: absolute;right:4rem;top:2rem;font-size:3rem;color: #f2f2f2;" @click="add_project=true"><Plus /></el-icon>
        </span>
        <div class="userhub--projectlist">
            <span class="userhub--projectlist--item"  v-for="item in currentprojectlist" :key="item.name">
                <span class="userhub--projectlist--item--icon" :class="{'u-background-color-active':item.status,'u-border-color-active':item.status}"><el-icon v-if="item.type =='cv'"><Picture /></el-icon><el-icon v-else-if="item.type =='mal'"><Platform /></el-icon ><el-icon v-else-if="item.type =='eval'"><DataAnalysis /></el-icon><el-icon v-else-if="item.type =='reinforce'"><svg t="1685245817415"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4321" ><path d="M409.6 750.933l34.133 68.267H170.667v136.533h682.666V819.2H580.267l34.133-68.267h238.933A68.267 68.267 0 0 1 921.6 819.2v136.533A68.267 68.267 0 0 1 853.333 1024H170.667a68.267 68.267 0 0 1-68.267-68.267V819.2a68.267 68.267 0 0 1 68.267-68.267H409.6zM273.067 68.267h477.866a68.267 68.267 0 0 1 68.267 68.266V614.4a68.267 68.267 0 0 1-68.267 68.267H273.067A68.267 68.267 0 0 1 204.8 614.4V136.533a68.267 68.267 0 0 1 68.267-68.266z m0 68.266V614.4h477.866V136.533H273.067z m614.4 102.4a34.133 34.133 0 0 1 34.133 34.134v204.8a34.133 34.133 0 1 1-68.267 0v-204.8a34.133 34.133 0 0 1 34.134-34.134z m-750.934 0a34.133 34.133 0 0 1 34.134 34.134v204.8a34.133 34.133 0 0 1-68.267 0v-204.8a34.133 34.133 0 0 1 34.133-34.134zM989.867 307.2A34.133 34.133 0 0 1 1024 341.333V409.6a34.133 34.133 0 1 1-68.267 0v-68.267a34.133 34.133 0 0 1 34.134-34.133z m-955.734 0a34.133 34.133 0 0 1 34.134 34.133V409.6A34.133 34.133 0 0 1 0 409.6v-68.267A34.133 34.133 0 0 1 34.133 307.2z m341.334 102.4a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z m273.066 0a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4zM512 0a34.133 34.133 0 0 1 34.133 34.133V102.4a34.133 34.133 0 0 1-68.266 0V34.133A34.133 34.133 0 0 1 512 0z m-68.267 614.4a34.133 34.133 0 0 1 34.134 34.133v136.534a34.133 34.133 0 1 1-68.267 0V648.533a34.133 34.133 0 0 1 34.133-34.133z m136.534 0a34.133 34.133 0 0 1 34.133 34.133v136.534a34.133 34.133 0 1 1-68.267 0V648.533a34.133 34.133 0 0 1 34.134-34.133z" p-id="4322"></path></svg></el-icon ></span>
                <span class="userhub--projectlist--item--text" :class="{'u-border-color-active':item.status}"  @click="emits('switch_to_penel',item)">
                    {{ item.name }}
                    <span class="userhub--projectlist--item--text--icon-box">
                        <el-icon class="userhub--projectlist--item--text--icon-box__icon" @click.stop="item.status = true"><CaretRight /></el-icon>
                        <el-icon class="userhub--projectlist--item--text--icon-box__icon" @click.stop="item.status = false"><SwitchButton /></el-icon>
                        <el-icon class="userhub--projectlist--item--text--icon-box__icon" @click.stop="open(item)"><DeleteFilled /></el-icon>
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
            <span class="userhub--footer__left" @click="testlastpage">{{ $t('Projectshub.last_page') }}</span>
            <span class="userhub--footer__mid">{{currentpage}}/{{ totalPage }}</span>
            <span class="userhub--footer__right"  @click="testnextpage">{{ $t('Projectshub.next_page') }}</span>
        </div>
        <el-dialog v-model="add_project" :title="t('Projectshub.project_add')" :modal="false" center>
            <el-form>
                <el-form-item :label="t('Projectshub.project_name')" >
                    <el-input v-model="add_form.name" placeholder="Please input" />
                </el-form-item>
                <el-form-item :label="t('Projectshub.project_type')" >
                    <el-cascader v-model="add_form.type" :options="options"  @change="handleChange"/>
                </el-form-item>
            </el-form>
        <template #footer>
        <span class="dialog-footer">
            <el-button @click="add_project = false">{{ $t('Projectshub.warn_cancal') }}</el-button>
            <el-button type="primary" @click="send_add_project(),add_project = false">
                {{ $t('Projectshub.warn_confirm') }}
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
import { useI18n } from "vue-i18n";

const { t } = useI18n({ useScope: "global" });
const props = defineProps<{
    userMessage: LoginMessage,
}>();
const emits = defineEmits(["set_projects","switch_to_penel"]);
const testprojectlist: Ref<any[]> = ref(props.userMessage.projects.map((value, index) => {
    value['status'] = false;
    return value
}))
let currentprojectlist:Ref<ProjectPlus[]> = ref([])
const currentpage:Ref<number> = ref(1)
const testcursor = ref(11)
const totalPage:Ref<number> = ref(Math.ceil(testprojectlist.value.length / 12));
totalPage.value = totalPage.value == 0 ? 1 : totalPage.value;
console.log(totalPage)
function getCurrentPageData() {
    let begin = (currentpage.value - 1) * 12;
    let end = currentpage.value * 12;
    currentprojectlist.value = testprojectlist.value.slice(
        begin,
        end
    );
    console.log(currentprojectlist.value)
}
getCurrentPageData()
function testnextpage() {
    if (currentpage.value === totalPage.value) {
        return false
      } else {
        currentpage.value++
        getCurrentPageData()
      }
}
function testlastpage() {
    if (currentpage.value === 1) {
        return false
      } else {
        currentpage.value--
        getCurrentPageData()
      }
}
interface ProjectPlus {
    type: string;
    name: string;
    id: string;
    status: boolean;
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

const add_project = ref(false)
const add_form:AddProjectForm = reactive({
    name: '',
    type:''
})
const options = [{
    value: 'cv',
    label: 'Computer Vision',
},{
    value: 'mal',
    label: 'Malware Detection',
},{
    value: 'eval',
    label: 'Dataset Evaluate',
},{
    value: 'reinforce',
    label: 'Reinforcement',
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
            emits('set_projects', res.data.projects)
            testprojectlist.value = res.data.projects
            getCurrentPageData()

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
        emits('set_projects', res.data.projects)
        testprojectlist.value = res.data.projects
        getCurrentPageData()

    }).catch((err) => {
        console.warn(err);
    });
}
const open = (item:Project) => {
  ElMessageBox.alert(t('Projectshub.warn_text')+item.name, t('Projectshub.warn'), {
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

defineExpose({
    testprojectlist,
    getCurrentPageData
})
</script>

<style src="../style/skeleton.scss" lang="scss">

</style>