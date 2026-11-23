let add:string="add"
let sub:string="sub"
let mul:string="mul"
let div:string="div"
let b:number=20
let c:number=30
let d;
switch("sub")
{
    case "add": d=b+c
                console.log(d)
                break;

    case "sub": d=b-c
                console.log(d)
                break;

    case "mul": d=b*c
                console.log(d)
                break;

    case "div":d=b/c
               console.log(d)
               break;              
               
}