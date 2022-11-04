'use strict'
console.log(" ");
console.log("=========================== Suhas Lawate =============================");
console.log(" ");
console.log("==================== 4th-Nov-2022 Assignment 2 =======================");
console.log(" ");
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
const emp_radha = new Employee(22, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(22, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(22, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(22, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(22, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(22, "Mahesh", "HR", 85000, "Infy");
const array_employees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];
console.log("=================== Q.1 Employees working in TCS =====================");
for (const iterator of array_employees) {
    if (iterator.emp_company === "TCS") {
        console.log(`  Name: ${iterator.emp_name}.   Company: ${iterator.emp_company}`);    
    }
}
console.log(" ");
console.log("================= Q.2 Finance department employees ===================");
for (const iterator of array_employees) {
    if (iterator.emp_dept === "Finance") {
        console.log(`  Department: ${iterator.emp_dept}.  Name: ${iterator.emp_name}`);    
    }
}
console.log(" ");
console.log("========== Q.3 Employees Details whose name start with 'R' ===========");
for (const iterator of array_employees) {
    if (iterator.emp_name.startsWith("R")) {
        console.log(`  ${iterator.emp_id}  ${iterator.emp_name}  ${iterator.emp_dept}  ${iterator.emp_salary}  ${iterator.emp_company}`);    
    }
}
console.log(" ");
console.log("========== Q.4 Employees whose salary is more than 70,000  ===========");
for (const iterator of array_employees) {
    if (iterator.emp_salary > 70000) {
        console.log(`   ${iterator.emp_name}   ${iterator.emp_company}   ${iterator.emp_salary}`);    
    }
}
console.log(" ");
console.log("====== Q.5 IT dept employees whose salary is 50,000 or more ==========");
for (const iterator of array_employees) {
    if (iterator.emp_salary >= 50000 && iterator.emp_dept === "IT") {
        console.log(`  ${iterator.emp_id}  ${iterator.emp_name}  ${iterator.emp_dept}  ${iterator.emp_salary}  ${iterator.emp_company}`);    
    }
}
console.log(" ");
console.log("================== Q.6 Employees working in 'Infy' ===================");
for (const iterator of array_employees) {
    if (iterator.emp_company === "Infy") {
        console.log(`  ${iterator.emp_id}  ${iterator.emp_name}  ${iterator.emp_dept}  ${iterator.emp_salary}  ${iterator.emp_company}`);    
    }
}