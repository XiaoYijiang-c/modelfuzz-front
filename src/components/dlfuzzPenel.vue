<template>

      
<div class="form-with-guide--main-part__left--bottom">
  <el-scrollbar>
    <el-form 
      :model="form" label-width="30%" 
      ref="formdata" 
      style="padding:3rem;"
    >
    <h3 class="form-with-guide--main-part__left--title u-font-f2f2f2">上传计算机视觉模型</h3>
      <div class="uploadButton">
        <!-- <div style="width: 15%"></div> -->
        
          <div class="single-card-two-button">
            <p>上传模型源代码</p>
            <div class="single-card-two-button--icon-box">
              <img src="../img/01fenzi4d3a59.png" alt="fenzi">
            </div>
            <div class="single-card-two-button--backgroud-layer"></div>
            <el-upload ref="uploadCode" class="button-box" :limit="1" :on-exceed="handleExceedCode" :auto-upload="false"
          :on-change="codeFileChange" :on-remove="codeFileRemove">
              <template #trigger>
                <span class="single-card-two-button--button__left btn">Upload</span>
              </template>
              <span class="single-card-two-button--button__right btn">Example</span>
            </el-upload>
          </div>
          
            <!-- <el-card shadow="hover">上传模型源码</el-card> -->
            <div class="single-card-two-button">
            <p>上传模型</p>
            <div class="single-card-two-button--icon-box">
              <img src="../img/07deeplearn4d3a59.png" alt="fenzi">
            </div>
            <div class="single-card-two-button--backgroud-layer"></div>
            <el-upload ref="uploadModel" class="button-box" :limit="1" :on-exceed="handleExceedModel" :auto-upload="false"
          :on-change="modelFileChange" :on-remove="modelFileRemove">
              <template #trigger>
                <span class="single-card-two-button--button__left btn">Upload</span>
              </template>
              <span class="single-card-two-button--button__right btn">Example</span>
            </el-upload>
          </div>

          <div class="single-card-two-button">
            <p>上传种子集</p>
            <div class="single-card-two-button--icon-box">
              <img src="../img/04fangshengxue4d3a59.png" alt="fenzi">
            </div>
            <div class="single-card-two-button--backgroud-layer"></div>
            <el-upload ref="uploadSeed" class="button-box" :limit="1" :on-exceed="handleExceedSeed" :auto-upload="false"
          :on-change="seedSetChange" :on-remove="seedSetRemove">
              <template #trigger>
                <span class="single-card-two-button--button__left btn">Upload</span>
              </template>
              <span class="single-card-two-button--button__right btn">Example</span>
            </el-upload>
          </div>

          <div class="single-card-two-button">
            <p>上传预处理文件</p>
            <div class="single-card-two-button--icon-box">
              <img src="../img/08yunsuanzhongxing4d3a59.png" alt="fenzi">
            </div>
            <div class="single-card-two-button--backgroud-layer"></div>
            <el-upload ref="uploadPreprocess" class="button-box" :limit="1" :on-exceed="handleExceedPreprocess" :auto-upload="false"
          :on-change="preprocessingFunction" :on-remove="preprocessingRemove">
              <template #trigger>
                <span class="single-card-two-button--button__left btn">Upload</span>
              </template>
              <span class="single-card-two-button--button__right btn">Example</span>
            </el-upload>
          </div>
    
      </div>
      <div class="left-img-card">
        <div class="left-img-card--img-box">
          <img src="../img/0_setting.png" alt="fenzi">
        </div>
        <div class="left-img-card--right-part">
          <div class="input-box u-margin-left-2rem">
            <span class="input-label">加载模型函数</span>
            <input type="text" autocomplete="off" name="search" class="input_self u-input-transparent" v-model="form.load_model_function" placeholder="Please input" @change="allSteps" />
          </div>
          <div class="input-box u-margin-left-2rem">
            <span class="input-label">预处理函数名</span>
            <input type="text" autocomplete="off" name="search" class="input_self  u-input-transparent" v-model="form.preprocess_function" placeholder="Please input" @change="allSteps" />
          </div>
          <div class="input-box u-margin-left-2rem">
            <span class="input-label">图像解码函数名</span>
            <input type="text" autocomplete="off" name="search" class="input_self  u-input-transparent" v-model="form.deprocess_function" placeholder="Please input" @change="allSteps" />
          </div>
          <div class="input-box u-margin-left-2rem">
            <span class="input-label">模糊测试激活选择层名</span>
            <input type="text" autocomplete="off" name="search" class="input_self u-input-transparent" v-model="form.layer_name" placeholder="Please input" @change="allSteps" />
          </div>
          <div class="input-box u-margin-left-2rem">
            <span class="input-label">输入样本向量维度</span>
            <input type="text" autocomplete="off" name="search" class="input_self  u-input-transparent" v-model="form.shape" placeholder="Please input" @change="allSteps" />
          </div>
          

          
          
        </div>
      </div>
      <h3 class="form-with-guide--main-part__left--title u-font-f2f2f2">Fuzzing Strategy</h3>
      <div id="1" style="display: grid;grid-template-columns: 48% auto 48%;">
        <div class="background-image-card u-margin-top-medium">
        <div class="background-image-card--img-box">
          <img src="../img/6-nerual.png" alt="fenzi">
        </div>
        <div class="background-image-card--right-part">
          <div class="input-box u-margin-left-2rem">
            <span class="input-label">神经元覆盖策略</span>
            <el-checkbox-group v-model="form.type">
              <el-checkbox label="Select neurons covered frequently" name="1" />
              <el-checkbox label="Select neurons covered rarely" name="2" />
              <el-checkbox label="Select neurons with top weights" name="3" />
              <el-checkbox label="Select neurons near the activation threshold" name="4" />
            </el-checkbox-group>
          </div>
          <div class="input-box u-margin-left-2rem">
            <span class="input-label">神经元激活阈值</span>
            <div style="display:grid;grid-template-columns: 65% 5% 30%;width: 100%;"> 
              <el-slider v-model="form.value" :max="thresholdValue.max" :step="thresholdValue.step" />
              <div></div>
              <input type="text" autocomplete="off" name="search" class="input_self u-input-transparent"  v-model="form.value" >
            </div>
          </div>
            
          <div class="input-box u-margin-left-2rem">
            <span class="input-label">神经元覆盖数</span>
            <input type="text" autocomplete="off" name="search" class="input_self u-input-transparent" v-model="form.neuralNum" :min="1" :max="1000"  size="large" />
          </div>
        </div>
      </div>
      <div></div>
      <div class="background-image-card u-margin-top-medium">
        <div class="background-image-card--img-box">
          <img src="../img/6-nerual.png" alt="fenzi">
        </div>
        <div class="background-image-card--right-part">
          <div class="input-box u-margin-left-2rem">
            <span class="input-label">每个种子的迭代次数</span>
            <input type="text" autocomplete="off" name="search" class="input_self u-input-transparent " v-model="form.seedNum" :min="1" :max="1000"  size="large" />
          </div>
          
        </div>
      </div>
    </div>
    <slot name="Submit_button"></slot>
    <!-- <Header-tag :topList="['submit']"></Header-tag> -->
      
      
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
import axios from "axios";

