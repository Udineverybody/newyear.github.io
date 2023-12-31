


let tanya = true;

while (tanya){

    // Menangkap pilihan pemain
    var p = prompt('pilih : gajah, orang , semut');

    // menangkap pilihan computar

    // memntukan bilangan random
    var comp = Math.random();

    if ( comp < 0.34) {
        comp = 'gajah';

    } else if( comp >= 0.34 && comp < 0.67){
        comp = 'orang';

    } else{
        comp = 'semut';
    }

    var hasil ='';

    // menentukan rules

    if ( p == comp){
        comp = 'SERI!';

    }else if( p == ' gajah'){

        hasil = ( comp == 'orang') ? ' MENANG!' : 'KALAH!';

    } else if (p == 'orang') {

        hasil = ( comp == 'gajah')? 'KALAH!': 'MENANG!';

    }else if (p == 'semut') {

        hasil = ( comp == 'orang')? 'KALAH!': 'MENANG!';

    } else{

        hasil = 'Memasukan pilihan yang salah!';
    }

    // menapilkan hasil

    alert(' Kamu memilih ' + p +   '  dan Computer memilih  '  + comp +  ' \nMaka hasilnya : kamu '   + hasil);

    tanya = confirm('lagi?');
}

alert('Terima kasih sudah bermain!')
