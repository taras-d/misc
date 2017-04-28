
function getMaxArrayDepth(arr) {
  
  function getArrayDepth(arr) {
    var depth = 1;
    for (var i = 0; i < arr.length; ++i) {
      if (Array.isArray(arr[i])) {
        depth += getArrayDepth(arr[i]);  
      }
    }
    return depth;
  }
  
  var maxDepth = 1, curDepth;
  for (var i = 0; i < arr.length; ++i) {
    curDepth = getArrayDepth(arr[i]);
    if (curDepth > maxDepth) {
      maxDepth = curDepth;
    }
  }
  
  return maxDepth;
}

var arr;

// test 1
arr = [1, 2, 3];
console.log(
  '[1, 2, 3] - ' +
  getMaxArrayDepth(arr)
);

// test 2
arr = [1, [2],[1, 3, []],[[1, [0]]],[]];
console.log(
  '[1, [2],[1, 3, []],[[1, [0]]],[]] - ' +
  getMaxArrayDepth(arr)
);

// test 3
arr = [1, 2, 3, [[[[[[[[]]]]]]]],[]];
console.log(
  '[1, 2, 3, [[[[[[[[]]]]]]]],[]] - ' + 
  getMaxArrayDepth(arr)
);

// test 4
arr = [[],[[],[[[[]]]]],[[[]]],[]];
console.log(
  '[[],[[],[[[[]]]]],[[[]]],[]] - ' +
  getMaxArrayDepth(arr)
);