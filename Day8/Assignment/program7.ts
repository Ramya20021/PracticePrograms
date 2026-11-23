let a:number[]=[10,30,40,50,60,90]
let b:number[]=a.reduce((sum,value)=>
    {

    return sum+value
});

console.log(b)