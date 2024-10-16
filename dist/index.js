"use strict";
function sumOfAge(user1, user2) {
  return user1.age + user2.age;
}
const age = sumOfAge({ name: "Abhilash", age: 26 }, { name: "Tango", age: 22 });
console.log(age);
