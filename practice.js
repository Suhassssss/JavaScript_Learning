const array = "Suhas Raosaheb Lawate...";
console.log("========== Original String ==========");
console.log(array);
const arrayLength = array.length;
console.log(" ");
console.log("========== Original String Length ==========");
console.log("Length: ", arrayLength);
// Encryption
let evenEncrypt = "";
let oddEncrypt = "";
for (let index = 0; index < array.length; index++) {
    const element = array.charAt(index);
    if (index%2 == 0) {
        evenEncrypt = evenEncrypt.concat(element);
    }
    else{
        oddEncrypt = oddEncrypt.concat(element);
    }
}
let encryptArray = evenEncrypt.concat(oddEncrypt);
console.log(" ");
console.log("========== Encrypted String ==========");
console.log(encryptArray);
// Decryption
let evenDecrypt = "";
let oddDecrypt = "";
let index2;
if(encryptArray.length%2 == 1){
    index2 = (encryptArray.length+1)/2;
}else{
    index2 = encryptArray.length/2;
}
for (let index = 0; index < index2; index++) {
    const element = array.charAt(index);
    evenDecrypt = evenDecrypt.concat(element);
}
for (index2; index2 < encryptArray.length; index2++) {
    const element = array.charAt(index2);
    oddDecrypt = oddDecrypt.concat(element);
}
let decryptArray = evenDecrypt.concat(oddDecrypt);
console.log(" ");
console.log("========== Decrypted String ==========");
console.log(decryptArray);
console.log(" ");
console.log("========== Decrypted String Length ==========");
console.log("Lenght: ",decryptArray.length);