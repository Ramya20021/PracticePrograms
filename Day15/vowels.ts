let str: string = "javascript";

for (let i = 0; i < str.length; i++) {
    if ("aeiou".includes(str[i])) {
        console.log(str[i]);
    }
}