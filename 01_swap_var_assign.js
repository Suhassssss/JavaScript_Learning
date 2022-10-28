var sweety = "Sweety", cutie = "Cutie", temp,
num1 = 100, num2 = 200, num3 = 300;
temp = sweety;
console.log("Strings before swapping...");
console.log(sweety,cutie);
sweety = cutie;
cutie = temp;
console.log("Strings after swapping...");
console.log(sweety,cutie);
console.log(" ");
console.log("Numbers before swapping...");
console.log(num1,num2,num3);
temp = num1;
num1 = num2;
num2 = num3;
num3 = temp;
console.log("Numbers after swapping...");
console.log(num1,num2,num3);