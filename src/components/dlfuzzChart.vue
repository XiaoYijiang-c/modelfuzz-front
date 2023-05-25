<template>
    <div class="chart_visiable">
        <div class="chart_visiable--header">
            <!-- <h3 class="chart_visiable--header__text">Project-ID</h3> -->
            <div class="chart_visiable--header__left">
                <el-dropdown class="chart_visiable--header__left--dropdown">
                <span class="el-dropdown-link chart_visiable--header__text u-menu_list u-font-f2f2f2">
                    <el-icon class="el-icon--right u-margin-right-1rem" v-if="props.currentProject.type === 'cv'"><Picture /></el-icon>
                    <el-icon class="el-icon--right u-margin-right-1rem" v-else-if="props.currentProject.type === 'mal'"><Platform /></el-icon>
                    <el-icon class="el-icon--right u-margin-right-1rem" v-else-if="props.currentProject.type === 'eval'"><DataAnalysis /></el-icon>
                    {{ props.currentProject.name }}<el-icon class="el-icon--right u-margin-left-1rem"><arrow-down /></el-icon>
                </span>
                <template #dropdown>
                <el-dropdown-menu>
                        <div class="u-menu_list" v-for="item in props.projectList" :key="item.id">
                        <el-dropdown-item @click="emits('changeProject',item),emits('chooseProject'),emits('setProjectID',item.id)">{{ item.name }} 
                          <div  v-if="item.type === 'cv'" class="u-flex-center "><el-icon color="#f2f2f2"><Picture /></el-icon></div>
                          <div v-else-if="item.type === 'mal'" class="u-flex-center "><el-icon  color="#f2f2f2"><Platform /></el-icon></div>
                          <div v-else-if="item.type === 'eval'" class="u-flex-center "><el-icon  color="#f2f2f2"><DataAnalysis /></el-icon></div>
                      </el-dropdown-item>
                        
                        </div>
                </el-dropdown-menu>
                </template>
            </el-dropdown>
            <div></div>
            <div class="chart_visiable--header__search">
            <input
            autocomplete="off"
                type="text"
                name="search"
                v-model="input2"
                class="input_self u-input-dark"
            />
            <div class="chart_visiable--header__search__button " @click="loadChart"><el-icon><Search /></el-icon></div>
            </div>
          </div>
          
            
        </div>
        <div 
            class="chart_visiable--bottom" 
            style="display:flex;align-items: center;justify-content: center;flex-wrap: wrap;"
            v-if="props.formPartLogin"
            >
            <div>
              <img src="../img/empty.png" alt="">
               <div style="font-size: 2rem;color: #f2f2f2;">请选择一个项目</div>
            </div>
          </div>
        <div v-else :class="{'chart_visiable--bottom': !fullscreenboolean, 'chart_visiable--bottom__fullscreen':fullscreenboolean}">
          <el-scrollbar>
            <el-icon class="chart_visiable--fullscreenbutton" @click="fullscreen"><FullScreen /></el-icon>
            <div class="chart_visiable--columns-2-3" > 
                <div class="chart-card">
                    <div class="chart-card__rainbow"></div>
                    <div class="chart-card--list-title">Result</div>
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
                    <!-- <div class="chart-card--title">main</div> -->
                  
                  <div ref="ref_5" class="chart-card--chart " >
                    <!-- <div class="chart-card--list-title">Result </div> -->
                    <div class="chart_visiable--columns-3 chart-card--list-box" style="height: 100%;">
                      <div class="statistic-card">
                        <div class="statistic-card--icon statistic-card--icon__green"><el-icon ><Platform /></el-icon></div>
                        <span class="statistic-card--text statistic-card--text__up">Perturb adversial per round</span>
                        <span class="statistic-card--value">{{ perturbAdversial }}</span>
                        <span class="statistic-card--text statistic-card--text__down">than last round
                          <span v-if="Number(perturbAdversialRate)>=0" style="color:green">{{ perturbAdversialRate }}%
                            <el-icon ><CaretTop /></el-icon>
                          </span>
                          <span v-else style="color:red">{{ perturbAdversialRate }}%
                            <el-icon ><CaretBottom /></el-icon>
                          </span>
                        </span>
                      </div>
                      <div class="statistic-card">
                        <div class="statistic-card--icon statistic-card--icon__purple"><el-icon><BellFilled /></el-icon></div>
                        <span class="statistic-card--text statistic-card--text__up">Time cost per round</span>
                        <span class="statistic-card--value">{{ usedTime }} S</span>
                        <span class="statistic-card--text statistic-card--text__down">than last round
                          <span v-if="Number(usedTimeRate)>=0" style="color:green">{{ usedTimeRate }}%
                            <el-icon ><CaretTop /></el-icon>
                          </span>
                          <span v-else style="color:red">{{ usedTimeRate }}%
                            <el-icon ><CaretBottom /></el-icon>
                          </span>
                        </span>
                      </div>
                      <div class="statistic-card">
                        <div class="statistic-card--icon statistic-card--icon__organge"><el-icon><MagicStick /></el-icon></div>
                        <span class="statistic-card--text statistic-card--text__up">L2 norm per round</span>
                        <span class="statistic-card--value">{{ L2Norm }}</span>
                        <span class="statistic-card--text statistic-card--text__down">than last round
                          <span v-if="Number(L2NormRate)>=0" style="color:green">{{ L2NormRate }}%
                            <el-icon ><CaretTop /></el-icon>
                          </span>
                          <span v-else style="color:red">{{ L2NormRate }}%
                            <el-icon ><CaretBottom /></el-icon>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>      
                </div>
                <!-- <div class="chart-card" >
                    <div class="chart-card--title">Neuron</div>
                        <div ref="ref_6" class="chart-card--chart"></div>      
                </div> -->
                <!-- <DlfuzzImage ref="dlfuzzImage"></DlfuzzImage> -->
            </div>
            <div class="chart_visiable--columns-1"><nnsvg ref="nnsvg_ref"></nnsvg></div> 
            <div class="chart_visiable--columns-1-2"> 
                <div class="chart-card" >
                    <div class="chart-card--title"></div>
                    <div class="chart-card--list-title u-fontsize-3rem">Neuron Coverage </div>
                    <div ref="ref_1"  class="chart-card--chart chart-card--chart--square">
                      
                    </div>      
                </div>
                <div class="chart-card" >
                    <div class="chart-card--title"></div>
                    <div class="chart-card--list-title u-fontsize-3rem">Neuron Coverage </div>
                    <div ref="ref_2" class="chart-card--chart chart-card--chart--rectangle"></div>      
                </div>
                <!-- <div class="chart-card" >
                    <div class="chart-card--title">Neuron</div>
                        <div ref="ref_3" class="chart-card--chart"></div>      
                </div> -->
                <!-- <DlfuzzImage ref="dlfuzzImage"></DlfuzzImage> -->
            </div>
            <div class="chart_visiable--columns-1-2"> 
                <div class="chart-card" >
        
                </div>

                <!-- <div class="chart-card" >
                    <div class="chart-card--title">Neuron</div>
                        <div ref="ref_3" class="chart-card--chart"></div>      
                </div> -->
                <!-- <DlfuzzImage ref="dlfuzzImage"></DlfuzzImage> -->
            </div>
          </el-scrollbar>
      </div>
    </div>
