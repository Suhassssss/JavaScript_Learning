var stringHandsOn = function() {
    var givenString = "      Hey you are doing good, keep it up     ";
    console.log("Que.1____________________________________");
    console.log(`  Given string is: "${givenString}"`);
    console.log("Que.2____________________________________");
    console.log(`  The length of given string is "${givenString.length}"`);
    var trimResult = givenString.trim();
    console.log("Que.3____________________________________");
    console.log(`  After removing extra spaces: "${trimResult}"`);
    console.log(`  String length after trim is: "${trimResult.length}"`);
    console.log("Que.4____________________________________");
    var extrSpaces = (givenString.length - trimResult.length);
    console.log(`  Total number of extra spaces is: "${extrSpaces}"`);
    console.log("Que.5____________________________________");
    console.log(`After trim the fisrt character is: "${trimResult.charAt(0)}" & last character is: "${trimResult.charAt(trimResult.length-1)}"`);
    console.log("Que.6____________________________________");
    var splitResult = trimResult.split(" ");
    console.log(splitResult);
    console.log(`  Total words available in string after trim is: ${splitResult.length}`);
    console.log("Que.7____________________________________");
    console.log(`  Index of word "good" from given string is "${givenString.indexOf("good")}"`);
    console.log("Que.8____________________________________");
    console.log("==============substring()===============");
    console.log(`  String starting from "22" is: ${trimResult.substring(22)}`);
    console.log("==============slice()===============");
    console.log(`String starting from "22" is: ${trimResult.slice(22)}`);
    console.log("Que.9____________________________________");
    console.log(`  is string ends with word "up": ${trimResult.endsWith("up")}`);
    console.log("Que.10____________________________________");
    console.log(`  is string starts with word "Hey": ${trimResult.startsWith("Hey")}`);
}
stringHandsOn();