var arrayOfNumbers = [1, 3, 7, 8, 9, 3, 7];
console.log("=========== Resize Array ===========");
console.log(arrayOfNumbers);
console.log(arrayOfNumbers.length);
arrayOfNumbers.length = 10;
console.log(arrayOfNumbers);
console.log(arrayOfNumbers.length);
console.log("=======================");
arrayOfNumbers = [1, 3, 7, 8, 9, 3, 7];
console.log(arrayOfNumbers);
arrayOfNumbers.push(99);
arrayOfNumbers.push(88);
arrayOfNumbers.pop();
 var arrayLength = arrayOfNumbers.length;

console.log(`Total number elements available in array: ${arrayLength}`);

console.log(`Element at 4th Index is: ${arrayOfNumbers[4]}`);

arrayOfNumbers[2] = 77;
console.log(arrayOfNumbers);
console.log(typeof(arrayOfNumbers));

let otherArray = [...arrayOfNumbers];
otherArray[2] = 7;
console.log(otherArray);
console.log(arrayOfNumbers);

const array1 = [1,3,4];
const array2 = [5,6,7];
// const array3 = array1.concat(array2);
const array3 = [...array1, ...array2];
console.log(array1);
console.log(array2);
console.log(array3);