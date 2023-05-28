<template>
  <div class="u-flex-center_"><div class="graph-container" :id="graph_container"></div></div>
</template>

<script  setup>
import { ref, onMounted,nextTick  } from 'vue'
import { Graph } from '../js/graph'
let dialogVisible = ref(false)
let lenet = null
const graph_container = ref('')
const data  = {
    edges: [
        ['input_1', 'block1_conv1'],
        ['block1_conv1', 'block1_pool1'],
        ['block1_pool1', 'block2_conv1'],
        ['block2_conv1', 'block2_pool1'],
        ['block2_pool1', 'flatten'],
        ['flatten', 'before_softmax'],
        ['before_softmax', 'predictions']
    ],
     nodes: {
        flatten: { output_shape: [null, 588] },
        block2_conv1: { output_shape: [null, 14, 14, 12] },
        input_1: { output_shape: [null, 28, 28, 1] },
        predictions: { output_shape: [null, 10] },
        before_softmax:{ output_shape: [null, 10] },
        block1_pool1: { output_shape: [null, 14, 14, 4] },
        block2_pool1: { output_shape: [null, 7, 7, 12]},
        block1_conv1: { output_shape: [null, 28, 28, 4] }
    }
}

const data1  = {
    nodes: {
        block2_pool1: { output_shape: [null, 7, 7, 12] },
        before_softmax: { output_shape: [null, 10] },
        predictions: { output_shape: [null, 10] },
        flatten: { output_shape: [null, 588] },
        block1_pool1: { output_shape: [null, 14, 14, 4] },
        block1_conv1: { output_shape: [null, 28, 28, 4] },
        input_1: { output_shape: [null, 28, 28, 1] },
        block2_conv1: { output_shape: [null, 14, 14, 12] }
    },
    edges: [
        ['input_1', 'block1_conv1'],
        ['block1_conv1', 'block1_pool1'],
        ['block1_pool1', 'block2_conv1'],
        ['block2_conv1', 'block2_pool1'],
        ['block2_pool1', 'flatten'],
        ['flatten', 'before_softmax'],
        ['before_softmax', 'predictions']
    ]
}; 
function init(id) {

    graph_container.value = id
    nextTick(() => {
        lenet = LeNet("#"+graph_container.value);
    })
    


    
}
function build_graph(data) {
    const graph = new Graph(data.nodes, data.edges);
    if (!graph.hasBranches()) {
        graph.bfs((item) => {
            if(item)
                graph.buildLineArchitecture(item)
            else
                throw new Error('Name not found')
        }, 'input_1')
        console.log(graph.getArchitecture());
    } else {
        console.log('G');
    
    }
    console.log('G',lenet);
    lenet.redraw({
    'architecture_': graph.getArchitecture().architecture,
    'architecture2_': graph.getArchitecture().architecture2
    });
    lenet.redistribute({});
    lenet.resize(1000,500);

}
function click_color() {
    lenet.style({
        color1_: "#DEB98B",
        color2_: "#292F49",
        
    })
}

defineExpose({
    build_graph,
    init,
    graph_container
})
</script>

<style type="text/css">
       
        .graph-container {
            width: 100rem;
            height: 50rem;
            z-index: -100;
            background-color: #243350;
            border-radius: 1rem;
            top: 100rem;
            /* bottom: 0;
            left: 0;
            right: 0;
            position: fixed; */
        }
        
        
    </style>
    <style src="../style/nnsvg.scss" lang="scss"></style>