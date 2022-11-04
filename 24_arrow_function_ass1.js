'use strict'
console.log(" ");
console.log("=========================== Suhas Lawate =============================");
console.log(" ");
console.log("==================== 4th-Nov-2022 Assignment 1 =======================");
console.log(" ");
console.log("================== Q.1 Arrow Function with no args ===================");
console.log(" ");
let day = () => {
    console.log("  Good Evening, Today is Friday");
}
day();
console.log(" ");
console.log("============= Q.2 Three paramenters Perform multiplication ===========");
console.log(" ");
let mult = (n1,n2,n3=1) =>{
    let result = n1 * n2 * n3;
    console.log(`  Multiplication:  ${n1} * ${n2} * ${n3} = ${result}`);
}
mult(5,5,2);
console.log(" ");
console.log("================== Default value to 3rd arg: 1 =======================");
console.log(" ");
mult(10,4);
console.log(" ");
console.log("=========== Q.3 Arrow Function to return Addition of 5 args ==========");
console.log(" ");
let add = (n1,n2,n3,n4,n5 )=>{
    console.log(`  Addition of:  ${n1}, ${n2}, ${n3}, ${n4}, ${n5}`);
    return n1 + n2 + n3 + n4 + n5;
} 
console.log("  Result: ",add(100, 100, 200,  349, 756));
console.log("  --------------------------------------");
console.log("  Result: ",add("I am ","learning ","ES6 ","features ","in depth "));

