// Q1. reverse the array.
// let arr = [10, 20, 30, 40, 50];

// Method: with extra space
// let revs = new Array(arr.length);
// let j = 0;
// for (let i = arr.length - 1; i >= 0; i--) {
//   revs[j] = arr[i];
//   j++;
// }

// console.log(revs);

// Method: with no space
// let j = arr.length - 1; // end index
// for (let i = 0; i < Math.floor(arr.length / 2); i++) {
//   [arr[i], arr[j]] = [arr[j], arr[i]];
//   j--;
// }

// console.log(arr);

// let i = 0,
//   j = arr.length - 1;

// while (i !== j) {
//   [arr[i], arr[j]] = [arr[j], arr[i]];
//   i++;
//   j--;
// }

// console.log(arr);

// Q2.
let arr = [1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0];

// let j = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 0) {
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//     j++;
//   }
// }

let i = 0,
  j = 0;

while (i < arr.length) {
  if (arr[i] === 0) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    j++;
  }

  i++;
}

console.log(arr);
