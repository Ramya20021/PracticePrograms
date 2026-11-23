
let performance: string = "Excellent";
let experience: number = 6;
let bonus: number = 0;

if (performance == "Excellent" && experience >= 9) {
    bonus = 25000;
}
else if (performance == "Excellent" && experience < 9) {
    bonus = 22000;
}
else if (performance == "Good" && experience >= 4) {
    bonus = 18000;
}
else if (performance == "Good" && experience < 4) {
    bonus = 16000;
}
else if (performance == "Average" && experience >= 1) {
    bonus = 11000;
}
else if (performance == "Average" && experience < 1) {
    bonus = 10000;
}
else {
    console.log("Invalid performance rating");
}

console.log("Total Bonus:", bonus);