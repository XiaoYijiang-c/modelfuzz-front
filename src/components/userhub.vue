<template>
    
    <el-scrollbar>
    <div class="userhub">

        <div class="userhub--header_image"></div>
        <div class="userhub--head_sculpture">
            <div class="userhub--head_sculpture--image">
                <img src="../img/xp.png" alt="header" />
            </div>
            
            <div class="userhub--head_sculpture--tools">
               <span class="userhub--head_sculpture--tools__uptool">
                   <span class="userhub--head_sculpture--tools__uptool--item"><p>1</p><h3>项目数</h3></span>
                   <span class="userhub--head_sculpture--tools__uptool--item"><p>1</p><h3>产生结果</h3></span>
                   <span class="userhub--head_sculpture--tools__uptool--item"><p>1</p><h3>新消息</h3></span>
                </span>
                <div class="userhub--head_sculpture--tools__time-list">
                    <el-scrollbar>
                        <span class="userhub--head_sculpture--tools__time-list--item">
                            <div class="ticket">
                                <span class="ticket--text">new-projects</span>
                                <p class="ticket--message">项目已经进行了3天14小时</p>
                                <el-icon class="ticket--icon"><Star /></el-icon>
                            </div>
                            <div class="ticket">
                                <span class="ticket--text">new-projects</span>
                                <p class="ticket--message">项目已经进行了3天14小时</p>
                                <el-icon class="ticket--icon"><Star /></el-icon>
                            </div>
                            <div class="ticket">
                                <span class="ticket--text">new-projects</span>
                                <p class="ticket--message">项目已经进行了3天14小时</p>
                                <el-icon class="ticket--icon"><Star /></el-icon>
                            </div>
                        </span>
                    </el-scrollbar>
                </div>
                
              <!--    <div class="userhub--head_sculpture--tools__message" @click="toPagePath('/testnnsvg')">当前项目
                    <span class="userhub--head_sculpture--tools__name btn" style="width: 20rem;" @click="emits('show','projectshub')">点击查看</span>
                    <span class="userhub--head_sculpture--tools__name btn" style="width: 20rem;" @click="logout">登出</span>
                </div> -->
                <!-- <ul class="userhub--head_sculpture--tools__button_list">
                    <li class="btn" style="background-color: navy;">New Project</li>
                    <li class="btn" style="background-color: navy;">setting</li>
                </ul> -->
            </div>
            
            <!-- <div class="userhub--head_sculpture--background-color-block"></div> -->
        </div>
        <div class="userhub--calendar" ref="hatchart">
            
        </div>
    </div>
    </el-scrollbar>
</template>

<script lang="ts" setup>
import { ElMessageBox } from 'element-plus';
import { ref, Ref, nextTick } from 'vue'
import type { Action } from 'element-plus'
import axios from 'axios';
import Cookies from 'js-cookie'
import { useRouter } from "vue-router";
import * as echarts from 'echarts';
const router = useRouter();
const toPagePath = (url: string) => {
    router.push({
        path: url,
    });
}
const emits = defineEmits(["show",'switchPage']);
const name:Ref<string> = ref('肆夕')
const titleList:Ref<string[]> = ref(['Student','SCU'])
    
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
const props = defineProps<{
    userMessage: LoginMessage,
}>();
console.log(props.userMessage)
function logout() {
    ElMessageBox.alert('是否确认登出:'+name.value, '警告', {
    // if you want to disable its autofocus
    // autofocus: false,
    confirmButtonText: 'OK',
    callback: (action: Action) => {
        if (action == 'confirm') {
           Cookies.remove('username')
            Cookies.remove('userID')
           emits('switchPage')
        }
    },
  })
}
const projectLength = ref(0)
async function getRefCurrentWH(ref:any) {
    let setChartsWH = {
        height:0,
        width:0
    }
    await nextTick()

    setChartsWH.height = ref.value.clientHeight
    setChartsWH.width = ref.value.clientWidth

    return setChartsWH
}
let hatchart = ref()
let myEcharts1 = null
async function loadChart() {
    let ref_1WH =  await getRefCurrentWH(hatchart)
    myEcharts1 = echarts.init(hatchart.value,'',ref_1WH);
    myEcharts1.setOption(option);
}
loadChart()
function getVirtualData(year: string) {
  const date = +echarts.time.parse(year + '-01-01');
  const end = +echarts.time.parse(+year + 1 + '-01-01');
  const dayTime = 3600 * 24 * 1000;
  const data: [string, number][] = [];
  for (let time = date; time < end; time += dayTime) {
    data.push([
      echarts.time.format(time, '{yyyy}-{MM}-{dd}', false),
      Math.floor(Math.random() * 6000)
    ]);
  }
  return data;
}

let option = {
  title: {
    top: 30,
    left: 'center',
    text: '对抗样本产出数',
    textStyle: {
        color: '#f2f2f2'
    }
  },
  tooltip: {},
  visualMap: {
    min: 0,
    max: 10000,
    type: 'piecewise',
    orient: 'horizontal',
    left: 'center',
    top: 65,
    textStyle: {
        color: '#f2f2f2'
    },pieces: [ {gte: 5000, color: '#485820'}, {gte: 4000, lte: 5000, color: '#72873D'}, {gte: 3000, lte: 4000, color: '#8DA146'}, {gte: 2000, lte: 3000, color: '#9FB364'}, {lte: 2000, color: '#E7F5CF'} ],
    },
    
  calendar: {
    top: 120,
    left: 30,
    right: 30,
    cellSize: ['auto', 13],
    range: '2016',
    itemStyle: {
      borderWidth: 0.5
    },
    yearLabel: {
        show: false,
        textStyle: {
            color: '#f2f2f2'
        }
      },
      dayLabel: {
          nameMap: 'cn',
          textStyle: {
            color: '#f2f2f2'
        }
      },
      monthLabel: {
        nameMap: 'cn',
          textStyle: {
            color: '#f2f2f2'
        }
    },
    textStyle: {
        color: '#f2f2f2'
    }
  },
  series: {
    type: 'heatmap',
    coordinateSystem: 'calendar',
      data: getVirtualData('2016'),
      textStyle: {
        color: '#f2f2f2'
    }
  }
};
// onMounted(() => {
//     projectLength.value = props.userMessage.projects.length
// })
</script>

<style src="../style/skeleton.scss" lang="scss">

</style>