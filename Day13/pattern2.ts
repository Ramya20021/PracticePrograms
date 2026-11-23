let w:string=""
for(let r:number=10;r>=1;r--)
{
    for(let c:number=r;c>=1;c--)
    {
        w+=c
    }

    w+="\n"
}
console.log(w)