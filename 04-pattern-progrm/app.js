// console.log("Hello");
// console.log("World");

// process.stdout.write("Hello ");
// process.stdout.write("World");

// Q1. write a star with 5 row and coloum
let prompt = require("prompt-sync")();

let n = Number(prompt("Enter your number: "));

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    process.stdout.write("* ");
  }
  console.log(); // for next line
}
