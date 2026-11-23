let age:number=21
let salary:number=250
let creditscore:number=700

if(age>=21&&salary>=25000&&creditscore>=700)
{
    console.log("Eligible for loan")
}
else if(age < 21)
{
    console.log("Age less than 21, Not eligible for loan")
}

else if(salary<25000)
{
    console.log("Salary less than 25000, Not eligible for loan")
}

else if(creditscore<700)
{
     console.log("credit score less than 700, Not eligible for loan")
}

console.log("Display the purchase amount, discount and final amount.")