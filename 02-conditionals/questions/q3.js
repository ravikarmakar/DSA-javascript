// Q3.Bijli Bill..

//  Unit*         -   Price*
//  up to 100     -   Rs. 4.2/unit
//  101 to 200    -   Rs. 6/unit
//  201 to 400    -   Rs. 8/unit
//  more then 400 -   Rs. 13/unit

let unit = Number(prompt("Enter your unit to get price: ")); // 700

let amount = 0;

if (isNaN(unit)) {
  console.log("Invalid Input");
} else {
  if (unit > 400) {
    amount = (unit - 400) * 13;
    unit = 400;
  }
  if (unit > 200 && unit <= 400) {
    amount += (unit - 200) * 8;
    unit = 200;
  }
  if (unit > 100 && unit <= 200) {
    amount += (unit - 100) * 6;
    unit = 100;
  }
}

console.log("Your bijli total bill amount: ", (amount += unit * 4.2));
