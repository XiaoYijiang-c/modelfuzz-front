<template>
  <div class="single-page">
    <div class="navigation navigation__inside">
      <span class="navigation--name">nerual sentinel</span>
      <div class="navigation--logo" @click="show('datasetEvaluate')">
        <img src="../img/logo.png" alt="logo" class="navigation--logo__logo" >
      </div>
    </div>
    <div class="single-page--main-window">
      <div class="single-page--background"></div>
      <div class="aside-tool">
        <AsideTools @show="show" @switchpenal="switchpenal" :newNumber="numberCount.dlfuzz" :openASide="openASide" @switchPage="emits('switchPage', 0)"></AsideTools>
      </div>
      <div class="console">
        <Userhub v-show="mainListShow.userhub" :userMessage="props.loginMessage" @show="show"  @switchPage="emits('switchPage', 0)"></Userhub>
        <projectshub v-show="mainListShow.projectshub" :userMessage="props.loginMessage" @set_projects="set_projects"></projectshub>
        <DlfuzzChart ref="dlfuzzChart" v-show="mainListShow.dlfuzzImage" :currentProject="currentProject" :projectList="projectList" @changeProject="changeProject" @sendAxios="sendAxios" @chooseProject="choose_project" :formPartLogin="formPartLogin" :currentProjectId="current_project_id" @setProjectID="setProjectID">
        </DlfuzzChart>

        <div class="form-with-guide" v-if="mainListShow.penel">
          <div class="form-with-guide--main-part">
            <div class="form-with-guide--main-part__left">
              <div class="form-with-guide--header ">
              <el-dropdown class="form-with-guide--header--dropdown">
                <span class="el-dropdown-link form-with-guide--header__text u-menu_list u-font-f2f2f2">
                  <el-icon class="el-icon--right u-margin-right-1rem" v-if="currentProject.type === 'cv'"><Picture /></el-icon>
                  <el-icon class="el-icon--right u-margin-right-1rem" v-else-if="currentProject.type === 'mal'"><Platform /></el-icon>
                  <el-icon class="el-icon--right u-margin-right-1rem" v-else-if="currentProject.type === 'eval'"><DataAnalysis /></el-icon>
                  {{ currentProject.name }}<el-icon class="el-icon--right u-margin-left-1rem"><arrow-down /></el-icon>
                </span>
                <template #dropdown>
                  <el-dropdown-menu>
                        <div class="u-menu_list" v-for="item in projectList" :key="item.id">
                          
                          <el-dropdown-item @click="changeProject(item),choose_project(),switchpenal()">{{ item.name }} 
                            <div  v-if="item.type === 'cv'" class="u-flex-center "><el-icon color="#f2f2f2"><Picture /></el-icon></div>
                            <div v-else-if="item.type === 'mal'" class="u-flex-center "><el-icon  color="#f2f2f2"><Platform /></el-icon></div>
                            <div v-else-if="item.type === 'eval'" class="u-flex-center "><el-icon  color="#f2f2f2"><DataAnalysis /></el-icon></div>
                        </el-dropdown-item>
                        </div>
                  
                    
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
              <div></div>
              <div class="form-with-guide--header__search">
                <input
                autocomplete="off"
                  type="text"
                  name="search"
                  v-model="input2"
                  class="input_self u-input-dark"
                />
                <div class="form-with-guide--header__search__button"><el-icon><Search /></el-icon></div></div>
              </div>
              <DlfuzzPenel ref="dlfuzzPenel" v-if="mainListShow.dlfuzzpenel"  :currentProjectId="current_project_id"  @setstep="setStep">
                <template v-slot:Submit_button>
                  <HeaderTag v-show="mainListShow.dlfuzzpenel" :topList="topList" @changeOpenASide="changeOpenASide" @headFunction="headFunction" ></HeaderTag>
                </template>
              </DlfuzzPenel>
              <DatasetEvaluate ref="datasetEvaluate" v-show="mainListShow.datasetEvaluate"  :currentProjectId="current_project_id"  @setstep="setStep">
                <template v-slot:Submit_button>
                  <HeaderTag v-show="mainListShow.datasetEvaluate" :topList="topList" @changeOpenASide="changeOpenASide" @headFunction="headFunction" ></HeaderTag>
                </template>
              </DatasetEvaluate>
              <Malfuzz ref="malfuzz" v-if="mainListShow.malfuzz"  :currentProjectId="current_project_id"  @setstep="setStep">
                <template v-slot:Submit_button>
                  <HeaderTag v-show="mainListShow.malfuzz" :topList="topList" @changeOpenASide="changeOpenASide" @headFunction="malheadFunction" ></HeaderTag>
                </template>
              </Malfuzz>
              <Emptypenal ref="emptypenal" v-if="mainListShow.emptypenal"  :currentProjectId="current_project_id"  @setstep="setStep">
                <template v-slot:Submit_button>
                  <HeaderTag v-show="mainListShow.emptypenal" :topList="topList" @changeOpenASide="changeOpenASide" @headFunction="malheadFunction" ></HeaderTag>
                </template>
              </Emptypenal>
            </div>
            <div class="form-with-guide--main-part__right">
              <div style="height: 300px;position:sticky;top:2rem">
                <el-steps direction="vertical" :active="activeStep" finish-status="success">
                  <el-step :title="item.title"  style="background-color: transparent;" v-for="item in stepMessage" :key="item.title">
                    <template v-slot:description>
                        <span  class="step-text">{{ item.message }}</span>
                    </template>
                    <template v-slot:title>
                        <span  class="step-title">{{ item.title }}</span>
                    </template>
                  </el-step>
                  
                </el-steps>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// interface Form {
