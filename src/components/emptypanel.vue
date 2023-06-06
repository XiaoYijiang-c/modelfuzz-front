<template>

        <div 
          class="form-with-guide--main-part__left--bottom"
          style="display:flex;align-items: center;justify-content: center;"
          >
          <div>
                <img src="../img/empty.png" alt="">
                 <div style="font-size: 2rem;color: #f2f2f2;">{{ $t('empty.message') }}</div>
              </div>
        </div>
        
      
      
      <!-- <div class="form-with-guide--main-part__right">
        <div style="height: 300px;position:sticky;top:2rem">
          <el-steps direction="vertical" :active="activeStep" finish-status="success">
            <el-step title="Step 1"  style="background-color: transparent;">
             <template v-slot:description>
                <span  class="step-text">选择你的项目</span>
             </template>
             <template v-slot:title>
                <span  class="step-title">Step 1</span>
             </template>
            </el-step>
          </el-steps>
        </div>
      </div> -->

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
  const emits = defineEmits(["setstep"]);
  interface Form {
    value: Number;
    neuronal_value: Number;
    load_model_function: string;
    preprocess_function: string;
    deprocess_function: string;
  }
  const formPartShow = ref(true)
  
  
  const initForm = () => {
    let formBak:Form = {
      value: 1,
      neuronal_value:1,
      load_model_function: '',
      preprocess_function:'',
      deprocess_function:'',
    }
    form.value = formBak.value;
    form.neuronal_value = formBak.neuronal_value;
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
    value: 1,
    neuronal_value: 1,
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
        formDataObject.append("sample_folder", seedSetFile);
        formDataObject.append("benign_section_content", benignFile);
        formDataObject.append("pretreatment_file", preprocessingFunctionFile);
        formDataObject.append("threshold", String(form.value));
        formDataObject.append("neuronal_threshold", String(form.neuronal_value));
        formDataObject.append("load_module_function_name", form.load_model_function);
        formDataObject.append("fake_input_name", form.preprocess_function);
        formDataObject.append("create_raw_input_name", form.deprocess_function);
  
        
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
  message:'选择你的项目'
} ]
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