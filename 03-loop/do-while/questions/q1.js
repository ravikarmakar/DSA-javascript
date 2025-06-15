// Q1.break loop when use type hello, otherwise give prompt again an again

let input = prompt("Enter hello to exit form loop..?");

do {
  input = prompt("Enter hello to exit form loop..?");
} while (input !== "hello");
