
//1. Melakukan Looping Menggunakan While
console.log('LOOPING PERTAMA');
var angka = 2;
while(angka <=20){
    console.log(angka + ' - I Love Coding');
    angka+=2;
}
console.log(' ');

console.log('LOOPING KEDUA');
var angka2 = 20;
while (angka2 >=0) {
    console.log(angka2 + ' - I Love Coding');
    angka2 -= 2;
}


//Melakukan Looping Menggunakan For
console.log('LOOPING PERTAMA');
var num1 = 0;
for(i=1; i<=20; i++){
    num1++;
    console.log(num1 + ' - I Love Coding');
}

console.log('LOOPING KEDUA');
var num2 = 21;
for (i=20; i > 0; i--) {
    num2--;
    console.log(num2 + ' - I Love Coding');
}

//3. Angka Ganjil dan Genap

//ganjil dan genap
var i;
for(i=0; i<50;i++){
    if(i% 2 ==0){
        console.log(i + ' adalah bilangan GENAP')
    }else{ console.log(i + ' adalah bilangan GANJIL');
    }
}

//PERTAMBAHAN 2

for(var j=1; j<=50; j+=2){
    if(j%3==0){
        console.log(j+ ' KELIPATAN 3');}
        else{
            console.log(''); 
        }
    }
//PERTAMBAHAN 5
for (var k = 1; k <=50; k+=5) {
    if (k%6 == 0) {
        console.log(k + ' KELIPATAN 6');
    }
    else {
        console.log('');
    }
}
 //PERTAMBAHAN 9
for (var l = 1; l <= 50; l+=9) {
    if (l%10 == 0) {
        console.log(l + ' KELIPATAN 10');
    } else {
        console.log('');
    }
}

