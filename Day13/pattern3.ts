let w:string=""
let l:number=1
for(let r:number=1;r<=5;r++)
{
    for(let c:number=1;c<=r;c++)
    {
        w+=l+" "
        l++;
    }

    w+="\n" 
}
console.log(w)