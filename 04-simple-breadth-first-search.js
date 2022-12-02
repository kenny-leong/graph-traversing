const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5],
  5: [1, 2, 4],
  6: []
}

function breadthFirstSearch(start, end) {
  const queue = [start];
  let visited = new Set();
  visited.add(start);
  let bool = false;

  while (queue.length) {
      let currNode = queue.shift();

      let neighbors = adjList[currNode];

      neighbors.forEach(element => {
          if (!(visited.has(element))) {
              queue.push(element);
              visited.add(element);
              if (element == end) bool = true;
          }
      });
  }
  return bool;
}

console.log("First Test:");
console.log(breadthFirstSearch(1, 3)); // -> true
console.log("Second Test:");
console.log(breadthFirstSearch(4, 1)); // -> true
console.log("Third Test:");
console.log(breadthFirstSearch(6, 1)); // -> false
