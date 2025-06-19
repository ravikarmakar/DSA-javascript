let prompt = require("prompt-sync")();
let n = Number(prompt("Enter your number: "));

// Q2. 1       print like that.
//     1 2
//     1 2 3
//     1 2 3 4
//     1 2 3 4 5

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(j + " "); // it will always print string /not number
//   }
//   console.log();
// }

// Q2. A       print like that.
//     A B
//     A B C
//     A B C D
//     A B C D E

// for (let i = 1; i <= n; i++) {
//   let ascii = 65;
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(String.fromCharCode(ascii) + " ");
//     ascii++;
//   }
//   console.log();
// }

// Q.3 print this pattern
// * * * * *
// * * * *
// * * *
// * *
// *

// for (let i = 1; i <= n; i++) {
//   for (let j = n - i + 1; j > 0; j--) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

// for (let i = 1; i <= n; i++) {
//   for (let j = n; j >= i; j--) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

// Q.4 print this pattern
//         *
//       * *
//     * * *
//   * * * *
// * * * * *

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    process.stdout.write("  ");
  }

  for (let j = 1; j <= i; j++) {
    process.stdout.write("* ");
  }
  console.log();
}
