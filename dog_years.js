// declaring constant variable and assigned it a value
const myAge = 49;
// declaring mutable variable and assigned it a value
let earlyYears = 2;
//reassigning mutable variable using operators
earlyYears *= 10.5;
// declared mutable variable and assigned modified variable
let laterYears = myAge - 2;
// modified mutable variable using operators
laterYears *= 4;
// declared mutable variable using previously declared variables with operators
let myAgeInDogYears = earlyYears + laterYears;

console.log(myAge);
console.log(earlyYears);
console.log(laterYears);
console.log(myAgeInDogYears);

const myName = "Mutsumi";

console.log(myName);
console.log(myName.toLowerCase());
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
