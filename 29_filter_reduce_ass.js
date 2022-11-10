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
const array_emps = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];
console.log("");
console.log("------------------------- Suhas Lawate ----------------------------");
console.log("");
console.log("------------------ 5-Nov-2022 Assignment No.8 ---------------------");
console.log("");
console.log("------------------ Q.1 Employees from Wipro company --------------------");
const wiproEmps = array_emps.filter((element)=>{
    return element.emp_company === "Wipro";
});
console.log(`  [ emp_id: ${wiproEmps[0].emp_id}, emp_name: ${wiproEmps[0].emp_name}, emp_dept: ${wiproEmps[0].emp_dept}, emp_salary: ${wiproEmps[0].emp_salary}, emp_company: ${wiproEmps[0].emp_company} ]`);
console.log(`  [ emp_id: ${wiproEmps[1].emp_id}, emp_name: ${wiproEmps[1].emp_name}, emp_dept: ${wiproEmps[1].emp_dept}, emp_salary: ${wiproEmps[1].emp_salary}, emp_company: ${wiproEmps[1].emp_company} ]`);
console.log("");
console.log("------------------ Q.2 Employees from IT or HR Dept --------------------");
const deptItHr = array_emps.filter((element)=>{
    return (element.emp_dept === "IT"||element.emp_dept === "HR");
});
console.log(`  [ emp_id: ${deptItHr[0].emp_id}, emp_name: ${deptItHr[0].emp_name}, emp_dept: ${deptItHr[0].emp_dept}, emp_salary: ${deptItHr[0].emp_salary}, emp_company: ${deptItHr[0].emp_company} ]`);
console.log(`  [ emp_id: ${deptItHr[1].emp_id}, emp_name: ${deptItHr[1].emp_name}, emp_dept: ${deptItHr[1].emp_dept}, emp_salary: ${deptItHr[1].emp_salary}, emp_company: ${deptItHr[1].emp_company} ]`);
console.log(`  [ emp_id: ${deptItHr[2].emp_id}, emp_name: ${deptItHr[2].emp_name}, emp_dept: ${deptItHr[2].emp_dept}, emp_salary: ${deptItHr[2].emp_salary}, emp_company: ${deptItHr[2].emp_company} ]`);
console.log(`  [ emp_id: ${deptItHr[3].emp_id}, emp_name: ${deptItHr[3].emp_name}, emp_dept: ${deptItHr[3].emp_dept}, emp_salary: ${deptItHr[3].emp_salary}, emp_company: ${deptItHr[3].emp_company} ]`);
console.log(`  [ emp_id: ${deptItHr[4].emp_id}, emp_name: ${deptItHr[4].emp_name}, emp_dept: ${deptItHr[4].emp_dept}, emp_salary: ${deptItHr[4].emp_salary}, emp_company: ${deptItHr[4].emp_company} ]`);
console.log("");
console.log("------------------ Q.3 Employees whose id greater than 50 --------------------");
const idAboveFifty = array_emps.filter((element)=>{
    return element.emp_id > 50;
});

console.log(`  [ emp_id: ${idAboveFifty[0].emp_id}, emp_name: ${idAboveFifty[0].emp_name}, emp_dept: ${idAboveFifty[0].emp_dept}, emp_salary: ${idAboveFifty[0].emp_salary}, emp_company: ${idAboveFifty[0].emp_company} ]`);
console.log(`  [ emp_id: ${idAboveFifty[1].emp_id}, emp_name: ${idAboveFifty[1].emp_name}, emp_dept: ${idAboveFifty[1].emp_dept}, emp_salary: ${idAboveFifty[1].emp_salary}, emp_company: ${idAboveFifty[1].emp_company} ]`);
console.log(`  [ emp_id: ${idAboveFifty[2].emp_id}, emp_name: ${idAboveFifty[2].emp_name}, emp_dept: ${idAboveFifty[2].emp_dept}, emp_salary: ${idAboveFifty[2].emp_salary}, emp_company: ${idAboveFifty[2].emp_company} ]`);
console.log(`  [ emp_id: ${idAboveFifty[3].emp_id}, emp_name: ${idAboveFifty[3].emp_name}, emp_dept: ${idAboveFifty[3].emp_dept}, emp_salary: ${idAboveFifty[3].emp_salary}, emp_company: ${idAboveFifty[3].emp_company} ]`);
console.log(`  [ emp_id: ${idAboveFifty[4].emp_id}, emp_name: ${idAboveFifty[4].emp_name}, emp_dept: ${idAboveFifty[4].emp_dept}, emp_salary: ${idAboveFifty[4].emp_salary}, emp_company: ${idAboveFifty[4].emp_company} ]`);
console.log("");
console.log("------------------ Q.4 Employees whose name starts with 'A' 'V' 'M' --------------------");
const initialAVM = array_emps.filter((element)=>{
    if(element.emp_name.startsWith("A") || element.emp_name.startsWith("V") || element.emp_name.startsWith("M")){
        return element;   
    }
});

console.log(`  [ emp_id: ${initialAVM[0].emp_id}, emp_name: ${initialAVM[0].emp_name}, emp_dept: ${initialAVM[0].emp_dept}, emp_salary: ${initialAVM[0].emp_salary}, emp_company: ${initialAVM[0].emp_company} ]`);
console.log(`  [ emp_id: ${initialAVM[1].emp_id}, emp_name: ${initialAVM[1].emp_name}, emp_dept: ${initialAVM[1].emp_dept}, emp_salary: ${initialAVM[1].emp_salary}, emp_company: ${initialAVM[1].emp_company} ]`);
console.log(`  [ emp_id: ${initialAVM[2].emp_id}, emp_name: ${initialAVM[2].emp_name}, emp_dept: ${initialAVM[2].emp_dept}, emp_salary: ${initialAVM[2].emp_salary}, emp_company: ${initialAVM[2].emp_company} ]`);
console.log(`  [ emp_id: ${initialAVM[3].emp_id}, emp_name: ${initialAVM[3].emp_name}, emp_dept: ${initialAVM[3].emp_dept}, emp_salary: ${initialAVM[3].emp_salary}, emp_company: ${initialAVM[3].emp_company} ]`);
console.log("");
console.log("------------------ Q.5 Average salary of the employees --------------------");

const salarySum = array_emps.reduce((runningTotal,element)=>{
    return runningTotal + element.emp_salary;
},0);
// console.log(salarySum);
let salaryAvg = salarySum / array_emps.length;
console.log(" ",salaryAvg);
console.log("");
console.log("------------------ Q.6 Average salary of IT dept employees --------------------");
const itEmps = array_emps.filter((element)=>{
    if(element.emp_dept === "IT"){
        return element;   
    }
});
const salarySumItEmps = itEmps.reduce((runningTotal,element)=>{
    return runningTotal + element.emp_salary;
},0);
let salaryAvgIt = salarySumItEmps / itEmps.length;
console.log(" ",salaryAvgIt);
