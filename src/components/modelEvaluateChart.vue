<template>
    <div :class="{'chart_visiable--bottom': !fullscreenboolean, 'chart_visiable--bottom__fullscreen':fullscreenboolean}">
      <el-scrollbar>
        <h2 class="chart_visiable--title-img"><span style="font-size: 4rem;">模型鲁棒性评估</span></h2>
        <el-icon class="chart_visiable--fullscreenbutton" @click="fullscreen"><FullScreen /></el-icon>
        <h2 class="u-fontsize-3rem u-font-f2f2f2 u-margin-top-medium">各种攻击算法在评测算法一下的得分</h2>
        <div class="chart_visiable--columns-1-1"> 
            <div class="chart-card" >
                <div ref="ref_1" class="chart-card--chart u-margin-top-medium"></div>
            </div>
            <div class="chart-card" >
                <div ref="ref_2" class="chart-card--chart u-margin-top-medium"></div>      
            </div>
        </div>
        <h2 class="u-fontsize-3rem u-font-f2f2f2 u-margin-top-medium">各种攻击算法在评测算法二下的得分</h2>
        <div class="chart_visiable--columns-1-1"> 
            <div class="chart-card" >
                <div ref="ref_3" class="chart-card--chart u-margin-top-medium"></div>
            </div>
            <div class="chart-card" >
                <div ref="ref_4" class="chart-card--chart u-margin-top-medium"></div>      
            </div>
        </div>
        <h2 class="u-fontsize-3rem u-font-f2f2f2 u-margin-top-medium">各种攻击算法在评测算法三下的得分</h2>
        <div class="chart_visiable--columns-1-1"> 
            <div class="chart-card" >
                <div ref="ref_5" class="chart-card--chart u-margin-top-medium"></div>
            </div>
            <div class="chart-card" >
                <div ref="ref_6" class="chart-card--chart u-margin-top-medium"></div>      
            </div>
        </div>
        <h2 class="u-fontsize-3rem u-font-f2f2f2 u-margin-top-medium">各种攻击算法在评测算法四下的得分</h2>
        <div class="chart_visiable--columns-1-1"> 
            <div class="chart-card" >
                <div ref="ref_7" class="chart-card--chart u-margin-top-medium"></div>
            </div>
            <div class="chart-card" >
                <div ref="ref_8" class="chart-card--chart u-margin-top-medium"></div>      
            </div>
        </div>
        <!-- <h2 class="u-fontsize-3rem u-font-f2f2f2 u-margin-top-medium">各种攻击算法在评测算法五下的得分</h2>
        <div class="chart_visiable--columns-1-1"> 
            <div class="chart-card" >
                <div ref="ref_9" class="chart-card--chart u-margin-top-medium"></div>
            </div>
            <div class="chart-card" >
                <div ref="ref_10" class="chart-card--chart u-margin-top-medium"></div>      
            </div>
        </div> -->
        
      
      </el-scrollbar>
  </div>

</template>
<script lang="ts" setup>
import ImportJson from "../json/file_name.json"
import { ref, reactive, nextTick, Ref, h } from "vue";
import * as echarts from "echarts";
function generateRandomList(n:number, min:number, max:number) {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(Math.random() * (max - min) + min);
  }
  return result;
}

const attack_x = ['BA','BIM','BLB','Corrupt','CW2','Deepfool','EAD','FGSM','ILLC','JSM','LLC','NES','OM','PGD','RFGSM','RLLC','SPSA','UAP','UMIFGSM','ZOO']


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
let myEcharts3: any = null;
let myEcharts4: any = null;
let myEcharts5: any = null;
let myEcharts6: any = null;
let myEcharts7: any = null;
let myEcharts8: any = null;
let myEcharts9: any = null;
let myEcharts10: any = null;
const ref_1 = ref();
const ref_2 = ref();
const ref_3 = ref();
const ref_4 = ref();
const ref_5 = ref();
const ref_6 = ref();
const ref_7 = ref();
const ref_8 = ref();
const ref_9 = ref();
const ref_10 = ref();
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


