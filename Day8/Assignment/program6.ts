let a:string[]=["abc","cde","efg","hij"]
let b:string[]=a.map(h=>h+"k")
console.log(b)
let c:string[]=b.filter((b)=>b=="efgk")
console.log(c)