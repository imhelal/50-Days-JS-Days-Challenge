let myName = "name";

// regular function

// let sum = function() {

// }
let sum2 = (n1, n2) => {
  return n1 + n2;
};

let sum = (number1, number2) => number1 + number2;

let sayHello = (name) => "Hello " + name + "!";

//console.log(sayHello("Jhon"));

// let ageCheck = (age) => {
//   if (age < 18) {
//     return "You are child.";
//   } else {
//     return "You are adult.";
//   }
// };

let ageCheck = (age) => (age < 18 ? "You are child" : "You are adult.");

console.log(ageCheck(3));
