// This code is supposed to check if a word is a palindrome, but it's not returning the expected result for some cases.
// The challenge is to identify and fix the bug.

function isPalindrome(word) {
  let reversedWord = word.split("").reverse().join("");

  if (reversedWord == word) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("racecar"));
