let age:number=12

if(age >=18)
{
    console.log("Eligible to apply for a licence for eligible non-transport vehicles, subject to requirements.")
}

else if(age>=16 && age <= 17)
{
    console.log("Eligible only for a learner's licence for an eligible vehicle category, subject to applicable rules.")
}

else
{
    console.log("Not eligible for a driving licence.")
}