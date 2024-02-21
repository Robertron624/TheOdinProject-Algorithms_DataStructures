class HashMap {
  constructor(size = 0) {
    this.size = size;
    this.map = new Array(size);
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  }

  set(key, value) {
    let hash = this.hash(key);
    if (!this.map[hash]) {
      this.map[hash] = [];
    }
    this.map[hash].push([key, value]);
  }

  get(key) {
    let hash = this.hash(key);
    if (this.map[hash]) {
      for (let i = 0; i < this.map[hash].length; i++) {
        if (this.map[hash][i][0] === key) {
          return this.map[hash][i][1];
        }
      }
    }
    return undefined;
  }

  has(key) {

    let hash = this.hash(key);
    if (this.map[hash]) {
      for (let i = 0; i < this.map[hash].length; i++) {
        if (this.map[hash][i][0] === key) {
          return true;
        }
      }
    }

    return false
  }

  remove(key) {
    let hash = this.hash(key);
    if (this.map[hash]) {
      for (let i = 0; i < this.map[hash].length; i++) {
        if (this.map[hash][i][0] === key) {
          this.map[hash].splice(i, 1);
          return true;
        }
      }
    }
    return false;
  }

  length() {
    let count = 0;
    for (let i = 0; i < this.map.length; i++) {
      if (this.map[i]) {
        count++;
      }
    }
    return count;
  }

  clear() {
    this.map = new Array(this.size);
  }

  keys() {
    let keys = [];
    for (let i = 0; i < this.map.length; i++) {
      if (this.map[i]) {
        keys.push(this.map[i][0][0]);
      }
    }
    return keys;
  }

  values() {
    let values = [];
    for (let i = 0; i < this.map.length; i++) {
      if (this.map[i]) {
        values.push(this.map[i][0][1]);
      }
    }
    return values;
  }

  entries() {
    let result = [];
    for (let i = 0; i < this.map.length; i++) {
      if (this.map[i]) {
        result.push(this.map[i][0]);
      }
    }
    return result;
  }
}

module.exports = HashMap;