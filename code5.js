// This code is supposed to print each property of the person object and then print the value of a non-existent job property, but it's throwing an error.
// The challenge is to identify and fix the bug.

let person = {
  name: "John",
  age: 30,
  city: "New York",
};

for (let property in person) {
  console.log(property);
}

console.log(person.job);
