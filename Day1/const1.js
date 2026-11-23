const name="Tom"
console.log(name)

//name="Raju"

//console.log(name) //TypeError: Assignment to constant variable.

//const name="Rajashekhar"

//console.log(name) //SyntaxError: Identifier 'name' has already been declared

{
    console.log(name) 

    let idname="Rajashekhar"

    console.log(idname)
}

console.log(idname) // ReferenceError: idname is not defined