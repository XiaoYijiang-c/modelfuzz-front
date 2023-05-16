<template>
    
    <div class="menu" :class="{'menu_active':activeMenu}">
        <div class="toggle" @click="activeMenu=!activeMenu"><el-icon><Plus /></el-icon></div>
        <li style="--i:0">
          <a href="#">
            <el-icon @click="emits('login')"><User /></el-icon>
          </a>
        </li>
        <li style="--i:1">
          <a href="#">
            <el-icon><Grid /></el-icon>
          </a>
        </li>
        <li style="--i:2">
          <a href="#">
            <el-icon><Tools /></el-icon>
          </a>
        </li>
        
        
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const activeMenu = ref(false)
const emits = defineEmits(["login"]);
</script>

<style>
.menu{
    /* position: fixed; */
    float: left;
    position: sticky;
    top:0rem;
    left: 5rem;
    width: 20rem;
    height: 20rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #4d3a59;
    z-index: 3;
}
.menu li {
    position: absolute;
    list-style: none;
    left: 0;
    transform-origin: 10rem;
    transition: .5s;
    transition-delay:calc(0.1s * var(--i));
    transform: rotate(0deg) translateX(8rem);

}
.menu li a{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 4rem;
    background-color: #fff;
    border-radius: 50%;
    transform: rotate(calc(360deg / -3 * var(--i)));
    box-shadow: 0 .3rem .4rem rgba(0, 0,0,.15);
    font-size: 2rem;
    color:#4d3a59
}
.menu.menu_active li{
    transform: rotate(calc(360deg / 3 * var(--i)));
}
.toggle{
    position: absolute;
    width: 6rem;
    height:6rem;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index:1000;
    border-radius: 50%;
    cursor:pointer;
    box-shadow: 0 .3rem .4rem rgba(0, 0,0,.15);
    font-size: 3rem;
    transition: transform .25s;
}

.menu.menu_active .toggle{
    -webkit-transform: rotate(315deg);
    transform: rotate(315deg);
}
</style>