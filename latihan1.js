var nama = 'Mikael';
var peran = ('Ksatria', 'Tabib', 'Penyihir');

// Output untuk Input nama = mikael dan peran =''
if(nama === 'Mikael' && peran === ''){
    console.log('Halo Mikael, Pilih peranmu untuk memulai game!');
}
//output untuk input nama 'danu', dan peran ' tabib'
else if(nama ==='Nina' && peran ==='Ksatria'){
    console.log('Selamat datang di Dunia Proxytia, Nina');
    console.log('Halo tabib Danu, kamu akan membantu temanmu yang terluka');
}
//nama = zero, peran = penyihir
else if(nama ==='Zero' && peran === 'Penyihir'){
    console.log('Selamat datang di Dunia Proxytia, Zero');
    console.log('Halo Penyihir Zero, Ciptakan keajaiban yang membantu kemenanganmu!');
}
//nama dan peran kosong
    else{
        console.log('Nama Harus diisi');
    }

