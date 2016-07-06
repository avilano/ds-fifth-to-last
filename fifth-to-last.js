var DataStructures = require('algorithms').DataStructures;
var Stack = DataStructures.Stack;
var Queue = DataStructures.Queue;


function findFifth(foo){
  var q = new Queue();
  var output = -1;
  var q_size = 5;

  while(!foo.isEmpty())
  {
    if(q.length == q_size){
      q.pop();
    }
    q.push(foo.pop());
  }

  //q has something
  if(!q.isEmpty()){
    output = q.pop();
  }

  return output;
};
