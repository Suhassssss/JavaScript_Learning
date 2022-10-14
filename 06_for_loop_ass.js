console.log("Que.1____5_to_15_Numbers_by_incrementing_1____");
for(let num = 5; num<=15; num++){
    console.log("  ",num);
}
console.log("Que.2____50_to_40_Numbers_by_decrementing_1____");
for(let num = 50; num>=40; num--){
    console.log("  ",num);
}
console.log("Que.3_____first_15_Odd_Numbers_________________");
for(let num = 1; num<=30; num+=2){
    console.log("  ",num);
}
console.log("Que.4_____first_10_Even_Numbers_________________");
var count = 0;
for(let num = 0; num<=20; num++){
    if(num%2==0){
       console.log("  ",num);
       count++;
    }
    if(count==10){
        break;
    }
}
console.log("Que.5_____Table_of_5____________________________");
for(let num = 5; num<=50; num+=5){
    console.log("  ",num);
}
console.log("Que.6_____Table_of_10___________________________");
for(let num = 10; num<=100; num+=10){
    console.log("  ",num);
}
console.log("Que.7_____Table_of_10_in_reverse________________");
for(let num = 100; num>=10; num-=10){
    console.log("  ",num);
}