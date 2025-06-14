// Q1.Valid voter
let age = Number(prompt("What is your age ?"));

if (isNaN(age)) {
  console.log("Invalid input");
} else {
  if (age >= 18) {
    console.log("You can vote");
  } else {
    console.log("You can't vote");
  }
}
