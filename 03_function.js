function sachin(money){
    console.log("Please go in market with Rs.: ", money);
    console.log("Buy some vegetables");
    return "vegetables bag"
}
var veg = sachin(500);
console.log(veg);
console.log("==========================");
function functionName(city,street,age,is_married) {
    console.log(city,street,age,is_married);
    return true;
}
functionName("Pune", "Khaugalli", 22, functionName());
function swap_values(arg1,arg2) {
    console.log("------- Before swap --------");
    console.log(arg1, arg2);
    console.log("------- After swap --------");
    var temp = arg1;
    arg1 = arg2;
    arg2 = temp;
    console.log(arg1, arg2);
}
swap_values("Virat", "Anushka");
swap_values("Mango", "Apple");
swap_values(100, 300);
console.log("============= Addition function =================");
function addition(arg1, arg2, arg3) {
    console.log(arg1);    
}
addtion(200, 300, 600);
function test(arg1, arg2) {
    console.log(arg1,arg2);
    return "Sachin";
}
var val = test(23,45,62);
console.log(val);
