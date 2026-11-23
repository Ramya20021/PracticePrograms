let w:string=""
for(let r:number=1;r<=5;r++)
{
    for(let c:number=5;c>=6-r;c--)
    {
        w+=c +" "
    }

    w+="\n"
}
console.log(w)