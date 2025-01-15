// Pure Function
function pureSum(a, b) {
  return a + b;
}
console.log(pureSum(2, 3)); // Always returns 5

// Impure Function
let globalValue = 10;
function impureSum(a) {
  globalValue += a; // Modifies the global state
  return globalValue;
}
console.log(impureSum(5)); // Result depends on globalValue

//--------- Currying --------- 
// Traditional Function
function sum(a, b) {
  return a + b;
}

// Curry Function
function currySum(a) {
  return function (b) {
    return a + b;
  };
}

const addFive = currySum(5);
console.log(addFive(3)); // 8

//--------- Higher-Order Functions ----------------
// Function that takes another function as an argument
function applyOperation(a, b, operation) {
  return operation(a, b);
}

// Functions to be used as arguments
function sum(a, b) {
  return a + b;
}

function multiplication(a, b) {
  return a * b;
}

console.log(applyOperation(5, 4, sum)); // 9
console.log(applyOperation(5, 4, multiplication)); // 20

// --------- Closure --------- 

function createCounter() {
  let counter = 0;
  return function () {
    counter += 1;
    return counter;
  };
}

const counter1 = createCounter();
console.log(counter1()); // 1
console.log(counter1()); // 2

// --------- Callbacks --------- 
function fetchData(callback) {
  setTimeout(() => {
    const data = { name: "Taua", age: 20 };
    callback(data);
  }, 1000);
}

fetchData((data) => {
  console.log("Data received:", data);
});

// --------- Immutability --------- 
const numbers = [1, 2, 3, 4];

// Immutable way: creating a new array
const newArray = [...numbers, 5];
console.log(newArray); // [1, 2, 3, 4, 5]
console.log(numbers); // [1, 2, 3, 4] - remains the same

// --------- Deep Copy and Shallow Copy --------- 
const originalObject = {
  name: "Taua",
  address: {
    city: "São Paulo",
    street: "Rua A"
  }
};

// Shallow Copy
const shallowCopy = { ...originalObject };
shallowCopy.address.city = "Rio de Janeiro";
console.log(originalObject.address.city); // "Rio de Janeiro" - shared reference

// Deep Copy
const deepCopy = JSON.parse(JSON.stringify(originalObject));
deepCopy.address.city = "Salvador";
console.log(originalObject.address.city); // "Rio de Janeiro" - remains intact
