console.log("Que.1_Function_with_no_argument_and_no_return_type");
function student() {
    var name = "Suhas Lawate", course = "Angular Developer", city = "Sangola";
    console.log("=====_Student_Info_=====");
    console.log("Name: ",name);
    console.log("City: ",city);
    console.log("Course: ",course);
}
student();
function employee() {
    var emp_id = 1, name = "Mohit Sharma", job_role = "Java Developer", location = "Pune";
    console.log("=====_Employee_Info_=====");
    console.log("Employee Id: ",emp_id);
    console.log("Employee Name: ",name);
    console.log("Job role: ",job_role);
    console.log("location: ",location);
}
employee();
function name(firstName, lastName) {
    console.log("=====================================");
    console.log("Que.2_Concat_function_arguments");
    console.log(firstName+lastName);
}
name("Suhas"," Lawate");
    console.log("=====================================");
    console.log("Que.3_Swap_values_using_function_with_arguments");
function swap_values(val1, val2) {
    var temp;
    console.log("Values_before_swapping");
    console.log(val1, val2);
    temp = val1;
    val1 = val2;
    val2 = temp;
    console.log("Values_after_swapping");
    console.log(val1, val2);
}
swap_values("Virat", "Anushka");
console.log("-------------------------------");
swap_values(1000, 2000);
    console.log("=====================================");
    console.log("Que.4_return_the_addition");
function add_three_numbers(val1, val2, val3) {
    return val1 + val2 + val3;
}
console.log(add_three_numbers(10.23, 600, 40));
console.log(add_three_numbers("Hello"," Good"," Morning"));