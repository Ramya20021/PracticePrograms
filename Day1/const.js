const institute="Vcube"

console.log(institute)

//institute="Qedge" //reassigning Qedge to institute ----> TypeError: Assignment to constant variable.

//console.log(institute)

//const institute="NareshTechnologies" // redeclaring Naresh technologies to institute -----> SyntaxError: Identifier 'institute' has already been declared

//console.log(institute)

{
    console.log(institute)   // we are accessing outside data into the block

    const institutes="Vcube and Qedge"

    console.log(institutes) // we are accessing inside data into inside block
}

console.log(institutes) //we are accessing  inside data into, outside of the block--->ReferenceError: institutes is not defined