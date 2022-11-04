// let display()=>{
//     console.log("This is arrow function...");
// }
let display = ()=>{
    console.log("This is arrow function...");
}
let display1 = function(){
    console.log("This is arrow function...");
}
console.log(display);
display();
console.log(display1);
display1();
let show = () =>{
    console.log("Hello");
}
show();
let add = function(n1,n2)
{
    return n1 + n2;
}
console.log(add(10,20));
let sum = (n1, n2)=> n1 + n2;
console.log(sum(10,20));