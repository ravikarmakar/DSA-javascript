// let val = "mango";

// switch (val) {
//   case "mango":
//     console.log("this is mango baby");
//     break;

//   case "apple":
//     console.log("this is apple baby");
//     break;

//   case "bulidng":
//     console.log("this is bulidng baby");
//     break;

//   default:
//     console.log("this is default fruits");
// }

// let a = 6;

// switch (a) {
//   case 1:
//   case 2:
//   case 3:
//     console.log("Monday");
//     break;

//   case 4:
//   case 5:
//   case 6:
//     console.log("Wednesday");
//     break;

//   default:
//     console.log("Sunday");
// }

// switch (true) {
//   case 19 > 10:
//     console.log("hello");
//     break; // output: hello

//   case 19 < 10:
//     console.log("hi");
//     break;

//   case 10 < 12: // this is also a true condition but not execute
//     console.log("who");
//     break;

//   default:
//     console.log("default");
// }

// let y = 0.2 + 0.3;
// let x = 0.1 + 0.2; // value is 0.300000004
let x = +(0.1 + 0.2).toFixed(1);

switch (x) {
  case 0.3:
    console.log("Ravi");
    break;

  case 0.5:
    console.log("Sourav");
    break;

  default:
    console.log("default aya ji");
}
