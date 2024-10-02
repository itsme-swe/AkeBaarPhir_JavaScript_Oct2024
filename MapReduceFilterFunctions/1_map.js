const arr = [2, 4, 6, 8, 10];

// So writing function to double the array
function double(val) {
  return val * 2;
}

// Creating a variable to hold the new array returned by map() function
const output = arr.map(double);

console.log(output); // output: [ 4, 8, 12, 16, 20 ]

console.log();

// Converting nums into binary
const nums = [5, 1, 3, 2, 6];

const binary = nums.map((val) => {
  return val.toString(2);
});

console.log(binary); //output: [ '101', '1', '11', '10', '110' ]
