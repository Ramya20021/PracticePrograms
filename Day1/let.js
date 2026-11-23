let id=281       //assigning 281 to id
console.log(id) 

id=289            // reassigning 289 to id
console.log(id) 
 
//let id=261 ////we are redeclaring  261 to id ---->SyntaxError: Identifier 'id' has already been declared
//console.log(id) 

{
    console.log(id) // we are accessing outside data into the block

    let ids=276275

    console.log(ids) // we are accessing inside data into inside block
}

console.log(ids) //we are accesing inside data , outside of the block  ----> ReferenceError: ids is not defined