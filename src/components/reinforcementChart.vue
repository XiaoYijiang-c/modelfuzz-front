<template>

    <div :class="{'chart_visiable--bottom': !fullscreenboolean, 'chart_visiable--bottom__fullscreen':fullscreenboolean}">
        
      <el-scrollbar>
        <h2 class="chart_visiable--title">强化学习模型</h2>
        <el-icon class="chart_visiable--fullscreenbutton" @click="fullscreen()"><FullScreen /></el-icon>
        <div class="chart_visiable--columns-2-3" > 
            <div class="chart-card">
                <div class="chart-card__rainbow"></div>
                <div class="chart-card--list-title">对抗样本</div>
                <div class="chart-card--list-box" ref="ref_4">
                  <!-- <div class="chart-card--list-box--title">res</div> -->
                  <el-auto-resizer>
                    <template #default="{ height, width }">
                      <el-table-v2
                        :columns="columns"
                        :data="tabledata"
                        :width="width"
                        :height="height"
                        @scroll="loadList"
                        fixed
                      />
                      
                    </template>
                  </el-auto-resizer>
                </div>  
            </div>
            <div class="chart-card" >
                <!-- <div class="chart-card--title"></div> -->
                <div ref="ref_1"  class="chart-card--chart chart-card--chart--square" style="width:100%;padding-top: 1rem;">
                  
                </div>          
            </div>
            <!-- <div class="chart-card" >
                <div class="chart-card--title">Neuron</div>
                    <div ref="ref_6" class="chart-card--chart"></div>      
            </div> -->
            <!-- <DlfuzzImage ref="dlfuzzImage"></DlfuzzImage> -->
        </div>
        
        

      </el-scrollbar>
  </div>
</template>
<script lang="ts" setup>
import axios from "axios";
import testImportJson from "../json/DRLFuzz.json"
import type { UploadInstance, UploadProps, UploadRawFile } from "element-plus";
import { Edit, Picture, Upload } from '@element-plus/icons-vue'
import {
ArrowRight,
CaretBottom,
CaretTop,
Warning,
} from '@element-plus/icons-vue'
import { ref, onMounted,nextTick,Ref,h } from "vue";
import * as echarts from "echarts";
import Cookies from 'js-cookie'

const nnsvg_ref = ref()
//test
let fullscreen = async () => {
fullscreenboolean.value = !fullscreenboolean.value
nextTick(() =>{
    loadChart(true)
})

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
function build_columns() {
    return testImportJson.adversarial[0].map((value,index) => {
        return {
            dataKey:'param_'+index.toString(),
            key:'param_'+index.toString(),
            title: 'param_'+index.toString(),
            width:80
        }
    })
}
const columns = build_columns()
console.log("columns", columns)
interface TableData {
ID: string;
Original_File: string;
mutation_times: string;
mutation: string;
}
const tabledata: any[] =  testImportJson.adversarial.map((value,index) => {
    let res = {}
    columns.map((val,ind) => {
        res[val.key] = value[ind]
    });
    return res
})

// let data_list_1 = build_data(testImportJson.approx_distances)
let option_zhu = {
    title:{
        text: '造成代理出错的代理参数',
        textStyle: {
                color: "#f2f2f2",
                fontStyle: "normal",
                fontFamily: "微软雅黑",
                fontSize: 25,
        },
        left:'center'
    },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
      data: ['fuzz', 'random'],
      orient: 'vertical',
      x:'left',      //可设定图例在左、右、居中
      y: 'top',     //可设定图例在上、下、居中
      textStyle:{
        fontSize: 12,//字体大小
        color: '#f2f2f2'//字体颜色
      },
  },
  grid: {
    left: '3%',
    right: '4%',
      bottom: '3%',
    top:60,
    containLabel: true
    },
  textStyle:{ 
    fontSize:15,
    color:'#f2f2f2'
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
      name: 'fuzz',
      type: 'line',
    //   stack: 'Total',
      data: testImportJson.drlfuzz.map((value, index) => {
        return [Number(value[0]),Number(value[1])]
      })
    },
    {
      name: 'random',
      type: 'line',
    //   stack: 'Total',
      data: testImportJson.random.map((value, index) => {
        return [Number(value[0]),Number(value[1])]
      })
    },
  ]
};

