console.log("Que.1____Total_number_of_vowels_using_includes()____");
var givenString = "Good Morning IT Champ";
console.log(`  Given String: "${givenString}"`);
var strLowerCase = givenString.toLowerCase();
var vowel = "aeiou";
var charAt;
var count = 0;
for (let index = 0; index < givenString.length; index++) {
    char = strLowerCase.charAt(index);
    if (vowel.includes(char)) {
        count++;
    }
}
console.log(`  The total number of vowels is: ${count}`);
console.log("-----------------------------------------------------");
console.log("Que.2____Function_to_count_vowels_____");
function vowels(arg) {
    var str = arg;
    console.log(`  Given String: "${str}"`);
    var strLowerCase = str.toLowerCase();
    var char;
    var count = 0;
    for (let index = 0; index < str.length; index++) {
    char = strLowerCase.charAt(index);
    if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
        count++;
    }
}
    console.log(`  The total number of vowels is: ${count}`);
}
vowels("I love JavaScript");
console.log("-----------------------------------------------------");
console.log("Que.3____Sum_of_number_from_1_to_10_____");
var sumOfNumbers = function() {
    var sum = 0;
    for (let index = 1; index <=10; index++) {
        sum+=index;
    }
    return sum;
}
console.log(`  Sum of all numbers from 1 to 10 is: ${sumOfNumbers()}`);
console.log("-----------------------------------------------------");
console.log("Que.4____Sum_of_square_numbers_from_1_to_5_____");
var sumOfSquares = function() {
    var sumSquare = 0;
    var square;
    var sqr;
    for (let index = 1; index <=5; index++) {
        square=index*index;
        sumSquare+=square;
    }
    return sumSquare;
}
console.log(`  Sum of square number from 1 to 5 is: ${sumOfSquares()}`);
console.log("-----------------------------------------------------");
console.log("Que.5.1____Even_positioned_characters___");
function evenChars(arg) {
    var strLength = arg.length;
    var charAt;
    console.log(arg);
    for (let index = 0; index < arg.length; index++) {
        if(index%2==0)   {
            if (arg.charAt(index)!=" ") {
                console.log(`  ${arg.charAt(index)}`);
            }
        }
    }
}
evenChars("Hard work always pays back");
console.log('---------------------------------------');
evenChars("Soon I will be Angular IT Champ");
console.log("-----------------------------------------------------");
console.log("Que.5.2____Odd_positioned_characters___");
function evenChars(arg) {
    var strLength = arg.length;
    var charAt;
    console.log(arg);
    for (let index = 0; index < arg.length; index++) {
        if(index%2==1)   {
            if (arg.charAt(index)!=" ") {
                console.log(`  ${arg.charAt(index)}`);
            }
        }
    }
}
evenChars("Hard work always pays back");
console.log('---------------------------------------');
evenChars("Soon I will be Angular IT Champ");











console.log("============================");
function evenPositionedChars(myString){
    for (let index = 0; index < myString.length; index++) {
       // console.log(index%2==0);
       var chh = myString.charAt(index);
       if (index%2==0 && chh!=" ") {
          console.log(chh);
       }
       //var chh = myString.charAt(index);
        
    }
}
evenPositionedChars("Hard work always pays back");
