let a:string="Hello"

let b:string[]=a.split("")

let reverse:string=b.reverse().join("")

if(reverse==a)
{
    console.log("it's a palindrome string ")
}

else
{
    console.log("it's  not a palindrome string")
}