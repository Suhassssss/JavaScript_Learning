console.log("Que.1.________Total_number_vowels_using_includes()________");
let str = "I am very good IT Developer";
let vowels = "aeiouAEIOU";
let count = 0;
let index = 0;
let char;
while (index<str.length) {
    char = str.charAt(index);
    if (vowels.includes(char)) {
        count++;
    }
    index++;
}
console.log(`  String: ${str}`);
console.log(`  Total number of vowels is: ${count}`);
console.log(`----------------------------------------------------------`);
console.log("Que.2.________Sum_of_Cube_of_numbers_from_1_to_5_______");
function cubeSum(){
    let num = 1;
    let sumOfCube = 0;
    let cube;
    do{
        cube = num * num * num;
        sumOfCube = sumOfCube + cube;
        num++;
    }while(num<=5);
    console.log(`  Sum of cube of numbers from 1 to 5 is: ${sumOfCube}`);
}
cubeSum();
console.log(`----------------------------------------------------------`);
console.log("Que.3.________Odd_positioned_characters________");
function oddPositionedChars(arg) {
    console.log(`  String: ${arg}`);
    let index = 0;
    do {
        if (index%2==1 && arg.charAt(index) != " ") {
            console.log(`  ${arg.charAt(index)}`);
        }
        index++;
    } while (index<arg.length);
}
oddPositionedChars("Hard work always pays back");
oddPositionedChars("Soon I will be Angular IT Champ");