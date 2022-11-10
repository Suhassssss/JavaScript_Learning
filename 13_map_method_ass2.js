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
console.log("------------------------- Suhas Lawate ----------------------------");
console.log(" ");
console.log("------------------ 5-Nov-2022 Assignment No.5 ---------------------");
console.log(" ");
console.log("------------------ Q.1 List of Employee names ---------------------");
const employeeNames = array_employees.map((element) => {
    return element.emp_name;
});
console.log(`  [ ${employeeNames[0]}, ${employeeNames[1]}, ${employeeNames[2]}, ${employeeNames[3]}, ${employeeNames[4]}, ${employeeNames[5]}, ${employeeNames[6]} ]`);
console.log(" ");
console.log("------------------- Q.2 List of Departments -----------------------");
const employeeDept = array_employees.map((element) => {
    return element.emp_dept;
});
console.log(" ",employeeDept);
console.log(" ");
console.log("------------------- Q.3 List of Employee Id's ---------------------");
const employeeId = array_employees.map((element) => {
    return element.emp_id;
});
console.log(`  [ ${employeeId[0]}, ${employeeId[1]}, ${employeeId[2]}, ${employeeId[3]}, ${employeeId[4]}, ${employeeId[5]}, ${employeeId[6]} ]`);