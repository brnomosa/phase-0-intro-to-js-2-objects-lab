// Write your solution in this file!

const employee ={
    name: "George",
    streetAddress : "430 mainc street"
}

function updateEmployeeWithKeyAndValue(employee, key, value){
const updateEmployee = {...employee};
updateEmployee[key] =value;
return updateEmployee;
}
const updateEmployee = updateEmployeeWithKeyAndValue(employee, "streetAddress", "432 town street");

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const deleteEmployee = {...employee};
    delete deleteEmployee[key];
    return deleteEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key];
    return employee;
}



