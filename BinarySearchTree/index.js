const Tree = require("./Tree");
const Node = require("./Node");


function getRandomNumbers(max = 100, count = 10) {
    const numbers = new Set();
    while (numbers.size < count) {
        numbers.add(Math.floor(Math.random() * max));
    }
    return Array.from(numbers);
}

function unBalanceTree(tree) {
    const arr = [];
    tree.inOrder((data) => {
        arr.push(data);
    });
    tree.root = tree.buildTreeFromArray(arr);
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

// FIXED EXAMPLES

// Example usage of a fixed tree that is balanced
// const balancedTreeExample = new Tree();
// balancedTreeExample.buildTree([10, 5, 15, 3, 7, 12, 18]);
// prettyPrint(balancedTreeExample.root);

// console.info("is balancedTree balanced? ", balancedTreeExample.isBalanced()); // true

// // Example usage of a fixed tree that is unbalanced
// const unbalancedTreeExample = new Tree();
// unbalancedTreeExample.buildTree([10, 5, 15, 3, 7, 12, 18, 1, 2]);
// prettyPrint(unbalancedTreeExample.root);

// console.info("is unbalancedTree balanced? ", unbalancedTreeExample.isBalanced()); // false

// // Rebalance the unbalanced tree
// unbalancedTreeExample.rebalance();
// prettyPrint(unbalancedTreeExample.root);
// console.info("is unbalancedTree balanced? ", unbalancedTreeExample.isBalanced()); // true



// USING RANDOM NUMBERS
const tree = new Tree();
const numbers1 = getRandomNumbers(100, 10);
tree.buildTree(numbers1);

prettyPrint(tree.root);

const isTreeBalanced = tree.isBalanced();

console.info("is tree balanced? ", isTreeBalanced);

if(!isTreeBalanced){
    console.info("Tree is unbalanced, rebalancing...")
    tree.rebalance();
    prettyPrint(tree.root);
    console.info("is tree balanced after rebalanced ? ", tree.isBalanced());
}
else {
    console.info("Tree is already balanced, unbalancing...");
    unBalanceTree(tree);
    prettyPrint(tree.root);
    console.info("is tree balanced after unbalanced ? ", tree.isBalanced());
}

// Print in level order
console.info("Printing in level order:\n");
tree.levelOrder((data) => {
    console.log(data);
});

// Print in order
console.info("Printing in order:\n");
tree.inOrder((data) => {
    console.log(data);
});

// Print pre order
console.info("Printing pre order:\n");
tree.preOrder((data) => {
    console.log(data);
});

// Print post order
console.info("Printing post order:\n");
tree.postOrder((data) => {
    console.log(data);
});


const tree2 = new Tree();
const numbers2 = getRandomNumbers(100, 10);
tree2.buildTree(numbers2);

prettyPrint(tree2.root);

const isTree2Balanced = tree2.isBalanced();

console.info("is unbalancedTree balanced? ", isTree2Balanced);

// Rebalance the potentially unbalanced tree

tree2.rebalance();

prettyPrint(tree2.root);

console.info("is unbalancedTree balanced after rebalanced ? ", tree2.isBalanced());