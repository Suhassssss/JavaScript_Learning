const bank_sbi = {
    bankName: "State Bank of India",
    ifscCode: "SBIN0000471",
    micrCode: "416002912",
    brachCode: "000471"
}
const bank_location = {
    street: "GANPATI PETH",
    city: "SANGLI",
    pin_code: "416416"
}
// console.log("========== bank_sbi ==========");
// console.log(bank_sbi);
// console.log("========== bank_location ==========");
// console.log(bank_location);
const clonedObject1 = Object.assign({}, bank_sbi, bank_location);
console.log(" ");
console.log("========== cloned object using Object.assign() ==========");
// console.log(clonedObject1);
for (const key in clonedObject1) {
    if (Object.hasOwnProperty.call(clonedObject1, key)) {
        const element = clonedObject1[key];
        console.log(`  ${key}: ${element}`);
    }
}
const clonedObject2 = {...bank_sbi, ...bank_location};
console.log(" ");
console.log("========== cloned object using spread operator ==========");
// console.log(clonedObject2);
for (const key in clonedObject2) {
    if (Object.hasOwnProperty.call(clonedObject2, key)) {
        const element = clonedObject2[key];
        console.log(`  ${key}: ${element}`);
    }
}
const rate_of_interest = {
    home_loan_interest: "6.70%",
    personal_loan_interest: "10.30%",
    due_interest: "5.5%",
}
const sbi_details = Object.assign({}, bank_sbi, bank_location, rate_of_interest);
console.log(" ");
console.log("============ sbi_details ===========");
console.log(sbi_details);
console.log(" ");
console.log("============ travese sbi_details ===========");
for (const key in sbi_details) {
    if (Object.hasOwnProperty.call(sbi_details, key)) {
        const element = sbi_details[key];
        console.log(`  ${key}: ${element}`);
    }
}
