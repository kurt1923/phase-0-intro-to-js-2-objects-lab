const employee = {
    name: "Kurt Vermillion",
    streetAddress: "122 Fort Wayne Ct."
}
const newEmployee ={
    ...employee,
    name: 'Sam',
    streetAddress: '11 Broadway'}
function updateEmployeeWithKeyAndValue(employee){
    return newEmployee
}
function destructivelyUpdateEmployeeWithKeyAndValue(newEmployee){
    delete newEmployee[1];
    newEmployee.streetAddress = '12 Broadway';        
    return newEmployee
}
function deleteFromEmployeeByKey(newEmployee){
    delete employee['name', 'streetAddress']
    return newEmployee
}
