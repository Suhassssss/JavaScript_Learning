console.log("Que.1____Male_Marriage_Eligibility______________");
function maleMarriageEligibility(gender, age, boyName) {
    var result = gender == "Male" && age >= 21 
    ? `  Hey ${boyName} you are eligible for Marriage` 
    : `  Hey ${boyName} you are not eligible for Marriage`
    console.log(`  Name: ${boyName}`);
    console.log(`  Gender: ${gender}`);
    console.log(`  Age: ${age}`);
    return result;
}
console.log(maleMarriageEligibility("Male", 25, "Billgates"));
console.log("   ------------------------------");
console.log(maleMarriageEligibility("Male", 17, "Stew Jobs"));
console.log(" ");
console.log("Que.2____Female_Marriage_Eligibility______________");
function femaleMarriageEligibility(gender, age, girlName) {
    if(gender == "Female" && age >= 18){
        var result = `  Hey ${girlName} you are eligible for Marriage`;
    }else{
        var result = `  Hey ${girlName} you are not eligible for Marriage`;
    }
    console.log(`  Name: ${girlName}`);
    console.log(`  Gender: ${gender}`);
    console.log(`  Age: ${age}`);
    return result;
}
console.log(femaleMarriageEligibility("Female", 16, "Jenifer"));
console.log("   ------------------------------");
console.log(femaleMarriageEligibility("Female", 27, "Malinda Gates"));