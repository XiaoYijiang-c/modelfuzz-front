<template>
    <div @click="click">click</div>

  <div id="graph-container"></div>
   
    
</template>

<script js setup>
import { ref, onMounted,nextTick  } from 'vue'
let dialogVisible = ref(false)
function click() {
    let lenet = LeNet();

    nextTick(() => {
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
    })
}
onMounted(() => {
    
})

</script>

<style type="text/css">
       
        #graph-container {
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            position: absolute;
            width: 100rem;
            height: 100rem;
            z-index: -100;
        }
        
        
    </style>