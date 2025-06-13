// Logical Operators:-

//  &&   - Logical AND
//  ||   - Logical OR
//  !    - Logical NOT

console.log(!(10 < 5)); // true
console.log(!(5 === 5)); // false

console.log(10 < 20 && 12 > 7 && 10 >= 10); // true
console.log(10 < 20 && 12 > 7 && 10 !== 10); // false

console.log(10 < 20 || 12 < 7 || 9 > 10); // if any statement is true, it will return "true"
console.log(10 > 20 && 12 < 7 && 10 !== 10); // false , all state should have to false
