let type:string="car"
let emission:string="clean"
let registrationfee:number=0

if(type=="car"&&emission=="clean")
{
    registrationfee=5000
    console.log("The vehicle registration fee for car is:"+registrationfee)
}
else if(type=="car"&&emission=="high")
{
    registrationfee=10000
    console.log("The vehicle registration fee for car is:"+registrationfee)
}

else if(type=="truck"&&emission=="clean")
{
    registrationfee=4000
    console.log("The vehicle registration fee for truck is:"+registrationfee)
}
else if(type=="truck"&&emission=="high")
{
    registrationfee=8000
    console.log("The vehicle registration fee for truck is:"+registrationfee)
}
else{
    console.log("Invalid vehicle type or emission status")
}