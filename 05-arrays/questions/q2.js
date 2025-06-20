// Q1. Sum of arr.
// let arr = [10, 20, 30, 40, 50];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }

// console.log(arr);
// console.log(sum);

// Q2. Find max number from arr
// let arr = [10, 20, 30, 90, 50, 5, 1];
// let max = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (max < arr[i]) {
//     max = arr[i];
//   }
// }

// console.log(max);
// console.log(Math.max(...arr));

// Q2. Find min number from arr
// let arr = [10, 20, 30, 90, 50, 5, 1];
// let min = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (min > arr[i]) {
//     min = arr[i];
//   }
// }

// console.log(min);
// console.log(Math.min(...arr));

// Q2. Find the 2nd max number from arr
// let arr = [10, 20, 30, 90, 90, 90, 90];

// let max = Math.max(arr[0], arr[1]); // 30
// let max2 = Math.min(arr[0], arr[1]); // 20

// for (let i = 2; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max2 = max;
//     max = arr[i];
//   } else if (arr[i] > max2 && max !== arr[i]) {
//     max2 = arr[i];
//   }
// }

// console.log(max2);

// Q2. Find the 2nd max number from arr
let arr = [10, 20, 100, 100, 100, 40, 30, 90, 90, 90, 90];

let min = Math.min(arr[0]);
let min2 = Math.max(arr[1]);

for (let i = 2; i < arr.length; i++) {
  if (min < arr[i]) {
    min2 = min;
    min = arr[i];
  } else if (min2 < arr[i] && min !== arr[i]) {
    min2 = arr[i];
  }
}

console.log(min2);
