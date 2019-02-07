// var fs = require('fs');
// var n = fs.readFileSync('/dev/stdin').toString().split('\n');
// var n = [20, 9, 1, 4, 3, 2, 5, 6, 7, 8, 0, 19, 11, 14, 13, 12, 15, 16, 17, 18, 10];
var root = n[1];
var node = {};
var total = 1;
var nodeStart = function () {
  node['node_' + root] = { left: null, value: root, right: null, depth: 1 };
  for (var i = 2; i <= n[0]; i++) {
    console.log('%c##### debug-i: ', 'color: #058FD7', n[i]);
    insert(root, n[i])
  }
}

var insert = function (root, x) {
  var tempNode = node['node_' + root];
  if (x < root) {
    if (tempNode && tempNode.left) {
      insert(tempNode.left, x);
    } else {
      tempNode.left = x;
      total += tempNode.depth + 1;
      node['node_' + x] = { left: null, value: x, right: null, depth: tempNode.depth + 1 };
    }
  } else {
    if (tempNode && tempNode.right) {
      insert(tempNode.right, x); // 4, 3 제귀
    } else {
      tempNode.right = x;
      total += tempNode.depth + 1;
      node['node_' + x] = { left: null, value: x, right: null, depth: tempNode.depth + 1 };
    }
  }
}
nodeStart();
console.log(JSON.stringify(node));
console.log(total);