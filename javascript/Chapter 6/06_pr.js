// Problem 1 


// let age = prompt("Enter Your Age : ");
// age = Number.parseInt(age)
// const Candrive = (age)=>{
//     return age>=18?true:false
// }
// if (Candrive(age)){
//     alert("Yes You can Drive");

// }
// else {
//     alert("You Cannot Drive");
// }

// Problem 2

// let runAgain = true;
// const Candrive = (age) => {
//     return age >= 18 ? true : false
// }
// while (runAgain) {
//     let age = prompt("Enter Your Age : ");
//     age = Number.parseInt(age)
    
    
//     if (Candrive(age)) {
//         alert("Yes You can Drive");

//     }
//     else {
//         alert("You Cannot Drive");
//     }
//     runAgian = confirm("Do YOu Want to Play Again?")
// }



// problem 3 
let runAgain = true;
const Candrive = (age) => {
    return age >= 18 ? true : false
}
while (runAgain) {
    let age = prompt("Enter Your Age : ");
    age = Number.parseInt(age)
    if (age<0){
        console.error("Enter A Valid Age");
        break;}
    
    if (Candrive(age)) {
        alert("Yes You can Drive");

    }
    else {
        alert("You Cannot Drive");
    }
    runAgian = confirm("Do YOu Want to Play Again?")
}

// PRoblem 4 

let num = prompt("Enter Your Number : ")
num = Number.parseInt(num)


if (num>4) {
    location.href ="https://google.com"
}
//  problem 5
let color = prompt("Enter The Background")
document.body.style.background = color;