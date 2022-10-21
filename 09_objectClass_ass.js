class Vehicle{
    vehType
    company
    model
    colour
    price
    constructor(vehType,company,model,colour,price){
        this.vehType = vehType;
        this.company = company;
        this.model = model;
        this.colour = colour;
        this.price = price;
    }
}
let veh1 = new Vehicle("Bike","TVS","Sports","Black Red",82000);
let veh2 = new Vehicle("Car","Mahindra","Bolero","White",1200000);
let veh3 = new Vehicle("Bike","Honda","Unicorn","Black",115000);
let veh4 = new Vehicle("Bike","Hero","Splendor","Silver",78000);
let veh5 = new Vehicle("Car","Tata","Nexon","White",1167772);
console.log("==============Vehicle Class Object 1================");
console.log(veh1);
console.log("==============Vehicle Class Object 2================");
console.log(veh2);
console.log("==============Vehicle Class Object 3================");
console.log(veh3);
console.log("==============Vehicle Class Object 4================");
console.log(veh4);
console.log("==============Vehicle Class Object 5================");
console.log(veh5);

class College{
    name
    city
    pinCode
    totalDepartments
    totalStudents
    constructor(name,city,pinCode,totalDepartments,totalStudents){
        this.name = name;
        this.city = city;
        this.pinCode = pinCode;
        this.totalDepartments = totalDepartments;
        this.totalStudents = totalStudents;
    }
}
console.log(" ");
let college1 = new College("Vivekanand College","Kolhapur",416003,20,15000);
let college2 = new College("Rajaram College","Kolhapur",416001,15,10000);
let college3 = new College("RCSM College","Kolhapur",416002,3,2500);
let college4 = new College("Mahavir College","Kolhapur",416003,10,7000);
console.log("==============College Class Object 1================");
console.log(college1);
console.log("==============College Class Object 2================");
console.log(college2);
console.log("==============College Class Object 3================");
console.log(college3);
console.log("==============College Class Object 4================");
console.log(college4);
function traverse_object(object){
    for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            const element = object[key];
            console.log(`${key}: ${element}`);
        }
    }
}
console.log("==============Traverse Objects ================");
traverse_object(college1);
console.log(college1 instanceof College);
console.log("------------------------------------");
traverse_object(college2);
console.log(college2 instanceof College);
console.log("------------------------------------");
traverse_object(college3);
console.log(college3 instanceof College);
console.log("------------------------------------");
traverse_object(college4);
console.log(college4 instanceof College);
