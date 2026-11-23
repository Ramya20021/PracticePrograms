interface employee{

    empid:number
    empname:string
    empsalary:number
    empdepartment:string
}

let emp:employee=
{
   empid:16,
   empname:"Abc",
   empsalary:20000,
   empdepartment:"QA"

}

console.log(emp) // printing all the data in object
console.log(emp.empname) // print only empname data
delete emp.empid   //deletes the empid
emp.empsalary=30000 //updated the emp oject data
console.log(emp)  //after updating data printed

for( let r in emp) 
{
   //console.log(r) // printing individual data

   console.log(r+":"+emp[r]) // printing keys and values in object
}


