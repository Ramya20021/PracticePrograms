let n:number=13
let count:number=0

if(n>1)
{
    for(let i:number=1;i<=n;i++)
    {
        if(n%i==0)
        {
            count++
        }
    }

    if(count==2)
    {
        console.log("Prime Number")
    }
    else
    {
        console.log("Not a prime number")
    }
}

else{
    console.log("Its not a prime number")
}