let attendence:number=80
let internalmarks:number=20
let assignment:string="completed"

if(attendence>=75&&internalmarks>=20&&assignment=="completed")
{
    console.log("Eligible for examination.")
}
else{
    console.log("Not eligible due to attendance.")
    console.log("Not eligible due to marks.")
    console.log("Not eligible due to assignments.")
}