</template>
<script lang="ts" setup>
import axios from "axios";
import type { UploadInstance, UploadProps, UploadRawFile } from "element-plus";
import { Edit, Picture, Upload } from '@element-plus/icons-vue'
import {
  ArrowRight,
  CaretBottom,
  CaretTop,
  Warning,
} from '@element-plus/icons-vue'
import { ref, reactive,nextTick,Ref,h } from "vue";
import * as echarts from "echarts";
import Cookies from 'js-cookie'

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
  dataKey:'ID',
  key:'ID',
  title: 'ID',
  width:150
},{
  dataKey:'Original label',
  key:'Original label',
  title: 'Original label',
  width:100
},{
  dataKey:'New label',
  key:'New label',
  title: 'New label',
  width:100
},{
  dataKey:'From Image',
  key:'From Image',
  title: 'From Image',
  width:150
}]
console.log("columns",columns)
const tabledata:Ref<any[]> = ref([])

let option_zhu = {
  xAxis: {
    type: 'category',
    data: ['Original', 'Useless', 'New', 'Valuable'],
    axisTick: { show: false },
    splitLine: {
      show: false,
    },
    axisLabel: {                                //坐标轴刻度文字的设置
      show: true,                                 //是否显示
      color: '#f2f2f2',                              //坐标轴刻度文字的颜色
      fontSize:13,                                //坐标轴刻度文字的大小         (用数字表示)
      fontWeight:'lighter',                        //坐标轴刻度文字的加粗程度    (可选bold   bolder  lighter  normal)
      fontstyle: 'normal',                        //坐标轴刻度文字的样式          (可选normal  italic   oblique)
      fontFamily: 'Courier New',
      rotate: 15,
      align: 'center',
      margin:20
        },

  },
  yAxis: {
    type: 'value',
    splitLine: {
      show: false,
    },
    axisLabel: {                                //坐标轴刻度文字的设置
      show: true,                                 //是否显示
      color: '#f2f2f2',                              //坐标轴刻度文字的颜色
      fontSize:13,                                //坐标轴刻度文字的大小         (用数字表示)
      fontWeight:'lighter',                        //坐标轴刻度文字的加粗程度    (可选bold   bolder  lighter  normal)
      fontstyle: 'normal',                        //坐标轴刻度文字的样式          (可选normal  italic   oblique)
      fontFamily: 'Courier New',
      
        },
  },
  
  series: [
    {
      data: [
        {
          value: 70,
          itemStyle: {
            color: '#9F8DA7'
          }
        },
        {
          value: 20,
          itemStyle: {
            color: '#8776A0'
          }
        },
        {
          value: 30,
          itemStyle: {
            color: '#9D89AD'
          }
        },
        {
          value: 50,
          itemStyle: {
            color: '#55406B'
          }
        },
        

      ],
      type: 'bar',
      itemStyle: {
        normal: {
          label: {
            show: true, //开启显示数值
            position: 'top', //数值在上方显示
            textStyle: {  //数值样式
              color: '#D1DBFF',   //字体颜色
              fontSize: 12  //字体大小
            }
          }
        }
      },
    }
  ]
};

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
      alert(text)
    }
  }
  // console.log(ref_4.value.children[0].children[0].children[0].children[0].children[0].children[0].children)
}


