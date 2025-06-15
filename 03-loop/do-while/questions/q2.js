let random = Math.floor(Math.random() * 100) + 1;

let guess = 0;

while (random !== guess) {
  guess = Number(prompt("Guess the number ?"));
  if (isNaN(guess) || guess < 1 || guess > 100) {
    console.log("Try again b/w 1 - 100");
    continue;
  }

  if (guess > random) {
    console.log("Too high, Try again!");
  } else if (guess < random) {
    console.log("Too low, Try again!");
  } else {
    console.log("Hurry! Congrats ", random);
  }
}
