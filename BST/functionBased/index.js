class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function insert(node, value){
    if(!node){
        return new Node(value)
    }
    if(value < node.value){
        node.left = insert(node.left,value);
    }else {
        node.right = insert(node.right,value);
    }
    return node;
}

// left, root, right
function inOrder(root) {
    if (root) {
      inOrder(root.left);
      console.log(root.value);
      inOrder(root.right);
    }
  }

const root = null;
let node = insert(root, 5);
insert(node, 3);
insert(node, 8);
insert(node, 1);
insert(node, 4);
insert(node, 7);
insert(node, 9);
// Example BST
//       5
//     /   \
//    3     8
//   / \   / \
//  1   4 7   9
inOrder(node);
// 1,3,4,5,7,8,9


  
