let variable_name = "";
let person = {
    fullName: "Sachin Tendulkar",
    age: 42,
    isMarried: true,
    address: {
        street: "AS CLUB",
        pin_code: 123456,
        city: "PUNE",
        state: "MH"
    },
    eat:function(){
        console.log("I am Vegetarian");
    },
    details: function () {
        let personDetails = `Details are: ${this.fullName}, ${this.age}, ${this.address.city}`;
        return personDetails;
    }
}
console.log("=======Entries========");
console.log(Object.entries(person));
console.log("=======Keys========");
console.log(Object.keys(person));
console.log("=======Values========");
console.log(Object.values(person));
console.log(person.details());
person.pinCode = 413317;

person.profession= "Cricketer";
person.eat();
person.address.landmark = "Near main road";
person.fullName = "Sachin Ramesh Tendulkar";
delete person.age;
console.log(person.address);
console.log(person.address.street);
console.log(person);
let personFullName = person.fullName;
console.log(personFullName);
console.log(person["age"]);
console.log(person.fullName);

let college = {

}
console.log(college);