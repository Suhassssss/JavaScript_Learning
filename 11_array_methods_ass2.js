const array_numbers = [20,31,40,25,23,11,29,9,60,2,11];
console.log(" ");
console.log(`Given Array: [ ${array_numbers} ]`);
console.log("Q.1 =========== length of array ===========");
let arrayLength = array_numbers.length;
console.log(`   Length of array is: ${arrayLength}`);
console.log(" ");
console.log("Q.2 =========== first and last element of array ===========");
console.log(`   First element: ${array_numbers[0]}`);
console.log(`   Last element: ${array_numbers[arrayLength-1]}`);
console.log(" ");
console.log("Q.3 =========== 3rd last element of array ===========");
console.log(`   Last element: ${array_numbers[arrayLength-3]}`);
console.log(" ");
console.log("Q.4 =========== even numbers ===========");
const evenNumbers = [];
for (let index = 0; index < arrayLength; index++) {
    const element = array_numbers[index];
    if(element%2 == 0){
        evenNumbers.push(element);
    } 
}
console.log(`   Even Numbers: ${evenNumbers}`);
console.log(" ");
console.log("Q.5 =========== odd numbers ===========");
const oddNumbers = [];
for (let index = 0; index < arrayLength; index++) {
    const element = array_numbers[index];
    if(element%2 == 1){
        oddNumbers.push(element);
    } 
}
console.log(`   Odd Numbers: ${oddNumbers}`);
console.log(" ");
console.log("Q.6 =========== even positioned elements ===========");
const evenPosElmnts = [];
for (let index = 0; index < arrayLength; index++) {
    const element = array_numbers[index];
    if(index%2 == 0){
        evenPosElmnts.push(element);
    } 
}
console.log(`   Even positioned elements: ${evenPosElmnts}`);
console.log(" ");
console.log("Q.7 =========== odd positioned elements ===========");
const oddPosElmnts = [];
for (let index = 0; index < arrayLength; index++) {
    const element = array_numbers[index];
    if(index%2 == 1){
        oddPosElmnts.push(element);
    } 
}
console.log(`   Odd positioned elements: ${oddPosElmnts}`);
console.log(" ");
console.log("Q.8 =========== sum of all elements ===========");
let sumOfElmnts = 0;
for (let index = 0; index < arrayLength; index++) {
    sumOfElmnts = sumOfElmnts + array_numbers[index];
}
console.log(`   Sum of all elements: ${sumOfElmnts}`);
console.log(" ");
console.log("Q.9 =========== numbers which multiple of 5 ===========");
const multFive = [];
for (let index = 0; index < array_numbers.length; index++) {
    const element = array_numbers[index];
    if(element%5 == 0){
        multFive.push(element);
    }  
}
console.log(`   Multiple 5 numbers: ${multFive}`);
console.log(" ");
console.log("Q.10 =========== is number 115 available ===========");
console.log("  ",array_numbers.includes(115));
console.log("Q.11 =========== is number 23 available ===========");
console.log("  ",array_numbers.includes(23));