for (let test = 1; test <= 10; test++) {
    //console.log(test);
}
for (let index = 0; index <= 10; index+=2) {
    //console.log(index); 
}
for(let test = 50; test >=40; test--){
    //console.log(test);
}


for(let num = 1; num <= 30; num+=2){
    //console.log(num);
}
for (let index = 1; index < 30; index++) {
    if (index%2==0) {
        //console.log(index);
    }
}
var countEven = 0;
for (let index = 0; index < 1000; index++) {
    if(index%2==0){
        console.log(index);
        countEven+=1;
    }
}
console.log(`Count is: ${countEven}`);
//WAP to find first 43 even numbers
var countEven = 0; // 2
for (let index = 0; index < 1000; index++) { // 1  2
    if(index%2==0){
        console.log(index); // 0  2 
        countEven = countEven +1;
        if (countEven==43) {
            break;
        }
    }
    
}
console.log("===================================");
for (let index = 0; index < 10; index++) {
    if(index==5){
        break;
    }
    console.log(index); 
}

for (let index = 0; index < 10; index++) {
    if(index==2){
        continue;
    }
    console.log(index); 
}
