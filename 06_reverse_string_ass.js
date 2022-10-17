console.log("Que.1____Reverse_string_using_charAt()____");
function reverseString(arg) {
    console.log(`  Given String: ${arg}`);
    var reverseStr = "";
    for (let index = arg.length-1; index >= 0; index--) {
        reverseStr = reverseStr.concat(arg.charAt(index));
    }
    console.log(`  Reverse String: ${reverseStr}`);
}
reverseString("Hard work always pays back");
console.log("----------------------------------------------");
reverseString("Soon I will be Angular IT Champ");