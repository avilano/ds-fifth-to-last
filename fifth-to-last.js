const DataStructures = require('algorithms').DataStructures;
const Stack = DataStructures.Stack;
const Queue = DataStructures.Queue;


function findFifth(foo) {
  const q = new Queue();
  const output = -1;
  const Qsize = 5;

  while (!foo.isEmpty()) {
    if (q.length === Qsize) {
      q.pop();
    }
    q.push(foo.pop());
  }

  if (!q.isEmpty()) {
    output = q.pop();
  }

  return output;
}
