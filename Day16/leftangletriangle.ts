let w:string=""

for(let r:number=1;r<=5;r++)
{
    for(let s:number=1;s<=5-r;s++)
    {
        w+=" "
    }

    for(let c:number=1;c<=r;c++)
    {
      w+="*"
    }

    w+="\n"
}
console.log(w)

