let destination:string="Goa"
let budget:number=30000
let travel:string;
let accommodation:string

if(destination=="Goa"&&budget>=30000)
{
    travel="flight"
    accommodation="Novotel"
    console.log("The travel option is : "+travel)
    console.log("The accomodation option is : "+accommodation)
}

else if(destination=="Goa"&&budget<30000)
{
    travel="bus"
    accommodation="Babai Hotel"
    console.log("The travel option is : "+travel)
    console.log("The accomodation option is : "+accommodation)
}
else{
    console.log("No travel and No accomodation")
}

