const arr = [5, 1, 3, 2, 6];

// Now filter the odd values from array

const filteredArray = arr.filter((val) => {
  return val % 2;
});

console.log(filteredArray); // output : [ 5, 1, 3 ]

console.log();

const values = [5, 2, 4, 8, 10, 1, 20];

// Function to find the values greater than 5
function greaterThan(val) {
  return val > 5;
}

const greaterValues = values.filter(greaterThan);

console.log(greaterValues); // output: [ 8, 10, 20 ]
