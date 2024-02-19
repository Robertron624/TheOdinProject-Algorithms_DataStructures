import Node from "./Node.js";
import LinkedList from "./LinkedList.js";

const myList = new LinkedList();

myList.append(1);
myList.append(2);
myList.append(3);
myList.append(4);
myList.append(5);

const listSize = myList.size(); // 5
console.info(listSize);

const listHead = myList.getHead(); // 1
console.info(listHead);

const listTail = myList.tail(); // 5
console.info(listTail);

const poppedNode = myList.pop(); // 5
console.info(poppedNode);

const nodeAtPosition = myList.at(2); // 3
console.info(nodeAtPosition);

const is2InList = myList.contains(2); // true
console.info(is2InList);

const is6InList = myList.contains(6); // false
console.info(is6InList);

console.info(myList.find(3)); // Node { value: 3, next: Node { value: 4, next: Node { value: 5, next: null } } }

console.info(myList.find(6)); // null

myList.toString(); // (1) -> (2) -> (3) -> (4) -> (5) -> null