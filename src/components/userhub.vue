<template>
    
    <el-scrollbar>
    <div class="userhub">

        <div class="userhub--header_image"></div>
        <div class="userhub--head_sculpture">
            <div class="userhub--head_sculpture--image">
                <img src="../img/xp.png" alt="header" />
            </div>
            <div class="userhub--head_sculpture--name">肆夕</div>
            <div class="userhub--head_sculpture--tools">
               <span class="userhub--head_sculpture--tools__uptool">
                   <span class="userhub--head_sculpture--tools__uptool--item"><p>{{ props.userMessage.projects_length }}</p><h3>{{ $t('Userhub.tool_item_0')}}</h3></span>
                   <span class="userhub--head_sculpture--tools__uptool--item"><p>1047</p><h3>{{ $t('Userhub.tool_item_1')}}</h3></span>
                   <span class="userhub--head_sculpture--tools__uptool--item"><p>1</p><h3>{{ $t('Userhub.tool_item_2')}}</h3></span>
                </span>
                <div class="userhub--head_sculpture--tools__time-list">
                    
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
                        
                    
                </div>
                
            </div>
            
        </div>
        <ul class="collapse">
          <el-scrollbar>
            <h2 class="collapse--title">项目统计</h2>
            <li class="collapse--item">
              <div class="collapse--item--upbutton" @click="collapse.item_0=!collapse.item_0">
                <span class="collapse--item__text">计算机视觉模糊测试</span>
                <el-icon class="collapse--item__icon" ><ArrowRight v-if="!collapse.item_0"/><ArrowDown v-else/></el-icon>
              </div>
              <div class="collapse--item--main" v-if="collapse.item_0">
                <div class="collapse--item--main--item">
                  <div class="collapse--item--main--item--header">项目总数</div>
                  <div class="collapse--item--main--item--body">29</div>
                </div>
                
                <div class="collapse--item--main--item">
                  <div class="collapse--item--main--item--header">活跃项目数</div>
                  <div class="collapse--item--main--item--body">11</div>
                </div>
                <div class="collapse--item--main--item">
                  <div class="collapse--item--main--item--header">异常项目</div>
                  <div class="collapse--item--main--item--body">1</div>
                </div>
                <div class="collapse--item--main--item">
                  <div class="collapse--item--main--item--header">生成的对抗样本总数</div>
                  <div class="collapse--item--main--item--body">118010</div>
                </div>
              </div>
              <span class="collapse--item--main--button btn" v-if="collapse.item_0">查看详情</span>

            </li>
            <li class="collapse--item">
              <div class="collapse--item--upbutton" @click="collapse.item_1=!collapse.item_1">
                <span class="collapse--item__text">恶意代码检测模糊测试</span>
                <el-icon class="collapse--item__icon"><ArrowRight /></el-icon>
              </div>
            </li>
            <li class="collapse--item">
              <div class="collapse--item--upbutton" @click="collapse.item_2=!collapse.item_2">
                <span class="collapse--item__text">强化学习模糊测试</span>
                <el-icon class="collapse--item__icon"><ArrowRight /></el-icon>
              </div>
            </li>
            <li class="collapse--item">
              <div class="collapse--item--upbutton" @click="collapse.item_3=!collapse.item_3">
                <span class="collapse--item__text">数据集质量评估</span>
                <el-icon class="collapse--item__icon"><ArrowRight /></el-icon>
              </div>
            </li>
            <li class="collapse--item">
              <div class="collapse--item--upbutton" @click="collapse.item_4=!collapse.item_4">
                <span class="collapse--item__text">模型鲁棒性评估</span>
                <el-icon class="collapse--item__icon"><ArrowRight /></el-icon>
              </div>
            </li>
          </el-scrollbar>
        </ul>
        <!-- <div class="userhub--calendar" ref="hatchart">
            <el-icon style="font-size: 2rem;color: #f2f2f2;position: absolute;top: 7%;right: 22%;"><svg t="1685271057805" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5394" ><path d="M809.010019 214.988446c-163.765831-163.79653-430.255231-163.79653-594.022085 0-163.79653 163.766854-163.79653 430.257278 0 594.021062 163.767877 163.798577 430.256254 163.798577 594.022085 0C972.806549 645.245723 972.806549 378.7553 809.010019 214.988446zM766.38113 766.382665c-140.265604 140.293233-368.528378 140.263557-508.764306 0-140.294256-140.265604-140.294256-368.499725 0-508.779655 140.235928-140.250254 368.497679-140.27993 508.764306 0C906.644687 397.853263 906.644687 626.145713 766.38113 766.382665z"  p-id="5395"></path><path d="M514.170944 298.225195c-24.929786 0-45.217854 20.289092-45.217854 45.232181 0 24.989137 20.288069 45.307905 45.217854 45.307905 24.958438 0 45.278229-20.318768 45.278229-45.307905C559.449173 318.514287 539.129382 298.225195 514.170944 298.225195z"  p-id="5396"></path><path d="M514.170944 427.28969c-18.801205 0-34.150798 15.32094-34.150798 34.151821l0 267.547499c0 18.828834 15.349593 34.149774 34.150798 34.149774 18.830881 0 34.180474-15.32094 34.180474-34.149774L548.351418 461.441511C548.351418 442.611653 533.001825 427.28969 514.170944 427.28969z" p-id="5397"></path></svg></el-icon>
            <span style="font-size: 1.3rem;color: #f2f2f2;position: absolute;top: 7%;right: 7%;">{{ $t('Userhub.hot_picture')}}</span>
          </div> -->
          <div class="userhub--bing" ref="bingchart"></div>
    </div>
    </el-scrollbar>
