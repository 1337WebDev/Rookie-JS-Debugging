// This code is supposed to concatenate two arrays and calculate the sum of their elements, but it's not returning the expected result.
// The challenge is to identify and fix the bug.

let array1 = [1, 2, 3];
let array2 = [2, 3, 4];

let newArray = array1.concat(array2);

let sum = newArray.reduce(function (a, b) {
  return a + b;
});

console.log(sum);
