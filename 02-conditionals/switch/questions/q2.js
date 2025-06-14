// const action = "say_hello";
// switch (action) {
//   case "say_hello":
//     const message = "hello";               // can't write like that,
//     console.log(message);
//     break;
//   case "say_hi":
//     const message = "hi";
//     console.log(message);
//     break;
//   default:
//     console.log("Empty action received.");
// }

const action = "say_hello";

switch (action) {
  case "say_hello":
    {
      const message = "hello";
      console.log(message);
    }
    break;
  case "say_hi":
    {
      const message = "hi";
      console.log(message);
    }
    break;
  default:
    console.log("Empty action received.");
}