</template>

<script lang="ts" setup>
import { ElMessageBox } from 'element-plus';
import { ref, Ref, nextTick,reactive } from 'vue'
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
let collapse =  reactive({
  item_0:true,
  item_1:false,
  item_2:false,
  item_3:false,
  item_4:false,
})
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
let bingchart = ref()
let myEcharts2 = null
async function loadChart() {
  //   let ref_1WH =  await getRefCurrentWH(hatchart)
  //   myEcharts1 = echarts.init(hatchart.value,'',ref_1WH);
  // myEcharts1.setOption(option);
  // console.log(bingchart.value)
    let ref_2WH =  await getRefCurrentWH(bingchart)
    myEcharts2 = echarts.init(bingchart.value,'',ref_2WH);
    myEcharts2.setOption(option_bing);
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
      Math.floor(Math.random() * 60)
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
    },pieces: [ {gte: 50, color: '#485820'}, {gte: 40, lte: 50, color: '#72873D'}, {gte: 30, lte: 40, color: '#8DA146'}, {gte: 20, lte: 30, color: '#9FB364'}, {lte: 20, color: '#E7F5CF'} ],
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

let option_bing = {
  backgroundColor: '',
  title: {
    text: '所有项目',
    left: 'center',
    top: 0,
    textStyle: {
      color: '#f2f2f2'
    }
  },

  tooltip: {
    trigger: 'item'
  },

  visualMap: {
    show: false,
    min: 0,
    max: 100,
    inRange: {
      colorLightness: [0, 1]
    }
  },
  series: [
    {
      name: 'Number Of',
      type: 'pie',
      radius: '70%',
      center: ['50%', '50%'],
      data: [
        { value: 29, name: '计算机视觉模糊测试' },
        { value: 11, name: '恶意代码检测模糊测试' },
        { value: 24, name: '强化学习模糊测试' },
        { value: 12, name: '数据集质量评估' },
        { value: 14, name: '模型鲁棒性评估' }
      ].sort(function (a, b) {
        return a.value - b.value;
      }),
      roseType: 'radius',
      label: {
        color: 'rgba(255, 255, 255, 0.7)'
      },
      labelLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.7)'
        },
        smooth: 0.2,
        length: 1,
        length2: 20
      },
      itemStyle: {
        color: '#769D80',
        shadowBlur: 20,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
      },

      animationType: 'scale',
      animationEasing: 'elasticOut',
      animationDelay: function (idx:any) {
        return Math.random() * 200;
      }
    }
  ]
};
// onMounted(() => {
//     projectLength.value = props.userMessage.projects.length
// })
</script>

<style src="../style/skeleton.scss" lang="scss">

</style>