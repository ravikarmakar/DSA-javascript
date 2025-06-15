/**
 * Executes the block of code at least once, and then repeatedly executes the block
 * as long as the specified condition evaluates to true.
 * In this example, the message "hey" is logged once because the condition (12 > 17) is false,
 * but the do-while loop guarantees the code inside the block runs at least one time.
 */

// do {
//   console.log("hey"); // atleast once runs
// } while (12 > 17);

let i = 1;
do {
  console.log("Ravi " + i);
  i++;
} while (i <= 10);
