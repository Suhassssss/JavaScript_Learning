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
console.log("-------------------- 5-Nov-2022 Assignment No.10 --------------------");
console.log(" ");
console.log("----------------- Q.1 Ascending order of Emp Id's ----------------");
const sortMethod1 = [...array_employees];
const ascEmps = sortMethod1.sort((first,second) => {
    return (first.emp_id > second.emp_id ? 1: -1);
});
for (const iterator of ascEmps) {
    console.log(`  Id: ${iterator.emp_id}  Name: ${iterator.emp_name}  Department: ${iterator.emp_dept}`);
}
console.log(" ");
console.log("----------------- Q.2 Ascending order of Emp Department ----------------");
const ascDept = sortMethod1.sort((first,second) => {
    return (first.emp_dept > second.emp_dept ? 1: -1);
});
for (const iterator of ascDept) {
    console.log(`  Id: ${iterator.emp_id}  Department: ${iterator.emp_dept}  Company: ${iterator.emp_company}`);
}
console.log(" ");
console.log("----------------- Q.3 Descending order of Emp Salary ----------------");
const descSalary = sortMethod1.sort((first,second) => {
    return (first.emp_salary > second.emp_salary ? -1: 1);
});
for (const iterator of descSalary) {
    console.log(`    Name: ${iterator.emp_name}  Salary: ${iterator.emp_salary}  Company: ${iterator.emp_company}`);
}
console.log(" ");
console.log("----------------- Q.4 Ascending order of Emp Company ----------------");
const ascCompany = sortMethod1.sort((first,second) => {
    return (first.emp_company > second.emp_company ? 1: -1);
});
for (const iterator of ascCompany) {
    console.log(`   Company: ${iterator.emp_company}   Id: ${iterator.emp_id}   Name: ${iterator.emp_name}  Salary: ${iterator.emp_salary}   Dept: ${iterator.emp_dept}`);
}