// Q1.Check if an array is a palindrome
// Example: [1, 2, 3, 2, 1] => true
//          [1, 2, 3, 4, 5] => false

// let arr = [1, 2, 3, 3, 1];

// let i = 0,
//   j = arr.length - 1;

// while (i !== j) {
//   if (arr[i] === arr[j]) {
//     console.log("This is palindrome array");
//   } else {
//     console.log("This is not palindrome array");
//   }
//   i++;
//   j--;
// }

// Q2. Move all 0s to the end (without using extra space)
// let arr = [0, 1, 0, 3, 12];

// let i = 0,
//   j = 0;

// while (i < arr.length) {
//   if (arr[i] === 0) {
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//     j++;
//   }
//   i++;
// }

// console.log(arr);

// Q3. Segregate Even and Odd numbers
let arr = [12, 17, 70, 15, 22, 65, 21, 90];
// let i = 0,
//   j = 0;
// while (i < arr.length) {
//   if (arr[i] % 2 === 0) {
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//     j++;
//   }
//   i++;
// }
// console.log(arr);
