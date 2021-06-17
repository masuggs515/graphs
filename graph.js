class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex);
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for(let vertex of vertexArray){
      this.nodes.add(vertex);
    }
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1)
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1)
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    for(let adjacent of vertex.adjacent){
      adjacent.adjacent.delete(vertex);
      this.nodes.delete(vertex);
    }
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    let toVisit = [start];
    let seen = new Set(toVisit);
    let seenArr = [start];

    while(toVisit.length > 0){
      let currNode = toVisit.pop();
      for(let next of currNode.adjacent){
        if(!seen.has(next)){
          toVisit.push(next);
          seen.add(next);
          seenArr.push(next);
        }
      }
    }
    return seenArr;
  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    let toVisit = [start];
    let seen = new Set(toVisit);
    let seenArr = [start.value];

    while(toVisit.length > 0){
      let currNode = toVisit.shift();
      for(let next of currNode.adjacent){
        if(!seen.has(next)){
          toVisit.push(next);
          seen.add(next);
          seenArr.push(next.value);
        }
      }
    }
    return seenArr;
  }
}

module.exports = {Graph, Node}