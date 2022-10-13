console.log("Que.1____Even_Or_Odd_________________");
function even_odd(num) {
    var r = num%2;
    if(r == 0){
        var result = `  The number "${num}" is: Even`;
    }else{
        var result = `  The number "${num}" is: Odd`;
    }
    return result;
}
console.log(even_odd(45));
console.log(even_odd(70));
console.log(even_odd(67));
console.log(even_odd(98));
console.log(" ");
console.log("Que.2____Voter_Eligibility_________________");
function voter_eligibility(age) {
    if(age >= 18){
        console.log(`  Age: ${age}`);
        var result = "  You are eligible for vote";
    }else{
        console.log(`  Age: ${age}`);
        var result = "  You are not eligible for vote";
    }
    return result;
}
console.log(voter_eligibility(18));
console.log("   ------------------------------");
console.log(voter_eligibility(20));
console.log("   ------------------------------");
console.log(voter_eligibility(17));
console.log("   ------------------------------");
console.log(voter_eligibility(40));
console.log(" ");
console.log("Que.3____String_Length_________________");
function string_length(str) {
    var str_length = str.length;
    if(str_length > 10){
        console.log(`  String: ${str}`);
        console.log(`  Characters: ${str_length}`);
        var result = `  The string "${str}" contains more than 10 characters`;
    }else{
        console.log(`  String: ${str}`);
        console.log(`  Characters: ${str_length}`);
        var result = `  The string "${str}" contains less than 10 characters`;
    }
    return result;
}
console.log(string_length("JavaScript-ES6"));
console.log("   ------------------------------");
console.log(string_length("Python"));
console.log(" ");
console.log("Que.4____String_startwith_________________");
function str_startwith(str1) {
    if(str1.startsWith("Java")){
        console.log(`  String: ${str1}`);
        var result = `  Yes, the string "${str1}" starts with "Java"`;
    }else{
        console.log(`  String: ${str1}`);
        var result = `  No, the string "${str1}" doesn't starts with "Java"`;
    }
    return result;
}
console.log(str_startwith("JavaScript Language"));
console.log("   ------------------------------");
console.log(str_startwith("Python Language"));