<template>
    <div class="wapper">
        <md-editor v-model="text" preview-only class="markdown" />
    </div>

</template>
<script lang="ts" setup>
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import { ref } from "vue";
import axios from "axios";
const text = ref('')
// 这个路径后期要改一下
axios.get('http://127.0.0.1:5173/demo.md').then((res) => {
    console.log(res.data);
    text.value = res.data
}).catch((err) => {
    console.log("err");
    text.value = err
})
</script>
<style>
.markdown {
    height: 100%;
    background-color: #f5f7fa;
}

.wapper {
    height: 90%;
}

.buttom {
    height: 10%;
}
</style>