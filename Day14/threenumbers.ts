// let a:number=7
// let b:number=2
// let c:number=10
// let temp

// if(a>b)
// {
//   temp=a
//   a=b
//   b=temp
// }

// if(b<c)
// {
//     temp=b
//     b=c
//     c=temp
// }

// if(b>a)
// {
//     temp=b
//     b=a
//     a=temp
// }
// if(b<c)
// {
//  temp=b
//  b=c
//  c=temp
// }

// console.log(a,b,c)


let a: number = 7;
let b: number = 2;
let c: number = 10;
let temp: number;

if (a < b) {
    temp = a;
    a = b;
    b = temp;
}

if (a < c) {
    temp = a;
    a = c;
    c = temp;
}

if (b < c) {
    temp = b;
    b = c;
    c = temp;
}

console.log(a, b, c);