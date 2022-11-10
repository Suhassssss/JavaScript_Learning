
'use strict'
console.log(" ");
console.log("------------------------- Suhas Lawate ----------------------------");
console.log(" ");
console.log("------------------ 5-Nov-2022 Assignment No.4 ---------------------");
console.log(" ");
const array_numbers = [20,11,40,25,23,11,9,31,60,2,19];
console.log(`----------- Given array: ${array_numbers} -----------`);
const addTen = array_numbers.map((element,index) => {
    return element + 10;
});
console.log(" ");
console.log("---------- Q.1 Add 10 into each element using map() -------------  ");
// console.log(" ");
console.log(`  Adding 10: ${addTen}`);
console.log(" ");
console.log("---------- Q.2 square the each element using map() -------------  ");
// console.log(" ");
const square = array_numbers.map((element,index) => {
    return element * element;
});
console.log(`  Square: ${square}`);
console.log(" ");
console.log("---------- Q.3 Add index value into each element using map() -------------  ");
// console.log(" ");
const addIndex = array_numbers.map((element,index) => {
    return element + index;
});
console.log(`  Adding index value: ${addIndex}`);