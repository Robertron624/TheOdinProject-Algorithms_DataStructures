const Node = require('./Node');
class Tree {
    constructor() {
        this.root = null;
    }

    buildTree(arr) {
        arr.forEach((data) => {
            this.insert(data);
        });
    }

    insert(data) {
        if (this.root === null) {
            this.root = new Node(data);
        } else {
            this.insertNode(this.root, data);
        }
    }

    insertNode(node, data) {
        if (data < node.getData()) {
            if (node.getLeft() === null) {
                node.setLeft(new Node(data));
            } else {
                this.insertNode(node.getLeft(), data);
            }
        } else {
            if (node.getRight() === null) {
                node.setRight(new Node(data));
            } else {
                this.insertNode(node.getRight(), data);
            }
        }
    }

    delete(data) {
        this.root = this.deleteNode(this.root, data);
    }

    deleteNode(node, data) {
        if (node === null) {
            return null;
        }
        if (data < node.getData()) {
            node.setLeft(this.deleteNode(node.getLeft(), data));
            return node;
        } else if (data > node.getData()) {
            node.setRight(this.deleteNode(node.getRight(), data));
            return node;
        } else {
            if (node.getLeft() === null && node.getRight() === null) {
                node = null;
                return node;
            }
            if (node.getLeft() === null) {
                node = node.getRight();
                return node;
            } else if (node.getRight() === null) {
                node = node.getLeft();
                return node;
            }
            const minRight = this.findMinNode(node.getRight());
            node.setData(minRight.getData());
            node.setRight(this.deleteNode(node.getRight(), minRight.getData()));
            return node;
        }
    }

    find(data) {
        return this.findNode(this.root, data);
    }

    findNode(node, data) {
        if (node === null) {
            return null;
        }
        if (data < node.getData()) {
            return this.findNode(node.getLeft(), data);
        } else if (data > node.getData()) {
            return this.findNode(node.getRight(), data);
        } else {
            return node;
        }
    }


    levelOrder(callback) {
        const height = this.height(this.root);
        for (let i = 0; i <= height; i++) {
            this.levelOrderNode(this.root, i, callback);
        }
    }

    levelOrderNode(node, level, callback) {

        if (node === null) {
            return;
        }
        if (level === 0) {
            callback(node.getData());
        } else {
            this.levelOrderNode(node.getLeft(), level - 1, callback);
            this.levelOrderNode(node.getRight(), level - 1, callback);
        }
    }

    inOrder(callback) {
        this.inOrderNode(this.root, callback);
    }

    inOrderNode(node, callback) {
        if (node !== null) {
            this.inOrderNode(node.getLeft(), callback);
            callback(node.getData());
            this.inOrderNode(node.getRight(), callback);
        }
    }

    preOrder(callback) {
        this.preOrderNode(this.root, callback);
    }

    preOrderNode(node, callback) {
        if (node !== null) {
            callback(node.getData());
            this.preOrderNode(node.getLeft(), callback);
            this.preOrderNode(node.getRight(), callback);
        }
    }

    

    postOrder(callback) {
        this.postOrderNode(this.root, callback);
    }

    postOrderNode(node, callback) {
        if (node !== null) {
            this.postOrderNode(node.getLeft(), callback);
            this.postOrderNode(node.getRight(), callback);
            callback(node.getData());
        }
    }

    height(node) {
        if (node === null) {
            return -1;
        }
        const leftHeight = this.height(node.getLeft());
        if (leftHeight === Number.MIN_SAFE_INTEGER) {
            return Number.MIN_SAFE_INTEGER;
        }
        const rightHeight = this.height(node.getRight());
        if (rightHeight === Number.MIN_SAFE_INTEGER) {
            return Number.MIN_SAFE_INTEGER;
        }
        const heightDiff = leftHeight - rightHeight;
        if (Math.abs(heightDiff) > 1) {
            return Number.MIN_SAFE_INTEGER;
        } else {
            return Math.max(leftHeight, rightHeight) + 1;
        }
    }

    depth(node) {
        return this.depthNode(this.root, node);
    }

    depthNode(root, node) {
        if (root === null) {
            return -1;
        }
        if (root === node) {
            return 0;
        }
        const leftDepth = this.depthNode(root.getLeft(), node);
        const rightDepth = this.depthNode(root.getRight(), node);
        if (leftDepth === -1 && rightDepth === -1) {
            return -1;
        }
        return 1 + Math.max(leftDepth, rightDepth);
    }

    isBalanced() {
        return this.height(this.root) !== Number.MIN_SAFE_INTEGER;
    }

    rebalance() {
        const arr = [];
        this.inOrder((data) => {
            arr.push(data);
        });
        this.root = this.buildTreeFromArray(arr);
    }

    buildTreeFromArray(arr) {
        if (arr.length === 0) {
            return null;
        }
        return this.buildTreeHelper(arr, 0, arr.length - 1);
    }

    buildTreeHelper(arr, start, end) {
        if (start > end) {
            return null;
        }
        const mid = Math.floor((start + end) / 2);
        const node = new Node(arr[mid]);
        node.setLeft(this.buildTreeHelper(arr, start, mid - 1));
        node.setRight(this.buildTreeHelper(arr, mid + 1, end));
        return node;
    }
    
    
}

module.exports = Tree;