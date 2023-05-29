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
                   <span class="userhub--head_sculpture--tools__uptool--item"><p>{{ props.userMessage.projects_length }}</p><h3>{{ $t('Userhub.tool_item_0')}}</h3></span>
                   <span class="userhub--head_sculpture--tools__uptool--item"><p>1047</p><h3>{{ $t('Userhub.tool_item_1')}}</h3></span>
                   <span class="userhub--head_sculpture--tools__uptool--item"><p>1</p><h3>{{ $t('Userhub.tool_item_2')}}</h3></span>
                </span>
                <div class="userhub--head_sculpture--tools__time-list">
                    <el-scrollbar>
                        <!-- <span class="userhub--head_sculpture--tools__time-list--item">
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
                        </span> -->
                        
                    </el-scrollbar>
                </div>
                
            </div>
            
        </div>
        <div class="userhub--calendar" ref="hatchart">
            <el-icon style="font-size: 2rem;color: #f2f2f2;position: absolute;top: 7%;right: 22%;"><svg t="1685271057805" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5394" ><path d="M809.010019 214.988446c-163.765831-163.79653-430.255231-163.79653-594.022085 0-163.79653 163.766854-163.79653 430.257278 0 594.021062 163.767877 163.798577 430.256254 163.798577 594.022085 0C972.806549 645.245723 972.806549 378.7553 809.010019 214.988446zM766.38113 766.382665c-140.265604 140.293233-368.528378 140.263557-508.764306 0-140.294256-140.265604-140.294256-368.499725 0-508.779655 140.235928-140.250254 368.497679-140.27993 508.764306 0C906.644687 397.853263 906.644687 626.145713 766.38113 766.382665z"  p-id="5395"></path><path d="M514.170944 298.225195c-24.929786 0-45.217854 20.289092-45.217854 45.232181 0 24.989137 20.288069 45.307905 45.217854 45.307905 24.958438 0 45.278229-20.318768 45.278229-45.307905C559.449173 318.514287 539.129382 298.225195 514.170944 298.225195z"  p-id="5396"></path><path d="M514.170944 427.28969c-18.801205 0-34.150798 15.32094-34.150798 34.151821l0 267.547499c0 18.828834 15.349593 34.149774 34.150798 34.149774 18.830881 0 34.180474-15.32094 34.180474-34.149774L548.351418 461.441511C548.351418 442.611653 533.001825 427.28969 514.170944 427.28969z" p-id="5397"></path></svg></el-icon>
            <span style="font-size: 1.3rem;color: #f2f2f2;position: absolute;top: 7%;right: 7%;">{{ $t('Userhub.hot_picture')}}</span>
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
    text: '行为热力图',
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