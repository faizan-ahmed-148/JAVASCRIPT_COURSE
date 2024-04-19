const Average = ()=>{
    console.log("Average of a and b is ", onePlusAverage(a, b));
    
}


function onePlusAverage(a, b) {
    console.log("done");
    return (a+b)/2
}

let a = 14
let b = 13
let c = 13
Average();
console.log("Average of a and b is ", onePlusAverage(a, b));
console.log("Average of a and b is ", onePlusAverage(b, c));
console.log("Average of a and b is ", onePlusAverage(a, c));
