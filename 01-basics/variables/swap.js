// Q3. Swap two variables via three method..

// #Method One: swap with extra variable
// let a = 10;
// let b = 20;
// let j;

// j = a; // j = 10, a = 10
// a = b; // a = 20,
// b = j; // b = 10

// console.log(a); // 20
// console.log(b); // 10

// #Method Two: swap with no variable(Using Addition and Subtraction:)
// let a = 40;
// let b = 20;

// a = a + b; // a = 60
// b = a - b; // b = 40
// a = a - b; // a = 20

// console.log(a); // 20
// console.log(b); // 40

// #Method Three:  D-structuring -> best way to do that..
let a = 40;
let b = 20;

[a, b] = [b, a];

console.log(a); // 20
console.log(b); // 40
