
interface Node {
    output_shape: any[];
}

interface Edge {
    from: string;
    to: string;
}

interface Architecture {
    filterHeight: number;
    filterWidth: number;
    layer: number;
    numberOfSquares: number;
    op: string;
    squareHeight: number;
    squareWidth: number;
}

export class Graph {
    private nodes: Map<string, Node> = new Map();
    private architectures: Map<string, Architecture> = new Map();
    private edges: Edge[] = [];

    constructor(nodes: { [key: string]: Node }, edges: string[][]) {
        Object.entries(nodes).forEach(([key, value]) => {
            this.nodes.set(key, value);
        });
        edges.forEach((item) => {
            this.edges.push({ from: item[0], to: item[1] });
        });
        this.make_architecture_item()
        console.log(this.architectures)
    }

    private make_architecture_item() {
        this.nodes.forEach((value, key) => {
            if (value['output_shape'].length == 3) {
                let architecture: Architecture = {
                    filterHeight: value['output_shape'][1] / 8,
                    filterWidth: value['output_shape'][1] / 8,
                    layer: 0,
                    numberOfSquares: value['output_shape'][2],
                    op: key,
                    squareHeight: value['output_shape'][1],
                    squareWidth: value['output_shape'][0],
                }
                this.architectures.set(key, architecture)
            }
        })
    }

    dfs(callback: (node: string) => void, startNode?: string): void {
        const visited = new Set<string>();
        const dfsVisit = (node: string) => {
            if (!visited.has(node)) {
                visited.add(node);
                callback(node);
                const neighbors = this.edges.filter(edge => edge.from === node).map(edge => edge.to);
                neighbors.forEach(neighbor => dfsVisit(neighbor));
            }
        };
        if (startNode) {
            dfsVisit(startNode);
        } else {
            this.nodes.forEach((_, node) => dfsVisit(node));
        }
    }

    bfs(callback: (node: string | undefined) => void, startNode?: string): void {
        const visited = new Set<string>();
        const queue: string[] = [];
        const bfsVisit = (node: string) => {
            if (!visited.has(node)) {
                visited.add(node);
                queue.push(node);
                while (queue.length > 0) {
                    const current = queue.shift();
                    callback(current);
                    const neighbors = this.edges.filter(edge => edge.from === current).map(edge => edge.to);
                    neighbors.forEach(neighbor => {
                        if (!visited.has(neighbor)) {
                            visited.add(neighbor);
                            queue.push(neighbor);
                        }
                    });
                }
            }
        };
        if (startNode) {
            bfsVisit(startNode);
        } else {
            this.nodes.forEach((_, node) => bfsVisit(node));
        }
    }

    hasBranches(): boolean {
        let result = false;
        this.nodes.forEach((_, node) => {
            const neighbors = this.edges.filter(edge => edge.from === node).map(edge => edge.to);
            if (neighbors.length > 1) {
                result = true;
            }
        });
        return result;
    }
    private architecture: Architecture[] = []
    private architecture2: number[] = []

    buildLineArchitecture(name: string) {
        if (this.architectures.has(name)) {
            let mid = this.architectures.get(name)
            if (mid) {
                mid.layer = this.architecture.length
                this.architecture.push(mid)
            }
            else
                throw new Error('Name not found')
        } else {
            let item = this.nodes.get(name)
            if (item)
                this.architecture2.push(item['output_shape'][0])
            else
                throw new Error('Name not found')
        }
    }

    getArchitecture() {
        return {
            architecture: this.architecture,
            architecture2: this.architecture2
        }
    }
}


