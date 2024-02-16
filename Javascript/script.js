// variables
let name= "Juan"
const bday="Feb"
var isHappy = true;

console.log("Name:",name);
console.log("Birthmonth:",bday);
console.log("Happy:",isHappy);

let x=5;
let y=7;
let sum = x+y;
console.log(sum);

// Data type
let age = 25;
console.log("Type of Age: ",typeof age);
console.log("Type of Name: ",typeof name);
console.log("Type of isHappy: ",typeof isHappy);

// Arithmetic operation
let w = 8;
let z = 5;
let sum2 = w+z;
console.log("This is sum", sum2);
let diff=w-z;
console.log("This is diff", diff);
let mult = w*z;
console.log("This is mult", mult);
let quotient = w/z;
console.log("This is quotient", quotient);
let remainder = w%z;
console.log("This is remainder", remainder);

// Logical Operation
let sunny = true;
let warm = false;

// ANDORNOT
// true && true=true
//false && true=false
// or ||
//false || true = true
//false || false = false
// not

console.log("sunny AND warm", sunny && warm);
console.log("sunny OR warm", sunny || warm);
console.log("NOT sunny", !sunny);


// conditional  statement

let myAge = 17;
if(myAge >= 18){
    console.log("you are eligible to vote");
} else {
    console.log("you are not eligible to vote");
}

let temp=19;
if (temp<0){
    console.log("it's freezing")
}
else if(temp>=0 && temp <20){
    console.log("it's cool outside")
}
else {
    console.log("it's a warm day")
}