let prompt = require("prompt-sync")();
let n = Number(prompt("Enter your number: "));

// Q.4 print this pattern
//      *
//     * *
//    * * *
//   * * * *
//  * * * * *

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i; j++) {
//     process.stdout.write(" ");
//   }

//   for (let k = 1; k <= i; k++) {
//     process.stdout.write("*");
//     if (k < i) {
//       process.stdout.write(" ");
//     }
//   }

//   console.log();
// }

// Q6. Print this hollow pyramid:
//     *
//    * *
//   *   *
//  *     *
// *********

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    process.stdout.write(" ");
  }

  for (let k = 1; k <= 2 * i - 1; k++) {
    if (k === 1 || k === 2 * i - 1 || i === n) {
      process.stdout.write("*");
    } else {
      process.stdout.write(" ");
    }
  }

  process.stdout.write("\n");
}
