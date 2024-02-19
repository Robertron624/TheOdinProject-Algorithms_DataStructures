function recursiveFib(n, current = 1, previous = 0, result = []) {   
  
    if (n === 0) return result; // base case
    result.push(previous);
    return recursiveFib(n - 1, current + previous, current, result);
}

console.info(recursiveFib(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
