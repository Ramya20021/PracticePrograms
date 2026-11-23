let w:string=""
for(let r:number=10;r>=1;r--)
{
   for(let c:number=10;c>=11-r;c--)
   {
    w+=c
   }
   w+="\n"

}
console.log(w)
