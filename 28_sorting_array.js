const arrayOfNumber = [22, 360, 50, 100, 77, 455];

const arrayOfNames = ["Anil", "Shantanu", "Nutan", "Suyog", "DD","Pradnya"];
arrayOfNames.sort();
console.log(arrayOfNames);
arrayOfNumber.sort((first,second) => {
    return (first>second ? 1: -1)
});
console.log(arrayOfNumber);