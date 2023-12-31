

// let result = 5 =='5' ;
// document.writeln('<p>' + result + '</p>');

// result = 5 ==='5' ;
// document.writeln('<p>' + result + '</p>');

// resul = 5 > 10;
// document.writeln('<p>' + result + '</p>');


//OPERATOR//


// const nilaiUjian = 80;
// const nilaiAbsensi = 90;

// const nilaiKelulusanUjian = nilaiUjian > 75 ;
// const nilaiKelulusanAbsensi = nilaiUjian > 75 ;

// const lulus = nilaiKelulusanUjian && nilaiKelulusanAbsensi;

// document.writeln('maka dengan nilai ini : ' + lulus + '\ndengan nilai berikut' );

//CONSOLOG/

// console.info('jangan ragu kawan');

//KODE EXPRESSION DI STRING TAMPLATE

// const nama = 'saifuddin ';
// const name1= 'kurnia';
// const name2 = 'rohibul';
// const name3 = 'afthoni';
// const name4 = 'amir';
// const name5 = 'ikhsan';

// const tamplate = `name = ${nama} ${name1} ${name2} ${name3} ${name4} ${name5}`;

// console.log(tamplate);


// const namaSiswa = 'kunia';
// const nilaiUjianSiswa = 90;

// const hasilDariBelajar=`Nama: = ${namaSiswa} \nLulus: ${nilaiUjianSiswa > 60}`;

// console.info(hasilDariBelajar);

// const multiString = `Nama saya Saifuddin\, saya berasal dari Kampar dan saya seandg belajar \njavascript`;

// document.write('<br>');
// document.write(multiString);
// document.write('<br>');


//KONVERSI STRING DAN NUMBER
// const value1 = parseInt(1);
// const value = 1;
// const sum = value1 + value;

// document.writeln(sum);



// document.writeln(`<p>${parseInt('1.1')}</p>`);
// document.writeln(`<p>${parseFloat('1.1')}</p>`);
// document.writeln(`<p>${Number('1.1')}</p>`);

// document.writeln(`<p>${parseInt('salah')}</p>`);
// document.writeln(`<p>${parseFloat('1.1')}</p>`);
// document.writeln(`<p>${Number('1.1salah')}</p>`);

//tipe data aray

// const namaOrang =['udin', 'munir' , 'bidin'];


// namaOrang.push('zainel', 'supri', 'zainal');
// delete namaOrang[1];
// namaOrang [1]='ubah nama saya';


// console.table(namaOrang);


//TIPE DATA OBJECT//



// const news = {
//     'Nama': 'nurdin entop',
//     'Tempat tanggal lahir': 'Aceh, 21 jahuari 1982',
//     alamat: 'jalan setia budi no 23',
//     hobby : 'jalan-jalan'
// };

// console.info('nama : ${news.nama');
// console.info('Tempat tanggal lahir : ${news[Tempat tanggal lahir]}');
// console.info('alamat : ${news.alamat}');
// console.info('hobby : ${news.hobby}');
// console.table(news);

// const exsple = 60;
// if(exsple > 80){
//     document.writeln('<p>god job</p>')
// }else if(exsple > 70){
//     document.writeln('<p>gaus</p>')
// }else{
//     document.writeln('<p>coba lagi tahun depan</p>')
// };

// const p =prompt('apa anda yankin untuk masuk di halaman ini?');
// if(p){
//     const namaAda = prompt('siapa nama anda?')

//     alert(`hello ${namaAda}`);
// }else{
//     alert('bye bye');
// };

// let name = 'eko';
// if(name === undefined){
//     console.log('undefined');
// }else{
//     console.log('defined');
// }

// const namaKu = ['agung', 'ujang'];
// if(namaKu[2] === undefined){
//     console.info('ARRAY UNDIFINED');
// }else{
//     console.info('ARRAY UNDIFINED');
// };

// const people= {
//     name: 'eko'
// };

// if(people.name === undefined){
//     console.log('OBJECT UNDEFINED');
// }else{
//     console.log('OBJECT DEFINED');
// };


// let firstName = 'udin';
// if (firstName === 'UNDIFINED'){
//     console.log('HELLO UNDEFINED');
// }else if( firstName === null){
//     console.log('hello null');
// }else{
//     console.log(`Hello ${firstName}`)
// };

// const nilai = '';

