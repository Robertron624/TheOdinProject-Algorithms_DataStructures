# The Odin Project - Algorithms and Data Structures with JavaScript

This is the solution of the different assignments of the Algorithms and Data Structures with JavaScript course from The Odin Project.
These include subjects like:

- Recursion 
- Sorting algorithms
- Data structures

## List of Assignments

### Recursion
- [Fibonacci](./recursion/assignment1/recursiveFib.js)
- [Merge Sort](./recursion/assignment2/mergeSort.js)

## Linked List
- [Linked List](./LinkedList/index.js)

## Hash Map
- [Hash Map](./HashMap/index.js)

## Binary Search Tree
- [Binary Search Tree](./BinarySearchTree/index.js)

## Assignment Descriptions

### Recursion
The project consists of two assignments:

- The first is to write a recursive function that takes "n" and will return an array with the "n" fibonacci numbers.

- The second is to write a recursive function that takes an unsorted array and returns the array sorted using the merge sort algorithm,
this algorithm consists of dividing the array in half until the arrays are of length 1, then merge the arrays in order, so we use recursion to divide the array and then merge the arrays.

### Linked List

The project consists of a simple implementation of a linked list, with the following methods:

- `append`: Add a new node to the end of the list
- `prepend`: Add a new node to the start of the list
- `remove`: Delete a node by its value
- `insertAt`: Insert a new node at a given index
- `at`: Get the node at a given index
- `size`: Get the size of the list
- `getHead`: Get the first node of the list
- `tail`: Get the last node of the list
- `find`: Find the index of a node with a given value
- `toString`: Print the list in the console with the format `1 -> 2 -> 3 -> 4 -> 5`


### Hash Map

The project consists of a simple implementation of a hash map, with the following methods:

- `set`: Add a new key-value pair to the hash map
- `get`: Get the value of a key
- `delete`: Delete a key-value pair by its key
- `has`: Check if a key exists in the hash map
- `keys`: Get all the keys of the hash map
- `values`: Get all the values of the hash map
- `size`: Get the size of the hash map
- `clear`: Delete all the key-value pairs of the hash map
- `entries`: Get all the key-value pairs of the hash map

Alternative there within this subject there is a HashSet implementation, which is a hash map that only stores keys, and not values.

### Binary Search Tree

The project consists of a simple implementation of a binary search tree, with the following methods:

- `buildTree`: Create a new tree from an array
- `insert`: Add a new node to the tree
- `delete`: Delete a node by its value
- `find`: Find a node by its value
- `levelOrder`: Apply a function to each node of the tree in level order
- `preOrder`: Apply a function to each node of the tree in pre-order
- `inOrder`: Apply a function to each node of the tree in in-order
- `postOrder`: Apply a function to each node of the tree in post-order
- `height`: Get the height of the tree
- `depth`: Get the depth of a node
- `isBalanced`: Check if the tree is balanced
- `rebalance`: Rebalance the tree, so the tree is balanced