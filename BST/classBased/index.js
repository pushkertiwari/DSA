

class BST {
    constructor(data = 0, left = null, right = null) {
      this.data = data;
      this.left = left;
      this.right = right;
    }
  
    // Insert function.
    Insert(root, value) {
      if (!root) {
        // Insert the first node, if root is null.
        return new BST(value);
      }
  
      // Insert data.
      if (value > root.data) {
        // Insert right node data, if the 'value'
        // to be inserted is greater than 'root' node data.
  
        // Process right nodes.
        root.right = this.Insert(root.right, value);
      } else if (value < root.data) {
        // Insert left node data, if the 'value'
        // to be inserted is smaller than 'root' node data.
  
        // Process left nodes.
        root.left = this.Insert(root.left, value);
      }
  
      // Return 'root' node, after insertion.
      return root;
    }
  
    // Inorder traversal function.
    // This gives data in sorted order.
    Inorder(root) {
      if (!root) {
        return;
      }
      this.Inorder(root.left);
      console.log(root.data);
      this.Inorder(root.right);
    }
  }
  
  // Driver code
  const b = new BST();
  let root = null;
  root = b.Insert(root, 50);
  b.Insert(root, 30);
  b.Insert(root, 20);
  b.Insert(root, 40);
  b.Insert(root, 70);
  b.Insert(root, 60);
  b.Insert(root, 80);
  
  b.Inorder(root);