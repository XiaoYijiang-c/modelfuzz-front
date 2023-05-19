<template>
  <div class="single-page">
    <div class="navigation navigation__inside">
      <span class="navigation--name">nerual sentinel</span>
      <div class="navigation--logo">
        <img src="../img/logo.png" alt="logo" class="navigation--logo__logo" >
      </div>
    </div>
    <div class="single-page--main-window">
      <!-- <video class="single-page--video-background" id="bgVid" playsinline="true" autoplay="true" muted="true" loop="true">
        <source src="../assets/video/V-137734-D7688E81.mp4" type="video/mp4">
      </video> -->
      <div class="single-page--background"></div>
      <!-- <div class="head-tool"> -->
        
      <!-- </div> -->
      <div class="aside-tool">
        <AsideTools @show="show" :newNumber="numberCount.dlfuzz" :openASide="openASide" @switchPage="emits('switchPage', 0)"></AsideTools>
      </div>
      <div class="console">
        <!-- <Introduction ref="introduction" v-show="mainListShow.introduction"></Introduction> -->
        <Userhub v-show="mainListShow.userhub" :userMessage="props.loginMessage" @show="show"  @switchPage="emits('switchPage', 0)"></Userhub>
        <projectshub v-show="mainListShow.projectshub" :userMessage="props.loginMessage" @set_projects="set_projects"></projectshub>
        <DlfuzzPenel ref="dlfuzzPenel" v-show="mainListShow.dlfuzzpenel" :currentProject="currentProject" :projectList="projectList" @changeProject="changeProject" @chooseProject="choose_project" :formPartLogin="formPartLogin" :currentProjectId="current_project_id" @setProjectID="setProjectID">
          <template v-slot:Submit_button>
            <HeaderTag v-show="mainListShow.dlfuzzpenel" :topList="topList" @changeOpenASide="changeOpenASide" @headFunction="headFunction" >
          </HeaderTag>
          </template>
        </DlfuzzPenel>
        <DatasetEvaluate ref="datasetEvaluate" v-show="mainListShow.datasetEvaluate" :currentProject="currentProject" :projectList="projectList" @changeProject="changeProject" @chooseProject="choose_project" :formPartLogin="formPartLogin" :currentProjectId="current_project_id" @setProjectID="setProjectID">
          <template v-slot:Submit_button>
            <HeaderTag v-show="mainListShow.datasetEvaluate" :topList="topList" @changeOpenASide="changeOpenASide" @headFunction="headFunction" >
          </HeaderTag>
          </template>
        </DatasetEvaluate>
        <!-- <DlfuzzImage ref="dlfuzzImage" v-show="mainListShow.dlfuzzImage" @changenum="changeDlfuzzNumber">
        </DlfuzzImage> -->
        <DlfuzzChart ref="dlfuzzChart" v-show="mainListShow.dlfuzzImage" :currentProject="currentProject" :projectList="projectList" @changeProject="changeProject" @sendAxios="sendAxios" @chooseProject="choose_project" :formPartLogin="formPartLogin" :currentProjectId="current_project_id" @setProjectID="setProjectID">
        </DlfuzzChart>
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
  type: 'cv',
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
const dlfuzzImage = ref();
const dlfuzzChart = ref();
const headFunction = (tag: string) => {
  if (tag.toUpperCase() == "SUBMIT") {
    submit()
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
const submit = async () => {
  try {
    let formdataObject = new FormData();
    formdataObject = await penel.value.submitFormWapper();
    formdataObject.forEach((value, key) => {
      console.log(key);
      console.log(value);
    });
    sendAxios( 'http://43.138.12.254:9000/dlfuzz/submit','POST',handleSubmit,formdataObject)
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
  projectshub: false,
  datasetEvaluate: false,
  dlfuzzpenel: false,
  dlfuzzImage: false
});
// 控制中心部分显示的函数(tools.vue控制)
const show = (item: string) => {
  console.log("show", item);
  if (item == "userhub") {
    closeAllShow()
    mainListShow.userhub = true
    penel = introduction;
  }
  else if (item == "projectshub") {
    closeAllShow()
    mainListShow.projectshub = true
    penel = introduction;
  }
  else if (item === "dlfuzzpenel") {
    closeAllShow()
    mainListShow.dlfuzzpenel = true;
    penel = dlfuzzPenel;
    penel.value.formPartShow = true;
  }
  else if (item === "datasetEvaluate") {
    closeAllShow()
    mainListShow.datasetEvaluate = true;
    penel = datasetEvaluate;
    penel.value.formPartShow = true;
  }
  else if (item === "activity") {
    closeAllShow()
    mainListShow.dlfuzzImage = true;
    // penel.value.formPartShow = false;
    penel = dlfuzzChart;
    penel.value.formPartShow = true;
    if (projectSubmitState.value) {
      penel.value.loadChart()
    }
    console.log(item);
    console.log("penel", penel.value);

  }
};

const closeAllShow = () => {
  mainListShow.userhub = false;
  mainListShow.projectshub = false;
  mainListShow.dlfuzzpenel = false;
  mainListShow.dlfuzzImage = false;
  mainListShow.datasetEvaluate = false;
}
const formPartLogin = ref(true)
function choose_project() {
  formPartLogin.value = false
}


</script>


<style src="../style/skeleton.scss" lang="scss">

</style>