const input2 = ref('')
const activeNames = ref(['1'])
const handleChange = (val: string[]) => {
  console.log(val)
}
interface Project {
    type: string;
    name: string;
    id:string
}
// type Type_List = 'cv' | 'mal'
const props = defineProps<{
  currentProjectId:string
}>();
const emits = defineEmits(["setstep"]);
interface Form {
  type: String[];
  value: Number;
  neuralNum: Number;
  seedNum: Number;
  load_model_function: string;
  layer_name: string;
  shape: string;
  preprocess_function: string;
  deprocess_function: string;
}


const initForm = () => {
  let formBak:Form = {
    type: ["Select neurons with top weights"],
    value: 0.5,
    neuralNum: 5,
    seedNum: 5,
    load_model_function: '',
    layer_name: '',
    shape:'',
    preprocess_function:'',
    deprocess_function:'',
  }
  form.neuralNum = formBak.neuralNum;
  form.value = formBak.value;
  form.type = formBak.type;
  form.seedNum = formBak.seedNum;
  form.load_model_function = formBak.load_model_function;
  form.layer_name = formBak.layer_name;
  form.shape = formBak.shape;
  form.preprocess_function = formBak.preprocess_function;
  form.deprocess_function = formBak.deprocess_function;
  // 清空文件
  uploadModel.value.clearFiles()
  uploadCode.value.clearFiles()
  uploadSeed.value.clearFiles()
  uploadPreprocess.value.clearFiles()
  loadFiles[0] = false
  loadFiles[1] = false
  loadFiles[2] = false
  loadFiles[3] = false
}
// 表单用到的数据
const form = reactive<Form>({
  type: ["Select neurons with top weights"],
  value: 0.5,
  neuralNum: 5,
  seedNum: 5,
  load_model_function: '',//Model1
  layer_name: '',//before_softmax
  shape: '',//(28,28,1)
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
// 获取文件
let modelFile: any = null;
let codeFile: any = null;
let seedSetFile: any = null;
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
const preprocessingRemove = () => {
  loadFiles[3] = false
};
function load_data(url: string,currentProjectId:string) {
  console.log('loaddata');
  let formDataObject = new FormData();
  formDataObject.append("project_id", currentProjectId);
  axios.post(url, formDataObject).then((res) => {
    console.log(res.data)
    let formBak: Form = res.data;
    form.neuralNum = Number(formBak.neuralNum);
    form.value = Number(formBak.value);
    console.log("form.value",form.value)
    let list:string[] = []
    for (let item of formBak.type) {
        if (item == "0") {
          list.push("Select neurons covered frequently");
        } else if (item == "1") {
          list.push("Select neurons covered rarely");
        } else if (item == "2") {
          list.push("Select neurons with top weights");
        } else if (item == "3") {
          list.push("Select neurons near the activation threshold");
        }
    }
    form.type = list;
    
    form.seedNum = Number(formBak.seedNum);
    form.load_model_function = formBak.load_model_function;
    form.layer_name = formBak.layer_name;
    form.shape = formBak.shape;
    form.preprocess_function = formBak.preprocess_function;
    form.deprocess_function = formBak.deprocess_function;
  })
}
// 发送表单
const submitForm = async (formEl: FormInstance | undefined) => {
  let formDataObject = new FormData();
  if (!formEl) return null;
  let what = await formEl.validate((valid:any, fields:any) => {
    if (valid) {
      let userID: any = Cookies.get('userID')
      console.log(userID)
      formDataObject.append("ID", userID);
      formDataObject.append("project_name", "luojiale");
      formDataObject.append("modelFile", modelFile );
      formDataObject.append("codeFile", codeFile );
      formDataObject.append("seed", seedSetFile);
      formDataObject.append("preprocessingFunction", preprocessingFunctionFile);
      formDataObject.append("threshold", String(form.value));
      formDataObject.append("neuron_to_cover_num", String(form.neuralNum));
      formDataObject.append("iteration_times", String(form.seedNum));
      formDataObject.append("load_module_function_name", form.load_model_function);
      formDataObject.append("layer_name", form.layer_name);
      formDataObject.append("shape", form.shape);
      formDataObject.append("preprocess_function", form.preprocess_function);
      formDataObject.append("deprocess_function", form.deprocess_function);
      // formDataObject.append("submit", '1');
      // formDataObject.append("choosemodel", 'model1');
      formDataObject.append("project_id", props.currentProjectId);

      let list = [];
      for (let item of form.type) {
        console.log(item);
        if (item == "Select neurons covered frequently") {
          list.push("0");
        } else if (item == "Select neurons covered rarely") {
          list.push("1");
        } else if (item == "Select neurons with top weights") {
          list.push("2");
        } else if (item == "Select neurons near the activation threshold") {
          list.push("3");
        }
      }
      formDataObject.append("strategy", '[' + String(list) + ']');
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


defineExpose({
  form,
  submitFormWapper,
  resetFormWapper,
  activeStep,
  stepMessage,
  load_data
});
</script>

<style src="../style/skeleton.scss" lang="scss">

</style>