<template>
    <div  class="modal">
    <el-scrollbar>
      <div class="modal-content">
        <div class="modal--top">
            <el-icon class="modal--close-button" @click="closeModal"><CloseBold /></el-icon>
        </div>
       <slot></slot>
      </div>
    </el-scrollbar>
    </div>
  </template>
  
<script lang="ts" setup>
import { ref } from 'vue'
const showModal = ref(false)
const emits = defineEmits(["update_showModal"]);

function closeModal() {
    emits('update_showModal', false);
}

</script>
  
  <style src="../style/skeleton.scss" lang="scss">
  
  </style>