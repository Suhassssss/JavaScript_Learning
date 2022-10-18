console.log("Que.1._____________Reverse_String_____________");
function reverseString(arg) {
    console.log(`  String: ${arg}`);
    let index = arg.length-1;
    let reverseStr = "";
    let char;
    while (index>=0) {
        char = arg.charAt(index);
        reverseStr = reverseStr.concat(arg.charAt(index));
        index--;
    }
    console.log(`  Reverse String: ${reverseStr}`);
}
reverseString("Hard work always pays back");
console.log(`----------------------------------------------------------`);
reverseString("Soon I will be Angular IT Champ");