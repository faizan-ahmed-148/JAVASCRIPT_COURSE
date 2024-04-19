// let a = prompt("Hey! whats your age?")
// a = Number.parseInt(a)
// console.log(typeof a);
// if(a<0){
//   alert("you are invalid");

// }
// else if(a<9){
//  alert("you are a kid")
// }
// else if(a>=9 &&a<18){
//   alert("you are a kid you are just thinking about it")

// }
// else {
//   alert("you are valid")
// }
const b = "orange";
switch (b) {
  case "orange":
    console.log("orange are available in 10 rupees");
    break;
  case "banana":
    console.log("banana are available in 15 rupees");
    break;
  case "Apple":
    console.log("orange are available in 13 rupees");
    break;
  default:
    console.log(`sorry we dont have a ${b}.`);
}
