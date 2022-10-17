var myName = "Mohit";
var strlength = myName.length;
var charAt = strlength - 1;
for (let index = 0; index < strlength; index++) {
    console.log(myName.charAt(charAt));
    charAt--;  
}
console.log("========================");
var lenthStr = myName.length - 1; // 
var reverseStr = "";
for (let index = lenthStr; index >= 0; index--) {
    console.log(myName.charAt(index));
    reverseStr = reverseStr + myName.charAt(index)
}
console.log(reverseStr);
var add = 0;
for (let index = 0; index <=5; index++) {
    add = add + index;
}
console.log(`Addition is: ${add}`);