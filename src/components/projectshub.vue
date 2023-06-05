<template>
    <el-scrollbar>
    <div class="userhub">
        <span class="userhub--title">
            <h2>{{ $t('Projectshub.project_list') }}</h2>
            <el-icon style="position: absolute;right:4rem;top:2rem;font-size:3rem;color: #f2f2f2;" @click="add_project=true"><Plus /></el-icon>
        </span>
        <div class="userhub--projectlist">
            <span class="userhub--projectlist--item"  v-for="item in currentprojectlist" :key="item.name">
                <span class="userhub--projectlist--item--icon" :class="{'u-background-color-active':item.status,'u-border-color-active':item.status}">
                    <el-icon v-if="item.type =='cv'"><Picture /></el-icon>
                    <el-icon v-else-if="item.type =='mal'"><Platform /></el-icon >
                    <el-icon v-else-if="item.type =='eval'"><DataAnalysis /></el-icon>
                    <el-icon v-else-if="item.type =='modeleval'"><svg t="1685951341987" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2730"><path d="M361.39008 444.68224l-47.20128 78.69952c-0.78848-0.08192-1.73056-0.08192-2.51392-0.08192-4.5568 0-8.87808 0.71168-12.95872 1.96608l-32.44032-32.44032a43.776 43.776 0 0 0 1.96608-12.95872c0-23.95648-19.4816-43.43296-43.43808-43.43296s-43.42784 19.4816-43.42784 43.43296c0 8.33024 2.3552 16.0256 6.36416 22.62528l-47.2832 78.69952c-0.78848-0.08192-1.73056-0.08192-2.51392-0.08192-23.95648 0-43.43296 19.47648-43.43296 43.42784 0 23.9616 19.4816 43.43296 43.43296 43.43296 23.95136 0 43.43296-19.4816 43.43296-43.43296a43.4432 43.4432 0 0 0-6.35904-22.62016l47.27808-78.78656c0.78336 0.08704 1.73056 0.08704 2.5088 0.08704 4.56192 0 8.87808-0.71168 12.96384-1.96096l32.44032 32.44032a43.70944 43.70944 0 0 0-1.96608 12.94848c0 23.9616 19.4816 43.43296 43.43296 43.43296s43.35616-19.47648 43.35616-43.43296c0-8.32512-2.3552-16.02048-6.35904-22.61504 0 0 49.00352-78.62272 49.79712-78.62272l-37.07904-20.72576z"  p-id="2731"></path><path d="M363.71968 521.50784l47.2832-78.78656a43.91936 43.91936 0 0 0 15.46752-1.87904l131.67104 131.6608a43.8272 43.8272 0 0 0-1.9712 12.95872c0 23.9616 19.4816 43.43296 43.42784 43.43296 23.96672 0 43.3664-19.48672 43.3664-43.43296a43.3152 43.3152 0 0 0-6.36416-22.62016l47.27808-78.70464c0.78848 0.08192 1.73056 0.08192 2.51904 0.08192 23.95648 0 43.42784-19.4816 43.42784-43.43296 0-23.95136-19.4816-43.35616-43.42784-43.35616-23.9616 0-43.43296 19.4816-43.43296 43.43296 0 8.32512 2.3552 16.0256 6.35392 22.62016l-47.20128 78.70976c-0.78848-0.08704-1.73056-0.08704-2.51904-0.08704-4.55168 0-8.86784 0.70656-12.94848 1.96608L454.9888 412.416a43.94496 43.94496 0 0 0 1.96096-12.95872c0-23.95648-19.4816-43.43296-43.43296-43.43296-23.95136 0-43.43296 19.4816-43.43296 43.43296a43.4176 43.4176 0 0 0 6.36416 22.62528s-49.01376 78.61248-49.80224 78.61248l37.07392 20.8128z"  p-id="2732"></path><path d="M780.20608 704.46592l139.57632 140.04736c12.88192 12.20096 12.88192 32.93184 0.45056 45.35808-12.42112 12.90752-33.152 13.35296-45.60384 0.45056l-140.49792-140.26752c-27.17184 22.57408-57.5744 41.2416-90.74688 54.81984a350.39744 350.39744 0 0 1-135.67488 27.20256c-103.42912 0-202.0096-45.85984-269.27616-125.33248-33.86368-39.59808 17.51552-76.68736 56.20736-34.06848 54.8352 60.11904 131.77344 94.19776 213.0688 94.19776 39.38304 0 76.70272-7.82336 110.55104-21.87264a286.2336 286.2336 0 0 0 93.52704-62.18752l0.47104-0.47104c26.49088-26.72128 48.14848-58.48064 62.87872-93.97248 13.81888-33.39776 21.66272-70.9376 21.66272-110.336a290.7904 290.7904 0 0 0-21.21728-108.9536l-0.45056-1.3824a287.0784 287.0784 0 0 0-61.27616-92.37504l-1.6128-1.59744c-26.95168-26.49088-58.74176-48.13312-93.98272-62.44352-33.60256-14.49472-71.15264-22.08256-110.55104-22.08256-117.69344 0-219.03872 71.85408-263.74656 172.49792-5.5296 11.99104-16.58368 19.12832-29.72672 19.12832h-0.20992c-11.52 0-20.96128-5.53984-27.19232-14.73024-6.21056-9.46176-6.912-20.51584-2.29376-31.12448C240.27648 209.92 367.43168 124.22656 507.6992 124.22656c47.67232 0 93.53216 9.6768 135.68 27.17184 43.30496 17.75104 82.45248 44.24704 114.69824 76.47744l1.8176 1.63328c31.80544 32.4608 57.14432 70.7072 74.87488 113.1008l0.68608 1.82272c17.04448 41.48224 26.27072 86.13888 26.27072 133.59616a350.47424 350.47424 0 0 1-26.9568 134.97856 356.71552 356.71552 0 0 1-54.56384 91.45856z"  p-id="2733"></path></svg></el-icon>
                    <el-icon v-else-if="item.type =='reinforce'"><svg t="1685245817415"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4321" ><path d="M409.6 750.933l34.133 68.267H170.667v136.533h682.666V819.2H580.267l34.133-68.267h238.933A68.267 68.267 0 0 1 921.6 819.2v136.533A68.267 68.267 0 0 1 853.333 1024H170.667a68.267 68.267 0 0 1-68.267-68.267V819.2a68.267 68.267 0 0 1 68.267-68.267H409.6zM273.067 68.267h477.866a68.267 68.267 0 0 1 68.267 68.266V614.4a68.267 68.267 0 0 1-68.267 68.267H273.067A68.267 68.267 0 0 1 204.8 614.4V136.533a68.267 68.267 0 0 1 68.267-68.266z m0 68.266V614.4h477.866V136.533H273.067z m614.4 102.4a34.133 34.133 0 0 1 34.133 34.134v204.8a34.133 34.133 0 1 1-68.267 0v-204.8a34.133 34.133 0 0 1 34.134-34.134z m-750.934 0a34.133 34.133 0 0 1 34.134 34.134v204.8a34.133 34.133 0 0 1-68.267 0v-204.8a34.133 34.133 0 0 1 34.133-34.134zM989.867 307.2A34.133 34.133 0 0 1 1024 341.333V409.6a34.133 34.133 0 1 1-68.267 0v-68.267a34.133 34.133 0 0 1 34.134-34.133z m-955.734 0a34.133 34.133 0 0 1 34.134 34.133V409.6A34.133 34.133 0 0 1 0 409.6v-68.267A34.133 34.133 0 0 1 34.133 307.2z m341.334 102.4a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z m273.066 0a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4zM512 0a34.133 34.133 0 0 1 34.133 34.133V102.4a34.133 34.133 0 0 1-68.266 0V34.133A34.133 34.133 0 0 1 512 0z m-68.267 614.4a34.133 34.133 0 0 1 34.134 34.133v136.534a34.133 34.133 0 1 1-68.267 0V648.533a34.133 34.133 0 0 1 34.133-34.133z m136.534 0a34.133 34.133 0 0 1 34.133 34.133v136.534a34.133 34.133 0 1 1-68.267 0V648.533a34.133 34.133 0 0 1 34.134-34.133z" p-id="4322"></path></svg></el-icon ></span>
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
    userMessage: Project[],
}>();
const emits = defineEmits(["set_projects","switch_to_penel"]);
const testprojectlist: Ref<any[]> = ref(props.userMessage.map((value, index) => {
    value['status'] = false;
    return value
}))
// onMounted(() => {
//     testprojectlist.value props.userMessage.map((value, index) => {
//     value['status'] = false;
//     return value
// })
// })
let currentprojectlist:Ref<ProjectPlus[]> = ref([])
const currentpage:Ref<number> = ref(1)
const testcursor = ref(11)
const totalPage:Ref<number> = ref(Math.ceil(testprojectlist.value.length / 12));
totalPage.value = totalPage.value == 0 ? 1 : totalPage.value;
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
},{
    value: 'modeleval',
    label: 'Model Evaluate',
},{
    value: 'retrain',
    label: 'Model Retrain',
}]
const handleChange = (value:string) => {
  console.log(value)
}
async function send_add_project() {
    console.log('send_add_project');
    
    let formDataObject = new FormData();
    let userID: any = sessionStorage.getItem('userID');
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