<template>
    <div :class="{'chart_visiable--bottom': !fullscreenboolean, 'chart_visiable--bottom__fullscreen':fullscreenboolean}">
      <el-scrollbar>
        <h2 class="chart_visiable--title-img"><span style="font-size: 4rem;">模型重训练</span><span style="position: absolute;right: 2rem;height: 5rem;top:-3rem" class="btn"><span  style="font-size: 2.5rem;">下载模型</span></span></h2>
        <el-icon class="chart_visiable--fullscreenbutton" @click="fullscreen"><FullScreen /></el-icon>

        <div class="chart_visiable--columns-1" > 
            <div class="chart-card" style="margin-top: 5rem;">
                <div class="chart-card--list-title u-fontsize-3rem"></div>
                <div ref="ref_2" class="chart-card--chart" ></div>      
            </div>
        </div>
      
      </el-scrollbar>
  </div>

</template>
<script lang="ts" setup>
import ImportJson from "../json/retrainreturn.json"
import { ref, reactive, nextTick, Ref, h } from "vue";
import * as echarts from "echarts";
import ecStat from 'echarts-stat';
import { da } from "element-plus/es/locale";
const images = ref([
  {
    title: 'image-1',
    src: 'https://cdn.jsdelivr.net/gh/themusecatcher/resources@0.0.3/1.jpg',
    link: ''
    },
  {title: 'image-2', src: 'https://picsum.photos/id/101/600/300', link: ''},

])


const nnsvg_ref = ref()
//test
let fullscreen = async () => {
fullscreenboolean.value = !fullscreenboolean.value


}
const fullscreenboolean:Ref<boolean> = ref(false)
const generateColumns = (length = 10, prefix = 'column-', props?: any) =>
Array.from({ length }).map((_, columnIndex) => ({
...props,
key: `${prefix}${columnIndex}`,
dataKey: `${prefix}${columnIndex}`,
title: '1',
width: 150,
}))

const generateData = (
columns: ReturnType<typeof generateColumns>,
length = 200,
prefix = 'row-'
) =>
Array.from({ length }).map((_, rowIndex) => {
return columns.reduce(
  (rowData, column, columnIndex) => {
    rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`
    return rowData
  },
  {
    id: `${prefix}${rowIndex}`,
    parentId: null,
  }
)
})

// const columns = generateColumns(3)
const columns = [{
    dataKey:'file_name',
    key:'file_name',
    title: '文件名',
    width:150
  },{
    dataKey:'layer',
    key:'layer',
    title: '层名',
    width:150
  },{
    dataKey:'neuron_id',
    key:'neuron_id',
    title: '神经元 id',
    width:100
  }]
console.log("columns",columns)


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
const emits = defineEmits(["sendAxios", "changeProject","chooseProject","setProjectID"]);
let input2 = ref('')
const filepath = ref('')
const loading = ref(true)
const tableData = ref([
])
const dlfuzzImage = ref()
let myEcharts1: any = null;
let myEcharts2: any = null;

const formPartShow = ref(true)
// 异步加载图表
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
const ref_4 = ref();
const ref_5 = ref();



const data2 = [
  [0.845235,0],
  [1.327224, 0],
  [-2.889949, 0],
  [-0.966018, 0],
  [2.960769, 0],
  [-3.275518, 0],
  [0.639276, 0]
];

var CLUSTER_COUNT = 6;
var DIENSIION_CLUSTER_INDEX = 1;
var COLOR_ALL = [
  '#37A2DA',
  '#e06343',
  '#37a354',
  '#b55dba',
  '#b5bd48',
  '#8378EA',
  '#96BFFF'
];
var pieces: { value: number; label: string; color: string; }[] = [];
for (var i = 0; i < CLUSTER_COUNT; i++) {
  if (i == 0) {
    pieces.push({
    value: i,
    label: '特殊激活样本',
    color: COLOR_ALL[i]
  });
  } else {
    pieces.push({
    value: i,
    label: '聚落 ' + i,
    color: COLOR_ALL[i]
  });
  }
}
function translate(list: number[]) {
    let res = list.map(function (value, index) { return [index, value]; });
   console.log(res);
   
    return res
}
let option_zhu2 = {
  tooltip: {
    trigger: 'axis'
  },
  legend: {
      data: ['Accuracy', 'Precision', 'Recall', 'F1', 'Loss'],
      textStyle:{ 
        fontSize:15,
        color:'#f2f2f2'
    },
    },
   textStyle:{ 
    fontSize:15,
    color:'#f2f2f2'
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'value',
    boundaryGap: false,
    splitLine: { show: false },
  },
  yAxis: {
      type: 'value',
      splitLine: { show: false },
  },
  series: [
    {
      name: 'Accuracy',
      type: 'line',
      stack: 'Accuracy',
      data: translate(ImportJson.accuracy)
    },
    {
      name: 'Precision',
      type: 'line',
      stack: 'Precision',
      data: translate(ImportJson.precision)
    },
    {
      name: 'Recall',
      type: 'line',
      stack: 'Recall',
      data: translate(ImportJson.recall)
    },
    {
      name: 'F1',
      type: 'line',
      stack: 'F1',
      data: translate(ImportJson.f1)
    },
    {
      name: 'Loss',
      type: 'line',
      stack: 'Loss',
      data: translate(ImportJson.loss)
    }
  ]
};
let option = {
  tooltip: {
    formatter: '{a} <br/>{b} : {c}%'
  },
  series: [
    {
      name: 'Pressure',
      type: 'gauge',
      detail: {
        formatter: '{value}'
      },
      data: [
        {
          value: 50,
          name: 'SCORE'
        }
      ],
      textStyle:{
        fontSize:10,
        color:'#f2f2f2'
      },
    }
  ]
};
async function loadChart() {
    // let ref_1WH = await getRefCurrentWH(ref_1)
    // console.log(myEcharts1)
    // myEcharts1 = echarts.init(ref_1.value,'',ref_1WH);
    // myEcharts1.setOption(option);
    let ref_2WH =await getRefCurrentWH(ref_2)
    myEcharts2 = echarts.init(ref_2.value,'',ref_2WH);
    nextTick(() => {
      myEcharts2.setOption(option_zhu2);
    })
  
}

const test = ref();
const ref_1 = ref();
const ref_2 = ref();
const ref_3 = ref();
const ref_6 = ref();




interface DataItem {
value: [string, number];
}


let data: DataItem[] = [];
let now:number = 0;
let oneDay = 24 * 3600 * 1000;
let value = Math.random() * 1000;
// for (var i = 0; i < 1000; i++) {
//   data.push(randomData());
// }






defineExpose({
loadChart,
tableData,
loading,
formPartShow
});


</script>
<style src="../style/skeleton.scss" lang="scss">

</style>
<style>
.chart {
display: grid;
grid-template-columns: 25% 50% 25%;

/* width: 100%; */
}

.box-card {
margin: 20px 10px;
}

.el-carousel__container{
    height: 100% !important;
}
</style>