//   type: Array<String>;
//   value: Number;
//   neuralNum: Number;
//   seedNum: Number;
//   modelFile: File;
//   codeFile: File;
// }
import { reactive, ref, watch, h,Ref,onMounted } from "vue";
import axios from "axios";
import { ElMessage } from 'element-plus'
import message from "../json/message.json"
import { Obj } from "@popperjs/core";
// onMounted(() => {
//   penel = dlfuzzPenel;
//   console.log("onMounted penel",penel)
// })
const input2 = ref('')
const current_project_id: Ref<string> = ref('')
function setProjectID(item:string) {
  current_project_id.value = item
  
}
interface Project {
    type: string;
    name: string;
    id:string
}
interface LoginMessage {
  username: string;
  userID: string;
  loginState: boolean;
  projects: Array<Project>;
  projects_length: number;
}
const props = defineProps<{
  loginMessage: LoginMessage,
}>();
console.log(props.loginMessage)
function set_projects(projects:Project[]) {
  props.loginMessage.projects = projects
  props.loginMessage.projects_length = projects.length
  projectList.value = projects
}
const projectSubmitState:Ref<boolean> = ref(false)

const currentProject: Ref<Project> = ref({
  type: '',
  name: '选择你的项目',
  id:'-1'
})
const projectList: Ref<Project[]> = ref(props.loginMessage.projects)
function changeProject(projectName : Project) {
  currentProject.value = projectName
}
//用于切换页面
const emits = defineEmits(["switchPage"]);
const messageText = message
/* 
  实现关闭打开侧栏 
  openASide:控制打开与关闭 @需要在headerTag中变值 @需要在tools中绑定
  changeOpenASide(): !openASide
*/
let openASide = ref(false)
const changeOpenASide = () => {
  openASide.value = !openASide.value
}
/* 
  绑定aside的宽度
*/
let aSideWidth = ref(63)
watch(openASide, (old, newMs) => {
  if (old) {
    aSideWidth.value = 63
  } else {
    aSideWidth.value = 200
  }
})
// 发送给tools的图片数量信息
const numberCount = reactive({
  dlfuzz: 0
})
const changeDlfuzzNumber = (value: number) => {
  numberCount.dlfuzz = value
}
// 左上角卡片信息
const state = reactive({
  msg: "罗家乐-2020141530059",
});

// 头部部分的列表
const topList: Array<String> = ["Reset","submit"];