// let data_list_2 = build_data(testImportJson.nearest_distance)
// let option_zhu2 = {
// backgroundColor: '',
// title:{
//     text: '样本覆盖率间最小距离',
//     textStyle: {
//             color: "#f2f2f2",
//             fontStyle: "normal",
//             fontFamily: "微软雅黑",
//             fontSize: 25,
//     },
//     left:'center'
// },
// grid: {
//   x: 50,
//   y: 25,
//   x2: 30,
//   y2: 35
// },
// textStyle:
//   {
//             fontSize:15,
//             color:'#f2f2f2'
//         },
// xAxis: {
//   type: 'value',
//   splitLine: { show: false },
//   min: data_list_2.length - 100,
//   max:data_list_2.length-1
// },
// yAxis: {
//   type: 'log',
//   splitLine: { show: false },
// },
// series: [
// {
//   data: data_list_2.splice(data_list_2.length-100,data_list_2.length-1),
//   type: 'line',
//   smooth: true
// }
// ],
// tooltip : {
//     trigger: 'axis',
//     axisPointer: {
//         type: 'cross',//指示类型
//         label: {
//             // 横纵坐标指示区块颜色
//             backgroundColor: '#6a7985'
//         }
//     }
// }

// };
// let data_list_3 = build_data(testImportJson.exact_distances)
// let option_zhu3 = {
// backgroundColor: '',
// title:{
//     text: '样本覆盖率间欧氏距离',
//     textStyle: {
//             color: "#f2f2f2",
//             fontStyle: "normal",
//             fontFamily: "微软雅黑",
//             fontSize: 25,
//     },
//     left:'center'
// },
// grid: {
//   x: 70,
//   y: 25,
//   x2: 30,
//   y2: 35
// },
// textStyle:
//   {
//             fontSize:15,
//             color:'#f2f2f2'
//         },
// xAxis: {
//   type: 'value',
//   splitLine: { show: false },

// },
// yAxis: {
//   type: 'log',
//   splitLine: { show: false },
// },
// series: [
// {
//   data: data_list_3,
//   type: 'line',
//   smooth: true
// }
// ],
// tooltip : {
//     trigger: 'axis',
//     axisPointer: {
//         type: 'cross',//指示类型
//         label: {
//             // 横纵坐标指示区块颜色
//             backgroundColor: '#6a7985'
//         }
//     }
// }

// };

// let dataMap = {
//       nodes: testImportJson.graph,
//       edges: testImportJson.connections
//     }
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
// const ref_1 = ref()
const dlfuzzImage = ref()
let myEcharts1: any = null;
let myEcharts2: any = null;
let myEcharts3: any = null;
let myEcharts4: any = null;
let myEcharts5: any = null;
let myEcharts6: any = null;
// const getMessage = (data:any) => {
//     console.log("getMessage", data)
//     if (data != "No data") {
//         if (data.FLAG) {
//             console.log('Finsh...')
//         } else {
//             console.log('hello....')
//             option.series[0] = {
//                 data: data.neuronsPercentageList,
//                 type: 'line',
//                 smooth: true
//             }
//             option.xAxis.data = Object.keys(Array.from(Array(data.neuronsPercentageList.length)))
//             myEcharts.setOption(option);
        
//         }
//     } else {
//         console.log("String", data)
//     }
//     return data.FLAG
// }
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
function loadList() {
let row = ref_4.value.children[0].children[0].children[0].children[0].children[0].children[0].children
for (let index = 0; index < row.length;index+=1) {
let text = row[index].children[0].children[0].innerHTML;

row[index].onclick = () => {
    // window.open('http://43.138.12.254:9008/4467c76ef3e34bfebf05a4278294a46de77348e4/'+testImportJson.escape_folder_list[Number(text)],'_blank');
}
}
// console.log(ref_4.value.children[0].children[0].children[0].children[0].children[0].children[0].children)
}


// let ll = 0

async function loadChart(flag: boolean = false) {
    if (flag) {
        myEcharts1.dispose()
    }
    let ref_1WH = await getRefCurrentWH(ref_1)
    myEcharts1 = echarts.init(ref_1.value,'',ref_1WH);
    myEcharts1.setOption(option_zhu);
}

const test = ref();
const ref_1 = ref();
const ref_2 = ref();
const ref_3 = ref();
const ref_4 = ref();
const ref_5 = ref();
const ref_6 = ref();

let option_yibiaopan = {
tooltip: {
formatter: ''
},
series: [
{
  name: 'Pressure',
  type: 'gauge',
  progress: {
    show: true
  },
  detail: {
    valueAnimation: true,
    formatter: '{value}'
  },
  data: [
    {
      value: 51,
      // name: 'SCORE'
    }
  ]
}
]
};


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

let option = {
tooltip: {
trigger: 'axis',
axisPointer: {
  animation: false
}
},
xAxis: {
type: 'value',
splitLine: {
  show: false
}
},
yAxis: {
type: 'value',
splitLine: {
  show: false
}
},
series: [

]
};




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
</style>
