<template>
    <div class="demo-image__preview">
        <div class="mid">
            <el-image class="image" :src="url" :preview-src-list="srcList" :initial-index="0"
                fit="cover" />
            <div class="imageSelect">
                <el-pagination v-model:currentPage="currentPage3" v-model:page-size="pageSize3"
                    layout="prev, pager, next, jumper" :total="srcList.length" @size-change="handleSizeChange"
                    @current-change="handleCurrentChange" />
            </div>
            <!-- test -->
            <!-- <el-button @click="clearTimer(timer)">clearTimer</el-button> -->
            <!-- test -->
        </div>
    </div>
</template>
<script lang ="ts" setup>
import 'md-editor-v3/lib/style.css';
import { ref, watch } from 'vue'


// test
// let timer: NodeJS.Timer | null = null;
//每5s刷新数据

// timer = setInterval(() => {
//     addList();
// }, 1000);

// const addList = () => {
//     srcList.value.push("11")
// }

// const clearTimer = (timer: any) => {
//     clearInterval(timer)
//     timer = null;
// }

// end test
const emits = defineEmits(["changenum"]);
const url = ref()
const srcList = ref<string[]>([])
const srclistLen = ref(7)
watch(srcList.value, (newValue, oldValue) => {
    srclistLen.value = srcList.value.length
    emits('changenum', srclistLen.value)
})
const currentPage3 = ref(1)
const pageSize3 = ref(1)

const handleSizeChange = (val: number) => {
    console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
    url.value = "http://127.0.0.1:5000"+srcList.value[val-1]+'.png'
    console.log(`current page: ${val}`)                             
}
defineExpose({
    srcList,
})
</script>
<style>
.demo-image__preview {
    width: 100%;
    height: 100%;
    display: flex;
    justify-self: center;
    align-items: center;
}

.mid {
    width: 100%;
}

.imageSelect {
    display: flex;
    justify-content: center;
}

.image{
    width: 30%;
    height: 30%;
}
</style>