'use srinct'
let person = {
    fullName: "Mohit Aglawe",
    age: 31,
    city: "Pune",
    pin: 431282,
    state:"MH",
    isMarried: true
}

// let fullName = person.fullName;
// let city = person.city;

let {fullName,city="Sangola",pin,state,isMarried} = person;
console.log(fullName, city);

let arrayOfNames = ["Monu","Golu", "Chotu", "Ponu", "Dholu"]
// let element0 = arrayOfNames[0];
// let element1 = arrayOfNames[1];
// let element2 = arrayOfNames[2];
// let element3 = arrayOfNames[3];
// let element4 = arrayOfNames[4];
// let element5 = arrayOfNames[5];
let [element0, element1, element2, element3, element4="Molu", element5="Molu"] = arrayOfNames;
console.log(element0, element1, element2, element3, element4, element5);