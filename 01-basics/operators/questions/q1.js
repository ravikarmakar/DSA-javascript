// Q1. Guess thie value of i.
let i = 10;
i = i++ + ++i; // 10 +12
// console.log(i); // 22

// Q2. Guess the output of a, b and c.
let a = 11; // 13
let b = 22; // 24

let c = a + b + a++ + b++ + ++a + ++b;

// console.log("a=" + a); // 13     // type: string
// console.log("b=" + b); // 24     // type: string
// console.log("c=" + c); // 103    // type: string

// Q3: Mixed Increment/Decrement and Arithmetic JavaScript;
let x = 5;
let y = 10;

let r = --x + y++ - ++x + --y + x++ + y--;

// console.log("x=" + x); // 6
// console.log("y=" + y); // 9
// console.log("r=" + r); // 34

// Q4: Chained Operations with Complex Expression
let p = 7;
let q = 2;

let f = p++ * 2 - ++q / 2 + --p * q - q-- * p; // 14 - 1.5 => 12.5

// console.log("p=" + p); // 7
// console.log("q=" + q); // 2
// console.log("f=" + f); // 12.5

// Q5. value ox z
let z = true; // default value of "true" = 1
z++; // type casting
// console.log(z); // if z++/++z => 2 And z--/--z => 0, type: number

let m = false;
m++;
// console.log(m); // if m++/++m => 1 And m--/--m => -1, type: number

// let d = 10++; // we can't do that it will thorw an error, 10 is constant value/ only use in variables
// let d = 10;
// console.log(d++);
// console.log(d);

let l = 11;
let s = --(l++); // 12
// let s = --12 // we can't use unary operator in constants,  12 is constant 

console.log(l)