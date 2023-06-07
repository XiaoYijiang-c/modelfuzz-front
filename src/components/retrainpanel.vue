<template>
    <div class="form-with-guide--main-part__left--bottom" >
      <el-scrollbar>
        <el-form 
          :model="form" label-width="30%" 
          ref="formdata" 
          style="padding:3rem;"
        >
        <h3 class="form-with-guide--main-part__left--title u-font-f2f2f2">上传重训练模型</h3>
          <div class="uploadButton" style="grid-template-columns:repeat(3 ,33%)">
              <div class="single-card-two-button">
                <p>上传模型源码</p>
                <div class="single-card-two-button--icon-box">
                  <img src="../img/01fenzi4d3a59.png" alt="fenzi">
                </div>
                <div class="single-card-two-button--backgroud-layer"></div>
                <el-upload ref="uploadCode" class="button-box" :limit="1" :on-exceed="handleExceedCode" :auto-upload="false"
              :on-change="codeFileChange" :on-remove="codeFileRemove">
                  <template #trigger>
                    <span class="single-card-two-button--button__left btn">选择文件</span>
                  </template>
                  <span class="single-card-two-button--button__right btn">模版</span>
                </el-upload>
              </div>
              <div class="single-card-two-button">
                <p>上传数据集</p>
                <div class="single-card-two-button--icon-box">
                  <img src="../img/04fangshengxue4d3a59.png" alt="fenzi">
                </div>
                <div class="single-card-two-button--backgroud-layer"></div>
                <el-upload ref="uploadBenign" class="button-box" :limit="1" :on-exceed="handleExceedBenign" :auto-upload="false"
              :on-change="benignFileChange" :on-remove="benignfileRemove">
                  <template #trigger>
                    <span class="single-card-two-button--button__left btn">选择文件</span>
                  </template>
                  <span class="single-card-two-button--button__right btn">模版</span>
                </el-upload>
              </div>
              <div class="single-card-two-button">
                <p>上传模型预处理文件</p>
                <div class="single-card-two-button--icon-box">
                  <img src="../img/08yunsuanzhongxing4d3a59.png" alt="fenzi">
                </div>
                <div class="single-card-two-button--backgroud-layer"></div>
                <el-upload ref="uploadPreprocess" class="button-box" :limit="1" :on-exceed="handleExceedPreprocess" :auto-upload="false"
              :on-change="preprocessingFunction" :on-remove="preprocessingRemove">
                  <template #trigger>
                    <span class="single-card-two-button--button__left btn">选择文件</span>
                  </template>
                  <span class="single-card-two-button--button__right btn">模版</span>
                </el-upload>
              </div>
          </div>
          <div class="left-img-card">
            <div class="left-img-card--img-box">
              <img src="../img/0_setting.png" alt="fenzi">
            </div>
            <div class="left-img-card--right-part">
              <div class="input-box u-margin-left-2rem">
                <span class="input-label">模型函数名</span>
                <input type="text" autocomplete="off" name="search" class="input_self u-input-transparent" v-model="form.load_model_function" placeholder="Please input" @change="allSteps" />
              </div>
              <div class="input-box u-margin-left-2rem">
                <span class="input-label">模型预处理函数名</span>
                <input type="text" autocomplete="off" name="search" class="input_self  u-input-transparent" v-model="form.preprocess_function" placeholder="Please input" @change="allSteps" />
              </div>
              <div class="input-box u-margin-left-2rem">
                <span class="input-label">创建迭代器函数名</span>
                <input type="text" autocomplete="off" name="search" class="input_self  u-input-transparent" v-model="form.deprocess_function" placeholder="Please input" @change="allSteps" />
              </div>
            </div>
          </div>
          <h3 class="form-with-guide--main-part__left--title u-font-f2f2f2">选择训练参数</h3>
          <div id="1" style="display: grid;grid-template-columns: 48% auto 48%;">
            <div class="background-image-card u-margin-top-medium">
            <div class="background-image-card--img-box">
              <img src="../img/6-nerual.png" alt="fenzi">
            </div>
            <div class="background-image-card--right-part">
                <div class="input-box u-margin-left-2rem">
                <span class="input-label">batch size</span>
                <div style="display:grid;grid-template-columns: 65% 5% 30%;width: 100%;"> 
                 
                  <input type="text" autocomplete="off" name="search" class="input_self u-input-transparent"  v-model="form.iteration" >
                </div>
              </div>
              <div class="input-box u-margin-left-2rem">
                <span class="input-label">epoch</span>
                <div style="display:grid;grid-template-columns: 65% 5% 30%;width: 100%;"> 
                  <input type="text" autocomplete="off" name="search" class="input_self u-input-transparent"  v-model="form.num_per_iteration" >
                </div>
              </div>
              <div class="input-box u-margin-left-2rem">
                <span class="input-label">损失函数</span>
                <el-select v-model="value_loss" class="m-2" placeholder="Select" style="background: none;">
                    <el-option
                    v-for="item in options_loss"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    />
                </el-select>
              </div>
              <div class="input-box u-margin-left-2rem">
                <span class="input-label">优化器</span>
                <el-select v-model="value_optimizer" class="m-2" placeholder="Select" style="background: none;">
                    <el-option
                    v-for="item in options_optimizer"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    />
                </el-select>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <slot name="Submit_button"></slot>
        </el-form>
      </el-scrollbar>
    </div>
