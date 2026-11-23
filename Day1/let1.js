let name="John"
console.log(name)

name="Amar"

console.log(name)

//let name="Anil"

//console.log(name) //---->SyntaxError: Identifier 'name' has already been declared

{
    console.log(name)

    let profilename="anilamar"

    console.log(profilename)
}

console.log(profilename) //---->ReferenceError: profilename is not defined