// Q2. Shop discount (means find payable amount) -> Range questions
//  0         - 5000  =  0%
//  5001      - 7000  =  5%
//  7001      - 9000  =  10%
//  more then - 9000  =  20%

let amount = Number(
  prompt("Enter your shopping amont to get discount price ?")
);

// Brutforce:
// if (isNaN(amount)) {
//   console.log("Invalid Input");
// } else {
//   if (amount > 0 && amount <= 5000) {
//     console.log("Your payable amount is: ", amount);
//   } else if (amount > 5000 && amount <= 7000) {
//     let discount = amount - Math.floor((5 * amount) / 100);
//     console.log("Your payable amount is: ", discount);
//   } else if (amount > 7000 && amount <= 9000) {
//     let discount = amount - Math.floor((10 * amount) / 100);
//     console.log("Your payable amount is: ", discount);
//   } else if (amount > 9000) {
//     let discount = amount - Math.floor((20 * amount) / 100);
//     console.log("Your payable amount is: ", discount);
//   } else {
//     console.log("Wrong Input");
//   }
// }

// Efficent way:
let dis = 0;
if (isNaN(amount)) {
  console.log("Invalid Input");
} else {
  if (amount > 0 && amount <= 5000) {
    dis = 0;
  } else if (amount > 5000 && amount <= 7000) {
    dis = 5;
  } else if (amount > 7000 && amount <= 9000) {
    dis = 10;
  } else if (amount > 9000) {
    dis = 20;
  } else {
    console.log("Wrong Input");
  }
}

console.log(
  "Your payble amount is: ",
  amount - Math.floor((dis * amount) / 100)
);
