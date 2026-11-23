var fruit="Mango"  // we are assigning mango to fruit
console.log(fruit)
 
fruit="Banana"     // reassigning Banana to fruit
console.log(fruit)

var fruit="Orange and Papaya" // redeclaring orange and papaya to fruit

console.log(fruit)

{
    console.log(fruit) // we are accessing outside data into the block

    var count=4

    console.log(count) // we are accessing inside data into the inside block
}

console.log(count) // we are accessing inside data into outside block