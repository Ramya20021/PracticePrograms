let performance:string="Average"
let experience:number=0
let bonus=0

if(performance=="Excellent" && (experience>=9 || experience<9))

{
    bonus=20000
    bonus=bonus+5000
     console.log(bonus)

}
else if(performance=="Good" && (experience>=4|| experience<4))
{
    bonus=15000
    bonus=bonus+3000
     console.log(bonus)
}

else if(performance=="Average" && (experience>=1 || experience<1))
{
    bonus=10000
    bonus=bonus+1000
    console.log(bonus)
}

else {
    console.log("Invalid performance rating");
}

console.log("Total Bonus:", bonus);