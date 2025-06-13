// Arithmetic Operators:- "+", "-", "*", "/", "%"

// +: Addition
// -: Subtraction
// *: Multiplication
// /: Division
// %: Modulus (returns the remainder of a division)
// **: (exponentiation)

// let a = 12;
// let b = 21;

// console.log(a + b); // 33
// console.log(a - b); // -9
// console.log(a * b); // 252
// console.log(a / b); // 0.571428

// console.log(Math.floor(9 / 4)); // it will give us -> quotient: 2
// console.log(9 % 4); // it will give us -> remainder: 1

// console.log(2 % 9); // it will give us -> remainder: 2

// Note: if divident is less then divisor then it will reutun divident as an answer

// JavaScript Modulus Operator (%) - Quick Reminder

// When using the modulus operator (%):
// If the dividend (the first number) is smaller than the divisor (the second number), the result (remainder) will always be the dividend itself.
// Example: console.log(2 % 9); will output 2.
// (Because 2 divided by 9 is 0 with a remainder of 2)

// JS Power: Method-1 ->

// let j = 4538;

// if we want last digit from j variable
// console.log(j % 10); // remainder: 8

// if we want last 2 digit from j
// console.log(j % 100);

// if we want last 3 digit from j
// console.log(j % 1000);

// if we want last 4 digit from j
// console.log(j % 10000);

//
//
// JS Power: Method-2 ->

let k = 4869;

// if we want remove last one digit form k
console.log(Math.floor(k / 10));

// if we want remove last two digit form k
console.log(Math.floor(k / 100));
