function iterativeFib(n) {
  let result = [0, 1];
  for(let i = 2; i < n; i++) {
    result.push(result[i - 2] + result[i - 1]);
  }
  return result
}

console.info(iterativeFib(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
console.info(iterativeFib(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]