let numbers:number[]=[1,2,3,4]

numbers.push(5,6) // 1 2 3 4 5 6

console.log(numbers)

//Remove the element at index 2 using splice.

numbers.splice(2,1) //[1,2,4,5,6]

console.log(numbers)

//Insert "7" at index 1 using splice.

numbers.splice(1,0,7) //1, 7, 2, 4, 5, 6 

console.log(numbers)

