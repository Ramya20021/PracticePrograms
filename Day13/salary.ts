let role:string="Associate"

let basicsalary:number=15000

switch(role)
{
    case "manager":console.log(basicsalary*5)
                   break;

    case "tl":console.log(basicsalary*4)
              break;

    case "sranalyst":console.log(basicsalary*3)
                     break;
    case "Analyst"  :console.log(basicsalary*2)
                     break;

    case "Associate":console.log(basicsalary)
                     break;
}