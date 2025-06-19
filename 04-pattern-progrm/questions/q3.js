let prompt = require("prompt-sync")();
let n = Number(prompt("Enter your number: "));

// Q.4 print this pattern
//  *       *
//    *   *
//      *
//    *   *
//  *       *

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//     if (i == j || i + j === 6) {
//       process.stdout.write("* ");
//     } else {
//       process.stdout.write("  ");
//     }
//   }

//   console.log();
// }

// Q.4 print this pattern
//  *               *
//    *           *
//      *       *
//        *   *
//          *

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= 2 * n - 1; j++) {
    if (i == j || i + j === 2 * n) {
      process.stdout.write("* ");
    } else {
      process.stdout.write("  ");
    }
  }

  console.log();
}
