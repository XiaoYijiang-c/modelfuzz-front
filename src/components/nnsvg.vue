<template>
    <div @click="click">click</div>
    <div @click="click_color">click_color</div>

  <div id="graph-container"></div>
   
    
</template>

<script js setup>
import { ref, onMounted,nextTick  } from 'vue'
let dialogVisible = ref(false)
let lenet = null
function click() {
    lenet = LeNet();
    let architecture = [{
        filterHeight: 8,
        filterWidth: 8,
        layer: 0,
        numberOfSquares: 8,
        op: "Max-Pool",
        squareHeight: 128,
        squareWidth: 128,
    }, {
        filterHeight: 16,
        filterWidth: 16,
        layer: 1,
        numberOfSquares: 8,
        op: "Max-Pool",
        squareHeight: 64,
        squareWidth: 64,
    }]
    let architecture2 = [56, 1]

    let betweenLayers = []
    lenet.redraw({
    'architecture_': architecture,
    'architecture2_': architecture2
    });
    lenet.redistribute({
        'betweenLayers_': betweenLayers
    });
        lenet.resize(500,500);

}
function click_color() {
    lenet.style({
        color1_: "#DEB98B",
        color2_: "#292F49",
        
    })
}
</script>

<style type="text/css">
       
        #graph-container {
            top: 10rem;
            left: 10rem;
            position: absolute;
            width: 50rem;
            height: 50rem;
            z-index: -100;
            background-color: pink;
        }
        
        
    </style>