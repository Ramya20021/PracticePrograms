let w: string = "";

for (let r: number = 1; r <= 5; r++) {
    for (let c: number = 1; c <= 5; c++) {

        if (r == 1 || r == 5 || c == 1 || c == 5) {
            w += "* ";
        }
        else {
            w += "  ";
        }
    }
    w += "\n";
}

console.log(w);