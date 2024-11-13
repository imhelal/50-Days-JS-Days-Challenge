/**
 * Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
 */

function lessThan100(number1, number2) {
  let sum = number1 + number2;
  if (sum < 100) {
    return true;
  } else {
    return false;
  }
}

//console.log(lessThan100(30, 69));

/**
 * Create a function that takes two numbers as arguments and returns their sum.
 */

function addition(a, b) {
  return a + b;
}

//console.log(addition(10, 5));

/**
 * Create a function that takes a number as an argument, increments the number by +1 and returns the result.
 */

function addition2(number) {
  // edge case
  if (typeof number === "number") {
    return ++number;
  } else {
    return false;
  }
}

//console.log(addition2("sfsd"));

/**
 * Create a function that takes the age in years and returns the age in days.
 */

function calcAge(ageInYears) {
  let ageInDays = 365 * ageInYears;
  return ageInDays;
}

//console.log(calcAge(0));

/**
 * Write a function that converts hours into seconds.
 */
function howManySeconds(hours) {
  let totalSeconds = hours * 3600;
  return totalSeconds;
}

//console.log(howManySeconds(0.1));

/**
 * Return the Remainder from Two Numbers
 */
function remainder(x, y) {
  return x % y;
}
//console.log(remainder(2, 4));

/**
 * A student learning JavaScript was trying to make a function. His code should concatenate a passed string name with string "Edabit" and store it in a variable called result. He needs your help to fix this code.
 */
function nameString(name) {
  let b = "Edabit";
  let result = name + b;
  return result;
}
