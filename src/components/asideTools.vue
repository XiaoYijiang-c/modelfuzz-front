<template>
  <div class="tool">
    <div class="tool--title"><h5 class="mb-2 u-font-f2f2f2">Analysis</h5></div> 
    
      <ul class="tool--list">
        <el-scrollbar>
        <li class="tool--list-item"  @click="emits('switchpenal'),clearActiveList(),activeList._1=true" :class="{'tool--list-item--active':activeList._1}">
          <div class="tool--list-item--icon"><el-icon ><House/></el-icon></div>
          <span class="tool--list-item--text">
            {{ submenu_project.name }}
            <!-- <el-icon v-if="!submenu_project.status"><CaretBottom /></el-icon>
            <el-icon v-else><CaretTop /></el-icon> -->
          </span>
          <!-- <ul class="tool--list" v-if="submenu">
            <li class="tool--sublist-item">
              <span class="tool--sublist-item--icon"><el-icon ></el-icon></span>
              <span class="tool--sublist-item--text">test</span>
            </li>
          </ul> -->
        </li>
        <!-- <ul class="tool--sublist" v-show="submenu_project.status">
          <li class="tool--sublist-item">
            <span class="tool--sublist-item--icon"><el-icon ></el-icon></span>
            <span class="tool--sublist-item--text" :class="{'tool--list-item--active':activeList._1_1}" @click="emits('show','dlfuzzpenel'),clearActiveList(),activeList._1_1=true" >模糊测试</span>
          </li>
          <li class="tool--sublist-item">
            <span class="tool--sublist-item--icon"><el-icon ></el-icon></span>
            <span class="tool--sublist-item--text" :class="{'tool--list-item--active':activeList._1_2}" @click="clearActiveList(),activeList._1_2=true">模型重训练</span>
          </li>
          <li class="tool--sublist-item">
            <span class="tool--sublist-item--icon"><el-icon ></el-icon></span>
            <span class="tool--sublist-item--text" :class="{'tool--list-item--active':activeList._1_3}" @click="emits('show','datasetEvaluate'),clearActiveList(),activeList._1_3=true">数据集分析</span>
          </li>
        </ul> -->
        
        
        
        
        <li class="tool--list-item" @click="emits('show','activity'),clearActiveList(),activeList._2=true" :class="{'tool--list-item--active':activeList._2}">
          <div class="tool--list-item--icon"><el-icon><DataAnalysis /></el-icon></div>
          <span class="tool--list-item--text">
            统计数据
            <!-- <el-icon v-if="!submenu_statistic.status"><CaretBottom /></el-icon>
            <el-icon v-else><CaretTop /></el-icon> -->
          </span>
        </li>
        <!-- <ul class="tool--sublist" v-show="submenu_statistic.status">
          <li class="tool--sublist-item">
            <span class="tool--sublist-item--icon"><el-icon ></el-icon></span>
            <span class="tool--sublist-item--text" :class="{'tool--list-item--active':activeList._2_1}" @click="emits('show','activity'),clearActiveList(),activeList._2_1=true">实时展示</span>
          </li>
          <li class="tool--sublist-item">
            <span class="tool--sublist-item--icon"><el-icon ></el-icon></span>
            <span class="tool--sublist-item--text" :class="{'tool--list-item--active':activeList._2_2}" @click="clearActiveList(),activeList._2_2=true">结果仓库</span>
          </li>
          <li class="tool--sublist-item">
            <span class="tool--sublist-item--icon"><el-icon ></el-icon></span>
            <span class="tool--sublist-item--text" :class="{'tool--list-item--active':activeList._2_3}" @click="clearActiveList(),activeList._2_3=true">测试历史</span>
          </li>
        </ul> -->


        <li class="tool--list-item" @click="emits('show','projectshub'),clearActiveList(),activeList._3=true" :class="{'tool--list-item--active':activeList._3}">
          <div class="tool--list-item--icon"><el-icon><Grid /></el-icon></div>
          <span class="tool--list-item--text">
            {{ submenu_process.name }}
            <!-- <el-icon v-if="!submenu_process.status"><CaretBottom /></el-icon>
            <el-icon v-else><CaretTop /></el-icon> -->
          </span>
        </li>
        <!-- <ul class="tool--sublist" v-show="submenu_process.status">
          <li class="tool--sublist-item">
            <span class="tool--sublist-item--icon"><el-icon ></el-icon></span>
            <span class="tool--sublist-item--text" :class="{'tool--list-item--active':activeList._3_1}" @click="clearActiveList(),activeList._3_1=true">当前进程</span>
          </li>
          <li class="tool--sublist-item">
            <span class="tool--sublist-item--icon"><el-icon ></el-icon></span>
            <span class="tool--sublist-item--text" :class="{'tool--list-item--active':activeList._3_2}" @click="clearActiveList(),activeList._3_2=true">历史进程</span>
          </li>
        </ul> -->
        <li class="tool--list-item" @click="emits('show','userhub'),clearActiveList(),activeList._4=true" :class="{'tool--list-item--active':activeList._4}">
          <div class="tool--list-item--icon"><el-icon><Setting /></el-icon></div>
          <span class="tool--list-item--text">
            {{ submenu_personal.name }}
            <!-- <el-icon v-if="!submenu_personal.status"><CaretBottom /></el-icon>
            <el-icon v-else><CaretTop /></el-icon> -->
          </span>
        </li>
        <!-- <ul class="tool--sublist" v-show="submenu_personal.status">
          <li class="tool--sublist-item">
            <span class="tool--sublist-item--icon"><el-icon ></el-icon></span>
            <span class="tool--sublist-item--text" :class="{'tool--list-item--active':activeList._4_1}" @click="emits('show','userhub'),clearActiveList(),activeList._4_1=true">个性设置</span>
          </li>
          <li class="tool--sublist-item">
            <span class="tool--sublist-item--icon"><el-icon ></el-icon></span>
            <span class="tool--sublist-item--text" :class="{'tool--list-item--active':activeList._4_2}" @click="emits('show','projectshub'),clearActiveList(),activeList._4_2=true">项目管理</span>
          </li>

        </ul> -->
      </el-scrollbar>
      </ul>
    <div class="tool--bottom-back" @click="emits('switchPage')"><el-icon><Back /></el-icon></div>
  </div>
</template>
<script lang="ts" setup>
import { objectPick } from "@vueuse/shared";
import testImportJson from "../json/tools.json";
import { ref,reactive } from 'vue'



const props = defineProps({
  newNumber: {
    type: Number,
  }, openASide: {
    type: Boolean
  }
});

const isCollapse = ref(true)

const activeList = reactive({
  _1: false,
  _2: false,
  _3: false,
  _4: true,
})
function clearActiveList() {
  for (let key in activeList) {
    activeList[key] = false;
  }
}
const toolsData = testImportJson
const test = (value: any) => {
  console.log(value);
};
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
interface ToolOpenSetting {
  name: string;
  status: boolean;
}
const submenu_project:ToolOpenSetting = reactive({
  name: "项目设置",
  status:false
})
const submenu_statistic:ToolOpenSetting = reactive({
  name: "统计数据",
  status:false
})
const submenu_process:ToolOpenSetting = reactive({
  name: "项目管理",
  status:false
})
const submenu_personal:ToolOpenSetting = reactive({
  name: "个人设置",
  status:true
})
function openSubmenus(item:ToolOpenSetting) {
  item.status= !item.status
}

const emits = defineEmits(["show", "switchPage", "switchpenal"]);
defineExpose({
  clearActiveList,
  activeList
})
</script>
<style src="../style/skeleton.scss" lang="scss">

</style>