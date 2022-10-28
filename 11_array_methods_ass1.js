const fruits_seasonal = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(" ");
console.log("Given array: ", fruits_seasonal);
console.log(" ");
console.log("Q.1 =========== first and last element ===========");
console.log(`   First element: ${fruits_seasonal[0]}`);
console.log(`   Last element: ${fruits_seasonal[fruits_seasonal.length-1]}`);
console.log(" ");
console.log("Q.2 =========== add element 'Papaya' before 'Banana' ===========");
fruits_seasonal.unshift("Papaya");
console.log("  ", fruits_seasonal);
console.log(" ");
console.log("Q.3 =========== remove 'Mango' from array ===========");
fruits_seasonal.splice(fruits_seasonal.indexOf("Mango"),1);
console.log("  ", fruits_seasonal);
console.log(" ");
console.log("Q.4 =========== insert element 'Pineapple' at last position ===========");
fruits_seasonal.push("Pineapple");
console.log("  ",fruits_seasonal);
console.log(" ");
console.log("Q.5 =========== insert element 'Dragon Fruit' before 'Water Melon' ===========");
fruits_seasonal.splice(fruits_seasonal.indexOf("Water Melon"),0,"Dragon Fruit");
console.log(`   [ '${fruits_seasonal[0]}', '${fruits_seasonal[1]}', '${fruits_seasonal[2]}', '${fruits_seasonal[3]}', '${fruits_seasonal[4]}', '${fruits_seasonal[5]}', '${fruits_seasonal[6]}' ]`);
console.log(" ");
console.log("Q.6 =========== replace 'Orange' with 'Kiwi' ===========");
fruits_seasonal.splice(fruits_seasonal.indexOf("Orange"),1,"Kiwi");
console.log(`   [ '${fruits_seasonal[0]}', '${fruits_seasonal[1]}', '${fruits_seasonal[2]}', '${fruits_seasonal[3]}', '${fruits_seasonal[4]}', '${fruits_seasonal[5]}', '${fruits_seasonal[6]}' ]`);
console.log(" ");
console.log("Q.7 __________ elements from index 1 to 4 __________");
console.log(`   ${fruits_seasonal.slice(1,5)}`);
console.log(" ");
console.log("Q.8 __________ last 3 elements __________");
console.log(`   ${fruits_seasonal.slice(fruits_seasonal.length-3)}`);
