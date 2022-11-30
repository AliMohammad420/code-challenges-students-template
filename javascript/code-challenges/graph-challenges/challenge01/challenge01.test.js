const { Graph, vertex, edge } = require('./challenge01.js');

describe('Graph', () => {
    it('should return array of values', () => {

        const graph = new Graph();
        const A = new vertex('A');
        const B = new vertex('B');
        const C = new vertex('C');
        const D = new vertex('D');
        const E = new vertex('E');
        const F = new vertex('F');
        const G = new vertex('G');
        const H = new vertex('H');
        const I = new vertex('I');
        const K = new vertex('K');

        graph.addVertex(A);
        graph.addVertex(B);
        graph.addVertex(C);
        graph.addVertex(D);
        graph.addVertex(E);
        graph.addVertex(F);
        graph.addVertex(G);
        graph.addVertex(H);
        graph.addVertex(I);
        graph.addVertex(K);


        
        graph.addDirectedEdge(A, C);
        graph.addDirectedEdge(A, E);
        graph.addDirectedEdge(C, B);
        graph.addDirectedEdge(C, F);
        graph.addDirectedEdge(E, F);
        graph.addDirectedEdge(E, G);
        graph.addDirectedEdge(B, D);
        graph.addDirectedEdge(B, I);
        graph.addDirectedEdge(F, H);
        graph.addDirectedEdge(G, I);
        graph.addDirectedEdge(D, K);
        graph.addDirectedEdge(H, K);
        graph.addDirectedEdge(I, K);
        

        expect(graph.breadthFirst(A)).toEqual(["A", "C", "E", "B", "F", "G", "D", "I", "H", "K"]);
        
        
    });
});
