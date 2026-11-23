let str: string = "javascript";
let count: number = 0;

for (let i = 0; i < str.length; i++) {
    if (!"aeiou".includes(str[i]) && str[i] >= "a" && str[i] <= "z") {
        count++;
    }
}

console.log("Number of consonants:", count);