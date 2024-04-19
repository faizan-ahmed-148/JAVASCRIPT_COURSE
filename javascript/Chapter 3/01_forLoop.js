// For Loop
/*
for (let i = 0; i < 5; i++){
    console.log(i);
}

// write the Number of first natural number 
sum  = 0;
let n = prompt("Enter the value of n : ")
n = Number.parseInt(n);

for (let i = 0; i<n ; i++) {
    sum += i + 1
    
}
console.log('The value of' + n + 'Natural Number is' + sum );
*/
// for in loop
let obj = {
    faizan: 34,
    harry: 50,
    hashir: 60,
}
for (let a in obj){
    console.log("the marks of " + a + " is " + obj[a]);
}

// for of loop
/*
for (let a of obj){
    console.log("the marks of " + a + " is " + obj[a]);
}
*/