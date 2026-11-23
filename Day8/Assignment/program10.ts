let a: number[] = [99, 60, 70, 90,80,102]

let maximum: number = a[0];
let secondlargestnumber: number = a[0];

for (let i = 1; i < a.length; i++) {

    if (a[i] > maximum) {

        secondlargestnumber = maximum;
        maximum = a[i];

    }

    else if (a[i] > secondlargestnumber && a[i] < maximum) {

        secondlargestnumber = a[i];

    }
}

console.log("The Largest number is: " + maximum);
console.log("The second largest number is: " + secondlargestnumber);