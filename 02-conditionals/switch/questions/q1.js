// switch (undefined) {
//   case console.log(1):
//   case console.log(2):
// } // output: 1

const foo = 0;

switch (foo) {
  case -1:
    console.log("negative 1");
    break;
  case 0:
    console.log(0);
  case 1:
    console.log(1);
    break;
  case 2:
    console.log(2);
    break;
  default:
    console.log("default");
}
