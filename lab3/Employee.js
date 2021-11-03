let Employee = [
    {id: 1, firstName: "Pritesh", lastName: "Patel", email: "pritesh@gmail.com", Salary:5000},
    {id: 2, firstName: "Krish", lastName: "Lee", email: "krish@gmail.com", Salary:4000},
    {id: 3, firstName: "Racks", lastName: "Jacson", email: "racks@gmail.com", Salary:5500},
    {id: 4, firstName: "Denial", lastName: "Roast", email: "denial@gmail.com", Salary:9000}
]
function fullName(){
    var fname ="";
    for(var i =0;i<Employee.length;i++){
        fname += `<br><b>id</b> : ${Employee[i].id} <b>First Name</b> : ${Employee[i].firstName} <b>Last Name</b> : ${Employee[i].lastName} <b>Email</b> : ${Employee[i].email} <b>Salary</b> : ${Employee[i].Salary}`     
    }
    return fname
}
module.exports.fullName = fullName

function names(){
    var eName =[];
    for(var i =0;i<Employee.length;i++){
       eName.push(`${Employee[i].firstName} ${Employee[i].lastName}`);
    }
    return eName.sort()
}

module.exports.names = names


function totalSalary(){
    var total =0;
    for(var i =0;i<Employee.length;i++){

        total += parseInt(Employee[i].Salary)
    }
    return "Total salary:" +total
}
module.exports.totalSalary = totalSalary
// console.log(totalSalary())
