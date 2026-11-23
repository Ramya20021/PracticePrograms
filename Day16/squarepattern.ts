let w:string=""

for(let r:number=1;r<=5;r++)
{
    for(let c:number=1;c<=5;c++)
    {
        w+="*"+" "
    }

    w+="\n"
}
console.log(w)