</template>
<script lang="ts" setup>
import { reactive ,Ref} from "vue";
import { ref } from "vue";
import { genFileId, FormInstance } from "element-plus";
import type { UploadInstance, UploadProps, UploadRawFile } from "element-plus";
import Cookies from 'js-cookie'
import { Edit, Picture, Upload } from '@element-plus/icons-vue'
import testImportJson from "../json/DRLFuzz.json"
console.log(testImportJson)
const input2 = ref('')
const activeNames = ref(['1'])
const value_loss = ref('')

const options_loss = [
  {
    value: 'NLL',
    label: 'NLL',
  },
  {
    value: 'CE',
    label: 'CE',
  },
  {
    value: 'Focal',
    label: 'Focal',
  },
  {
    value: 'Hinge',
    label: 'Hinge',
  },
  {
    value: 'MSE',
    label: 'MSE',
  },{
    value: 'AL',
    label: 'AL',
  },
]

const value_optimizer = ref('')

const options_optimizer = [
  {
    value: 'Adam',
    label: 'Adam',
  },
  {
    value: 'Adagrad',
    label: 'Adagrad',
  },
  {
    value: 'RMSProp',
    label: 'RMSProp',
  },
  {
    value: 'Gradient Descent',
    label: 'Gradient Descent',
  },
  {
    value: 'Stochastic Gradient Descent',
    label: 'Stochastic Gradient Descent',
  },
]

interface Project {
  type: string;
  name: string;
  id:string
}
const props = defineProps<{
currentProject: Project,
projectList: Project[],
formPartLogin: boolean,
currentProjectId:string
}>();
const emits = defineEmits(["setstep"]);
interface Form {
iteration: Number;
num_per_iteration: Number;
score_threshold: Number;
load_model_function: string;
preprocess_function: string;
deprocess_function: string;
}
const formPartShow = ref(true)


const initForm = () => {
let formBak:Form = {
  iteration: 100,
  num_per_iteration:10,
  score_threshold:2,
  load_model_function: '',
  preprocess_function:'',
  deprocess_function:'',
}
form.iteration = formBak.iteration;
form.num_per_iteration = formBak.num_per_iteration;
form.score_threshold = formBak.score_threshold;
form.load_model_function = formBak.load_model_function;
form.preprocess_function = formBak.preprocess_function;
form.deprocess_function = formBak.deprocess_function;
// 清空文件
uploadModel.value.clearFiles()
uploadCode.value.clearFiles();
uploadSeed.value.clearFiles();
uploadBenign.value.clearFiles();
uploadPreprocess.value.clearFiles()
loadFiles[0] = false
loadFiles[1] = false
loadFiles[2] = false
loadFiles[3] = false
}
// 表单用到的数据
const form = reactive<Form>({
    iteration: 100,
    num_per_iteration: 10,
    score_threshold:2,
    load_model_function: '',//Model1
    preprocess_function: '',
    deprocess_function:''
});
// el-form 的ref元素
const formdata = ref<FormInstance>();
// threshold json
const thresholdValue = {
max: 1,
step: 0.01,
};
// 上传模型的ref元素
const uploadModel = ref();
const handleExceedModel: UploadProps["onExceed"] = (files) => {
uploadModel.value!.clearFiles();
const file = files[0] as UploadRawFile;
file.uid = genFileId();
uploadModel.value!.handleStart(file);
};
// 上传模型代码的ref元素
const uploadCode = ref();
const handleExceedCode: UploadProps["onExceed"] = (files) => {
uploadCode.value!.clearFiles();
const file = files[0] as UploadRawFile;
file.uid = genFileId();
uploadCode.value!.handleStart(file);
};
// 上传模型代码的ref元素
const uploadSeed = ref();
const handleExceedSeed: UploadProps["onExceed"] = (files) => {
uploadSeed.value!.clearFiles();
const file = files[0] as UploadRawFile;
file.uid = genFileId();
uploadSeed.value!.handleStart(file);
};
// 上传模型代码的ref元素
const uploadPreprocess = ref();
const handleExceedPreprocess: UploadProps["onExceed"] = (files) => {
uploadPreprocess.value!.clearFiles();
const file = files[0] as UploadRawFile;
file.uid = genFileId();
uploadPreprocess.value!.handleStart(file);
};
const uploadBenign = ref()
const handleExceedBenign: UploadProps["onExceed"] = (files) => {
uploadBenign.value!.clearFiles();
const file = files[0] as UploadRawFile;
file.uid = genFileId();
uploadBenign.value!.handleStart(file);
};
// 获取文件
let modelFile: any = null;
let codeFile: any = null;
let seedSetFile: any = null;
let benignFile:any = null
let preprocessingFunctionFile: any = null;
const modelFileChange: UploadProps["onChange"] = (uploadFile, uploadFiles) => {
modelFile = uploadFiles[0].raw;
loadFiles[0] = true
allSteps()
console.log(modelFile);
};
const codeFileChange: UploadProps["onChange"] = (uploadFile, uploadFiles) => {
codeFile = uploadFiles[0].raw;
loadFiles[1] = true
allSteps()
console.log(codeFile);
};
const seedSetChange: UploadProps["onChange"] = (uploadFile, uploadFiles) => {
seedSetFile = uploadFiles[0].raw;

loadFiles[2] = true
allSteps()
console.log(seedSetFile);
};
const benignFileChange: UploadProps["onChange"] = (uploadFile, uploadFiles) => {
benignFile = uploadFiles[0].raw;

loadFiles[2] = true
allSteps()
console.log(benignFile);
};
const preprocessingFunction: UploadProps["onChange"] = (uploadFile, uploadFiles) => {
preprocessingFunctionFile = uploadFiles[0].raw;
loadFiles[3] = true
allSteps()
// console.log(preprocessingFunctionFile);
};
const modelFileRemove = () => {
loadFiles[0] = false
allSteps()
};
const codeFileRemove = () => {
loadFiles[1] = false
allSteps()
};
const seedSetRemove = () => {
loadFiles[2] = false
allSteps()
};
const benignfileRemove = () => {
loadFiles[2] = false
allSteps()
};
const preprocessingRemove = () => {
loadFiles[3] = false
};

