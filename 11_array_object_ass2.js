class Bank{
    constructor(bank_name, location, account_no, ifsc, interest_rate){
        this.bank_name = bank_name;
        this.location = location;
        this.account_no = account_no;
        this.ifsc = ifsc;
        this.interest_rate = interest_rate;
    }
}
let axis_bank = new Bank("Axis Bank", "Sangli", "60594837726", "UTIB0000134", "10%");
let sbi_bank = new Bank("State Bank", "kolhapur", "83772660594", "SBIN0001888", "8%");
let icici_bank = new Bank("ICICI Bank", "Pune", "60577269483", "ICICI0001459", "9%");
let kotak_bank = new Bank("Kotak Bank", "Kolhapur", "63772605948", "KKBK0000692", "7%");
let hdfc_bank = new Bank("HDFC Bank", "Sangli", "77266059483", "HDFC0000164", "11%");
let punjab_bank = new Bank("Punjab Bank", "Kolhapur", "37726605948", "PUNB0233200", "9%");
console.log(" ");
console.log("=================== Bank Name and Location ===================");
console.log(" ");
const array =[axis_bank,sbi_bank,icici_bank,kotak_bank,hdfc_bank,punjab_bank];
for (const iterator of array) {
    console.log(`  ${iterator.bank_name}  ${iterator.location}`);
}
console.log(" ");
console.log("======== Object which has name Kotak Bank using for of loop =========");
console.log(" ");
for (const iterator of array) {
    if (iterator.bank_name=="Kotak Bank") {
        console.log(iterator);
    }
}
console.log(" ");
console.log("=================== details using for of loop ===================");
console.log(" ");
for (const iterator of array) {
    console.log(`  ${iterator.bank_name}    ${iterator.location}    ${iterator.account_no}    ${iterator.ifsc}    ${iterator.interest_rate}`);
}