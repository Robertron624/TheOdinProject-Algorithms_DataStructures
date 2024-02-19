import Node from "./Node.js";

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.getNext()) {
      current = current.getNext();
    }
    current.setNext(newNode);
  }

  insertAt(index, value) {
    const newNode = new Node(value);
    if (index === 0) {
      newNode.setNext(this.head);
      this.head = newNode;
      return;
    }
    let current = this.head;
    let count = 0;
    while (current) {
      if (count === index - 1) {
        newNode.setNext(current.getNext());
        current.setNext(newNode);
        return;
      }
      count++;
      current = current.getNext();
    }
  }

  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    newNode.setNext(this.head);
    this.head = newNode;
  }

  remove(value) {
    if (!this.head) {
      return;
    }
    if (this.head.getValue() === value) {
      this.head = this.head.getNext();
      return;
    }
    let current = this.head;
    while (current.getNext()) {
      if (current.getNext().getValue() === value) {
        current.setNext(current.getNext().getNext());
        return;
      }
      current = current.getNext();
    }
  }

  at(index) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (count === index) {
        return current;
      }
      count++;
      current = current.getNext();
    }
    return null;
  }

  find(value) {
    let current = this.head;
    while (current) {
      if (current.getValue() === value) {
        return current;
      }
      current = current.getNext();
    }
    return null;
  }

  contains(value) {
    let current = this.head;
    while (current) {
      if (current.getValue() === value) {
        return true;
      }
      current = current.getNext();
    }
    return false;
  }

  size() {
    let current = this.head;
    let size = 0;
    while (current) {
      size++;
      current = current.getNext();
    }
    return size;
  }

  getHead() {
    return this.head;
  }

  tail() {
    let current = this.head;
    while (current.getNext()) {
      current = current.getNext();
    }
    return current;
  }

  pop() {
    let current = this.head;
    if (!current) {
      return null;
    }
    if (!current.getNext()) {
      this.head = null;
      return current;
    }
    while (current.getNext().getNext()) {
      current = current.getNext();
    }
    const last = current.getNext();
    current.setNext(null);
    return last;
  }

  toString() {
    let current = this.head;
    let result = "";
    while (current) {
      result += `(${current.getValue()})` + " -> ";
      if (!current.getNext()) {
        result += "null";
      }
      current = current.getNext();
    }
    console.log(result);
  }
}

export default LinkedList;
