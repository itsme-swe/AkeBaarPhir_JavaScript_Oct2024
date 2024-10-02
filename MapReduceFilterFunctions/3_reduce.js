// Finding sum of array elements
const startTime = performance.now();

const newArr = [5, 1, 3, 2, 6];

const reduceMethod = newArr.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(reduceMethod);

const endTime = performance.now();

const maxTime = endTime - startTime;

console.log(maxTime);

console.log();

// Now finding max value inside an array
const arr = [5, 1, 3, 2, 6];

const newOutput = arr.reduce((acc, curr) => {
  if (curr > acc) {
    acc = curr;
  }
  return acc;
}, 0);

console.log(newOutput); // output 6

/*
In above example we are assuming acc value as max value.
*/