// 中心部分的ref
let penel = ref()
const dlfuzzPenel = ref();
const datasetEvaluate = ref();
const introduction = ref();
const malfuzz = ref();
const emptypenal = ref();
const dlfuzzImage = ref();
const dlfuzzChart = ref();
const headFunction = (tag: string) => {
  if (tag.toUpperCase() == "SUBMIT") {
    submit('http://43.138.12.254:9000/dlfuzz/submit')
  } else if (tag.toUpperCase() == "RESET") {
    clearForm()
  }
}
const malheadFunction = (tag: string) => {
  if (tag.toUpperCase() == "SUBMIT") {
    submit('http://43.138.12.254:9000/mal/main')
  } else if (tag.toUpperCase() == "RESET") {
    clearForm()
  }
}
// 对warning类型 messagebox的封装
const warningMessage = (text: string) => {
  ElMessage({
    message: text,
    type: 'warning',
  })
}
// 清空表单
const clearForm = () => {
  try {
    penel.value.resetFormWapper()
  } catch (error) {
    warningMessage(messageText.warning.errorPageClickReset)
    console.log(error);
    
  }
}
// 提交表单函数(需要子组件有submitFormWapper函数)
const submit = async (url:string) => {
  try {
    let formdataObject = new FormData();
    formdataObject = await penel.value.submitFormWapper();
    formdataObject.forEach((value, key) => {
      console.log(key);
      console.log(value);
    });
    sendAxios(url,'POST',handleSubmit,formdataObject)
  } catch (error) {
    warningMessage(messageText.warning.errorPageClickSubmit)
  }
};
// 提交axios信息
const sendAxios = (url: string, type:string, callback:Function,formdataObject?: FormData,) => {
  let res = null;
  if (type === "POST") {
    axios.post(url, formdataObject).then((response) => {
      res = callback(response.data)
    }).catch((err) => {
      console.warn(err);
    });
  } else if (type === "GET") {
    axios.get(url).then((response) => {
      res = callback(response.data)
    }).catch((err) => {
      console.warn(err);
    });
  }

  return res;
}
const handleSubmit = (data:Object|string) => {
  if (data == 'success') {
    projectSubmitState.value = true
      ElMessage({
        message: h('p', null, [
          h('i', { style: 'color: teal' }, 'Fuzz Started Successfully'),
        ]),
        type: 'success',
        duration: 5000
      })
      // download('/upload/status')
    } else {
    projectSubmitState.value = false
      ElMessage({
        message: h('p', null, [
          h('i', { style: 'color: teal' }, 'Fuzz Startup Failed, Please Check Your Setting'),
        ]),
        type: 'error',
        duration: 5000
      })
    }
}

// download the picture.zip
const download = (url: string) => {
  axios.get(url).then((res) => {
    dlfuzzChart.value.loading = false
    let tableDataItem = {
      'total_time': res.data.total_time,
      'average_norm': res.data.average_norm,
      'adversial_num': res.data.adversial_num,
      'average_perb_adversial': res.data.average_perb_adversial,
    }
    dlfuzzChart.value.tableData.push(tableDataItem)
    dlfuzzChart.value.filepath = res.data.filepath;
    console.log(res, dlfuzzChart.value.tableData);
  })
}
// 控制中心部分显示的结构
const mainListShow = reactive({
  userhub: true,
  penel:false,
  projectshub: false,
  datasetEvaluate: false,
  malfuzz:false,
  emptypenal:false,
  dlfuzzpenel: false,
  dlfuzzImage: false
});
// 控制中心部分显示的函数(tools.vue控制)
const show = (item: string) => {
  if (item == "userhub") {
    closeAllShow()
    mainListShow.userhub = true
  }
  else if (item == "projectshub") {
    closeAllShow()
    mainListShow.projectshub = true
  }
  else if (item === "dlfuzzpenel") {
    closeAllShow()
    mainListShow.dlfuzzpenel = true;
    mainListShow.penel = true;
    penel = dlfuzzPenel;
  }
  else if (item === "datasetEvaluate") {
    closeAllShow()
    mainListShow.datasetEvaluate = true;
    mainListShow.penel = true;
    penel = datasetEvaluate;
  }
  else if (item === "malfuzz") {
    closeAllShow()
    mainListShow.malfuzz = true;
    mainListShow.penel = true;
    penel = malfuzz;
  }
  else if (item === "emptypenal") {
    closeAllShow()
    mainListShow.emptypenal = true;
    mainListShow.penel = true;
  }
  else if (item === "activity") {
    closeAllShow()
    mainListShow.dlfuzzImage = true;
    mainListShow.penel = true;
    penel = dlfuzzChart;
    if (projectSubmitState.value) {
      penel.value.loadChart()
    }
  }
};

const closeAllShow = () => {
  mainListShow.userhub = false;
  mainListShow.penel = false;
  mainListShow.projectshub = false;
  mainListShow.dlfuzzpenel = false;
  mainListShow.malfuzz = false;
  mainListShow.emptypenal = false;
  mainListShow.dlfuzzImage = false;
  mainListShow.datasetEvaluate = false;
}
const formPartLogin = ref(true)
function choose_project() {
  formPartLogin.value = false;

}
function switchpenal() {
  if (currentProject.value.id == '-1') {
    console.log('currentProject.value',currentProject.value)
    show('emptypenal')
  } else {
    if (currentProject.value.type == 'cv') {
      show('dlfuzzpenel')
    } else if (currentProject.value.type == 'mal') {
      show('malfuzz')
    } else if (currentProject.value.type == 'eval') {
      show('datasetEvaluate')
    }
  }
}

interface StepMessage{
  title: string;
  message: string;
}
const activeStep: Ref<number> = ref(0);
const stepMessage: Ref<StepMessage[]> = ref([]);
function setStep(stepcurrent: number, stepmessage: StepMessage[]) {
  activeStep.value = stepcurrent;
  stepMessage.value = stepmessage
}
</script>


<style src="../style/skeleton.scss" lang="scss">

</style>