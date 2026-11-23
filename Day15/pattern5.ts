let w:string=""
for(let r:number=1;r<=5;r++)
{
    for(let c:number=r;c>=1;c--)
    {
        w+=c+" "
    }

    w+="\n"
}
console.log(w)


