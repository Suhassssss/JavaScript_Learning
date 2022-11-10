'use strict'
class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");
const array_employees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];
console.log(" ");
console.log("----------------------- Suhas Lawate ------------------------");
console.log(" ");
console.log("-------------------- 5-Nov-2022 Assignment No.2 --------------------");
console.log(" ");
console.log("----------------- Q.1 Employees working in TCS ----------------");
array_employees.forEach((element) => {
    if(element.emp_company==="TCS"){
        console.log(`  Name: ${element.emp_name}  Company: ${element.emp_company}`);
    }
});
console.log(" ");
console.log("----------------- Q.2 Employees whose salary is 50000 or more ----------------");
array_employees.forEach((element) => {
    if(element.emp_salary>=50000){
        console.log(`  ${element.emp_id}  ${element.emp_name}  ${element.emp_dept}  ${element.emp_salary}  ${element.emp_company}`);
    }
});
console.log(" ");
console.log("----------------- Q.3 Sum of all employees salary ----------------");
let sumSalary = 0;
array_employees.forEach(element => {
    sumSalary+=element.emp_salary;  
});
console.log("  Sum of all Employees salary: ", sumSalary);
console.log(" ");
console.log("----------------- Q.4 Average salary ----------------");
let arrayLength = array_employees.length;
let avgSalary = sumSalary/arrayLength;
console.log("  Average salary: ", avgSalary);
console.log(" ");
console.log("----------------- Q.5 IT & HR dept employees whose salary 75000 or more ----------------");
array_employees.forEach(element => {
    if (element.emp_salary >= 75000 && (element.emp_dept === "IT" || element.emp_dept === "HR")) {
        console.log(`  ${element.emp_id}  ${element.emp_name}  ${element.emp_dept}  ${element.emp_salary}  ${element.emp_company}`);
    }
});