let marks:number=50

if( marks <= 100 && marks >= 85)
{
    console.log("Grade A")
}

else if(marks <= 84 && marks >=70)
{
    console.log("Grade B")
}

else if(marks > 50 && marks < 70)
{
    console.log("Grade C")
}

else if( marks <= 50 && marks>=35)
{
    console.log("Grade D")
}

else{
    console.log("Grade F")
}