class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    getData() {
        return this.data;
    }

    getLeft() {
        return this.left;
    }

    getRight() {
        return this.right;
    }

    setData(data) {
        this.data = data;
    }

    setLeft(node) {
        this.left = node;
    }

    setRight(node) {
        this.right = node;
    }
}

module.exports = Node;