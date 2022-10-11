console.log("Que.1_________________________________________");
var square = function(arg1){
    console.log(" Square of ",arg1," = ", arg1*arg1);
}
square(5);
square(6);
square(25);
square(100);
console.log("Que.2_________________________________________");
console.log(" Type of function is: ",typeof square);
console.log("Que.3_________________________________________");
var areaOfTriangle = function(arg1, arg2){
    var aot = (1/2) * arg1 * arg2;
    console.log(" Area of triangle: 1/2 * ",arg1," * ",arg2," = ",aot);
}
areaOfTriangle(45,34);
console.log("Que.4_________________________________________");
var areaOfRectangle = function(arg1, arg2){
    var aor = arg1 * arg2;
    console.log(" Area of rectangle: ",arg1," * ",arg2," = ",aor);
}
areaOfRectangle(499,917);
console.log("Que.5_________________________________________");
var swap_values = function(arg1, arg2){
    var temp;
    console.log(" Values_before_swapping");
    console.log("",arg1, arg2);
    temp = arg1;
    arg1 = arg2;
    arg2 = temp;
    console.log(" Values_after_swapping");
    console.log("",arg1, arg2);
}
swap_values("Virat", "Anushka");
console.log("  ------------------------------------");
swap_values(1000, 2000);
console.log("Que.6_________________________________________");
var stringOperation = function(arg1){
    console.log(" Given string is: ",arg1);
    console.log(" Total characters in given string is: ",arg1.length);
    console.log(" An index of character 'S' is: ",arg1.indexOf('S'));
    console.log(" An index of  string 'lang' is: ",arg1.indexOf('lang'));
    console.log(" Last character of string is: ",arg1.charAt(arg1.length-1));
    console.log(" 3rd Last character of string is: ",arg1.charAt(arg1.length-3));
}
stringOperation("JavaScript the most popular language");