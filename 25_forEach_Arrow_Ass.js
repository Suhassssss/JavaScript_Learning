'use strict'
console.log(" ");
console.log("----------------------- Suhas Lawate ------------------------");
console.log(" ");
console.log("-------------------- 5-Nov-2022 Assignment No.1 --------------------");
console.log(" ");
console.log("----------------- Q.1 Array element with it's index using forEach() ----------------");
const array_numbers = [1,-7,40,502,-77,91,0,108,89,-601];
array_numbers.forEach((element,index) => {
    console.log(`  Index: ${index}  Element: ${element}`);
});
console.log(" ");
console.log("----------------- Q.2 positive numbers from array ----------------");
const array_Pos_numbers = [];
array_numbers.forEach((element) => {
    if (element>0) {
        array_Pos_numbers.push(element);
    }
});
console.log(`  Positive Numbers: ${array_Pos_numbers}`);    
console.log(" ");
console.log("----------------- Q.3 negative numbers from array ----------------");
const array_Neg_numbers = [];
array_numbers.forEach((element) => {
    if (element<0) {
        array_Neg_numbers.push(element);
    }
});
console.log(`  Negetive Numbers: ${array_Neg_numbers}`);    
console.log(" ");
console.log("--------------- Q.4 Even Numbers from array --------------");
const array_Evn_numbers = [];
array_numbers.forEach((element) => {
    if (element%2==0) {
        array_Evn_numbers.push(element);
    }
});
console.log(`  Even Numbers: ${array_Evn_numbers}`);
console.log(" ");
console.log("----------------- Q.5 Sum of all elements ----------------");
let sum = 0;
array_numbers.forEach((value) => {
    sum = value + sum;
});
console.log(" ",sum);
console.log(" ");
console.log("----------- Q.6 even positioned array values -------------");
const evnPosArray = [];
array_numbers.forEach((element,index) => {
    if (index%2==0) {
        evnPosArray.push(element);
    }
});
console.log(`  Even Positioned values: ${evnPosArray}`);
console.log(" ");
console.log("----------- Q.7 Odd positioned negetive values -------------");
const oddPosNegArray = [];
array_numbers.forEach((element,index) => {
    if (index%2==1 && element<0) {
        oddPosNegArray.push(element);
    }
});
console.log(`  Odd Positioned negetive values: ${oddPosNegArray}`);