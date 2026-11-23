let age:number=25
let income:number=40000
if(age>=18 && income>=40000)
{
    console.log("You are eligible for credit card"+age+" "+income)
}
else if(age>=18 && income<40000)
{
   console.log("You are income is too low  for credit card"+income)
}
else if(age<18)
{
    console.log("Your are underage")
}