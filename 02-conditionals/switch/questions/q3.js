// ✅ Interview Room Version:
// Question:-

// You are required to implement an electricity billing system based on unit consumption.
// The billing is based on the following slab rates:
// For the first 100 units: ₹4.2 per unit
// For the next 100 units (101–200): ₹6 per unit
// For the next 200 units (201–400): ₹8 per unit
// For any units above 400: ₹13 per unit

// Your task is to:
// Take the total unit consumption as user input.
// Validate if the input is a number.
// Calculate the bill amount based on the slab rates.
// Print the final bill amount.

// Bonus: If the total bill exceeds ₹5000, apply a 5% discount.

// ✨ Follow-up (to make it harder):
// --Can you implement the same logic using switch(true) instead of if statements?
// --Can you refactor the logic using an array of slab objects for dynamic calculation?
// --Can you print the detailed bill breakdown for each slab?

const slabs = [
  { from: 0, to: 100, rate: 4.2 },
  { from: 101, to: 200, rate: 6 },
  { from: 201, to: 400, rate: 8 },
  { from: 401, to: Infinity, rate: 13 },
];

const inputs = [120, 350, 700, 80]; // multiple customers

function calculateBill(units) {
  let amount = 0;
  let originalUnits = units;
  let breakdown = [];

  for (let i = slabs.length - 1; i >= 0; i--) {
    let { from, to, rate } = slabs[i];

    if (units > from) {
      let usedUnits = Math.min(units, to) - from;
      let cost = usedUnits * rate;
      amount += cost;
      breakdown.push(`${usedUnits} units @ ₹${rate} = ₹${cost.toFixed(0)}`);
      units = from;
    }
  }

  // Add surcharge
  let surcharge = 0;
  switch (true) {
    case amount > 10000:
      surcharge = 200;
      break;
    case amount > 6000:
      surcharge = 100;
      break;
    case amount > 3000:
      surcharge = 50;
      break;
  }
  amount += surcharge;

  // Apply 5% discount if bill > 5000
  let discount = 0;
  if (amount > 5000) {
    discount = amount * 0.05;
    amount -= discount;
  }

  return {
    originalUnits,
    breakdown: breakdown.reverse(), // reverse to print lowest slab first
    total: Math.round(amount),
    surcharge,
    discount: Math.round(discount),
  };
}

// Process all customers
inputs.forEach((units, index) => {
  const bill = calculateBill(units);
  console.log(`\nCustomer ${index + 1} (${bill.originalUnits} units):`);
  bill.breakdown.forEach((line) => console.log(line));
  console.log(`Surcharge: ₹${bill.surcharge}`);
  console.log(`Discount: ₹${bill.discount}`);
  console.log(`Total: ₹${bill.total}`);
});