var CLUSTER_COUNT = 6;
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
let option_zhu2 = {
  color:['#FFF8ED','#7F8CB6','#F0CC89','#9CD5E0','#00BDB9','#62B3CE','#719057','#9BB586'],
  legend: {
    left: '0',  
    top: 'center',
    orient: 'vertical',
    textStyle: {
      color:'#f2f2f2'
    },
    data:[''],
  },
  xAxis: {
    type: 'category',
    splitLine: { show: false },
    data: attack_x,
    axisLabel: {
      rotate: 40
    },
    axisTick: {
      alignWithLabel: true
    }
  },
  yAxis: {
    type: 'value',
    splitLine: { show: false },
    min:0,
    max:1
  },
  textStyle:{
    fontSize:15,
    color:'#f2f2f2'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    },
  },
  series: [
    {
      data: generateRandomList(attack_x.length,0,1),
      type: 'bar'
    }
  ]
};
let option = {
  color:['#FFF8ED','#7F8CB6','#F0CC89','#9CD5E0','#00BDB9','#62B3CE','#719057','#9BB586'],
  title: {
    textStyle: {
      color: "#f2f2f2",
      fontStyle: "normal",
      fontFamily: "微软雅黑",
      fontSize: 25,
    },
  },
  legend: {
    left: '0',  
    top: 'center',
    orient: 'vertical',
    textStyle: {
      color:'#f2f2f2'
    },
    data: ['']
  },
  grid: {
    x: 80,
    y: 60,
    x2: 80,
    y2: 60,
  },
  textStyle:{
    fontSize:15,
    color:'#f2f2f2'
  },
  radar: {
    // shape: 'circle',
      indicator: attack_x.map((value, index) => {
        return {
            name: value,
            max:1,
        }
      }),
      splitNumber: 3,
      splitArea: {
        show: false,
        areaStyle: {
            color: "rgba(255,0,0,0)", // 图表背景的颜色
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
            width: 1,
            color: "#013A3F", // 设置网格的颜色
        },
      },
      axisLine: {
          lineStyle: {
              color: "#013A3F",
          },
      },
  },
  tooltip : {
  //雷达图的tooltip不会超出div，也可以设置position属性，position定位的tooltip 不会随着鼠标移动而位置变化，不友好
    confine: true,
    enterable: true, //鼠标是否可以移动到tooltip区域内
  },
  
  series: [
    {
      type: 'radar',
      data: [
        {
          value: generateRandomList(attack_x.length,0.6,1),
          symbol: "none",
          areaStyle: {
              color: new echarts.graphic.RadialGradient(
                  0.1,
                  0.6,
                  1,
                  [
                      {
                          color: "rgba(64,90,115, 0.1)",
                          offset: 0,
                      },
                      {
                          color: "rgba(99,118,148, 0.9)",
                          offset: 1,
                      },
                  ]
              ),
          },
          lineStyle: {
            color: "#7F8CB6",
          },
        },
        
      ]
    }
  ]
};

async function loadChart() { 
  const chartRefs = [ref_1, ref_2, ref_3, ref_4, ref_5, ref_6, ref_7, ref_8]; 
  const chartItems = [myEcharts1, myEcharts2, myEcharts3, myEcharts4, myEcharts5, myEcharts6, myEcharts7, myEcharts8]; 
  const classAlgorithm = [['ACC', 'ACAC', 'ACTC', 'ALDp', 'ASS', 'PSD', 'NTE','RGB','RIC'],['MCE','RMCE','MFP'],['CAV','CRR','CSR','CCV','COS'],['NC','KMNC','NBC','SNAC']]
  const colorArray = ['#FFF8ED','#7F8CB6','#F0CC89','#9CD5E0','#00BDB9','#62B3CE','#719057','#9BB586']
  try { 
    let randomData = generateRandomList(attack_x.length, 0.6, 1); 
    for (let i = 0; i < chartRefs.length; i++) { 
      option.series[0].data[0].value = randomData; // 生成随机数列表， 将数据写入option中
      let ref_WH =await getRefCurrentWH(chartRefs[i])
      chartItems[i] = echarts.init(chartRefs[i].value, '', ref_WH);
      let option_data = classAlgorithm.map((value) => {
          return value.map((value, index) => {
            return {
              name: value,
              value: generateRandomList(attack_x.length,0.6,1),
              symbol: "none",
              areaStyle: {
                color: new echarts.graphic.RadialGradient(0.1, 0.6, 1,[{color: "rgba(64,90,115, 0.1)",offset: 0,},{color: "rgba(99,118,148, 0.1)",offset: 1,},]),
              },
              lineStyle: {
                color: colorArray[index],
              },
            }
          })
        })  // map the data to the option_data object. 将数据写入option中. 创建一个option_data对象，
      if (i % 2 == 0) {
        console.log(option_data);
        option.series[0].data = option_data[Math.floor(i / 2)]
        option.legend.data = classAlgorithm[Math.floor(i / 2)]
        
        chartItems[i].setOption(option);
      } else {
        option_zhu2.series = option_data[Math.floor(i / 2)].map((item, index) => {
          return {
            data: item.value,
            type: 'bar',
            name: item.name,
          }
        })

        option_zhu2.series[0].data = randomData; // 生成随机数列表，将数据写入option中 将数据写入option_zhu2中 将数据写入option_zhu1中 将数据写入option_zhu2中 将数据写入option_zhu1中 将数据写入option_zhu2中 将数据写入option_zhu1中 将数据写入option_zhu2中 将数据写入option_zhu1中
        chartItems[i].setOption(option_zhu2);
        randomData = generateRandomList(attack_x.length, 0.6, 1); 
        option_zhu2.legend.data = classAlgorithm[Math.floor(i / 2)]
      }
    } 
  } catch (error) { 
    console.error(error); 
  } 
} 






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