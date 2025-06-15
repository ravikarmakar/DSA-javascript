// Q1.Sum of n natural numbers and factorial on number.
// const pr = prompt("Enter you number");

// if (pr === null) {
//   console.log("Input cancelled by user");
// } else {
//   const n = Number(pr);
//   if (isNaN(n)) {
//     console.log("Invlaid input");
//   } else {
//     if (n > 0) {
//       // Factorial: (1*2*3*4*5)
//       let fact = 1;
//       for (let i = 1; i <= n; i++) {
//         fact = fact * i;
//       }
//       console.log(fact);
//     } else {
//       console.log("Number should be positive and more then 0");
//     }
//   }
// }

// Sum: (1+2+3+4+5)
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   sum += i;
// }
// console.log(sum);

// BY GPT:-

const input = prompt("Enter your number");
const n = Number(input);

if (!input || isNaN(n)) {
  console.log("Invalid input");
} else if (n <= 0) {
  console.log("Number should be positive and more than 0");
} else {
  let fact = 1,
    i = 1;
  while (i <= n) fact *= i++;
  console.log(fact);
}
