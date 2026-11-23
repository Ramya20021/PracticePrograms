let w:string=""
for(let r:number=5;r>=1;r--)
{
    for(let c:number=r;c>=1;c--)
    {
        w+="*"
    }

    w+="\n"
}
console.log(w)