// switch(nilai){
//     case 'A':
//         document.writeln('Anda Lulus dengan nilai yang sangat baik')
//         break;
//     case'B':
//     case'C':
//         document.writeln('Anda Lulus')
//         break;
//     case'D':
//         document.writeln('Maaf Anda tidak Lulus')
//         break;
//     default:
//         document.writeln('Maaf mungkin anda salah jurusan')
//         break;
// };

// const body = document.getElementsByClassName('.hello');
// document.body.style.color= 'orange';
// document.body.style.alignItems= 'center';


// let data = true;
// const typeData= typeof data;
// document.writeln(`${typeData}`);


//KODE IN OPERATOR
// const kodeIn = {
//     firstName :'saifuddin',
//     lastName  : 'udin'
// }
// if ('lastName'in kodeIn) {
//     alert(`Hello ${kodeIn.lastName}`);
// }else{
//     alert('Hello');
// }

// const studen = {
//     firstName :' jaguar',
//     midleName : undefined,
//     lastName : 'mantap'
// }
// if ('midleName'in studen) {
//     alert(`Hello ${studen.midleName}`);
// }else{
//     alert('Hello');
// }

// const value = 65;
// let ucapan;

// if(value >= 70){
//     ucapan='selamat anda mendapatkan nilai yang bagus';
// }else{
//     ucapan = ' coba lagi!'
// }
// document.writeln(`${ucapan}`)

// const ucapan = value >= 70 ? 'selamat nilai anda bagus': 'silahkan coba lagi';
// document.writeln(`${ucapan}`)

// let parameter= 'usin';
// let data = parameter;
// if(data === undefined || data === null){
//     data = 'nilai defaoult';
// }
// document.writeln(`${data}`);

// data = parameter ?? 'nilai defoult';
// document.writeln(`<p>${data}</P>`);

// const person ={
//     address:{
//         country: 'aku pasti bisa!'
//     }
// };
// let country = person?.address?.country;

// document.writeln('semangat untuk belajar! ')
// document.writeln(`<p>${country}</P> `)
// document.writeln('semangat untuk belajar!<br> ')

// const data= NaN;

// if(data){
//     document.writeln('true')
// }else{
//     document.writeln('false')
// };

// console.log('hello'|| '');
// console.log(''|| []);
// console.log('0'|| 'NOL');
// console.log(null|| 'NULL');
// console.log(undefined|| 'UNDEFINED');
// console.log(0|| false);

// const personal ={
//     firstName : 'setia',
//     lastName: 'Budi'
// }
// const name = personal.firstName || personal.lastName;
// console.log(name);



// console.log('hello'&& '');
// console.log(''&& []);
// console.log('0' && 'NOL');
// console.log(null&& 'UNDEFINED');
// console.log(undefined && 'NULL');
// console.log(0 && false);

//for loop

// for (let container = 1;container<=10; container++){
//     document.writeln(`<p> perulangan ke : ${container}</p>`);
    
// }
// let udin = 1;

// // do loop
// do{
//     document.writeln(`<p> perulangan ke : ${udin}</p>`);
//     udin++;
// }
// while(udin <= 10)


//do while loop
// let jaguar = 1;
// while(true){
//     document.writeln(`<p> perulangan ke : ${jaguar}</p>`);
//     jaguar++;
//     if (jaguar > 2) {
//         break;
//     }
// }

// for (let i = 1; i <= 100; i++){
//     if (i % 2 === 0) {
//         continue;
//     }
    
//     document.writeln(`<p> perulangan ke : ${i}</p>`);
// };

//Label

// loopi:
// for (let i = 0; i < 10; i++) {
//     loopj:
//     for (let j = 0; j < 100; j++) {
//         if(j > 10){
//             continue loopi;
//         }
//         console.info(`${i}`-`${j}`)
        
//     }
    
// }

//For In

const people = {
    firsttName: 'kurniawan',
    middleName: 'setiawan',
    lastName: 'jaguar',
};

for(const property in people ){
    document.writeln(`<p>${property}: ${people[property]}</p>`);
};

const cawapres = [' ujang', ' munir', ' surya', ' anis', ' probowo',' ganjar'];
for( const index in cawapres){
    document.writeln(`<p>${index}:${cawapres[index]}</P>`)
}

//for of
const desa = ['mangga', 'durian', 'anggur','matoa'];
for( const buah of desa){
    document.writeln(`<p>${buah}</P>`)
}

const fullName = 'anak presiden pengen jadi wakil presiden';
for( const carakter of fullName){
    document.writeln(`<p>${carakter}</P>`)
}
