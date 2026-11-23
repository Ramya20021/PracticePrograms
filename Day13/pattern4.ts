let w: string = "";

for(let r: number = 1; r <= 5; r++)
{
    for(let c: number = 1; c <= 10; c++)
    {
        if((r + c) % 2 == 0)
        {
            w += "1 ";
        }
        else
        {
            w += "0 ";
        }
    }

    w += "\n";
}

console.log(w);