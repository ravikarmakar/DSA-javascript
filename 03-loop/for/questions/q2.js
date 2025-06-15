// Q2.Factors of number
// const pr = prompt("Enter you number");

// even number
// if (pr === null) {
//   console.log("Input cancelled by user");
// } else {
//   const n = Number(pr);
//   if (isNaN(n)) {
//     console.log("Invlaid input");
//   } else {
//     if (n > 0) {
//       for (let i = 1; i <= Math.floor(n / 2); i++) {
//         if (n % i === 0) {
//           console.log(i);
//         }
//       }
//       console.log(n);
//     } else {
//       console.log("Number should be positive and more then 0");
//     }
//   }
// }

const pr = prompt("Check prime number ?");

// odd numebr
if (pr === null) {
  console.log("Input cancelled by user");
} else {
  const n = Number(pr);
  if (isNaN(n)) {
    console.log("Invlaid input");
  } else {
    if (n > 0) {
      console.log(isPrime(n));
    } else {
      console.log("Number should be positive and more then 0");
    }
  }
}

// n = 12
function isPrime(n) {
  if (n <= 1) return false;
  if (n == 2) return true;
  if (n % 2 == 0) return false;
  for (let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
    if (n % i == 0) return false;
  }
  return true;
}
