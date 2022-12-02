const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5],
  5: [1, 2, 4],
  6: []
}

function aShortestPath(start, end) {
  const queue = [start];
  let visited = new Set();
  visited.add(start);
  let bool = false;
  let path = [];

  while (queue.length) {
      let currNode = queue.shift();

      path.push(currNode);

      let neighbors = adjList[currNode];

      if (neighbors.includes(end)) {
        path.push(end);
        bool = true;
        break;
      }

      neighbors.forEach(element => {
          if (!(visited.has(element))) {
              queue.push(element);
              visited.add(element);
              if (element == end) bool = true;
          }
      });
  }
  if (bool) return path;
  else return false;
}

console.log("First Test:");
console.log(aShortestPath(1, 3)); // -> [ 1, 2, 3 ] (One possible solution)
console.log("Second Test:");
console.log(aShortestPath(4, 1)); // -> [ 4, 5, 1 ] (One possible solution)
console.log("Third Test:");
console.log(aShortestPath(6, 1)); // -> false
