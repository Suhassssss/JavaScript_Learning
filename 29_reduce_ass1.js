'use strict'
console.log("");
console.log("------------------------- Suhas Lawate ----------------------------");
console.log("");
console.log("------------------ 5-Nov-2022 Assignment No.7 ---------------------");
const array_numbers = [20,11,40,25,37,49,9,90,60,2,19];
console.log("");
console.log("------------------ Q.1 Sum of all elements --------------------");
let sum = array_numbers.reduce((runningTotal,element) => {
    return runningTotal + element;
},0);
console.log("  Sum: ",sum);
console.log(" ");
console.log("------------------ Q.2 Sum of all even elements ---------------------");
let even = array_numbers.filter((element) => {
    return element %2 == 0;
});
let sumEven = even.reduce((runningTotal,element) => {
    return runningTotal + element;
},0);
console.log("  Sum of Even elements: ",sumEven);
