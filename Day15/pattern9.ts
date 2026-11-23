let w: string = "";
let num: number = 1;
let alpha: number = 65;

for (let r: number = 1; r <= 4; r++) {
    for (let c: number = 1; c <= 5; c++) {

        if (c % 2 != 0) {
            w += num + " ";
            num++;
        }
        else {
            w += String.fromCharCode(alpha) + " ";
            alpha++;
        }
    }

    w += "\n";
}

console.log(w);