console.log("Que.1________________________________________________");
var wordLengthSquare = function (word) {
    console.log(`  The length of word "${word}" is: ${word.length}`);
    return word.length * word.length;
}
console.log("  The square of length is: ", wordLengthSquare("JavaScript"));
console.log("   ----------------------");
console.log("  The square of length is: ", wordLengthSquare("Google"));
console.log("   ----------------------");
console.log("  The square of length is: ", wordLengthSquare("Developer"));
console.log("   ----------------------");
function string() {
    console.log("Que.2.1________________________________________________");
    var str = "I am Angular Developer";
    console.log(`  Given string: ${str}`);
    var split = str.split("");
    var rev = split.reverse();
    var revjoin = rev.join();
    var trm = revjoin.split(',').join('');
    console.log(`  Reverse string: ${trm}`);
    console.log("Que.2.2________________________________________________");
    console.log(`  Length of string is: ${str.length}`);
    var splt = str.split(" ");
    console.log(`  Total words: ${splt.length}`);
    console.log(`  Length of string divide by totol number of words is: ${str.length/splt.length}`);
    console.log("Que.2.3________________________________________________");
    console.log(`  Length of string multiply by total number of words is: ${str.length*splt.length}`);
}
string();