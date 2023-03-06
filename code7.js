// This code is supposed to get a property value from the person object using a function, but it's throwing an error.
// The challenge is to identify and fix the bug.

let person = {
  name: "John",
  age: 30,
  city: "New York",
};

function getProperty(prop) {
  return person.prop;
}

console.log(getProperty("name"));
