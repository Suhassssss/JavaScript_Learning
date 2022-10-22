const array_nums = [20,3,4,56,90,400,49];
const array_nums_clone = array_nums;
console.log("Que.1.____________________Shallow_Clone_______________________________");
console.log(" ");
console.log("------------------ Original Array 1 ------------------------");
console.log(array_nums);
console.log("------------------ Original Array 2 ------------------------");
console.log(array_nums_clone);
array_nums_clone.push(55,66);
// array_nums_clone.push(66);
console.log("------------------ Cloned Array 1 ------------------------");
console.log(array_nums);
console.log("------------------ Cloned Array 2 ------------------------");
console.log(array_nums_clone);
console.log(" ");
console.log("Que.2.____________________Deep_Clone_______________________________");
console.log(" ");
const array_nums_clone2 = [...array_nums];
console.log("------------------ Original Array 1 ------------------------");
console.log(array_nums);
console.log("------------------ Original Array 2 ------------------------");
console.log(array_nums_clone2);
array_nums.push(10,25);
console.log("------------------ Cloned Array 1 ------------------------");
console.log(array_nums);
console.log("------------------ Cloned Array 2 ------------------------");
console.log(array_nums_clone2);
console.log(" ");
console.log("Que.3.__________________Array_Concat_using_Spread_operator______________________");
let array_even = [2,30,14,8];
console.log("-------------------- array_even ----------------------------------------------");
console.log(array_even);
array_even = [...array_even, ...array_nums];
console.log("-------------------- array_even_after_merge_with_array_nums --------------------");
console.log(array_even);
console.log(" ");
console.log("Que.4.____________________employee_info_______________________");
const employee_info = {
    emp_id: 27,
    emp_name: "John Doe",
    salary: {
        july_month: "40,0000INR",
        aug_month: "50,0000INR",
        june_month: "65,0000INR"
    },
    address: {
        locality: {
            colony: "OM Vrindavan Society",
            street: "Kanch Pokli, 431202",
        },
        city: "Mumbai",
        state: "Maharashtra",
        country: "India"
    },
    mobiles: ["+91 8600 3456 88", "1800- 4567 32", "+91- 9096 5678 77"]
}
// console.log(employee_info);
console.log(" ");
console.log("Que.5.a.____________________ Employee Address _______________________");
console.log(employee_info.address);
console.log("Que.5.b._________________ Employee Mobile Numbers ___________________");
console.log(employee_info.mobiles);
console.log(" ");
console.log("Que.6._________________ deep clone using ...operator ___________________");
let employee_clone = {...employee_info};
// console.log("--------------- Cloned Employee object ----------------");
// console.log(employee_clone);
console.log("------- 6.a update street -------");
employee_clone.address.locality.street = "Chinch Pokli, 431202";
console.log(employee_clone.address);
console.log("------- 6.b update first mobile number -------");
employee_clone.mobiles[0] = "+91 7030 889 775";
console.log(employee_clone.mobiles);
console.log("------- 6.c Oringinal Employee Object -------");
console.log(employee_info);
console.log("------- 6.c Cloned Employee Object -------");
console.log(employee_clone);
console.log("------------ 6.d issue -------------");
console.log("Issue: After update value of street & mobiles property in cloned object");
console.log("       its changing in original object also...");
console.log(" ");
console.log("Que.7_________________ deep clone using JSON.stringify() ___________________");
let employee_clone2 = JSON.parse(JSON.stringify(employee_info));
console.log("------------- july_month salary and country of Original object -------------");
console.log(employee_info.salary);
console.log(employee_info.address);
console.log("------------- july_month salary and country of cloned object -------------");
employee_clone2.salary.july_month = "80,000INR";
console.log(employee_clone2.salary);
employee_clone2.address.country = "United Kingdom";
console.log(employee_clone2.address);