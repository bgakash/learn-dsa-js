class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  // Insert a node into the BST
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return;
    }
    let curr = this.root;
    while (true) {
      if (value < curr.data) {
        if (curr.left === null) {
          curr.left = newNode;
          break;
        }
        curr = curr.left;
      } else if (value > curr.data) {
        if (curr.right === null) {
          curr.right = newNode;
          break;
        }
        curr = curr.right;
      } else {
        return; // No duplicates allowed
      }
    }
  }

  inorder(node = this.root) {
    if (node === null) {
      return;
    }

    this.inorder(node.left);
    console.log(node.data);
    this.inorder(node.right);
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(node, value) {
    // base case, root is null
    if (node === null) {
      return null;
    }

    // traverse the tree
    if (value < node.data) {
      node.left = this.deleteNode(node.left, value);
    } else if (value > node.data) {
      node.right = this.deleteNode(node.right, value);
    } else {
      // we found the node to delete

      if (node.left === null && node.right === null) {
        return null;
      }

      if (node.left === null) {
        return node.right;
      }

      if (node.right === null) {
        return node.left;
      }

      const minValue = this.findMin(node.right);
      node.data = minValue;
      node.right = this.deleteNode(node.right, minValue);
    }

    return node;
  }

  findMin(node) {
    let curr = node;
    while (curr.left !== null) {
      curr = curr.left;
    }

    return curr.data;
  }
}

const bst = new BST();

// Insert nodes
console.log("Inserting: 5, 3, 7, 1, 4, 6, 8");
bst.insert(5);
bst.insert(3);
bst.insert(7);
bst.insert(1);
bst.insert(4);
bst.insert(6);
bst.insert(8);

console.log("Inorder traversal after insertion:");
bst.inorder(); // Expected: 1, 3, 4, 5, 6, 7, 8

// Delete nodes
console.log("\nDeleting 3 (node with two children):");
bst.delete(3);
bst.inorder(); // Expected: 1, 4, 5, 6, 7, 8

console.log("\nDeleting 1 (leaf node):");
bst.delete(1);
bst.inorder(); // Expected: 4, 5, 6, 7, 8

console.log("\nDeleting 5 (root with two children):");
bst.delete(5);
bst.inorder(); // Expected: 4, 6, 7, 8
