const HashMap = require('./HashMap');
const HashSet = require('./HashSet');

// HASHMAPS

const myMap = new HashMap(10);

myMap.set("name", "Zanzibar")
myMap.set("age", 25)
myMap.set("dob", "1/2/3")

console.info("Hashmaps: \n")

console.info(myMap.get("name")); // Zanzibar
console.info(myMap.get("age")); // 25

console.info(myMap.has("name")); // true
console.info(myMap.has("dob")); // true
console.info(myMap.has("age")); // true
console.info(myMap.has("location")); // false

console.info(myMap.length()); // 3

console.info(myMap.remove("name"));
console.info(myMap.has("name")); // false

// Get all entries

console.info(myMap.entries()); // [ [ 'age', 25 ], [ 'dob', '1/2/3' ] ]


console.info("\n HashSets: \n");

// HASHSETS

const mySet = new HashSet();

mySet.add("name")
mySet.add("age")
mySet.add("dob")

console.info(mySet.contains("name")); // true
console.info(mySet.contains("age")); // true
console.info(mySet.contains("dob")); // true

console.info(mySet.contains("location")); // false

console.info(mySet.remove("name"));

console.info(mySet.contains("name")); // false

console.info(mySet.contains("age")); // true

console.info(mySet.contains("dob")); // true

console.info(mySet.entries()); // [ 'age', 'dob' ]