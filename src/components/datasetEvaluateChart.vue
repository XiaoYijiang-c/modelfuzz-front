<template>
   
        
       
    <div :class="{'chart_visiable--bottom': !fullscreenboolean, 'chart_visiable--bottom__fullscreen':fullscreenboolean}">
      <el-scrollbar>
        <h2 class="chart_visiable--title-img"><span style="font-size: 4rem;">数据集评估</span><span style="position: absolute;right: 2rem;"><span style="font-size: 2.5rem;">score:</span>78</span></h2>
        <el-icon class="chart_visiable--fullscreenbutton" @click="fullscreen"><FullScreen /></el-icon>

        <div class="chart_visiable--columns-2-3"> 
            <div class="chart-card" >
                <div class="chart-card__rainbow" ></div>
                <div class="chart-card--list-title">神经元信息</div>
                <div class="chart-card--list-box"  ref="ref_4">
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
                <div class="chart-card--list-title u-fontsize-3rem"></div>
                <div ref="ref_2" class="chart-card--chart chart-card--chart--rectangle"></div>      
            </div>
        </div>
      
      </el-scrollbar>
  </div>

</template>
<script lang="ts" setup>
import ImportJson from "../json/file_name.json"
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
const tabledata: any[] = ImportJson.file_names.map((value, index) => {
  if (value) {
    let strlist: string[] = value.match(/[a-zA-Z]+|[0-9]+/g) as string[]
    return {
      file_name:value,
      layer:strlist[0],
      neuron_id:strlist[1],
    }
  }
    
  else return {
    file_name:'',
    layer:'',
    neuron_id:'',
  }
})


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

function loadList() {
    let row = ref_4.value.children[0].children[0].children[0].children[0].children[0].children[0].children
    for (let index = 0; index < row.length; index += 1) {
        let text = row[index].children[0].children[0].innerHTML;

        row[index].onclick = () => {
          
          fetch('http://43.138.12.254:9008/json/output/'+text)
            .then(response => response.json())
            .then(data => {
              const uniqueValues = new Set(data.Y.map((value:any) => { return value[0] }));
              // 计算不同值的数量
              const count = uniqueValues.size;
              // 处理 JSON 数据
              let loaddata = []
              // 合并data.X和data.Y到一个数组中。
              for (let index = 0; index < data.X.length; index += 1) {
                loaddata.push([ data.X[index][0],data.Y[index][0]]) //将 data.X 和 data.Y 合并到一个数组中。 将这个数组作为参数传递给函数。在函数中，使用它。将其传递给 loadData函数，并在其中返回一个数组。从该数组中提取图表数据。 将其用作图表的一部分。将其传递给 loadData函数，并
              }
              console.log('loaddata',loaddata) //输出图表数据。 这是一个数组，包括 X 和 Y
              console.log('data.Y',data.Y) 
              myEcharts2.setOption({
                title: {
                  text:'神经元: '+text.split('.')[0]+'的输出'
                },
                dataset: [
                  {
                    source: loaddata
                  },{
                    transform: {
                      type: 'ecStat:clustering',
                      // print: true,
                      config: {
                        clusterCount: count,
                        outputType: 'single',
                        outputClusterIndexDimension: DIENSIION_CLUSTER_INDEX
                      }
                    }
                  }],
                visualMap: {
                    pieces:pieces.slice(0,count)
                  }
              })
            });
        }
    }
}

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
let activate_neuron = ref('')
let option_zhu2 = {
  title: {
    text:'神经元'+activate_neuron.value+'输出分布',
    textStyle: {
      color: "#f2f2f2",
      fontStyle: "normal",
      fontFamily: "微软雅黑",
      fontSize: 25,
    },
    left:'center'
  },
  dataset: [
    {
      source: data2
    },
    {
      transform: {
        type: 'ecStat:clustering',
        // print: true,
        config: {
          clusterCount: CLUSTER_COUNT,
          outputType: 'single',
          outputClusterIndexDimension: DIENSIION_CLUSTER_INDEX
        }
      }
    }
  ],
  tooltip: {
    position: 'top',
    
  },
  visualMap: {
    type: 'piecewise',
    top: 'middle',
    min: 0,
    max: CLUSTER_COUNT,
    left: 10,
    splitNumber: CLUSTER_COUNT,
    dimension: DIENSIION_CLUSTER_INDEX,
    pieces: pieces,
    textStyle: {
      color: "#f2f2f2",
      fontStyle: "normal",
      fontFamily: "微软雅黑",
      fontSize: 10,
    },
  },
  textStyle:{
    fontSize:15,
    color:'#f2f2f2'
  },
  grid: {
    left: 150
  },
  xAxis: {
    splitLine: { show: false },
  },
  yAxis: {
    splitLine: { show: false },
  },
  series: {
    type: 'scatter',
    encode: { tooltip: [0, 1] },
    symbolSize: 15,
    itemStyle: {
      borderColor: '#555'
    },
    datasetIndex: 1
  }
};
type EChartsOption = echarts.EChartsOption;
echarts.registerTransform(ecStat.transform.clustering);
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

       
    loadList()
  
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