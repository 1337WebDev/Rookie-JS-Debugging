// This code is supposed to calculate the sum of the squares of the elements in an array, but it's not returning the expected result.
// The challenge is to identify and fix the bug.

let arr = [1, 2, 3, 4, 5];

let sum = arr.reduce(function (total, num) {
  return total + num * num;
}, 0);

console.log(sum);
