let show = (n1, test) => {
    console.log("Hi",n1,test);
}
show(10,"test");

const arrayNumbers = [10,20,30,40,20,10];
arrayNumbers.forEach(currentValue => console.log(currentValue));
// const array_numbers = [10,-20,30,-40,20,-10];
// array_numbers.forEach(element => {
//     if(element>0){
//         console.log(element);
//     }
// });
console.log("-------------- Traversing set using forEach() ----------------");
const setOfNumbers = new Set(arrayNumbers);
setOfNumbers.forEach((value) => {
    console.log(value);
});
let map = new Map();
map.set(22, "Sachin");
map.set(11, "Dravid");
map.set(33, "Gaungully");
map.set(77, "Dravid");
map.set(66, "Sachin");
map.forEach((key,value) => {
    console.log(key, value);
});
class Person{
    constructor 
}