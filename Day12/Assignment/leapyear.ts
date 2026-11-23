let year:number=2023

if(year%400==0 || (year%4==0&&year%100!=0))
{
    console.log("year is a leap year : "+year)
}
else
{
    console.log("Not a leap year : "+year)
}
