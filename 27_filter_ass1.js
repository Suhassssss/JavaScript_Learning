'use strict'
console.log(" ");
console.log("------------------------- Suhas Lawate ----------------------------");
console.log(" ");
console.log("------------------ 5-Nov-2022 Assignment No.6 ---------------------");
console.log(" ");
console.log("------------------ Q.1 Elements greater than 50 ---------------------");
const array_numbers = [20,11,40,25,37,49,9,90,60,2,19];
let above50 = array_numbers.filter((element) => {
    return element > 50;
});
console.log(above50);
console.log(" ");
console.log("------------------ Q.2 Even number Elements ---------------------");
let even = array_numbers.filter((element) => {
    return element %2 == 0;
});
console.log(even);
console.log(" ");
console.log("------------------ Q.3 Odd number Elements ---------------------");
let odd = array_numbers.filter((element) => {
    return element %2 == 1;
});
console.log(odd);
console.log(" ");
console.log("------------------ Q.4 Multiple of 5 Elements ---------------------");
let multFive = array_numbers.filter((element) => {
    return element %5 == 0;
});
console.log(multFive);
console.log(" ");
console.log("------------------ Q.5 Elements between 20 & 50 ---------------------");
let num20To50 = array_numbers.filter((element) => {
    return (element>20 && element<50);
});
console.log(num20To50);