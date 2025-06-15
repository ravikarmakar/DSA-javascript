// Loop:-

// -> for

// Q1.log 1 to 22 using for/while/do-while loop..
// for (let i = 1; i < 23; i++) {
// console.log(i);
// }

// Q2. log 200 to 100 using loop
// for (i = 200; i > 99; i--) {
//  console.log(i);
// }

//---------break & continue-----------

// Q3. print 1 to 22..

for (let i = 1; i <= 22; i++) {
  // if (i === 11) break; // after 11 loop stoped -> 1 to 10
  if (i === 11) continue; // skip the current itration
  console.log(i);
}
