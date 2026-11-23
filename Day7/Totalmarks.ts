function func1(Telugu:number,English:number,Hindi:number):number{

    let marks1:number=Telugu+English+Hindi

    return marks1
}

function func2(Maths:number,Science:number,Social:number):number{
     
    let marks2:number=Maths+Science+Social

    return marks2

}

let totalmarks:number = func1(50,80,90) + func2(80,70,60)

console.log("Total marks are:",totalmarks)

