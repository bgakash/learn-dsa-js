function dfs(graph, startNode, visited = new Set()) {
  // Mark current node as visited
  visited.add(startNode);
  console.log(startNode); // Process the node

  // Explore all neighbors
  for (let neighbor of graph[startNode]) {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited);
    }
  }
}

// Example usage:
const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"],
};

dfs(graph, "A"); // Outputs: A B D E F C
