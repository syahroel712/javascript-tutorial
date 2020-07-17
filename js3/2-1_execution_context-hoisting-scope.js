// 2.1 EXECUTION CONTEXT, HOISTING & SCOPE

// console.log(nama);
// var nama = 'ani';

// creation phase pada global context
// js akan cek apakah ada variabel/function dlm codingnya
// kalau ada , js akan membuat nama variabelnya dan diisi dengan undefined
// kalau ada function akan diisi dengan function itu sendri
// konsep diatas di namakan hoisting/menaikkan/pengangkatan 
// selain itu, js mendefinisikan object window sebagai global object 
// dan js mendefinikan this sebagai window

// execution phase
// js akan eksekusi dari atas ke bawah


// var nama = 'andi';
// var umur = 10;

// console.log(sayHello());

// function sayHello() {
//     return 'halo, nama saya ' + nama + ' umur ' + umur;
// }

// function membuat local execution context
// yg didalmnya terdapat creation dan execution phase
// local execution juga bisa akses object window
// local execution juga bisa akses object arguments
// dan juga ada hoisting terhadap variabel dan function



// contoh kasus
var nama = 'syahrul';
var username = 'syahroel_712';

function cetakUrl1(username) {
    var instagramURL = 'https://instagram.com/';
    return instagramURL + username;
}
console.log(cetakUrl1(username));


function cetakUrl2(username) {
    var instagramURL = 'https://instagram.com/';
    return instagramURL + username;
}
console.log(cetakUrl2('dod_'));

function cetakUrl3() {
    var instagramURL = 'https://instagram.com/';
    return instagramURL + username;
}
console.log(cetakUrl3('ddod_'));


// contoh kasus
// function a() {
//     console.log('ini a');

//     function b() {
//         console.log('ini b');

//         function c() {
//             console.log('ini c')
//         }
//         c();
//     }
//     b();
// }
// a();














// js visualisation