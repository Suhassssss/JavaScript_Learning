console.log("Que.1_____Greatest_Number____________________________");

var maxnum = function (arg1, arg2) {
    console.log(`  Numbers: ${arg1}, ${arg2}`);
    var result = arg1 > arg2 ? arg1 : arg2;
    console.log(`  The greatest number is: ${result}`);
}
maxnum(10,-10);
console.log("   ----------------------");
maxnum(800,899);
console.log("   ----------------------");
console.log("Que.2_____Even_Or_Odd________________________________");

var even_odd = function(num) {
    var module = num % 2;
    var result = module==0;
    return result;
}
console.log("  29: ",even_odd(29));
console.log("  44: ",even_odd(44));
console.log("  0: ",even_odd(0));
console.log("  101: ",even_odd(101));

console.log("Que.3_____Even_Or_Odd_Length_________________________");

var even_odd_length =  function(arg) {
    console.log(`  Word: "${arg}"`);
    console.log(`  length: "${arg.length}"`);
    var module = arg.length % 2;
    var result = module==0 ? "EVEN" : "ODD";
    return result;
}
console.log("  Even or Odd: ",even_odd_length("JavaScript"));
console.log("   ----------------------");
console.log("  Even or Odd: ",even_odd_length("developer"));
console.log("   ----------------------");
console.log("  Even or Odd: ",even_odd_length("Google"));