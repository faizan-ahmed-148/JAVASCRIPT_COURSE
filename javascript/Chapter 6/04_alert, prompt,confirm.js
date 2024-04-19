alert("Enter The Value Of a!")
let a = prompt("Enater a Here")
a = Number.parseInt(a)
alert("You Enter a of Type " + typeof a)

let write = confirm("please write it to page!")
if (write){
    document.write(a)
}
else {
    document.write(("Please Allow Me To Write"));
}