// 发送表单
const submitForm = async (formEl: FormInstance | undefined) => {
let formDataObject = new FormData();
if (!formEl) return null;
let what = await formEl.validate((valid:any, fields:any) => {
  if (valid) {
    let userID: any = Cookies.get('userID')
    console.log(userID)
    formDataObject.append("ID", userID);
    formDataObject.append("project_name", props.currentProjectId);
    formDataObject.append("model_file", modelFile );
    formDataObject.append("code_file", codeFile );
    formDataObject.append("testgame_file", benignFile);
    formDataObject.append("pretreatment_file", preprocessingFunctionFile);
    formDataObject.append("num", String(form.iteration));
    formDataObject.append("n", String(form.num_per_iteration));
    formDataObject.append("theta", String(form.score_threshold));
    formDataObject.append("modelfunction_name", form.load_model_function);
    formDataObject.append("pretreatment_function", form.preprocess_function);
    formDataObject.append("agentfunction_name", form.deprocess_function);

    
  } else {
    console.log("error submit!", fields);
  }
});
console.log(what);
return formDataObject;
};
const submitFormWapper = async () => {
let formdataObject = await submitForm(formdata.value);
console.log(formdataObject);
return formdataObject;
};
// 清空表单
const resetForm = (formEl: FormInstance | undefined) => {
if (!formEl) return;
initForm()
formEl.resetFields();
allSteps()
};

/**
* step change module
* const activeStep:Ref<number> = ref(0)
* const loadFiles:boolean[] = [false,false,false,false] 对应四个upload card
*
* function allSteps(){}
* function confirmLoadFiles():boolean {}
* function loadFilesMessage():boolean {}
*/




const resetFormWapper = () => {
resetForm(formdata.value);
};
const activeStep: Ref<number> = ref(0)
const loadFiles: boolean[] = [false, false, false, false]
function allSteps() {
activeStep.value = 0;
let stepList:boolean[] = [false,false]
stepList[0] = confirmLoadFiles();
stepList[1] = loadFilesMessage();
for (let item in stepList) {
if (stepList[item]) {
  activeStep.value ++
  emits('setstep',activeStep.value,stepMessage)
}
else return;
}

}
function confirmLoadFiles():boolean {
let flag:boolean = true
loadFiles.forEach((item: boolean) => {
item ? 1 : flag = false;
})
return flag
}

function loadFilesMessage():boolean {
const keyList = ['load_model_function', 'layer_name', 'shape','preprocess_function','deprocess_function']
for (let key in form){
if (keyList.includes(key)) {
  if (form[key] === '') return false
}
}
return true
}
/**
* submit form module
*/
const stepMessage = [{
title: 'step 1',
message:'上传待测模型和数据集'
}, {
title: 'step 2',
message:'提供模型基础信息'
}, {
title: 'step 3',
message:'确认模糊测试参数'
}, {
title: 'step 4',
message:'提交'
}]
emits('setstep',activeStep.value,stepMessage)


defineExpose({
form,
submitFormWapper,
resetFormWapper,
activeStep,
stepMessage
});
</script>

<style src="../style/skeleton.scss" lang="scss">

</style>