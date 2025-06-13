// Relational Operators:-
//  <    - Less than
//  >    - Greater than
//  ==   - Equal to (or loose equality)                       // recommend to not use it
//  ===  - Strict Equal to (or strict equality)
//  !=   - Not Equal to (or loose inequality)                 // recommend to not use it
//  !==  - Strict Not Equal to (or strict inequality)
//  <=   - Less than or Equal to
//  >=   - Greater than or Equal to

//  =    - assignment operator, for value assign to variable
let a = 12; // assignment

console.log(10 < 9); // false
console.log(10 > 9); // true
console.log(10 <= 9); // false
console.log(10 >= 9); // true

console.log(10 !== 11); // true
console.log(10 !== 10); // false

//  Problem with == "Equal to"
console.log(13 == 13); // true
console.log(13 == "13"); // true, but it is not correct
