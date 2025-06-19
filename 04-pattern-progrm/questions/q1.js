let prompt = require("prompt-sync")();
let n = Number(prompt("Enter your number: "));

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write("* ");
  }
  console.log();
}

// Note: 1.outer loop control row.
//       2.Inner loop control columes
