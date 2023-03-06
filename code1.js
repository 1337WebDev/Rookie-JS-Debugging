// This code is supposed to calculate the tax on a given amount, but it's returning the wrong result.
// The challenge is to identify and fix the bug.

function calculateTax(totalAmount, taxRate) {
  return totalAmount * taxRate;
}

console.log(calculateTax(100, 0.2));
