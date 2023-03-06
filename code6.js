// This code is supposed to calculate the factorial of a number, but it's throwing an error.
// The challenge is to identify and fix the bug.

function factorial(n) {
  if (n == 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5));
