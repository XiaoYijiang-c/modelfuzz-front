<template>
  <div class="form-with-guide" 
    v-if="formPartShow"
    >
    
      <div class="form-with-guide--main-part">
    <div class="form-with-guide--main-part__left">
      <div class="form-with-guide--header ">
        <el-dropdown class="form-with-guide--header--dropdown">
            <span class="el-dropdown-link form-with-guide--header__text u-menu_list u-font-f2f2f2">
              <el-icon class="el-icon--right u-margin-right-1rem" v-if="props.currentProject.type === 'cv'"><Picture /></el-icon>
              <el-icon class="el-icon--right u-margin-right-1rem" v-else-if="props.currentProject.type === 'mal'"><Platform /></el-icon>
              {{ props.currentProject.name }}<el-icon class="el-icon--right u-margin-left-1rem"><arrow-down /></el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                    <div class="u-menu_list" v-for="item in projectList" :key="item.id">
                      
                      <el-dropdown-item @click="emits('changeProject',item),emits('chooseProject'),emits('setProjectID',item.id)">{{ item.name }} 
                        <div  v-if="item.type === 'cv'" class="u-flex-center "><el-icon color="#f2f2f2"><Picture /></el-icon></div>
                      <div v-else-if="item.type === 'mal'" class="u-flex-center "><el-icon  color="#f2f2f2"><Platform /></el-icon></div></el-dropdown-item>
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
      <div 
        class="form-with-guide--main-part__left--bottom"
        style="display:flex;align-items: center;justify-content: center;"
        v-if="props.formPartLogin"
        >
        <div>
              <img src="../img/empty.png" alt="">
               <div style="font-size: 2rem;color: #f2f2f2;">请选择一个项目</div>
            </div>
      </div>
      
      <div class="form-with-guide--main-part__left--bottom"  v-else>
        <el-scrollbar>
          <el-form 
            :model="form" label-width="30%" 
            ref="formdata" 
            style="padding:3rem;"
          >
          <h3 class="form-with-guide--main-part__left--title u-font-f2f2f2">Upload Files</h3>
            <div class="uploadButton">
              <!-- <div style="width: 15%"></div> -->
              
                <div class="single-card-two-button">
                  <p>Upload Source code</p>
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
                  <p>Upload Model</p>
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
                  <p>Upload Seed</p>
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
                  <p>Upload Preprocessing Function</p>
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
                  <span class="input-label">Load Function Name</span>
                  <input type="text" autocomplete="off" name="search" class="input_self u-input-transparent" v-model="form.load_model_function" placeholder="Please input" @change="allSteps" />
                </div>
                <div class="input-box u-margin-left-2rem">
                  <span class="input-label">Preprocess Function Name</span>
                  <input type="text" autocomplete="off" name="search" class="input_self  u-input-transparent" v-model="form.preprocess_function" placeholder="Please input" @change="allSteps" />
                </div>
                <div class="input-box u-margin-left-2rem">
                  <span class="input-label">Deprocess Function Name</span>
                  <input type="text" autocomplete="off" name="search" class="input_self  u-input-transparent" v-model="form.deprocess_function" placeholder="Please input" @change="allSteps" />
                </div>
                <div class="input-box u-margin-left-2rem">
                  <span class="input-label">Layer name</span>
                  <input type="text" autocomplete="off" name="search" class="input_self u-input-transparent" v-model="form.layer_name" placeholder="Please input" @change="allSteps" />
                </div>
                <div class="input-box u-margin-left-2rem">
                  <span class="input-label">shape</span>
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
                  <span class="input-label">Neuron coverage strategy</span>
                  <el-checkbox-group v-model="form.type">
                    <el-checkbox label="Select neurons covered frequently" name="1" />
                    <el-checkbox label="Select neurons covered rarely" name="2" />
                    <el-checkbox label="Select neurons with top weights" name="3" />
                    <el-checkbox label="Select neurons near the activation threshold" name="4" />
                  </el-checkbox-group>
                </div>
                <div class="input-box u-margin-left-2rem">
                  <span class="input-label">Neuron activation threshold</span>
                  <div style="display:grid;grid-template-columns: 65% 5% 30%;width: 100%;"> 
                    <el-slider v-model="form.value" :max="thresholdValue.max" :step="thresholdValue.step" />
                    <div></div>
                    <input type="text" autocomplete="off" name="search" class="input_self u-input-transparent"  v-model="form.value" >
                  </div>
                </div>
                  
                <div class="input-box u-margin-left-2rem">
                  <span class="input-label">Number of neurons covered</span>
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
                  <span class="input-label">Variation times per seed</span>
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
    
    </div>
    <div class="form-with-guide--main-part__right">
      <div style="height: 300px;position:sticky;top:2rem">
        <el-steps direction="vertical" :active="activeStep" finish-status="success">
          <el-step title="Step 1"  style="background-color: transparent;">
           <template v-slot:description>
              <span  class="step-text">hello</span>
           </template>
           <template v-slot:title>
              <span  class="step-title">Step 1</span>
           </template>
          </el-step>
          <el-step title="Step 2"  style="background-color: transparent;">
           <template v-slot:description>
              <span class="step-text">hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello </span>
           </template>
           <template v-slot:title>
              <span  class="step-title">Step 2</span>
           </template>
          </el-step>
          <el-step title="Step 3"  style="background-color: transparent;">
           <template v-slot:description>
              <span class="step-text">hello</span>
           </template>
           <template v-slot:title>
              <span  class="step-title">Step 3</span>
           </template>
          </el-step>
        </el-steps>
      </div>
    </div>
      </div>
   
  </div>
</template>
<script lang="ts" setup>
import { reactive ,Ref} from "vue";
import { ref } from "vue";
import { genFileId, FormInstance } from "element-plus";
import type { UploadInstance, UploadProps, UploadRawFile } from "element-plus";
import Cookies from 'js-cookie'
import { Edit, Picture, Upload } from '@element-plus/icons-vue'

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
  currentProject: Project,
  projectList: Project[],
  formPartLogin: boolean,
  currentProjectId:string
}>();
const emits = defineEmits(["changeProject","chooseProject","setProjectID"]);
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
const formPartShow = ref(true)


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

// 发送表单
const submitForm = async (formEl: FormInstance | undefined) => {
  let formDataObject = new FormData();
  if (!formEl) return null;
  let what = await formEl.validate((valid:any, fields:any) => {
    if (valid) {
      let userID: any = Cookies.get('userID')
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

const activeStep: Ref<number> = ref(0)
const loadFiles: boolean[] = [false, false, false, false]
function allSteps() {
  activeStep.value = 0;
  let stepList:boolean[] = [false,false]
  stepList[0] = confirmLoadFiles();
  stepList[1] = loadFilesMessage();
  for (let item in stepList) {
    if (stepList[item]) activeStep.value ++;
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



const resetFormWapper = () => {
  resetForm(formdata.value);
};
defineExpose({
  form,
  submitFormWapper,
  resetFormWapper,
  formPartShow,
});
</script>

<style src="../style/skeleton.scss" lang="scss">

</style>