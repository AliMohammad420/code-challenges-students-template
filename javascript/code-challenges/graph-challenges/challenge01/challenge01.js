class vertex {
  constructor(value,) {
    this.value = value;
  }
}

class edge {
  constructor(vertex, weight = 0) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex) {
        this.adjacencyList.set(vertex, []);
    }

    addDirectedEdge(startVertex, endVertex, weight = 0) {
        if (!this.adjacencyList.has(startVertex) || !this.adjacencyList.has(endVertex)) {
            throw new Error('__ERROR__ Invalid Vertices');
        }

        const adjacencies = this.adjacencyList.get(startVertex);
        adjacencies.push(new edge(endVertex, weight));
    }

    breadthFirst(startNode) {
        const queue = [];
        const visitedNodes = new Set();

        queue.push(startNode);
        visitedNodes.add(startNode);

        while (queue.length) {
            const currentVertex = queue.shift();
            const neighbors = this.adjacencyList.get(currentVertex);


            for (let neighbor of neighbors) {
                const neighborNode = neighbor.vertex;

                if (visitedNodes.has(neighborNode)) {
                    continue;
                } else {
                    visitedNodes.add(neighborNode);
                queue.push(neighborNode);
                }
            }
        }
        return [...visitedNodes].map(node => node.value);

    }
}

module.exports = { Graph, vertex, edge };

