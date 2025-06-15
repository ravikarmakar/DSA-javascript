// Q1.sum of numbers

// let n = 15345345345; // output: 15
// let sum = 0;

// while (n > 0) {
//   let num = n % 10;
//   sum += num;
//   n = Math.floor(n / 10);
// }

// console.log(sum);

// Q2.revers the numbers

// let x = 8463839;
// let rev = 0;
// while (x > 0) {
//   let rem = x % 10;
//   rev = rev * 10 + rem;
//   x = Math.floor(x / 10);
// }

// console.log(rev);

// Q3. Strong number.

let input = 145;
let sum = 0;
let copy = input;
while (input > 0) {
  let rem = input % 10;
  let fact = 1;
  for (let i = 1; i <= rem; i++) {
    fact *= i;
  }
  sum = sum + fact;
  input = Math.floor(input / 10);
}

if (copy === sum) {
  console.log("strong number");
} else {
  console.log("not strong number");
}
