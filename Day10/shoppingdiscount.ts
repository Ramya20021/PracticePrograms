let purchase:number=1000
if(purchase>=10000)
{
    console.log(" Product has 20% discount")
}
 
else if(purchase>=5000 && purchase<=9999)

{
    console.log("Product has 10% discount")
}

else if(purchase>=1000&&purchase<=4999)
{
    console.log("Product has 5% discount")
}

else if(purchase<1000)
{
    console.log("Produt has No discount")
}