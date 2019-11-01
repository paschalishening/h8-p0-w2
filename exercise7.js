
//1. BARISAN BINTANG;
for(var a=0; a<5; a++)
{
    console.log('*');
}
console.log('\n');

//2. Bintang PERSEGI PANJANG
var rows = 5;
for(var i=1;i<=rows;i++){
    var rectangle="";
    for(var j=1;j<=rows;j++)
    {
        rectangle+='*';
    }
    console.log(rectangle);
}
console.log('\n');



//3 BINTANG SEGITIGA 
var a="";
for(var k=0; k<5;k++){
    a += '*';
    console.log(a);
}