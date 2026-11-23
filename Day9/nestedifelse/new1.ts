let dob: string = "2012-09-10"

let [year, month, day] = dob.split("-").map(Number)

let today = new Date()

let age: number = today.getFullYear() - year

if (
    today.getMonth() + 1 < month ||
    (today.getMonth() + 1 == month && today.getDate() < day)
) {
    age--
}

if (age >= 18) {
    console.log("Person is eligible for voting")
}
else {
    console.log("Person is not eligible for voting")
}