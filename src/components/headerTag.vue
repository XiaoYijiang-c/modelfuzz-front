<template>
  <div class="head-tool--list">
    <div class="head-tool--part" style="margin-top: 10rem;">
      <div class="head-tool--item item__litter btn" :body-style="{ padding: '10px' }" v-for="i in props.topList" :key="i"
        @click="emits('headFunction', i)"><span>{{ i }}</span><el-icon v-if="i=='submit'"><DArrowRight /></el-icon></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { StepInstance } from 'element-plus';
import { ref } from 'vue'
let openASide = ref(true)
let leftcard = ref(63)
const props = defineProps<{
  topList:string[]
}>();
const changeCardWidth = () => {
  if (!openASide.value) {
    leftcard.value = 63
  } else {
    leftcard.value = 200
  }
  openASide.value = !openASide.value
}
const emits = defineEmits(["headFunction", "changeOpenASide"]);
</script>

<style lang="scss" src="../style/skeleton.scss">

</style>