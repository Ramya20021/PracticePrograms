let originalsalary:number=60000

let bonus:number=0


if(originalsalary>=60000)
{
    bonus=originalsalary*15/100
    console.log("Product has 15% bonus")
}
else if(originalsalary>=40000&&originalsalary<=59999)
{
     bonus=originalsalary*10/100
    console.log("Product has 10% bonus")
}
else if(originalsalary>=20000&&originalsalary<=39999)
{
     bonus=originalsalary*5/100
    console.log("Product has 5% bonus")
}
else if(originalsalary < 20000)
{
     bonus=0
    console.log("Product has No bonus")
}

let finalsalary:number=originalsalary+bonus

console.log("Original salary : "+originalsalary)

console.log("bonus : " +bonus)

console.log("Final salary : "+finalsalary)