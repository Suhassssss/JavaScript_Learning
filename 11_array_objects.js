class Person{
    constructor(fullName, city, age, gender){
        this.fullName = fullName;
        this.city = city;
        this.age = age;
        this.gender = gender;
    }
    details(){
        console.log(`Person Details: ${this.fullName} ${this.city} ${this.age} ${this.gender}`);
    }
}
let personAnil = new Person("Anil Mohite", "Pune", 31, "Male");
let personAnita = new Person("Anita Golate", "Mumbai", 22, "Female");
let personBill = new Person("Billgates", "USA", 67, "Male");
const array = [ personAnil, personAnita, personBill];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if(element.age >= 50){
        console.log(` ${element.fullName} ${element.city} ${element.age} ${element.gender}`);    
    }
}
// let bank_sbi = {
//     bank_name:"State Bank Of India",
//     Manager_name:"S.S.Patil",
//     contact_no:+919096949202,
//     bank_time : "10:00am To 05:00pm"
// }

// let bank_location = {
//     street:"Pune Road",
//     city:"Solapur",
//     pinCode:"413305",
//     state:"Maharashtra"
// }

// let bank_sbi_details = Object.assign({},bank_sbi,bank_location)

// console.warn("==========================");
// console.log(`  ${bank_sbi_details.bank_name}`);

// let bank_detail={...bank_sbi,...bank_location}
// console.warn("==========================");
// console.table(bank_detail);