let testlist = generateData(columns, 2000)
// let ll = 0
let timer: any = null
let perturbAdversial:Ref<string> = ref('0')
let perturbAdversialBefore:Ref<string> = ref('0')
let perturbAdversialRate: Ref<string> = ref('0')
let usedTime:Ref<string> = ref('0')
let usedTimeBefore:Ref<string> = ref('0')
let usedTimeRate: Ref<string> = ref('0')
let L2Norm:Ref<string> = ref('0')
let L2NormBefore:Ref<string> = ref('0')
let L2NormRate:Ref<string> = ref('0')
async function loadChart() {
  
  console.log("testlist",testlist)
  let ref_1WH =await getRefCurrentWH(ref_1)
  myEcharts1 = echarts.init(ref_1.value,'',ref_1WH);
  myEcharts1.setOption(option_zhu);
  let ref_2WH =await getRefCurrentWH(ref_2)
  myEcharts2 = echarts.init(ref_2.value,'',ref_2WH);
  myEcharts2.setOption(option);
  nnsvg_ref.value.init()
  let formDataObject = new FormData();
  let userID: any = Cookies.get('userID')
  if (userID) {
      formDataObject.append('user_id', userID);
  } else { return }
  formDataObject.append('project_id', props.currentProjectId)
  if(timer){return}
  timer = setInterval(function () {
    axios.post('http://43.138.12.254:9000/dlfuzz/request', formDataObject).then((response) => {
      console.log(response.data)
      console.log(response.data.status)
      if (response.data.status) {
        
        let dataList = []
        let normdataList = []
        let perturbdataList = []
        let dataMap = {
          nodes: response.data.nodes,
          edges:response.data.lines
        }
        for (let i = 0; i < response.data.neuronsPercentageList.length; i++){
          let data = {
            value:[i.toString(),response.data.neuronsPercentageList[i]]
          }
          dataList.push(data)
          let normdata = {
            value:[i.toString(),response.data.normList[i]]
          }
          normdataList.push(normdata)
          let perturbdata = {
            value:[i.toString(),response.data.perturbList[i]]
          }
          perturbdataList.push(perturbdata)
        }
        console.log(dataList, normdataList, perturbdataList)
        nnsvg_ref.value.build_graph(dataMap)
        myEcharts2.setOption({
            legend: {
              data: ['Neuron Coverage', 'L2norm', 'Perturb Adversial']
            },
            series: [
              {
                name: 'Neuron Coverage',
                type: 'line',
                data: dataList
              },
              {
                name: 'L2norm',
                type: 'line',
                data: normdataList
              },
              {
                name: 'Perturb Adversial',
                type: 'line',
                data: perturbdataList
              }
            ]
        });

        for (let cnt = 0; cnt < response.data.imgList.length; cnt++){
          let img_str = response.data.imgList[cnt]
          let ori = img_str.split('/')
          let new_label = ori[ori.length-1].split('^')[0]
          let ori1 = ori[ori.length-1].split('^')[1];
          let image_name = ori[ori.length-1].split('^')[2];
          let data_img = {
            'Original label':ori1,
            'New label':new_label,
            'From Image': image_name,
            'ID':ori[ori.length-1].split('^')[3]
          }
          tabledata.value.push(data_img)
        }
        perturbAdversialBefore.value = perturbAdversial.value
        perturbAdversial.value = response.data.perturb_adversial;
        perturbAdversial.value = perturbAdversial.value.toString().substring(0, 5)
        perturbAdversialRate.value = ((Number(perturbAdversial.value) -  Number(perturbAdversialBefore.value))/Number(perturbAdversialBefore.value)).toString().substring(0, 5)
        console.log(perturbAdversialRate.value)
        usedTimeBefore.value = usedTime.value
        usedTime.value = response.data.usedTime;
        usedTime.value = usedTime.value.toString().substring(0, 5)
        usedTimeRate.value = ((Number(usedTime.value) -  Number(usedTimeBefore.value))/Number(usedTimeBefore.value)).toString().substring(0, 5)
        console.log(usedTimeRate.value)
        L2NormBefore.value = L2Norm.value
        L2Norm.value = response.data.norm;
        L2Norm.value = L2Norm.value.toString().substring(0, 5)
        L2NormRate.value = ((Number(L2Norm.value) -  Number(L2NormBefore.value))/Number(L2NormBefore.value)).toString().substring(0, 5)
        console.log(L2NormRate.value)
        // option.series[0] = {
        //     data: response.data.neuronsPercentageList,
        //     type: 'line',
        //     smooth: true
        // }
        // option.xAxis.data = Object.keys(Array.from(Array(response.data.neuronsPercentageList.length)))
        // myEcharts.setOption(option);
        // dlfuzzImage.value.srcList = response.data.imgList;
        // console.log("dlfuzzImage.value.srcList",dlfuzzImage.value.srcList)
        

      }
      else {
        clearInterval(timer)
      }
    }
    ).catch((err) => {
      console.log(err)
      clearInterval(timer)
    });
            
        // for (var i = 0; i < 5; i++) {
        //     data.shift();
        //     data.push(randomData());
        // }

        // myEcharts2.setOption({
        //     series: [
        //     {
        //         data: data
        //     }
        //     ]
        // });

        // tabledata.value.push(testlist[ll]);
        // ll<2000?ll+=1:ll=0
      //       let img_str = "/model_save/luojiale_245719298217/result/9_43279_7_245719299305"
      // if (img_str) {
      //   let ori = img_str.split('/')
      //   let ori1 = ori[ori.length-1].split('_')[0]
      //   let new_label = ori[ori.length-1].split('_')[2];
      //   let data = {
      //         'Original label':ori1,
      //         'New label':new_label,
      //         'From Image':'Check',
      //       }
      //   tabledata.value.push(data)
      //       }
           
        loadList()
      }, 1000);
}
// loadChart()
// const add = () => {
//     option.xAxis.data.push('1-1')
//     // option.series[0].data.push(520)
//     myEcharts.setOption(option);
//     console.log(option.xAxis.data);
    
// }
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
