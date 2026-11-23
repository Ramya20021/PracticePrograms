let n:number=4
let count:number=0

if(n>1)
{
    for(let i:number=1;i<=n;i++)
    {
        if(n%i==0)
        {
            count++;
        }
    }

    if(count==2)
    {
        console.log(n+" is a prime number")

    }
    else{
        console.log(n+" is not a prime number")
    }
}

else
{
    console.log(n+" is not a prime number")
}