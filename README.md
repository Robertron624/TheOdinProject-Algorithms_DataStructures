# The Odin Project - Algorithms and Data Structures with JavaScript

This is the solution of the different assignments of the Algorithms and Data Structures with JavaScript course from The Odin Project.
These include subjects like recursion, sorting algorithms, and data structures.

## List of Assignments

### Recursion
- [Fibonacci] (./recursion/assignment1/recursiveFib.js)
- [Merge Sort](./recursion/assignment2/mergeSort.js)

## Linked List
- [Linked List](./LinkedList/index.js)

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
