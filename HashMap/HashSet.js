const HashMap = require('./HashMap');

class HashSet {
  constructor() {
    this.set = new Array(1000);
  }

  add(value) {
    const hash = new HashMap().hash(value);
    if (!this.set[hash]) {
      this.set[hash] = [];
    }
    this.set[hash].push(value);
  }

  contains(value) {
    const hash = new HashMap().hash(value);
    if (this.set[hash]) {
      for (let i = 0; i < this.set[hash].length; i++) {
        if (this.set[hash][i] === value) {
          return true;
        }
      }
    }
    return false;
  }

  remove(value) {
    const hash = new HashMap().hash(value);
    if (this.set[hash]) {
      for (let i = 0; i < this.set[hash].length; i++) {
        if (this.set[hash][i] === value) {
          this.set[hash].splice(i, 1);
          return true;
        }
      }
    }
    return false;
  }

  entries() {
    const result = [];
    for (let i = 0; i < this.set.length; i++) {
      if (this.set[i]) {
        for (let j = 0; j < this.set[i].length; j++) {
          result.push(this.set[i][j]);
        }
      }
    }
    return result;
  }

  length() {
    let count = 0;
    for (let i = 0; i < this.set.length; i++) {
      if (this.set[i]) {
        count += this.set[i].length;
      }
    }
    return count;
  }

  clear() {
    this.set = new Array(1000);
  }
}

module.exports = HashSet;